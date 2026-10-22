import type { EmotionType } from './types';

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

const STORAGE_KEY = 'chen_trained_motions_v2';

export const DEFAULT_MOTION_PRESETS: TrainedMotion[] = [
  {
    id: 'motion_hormat_militer',
    name: 'Hormat Militer (Salute)',
    description: 'Pose sikap sempurna dengan tangan kanan memberi hormat ala Operator Endfield.',
    triggerKeywords: ['hormat', 'salute', 'siap', 'lapor', 'misi', 'instruksi'],
    triggerEmotion: 'serious',
    duration: 4.2,
    createdAt: Date.now(),
    pose: {
      headYaw: 0.0,
      headPitch: -0.06,
      headRoll: 0.0,
      neckYaw: 0.0,
      neckPitch: -0.04,
      spinePitch: -0.06,
      spineRoll: 0.0,
      spineYaw: 0.0,
      leftArmZ: -0.62,
      leftArmX: 0.08,
      leftArmY: 0.04,
      leftElbowZ: -0.15,
      leftWristZ: 0.0,
      rightArmZ: 0.38,
      rightArmX: 0.42,
      rightArmY: 0.15,
      rightElbowZ: 0.95,
      rightWristZ: 0.22,
      rightWristX: -0.15,
      smile: 0.0,
      blush: 0.0,
      wink: 0.0,
      serious: 0.8,
      dynamicsType: 'breathing',
    },
  },
  {
    id: 'motion_tangan_di_dada',
    name: 'Setia / Janji (Hand on Heart)',
    description: 'Tangan diletakkan di dada dengan tatapan tulus dan senyum hangat penuh dedikasi.',
    triggerKeywords: ['setia', 'janji', 'terima kasih', 'percaya', 'hati', 'lindung'],
    triggerEmotion: 'happy',
    duration: 4.5,
    createdAt: Date.now(),
    pose: {
      headYaw: 0.05,
      headPitch: 0.04,
      headRoll: 0.08,
      neckYaw: 0.03,
      neckPitch: 0.02,
      spinePitch: 0.02,
      spineRoll: 0.02,
      spineYaw: 0.03,
      leftArmZ: -0.60,
      leftArmX: 0.08,
      leftArmY: 0.04,
      leftElbowZ: -0.15,
      leftWristZ: 0.0,
      rightArmZ: 0.24,
      rightArmX: 0.32,
      rightArmY: -0.12,
      rightElbowZ: 0.85,
      rightWristZ: -0.18,
      rightWristX: 0.12,
      smile: 0.75,
      blush: 0.35,
      wink: 0.0,
      serious: 0.0,
      dynamicsType: 'breathing',
    },
  },
  {
    id: 'motion_neko_paws',
    name: 'Pose Kucing Kawaii (Neko Paws)',
    description: 'Kedua tangan diangkat imut menyerupai cakar kucing dengan ekspresi tersipu manis.',
    triggerKeywords: ['kucing', 'neko', 'imut', 'cute', 'kawaii', 'manis', 'gemes'],
    triggerEmotion: 'blush',
    duration: 4.8,
    createdAt: Date.now(),
    pose: {
      headYaw: -0.08,
      headPitch: -0.02,
      headRoll: 0.18,
      neckYaw: -0.04,
      neckPitch: 0.0,
      spinePitch: 0.04,
      spineRoll: 0.03,
      spineYaw: 0.0,
      leftArmZ: 0.25,
      leftArmX: 0.35,
      leftArmY: 0.2,
      leftElbowZ: 0.75,
      leftWristZ: -0.25,
      rightArmZ: 0.28,
      rightArmX: 0.36,
      rightArmY: -0.2,
      rightElbowZ: 0.78,
      rightWristZ: 0.25,
      rightWristX: -0.12,
      smile: 0.65,
      blush: 0.85,
      wink: 0.0,
      serious: 0.0,
      dynamicsType: 'hand_wave',
    },
  },
  {
    id: 'motion_bertolak_pinggang',
    name: 'Tegas / Bertolak Pinggang (Akimbos)',
    description: 'Pose berwibawa dengan kedua tangan bersiap di pinggang khas komandan lapangan.',
    triggerKeywords: ['tegas', 'siap bertindak', 'komandan', 'patuh', 'dengar'],
    triggerEmotion: 'serious',
    duration: 4.2,
    createdAt: Date.now(),
    pose: {
      headYaw: 0.0,
      headPitch: -0.08,
      headRoll: 0.0,
      neckYaw: 0.0,
      neckPitch: -0.05,
      spinePitch: -0.08,
      spineRoll: 0.0,
      spineYaw: 0.0,
      leftArmZ: 0.18,
      leftArmX: -0.08,
      leftArmY: 0.15,
      leftElbowZ: 0.65,
      leftWristZ: 0.15,
      rightArmZ: 0.18,
      rightArmX: -0.08,
      rightArmY: -0.15,
      rightElbowZ: 0.65,
      rightWristZ: -0.15,
      rightWristX: 0.0,
      smile: 0.15,
      blush: 0.0,
      wink: 0.0,
      serious: 0.7,
      dynamicsType: 'breathing',
    },
  },
  {
    id: 'motion_lambaian_ceria',
    name: 'Lambaian Tangan Ceria (Double Wave)',
    description: 'Melambaikan tangan dengan antusias dan ramah saat menyapa Administrator.',
    triggerKeywords: ['halo', 'hai', 'pagi', 'siang', 'malam', 'dadah', 'bye'],
    triggerEmotion: 'happy',
    duration: 4.2,
    createdAt: Date.now(),
    pose: {
      headYaw: 0.08,
      headPitch: 0.04,
      headRoll: -0.1,
      neckYaw: 0.04,
      neckPitch: 0.02,
      spinePitch: 0.02,
      spineRoll: -0.02,
      spineYaw: 0.02,
      leftArmZ: -0.05,
      leftArmX: 0.02,
      leftArmY: 0.0,
      leftElbowZ: -0.05,
      leftWristZ: 0.0,
      rightArmZ: 0.52,
      rightArmX: 0.45,
      rightArmY: 0.1,
      rightElbowZ: 0.7,
      rightWristZ: 0.3,
      rightWristX: 0.15,
      smile: 0.85,
      blush: 0.25,
      wink: 0.0,
      serious: 0.0,
      dynamicsType: 'hand_wave',
    },
  },
];

