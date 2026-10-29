import type { IdleGestureDefinition } from '../types';

/**
 * Confident Officer — Military posture with firm arms and confident chin.
 */
export const confidentOfficer: IdleGestureDefinition = {
  id: 'confident_officer',
  displayName: 'Confident Officer',
  description: 'Military-style arms-at-sides stance, demonstrating discipline.',
  duration: 4.2,
  emotion: 'serious',
  update(ctx) {
    return {
      leftArmTargetX: -0.09,
      rightArmTargetX: -0.09,
      leftArmTargetZ: -0.68,
      rightArmTargetZ: 0.68,
      headPitch: -0.06 * ctx.weight,
      smile: 0.3 * ctx.weight,
    };
  },
};
