import * as THREE from 'three';
import './style.css';
import { SceneManager } from './scene';
import { ChenCharacter } from './character';
import { InteractionManager } from './interaction';
import { UIManager } from './ui';
import { tts, chenVoice, sfx } from './audio';
import { ai } from './ai';
import { quality } from './quality';

async function bootstrap() {
  const app = document.getElementById('app')!;

  // 1. Create HTML Structure
  app.innerHTML = `
    <!-- LOADING SCREEN -->
    <div id="loading-screen">
      <div class="loading-content">
        <div class="loading-logo">ENDFIELD // AI</div>
        <div class="loading-subtitle">INITIALIZING CHEN QIANYU (陈千语)...</div>
        <div class="loading-bar-track">
          <div class="loading-bar-fill" id="loading-bar"></div>
        </div>
        <div class="loading-tip" id="loading-status">Compiling MMD shaders, morphs and rigging...</div>
      </div>
    </div>

    <!-- 3D VIEWPORT -->
    <div id="canvas-container"></div>

    <!-- HUD OVERLAY -->
    <div id="ui-overlay"></div>
  `;

  const canvasContainer = document.getElementById('canvas-container')!;
  const uiOverlay = document.getElementById('ui-overlay')!;
  const loadingBar = document.getElementById('loading-bar')!;
  const loadingStatus = document.getElementById('loading-status')!;
  const loadingScreen = document.getElementById('loading-screen')!;

  try {
    // 2. Initialize 3D Scene
    loadingStatus.textContent = 'Setting up WebGL render engine...';
    loadingBar.style.width = '25%';
    const sceneManager = new SceneManager(canvasContainer);

    // 3. Load Chen Qianyu PMX Model
    loadingStatus.textContent = 'Loading Chen Qianyu PMX model & textures...';
    loadingBar.style.width = '50%';
    const chen = new ChenCharacter();
    const characterRoot = await chen.load((progress) => {
      loadingBar.style.width = `${50 + progress * 0.4}%`;
    });

    sceneManager.scene.add(characterRoot);
    console.log('✅ CHARACTER ROOT ADDED TO SCENE!', characterRoot);
    (window as any).__chen = chen;
    (window as any).__scene = sceneManager;

    // Initialize Graphic Quality Optimizer (Preset: Performance 60 FPS)
    quality.init(sceneManager, chen);

    // 4. Initialize Interaction & Raycasting (Touch reactions)
    loadingStatus.textContent = 'Calibrating raycast touch hitboxes & emotion morphs...';
    loadingBar.style.width = '95%';
    const interaction = new InteractionManager(chen, sceneManager.camera, canvasContainer);

    // 5. Initialize UI
    const ui = new UIManager(uiOverlay, chen, sceneManager);

    // Wire interaction dialogue to UI bubble & chat log
    interaction.onTouchDialogue = (dialogue, emotion) => {
      ui.showSpeechBubble(dialogue, emotion);
      ui.addChatMessage('chen', dialogue, emotion);
    };

    // 6. Complete Loading
    loadingBar.style.width = '100%';
    loadingStatus.textContent = 'Operator Chen Qianyu ready!';

    setTimeout(() => {
      loadingScreen.style.opacity = '0';
      setTimeout(() => {
        loadingScreen.remove();

        // Initial Greeting matching selected Voice Pack
        const isZh = chenVoice.language === 'zh';
        const greeting = isZh
          ? '终末地工业干员，陈千语，向您报到！管理员，很荣幸能再次见到您！[EMOTE:smile]\n(Operator Endfield Industries, Chen Qianyu, melapor! Suatu kehormatan bisa bertemu lagi dengan Anda, Administrator!)'
          : 'エンドフィールド工業所属、陳千語、着任しました！管理官、お会いできて光栄です！[EMOTE:smile]\n(Operator Endfield Industries, Chen Qianyu, melapor untuk bertugas! Senang bertemu lagi, Administrator!)';
        ui.showSpeechBubble(greeting, 'smile');
        ui.addChatMessage('chen', greeting, 'smile');

        // Play authentic voice on user touch / click (bypassing browser autoplay mute)
        let greeted = false;
        const playInitialGreeting = () => {
          if (greeted) return;
          greeted = true;
          sfx.initCtx();
          chenVoice.playVoice('greeting');
        };

        window.addEventListener('pointerdown', playInitialGreeting, { once: true });
        window.addEventListener('keydown', playInitialGreeting, { once: true });

        // Also attempt direct play in case user already clicked earlier
        chenVoice.playVoice('greeting').catch(() => {});
      }, 500);
    }, 400);

    // 7. Render & Animation Loop
    const clock = new THREE.Clock();
    let frameCount = 0;
    let lastFpsTime = performance.now();

    function animate(now: number) {
      requestAnimationFrame(animate);
      const delta = Math.min(clock.getDelta(), 0.1); // Clamp large delta drops

      chen.update(delta);
      sceneManager.render(delta);

      // Real-time FPS Monitor
      frameCount++;
      if (now - lastFpsTime >= 500) {
        const fps = Math.round((frameCount * 1000) / (now - lastFpsTime));
        frameCount = 0;
        lastFpsTime = now;
        ui.updateFpsDisplay(fps);
      }
    }

    requestAnimationFrame(animate);

  } catch (error) {
    console.error('Failed to initialize application:', error);
    loadingStatus.textContent = `Initialization Error: ${(error as Error).message}`;
    loadingStatus.style.color = '#ef4444';
  }
}

if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', bootstrap);
} else {
  bootstrap();
}
