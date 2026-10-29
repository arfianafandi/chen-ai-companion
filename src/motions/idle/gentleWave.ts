import * as THREE from 'three';
import type { IdleGestureDefinition } from '../types';

/**
 * Gentle Wave — Friendly right-hand wave greeting with a bright smile.
 */
export const gentleWave: IdleGestureDefinition = {
  id: 'gentle_wave',
  displayName: 'Lambaian Tangan Ramah Penuh Pesona',
  description: 'Lambaian tangan ramah dengan telapak tangan menghadap Dokutah, 15 jari fanned-out, waifu head tilt imut, dan gerakan tubuh harmonis.',
  duration: 3.6,
  emotion: 'happy',
  update(ctx) {
    return {
      smile: 0.85 * ctx.weight,
    };
  },
};
