import * as THREE from 'three';
import type { IdleGestureDefinition } from '../types';

/**
 * Gentle Wave — Friendly right-hand wave greeting with a bright smile.
 */
export const gentleWave: IdleGestureDefinition = {
  id: 'gentle_wave',
  displayName: 'Gentle Wave (Otentik MMD)',
  description: 'Lambaian tangan otentik MMD dengan artikulasi 15 jari, bahu, siku, dan senyuman.',
  duration: 2.67,
  emotion: 'happy',
  update(ctx) {
    return {
      smile: 0.85 * ctx.weight,
    };
  },
};
