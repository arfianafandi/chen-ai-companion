import type { TrainedMotion } from '../types';

/**
 * Neko Paws — Kawaii cat-paw pose with both hands raised and blushing expression.
 * Triggered by: kucing, neko, imut, cute, kawaii, manis, gemes
 */
export const nekoPaws: TrainedMotion = {
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
    smile: 0.75,
    blush: 0.85,
    wink: 0.0,
    serious: 0.0,
    fingerCurl: 0.88,
    hipsRoll: 0.05,
    dynamicsType: 'hand_wave',
  },
};
