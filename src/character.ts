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

export type IdleGesture = 
  | 'none' 
  | 'curious_tilt' 
  | 'gentle_wave' 
  | 'confident_officer' 
  | 'shy_glance' 
  | 'thinking_pose' 
  | 'cute_nod' 
  | 'stretch_relax';

export class ChenCharacter {
  public model: ThreeMmdModel | null = null;
  public root: THREE.Group | null = null;
  public mesh: THREE.SkinnedMesh | null = null;
  private loader: ThreeMmdLoader | null = null;

  // Animation & Motion State
  public isDancing = false;
  public currentDanceId: string | null = null;
  public danceTime = 0;
  private cachedAnimations = new Map<string, ThreeMmdAnimation>();
  private savedExternalPhysicsData: any = null;

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
    // Chest / Heart (y: 14.5 - 16.5)
    createHitSphere('chest', 1.7, new THREE.Vector3(0, 15.3, 0.5));
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
    this.currentGesture = gesture;
    this.activeCustomMotion = null;
    this.previewPose = null;
    this.gestureTimer = 0;
    this.gestureDuration = 4.2;
    this.gestureWeight = 0;
  }

  public playTrainedMotion(motion: TrainedMotion) {
    if (this.isDancing) return;
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

  async playDance(motionUrl: string, audioUrl: string, danceId: string): Promise<void> {
    if (!this.model || !this.loader) return;

    try {
      this.isDancing = true;
      this.currentDanceId = danceId;
      this.danceTime = 0; // Reset dance time to 0 so dance starts from frame 0!

      let anim = this.cachedAnimations.get(motionUrl);
      if (!anim) {
        anim = await this.loader.loadAnimation(motionUrl);
        this.cachedAnimations.set(motionUrl, anim);
      }

      this.model.setAnimation(anim);

      await danceAudio.play(audioUrl, () => {
        this.stopDance();
      });
    } catch (err) {
      console.error('Failed to play dance:', err);
      this.stopDance();
    }
  }

  stopDance() {
    this.isDancing = false;
    this.currentDanceId = null;
    this.danceTime = 0;
    this.lastPhysicsTime = 0;
    danceAudio.stop();
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

  update(delta: number) {
    if (!this.model || !this.mesh) return;

    const clampedDelta = Math.min(delta, 0.05);

    if (this.isDancing) {
      this.danceTime += clampedDelta;
      // Clamped delta to prevent physics explosion/stutters during dance; IK solves dance keyframes
      this.model.update(this.danceTime, { physics: this.physicsEnabled, ik: true });
    } else {
      this.elapsedTime += clampedDelta;

      // 1. Procedural idle motion (breathing, posture, arm resting pose, head tracking, blinking, gestures)
      this.updateProceduralIdle(clampedDelta);

      // 2. Full 3D Bullet physics simulation in idle (hair, twintails, skirt, ribbons, chest dynamics)
      if (this.physicsEnabled) {
        this.updateIdlePhysics(clampedDelta);
      }
    }

    // 3. Smooth expression morph interpolation
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

    // Feet stay firmly grounded in authentic stance; subtle vertical chest breath bounce
    if (this.centerBone) {
      this.centerBone.position.x = this.centerBoneRestPos.x;
      this.centerBone.position.y = this.centerBoneRestPos.y + breath * 0.006;
      this.centerBone.position.z = this.centerBoneRestPos.z;
      this.centerBone.rotation.z = sway * 0.004;
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

    if (this.currentGesture === 'none' && !this.activeCustomMotion && !this.previewPose) {
      this.timeUntilNextGesture -= delta;
      if (this.timeUntilNextGesture <= 0) {
        const gestures: IdleGesture[] = [
          'curious_tilt',
          'gentle_wave',
          'confident_officer',
          'shy_glance',
          'thinking_pose',
          'cute_nod',
          'stretch_relax'
        ];
        this.currentGesture = gestures[Math.floor(Math.random() * gestures.length)];
        this.gestureTimer = 0;
        this.gestureDuration = 4.2;
      }
    } else if (this.currentGesture !== 'none') {
      this.gestureTimer += delta;
      const progress = Math.min(1, this.gestureTimer / this.gestureDuration);
      // Smooth bell curve envelope (0 -> 1 -> 0)
      this.gestureWeight = Math.sin(progress * Math.PI);

      if (this.gestureTimer >= this.gestureDuration) {
        this.currentGesture = 'none';
        this.gestureWeight = 0;
        this.timeUntilNextGesture = 2.5 + Math.random() * 4.0; // Next automatic gesture every 2.5-6.5s!
      }
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

    // Apply gesture arm motions
    if (this.currentGesture === 'gentle_wave') {
      // Right hand raises to wave gracefully
      rightArmTargetX = THREE.MathUtils.lerp(rightArmTargetX, 0.48, this.gestureWeight);
      rightArmTargetZ = THREE.MathUtils.lerp(rightArmTargetZ, 0.22, this.gestureWeight);
      rightElbowTargetZ = THREE.MathUtils.lerp(rightElbowTargetZ, 0.62, this.gestureWeight);
      rightWristTargetZ = Math.sin(this.gestureTimer * 6.5) * 0.24 * this.gestureWeight;
      rightWristTargetX = 0.12 * this.gestureWeight;
    } else if (this.currentGesture === 'thinking_pose') {
      // Right hand touches chin thoughtfully
      rightArmTargetX = THREE.MathUtils.lerp(rightArmTargetX, 0.36, this.gestureWeight);
      rightArmTargetZ = THREE.MathUtils.lerp(rightArmTargetZ, 0.14, this.gestureWeight);
      rightElbowTargetZ = THREE.MathUtils.lerp(rightElbowTargetZ, 0.68, this.gestureWeight);
      rightWristTargetX = -0.14 * this.gestureWeight;
    } else if (this.currentGesture === 'confident_officer') {
      leftArmTargetX = THREE.MathUtils.lerp(leftArmTargetX, -0.09, this.gestureWeight);
      rightArmTargetX = THREE.MathUtils.lerp(rightArmTargetX, -0.09, this.gestureWeight);
      leftArmTargetZ = THREE.MathUtils.lerp(leftArmTargetZ, -0.68, this.gestureWeight);
      rightArmTargetZ = THREE.MathUtils.lerp(rightArmTargetZ, 0.68, this.gestureWeight);
    } else if (this.currentGesture === 'shy_glance') {
      leftArmTargetZ = THREE.MathUtils.lerp(leftArmTargetZ, -0.68, this.gestureWeight);
      rightArmTargetZ = THREE.MathUtils.lerp(rightArmTargetZ, 0.68, this.gestureWeight);
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
    if (this.rightArmBone) {
      this.rightArmBone.rotation.z = THREE.MathUtils.lerp(this.rightArmBone.rotation.z, rightArmTargetZ, delta * 3.5);
      this.rightArmBone.rotation.x = THREE.MathUtils.lerp(this.rightArmBone.rotation.x, rightArmTargetX, delta * 3.5);
      this.rightArmBone.rotation.y = THREE.MathUtils.lerp(this.rightArmBone.rotation.y, rightArmTargetY, delta * 3.5);
    }
    if (this.rightElbowBone) {
      this.rightElbowBone.rotation.z = THREE.MathUtils.lerp(this.rightElbowBone.rotation.z, rightElbowTargetZ, delta * 3.5);
      this.rightElbowBone.rotation.x = THREE.MathUtils.lerp(this.rightElbowBone.rotation.x, rightElbowTargetX, delta * 3.5);
      this.rightElbowBone.rotation.y = THREE.MathUtils.lerp(this.rightElbowBone.rotation.y, rightElbowTargetY, delta * 3.5);
    }
    if (this.rightWristBone) {
      this.rightWristBone.rotation.z = THREE.MathUtils.lerp(this.rightWristBone.rotation.z, rightWristTargetZ, delta * 3.5);
      this.rightWristBone.rotation.x = THREE.MathUtils.lerp(this.rightWristBone.rotation.x, rightWristTargetX, delta * 3.5);
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

      // Gesture head tilt & look offsets
      let gestureHeadRoll = 0;
      let gestureHeadPitch = 0;
      let gestureHeadYaw = 0;
      let gestureSmile = 0;

      if (this.currentGesture === 'curious_tilt') {
        gestureHeadRoll = 0.16 * this.gestureWeight; // Cute waifu head tilt
        gestureHeadPitch = -0.04 * this.gestureWeight;
        gestureSmile = 0.5 * this.gestureWeight;
      } else if (this.currentGesture === 'gentle_wave') {
        gestureHeadPitch = 0.04 * this.gestureWeight;
        gestureSmile = 0.7 * this.gestureWeight;
      } else if (this.currentGesture === 'confident_officer') {
        gestureHeadPitch = -0.06 * this.gestureWeight;
        gestureSmile = 0.3 * this.gestureWeight;
      } else if (this.currentGesture === 'shy_glance') {
        gestureHeadYaw = 0.28 * this.gestureWeight; // Shy glance away
        gestureHeadPitch = 0.09 * this.gestureWeight;
        gestureSmile = 0.3 * this.gestureWeight;
      } else if (this.currentGesture === 'thinking_pose') {
        gestureHeadRoll = -0.08 * this.gestureWeight;
        gestureHeadPitch = -0.05 * this.gestureWeight;
        gestureSmile = 0.1 * this.gestureWeight;
      } else if (this.currentGesture === 'cute_nod') {
        gestureHeadPitch = Math.sin(this.gestureTimer * 4.5) * 0.08 * this.gestureWeight;
        gestureSmile = 0.6 * this.gestureWeight;
      } else if (this.currentGesture === 'stretch_relax') {
        gestureHeadPitch = 0.06 * this.gestureWeight;
        gestureSmile = 0.4 * this.gestureWeight;
      }

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
      if (this.currentGesture === 'shy_glance' && this.currentEmotion === 'normal') {
        this.applyMorphWeight('照れ', 0.8 * this.gestureWeight);
      }

      const activeLookTarget = this.targetLookAt.clone().add(this.saccadeOffset);
      if (this.currentGesture === 'shy_glance') {
        activeLookTarget.x += 4.5 * this.gestureWeight;
        activeLookTarget.y -= 2.0 * this.gestureWeight;
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
