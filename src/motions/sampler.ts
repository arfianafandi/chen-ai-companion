import * as THREE from 'three';
import type {
  IVmdStructuredMotion,
  IVmdBoneKeyframe,
  IVmdMorphKeyframe,
} from './types';

export interface PlaybackOptions {
  loop?: boolean;
  blendDuration?: number;   // Crossfade in seconds (default 0.45s)
  allowLookAt?: boolean;     // Keep cursor look-at eye tracking active on head/neck (default true)
  speed?: number;           // Playback speed multiplier (default 1.0)
  onComplete?: () => void;
}

interface BoneCache {
  bone: THREE.Bone;
  restPosition: THREE.Vector3;
  restQuaternion: THREE.Quaternion;
  startPosition: THREE.Vector3;
  startQuaternion: THREE.Quaternion;
  exitPosition: THREE.Vector3;
  exitQuaternion: THREE.Quaternion;
  isHeadOrNeck: boolean;
}

// Ken Perlin's quintic smootherstep (zero 1st & 2nd derivative at ends -> zero jerk / snap)
function smootherstep(x: number): number {
  const c = Math.max(0, Math.min(1, x));
  return c * c * c * (c * (c * 6 - 15) + 10);
}

/**
 * StructuredMotionPlayer — High-performance TypeScript Keyframe Engine for MMD Motions.
 * Evaluates 200+ bones, 30+ finger joints, center bounce, hip sways, and facial morphs frame-by-frame
 * with O(1) hint tracking and zero per-frame garbage allocation.
 */
export class StructuredMotionPlayer {
  public activeMotion: IVmdStructuredMotion | null = null;
  public currentTime = 0;
  public isPlaying = false;
  public isBlendingOut = false;
  public loop = true;
  public allowLookAt = true;
  public speed = 1.0;

  // Crossfade weight (0.0 to 1.0)
  public weight = 0;
  private targetWeight = 0;
  private blendDuration = 0.45;
  private onCompleteCallback?: () => void;

  // Cached bone references & rest transforms
  private boneMap = new Map<string, BoneCache>();
  private boneHintIndices = new Map<string, number>();
  private morphHintIndices = new Map<string, number>();

  // Scratch objects to avoid GC pressure
  private readonly scratchQ0 = new THREE.Quaternion();
  private readonly scratchQ1 = new THREE.Quaternion();
  private readonly scratchTargetQ = new THREE.Quaternion();
  private readonly scratchPos = new THREE.Vector3();

  /**
   * Initializes bone cache from the mesh skeleton.
   */
  public attachMesh(mesh: THREE.SkinnedMesh) {
    this.boneMap.clear();
    this.boneHintIndices.clear();
    this.morphHintIndices.clear();

    if (!mesh || !mesh.skeleton) return;

    for (const bone of mesh.skeleton.bones) {
      const name = bone.name;
      const isHeadOrNeck = name === '頭' || name === '首' || name.toLowerCase() === 'head' || name.toLowerCase() === 'neck';
      this.boneMap.set(name, {
        bone,
        restPosition: bone.position.clone(),
        restQuaternion: bone.quaternion.clone(),
        startPosition: bone.position.clone(),
        startQuaternion: bone.quaternion.clone(),
        exitPosition: bone.position.clone(),
        exitQuaternion: bone.quaternion.clone(),
        isHeadOrNeck,
      });
    }
  }

  /**
   * Starts playing a structured TypeScript motion.
   */
  public play(motion: IVmdStructuredMotion, options: PlaybackOptions = {}) {
    this.activeMotion = motion;
    this.currentTime = 0;
    this.isPlaying = true;
    this.isBlendingOut = false;
    this.loop = options.loop ?? true;
    this.allowLookAt = options.allowLookAt ?? true;
    this.speed = options.speed ?? 1.0;
    this.blendDuration = options.blendDuration ?? 0.45;
    this.onCompleteCallback = options.onComplete;

    this.boneHintIndices.clear();
    this.morphHintIndices.clear();

    this.targetWeight = 1.0;
    this.weight = 0.0;

    // Capture starting snapshot of every bone in this motion from its live transform
    for (const boneName of Object.keys(motion.bones)) {
      const cache = this.boneMap.get(boneName);
      if (cache) {
        cache.startPosition.copy(cache.bone.position);
        cache.startQuaternion.copy(cache.bone.quaternion);
      }
    }
  }

