import type { IVmdStructuredMotion } from '../types';

export interface StructuredMotionEntry {
  id: string;
  name: string;
  description: string;
  durationSeconds: number;
  totalFrames: number;
  load: () => Promise<IVmdStructuredMotion>;
}

export const STRUCTURED_MOTIONS: StructuredMotionEntry[] = [
  {
    id: 'pokedance',
    name: 'Poke Dance (Full 195 Bones)',
    description: 'Koreografi lengkap 195 tulang dengan goyangan pinggul, pantulan ritmis, dan ekspresi otentik.',
    durationSeconds: 15.53,
    totalFrames: 466,
    load: async () => (await import('./pokedance')).default,
  },
  {
    id: 'yurusiteNeko',
    name: 'Yurusite Neko (Full 244 Bones & 30 Jari)',
    description: 'Tarian cakar kucing penuh dengan artikulasi 30 jari dan lip-sync vokal Jepang lengkap.',
    durationSeconds: 15.17,
    totalFrames: 455,
    load: async () => (await import('./yurusiteNeko')).default,
  },
  {
    id: 'michinoTimothy',
    name: 'Michi no Timothy (Full 319 Bones & Idol Cheer)',
    description: 'Koreografi idol ceria dengan 319 tulang deformasi halus dan kontak mata bebas mengikuti kursor.',
    durationSeconds: 15.73,
    totalFrames: 472,
    load: async () => (await import('./michinoTimothy')).default,
  },
  {
    id: 'gentleWave',
    name: 'Lambaian Tangan Ramah Penuh Pesona (Full Body & 15 Jari)',
    description: 'Lambaian tangan ramah dengan telapak tangan menghadap Dokutah, waifu head tilt imut, dan gerakan tubuh harmonis.',
    durationSeconds: 3.6,
    totalFrames: 109,
    load: async () => (await import('./gentleWave')).default,
  },
];
