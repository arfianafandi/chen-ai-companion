import type { TrainedMotion } from '../types';

/**
 * Idol Cheer — Energetic upper-body support and cheer gesture inspired by Michi no Timothy.
 * Triggered by: semangat, idol, cheer, hore, heba, yey, cemerlang, dukung
 */
export const idolCheerPose: TrainedMotion = {
  id: 'motion_idol_cheer',
  name: 'Pose Semangat Idol (Idol Cheer)',
  description: 'Pose sorak idol ceria di depan dada menyemangati Administrator dengan senyum berseri.',
  triggerKeywords: ['semangat', 'idol', 'cheer', 'hore', 'hebat', 'yey', 'cemerlang', 'dukung', 'ayo'],
  triggerEmotion: 'happy',
  duration: 4.5,
  createdAt: Date.now(),
  pose: {
    headYaw: 0.0,
    headPitch: -0.06,
    headRoll: 0.08,
    neckYaw: 0.0,
    neckPitch: -0.02,
    spinePitch: 0.05,
    spineRoll: 0.02,
    spineYaw: 0.0,
    leftArmZ: -0.28,
    leftArmX: 0.46,
    leftArmY: -0.15,
    leftElbowZ: 0.8,
    leftWristZ: -0.05,
    rightArmZ: 0.28,
    rightArmX: 0.46,
    rightArmY: 0.15,
    rightElbowZ: -0.8,
    rightWristZ: 0.12,
    rightWristX: 0.15,
    smile: 0.95,
    blush: 0.35,
    wink: 0.0,
    serious: 0.0,
    hipsRoll: 0.04,
    hipsYaw: 0.0,
    fingerCurl: 0.2,
    dynamicsType: 'nodding',
  },
};
