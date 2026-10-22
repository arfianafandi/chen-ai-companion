import type { SceneManager } from './scene';
import type { ChenCharacter } from './character';

export type GraphicsPreset = 'performance' | 'ultra-light' | 'high' | 'custom';
export type ShadowQuality = 'off' | 'low' | 'medium' | 'high';

export interface GraphicsConfig {
  preset: GraphicsPreset;
  pixelRatio: number;
  outline: boolean;
  shadows: ShadowQuality;
  physics: boolean;
  particles: boolean;
}

export const PRESET_CONFIGS: Record<Exclude<GraphicsPreset, 'custom'>, GraphicsConfig> = {
  'performance': {
    preset: 'performance',
    pixelRatio: 1.0,
    outline: false,
    shadows: 'medium', // 1024x1024 PCF (Crisp & smooth anime shadows)
    physics: true,     // 45Hz optimized spring physics
    particles: true,
  },
  'ultra-light': {
    preset: 'ultra-light',
    pixelRatio: 0.85,  // Slight downscale for maximum FPS on low-end laptops/integrated GPU
    outline: false,
    shadows: 'off',    // Zero shadow map rendering overhead
    physics: false,    // Zero spring calculation overhead
    particles: false,
  },
  'high': {
    preset: 'high',
    pixelRatio: Math.min(typeof window !== 'undefined' ? window.devicePixelRatio : 1, 1.25),
    outline: true,     // Skinned Manga lineart
    shadows: 'high',   // 2048x2048 PCFSoft
    physics: true,
    particles: true,
  },
};

const STORAGE_KEY = 'chen_graphics_settings';

export class QualityManager {
  public currentConfig: GraphicsConfig;
  private sceneManager: SceneManager | null = null;
  private chen: ChenCharacter | null = null;
  private listeners: Array<(config: GraphicsConfig) => void> = [];

  constructor() {
    this.currentConfig = this.loadConfig();
  }

  public init(sceneManager: SceneManager, chen: ChenCharacter) {
    this.sceneManager = sceneManager;
    this.chen = chen;
    this.applyConfig(this.currentConfig);
  }

  public onChange(fn: (config: GraphicsConfig) => void) {
    this.listeners.push(fn);
  }

  private notify() {
    for (const listener of this.listeners) {
      listener(this.currentConfig);
    }
  }

  private loadConfig(): GraphicsConfig {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.preset && PRESET_CONFIGS[parsed.preset as Exclude<GraphicsPreset, 'custom'>]) {
          return {
            ...PRESET_CONFIGS[parsed.preset as Exclude<GraphicsPreset, 'custom'>],
            ...parsed,
          };
        }
      }
    } catch {
      // Ignore JSON error
    }
    // Default to 'performance' (Ringan / 60 FPS)
    return { ...PRESET_CONFIGS.performance };
  }

  public saveConfig() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.currentConfig));
    } catch {
      // Ignore storage error
    }
  }

  public setPreset(preset: GraphicsPreset) {
    if (preset === 'custom') {
      this.currentConfig.preset = 'custom';
    } else {
      const template = PRESET_CONFIGS[preset];
      this.currentConfig = { ...template };
    }
    this.applyConfig(this.currentConfig);
    this.saveConfig();
    this.notify();
  }

  public cyclePreset(): GraphicsPreset {
    const order: GraphicsPreset[] = ['performance', 'ultra-light', 'high'];
    const currentIndex = order.indexOf(this.currentConfig.preset);
    const nextPreset = order[(currentIndex + 1) % order.length];
    this.setPreset(nextPreset);
    return nextPreset;
  }

  public updateOption<K extends keyof GraphicsConfig>(key: K, value: GraphicsConfig[K]) {
    this.currentConfig[key] = value;
    this.currentConfig.preset = 'custom';
    this.applyConfig(this.currentConfig);
    this.saveConfig();
    this.notify();
  }

  public applyConfig(config: GraphicsConfig) {
    if (!this.sceneManager || !this.chen) return;

    // 1. Pixel Ratio & Resolution
    this.sceneManager.setPixelRatio(config.pixelRatio);

    // 2. Dynamic Shadow Quality
    this.sceneManager.setShadowQuality(config.shadows);
    this.chen.setShadowsEnabled(config.shadows !== 'off');

    // 3. Manga Lineart Outline
    this.chen.setOutlineEnabled(config.outline);

    // 4. Spring Physics (Hair & Clothing dynamics)
    this.chen.setPhysicsEnabled(config.physics);

    // 5. Talos-II Ambient Dust Particles
    this.sceneManager.toggleParticles(config.particles);
  }
}

export const quality = new QualityManager();
