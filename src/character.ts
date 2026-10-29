import * as THREE from 'three';
import { 
  ThreeMmdLoader, 
  loadCustomBulletMmdModule, 
  createCustomBulletMmdPhysicsBackend, 
  type ThreeMmdModel, 
  type ThreeMmdAnimation 
} from '@yohawing/three-mmd-loader';
import type { EmotionType, BodyPart } from './types';
import { tts, chenVoice, danceAudio } from './audio';
import type { TrainedMotion, MotionPoseData } from './motionTrainer';

import { 
  type IdleGesture, 
  IDLE_GESTURES, 
  evaluateIdleGesture 
} from './motions/idle';
import { structuredMotionPlayer, type PlaybackOptions } from './motions/sampler';
import { STRUCTURED_MOTIONS, type StructuredMotionEntry } from './motions/data';

export type { IdleGesture, StructuredMotionEntry, PlaybackOptions };
export { STRUCTURED_MOTIONS, structuredMotionPlayer };

interface BoneSnapshot {
  position: THREE.Vector3;
  quaternion: THREE.Quaternion;
}

function smootherstep(x: number): number {
  const c = Math.max(0, Math.min(1, x));
  return c * c * c * (c * (c * 6 - 15) + 10);
}

export class ChenCharacter {
  public model: ThreeMmdModel | null = null;
  public root: THREE.Group | null = null;
  public mesh: THREE.SkinnedMesh | null = null;
  private loader: ThreeMmdLoader | null = null;

  // Animation & Motion State
  public isDancing = false;
  public currentDanceId: string | null = null;
  public danceTime = 0;
  public danceTransitionState: 'none' | 'blend_in' | 'dancing' | 'blend_out' = 'none';
  private danceTransitionTimer = 0;
  private readonly DANCE_BLEND_IN_DURATION = 0.4;
  private readonly DANCE_BLEND_OUT_DURATION = 0.5;
  private preDanceSnapshot = new Map<THREE.Bone, BoneSnapshot>();
  private exitDanceSnapshot = new Map<THREE.Bone, BoneSnapshot>();
  private boneRestTransforms = new Map<THREE.Bone, BoneSnapshot>();
  private cachedAnimations = new Map<string, ThreeMmdAnimation>();
  private savedExternalPhysicsData: any = null;
  private scratchTargetPos = new THREE.Vector3();
  private scratchTargetQuat = new THREE.Quaternion();
  private exitMorphSnapshot: Float32Array | null = null;
  public onDanceEnd?: () => void;

  // Performance & Quality State
  public outlineEnabled = false; // Default false for smooth 60 FPS (toggleable)
  public physicsEnabled = true;  // Full Bullet / Stateful-spring physics
  public elapsedTime = 0;        // Accumulating timeline time for physics & VMD
  private lastPhysicsTime = 0;   // High-precision timestep tracker for live idle physics

  // Bone references for procedural life
  private headBone: THREE.Bone | null = null;
  private neckBone: THREE.Bone | null = null;
  private spineBone: THREE.Bone | null = null;
  private spine2Bone: THREE.Bone | null = null;
  private leftEyeBone: THREE.Bone | null = null;
  private rightEyeBone: THREE.Bone | null = null;
  private centerBone: THREE.Bone | null = null;
  private centerBoneRestPos = new THREE.Vector3(0, 9.9688, 0);
  private hipsBone: THREE.Bone | null = null;
  private leftShoulderBone: THREE.Bone | null = null;
  private rightShoulderBone: THREE.Bone | null = null;

  // Arm bones for natural idle standing & gestures
  private leftArmBone: THREE.Bone | null = null;
  private leftElbowBone: THREE.Bone | null = null;
  private leftWristBone: THREE.Bone | null = null;
  private rightArmBone: THREE.Bone | null = null;
  private rightElbowBone: THREE.Bone | null = null;
  private rightWristBone: THREE.Bone | null = null;
  private fingerBones: THREE.Bone[] = [];

  // Tactile Soft-Body Spring Physics for Squishy Poking
  private bustAdjustBone: THREE.Bone | null = null;
  private leftChestBones: THREE.Bone[] = [];
  private rightChestBones: THREE.Bone[] = [];
  private leftChestSpring = {
    displacement: 0,
    velocity: 0,
    lateralX: 0,
    lateralVelX: 0,
    lateralY: 0,
    lateralVelY: 0,
    stiffness: 200,
    damping: 13.0,
    mass: 1.0,
  };
  private rightChestSpring = {
    displacement: 0,
    velocity: 0,
    lateralX: 0,
    lateralVelX: 0,
    lateralY: 0,
    lateralVelY: 0,
    stiffness: 200,
    damping: 13.0,
    mass: 1.0,
  };
  private torsoRecoilSpring = {
    displacement: 0,
    velocity: 0,
    lateralX: 0,
    lateralVelX: 0,
    lateralY: 0,
    lateralVelY: 0,
    stiffness: 240,
    damping: 16.0,
    mass: 1.0,
  };
  private headSquishSpring = {
    displacement: 0,
    velocity: 0,
    lateralX: 0,
    lateralVelX: 0,
    lateralY: 0,
    lateralVelY: 0,
    stiffness: 220,
    damping: 14.0,
    mass: 1.0,
  };

  // Interactive Drag & Pinch state
  private isTouchingDrag = false;
  private touchDragPart: BodyPart | null = null;
  private touchDragSide: 'left' | 'right' | 'both' = 'both';

  // Head tracking (Target at Chen's eye level y=18.88)
  public targetLookAt = new THREE.Vector3(0, 18.8, 16.0);
  private currentLookAt = new THREE.Vector3(0, 18.8, 16.0);
  public isTrackingEnabled = true;

  // Procedural blinking state (with anime double-blink)
  private blinkTimer = 0;
  private nextBlinkTime = 2.8;
  private isBlinking = false;
  private blinkProgress = 0;
  private isDoubleBlinkPending = false;
  private doubleBlinkTimer = 0;

  // Multi-bone procedural breathing & weight shifting sway
  private breathTimer = 0;
  private swayTimer = 0;

  // Automatic Idle Gesture State Machine
  private currentGesture: IdleGesture = 'none';
  private gestureTimer = 0;
  private gestureDuration = 3.6;
  private timeUntilNextGesture = 4.5; // Starts with a friendly gesture soon after load
  private gestureWeight = 0;

  // Trained AI Motion Engine
  public activeCustomMotion: TrainedMotion | null = null;
  public customMotionTimer = 0;
  public customMotionDuration = 4.0;
  public customMotionWeight = 0;
  public previewPose: MotionPoseData | null = null;

  // Micro-Saccade Gaze Jitter (realistic human ocular saccades)
  private saccadeTimer = 0;
  private nextSaccadeInterval = 1.8;
  private saccadeOffset = new THREE.Vector3(0, 0, 0);

  // Expression morphs
  public currentEmotion: EmotionType = 'normal';
  private targetMorphWeights: Record<string, number> = {};
  private currentMorphWeights: Record<string, number> = {};

  // Lip sync vowel weights
  private lipSyncVowel: string = 'ん';
  private lipSyncIntensity: number = 0;

  // Raycast Hit Testing Proxies
  public hitBoxes: { part: BodyPart; mesh: THREE.Mesh }[] = [];

  constructor() {
    // Loader initialized in async load() to allow Bullet WASM backend attachment
  }

