import type { TrainedMotion } from '../types';

/**
 * Hormat Militer — Military salute pose with right hand raised to forehead.
 * Triggered by: hormat, salute, siap, lapor, misi, instruksi
 */
export const hormatMiliter: TrainedMotion = {
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
};
