import type { DanceTrack } from '../../types';

/**
 * Michino Timothy — Bouncy upbeat anime choreography with happy steps.
 * Motion: motions/michino_timothy.vmd | Audio: audio/michino_timothy.wav
 */
export const michinoTimothy: DanceTrack = {
  id: 'michino_timothy',
  name: 'Michino Timothy (ミチノチモシー)',
  motionUrl: `${import.meta.env.BASE_URL}motions/michino_timothy.vmd`,
  audioUrl: `${import.meta.env.BASE_URL}audio/michino_timothy.wav`,
  durationEstimate: 45,
  description: 'Bouncy upbeat anime choreography with happy steps.',
};
