import type { TrainedMotion } from '../types';

/**
 * Lambaian Ceria — Cheerful double wave greeting pose with bright smile.
 * Triggered by: halo, hai, pagi, siang, malam, dadah, bye
 */
export const lambaianCeria: TrainedMotion = {
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
};
