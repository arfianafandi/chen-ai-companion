import type { TrainedMotion } from '../types';

/**
 * Bertolak Pinggang — Authoritative akimbo stance, hands on hips like a field commander.
 * Triggered by: tegas, siap bertindak, komandan, patuh, dengar
 */
export const bertolakPinggang: TrainedMotion = {
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
};
