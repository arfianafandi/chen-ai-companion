import type { DanceTrack } from '../../types';

/**
 * Poke Dance — Charming rhythmic hip sway & hand gestures.
 * Motion: motions/pokedance.vmd | Audio: audio/pokedance.wav
 */
export const pokedance: DanceTrack = {
  id: 'pokedance',
  name: 'Poke Dance (ポケアニ)',
  motionUrl: `${import.meta.env.BASE_URL}motions/pokedance.vmd`,
  audioUrl: `${import.meta.env.BASE_URL}audio/pokedance.wav`,
  durationEstimate: 35,
  description: 'Charming rhythmic hip sway & hand gestures.',
};
