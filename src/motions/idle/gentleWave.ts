import * as THREE from 'three';
import type { IdleGestureDefinition } from '../types';

/**
 * Gentle Wave — Friendly right-hand wave greeting with a bright smile.
 */
export const gentleWave: IdleGestureDefinition = {
  id: 'gentle_wave',
  displayName: 'Lambaian Tangan Terbuka',
  description: 'Lambaian tangan ramah dengan telapak tangan menghadap ke depan, 15 jari terbuka anggun, dan senyuman manis.',
  duration: 3.2,
  emotion: 'happy',
  update(ctx) {
    return {
      smile: 0.85 * ctx.weight,
    };
  },
};
