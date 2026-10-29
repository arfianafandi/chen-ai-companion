import { affection, GIFTS, type GiftItem } from './affection';
import { ChenCharacter, STRUCTURED_MOTIONS } from './character';
import { SceneManager, type CameraPreset } from './scene';
import { ai, stt } from './ai';
import { tts, sfx, chenVoice, danceAudio } from './audio';
import { quality, type GraphicsConfig, type GraphicsPreset } from './quality';
import type { EmotionType } from './types';
import { neuralMemory, type LearnedMemory } from './neuralMemory';
import { motionTrainer, type TrainedMotion, type MotionPoseData, DEFAULT_MOTION_PRESETS } from './motionTrainer';

import { DANCE_TRACKS } from './motions/dance';
export { DANCE_TRACKS };

export class UIManager {
  private container: HTMLElement;
  private chen: ChenCharacter;
  private sceneManager: SceneManager;

  // UI State
  private isStudioOpen = false;
  private isGiftModalOpen = false;
  private isSettingsOpen = false;
  private isUIHidden = false;
  private speechTimer: number | null = null;

  constructor(container: HTMLElement, chen: ChenCharacter, sceneManager: SceneManager) {
    this.container = container;
    this.chen = chen;
    this.sceneManager = sceneManager;

    this.renderHUD();
    this.setupEventListeners();
    this.updateAffectionUI();
    this.updateQualityUI(quality.currentConfig);
    quality.onChange((cfg) => this.updateQualityUI(cfg));
  }

