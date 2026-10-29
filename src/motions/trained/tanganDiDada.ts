import type { TrainedMotion } from '../types';

/**
 * Tangan di Dada — Hand on heart, sincere pledge pose with warm smile.
 * Triggered by: setia, janji, terima kasih, percaya, hati, lindung
 */
export const tanganDiDada: TrainedMotion = {
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
};
