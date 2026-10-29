import type { IdleGestureDefinition } from '../types';

/**
 * Stretch & Relax — Light upper body stretch with relaxed posture and calm smile.
 */
export const stretchRelax: IdleGestureDefinition = {
  id: 'stretch_relax',
  displayName: 'Stretch & Relax',
  description: 'Relaxed stretching pose after continuous field duties.',
  duration: 4.2,
  emotion: 'smile',
  update(ctx) {
    return {
      headPitch: 0.06 * ctx.weight,
      smile: 0.4 * ctx.weight,
      leftArmTargetX: 0.15,
      rightArmTargetX: 0.15,
    };
  },
};
