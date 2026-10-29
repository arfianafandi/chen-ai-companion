import * as THREE from 'three';
import type { IdleGestureDefinition } from '../types';

/**
 * Gentle Wave — Friendly right-hand wave greeting with a bright smile.
 */
export const gentleWave: IdleGestureDefinition = {
  id: 'gentle_wave',
  displayName: 'Lambaian Tangan Ramah',
  description: 'Lambaian tangan ramah terbuka dengan waifu head tilt manis, anggukan riang, dan senyuman.',
  duration: 3.2,
  emotion: 'happy',
  update(ctx) {
    return {
      // Waifu head tilt ke kanan (ke arah lambaian) yang imut & manis
      headRoll: 0.10 * ctx.weight,
      // Anggukan manis riang mengikuti ritme lambaian
      headPitch: (Math.sin(ctx.timer * 5.0) * 0.035 - 0.02) * ctx.weight,
      // Ayunan pinggul feminin halus
      hipsRoll: 0.03 * ctx.weight,
      // Senyuman manis anime dan rona pipi imut
      smile: 0.85 * ctx.weight,
      blush: 0.25 * ctx.weight,
    };
  },
};
