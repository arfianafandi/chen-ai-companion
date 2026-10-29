# 📋 Chen AI Companion — Changelog & Interaction Log

Dokumen ini mencatat setiap permintaan, analisis teknis, modifikasi kode, hasil verifikasi, serta status commit/deployment secara kronologis.

---

## 📅 [2026-10-30 00:26 WIB] — Implementasi Opsi A: Streaming LLM & Pipelined Neural Voice Lip-Sync
- **Pilihan User**: *"A"* (Integrasi Streaming LLM & Suara Neural Dinamis — Fase 1 Roadmap).
- **Implementasi**:
  - **Streaming LLM Token-by-Token (`src/ai.ts`)**:
    - Menambahkan `generateResponseStream` dengan SSE parser streaming (`ReadableStream` & `parseSSEStream`).
    - Dukungan Google Gemini (`:streamGenerateContent?alt=sse`) dan provider OpenAI-compatible (Groq / OpenAI / Ollama) dengan SSE `stream: true`.
    - Simulasi pengetikan mulus (`simulateTypingStream`) untuk mode offline/memory match sehingga respons terasa natural dan interaktif tanpa jeda.
    - Ekstraksi tag emosi (`[EMOTE:...]`) dinamis saat token dialirkan, otomatis membersihkan tampilan balon teks tanpa flicker tag mentah.
  - **Live Streaming Speech Bubble & Typing Cursor (`src/ui.ts` & `src/style.css`)**:
    - Balon dialog langsung menyala seketika kata pertama keluar (latensi respon awal <0.3 detik).
    - Efek kursor pengetikan `▌` bercahaya kuning Endfield (`.typing-cursor`) dengan animasi berkedip lembut.
    - Tag status dinamis `TRANSMITTING` saat teks mengalir, berganti otomatis ke emosi karakter setelah selesai.
  - **Pipelined Zero-Wait Speech Synthesis & MMD Lip-Sync (`src/audio.ts`)**:
    - Menambahkan `speechQueue` pada `TTSManager` untuk membaca kalimat per kalimat segera setelah tanda baca (`.`, `!`, `?`, `\n`, `。`, `！？`) terdeteksi.
    - Suara dan gerak mulut MMD viseme (`あ`, `い`, `う`, `え`, `お`) mulai berbicara di kalimat pertama saat kalimat berikutnya masih mengalir dari LLM (zero-wait streaming latency).
    - Suara studio otentik Chen tetap diprioritaskan saat frasa kunci terpicu.
- **Verifikasi**: `tsc && vite build` sukses 0 error (127 modul tertransformasi).
- **Status Deployment**: Commit dan push ke branch `main`, rilis otomatis ke GitHub Pages.

---

## 📅 [2026-10-30 00:08 WIB] — Perancangan Roadmap Masa Depan Chen AI Companion
- **Pertanyaan User**: *"apakah kamu punya planning pengembangan kedepannya gimana? boleh tulis di sini?"*
- **Implementasi**:
  - Menyusun rencana strategis 4 fase pengembangan masa depan:
    - **Fase 1**: Kecerdasan AI Generatif Streaming (Gemini / Claude / Local LLM) & Voice Cloning Realtime Audio Viseme.
    - **Fase 2**: Fisika Kain & Rambut Interaktif, Dressing Room (Ganti Kostum/Aksesori), dan Panggung Cuaca Dinamis.
    - **Fase 3**: Siklus Rutinitas 24 Jam Mandiri (Pagi/Siang/Malam/Tidur) & Mini-game Ikatan.
    - **Fase 4**: PWA Mobile/Desktop & Desktop Pet Transparan (Tauri).
  - Dicatat ke dalam artefak `roadmap-future-planning.md` dan `development-log.md`.

---

## 📅 [2026-10-30 00:02 WIB] — Aktivasi Sistem Logging Chat
- **Instruksi User**: *"mulai sekarang tiap chat buat md/log nya"*
- **Implementasi**:
  - Dibuat artefak pelacakan interaktif: `development-log.md`.
  - Dibuat file log riwayat proyek di repository: `CHANGELOG.md`.
  - Setiap interaksi dan pembaruan berikutnya akan selalu dicatat ke dalam log ini.

---

