import type { IdleGestureDefinition } from '../types';

/**
 * Curious Tilt — Cute waifu head tilt with a subtle inquisitive smile.
 */
export const curiousTilt: IdleGestureDefinition = {
  id: 'curious_tilt',
  displayName: 'Curious Tilt',
  description: 'Cute head tilt with slight smile, looking inquisitively at Administrator.',
  duration: 4.2,
  emotion: 'smile',
  update(ctx) {
    return {
      headRoll: 0.16 * ctx.weight,  // Cute waifu head tilt
      headPitch: -0.04 * ctx.weight,
      smile: 0.5 * ctx.weight,
    };
  },
};
