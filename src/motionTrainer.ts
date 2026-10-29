import type { EmotionType } from './types';
import type { MotionPoseData, TrainedMotion } from './motions/types';
import { DEFAULT_MOTION_PRESETS } from './motions/trained';

export type { MotionPoseData, TrainedMotion };
export { DEFAULT_MOTION_PRESETS };

const STORAGE_KEY = 'chen_trained_motions_v2';

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
        const loaded = JSON.parse(raw);
        const loadedIds = new Set(loaded.map((m: any) => m.id));
        const missingDefaults = DEFAULT_MOTION_PRESETS.filter(d => !loadedIds.has(d.id));
        this.trainedMotions = [...loaded, ...missingDefaults];
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
      hipsRoll: 0.0,
      hipsYaw: 0.0,
      fingerCurl: 0.0,
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