export class MotionTrainerSystem {
  public trainedMotions: TrainedMotion[] = [];
  public currentEditingPose: MotionPoseData = this.getNeutralPose();
  public isPreviewing = false;
  public onMotionsChange?: (motions: TrainedMotion[]) => void;

  constructor() {
    this.load();
  }

  private load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        this.trainedMotions = JSON.parse(raw);
      } else {
        this.trainedMotions = [...DEFAULT_MOTION_PRESETS];
        this.save();
      }
    } catch (e) {
      this.trainedMotions = [...DEFAULT_MOTION_PRESETS];
    }
  }

  public save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.trainedMotions));
      if (this.onMotionsChange) this.onMotionsChange(this.trainedMotions);
    } catch (e) {
      console.warn('Failed to save trained motions:', e);
    }
  }

  public getNeutralPose(): MotionPoseData {
    return {
      headYaw: 0.0,
      headPitch: 0.0,
      headRoll: 0.0,
      neckYaw: 0.0,
      neckPitch: 0.0,
      spinePitch: 0.0,
      spineRoll: 0.0,
      spineYaw: 0.0,
      leftArmZ: 0.0,
      leftArmX: 0.0,
      leftArmY: 0.0,
      leftElbowZ: 0.0,
      leftWristZ: 0.0,
      rightArmZ: 0.0,
      rightArmX: 0.0,
      rightArmY: 0.0,
      rightElbowZ: 0.0,
      rightWristZ: 0.0,
      rightWristX: 0.0,
      smile: 0.0,
      blush: 0.0,
      wink: 0.0,
      serious: 0.0,
      dynamicsType: 'breathing',
    };
  }

  public saveNewMotion(
    name: string,
    description: string,
    triggerKeywords: string[],
    triggerEmotion: EmotionType = 'smile',
    duration: number = 4.0,
    pose: MotionPoseData
  ): TrainedMotion {
    const id = 'motion_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6);
    const newMotion: TrainedMotion = {
      id,
      name: name.trim(),
      description: description.trim() || 'Motion hasil latihan mandiri bersama Administrator.',
      triggerKeywords: triggerKeywords.map(k => k.trim().toLowerCase()).filter(Boolean),
      triggerEmotion,
      duration: Math.max(2.0, Math.min(10.0, duration)),
      pose: { ...pose },
      createdAt: Date.now(),
    };

    this.trainedMotions.unshift(newMotion);
    this.save();
    return newMotion;
  }

  public deleteMotion(id: string) {
    this.trainedMotions = this.trainedMotions.filter(m => m.id !== id);
    this.save();
  }

  public resetToDefaults() {
    this.trainedMotions = [...DEFAULT_MOTION_PRESETS];
    this.save();
  }

  // Find matching trained motion by keywords
  public findMatchingMotion(text: string): TrainedMotion | null {
    const clean = text.toLowerCase();
    for (const motion of this.trainedMotions) {
      for (const kw of motion.triggerKeywords) {
        if (clean.includes(kw)) {
          return motion;
        }
      }
    }
    return null;
  }
}

export const motionTrainer = new MotionTrainerSystem();
