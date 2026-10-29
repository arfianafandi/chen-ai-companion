import type { TrainedMotion } from '../types';

/**
 * Poke Sway — Signature rhythmic hip sway & shoulder-hand stance from Poke Dance.
 * Triggered by: pokedance, joget, goyang, bounce, poke, tarian, dance
 */
export const pokeSway: TrainedMotion = {
  id: 'motion_poke_sway',
  name: 'Pose Goyang Poke Dance (Poke Sway)',
  description: 'Pose goyangan pinggul ritmis ikonik Poke Dance dengan senyum ceria.',
  triggerKeywords: ['pokedance', 'joget', 'goyang', 'bounce', 'poke', 'tarian', 'dance', 'senang'],
  triggerEmotion: 'happy',
  duration: 4.8,
  createdAt: Date.now(),
  pose: {
    headYaw: 0.05,
    headPitch: -0.04,
    headRoll: -0.14,
    neckYaw: 0.02,
    neckPitch: -0.02,
    spinePitch: 0.02,
    spineRoll: -0.04,
    spineYaw: 0.03,
    leftArmZ: -0.42,
    leftArmX: 0.22,
    leftArmY: -0.14,
    leftElbowZ: 0.72,
    leftWristZ: -0.1,
    rightArmZ: 0.42,
    rightArmX: 0.22,
    rightArmY: 0.14,
    rightElbowZ: -0.72,
    rightWristZ: 0.15,
    rightWristX: 0.05,
    smile: 0.85,
    blush: 0.2,
    wink: 0.0,
    serious: 0.0,
    hipsRoll: 0.15,
    hipsYaw: 0.05,
    fingerCurl: 0.35,
    dynamicsType: 'swaying',
  },
};
