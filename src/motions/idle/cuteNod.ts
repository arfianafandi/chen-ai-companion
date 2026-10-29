import type { IdleGestureDefinition } from '../types';

/**
 * Cute Nod — Rhythmic nodding with an approving gentle smile.
 */
export const cuteNod: IdleGestureDefinition = {
  id: 'cute_nod',
  displayName: 'Cute Nod',
  description: 'Rhythmic nodding with smile, acknowledging Administrator attentively.',
  duration: 4.0,
  emotion: 'smile',
  update(ctx) {
    return {
      headPitch: Math.sin(ctx.timer * 4.5) * 0.08 * ctx.weight,
      smile: 0.6 * ctx.weight,
    };
  },
};