  private renderHUD() {
    this.container.innerHTML = `
      <!-- TOP HUD -->
      <header class="hud-top">
        <div class="hud-brand">
          <div class="brand-badge">ENDFIELD</div>
          <div class="brand-info">
            <span class="operator-name">CHEN QIANYU</span>
            <span class="operator-title">OPERATOR // SPECIALIST</span>
          </div>
        </div>

        <div class="hud-affection" id="hud-affection-widget">
          <div class="affection-header">
            <span class="level-badge" id="level-badge">LV. 1 FORMAL</span>
            <span class="xp-text" id="xp-text">25 / 100 XP</span>
          </div>
          <div class="affection-bar-track">
            <div class="affection-bar-fill" id="affection-bar-fill" style="width: 25%"></div>
          </div>
          <button class="gift-btn" id="open-gift-btn" title="Give Gift">
            <span>🎁</span>
            <span class="btn-text">Gift</span>
          </button>
        </div>

        <div class="hud-top-actions">
          <button class="fps-badge-btn" id="fps-badge-btn" title="Mode Performa Grafis (Klik untuk ganti: Ringan / Hemat / Tinggi)">
            <span class="fps-indicator green" id="fps-dot">●</span>
            <span id="fps-counter">60 FPS</span>
            <span class="preset-label performance" id="preset-badge">RINGAN</span>
          </button>
          <div class="cam-presets">
            <button class="cam-btn active" data-cam="chat" title="Portrait Cam"><span class="cam-icon">💬</span><span class="cam-text"> Chat</span></button>
            <button class="cam-btn" data-cam="face" title="Face Waifu Cam"><span class="cam-icon">👤</span><span class="cam-text"> Face</span></button>
            <button class="cam-btn" data-cam="full" title="Full Body Dance Cam"><span class="cam-icon">💃</span><span class="cam-text"> Full</span></button>
          </div>
          <button class="icon-btn" id="studio-btn" title="Motion & Expression Studio">
            <span>🎨</span><span class="btn-text-full"> Studio</span>
          </button>
          <button class="icon-btn neural-core-btn" id="neural-btn" title="AI Neural Matrix (Latih Respon & Motion Mandiri)">
            <span>🧠</span><span class="btn-text-full"> Neural Core</span>
          </button>
          <button class="icon-btn icon-only" id="settings-btn" title="AI & Voice Settings">
            ⚙️
          </button>
          <button class="icon-btn icon-only" id="hide-ui-btn" title="Hide UI (Clean View)">
            👁️
          </button>
        </div>
      </header>

      <!-- SPEECH BUBBLE POPUP (Near Character) -->
      <div class="speech-bubble" id="speech-bubble" style="display: none;">
        <div class="bubble-header">
          <span class="bubble-tag" id="bubble-emotion-tag">SMILE</span>
          <button class="bubble-close" id="bubble-close-btn">&times;</button>
        </div>
        <p class="bubble-text" id="bubble-text"></p>
      </div>

      <!-- BOTTOM CHAT DECK (Grok Ani style) -->
      <div class="hud-bottom-deck" id="hud-bottom-deck">
        <!-- 1. Chat History Drawer (Opens upward above chips & input) -->
        <div class="chat-history-drawer" id="chat-history-drawer" style="display: none;">
          <div class="chat-drawer-header">
            <span>📜 TRANSMISSION LOG</span>
            <button class="chat-drawer-close" id="close-chat-drawer">&times;</button>
          </div>
          <div class="messages-container" id="messages-container"></div>
        </div>

        <!-- 2. Chat History Toggle Pill -->
        <div class="chat-drawer-toggle" id="toggle-chat-history">
          <span id="chat-toggle-text">Show Chat History (0) ▲</span>
        </div>

        <!-- 3. Quick Chips -->
        <div class="quick-chips">
          <button class="chip-btn" data-action="headpat">💖 Headpat</button>
          <button class="chip-btn" data-action="praise">✨ You're Cute</button>
          <button class="chip-btn" data-action="tea">🍵 Mountain Tea</button>
          <button class="chip-btn" data-action="swords">⚔️ Dual Blades</button>
          <button class="chip-btn" data-action="pokedance">💃 Poke Dance!</button>
        </div>

        <!-- 4. Input Row -->
        <div class="chat-input-row">
          <button class="mic-btn" id="mic-btn" title="Voice Input (STT)">
            <span class="mic-icon">🎙️</span>
          </button>
          <input 
            type="text" 
            id="chat-input" 
            placeholder="Type a message for Chen Qianyu (English, Indonesian, Japanese)..." 
            autocomplete="off"
          />
          <button class="send-btn" id="send-btn">
            Send ➜
          </button>
        </div>
      </div>

      <!-- STUDIO DRAWER (Right) -->
      <aside class="studio-drawer" id="studio-drawer" style="display: none;">
        <div class="drawer-header">
          <h3>MOTION & STUDIO</h3>
          <button class="drawer-close" id="studio-close-btn">&times;</button>
        </div>
        
        <div class="drawer-section">
          <h4>💃 DANCE CHOREOGRAPHY <span style="font-size: 0.68rem; color: #ff9d00; background: rgba(255, 157, 0, 0.12); padding: 2px 6px; border-radius: 4px; border: 1px solid rgba(255, 157, 0, 0.3);">VMD ENGINE</span></h4>
          <p style="font-size: 0.78rem; color: #88a0b0; margin-bottom: 8px;">
            Tarian lengkap berdurasi penuh menggunakan file VMD MMD asli dengan musik & kamera:
          </p>
          <div class="dance-list">
            ${DANCE_TRACKS.map(t => `
              <div class="dance-card" data-dance-id="${t.id}">
                <div class="dance-card-info">
                  <strong>${t.name}</strong>
                  <p>${t.description}</p>
                </div>
                <button class="dance-play-btn" data-dance="${t.id}">▶ Play</button>
              </div>
            `).join('')}
          </div>
          <button class="stop-dance-btn" id="stop-dance-btn" style="display: none;">
            ⏹ Stop Dance & Reset Idle
          </button>
        </div>

        <div class="drawer-section">
          <h4>😊 EXPRESSIONS</h4>
          <div class="expression-grid">
            <button class="expr-btn" data-expr="normal">Normal</button>
            <button class="expr-btn" data-expr="smile">Smile 😊</button>
            <button class="expr-btn" data-expr="happy">Happy ✨</button>
            <button class="expr-btn" data-expr="blush">Blush 😳</button>
            <button class="expr-btn" data-expr="wink">Wink 😉</button>
            <button class="expr-btn" data-expr="surprised">Surprised 😲</button>
            <button class="expr-btn" data-expr="serious">Serious ⚔️</button>
            <button class="expr-btn" data-expr="jitome">Jitome 👀</button>
            <button class="expr-btn" data-expr="pout">Pout 😤</button>
            <button class="expr-btn" data-expr="smug">Smug 😏</button>
            <button class="expr-btn" data-expr="tehepero">Tehepero 😜</button>
          </div>
        </div>

        <div class="drawer-section">
          <h4>🎭 ANIME MOTIONS & GESTURES (OTOMATIS)</h4>
          <p style="font-size: 0.78rem; color: #88a0b0; margin-bottom: 8px;">
            Chen berganti gestur otomatis setiap 3-7 detik, atau klik tombol untuk memicu pose:
          </p>
          <div class="expression-grid">
            <button class="gesture-btn" data-gesture="gentle_wave">🌸 Lambaian Tangan</button>
            <button class="gesture-btn" data-gesture="curious_tilt">💖 Miringkan Kepala</button>
            <button class="gesture-btn" data-gesture="confident_officer">⚔️ Pose Officer</button>
            <button class="gesture-btn" data-gesture="shy_glance">😳 Malu / Melirik</button>
            <button class="gesture-btn" data-gesture="thinking_pose">🤔 Berpikir</button>
            <button class="gesture-btn" data-gesture="cute_nod">✨ Mengangguk Manis</button>
            <button class="gesture-btn" data-gesture="stretch_relax">🍃 Santai / Rileks</button>
          </div>
        </div>

        <div class="drawer-section">
          <h4>🌆 ENVIRONMENT & LIGHTING</h4>
          <div class="option-row">
            <span>Backdrop Preset:</span>
            <select id="bg-preset-select">
              <option value="cyber">Endfield Talos-II Hub</option>
              <option value="sunset">Sunset Dojo</option>
              <option value="command">Command Bridge</option>
              <option value="studio">Clean Anime Studio</option>
            </select>
          </div>
          <div class="option-row">
            <span>Custom Wallpaper:</span>
            <input type="file" id="wallpaper-upload" accept="image/*" />
          </div>
          <div class="option-row">
            <span>Lighting Mood:</span>
            <select id="lighting-select">
              <option value="cyber">Cyber Neon</option>
              <option value="sunset">Warm Sunset</option>
              <option value="studio">Studio Bright</option>
            </select>
          </div>
          <div class="option-toggle-row">
            <label><input type="checkbox" id="toggle-stage-check" checked /> Show Cyber Platform</label>
            <label><input type="checkbox" id="toggle-particles-check" checked /> Ambient Dust Particles</label>
          </div>
        </div>
      </aside>

      <!-- GIFT MODAL -->
      <div class="modal-overlay" id="gift-modal" style="display: none;">
        <div class="modal-card">
          <div class="modal-header">
            <h3>OFFER GIFT TO CHEN QIANYU</h3>
            <button class="modal-close" id="gift-close-btn">&times;</button>
          </div>
          <p class="modal-desc">Gifts deepen your bond, raise Trust XP, and unlock special reactions!</p>
          <div class="gift-grid">
            ${GIFTS.map(g => `
              <div class="gift-card" data-gift-id="${g.id}">
                <div class="gift-icon">${g.icon}</div>
                <div class="gift-body">
                  <strong>${g.name}</strong>
                  <span class="gift-xp">+${g.xpGain} XP</span>
                  <p>${g.description}</p>
                </div>
                <button class="give-btn" data-give="${g.id}">Give</button>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- SETTINGS MODAL -->
      <div class="modal-overlay" id="settings-modal" style="display: none;">
        <div class="modal-card">
          <div class="modal-header">
            <h3>AI COMPANION CONFIGURATION</h3>
            <button class="modal-close" id="settings-close-btn">&times;</button>
          </div>
          <div class="settings-form">
            <div class="form-group">
              <label>AI Intelligence Mode:</label>
              <select id="ai-provider-select">
                <option value="offline">Smart Built-in Engine (Free / Offline / Zero Setup)</option>
                <option value="groq">Groq (Ultra-Fast Llama 3.3)</option>
                <option value="gemini">Google Gemini API</option>
                <option value="openai">OpenAI (ChatGPT / GPT-4o-mini)</option>
                <option value="ollama">Ollama (Local LLM)</option>
              </select>
            </div>
            <div class="form-group" id="api-key-group" style="display: none;">
              <label>API Key:</label>
              <input type="password" id="api-key-input" placeholder="Enter API Key..." />
            </div>
            <div class="form-group" id="api-url-group" style="display: none;">
              <label>API Endpoint URL:</label>
              <input type="text" id="api-url-input" placeholder="https://..." />
            </div>
            <div class="form-group" id="api-model-group" style="display: none;">
              <label>Model Name:</label>
              <input type="text" id="api-model-input" placeholder="e.g. gemini-1.5-flash or llama-3.3-70b-versatile" />
            </div>
            <hr class="form-divider" />
            <div class="form-group">
              <label>🎙️ Voice Pack Karakter (Suara Asli Chen):</label>
              <select id="voice-pack-select">
                <option value="ja">🎌 Japanese (Anime Heroine CV) - Asli</option>
                <option value="zh">🇨🇳 Chinese (Endfield Origin CV) - Asli</option>
              </select>
            </div>
            <div class="form-group" style="margin-top: 4px;">
              <button type="button" class="test-voice-btn" id="test-voice-btn" style="background: rgba(255,230,0,0.15); border: 1px solid var(--ef-yellow); color: var(--ef-yellow); padding: 7px 12px; border-radius: 6px; cursor: pointer; font-weight: 600; font-size: 12px;">
                🔊 Tes Suara Asli Chen
              </button>
            </div>
            <div class="form-group" style="margin-top: 6px;">
              <label><input type="checkbox" id="voice-enable-check" checked /> Aktifkan Suara Karakter (Voice Enabled)</label>
            </div>
            <div class="form-group">
              <label>Bahasa TTS Chat AI Bebas (Jika Memakai Freeform Chat):</label>
              <select id="voice-lang-select">
                <option value="ja-JP">Japanese (ja-JP) - Anime Tone</option>
                <option value="zh-CN">Chinese (zh-CN) - Origin Yan</option>
                <option value="en-US">English (en-US)</option>
                <option value="id-ID">Indonesian (id-ID)</option>
              </select>
            </div>
            <hr class="form-divider" />
            <div class="form-group">
              <label>⚡ Kualitas Grafis & Kecepatan (FPS):</label>
              <select id="graphics-preset-select">
                <option value="performance">⚡ Ringan / Cepat (60 FPS - Rekomendasi Laptop & HP)</option>
                <option value="ultra-light">🚀 Super Ringan / Kentang (Maksimal FPS, Tanpa Lag)</option>
                <option value="high">💎 Kualitas Tinggi / Ultra (PC Gaming & GPU Diskrit)</option>
                <option value="custom">🛠️ Kustom (Manual)</option>
              </select>
            </div>
            <div class="graphics-options-list" style="background: rgba(0,0,0,0.25); border: 1px solid var(--ef-border-dim); border-radius: 8px; padding: 10px 14px; margin-top: 6px; display: flex; flex-direction: column; gap: 8px;">
              <label style="display: flex; align-items: center; gap: 8px; font-size: 12px; cursor: pointer;">
                <input type="checkbox" id="gfx-outline-check" /> 
                <span>Garis Outline Manga (Lineart - Matikan untuk FPS lebih tinggi)</span>
              </label>
              <label style="display: flex; align-items: center; gap: 8px; font-size: 12px; cursor: pointer;">
                <input type="checkbox" id="gfx-shadow-check" checked /> 
                <span>Bayangan Karakter Dinamis (Dynamic Shadows)</span>
              </label>
              <label style="display: flex; align-items: center; gap: 8px; font-size: 12px; cursor: pointer;">
                <input type="checkbox" id="gfx-physics-check" checked /> 
                <span>Fisika Rambut & Pakaian (Spring Physics 45Hz)</span>
              </label>
              <label style="display: flex; align-items: center; gap: 8px; font-size: 12px; cursor: pointer;">
                <input type="checkbox" id="gfx-particles-check" checked /> 
                <span>Partikel Debu Mengambang Talos-II</span>
              </label>
            </div>
            <div class="modal-actions">
              <button class="save-settings-btn" id="save-settings-btn">Save Settings</button>
              <button class="reset-xp-btn" id="reset-xp-btn">Reset Bond XP</button>
            </div>
          </div>
        </div>
      </div>

      <!-- NEURAL MATRIX & AI TRAINING MODAL -->
      <div class="modal-overlay" id="neural-modal" style="display: none;">
        <div class="modal-card neural-modal-card">
          <div class="modal-header">
            <div class="neural-header-title">
              <span class="neural-badge">NEURAL CORE // V2</span>
              <h3>ENDFIELD COGNITIVE LAB & SELF-TRAINING</h3>
            </div>
            <button class="modal-close" id="neural-close-btn">&times;</button>
          </div>

          <div class="neural-tabs-bar">
            <button class="neural-tab-btn active" data-tab="responses">💬 Latih Respon & Memori</button>
            <button class="neural-tab-btn" data-tab="motions">💃 Studio Pelatihan Motion</button>
            <button class="neural-tab-btn" data-tab="cognitive">🧠 Monitor Syaraf Kognitif</button>
          </div>

          <!-- TAB 1: RESPONSE & DIALOGUE TRAINING -->
          <div class="neural-tab-content active" id="tab-responses">
            <div class="neural-panel-intro">
              Ajari Chen menjawab pertanyaan tertentu, mengingat preferensi Anda, atau hubungkan kata kunci dengan pose motion khusus!
            </div>

            <div class="neural-train-form">
              <div class="form-row-2">
                <div class="form-group">
                  <label>Kata Kunci / Pertanyaan Pemicu (Trigger):</label>
                  <input type="text" id="train-trigger-input" placeholder="contoh: siapa teman terbaikmu / lagi apa / hobi" />
                </div>
                <div class="form-group">
                  <label>Ekspresi Wajah Chen:</label>
                  <select id="train-emotion-select">
                    <option value="smile">Smile 😊</option>
                    <option value="happy">Happy ✨</option>
                    <option value="blush">Blush 😳</option>
                    <option value="serious">Serious ⚔️</option>
                    <option value="wink">Wink 😉</option>
                    <option value="tehepero">Tehepero 😜</option>
                    <option value="pout">Pout 😤</option>
                    <option value="smug">Smug 😏</option>
                    <option value="normal">Normal</option>
                  </select>
                </div>
              </div>

              <div class="form-group">
                <label>Jawaban / Respon Chen yang Diinginkan:</label>
                <textarea id="train-response-input" rows="2" placeholder="contoh: Teman terbaik Chen tentu saja Administrator! Di Talos-II, kita selalu saling melindungi. [EMOTE:happy]"></textarea>
              </div>

              <div class="form-row-2">
                <div class="form-group">
                  <label>Motion / Gestur yang Dijalankan (Opsional):</label>
                  <select id="train-motion-select">
                    <option value="">-- Tanpa Motion Khusus (Gunakan Gestur Alami) --</option>
                    <option value="gentle_wave">🌸 Lambaian Tangan</option>
                    <option value="curious_tilt">💖 Miringkan Kepala</option>
                    <option value="confident_officer">⚔️ Pose Officer</option>
                    <option value="shy_glance">😳 Malu / Melirik</option>
                    <option value="thinking_pose">🤔 Berpikir</option>
                    <option value="cute_nod">✨ Mengangguk Manis</option>
                    <option value="stretch_relax">🍃 Santai / Rileks</option>
                  </select>
                </div>
                <div class="form-group align-end">
                  <button class="action-submit-btn" id="save-memory-btn">
                    ⚡ Latih & Simpan ke Otak AI
                  </button>
                </div>
              </div>
            </div>

            <div class="neural-section-heading">
              <span>DAFTAR PENGETAHUAN & MEMORI TERLATIH (<span id="memory-count-badge">0</span>)</span>
              <div class="backup-actions">
                <button class="tiny-btn" id="export-brain-btn">📥 Ekspor Otak (JSON)</button>
                <button class="tiny-btn" id="import-brain-btn">📤 Impor Otak (JSON)</button>
                <input type="file" id="import-brain-file" accept=".json" style="display: none;" />
              </div>
            </div>

            <div class="memory-cards-container" id="memory-cards-list">
              <!-- Dynamically populated -->
            </div>
          </div>

          <!-- TAB 2: 3D MOTION DOJO & POSE TRAINER -->
          <div class="neural-tab-content" id="tab-motions" style="display: none;">
            <div class="neural-panel-intro">
              Gerakkan slider di bawah untuk merancang pose atau gerakan animasi kustom secara 3D real-time. Anda bisa menyimpan motion ini dan mengaitkannya dengan kata kunci pemicu!
            </div>

            <!-- Archetype Quick Presets -->
            <div class="archetype-bar">
              <span class="archetype-label">Preset Dasar:</span>
              <button class="archetype-btn" data-archetype="hormat_militer">⚔️ Hormat Militer</button>
              <button class="archetype-btn" data-archetype="tangan_di_dada">💖 Tangan di Dada</button>
              <button class="archetype-btn" data-archetype="neko_paws">🐾 Kucing Kawaii</button>
              <button class="archetype-btn" data-archetype="bertolak_pinggang">🛡️ Bertolak Pinggang</button>
              <button class="archetype-btn" data-archetype="lambaian_ceria">👋 Lambaian Ceria</button>
              <button class="archetype-btn reset" data-archetype="neutral">↺ Netral</button>
            </div>

            <!-- Interactive Sliders Grid -->
            <div class="motion-sliders-layout">
              <div class="slider-group-box">
                <h5>👤 KEPALA & LEHER</h5>
                <div class="slider-row">
                  <span>Miring (Roll):</span>
                  <input type="range" class="pose-slider" id="slider-headRoll" min="-0.3" max="0.3" step="0.01" value="0" />
                  <span class="slider-val" id="val-headRoll">0.00</span>
                </div>
                <div class="slider-row">
                  <span>Angguk (Pitch):</span>
                  <input type="range" class="pose-slider" id="slider-headPitch" min="-0.25" max="0.25" step="0.01" value="0" />
                  <span class="slider-val" id="val-headPitch">0.00</span>
                </div>
                <div class="slider-row">
                  <span>Menoleh (Yaw):</span>
                  <input type="range" class="pose-slider" id="slider-headYaw" min="-0.4" max="0.4" step="0.01" value="0" />
                  <span class="slider-val" id="val-headYaw">0.00</span>
                </div>
              </div>

              <div class="slider-group-box">
                <h5>🧍 BADAN & PUNGGUNG (SPINE)</h5>
                <div class="slider-row">
                  <span>Tegap / Bungkuk:</span>
                  <input type="range" class="pose-slider" id="slider-spinePitch" min="-0.15" max="0.15" step="0.01" value="0" />
                  <span class="slider-val" id="val-spinePitch">0.00</span>
                </div>
                <div class="slider-row">
                  <span>Miring Pinggang:</span>
                  <input type="range" class="pose-slider" id="slider-spineRoll" min="-0.12" max="0.12" step="0.01" value="0" />
                  <span class="slider-val" id="val-spineRoll">0.00</span>
                </div>
                <div class="slider-row">
                  <span>Putar Badan:</span>
                  <input type="range" class="pose-slider" id="slider-spineYaw" min="-0.15" max="0.15" step="0.01" value="0" />
                  <span class="slider-val" id="val-spineYaw">0.00</span>
                </div>
              </div>

              <div class="slider-group-box">
                <h5>🦾 TANGAN KIRI</h5>
                <div class="slider-row">
                  <span>Angkat Lengan:</span>
                  <input type="range" class="pose-slider" id="slider-leftArmZ" min="-0.8" max="0.8" step="0.02" value="0" />
                  <span class="slider-val" id="val-leftArmZ">0.00</span>
                </div>
                <div class="slider-row">
                  <span>Maju / Mundur:</span>
                  <input type="range" class="pose-slider" id="slider-leftArmX" min="-0.6" max="0.6" step="0.02" value="0" />
                  <span class="slider-val" id="val-leftArmX">0.00</span>
                </div>
                <div class="slider-row">
                  <span>Tekuk Siku:</span>
                  <input type="range" class="pose-slider" id="slider-leftElbowZ" min="-0.2" max="1.1" step="0.02" value="0" />
                  <span class="slider-val" id="val-leftElbowZ">0.00</span>
                </div>
              </div>

              <div class="slider-group-box">
                <h5>🦾 TANGAN KANAN</h5>
                <div class="slider-row">
                  <span>Angkat Lengan:</span>
                  <input type="range" class="pose-slider" id="slider-rightArmZ" min="-0.8" max="0.8" step="0.02" value="0" />
                  <span class="slider-val" id="val-rightArmZ">0.00</span>
                </div>
                <div class="slider-row">
                  <span>Maju / Mundur:</span>
                  <input type="range" class="pose-slider" id="slider-rightArmX" min="-0.6" max="0.6" step="0.02" value="0" />
                  <span class="slider-val" id="val-rightArmX">0.00</span>
                </div>
                <div class="slider-row">
                  <span>Tekuk Siku:</span>
                  <input type="range" class="pose-slider" id="slider-rightElbowZ" min="-0.2" max="1.1" step="0.02" value="0" />
                  <span class="slider-val" id="val-rightElbowZ">0.00</span>
                </div>
                <div class="slider-row">
                  <span>Pergelangan:</span>
                  <input type="range" class="pose-slider" id="slider-rightWristZ" min="-0.6" max="0.6" step="0.02" value="0" />
                  <span class="slider-val" id="val-rightWristZ">0.00</span>
                </div>
              </div>

              <div class="slider-group-box wide">
                <h5>✨ EKSPRESI & DINAMIKA GERAKAN</h5>
                <div class="slider-row-inline">
                  <label>Senyum: <input type="range" class="pose-slider" id="slider-smile" min="0" max="1" step="0.05" value="0" /></label>
                  <label>Blush: <input type="range" class="pose-slider" id="slider-blush" min="0" max="1" step="0.05" value="0" /></label>
                  <label>Wink: <input type="range" class="pose-slider" id="slider-wink" min="0" max="1" step="0.05" value="0" /></label>
                  <label>Serius: <input type="range" class="pose-slider" id="slider-serious" min="0" max="1" step="0.05" value="0" /></label>
                </div>
                <div class="dynamics-row">
                  <span>Rhythm Dinamis:</span>
                  <select id="slider-dynamicsType">
                    <option value="breathing">🌬️ Napas Santai (Breathing Pulse)</option>
                    <option value="hand_wave">👋 Lambaian Tangan Berulang (Hand Wave)</option>
                    <option value="nodding">✨ Mengangguk Halus (Nodding Loop)</option>
                    <option value="swaying">🍃 Bergoyang Lembut (Swaying)</option>
                    <option value="static">⏸️ Diam Tegap (Static Pose)</option>
                  </select>
                  <button class="preview-motion-btn" id="test-preview-btn">▶ Uji Preview Gerak</button>
                </div>
              </div>
            </div>

            <!-- Save Motion Form -->
            <div class="motion-save-form">
              <div class="form-row-3">
                <div class="form-group">
                  <label>Nama Motion:</label>
                  <input type="text" id="motion-name-input" placeholder="contoh: Hormat Spesialis" />
                </div>
                <div class="form-group">
                  <label>Kata Kunci Pemicu (pisahkan koma):</label>
                  <input type="text" id="motion-triggers-input" placeholder="contoh: hormat, siap, lapor, komandan" />
                </div>
                <div class="form-group">
                  <label>Durasi (detik):</label>
                  <input type="number" id="motion-duration-input" min="2" max="10" step="0.5" value="4.0" />
                </div>
              </div>
              <div class="form-actions-right">
                <button class="action-submit-btn" id="save-motion-btn">
                  💾 Simpan Motion ke Otak AI
                </button>
              </div>
            </div>

            <div class="neural-section-heading">
              <span>DAFTAR MOTION TERLATIH (<span id="motion-count-badge">0</span>)</span>
              <button class="tiny-btn" id="reset-motions-btn">↺ Reset ke Bawaan</button>
            </div>
            <div class="motion-cards-container" id="motion-cards-list">
              <!-- Dynamically populated -->
            </div>
          </div>

          <!-- TAB 3: COGNITIVE NEURAL MONITOR -->
          <div class="neural-tab-content" id="tab-cognitive" style="display: none;">
            <div class="cognitive-status-grid">
              <div class="cog-metric-card">
                <span class="cog-metric-label">Valensi Emosional</span>
                <span class="cog-metric-value" id="cog-valence-val">POSITIF (+0.6)</span>
                <p>Kecenderungan perasaan Chen terhadap Anda.</p>
              </div>
              <div class="cog-metric-card">
                <span class="cog-metric-label">Tingkat Energi Syaraf</span>
                <span class="cog-metric-value" id="cog-energy-val">AKTIF (92%)</span>
                <p>Kesiapan respon kognitif & reaksi motorik.</p>
              </div>
              <div class="cog-metric-card">
                <span class="cog-metric-label">Simpul Pengetahuan Terlatih</span>
                <span class="cog-metric-value" id="cog-memories-val">0 SIMPUL</span>
                <p>Memori yang dipelajari mandiri dari interaksi Anda.</p>
              </div>
              <div class="cog-metric-card">
                <span class="cog-metric-label">Motion 3D Terlatih</span>
                <span class="cog-metric-value" id="cog-motions-val">0 GESTUR</span>
                <p>Gerakan yang berhasil dilatih di Dojo.</p>
              </div>
            </div>

            <div class="inner-monologue-box">
              <div class="monologue-header">
                <span class="monologue-badge">LIVE COGNITIVE STREAM // INNER MONOLOGUE</span>
                <button class="tiny-btn" id="trigger-thought-btn">⚡ Minta Chen Berpikir Sekarang</button>
              </div>
              <div class="monologue-content" id="live-thought-stream">
                "Sistem kognitif aktif. Menunggu instruksi dari Administrator..."
              </div>
            </div>

            <div class="neural-panel-intro" style="margin-top: 14px;">
              💡 <strong>Tips Interaksi Otonom:</strong> Chen juga dapat menyerap aturan baru langsung dari obrolan! Coba ketik di chat:
              <br/>
              <em>"Mulai sekarang panggil aku Kapten"</em> atau <em>"Kalau aku bilang aku sedih, tolong hibur aku dan buatkan teh"</em>.
            </div>
          </div>
        </div>
      </div>

      <!-- CORRECTION MODAL (Quick RLHF) -->
      <div class="modal-overlay" id="correction-modal" style="display: none;">
        <div class="modal-card small-card">
          <div class="modal-header">
            <h3>KOREKSI JAWABAN AI CHEN</h3>
            <button class="modal-close" id="correction-close-btn">&times;</button>
          </div>
          <p class="modal-desc" id="correction-trigger-desc">Bagaimana seharusnya Chen menjawab pertanyaan ini?</p>
          <div class="form-group">
            <textarea id="correction-response-input" rows="3" placeholder="Ketik jawaban yang lebih pantas menurut Anda..."></textarea>
          </div>
          <div class="modal-actions">
            <button class="action-submit-btn" id="submit-correction-btn">Simpan Koreksi ke Memori AI</button>
          </div>
        </div>
      </div>

      <!-- UNHIDE UI BUTTON (Only shows when UI is hidden) -->
      <button class="show-ui-btn" id="show-ui-btn" style="display: none;">
        👁️ Restore HUD
      </button>
    `;
  }

  private setupEventListeners() {
    // 1. Camera Buttons
    const camBtns = this.container.querySelectorAll('.cam-btn');
    camBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        sfx.playClick();
        camBtns.forEach(b => b.classList.remove('active'));
        (e.currentTarget as HTMLElement).classList.add('active');
        const preset = (e.currentTarget as HTMLElement).dataset.cam as CameraPreset;
        this.sceneManager.setCameraPreset(preset);
      });
    });

    // 2. Chat Input & Send
    const chatInput = this.container.querySelector('#chat-input') as HTMLInputElement;
    const sendBtn = this.container.querySelector('#send-btn') as HTMLButtonElement;

    const handleSend = async () => {
      const text = chatInput.value.trim();
      if (!text) return;
      sfx.playClick();
      chatInput.value = '';

      this.addChatMessage('user', text);

      // Show typing indicator
      this.showSpeechBubble('Thinking...', 'normal');

      // Generate AI response
      const reply = await ai.generateResponse(text);
      
      // Update Chen
      this.chen.setEmotion(reply.emotion);
      if (reply.trainedMotion) {
        if (reply.trainedMotion.id === 'motion_poke_sway') {
          this.chen.playStructuredMotion('pokedance', { loop: false, allowLookAt: true, blendDuration: 0.4 });
        } else if (reply.trainedMotion.id === 'motion_neko_paws') {
          this.chen.playStructuredMotion('yurusiteNeko', { loop: false, allowLookAt: true, blendDuration: 0.4 });
        } else if (reply.trainedMotion.id === 'motion_idol_cheer') {
          this.chen.playStructuredMotion('michinoTimothy', { loop: false, allowLookAt: true, blendDuration: 0.4 });
        } else {
          this.chen.playTrainedMotion(reply.trainedMotion);
        }
      } else if (reply.gestureId) {
        this.chen.triggerGesture(reply.gestureId as any);
      }
      this.showSpeechBubble(reply.text, reply.emotion);
      this.addChatMessage('chen', reply.text, reply.emotion, reply.thought, reply.memoryId);

      // Play voice (Prioritize Authentic Studio Chen Voice!)
      if (ai.settings.voiceEnabled) {
        if (reply.voiceKey) {
          chenVoice.playVoice(reply.voiceKey);
        } else {
          const spoken = reply.spokenText || reply.text;
          const targetLang = chenVoice.language === 'zh' ? 'zh-CN' : (chenVoice.language === 'ja' ? 'ja-JP' : ai.settings.voiceLang);
          tts.speak(spoken, {
            lang: targetLang,
            pitch: ai.settings.voicePitch,
            rate: ai.settings.voiceRate,
          });
        }
      }

      // Add chat bond XP
      affection.addXp(6);
    };

    sendBtn.addEventListener('click', handleSend);
    chatInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') handleSend();
    });

    // 3. Quick Chips
    const chips = this.container.querySelectorAll('.chip-btn');
    chips.forEach(c => {
      c.addEventListener('click', (e) => {
        const action = (e.currentTarget as HTMLElement).dataset.action;
        sfx.playClick();
        if (action === 'headpat') {
          this.chen.setEmotion('happy');
          this.chen.triggerGesture('cute_nod');
          const txt = 'E-eh? Patting my head like this... It feels quite warm, Administrator. [EMOTE:happy]';
          this.showSpeechBubble(txt, 'happy');
          this.addChatMessage('chen', txt, 'happy');
          chenVoice.playVoice('headpat_1');
          affection.addXp(6);
        } else if (action === 'praise') {
          this.chen.setEmotion('blush');
          this.chen.triggerGesture('shy_glance');
          const txt = 'B-being praised like that... makes me blush. But I am truly happy! [EMOTE:blush]';
          this.showSpeechBubble(txt, 'blush');
          this.addChatMessage('chen', txt, 'blush');
          chenVoice.playVoice('praise_1');
          affection.addXp(6);
        } else if (action === 'tea') {
          this.chen.setEmotion('smile');
          this.chen.triggerGesture('stretch_relax');
          const txt = 'I brewed fresh Talos mountain tea. Administrator, won\'t you rest and have a cup with me? [EMOTE:smile]';
          this.showSpeechBubble(txt, 'smile');
          this.addChatMessage('chen', txt, 'smile');
          chenVoice.playVoice('tea_1');
          affection.addXp(6);
        } else if (action === 'swords') {
          this.chen.setEmotion('serious');
          this.chen.triggerGesture('confident_officer');
          const txt = 'Dual blades unsheathed, target acquired! Ready for deployment at your command! [EMOTE:serious]';
          this.showSpeechBubble(txt, 'serious');
          this.addChatMessage('chen', txt, 'serious');
          chenVoice.playVoice('swords_1');
          affection.addXp(6);
        } else if (action === 'pokedance') {
          this.playDanceTrack('pokedance');
        }
      });
    });

    // 4. Voice Input (STT)
    const micBtn = this.container.querySelector('#mic-btn') as HTMLButtonElement;
    stt.onStateChange = (listening) => {
      if (listening) {
        micBtn.classList.add('listening');
        micBtn.innerHTML = '🔴 Listening...';
      } else {
        micBtn.classList.remove('listening');
        micBtn.innerHTML = '🎙️';
      }
    };
    stt.onResult = (transcript) => {
      chatInput.value = transcript;
      handleSend();
    };
    micBtn.addEventListener('click', () => {
      sfx.playClick();
      stt.toggle(ai.settings.voiceLang);
    });

    // 5. Speech Bubble Dismiss on click or close button
    const speechBubbleEl = this.container.querySelector('#speech-bubble') as HTMLElement;
    speechBubbleEl?.addEventListener('click', () => {
      speechBubbleEl.style.display = 'none';
      if (this.speechTimer !== null) clearTimeout(this.speechTimer);
    });
    this.container.querySelector('#bubble-close-btn')?.addEventListener('click', (e) => {
      e.stopPropagation();
      speechBubbleEl.style.display = 'none';
      if (this.speechTimer !== null) clearTimeout(this.speechTimer);
    });

    // 6. Chat History Drawer Toggle
    const toggleChat = this.container.querySelector('#toggle-chat-history') as HTMLElement;
    const chatDrawer = this.container.querySelector('#chat-history-drawer') as HTMLElement;
    const closeChatDrawer = this.container.querySelector('#close-chat-drawer') as HTMLElement;

    const setChatDrawerOpen = (open: boolean) => {
      chatDrawer.style.display = open ? 'flex' : 'none';
      const count = this.container.querySelectorAll('.message-bubble').length;
      this.container.querySelector('#chat-toggle-text')!.textContent = open 
        ? `Hide Chat History (${count}) ▼`
        : `Show Chat History (${count}) ▲`;
    };

    toggleChat.addEventListener('click', () => {
      sfx.playClick();
      const isOpen = chatDrawer.style.display !== 'none';
      setChatDrawerOpen(!isOpen);
    });

    closeChatDrawer?.addEventListener('click', (e) => {
      e.stopPropagation();
      sfx.playClick();
      setChatDrawerOpen(false);
    });

    // 7. Studio Drawer Toggle
    const studioBtn = this.container.querySelector('#studio-btn') as HTMLElement;
    const studioDrawer = this.container.querySelector('#studio-drawer') as HTMLElement;
    const studioClose = this.container.querySelector('#studio-close-btn') as HTMLElement;

    studioBtn.addEventListener('click', () => {
      sfx.playClick();
      this.isStudioOpen = true;
      studioDrawer.style.display = 'block';
    });
    studioClose.addEventListener('click', () => {
      sfx.playClick();
      this.isStudioOpen = false;
      studioDrawer.style.display = 'none';
    });

    // 8. Dance Trigger Buttons
    const danceBtns = this.container.querySelectorAll('.dance-play-btn');
    danceBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const danceId = (e.currentTarget as HTMLElement).dataset.dance;
        if (danceId) this.playDanceTrack(danceId);
      });
    });

    const stopDanceBtn = this.container.querySelector('#stop-dance-btn') as HTMLButtonElement;
    stopDanceBtn.addEventListener('click', () => {
      sfx.playClick();
      this.chen.stopDance();
      this.chen.stopStructuredMotion();
      stopDanceBtn.style.display = 'none';
      this.showSpeechBubble('Dance complete! Did you enjoy it, Administrator? [EMOTE:smile]', 'smile');
    });

    this.chen.onDanceEnd = () => {
      stopDanceBtn.style.display = 'none';
    };

    // 9. Expression Buttons
    const exprBtns = this.container.querySelectorAll('.expr-btn');
    exprBtns.forEach(b => {
      b.addEventListener('click', (e) => {
        sfx.playClick();
        const expr = (e.currentTarget as HTMLElement).dataset.expr as EmotionType;
        this.chen.setEmotion(expr);
        this.showSpeechBubble(`Expression set to [${expr.toUpperCase()}]`, expr);
      });
    });

    // 9b. Gesture Trigger Buttons (Natural Character Gestures)
    const gestureBtns = this.container.querySelectorAll('.gesture-btn');
    gestureBtns.forEach(b => {
      b.addEventListener('click', (e) => {
        sfx.playClick();
        const gesture = (e.currentTarget as HTMLElement).dataset.gesture as any;
        if (!gesture) return;
        this.chen.triggerGesture(gesture);
        if (gesture === 'gentle_wave') {
          this.showSpeechBubble('Halo, Administrator! Senang bertemu denganmu~ [EMOTE:happy]', 'happy');
        }
      });
    });

    // 10. Background & Stage Controls
    const bgSelect = this.container.querySelector('#bg-preset-select') as HTMLSelectElement;
    bgSelect.addEventListener('change', () => {
      sfx.playClick();
      this.setBackgroundPreset(bgSelect.value);
    });

    const wallpaperUpload = this.container.querySelector('#wallpaper-upload') as HTMLInputElement;
    wallpaperUpload.addEventListener('change', (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const url = URL.createObjectURL(file);
        document.body.style.backgroundImage = `url("${url}")`;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center';
      }
    });

    const lightingSelect = this.container.querySelector('#lighting-select') as HTMLSelectElement;
    lightingSelect.addEventListener('change', () => {
      this.sceneManager.setLightingMood(lightingSelect.value as 'cyber' | 'sunset' | 'studio');
    });

    const toggleStage = this.container.querySelector('#toggle-stage-check') as HTMLInputElement;
    toggleStage.addEventListener('change', () => {
      this.sceneManager.toggleStage(toggleStage.checked);
    });

    const toggleParticles = this.container.querySelector('#toggle-particles-check') as HTMLInputElement;
    toggleParticles.addEventListener('change', () => {
      this.sceneManager.toggleParticles(toggleParticles.checked);
    });

    // 11. Gift Modal
    const openGiftBtn = this.container.querySelector('#open-gift-btn') as HTMLElement;
    const giftModal = this.container.querySelector('#gift-modal') as HTMLElement;
    const giftClose = this.container.querySelector('#gift-close-btn') as HTMLElement;

    openGiftBtn.addEventListener('click', () => {
      sfx.playClick();
      this.isGiftModalOpen = true;
      giftModal.style.display = 'flex';
    });
    giftClose.addEventListener('click', () => {
      sfx.playClick();
      this.isGiftModalOpen = false;
      giftModal.style.display = 'none';
    });

    const giveBtns = this.container.querySelectorAll('.give-btn');
    giveBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const giftId = (e.currentTarget as HTMLElement).dataset.give;
        const gift = GIFTS.find(g => g.id === giftId);
        if (gift) {
          sfx.playHeartChime();
          affection.addXp(gift.xpGain);
          this.chen.setEmotion('happy');
          this.showSpeechBubble(gift.voiceLine, 'happy');
          this.addChatMessage('chen', gift.voiceLine, 'happy');
          chenVoice.playVoice('gift_1');
          this.isGiftModalOpen = false;
          giftModal.style.display = 'none';
        }
      });
    });

    // FPS & Quality Preset Pill
    const fpsBadgeBtn = this.container.querySelector('#fps-badge-btn') as HTMLElement;
    fpsBadgeBtn.addEventListener('click', () => {
      sfx.playClick();
      const next = quality.cyclePreset();
      const labels: Record<GraphicsPreset, string> = {
        'performance': '⚡ Ringan / Cepat (60 FPS - Rekomendasi)',
        'ultra-light': '🚀 Super Ringan / Kentang (Maksimal FPS)',
        'high': '💎 Kualitas Tinggi / Ultra (PC Gaming)',
        'custom': '🛠️ Kustom (Manual)',
      };
      this.showSpeechBubble(`Mode performa: ${labels[next]} [EMOTE:smile]`, 'smile');
    });

    // 12. Settings Modal
    const settingsBtn = this.container.querySelector('#settings-btn') as HTMLElement;
    const settingsModal = this.container.querySelector('#settings-modal') as HTMLElement;
    const settingsClose = this.container.querySelector('#settings-close-btn') as HTMLElement;
    const saveSettingsBtn = this.container.querySelector('#save-settings-btn') as HTMLElement;
    const resetXpBtn = this.container.querySelector('#reset-xp-btn') as HTMLElement;
    const testVoiceBtn = this.container.querySelector('#test-voice-btn') as HTMLElement;
    const voicePackSelect = this.container.querySelector('#voice-pack-select') as HTMLSelectElement;

    // Graphics Settings elements
    const gfxPresetSelect = this.container.querySelector('#graphics-preset-select') as HTMLSelectElement;
    const gfxOutlineCheck = this.container.querySelector('#gfx-outline-check') as HTMLInputElement;
    const gfxShadowCheck = this.container.querySelector('#gfx-shadow-check') as HTMLInputElement;
    const gfxPhysicsCheck = this.container.querySelector('#gfx-physics-check') as HTMLInputElement;
    const gfxParticlesCheck = this.container.querySelector('#gfx-particles-check') as HTMLInputElement;

    gfxPresetSelect.addEventListener('change', () => {
      sfx.playClick();
      quality.setPreset(gfxPresetSelect.value as GraphicsPreset);
    });

    gfxOutlineCheck.addEventListener('change', () => {
      quality.updateOption('outline', gfxOutlineCheck.checked);
    });

    gfxShadowCheck.addEventListener('change', () => {
      quality.updateOption('shadows', gfxShadowCheck.checked ? 'medium' : 'off');
    });

    gfxPhysicsCheck.addEventListener('change', () => {
      quality.updateOption('physics', gfxPhysicsCheck.checked);
    });

    gfxParticlesCheck.addEventListener('change', () => {
      quality.updateOption('particles', gfxParticlesCheck.checked);
    });

    const providerSelect = this.container.querySelector('#ai-provider-select') as HTMLSelectElement;
    const apiKeyGroup = this.container.querySelector('#api-key-group') as HTMLElement;
    const apiUrlGroup = this.container.querySelector('#api-url-group') as HTMLElement;
    const apiModelGroup = this.container.querySelector('#api-model-group') as HTMLElement;
    const apiKeyInput = this.container.querySelector('#api-key-input') as HTMLInputElement;
    const apiUrlInput = this.container.querySelector('#api-url-input') as HTMLInputElement;
    const apiModelInput = this.container.querySelector('#api-model-input') as HTMLInputElement;

    const updateProviderFields = () => {
      const val = providerSelect.value;
      const isOnline = val !== 'offline';
      apiKeyGroup.style.display = isOnline ? 'block' : 'none';
      apiUrlGroup.style.display = isOnline && val !== 'gemini' ? 'block' : 'none';
      apiModelGroup.style.display = isOnline ? 'block' : 'none';

      if (val === 'gemini') apiModelInput.placeholder = 'gemini-1.5-flash';
      else if (val === 'groq') apiModelInput.placeholder = 'llama-3.3-70b-versatile';
      else if (val === 'openai') apiModelInput.placeholder = 'gpt-4o-mini';
      else if (val === 'ollama') apiModelInput.placeholder = 'llama3';
    };

    providerSelect.addEventListener('change', updateProviderFields);

    testVoiceBtn.addEventListener('click', () => {
      sfx.playClick();
      chenVoice.setLanguage(voicePackSelect.value as 'ja' | 'zh');
      this.chen.setEmotion('happy');
      const testMsg = chenVoice.language === 'zh' 
        ? '终末地工业干员，陈千语，向您报到！[EMOTE:happy]\n(Chen Qianyu siap bertugas!)' 
        : 'エンドフィールド工業所属、陳千語、着任しました！[EMOTE:happy]\n(Chen Qianyu melapor untuk bertugas!)';
      this.showSpeechBubble(testMsg, 'happy');
      chenVoice.playVoice('greeting');
    });

    settingsBtn.addEventListener('click', () => {
      sfx.playClick();
      providerSelect.value = ai.settings.provider;
      apiKeyInput.value = ai.settings.apiKey;
      apiUrlInput.value = ai.settings.apiUrl;
      apiModelInput.value = ai.settings.model;
      voicePackSelect.value = chenVoice.language;
      (this.container.querySelector('#voice-enable-check') as HTMLInputElement).checked = chenVoice.enabled && ai.settings.voiceEnabled;
      (this.container.querySelector('#voice-lang-select') as HTMLSelectElement).value = ai.settings.voiceLang;

      // Sync graphics options
      gfxPresetSelect.value = quality.currentConfig.preset;
      gfxOutlineCheck.checked = quality.currentConfig.outline;
      gfxShadowCheck.checked = quality.currentConfig.shadows !== 'off';
      gfxPhysicsCheck.checked = quality.currentConfig.physics;
      gfxParticlesCheck.checked = quality.currentConfig.particles;

      updateProviderFields();
      this.isSettingsOpen = true;
      settingsModal.style.display = 'flex';
    });

    settingsClose.addEventListener('click', () => {
      sfx.playClick();
      this.isSettingsOpen = false;
      settingsModal.style.display = 'none';
    });

    saveSettingsBtn.addEventListener('click', () => {
      sfx.playClick();
      ai.settings.provider = providerSelect.value as any;
      ai.settings.apiKey = apiKeyInput.value.trim();
      ai.settings.apiUrl = apiUrlInput.value.trim() || 'https://api.groq.com/openai/v1';
      ai.settings.model = apiModelInput.value.trim() || 'llama-3.3-70b-versatile';
      
      const voiceActive = (this.container.querySelector('#voice-enable-check') as HTMLInputElement).checked;
      ai.settings.voiceEnabled = voiceActive;
      chenVoice.enabled = voiceActive;
      chenVoice.setLanguage(voicePackSelect.value as 'ja' | 'zh');
      ai.settings.voiceLang = (this.container.querySelector('#voice-lang-select') as HTMLSelectElement).value;

      ai.saveSettings(ai.settings);
      this.isSettingsOpen = false;
      settingsModal.style.display = 'none';
      this.showSpeechBubble('Settings updated! [EMOTE:smile]', 'smile');
    });

    resetXpBtn.addEventListener('click', () => {
      if (confirm('Are you sure you want to reset your Trust Bond XP with Chen Qianyu?')) {
        affection.reset();
        this.updateAffectionUI();
      }
    });

    // 13. Hide / Restore UI
    const hideBtn = this.container.querySelector('#hide-ui-btn') as HTMLElement;
    const showBtn = this.container.querySelector('#show-ui-btn') as HTMLElement;
    const topHud = this.container.querySelector('.hud-top') as HTMLElement;
    const bottomDeck = this.container.querySelector('#hud-bottom-deck') as HTMLElement;

    hideBtn.addEventListener('click', () => {
      sfx.playClick();
      this.isUIHidden = true;
      topHud.style.display = 'none';
      bottomDeck.style.display = 'none';
      showBtn.style.display = 'block';
    });

    showBtn.addEventListener('click', () => {
      sfx.playClick();
      this.isUIHidden = false;
      topHud.style.display = 'flex';
      bottomDeck.style.display = 'flex';
      showBtn.style.display = 'none';
    });

    // 14. Affection Level Up Callback
    affection.onLevelUp = (lvl) => {
      this.updateAffectionUI();
      chenVoice.playVoice('level_up');
      this.showSpeechBubble(
        `[LEVEL UP!] Our trust level has reached LV.${lvl.level}: ${lvl.title}! ${lvl.unlockedPose ? 'Unlocked: ' + lvl.unlockedPose : ''} [EMOTE:happy]`,
        'happy'
      );
    };

    affection.onXpChange = () => {
      this.updateAffectionUI();
    };

    // 15. Setup Neural Matrix & Cognitive Self-Training Core
    this.setupNeuralCore();
  }

  openCorrectionModal(trigger: string, prevResponse: string, memoryId?: string) {
    const modal = this.container.querySelector('#correction-modal') as HTMLElement;
    const desc = this.container.querySelector('#correction-trigger-desc') as HTMLElement;
    const textarea = this.container.querySelector('#correction-response-input') as HTMLTextAreaElement;
    const submitBtn = this.container.querySelector('#submit-correction-btn') as HTMLButtonElement;
    const closeBtn = this.container.querySelector('#correction-close-btn') as HTMLButtonElement;

    if (!modal) return;
    sfx.playClick();
    desc.textContent = trigger ? `Jika Administrator berkata: "${trigger}", bagaimana seharusnya Chen menjawab?` : `Koreksi jawaban Chen sebelumnya ("${prevResponse.slice(0, 30)}..."):`;
    textarea.value = '';
    modal.style.display = 'flex';

    const handleClose = () => {
      modal.style.display = 'none';
      closeBtn.removeEventListener('click', handleClose);
    };
    closeBtn.addEventListener('click', handleClose);

    submitBtn.onclick = () => {
      const newAns = textarea.value.trim();
      if (!newAns) return;
      sfx.playClick();
      if (memoryId) {
        neuralMemory.penalizeMemory(memoryId, newAns);
      } else {
        neuralMemory.teach(trigger || 'obrolan', newAns, 'happy', undefined, 'feedback_correction');
      }
      modal.style.display = 'none';
      this.showSpeechBubble(`Terima kasih atas koreksinya, Administrator! Chen telah mencatat instruksi ini ke dalam memori. [EMOTE:happy]`, 'happy');
      this.updateNeuralMemoriesUI();
    };
  }

  private setupNeuralCore() {
    const neuralBtn = this.container.querySelector('#neural-btn') as HTMLElement;
    const neuralModal = this.container.querySelector('#neural-modal') as HTMLElement;
    const neuralClose = this.container.querySelector('#neural-close-btn') as HTMLElement;

    neuralBtn?.addEventListener('click', () => {
      sfx.playClick();
      neuralModal.style.display = 'flex';
      this.updateNeuralMemoriesUI();
      this.updateTrainedMotionsUI();
      this.updateCognitiveMonitorUI();
    });

    neuralClose?.addEventListener('click', () => {
      sfx.playClick();
      neuralModal.style.display = 'none';
      this.chen.setMotionPreviewPose(null);
    });

    // Tab buttons switching
    const tabs = this.container.querySelectorAll('.neural-tab-btn');
    tabs.forEach(tab => {
      tab.addEventListener('click', (e) => {
        sfx.playClick();
        tabs.forEach(t => t.classList.remove('active'));
        (e.currentTarget as HTMLElement).classList.add('active');
        const targetTab = (e.currentTarget as HTMLElement).dataset.tab;
        
        const contents = this.container.querySelectorAll('.neural-tab-content');
        contents.forEach(c => (c as HTMLElement).style.display = 'none');
        const activeContent = this.container.querySelector(`#tab-${targetTab}`) as HTMLElement;
        if (activeContent) activeContent.style.display = 'block';

        if (targetTab === 'motions') {
          this.chen.setMotionPreviewPose(this.getSlidersPose());
        } else {
          this.chen.setMotionPreviewPose(null);
        }
        if (targetTab === 'cognitive') {
          this.updateCognitiveMonitorUI();
        }
      });
    });

    // Tab 1: Save Memory
    const saveMemoryBtn = this.container.querySelector('#save-memory-btn') as HTMLButtonElement;
    const triggerInput = this.container.querySelector('#train-trigger-input') as HTMLInputElement;
    const responseInput = this.container.querySelector('#train-response-input') as HTMLTextAreaElement;
    const emotionSelect = this.container.querySelector('#train-emotion-select') as HTMLSelectElement;
    const motionSelect = this.container.querySelector('#train-motion-select') as HTMLSelectElement;

    saveMemoryBtn?.addEventListener('click', () => {
      const trigger = triggerInput.value.trim();
      const response = responseInput.value.trim();
      if (!trigger || !response) {
        alert('Harap isi kata kunci pemicu dan jawaban Chen!');
        return;
      }
      sfx.playHeart();
      neuralMemory.teach(
        trigger,
        response,
        emotionSelect.value as EmotionType,
        motionSelect.value || undefined,
        'user_taught'
      );
      triggerInput.value = '';
      responseInput.value = '';
      this.updateNeuralMemoriesUI();
      this.showSpeechBubble(`Memori baru berhasil dilatih! Jika Anda berkata '${trigger}', Chen akan merespons sesuai keinginan Anda. [EMOTE:happy]`, 'happy');
    });

    // Tab 1: Export / Import
    const exportBtn = this.container.querySelector('#export-brain-btn') as HTMLButtonElement;
    const importBtn = this.container.querySelector('#import-brain-btn') as HTMLButtonElement;
    const importFile = this.container.querySelector('#import-brain-file') as HTMLInputElement;

    exportBtn?.addEventListener('click', () => {
      const dump = {
        version: 2,
        exportedAt: new Date().toISOString(),
        memories: neuralMemory.memories,
        trainedMotions: motionTrainer.trainedMotions,
      };
      const blob = new Blob([JSON.stringify(dump, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `chen_ai_brain_backup_${Date.now()}.json`;
      a.click();
      URL.revokeObjectURL(url);
    });

    importBtn?.addEventListener('click', () => importFile?.click());
    importFile?.addEventListener('change', async (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;
      try {
        const text = await file.text();
        const data = JSON.parse(text);
        if (data.memories && Array.isArray(data.memories)) {
          neuralMemory.memories = data.memories;
          neuralMemory.save();
        }
        if (data.trainedMotions && Array.isArray(data.trainedMotions)) {
          motionTrainer.trainedMotions = data.trainedMotions;
          motionTrainer.save();
        }
        sfx.playHeart();
        this.updateNeuralMemoriesUI();
        this.updateTrainedMotionsUI();
        alert('Otak AI Chen berhasil diimpor!');
      } catch (err) {
        alert('Gagal membaca file JSON: ' + (err as Error).message);
      }
    });

    // Tab 2: Sliders Live Motion Preview
    const sliders = this.container.querySelectorAll('.pose-slider, #slider-dynamicsType');
    sliders.forEach(slider => {
      slider.addEventListener('input', () => {
        const id = (slider as HTMLElement).id;
        const valSpan = this.container.querySelector(`#val-${id.replace('slider-', '')}`) as HTMLElement | null;
        if (valSpan && (slider as HTMLInputElement).value !== undefined) {
          valSpan.textContent = parseFloat((slider as HTMLInputElement).value).toFixed(2);
        }
        const pose = this.getSlidersPose();
        this.chen.setMotionPreviewPose(pose);
      });
    });

    // Tab 2: Archetype preset buttons
    const archetypeBtns = this.container.querySelectorAll('.archetype-btn');
    archetypeBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        sfx.playClick();
        const type = (e.currentTarget as HTMLElement).dataset.archetype;
        if (type === 'neutral') {
          this.setSlidersPose(motionTrainer.getNeutralPose());
        } else {
          const found = DEFAULT_MOTION_PRESETS.find(p => p.id === `motion_${type}`);
          if (found) {
            this.setSlidersPose(found.pose);
          }
        }
        this.chen.setMotionPreviewPose(this.getSlidersPose());
      });
    });

    // Tab 2: Test Preview Button
    const testPreviewBtn = this.container.querySelector('#test-preview-btn') as HTMLButtonElement;
    testPreviewBtn?.addEventListener('click', () => {
      sfx.playClick();
      const pose = this.getSlidersPose();
      const mockMotion: TrainedMotion = {
        id: 'mock_preview',
        name: 'Preview',
        description: 'Test',
        triggerKeywords: [],
        duration: 4.2,
        pose,
        createdAt: Date.now(),
      };
      this.chen.playTrainedMotion(mockMotion);
    });

    // Tab 2: Save Motion
    const saveMotionBtn = this.container.querySelector('#save-motion-btn') as HTMLButtonElement;
    const motionNameInput = this.container.querySelector('#motion-name-input') as HTMLInputElement;
    const motionTriggersInput = this.container.querySelector('#motion-triggers-input') as HTMLInputElement;
    const motionDurationInput = this.container.querySelector('#motion-duration-input') as HTMLInputElement;

    saveMotionBtn?.addEventListener('click', () => {
      const name = motionNameInput.value.trim();
      if (!name) {
        alert('Harap masukkan nama motion!');
        return;
      }
      const rawKeywords = motionTriggersInput.value.split(',').map(k => k.trim()).filter(Boolean);
      const duration = parseFloat(motionDurationInput.value) || 4.0;
      const pose = this.getSlidersPose();

      sfx.playHeart();
      const saved = motionTrainer.saveNewMotion(name, '', rawKeywords, 'smile', duration, pose);
      motionNameInput.value = '';
      motionTriggersInput.value = '';
      this.updateTrainedMotionsUI();
      this.chen.playTrainedMotion(saved);
      this.showSpeechBubble(`Motion '${name}' berhasil dilatih dan disimpan ke database syaraf kognitif! [EMOTE:happy]`, 'happy');
    });

    const resetMotionsBtn = this.container.querySelector('#reset-motions-btn') as HTMLButtonElement;
    resetMotionsBtn?.addEventListener('click', () => {
      if (confirm('Reset daftar motion terlatih kembali ke preset awal?')) {
        motionTrainer.resetToDefaults();
        this.updateTrainedMotionsUI();
      }
    });

    // Tab 3: Cognitive Monitor Button
    const triggerThoughtBtn = this.container.querySelector('#trigger-thought-btn') as HTMLButtonElement;
    triggerThoughtBtn?.addEventListener('click', () => {
      sfx.playClick();
      const thought = neuralMemory.generateInnerThought({
        userInput: 'refleksi batin',
        affectionLevel: affection.getCurrentLevel().level,
      });
      this.updateCognitiveMonitorUI();
      this.showSpeechBubble(`[Pikiran Batin]: ${thought}`, 'normal', 7);
    });

    // 16. Proactive Autonomous Idle Remark Loop (Every 40-50s of idle)
    let lastUserActivityTime = Date.now();
    const markActive = () => {
      lastUserActivityTime = Date.now();
      neuralMemory.cognitiveState.lastActivityTime = Date.now();
    };
    window.addEventListener('pointerdown', markActive);
    window.addEventListener('keydown', markActive);

    setInterval(() => {
      if (this.chen.isDancing) return;
      const idleSeconds = (Date.now() - lastUserActivityTime) / 1000;
      if (idleSeconds >= 45) {
        lastUserActivityTime = Date.now();
        const proactive = neuralMemory.getProactiveIdleRemark();
        if (proactive) {
          this.chen.setEmotion(proactive.emotion);
          if (proactive.gesture) {
            this.chen.triggerGesture(proactive.gesture as any);
          }
          this.showSpeechBubble(proactive.text, proactive.emotion, 9);
          this.addChatMessage('chen', proactive.text, proactive.emotion, '[Inisiatif Otonom]: Chen berinisiatif menyapa Administrator.');
          if (ai.settings.voiceEnabled) {
            chenVoice.playVoice('greeting');
          }
        }
      }
    }, 5000);
  }

  getSlidersPose(): MotionPoseData {
    const getVal = (id: string, def = 0) => {
      const el = this.container.querySelector(`#${id}`) as HTMLInputElement | null;
      return el ? parseFloat(el.value) : def;
    };
    const getSelect = (id: string, def = 'breathing') => {
      const el = this.container.querySelector(`#${id}`) as HTMLSelectElement | null;
      return el ? (el.value as any) : def;
    };

    return {
      headRoll: getVal('slider-headRoll'),
      headPitch: getVal('slider-headPitch'),
      headYaw: getVal('slider-headYaw'),
      neckPitch: getVal('slider-headPitch') * 0.5,
      neckYaw: getVal('slider-headYaw') * 0.5,
      spinePitch: getVal('slider-spinePitch'),
      spineRoll: getVal('slider-spineRoll'),
      spineYaw: getVal('slider-spineYaw'),
      leftArmZ: getVal('slider-leftArmZ'),
      leftArmX: getVal('slider-leftArmX'),
      leftArmY: 0,
      leftElbowZ: getVal('slider-leftElbowZ'),
      leftWristZ: 0,
      rightArmZ: getVal('slider-rightArmZ'),
      rightArmX: getVal('slider-rightArmX'),
      rightArmY: 0,
      rightElbowZ: getVal('slider-rightElbowZ'),
      rightWristZ: getVal('slider-rightWristZ'),
      rightWristX: 0,
      smile: getVal('slider-smile'),
      blush: getVal('slider-blush'),
      wink: getVal('slider-wink'),
      serious: getVal('slider-serious'),
      dynamicsType: getSelect('slider-dynamicsType'),
    };
  }

  setSlidersPose(pose: MotionPoseData) {
    const setVal = (id: string, val: number, spanId?: string) => {
      const el = this.container.querySelector(`#${id}`) as HTMLInputElement | null;
      if (el) el.value = val.toString();
      if (spanId) {
        const span = this.container.querySelector(`#${spanId}`) as HTMLElement | null;
        if (span) span.textContent = val.toFixed(2);
      }
    };
    setVal('slider-headRoll', pose.headRoll, 'val-headRoll');
    setVal('slider-headPitch', pose.headPitch, 'val-headPitch');
    setVal('slider-headYaw', pose.headYaw, 'val-headYaw');
    setVal('slider-spinePitch', pose.spinePitch, 'val-spinePitch');
    setVal('slider-spineRoll', pose.spineRoll, 'val-spineRoll');
    setVal('slider-spineYaw', pose.spineYaw, 'val-spineYaw');
    setVal('slider-leftArmZ', pose.leftArmZ, 'val-leftArmZ');
    setVal('slider-leftArmX', pose.leftArmX, 'val-leftArmX');
    setVal('slider-leftElbowZ', pose.leftElbowZ, 'val-leftElbowZ');
    setVal('slider-rightArmZ', pose.rightArmZ, 'val-rightArmZ');
    setVal('slider-rightArmX', pose.rightArmX, 'val-rightArmX');
    setVal('slider-rightElbowZ', pose.rightElbowZ, 'val-rightElbowZ');
    setVal('slider-rightWristZ', pose.rightWristZ, 'val-rightWristZ');
    setVal('slider-smile', pose.smile);
    setVal('slider-blush', pose.blush);
    setVal('slider-wink', pose.wink);
    setVal('slider-serious', pose.serious);

    const sel = this.container.querySelector('#slider-dynamicsType') as HTMLSelectElement | null;
    if (sel) sel.value = pose.dynamicsType;
  }

  updateNeuralMemoriesUI() {
    const container = this.container.querySelector('#memory-cards-list') as HTMLElement;
    const badge = this.container.querySelector('#memory-count-badge') as HTMLElement;
    if (!container) return;

    badge.textContent = neuralMemory.memories.length.toString();

    if (neuralMemory.memories.length === 0) {
      container.innerHTML = `<div class="empty-state">Belum ada memori terlatih. Masukkan kata kunci dan jawaban di atas untuk mulai melatih Chen!</div>`;
      return;
    }

    container.innerHTML = neuralMemory.memories.map(mem => `
      <div class="memory-card" data-mem-id="${mem.id}">
        <div class="mem-header">
          <span class="mem-trigger">⚡ "${mem.trigger}"</span>
          <span class="mem-conf">${(mem.confidence * 100).toFixed(0)}% Akurat</span>
        </div>
        <p class="mem-response">${mem.response}</p>
        <div class="mem-footer">
          <span class="mem-stats">👍 ${mem.rewards} Suka | 👎 ${mem.penalties} Koreksi</span>
          <div class="mem-btns">
            <button class="mem-test-btn" data-test-id="${mem.id}">▶ Uji Respon</button>
            <button class="mem-del-btn" data-del-id="${mem.id}">🗑 Hapus</button>
          </div>
        </div>
      </div>
    `).join('');

    // Wire up Test & Delete buttons
    container.querySelectorAll('.mem-test-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = (e.currentTarget as HTMLElement).dataset.testId;
        const mem = neuralMemory.memories.find(m => m.id === id);
        if (mem) {
          sfx.playClick();
          this.chen.setEmotion(mem.emotion);
          if (mem.motionId) {
            const foundMotion = motionTrainer.trainedMotions.find(m => m.id === mem.motionId);
            if (foundMotion) this.chen.playTrainedMotion(foundMotion);
            else this.chen.triggerGesture(mem.motionId as any);
          }
          this.showSpeechBubble(mem.response, mem.emotion);
          this.addChatMessage('chen', mem.response, mem.emotion, `[Uji Respon Terlatih]: '${mem.trigger}'`, mem.id);
        }
      });
    });

    container.querySelectorAll('.mem-del-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = (e.currentTarget as HTMLElement).dataset.delId;
        if (id && confirm('Hapus memori ini dari otak AI Chen?')) {
          neuralMemory.deleteMemory(id);
          this.updateNeuralMemoriesUI();
        }
      });
    });
  }

  updateTrainedMotionsUI() {
    const container = this.container.querySelector('#motion-cards-list') as HTMLElement;
    const badge = this.container.querySelector('#motion-count-badge') as HTMLElement;
    const select = this.container.querySelector('#train-motion-select') as HTMLSelectElement;
    if (!container) return;

    badge.textContent = motionTrainer.trainedMotions.length.toString();

    // Update select dropdown in Tab 1
    if (select) {
      select.innerHTML = `
        <option value="">-- Tanpa Motion Khusus (Gunakan Gestur Alami) --</option>
        <optgroup label="✨ Motion Terlatih">
          ${motionTrainer.trainedMotions.map(m => `<option value="${m.id}">${m.name} (${m.duration}s)</option>`).join('')}
        </optgroup>
        <optgroup label="🎭 Gestur Bawaan">
          <option value="gentle_wave">🌸 Lambaian Tangan</option>
          <option value="curious_tilt">💖 Miringkan Kepala</option>
          <option value="confident_officer">⚔️ Pose Officer</option>
          <option value="shy_glance">😳 Malu / Melirik</option>
          <option value="thinking_pose">🤔 Berpikir</option>
          <option value="cute_nod">✨ Mengangguk Manis</option>
          <option value="stretch_relax">🍃 Santai / Rileks</option>
        </optgroup>
      `;
    }

    container.innerHTML = motionTrainer.trainedMotions.map(motion => `
      <div class="motion-card" data-motion-id="${motion.id}">
        <div class="motion-card-top">
          <strong>${motion.name}</strong>
          <span class="motion-dur">${motion.duration}s</span>
        </div>
        <p class="motion-desc">${motion.description}</p>
        <div class="motion-tags">
          ${motion.triggerKeywords.length > 0 ? motion.triggerKeywords.map(k => `<span class="kw-tag">${k}</span>`).join('') : '<span class="kw-tag dim">Manual</span>'}
        </div>
        <div class="motion-btns">
          <button class="motion-play-btn" data-play-motion="${motion.id}">▶ Mainkan</button>
          <button class="motion-del-btn" data-del-motion="${motion.id}">🗑 Hapus</button>
        </div>
      </div>
    `).join('');

    container.querySelectorAll('.motion-play-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = (e.currentTarget as HTMLElement).dataset.playMotion;
        const m = motionTrainer.trainedMotions.find(x => x.id === id);
        if (m) {
          sfx.playClick();
          this.chen.playTrainedMotion(m);
        }
      });
    });

    container.querySelectorAll('.motion-del-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = (e.currentTarget as HTMLElement).dataset.delMotion;
        if (id && confirm('Hapus motion ini dari database AI?')) {
          motionTrainer.deleteMotion(id);
          this.updateTrainedMotionsUI();
        }
      });
    });
  }

  updateCognitiveMonitorUI() {
    const valEl = this.container.querySelector('#cog-valence-val');
    const energyEl = this.container.querySelector('#cog-energy-val');
    const memEl = this.container.querySelector('#cog-memories-val');
    const motEl = this.container.querySelector('#cog-motions-val');
    const streamEl = this.container.querySelector('#live-thought-stream');

    if (valEl) valEl.textContent = neuralMemory.cognitiveState.valence > 0.4 ? 'POSITIF / HANGAT (+0.8)' : 'NETRAL / SERIUS (0.2)';
    if (energyEl) energyEl.textContent = `${Math.round(neuralMemory.cognitiveState.energy * 100)}% (AKTIF)`;
    if (memEl) memEl.textContent = `${neuralMemory.memories.length} SIMPUL MEMORI`;
    if (motEl) motEl.textContent = `${motionTrainer.trainedMotions.length} GESTUR TERLATIH`;
    if (streamEl) streamEl.textContent = `"${neuralMemory.cognitiveState.innerMonologue}"`;
  }

  playDanceTrack(danceId: string) {
    const track = DANCE_TRACKS.find(t => t.id === danceId);
    if (!track) return;

    sfx.playClick();
    this.chen.setEmotion('happy');
    this.showSpeechBubble(`Playing choreography: ${track.name}! 🎵`, 'happy');
    this.sceneManager.setCameraPreset('full');
    chenVoice.playVoice('dance_1');

    const stopBtn = this.container.querySelector('#stop-dance-btn') as HTMLElement;
    stopBtn.style.display = 'block';

    // Pure VMD playback for full dances as requested
    this.chen.playDance(track.motionUrl, track.audioUrl, track.id);
  }

  showSpeechBubble(text: string, emotion: EmotionType = 'normal', durationSeconds: number = 8) {
    const bubble = this.container.querySelector('#speech-bubble') as HTMLElement;
    const textEl = this.container.querySelector('#bubble-text') as HTMLElement;
    const tagEl = this.container.querySelector('#bubble-emotion-tag') as HTMLElement;

    const clean = text.replace(/\[.*?\]/g, '').trim();
    tagEl.textContent = emotion.toUpperCase();
    textEl.textContent = clean;
    bubble.style.display = 'block';

    if (this.speechTimer !== null) {
      clearTimeout(this.speechTimer);
    }
    if (durationSeconds > 0) {
      this.speechTimer = window.setTimeout(() => {
        bubble.style.display = 'none';
      }, durationSeconds * 1000);
    }
  }

  addChatMessage(
    sender: 'user' | 'chen', 
    text: string, 
    emotion?: EmotionType,
    thought?: string,
    memoryId?: string
  ) {
    const container = this.container.querySelector('#messages-container') as HTMLElement;
    const msg = document.createElement('div');
    msg.className = `message-bubble ${sender}`;

    const clean = text.replace(/\[.*?\]/g, '').trim();

    const thoughtHtml = thought ? `
      <div class="msg-thought">
        <span class="thought-badge">💭 PIKIRAN BATIN AI</span>
        <span class="thought-text">${thought}</span>
      </div>
    ` : '';

    const feedbackHtml = sender === 'chen' ? `
      <div class="msg-feedback-bar">
        <button class="feedback-chip like-chip" title="Bagus! Chen mengingat preferensi ini">👍 Suka</button>
        <button class="feedback-chip dislike-chip" title="Koreksi respon Chen">👎 Koreksi</button>
      </div>
    ` : '';

    msg.innerHTML = `
      <div class="msg-sender">${sender === 'user' ? 'Administrator' : 'Chen Qianyu'} ${emotion ? `[${emotion}]` : ''}</div>
      ${thoughtHtml}
      <div class="msg-text">${clean}</div>
      ${feedbackHtml}
    `;

    // Wire up RLHF feedback chips
    if (sender === 'chen') {
      const likeBtn = msg.querySelector('.like-chip') as HTMLButtonElement | null;
      const dislikeBtn = msg.querySelector('.dislike-chip') as HTMLButtonElement | null;

      likeBtn?.addEventListener('click', () => {
        if (memoryId) {
          neuralMemory.rewardMemory(memoryId);
        } else {
          const allUserMsgs = container.querySelectorAll('.message-bubble.user .msg-text');
          const lastUserText = allUserMsgs.length > 0 ? (allUserMsgs[allUserMsgs.length - 1].textContent || '') : '';
          if (lastUserText) {
            neuralMemory.teach(lastUserText, clean, emotion || 'smile', undefined, 'user_taught');
          }
        }
        likeBtn.textContent = '✓ Disukai (+Bond)';
        likeBtn.classList.add('rewarded');
        likeBtn.disabled = true;
        sfx.playHeart();
        this.updateAffectionUI();
      });

      dislikeBtn?.addEventListener('click', () => {
        const allUserMsgs = container.querySelectorAll('.message-bubble.user .msg-text');
        const lastUserText = allUserMsgs.length > 0 ? (allUserMsgs[allUserMsgs.length - 1].textContent || '') : '';
        this.openCorrectionModal(lastUserText, clean, memoryId);
      });
    }

    container.appendChild(msg);
    container.scrollTop = container.scrollHeight;

    const count = container.querySelectorAll('.message-bubble').length;
    const toggleText = this.container.querySelector('#chat-toggle-text');
    if (toggleText) {
      toggleText.textContent = `Chat History (${count}) ▲`;
    }
  }

  updateAffectionUI() {
    const level = affection.getCurrentLevel();
    const percent = affection.getProgressPercentage();

    const badge = this.container.querySelector('#level-badge');
    const xpText = this.container.querySelector('#xp-text');
    const bar = this.container.querySelector('#affection-bar-fill') as HTMLElement;

    if (badge) badge.textContent = `LV. ${level.level}: ${level.title.toUpperCase()}`;
    if (xpText) xpText.textContent = `${affection.xp} / ${level.maxXp} XP`;
    if (bar) bar.style.width = `${percent}%`;
  }

  setBackgroundPreset(preset: string) {
    const body = document.body;
    body.style.backgroundImage = 'none';

    switch (preset) {
      case 'cyber':
        body.style.background = 'radial-gradient(circle at 50% 35%, #18282c 0%, #0e171a 55%, #080d0f 100%)';
        break;
      case 'sunset':
        body.style.background = 'radial-gradient(circle at 50% 40%, #3d1a24 0%, #18090e 100%)';
        break;
      case 'command':
        body.style.background = 'radial-gradient(circle at 50% 30%, #0f233a 0%, #060b13 100%)';
        break;
      case 'studio':
        body.style.background = 'radial-gradient(circle at 50% 40%, #20242c 0%, #111317 100%)';
        break;
    }
  }

  updateFpsDisplay(fps: number) {
    const counter = this.container.querySelector('#fps-counter');
    const dot = this.container.querySelector('#fps-dot');
    if (counter) counter.textContent = `${fps} FPS`;
    if (dot) {
      dot.className = `fps-indicator ${fps >= 48 ? 'green' : fps >= 28 ? 'yellow' : 'red'}`;
    }
  }

  updateQualityUI(config: GraphicsConfig) {
    const badge = this.container.querySelector('#preset-badge');
    if (badge) {
      badge.className = `preset-label ${config.preset}`;
      const presetNames: Record<GraphicsPreset, string> = {
        'performance': 'RINGAN',
        'ultra-light': 'HEMAT',
        'high': 'TINGGI',
        'custom': 'KUSTOM',
      };
      badge.textContent = presetNames[config.preset] || config.preset.toUpperCase();
    }

    const gfxPresetSelect = this.container.querySelector('#graphics-preset-select') as HTMLSelectElement | null;
    if (gfxPresetSelect) gfxPresetSelect.value = config.preset;

    const gfxOutlineCheck = this.container.querySelector('#gfx-outline-check') as HTMLInputElement | null;
    if (gfxOutlineCheck) gfxOutlineCheck.checked = config.outline;

    const gfxShadowCheck = this.container.querySelector('#gfx-shadow-check') as HTMLInputElement | null;
    if (gfxShadowCheck) gfxShadowCheck.checked = config.shadows !== 'off';

    const gfxPhysicsCheck = this.container.querySelector('#gfx-physics-check') as HTMLInputElement | null;
    if (gfxPhysicsCheck) gfxPhysicsCheck.checked = config.physics;

    const gfxParticlesCheck = this.container.querySelector('#gfx-particles-check') as HTMLInputElement | null;
    if (gfxParticlesCheck) gfxParticlesCheck.checked = config.particles;
  }
}
