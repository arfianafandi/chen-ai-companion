import * as THREE from 'three';
import type { IdleGestureDefinition } from '../types';

/**
 * Gentle Wave — Friendly right-hand wave greeting with a bright smile.
 */
export const gentleWave: IdleGestureDefinition = {
  id: 'gentle_wave',
  displayName: 'Lambaian Tangan Ramah',
  description: 'Lambaian tangan ramah terbuka (jauh dari kepala) dengan artikulasi 15 jari, bahu, siku, dan senyuman.',
  duration: 3.0,
  emotion: 'happy',
  update(ctx) {
    return {
      smile: 0.85 * ctx.weight,
    };
  },
};