  /**
   * Stops playback with an optional smooth blend-out.
   */
  public stop(blendDuration = 0.45) {
    if (!this.isPlaying) return;
    if (this.isBlendingOut) return;

    this.isBlendingOut = true;
    this.blendDuration = blendDuration;
    this.targetWeight = 0.0;

    // Capture exit snapshot of each bone at this exact moment
    if (this.activeMotion) {
      for (const boneName of Object.keys(this.activeMotion.bones)) {
        const cache = this.boneMap.get(boneName);
        if (cache) {
          cache.exitPosition.copy(cache.bone.position);
          cache.exitQuaternion.copy(cache.bone.quaternion);
        }
      }
    }
  }

  /**
   * Updates all 200+ bones and facial morphs for the current frame.
   */
  public update(
    delta: number,
    applyMorph: (morphName: string, weight: number) => void
  ) {
    if (!this.isPlaying || !this.activeMotion) return;

    // 1. Advance crossfade envelope
    if (this.blendDuration > 0) {
      const step = delta / this.blendDuration;
      if (this.weight < this.targetWeight) {
        this.weight = Math.min(this.targetWeight, this.weight + step);
      } else if (this.weight > this.targetWeight) {
        this.weight = Math.max(this.targetWeight, this.weight - step);
        if (this.weight <= 0) {
          this.isPlaying = false;
          this.activeMotion = null;
          this.isBlendingOut = false;
          this.onCompleteCallback?.();
          return;
        }
      }
    } else {
      this.weight = this.targetWeight;
    }

    if (this.weight <= 0 && !this.isBlendingOut) return;

    // 2. Advance motion timeline
    if (!this.isBlendingOut) {
      this.currentTime += delta * this.speed;
      const duration = this.activeMotion.metadata.durationSeconds || (this.activeMotion.metadata.totalFrames / 30);

      if (this.currentTime >= duration) {
        if (this.loop) {
          this.currentTime = this.currentTime % duration;
          this.boneHintIndices.clear();
          this.morphHintIndices.clear();
        } else {
          // Reached end of non-looping motion: gracefully complete at the resting pose
          this.currentTime = duration;
          this.isPlaying = false;
          this.activeMotion = null;
          this.isBlendingOut = false;
          this.weight = 0.0;
          this.onCompleteCallback?.();
          return;
        }
      }
    }

    const duration = this.activeMotion.metadata.durationSeconds || (this.activeMotion.metadata.totalFrames / 30);
    const t = Math.min(this.currentTime, duration);
    const bones = this.activeMotion.bones;
    const morphs = this.activeMotion.morphs;

    // 3. Evaluate bone tracks (All 195–319 bones with smootherstep crossfading)
    for (const [boneName, keyframes] of Object.entries(bones)) {
      if (!keyframes || keyframes.length === 0) continue;

      const cache = this.boneMap.get(boneName);
      if (!cache) continue;

      // If user look-at tracking is enabled, let procedural lookAt control head/neck
      if (this.allowLookAt && cache.isHeadOrNeck) continue;

      const bone = cache.bone;

      if (this.isBlendingOut) {
        // Smoothly blend from exit pose back to initial pose (natural idle stance)
        const alpha = smootherstep(1.0 - this.weight); // 0 -> 1 as weight drops to 0
        bone.quaternion.copy(cache.exitQuaternion).slerp(cache.startQuaternion, alpha);
        bone.position.lerpVectors(cache.exitPosition, cache.startPosition, alpha);
      } else {
        // Sample keyframe position & rotation
        this.sampleBoneTrack(boneName, keyframes, t);

        if (this.weight >= 0.999) {
          bone.quaternion.copy(this.scratchTargetQ);
          bone.position.copy(this.scratchPos);
        } else {
          // Smoothly blend from starting pose into keyframe track
          const alpha = smootherstep(this.weight); // 0 -> 1 as weight rises to 1
          bone.quaternion.copy(cache.startQuaternion).slerp(this.scratchTargetQ, alpha);
          bone.position.lerpVectors(cache.startPosition, this.scratchPos, alpha);
        }
      }
    }

    // 4. Evaluate facial morph tracks (Lip-sync, eyes, smiles, expressions)
    if (morphs) {
      for (const [morphName, keyframes] of Object.entries(morphs)) {
        if (!keyframes || keyframes.length === 0) continue;
        const sampledWeight = this.sampleMorphTrack(morphName, keyframes, t);
        if (sampledWeight > 0.001) {
          applyMorph(morphName, sampledWeight * this.weight);
        }
      }
    }
  }

