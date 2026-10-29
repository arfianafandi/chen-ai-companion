import type { IdleGesture, IdleGestureContext, IdleGestureResult, IdleGestureDefinition } from '../types';

import { curiousTilt } from './curiousTilt';
import { gentleWave } from './gentleWave';
import { confidentOfficer } from './confidentOfficer';
import { shyGlance } from './shyGlance';
import { thinkingPose } from './thinkingPose';
import { cuteNod } from './cuteNod';
import { stretchRelax } from './stretchRelax';

export {
  curiousTilt,
  gentleWave,
  confidentOfficer,
  shyGlance,
  thinkingPose,
  cuteNod,
  stretchRelax,
};

export type { IdleGesture, IdleGestureContext, IdleGestureResult, IdleGestureDefinition };

export const IDLE_GESTURES: IdleGestureDefinition[] = [
  curiousTilt,
  gentleWave,
  confidentOfficer,
  shyGlance,
  thinkingPose,
  cuteNod,
  stretchRelax,
];

export const IDLE_GESTURE_MAP = new Map<IdleGesture, IdleGestureDefinition>(
  IDLE_GESTURES.map(g => [g.id, g])
);

/**
 * Evaluates an active idle gesture by its ID.
 * Returns null if gesture is 'none' or not found.
 */
export function evaluateIdleGesture(
  gestureId: IdleGesture,
  ctx: IdleGestureContext
): IdleGestureResult | null {
  if (gestureId === 'none') return null;
  const def = IDLE_GESTURE_MAP.get(gestureId);
  if (!def) return null;
  return def.update(ctx);
}