  async load(onProgress?: (progress: number) => void): Promise<THREE.Group> {
    if (onProgress) onProgress(15);

    // 1. Initialize Bullet WASM Physics Backend (falling back to stateful-spring if unavailable)
    let physicsBackend: any = null;
    try {
      if (typeof window !== 'undefined') {
        let factory = (window as any).MmdBullet || (globalThis as any).MmdBullet;
        if (!factory) {
          try {
            await loadCustomBulletMmdModule({ scriptUrl: `${import.meta.env.BASE_URL}mmd_bullet.js` });
            factory = (window as any).MmdBullet || (globalThis as any).MmdBullet;
          } catch (loadErr) {
            console.warn('loadCustomBulletMmdModule fallback:', loadErr);
          }
        }
        if (typeof factory === 'function') {
          const bulletModule = await factory({
            locateFile: (file: string) => `${import.meta.env.BASE_URL}${file}`,
          });
          physicsBackend = createCustomBulletMmdPhysicsBackend(bulletModule, {
            maxSubSteps: 2,
            fixedTimeStep: 1 / 60,
          });
          console.log('⚡ Bullet WASM MMD Physics Engine active (310 rigid bodies & 455 spring joints)!');
        }
      }
    } catch (e) {
      console.warn('Bullet physics load fallback to stateful-spring:', e);
    }

    this.loader = new ThreeMmdLoader({
      runtime: physicsBackend ? {
        physics: 'external',
        physicsBackend,
      } : {
        physics: 'stateful-spring',
      },
    });

    if (onProgress) onProgress(35);

    // 2. Load Chen Qianyu PMX Model
    const modelUrl = `${import.meta.env.BASE_URL}models/chen/chen.pmx`;
    const mmdModel = await this.loader.loadModel(modelUrl, {
      outline: false,
      materialRenderOrder: false,
      morphSplit: false,
      frustumCulled: false,
    });

    if (onProgress) onProgress(80);

    this.model = mmdModel;
    this.root = mmdModel.root;
    this.mesh = mmdModel.mesh;
    if (this.mesh) {
      structuredMotionPlayer.attachMesh(this.mesh);
      if (this.mesh.skeleton) {
        this.boneRestTransforms.clear();
        for (const bone of this.mesh.skeleton.bones) {
          this.boneRestTransforms.set(bone, {
            position: bone.position.clone(),
            quaternion: bone.quaternion.clone(),
          });
        }
      }
    }

    // 3. Bind mesh & runtime external physics data so Bullet WASM simulates all 310 rigid bodies!
    const runtime = this.model.runtime as any;
    if (this.mesh && runtime && physicsBackend) {
      try {
        const defaultMotionUrl = `${import.meta.env.BASE_URL}motions/pokedance.vmd`;
        const anim = await this.loader.loadAnimation(defaultMotionUrl);
        this.cachedAnimations.set(defaultMotionUrl, anim);
        this.model.setAnimation(anim);
        this.savedExternalPhysicsData = runtime.externalPhysicsData;
        // Detach dance clip so character stands in organic idle pose with physics active
        runtime.wasmClip = undefined;
        runtime.mmdAnimation = undefined;
        runtime.mesh = this.mesh;
        runtime.externalPhysicsData = this.savedExternalPhysicsData;
        runtime.resetPhysicsState?.();
        runtime.previousEvaluateSeconds = 0;
        this.lastPhysicsTime = 0;
        const bodyCount = this.savedExternalPhysicsData?.rigidBodies?.length || 0;
        console.log(`⚡ Bullet physics initialized via runtime: ${bodyCount} rigid bodies active!`);
      } catch (e) {
        console.warn('Initial physics animation setup warning:', e);
      }
    }

    // Apply initial outline state (default false to save 75,000 skinned vertices)
    this.setOutlineEnabled(this.outlineEnabled);

    // Ensure all textures use correct sRGB ColorSpace & enable shadows & disable frustum culling
    this.root.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        child.frustumCulled = false;
        child.castShadow = true;
        child.receiveShadow = true;
        const mesh = child as THREE.Mesh;
        const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
        for (const mat of materials) {
          if (mat && (mat as any).map) {
            (mat as any).map.colorSpace = THREE.SRGBColorSpace;
            (mat as any).map.needsUpdate = true;
          }
        }
      }
    });

    // Locate critical bones for procedural life
    if (this.mesh && this.mesh.skeleton) {
      for (const bone of this.mesh.skeleton.bones) {
        const name = bone.name;
        if (name === '頭' || name.toLowerCase() === 'head') this.headBone = bone;
        else if (name === '首' || name.toLowerCase() === 'neck') this.neckBone = bone;
        else if (name === '上半身' || name.toLowerCase() === 'spine') this.spineBone = bone;
        else if (name === '上半身2' || name.toLowerCase() === 'spine1') this.spine2Bone = bone;
        else if (name === 'センター' || name.toLowerCase() === 'center') {
          this.centerBone = bone;
          this.centerBoneRestPos.copy(bone.position);
        }
        else if (name === '下半身') this.hipsBone = bone;
        else if (name === '左肩' || name === '左肩P') this.leftShoulderBone = bone;
        else if (name === '右肩' || name === '右肩P') this.rightShoulderBone = bone;
        else if (name === '左目' || name.toLowerCase() === 'eye_l') this.leftEyeBone = bone;
        else if (name === '右目' || name.toLowerCase() === 'eye_r') this.rightEyeBone = bone;
        // Arm & hands
        else if (name === '左腕') this.leftArmBone = bone;
        else if (name === '左ひじ') this.leftElbowBone = bone;
        else if (name === '左手首') this.leftWristBone = bone;
        else if (name === '右腕') this.rightArmBone = bone;
        else if (name === '右ひじ') this.rightElbowBone = bone;
        else if (name === '右手首') this.rightWristBone = bone;
        else if (name.includes('指')) this.fingerBones.push(bone);
        else if (name === 'おっぱい調整') this.bustAdjustBone = bone;
        else if (name.startsWith('左胸')) this.leftChestBones.push(bone);
        else if (name.startsWith('右胸')) this.rightChestBones.push(bone);
      }
    }

    this.root.position.set(0, 0, 0);

    // Setup interactive invisible hitboxes based on Chen's real coordinates
    this.setupHitboxes();

    // Hook lip sync listener from both TTS and authentic chenVoice
    const onLipSync = (vowel: string, intensity: number) => {
      this.lipSyncVowel = vowel;
      this.lipSyncIntensity = intensity;
    };
    tts.onLipSyncUpdate = onLipSync;
    chenVoice.onLipSyncUpdate = onLipSync;

    if (onProgress) onProgress(100);
    return this.root;
  }

  // Accurate hitboxes based on Chen's world height (Eyes y=18.88, Head y=18.38, Top y=22.25)
  private setupHitboxes() {
    if (!this.root) return;

    const createHitSphere = (part: BodyPart, radius: number, pos: THREE.Vector3) => {
      const geo = new THREE.SphereGeometry(radius, 8, 8);
      const mat = new THREE.MeshBasicMaterial({
        visible: false,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.copy(pos);
      mesh.name = `hitbox_${part}`;
      mesh.userData = { bodyPart: part };
      this.root!.add(mesh);
      this.hitBoxes.push({ part, mesh });
    };

    // Head Top & Hair (y: 19.8 - 21.5)
    createHitSphere('head', 1.5, new THREE.Vector3(0, 20.0, 0.2));
    // Face & Cheeks (y: 18.0 - 19.2)
    createHitSphere('cheek', 1.3, new THREE.Vector3(0, 18.5, 0.7));
    // Dual Left & Right Breast Hitboxes for accurate tactile squish & bounce
    createHitSphere('chest', 1.35, new THREE.Vector3(0.65, 15.6, 0.85));
    createHitSphere('chest', 1.35, new THREE.Vector3(-0.65, 15.6, 0.85));
    createHitSphere('chest', 1.5, new THREE.Vector3(0, 15.3, 0.5));
    // Hands & Dual Blades (y: 11.5)
    createHitSphere('hand', 1.5, new THREE.Vector3(3.5, 12.0, 0.3));
    createHitSphere('hand', 1.5, new THREE.Vector3(-3.5, 12.0, 0.3));
    // Legs & Boots (y: 5.5)
    createHitSphere('leg', 2.0, new THREE.Vector3(0, 6.0, 0.3));
  }

  setEmotion(emotion: EmotionType) {
    this.currentEmotion = emotion;
    const target: Record<string, number> = {};

    switch (emotion) {
      case 'smile':
        target['笑い'] = 0.75;
        target['にっこり'] = 0.6;
        target['口角上げ'] = 0.5;
        break;
      case 'happy':
        target['笑い'] = 1.0;
        target['にこり'] = 0.8;
        target['照れ'] = 0.35;
        target['口角上げ'] = 0.6;
        break;
      case 'blush':
        target['照れ'] = 0.95;
        target['困る'] = 0.4;
        target['じと目'] = 0.25;
        target['笑い'] = 0.2;
        break;
      case 'wink':
        target['ウィンク'] = 1.0;
        target['笑い'] = 0.4;
        target['口角上げ'] = 0.6;
        target['照れ'] = 0.2;
        break;
      case 'surprised':
        target['びっくり'] = 0.9;
        target['瞳小'] = 0.35;
        target['あ'] = 0.45;
        break;
      case 'serious':
        target['真面目'] = 0.85;
        target['ｷﾘｯ'] = 0.7;
        target['口横狭め'] = 0.3;
        break;
      case 'jitome':
        target['じと目'] = 0.9;
        target['口横狭め'] = 0.4;
        break;
      case 'pout':
        target['怒り'] = 0.65;
        target['ω'] = 0.7;
        target['照れ'] = 0.3;
        break;
      case 'smug':
        target['にやり'] = 0.8;
        target['ウィンク右'] = 0.35;
        break;
      case 'tehepero':
        target['てへぺろ'] = 1.0;
        target['ウィンク'] = 0.85;
        target['照れ'] = 0.4;
        break;
      case 'normal':
      default:
        break;
    }

    this.targetMorphWeights = target;
  }

  public triggerGesture(gesture: IdleGesture) {
    if (this.isDancing) return;

    if (gesture === 'gentle_wave') {
      if (structuredMotionPlayer.isPlaying) {
        structuredMotionPlayer.stop(0.15);
      }
      this.currentGesture = 'gentle_wave';
      this.activeCustomMotion = null;
      this.previewPose = null;
      this.gestureTimer = 0;
      this.gestureDuration = 3.2;
      this.gestureWeight = 0;

      this.playStructuredMotion('gentleWave', {
        loop: false,
        allowLookAt: true,
        blendDuration: 0.15,
        onComplete: () => {
          this.currentGesture = 'none';
          this.gestureWeight = 0;
        }
      });
      return;
    }

    if (structuredMotionPlayer.isPlaying) {
      structuredMotionPlayer.stop(0.2);
    }
    this.currentGesture = gesture;
    this.activeCustomMotion = null;
    this.previewPose = null;
    this.gestureTimer = 0;
    this.gestureDuration = 4.2;
    this.gestureWeight = 0;
  }

  public playTrainedMotion(motion: TrainedMotion) {
    if (this.isDancing) return;
    if (structuredMotionPlayer.isPlaying) {
      structuredMotionPlayer.stop(0.2);
    }
    this.activeCustomMotion = motion;
    this.previewPose = null;
    this.currentGesture = 'none';
    this.customMotionTimer = 0;
    this.customMotionDuration = motion.duration || 4.2;
    this.customMotionWeight = 0;
    if (motion.triggerEmotion) {
      this.setEmotion(motion.triggerEmotion);
    }
  }

  public setMotionPreviewPose(pose: MotionPoseData | null) {
    this.previewPose = pose;
    if (pose) {
      this.currentGesture = 'none';
      this.activeCustomMotion = null;
    }
  }

  public stopTrainedMotion() {
    this.activeCustomMotion = null;
    this.previewPose = null;
    this.customMotionWeight = 0;
  }

  private syncProceduralQuaternions() {
    if (this.headBone) this.headBone.quaternion.setFromEuler(this.headBone.rotation);
    if (this.neckBone) this.neckBone.quaternion.setFromEuler(this.neckBone.rotation);
    if (this.spineBone) this.spineBone.quaternion.setFromEuler(this.spineBone.rotation);
    if (this.spine2Bone) this.spine2Bone.quaternion.setFromEuler(this.spine2Bone.rotation);
    if (this.leftShoulderBone) this.leftShoulderBone.quaternion.setFromEuler(this.leftShoulderBone.rotation);
    if (this.rightShoulderBone) this.rightShoulderBone.quaternion.setFromEuler(this.rightShoulderBone.rotation);
    if (this.leftArmBone) this.leftArmBone.quaternion.setFromEuler(this.leftArmBone.rotation);
    if (this.leftElbowBone) this.leftElbowBone.quaternion.setFromEuler(this.leftElbowBone.rotation);
    if (this.rightArmBone) this.rightArmBone.quaternion.setFromEuler(this.rightArmBone.rotation);
    if (this.rightElbowBone) this.rightElbowBone.quaternion.setFromEuler(this.rightElbowBone.rotation);
    if (this.rightWristBone) this.rightWristBone.quaternion.setFromEuler(this.rightWristBone.rotation);
    if (this.hipsBone) this.hipsBone.quaternion.setFromEuler(this.hipsBone.rotation);
    if (this.centerBone) this.centerBone.quaternion.setFromEuler(this.centerBone.rotation);
    for (const bone of this.fingerBones) {
      bone.quaternion.setFromEuler(bone.rotation);
    }
  }

  async playDance(motionUrl: string, audioUrl: string, danceId: string): Promise<void> {
    if (!this.model || !this.loader || !this.mesh) return;
    if (structuredMotionPlayer.isPlaying) {
      structuredMotionPlayer.stop(0.2);
    }

    try {
      // 1. Preload animation FIRST while character stays fully in natural idle
      let anim = this.cachedAnimations.get(motionUrl);
      if (!anim) {
        anim = await this.loader.loadAnimation(motionUrl);
        this.cachedAnimations.set(motionUrl, anim);
      }

      if (!this.mesh || !this.mesh.skeleton) return;

      // 2. Synchronize current procedural idle Euler rotations into quaternions
      this.syncProceduralQuaternions();

      // 3. Capture exact snapshot of current live standing idle pose
      for (const bone of this.mesh.skeleton.bones) {
        let snap = this.preDanceSnapshot.get(bone);
        if (!snap) {
          snap = { position: new THREE.Vector3(), quaternion: new THREE.Quaternion() };
          this.preDanceSnapshot.set(bone, snap);
        }
        snap.position.copy(bone.position);
        snap.quaternion.copy(bone.quaternion);
      }

      // 4. Attach animation clip & initiate smooth 0.4s blend-in crossfade from frame 0
      this.model.setAnimation(anim);
      this.isDancing = true;
      this.currentDanceId = danceId;
      this.danceTime = 0;
      this.danceTransitionState = 'blend_in';
      this.danceTransitionTimer = 0;

      // 5. Start audio in perfect sync with dance start
      await danceAudio.play(audioUrl, () => {
        this.stopDance();
      });
    } catch (err) {
      console.error('Failed to play dance:', err);
      this.finishStopDance();
    }
  }

  private isProceduralBone(bone: THREE.Bone): boolean {
    if (
      bone === this.headBone ||
      bone === this.neckBone ||
      bone === this.spineBone ||
      bone === this.spine2Bone ||
      bone === this.leftShoulderBone ||
      bone === this.rightShoulderBone ||
      bone === this.centerBone ||
      bone === this.hipsBone ||
      bone === this.leftArmBone ||
      bone === this.leftElbowBone ||
      bone === this.rightArmBone ||
      bone === this.rightElbowBone ||
      bone === this.rightWristBone
    ) {
      return true;
    }
    return this.fingerBones.includes(bone);
  }

  public stopDance(immediate = false) {
    if (!this.isDancing) return;

    if (immediate || this.danceTransitionState === 'blend_out') {
      this.finishStopDance();
      return;
    }

    // Capture exit dance pose snapshot of every bone
    if (this.mesh && this.mesh.skeleton) {
      for (const bone of this.mesh.skeleton.bones) {
        let snap = this.exitDanceSnapshot.get(bone);
        if (!snap) {
          snap = { position: new THREE.Vector3(), quaternion: new THREE.Quaternion() };
          this.exitDanceSnapshot.set(bone, snap);
        }
        snap.position.copy(bone.position);
        snap.quaternion.copy(bone.quaternion);
      }
    }

    // Capture snapshot of morph influences so dance facial expressions fade smoothly to neutral
    if (this.mesh && this.mesh.morphTargetInfluences) {
      this.exitMorphSnapshot = new Float32Array(this.mesh.morphTargetInfluences);
    }

    this.danceTransitionState = 'blend_out';
    this.danceTransitionTimer = 0;
    this.currentDanceId = null;
    danceAudio.stop();
    this.setEmotion('normal');
  }

  private finishStopDance() {
    this.isDancing = false;
    this.danceTransitionState = 'none';
    this.currentDanceId = null;
    this.danceTime = 0;
    this.lastPhysicsTime = 0;
    danceAudio.stop();

    // 1. Force all non-procedural bones (legs, knees, feet, ankles, IK, root, groove)
    // and non-center bone positions back to exact rest transforms
    if (this.mesh && this.mesh.skeleton) {
      for (const bone of this.mesh.skeleton.bones) {
        const rest = this.boneRestTransforms.get(bone);
        if (!rest) continue;

        if (!this.isProceduralBone(bone)) {
          bone.position.copy(rest.position);
          bone.quaternion.copy(rest.quaternion);
        } else if (bone !== this.centerBone) {
          bone.position.copy(rest.position);
        }
      }
      this.syncProceduralQuaternions();
      this.mesh.skeleton.update();
      this.mesh.updateMatrixWorld(true);
    }

    // 2. Clear all MMD facial morphs and morph states
    if (this.mesh && this.mesh.morphTargetInfluences) {
      this.mesh.morphTargetInfluences.fill(0);
    }
    this.exitMorphSnapshot = null;
    this.currentMorphWeights = {};
    this.targetMorphWeights = {};

    // 3. Detach MMD animation clip & reset Bullet physics runtime
    if (this.model) {
      const runtime = this.model.runtime as any;
      if (runtime) {
        runtime.wasmClip = undefined;
        runtime.mmdAnimation = undefined;
        if (this.savedExternalPhysicsData) {
          runtime.externalPhysicsData = this.savedExternalPhysicsData;
        }
        runtime.mesh = this.mesh;
        try {
          runtime.resetPhysicsState?.();
          runtime.previousEvaluateSeconds = 0;
          this.lastPhysicsTime = 0;
        } catch {}
      }
    }
    this.setEmotion('normal');
    this.onDanceEnd?.();
  }

  /**
   * Plays a 100% full-complexity structured TypeScript motion (200+ bones, fingers, expressions)
   * loaded dynamically from compiled VMD datasets.
   */
  async playStructuredMotion(motionId: string, options?: PlaybackOptions & { audioUrl?: string }): Promise<void> {
    if (!this.mesh) return;

    if (this.isDancing) {
      this.stopDance(true);
    }
    if (motionId !== 'gentleWave') {
      this.currentGesture = 'none';
    }
    this.activeCustomMotion = null;
    this.previewPose = null;

    const entry = STRUCTURED_MOTIONS.find(m => m.id === motionId);
    if (!entry) {
      console.warn('Structured motion not found:', motionId);
      return;
    }

    try {
      if (options?.audioUrl) {
        this.currentDanceId = motionId;
      }
      const data = await entry.load();
      structuredMotionPlayer.play(data, {
        loop: options?.loop ?? true,
        allowLookAt: options?.allowLookAt ?? true,
        blendDuration: options?.blendDuration ?? 0.35,
        speed: options?.speed ?? 1.0,
        onComplete: () => {
          if (options?.audioUrl) {
            this.stopStructuredMotion();
          }
          options?.onComplete?.();
        },
      });

      if (options?.audioUrl) {
        await danceAudio.play(options.audioUrl, () => {
          this.stopStructuredMotion();
        });
      }
    } catch (err) {
      console.error('Failed to load structured motion:', err);
      if (options?.audioUrl) {
        this.stopStructuredMotion();
      } else {
        structuredMotionPlayer.stop(0.2);
      }
    }
  }

  stopStructuredMotion() {
    structuredMotionPlayer.stop();
    this.currentDanceId = null;
    danceAudio.stop();
    this.setEmotion('normal');
  }

  get isStructuredMotionPlaying(): boolean {
    return structuredMotionPlayer.isPlaying;
  }

  public setOutlineEnabled(enabled: boolean) {
    this.outlineEnabled = enabled;
    if (this.model && this.model.outlineMeshes) {
      for (const mesh of this.model.outlineMeshes) {
        mesh.visible = enabled;
      }
    }
  }

  public setPhysicsEnabled(enabled: boolean) {
    this.physicsEnabled = enabled;
  }

  public setShadowsEnabled(enabled: boolean) {
    if (this.root) {
      this.root.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          child.castShadow = enabled;
          child.receiveShadow = enabled;
        }
      });
    }
  }

  /**
   * Trigger an instant squishy poke / tap impulse on a body part
   */
  public triggerTouchSpring(part: BodyPart, hitPointWorld?: THREE.Vector3, force = 1.0) {
    if (part === 'chest') {
      const x = hitPointWorld ? hitPointWorld.x : 0;
      // In Three.js MMD coordinates, model faces +Z: x > 0.12 is left breast, x < -0.12 is right breast
      if (x > 0.12) {
        // Direct squish compression on left breast
        this.leftChestSpring.displacement = -0.16 * force;
        this.leftChestSpring.velocity = -2.3 * force;
        this.leftChestSpring.lateralVelX = 1.3 * force;
        this.leftChestSpring.lateralVelY = 0.8 * force;
        // Sympathetic fluid/elastic wave on right breast
        this.rightChestSpring.velocity = 0.9 * force;
      } else if (x < -0.12) {
        // Direct squish compression on right breast
        this.rightChestSpring.displacement = -0.16 * force;
        this.rightChestSpring.velocity = -2.3 * force;
        this.rightChestSpring.lateralVelX = -1.3 * force;
        this.rightChestSpring.lateralVelY = 0.8 * force;
        // Sympathetic fluid/elastic wave on left breast
        this.leftChestSpring.velocity = 0.9 * force;
      } else {
        // Center poke: both compress and bounce
        this.leftChestSpring.displacement = -0.14 * force;
        this.leftChestSpring.velocity = -2.0 * force;
        this.rightChestSpring.displacement = -0.14 * force;
        this.rightChestSpring.velocity = -2.0 * force;
      }
      // Upper chest torso recoil
      this.torsoRecoilSpring.velocity = -1.2 * force;
    } else if (part === 'cheek') {
      const x = hitPointWorld ? hitPointWorld.x : 0;
      this.headSquishSpring.displacement = -0.06 * force;
      this.headSquishSpring.velocity = (x > 0 ? 0.7 : -0.7) * force;
    } else if (part === 'head') {
      this.headSquishSpring.displacement = -0.08 * force;
      this.headSquishSpring.velocity = -1.1 * force;
    }
  }

  /**
   * Start dragging / pressing into the soft body
   */
  public startTouchDrag(part: BodyPart, hitPointWorld?: THREE.Vector3) {
    this.isTouchingDrag = true;
    this.touchDragPart = part;
    if (part === 'chest') {
      const x = hitPointWorld ? hitPointWorld.x : 0;
      if (x > 0.12) this.touchDragSide = 'left';
      else if (x < -0.12) this.touchDragSide = 'right';
      else this.touchDragSide = 'both';
    }
  }

  /**
   * Update active drag deformation
   */
  public updateTouchDrag(screenDeltaX: number, screenDeltaY: number) {
    if (!this.isTouchingDrag || this.touchDragPart !== 'chest') return;
    const inward = Math.max(-0.25, Math.min(0.2, screenDeltaY * -0.0025));
    const lateral = Math.max(-0.15, Math.min(0.15, screenDeltaX * 0.002));

    if (this.touchDragSide === 'left' || this.touchDragSide === 'both') {
      this.leftChestSpring.displacement = inward;
      this.leftChestSpring.lateralX = lateral;
      this.leftChestSpring.velocity = 0;
    }
    if (this.touchDragSide === 'right' || this.touchDragSide === 'both') {
      this.rightChestSpring.displacement = inward;
      this.rightChestSpring.lateralX = -lateral;
      this.rightChestSpring.velocity = 0;
    }
  }

  /**
   * Release active drag and let soft body snap back and jiggle
   */
  public releaseTouchDrag() {
    if (!this.isTouchingDrag) return;
    if (this.touchDragPart === 'chest') {
      if (this.touchDragSide === 'left' || this.touchDragSide === 'both') {
        this.leftChestSpring.velocity = -this.leftChestSpring.displacement * 16.0;
      }
      if (this.touchDragSide === 'right' || this.touchDragSide === 'both') {
        this.rightChestSpring.velocity = -this.rightChestSpring.displacement * 16.0;
      }
      this.torsoRecoilSpring.velocity = 0.8;
    }
    this.isTouchingDrag = false;
    this.touchDragPart = null;
  }

  private updateTouchSpringPhysics(dt: number) {
    if (!this.mesh || !this.mesh.skeleton) return;

    // Helper to step a spring with semi-implicit Euler
    const step = (s: any, isHeld: boolean) => {
      if (isHeld) return;
      const forceZ = -s.stiffness * s.displacement - s.damping * s.velocity;
      s.velocity += (forceZ / s.mass) * dt;
      s.displacement += s.velocity * dt;

      // Lateral Poisson bulge proportional to inward squish
      const targetBulge = Math.max(0, -s.displacement) * 0.45;
      const forceLatX = -s.stiffness * 1.2 * (s.lateralX - targetBulge) - s.damping * 1.1 * s.lateralVelX;
      s.lateralVelX += forceLatX * dt;
      s.lateralX += s.lateralVelX * dt;

      const forceLatY = -s.stiffness * 1.2 * (s.lateralY - targetBulge * 0.6) - s.damping * 1.1 * s.lateralVelY;
      s.lateralVelY += forceLatY * dt;
      s.lateralY += s.lateralVelY * dt;

      if (Math.abs(s.displacement) < 0.0002 && Math.abs(s.velocity) < 0.001) {
        s.displacement = 0;
        s.velocity = 0;
        s.lateralX = 0;
        s.lateralVelX = 0;
        s.lateralY = 0;
        s.lateralVelY = 0;
      }
    };

    const isLeftHeld = this.isTouchingDrag && (this.touchDragSide === 'left' || this.touchDragSide === 'both');
    const isRightHeld = this.isTouchingDrag && (this.touchDragSide === 'right' || this.touchDragSide === 'both');

    step(this.leftChestSpring, isLeftHeld);
    step(this.rightChestSpring, isRightHeld);
    step(this.torsoRecoilSpring, false);
    step(this.headSquishSpring, false);

    const hasChestMotion = Math.abs(this.leftChestSpring.displacement) > 0.0001 ||
                           Math.abs(this.rightChestSpring.displacement) > 0.0001 ||
                           Math.abs(this.leftChestSpring.velocity) > 0.001 ||
                           Math.abs(this.rightChestSpring.velocity) > 0.001;

    const hasTorsoMotion = Math.abs(this.torsoRecoilSpring.displacement) > 0.0001;
    const hasHeadMotion = Math.abs(this.headSquishSpring.displacement) > 0.0001 || Math.abs(this.headSquishSpring.velocity) > 0.001;

    if (!hasChestMotion && !hasTorsoMotion && !hasHeadMotion) return;

    // Apply left breast squish & bounce
    if (this.leftChestBones.length > 0) {
      const dispZ = this.leftChestSpring.displacement;
      const bulgeX = this.leftChestSpring.lateralX;
      const bulgeY = this.leftChestSpring.lateralY;
      for (const bone of this.leftChestBones) {
        bone.position.z += dispZ;
        bone.position.x += bulgeX * 0.6;
        bone.position.y += bulgeY * 0.4;
        bone.rotation.x += dispZ * 0.4;
        bone.rotation.z += dispZ * 0.2;
      }
    }

    // Apply right breast squish & bounce
    if (this.rightChestBones.length > 0) {
      const dispZ = this.rightChestSpring.displacement;
      const bulgeX = this.rightChestSpring.lateralX;
      const bulgeY = this.rightChestSpring.lateralY;
      for (const bone of this.rightChestBones) {
        bone.position.z += dispZ;
        bone.position.x -= bulgeX * 0.6;
        bone.position.y += bulgeY * 0.4;
        bone.rotation.x += dispZ * 0.4;
        bone.rotation.z -= dispZ * 0.2;
      }
    }

    // Bust adjust bone (parent) subtle center dip
    if (this.bustAdjustBone) {
      const avgDisp = (this.leftChestSpring.displacement + this.rightChestSpring.displacement) * 0.5;
      this.bustAdjustBone.position.z += avgDisp * 0.35;
    }

    // Torso subtle recoil
    if (this.spine2Bone && hasTorsoMotion) {
      this.spine2Bone.rotation.x += this.torsoRecoilSpring.displacement * 0.06;
    }

    // Head / cheek squish tilt & bob
    if (this.headBone && hasHeadMotion) {
      this.headBone.position.y += this.headSquishSpring.displacement * 0.5;
      this.headBone.rotation.z += this.headSquishSpring.velocity * 0.04;
    }

    this.mesh.skeleton.update();
  }

  update(delta: number) {
    if (!this.model || !this.mesh) return;

    const clampedDelta = Math.min(delta, 0.05);

    if (this.isDancing) {
      if (this.danceTransitionState === 'blend_out') {
        // Smooth crossfade out from dance pose back to procedural standing idle
        this.danceTransitionTimer += clampedDelta;
        const progress = Math.min(1.0, this.danceTransitionTimer / this.DANCE_BLEND_OUT_DURATION);
        const alpha = smootherstep(progress);

        // Advance idle timeline to compute live breathing, resting arms & gaze target
        this.elapsedTime += clampedDelta;
        this.updateProceduralIdle(clampedDelta);

        // Synchronize live procedural Euler rotations into quaternions for accurate slerp
        this.syncProceduralQuaternions();

        // Slerp all bones from exit dance pose to procedural idle target / rest pose
        if (this.mesh.skeleton) {
          for (const bone of this.mesh.skeleton.bones) {
            const snap = this.exitDanceSnapshot.get(bone);
            if (!snap) continue;

            const rest = this.boneRestTransforms.get(bone);
            const isProc = this.isProceduralBone(bone);

            let targetPos: THREE.Vector3;
            let targetQuat: THREE.Quaternion;

            if (bone === this.centerBone) {
              targetPos = bone.position;
              targetQuat = bone.quaternion;
            } else if (isProc) {
              targetPos = rest ? rest.position : bone.position;
              targetQuat = bone.quaternion;
            } else {
              targetPos = rest ? rest.position : bone.position;
              targetQuat = rest ? rest.quaternion : bone.quaternion;
            }

            bone.position.lerpVectors(snap.position, targetPos, alpha);
            bone.quaternion.slerpQuaternions(snap.quaternion, targetQuat, alpha);
          }
          this.mesh.skeleton.update();
        }

        // Fade out leftover dance morph influences smoothly to 0
        if (this.exitMorphSnapshot && this.mesh.morphTargetInfluences) {
          const morphs = this.mesh.morphTargetInfluences;
          const snapMorphs = this.exitMorphSnapshot;
          const count = Math.min(morphs.length, snapMorphs.length);
          for (let i = 0; i < count; i++) {
            morphs[i] = THREE.MathUtils.lerp(snapMorphs[i], 0, alpha);
          }
        }

        // Keep 3D Bullet physics active so hair and clothing settle naturally
        if (this.physicsEnabled) {
          this.updateIdlePhysics(clampedDelta);
        }

        if (progress >= 1.0) {
          this.finishStopDance();
        }
      } else {
        // Dance is actively animating (either blend_in or full dance)
        this.danceTime += clampedDelta;
        this.model.update(this.danceTime, { physics: this.physicsEnabled, ik: true });

        if (this.danceTransitionState === 'blend_in') {
          this.danceTransitionTimer += clampedDelta;
          const progress = Math.min(1.0, this.danceTransitionTimer / this.DANCE_BLEND_IN_DURATION);
          const alpha = smootherstep(progress);

          if (this.mesh.skeleton) {
            for (const bone of this.mesh.skeleton.bones) {
              const snap = this.preDanceSnapshot.get(bone);
              if (!snap) continue;

              bone.position.lerpVectors(snap.position, bone.position, alpha);
              bone.quaternion.slerpQuaternions(snap.quaternion, bone.quaternion, alpha);
            }
            this.mesh.skeleton.update();
          }

          if (progress >= 1.0) {
            this.danceTransitionState = 'dancing';
          }
        }
      }
    } else {
      this.elapsedTime += clampedDelta;

      // 1. Procedural idle motion (breathing, posture, arm resting pose, head tracking, blinking, gestures)
      this.updateProceduralIdle(clampedDelta);

      // 2. High-Fidelity Structured TypeScript Motion Player (Exact 200+ bones keyframe choreography!)
      if (structuredMotionPlayer.isPlaying) {
        structuredMotionPlayer.update(clampedDelta, (morphName, weight) => {
          this.applyMorphWeight(morphName, weight);
        });
      }

      // 3. Full 3D Bullet physics simulation in idle & structured motions (hair, twintails, skirt, ribbons, chest dynamics)
      if (this.physicsEnabled) {
        this.updateIdlePhysics(clampedDelta);
      }

      // 3b. Interactive tactile squish & spring bounce physics (poking, pinching, recoil)
      this.updateTouchSpringPhysics(clampedDelta);
    }

    // 4. Smooth expression morph interpolation
    this.updateMorphs(clampedDelta);
  }

  private updateIdlePhysics(delta: number) {
    if (!this.model || !this.mesh || !this.physicsEnabled) return;

    const runtime = this.model.runtime as any;
    if (!runtime || typeof runtime.stepExternalPhysics !== 'function') return;
    if (!runtime.externalPhysicsData && this.savedExternalPhysicsData) {
      runtime.externalPhysicsData = this.savedExternalPhysicsData;
    }
    if (!runtime.externalPhysicsData) return;

    // Safety: ensure mesh world matrix is updated from procedural bones
    this.mesh.updateWorldMatrix(false, true);

    const safeDelta = Math.min(Math.max(delta, 0.005), 0.033);
    const currTime = this.lastPhysicsTime + safeDelta;

    // Explicitly set previousEvaluateSeconds so Bullet knows this is continuous forward simulation, not a seek/reset
    runtime.previousEvaluateSeconds = this.lastPhysicsTime;
    runtime.state.seconds = currTime;
    runtime.state.frameRate = 60;

    try {
      runtime.stepExternalPhysics(this.lastPhysicsTime);
      this.lastPhysicsTime = currTime;
      runtime.previousEvaluateSeconds = currTime;
    } catch (e) {
      console.warn('Physics step error:', e);
    }
  }

  private updateProceduralIdle(delta: number) {
    // 1. Organic Multi-Bone Breathing & Posture Sway
    this.breathTimer += delta * 1.5;
    this.swayTimer += delta * 0.42;

    const breath = Math.sin(this.breathTimer);
    const sway = Math.sin(this.swayTimer);
    const spineRoll = sway * 0.008;
    const spineYaw = Math.cos(this.swayTimer * 0.5) * 0.015;

    // 2. Automatic Idle Gesture State Machine & Custom Trained Motion Engine
    const effectivePose = this.previewPose || (this.activeCustomMotion ? this.activeCustomMotion.pose : null);
    if (this.previewPose) {
      this.customMotionWeight = 1.0;
    } else if (this.activeCustomMotion) {
      this.customMotionTimer += delta;
      const progress = Math.min(1, this.customMotionTimer / this.customMotionDuration);
      this.customMotionWeight = Math.sin(progress * Math.PI);
      if (this.customMotionTimer >= this.customMotionDuration) {
        this.activeCustomMotion = null;
        this.customMotionWeight = 0;
      }
    } else {
      this.customMotionWeight = 0;
    }

    if (this.currentGesture === 'none' && !this.activeCustomMotion && !this.previewPose && !structuredMotionPlayer.isPlaying) {
      this.timeUntilNextGesture -= delta;
      if (this.timeUntilNextGesture <= 0) {
        const randomDef = IDLE_GESTURES[Math.floor(Math.random() * IDLE_GESTURES.length)];
        this.triggerGesture(randomDef.id);
      }
    } else if (this.currentGesture !== 'none') {
      this.gestureTimer += delta;
      const progress = Math.min(1, this.gestureTimer / this.gestureDuration);
      // Smooth bell curve envelope (0 -> 1 -> 0)
      this.gestureWeight = Math.sin(progress * Math.PI);

      if (this.gestureTimer >= this.gestureDuration) {
        this.currentGesture = 'none';
        this.gestureWeight = 0;
        this.timeUntilNextGesture = 3.5 + Math.random() * 4.0; // Next automatic gesture every 3.5-7.5s
      }
    }

    // Evaluate active idle gesture module
    const gestureOutput = evaluateIdleGesture(this.currentGesture, {
      timer: this.gestureTimer,
      weight: this.gestureWeight,
      elapsedTime: this.elapsedTime,
      breath,
      sway,
    });

    // 2b. Center Bounce & Pelvis / Hip Sway (learned from Poke Dance & Yurusite Neko)
    let centerOffsetY = (gestureOutput?.centerOffsetY ?? 0);
    let centerOffsetX = (gestureOutput?.centerOffsetX ?? 0);
    let hipsRollTarget = (gestureOutput?.hipsRoll ?? 0);
    let hipsYawTarget = (gestureOutput?.hipsYaw ?? 0);

    if (effectivePose && this.customMotionWeight > 0) {
      const w = this.customMotionWeight;
      if (effectivePose.hipsRoll !== undefined) hipsRollTarget += effectivePose.hipsRoll * w;
      if (effectivePose.hipsYaw !== undefined) hipsYawTarget += effectivePose.hipsYaw * w;
      if (effectivePose.dynamicsType === 'swaying') {
        hipsRollTarget += Math.sin((this.activeCustomMotion ? this.customMotionTimer : this.elapsedTime) * 3.2) * 0.14 * w;
      }
    }

    // Center bone bounce & grounded stance
    if (this.centerBone) {
      this.centerBone.position.x = THREE.MathUtils.lerp(this.centerBone.position.x, this.centerBoneRestPos.x + centerOffsetX, delta * 8.0);
      this.centerBone.position.y = THREE.MathUtils.lerp(this.centerBone.position.y, this.centerBoneRestPos.y + breath * 0.006 + centerOffsetY, delta * 8.0);
      this.centerBone.position.z = this.centerBoneRestPos.z;
      this.centerBone.rotation.z = sway * 0.004;
    }

    // Pelvis hip roll & sway
    if (this.hipsBone) {
      this.hipsBone.rotation.z = THREE.MathUtils.lerp(this.hipsBone.rotation.z, hipsRollTarget, delta * 4.5);
      this.hipsBone.rotation.y = THREE.MathUtils.lerp(this.hipsBone.rotation.y, hipsYawTarget, delta * 4.5);
    }

    // Spine & chest 3D breathing expansion (natural diaphragm expansion)
    if (this.spineBone) {
      this.spineBone.rotation.x = THREE.MathUtils.lerp(this.spineBone.rotation.x, breath * 0.012, delta * 3.5);
      this.spineBone.rotation.z = THREE.MathUtils.lerp(this.spineBone.rotation.z, spineRoll, delta * 3.5);
      this.spineBone.rotation.y = THREE.MathUtils.lerp(this.spineBone.rotation.y, spineYaw, delta * 3.5);
    }
    if (this.spine2Bone) {
      this.spine2Bone.rotation.x = THREE.MathUtils.lerp(this.spine2Bone.rotation.x, breath * 0.018, delta * 3.5);
    }

    // Subtle shoulder rise and fall with breathing
    if (this.leftShoulderBone) {
      this.leftShoulderBone.rotation.z = -breath * 0.008;
    }
    if (this.rightShoulderBone) {
      this.rightShoulderBone.rotation.z = breath * 0.008;
    }

    // Apply spine adjustments from trained motion
    if (effectivePose && this.customMotionWeight > 0 && this.spineBone) {
      const w = this.customMotionWeight;
      this.spineBone.rotation.x = THREE.MathUtils.lerp(this.spineBone.rotation.x, effectivePose.spinePitch, w * 0.85);
      this.spineBone.rotation.z = THREE.MathUtils.lerp(this.spineBone.rotation.z, effectivePose.spineRoll, w * 0.85);
      this.spineBone.rotation.y = THREE.MathUtils.lerp(this.spineBone.rotation.y, effectivePose.spineYaw, w * 0.85);
      if (effectivePose.dynamicsType === 'swaying') {
        this.spineBone.rotation.z += Math.sin((this.activeCustomMotion ? this.customMotionTimer : this.elapsedTime) * 2.5) * 0.04 * w;
      }
    }

    // 3. Relaxed Arms (Natural resting posture alongside body)
    let leftArmTargetZ = -0.62 + breath * 0.008;
    let leftArmTargetX = 0.08;
    let leftArmTargetY = 0.04;
    let leftElbowTargetZ = -0.15;
    let leftElbowTargetX = 0.0;
    let leftElbowTargetY = 0.0;

    let rightArmTargetZ = 0.62 - breath * 0.008;
    let rightArmTargetX = 0.08;
    let rightArmTargetY = -0.04;
    let rightElbowTargetZ = 0.15;
    let rightElbowTargetX = 0.0;
    let rightElbowTargetY = 0.0;
    let rightWristTargetZ = 0.0;
    let rightWristTargetX = 0.0;

    // Apply gesture arm modifications from modular gesture definition
    if (gestureOutput) {
      if (gestureOutput.leftArmTargetX !== undefined) leftArmTargetX = THREE.MathUtils.lerp(leftArmTargetX, gestureOutput.leftArmTargetX, this.gestureWeight);
      if (gestureOutput.leftArmTargetZ !== undefined) leftArmTargetZ = THREE.MathUtils.lerp(leftArmTargetZ, gestureOutput.leftArmTargetZ, this.gestureWeight);
      if (gestureOutput.leftArmTargetY !== undefined) leftArmTargetY = THREE.MathUtils.lerp(leftArmTargetY, gestureOutput.leftArmTargetY, this.gestureWeight);
      if (gestureOutput.leftElbowTargetZ !== undefined) leftElbowTargetZ = THREE.MathUtils.lerp(leftElbowTargetZ, gestureOutput.leftElbowTargetZ, this.gestureWeight);

      if (gestureOutput.rightArmTargetX !== undefined) rightArmTargetX = THREE.MathUtils.lerp(rightArmTargetX, gestureOutput.rightArmTargetX, this.gestureWeight);
      if (gestureOutput.rightArmTargetZ !== undefined) rightArmTargetZ = THREE.MathUtils.lerp(rightArmTargetZ, gestureOutput.rightArmTargetZ, this.gestureWeight);
      if (gestureOutput.rightArmTargetY !== undefined) rightArmTargetY = THREE.MathUtils.lerp(rightArmTargetY, gestureOutput.rightArmTargetY, this.gestureWeight);
      if (gestureOutput.rightElbowTargetZ !== undefined) rightElbowTargetZ = THREE.MathUtils.lerp(rightElbowTargetZ, gestureOutput.rightElbowTargetZ, this.gestureWeight);
      if (gestureOutput.rightWristTargetX !== undefined) rightWristTargetX = gestureOutput.rightWristTargetX;
      if (gestureOutput.rightWristTargetZ !== undefined) rightWristTargetZ = gestureOutput.rightWristTargetZ;
    }

    // Apply custom trained motion pose to arms
    if (effectivePose && this.customMotionWeight > 0) {
      const w = this.customMotionWeight;
      leftArmTargetZ = THREE.MathUtils.lerp(leftArmTargetZ, effectivePose.leftArmZ, w);
      leftArmTargetX = THREE.MathUtils.lerp(leftArmTargetX, effectivePose.leftArmX, w);
      leftArmTargetY = THREE.MathUtils.lerp(leftArmTargetY, effectivePose.leftArmY, w);
      leftElbowTargetZ = THREE.MathUtils.lerp(leftElbowTargetZ, effectivePose.leftElbowZ, w);

      rightArmTargetZ = THREE.MathUtils.lerp(rightArmTargetZ, effectivePose.rightArmZ, w);
      rightArmTargetX = THREE.MathUtils.lerp(rightArmTargetX, effectivePose.rightArmX, w);
      rightArmTargetY = THREE.MathUtils.lerp(rightArmTargetY, effectivePose.rightArmY, w);
      rightElbowTargetZ = THREE.MathUtils.lerp(rightElbowTargetZ, effectivePose.rightElbowZ, w);
      rightWristTargetZ = THREE.MathUtils.lerp(rightWristTargetZ, effectivePose.rightWristZ, w);
      rightWristTargetX = THREE.MathUtils.lerp(rightWristTargetX, effectivePose.rightWristX, w);

      if (effectivePose.dynamicsType === 'hand_wave') {
        rightWristTargetZ += Math.sin((this.activeCustomMotion ? this.customMotionTimer : this.elapsedTime) * 6.0) * 0.24 * w;
      }
    }

    if (this.leftArmBone) {
      this.leftArmBone.rotation.z = THREE.MathUtils.lerp(this.leftArmBone.rotation.z, leftArmTargetZ, delta * 3.5);
      this.leftArmBone.rotation.x = THREE.MathUtils.lerp(this.leftArmBone.rotation.x, leftArmTargetX, delta * 3.5);
      this.leftArmBone.rotation.y = THREE.MathUtils.lerp(this.leftArmBone.rotation.y, leftArmTargetY, delta * 3.5);
    }
    if (this.leftElbowBone) {
      this.leftElbowBone.rotation.z = THREE.MathUtils.lerp(this.leftElbowBone.rotation.z, leftElbowTargetZ, delta * 3.5);
      this.leftElbowBone.rotation.x = THREE.MathUtils.lerp(this.leftElbowBone.rotation.x, leftElbowTargetX, delta * 3.5);
      this.leftElbowBone.rotation.y = THREE.MathUtils.lerp(this.leftElbowBone.rotation.y, leftElbowTargetY, delta * 3.5);
    }
    // Only apply procedural right arm and finger rotations if structured motion player is NOT driving them
    if (!structuredMotionPlayer.isPlaying) {
      if (this.rightArmBone) {
        this.rightArmBone.rotation.z = THREE.MathUtils.lerp(this.rightArmBone.rotation.z, rightArmTargetZ, delta * 6.0);
        this.rightArmBone.rotation.x = THREE.MathUtils.lerp(this.rightArmBone.rotation.x, rightArmTargetX, delta * 6.0);
        this.rightArmBone.rotation.y = THREE.MathUtils.lerp(this.rightArmBone.rotation.y, rightArmTargetY, delta * 6.0);
      }
      if (this.rightElbowBone) {
        this.rightElbowBone.rotation.z = THREE.MathUtils.lerp(this.rightElbowBone.rotation.z, rightElbowTargetZ, delta * 6.0);
        this.rightElbowBone.rotation.x = THREE.MathUtils.lerp(this.rightElbowBone.rotation.x, rightElbowTargetX, delta * 6.0);
        this.rightElbowBone.rotation.y = THREE.MathUtils.lerp(this.rightElbowBone.rotation.y, rightElbowTargetY, delta * 6.0);
      }
      if (this.rightWristBone) {
        this.rightWristBone.rotation.z = THREE.MathUtils.lerp(this.rightWristBone.rotation.z, rightWristTargetZ, delta * 6.0);
        this.rightWristBone.rotation.x = THREE.MathUtils.lerp(this.rightWristBone.rotation.x, rightWristTargetX, delta * 6.0);
      }

      // 3b. Natural Finger Articulation
      const targetFingerCurl = Math.max(
        (gestureOutput?.fingerCurl ?? 0) * this.gestureWeight,
        (effectivePose?.fingerCurl ?? 0) * this.customMotionWeight
      );
      if (this.fingerBones.length > 0) {
        for (const bone of this.fingerBones) {
          const curlAngle = targetFingerCurl * 0.42;
          bone.rotation.z = THREE.MathUtils.lerp(bone.rotation.z, bone.name.startsWith('左') ? -curlAngle : curlAngle, delta * 5.0);
        }
      }
    }

    // 4. Natural Blinking with Anime Double-Blink
    this.blinkTimer += delta;
    if (this.isDoubleBlinkPending) {
      this.doubleBlinkTimer -= delta;
      if (this.doubleBlinkTimer <= 0) {
        this.isDoubleBlinkPending = false;
        this.isBlinking = true;
        this.blinkProgress = 0;
      }
    } else if (!this.isBlinking && this.blinkTimer >= this.nextBlinkTime) {
      this.isBlinking = true;
      this.blinkProgress = 0;
      this.nextBlinkTime = 2.4 + Math.random() * 3.6;
    }

    if (this.isBlinking) {
      this.blinkProgress += delta * 8.5;
      let blinkWeight = 0;
      if (this.blinkProgress <= 1.0) {
        blinkWeight = Math.sin(this.blinkProgress * Math.PI * 0.5);
      } else if (this.blinkProgress <= 2.0) {
        blinkWeight = Math.sin((2.0 - this.blinkProgress) * Math.PI * 0.5);
      } else {
        this.isBlinking = false;
        this.blinkTimer = 0;
        blinkWeight = 0;
        // 35% chance of anime double blink
        if (Math.random() < 0.35 && !this.isDoubleBlinkPending) {
          this.isDoubleBlinkPending = true;
          this.doubleBlinkTimer = 0.14;
        }
      }
      this.applyMorphWeight('まばたき', Math.max(0, Math.min(1, blinkWeight)));
    }

    // 5. Head Gaze Tracking & Gesture Head Offsets
    if (this.isTrackingEnabled && this.headBone) {
      // Micro-saccade eye twitch to feel alive
      this.saccadeTimer += delta;
      if (this.saccadeTimer >= this.nextSaccadeInterval) {
        this.saccadeTimer = 0;
        this.nextSaccadeInterval = 1.2 + Math.random() * 2.4;
        this.saccadeOffset.set(
          (Math.random() - 0.5) * 0.4,
          (Math.random() - 0.5) * 0.25,
          0
        );
      }

      // Gesture head tilt & look offsets from active modular idle gesture
      let gestureHeadRoll = gestureOutput?.headRoll ?? 0;
      let gestureHeadPitch = gestureOutput?.headPitch ?? 0;
      let gestureHeadYaw = gestureOutput?.headYaw ?? 0;
      let gestureSmile = gestureOutput?.smile ?? 0;

      // Apply head roll, pitch, yaw and morphs from custom trained motion
      if (effectivePose && this.customMotionWeight > 0) {
        const w = this.customMotionWeight;
        gestureHeadRoll += effectivePose.headRoll * w;
        gestureHeadPitch += effectivePose.headPitch * w;
        gestureHeadYaw += effectivePose.headYaw * w;

        if (effectivePose.dynamicsType === 'nodding') {
          gestureHeadPitch += Math.sin((this.activeCustomMotion ? this.customMotionTimer : this.elapsedTime) * 4.5) * 0.08 * w;
        }

        if (effectivePose.smile > 0 && this.currentEmotion === 'normal') {
          this.applyMorphWeight('にこり', effectivePose.smile * w);
        }
        if (effectivePose.blush > 0 && this.currentEmotion === 'normal') {
          this.applyMorphWeight('照れ', effectivePose.blush * w);
        }
        if (effectivePose.wink > 0 && this.currentEmotion === 'normal') {
          this.applyMorphWeight('ウィンク', effectivePose.wink * w);
        }
        if (effectivePose.serious > 0 && this.currentEmotion === 'normal') {
          this.applyMorphWeight('真面目', effectivePose.serious * w);
        }
      }

      // Apply subtle facial morph from gestures
      if (gestureSmile > 0 && this.currentEmotion === 'normal') {
        this.applyMorphWeight('にこり', gestureSmile);
      }
      if (gestureOutput?.blush && this.currentEmotion === 'normal') {
        this.applyMorphWeight('照れ', gestureOutput.blush);
      }

      const activeLookTarget = this.targetLookAt.clone().add(this.saccadeOffset);
      if (gestureOutput?.lookAtOffsetX !== undefined) {
        activeLookTarget.x += gestureOutput.lookAtOffsetX;
      }
      if (gestureOutput?.lookAtOffsetY !== undefined) {
        activeLookTarget.y += gestureOutput.lookAtOffsetY;
      }

      this.currentLookAt.lerp(activeLookTarget, delta * 3.5);

      const headPos = new THREE.Vector3();
      this.headBone.getWorldPosition(headPos);

      const dir = new THREE.Vector3().subVectors(this.currentLookAt, headPos).normalize();
      
      const targetYaw = Math.atan2(dir.x, dir.z) + gestureHeadYaw;
      const targetPitch = -Math.asin(Math.max(-0.99, Math.min(0.99, dir.y))) + gestureHeadPitch;

      const clampedYaw = Math.max(-0.45, Math.min(0.45, targetYaw));
      const clampedPitch = Math.max(-0.25, Math.min(0.25, targetPitch));

      if (this.neckBone) {
        this.neckBone.rotation.y = THREE.MathUtils.lerp(this.neckBone.rotation.y, clampedYaw * 0.35, delta * 4);
        this.neckBone.rotation.x = THREE.MathUtils.lerp(this.neckBone.rotation.x, clampedPitch * 0.35, delta * 4);
        this.neckBone.rotation.z = THREE.MathUtils.lerp(this.neckBone.rotation.z, gestureHeadRoll * 0.3, delta * 4);
      }
      this.headBone.rotation.y = THREE.MathUtils.lerp(this.headBone.rotation.y, clampedYaw * 0.65, delta * 4);
      this.headBone.rotation.x = THREE.MathUtils.lerp(this.headBone.rotation.x, clampedPitch * 0.65, delta * 4);
      this.headBone.rotation.z = THREE.MathUtils.lerp(this.headBone.rotation.z, gestureHeadRoll * 0.7, delta * 4);
    }
  }

  private updateMorphs(delta: number) {
    if (!this.mesh || !this.mesh.morphTargetDictionary || !this.mesh.morphTargetInfluences) return;

    const allActiveMorphs = new Set([
      ...Object.keys(this.currentMorphWeights),
      ...Object.keys(this.targetMorphWeights),
    ]);

    for (const morphName of allActiveMorphs) {
      if (morphName === 'まばたき' && this.isBlinking) continue;

      const target = this.targetMorphWeights[morphName] || 0;
      const current = this.currentMorphWeights[morphName] || 0;
      const next = THREE.MathUtils.lerp(current, target, delta * 7.0);

      this.currentMorphWeights[morphName] = next;
      this.applyMorphWeight(morphName, next);
    }

    if ((tts.isSpeaking || chenVoice.isPlaying) && this.lipSyncIntensity > 0) {
      const vowels = ['あ', 'い', 'う', 'え', 'お'];
      for (const v of vowels) {
        const isCurrent = v === this.lipSyncVowel;
        const target = isCurrent ? this.lipSyncIntensity : 0;
        const curr = this.currentMorphWeights[v] || 0;
        const smoothed = THREE.MathUtils.lerp(curr, target, delta * 12.0);
        this.currentMorphWeights[v] = smoothed;
        this.applyMorphWeight(v, smoothed);
      }
    }
  }

  private applyMorphWeight(morphName: string, weight: number) {
    if (!this.mesh || !this.mesh.morphTargetDictionary || !this.mesh.morphTargetInfluences) return;
    const idx = this.mesh.morphTargetDictionary[morphName];
    if (idx !== undefined) {
      this.mesh.morphTargetInfluences[idx] = Math.max(0, Math.min(1, weight));
    }
  }
}