  /**
   * Samples a bone track at time t with O(1) sequential hint caching.
   */
  private sampleBoneTrack(
    boneName: string,
    kfs: IVmdBoneKeyframe[],
    t: number
  ) {
    const len = kfs.length;
    const cache = this.boneMap.get(boneName)!;
    const rest = cache.restPosition;

    if (len === 1 || t <= kfs[0].time) {
      const kf = kfs[0];
      this.scratchTargetQ.set(-kf.rotation[0], -kf.rotation[1], kf.rotation[2], kf.rotation[3]);
      this.scratchPos.set(rest.x + kf.position[0], rest.y + kf.position[1], rest.z - kf.position[2]);
      return;
    }

    const last = kfs[len - 1];
    if (t >= last.time) {
      this.scratchTargetQ.set(-last.rotation[0], -last.rotation[1], last.rotation[2], last.rotation[3]);
      this.scratchPos.set(rest.x + last.position[0], rest.y + last.position[1], rest.z - last.position[2]);
      return;
    }

    // O(1) amortized sequential hint lookup
    let hint = this.boneHintIndices.get(boneName) ?? 0;
    if (hint >= len - 1 || kfs[hint].time > t) {
      hint = 0;
    }
    while (hint < len - 1 && kfs[hint + 1].time <= t) {
      hint++;
    }
    this.boneHintIndices.set(boneName, hint);

    const k0 = kfs[hint];
    const k1 = kfs[hint + 1];
    const dt = k1.time - k0.time;
    const alpha = dt > 0 ? (t - k0.time) / dt : 0;

    // Position translation lerp
    const px = k0.position[0] + (k1.position[0] - k0.position[0]) * alpha;
    const py = k0.position[1] + (k1.position[1] - k0.position[1]) * alpha;
    const pz = k0.position[2] + (k1.position[2] - k0.position[2]) * alpha;
    this.scratchPos.set(rest.x + px, rest.y + py, rest.z - pz);

    // Quaternion spherical linear slerp
    this.scratchQ0.set(-k0.rotation[0], -k0.rotation[1], k0.rotation[2], k0.rotation[3]);
    this.scratchQ1.set(-k1.rotation[0], -k1.rotation[1], k1.rotation[2], k1.rotation[3]);
    this.scratchTargetQ.copy(this.scratchQ0).slerp(this.scratchQ1, alpha);
  }

  /**
   * Samples a morph track at time t.
   */
  private sampleMorphTrack(
    morphName: string,
    kfs: IVmdMorphKeyframe[],
    t: number
  ): number {
    const len = kfs.length;
    if (len === 1 || t <= kfs[0].time) return kfs[0].weight;
    if (t >= kfs[len - 1].time) return kfs[len - 1].weight;

    let hint = this.morphHintIndices.get(morphName) ?? 0;
    if (hint >= len - 1 || kfs[hint].time > t) hint = 0;
    while (hint < len - 1 && kfs[hint + 1].time <= t) hint++;
    this.morphHintIndices.set(morphName, hint);

    const k0 = kfs[hint];
    const k1 = kfs[hint + 1];
    const dt = k1.time - k0.time;
    const alpha = dt > 0 ? (t - k0.time) / dt : 0;
    return k0.weight + (k1.weight - k0.weight) * alpha;
  }

  /**
   * Restores bones to rest transforms after animation finishes.
   */
  public restoreRestPose() {
    for (const cache of this.boneMap.values()) {
      cache.bone.position.copy(cache.restPosition);
      cache.bone.quaternion.copy(cache.restQuaternion);
    }
  }
}

export const structuredMotionPlayer = new StructuredMotionPlayer();
