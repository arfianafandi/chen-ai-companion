import type { IdleGestureDefinition } from '../types';

/**
 * Shy Glance — Shy look away with cute cheek blush and averted eyes.
 */
export const shyGlance: IdleGestureDefinition = {
  id: 'shy_glance',
  displayName: 'Shy Glance',
  description: 'Averted gaze with cute cheek blush, feeling fluttered near Administrator.',
  duration: 4.5,
  emotion: 'blush',
  update(ctx) {
    return {
      leftArmTargetZ: -0.68,
      rightArmTargetZ: 0.68,
      headYaw: 0.28 * ctx.weight,   // Shy glance away
      headPitch: 0.09 * ctx.weight,
      smile: 0.3 * ctx.weight,
      blush: 0.8 * ctx.weight,
      lookAtOffsetX: 4.5 * ctx.weight,
      lookAtOffsetY: -2.0 * ctx.weight,
    };
  },
};
