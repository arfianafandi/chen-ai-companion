import type { EmotionType } from '../types';

export interface IVmdBoneKeyframe {
  frame: number;
  time: number;
  position: [number, number, number];
  rotation: [number, number, number, number];
  interpolation?: number[];
}

export interface IVmdMorphKeyframe {
  frame: number;
  time: number;
  weight: number;
}

export interface IVmdCameraKeyframe {
  frame: number;
  time: number;
  distance: number;
  position: [number, number, number];
  rotation: [number, number, number];
  fov: number;
  perspective: boolean;
  interpolation?: number[];
}

export interface IVmdIKInfo {
  name: string;
  enable: boolean;
}

export interface IVmdIKKeyframe {
  frame: number;
  time: number;
  show: boolean;
  ikList: IVmdIKInfo[];
}

export interface IVmdMetadata {
  version: string;
  modelName: string;
  totalFrames: number;
  durationSeconds: number;
  fps: number;
  coordSystem: string;
}

export interface IVmdStructuredMotion {
  metadata: IVmdMetadata;
  bones: Record<string, IVmdBoneKeyframe[]>;
  morphs: Record<string, IVmdMorphKeyframe[]>;
  cameras?: IVmdCameraKeyframe[];
  ik?: IVmdIKKeyframe[];
}

export interface MotionPoseData {
  // Head & Neck
  headYaw: number;      // -0.5 to 0.5 (turn left/right)
  headPitch: number;    // -0.3 to 0.3 (nod up/down)
  headRoll: number;     // -0.3 to 0.3 (tilt left/right)
  neckYaw: number;
  neckPitch: number;

  // Spine & Posture
  spinePitch: number;   // -0.15 to 0.15 (lean back/forward)
  spineRoll: number;    // -0.15 to 0.15 (side tilt)
  spineYaw: number;     // -0.15 to 0.15

  // Left Arm & Elbow
  leftArmZ: number;     // -1.0 to 1.0 (raise / lower)
  leftArmX: number;     // -1.0 to 1.0 (forward / back)
  leftArmY: number;     // -1.0 to 1.0 (twist)
  leftElbowZ: number;   // -1.2 to 1.2 (bend elbow)
  leftWristZ: number;   // -0.8 to 0.8

  // Right Arm & Elbow
  rightArmZ: number;    // -1.0 to 1.0 (raise / lower)
  rightArmX: number;    // -1.0 to 1.0 (forward / back)
  rightArmY: number;    // -1.0 to 1.0 (twist)
  rightElbowZ: number;  // -1.2 to 1.2 (bend elbow)
  rightWristZ: number;  // -0.8 to 0.8
  rightWristX: number;

  // Morphs
  smile: number;        // 0 to 1
  blush: number;        // 0 to 1
  wink: number;         // 0 to 1
  serious: number;      // 0 to 1

  // Pelvis / Hips & Finger dynamics (learned from VMD motion study)
  hipsRoll?: number;    // -0.3 to 0.3 (hip sway left/right)
  hipsYaw?: number;     // -0.3 to 0.3
  fingerCurl?: number;  // 0 (open/relaxed) to 1.0 (curled neko paws / soft fist)

  // Dynamic rhythmic behavior during playback
  dynamicsType: 'static' | 'breathing' | 'hand_wave' | 'nodding' | 'swaying';
}

export interface TrainedMotion {
  id: string;
  name: string;
  description: string;
  triggerKeywords: string[];  // Triggers this motion when user or Chen uses these words!
  triggerEmotion?: EmotionType;
  duration: number;           // Duration in seconds (default 4.0s)
  pose: MotionPoseData;
  createdAt: number;
}

export type IdleGesture = 
  | 'none' 
  | 'curious_tilt' 
  | 'gentle_wave' 
  | 'confident_officer' 
  | 'shy_glance' 
  | 'thinking_pose' 
  | 'cute_nod' 
  | 'stretch_relax'
  | 'pokedance_bounce'
  | 'playful_neko'
  | 'idol_cheer';

export interface IdleGestureContext {
  timer: number;
  weight: number;      // 0.0 to 1.0 (smooth bell curve envelope)
  elapsedTime: number;
  breath: number;
  sway: number;
}

export interface IdleGestureResult {
  // Center bounce & Hip sway (learned from VMD motion study)
  centerOffsetY?: number;
  centerOffsetX?: number;
  hipsRoll?: number;
  hipsYaw?: number;

  // Finger curl (0 = relaxed open, 1.0 = curled neko paws)
  fingerCurl?: number;

  // Head orientation offsets
  headRoll?: number;
  headPitch?: number;
  headYaw?: number;

  // Arm target overrides / lerps
  leftArmTargetX?: number;
  leftArmTargetZ?: number;
  leftArmTargetY?: number;
  leftElbowTargetZ?: number;

  rightArmTargetX?: number;
  rightArmTargetZ?: number;
  rightArmTargetY?: number;
  rightElbowTargetZ?: number;
  rightWristTargetX?: number;
  rightWristTargetZ?: number;

  // Morph weights (0 to 1)
  smile?: number;
  blush?: number;

  // Eye tracking offsets
  lookAtOffsetX?: number;
  lookAtOffsetY?: number;
}

export interface IdleGestureDefinition {
  id: IdleGesture;
  displayName: string;
  description: string;
  duration: number;
  emotion?: EmotionType;
  update(ctx: IdleGestureContext): IdleGestureResult;
}