## 📅 [2026-10-29 23:46 WIB] — Deployment Production ke GitHub Pages
- **Instruksi User**: *"deploy"*
- **Implementasi**:
  - Memverifikasi konfigurasi workflow GitHub Actions (`.github/workflows/deploy.yml`).
  - Memverifikasi build lokal `npm run build` (0 error, waktu build 2.76s).
  - Memverifikasi status deployment GitHub Pages secara live.
- **Hasil Deployment**:
  - Status: `HTTP 200 OK`
  - URL Live: [https://arfianafandi.github.io/chen-ai-companion/](https://arfianafandi.github.io/chen-ai-companion/)
  - Commit Terdeploy: `c471832`

---

## 📅 [2026-10-29 23:18 WIB] — Eliminasi Jeda Beku Selesai Dance
- **Masalah User**: *"ada jeda cukup lama saat dance berakhir sebelum kembali ke pose semula"*
- **Akar Masalah**:
  - Animasi VMD Poke Dance selesai pada frame 466 (15,53s), tetapi transisi keluar hanya dipicu event `audio.onended` (16,23s + buffer delay browser ~0,3–0,5s).
  - Karakter mematung selama >1,2 detik sebelum transisi blend-out 0,5s berjalan (total jeda ~1,7s).
- **Solusi**:
  - `src/character.ts`: Durasi animasi dihitung otomatis dari metadata klip (`maxFrame / 30`). Saat animasi selesai di detik ke-15,53, `stopDance()` langsung dipicu tanpa menunggu audio habis.
  - `DANCE_BLEND_OUT_DURATION` dioptimalkan dari 0,5s menjadi 0,35s dengan kurva *smootherstep*.
  - `src/motions/sampler.ts`: Motion non-looping yang selesai kini otomatis memicu `stop(0.35)`.
- **Commit Git**: `c471832`

---

## 📅 [2026-10-29 22:44 WIB] — Fisika Sentuhan Kenyal di Tempat (Zero Vertical Lift)
- **Masalah User**: *"sekarang malah hilang kenyalnya tapi malah saat diklik naik ke atas"*
- **Akar Masalah**:
  - Tulang payudara `左胸上2` & `右胸上2` dimodifikasi posisinya dengan meng-override posisi $Y$ dan rotasi ke T-pose awal sebelum gravitasi aktif, menyebabkan dada tersentak naik ke atas saat disentuh.
  - Damping terlalu tinggi (`damping: 13.0`, `stiffness: 200`, `displacement: -0.085`), getaran terhenti dalam 0,1s.
  - Batas Z raycaster terlalu ketat ($Z \ge 0.55$), klik pada sisi dada terdeteksi sebagai kaki dan memunculkan teks XP mengambang ke atas.
- **Solusi**:
  - `src/character.ts`: Sumbu $Y$ dan rotasi dibiarkan 100% pada posisi alami simulasi gravitasi. Sentuhan murni kompresi kedalaman $Z$ (`-0.24`) dan ekspansi lateral $X$ (`1.1`).
  - Parameter pegas disetel kenyal alami (`stiffness: 75`, `damping: 6.2`) menghasilkan 3–4 gelombang getaran membal yang jelas terlihat.
  - `src/interaction.ts`: Menambahkan hitbox area tengah (*cleavage*) dan batas raycast dilonggarkan ke $Z \ge 0.25$.
- **Commit Git**: `d681307`

---

## 📅 [2026-10-29 22:15 WIB & Sebelumnya] — Riwayat Pengembangan Awal
- **Poke Dance Transition**: Transisi mulus 0.4s dari standing pose live ke frame 0 tarian (`76965e6`).
- **Sentuhan Kenyal Dada & Pipi**: Implementasi soft-body spring physics untuk pipi dan dada (`3b71ed0`).
- **Pembersihan Reaksi Sentuhan**: Dialog, suara, popup XP, dan emosi dinonaktifkan untuk dada dan pipi (`d9312c5`, `729e14e`).
- **Perbaikan Bug Amblas**: Restorasi transform dihitung dari koordinat rest transform presisi (`d9312c5`).
- **Panggung & Shadow**: Penambahan ground plane panggung dan frustum culling dinonaktifkan (`76965e6`).
