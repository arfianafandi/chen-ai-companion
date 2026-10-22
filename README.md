# 🌸 Operator Chen Qianyu (陈千语) — 3D AI Companion
> **Arknights: Endfield** × **3D WebGL / Bullet WASM Physics** × **Neural Cognitive Core**

An interactive, autonomous 3D anime AI companion web application featuring **Operator Chen Qianyu** from *Arknights: Endfield*. Built with Three.js, MMD loader, Bullet WASM physics, and custom neural memory engines.

---

## 🌟 Key Features

- **🎮 Full 3D MMD Character & Realtime Physics**:
  - High-poly Chen Qianyu PMX model with 156,000+ polygons, crystal horn shaders, and authentic textures.
  - **310 Rigid Bodies & 455 Spring Joints** powered by the official MMD **Bullet Physics WASM engine**.
  - Dynamic physics simulated in real-time on hair bangs, twintails, ribbons, skirt layers, and chest during idle breathing, cursor gaze tracking, and dance motions.

- **🧠 Autonomous Neural Core & Cognitive Monologue**:
  - **RLHF In-Chat Reinforcement Learning**: Upvote (👍) or Downvote (👎) responses to shape Chen's behavior.
  - **Inner Monologue (`<think>`)**: Real-time cognitive reflection drawer revealing how Chen analyzes your intentions before speaking.
  - **Self-Training Dialogue Memory**: Chen autonomously remembers facts, nickname preferences, and conversational history across sessions via localStorage.

- **💃 Motion Dojo & Interactive Pose Trainer**:
  - 3D bone manipulator with real-time sliders for head, spine, arms, and elbows.
  - Archetype pose templates (Salute, Neko Paws, Hand on Heart, Thinking, Officer Stance).
  - Save custom motions with custom keyword triggers (e.g. typing "semangat" automatically triggers a trained victory pose).

- **🎙️ Authentic Voice Packs & Lip-Sync**:
  - Japanese & Chinese authentic anime voice line audio.
  - Synchronized MMD mouth morph lip-sync (`あ`, `い`, `う`, `え`, `お`).
  - Web Speech API integration for speech-to-text (voice input) and text-to-speech.

- **🎭 MMD Dance Studio**:
  - 4 choreographed anime dance routines (*Poke Dance*, *Yurushite Neko*, *Michino Timothy*, *Happy Hands*).
  - Synchronized audio playback with physics and IK bone solving.

- **⚡ Graphics & Performance Optimizer**:
  - 3-tier graphics presets (**RINGAN** / 60 FPS, **HEMAT** / Battery Saver, **TINGGI** / PCFSoft Shadows & Manga Lineart).
  - Real-time FPS monitor and camera presets (Portrait Chat, Waifu Face, Full Body Dance).

---

## 🚀 Running Locally

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or pnpm

### Setup
```bash
# 1. Clone repository
git clone https://github.com/arfianafandi/chen-ai-companion.git
cd chen-ai-companion

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```

Open your browser at `http://localhost:5173/`.

### Production Build
```bash
npm run build
npm run preview
```

---

## 🌐 Deploying Online

### Option A: GitHub Pages (Automatic via GitHub Actions)
This repository includes a pre-configured GitHub Actions workflow (`.github/workflows/deploy.yml`):
1. Push this repository to GitHub:
   ```bash
   git remote add origin https://github.com/arfianafandi/chen-ai-companion.git
   git branch -M main
   git push -u origin main
   ```
2. On GitHub, go to your repository **Settings** → **Pages**.
3. Under **Build and deployment** → **Source**, select **GitHub Actions**.
4. The workflow will automatically build and publish your site at:
   `https://<your-username>.github.io/chen-ai-companion/`

### Option B: Vercel / Netlify (1-Click Deployment)
1. Import this repository into [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/).
2. Framework Preset: **Vite**
3. Build Command: `npm run build`
4. Output Directory: `dist`
5. Click **Deploy**!

---

## 🛠️ Tech Stack
- **Three.js** (WebGL 3D Rendering)
- **@yohawing/three-mmd-loader** (PMX / VMD Loader & Runtime)
- **Bullet Physics WASM** (C++ MMD rigid body physics compiled to WebAssembly)
- **TypeScript** & **Vite**
- **Lucide Icons** & **Canvas Confetti**

---

## 📄 License
Fan-made companion application for non-commercial educational & research purposes. Operator Chen Qianyu and Arknights: Endfield assets are property of Hypergryph / Gryphline.
