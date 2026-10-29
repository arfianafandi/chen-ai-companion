import * as THREE from 'three';
import type { IdleGestureDefinition } from '../types';

/**
 * Gentle Wave — Friendly right-hand wave greeting with a bright smile.
 */
export const gentleWave: IdleGestureDefinition = {
  id: 'gentle_wave',
  displayName: 'Gentle Wave',
  description: 'Friendly right-hand wave, greeting Administrator with warmth.',
  duration: 4.2,
  emotion: 'happy',
  update(ctx) {
    return {
      rightArmTargetX: 0.48,
      rightArmTargetZ: 0.22,
      rightElbowTargetZ: 0.62,
      rightWristTargetZ: Math.sin(ctx.timer * 6.5) * 0.24 * ctx.weight,
      rightWristTargetX: 0.12 * ctx.weight,
      headPitch: 0.04 * ctx.weight,
      smile: 0.7 * ctx.weight,
    };
  },
};
