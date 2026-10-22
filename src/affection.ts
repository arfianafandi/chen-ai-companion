import confetti from 'canvas-confetti';
import { sfx } from './audio';
import type { AffectionLevel } from './types';

export const AFFECTION_LEVELS: AffectionLevel[] = [
  {
    level: 1,
    title: 'Formal Colleague',
    minXp: 0,
    maxXp: 100,
    description: 'Chen treats you with polite martial courtesy and strict protocol.',
  },
  {
    level: 2,
    title: 'Field Partner',
    minXp: 100,
    maxXp: 300,
    description: 'Chen shares details about her sword katas and trusts your operational judgment.',
    unlockedPose: 'Combat Dual Stance',
  },
  {
    level: 3,
    title: 'Trusted Confidante',
    minXp: 300,
    maxXp: 650,
    description: 'Chen lowers her guard, smiles openly, and blushes when you praise her.',
    unlockedPose: 'Cute Cat Pose (Yurushite Neko)',
  },
  {
    level: 4,
    title: 'Special Bond',
    minXp: 650,
    maxXp: 1200,
    description: 'Deep affection and mutual protection. Chen looks at you with tender warmth.',
    unlockedPose: 'Michino Timothy Dance',
  },
  {
    level: 5,
    title: 'Endfield Soulmate',
    minXp: 1200,
    maxXp: 2000,
    description: 'An unbreakable vow beneath the twin moons of Talos-II. Forever by your side.',
    unlockedPose: 'Poke Dance Extravaganza',
  },
];

export interface GiftItem {
  id: string;
  name: string;
  icon: string;
  xpGain: number;
  description: string;
  voiceLine: string;
}

export const GIFTS: GiftItem[] = [
  {
    id: 'energy_drink',
    name: 'Endfield Energy Drink',
    icon: '⚡',
    xpGain: 30,
    description: 'High-calorie electrolyte drink for prolonged field combat.',
    voiceLine: 'Thank you Administrator! Just what I needed after sword drills.',
  },
  {
    id: 'herbal_tea',
    name: 'Talos Mountain Tea',
    icon: '🍵',
    xpGain: 40,
    description: 'Steeped fragrant tea that relaxes tense muscles and calms the mind.',
    voiceLine: 'Ah... this aroma reminds me of home. Let us share a cup together.',
  },
  {
    id: 'whetstone',
    name: 'Diamond Whetstone',
    icon: '🗡️',
    xpGain: 55,
    description: 'Precision sharpening stone crafted to hone dual steel blades.',
    voiceLine: 'A fine whetstone! With this, my twin blades will never dull on the front lines.',
  },
  {
    id: 'jade_hairpin',
    name: 'Dragon Jade Hairpin',
    icon: '🌸',
    xpGain: 80,
    description: 'An exquisite hand-carved hairpin suited for Chen Qianyu’s black hair.',
    voiceLine: 'For... me? It is beautiful. Will you help me put it on?',
  },
];

export class AffectionManager {
  public xp: number = 25; // Start with gentle friendly XP
  public onLevelUp?: (newLevel: AffectionLevel) => void;
  public onXpChange?: (currentXp: number, level: AffectionLevel, progressPercent: number) => void;

  constructor() {
    this.loadFromStorage();
  }

  getCurrentLevel(): AffectionLevel {
    for (let i = AFFECTION_LEVELS.length - 1; i >= 0; i--) {
      if (this.xp >= AFFECTION_LEVELS[i].minXp) {
        return AFFECTION_LEVELS[i];
      }
    }
    return AFFECTION_LEVELS[0];
  }

  getProgressPercentage(): number {
    const current = this.getCurrentLevel();
    if (current.level >= 5) return 100;
    const range = current.maxXp - current.minXp;
    const curr = Math.max(0, this.xp - current.minXp);
    return Math.min(100, Math.floor((curr / range) * 100));
  }

  addXp(amount: number): boolean {
    const oldLevel = this.getCurrentLevel();
    this.xp += amount;
    this.saveToStorage();

    const newLevel = this.getCurrentLevel();
    const hasLeveledUp = newLevel.level > oldLevel.level;

    if (hasLeveledUp) {
      sfx.playLevelUp();
      this.triggerConfetti();
      if (this.onLevelUp) {
        this.onLevelUp(newLevel);
      }
    }

    if (this.onXpChange) {
      this.onXpChange(this.xp, newLevel, this.getProgressPercentage());
    }

    return hasLeveledUp;
  }

  triggerConfetti() {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ffe600', '#ff4d6d', '#00f0ff', '#ffffff'],
      });
    } catch {}
  }

  private saveToStorage() {
    try {
      localStorage.setItem('chen_affection_xp', this.xp.toString());
    } catch {}
  }

  private loadFromStorage() {
    try {
      const saved = localStorage.getItem('chen_affection_xp');
      if (saved) {
        this.xp = Math.max(0, parseInt(saved, 10));
      }
    } catch {}
  }

  reset() {
    this.xp = 0;
    this.saveToStorage();
    if (this.onXpChange) {
      this.onXpChange(this.xp, this.getCurrentLevel(), this.getProgressPercentage());
    }
  }
}

export const affection = new AffectionManager();
