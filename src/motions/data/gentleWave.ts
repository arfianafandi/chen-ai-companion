import type { IVmdStructuredMotion } from '../types';

/**
 * Otentik Lambaian Tangan Ramah Anime (Genuine Full-Body Cute Anime Wave)
 * Didesain dengan kinematika organik seluruh tubuh model Chen (chen.pmx):
 * - Tangan terangkat ke samping-depan di area terbuka dengan telapak tangan menghadap Dokutah (+Z).
 * - Jari-jemari terbuka anggun (open fanned palm) dengan secondary motion lag di tiap ruas jari.
 * - SELURUH TUBUH BERGERAK HARMONIS:
 *   * Waifu Head Tilt (+roll 0.09 rad) & Cheerful Nodding Bob di tempo lambaian.
 *   * Spine & Chest condong hangat ke depan-kanan menyambut Dokutah.
 *   * Hips Contrapposto (-roll 0.055 rad) & Center sink/bounce memberikan gravitasi dan bobot kaki yang alami.
 *   * Tangan kiri rileks anggun di samping pinggul, tidak kaku seperti patung.
 * - Transisi Ease-In (0-0.8s) dan Ease-Out (2.8-3.6s) berbasis kurva quintic smootherstep:
 *   Frame 0 dan Frame 108 berada di EXACT rest transform [0, 0, 0, 1] dengan derivatif nol sehingga
 *   transisi masuk dan keluar 100% mulus tanpa ada hentakan/potongan (zero cut-off popping).
 */
export const gentleWaveMotion: IVmdStructuredMotion = {
  "metadata": {
    "version": "Vocaloid Motion Data 0002",
    "modelName": "Chen_GentleWave_FullBodyCute",
    "totalFrames": 109,
    "durationSeconds": 3.6,
    "fps": 30,
    "coordSystem": "raw"
  },
  "bones": {
    "センター": [
      {
        "frame": 0,
        "time": 0,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      },
      {
        "frame": 1,
        "time": 0.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      },
      {
        "frame": 2,
        "time": 0.0667,
        "position": [
          -0.0002,
          -0.0004,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0001,
          1
        ]
      },
      {
        "frame": 3,
        "time": 0.1,
        "position": [
          -0.0006,
          -0.0011,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0002,
          1
        ]
      },
      {
        "frame": 4,
        "time": 0.1333,
        "position": [
          -0.0012,
          -0.0021,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0004,
          1
        ]
      },
      {
        "frame": 5,
        "time": 0.1667,
        "position": [
          -0.0023,
          -0.0034,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0006,
          1
        ]
      },
      {
        "frame": 6,
        "time": 0.2,
        "position": [
          -0.0036,
          -0.0045,
          0
        ],
        "rotation": [
          0,
          0,
          -0.001,
          1
        ]
      },
      {
        "frame": 7,
        "time": 0.2333,
        "position": [
          -0.0053,
          -0.0056,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0015,
          1
        ]
      },
      {
        "frame": 8,
        "time": 0.2667,
        "position": [
          -0.0073,
          -0.0067,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0021,
          1
        ]
      },
      {
        "frame": 9,
        "time": 0.3,
        "position": [
          -0.0096,
          -0.0083,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0028,
          1
        ]
      },
      {
        "frame": 10,
        "time": 0.3333,
        "position": [
          -0.0121,
          -0.011,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0035,
          1
        ]
      },
      {
        "frame": 11,
        "time": 0.3667,
        "position": [
          -0.0148,
          -0.0155,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0042,
          1
        ]
      },
      {
        "frame": 12,
        "time": 0.4,
        "position": [
          -0.0175,
          -0.0219,
          0
        ],
        "rotation": [
          0,
          0,
          -0.005,
          1
        ]
      },
      {
        "frame": 13,
        "time": 0.4333,
        "position": [
          -0.0202,
          -0.0301,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0058,
          1
        ]
      },
      {
        "frame": 14,
        "time": 0.4667,
        "position": [
          -0.0229,
          -0.0392,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0065,
          1
        ]
      },
      {
        "frame": 15,
        "time": 0.5,
        "position": [
          -0.0254,
          -0.048,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0072,
          1
        ]
      },
      {
        "frame": 16,
        "time": 0.5333,
        "position": [
          -0.0277,
          -0.055,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0079,
          1
        ]
      },
      {
        "frame": 17,
        "time": 0.5667,
        "position": [
          -0.0297,
          -0.059,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0085,
          1
        ]
      },
      {
        "frame": 18,
        "time": 0.6,
        "position": [
          -0.0314,
          -0.0593,
          0
        ],
        "rotation": [
          0,
          0,
          -0.009,
          1
        ]
      },
      {
        "frame": 19,
        "time": 0.6333,
        "position": [
          -0.0327,
          -0.0561,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0094,
          1
        ]
      },
      {
        "frame": 20,
        "time": 0.6667,
        "position": [
          -0.0338,
          -0.0502,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0096,
          1
        ]
      },
      {
        "frame": 21,
        "time": 0.7,
        "position": [
          -0.0344,
          -0.0431,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0098,
          1
        ]
      },
      {
        "frame": 22,
        "time": 0.7333,
        "position": [
          -0.0348,
          -0.0364,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0099,
          1
        ]
      },
      {
        "frame": 23,
        "time": 0.7667,
        "position": [
          -0.035,
          -0.0317,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 24,
        "time": 0.8,
        "position": [
          -0.035,
          -0.03,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 25,
        "time": 0.8333,
        "position": [
          -0.035,
          -0.0317,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 26,
        "time": 0.8667,
        "position": [
          -0.035,
          -0.0366,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 27,
        "time": 0.9,
        "position": [
          -0.035,
          -0.0438,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 28,
        "time": 0.9333,
        "position": [
          -0.035,
          -0.0521,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 29,
        "time": 0.9667,
        "position": [
          -0.035,
          -0.06,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 30,
        "time": 1,
        "position": [
          -0.035,
          -0.0662,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 31,
        "time": 1.0333,
        "position": [
          -0.035,
          -0.0696,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 32,
        "time": 1.0667,
        "position": [
          -0.035,
          -0.0696,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 33,
        "time": 1.1,
        "position": [
          -0.035,
          -0.0662,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 34,
        "time": 1.1333,
        "position": [
          -0.035,
          -0.06,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 35,
        "time": 1.1667,
        "position": [
          -0.035,
          -0.0521,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 36,
        "time": 1.2,
        "position": [
          -0.035,
          -0.0438,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 37,
        "time": 1.2333,
        "position": [
          -0.035,
          -0.0366,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 38,
        "time": 1.2667,
        "position": [
          -0.035,
          -0.0317,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 39,
        "time": 1.3,
        "position": [
          -0.035,
          -0.03,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 40,
        "time": 1.3333,
        "position": [
          -0.035,
          -0.0317,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 41,
        "time": 1.3667,
        "position": [
          -0.035,
          -0.0366,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 42,
        "time": 1.4,
        "position": [
          -0.035,
          -0.0438,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 43,
        "time": 1.4333,
        "position": [
          -0.035,
          -0.0521,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 44,
        "time": 1.4667,
        "position": [
          -0.035,
          -0.06,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 45,
        "time": 1.5,
        "position": [
          -0.035,
          -0.0662,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 46,
        "time": 1.5333,
        "position": [
          -0.035,
          -0.0696,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 47,
        "time": 1.5667,
        "position": [
          -0.035,
          -0.0696,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 48,
        "time": 1.6,
        "position": [
          -0.035,
          -0.0662,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 49,
        "time": 1.6333,
        "position": [
          -0.035,
          -0.06,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 50,
        "time": 1.6667,
        "position": [
          -0.035,
          -0.0521,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 51,
        "time": 1.7,
        "position": [
          -0.035,
          -0.0438,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 52,
        "time": 1.7333,
        "position": [
          -0.035,
          -0.0366,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 53,
        "time": 1.7667,
        "position": [
          -0.035,
          -0.0317,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 54,
        "time": 1.8,
        "position": [
          -0.035,
          -0.03,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 55,
        "time": 1.8333,
        "position": [
          -0.035,
          -0.0317,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 56,
        "time": 1.8667,
        "position": [
          -0.035,
          -0.0366,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 57,
        "time": 1.9,
        "position": [
          -0.035,
          -0.0438,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 58,
        "time": 1.9333,
        "position": [
          -0.035,
          -0.0521,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 59,
        "time": 1.9667,
        "position": [
          -0.035,
          -0.06,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 60,
        "time": 2,
        "position": [
          -0.035,
          -0.0662,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 61,
        "time": 2.0333,
        "position": [
          -0.035,
          -0.0696,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 62,
        "time": 2.0667,
        "position": [
          -0.035,
          -0.0696,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 63,
        "time": 2.1,
        "position": [
          -0.035,
          -0.0662,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 64,
        "time": 2.1333,
        "position": [
          -0.035,
          -0.06,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 65,
        "time": 2.1667,
        "position": [
          -0.035,
          -0.0521,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 66,
        "time": 2.2,
        "position": [
          -0.035,
          -0.0438,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 67,
        "time": 2.2333,
        "position": [
          -0.035,
          -0.0366,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 68,
        "time": 2.2667,
        "position": [
          -0.035,
          -0.0317,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 69,
        "time": 2.3,
        "position": [
          -0.035,
          -0.03,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 70,
        "time": 2.3333,
        "position": [
          -0.035,
          -0.0317,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 71,
        "time": 2.3667,
        "position": [
          -0.035,
          -0.0366,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 72,
        "time": 2.4,
        "position": [
          -0.035,
          -0.0438,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 73,
        "time": 2.4333,
        "position": [
          -0.035,
          -0.0521,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 74,
        "time": 2.4667,
        "position": [
          -0.035,
          -0.06,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 75,
        "time": 2.5,
        "position": [
          -0.035,
          -0.0662,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 76,
        "time": 2.5333,
        "position": [
          -0.035,
          -0.0696,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 77,
        "time": 2.5667,
        "position": [
          -0.035,
          -0.0696,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 78,
        "time": 2.6,
        "position": [
          -0.035,
          -0.0662,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 79,
        "time": 2.6333,
        "position": [
          -0.035,
          -0.06,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 80,
        "time": 2.6667,
        "position": [
          -0.035,
          -0.0521,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 81,
        "time": 2.7,
        "position": [
          -0.035,
          -0.0438,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 82,
        "time": 2.7333,
        "position": [
          -0.035,
          -0.0366,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 83,
        "time": 2.7667,
        "position": [
          -0.035,
          -0.0317,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 84,
        "time": 2.8,
        "position": [
          -0.035,
          -0.03,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 85,
        "time": 2.8333,
        "position": [
          -0.035,
          -0.0317,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 86,
        "time": 2.8667,
        "position": [
          -0.0348,
          -0.0364,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0099,
          1
        ]
      },
      {
        "frame": 87,
        "time": 2.9,
        "position": [
          -0.0344,
          -0.0431,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0098,
          1
        ]
      },
      {
        "frame": 88,
        "time": 2.9333,
        "position": [
          -0.0338,
          -0.0502,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0096,
          1
        ]
      },
      {
        "frame": 89,
        "time": 2.9667,
        "position": [
          -0.0327,
          -0.0561,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0094,
          1
        ]
      },
      {
        "frame": 90,
        "time": 3,
        "position": [
          -0.0314,
          -0.0593,
          0
        ],
        "rotation": [
          0,
          0,
          -0.009,
          1
        ]
      },
      {
        "frame": 91,
        "time": 3.0333,
        "position": [
          -0.0297,
          -0.059,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0085,
          1
        ]
      },
      {
        "frame": 92,
        "time": 3.0667,
        "position": [
          -0.0277,
          -0.055,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0079,
          1
        ]
      },
      {
        "frame": 93,
        "time": 3.1,
        "position": [
          -0.0254,
          -0.048,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0072,
          1
        ]
      },
      {
        "frame": 94,
        "time": 3.1333,
        "position": [
          -0.0229,
          -0.0392,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0065,
          1
        ]
      },
      {
        "frame": 95,
        "time": 3.1667,
        "position": [
          -0.0202,
          -0.0301,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0058,
          1
        ]
      },
      {
        "frame": 96,
        "time": 3.2,
        "position": [
          -0.0175,
          -0.0219,
          0
        ],
        "rotation": [
          0,
          0,
          -0.005,
          1
        ]
      },
      {
        "frame": 97,
        "time": 3.2333,
        "position": [
          -0.0148,
          -0.0155,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0042,
          1
        ]
      },
      {
        "frame": 98,
        "time": 3.2667,
        "position": [
          -0.0121,
          -0.011,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0035,
          1
        ]
      },
      {
        "frame": 99,
        "time": 3.3,
        "position": [
          -0.0096,
          -0.0083,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0028,
          1
        ]
      },
      {
        "frame": 100,
        "time": 3.3333,
        "position": [
          -0.0073,
          -0.0067,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0021,
          1
        ]
      },
      {
        "frame": 101,
        "time": 3.3667,
        "position": [
          -0.0053,
          -0.0056,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0015,
          1
        ]
      },
      {
        "frame": 102,
        "time": 3.4,
        "position": [
          -0.0036,
          -0.0045,
          0
        ],
        "rotation": [
          0,
          0,
          -0.001,
          1
        ]
      },
      {
        "frame": 103,
        "time": 3.4333,
        "position": [
          -0.0023,
          -0.0034,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0006,
          1
        ]
      },
      {
        "frame": 104,
        "time": 3.4667,
        "position": [
          -0.0012,
          -0.0021,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0004,
          1
        ]
      },
      {
        "frame": 105,
        "time": 3.5,
        "position": [
          -0.0006,
          -0.0011,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0002,
          1
        ]
      },
      {
        "frame": 106,
        "time": 3.5333,
        "position": [
          -0.0002,
          -0.0004,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0001,
          1
        ]
      },
      {
        "frame": 107,
        "time": 3.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      },
      {
        "frame": 108,
        "time": 3.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      }
    ],
    "下半身": [
      {
        "frame": 0,
        "time": 0,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      },
      {
        "frame": 1,
        "time": 0.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      },
      {
        "frame": 2,
        "time": 0.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          -0.0001,
          -0.0001,
          1
        ]
      },
      {
        "frame": 3,
        "time": 0.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          -0.0002,
          -0.0003,
          1
        ]
      },
      {
        "frame": 4,
        "time": 0.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          -0.0005,
          -0.0008,
          1
        ]
      },
      {
        "frame": 5,
        "time": 0.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          -0.001,
          -0.0015,
          1
        ]
      },
      {
        "frame": 6,
        "time": 0.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          -0.0016,
          -0.0025,
          1
        ]
      },
      {
        "frame": 7,
        "time": 0.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          -0.0023,
          -0.0038,
          1
        ]
      },
      {
        "frame": 8,
        "time": 0.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          -0.0031,
          -0.0055,
          1
        ]
      },
      {
        "frame": 9,
        "time": 0.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          -0.0041,
          -0.0076,
          1
        ]
      },
      {
        "frame": 10,
        "time": 0.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0001,
          -0.0052,
          -0.01,
          0.9999
        ]
      },
      {
        "frame": 11,
        "time": 0.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0001,
          -0.0063,
          -0.0126,
          0.9999
        ]
      },
      {
        "frame": 12,
        "time": 0.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0001,
          -0.0075,
          -0.0155,
          0.9999
        ]
      },
      {
        "frame": 13,
        "time": 0.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0002,
          -0.0087,
          -0.0185,
          0.9998
        ]
      },
      {
        "frame": 14,
        "time": 0.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0002,
          -0.0098,
          -0.0214,
          0.9997
        ]
      },
      {
        "frame": 15,
        "time": 0.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0003,
          -0.0109,
          -0.0241,
          0.9997
        ]
      },
      {
        "frame": 16,
        "time": 0.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0003,
          -0.0118,
          -0.0264,
          0.9996
        ]
      },
      {
        "frame": 17,
        "time": 0.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0004,
          -0.0127,
          -0.0284,
          0.9995
        ]
      },
      {
        "frame": 18,
        "time": 0.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0004,
          -0.0134,
          -0.0298,
          0.9995
        ]
      },
      {
        "frame": 19,
        "time": 0.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0004,
          -0.014,
          -0.0306,
          0.9994
        ]
      },
      {
        "frame": 20,
        "time": 0.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0004,
          -0.0145,
          -0.0308,
          0.9994
        ]
      },
      {
        "frame": 21,
        "time": 0.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0005,
          -0.0148,
          -0.0305,
          0.9994
        ]
      },
      {
        "frame": 22,
        "time": 0.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0004,
          -0.0149,
          -0.0298,
          0.9994
        ]
      },
      {
        "frame": 23,
        "time": 0.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0004,
          -0.015,
          -0.0287,
          0.9995
        ]
      },
      {
        "frame": 24,
        "time": 0.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0004,
          -0.015,
          -0.0275,
          0.9995
        ]
      },
      {
        "frame": 25,
        "time": 0.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0004,
          -0.015,
          -0.0262,
          0.9995
        ]
      },
      {
        "frame": 26,
        "time": 0.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0004,
          -0.015,
          -0.0251,
          0.9996
        ]
      },
      {
        "frame": 27,
        "time": 0.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0004,
          -0.015,
          -0.024,
          0.9996
        ]
      },
      {
        "frame": 28,
        "time": 0.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0003,
          -0.015,
          -0.023,
          0.9996
        ]
      },
      {
        "frame": 29,
        "time": 0.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0003,
          -0.015,
          -0.0223,
          0.9996
        ]
      },
      {
        "frame": 30,
        "time": 1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0003,
          -0.015,
          -0.0218,
          0.9997
        ]
      },
      {
        "frame": 31,
        "time": 1.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0003,
          -0.015,
          -0.0215,
          0.9997
        ]
      },
      {
        "frame": 32,
        "time": 1.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0003,
          -0.015,
          -0.0215,
          0.9997
        ]
      },
      {
        "frame": 33,
        "time": 1.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0003,
          -0.015,
          -0.0218,
          0.9997
        ]
      },
      {
        "frame": 34,
        "time": 1.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0003,
          -0.015,
          -0.0223,
          0.9996
        ]
      },
      {
        "frame": 35,
        "time": 1.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0003,
          -0.015,
          -0.023,
          0.9996
        ]
      },
      {
        "frame": 36,
        "time": 1.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0004,
          -0.015,
          -0.024,
          0.9996
        ]
      },
      {
        "frame": 37,
        "time": 1.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0004,
          -0.015,
          -0.0251,
          0.9996
        ]
      },
      {
        "frame": 38,
        "time": 1.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0004,
          -0.015,
          -0.0262,
          0.9995
        ]
      },
      {
        "frame": 39,
        "time": 1.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0004,
          -0.015,
          -0.0275,
          0.9995
        ]
      },
      {
        "frame": 40,
        "time": 1.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0004,
          -0.015,
          -0.0287,
          0.9995
        ]
      },
      {
        "frame": 41,
        "time": 1.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0004,
          -0.015,
          -0.0299,
          0.9994
        ]
      },
      {
        "frame": 42,
        "time": 1.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0005,
          -0.015,
          -0.031,
          0.9994
        ]
      },
      {
        "frame": 43,
        "time": 1.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0005,
          -0.015,
          -0.0319,
          0.9994
        ]
      },
      {
        "frame": 44,
        "time": 1.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0005,
          -0.015,
          -0.0327,
          0.9994
        ]
      },
      {
        "frame": 45,
        "time": 1.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0005,
          -0.015,
          -0.0332,
          0.9993
        ]
      },
      {
        "frame": 46,
        "time": 1.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0005,
          -0.015,
          -0.0335,
          0.9993
        ]
      },
      {
        "frame": 47,
        "time": 1.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0005,
          -0.015,
          -0.0335,
          0.9993
        ]
      },
      {
        "frame": 48,
        "time": 1.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0005,
          -0.015,
          -0.0332,
          0.9993
        ]
      },
      {
        "frame": 49,
        "time": 1.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0005,
          -0.015,
          -0.0327,
          0.9994
        ]
      },
      {
        "frame": 50,
        "time": 1.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0005,
          -0.015,
          -0.0319,
          0.9994
        ]
      },
      {
        "frame": 51,
        "time": 1.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0005,
          -0.015,
          -0.031,
          0.9994
        ]
      },
      {
        "frame": 52,
        "time": 1.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0004,
          -0.015,
          -0.0299,
          0.9994
        ]
      },
      {
        "frame": 53,
        "time": 1.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0004,
          -0.015,
          -0.0287,
          0.9995
        ]
      },
      {
        "frame": 54,
        "time": 1.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0004,
          -0.015,
          -0.0275,
          0.9995
        ]
      },
      {
        "frame": 55,
        "time": 1.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0004,
          -0.015,
          -0.0262,
          0.9995
        ]
      },
      {
        "frame": 56,
        "time": 1.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0004,
          -0.015,
          -0.0251,
          0.9996
        ]
      },
      {
        "frame": 57,
        "time": 1.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0004,
          -0.015,
          -0.024,
          0.9996
        ]
      },
      {
        "frame": 58,
        "time": 1.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0003,
          -0.015,
          -0.023,
          0.9996
        ]
      },
      {
        "frame": 59,
        "time": 1.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0003,
          -0.015,
          -0.0223,
          0.9996
        ]
      },
      {
        "frame": 60,
        "time": 2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0003,
          -0.015,
          -0.0218,
          0.9997
        ]
      },
      {
        "frame": 61,
        "time": 2.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0003,
          -0.015,
          -0.0215,
          0.9997
        ]
      },
      {
        "frame": 62,
        "time": 2.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0003,
          -0.015,
          -0.0215,
          0.9997
        ]
      },
      {
        "frame": 63,
        "time": 2.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0003,
          -0.015,
          -0.0218,
          0.9997
        ]
      },
      {
        "frame": 64,
        "time": 2.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0003,
          -0.015,
          -0.0223,
          0.9996
        ]
      },
      {
        "frame": 65,
        "time": 2.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0003,
          -0.015,
          -0.023,
          0.9996
        ]
      },
      {
        "frame": 66,
        "time": 2.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0004,
          -0.015,
          -0.024,
          0.9996
        ]
      },
      {
        "frame": 67,
        "time": 2.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0004,
          -0.015,
          -0.0251,
          0.9996
        ]
      },
      {
        "frame": 68,
        "time": 2.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0004,
          -0.015,
          -0.0262,
          0.9995
        ]
      },
      {
        "frame": 69,
        "time": 2.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0004,
          -0.015,
          -0.0275,
          0.9995
        ]
      },
      {
        "frame": 70,
        "time": 2.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0004,
          -0.015,
          -0.0287,
          0.9995
        ]
      },
      {
        "frame": 71,
        "time": 2.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0004,
          -0.015,
          -0.0299,
          0.9994
        ]
      },
      {
        "frame": 72,
        "time": 2.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0005,
          -0.015,
          -0.031,
          0.9994
        ]
      },
      {
        "frame": 73,
        "time": 2.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0005,
          -0.015,
          -0.0319,
          0.9994
        ]
      },
      {
        "frame": 74,
        "time": 2.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0005,
          -0.015,
          -0.0327,
          0.9994
        ]
      },
      {
        "frame": 75,
        "time": 2.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0005,
          -0.015,
          -0.0332,
          0.9993
        ]
      },
      {
        "frame": 76,
        "time": 2.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0005,
          -0.015,
          -0.0335,
          0.9993
        ]
      },
      {
        "frame": 77,
        "time": 2.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0005,
          -0.015,
          -0.0335,
          0.9993
        ]
      },
      {
        "frame": 78,
        "time": 2.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0005,
          -0.015,
          -0.0332,
          0.9993
        ]
      },
      {
        "frame": 79,
        "time": 2.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0005,
          -0.015,
          -0.0327,
          0.9994
        ]
      },
      {
        "frame": 80,
        "time": 2.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0005,
          -0.015,
          -0.0319,
          0.9994
        ]
      },
      {
        "frame": 81,
        "time": 2.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0005,
          -0.015,
          -0.031,
          0.9994
        ]
      },
      {
        "frame": 82,
        "time": 2.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0004,
          -0.015,
          -0.0299,
          0.9994
        ]
      },
      {
        "frame": 83,
        "time": 2.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0004,
          -0.015,
          -0.0287,
          0.9995
        ]
      },
      {
        "frame": 84,
        "time": 2.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0004,
          -0.015,
          -0.0275,
          0.9995
        ]
      },
      {
        "frame": 85,
        "time": 2.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0004,
          -0.015,
          -0.0262,
          0.9995
        ]
      },
      {
        "frame": 86,
        "time": 2.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0004,
          -0.0149,
          -0.0249,
          0.9996
        ]
      },
      {
        "frame": 87,
        "time": 2.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0003,
          -0.0148,
          -0.0236,
          0.9996
        ]
      },
      {
        "frame": 88,
        "time": 2.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0003,
          -0.0145,
          -0.0222,
          0.9996
        ]
      },
      {
        "frame": 89,
        "time": 2.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0003,
          -0.014,
          -0.0209,
          0.9997
        ]
      },
      {
        "frame": 90,
        "time": 3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0003,
          -0.0134,
          -0.0195,
          0.9997
        ]
      },
      {
        "frame": 91,
        "time": 3.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0002,
          -0.0127,
          -0.0183,
          0.9998
        ]
      },
      {
        "frame": 92,
        "time": 3.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0002,
          -0.0118,
          -0.017,
          0.9998
        ]
      },
      {
        "frame": 93,
        "time": 3.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0002,
          -0.0109,
          -0.0158,
          0.9998
        ]
      },
      {
        "frame": 94,
        "time": 3.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0001,
          -0.0098,
          -0.0146,
          0.9998
        ]
      },
      {
        "frame": 95,
        "time": 3.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0001,
          -0.0087,
          -0.0133,
          0.9999
        ]
      },
      {
        "frame": 96,
        "time": 3.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0001,
          -0.0075,
          -0.012,
          0.9999
        ]
      },
      {
        "frame": 97,
        "time": 3.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0001,
          -0.0063,
          -0.0106,
          0.9999
        ]
      },
      {
        "frame": 98,
        "time": 3.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          -0.0052,
          -0.0091,
          0.9999
        ]
      },
      {
        "frame": 99,
        "time": 3.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          -0.0041,
          -0.0076,
          1
        ]
      },
      {
        "frame": 100,
        "time": 3.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          -0.0031,
          -0.006,
          1
        ]
      },
      {
        "frame": 101,
        "time": 3.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          -0.0023,
          -0.0046,
          1
        ]
      },
      {
        "frame": 102,
        "time": 3.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          -0.0016,
          -0.0032,
          1
        ]
      },
      {
        "frame": 103,
        "time": 3.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          -0.001,
          -0.0021,
          1
        ]
      },
      {
        "frame": 104,
        "time": 3.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          -0.0005,
          -0.0012,
          1
        ]
      },
      {
        "frame": 105,
        "time": 3.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          -0.0002,
          -0.0005,
          1
        ]
      },
      {
        "frame": 106,
        "time": 3.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          -0.0001,
          -0.0002,
          1
        ]
      },
      {
        "frame": 107,
        "time": 3.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      },
      {
        "frame": 108,
        "time": 3.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      }
    ],
    "上半身": [
      {
        "frame": 0,
        "time": 0,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      },
      {
        "frame": 1,
        "time": 0.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      },
      {
        "frame": 2,
        "time": 0.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0001,
          0.0001,
          -0.0001,
          1
        ]
      },
      {
        "frame": 3,
        "time": 0.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0003,
          0.0003,
          -0.0002,
          1
        ]
      },
      {
        "frame": 4,
        "time": 0.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0007,
          0.0006,
          -0.0005,
          1
        ]
      },
      {
        "frame": 5,
        "time": 0.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0013,
          0.001,
          -0.001,
          1
        ]
      },
      {
        "frame": 6,
        "time": 0.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0021,
          0.0014,
          -0.0018,
          1
        ]
      },
      {
        "frame": 7,
        "time": 0.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.003,
          0.002,
          -0.003,
          1
        ]
      },
      {
        "frame": 8,
        "time": 0.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0042,
          0.0027,
          -0.0047,
          1
        ]
      },
      {
        "frame": 9,
        "time": 0.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0055,
          0.0035,
          -0.0069,
          1
        ]
      },
      {
        "frame": 10,
        "time": 0.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0069,
          0.0045,
          -0.0095,
          0.9999
        ]
      },
      {
        "frame": 11,
        "time": 0.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0084,
          0.0057,
          -0.0127,
          0.9999
        ]
      },
      {
        "frame": 12,
        "time": 0.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0099,
          0.0071,
          -0.0161,
          0.9998
        ]
      },
      {
        "frame": 13,
        "time": 0.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0114,
          0.0089,
          -0.0197,
          0.9997
        ]
      },
      {
        "frame": 14,
        "time": 0.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0128,
          0.0109,
          -0.0233,
          0.9996
        ]
      },
      {
        "frame": 15,
        "time": 0.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0141,
          0.0132,
          -0.0265,
          0.9995
        ]
      },
      {
        "frame": 16,
        "time": 0.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0153,
          0.0156,
          -0.0293,
          0.9993
        ]
      },
      {
        "frame": 17,
        "time": 0.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0164,
          0.0181,
          -0.0314,
          0.9992
        ]
      },
      {
        "frame": 18,
        "time": 0.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0173,
          0.0206,
          -0.0327,
          0.9991
        ]
      },
      {
        "frame": 19,
        "time": 0.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0179,
          0.0228,
          -0.0331,
          0.999
        ]
      },
      {
        "frame": 20,
        "time": 0.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0185,
          0.0247,
          -0.0326,
          0.999
        ]
      },
      {
        "frame": 21,
        "time": 0.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0188,
          0.0263,
          -0.0313,
          0.999
        ]
      },
      {
        "frame": 22,
        "time": 0.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0191,
          0.0273,
          -0.0294,
          0.999
        ]
      },
      {
        "frame": 23,
        "time": 0.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0192,
          0.0278,
          -0.027,
          0.9991
        ]
      },
      {
        "frame": 24,
        "time": 0.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0193,
          0.028,
          -0.0244,
          0.9991
        ]
      },
      {
        "frame": 25,
        "time": 0.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0194,
          0.0278,
          -0.0218,
          0.9992
        ]
      },
      {
        "frame": 26,
        "time": 0.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0195,
          0.0272,
          -0.0194,
          0.9993
        ]
      },
      {
        "frame": 27,
        "time": 0.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0195,
          0.0264,
          -0.0171,
          0.9993
        ]
      },
      {
        "frame": 28,
        "time": 0.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0196,
          0.0253,
          -0.0152,
          0.9994
        ]
      },
      {
        "frame": 29,
        "time": 0.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0197,
          0.024,
          -0.0137,
          0.9994
        ]
      },
      {
        "frame": 30,
        "time": 1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0197,
          0.0226,
          -0.0127,
          0.9995
        ]
      },
      {
        "frame": 31,
        "time": 1.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0197,
          0.021,
          -0.0121,
          0.9995
        ]
      },
      {
        "frame": 32,
        "time": 1.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0198,
          0.0195,
          -0.0122,
          0.9995
        ]
      },
      {
        "frame": 33,
        "time": 1.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0198,
          0.0179,
          -0.0128,
          0.9996
        ]
      },
      {
        "frame": 34,
        "time": 1.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0198,
          0.0165,
          -0.0138,
          0.9996
        ]
      },
      {
        "frame": 35,
        "time": 1.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0198,
          0.0153,
          -0.0154,
          0.9996
        ]
      },
      {
        "frame": 36,
        "time": 1.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0197,
          0.0143,
          -0.0174,
          0.9996
        ]
      },
      {
        "frame": 37,
        "time": 1.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0197,
          0.0135,
          -0.0196,
          0.9995
        ]
      },
      {
        "frame": 38,
        "time": 1.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0197,
          0.0131,
          -0.0221,
          0.9995
        ]
      },
      {
        "frame": 39,
        "time": 1.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0197,
          0.013,
          -0.0247,
          0.9994
        ]
      },
      {
        "frame": 40,
        "time": 1.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0196,
          0.0132,
          -0.0273,
          0.9993
        ]
      },
      {
        "frame": 41,
        "time": 1.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0196,
          0.0137,
          -0.0298,
          0.9993
        ]
      },
      {
        "frame": 42,
        "time": 1.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0195,
          0.0146,
          -0.0321,
          0.9992
        ]
      },
      {
        "frame": 43,
        "time": 1.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0195,
          0.0157,
          -0.034,
          0.9991
        ]
      },
      {
        "frame": 44,
        "time": 1.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0194,
          0.017,
          -0.0355,
          0.999
        ]
      },
      {
        "frame": 45,
        "time": 1.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0193,
          0.0184,
          -0.0365,
          0.999
        ]
      },
      {
        "frame": 46,
        "time": 1.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0193,
          0.0199,
          -0.037,
          0.9989
        ]
      },
      {
        "frame": 47,
        "time": 1.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0192,
          0.0215,
          -0.037,
          0.9989
        ]
      },
      {
        "frame": 48,
        "time": 1.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0192,
          0.023,
          -0.0364,
          0.9989
        ]
      },
      {
        "frame": 49,
        "time": 1.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0191,
          0.0244,
          -0.0353,
          0.9989
        ]
      },
      {
        "frame": 50,
        "time": 1.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0191,
          0.0257,
          -0.0338,
          0.9989
        ]
      },
      {
        "frame": 51,
        "time": 1.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0191,
          0.0267,
          -0.0318,
          0.999
        ]
      },
      {
        "frame": 52,
        "time": 1.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0192,
          0.0274,
          -0.0295,
          0.999
        ]
      },
      {
        "frame": 53,
        "time": 1.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0192,
          0.0279,
          -0.027,
          0.9991
        ]
      },
      {
        "frame": 54,
        "time": 1.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0193,
          0.028,
          -0.0244,
          0.9991
        ]
      },
      {
        "frame": 55,
        "time": 1.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0194,
          0.0278,
          -0.0218,
          0.9992
        ]
      },
      {
        "frame": 56,
        "time": 1.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0195,
          0.0272,
          -0.0194,
          0.9993
        ]
      },
      {
        "frame": 57,
        "time": 1.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0195,
          0.0264,
          -0.0171,
          0.9993
        ]
      },
      {
        "frame": 58,
        "time": 1.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0196,
          0.0253,
          -0.0152,
          0.9994
        ]
      },
      {
        "frame": 59,
        "time": 1.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0197,
          0.024,
          -0.0137,
          0.9994
        ]
      },
      {
        "frame": 60,
        "time": 2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0197,
          0.0226,
          -0.0127,
          0.9995
        ]
      },
      {
        "frame": 61,
        "time": 2.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0197,
          0.021,
          -0.0121,
          0.9995
        ]
      },
      {
        "frame": 62,
        "time": 2.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0198,
          0.0195,
          -0.0122,
          0.9995
        ]
      },
      {
        "frame": 63,
        "time": 2.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0198,
          0.0179,
          -0.0128,
          0.9996
        ]
      },
      {
        "frame": 64,
        "time": 2.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0198,
          0.0165,
          -0.0138,
          0.9996
        ]
      },
      {
        "frame": 65,
        "time": 2.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0198,
          0.0153,
          -0.0154,
          0.9996
        ]
      },
      {
        "frame": 66,
        "time": 2.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0197,
          0.0143,
          -0.0174,
          0.9996
        ]
      },
      {
        "frame": 67,
        "time": 2.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0197,
          0.0135,
          -0.0196,
          0.9995
        ]
      },
      {
        "frame": 68,
        "time": 2.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0197,
          0.0131,
          -0.0221,
          0.9995
        ]
      },
      {
        "frame": 69,
        "time": 2.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0197,
          0.013,
          -0.0247,
          0.9994
        ]
      },
      {
        "frame": 70,
        "time": 2.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0196,
          0.0132,
          -0.0273,
          0.9993
        ]
      },
      {
        "frame": 71,
        "time": 2.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0196,
          0.0137,
          -0.0298,
          0.9993
        ]
      },
      {
        "frame": 72,
        "time": 2.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0195,
          0.0146,
          -0.0321,
          0.9992
        ]
      },
      {
        "frame": 73,
        "time": 2.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0195,
          0.0157,
          -0.034,
          0.9991
        ]
      },
      {
        "frame": 74,
        "time": 2.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0194,
          0.017,
          -0.0355,
          0.999
        ]
      },
      {
        "frame": 75,
        "time": 2.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0193,
          0.0184,
          -0.0365,
          0.999
        ]
      },
      {
        "frame": 76,
        "time": 2.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0193,
          0.0199,
          -0.037,
          0.9989
        ]
      },
      {
        "frame": 77,
        "time": 2.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0192,
          0.0215,
          -0.037,
          0.9989
        ]
      },
      {
        "frame": 78,
        "time": 2.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0192,
          0.023,
          -0.0364,
          0.9989
        ]
      },
      {
        "frame": 79,
        "time": 2.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0191,
          0.0244,
          -0.0353,
          0.9989
        ]
      },
      {
        "frame": 80,
        "time": 2.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0191,
          0.0257,
          -0.0338,
          0.9989
        ]
      },
      {
        "frame": 81,
        "time": 2.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0191,
          0.0267,
          -0.0318,
          0.999
        ]
      },
      {
        "frame": 82,
        "time": 2.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0192,
          0.0274,
          -0.0295,
          0.999
        ]
      },
      {
        "frame": 83,
        "time": 2.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0192,
          0.0279,
          -0.027,
          0.9991
        ]
      },
      {
        "frame": 84,
        "time": 2.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0193,
          0.028,
          -0.0244,
          0.9991
        ]
      },
      {
        "frame": 85,
        "time": 2.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0194,
          0.0277,
          -0.0218,
          0.9992
        ]
      },
      {
        "frame": 86,
        "time": 2.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0194,
          0.0271,
          -0.0193,
          0.9993
        ]
      },
      {
        "frame": 87,
        "time": 2.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0192,
          0.026,
          -0.0169,
          0.9993
        ]
      },
      {
        "frame": 88,
        "time": 2.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0189,
          0.0244,
          -0.0147,
          0.9994
        ]
      },
      {
        "frame": 89,
        "time": 2.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0184,
          0.0225,
          -0.0128,
          0.9995
        ]
      },
      {
        "frame": 90,
        "time": 3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0177,
          0.0202,
          -0.0114,
          0.9996
        ]
      },
      {
        "frame": 91,
        "time": 3.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0168,
          0.0178,
          -0.0104,
          0.9996
        ]
      },
      {
        "frame": 92,
        "time": 3.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0156,
          0.0153,
          -0.0097,
          0.9997
        ]
      },
      {
        "frame": 93,
        "time": 3.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0144,
          0.013,
          -0.0093,
          0.9998
        ]
      },
      {
        "frame": 94,
        "time": 3.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.013,
          0.0107,
          -0.0091,
          0.9998
        ]
      },
      {
        "frame": 95,
        "time": 3.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0115,
          0.0088,
          -0.009,
          0.9999
        ]
      },
      {
        "frame": 96,
        "time": 3.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0099,
          0.0071,
          -0.0088,
          0.9999
        ]
      },
      {
        "frame": 97,
        "time": 3.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0084,
          0.0056,
          -0.0084,
          0.9999
        ]
      },
      {
        "frame": 98,
        "time": 3.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0069,
          0.0044,
          -0.0077,
          0.9999
        ]
      },
      {
        "frame": 99,
        "time": 3.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0055,
          0.0035,
          -0.0069,
          1
        ]
      },
      {
        "frame": 100,
        "time": 3.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0042,
          0.0027,
          -0.0058,
          1
        ]
      },
      {
        "frame": 101,
        "time": 3.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.003,
          0.002,
          -0.0046,
          1
        ]
      },
      {
        "frame": 102,
        "time": 3.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0021,
          0.0014,
          -0.0033,
          1
        ]
      },
      {
        "frame": 103,
        "time": 3.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0013,
          0.001,
          -0.0022,
          1
        ]
      },
      {
        "frame": 104,
        "time": 3.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0007,
          0.0006,
          -0.0013,
          1
        ]
      },
      {
        "frame": 105,
        "time": 3.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0003,
          0.0003,
          -0.0006,
          1
        ]
      },
      {
        "frame": 106,
        "time": 3.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0001,
          0.0001,
          -0.0002,
          1
        ]
      },
      {
        "frame": 107,
        "time": 3.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      },
      {
        "frame": 108,
        "time": 3.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      }
    ],
    "上半身2": [
      {
        "frame": 0,
        "time": 0,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      },
      {
        "frame": 1,
        "time": 0.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      },
      {
        "frame": 2,
        "time": 0.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0001,
          0.0001,
          0,
          1
        ]
      },
      {
        "frame": 3,
        "time": 0.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0002,
          0.0002,
          0,
          1
        ]
      },
      {
        "frame": 4,
        "time": 0.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0005,
          0.0004,
          -0.0001,
          1
        ]
      },
      {
        "frame": 5,
        "time": 0.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.001,
          0.0006,
          -0.0003,
          1
        ]
      },
      {
        "frame": 6,
        "time": 0.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0016,
          0.001,
          -0.0006,
          1
        ]
      },
      {
        "frame": 7,
        "time": 0.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0023,
          0.0015,
          -0.0011,
          1
        ]
      },
      {
        "frame": 8,
        "time": 0.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0031,
          0.0021,
          -0.0018,
          1
        ]
      },
      {
        "frame": 9,
        "time": 0.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0041,
          0.0028,
          -0.0027,
          1
        ]
      },
      {
        "frame": 10,
        "time": 0.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0052,
          0.0035,
          -0.004,
          1
        ]
      },
      {
        "frame": 11,
        "time": 0.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0063,
          0.0043,
          -0.0055,
          1
        ]
      },
      {
        "frame": 12,
        "time": 0.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0075,
          0.0051,
          -0.0072,
          0.9999
        ]
      },
      {
        "frame": 13,
        "time": 0.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0086,
          0.0059,
          -0.0089,
          0.9999
        ]
      },
      {
        "frame": 14,
        "time": 0.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0097,
          0.0066,
          -0.0107,
          0.9999
        ]
      },
      {
        "frame": 15,
        "time": 0.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0108,
          0.0074,
          -0.0123,
          0.9998
        ]
      },
      {
        "frame": 16,
        "time": 0.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0117,
          0.0081,
          -0.0137,
          0.9998
        ]
      },
      {
        "frame": 17,
        "time": 0.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0126,
          0.0087,
          -0.0147,
          0.9998
        ]
      },
      {
        "frame": 18,
        "time": 0.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0133,
          0.0092,
          -0.0152,
          0.9998
        ]
      },
      {
        "frame": 19,
        "time": 0.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0139,
          0.0096,
          -0.0153,
          0.9997
        ]
      },
      {
        "frame": 20,
        "time": 0.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0143,
          0.0099,
          -0.0149,
          0.9997
        ]
      },
      {
        "frame": 21,
        "time": 0.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0146,
          0.01,
          -0.014,
          0.9997
        ]
      },
      {
        "frame": 22,
        "time": 0.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0148,
          0.0101,
          -0.0128,
          0.9998
        ]
      },
      {
        "frame": 23,
        "time": 0.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0149,
          0.0102,
          -0.0114,
          0.9998
        ]
      },
      {
        "frame": 24,
        "time": 0.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0149,
          0.0101,
          -0.0098,
          0.9998
        ]
      },
      {
        "frame": 25,
        "time": 0.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0149,
          0.0101,
          -0.0083,
          0.9998
        ]
      },
      {
        "frame": 26,
        "time": 0.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0149,
          0.0101,
          -0.0068,
          0.9998
        ]
      },
      {
        "frame": 27,
        "time": 0.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0149,
          0.0101,
          -0.0054,
          0.9998
        ]
      },
      {
        "frame": 28,
        "time": 0.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.015,
          0.0101,
          -0.0043,
          0.9998
        ]
      },
      {
        "frame": 29,
        "time": 0.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.015,
          0.0101,
          -0.0034,
          0.9998
        ]
      },
      {
        "frame": 30,
        "time": 1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.015,
          0.01,
          -0.0027,
          0.9998
        ]
      },
      {
        "frame": 31,
        "time": 1.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.015,
          0.01,
          -0.0024,
          0.9998
        ]
      },
      {
        "frame": 32,
        "time": 1.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.015,
          0.01,
          -0.0024,
          0.9998
        ]
      },
      {
        "frame": 33,
        "time": 1.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.015,
          0.01,
          -0.0027,
          0.9998
        ]
      },
      {
        "frame": 34,
        "time": 1.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.015,
          0.0101,
          -0.0034,
          0.9998
        ]
      },
      {
        "frame": 35,
        "time": 1.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.015,
          0.0101,
          -0.0043,
          0.9998
        ]
      },
      {
        "frame": 36,
        "time": 1.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0149,
          0.0101,
          -0.0054,
          0.9998
        ]
      },
      {
        "frame": 37,
        "time": 1.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0149,
          0.0101,
          -0.0068,
          0.9998
        ]
      },
      {
        "frame": 38,
        "time": 1.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0149,
          0.0101,
          -0.0083,
          0.9998
        ]
      },
      {
        "frame": 39,
        "time": 1.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0149,
          0.0101,
          -0.0098,
          0.9998
        ]
      },
      {
        "frame": 40,
        "time": 1.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0149,
          0.0102,
          -0.0114,
          0.9998
        ]
      },
      {
        "frame": 41,
        "time": 1.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0149,
          0.0102,
          -0.0129,
          0.9998
        ]
      },
      {
        "frame": 42,
        "time": 1.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0149,
          0.0102,
          -0.0143,
          0.9997
        ]
      },
      {
        "frame": 43,
        "time": 1.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0148,
          0.0102,
          -0.0154,
          0.9997
        ]
      },
      {
        "frame": 44,
        "time": 1.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0148,
          0.0102,
          -0.0163,
          0.9997
        ]
      },
      {
        "frame": 45,
        "time": 1.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0148,
          0.0103,
          -0.017,
          0.9997
        ]
      },
      {
        "frame": 46,
        "time": 1.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0148,
          0.0103,
          -0.0173,
          0.9997
        ]
      },
      {
        "frame": 47,
        "time": 1.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0148,
          0.0103,
          -0.0173,
          0.9997
        ]
      },
      {
        "frame": 48,
        "time": 1.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0148,
          0.0103,
          -0.017,
          0.9997
        ]
      },
      {
        "frame": 49,
        "time": 1.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0148,
          0.0102,
          -0.0163,
          0.9997
        ]
      },
      {
        "frame": 50,
        "time": 1.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0148,
          0.0102,
          -0.0154,
          0.9997
        ]
      },
      {
        "frame": 51,
        "time": 1.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0149,
          0.0102,
          -0.0143,
          0.9997
        ]
      },
      {
        "frame": 52,
        "time": 1.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0149,
          0.0102,
          -0.0129,
          0.9998
        ]
      },
      {
        "frame": 53,
        "time": 1.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0149,
          0.0102,
          -0.0114,
          0.9998
        ]
      },
      {
        "frame": 54,
        "time": 1.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0149,
          0.0101,
          -0.0098,
          0.9998
        ]
      },
      {
        "frame": 55,
        "time": 1.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0149,
          0.0101,
          -0.0083,
          0.9998
        ]
      },
      {
        "frame": 56,
        "time": 1.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0149,
          0.0101,
          -0.0068,
          0.9998
        ]
      },
      {
        "frame": 57,
        "time": 1.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0149,
          0.0101,
          -0.0054,
          0.9998
        ]
      },
      {
        "frame": 58,
        "time": 1.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.015,
          0.0101,
          -0.0043,
          0.9998
        ]
      },
      {
        "frame": 59,
        "time": 1.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.015,
          0.0101,
          -0.0034,
          0.9998
        ]
      },
      {
        "frame": 60,
        "time": 2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.015,
          0.01,
          -0.0027,
          0.9998
        ]
      },
      {
        "frame": 61,
        "time": 2.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.015,
          0.01,
          -0.0024,
          0.9998
        ]
      },
      {
        "frame": 62,
        "time": 2.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.015,
          0.01,
          -0.0024,
          0.9998
        ]
      },
      {
        "frame": 63,
        "time": 2.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.015,
          0.01,
          -0.0027,
          0.9998
        ]
      },
      {
        "frame": 64,
        "time": 2.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.015,
          0.0101,
          -0.0034,
          0.9998
        ]
      },
      {
        "frame": 65,
        "time": 2.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.015,
          0.0101,
          -0.0043,
          0.9998
        ]
      },
      {
        "frame": 66,
        "time": 2.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0149,
          0.0101,
          -0.0054,
          0.9998
        ]
      },
      {
        "frame": 67,
        "time": 2.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0149,
          0.0101,
          -0.0068,
          0.9998
        ]
      },
      {
        "frame": 68,
        "time": 2.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0149,
          0.0101,
          -0.0083,
          0.9998
        ]
      },
      {
        "frame": 69,
        "time": 2.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0149,
          0.0101,
          -0.0098,
          0.9998
        ]
      },
      {
        "frame": 70,
        "time": 2.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0149,
          0.0102,
          -0.0114,
          0.9998
        ]
      },
      {
        "frame": 71,
        "time": 2.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0149,
          0.0102,
          -0.0129,
          0.9998
        ]
      },
      {
        "frame": 72,
        "time": 2.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0149,
          0.0102,
          -0.0143,
          0.9997
        ]
      },
      {
        "frame": 73,
        "time": 2.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0148,
          0.0102,
          -0.0154,
          0.9997
        ]
      },
      {
        "frame": 74,
        "time": 2.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0148,
          0.0102,
          -0.0163,
          0.9997
        ]
      },
      {
        "frame": 75,
        "time": 2.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0148,
          0.0103,
          -0.017,
          0.9997
        ]
      },
      {
        "frame": 76,
        "time": 2.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0148,
          0.0103,
          -0.0173,
          0.9997
        ]
      },
      {
        "frame": 77,
        "time": 2.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0148,
          0.0103,
          -0.0173,
          0.9997
        ]
      },
      {
        "frame": 78,
        "time": 2.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0148,
          0.0103,
          -0.017,
          0.9997
        ]
      },
      {
        "frame": 79,
        "time": 2.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0148,
          0.0102,
          -0.0163,
          0.9997
        ]
      },
      {
        "frame": 80,
        "time": 2.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0148,
          0.0102,
          -0.0154,
          0.9997
        ]
      },
      {
        "frame": 81,
        "time": 2.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0149,
          0.0102,
          -0.0143,
          0.9997
        ]
      },
      {
        "frame": 82,
        "time": 2.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0149,
          0.0102,
          -0.0129,
          0.9998
        ]
      },
      {
        "frame": 83,
        "time": 2.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0149,
          0.0102,
          -0.0114,
          0.9998
        ]
      },
      {
        "frame": 84,
        "time": 2.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0149,
          0.0101,
          -0.0098,
          0.9998
        ]
      },
      {
        "frame": 85,
        "time": 2.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0149,
          0.0101,
          -0.0083,
          0.9998
        ]
      },
      {
        "frame": 86,
        "time": 2.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0149,
          0.0101,
          -0.0068,
          0.9998
        ]
      },
      {
        "frame": 87,
        "time": 2.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0147,
          0.0099,
          -0.0054,
          0.9998
        ]
      },
      {
        "frame": 88,
        "time": 2.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0144,
          0.0097,
          -0.0041,
          0.9998
        ]
      },
      {
        "frame": 89,
        "time": 2.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.014,
          0.0094,
          -0.0031,
          0.9999
        ]
      },
      {
        "frame": 90,
        "time": 3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0134,
          0.009,
          -0.0024,
          0.9999
        ]
      },
      {
        "frame": 91,
        "time": 3.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0127,
          0.0085,
          -0.002,
          0.9999
        ]
      },
      {
        "frame": 92,
        "time": 3.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0118,
          0.0079,
          -0.0019,
          0.9999
        ]
      },
      {
        "frame": 93,
        "time": 3.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0109,
          0.0073,
          -0.002,
          0.9999
        ]
      },
      {
        "frame": 94,
        "time": 3.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0098,
          0.0066,
          -0.0022,
          0.9999
        ]
      },
      {
        "frame": 95,
        "time": 3.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0087,
          0.0058,
          -0.0025,
          0.9999
        ]
      },
      {
        "frame": 96,
        "time": 3.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0075,
          0.005,
          -0.0028,
          1
        ]
      },
      {
        "frame": 97,
        "time": 3.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0063,
          0.0042,
          -0.0029,
          1
        ]
      },
      {
        "frame": 98,
        "time": 3.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0052,
          0.0035,
          -0.0029,
          1
        ]
      },
      {
        "frame": 99,
        "time": 3.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0041,
          0.0028,
          -0.0027,
          1
        ]
      },
      {
        "frame": 100,
        "time": 3.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0031,
          0.0021,
          -0.0024,
          1
        ]
      },
      {
        "frame": 101,
        "time": 3.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0023,
          0.0015,
          -0.002,
          1
        ]
      },
      {
        "frame": 102,
        "time": 3.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0016,
          0.001,
          -0.0015,
          1
        ]
      },
      {
        "frame": 103,
        "time": 3.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.001,
          0.0006,
          -0.001,
          1
        ]
      },
      {
        "frame": 104,
        "time": 3.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0005,
          0.0004,
          -0.0006,
          1
        ]
      },
      {
        "frame": 105,
        "time": 3.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0002,
          0.0002,
          -0.0003,
          1
        ]
      },
      {
        "frame": 106,
        "time": 3.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0001,
          0.0001,
          -0.0001,
          1
        ]
      },
      {
        "frame": 107,
        "time": 3.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      },
      {
        "frame": 108,
        "time": 3.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      }
    ],
    "首": [
      {
        "frame": 0,
        "time": 0,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      },
      {
        "frame": 1,
        "time": 0.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      },
      {
        "frame": 2,
        "time": 0.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0001,
          -0.0001,
          0.0001,
          1
        ]
      },
      {
        "frame": 3,
        "time": 0.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0002,
          -0.0002,
          0.0004,
          1
        ]
      },
      {
        "frame": 4,
        "time": 0.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0004,
          -0.0004,
          0.0009,
          1
        ]
      },
      {
        "frame": 5,
        "time": 0.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0006,
          -0.0008,
          0.0016,
          1
        ]
      },
      {
        "frame": 6,
        "time": 0.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.001,
          -0.0013,
          0.0026,
          1
        ]
      },
      {
        "frame": 7,
        "time": 0.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0015,
          -0.0019,
          0.0038,
          1
        ]
      },
      {
        "frame": 8,
        "time": 0.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0021,
          -0.0026,
          0.0053,
          1
        ]
      },
      {
        "frame": 9,
        "time": 0.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0028,
          -0.0034,
          0.0069,
          1
        ]
      },
      {
        "frame": 10,
        "time": 0.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0035,
          -0.0043,
          0.0087,
          0.9999
        ]
      },
      {
        "frame": 11,
        "time": 0.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0043,
          -0.0052,
          0.0106,
          0.9999
        ]
      },
      {
        "frame": 12,
        "time": 0.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0051,
          -0.0062,
          0.0125,
          0.9999
        ]
      },
      {
        "frame": 13,
        "time": 0.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0059,
          -0.0071,
          0.0145,
          0.9999
        ]
      },
      {
        "frame": 14,
        "time": 0.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0067,
          -0.0081,
          0.0164,
          0.9998
        ]
      },
      {
        "frame": 15,
        "time": 0.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0074,
          -0.0089,
          0.0182,
          0.9998
        ]
      },
      {
        "frame": 16,
        "time": 0.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0081,
          -0.0097,
          0.0198,
          0.9997
        ]
      },
      {
        "frame": 17,
        "time": 0.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0087,
          -0.0104,
          0.0213,
          0.9997
        ]
      },
      {
        "frame": 18,
        "time": 0.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0092,
          -0.011,
          0.0225,
          0.9996
        ]
      },
      {
        "frame": 19,
        "time": 0.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0096,
          -0.0115,
          0.0235,
          0.9996
        ]
      },
      {
        "frame": 20,
        "time": 0.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0099,
          -0.0118,
          0.0242,
          0.9996
        ]
      },
      {
        "frame": 21,
        "time": 0.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0101,
          -0.0121,
          0.0247,
          0.9996
        ]
      },
      {
        "frame": 22,
        "time": 0.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0103,
          -0.0122,
          0.025,
          0.9996
        ]
      },
      {
        "frame": 23,
        "time": 0.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0103,
          -0.0122,
          0.0251,
          0.9996
        ]
      },
      {
        "frame": 24,
        "time": 0.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0103,
          -0.0122,
          0.0251,
          0.9996
        ]
      },
      {
        "frame": 25,
        "time": 0.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0103,
          -0.0122,
          0.0251,
          0.9996
        ]
      },
      {
        "frame": 26,
        "time": 0.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0103,
          -0.0122,
          0.0251,
          0.9996
        ]
      },
      {
        "frame": 27,
        "time": 0.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0103,
          -0.0122,
          0.0251,
          0.9996
        ]
      },
      {
        "frame": 28,
        "time": 0.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0103,
          -0.0122,
          0.0251,
          0.9996
        ]
      },
      {
        "frame": 29,
        "time": 0.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0103,
          -0.0122,
          0.0251,
          0.9996
        ]
      },
      {
        "frame": 30,
        "time": 1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0103,
          -0.0122,
          0.0251,
          0.9996
        ]
      },
      {
        "frame": 31,
        "time": 1.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0103,
          -0.0122,
          0.0251,
          0.9996
        ]
      },
      {
        "frame": 32,
        "time": 1.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0103,
          -0.0122,
          0.0251,
          0.9996
        ]
      },
      {
        "frame": 33,
        "time": 1.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0103,
          -0.0122,
          0.0251,
          0.9996
        ]
      },
      {
        "frame": 34,
        "time": 1.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0103,
          -0.0122,
          0.0251,
          0.9996
        ]
      },
      {
        "frame": 35,
        "time": 1.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0103,
          -0.0122,
          0.0251,
          0.9996
        ]
      },
      {
        "frame": 36,
        "time": 1.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0103,
          -0.0122,
          0.0251,
          0.9996
        ]
      },
      {
        "frame": 37,
        "time": 1.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0103,
          -0.0122,
          0.0251,
          0.9996
        ]
      },
      {
        "frame": 38,
        "time": 1.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0103,
          -0.0122,
          0.0251,
          0.9996
        ]
      },
      {
        "frame": 39,
        "time": 1.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0103,
          -0.0122,
          0.0251,
          0.9996
        ]
      },
      {
        "frame": 40,
        "time": 1.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0103,
          -0.0122,
          0.0251,
          0.9996
        ]
      },
      {
        "frame": 41,
        "time": 1.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0103,
          -0.0122,
          0.0251,
          0.9996
        ]
      },
      {
        "frame": 42,
        "time": 1.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0103,
          -0.0122,
          0.0251,
          0.9996
        ]
      },
      {
        "frame": 43,
        "time": 1.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0103,
          -0.0122,
          0.0251,
          0.9996
        ]
      },
      {
        "frame": 44,
        "time": 1.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0103,
          -0.0122,
          0.0251,
          0.9996
        ]
      },
      {
        "frame": 45,
        "time": 1.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0103,
          -0.0122,
          0.0251,
          0.9996
        ]
      },
      {
        "frame": 46,
        "time": 1.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0103,
          -0.0122,
          0.0251,
          0.9996
        ]
      },
      {
        "frame": 47,
        "time": 1.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0103,
          -0.0122,
          0.0251,
          0.9996
        ]
      },
      {
        "frame": 48,
        "time": 1.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0103,
          -0.0122,
          0.0251,
          0.9996
        ]
      },
      {
        "frame": 49,
        "time": 1.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0103,
          -0.0122,
          0.0251,
          0.9996
        ]
      },
      {
        "frame": 50,
        "time": 1.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0103,
          -0.0122,
          0.0251,
          0.9996
        ]
      },
      {
        "frame": 51,
        "time": 1.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0103,
          -0.0122,
          0.0251,
          0.9996
        ]
      },
      {
        "frame": 52,
        "time": 1.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0103,
          -0.0122,
          0.0251,
          0.9996
        ]
      },
      {
        "frame": 53,
        "time": 1.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0103,
          -0.0122,
          0.0251,
          0.9996
        ]
      },
      {
        "frame": 54,
        "time": 1.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0103,
          -0.0122,
          0.0251,
          0.9996
        ]
      },
      {
        "frame": 55,
        "time": 1.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0103,
          -0.0122,
          0.0251,
          0.9996
        ]
      },
      {
        "frame": 56,
        "time": 1.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0103,
          -0.0122,
          0.0251,
          0.9996
        ]
      },
      {
        "frame": 57,
        "time": 1.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0103,
          -0.0122,
          0.0251,
          0.9996
        ]
      },
      {
        "frame": 58,
        "time": 1.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0103,
          -0.0122,
          0.0251,
          0.9996
        ]
      },
      {
        "frame": 59,
        "time": 1.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0103,
          -0.0122,
          0.0251,
          0.9996
        ]
      },
      {
        "frame": 60,
        "time": 2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0103,
          -0.0122,
          0.0251,
          0.9996
        ]
      },
      {
        "frame": 61,
        "time": 2.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0103,
          -0.0122,
          0.0251,
          0.9996
        ]
      },
      {
        "frame": 62,
        "time": 2.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0103,
          -0.0122,
          0.0251,
          0.9996
        ]
      },
      {
        "frame": 63,
        "time": 2.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0103,
          -0.0122,
          0.0251,
          0.9996
        ]
      },
      {
        "frame": 64,
        "time": 2.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0103,
          -0.0122,
          0.0251,
          0.9996
        ]
      },
      {
        "frame": 65,
        "time": 2.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0103,
          -0.0122,
          0.0251,
          0.9996
        ]
      },
      {
        "frame": 66,
        "time": 2.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0103,
          -0.0122,
          0.0251,
          0.9996
        ]
      },
      {
        "frame": 67,
        "time": 2.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0103,
          -0.0122,
          0.0251,
          0.9996
        ]
      },
      {
        "frame": 68,
        "time": 2.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0103,
          -0.0122,
          0.0251,
          0.9996
        ]
      },
      {
        "frame": 69,
        "time": 2.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0103,
          -0.0122,
          0.0251,
          0.9996
        ]
      },
      {
        "frame": 70,
        "time": 2.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0103,
          -0.0122,
          0.0251,
          0.9996
        ]
      },
      {
        "frame": 71,
        "time": 2.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0103,
          -0.0122,
          0.0251,
          0.9996
        ]
      },
      {
        "frame": 72,
        "time": 2.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0103,
          -0.0122,
          0.0251,
          0.9996
        ]
      },
      {
        "frame": 73,
        "time": 2.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0103,
          -0.0122,
          0.0251,
          0.9996
        ]
      },
      {
        "frame": 74,
        "time": 2.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0103,
          -0.0122,
          0.0251,
          0.9996
        ]
      },
      {
        "frame": 75,
        "time": 2.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0103,
          -0.0122,
          0.0251,
          0.9996
        ]
      },
      {
        "frame": 76,
        "time": 2.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0103,
          -0.0122,
          0.0251,
          0.9996
        ]
      },
      {
        "frame": 77,
        "time": 2.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0103,
          -0.0122,
          0.0251,
          0.9996
        ]
      },
      {
        "frame": 78,
        "time": 2.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0103,
          -0.0122,
          0.0251,
          0.9996
        ]
      },
      {
        "frame": 79,
        "time": 2.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0103,
          -0.0122,
          0.0251,
          0.9996
        ]
      },
      {
        "frame": 80,
        "time": 2.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0103,
          -0.0122,
          0.0251,
          0.9996
        ]
      },
      {
        "frame": 81,
        "time": 2.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0103,
          -0.0122,
          0.0251,
          0.9996
        ]
      },
      {
        "frame": 82,
        "time": 2.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0103,
          -0.0122,
          0.0251,
          0.9996
        ]
      },
      {
        "frame": 83,
        "time": 2.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0103,
          -0.0122,
          0.0251,
          0.9996
        ]
      },
      {
        "frame": 84,
        "time": 2.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0103,
          -0.0122,
          0.0251,
          0.9996
        ]
      },
      {
        "frame": 85,
        "time": 2.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0103,
          -0.0122,
          0.0251,
          0.9996
        ]
      },
      {
        "frame": 86,
        "time": 2.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0103,
          -0.0122,
          0.025,
          0.9996
        ]
      },
      {
        "frame": 87,
        "time": 2.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0101,
          -0.0121,
          0.0247,
          0.9996
        ]
      },
      {
        "frame": 88,
        "time": 2.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0099,
          -0.0118,
          0.0242,
          0.9996
        ]
      },
      {
        "frame": 89,
        "time": 2.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0096,
          -0.0115,
          0.0235,
          0.9996
        ]
      },
      {
        "frame": 90,
        "time": 3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0092,
          -0.011,
          0.0225,
          0.9996
        ]
      },
      {
        "frame": 91,
        "time": 3.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0087,
          -0.0104,
          0.0213,
          0.9997
        ]
      },
      {
        "frame": 92,
        "time": 3.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0081,
          -0.0097,
          0.0198,
          0.9997
        ]
      },
      {
        "frame": 93,
        "time": 3.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0074,
          -0.0089,
          0.0182,
          0.9998
        ]
      },
      {
        "frame": 94,
        "time": 3.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0067,
          -0.0081,
          0.0164,
          0.9998
        ]
      },
      {
        "frame": 95,
        "time": 3.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0059,
          -0.0071,
          0.0145,
          0.9999
        ]
      },
      {
        "frame": 96,
        "time": 3.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0051,
          -0.0062,
          0.0125,
          0.9999
        ]
      },
      {
        "frame": 97,
        "time": 3.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0043,
          -0.0052,
          0.0106,
          0.9999
        ]
      },
      {
        "frame": 98,
        "time": 3.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0035,
          -0.0043,
          0.0087,
          0.9999
        ]
      },
      {
        "frame": 99,
        "time": 3.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0028,
          -0.0034,
          0.0069,
          1
        ]
      },
      {
        "frame": 100,
        "time": 3.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0021,
          -0.0026,
          0.0053,
          1
        ]
      },
      {
        "frame": 101,
        "time": 3.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0015,
          -0.0019,
          0.0038,
          1
        ]
      },
      {
        "frame": 102,
        "time": 3.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.001,
          -0.0013,
          0.0026,
          1
        ]
      },
      {
        "frame": 103,
        "time": 3.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0006,
          -0.0008,
          0.0016,
          1
        ]
      },
      {
        "frame": 104,
        "time": 3.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0004,
          -0.0004,
          0.0009,
          1
        ]
      },
      {
        "frame": 105,
        "time": 3.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0002,
          -0.0002,
          0.0004,
          1
        ]
      },
      {
        "frame": 106,
        "time": 3.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0001,
          -0.0001,
          0.0001,
          1
        ]
      },
      {
        "frame": 107,
        "time": 3.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      },
      {
        "frame": 108,
        "time": 3.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      }
    ],
    "頭": [
      {
        "frame": 0,
        "time": 0,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      },
      {
        "frame": 1,
        "time": 0.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      },
      {
        "frame": 2,
        "time": 0.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          -0.0001,
          0.0002,
          1
        ]
      },
      {
        "frame": 3,
        "time": 0.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          -0.0002,
          0.0007,
          1
        ]
      },
      {
        "frame": 4,
        "time": 0.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0001,
          -0.0004,
          0.0016,
          1
        ]
      },
      {
        "frame": 5,
        "time": 0.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0002,
          -0.0006,
          0.0029,
          1
        ]
      },
      {
        "frame": 6,
        "time": 0.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0002,
          -0.001,
          0.0047,
          1
        ]
      },
      {
        "frame": 7,
        "time": 0.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0002,
          -0.0015,
          0.0069,
          1
        ]
      },
      {
        "frame": 8,
        "time": 0.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0001,
          -0.0021,
          0.0094,
          1
        ]
      },
      {
        "frame": 9,
        "time": 0.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0008,
          -0.0027,
          0.0124,
          0.9999
        ]
      },
      {
        "frame": 10,
        "time": 0.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0019,
          -0.0034,
          0.0156,
          0.9999
        ]
      },
      {
        "frame": 11,
        "time": 0.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0038,
          -0.0042,
          0.019,
          0.9998
        ]
      },
      {
        "frame": 12,
        "time": 0.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0062,
          -0.0049,
          0.0225,
          0.9997
        ]
      },
      {
        "frame": 13,
        "time": 0.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0093,
          -0.0055,
          0.026,
          0.9996
        ]
      },
      {
        "frame": 14,
        "time": 0.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0129,
          -0.0062,
          0.0295,
          0.9995
        ]
      },
      {
        "frame": 15,
        "time": 0.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0169,
          -0.0067,
          0.0327,
          0.9993
        ]
      },
      {
        "frame": 16,
        "time": 0.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0208,
          -0.0072,
          0.0357,
          0.9991
        ]
      },
      {
        "frame": 17,
        "time": 0.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0245,
          -0.0075,
          0.0383,
          0.9989
        ]
      },
      {
        "frame": 18,
        "time": 0.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0278,
          -0.0078,
          0.0406,
          0.9988
        ]
      },
      {
        "frame": 19,
        "time": 0.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0302,
          -0.0081,
          0.0423,
          0.9986
        ]
      },
      {
        "frame": 20,
        "time": 0.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0317,
          -0.0083,
          0.0437,
          0.9985
        ]
      },
      {
        "frame": 21,
        "time": 0.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0322,
          -0.0084,
          0.0446,
          0.9985
        ]
      },
      {
        "frame": 22,
        "time": 0.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0316,
          -0.0085,
          0.045,
          0.9984
        ]
      },
      {
        "frame": 23,
        "time": 0.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0301,
          -0.0086,
          0.0452,
          0.9985
        ]
      },
      {
        "frame": 24,
        "time": 0.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0278,
          -0.0088,
          0.0452,
          0.9986
        ]
      },
      {
        "frame": 25,
        "time": 0.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.025,
          -0.0089,
          0.0452,
          0.9986
        ]
      },
      {
        "frame": 26,
        "time": 0.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0217,
          -0.009,
          0.0452,
          0.9987
        ]
      },
      {
        "frame": 27,
        "time": 0.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0182,
          -0.0092,
          0.0452,
          0.9988
        ]
      },
      {
        "frame": 28,
        "time": 0.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0145,
          -0.0094,
          0.0451,
          0.9988
        ]
      },
      {
        "frame": 29,
        "time": 0.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0109,
          -0.0095,
          0.0451,
          0.9989
        ]
      },
      {
        "frame": 30,
        "time": 1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0075,
          -0.0097,
          0.0451,
          0.9989
        ]
      },
      {
        "frame": 31,
        "time": 1.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0044,
          -0.0098,
          0.045,
          0.9989
        ]
      },
      {
        "frame": 32,
        "time": 1.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0018,
          -0.0099,
          0.045,
          0.9989
        ]
      },
      {
        "frame": 33,
        "time": 1.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0001,
          -0.01,
          0.045,
          0.9989
        ]
      },
      {
        "frame": 34,
        "time": 1.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0015,
          -0.0101,
          0.045,
          0.9989
        ]
      },
      {
        "frame": 35,
        "time": 1.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.002,
          -0.0101,
          0.045,
          0.9989
        ]
      },
      {
        "frame": 36,
        "time": 1.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0018,
          -0.0101,
          0.045,
          0.9989
        ]
      },
      {
        "frame": 37,
        "time": 1.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0009,
          -0.01,
          0.045,
          0.9989
        ]
      },
      {
        "frame": 38,
        "time": 1.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0008,
          -0.01,
          0.045,
          0.9989
        ]
      },
      {
        "frame": 39,
        "time": 1.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0031,
          -0.0099,
          0.045,
          0.9989
        ]
      },
      {
        "frame": 40,
        "time": 1.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0059,
          -0.0097,
          0.045,
          0.9989
        ]
      },
      {
        "frame": 41,
        "time": 1.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0092,
          -0.0096,
          0.0451,
          0.9989
        ]
      },
      {
        "frame": 42,
        "time": 1.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0127,
          -0.0094,
          0.0451,
          0.9989
        ]
      },
      {
        "frame": 43,
        "time": 1.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0163,
          -0.0093,
          0.0451,
          0.9988
        ]
      },
      {
        "frame": 44,
        "time": 1.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.02,
          -0.0091,
          0.0452,
          0.9987
        ]
      },
      {
        "frame": 45,
        "time": 1.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0234,
          -0.009,
          0.0452,
          0.9987
        ]
      },
      {
        "frame": 46,
        "time": 1.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0264,
          -0.0088,
          0.0452,
          0.9986
        ]
      },
      {
        "frame": 47,
        "time": 1.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.029,
          -0.0087,
          0.0452,
          0.9985
        ]
      },
      {
        "frame": 48,
        "time": 1.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.031,
          -0.0086,
          0.0453,
          0.9985
        ]
      },
      {
        "frame": 49,
        "time": 1.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0323,
          -0.0085,
          0.0453,
          0.9984
        ]
      },
      {
        "frame": 50,
        "time": 1.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0329,
          -0.0085,
          0.0453,
          0.9984
        ]
      },
      {
        "frame": 51,
        "time": 1.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0327,
          -0.0085,
          0.0453,
          0.9984
        ]
      },
      {
        "frame": 52,
        "time": 1.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0317,
          -0.0086,
          0.0453,
          0.9984
        ]
      },
      {
        "frame": 53,
        "time": 1.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0301,
          -0.0087,
          0.0453,
          0.9985
        ]
      },
      {
        "frame": 54,
        "time": 1.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0278,
          -0.0088,
          0.0452,
          0.9986
        ]
      },
      {
        "frame": 55,
        "time": 1.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.025,
          -0.0089,
          0.0452,
          0.9986
        ]
      },
      {
        "frame": 56,
        "time": 1.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0217,
          -0.009,
          0.0452,
          0.9987
        ]
      },
      {
        "frame": 57,
        "time": 1.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0182,
          -0.0092,
          0.0452,
          0.9988
        ]
      },
      {
        "frame": 58,
        "time": 1.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0145,
          -0.0094,
          0.0451,
          0.9988
        ]
      },
      {
        "frame": 59,
        "time": 1.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0109,
          -0.0095,
          0.0451,
          0.9989
        ]
      },
      {
        "frame": 60,
        "time": 2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0075,
          -0.0097,
          0.0451,
          0.9989
        ]
      },
      {
        "frame": 61,
        "time": 2.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0044,
          -0.0098,
          0.045,
          0.9989
        ]
      },
      {
        "frame": 62,
        "time": 2.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0018,
          -0.0099,
          0.045,
          0.9989
        ]
      },
      {
        "frame": 63,
        "time": 2.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0001,
          -0.01,
          0.045,
          0.9989
        ]
      },
      {
        "frame": 64,
        "time": 2.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0015,
          -0.0101,
          0.045,
          0.9989
        ]
      },
      {
        "frame": 65,
        "time": 2.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.002,
          -0.0101,
          0.045,
          0.9989
        ]
      },
      {
        "frame": 66,
        "time": 2.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0018,
          -0.0101,
          0.045,
          0.9989
        ]
      },
      {
        "frame": 67,
        "time": 2.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0009,
          -0.01,
          0.045,
          0.9989
        ]
      },
      {
        "frame": 68,
        "time": 2.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0008,
          -0.01,
          0.045,
          0.9989
        ]
      },
      {
        "frame": 69,
        "time": 2.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0031,
          -0.0099,
          0.045,
          0.9989
        ]
      },
      {
        "frame": 70,
        "time": 2.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0059,
          -0.0097,
          0.045,
          0.9989
        ]
      },
      {
        "frame": 71,
        "time": 2.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0092,
          -0.0096,
          0.0451,
          0.9989
        ]
      },
      {
        "frame": 72,
        "time": 2.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0127,
          -0.0094,
          0.0451,
          0.9989
        ]
      },
      {
        "frame": 73,
        "time": 2.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0163,
          -0.0093,
          0.0451,
          0.9988
        ]
      },
      {
        "frame": 74,
        "time": 2.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.02,
          -0.0091,
          0.0452,
          0.9987
        ]
      },
      {
        "frame": 75,
        "time": 2.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0234,
          -0.009,
          0.0452,
          0.9987
        ]
      },
      {
        "frame": 76,
        "time": 2.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0264,
          -0.0088,
          0.0452,
          0.9986
        ]
      },
      {
        "frame": 77,
        "time": 2.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.029,
          -0.0087,
          0.0452,
          0.9985
        ]
      },
      {
        "frame": 78,
        "time": 2.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.031,
          -0.0086,
          0.0453,
          0.9985
        ]
      },
      {
        "frame": 79,
        "time": 2.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0323,
          -0.0085,
          0.0453,
          0.9984
        ]
      },
      {
        "frame": 80,
        "time": 2.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0329,
          -0.0085,
          0.0453,
          0.9984
        ]
      },
      {
        "frame": 81,
        "time": 2.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0327,
          -0.0085,
          0.0453,
          0.9984
        ]
      },
      {
        "frame": 82,
        "time": 2.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0317,
          -0.0086,
          0.0453,
          0.9984
        ]
      },
      {
        "frame": 83,
        "time": 2.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0301,
          -0.0087,
          0.0453,
          0.9985
        ]
      },
      {
        "frame": 84,
        "time": 2.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0278,
          -0.0088,
          0.0452,
          0.9986
        ]
      },
      {
        "frame": 85,
        "time": 2.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0249,
          -0.0089,
          0.0452,
          0.9986
        ]
      },
      {
        "frame": 86,
        "time": 2.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0216,
          -0.009,
          0.045,
          0.9987
        ]
      },
      {
        "frame": 87,
        "time": 2.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0179,
          -0.0091,
          0.0444,
          0.9988
        ]
      },
      {
        "frame": 88,
        "time": 2.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.014,
          -0.009,
          0.0435,
          0.9989
        ]
      },
      {
        "frame": 89,
        "time": 2.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0102,
          -0.0089,
          0.0422,
          0.999
        ]
      },
      {
        "frame": 90,
        "time": 3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0067,
          -0.0087,
          0.0404,
          0.9991
        ]
      },
      {
        "frame": 91,
        "time": 3.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0037,
          -0.0083,
          0.0382,
          0.9992
        ]
      },
      {
        "frame": 92,
        "time": 3.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0014,
          -0.0079,
          0.0356,
          0.9993
        ]
      },
      {
        "frame": 93,
        "time": 3.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0002,
          -0.0073,
          0.0326,
          0.9994
        ]
      },
      {
        "frame": 94,
        "time": 3.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0011,
          -0.0066,
          0.0294,
          0.9995
        ]
      },
      {
        "frame": 95,
        "time": 3.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0013,
          -0.0058,
          0.026,
          0.9996
        ]
      },
      {
        "frame": 96,
        "time": 3.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.001,
          -0.005,
          0.0225,
          0.9997
        ]
      },
      {
        "frame": 97,
        "time": 3.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0005,
          -0.0042,
          0.019,
          0.9998
        ]
      },
      {
        "frame": 98,
        "time": 3.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0002,
          -0.0035,
          0.0156,
          0.9999
        ]
      },
      {
        "frame": 99,
        "time": 3.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0008,
          -0.0027,
          0.0124,
          0.9999
        ]
      },
      {
        "frame": 100,
        "time": 3.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0012,
          -0.0021,
          0.0094,
          1
        ]
      },
      {
        "frame": 101,
        "time": 3.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0013,
          -0.0015,
          0.0069,
          1
        ]
      },
      {
        "frame": 102,
        "time": 3.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0013,
          -0.001,
          0.0047,
          1
        ]
      },
      {
        "frame": 103,
        "time": 3.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.001,
          -0.0006,
          0.0029,
          1
        ]
      },
      {
        "frame": 104,
        "time": 3.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0007,
          -0.0004,
          0.0016,
          1
        ]
      },
      {
        "frame": 105,
        "time": 3.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0004,
          -0.0002,
          0.0007,
          1
        ]
      },
      {
        "frame": 106,
        "time": 3.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0001,
          -0.0001,
          0.0002,
          1
        ]
      },
      {
        "frame": 107,
        "time": 3.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      },
      {
        "frame": 108,
        "time": 3.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      }
    ],
    "左肩": [
      {
        "frame": 0,
        "time": 0,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      },
      {
        "frame": 1,
        "time": 0.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      },
      {
        "frame": 2,
        "time": 0.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0001,
          1
        ]
      },
      {
        "frame": 3,
        "time": 0.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0002,
          1
        ]
      },
      {
        "frame": 4,
        "time": 0.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0004,
          1
        ]
      },
      {
        "frame": 5,
        "time": 0.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0006,
          1
        ]
      },
      {
        "frame": 6,
        "time": 0.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.001,
          1
        ]
      },
      {
        "frame": 7,
        "time": 0.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0015,
          1
        ]
      },
      {
        "frame": 8,
        "time": 0.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0021,
          1
        ]
      },
      {
        "frame": 9,
        "time": 0.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0028,
          1
        ]
      },
      {
        "frame": 10,
        "time": 0.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0035,
          1
        ]
      },
      {
        "frame": 11,
        "time": 0.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0042,
          1
        ]
      },
      {
        "frame": 12,
        "time": 0.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.005,
          1
        ]
      },
      {
        "frame": 13,
        "time": 0.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0058,
          1
        ]
      },
      {
        "frame": 14,
        "time": 0.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0065,
          1
        ]
      },
      {
        "frame": 15,
        "time": 0.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0072,
          1
        ]
      },
      {
        "frame": 16,
        "time": 0.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0079,
          1
        ]
      },
      {
        "frame": 17,
        "time": 0.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0085,
          1
        ]
      },
      {
        "frame": 18,
        "time": 0.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.009,
          1
        ]
      },
      {
        "frame": 19,
        "time": 0.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0094,
          1
        ]
      },
      {
        "frame": 20,
        "time": 0.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0096,
          1
        ]
      },
      {
        "frame": 21,
        "time": 0.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0098,
          1
        ]
      },
      {
        "frame": 22,
        "time": 0.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0099,
          1
        ]
      },
      {
        "frame": 23,
        "time": 0.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 24,
        "time": 0.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 25,
        "time": 0.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 26,
        "time": 0.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 27,
        "time": 0.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 28,
        "time": 0.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 29,
        "time": 0.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 30,
        "time": 1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 31,
        "time": 1.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 32,
        "time": 1.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 33,
        "time": 1.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 34,
        "time": 1.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 35,
        "time": 1.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 36,
        "time": 1.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 37,
        "time": 1.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 38,
        "time": 1.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 39,
        "time": 1.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 40,
        "time": 1.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 41,
        "time": 1.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 42,
        "time": 1.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 43,
        "time": 1.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 44,
        "time": 1.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 45,
        "time": 1.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 46,
        "time": 1.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 47,
        "time": 1.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 48,
        "time": 1.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 49,
        "time": 1.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 50,
        "time": 1.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 51,
        "time": 1.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 52,
        "time": 1.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 53,
        "time": 1.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 54,
        "time": 1.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 55,
        "time": 1.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 56,
        "time": 1.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 57,
        "time": 1.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 58,
        "time": 1.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 59,
        "time": 1.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 60,
        "time": 2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 61,
        "time": 2.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 62,
        "time": 2.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 63,
        "time": 2.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 64,
        "time": 2.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 65,
        "time": 2.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 66,
        "time": 2.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 67,
        "time": 2.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 68,
        "time": 2.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 69,
        "time": 2.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 70,
        "time": 2.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 71,
        "time": 2.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 72,
        "time": 2.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 73,
        "time": 2.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 74,
        "time": 2.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 75,
        "time": 2.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 76,
        "time": 2.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 77,
        "time": 2.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 78,
        "time": 2.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 79,
        "time": 2.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 80,
        "time": 2.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 81,
        "time": 2.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 82,
        "time": 2.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 83,
        "time": 2.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 84,
        "time": 2.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 85,
        "time": 2.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.01,
          1
        ]
      },
      {
        "frame": 86,
        "time": 2.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0099,
          1
        ]
      },
      {
        "frame": 87,
        "time": 2.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0098,
          1
        ]
      },
      {
        "frame": 88,
        "time": 2.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0096,
          1
        ]
      },
      {
        "frame": 89,
        "time": 2.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0094,
          1
        ]
      },
      {
        "frame": 90,
        "time": 3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.009,
          1
        ]
      },
      {
        "frame": 91,
        "time": 3.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0085,
          1
        ]
      },
      {
        "frame": 92,
        "time": 3.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0079,
          1
        ]
      },
      {
        "frame": 93,
        "time": 3.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0072,
          1
        ]
      },
      {
        "frame": 94,
        "time": 3.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0065,
          1
        ]
      },
      {
        "frame": 95,
        "time": 3.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0058,
          1
        ]
      },
      {
        "frame": 96,
        "time": 3.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.005,
          1
        ]
      },
      {
        "frame": 97,
        "time": 3.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0042,
          1
        ]
      },
      {
        "frame": 98,
        "time": 3.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0035,
          1
        ]
      },
      {
        "frame": 99,
        "time": 3.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0028,
          1
        ]
      },
      {
        "frame": 100,
        "time": 3.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0021,
          1
        ]
      },
      {
        "frame": 101,
        "time": 3.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0015,
          1
        ]
      },
      {
        "frame": 102,
        "time": 3.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.001,
          1
        ]
      },
      {
        "frame": 103,
        "time": 3.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0006,
          1
        ]
      },
      {
        "frame": 104,
        "time": 3.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0004,
          1
        ]
      },
      {
        "frame": 105,
        "time": 3.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0002,
          1
        ]
      },
      {
        "frame": 106,
        "time": 3.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0001,
          1
        ]
      },
      {
        "frame": 107,
        "time": 3.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      },
      {
        "frame": 108,
        "time": 3.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      }
    ],
    "左腕": [
      {
        "frame": 0,
        "time": 0,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      },
      {
        "frame": 1,
        "time": 0.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      },
      {
        "frame": 2,
        "time": 0.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0002,
          0.0001,
          0.0003,
          1
        ]
      },
      {
        "frame": 3,
        "time": 0.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0005,
          0.0003,
          0.001,
          1
        ]
      },
      {
        "frame": 4,
        "time": 0.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0011,
          0.0007,
          0.0021,
          1
        ]
      },
      {
        "frame": 5,
        "time": 0.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0019,
          0.0013,
          0.0039,
          1
        ]
      },
      {
        "frame": 6,
        "time": 0.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0031,
          0.0021,
          0.0062,
          1
        ]
      },
      {
        "frame": 7,
        "time": 0.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0046,
          0.003,
          0.0091,
          0.9999
        ]
      },
      {
        "frame": 8,
        "time": 0.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0063,
          0.0041,
          0.0126,
          0.9999
        ]
      },
      {
        "frame": 9,
        "time": 0.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0083,
          0.0054,
          0.0166,
          0.9998
        ]
      },
      {
        "frame": 10,
        "time": 0.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0105,
          0.0067,
          0.0209,
          0.9997
        ]
      },
      {
        "frame": 11,
        "time": 0.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0129,
          0.0081,
          0.0254,
          0.9996
        ]
      },
      {
        "frame": 12,
        "time": 0.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0153,
          0.0095,
          0.0301,
          0.9994
        ]
      },
      {
        "frame": 13,
        "time": 0.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0177,
          0.0109,
          0.0349,
          0.9992
        ]
      },
      {
        "frame": 14,
        "time": 0.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0201,
          0.0123,
          0.0394,
          0.9989
        ]
      },
      {
        "frame": 15,
        "time": 0.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0223,
          0.0135,
          0.0438,
          0.9987
        ]
      },
      {
        "frame": 16,
        "time": 0.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0244,
          0.0147,
          0.0477,
          0.9985
        ]
      },
      {
        "frame": 17,
        "time": 0.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0263,
          0.0156,
          0.0513,
          0.9982
        ]
      },
      {
        "frame": 18,
        "time": 0.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0278,
          0.0165,
          0.0542,
          0.998
        ]
      },
      {
        "frame": 19,
        "time": 0.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0291,
          0.0171,
          0.0566,
          0.9978
        ]
      },
      {
        "frame": 20,
        "time": 0.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.03,
          0.0176,
          0.0584,
          0.9977
        ]
      },
      {
        "frame": 21,
        "time": 0.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0306,
          0.0179,
          0.0595,
          0.9976
        ]
      },
      {
        "frame": 22,
        "time": 0.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.031,
          0.0181,
          0.0602,
          0.9975
        ]
      },
      {
        "frame": 23,
        "time": 0.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0311,
          0.0181,
          0.0605,
          0.9975
        ]
      },
      {
        "frame": 24,
        "time": 0.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0311,
          0.0182,
          0.0605,
          0.9975
        ]
      },
      {
        "frame": 25,
        "time": 0.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0311,
          0.0182,
          0.0605,
          0.9975
        ]
      },
      {
        "frame": 26,
        "time": 0.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0311,
          0.0182,
          0.0605,
          0.9975
        ]
      },
      {
        "frame": 27,
        "time": 0.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0311,
          0.0182,
          0.0605,
          0.9975
        ]
      },
      {
        "frame": 28,
        "time": 0.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0311,
          0.0182,
          0.0605,
          0.9975
        ]
      },
      {
        "frame": 29,
        "time": 0.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0311,
          0.0182,
          0.0605,
          0.9975
        ]
      },
      {
        "frame": 30,
        "time": 1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0311,
          0.0182,
          0.0605,
          0.9975
        ]
      },
      {
        "frame": 31,
        "time": 1.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0311,
          0.0182,
          0.0605,
          0.9975
        ]
      },
      {
        "frame": 32,
        "time": 1.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0311,
          0.0182,
          0.0605,
          0.9975
        ]
      },
      {
        "frame": 33,
        "time": 1.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0311,
          0.0182,
          0.0605,
          0.9975
        ]
      },
      {
        "frame": 34,
        "time": 1.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0311,
          0.0182,
          0.0605,
          0.9975
        ]
      },
      {
        "frame": 35,
        "time": 1.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0311,
          0.0182,
          0.0605,
          0.9975
        ]
      },
      {
        "frame": 36,
        "time": 1.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0311,
          0.0182,
          0.0605,
          0.9975
        ]
      },
      {
        "frame": 37,
        "time": 1.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0311,
          0.0182,
          0.0605,
          0.9975
        ]
      },
      {
        "frame": 38,
        "time": 1.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0311,
          0.0182,
          0.0605,
          0.9975
        ]
      },
      {
        "frame": 39,
        "time": 1.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0311,
          0.0182,
          0.0605,
          0.9975
        ]
      },
      {
        "frame": 40,
        "time": 1.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0311,
          0.0182,
          0.0605,
          0.9975
        ]
      },
      {
        "frame": 41,
        "time": 1.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0311,
          0.0182,
          0.0605,
          0.9975
        ]
      },
      {
        "frame": 42,
        "time": 1.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0311,
          0.0182,
          0.0605,
          0.9975
        ]
      },
      {
        "frame": 43,
        "time": 1.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0311,
          0.0182,
          0.0605,
          0.9975
        ]
      },
      {
        "frame": 44,
        "time": 1.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0311,
          0.0182,
          0.0605,
          0.9975
        ]
      },
      {
        "frame": 45,
        "time": 1.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0311,
          0.0182,
          0.0605,
          0.9975
        ]
      },
      {
        "frame": 46,
        "time": 1.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0311,
          0.0182,
          0.0605,
          0.9975
        ]
      },
      {
        "frame": 47,
        "time": 1.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0311,
          0.0182,
          0.0605,
          0.9975
        ]
      },
      {
        "frame": 48,
        "time": 1.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0311,
          0.0182,
          0.0605,
          0.9975
        ]
      },
      {
        "frame": 49,
        "time": 1.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0311,
          0.0182,
          0.0605,
          0.9975
        ]
      },
      {
        "frame": 50,
        "time": 1.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0311,
          0.0182,
          0.0605,
          0.9975
        ]
      },
      {
        "frame": 51,
        "time": 1.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0311,
          0.0182,
          0.0605,
          0.9975
        ]
      },
      {
        "frame": 52,
        "time": 1.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0311,
          0.0182,
          0.0605,
          0.9975
        ]
      },
      {
        "frame": 53,
        "time": 1.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0311,
          0.0182,
          0.0605,
          0.9975
        ]
      },
      {
        "frame": 54,
        "time": 1.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0311,
          0.0182,
          0.0605,
          0.9975
        ]
      },
      {
        "frame": 55,
        "time": 1.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0311,
          0.0182,
          0.0605,
          0.9975
        ]
      },
      {
        "frame": 56,
        "time": 1.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0311,
          0.0182,
          0.0605,
          0.9975
        ]
      },
      {
        "frame": 57,
        "time": 1.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0311,
          0.0182,
          0.0605,
          0.9975
        ]
      },
      {
        "frame": 58,
        "time": 1.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0311,
          0.0182,
          0.0605,
          0.9975
        ]
      },
      {
        "frame": 59,
        "time": 1.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0311,
          0.0182,
          0.0605,
          0.9975
        ]
      },
      {
        "frame": 60,
        "time": 2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0311,
          0.0182,
          0.0605,
          0.9975
        ]
      },
      {
        "frame": 61,
        "time": 2.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0311,
          0.0182,
          0.0605,
          0.9975
        ]
      },
      {
        "frame": 62,
        "time": 2.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0311,
          0.0182,
          0.0605,
          0.9975
        ]
      },
      {
        "frame": 63,
        "time": 2.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0311,
          0.0182,
          0.0605,
          0.9975
        ]
      },
      {
        "frame": 64,
        "time": 2.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0311,
          0.0182,
          0.0605,
          0.9975
        ]
      },
      {
        "frame": 65,
        "time": 2.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0311,
          0.0182,
          0.0605,
          0.9975
        ]
      },
      {
        "frame": 66,
        "time": 2.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0311,
          0.0182,
          0.0605,
          0.9975
        ]
      },
      {
        "frame": 67,
        "time": 2.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0311,
          0.0182,
          0.0605,
          0.9975
        ]
      },
      {
        "frame": 68,
        "time": 2.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0311,
          0.0182,
          0.0605,
          0.9975
        ]
      },
      {
        "frame": 69,
        "time": 2.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0311,
          0.0182,
          0.0605,
          0.9975
        ]
      },
      {
        "frame": 70,
        "time": 2.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0311,
          0.0182,
          0.0605,
          0.9975
        ]
      },
      {
        "frame": 71,
        "time": 2.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0311,
          0.0182,
          0.0605,
          0.9975
        ]
      },
      {
        "frame": 72,
        "time": 2.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0311,
          0.0182,
          0.0605,
          0.9975
        ]
      },
      {
        "frame": 73,
        "time": 2.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0311,
          0.0182,
          0.0605,
          0.9975
        ]
      },
      {
        "frame": 74,
        "time": 2.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0311,
          0.0182,
          0.0605,
          0.9975
        ]
      },
      {
        "frame": 75,
        "time": 2.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0311,
          0.0182,
          0.0605,
          0.9975
        ]
      },
      {
        "frame": 76,
        "time": 2.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0311,
          0.0182,
          0.0605,
          0.9975
        ]
      },
      {
        "frame": 77,
        "time": 2.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0311,
          0.0182,
          0.0605,
          0.9975
        ]
      },
      {
        "frame": 78,
        "time": 2.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0311,
          0.0182,
          0.0605,
          0.9975
        ]
      },
      {
        "frame": 79,
        "time": 2.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0311,
          0.0182,
          0.0605,
          0.9975
        ]
      },
      {
        "frame": 80,
        "time": 2.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0311,
          0.0182,
          0.0605,
          0.9975
        ]
      },
      {
        "frame": 81,
        "time": 2.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0311,
          0.0182,
          0.0605,
          0.9975
        ]
      },
      {
        "frame": 82,
        "time": 2.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0311,
          0.0182,
          0.0605,
          0.9975
        ]
      },
      {
        "frame": 83,
        "time": 2.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0311,
          0.0182,
          0.0605,
          0.9975
        ]
      },
      {
        "frame": 84,
        "time": 2.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0311,
          0.0182,
          0.0605,
          0.9975
        ]
      },
      {
        "frame": 85,
        "time": 2.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0311,
          0.0181,
          0.0605,
          0.9975
        ]
      },
      {
        "frame": 86,
        "time": 2.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.031,
          0.0181,
          0.0602,
          0.9975
        ]
      },
      {
        "frame": 87,
        "time": 2.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0306,
          0.0179,
          0.0595,
          0.9976
        ]
      },
      {
        "frame": 88,
        "time": 2.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.03,
          0.0176,
          0.0584,
          0.9977
        ]
      },
      {
        "frame": 89,
        "time": 2.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0291,
          0.0171,
          0.0566,
          0.9978
        ]
      },
      {
        "frame": 90,
        "time": 3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0278,
          0.0165,
          0.0542,
          0.998
        ]
      },
      {
        "frame": 91,
        "time": 3.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0263,
          0.0156,
          0.0513,
          0.9982
        ]
      },
      {
        "frame": 92,
        "time": 3.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0244,
          0.0147,
          0.0477,
          0.9985
        ]
      },
      {
        "frame": 93,
        "time": 3.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0223,
          0.0135,
          0.0438,
          0.9987
        ]
      },
      {
        "frame": 94,
        "time": 3.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0201,
          0.0123,
          0.0394,
          0.9989
        ]
      },
      {
        "frame": 95,
        "time": 3.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0177,
          0.0109,
          0.0349,
          0.9992
        ]
      },
      {
        "frame": 96,
        "time": 3.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0153,
          0.0095,
          0.0301,
          0.9994
        ]
      },
      {
        "frame": 97,
        "time": 3.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0129,
          0.0081,
          0.0254,
          0.9996
        ]
      },
      {
        "frame": 98,
        "time": 3.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0105,
          0.0067,
          0.0209,
          0.9997
        ]
      },
      {
        "frame": 99,
        "time": 3.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0083,
          0.0054,
          0.0166,
          0.9998
        ]
      },
      {
        "frame": 100,
        "time": 3.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0063,
          0.0041,
          0.0126,
          0.9999
        ]
      },
      {
        "frame": 101,
        "time": 3.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0046,
          0.003,
          0.0091,
          0.9999
        ]
      },
      {
        "frame": 102,
        "time": 3.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0031,
          0.0021,
          0.0062,
          1
        ]
      },
      {
        "frame": 103,
        "time": 3.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0019,
          0.0013,
          0.0039,
          1
        ]
      },
      {
        "frame": 104,
        "time": 3.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0011,
          0.0007,
          0.0021,
          1
        ]
      },
      {
        "frame": 105,
        "time": 3.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0005,
          0.0003,
          0.001,
          1
        ]
      },
      {
        "frame": 106,
        "time": 3.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0002,
          0.0001,
          0.0003,
          1
        ]
      },
      {
        "frame": 107,
        "time": 3.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      },
      {
        "frame": 108,
        "time": 3.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      }
    ],
    "左ひじ": [
      {
        "frame": 0,
        "time": 0,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      },
      {
        "frame": 1,
        "time": 0.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0001,
          1
        ]
      },
      {
        "frame": 2,
        "time": 0.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0001,
          0,
          -0.0006,
          1
        ]
      },
      {
        "frame": 3,
        "time": 0.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0004,
          0,
          -0.0018,
          1
        ]
      },
      {
        "frame": 4,
        "time": 0.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0009,
          0,
          -0.0039,
          1
        ]
      },
      {
        "frame": 5,
        "time": 0.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0016,
          0,
          -0.0071,
          1
        ]
      },
      {
        "frame": 6,
        "time": 0.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0026,
          0,
          -0.0114,
          0.9999
        ]
      },
      {
        "frame": 7,
        "time": 0.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0038,
          -0.0001,
          -0.0167,
          0.9999
        ]
      },
      {
        "frame": 8,
        "time": 0.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0052,
          -0.0001,
          -0.0231,
          0.9997
        ]
      },
      {
        "frame": 9,
        "time": 0.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0069,
          -0.0002,
          -0.0303,
          0.9995
        ]
      },
      {
        "frame": 10,
        "time": 0.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0087,
          -0.0003,
          -0.0381,
          0.9992
        ]
      },
      {
        "frame": 11,
        "time": 0.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0105,
          -0.0005,
          -0.0464,
          0.9989
        ]
      },
      {
        "frame": 12,
        "time": 0.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0125,
          -0.0007,
          -0.055,
          0.9984
        ]
      },
      {
        "frame": 13,
        "time": 0.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0144,
          -0.0009,
          -0.0635,
          0.9979
        ]
      },
      {
        "frame": 14,
        "time": 0.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0163,
          -0.0012,
          -0.0718,
          0.9973
        ]
      },
      {
        "frame": 15,
        "time": 0.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0181,
          -0.0014,
          -0.0796,
          0.9967
        ]
      },
      {
        "frame": 16,
        "time": 0.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0197,
          -0.0017,
          -0.0868,
          0.996
        ]
      },
      {
        "frame": 17,
        "time": 0.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0211,
          -0.002,
          -0.0931,
          0.9954
        ]
      },
      {
        "frame": 18,
        "time": 0.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0223,
          -0.0022,
          -0.0984,
          0.9949
        ]
      },
      {
        "frame": 19,
        "time": 0.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0233,
          -0.0024,
          -0.1027,
          0.9944
        ]
      },
      {
        "frame": 20,
        "time": 0.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.024,
          -0.0026,
          -0.1059,
          0.9941
        ]
      },
      {
        "frame": 21,
        "time": 0.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0245,
          -0.0027,
          -0.108,
          0.9938
        ]
      },
      {
        "frame": 22,
        "time": 0.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0247,
          -0.0027,
          -0.1092,
          0.9937
        ]
      },
      {
        "frame": 23,
        "time": 0.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0248,
          -0.0027,
          -0.1097,
          0.9937
        ]
      },
      {
        "frame": 24,
        "time": 0.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0248,
          -0.0027,
          -0.1097,
          0.9936
        ]
      },
      {
        "frame": 25,
        "time": 0.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0248,
          -0.0027,
          -0.1097,
          0.9936
        ]
      },
      {
        "frame": 26,
        "time": 0.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0248,
          -0.0027,
          -0.1097,
          0.9936
        ]
      },
      {
        "frame": 27,
        "time": 0.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0248,
          -0.0027,
          -0.1097,
          0.9936
        ]
      },
      {
        "frame": 28,
        "time": 0.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0248,
          -0.0027,
          -0.1097,
          0.9936
        ]
      },
      {
        "frame": 29,
        "time": 0.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0248,
          -0.0027,
          -0.1097,
          0.9936
        ]
      },
      {
        "frame": 30,
        "time": 1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0248,
          -0.0027,
          -0.1097,
          0.9936
        ]
      },
      {
        "frame": 31,
        "time": 1.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0248,
          -0.0027,
          -0.1097,
          0.9936
        ]
      },
      {
        "frame": 32,
        "time": 1.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0248,
          -0.0027,
          -0.1097,
          0.9936
        ]
      },
      {
        "frame": 33,
        "time": 1.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0248,
          -0.0027,
          -0.1097,
          0.9936
        ]
      },
      {
        "frame": 34,
        "time": 1.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0248,
          -0.0027,
          -0.1097,
          0.9936
        ]
      },
      {
        "frame": 35,
        "time": 1.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0248,
          -0.0027,
          -0.1097,
          0.9936
        ]
      },
      {
        "frame": 36,
        "time": 1.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0248,
          -0.0027,
          -0.1097,
          0.9936
        ]
      },
      {
        "frame": 37,
        "time": 1.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0248,
          -0.0027,
          -0.1097,
          0.9936
        ]
      },
      {
        "frame": 38,
        "time": 1.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0248,
          -0.0027,
          -0.1097,
          0.9936
        ]
      },
      {
        "frame": 39,
        "time": 1.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0248,
          -0.0027,
          -0.1097,
          0.9936
        ]
      },
      {
        "frame": 40,
        "time": 1.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0248,
          -0.0027,
          -0.1097,
          0.9936
        ]
      },
      {
        "frame": 41,
        "time": 1.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0248,
          -0.0027,
          -0.1097,
          0.9936
        ]
      },
      {
        "frame": 42,
        "time": 1.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0248,
          -0.0027,
          -0.1097,
          0.9936
        ]
      },
      {
        "frame": 43,
        "time": 1.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0248,
          -0.0027,
          -0.1097,
          0.9936
        ]
      },
      {
        "frame": 44,
        "time": 1.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0248,
          -0.0027,
          -0.1097,
          0.9936
        ]
      },
      {
        "frame": 45,
        "time": 1.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0248,
          -0.0027,
          -0.1097,
          0.9936
        ]
      },
      {
        "frame": 46,
        "time": 1.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0248,
          -0.0027,
          -0.1097,
          0.9936
        ]
      },
      {
        "frame": 47,
        "time": 1.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0248,
          -0.0027,
          -0.1097,
          0.9936
        ]
      },
      {
        "frame": 48,
        "time": 1.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0248,
          -0.0027,
          -0.1097,
          0.9936
        ]
      },
      {
        "frame": 49,
        "time": 1.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0248,
          -0.0027,
          -0.1097,
          0.9936
        ]
      },
      {
        "frame": 50,
        "time": 1.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0248,
          -0.0027,
          -0.1097,
          0.9936
        ]
      },
      {
        "frame": 51,
        "time": 1.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0248,
          -0.0027,
          -0.1097,
          0.9936
        ]
      },
      {
        "frame": 52,
        "time": 1.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0248,
          -0.0027,
          -0.1097,
          0.9936
        ]
      },
      {
        "frame": 53,
        "time": 1.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0248,
          -0.0027,
          -0.1097,
          0.9936
        ]
      },
      {
        "frame": 54,
        "time": 1.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0248,
          -0.0027,
          -0.1097,
          0.9936
        ]
      },
      {
        "frame": 55,
        "time": 1.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0248,
          -0.0027,
          -0.1097,
          0.9936
        ]
      },
      {
        "frame": 56,
        "time": 1.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0248,
          -0.0027,
          -0.1097,
          0.9936
        ]
      },
      {
        "frame": 57,
        "time": 1.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0248,
          -0.0027,
          -0.1097,
          0.9936
        ]
      },
      {
        "frame": 58,
        "time": 1.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0248,
          -0.0027,
          -0.1097,
          0.9936
        ]
      },
      {
        "frame": 59,
        "time": 1.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0248,
          -0.0027,
          -0.1097,
          0.9936
        ]
      },
      {
        "frame": 60,
        "time": 2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0248,
          -0.0027,
          -0.1097,
          0.9936
        ]
      },
      {
        "frame": 61,
        "time": 2.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0248,
          -0.0027,
          -0.1097,
          0.9936
        ]
      },
      {
        "frame": 62,
        "time": 2.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0248,
          -0.0027,
          -0.1097,
          0.9936
        ]
      },
      {
        "frame": 63,
        "time": 2.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0248,
          -0.0027,
          -0.1097,
          0.9936
        ]
      },
      {
        "frame": 64,
        "time": 2.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0248,
          -0.0027,
          -0.1097,
          0.9936
        ]
      },
      {
        "frame": 65,
        "time": 2.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0248,
          -0.0027,
          -0.1097,
          0.9936
        ]
      },
      {
        "frame": 66,
        "time": 2.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0248,
          -0.0027,
          -0.1097,
          0.9936
        ]
      },
      {
        "frame": 67,
        "time": 2.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0248,
          -0.0027,
          -0.1097,
          0.9936
        ]
      },
      {
        "frame": 68,
        "time": 2.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0248,
          -0.0027,
          -0.1097,
          0.9936
        ]
      },
      {
        "frame": 69,
        "time": 2.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0248,
          -0.0027,
          -0.1097,
          0.9936
        ]
      },
      {
        "frame": 70,
        "time": 2.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0248,
          -0.0027,
          -0.1097,
          0.9936
        ]
      },
      {
        "frame": 71,
        "time": 2.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0248,
          -0.0027,
          -0.1097,
          0.9936
        ]
      },
      {
        "frame": 72,
        "time": 2.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0248,
          -0.0027,
          -0.1097,
          0.9936
        ]
      },
      {
        "frame": 73,
        "time": 2.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0248,
          -0.0027,
          -0.1097,
          0.9936
        ]
      },
      {
        "frame": 74,
        "time": 2.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0248,
          -0.0027,
          -0.1097,
          0.9936
        ]
      },
      {
        "frame": 75,
        "time": 2.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0248,
          -0.0027,
          -0.1097,
          0.9936
        ]
      },
      {
        "frame": 76,
        "time": 2.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0248,
          -0.0027,
          -0.1097,
          0.9936
        ]
      },
      {
        "frame": 77,
        "time": 2.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0248,
          -0.0027,
          -0.1097,
          0.9936
        ]
      },
      {
        "frame": 78,
        "time": 2.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0248,
          -0.0027,
          -0.1097,
          0.9936
        ]
      },
      {
        "frame": 79,
        "time": 2.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0248,
          -0.0027,
          -0.1097,
          0.9936
        ]
      },
      {
        "frame": 80,
        "time": 2.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0248,
          -0.0027,
          -0.1097,
          0.9936
        ]
      },
      {
        "frame": 81,
        "time": 2.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0248,
          -0.0027,
          -0.1097,
          0.9936
        ]
      },
      {
        "frame": 82,
        "time": 2.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0248,
          -0.0027,
          -0.1097,
          0.9936
        ]
      },
      {
        "frame": 83,
        "time": 2.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0248,
          -0.0027,
          -0.1097,
          0.9936
        ]
      },
      {
        "frame": 84,
        "time": 2.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0248,
          -0.0027,
          -0.1097,
          0.9936
        ]
      },
      {
        "frame": 85,
        "time": 2.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0248,
          -0.0027,
          -0.1097,
          0.9937
        ]
      },
      {
        "frame": 86,
        "time": 2.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0247,
          -0.0027,
          -0.1092,
          0.9937
        ]
      },
      {
        "frame": 87,
        "time": 2.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0245,
          -0.0027,
          -0.108,
          0.9938
        ]
      },
      {
        "frame": 88,
        "time": 2.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.024,
          -0.0026,
          -0.1059,
          0.9941
        ]
      },
      {
        "frame": 89,
        "time": 2.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0233,
          -0.0024,
          -0.1027,
          0.9944
        ]
      },
      {
        "frame": 90,
        "time": 3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0223,
          -0.0022,
          -0.0984,
          0.9949
        ]
      },
      {
        "frame": 91,
        "time": 3.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0211,
          -0.002,
          -0.0931,
          0.9954
        ]
      },
      {
        "frame": 92,
        "time": 3.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0197,
          -0.0017,
          -0.0868,
          0.996
        ]
      },
      {
        "frame": 93,
        "time": 3.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0181,
          -0.0014,
          -0.0796,
          0.9967
        ]
      },
      {
        "frame": 94,
        "time": 3.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0163,
          -0.0012,
          -0.0718,
          0.9973
        ]
      },
      {
        "frame": 95,
        "time": 3.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0144,
          -0.0009,
          -0.0635,
          0.9979
        ]
      },
      {
        "frame": 96,
        "time": 3.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0125,
          -0.0007,
          -0.055,
          0.9984
        ]
      },
      {
        "frame": 97,
        "time": 3.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0105,
          -0.0005,
          -0.0464,
          0.9989
        ]
      },
      {
        "frame": 98,
        "time": 3.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0087,
          -0.0003,
          -0.0381,
          0.9992
        ]
      },
      {
        "frame": 99,
        "time": 3.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0069,
          -0.0002,
          -0.0303,
          0.9995
        ]
      },
      {
        "frame": 100,
        "time": 3.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0052,
          -0.0001,
          -0.0231,
          0.9997
        ]
      },
      {
        "frame": 101,
        "time": 3.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0038,
          -0.0001,
          -0.0167,
          0.9999
        ]
      },
      {
        "frame": 102,
        "time": 3.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0026,
          0,
          -0.0114,
          0.9999
        ]
      },
      {
        "frame": 103,
        "time": 3.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0016,
          0,
          -0.0071,
          1
        ]
      },
      {
        "frame": 104,
        "time": 3.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0009,
          0,
          -0.0039,
          1
        ]
      },
      {
        "frame": 105,
        "time": 3.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0004,
          0,
          -0.0018,
          1
        ]
      },
      {
        "frame": 106,
        "time": 3.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0001,
          0,
          -0.0006,
          1
        ]
      },
      {
        "frame": 107,
        "time": 3.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0001,
          1
        ]
      },
      {
        "frame": 108,
        "time": 3.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      }
    ],
    "左手首": [
      {
        "frame": 0,
        "time": 0,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      },
      {
        "frame": 1,
        "time": 0.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      },
      {
        "frame": 2,
        "time": 0.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0002,
          1
        ]
      },
      {
        "frame": 3,
        "time": 0.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0006,
          1
        ]
      },
      {
        "frame": 4,
        "time": 0.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0014,
          1
        ]
      },
      {
        "frame": 5,
        "time": 0.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0026,
          1
        ]
      },
      {
        "frame": 6,
        "time": 0.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0041,
          1
        ]
      },
      {
        "frame": 7,
        "time": 0.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0061,
          1
        ]
      },
      {
        "frame": 8,
        "time": 0.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0084,
          1
        ]
      },
      {
        "frame": 9,
        "time": 0.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.011,
          0.9999
        ]
      },
      {
        "frame": 10,
        "time": 0.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0139,
          0.9999
        ]
      },
      {
        "frame": 11,
        "time": 0.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0169,
          0.9999
        ]
      },
      {
        "frame": 12,
        "time": 0.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.02,
          0.9998
        ]
      },
      {
        "frame": 13,
        "time": 0.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0231,
          0.9997
        ]
      },
      {
        "frame": 14,
        "time": 0.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0261,
          0.9997
        ]
      },
      {
        "frame": 15,
        "time": 0.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.029,
          0.9996
        ]
      },
      {
        "frame": 16,
        "time": 0.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0316,
          0.9995
        ]
      },
      {
        "frame": 17,
        "time": 0.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0339,
          0.9994
        ]
      },
      {
        "frame": 18,
        "time": 0.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0359,
          0.9994
        ]
      },
      {
        "frame": 19,
        "time": 0.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0374,
          0.9993
        ]
      },
      {
        "frame": 20,
        "time": 0.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0386,
          0.9993
        ]
      },
      {
        "frame": 21,
        "time": 0.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0393,
          0.9992
        ]
      },
      {
        "frame": 22,
        "time": 0.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0398,
          0.9992
        ]
      },
      {
        "frame": 23,
        "time": 0.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.04,
          0.9992
        ]
      },
      {
        "frame": 24,
        "time": 0.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.04,
          0.9992
        ]
      },
      {
        "frame": 25,
        "time": 0.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.04,
          0.9992
        ]
      },
      {
        "frame": 26,
        "time": 0.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.04,
          0.9992
        ]
      },
      {
        "frame": 27,
        "time": 0.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.04,
          0.9992
        ]
      },
      {
        "frame": 28,
        "time": 0.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.04,
          0.9992
        ]
      },
      {
        "frame": 29,
        "time": 0.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.04,
          0.9992
        ]
      },
      {
        "frame": 30,
        "time": 1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.04,
          0.9992
        ]
      },
      {
        "frame": 31,
        "time": 1.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.04,
          0.9992
        ]
      },
      {
        "frame": 32,
        "time": 1.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.04,
          0.9992
        ]
      },
      {
        "frame": 33,
        "time": 1.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.04,
          0.9992
        ]
      },
      {
        "frame": 34,
        "time": 1.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.04,
          0.9992
        ]
      },
      {
        "frame": 35,
        "time": 1.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.04,
          0.9992
        ]
      },
      {
        "frame": 36,
        "time": 1.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.04,
          0.9992
        ]
      },
      {
        "frame": 37,
        "time": 1.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.04,
          0.9992
        ]
      },
      {
        "frame": 38,
        "time": 1.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.04,
          0.9992
        ]
      },
      {
        "frame": 39,
        "time": 1.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.04,
          0.9992
        ]
      },
      {
        "frame": 40,
        "time": 1.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.04,
          0.9992
        ]
      },
      {
        "frame": 41,
        "time": 1.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.04,
          0.9992
        ]
      },
      {
        "frame": 42,
        "time": 1.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.04,
          0.9992
        ]
      },
      {
        "frame": 43,
        "time": 1.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.04,
          0.9992
        ]
      },
      {
        "frame": 44,
        "time": 1.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.04,
          0.9992
        ]
      },
      {
        "frame": 45,
        "time": 1.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.04,
          0.9992
        ]
      },
      {
        "frame": 46,
        "time": 1.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.04,
          0.9992
        ]
      },
      {
        "frame": 47,
        "time": 1.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.04,
          0.9992
        ]
      },
      {
        "frame": 48,
        "time": 1.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.04,
          0.9992
        ]
      },
      {
        "frame": 49,
        "time": 1.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.04,
          0.9992
        ]
      },
      {
        "frame": 50,
        "time": 1.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.04,
          0.9992
        ]
      },
      {
        "frame": 51,
        "time": 1.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.04,
          0.9992
        ]
      },
      {
        "frame": 52,
        "time": 1.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.04,
          0.9992
        ]
      },
      {
        "frame": 53,
        "time": 1.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.04,
          0.9992
        ]
      },
      {
        "frame": 54,
        "time": 1.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.04,
          0.9992
        ]
      },
      {
        "frame": 55,
        "time": 1.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.04,
          0.9992
        ]
      },
      {
        "frame": 56,
        "time": 1.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.04,
          0.9992
        ]
      },
      {
        "frame": 57,
        "time": 1.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.04,
          0.9992
        ]
      },
      {
        "frame": 58,
        "time": 1.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.04,
          0.9992
        ]
      },
      {
        "frame": 59,
        "time": 1.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.04,
          0.9992
        ]
      },
      {
        "frame": 60,
        "time": 2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.04,
          0.9992
        ]
      },
      {
        "frame": 61,
        "time": 2.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.04,
          0.9992
        ]
      },
      {
        "frame": 62,
        "time": 2.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.04,
          0.9992
        ]
      },
      {
        "frame": 63,
        "time": 2.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.04,
          0.9992
        ]
      },
      {
        "frame": 64,
        "time": 2.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.04,
          0.9992
        ]
      },
      {
        "frame": 65,
        "time": 2.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.04,
          0.9992
        ]
      },
      {
        "frame": 66,
        "time": 2.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.04,
          0.9992
        ]
      },
      {
        "frame": 67,
        "time": 2.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.04,
          0.9992
        ]
      },
      {
        "frame": 68,
        "time": 2.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.04,
          0.9992
        ]
      },
      {
        "frame": 69,
        "time": 2.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.04,
          0.9992
        ]
      },
      {
        "frame": 70,
        "time": 2.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.04,
          0.9992
        ]
      },
      {
        "frame": 71,
        "time": 2.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.04,
          0.9992
        ]
      },
      {
        "frame": 72,
        "time": 2.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.04,
          0.9992
        ]
      },
      {
        "frame": 73,
        "time": 2.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.04,
          0.9992
        ]
      },
      {
        "frame": 74,
        "time": 2.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.04,
          0.9992
        ]
      },
      {
        "frame": 75,
        "time": 2.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.04,
          0.9992
        ]
      },
      {
        "frame": 76,
        "time": 2.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.04,
          0.9992
        ]
      },
      {
        "frame": 77,
        "time": 2.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.04,
          0.9992
        ]
      },
      {
        "frame": 78,
        "time": 2.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.04,
          0.9992
        ]
      },
      {
        "frame": 79,
        "time": 2.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.04,
          0.9992
        ]
      },
      {
        "frame": 80,
        "time": 2.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.04,
          0.9992
        ]
      },
      {
        "frame": 81,
        "time": 2.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.04,
          0.9992
        ]
      },
      {
        "frame": 82,
        "time": 2.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.04,
          0.9992
        ]
      },
      {
        "frame": 83,
        "time": 2.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.04,
          0.9992
        ]
      },
      {
        "frame": 84,
        "time": 2.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.04,
          0.9992
        ]
      },
      {
        "frame": 85,
        "time": 2.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.04,
          0.9992
        ]
      },
      {
        "frame": 86,
        "time": 2.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0398,
          0.9992
        ]
      },
      {
        "frame": 87,
        "time": 2.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0393,
          0.9992
        ]
      },
      {
        "frame": 88,
        "time": 2.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0386,
          0.9993
        ]
      },
      {
        "frame": 89,
        "time": 2.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0374,
          0.9993
        ]
      },
      {
        "frame": 90,
        "time": 3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0359,
          0.9994
        ]
      },
      {
        "frame": 91,
        "time": 3.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0339,
          0.9994
        ]
      },
      {
        "frame": 92,
        "time": 3.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0316,
          0.9995
        ]
      },
      {
        "frame": 93,
        "time": 3.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.029,
          0.9996
        ]
      },
      {
        "frame": 94,
        "time": 3.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0261,
          0.9997
        ]
      },
      {
        "frame": 95,
        "time": 3.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0231,
          0.9997
        ]
      },
      {
        "frame": 96,
        "time": 3.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.02,
          0.9998
        ]
      },
      {
        "frame": 97,
        "time": 3.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0169,
          0.9999
        ]
      },
      {
        "frame": 98,
        "time": 3.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0139,
          0.9999
        ]
      },
      {
        "frame": 99,
        "time": 3.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.011,
          0.9999
        ]
      },
      {
        "frame": 100,
        "time": 3.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0084,
          1
        ]
      },
      {
        "frame": 101,
        "time": 3.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0061,
          1
        ]
      },
      {
        "frame": 102,
        "time": 3.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0041,
          1
        ]
      },
      {
        "frame": 103,
        "time": 3.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0026,
          1
        ]
      },
      {
        "frame": 104,
        "time": 3.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0014,
          1
        ]
      },
      {
        "frame": 105,
        "time": 3.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0006,
          1
        ]
      },
      {
        "frame": 106,
        "time": 3.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0002,
          1
        ]
      },
      {
        "frame": 107,
        "time": 3.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      },
      {
        "frame": 108,
        "time": 3.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      }
    ],
    "右肩": [
      {
        "frame": 0,
        "time": 0,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      },
      {
        "frame": 1,
        "time": 0.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      },
      {
        "frame": 2,
        "time": 0.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0001,
          -0.0001,
          0.0001,
          1
        ]
      },
      {
        "frame": 3,
        "time": 0.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0002,
          -0.0003,
          0.0004,
          1
        ]
      },
      {
        "frame": 4,
        "time": 0.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0005,
          -0.0007,
          0.0009,
          1
        ]
      },
      {
        "frame": 5,
        "time": 0.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.001,
          -0.0013,
          0.0016,
          1
        ]
      },
      {
        "frame": 6,
        "time": 0.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0015,
          -0.0021,
          0.0026,
          1
        ]
      },
      {
        "frame": 7,
        "time": 0.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0023,
          -0.0031,
          0.0038,
          1
        ]
      },
      {
        "frame": 8,
        "time": 0.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0031,
          -0.0042,
          0.0052,
          1
        ]
      },
      {
        "frame": 9,
        "time": 0.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0041,
          -0.0055,
          0.0069,
          1
        ]
      },
      {
        "frame": 10,
        "time": 0.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0051,
          -0.007,
          0.0086,
          0.9999
        ]
      },
      {
        "frame": 11,
        "time": 0.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0062,
          -0.0085,
          0.0105,
          0.9999
        ]
      },
      {
        "frame": 12,
        "time": 0.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0074,
          -0.0101,
          0.0124,
          0.9998
        ]
      },
      {
        "frame": 13,
        "time": 0.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0085,
          -0.0117,
          0.0143,
          0.9998
        ]
      },
      {
        "frame": 14,
        "time": 0.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0096,
          -0.0132,
          0.0162,
          0.9997
        ]
      },
      {
        "frame": 15,
        "time": 0.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0106,
          -0.0147,
          0.018,
          0.9997
        ]
      },
      {
        "frame": 16,
        "time": 0.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0115,
          -0.016,
          0.0196,
          0.9996
        ]
      },
      {
        "frame": 17,
        "time": 0.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0124,
          -0.0172,
          0.021,
          0.9996
        ]
      },
      {
        "frame": 18,
        "time": 0.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.013,
          -0.0182,
          0.0222,
          0.9995
        ]
      },
      {
        "frame": 19,
        "time": 0.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0136,
          -0.019,
          0.0231,
          0.9995
        ]
      },
      {
        "frame": 20,
        "time": 0.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.014,
          -0.0196,
          0.0238,
          0.9994
        ]
      },
      {
        "frame": 21,
        "time": 0.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0143,
          -0.02,
          0.0243,
          0.9994
        ]
      },
      {
        "frame": 22,
        "time": 0.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0144,
          -0.0203,
          0.0246,
          0.9994
        ]
      },
      {
        "frame": 23,
        "time": 0.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0145,
          -0.0204,
          0.0247,
          0.9994
        ]
      },
      {
        "frame": 24,
        "time": 0.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0145,
          -0.0204,
          0.0247,
          0.9994
        ]
      },
      {
        "frame": 25,
        "time": 0.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0145,
          -0.0204,
          0.0247,
          0.9994
        ]
      },
      {
        "frame": 26,
        "time": 0.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0145,
          -0.0204,
          0.0247,
          0.9994
        ]
      },
      {
        "frame": 27,
        "time": 0.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0145,
          -0.0204,
          0.0247,
          0.9994
        ]
      },
      {
        "frame": 28,
        "time": 0.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0145,
          -0.0204,
          0.0247,
          0.9994
        ]
      },
      {
        "frame": 29,
        "time": 0.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0145,
          -0.0204,
          0.0247,
          0.9994
        ]
      },
      {
        "frame": 30,
        "time": 1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0145,
          -0.0204,
          0.0247,
          0.9994
        ]
      },
      {
        "frame": 31,
        "time": 1.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0145,
          -0.0204,
          0.0247,
          0.9994
        ]
      },
      {
        "frame": 32,
        "time": 1.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0145,
          -0.0204,
          0.0247,
          0.9994
        ]
      },
      {
        "frame": 33,
        "time": 1.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0145,
          -0.0204,
          0.0247,
          0.9994
        ]
      },
      {
        "frame": 34,
        "time": 1.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0145,
          -0.0204,
          0.0247,
          0.9994
        ]
      },
      {
        "frame": 35,
        "time": 1.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0145,
          -0.0204,
          0.0247,
          0.9994
        ]
      },
      {
        "frame": 36,
        "time": 1.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0145,
          -0.0204,
          0.0247,
          0.9994
        ]
      },
      {
        "frame": 37,
        "time": 1.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0145,
          -0.0204,
          0.0247,
          0.9994
        ]
      },
      {
        "frame": 38,
        "time": 1.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0145,
          -0.0204,
          0.0247,
          0.9994
        ]
      },
      {
        "frame": 39,
        "time": 1.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0145,
          -0.0204,
          0.0247,
          0.9994
        ]
      },
      {
        "frame": 40,
        "time": 1.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0145,
          -0.0204,
          0.0247,
          0.9994
        ]
      },
      {
        "frame": 41,
        "time": 1.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0145,
          -0.0204,
          0.0247,
          0.9994
        ]
      },
      {
        "frame": 42,
        "time": 1.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0145,
          -0.0204,
          0.0247,
          0.9994
        ]
      },
      {
        "frame": 43,
        "time": 1.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0145,
          -0.0204,
          0.0247,
          0.9994
        ]
      },
      {
        "frame": 44,
        "time": 1.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0145,
          -0.0204,
          0.0247,
          0.9994
        ]
      },
      {
        "frame": 45,
        "time": 1.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0145,
          -0.0204,
          0.0247,
          0.9994
        ]
      },
      {
        "frame": 46,
        "time": 1.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0145,
          -0.0204,
          0.0247,
          0.9994
        ]
      },
      {
        "frame": 47,
        "time": 1.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0145,
          -0.0204,
          0.0247,
          0.9994
        ]
      },
      {
        "frame": 48,
        "time": 1.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0145,
          -0.0204,
          0.0247,
          0.9994
        ]
      },
      {
        "frame": 49,
        "time": 1.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0145,
          -0.0204,
          0.0247,
          0.9994
        ]
      },
      {
        "frame": 50,
        "time": 1.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0145,
          -0.0204,
          0.0247,
          0.9994
        ]
      },
      {
        "frame": 51,
        "time": 1.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0145,
          -0.0204,
          0.0247,
          0.9994
        ]
      },
      {
        "frame": 52,
        "time": 1.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0145,
          -0.0204,
          0.0247,
          0.9994
        ]
      },
      {
        "frame": 53,
        "time": 1.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0145,
          -0.0204,
          0.0247,
          0.9994
        ]
      },
      {
        "frame": 54,
        "time": 1.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0145,
          -0.0204,
          0.0247,
          0.9994
        ]
      },
      {
        "frame": 55,
        "time": 1.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0145,
          -0.0204,
          0.0247,
          0.9994
        ]
      },
      {
        "frame": 56,
        "time": 1.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0145,
          -0.0204,
          0.0247,
          0.9994
        ]
      },
      {
        "frame": 57,
        "time": 1.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0145,
          -0.0204,
          0.0247,
          0.9994
        ]
      },
      {
        "frame": 58,
        "time": 1.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0145,
          -0.0204,
          0.0247,
          0.9994
        ]
      },
      {
        "frame": 59,
        "time": 1.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0145,
          -0.0204,
          0.0247,
          0.9994
        ]
      },
      {
        "frame": 60,
        "time": 2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0145,
          -0.0204,
          0.0247,
          0.9994
        ]
      },
      {
        "frame": 61,
        "time": 2.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0145,
          -0.0204,
          0.0247,
          0.9994
        ]
      },
      {
        "frame": 62,
        "time": 2.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0145,
          -0.0204,
          0.0247,
          0.9994
        ]
      },
      {
        "frame": 63,
        "time": 2.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0145,
          -0.0204,
          0.0247,
          0.9994
        ]
      },
      {
        "frame": 64,
        "time": 2.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0145,
          -0.0204,
          0.0247,
          0.9994
        ]
      },
      {
        "frame": 65,
        "time": 2.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0145,
          -0.0204,
          0.0247,
          0.9994
        ]
      },
      {
        "frame": 66,
        "time": 2.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0145,
          -0.0204,
          0.0247,
          0.9994
        ]
      },
      {
        "frame": 67,
        "time": 2.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0145,
          -0.0204,
          0.0247,
          0.9994
        ]
      },
      {
        "frame": 68,
        "time": 2.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0145,
          -0.0204,
          0.0247,
          0.9994
        ]
      },
      {
        "frame": 69,
        "time": 2.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0145,
          -0.0204,
          0.0247,
          0.9994
        ]
      },
      {
        "frame": 70,
        "time": 2.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0145,
          -0.0204,
          0.0247,
          0.9994
        ]
      },
      {
        "frame": 71,
        "time": 2.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0145,
          -0.0204,
          0.0247,
          0.9994
        ]
      },
      {
        "frame": 72,
        "time": 2.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0145,
          -0.0204,
          0.0247,
          0.9994
        ]
      },
      {
        "frame": 73,
        "time": 2.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0145,
          -0.0204,
          0.0247,
          0.9994
        ]
      },
      {
        "frame": 74,
        "time": 2.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0145,
          -0.0204,
          0.0247,
          0.9994
        ]
      },
      {
        "frame": 75,
        "time": 2.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0145,
          -0.0204,
          0.0247,
          0.9994
        ]
      },
      {
        "frame": 76,
        "time": 2.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0145,
          -0.0204,
          0.0247,
          0.9994
        ]
      },
      {
        "frame": 77,
        "time": 2.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0145,
          -0.0204,
          0.0247,
          0.9994
        ]
      },
      {
        "frame": 78,
        "time": 2.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0145,
          -0.0204,
          0.0247,
          0.9994
        ]
      },
      {
        "frame": 79,
        "time": 2.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0145,
          -0.0204,
          0.0247,
          0.9994
        ]
      },
      {
        "frame": 80,
        "time": 2.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0145,
          -0.0204,
          0.0247,
          0.9994
        ]
      },
      {
        "frame": 81,
        "time": 2.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0145,
          -0.0204,
          0.0247,
          0.9994
        ]
      },
      {
        "frame": 82,
        "time": 2.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0145,
          -0.0204,
          0.0247,
          0.9994
        ]
      },
      {
        "frame": 83,
        "time": 2.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0145,
          -0.0204,
          0.0247,
          0.9994
        ]
      },
      {
        "frame": 84,
        "time": 2.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0145,
          -0.0204,
          0.0247,
          0.9994
        ]
      },
      {
        "frame": 85,
        "time": 2.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0145,
          -0.0204,
          0.0247,
          0.9994
        ]
      },
      {
        "frame": 86,
        "time": 2.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0144,
          -0.0203,
          0.0246,
          0.9994
        ]
      },
      {
        "frame": 87,
        "time": 2.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0143,
          -0.02,
          0.0243,
          0.9994
        ]
      },
      {
        "frame": 88,
        "time": 2.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.014,
          -0.0196,
          0.0238,
          0.9994
        ]
      },
      {
        "frame": 89,
        "time": 2.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0136,
          -0.019,
          0.0231,
          0.9995
        ]
      },
      {
        "frame": 90,
        "time": 3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.013,
          -0.0182,
          0.0222,
          0.9995
        ]
      },
      {
        "frame": 91,
        "time": 3.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0124,
          -0.0172,
          0.021,
          0.9996
        ]
      },
      {
        "frame": 92,
        "time": 3.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0115,
          -0.016,
          0.0196,
          0.9996
        ]
      },
      {
        "frame": 93,
        "time": 3.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0106,
          -0.0147,
          0.018,
          0.9997
        ]
      },
      {
        "frame": 94,
        "time": 3.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0096,
          -0.0132,
          0.0162,
          0.9997
        ]
      },
      {
        "frame": 95,
        "time": 3.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0085,
          -0.0117,
          0.0143,
          0.9998
        ]
      },
      {
        "frame": 96,
        "time": 3.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0074,
          -0.0101,
          0.0124,
          0.9998
        ]
      },
      {
        "frame": 97,
        "time": 3.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0062,
          -0.0085,
          0.0105,
          0.9999
        ]
      },
      {
        "frame": 98,
        "time": 3.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0051,
          -0.007,
          0.0086,
          0.9999
        ]
      },
      {
        "frame": 99,
        "time": 3.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0041,
          -0.0055,
          0.0069,
          1
        ]
      },
      {
        "frame": 100,
        "time": 3.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0031,
          -0.0042,
          0.0052,
          1
        ]
      },
      {
        "frame": 101,
        "time": 3.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0023,
          -0.0031,
          0.0038,
          1
        ]
      },
      {
        "frame": 102,
        "time": 3.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0015,
          -0.0021,
          0.0026,
          1
        ]
      },
      {
        "frame": 103,
        "time": 3.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.001,
          -0.0013,
          0.0016,
          1
        ]
      },
      {
        "frame": 104,
        "time": 3.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0005,
          -0.0007,
          0.0009,
          1
        ]
      },
      {
        "frame": 105,
        "time": 3.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0002,
          -0.0003,
          0.0004,
          1
        ]
      },
      {
        "frame": 106,
        "time": 3.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0001,
          -0.0001,
          0.0001,
          1
        ]
      },
      {
        "frame": 107,
        "time": 3.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      },
      {
        "frame": 108,
        "time": 3.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      }
    ],
    "右腕": [
      {
        "frame": 0,
        "time": 0,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      },
      {
        "frame": 1,
        "time": 0.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0001,
          -0.0001,
          -0.0003,
          1
        ]
      },
      {
        "frame": 2,
        "time": 0.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0006,
          -0.0011,
          -0.002,
          1
        ]
      },
      {
        "frame": 3,
        "time": 0.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0018,
          -0.0034,
          -0.0063,
          1
        ]
      },
      {
        "frame": 4,
        "time": 0.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.004,
          -0.0074,
          -0.0139,
          0.9999
        ]
      },
      {
        "frame": 5,
        "time": 0.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0074,
          -0.0134,
          -0.0253,
          0.9996
        ]
      },
      {
        "frame": 6,
        "time": 0.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0123,
          -0.0213,
          -0.0406,
          0.9989
        ]
      },
      {
        "frame": 7,
        "time": 0.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0186,
          -0.0309,
          -0.0598,
          0.9976
        ]
      },
      {
        "frame": 8,
        "time": 0.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0266,
          -0.042,
          -0.0827,
          0.9953
        ]
      },
      {
        "frame": 9,
        "time": 0.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0362,
          -0.0542,
          -0.1086,
          0.9919
        ]
      },
      {
        "frame": 10,
        "time": 0.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0475,
          -0.0669,
          -0.1371,
          0.9872
        ]
      },
      {
        "frame": 11,
        "time": 0.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0601,
          -0.0797,
          -0.1672,
          0.9809
        ]
      },
      {
        "frame": 12,
        "time": 0.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0739,
          -0.0921,
          -0.1981,
          0.9731
        ]
      },
      {
        "frame": 13,
        "time": 0.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0884,
          -0.1036,
          -0.2288,
          0.9639
        ]
      },
      {
        "frame": 14,
        "time": 0.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.1032,
          -0.1141,
          -0.2586,
          0.9537
        ]
      },
      {
        "frame": 15,
        "time": 0.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.1178,
          -0.1232,
          -0.2864,
          0.9428
        ]
      },
      {
        "frame": 16,
        "time": 0.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.1315,
          -0.1308,
          -0.3117,
          0.9319
        ]
      },
      {
        "frame": 17,
        "time": 0.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.1439,
          -0.137,
          -0.3337,
          0.9215
        ]
      },
      {
        "frame": 18,
        "time": 0.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.1547,
          -0.1418,
          -0.3522,
          0.9121
        ]
      },
      {
        "frame": 19,
        "time": 0.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.1634,
          -0.1454,
          -0.3668,
          0.9042
        ]
      },
      {
        "frame": 20,
        "time": 0.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.17,
          -0.1479,
          -0.3776,
          0.8981
        ]
      },
      {
        "frame": 21,
        "time": 0.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.1744,
          -0.1495,
          -0.3848,
          0.8939
        ]
      },
      {
        "frame": 22,
        "time": 0.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.1769,
          -0.1504,
          -0.3889,
          0.8915
        ]
      },
      {
        "frame": 23,
        "time": 0.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.1779,
          -0.1508,
          -0.3905,
          0.8906
        ]
      },
      {
        "frame": 24,
        "time": 0.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.1781,
          -0.1508,
          -0.3908,
          0.8904
        ]
      },
      {
        "frame": 25,
        "time": 0.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.1781,
          -0.1508,
          -0.3908,
          0.8904
        ]
      },
      {
        "frame": 26,
        "time": 0.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.1781,
          -0.1508,
          -0.3908,
          0.8904
        ]
      },
      {
        "frame": 27,
        "time": 0.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.1781,
          -0.1508,
          -0.3908,
          0.8904
        ]
      },
      {
        "frame": 28,
        "time": 0.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.1781,
          -0.1508,
          -0.3908,
          0.8904
        ]
      },
      {
        "frame": 29,
        "time": 0.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.1781,
          -0.1508,
          -0.3908,
          0.8904
        ]
      },
      {
        "frame": 30,
        "time": 1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.1781,
          -0.1508,
          -0.3908,
          0.8904
        ]
      },
      {
        "frame": 31,
        "time": 1.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.1781,
          -0.1508,
          -0.3908,
          0.8904
        ]
      },
      {
        "frame": 32,
        "time": 1.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.1781,
          -0.1508,
          -0.3908,
          0.8904
        ]
      },
      {
        "frame": 33,
        "time": 1.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.1781,
          -0.1508,
          -0.3908,
          0.8904
        ]
      },
      {
        "frame": 34,
        "time": 1.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.1781,
          -0.1508,
          -0.3908,
          0.8904
        ]
      },
      {
        "frame": 35,
        "time": 1.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.1781,
          -0.1508,
          -0.3908,
          0.8904
        ]
      },
      {
        "frame": 36,
        "time": 1.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.1781,
          -0.1508,
          -0.3908,
          0.8904
        ]
      },
      {
        "frame": 37,
        "time": 1.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.1781,
          -0.1508,
          -0.3908,
          0.8904
        ]
      },
      {
        "frame": 38,
        "time": 1.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.1781,
          -0.1508,
          -0.3908,
          0.8904
        ]
      },
      {
        "frame": 39,
        "time": 1.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.1781,
          -0.1508,
          -0.3908,
          0.8904
        ]
      },
      {
        "frame": 40,
        "time": 1.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.1781,
          -0.1508,
          -0.3908,
          0.8904
        ]
      },
      {
        "frame": 41,
        "time": 1.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.1781,
          -0.1508,
          -0.3908,
          0.8904
        ]
      },
      {
        "frame": 42,
        "time": 1.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.1781,
          -0.1508,
          -0.3908,
          0.8904
        ]
      },
      {
        "frame": 43,
        "time": 1.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.1781,
          -0.1508,
          -0.3908,
          0.8904
        ]
      },
      {
        "frame": 44,
        "time": 1.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.1781,
          -0.1508,
          -0.3908,
          0.8904
        ]
      },
      {
        "frame": 45,
        "time": 1.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.1781,
          -0.1508,
          -0.3908,
          0.8904
        ]
      },
      {
        "frame": 46,
        "time": 1.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.1781,
          -0.1508,
          -0.3908,
          0.8904
        ]
      },
      {
        "frame": 47,
        "time": 1.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.1781,
          -0.1508,
          -0.3908,
          0.8904
        ]
      },
      {
        "frame": 48,
        "time": 1.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.1781,
          -0.1508,
          -0.3908,
          0.8904
        ]
      },
      {
        "frame": 49,
        "time": 1.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.1781,
          -0.1508,
          -0.3908,
          0.8904
        ]
      },
      {
        "frame": 50,
        "time": 1.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.1781,
          -0.1508,
          -0.3908,
          0.8904
        ]
      },
      {
        "frame": 51,
        "time": 1.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.1781,
          -0.1508,
          -0.3908,
          0.8904
        ]
      },
      {
        "frame": 52,
        "time": 1.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.1781,
          -0.1508,
          -0.3908,
          0.8904
        ]
      },
      {
        "frame": 53,
        "time": 1.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.1781,
          -0.1508,
          -0.3908,
          0.8904
        ]
      },
      {
        "frame": 54,
        "time": 1.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.1781,
          -0.1508,
          -0.3908,
          0.8904
        ]
      },
      {
        "frame": 55,
        "time": 1.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.1781,
          -0.1508,
          -0.3908,
          0.8904
        ]
      },
      {
        "frame": 56,
        "time": 1.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.1781,
          -0.1508,
          -0.3908,
          0.8904
        ]
      },
      {
        "frame": 57,
        "time": 1.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.1781,
          -0.1508,
          -0.3908,
          0.8904
        ]
      },
      {
        "frame": 58,
        "time": 1.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.1781,
          -0.1508,
          -0.3908,
          0.8904
        ]
      },
      {
        "frame": 59,
        "time": 1.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.1781,
          -0.1508,
          -0.3908,
          0.8904
        ]
      },
      {
        "frame": 60,
        "time": 2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.1781,
          -0.1508,
          -0.3908,
          0.8904
        ]
      },
      {
        "frame": 61,
        "time": 2.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.1781,
          -0.1508,
          -0.3908,
          0.8904
        ]
      },
      {
        "frame": 62,
        "time": 2.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.1781,
          -0.1508,
          -0.3908,
          0.8904
        ]
      },
      {
        "frame": 63,
        "time": 2.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.1781,
          -0.1508,
          -0.3908,
          0.8904
        ]
      },
      {
        "frame": 64,
        "time": 2.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.1781,
          -0.1508,
          -0.3908,
          0.8904
        ]
      },
      {
        "frame": 65,
        "time": 2.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.1781,
          -0.1508,
          -0.3908,
          0.8904
        ]
      },
      {
        "frame": 66,
        "time": 2.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.1781,
          -0.1508,
          -0.3908,
          0.8904
        ]
      },
      {
        "frame": 67,
        "time": 2.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.1781,
          -0.1508,
          -0.3908,
          0.8904
        ]
      },
      {
        "frame": 68,
        "time": 2.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.1781,
          -0.1508,
          -0.3908,
          0.8904
        ]
      },
      {
        "frame": 69,
        "time": 2.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.1781,
          -0.1508,
          -0.3908,
          0.8904
        ]
      },
      {
        "frame": 70,
        "time": 2.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.1781,
          -0.1508,
          -0.3908,
          0.8904
        ]
      },
      {
        "frame": 71,
        "time": 2.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.1781,
          -0.1508,
          -0.3908,
          0.8904
        ]
      },
      {
        "frame": 72,
        "time": 2.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.1781,
          -0.1508,
          -0.3908,
          0.8904
        ]
      },
      {
        "frame": 73,
        "time": 2.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.1781,
          -0.1508,
          -0.3908,
          0.8904
        ]
      },
      {
        "frame": 74,
        "time": 2.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.1781,
          -0.1508,
          -0.3908,
          0.8904
        ]
      },
      {
        "frame": 75,
        "time": 2.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.1781,
          -0.1508,
          -0.3908,
          0.8904
        ]
      },
      {
        "frame": 76,
        "time": 2.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.1781,
          -0.1508,
          -0.3908,
          0.8904
        ]
      },
      {
        "frame": 77,
        "time": 2.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.1781,
          -0.1508,
          -0.3908,
          0.8904
        ]
      },
      {
        "frame": 78,
        "time": 2.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.1781,
          -0.1508,
          -0.3908,
          0.8904
        ]
      },
      {
        "frame": 79,
        "time": 2.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.1781,
          -0.1508,
          -0.3908,
          0.8904
        ]
      },
      {
        "frame": 80,
        "time": 2.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.1781,
          -0.1508,
          -0.3908,
          0.8904
        ]
      },
      {
        "frame": 81,
        "time": 2.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.1781,
          -0.1508,
          -0.3908,
          0.8904
        ]
      },
      {
        "frame": 82,
        "time": 2.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.1781,
          -0.1508,
          -0.3908,
          0.8904
        ]
      },
      {
        "frame": 83,
        "time": 2.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.1781,
          -0.1508,
          -0.3908,
          0.8904
        ]
      },
      {
        "frame": 84,
        "time": 2.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.1781,
          -0.1508,
          -0.3908,
          0.8904
        ]
      },
      {
        "frame": 85,
        "time": 2.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.1779,
          -0.1508,
          -0.3905,
          0.8906
        ]
      },
      {
        "frame": 86,
        "time": 2.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.1769,
          -0.1504,
          -0.3889,
          0.8915
        ]
      },
      {
        "frame": 87,
        "time": 2.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.1744,
          -0.1495,
          -0.3848,
          0.8939
        ]
      },
      {
        "frame": 88,
        "time": 2.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.17,
          -0.1479,
          -0.3776,
          0.8981
        ]
      },
      {
        "frame": 89,
        "time": 2.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.1634,
          -0.1454,
          -0.3668,
          0.9042
        ]
      },
      {
        "frame": 90,
        "time": 3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.1547,
          -0.1418,
          -0.3522,
          0.9121
        ]
      },
      {
        "frame": 91,
        "time": 3.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.1439,
          -0.137,
          -0.3337,
          0.9215
        ]
      },
      {
        "frame": 92,
        "time": 3.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.1315,
          -0.1308,
          -0.3117,
          0.9319
        ]
      },
      {
        "frame": 93,
        "time": 3.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.1178,
          -0.1232,
          -0.2864,
          0.9428
        ]
      },
      {
        "frame": 94,
        "time": 3.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.1032,
          -0.1141,
          -0.2586,
          0.9537
        ]
      },
      {
        "frame": 95,
        "time": 3.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0884,
          -0.1036,
          -0.2288,
          0.9639
        ]
      },
      {
        "frame": 96,
        "time": 3.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0739,
          -0.0921,
          -0.1981,
          0.9731
        ]
      },
      {
        "frame": 97,
        "time": 3.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0601,
          -0.0797,
          -0.1672,
          0.9809
        ]
      },
      {
        "frame": 98,
        "time": 3.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0475,
          -0.0669,
          -0.1371,
          0.9872
        ]
      },
      {
        "frame": 99,
        "time": 3.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0362,
          -0.0542,
          -0.1086,
          0.9919
        ]
      },
      {
        "frame": 100,
        "time": 3.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0266,
          -0.042,
          -0.0827,
          0.9953
        ]
      },
      {
        "frame": 101,
        "time": 3.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0186,
          -0.0309,
          -0.0598,
          0.9976
        ]
      },
      {
        "frame": 102,
        "time": 3.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0123,
          -0.0213,
          -0.0406,
          0.9989
        ]
      },
      {
        "frame": 103,
        "time": 3.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0074,
          -0.0134,
          -0.0253,
          0.9996
        ]
      },
      {
        "frame": 104,
        "time": 3.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.004,
          -0.0074,
          -0.0139,
          0.9999
        ]
      },
      {
        "frame": 105,
        "time": 3.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0018,
          -0.0034,
          -0.0063,
          1
        ]
      },
      {
        "frame": 106,
        "time": 3.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0006,
          -0.0011,
          -0.002,
          1
        ]
      },
      {
        "frame": 107,
        "time": 3.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0001,
          -0.0001,
          -0.0003,
          1
        ]
      },
      {
        "frame": 108,
        "time": 3.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      }
    ],
    "右ひじ": [
      {
        "frame": 0,
        "time": 0,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      },
      {
        "frame": 1,
        "time": 0.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0002,
          0.0001,
          0.0004,
          1
        ]
      },
      {
        "frame": 2,
        "time": 0.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0014,
          0.0008,
          0.0033,
          1
        ]
      },
      {
        "frame": 3,
        "time": 0.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0044,
          0.0026,
          0.0103,
          0.9999
        ]
      },
      {
        "frame": 4,
        "time": 0.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0096,
          0.0059,
          0.0227,
          0.9997
        ]
      },
      {
        "frame": 5,
        "time": 0.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0173,
          0.011,
          0.0411,
          0.9989
        ]
      },
      {
        "frame": 6,
        "time": 0.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0273,
          0.0184,
          0.0657,
          0.9973
        ]
      },
      {
        "frame": 7,
        "time": 0.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0393,
          0.0283,
          0.0961,
          0.9942
        ]
      },
      {
        "frame": 8,
        "time": 0.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0526,
          0.0409,
          0.1317,
          0.989
        ]
      },
      {
        "frame": 9,
        "time": 0.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0667,
          0.0564,
          0.1713,
          0.9813
        ]
      },
      {
        "frame": 10,
        "time": 0.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0806,
          0.0747,
          0.2135,
          0.9707
        ]
      },
      {
        "frame": 11,
        "time": 0.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0935,
          0.0955,
          0.257,
          0.9571
        ]
      },
      {
        "frame": 12,
        "time": 0.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.1048,
          0.1181,
          0.3002,
          0.9407
        ]
      },
      {
        "frame": 13,
        "time": 0.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.114,
          0.1419,
          0.3417,
          0.922
        ]
      },
      {
        "frame": 14,
        "time": 0.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.1207,
          0.166,
          0.3803,
          0.9018
        ]
      },
      {
        "frame": 15,
        "time": 0.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.1251,
          0.1894,
          0.4151,
          0.881
        ]
      },
      {
        "frame": 16,
        "time": 0.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.1275,
          0.2113,
          0.4455,
          0.8606
        ]
      },
      {
        "frame": 17,
        "time": 0.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.1281,
          0.2309,
          0.471,
          0.8417
        ]
      },
      {
        "frame": 18,
        "time": 0.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.1276,
          0.2475,
          0.4917,
          0.825
        ]
      },
      {
        "frame": 19,
        "time": 0.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.1266,
          0.2609,
          0.5076,
          0.8113
        ]
      },
      {
        "frame": 20,
        "time": 0.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.1254,
          0.2709,
          0.5191,
          0.8009
        ]
      },
      {
        "frame": 21,
        "time": 0.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.1244,
          0.2776,
          0.5266,
          0.7938
        ]
      },
      {
        "frame": 22,
        "time": 0.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.1238,
          0.2813,
          0.5308,
          0.7898
        ]
      },
      {
        "frame": 23,
        "time": 0.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.1235,
          0.2828,
          0.5325,
          0.7882
        ]
      },
      {
        "frame": 24,
        "time": 0.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.1235,
          0.2831,
          0.5327,
          0.7879
        ]
      },
      {
        "frame": 25,
        "time": 0.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.1235,
          0.2831,
          0.5327,
          0.7879
        ]
      },
      {
        "frame": 26,
        "time": 0.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.1235,
          0.2831,
          0.5327,
          0.7879
        ]
      },
      {
        "frame": 27,
        "time": 0.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.1235,
          0.2831,
          0.5327,
          0.7879
        ]
      },
      {
        "frame": 28,
        "time": 0.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.1235,
          0.2831,
          0.5327,
          0.7879
        ]
      },
      {
        "frame": 29,
        "time": 0.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.1235,
          0.2831,
          0.5327,
          0.7879
        ]
      },
      {
        "frame": 30,
        "time": 1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.1235,
          0.2831,
          0.5327,
          0.7879
        ]
      },
      {
        "frame": 31,
        "time": 1.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.1235,
          0.2831,
          0.5327,
          0.7879
        ]
      },
      {
        "frame": 32,
        "time": 1.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.1235,
          0.2831,
          0.5327,
          0.7879
        ]
      },
      {
        "frame": 33,
        "time": 1.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.1235,
          0.2831,
          0.5327,
          0.7879
        ]
      },
      {
        "frame": 34,
        "time": 1.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.1235,
          0.2831,
          0.5327,
          0.7879
        ]
      },
      {
        "frame": 35,
        "time": 1.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.1235,
          0.2831,
          0.5327,
          0.7879
        ]
      },
      {
        "frame": 36,
        "time": 1.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.1235,
          0.2831,
          0.5327,
          0.7879
        ]
      },
      {
        "frame": 37,
        "time": 1.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.1235,
          0.2831,
          0.5327,
          0.7879
        ]
      },
      {
        "frame": 38,
        "time": 1.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.1235,
          0.2831,
          0.5327,
          0.7879
        ]
      },
      {
        "frame": 39,
        "time": 1.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.1235,
          0.2831,
          0.5327,
          0.7879
        ]
      },
      {
        "frame": 40,
        "time": 1.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.1235,
          0.2831,
          0.5327,
          0.7879
        ]
      },
      {
        "frame": 41,
        "time": 1.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.1235,
          0.2831,
          0.5327,
          0.7879
        ]
      },
      {
        "frame": 42,
        "time": 1.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.1235,
          0.2831,
          0.5327,
          0.7879
        ]
      },
      {
        "frame": 43,
        "time": 1.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.1235,
          0.2831,
          0.5327,
          0.7879
        ]
      },
      {
        "frame": 44,
        "time": 1.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.1235,
          0.2831,
          0.5327,
          0.7879
        ]
      },
      {
        "frame": 45,
        "time": 1.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.1235,
          0.2831,
          0.5327,
          0.7879
        ]
      },
      {
        "frame": 46,
        "time": 1.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.1235,
          0.2831,
          0.5327,
          0.7879
        ]
      },
      {
        "frame": 47,
        "time": 1.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.1235,
          0.2831,
          0.5327,
          0.7879
        ]
      },
      {
        "frame": 48,
        "time": 1.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.1235,
          0.2831,
          0.5327,
          0.7879
        ]
      },
      {
        "frame": 49,
        "time": 1.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.1235,
          0.2831,
          0.5327,
          0.7879
        ]
      },
      {
        "frame": 50,
        "time": 1.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.1235,
          0.2831,
          0.5327,
          0.7879
        ]
      },
      {
        "frame": 51,
        "time": 1.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.1235,
          0.2831,
          0.5327,
          0.7879
        ]
      },
      {
        "frame": 52,
        "time": 1.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.1235,
          0.2831,
          0.5327,
          0.7879
        ]
      },
      {
        "frame": 53,
        "time": 1.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.1235,
          0.2831,
          0.5327,
          0.7879
        ]
      },
      {
        "frame": 54,
        "time": 1.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.1235,
          0.2831,
          0.5327,
          0.7879
        ]
      },
      {
        "frame": 55,
        "time": 1.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.1235,
          0.2831,
          0.5327,
          0.7879
        ]
      },
      {
        "frame": 56,
        "time": 1.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.1235,
          0.2831,
          0.5327,
          0.7879
        ]
      },
      {
        "frame": 57,
        "time": 1.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.1235,
          0.2831,
          0.5327,
          0.7879
        ]
      },
      {
        "frame": 58,
        "time": 1.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.1235,
          0.2831,
          0.5327,
          0.7879
        ]
      },
      {
        "frame": 59,
        "time": 1.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.1235,
          0.2831,
          0.5327,
          0.7879
        ]
      },
      {
        "frame": 60,
        "time": 2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.1235,
          0.2831,
          0.5327,
          0.7879
        ]
      },
      {
        "frame": 61,
        "time": 2.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.1235,
          0.2831,
          0.5327,
          0.7879
        ]
      },
      {
        "frame": 62,
        "time": 2.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.1235,
          0.2831,
          0.5327,
          0.7879
        ]
      },
      {
        "frame": 63,
        "time": 2.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.1235,
          0.2831,
          0.5327,
          0.7879
        ]
      },
      {
        "frame": 64,
        "time": 2.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.1235,
          0.2831,
          0.5327,
          0.7879
        ]
      },
      {
        "frame": 65,
        "time": 2.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.1235,
          0.2831,
          0.5327,
          0.7879
        ]
      },
      {
        "frame": 66,
        "time": 2.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.1235,
          0.2831,
          0.5327,
          0.7879
        ]
      },
      {
        "frame": 67,
        "time": 2.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.1235,
          0.2831,
          0.5327,
          0.7879
        ]
      },
      {
        "frame": 68,
        "time": 2.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.1235,
          0.2831,
          0.5327,
          0.7879
        ]
      },
      {
        "frame": 69,
        "time": 2.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.1235,
          0.2831,
          0.5327,
          0.7879
        ]
      },
      {
        "frame": 70,
        "time": 2.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.1235,
          0.2831,
          0.5327,
          0.7879
        ]
      },
      {
        "frame": 71,
        "time": 2.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.1235,
          0.2831,
          0.5327,
          0.7879
        ]
      },
      {
        "frame": 72,
        "time": 2.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.1235,
          0.2831,
          0.5327,
          0.7879
        ]
      },
      {
        "frame": 73,
        "time": 2.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.1235,
          0.2831,
          0.5327,
          0.7879
        ]
      },
      {
        "frame": 74,
        "time": 2.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.1235,
          0.2831,
          0.5327,
          0.7879
        ]
      },
      {
        "frame": 75,
        "time": 2.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.1235,
          0.2831,
          0.5327,
          0.7879
        ]
      },
      {
        "frame": 76,
        "time": 2.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.1235,
          0.2831,
          0.5327,
          0.7879
        ]
      },
      {
        "frame": 77,
        "time": 2.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.1235,
          0.2831,
          0.5327,
          0.7879
        ]
      },
      {
        "frame": 78,
        "time": 2.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.1235,
          0.2831,
          0.5327,
          0.7879
        ]
      },
      {
        "frame": 79,
        "time": 2.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.1235,
          0.2831,
          0.5327,
          0.7879
        ]
      },
      {
        "frame": 80,
        "time": 2.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.1235,
          0.2831,
          0.5327,
          0.7879
        ]
      },
      {
        "frame": 81,
        "time": 2.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.1235,
          0.2831,
          0.5327,
          0.7879
        ]
      },
      {
        "frame": 82,
        "time": 2.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.1235,
          0.2831,
          0.5327,
          0.7879
        ]
      },
      {
        "frame": 83,
        "time": 2.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.1235,
          0.2831,
          0.5327,
          0.7879
        ]
      },
      {
        "frame": 84,
        "time": 2.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.1235,
          0.2831,
          0.5327,
          0.7879
        ]
      },
      {
        "frame": 85,
        "time": 2.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.1235,
          0.2828,
          0.5325,
          0.7882
        ]
      },
      {
        "frame": 86,
        "time": 2.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.1238,
          0.2813,
          0.5308,
          0.7898
        ]
      },
      {
        "frame": 87,
        "time": 2.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.1244,
          0.2776,
          0.5266,
          0.7938
        ]
      },
      {
        "frame": 88,
        "time": 2.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.1254,
          0.2709,
          0.5191,
          0.8009
        ]
      },
      {
        "frame": 89,
        "time": 2.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.1266,
          0.2609,
          0.5076,
          0.8113
        ]
      },
      {
        "frame": 90,
        "time": 3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.1276,
          0.2475,
          0.4917,
          0.825
        ]
      },
      {
        "frame": 91,
        "time": 3.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.1281,
          0.2309,
          0.471,
          0.8417
        ]
      },
      {
        "frame": 92,
        "time": 3.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.1275,
          0.2113,
          0.4455,
          0.8606
        ]
      },
      {
        "frame": 93,
        "time": 3.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.1251,
          0.1894,
          0.4151,
          0.881
        ]
      },
      {
        "frame": 94,
        "time": 3.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.1207,
          0.166,
          0.3803,
          0.9018
        ]
      },
      {
        "frame": 95,
        "time": 3.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.114,
          0.1419,
          0.3417,
          0.922
        ]
      },
      {
        "frame": 96,
        "time": 3.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.1048,
          0.1181,
          0.3002,
          0.9407
        ]
      },
      {
        "frame": 97,
        "time": 3.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0935,
          0.0955,
          0.257,
          0.9571
        ]
      },
      {
        "frame": 98,
        "time": 3.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0806,
          0.0747,
          0.2135,
          0.9707
        ]
      },
      {
        "frame": 99,
        "time": 3.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0667,
          0.0564,
          0.1713,
          0.9813
        ]
      },
      {
        "frame": 100,
        "time": 3.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0526,
          0.0409,
          0.1317,
          0.989
        ]
      },
      {
        "frame": 101,
        "time": 3.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0393,
          0.0283,
          0.0961,
          0.9942
        ]
      },
      {
        "frame": 102,
        "time": 3.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0273,
          0.0184,
          0.0657,
          0.9973
        ]
      },
      {
        "frame": 103,
        "time": 3.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0173,
          0.011,
          0.0411,
          0.9989
        ]
      },
      {
        "frame": 104,
        "time": 3.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0096,
          0.0059,
          0.0227,
          0.9997
        ]
      },
      {
        "frame": 105,
        "time": 3.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0044,
          0.0026,
          0.0103,
          0.9999
        ]
      },
      {
        "frame": 106,
        "time": 3.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0014,
          0.0008,
          0.0033,
          1
        ]
      },
      {
        "frame": 107,
        "time": 3.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0002,
          0.0001,
          0.0004,
          1
        ]
      },
      {
        "frame": 108,
        "time": 3.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      }
    ],
    "右手首": [
      {
        "frame": 0,
        "time": 0,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      },
      {
        "frame": 1,
        "time": 0.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          -0.0001,
          1
        ]
      },
      {
        "frame": 2,
        "time": 0.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0003,
          0.0003,
          -0.0008,
          1
        ]
      },
      {
        "frame": 3,
        "time": 0.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0011,
          0.0007,
          -0.0026,
          1
        ]
      },
      {
        "frame": 4,
        "time": 0.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0027,
          0.0012,
          -0.0059,
          1
        ]
      },
      {
        "frame": 5,
        "time": 0.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0052,
          0.0011,
          -0.011,
          0.9999
        ]
      },
      {
        "frame": 6,
        "time": 0.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0087,
          -0.0005,
          -0.0184,
          0.9998
        ]
      },
      {
        "frame": 7,
        "time": 0.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0132,
          -0.0045,
          -0.0281,
          0.9995
        ]
      },
      {
        "frame": 8,
        "time": 0.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0188,
          -0.0119,
          -0.0404,
          0.9989
        ]
      },
      {
        "frame": 9,
        "time": 0.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0251,
          -0.0236,
          -0.0552,
          0.9979
        ]
      },
      {
        "frame": 10,
        "time": 0.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0319,
          -0.0397,
          -0.0721,
          0.9961
        ]
      },
      {
        "frame": 11,
        "time": 0.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0389,
          -0.06,
          -0.0906,
          0.9933
        ]
      },
      {
        "frame": 12,
        "time": 0.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0457,
          -0.0837,
          -0.1101,
          0.9893
        ]
      },
      {
        "frame": 13,
        "time": 0.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0517,
          -0.1093,
          -0.1297,
          0.9842
        ]
      },
      {
        "frame": 14,
        "time": 0.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0567,
          -0.135,
          -0.1486,
          0.978
        ]
      },
      {
        "frame": 15,
        "time": 0.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0601,
          -0.1585,
          -0.166,
          0.9714
        ]
      },
      {
        "frame": 16,
        "time": 0.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0619,
          -0.1779,
          -0.1812,
          0.9652
        ]
      },
      {
        "frame": 17,
        "time": 0.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.062,
          -0.1913,
          -0.1938,
          0.9602
        ]
      },
      {
        "frame": 18,
        "time": 0.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0604,
          -0.1975,
          -0.2033,
          0.9571
        ]
      },
      {
        "frame": 19,
        "time": 0.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0574,
          -0.1958,
          -0.2095,
          0.9563
        ]
      },
      {
        "frame": 20,
        "time": 0.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0531,
          -0.1863,
          -0.2123,
          0.9578
        ]
      },
      {
        "frame": 21,
        "time": 0.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.048,
          -0.1697,
          -0.2117,
          0.9613
        ]
      },
      {
        "frame": 22,
        "time": 0.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0424,
          -0.1473,
          -0.2083,
          0.966
        ]
      },
      {
        "frame": 23,
        "time": 0.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0367,
          -0.121,
          -0.2026,
          0.9711
        ]
      },
      {
        "frame": 24,
        "time": 0.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0314,
          -0.0925,
          -0.1956,
          0.9758
        ]
      },
      {
        "frame": 25,
        "time": 0.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0269,
          -0.0637,
          -0.1883,
          0.9797
        ]
      },
      {
        "frame": 26,
        "time": 0.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0233,
          -0.0359,
          -0.1814,
          0.9825
        ]
      },
      {
        "frame": 27,
        "time": 0.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.021,
          -0.0104,
          -0.1754,
          0.9842
        ]
      },
      {
        "frame": 28,
        "time": 0.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0201,
          0.0118,
          -0.1705,
          0.9851
        ]
      },
      {
        "frame": 29,
        "time": 0.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0209,
          0.0298,
          -0.167,
          0.9853
        ]
      },
      {
        "frame": 30,
        "time": 1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0233,
          0.0427,
          -0.1652,
          0.9851
        ]
      },
      {
        "frame": 31,
        "time": 1.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0276,
          0.05,
          -0.165,
          0.9846
        ]
      },
      {
        "frame": 32,
        "time": 1.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0335,
          0.0514,
          -0.1664,
          0.9841
        ]
      },
      {
        "frame": 33,
        "time": 1.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0409,
          0.0469,
          -0.1692,
          0.9836
        ]
      },
      {
        "frame": 34,
        "time": 1.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0494,
          0.0365,
          -0.1732,
          0.983
        ]
      },
      {
        "frame": 35,
        "time": 1.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0584,
          0.0206,
          -0.1781,
          0.9821
        ]
      },
      {
        "frame": 36,
        "time": 1.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0676,
          0.0001,
          -0.1835,
          0.9807
        ]
      },
      {
        "frame": 37,
        "time": 1.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0762,
          -0.0244,
          -0.1893,
          0.9787
        ]
      },
      {
        "frame": 38,
        "time": 1.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0838,
          -0.0517,
          -0.1951,
          0.9758
        ]
      },
      {
        "frame": 39,
        "time": 1.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0899,
          -0.0806,
          -0.2008,
          0.9722
        ]
      },
      {
        "frame": 40,
        "time": 1.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0941,
          -0.1098,
          -0.2061,
          0.9678
        ]
      },
      {
        "frame": 41,
        "time": 1.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0964,
          -0.1379,
          -0.2109,
          0.9629
        ]
      },
      {
        "frame": 42,
        "time": 1.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0966,
          -0.1638,
          -0.2153,
          0.9579
        ]
      },
      {
        "frame": 43,
        "time": 1.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.095,
          -0.1861,
          -0.219,
          0.9531
        ]
      },
      {
        "frame": 44,
        "time": 1.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0918,
          -0.204,
          -0.222,
          0.949
        ]
      },
      {
        "frame": 45,
        "time": 1.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0873,
          -0.2168,
          -0.2242,
          0.9461
        ]
      },
      {
        "frame": 46,
        "time": 1.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0818,
          -0.2238,
          -0.2255,
          0.9447
        ]
      },
      {
        "frame": 47,
        "time": 1.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0756,
          -0.2248,
          -0.2258,
          0.9448
        ]
      },
      {
        "frame": 48,
        "time": 1.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0691,
          -0.2199,
          -0.225,
          0.9467
        ]
      },
      {
        "frame": 49,
        "time": 1.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0623,
          -0.2091,
          -0.2229,
          0.9501
        ]
      },
      {
        "frame": 50,
        "time": 1.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0556,
          -0.1931,
          -0.2196,
          0.9547
        ]
      },
      {
        "frame": 51,
        "time": 1.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0489,
          -0.1725,
          -0.215,
          0.96
        ]
      },
      {
        "frame": 52,
        "time": 1.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0426,
          -0.1481,
          -0.2093,
          0.9656
        ]
      },
      {
        "frame": 53,
        "time": 1.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0367,
          -0.121,
          -0.2027,
          0.971
        ]
      },
      {
        "frame": 54,
        "time": 1.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0314,
          -0.0925,
          -0.1956,
          0.9758
        ]
      },
      {
        "frame": 55,
        "time": 1.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0269,
          -0.0637,
          -0.1883,
          0.9797
        ]
      },
      {
        "frame": 56,
        "time": 1.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0233,
          -0.0359,
          -0.1814,
          0.9825
        ]
      },
      {
        "frame": 57,
        "time": 1.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.021,
          -0.0104,
          -0.1754,
          0.9842
        ]
      },
      {
        "frame": 58,
        "time": 1.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0201,
          0.0118,
          -0.1705,
          0.9851
        ]
      },
      {
        "frame": 59,
        "time": 1.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0209,
          0.0298,
          -0.167,
          0.9853
        ]
      },
      {
        "frame": 60,
        "time": 2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0233,
          0.0427,
          -0.1652,
          0.9851
        ]
      },
      {
        "frame": 61,
        "time": 2.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0276,
          0.05,
          -0.165,
          0.9846
        ]
      },
      {
        "frame": 62,
        "time": 2.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0335,
          0.0514,
          -0.1664,
          0.9841
        ]
      },
      {
        "frame": 63,
        "time": 2.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0409,
          0.0469,
          -0.1692,
          0.9836
        ]
      },
      {
        "frame": 64,
        "time": 2.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0494,
          0.0365,
          -0.1732,
          0.983
        ]
      },
      {
        "frame": 65,
        "time": 2.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0584,
          0.0206,
          -0.1781,
          0.9821
        ]
      },
      {
        "frame": 66,
        "time": 2.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0676,
          0.0001,
          -0.1835,
          0.9807
        ]
      },
      {
        "frame": 67,
        "time": 2.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0762,
          -0.0244,
          -0.1893,
          0.9787
        ]
      },
      {
        "frame": 68,
        "time": 2.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0838,
          -0.0517,
          -0.1951,
          0.9758
        ]
      },
      {
        "frame": 69,
        "time": 2.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0899,
          -0.0806,
          -0.2008,
          0.9722
        ]
      },
      {
        "frame": 70,
        "time": 2.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0941,
          -0.1098,
          -0.2061,
          0.9678
        ]
      },
      {
        "frame": 71,
        "time": 2.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0964,
          -0.1379,
          -0.2109,
          0.9629
        ]
      },
      {
        "frame": 72,
        "time": 2.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0966,
          -0.1638,
          -0.2153,
          0.9579
        ]
      },
      {
        "frame": 73,
        "time": 2.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.095,
          -0.1861,
          -0.219,
          0.9531
        ]
      },
      {
        "frame": 74,
        "time": 2.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0918,
          -0.204,
          -0.222,
          0.949
        ]
      },
      {
        "frame": 75,
        "time": 2.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0873,
          -0.2168,
          -0.2242,
          0.9461
        ]
      },
      {
        "frame": 76,
        "time": 2.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0818,
          -0.2238,
          -0.2255,
          0.9447
        ]
      },
      {
        "frame": 77,
        "time": 2.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0756,
          -0.2248,
          -0.2258,
          0.9448
        ]
      },
      {
        "frame": 78,
        "time": 2.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0691,
          -0.2199,
          -0.225,
          0.9467
        ]
      },
      {
        "frame": 79,
        "time": 2.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0623,
          -0.2091,
          -0.2229,
          0.9501
        ]
      },
      {
        "frame": 80,
        "time": 2.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0556,
          -0.1931,
          -0.2196,
          0.9547
        ]
      },
      {
        "frame": 81,
        "time": 2.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0489,
          -0.1725,
          -0.215,
          0.96
        ]
      },
      {
        "frame": 82,
        "time": 2.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0426,
          -0.1481,
          -0.2093,
          0.9656
        ]
      },
      {
        "frame": 83,
        "time": 2.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0367,
          -0.121,
          -0.2027,
          0.971
        ]
      },
      {
        "frame": 84,
        "time": 2.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0314,
          -0.0925,
          -0.1956,
          0.9758
        ]
      },
      {
        "frame": 85,
        "time": 2.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0269,
          -0.0637,
          -0.1882,
          0.9797
        ]
      },
      {
        "frame": 86,
        "time": 2.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0233,
          -0.0357,
          -0.1805,
          0.9826
        ]
      },
      {
        "frame": 87,
        "time": 2.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0209,
          -0.0101,
          -0.1726,
          0.9847
        ]
      },
      {
        "frame": 88,
        "time": 2.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0201,
          0.0116,
          -0.1645,
          0.9861
        ]
      },
      {
        "frame": 89,
        "time": 2.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.021,
          0.0283,
          -0.1563,
          0.9871
        ]
      },
      {
        "frame": 90,
        "time": 3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0236,
          0.0388,
          -0.148,
          0.9879
        ]
      },
      {
        "frame": 91,
        "time": 3.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0273,
          0.043,
          -0.1396,
          0.9889
        ]
      },
      {
        "frame": 92,
        "time": 3.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0317,
          0.0412,
          -0.1309,
          0.99
        ]
      },
      {
        "frame": 93,
        "time": 3.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0357,
          0.0343,
          -0.1216,
          0.9913
        ]
      },
      {
        "frame": 94,
        "time": 3.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0385,
          0.0237,
          -0.1118,
          0.9927
        ]
      },
      {
        "frame": 95,
        "time": 3.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0395,
          0.0113,
          -0.1013,
          0.994
        ]
      },
      {
        "frame": 96,
        "time": 3.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0384,
          -0.001,
          -0.0903,
          0.9952
        ]
      },
      {
        "frame": 97,
        "time": 3.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0353,
          -0.0117,
          -0.0787,
          0.9962
        ]
      },
      {
        "frame": 98,
        "time": 3.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0307,
          -0.0194,
          -0.067,
          0.9971
        ]
      },
      {
        "frame": 99,
        "time": 3.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0251,
          -0.0236,
          -0.0552,
          0.9979
        ]
      },
      {
        "frame": 100,
        "time": 3.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0192,
          -0.0242,
          -0.0437,
          0.9986
        ]
      },
      {
        "frame": 101,
        "time": 3.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0137,
          -0.0219,
          -0.0328,
          0.9991
        ]
      },
      {
        "frame": 102,
        "time": 3.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.009,
          -0.0175,
          -0.0231,
          0.9995
        ]
      },
      {
        "frame": 103,
        "time": 3.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0053,
          -0.0123,
          -0.0148,
          0.9998
        ]
      },
      {
        "frame": 104,
        "time": 3.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0027,
          -0.0074,
          -0.0083,
          0.9999
        ]
      },
      {
        "frame": 105,
        "time": 3.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0011,
          -0.0035,
          -0.0038,
          1
        ]
      },
      {
        "frame": 106,
        "time": 3.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0003,
          -0.0012,
          -0.0012,
          1
        ]
      },
      {
        "frame": 107,
        "time": 3.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          -0.0002,
          -0.0002,
          1
        ]
      },
      {
        "frame": 108,
        "time": 3.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      }
    ],
    "右親指０": [
      {
        "frame": 0,
        "time": 0,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      },
      {
        "frame": 1,
        "time": 0.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0001,
          0.0001,
          0.0001,
          1
        ]
      },
      {
        "frame": 2,
        "time": 0.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0004,
          0.0005,
          0.0005,
          1
        ]
      },
      {
        "frame": 3,
        "time": 0.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0012,
          0.0016,
          0.0014,
          1
        ]
      },
      {
        "frame": 4,
        "time": 0.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0027,
          0.0035,
          0.0032,
          1
        ]
      },
      {
        "frame": 5,
        "time": 0.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0049,
          0.0064,
          0.0058,
          1
        ]
      },
      {
        "frame": 6,
        "time": 0.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0079,
          0.0103,
          0.0094,
          0.9999
        ]
      },
      {
        "frame": 7,
        "time": 0.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0116,
          0.0151,
          0.0139,
          0.9997
        ]
      },
      {
        "frame": 8,
        "time": 0.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0161,
          0.0207,
          0.0192,
          0.9995
        ]
      },
      {
        "frame": 9,
        "time": 0.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0213,
          0.027,
          0.0253,
          0.9991
        ]
      },
      {
        "frame": 10,
        "time": 0.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.027,
          0.0338,
          0.0321,
          0.9985
        ]
      },
      {
        "frame": 11,
        "time": 0.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0332,
          0.041,
          0.0393,
          0.9978
        ]
      },
      {
        "frame": 12,
        "time": 0.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0397,
          0.0482,
          0.0468,
          0.997
        ]
      },
      {
        "frame": 13,
        "time": 0.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0462,
          0.0554,
          0.0543,
          0.9959
        ]
      },
      {
        "frame": 14,
        "time": 0.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0526,
          0.0622,
          0.0618,
          0.9948
        ]
      },
      {
        "frame": 15,
        "time": 0.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0588,
          0.0686,
          0.0688,
          0.9935
        ]
      },
      {
        "frame": 16,
        "time": 0.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0645,
          0.0744,
          0.0754,
          0.9923
        ]
      },
      {
        "frame": 17,
        "time": 0.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0696,
          0.0794,
          0.0812,
          0.9911
        ]
      },
      {
        "frame": 18,
        "time": 0.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0739,
          0.0836,
          0.0861,
          0.99
        ]
      },
      {
        "frame": 19,
        "time": 0.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0774,
          0.087,
          0.09,
          0.9891
        ]
      },
      {
        "frame": 20,
        "time": 0.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.08,
          0.0895,
          0.093,
          0.9884
        ]
      },
      {
        "frame": 21,
        "time": 0.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0817,
          0.0911,
          0.095,
          0.9879
        ]
      },
      {
        "frame": 22,
        "time": 0.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0827,
          0.092,
          0.0961,
          0.9876
        ]
      },
      {
        "frame": 23,
        "time": 0.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0831,
          0.0924,
          0.0966,
          0.9875
        ]
      },
      {
        "frame": 24,
        "time": 0.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0832,
          0.0924,
          0.0966,
          0.9875
        ]
      },
      {
        "frame": 25,
        "time": 0.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0832,
          0.0924,
          0.0966,
          0.9875
        ]
      },
      {
        "frame": 26,
        "time": 0.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0832,
          0.0924,
          0.0966,
          0.9875
        ]
      },
      {
        "frame": 27,
        "time": 0.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0832,
          0.0924,
          0.0966,
          0.9875
        ]
      },
      {
        "frame": 28,
        "time": 0.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0832,
          0.0924,
          0.0966,
          0.9875
        ]
      },
      {
        "frame": 29,
        "time": 0.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0832,
          0.0924,
          0.0966,
          0.9875
        ]
      },
      {
        "frame": 30,
        "time": 1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0832,
          0.0924,
          0.0966,
          0.9875
        ]
      },
      {
        "frame": 31,
        "time": 1.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0832,
          0.0924,
          0.0966,
          0.9875
        ]
      },
      {
        "frame": 32,
        "time": 1.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0832,
          0.0924,
          0.0966,
          0.9875
        ]
      },
      {
        "frame": 33,
        "time": 1.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0832,
          0.0924,
          0.0966,
          0.9875
        ]
      },
      {
        "frame": 34,
        "time": 1.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0832,
          0.0924,
          0.0966,
          0.9875
        ]
      },
      {
        "frame": 35,
        "time": 1.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0832,
          0.0924,
          0.0966,
          0.9875
        ]
      },
      {
        "frame": 36,
        "time": 1.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0832,
          0.0924,
          0.0966,
          0.9875
        ]
      },
      {
        "frame": 37,
        "time": 1.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0832,
          0.0924,
          0.0966,
          0.9875
        ]
      },
      {
        "frame": 38,
        "time": 1.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0832,
          0.0924,
          0.0966,
          0.9875
        ]
      },
      {
        "frame": 39,
        "time": 1.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0832,
          0.0924,
          0.0966,
          0.9875
        ]
      },
      {
        "frame": 40,
        "time": 1.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0832,
          0.0924,
          0.0966,
          0.9875
        ]
      },
      {
        "frame": 41,
        "time": 1.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0832,
          0.0924,
          0.0966,
          0.9875
        ]
      },
      {
        "frame": 42,
        "time": 1.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0832,
          0.0924,
          0.0966,
          0.9875
        ]
      },
      {
        "frame": 43,
        "time": 1.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0832,
          0.0924,
          0.0966,
          0.9875
        ]
      },
      {
        "frame": 44,
        "time": 1.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0832,
          0.0924,
          0.0966,
          0.9875
        ]
      },
      {
        "frame": 45,
        "time": 1.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0832,
          0.0924,
          0.0966,
          0.9875
        ]
      },
      {
        "frame": 46,
        "time": 1.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0832,
          0.0924,
          0.0966,
          0.9875
        ]
      },
      {
        "frame": 47,
        "time": 1.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0832,
          0.0924,
          0.0966,
          0.9875
        ]
      },
      {
        "frame": 48,
        "time": 1.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0832,
          0.0924,
          0.0966,
          0.9875
        ]
      },
      {
        "frame": 49,
        "time": 1.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0832,
          0.0924,
          0.0966,
          0.9875
        ]
      },
      {
        "frame": 50,
        "time": 1.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0832,
          0.0924,
          0.0966,
          0.9875
        ]
      },
      {
        "frame": 51,
        "time": 1.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0832,
          0.0924,
          0.0966,
          0.9875
        ]
      },
      {
        "frame": 52,
        "time": 1.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0832,
          0.0924,
          0.0966,
          0.9875
        ]
      },
      {
        "frame": 53,
        "time": 1.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0832,
          0.0924,
          0.0966,
          0.9875
        ]
      },
      {
        "frame": 54,
        "time": 1.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0832,
          0.0924,
          0.0966,
          0.9875
        ]
      },
      {
        "frame": 55,
        "time": 1.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0832,
          0.0924,
          0.0966,
          0.9875
        ]
      },
      {
        "frame": 56,
        "time": 1.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0832,
          0.0924,
          0.0966,
          0.9875
        ]
      },
      {
        "frame": 57,
        "time": 1.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0832,
          0.0924,
          0.0966,
          0.9875
        ]
      },
      {
        "frame": 58,
        "time": 1.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0832,
          0.0924,
          0.0966,
          0.9875
        ]
      },
      {
        "frame": 59,
        "time": 1.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0832,
          0.0924,
          0.0966,
          0.9875
        ]
      },
      {
        "frame": 60,
        "time": 2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0832,
          0.0924,
          0.0966,
          0.9875
        ]
      },
      {
        "frame": 61,
        "time": 2.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0832,
          0.0924,
          0.0966,
          0.9875
        ]
      },
      {
        "frame": 62,
        "time": 2.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0832,
          0.0924,
          0.0966,
          0.9875
        ]
      },
      {
        "frame": 63,
        "time": 2.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0832,
          0.0924,
          0.0966,
          0.9875
        ]
      },
      {
        "frame": 64,
        "time": 2.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0832,
          0.0924,
          0.0966,
          0.9875
        ]
      },
      {
        "frame": 65,
        "time": 2.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0832,
          0.0924,
          0.0966,
          0.9875
        ]
      },
      {
        "frame": 66,
        "time": 2.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0832,
          0.0924,
          0.0966,
          0.9875
        ]
      },
      {
        "frame": 67,
        "time": 2.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0832,
          0.0924,
          0.0966,
          0.9875
        ]
      },
      {
        "frame": 68,
        "time": 2.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0832,
          0.0924,
          0.0966,
          0.9875
        ]
      },
      {
        "frame": 69,
        "time": 2.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0832,
          0.0924,
          0.0966,
          0.9875
        ]
      },
      {
        "frame": 70,
        "time": 2.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0832,
          0.0924,
          0.0966,
          0.9875
        ]
      },
      {
        "frame": 71,
        "time": 2.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0832,
          0.0924,
          0.0966,
          0.9875
        ]
      },
      {
        "frame": 72,
        "time": 2.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0832,
          0.0924,
          0.0966,
          0.9875
        ]
      },
      {
        "frame": 73,
        "time": 2.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0832,
          0.0924,
          0.0966,
          0.9875
        ]
      },
      {
        "frame": 74,
        "time": 2.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0832,
          0.0924,
          0.0966,
          0.9875
        ]
      },
      {
        "frame": 75,
        "time": 2.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0832,
          0.0924,
          0.0966,
          0.9875
        ]
      },
      {
        "frame": 76,
        "time": 2.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0832,
          0.0924,
          0.0966,
          0.9875
        ]
      },
      {
        "frame": 77,
        "time": 2.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0832,
          0.0924,
          0.0966,
          0.9875
        ]
      },
      {
        "frame": 78,
        "time": 2.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0832,
          0.0924,
          0.0966,
          0.9875
        ]
      },
      {
        "frame": 79,
        "time": 2.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0832,
          0.0924,
          0.0966,
          0.9875
        ]
      },
      {
        "frame": 80,
        "time": 2.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0832,
          0.0924,
          0.0966,
          0.9875
        ]
      },
      {
        "frame": 81,
        "time": 2.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0832,
          0.0924,
          0.0966,
          0.9875
        ]
      },
      {
        "frame": 82,
        "time": 2.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0832,
          0.0924,
          0.0966,
          0.9875
        ]
      },
      {
        "frame": 83,
        "time": 2.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0832,
          0.0924,
          0.0966,
          0.9875
        ]
      },
      {
        "frame": 84,
        "time": 2.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0832,
          0.0924,
          0.0966,
          0.9875
        ]
      },
      {
        "frame": 85,
        "time": 2.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0831,
          0.0924,
          0.0966,
          0.9875
        ]
      },
      {
        "frame": 86,
        "time": 2.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0827,
          0.092,
          0.0961,
          0.9876
        ]
      },
      {
        "frame": 87,
        "time": 2.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0817,
          0.0911,
          0.095,
          0.9879
        ]
      },
      {
        "frame": 88,
        "time": 2.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.08,
          0.0895,
          0.093,
          0.9884
        ]
      },
      {
        "frame": 89,
        "time": 2.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0774,
          0.087,
          0.09,
          0.9891
        ]
      },
      {
        "frame": 90,
        "time": 3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0739,
          0.0836,
          0.0861,
          0.99
        ]
      },
      {
        "frame": 91,
        "time": 3.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0696,
          0.0794,
          0.0812,
          0.9911
        ]
      },
      {
        "frame": 92,
        "time": 3.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0645,
          0.0744,
          0.0754,
          0.9923
        ]
      },
      {
        "frame": 93,
        "time": 3.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0588,
          0.0686,
          0.0688,
          0.9935
        ]
      },
      {
        "frame": 94,
        "time": 3.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0526,
          0.0622,
          0.0618,
          0.9948
        ]
      },
      {
        "frame": 95,
        "time": 3.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0462,
          0.0554,
          0.0543,
          0.9959
        ]
      },
      {
        "frame": 96,
        "time": 3.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0397,
          0.0482,
          0.0468,
          0.997
        ]
      },
      {
        "frame": 97,
        "time": 3.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0332,
          0.041,
          0.0393,
          0.9978
        ]
      },
      {
        "frame": 98,
        "time": 3.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.027,
          0.0338,
          0.0321,
          0.9985
        ]
      },
      {
        "frame": 99,
        "time": 3.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0213,
          0.027,
          0.0253,
          0.9991
        ]
      },
      {
        "frame": 100,
        "time": 3.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0161,
          0.0207,
          0.0192,
          0.9995
        ]
      },
      {
        "frame": 101,
        "time": 3.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0116,
          0.0151,
          0.0139,
          0.9997
        ]
      },
      {
        "frame": 102,
        "time": 3.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0079,
          0.0103,
          0.0094,
          0.9999
        ]
      },
      {
        "frame": 103,
        "time": 3.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0049,
          0.0064,
          0.0058,
          1
        ]
      },
      {
        "frame": 104,
        "time": 3.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0027,
          0.0035,
          0.0032,
          1
        ]
      },
      {
        "frame": 105,
        "time": 3.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0012,
          0.0016,
          0.0014,
          1
        ]
      },
      {
        "frame": 106,
        "time": 3.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0004,
          0.0005,
          0.0005,
          1
        ]
      },
      {
        "frame": 107,
        "time": 3.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0001,
          0.0001,
          0.0001,
          1
        ]
      },
      {
        "frame": 108,
        "time": 3.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      }
    ],
    "右親指１": [
      {
        "frame": 0,
        "time": 0,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      },
      {
        "frame": 1,
        "time": 0.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      },
      {
        "frame": 2,
        "time": 0.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0003,
          1
        ]
      },
      {
        "frame": 3,
        "time": 0.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.001,
          1
        ]
      },
      {
        "frame": 4,
        "time": 0.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0021,
          1
        ]
      },
      {
        "frame": 5,
        "time": 0.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0039,
          1
        ]
      },
      {
        "frame": 6,
        "time": 0.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0062,
          1
        ]
      },
      {
        "frame": 7,
        "time": 0.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0091,
          1
        ]
      },
      {
        "frame": 8,
        "time": 0.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0126,
          0.9999
        ]
      },
      {
        "frame": 9,
        "time": 0.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0165,
          0.9999
        ]
      },
      {
        "frame": 10,
        "time": 0.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0208,
          0.9998
        ]
      },
      {
        "frame": 11,
        "time": 0.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0253,
          0.9997
        ]
      },
      {
        "frame": 12,
        "time": 0.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.03,
          0.9996
        ]
      },
      {
        "frame": 13,
        "time": 0.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0347,
          0.9994
        ]
      },
      {
        "frame": 14,
        "time": 0.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0392,
          0.9992
        ]
      },
      {
        "frame": 15,
        "time": 0.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0435,
          0.9991
        ]
      },
      {
        "frame": 16,
        "time": 0.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0474,
          0.9989
        ]
      },
      {
        "frame": 17,
        "time": 0.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0508,
          0.9987
        ]
      },
      {
        "frame": 18,
        "time": 0.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0538,
          0.9986
        ]
      },
      {
        "frame": 19,
        "time": 0.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0561,
          0.9984
        ]
      },
      {
        "frame": 20,
        "time": 0.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0578,
          0.9983
        ]
      },
      {
        "frame": 21,
        "time": 0.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.059,
          0.9983
        ]
      },
      {
        "frame": 22,
        "time": 0.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0597,
          0.9982
        ]
      },
      {
        "frame": 23,
        "time": 0.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0599,
          0.9982
        ]
      },
      {
        "frame": 24,
        "time": 0.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 25,
        "time": 0.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 26,
        "time": 0.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 27,
        "time": 0.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 28,
        "time": 0.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 29,
        "time": 0.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 30,
        "time": 1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 31,
        "time": 1.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 32,
        "time": 1.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 33,
        "time": 1.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 34,
        "time": 1.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 35,
        "time": 1.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 36,
        "time": 1.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 37,
        "time": 1.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 38,
        "time": 1.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 39,
        "time": 1.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 40,
        "time": 1.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 41,
        "time": 1.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 42,
        "time": 1.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 43,
        "time": 1.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 44,
        "time": 1.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 45,
        "time": 1.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 46,
        "time": 1.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 47,
        "time": 1.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 48,
        "time": 1.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 49,
        "time": 1.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 50,
        "time": 1.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 51,
        "time": 1.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 52,
        "time": 1.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 53,
        "time": 1.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 54,
        "time": 1.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 55,
        "time": 1.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 56,
        "time": 1.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 57,
        "time": 1.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 58,
        "time": 1.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 59,
        "time": 1.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 60,
        "time": 2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 61,
        "time": 2.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 62,
        "time": 2.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 63,
        "time": 2.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 64,
        "time": 2.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 65,
        "time": 2.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 66,
        "time": 2.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 67,
        "time": 2.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 68,
        "time": 2.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 69,
        "time": 2.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 70,
        "time": 2.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 71,
        "time": 2.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 72,
        "time": 2.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 73,
        "time": 2.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 74,
        "time": 2.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 75,
        "time": 2.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 76,
        "time": 2.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 77,
        "time": 2.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 78,
        "time": 2.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 79,
        "time": 2.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 80,
        "time": 2.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 81,
        "time": 2.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 82,
        "time": 2.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 83,
        "time": 2.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 84,
        "time": 2.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 85,
        "time": 2.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0599,
          0.9982
        ]
      },
      {
        "frame": 86,
        "time": 2.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0597,
          0.9982
        ]
      },
      {
        "frame": 87,
        "time": 2.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.059,
          0.9983
        ]
      },
      {
        "frame": 88,
        "time": 2.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0578,
          0.9983
        ]
      },
      {
        "frame": 89,
        "time": 2.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0561,
          0.9984
        ]
      },
      {
        "frame": 90,
        "time": 3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0538,
          0.9986
        ]
      },
      {
        "frame": 91,
        "time": 3.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0508,
          0.9987
        ]
      },
      {
        "frame": 92,
        "time": 3.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0474,
          0.9989
        ]
      },
      {
        "frame": 93,
        "time": 3.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0435,
          0.9991
        ]
      },
      {
        "frame": 94,
        "time": 3.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0392,
          0.9992
        ]
      },
      {
        "frame": 95,
        "time": 3.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0347,
          0.9994
        ]
      },
      {
        "frame": 96,
        "time": 3.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.03,
          0.9996
        ]
      },
      {
        "frame": 97,
        "time": 3.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0253,
          0.9997
        ]
      },
      {
        "frame": 98,
        "time": 3.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0208,
          0.9998
        ]
      },
      {
        "frame": 99,
        "time": 3.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0165,
          0.9999
        ]
      },
      {
        "frame": 100,
        "time": 3.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0126,
          0.9999
        ]
      },
      {
        "frame": 101,
        "time": 3.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0091,
          1
        ]
      },
      {
        "frame": 102,
        "time": 3.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0062,
          1
        ]
      },
      {
        "frame": 103,
        "time": 3.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0039,
          1
        ]
      },
      {
        "frame": 104,
        "time": 3.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0021,
          1
        ]
      },
      {
        "frame": 105,
        "time": 3.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.001,
          1
        ]
      },
      {
        "frame": 106,
        "time": 3.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0003,
          1
        ]
      },
      {
        "frame": 107,
        "time": 3.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      },
      {
        "frame": 108,
        "time": 3.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      }
    ],
    "右親指２": [
      {
        "frame": 0,
        "time": 0,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      },
      {
        "frame": 1,
        "time": 0.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      },
      {
        "frame": 2,
        "time": 0.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0002,
          1
        ]
      },
      {
        "frame": 3,
        "time": 0.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0006,
          1
        ]
      },
      {
        "frame": 4,
        "time": 0.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0014,
          1
        ]
      },
      {
        "frame": 5,
        "time": 0.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0026,
          1
        ]
      },
      {
        "frame": 6,
        "time": 0.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0041,
          1
        ]
      },
      {
        "frame": 7,
        "time": 0.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0061,
          1
        ]
      },
      {
        "frame": 8,
        "time": 0.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0084,
          1
        ]
      },
      {
        "frame": 9,
        "time": 0.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.011,
          0.9999
        ]
      },
      {
        "frame": 10,
        "time": 0.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0139,
          0.9999
        ]
      },
      {
        "frame": 11,
        "time": 0.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0169,
          0.9999
        ]
      },
      {
        "frame": 12,
        "time": 0.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.02,
          0.9998
        ]
      },
      {
        "frame": 13,
        "time": 0.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0231,
          0.9997
        ]
      },
      {
        "frame": 14,
        "time": 0.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0261,
          0.9997
        ]
      },
      {
        "frame": 15,
        "time": 0.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.029,
          0.9996
        ]
      },
      {
        "frame": 16,
        "time": 0.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0316,
          0.9995
        ]
      },
      {
        "frame": 17,
        "time": 0.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0339,
          0.9994
        ]
      },
      {
        "frame": 18,
        "time": 0.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0359,
          0.9994
        ]
      },
      {
        "frame": 19,
        "time": 0.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0374,
          0.9993
        ]
      },
      {
        "frame": 20,
        "time": 0.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0386,
          0.9993
        ]
      },
      {
        "frame": 21,
        "time": 0.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0393,
          0.9992
        ]
      },
      {
        "frame": 22,
        "time": 0.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0398,
          0.9992
        ]
      },
      {
        "frame": 23,
        "time": 0.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 24,
        "time": 0.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 25,
        "time": 0.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 26,
        "time": 0.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 27,
        "time": 0.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 28,
        "time": 0.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 29,
        "time": 0.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 30,
        "time": 1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 31,
        "time": 1.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 32,
        "time": 1.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 33,
        "time": 1.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 34,
        "time": 1.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 35,
        "time": 1.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 36,
        "time": 1.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 37,
        "time": 1.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 38,
        "time": 1.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 39,
        "time": 1.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 40,
        "time": 1.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 41,
        "time": 1.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 42,
        "time": 1.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 43,
        "time": 1.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 44,
        "time": 1.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 45,
        "time": 1.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 46,
        "time": 1.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 47,
        "time": 1.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 48,
        "time": 1.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 49,
        "time": 1.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 50,
        "time": 1.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 51,
        "time": 1.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 52,
        "time": 1.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 53,
        "time": 1.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 54,
        "time": 1.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 55,
        "time": 1.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 56,
        "time": 1.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 57,
        "time": 1.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 58,
        "time": 1.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 59,
        "time": 1.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 60,
        "time": 2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 61,
        "time": 2.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 62,
        "time": 2.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 63,
        "time": 2.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 64,
        "time": 2.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 65,
        "time": 2.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 66,
        "time": 2.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 67,
        "time": 2.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 68,
        "time": 2.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 69,
        "time": 2.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 70,
        "time": 2.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 71,
        "time": 2.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 72,
        "time": 2.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 73,
        "time": 2.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 74,
        "time": 2.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 75,
        "time": 2.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 76,
        "time": 2.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 77,
        "time": 2.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 78,
        "time": 2.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 79,
        "time": 2.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 80,
        "time": 2.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 81,
        "time": 2.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 82,
        "time": 2.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 83,
        "time": 2.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 84,
        "time": 2.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 85,
        "time": 2.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 86,
        "time": 2.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0398,
          0.9992
        ]
      },
      {
        "frame": 87,
        "time": 2.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0393,
          0.9992
        ]
      },
      {
        "frame": 88,
        "time": 2.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0386,
          0.9993
        ]
      },
      {
        "frame": 89,
        "time": 2.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0374,
          0.9993
        ]
      },
      {
        "frame": 90,
        "time": 3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0359,
          0.9994
        ]
      },
      {
        "frame": 91,
        "time": 3.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0339,
          0.9994
        ]
      },
      {
        "frame": 92,
        "time": 3.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0316,
          0.9995
        ]
      },
      {
        "frame": 93,
        "time": 3.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.029,
          0.9996
        ]
      },
      {
        "frame": 94,
        "time": 3.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0261,
          0.9997
        ]
      },
      {
        "frame": 95,
        "time": 3.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0231,
          0.9997
        ]
      },
      {
        "frame": 96,
        "time": 3.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.02,
          0.9998
        ]
      },
      {
        "frame": 97,
        "time": 3.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0169,
          0.9999
        ]
      },
      {
        "frame": 98,
        "time": 3.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0139,
          0.9999
        ]
      },
      {
        "frame": 99,
        "time": 3.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.011,
          0.9999
        ]
      },
      {
        "frame": 100,
        "time": 3.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0084,
          1
        ]
      },
      {
        "frame": 101,
        "time": 3.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0061,
          1
        ]
      },
      {
        "frame": 102,
        "time": 3.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0041,
          1
        ]
      },
      {
        "frame": 103,
        "time": 3.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0026,
          1
        ]
      },
      {
        "frame": 104,
        "time": 3.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0014,
          1
        ]
      },
      {
        "frame": 105,
        "time": 3.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0006,
          1
        ]
      },
      {
        "frame": 106,
        "time": 3.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0002,
          1
        ]
      },
      {
        "frame": 107,
        "time": 3.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      },
      {
        "frame": 108,
        "time": 3.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      }
    ],
    "右人指１": [
      {
        "frame": 0,
        "time": 0,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      },
      {
        "frame": 1,
        "time": 0.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0001,
          1
        ]
      },
      {
        "frame": 2,
        "time": 0.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          -0.0002,
          0.0004,
          1
        ]
      },
      {
        "frame": 3,
        "time": 0.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          -0.0005,
          0.0013,
          1
        ]
      },
      {
        "frame": 4,
        "time": 0.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          -0.0011,
          0.0028,
          1
        ]
      },
      {
        "frame": 5,
        "time": 0.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          -0.0019,
          0.005,
          1
        ]
      },
      {
        "frame": 6,
        "time": 0.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          -0.0031,
          0.0078,
          1
        ]
      },
      {
        "frame": 7,
        "time": 0.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0001,
          -0.0046,
          0.011,
          0.9999
        ]
      },
      {
        "frame": 8,
        "time": 0.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0001,
          -0.0063,
          0.0145,
          0.9999
        ]
      },
      {
        "frame": 9,
        "time": 0.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0001,
          -0.0083,
          0.0179,
          0.9998
        ]
      },
      {
        "frame": 10,
        "time": 0.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0002,
          -0.0104,
          0.0211,
          0.9997
        ]
      },
      {
        "frame": 11,
        "time": 0.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0003,
          -0.0127,
          0.0239,
          0.9996
        ]
      },
      {
        "frame": 12,
        "time": 0.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0004,
          -0.015,
          0.0263,
          0.9995
        ]
      },
      {
        "frame": 13,
        "time": 0.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0005,
          -0.0173,
          0.0283,
          0.9995
        ]
      },
      {
        "frame": 14,
        "time": 0.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0006,
          -0.0196,
          0.0298,
          0.9994
        ]
      },
      {
        "frame": 15,
        "time": 0.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0007,
          -0.0217,
          0.0312,
          0.9993
        ]
      },
      {
        "frame": 16,
        "time": 0.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0008,
          -0.0237,
          0.0326,
          0.9992
        ]
      },
      {
        "frame": 17,
        "time": 0.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0009,
          -0.0254,
          0.0341,
          0.9991
        ]
      },
      {
        "frame": 18,
        "time": 0.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.001,
          -0.0269,
          0.0359,
          0.999
        ]
      },
      {
        "frame": 19,
        "time": 0.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0011,
          -0.028,
          0.0381,
          0.9989
        ]
      },
      {
        "frame": 20,
        "time": 0.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0012,
          -0.0289,
          0.0408,
          0.9988
        ]
      },
      {
        "frame": 21,
        "time": 0.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0013,
          -0.0295,
          0.0439,
          0.9986
        ]
      },
      {
        "frame": 22,
        "time": 0.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0014,
          -0.0298,
          0.0473,
          0.9984
        ]
      },
      {
        "frame": 23,
        "time": 0.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0015,
          -0.0299,
          0.0511,
          0.9982
        ]
      },
      {
        "frame": 24,
        "time": 0.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0017,
          -0.03,
          0.055,
          0.998
        ]
      },
      {
        "frame": 25,
        "time": 0.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0018,
          -0.0299,
          0.0591,
          0.9978
        ]
      },
      {
        "frame": 26,
        "time": 0.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0019,
          -0.0299,
          0.0633,
          0.9975
        ]
      },
      {
        "frame": 27,
        "time": 0.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.002,
          -0.0299,
          0.0673,
          0.9973
        ]
      },
      {
        "frame": 28,
        "time": 0.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0021,
          -0.0299,
          0.071,
          0.997
        ]
      },
      {
        "frame": 29,
        "time": 0.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0022,
          -0.0299,
          0.0742,
          0.9968
        ]
      },
      {
        "frame": 30,
        "time": 1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0023,
          -0.0299,
          0.0768,
          0.9966
        ]
      },
      {
        "frame": 31,
        "time": 1.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0024,
          -0.0299,
          0.0786,
          0.9965
        ]
      },
      {
        "frame": 32,
        "time": 1.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0024,
          -0.0299,
          0.0797,
          0.9964
        ]
      },
      {
        "frame": 33,
        "time": 1.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0024,
          -0.0299,
          0.0798,
          0.9964
        ]
      },
      {
        "frame": 34,
        "time": 1.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0024,
          -0.0299,
          0.0791,
          0.9964
        ]
      },
      {
        "frame": 35,
        "time": 1.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0023,
          -0.0299,
          0.0776,
          0.9965
        ]
      },
      {
        "frame": 36,
        "time": 1.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0023,
          -0.0299,
          0.0753,
          0.9967
        ]
      },
      {
        "frame": 37,
        "time": 1.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0022,
          -0.0299,
          0.0723,
          0.9969
        ]
      },
      {
        "frame": 38,
        "time": 1.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0021,
          -0.0299,
          0.0688,
          0.9972
        ]
      },
      {
        "frame": 39,
        "time": 1.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0019,
          -0.0299,
          0.0649,
          0.9974
        ]
      },
      {
        "frame": 40,
        "time": 1.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0018,
          -0.0299,
          0.0607,
          0.9977
        ]
      },
      {
        "frame": 41,
        "time": 1.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0017,
          -0.0299,
          0.0566,
          0.9979
        ]
      },
      {
        "frame": 42,
        "time": 1.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0016,
          -0.03,
          0.0526,
          0.9982
        ]
      },
      {
        "frame": 43,
        "time": 1.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0015,
          -0.03,
          0.0489,
          0.9984
        ]
      },
      {
        "frame": 44,
        "time": 1.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0014,
          -0.03,
          0.0457,
          0.9985
        ]
      },
      {
        "frame": 45,
        "time": 1.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0013,
          -0.03,
          0.0431,
          0.9986
        ]
      },
      {
        "frame": 46,
        "time": 1.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0012,
          -0.03,
          0.0412,
          0.9987
        ]
      },
      {
        "frame": 47,
        "time": 1.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0012,
          -0.03,
          0.0402,
          0.9987
        ]
      },
      {
        "frame": 48,
        "time": 1.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0012,
          -0.03,
          0.04,
          0.9987
        ]
      },
      {
        "frame": 49,
        "time": 1.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0012,
          -0.03,
          0.0407,
          0.9987
        ]
      },
      {
        "frame": 50,
        "time": 1.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0013,
          -0.03,
          0.0423,
          0.9987
        ]
      },
      {
        "frame": 51,
        "time": 1.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0013,
          -0.03,
          0.0446,
          0.9986
        ]
      },
      {
        "frame": 52,
        "time": 1.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0014,
          -0.03,
          0.0476,
          0.9984
        ]
      },
      {
        "frame": 53,
        "time": 1.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0015,
          -0.03,
          0.0511,
          0.9982
        ]
      },
      {
        "frame": 54,
        "time": 1.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0017,
          -0.03,
          0.055,
          0.998
        ]
      },
      {
        "frame": 55,
        "time": 1.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0018,
          -0.0299,
          0.0591,
          0.9978
        ]
      },
      {
        "frame": 56,
        "time": 1.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0019,
          -0.0299,
          0.0633,
          0.9975
        ]
      },
      {
        "frame": 57,
        "time": 1.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.002,
          -0.0299,
          0.0673,
          0.9973
        ]
      },
      {
        "frame": 58,
        "time": 1.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0021,
          -0.0299,
          0.071,
          0.997
        ]
      },
      {
        "frame": 59,
        "time": 1.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0022,
          -0.0299,
          0.0742,
          0.9968
        ]
      },
      {
        "frame": 60,
        "time": 2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0023,
          -0.0299,
          0.0768,
          0.9966
        ]
      },
      {
        "frame": 61,
        "time": 2.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0024,
          -0.0299,
          0.0786,
          0.9965
        ]
      },
      {
        "frame": 62,
        "time": 2.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0024,
          -0.0299,
          0.0797,
          0.9964
        ]
      },
      {
        "frame": 63,
        "time": 2.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0024,
          -0.0299,
          0.0798,
          0.9964
        ]
      },
      {
        "frame": 64,
        "time": 2.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0024,
          -0.0299,
          0.0791,
          0.9964
        ]
      },
      {
        "frame": 65,
        "time": 2.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0023,
          -0.0299,
          0.0776,
          0.9965
        ]
      },
      {
        "frame": 66,
        "time": 2.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0023,
          -0.0299,
          0.0753,
          0.9967
        ]
      },
      {
        "frame": 67,
        "time": 2.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0022,
          -0.0299,
          0.0723,
          0.9969
        ]
      },
      {
        "frame": 68,
        "time": 2.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0021,
          -0.0299,
          0.0688,
          0.9972
        ]
      },
      {
        "frame": 69,
        "time": 2.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0019,
          -0.0299,
          0.0649,
          0.9974
        ]
      },
      {
        "frame": 70,
        "time": 2.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0018,
          -0.0299,
          0.0607,
          0.9977
        ]
      },
      {
        "frame": 71,
        "time": 2.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0017,
          -0.0299,
          0.0566,
          0.9979
        ]
      },
      {
        "frame": 72,
        "time": 2.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0016,
          -0.03,
          0.0526,
          0.9982
        ]
      },
      {
        "frame": 73,
        "time": 2.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0015,
          -0.03,
          0.0489,
          0.9984
        ]
      },
      {
        "frame": 74,
        "time": 2.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0014,
          -0.03,
          0.0457,
          0.9985
        ]
      },
      {
        "frame": 75,
        "time": 2.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0013,
          -0.03,
          0.0431,
          0.9986
        ]
      },
      {
        "frame": 76,
        "time": 2.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0012,
          -0.03,
          0.0412,
          0.9987
        ]
      },
      {
        "frame": 77,
        "time": 2.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0012,
          -0.03,
          0.0402,
          0.9987
        ]
      },
      {
        "frame": 78,
        "time": 2.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0012,
          -0.03,
          0.04,
          0.9987
        ]
      },
      {
        "frame": 79,
        "time": 2.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0012,
          -0.03,
          0.0407,
          0.9987
        ]
      },
      {
        "frame": 80,
        "time": 2.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0013,
          -0.03,
          0.0423,
          0.9987
        ]
      },
      {
        "frame": 81,
        "time": 2.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0013,
          -0.03,
          0.0446,
          0.9986
        ]
      },
      {
        "frame": 82,
        "time": 2.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0014,
          -0.03,
          0.0476,
          0.9984
        ]
      },
      {
        "frame": 83,
        "time": 2.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0015,
          -0.03,
          0.0511,
          0.9982
        ]
      },
      {
        "frame": 84,
        "time": 2.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0017,
          -0.03,
          0.055,
          0.998
        ]
      },
      {
        "frame": 85,
        "time": 2.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0018,
          -0.0299,
          0.0591,
          0.9978
        ]
      },
      {
        "frame": 86,
        "time": 2.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0019,
          -0.0298,
          0.063,
          0.9976
        ]
      },
      {
        "frame": 87,
        "time": 2.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.002,
          -0.0294,
          0.0662,
          0.9974
        ]
      },
      {
        "frame": 88,
        "time": 2.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.002,
          -0.0289,
          0.0685,
          0.9972
        ]
      },
      {
        "frame": 89,
        "time": 2.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0019,
          -0.028,
          0.0694,
          0.9972
        ]
      },
      {
        "frame": 90,
        "time": 3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0019,
          -0.0268,
          0.0689,
          0.9973
        ]
      },
      {
        "frame": 91,
        "time": 3.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0017,
          -0.0254,
          0.0667,
          0.9974
        ]
      },
      {
        "frame": 92,
        "time": 3.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0015,
          -0.0237,
          0.063,
          0.9977
        ]
      },
      {
        "frame": 93,
        "time": 3.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0013,
          -0.0217,
          0.0579,
          0.9981
        ]
      },
      {
        "frame": 94,
        "time": 3.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.001,
          -0.0196,
          0.0518,
          0.9985
        ]
      },
      {
        "frame": 95,
        "time": 3.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0008,
          -0.0173,
          0.0449,
          0.9988
        ]
      },
      {
        "frame": 96,
        "time": 3.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0006,
          -0.015,
          0.0377,
          0.9992
        ]
      },
      {
        "frame": 97,
        "time": 3.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0004,
          -0.0127,
          0.0306,
          0.9995
        ]
      },
      {
        "frame": 98,
        "time": 3.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0002,
          -0.0104,
          0.0239,
          0.9997
        ]
      },
      {
        "frame": 99,
        "time": 3.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0001,
          -0.0083,
          0.0179,
          0.9998
        ]
      },
      {
        "frame": 100,
        "time": 3.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          -0.0001,
          -0.0063,
          0.0128,
          0.9999
        ]
      },
      {
        "frame": 101,
        "time": 3.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          -0.0046,
          0.0086,
          1
        ]
      },
      {
        "frame": 102,
        "time": 3.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          -0.0031,
          0.0054,
          1
        ]
      },
      {
        "frame": 103,
        "time": 3.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          -0.0019,
          0.0032,
          1
        ]
      },
      {
        "frame": 104,
        "time": 3.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          -0.0011,
          0.0016,
          1
        ]
      },
      {
        "frame": 105,
        "time": 3.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          -0.0005,
          0.0007,
          1
        ]
      },
      {
        "frame": 106,
        "time": 3.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          -0.0002,
          0.0002,
          1
        ]
      },
      {
        "frame": 107,
        "time": 3.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      },
      {
        "frame": 108,
        "time": 3.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      }
    ],
    "右人指２": [
      {
        "frame": 0,
        "time": 0,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      },
      {
        "frame": 1,
        "time": 0.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      },
      {
        "frame": 2,
        "time": 0.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0003,
          1
        ]
      },
      {
        "frame": 3,
        "time": 0.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0008,
          1
        ]
      },
      {
        "frame": 4,
        "time": 0.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0018,
          1
        ]
      },
      {
        "frame": 5,
        "time": 0.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0032,
          1
        ]
      },
      {
        "frame": 6,
        "time": 0.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0052,
          1
        ]
      },
      {
        "frame": 7,
        "time": 0.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0076,
          1
        ]
      },
      {
        "frame": 8,
        "time": 0.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0105,
          0.9999
        ]
      },
      {
        "frame": 9,
        "time": 0.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0138,
          0.9999
        ]
      },
      {
        "frame": 10,
        "time": 0.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0173,
          0.9998
        ]
      },
      {
        "frame": 11,
        "time": 0.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0211,
          0.9998
        ]
      },
      {
        "frame": 12,
        "time": 0.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.025,
          0.9997
        ]
      },
      {
        "frame": 13,
        "time": 0.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0289,
          0.9996
        ]
      },
      {
        "frame": 14,
        "time": 0.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0327,
          0.9995
        ]
      },
      {
        "frame": 15,
        "time": 0.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0362,
          0.9993
        ]
      },
      {
        "frame": 16,
        "time": 0.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0395,
          0.9992
        ]
      },
      {
        "frame": 17,
        "time": 0.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0424,
          0.9991
        ]
      },
      {
        "frame": 18,
        "time": 0.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0448,
          0.999
        ]
      },
      {
        "frame": 19,
        "time": 0.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0468,
          0.9989
        ]
      },
      {
        "frame": 20,
        "time": 0.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0482,
          0.9988
        ]
      },
      {
        "frame": 21,
        "time": 0.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0492,
          0.9988
        ]
      },
      {
        "frame": 22,
        "time": 0.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0497,
          0.9988
        ]
      },
      {
        "frame": 23,
        "time": 0.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0499,
          0.9988
        ]
      },
      {
        "frame": 24,
        "time": 0.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 25,
        "time": 0.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 26,
        "time": 0.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 27,
        "time": 0.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 28,
        "time": 0.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 29,
        "time": 0.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 30,
        "time": 1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 31,
        "time": 1.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 32,
        "time": 1.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 33,
        "time": 1.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 34,
        "time": 1.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 35,
        "time": 1.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 36,
        "time": 1.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 37,
        "time": 1.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 38,
        "time": 1.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 39,
        "time": 1.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 40,
        "time": 1.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 41,
        "time": 1.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 42,
        "time": 1.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 43,
        "time": 1.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 44,
        "time": 1.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 45,
        "time": 1.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 46,
        "time": 1.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 47,
        "time": 1.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 48,
        "time": 1.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 49,
        "time": 1.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 50,
        "time": 1.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 51,
        "time": 1.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 52,
        "time": 1.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 53,
        "time": 1.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 54,
        "time": 1.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 55,
        "time": 1.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 56,
        "time": 1.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 57,
        "time": 1.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 58,
        "time": 1.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 59,
        "time": 1.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 60,
        "time": 2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 61,
        "time": 2.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 62,
        "time": 2.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 63,
        "time": 2.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 64,
        "time": 2.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 65,
        "time": 2.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 66,
        "time": 2.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 67,
        "time": 2.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 68,
        "time": 2.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 69,
        "time": 2.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 70,
        "time": 2.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 71,
        "time": 2.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 72,
        "time": 2.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 73,
        "time": 2.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 74,
        "time": 2.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 75,
        "time": 2.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 76,
        "time": 2.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 77,
        "time": 2.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 78,
        "time": 2.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 79,
        "time": 2.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 80,
        "time": 2.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 81,
        "time": 2.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 82,
        "time": 2.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 83,
        "time": 2.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 84,
        "time": 2.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 85,
        "time": 2.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0499,
          0.9988
        ]
      },
      {
        "frame": 86,
        "time": 2.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0497,
          0.9988
        ]
      },
      {
        "frame": 87,
        "time": 2.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0492,
          0.9988
        ]
      },
      {
        "frame": 88,
        "time": 2.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0482,
          0.9988
        ]
      },
      {
        "frame": 89,
        "time": 2.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0468,
          0.9989
        ]
      },
      {
        "frame": 90,
        "time": 3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0448,
          0.999
        ]
      },
      {
        "frame": 91,
        "time": 3.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0424,
          0.9991
        ]
      },
      {
        "frame": 92,
        "time": 3.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0395,
          0.9992
        ]
      },
      {
        "frame": 93,
        "time": 3.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0362,
          0.9993
        ]
      },
      {
        "frame": 94,
        "time": 3.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0327,
          0.9995
        ]
      },
      {
        "frame": 95,
        "time": 3.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0289,
          0.9996
        ]
      },
      {
        "frame": 96,
        "time": 3.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.025,
          0.9997
        ]
      },
      {
        "frame": 97,
        "time": 3.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0211,
          0.9998
        ]
      },
      {
        "frame": 98,
        "time": 3.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0173,
          0.9998
        ]
      },
      {
        "frame": 99,
        "time": 3.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0138,
          0.9999
        ]
      },
      {
        "frame": 100,
        "time": 3.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0105,
          0.9999
        ]
      },
      {
        "frame": 101,
        "time": 3.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0076,
          1
        ]
      },
      {
        "frame": 102,
        "time": 3.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0052,
          1
        ]
      },
      {
        "frame": 103,
        "time": 3.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0032,
          1
        ]
      },
      {
        "frame": 104,
        "time": 3.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0018,
          1
        ]
      },
      {
        "frame": 105,
        "time": 3.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0008,
          1
        ]
      },
      {
        "frame": 106,
        "time": 3.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0003,
          1
        ]
      },
      {
        "frame": 107,
        "time": 3.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      },
      {
        "frame": 108,
        "time": 3.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      }
    ],
    "右人指３": [
      {
        "frame": 0,
        "time": 0,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      },
      {
        "frame": 1,
        "time": 0.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      },
      {
        "frame": 2,
        "time": 0.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0002,
          1
        ]
      },
      {
        "frame": 3,
        "time": 0.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0006,
          1
        ]
      },
      {
        "frame": 4,
        "time": 0.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0014,
          1
        ]
      },
      {
        "frame": 5,
        "time": 0.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0026,
          1
        ]
      },
      {
        "frame": 6,
        "time": 0.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0041,
          1
        ]
      },
      {
        "frame": 7,
        "time": 0.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0061,
          1
        ]
      },
      {
        "frame": 8,
        "time": 0.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0084,
          1
        ]
      },
      {
        "frame": 9,
        "time": 0.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.011,
          0.9999
        ]
      },
      {
        "frame": 10,
        "time": 0.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0139,
          0.9999
        ]
      },
      {
        "frame": 11,
        "time": 0.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0169,
          0.9999
        ]
      },
      {
        "frame": 12,
        "time": 0.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.02,
          0.9998
        ]
      },
      {
        "frame": 13,
        "time": 0.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0231,
          0.9997
        ]
      },
      {
        "frame": 14,
        "time": 0.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0261,
          0.9997
        ]
      },
      {
        "frame": 15,
        "time": 0.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.029,
          0.9996
        ]
      },
      {
        "frame": 16,
        "time": 0.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0316,
          0.9995
        ]
      },
      {
        "frame": 17,
        "time": 0.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0339,
          0.9994
        ]
      },
      {
        "frame": 18,
        "time": 0.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0359,
          0.9994
        ]
      },
      {
        "frame": 19,
        "time": 0.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0374,
          0.9993
        ]
      },
      {
        "frame": 20,
        "time": 0.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0386,
          0.9993
        ]
      },
      {
        "frame": 21,
        "time": 0.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0393,
          0.9992
        ]
      },
      {
        "frame": 22,
        "time": 0.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0398,
          0.9992
        ]
      },
      {
        "frame": 23,
        "time": 0.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 24,
        "time": 0.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 25,
        "time": 0.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 26,
        "time": 0.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 27,
        "time": 0.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 28,
        "time": 0.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 29,
        "time": 0.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 30,
        "time": 1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 31,
        "time": 1.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 32,
        "time": 1.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 33,
        "time": 1.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 34,
        "time": 1.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 35,
        "time": 1.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 36,
        "time": 1.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 37,
        "time": 1.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 38,
        "time": 1.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 39,
        "time": 1.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 40,
        "time": 1.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 41,
        "time": 1.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 42,
        "time": 1.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 43,
        "time": 1.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 44,
        "time": 1.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 45,
        "time": 1.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 46,
        "time": 1.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 47,
        "time": 1.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 48,
        "time": 1.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 49,
        "time": 1.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 50,
        "time": 1.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 51,
        "time": 1.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 52,
        "time": 1.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 53,
        "time": 1.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 54,
        "time": 1.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 55,
        "time": 1.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 56,
        "time": 1.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 57,
        "time": 1.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 58,
        "time": 1.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 59,
        "time": 1.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 60,
        "time": 2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 61,
        "time": 2.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 62,
        "time": 2.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 63,
        "time": 2.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 64,
        "time": 2.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 65,
        "time": 2.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 66,
        "time": 2.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 67,
        "time": 2.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 68,
        "time": 2.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 69,
        "time": 2.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 70,
        "time": 2.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 71,
        "time": 2.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 72,
        "time": 2.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 73,
        "time": 2.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 74,
        "time": 2.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 75,
        "time": 2.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 76,
        "time": 2.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 77,
        "time": 2.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 78,
        "time": 2.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 79,
        "time": 2.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 80,
        "time": 2.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 81,
        "time": 2.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 82,
        "time": 2.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 83,
        "time": 2.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 84,
        "time": 2.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 85,
        "time": 2.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 86,
        "time": 2.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0398,
          0.9992
        ]
      },
      {
        "frame": 87,
        "time": 2.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0393,
          0.9992
        ]
      },
      {
        "frame": 88,
        "time": 2.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0386,
          0.9993
        ]
      },
      {
        "frame": 89,
        "time": 2.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0374,
          0.9993
        ]
      },
      {
        "frame": 90,
        "time": 3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0359,
          0.9994
        ]
      },
      {
        "frame": 91,
        "time": 3.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0339,
          0.9994
        ]
      },
      {
        "frame": 92,
        "time": 3.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0316,
          0.9995
        ]
      },
      {
        "frame": 93,
        "time": 3.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.029,
          0.9996
        ]
      },
      {
        "frame": 94,
        "time": 3.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0261,
          0.9997
        ]
      },
      {
        "frame": 95,
        "time": 3.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0231,
          0.9997
        ]
      },
      {
        "frame": 96,
        "time": 3.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.02,
          0.9998
        ]
      },
      {
        "frame": 97,
        "time": 3.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0169,
          0.9999
        ]
      },
      {
        "frame": 98,
        "time": 3.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0139,
          0.9999
        ]
      },
      {
        "frame": 99,
        "time": 3.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.011,
          0.9999
        ]
      },
      {
        "frame": 100,
        "time": 3.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0084,
          1
        ]
      },
      {
        "frame": 101,
        "time": 3.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0061,
          1
        ]
      },
      {
        "frame": 102,
        "time": 3.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0041,
          1
        ]
      },
      {
        "frame": 103,
        "time": 3.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0026,
          1
        ]
      },
      {
        "frame": 104,
        "time": 3.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0014,
          1
        ]
      },
      {
        "frame": 105,
        "time": 3.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0006,
          1
        ]
      },
      {
        "frame": 106,
        "time": 3.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0002,
          1
        ]
      },
      {
        "frame": 107,
        "time": 3.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      },
      {
        "frame": 108,
        "time": 3.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      }
    ],
    "右中指１": [
      {
        "frame": 0,
        "time": 0,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      },
      {
        "frame": 1,
        "time": 0.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      },
      {
        "frame": 2,
        "time": 0.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0004,
          1
        ]
      },
      {
        "frame": 3,
        "time": 0.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0012,
          1
        ]
      },
      {
        "frame": 4,
        "time": 0.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0026,
          1
        ]
      },
      {
        "frame": 5,
        "time": 0.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0047,
          1
        ]
      },
      {
        "frame": 6,
        "time": 0.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0073,
          1
        ]
      },
      {
        "frame": 7,
        "time": 0.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0103,
          0.9999
        ]
      },
      {
        "frame": 8,
        "time": 0.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0133,
          0.9999
        ]
      },
      {
        "frame": 9,
        "time": 0.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0161,
          0.9999
        ]
      },
      {
        "frame": 10,
        "time": 0.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0185,
          0.9998
        ]
      },
      {
        "frame": 11,
        "time": 0.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0204,
          0.9998
        ]
      },
      {
        "frame": 12,
        "time": 0.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0216,
          0.9998
        ]
      },
      {
        "frame": 13,
        "time": 0.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0221,
          0.9998
        ]
      },
      {
        "frame": 14,
        "time": 0.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0222,
          0.9998
        ]
      },
      {
        "frame": 15,
        "time": 0.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.022,
          0.9998
        ]
      },
      {
        "frame": 16,
        "time": 0.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0218,
          0.9998
        ]
      },
      {
        "frame": 17,
        "time": 0.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0218,
          0.9998
        ]
      },
      {
        "frame": 18,
        "time": 0.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0224,
          0.9997
        ]
      },
      {
        "frame": 19,
        "time": 0.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0237,
          0.9997
        ]
      },
      {
        "frame": 20,
        "time": 0.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0259,
          0.9997
        ]
      },
      {
        "frame": 21,
        "time": 0.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0288,
          0.9996
        ]
      },
      {
        "frame": 22,
        "time": 0.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0324,
          0.9995
        ]
      },
      {
        "frame": 23,
        "time": 0.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0367,
          0.9993
        ]
      },
      {
        "frame": 24,
        "time": 0.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0414,
          0.9991
        ]
      },
      {
        "frame": 25,
        "time": 0.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0465,
          0.9989
        ]
      },
      {
        "frame": 26,
        "time": 0.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0517,
          0.9987
        ]
      },
      {
        "frame": 27,
        "time": 0.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0568,
          0.9984
        ]
      },
      {
        "frame": 28,
        "time": 0.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0617,
          0.9981
        ]
      },
      {
        "frame": 29,
        "time": 0.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.066,
          0.9978
        ]
      },
      {
        "frame": 30,
        "time": 1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0696,
          0.9976
        ]
      },
      {
        "frame": 31,
        "time": 1.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0724,
          0.9974
        ]
      },
      {
        "frame": 32,
        "time": 1.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0742,
          0.9972
        ]
      },
      {
        "frame": 33,
        "time": 1.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0749,
          0.9972
        ]
      },
      {
        "frame": 34,
        "time": 1.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0746,
          0.9972
        ]
      },
      {
        "frame": 35,
        "time": 1.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0731,
          0.9973
        ]
      },
      {
        "frame": 36,
        "time": 1.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0707,
          0.9975
        ]
      },
      {
        "frame": 37,
        "time": 1.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0673,
          0.9977
        ]
      },
      {
        "frame": 38,
        "time": 1.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0632,
          0.998
        ]
      },
      {
        "frame": 39,
        "time": 1.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0585,
          0.9983
        ]
      },
      {
        "frame": 40,
        "time": 1.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0535,
          0.9986
        ]
      },
      {
        "frame": 41,
        "time": 1.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0483,
          0.9988
        ]
      },
      {
        "frame": 42,
        "time": 1.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0431,
          0.9991
        ]
      },
      {
        "frame": 43,
        "time": 1.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0383,
          0.9993
        ]
      },
      {
        "frame": 44,
        "time": 1.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0339,
          0.9994
        ]
      },
      {
        "frame": 45,
        "time": 1.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0303,
          0.9995
        ]
      },
      {
        "frame": 46,
        "time": 1.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0275,
          0.9996
        ]
      },
      {
        "frame": 47,
        "time": 1.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0257,
          0.9997
        ]
      },
      {
        "frame": 48,
        "time": 1.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.025,
          0.9997
        ]
      },
      {
        "frame": 49,
        "time": 1.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0254,
          0.9997
        ]
      },
      {
        "frame": 50,
        "time": 1.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0268,
          0.9996
        ]
      },
      {
        "frame": 51,
        "time": 1.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0293,
          0.9996
        ]
      },
      {
        "frame": 52,
        "time": 1.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0326,
          0.9995
        ]
      },
      {
        "frame": 53,
        "time": 1.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0367,
          0.9993
        ]
      },
      {
        "frame": 54,
        "time": 1.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0414,
          0.9991
        ]
      },
      {
        "frame": 55,
        "time": 1.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0465,
          0.9989
        ]
      },
      {
        "frame": 56,
        "time": 1.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0517,
          0.9987
        ]
      },
      {
        "frame": 57,
        "time": 1.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0568,
          0.9984
        ]
      },
      {
        "frame": 58,
        "time": 1.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0617,
          0.9981
        ]
      },
      {
        "frame": 59,
        "time": 1.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.066,
          0.9978
        ]
      },
      {
        "frame": 60,
        "time": 2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0696,
          0.9976
        ]
      },
      {
        "frame": 61,
        "time": 2.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0724,
          0.9974
        ]
      },
      {
        "frame": 62,
        "time": 2.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0742,
          0.9972
        ]
      },
      {
        "frame": 63,
        "time": 2.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0749,
          0.9972
        ]
      },
      {
        "frame": 64,
        "time": 2.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0746,
          0.9972
        ]
      },
      {
        "frame": 65,
        "time": 2.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0731,
          0.9973
        ]
      },
      {
        "frame": 66,
        "time": 2.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0707,
          0.9975
        ]
      },
      {
        "frame": 67,
        "time": 2.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0673,
          0.9977
        ]
      },
      {
        "frame": 68,
        "time": 2.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0632,
          0.998
        ]
      },
      {
        "frame": 69,
        "time": 2.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0585,
          0.9983
        ]
      },
      {
        "frame": 70,
        "time": 2.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0535,
          0.9986
        ]
      },
      {
        "frame": 71,
        "time": 2.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0483,
          0.9988
        ]
      },
      {
        "frame": 72,
        "time": 2.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0431,
          0.9991
        ]
      },
      {
        "frame": 73,
        "time": 2.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0383,
          0.9993
        ]
      },
      {
        "frame": 74,
        "time": 2.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0339,
          0.9994
        ]
      },
      {
        "frame": 75,
        "time": 2.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0303,
          0.9995
        ]
      },
      {
        "frame": 76,
        "time": 2.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0275,
          0.9996
        ]
      },
      {
        "frame": 77,
        "time": 2.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0257,
          0.9997
        ]
      },
      {
        "frame": 78,
        "time": 2.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.025,
          0.9997
        ]
      },
      {
        "frame": 79,
        "time": 2.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0254,
          0.9997
        ]
      },
      {
        "frame": 80,
        "time": 2.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0268,
          0.9996
        ]
      },
      {
        "frame": 81,
        "time": 2.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0293,
          0.9996
        ]
      },
      {
        "frame": 82,
        "time": 2.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0326,
          0.9995
        ]
      },
      {
        "frame": 83,
        "time": 2.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0367,
          0.9993
        ]
      },
      {
        "frame": 84,
        "time": 2.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0414,
          0.9991
        ]
      },
      {
        "frame": 85,
        "time": 2.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0464,
          0.9989
        ]
      },
      {
        "frame": 86,
        "time": 2.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0514,
          0.9987
        ]
      },
      {
        "frame": 87,
        "time": 2.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0559,
          0.9984
        ]
      },
      {
        "frame": 88,
        "time": 2.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0595,
          0.9982
        ]
      },
      {
        "frame": 89,
        "time": 2.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0618,
          0.9981
        ]
      },
      {
        "frame": 90,
        "time": 3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0624,
          0.998
        ]
      },
      {
        "frame": 91,
        "time": 3.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0614,
          0.9981
        ]
      },
      {
        "frame": 92,
        "time": 3.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0586,
          0.9983
        ]
      },
      {
        "frame": 93,
        "time": 3.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0543,
          0.9985
        ]
      },
      {
        "frame": 94,
        "time": 3.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0487,
          0.9988
        ]
      },
      {
        "frame": 95,
        "time": 3.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0423,
          0.9991
        ]
      },
      {
        "frame": 96,
        "time": 3.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0354,
          0.9994
        ]
      },
      {
        "frame": 97,
        "time": 3.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0284,
          0.9996
        ]
      },
      {
        "frame": 98,
        "time": 3.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0219,
          0.9998
        ]
      },
      {
        "frame": 99,
        "time": 3.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0161,
          0.9999
        ]
      },
      {
        "frame": 100,
        "time": 3.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0112,
          0.9999
        ]
      },
      {
        "frame": 101,
        "time": 3.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0073,
          1
        ]
      },
      {
        "frame": 102,
        "time": 3.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0045,
          1
        ]
      },
      {
        "frame": 103,
        "time": 3.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0025,
          1
        ]
      },
      {
        "frame": 104,
        "time": 3.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0012,
          1
        ]
      },
      {
        "frame": 105,
        "time": 3.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0005,
          1
        ]
      },
      {
        "frame": 106,
        "time": 3.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0001,
          1
        ]
      },
      {
        "frame": 107,
        "time": 3.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      },
      {
        "frame": 108,
        "time": 3.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      }
    ],
    "右中指２": [
      {
        "frame": 0,
        "time": 0,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      },
      {
        "frame": 1,
        "time": 0.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      },
      {
        "frame": 2,
        "time": 0.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0003,
          1
        ]
      },
      {
        "frame": 3,
        "time": 0.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0008,
          1
        ]
      },
      {
        "frame": 4,
        "time": 0.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0018,
          1
        ]
      },
      {
        "frame": 5,
        "time": 0.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0032,
          1
        ]
      },
      {
        "frame": 6,
        "time": 0.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0052,
          1
        ]
      },
      {
        "frame": 7,
        "time": 0.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0076,
          1
        ]
      },
      {
        "frame": 8,
        "time": 0.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0105,
          0.9999
        ]
      },
      {
        "frame": 9,
        "time": 0.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0138,
          0.9999
        ]
      },
      {
        "frame": 10,
        "time": 0.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0173,
          0.9998
        ]
      },
      {
        "frame": 11,
        "time": 0.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0211,
          0.9998
        ]
      },
      {
        "frame": 12,
        "time": 0.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.025,
          0.9997
        ]
      },
      {
        "frame": 13,
        "time": 0.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0289,
          0.9996
        ]
      },
      {
        "frame": 14,
        "time": 0.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0327,
          0.9995
        ]
      },
      {
        "frame": 15,
        "time": 0.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0362,
          0.9993
        ]
      },
      {
        "frame": 16,
        "time": 0.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0395,
          0.9992
        ]
      },
      {
        "frame": 17,
        "time": 0.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0424,
          0.9991
        ]
      },
      {
        "frame": 18,
        "time": 0.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0448,
          0.999
        ]
      },
      {
        "frame": 19,
        "time": 0.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0468,
          0.9989
        ]
      },
      {
        "frame": 20,
        "time": 0.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0482,
          0.9988
        ]
      },
      {
        "frame": 21,
        "time": 0.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0492,
          0.9988
        ]
      },
      {
        "frame": 22,
        "time": 0.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0497,
          0.9988
        ]
      },
      {
        "frame": 23,
        "time": 0.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0499,
          0.9988
        ]
      },
      {
        "frame": 24,
        "time": 0.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 25,
        "time": 0.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 26,
        "time": 0.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 27,
        "time": 0.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 28,
        "time": 0.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 29,
        "time": 0.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 30,
        "time": 1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 31,
        "time": 1.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 32,
        "time": 1.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 33,
        "time": 1.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 34,
        "time": 1.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 35,
        "time": 1.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 36,
        "time": 1.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 37,
        "time": 1.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 38,
        "time": 1.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 39,
        "time": 1.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 40,
        "time": 1.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 41,
        "time": 1.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 42,
        "time": 1.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 43,
        "time": 1.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 44,
        "time": 1.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 45,
        "time": 1.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 46,
        "time": 1.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 47,
        "time": 1.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 48,
        "time": 1.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 49,
        "time": 1.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 50,
        "time": 1.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 51,
        "time": 1.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 52,
        "time": 1.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 53,
        "time": 1.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 54,
        "time": 1.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 55,
        "time": 1.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 56,
        "time": 1.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 57,
        "time": 1.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 58,
        "time": 1.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 59,
        "time": 1.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 60,
        "time": 2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 61,
        "time": 2.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 62,
        "time": 2.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 63,
        "time": 2.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 64,
        "time": 2.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 65,
        "time": 2.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 66,
        "time": 2.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 67,
        "time": 2.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 68,
        "time": 2.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 69,
        "time": 2.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 70,
        "time": 2.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 71,
        "time": 2.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 72,
        "time": 2.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 73,
        "time": 2.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 74,
        "time": 2.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 75,
        "time": 2.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 76,
        "time": 2.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 77,
        "time": 2.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 78,
        "time": 2.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 79,
        "time": 2.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 80,
        "time": 2.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 81,
        "time": 2.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 82,
        "time": 2.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 83,
        "time": 2.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 84,
        "time": 2.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 85,
        "time": 2.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0499,
          0.9988
        ]
      },
      {
        "frame": 86,
        "time": 2.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0497,
          0.9988
        ]
      },
      {
        "frame": 87,
        "time": 2.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0492,
          0.9988
        ]
      },
      {
        "frame": 88,
        "time": 2.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0482,
          0.9988
        ]
      },
      {
        "frame": 89,
        "time": 2.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0468,
          0.9989
        ]
      },
      {
        "frame": 90,
        "time": 3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0448,
          0.999
        ]
      },
      {
        "frame": 91,
        "time": 3.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0424,
          0.9991
        ]
      },
      {
        "frame": 92,
        "time": 3.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0395,
          0.9992
        ]
      },
      {
        "frame": 93,
        "time": 3.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0362,
          0.9993
        ]
      },
      {
        "frame": 94,
        "time": 3.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0327,
          0.9995
        ]
      },
      {
        "frame": 95,
        "time": 3.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0289,
          0.9996
        ]
      },
      {
        "frame": 96,
        "time": 3.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.025,
          0.9997
        ]
      },
      {
        "frame": 97,
        "time": 3.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0211,
          0.9998
        ]
      },
      {
        "frame": 98,
        "time": 3.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0173,
          0.9998
        ]
      },
      {
        "frame": 99,
        "time": 3.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0138,
          0.9999
        ]
      },
      {
        "frame": 100,
        "time": 3.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0105,
          0.9999
        ]
      },
      {
        "frame": 101,
        "time": 3.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0076,
          1
        ]
      },
      {
        "frame": 102,
        "time": 3.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0052,
          1
        ]
      },
      {
        "frame": 103,
        "time": 3.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0032,
          1
        ]
      },
      {
        "frame": 104,
        "time": 3.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0018,
          1
        ]
      },
      {
        "frame": 105,
        "time": 3.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0008,
          1
        ]
      },
      {
        "frame": 106,
        "time": 3.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0003,
          1
        ]
      },
      {
        "frame": 107,
        "time": 3.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      },
      {
        "frame": 108,
        "time": 3.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      }
    ],
    "右中指３": [
      {
        "frame": 0,
        "time": 0,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      },
      {
        "frame": 1,
        "time": 0.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      },
      {
        "frame": 2,
        "time": 0.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0002,
          1
        ]
      },
      {
        "frame": 3,
        "time": 0.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0006,
          1
        ]
      },
      {
        "frame": 4,
        "time": 0.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0014,
          1
        ]
      },
      {
        "frame": 5,
        "time": 0.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0026,
          1
        ]
      },
      {
        "frame": 6,
        "time": 0.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0041,
          1
        ]
      },
      {
        "frame": 7,
        "time": 0.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0061,
          1
        ]
      },
      {
        "frame": 8,
        "time": 0.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0084,
          1
        ]
      },
      {
        "frame": 9,
        "time": 0.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.011,
          0.9999
        ]
      },
      {
        "frame": 10,
        "time": 0.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0139,
          0.9999
        ]
      },
      {
        "frame": 11,
        "time": 0.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0169,
          0.9999
        ]
      },
      {
        "frame": 12,
        "time": 0.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.02,
          0.9998
        ]
      },
      {
        "frame": 13,
        "time": 0.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0231,
          0.9997
        ]
      },
      {
        "frame": 14,
        "time": 0.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0261,
          0.9997
        ]
      },
      {
        "frame": 15,
        "time": 0.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.029,
          0.9996
        ]
      },
      {
        "frame": 16,
        "time": 0.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0316,
          0.9995
        ]
      },
      {
        "frame": 17,
        "time": 0.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0339,
          0.9994
        ]
      },
      {
        "frame": 18,
        "time": 0.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0359,
          0.9994
        ]
      },
      {
        "frame": 19,
        "time": 0.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0374,
          0.9993
        ]
      },
      {
        "frame": 20,
        "time": 0.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0386,
          0.9993
        ]
      },
      {
        "frame": 21,
        "time": 0.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0393,
          0.9992
        ]
      },
      {
        "frame": 22,
        "time": 0.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0398,
          0.9992
        ]
      },
      {
        "frame": 23,
        "time": 0.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 24,
        "time": 0.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 25,
        "time": 0.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 26,
        "time": 0.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 27,
        "time": 0.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 28,
        "time": 0.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 29,
        "time": 0.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 30,
        "time": 1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 31,
        "time": 1.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 32,
        "time": 1.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 33,
        "time": 1.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 34,
        "time": 1.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 35,
        "time": 1.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 36,
        "time": 1.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 37,
        "time": 1.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 38,
        "time": 1.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 39,
        "time": 1.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 40,
        "time": 1.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 41,
        "time": 1.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 42,
        "time": 1.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 43,
        "time": 1.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 44,
        "time": 1.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 45,
        "time": 1.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 46,
        "time": 1.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 47,
        "time": 1.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 48,
        "time": 1.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 49,
        "time": 1.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 50,
        "time": 1.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 51,
        "time": 1.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 52,
        "time": 1.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 53,
        "time": 1.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 54,
        "time": 1.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 55,
        "time": 1.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 56,
        "time": 1.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 57,
        "time": 1.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 58,
        "time": 1.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 59,
        "time": 1.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 60,
        "time": 2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 61,
        "time": 2.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 62,
        "time": 2.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 63,
        "time": 2.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 64,
        "time": 2.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 65,
        "time": 2.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 66,
        "time": 2.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 67,
        "time": 2.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 68,
        "time": 2.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 69,
        "time": 2.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 70,
        "time": 2.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 71,
        "time": 2.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 72,
        "time": 2.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 73,
        "time": 2.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 74,
        "time": 2.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 75,
        "time": 2.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 76,
        "time": 2.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 77,
        "time": 2.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 78,
        "time": 2.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 79,
        "time": 2.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 80,
        "time": 2.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 81,
        "time": 2.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 82,
        "time": 2.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 83,
        "time": 2.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 84,
        "time": 2.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 85,
        "time": 2.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.04,
          0.9992
        ]
      },
      {
        "frame": 86,
        "time": 2.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0398,
          0.9992
        ]
      },
      {
        "frame": 87,
        "time": 2.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0393,
          0.9992
        ]
      },
      {
        "frame": 88,
        "time": 2.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0386,
          0.9993
        ]
      },
      {
        "frame": 89,
        "time": 2.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0374,
          0.9993
        ]
      },
      {
        "frame": 90,
        "time": 3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0359,
          0.9994
        ]
      },
      {
        "frame": 91,
        "time": 3.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0339,
          0.9994
        ]
      },
      {
        "frame": 92,
        "time": 3.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0316,
          0.9995
        ]
      },
      {
        "frame": 93,
        "time": 3.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.029,
          0.9996
        ]
      },
      {
        "frame": 94,
        "time": 3.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0261,
          0.9997
        ]
      },
      {
        "frame": 95,
        "time": 3.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0231,
          0.9997
        ]
      },
      {
        "frame": 96,
        "time": 3.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.02,
          0.9998
        ]
      },
      {
        "frame": 97,
        "time": 3.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0169,
          0.9999
        ]
      },
      {
        "frame": 98,
        "time": 3.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0139,
          0.9999
        ]
      },
      {
        "frame": 99,
        "time": 3.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.011,
          0.9999
        ]
      },
      {
        "frame": 100,
        "time": 3.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0084,
          1
        ]
      },
      {
        "frame": 101,
        "time": 3.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0061,
          1
        ]
      },
      {
        "frame": 102,
        "time": 3.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0041,
          1
        ]
      },
      {
        "frame": 103,
        "time": 3.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0026,
          1
        ]
      },
      {
        "frame": 104,
        "time": 3.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0014,
          1
        ]
      },
      {
        "frame": 105,
        "time": 3.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0006,
          1
        ]
      },
      {
        "frame": 106,
        "time": 3.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0002,
          1
        ]
      },
      {
        "frame": 107,
        "time": 3.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      },
      {
        "frame": 108,
        "time": 3.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      }
    ],
    "右薬指１": [
      {
        "frame": 0,
        "time": 0,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      },
      {
        "frame": 1,
        "time": 0.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0001,
          1
        ]
      },
      {
        "frame": 2,
        "time": 0.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0.0001,
          0.0005,
          1
        ]
      },
      {
        "frame": 3,
        "time": 0.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0.0004,
          0.0015,
          1
        ]
      },
      {
        "frame": 4,
        "time": 0.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0.0009,
          0.0034,
          1
        ]
      },
      {
        "frame": 5,
        "time": 0.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0.0016,
          0.0061,
          1
        ]
      },
      {
        "frame": 6,
        "time": 0.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0.0026,
          0.0095,
          1
        ]
      },
      {
        "frame": 7,
        "time": 0.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0001,
          0.0038,
          0.0136,
          0.9999
        ]
      },
      {
        "frame": 8,
        "time": 0.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0001,
          0.0052,
          0.0179,
          0.9998
        ]
      },
      {
        "frame": 9,
        "time": 0.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0002,
          0.0069,
          0.0223,
          0.9997
        ]
      },
      {
        "frame": 10,
        "time": 0.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0002,
          0.0087,
          0.0263,
          0.9996
        ]
      },
      {
        "frame": 11,
        "time": 0.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0003,
          0.0106,
          0.0299,
          0.9995
        ]
      },
      {
        "frame": 12,
        "time": 0.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0004,
          0.0125,
          0.0328,
          0.9994
        ]
      },
      {
        "frame": 13,
        "time": 0.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0005,
          0.0144,
          0.035,
          0.9993
        ]
      },
      {
        "frame": 14,
        "time": 0.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0006,
          0.0163,
          0.0365,
          0.9992
        ]
      },
      {
        "frame": 15,
        "time": 0.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0007,
          0.0181,
          0.0376,
          0.9991
        ]
      },
      {
        "frame": 16,
        "time": 0.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0008,
          0.0197,
          0.0385,
          0.9991
        ]
      },
      {
        "frame": 17,
        "time": 0.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0008,
          0.0212,
          0.0394,
          0.999
        ]
      },
      {
        "frame": 18,
        "time": 0.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0009,
          0.0224,
          0.0405,
          0.9989
        ]
      },
      {
        "frame": 19,
        "time": 0.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.001,
          0.0234,
          0.0421,
          0.9988
        ]
      },
      {
        "frame": 20,
        "time": 0.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0011,
          0.0241,
          0.0443,
          0.9987
        ]
      },
      {
        "frame": 21,
        "time": 0.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0012,
          0.0246,
          0.0472,
          0.9986
        ]
      },
      {
        "frame": 22,
        "time": 0.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0013,
          0.0248,
          0.0506,
          0.9984
        ]
      },
      {
        "frame": 23,
        "time": 0.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0014,
          0.0249,
          0.0546,
          0.9982
        ]
      },
      {
        "frame": 24,
        "time": 0.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0015,
          0.025,
          0.0591,
          0.9979
        ]
      },
      {
        "frame": 25,
        "time": 0.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0016,
          0.0249,
          0.064,
          0.9976
        ]
      },
      {
        "frame": 26,
        "time": 0.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0017,
          0.0249,
          0.0691,
          0.9973
        ]
      },
      {
        "frame": 27,
        "time": 0.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0019,
          0.0249,
          0.0743,
          0.9969
        ]
      },
      {
        "frame": 28,
        "time": 0.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.002,
          0.0249,
          0.0793,
          0.9965
        ]
      },
      {
        "frame": 29,
        "time": 0.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0021,
          0.0249,
          0.0839,
          0.9962
        ]
      },
      {
        "frame": 30,
        "time": 1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0022,
          0.0249,
          0.0879,
          0.9958
        ]
      },
      {
        "frame": 31,
        "time": 1.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0023,
          0.0249,
          0.0911,
          0.9955
        ]
      },
      {
        "frame": 32,
        "time": 1.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0023,
          0.0249,
          0.0934,
          0.9953
        ]
      },
      {
        "frame": 33,
        "time": 1.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0024,
          0.0249,
          0.0946,
          0.9952
        ]
      },
      {
        "frame": 34,
        "time": 1.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0024,
          0.0249,
          0.0948,
          0.9952
        ]
      },
      {
        "frame": 35,
        "time": 1.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0023,
          0.0249,
          0.0938,
          0.9953
        ]
      },
      {
        "frame": 36,
        "time": 1.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0023,
          0.0249,
          0.0919,
          0.9955
        ]
      },
      {
        "frame": 37,
        "time": 1.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0022,
          0.0249,
          0.0889,
          0.9957
        ]
      },
      {
        "frame": 38,
        "time": 1.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0021,
          0.0249,
          0.0852,
          0.9961
        ]
      },
      {
        "frame": 39,
        "time": 1.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.002,
          0.0249,
          0.0808,
          0.9964
        ]
      },
      {
        "frame": 40,
        "time": 1.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0019,
          0.0249,
          0.0759,
          0.9968
        ]
      },
      {
        "frame": 41,
        "time": 1.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0018,
          0.0249,
          0.0707,
          0.9972
        ]
      },
      {
        "frame": 42,
        "time": 1.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0016,
          0.0249,
          0.0655,
          0.9975
        ]
      },
      {
        "frame": 43,
        "time": 1.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0015,
          0.025,
          0.0605,
          0.9979
        ]
      },
      {
        "frame": 44,
        "time": 1.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0014,
          0.025,
          0.0559,
          0.9981
        ]
      },
      {
        "frame": 45,
        "time": 1.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0013,
          0.025,
          0.0519,
          0.9983
        ]
      },
      {
        "frame": 46,
        "time": 1.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0012,
          0.025,
          0.0487,
          0.9985
        ]
      },
      {
        "frame": 47,
        "time": 1.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0012,
          0.025,
          0.0464,
          0.9986
        ]
      },
      {
        "frame": 48,
        "time": 1.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0011,
          0.025,
          0.0452,
          0.9987
        ]
      },
      {
        "frame": 49,
        "time": 1.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0011,
          0.025,
          0.045,
          0.9987
        ]
      },
      {
        "frame": 50,
        "time": 1.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0011,
          0.025,
          0.046,
          0.9986
        ]
      },
      {
        "frame": 51,
        "time": 1.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0012,
          0.025,
          0.0479,
          0.9985
        ]
      },
      {
        "frame": 52,
        "time": 1.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0013,
          0.025,
          0.0509,
          0.9984
        ]
      },
      {
        "frame": 53,
        "time": 1.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0014,
          0.025,
          0.0546,
          0.9982
        ]
      },
      {
        "frame": 54,
        "time": 1.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0015,
          0.025,
          0.0591,
          0.9979
        ]
      },
      {
        "frame": 55,
        "time": 1.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0016,
          0.0249,
          0.064,
          0.9976
        ]
      },
      {
        "frame": 56,
        "time": 1.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0017,
          0.0249,
          0.0691,
          0.9973
        ]
      },
      {
        "frame": 57,
        "time": 1.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0019,
          0.0249,
          0.0743,
          0.9969
        ]
      },
      {
        "frame": 58,
        "time": 1.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.002,
          0.0249,
          0.0793,
          0.9965
        ]
      },
      {
        "frame": 59,
        "time": 1.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0021,
          0.0249,
          0.0839,
          0.9962
        ]
      },
      {
        "frame": 60,
        "time": 2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0022,
          0.0249,
          0.0879,
          0.9958
        ]
      },
      {
        "frame": 61,
        "time": 2.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0023,
          0.0249,
          0.0911,
          0.9955
        ]
      },
      {
        "frame": 62,
        "time": 2.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0023,
          0.0249,
          0.0934,
          0.9953
        ]
      },
      {
        "frame": 63,
        "time": 2.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0024,
          0.0249,
          0.0946,
          0.9952
        ]
      },
      {
        "frame": 64,
        "time": 2.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0024,
          0.0249,
          0.0948,
          0.9952
        ]
      },
      {
        "frame": 65,
        "time": 2.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0023,
          0.0249,
          0.0938,
          0.9953
        ]
      },
      {
        "frame": 66,
        "time": 2.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0023,
          0.0249,
          0.0919,
          0.9955
        ]
      },
      {
        "frame": 67,
        "time": 2.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0022,
          0.0249,
          0.0889,
          0.9957
        ]
      },
      {
        "frame": 68,
        "time": 2.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0021,
          0.0249,
          0.0852,
          0.9961
        ]
      },
      {
        "frame": 69,
        "time": 2.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.002,
          0.0249,
          0.0808,
          0.9964
        ]
      },
      {
        "frame": 70,
        "time": 2.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0019,
          0.0249,
          0.0759,
          0.9968
        ]
      },
      {
        "frame": 71,
        "time": 2.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0018,
          0.0249,
          0.0707,
          0.9972
        ]
      },
      {
        "frame": 72,
        "time": 2.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0016,
          0.0249,
          0.0655,
          0.9975
        ]
      },
      {
        "frame": 73,
        "time": 2.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0015,
          0.025,
          0.0605,
          0.9979
        ]
      },
      {
        "frame": 74,
        "time": 2.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0014,
          0.025,
          0.0559,
          0.9981
        ]
      },
      {
        "frame": 75,
        "time": 2.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0013,
          0.025,
          0.0519,
          0.9983
        ]
      },
      {
        "frame": 76,
        "time": 2.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0012,
          0.025,
          0.0487,
          0.9985
        ]
      },
      {
        "frame": 77,
        "time": 2.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0012,
          0.025,
          0.0464,
          0.9986
        ]
      },
      {
        "frame": 78,
        "time": 2.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0011,
          0.025,
          0.0452,
          0.9987
        ]
      },
      {
        "frame": 79,
        "time": 2.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0011,
          0.025,
          0.045,
          0.9987
        ]
      },
      {
        "frame": 80,
        "time": 2.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0011,
          0.025,
          0.046,
          0.9986
        ]
      },
      {
        "frame": 81,
        "time": 2.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0012,
          0.025,
          0.0479,
          0.9985
        ]
      },
      {
        "frame": 82,
        "time": 2.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0013,
          0.025,
          0.0509,
          0.9984
        ]
      },
      {
        "frame": 83,
        "time": 2.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0014,
          0.025,
          0.0546,
          0.9982
        ]
      },
      {
        "frame": 84,
        "time": 2.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0015,
          0.025,
          0.0591,
          0.9979
        ]
      },
      {
        "frame": 85,
        "time": 2.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0016,
          0.0249,
          0.0639,
          0.9976
        ]
      },
      {
        "frame": 86,
        "time": 2.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0017,
          0.0248,
          0.0688,
          0.9973
        ]
      },
      {
        "frame": 87,
        "time": 2.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0018,
          0.0245,
          0.0732,
          0.997
        ]
      },
      {
        "frame": 88,
        "time": 2.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0018,
          0.024,
          0.0765,
          0.9968
        ]
      },
      {
        "frame": 89,
        "time": 2.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0018,
          0.0233,
          0.0785,
          0.9966
        ]
      },
      {
        "frame": 90,
        "time": 3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0018,
          0.0223,
          0.0788,
          0.9966
        ]
      },
      {
        "frame": 91,
        "time": 3.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0016,
          0.0211,
          0.0773,
          0.9968
        ]
      },
      {
        "frame": 92,
        "time": 3.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0015,
          0.0197,
          0.0738,
          0.9971
        ]
      },
      {
        "frame": 93,
        "time": 3.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0012,
          0.0181,
          0.0686,
          0.9975
        ]
      },
      {
        "frame": 94,
        "time": 3.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.001,
          0.0163,
          0.062,
          0.9979
        ]
      },
      {
        "frame": 95,
        "time": 3.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0008,
          0.0144,
          0.0543,
          0.9984
        ]
      },
      {
        "frame": 96,
        "time": 3.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0006,
          0.0125,
          0.046,
          0.9989
        ]
      },
      {
        "frame": 97,
        "time": 3.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0004,
          0.0105,
          0.0376,
          0.9992
        ]
      },
      {
        "frame": 98,
        "time": 3.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0003,
          0.0087,
          0.0296,
          0.9995
        ]
      },
      {
        "frame": 99,
        "time": 3.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0002,
          0.0069,
          0.0223,
          0.9997
        ]
      },
      {
        "frame": 100,
        "time": 3.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0001,
          0.0052,
          0.0159,
          0.9999
        ]
      },
      {
        "frame": 101,
        "time": 3.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0.0038,
          0.0108,
          0.9999
        ]
      },
      {
        "frame": 102,
        "time": 3.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0.0026,
          0.0068,
          1
        ]
      },
      {
        "frame": 103,
        "time": 3.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0.0016,
          0.0039,
          1
        ]
      },
      {
        "frame": 104,
        "time": 3.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0.0009,
          0.002,
          1
        ]
      },
      {
        "frame": 105,
        "time": 3.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0.0004,
          0.0008,
          1
        ]
      },
      {
        "frame": 106,
        "time": 3.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0.0001,
          0.0002,
          1
        ]
      },
      {
        "frame": 107,
        "time": 3.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      },
      {
        "frame": 108,
        "time": 3.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      }
    ],
    "右薬指２": [
      {
        "frame": 0,
        "time": 0,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      },
      {
        "frame": 1,
        "time": 0.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      },
      {
        "frame": 2,
        "time": 0.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0003,
          1
        ]
      },
      {
        "frame": 3,
        "time": 0.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.001,
          1
        ]
      },
      {
        "frame": 4,
        "time": 0.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0021,
          1
        ]
      },
      {
        "frame": 5,
        "time": 0.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0039,
          1
        ]
      },
      {
        "frame": 6,
        "time": 0.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0062,
          1
        ]
      },
      {
        "frame": 7,
        "time": 0.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0091,
          1
        ]
      },
      {
        "frame": 8,
        "time": 0.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0126,
          0.9999
        ]
      },
      {
        "frame": 9,
        "time": 0.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0165,
          0.9999
        ]
      },
      {
        "frame": 10,
        "time": 0.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0208,
          0.9998
        ]
      },
      {
        "frame": 11,
        "time": 0.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0253,
          0.9997
        ]
      },
      {
        "frame": 12,
        "time": 0.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.03,
          0.9996
        ]
      },
      {
        "frame": 13,
        "time": 0.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0347,
          0.9994
        ]
      },
      {
        "frame": 14,
        "time": 0.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0392,
          0.9992
        ]
      },
      {
        "frame": 15,
        "time": 0.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0435,
          0.9991
        ]
      },
      {
        "frame": 16,
        "time": 0.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0474,
          0.9989
        ]
      },
      {
        "frame": 17,
        "time": 0.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0508,
          0.9987
        ]
      },
      {
        "frame": 18,
        "time": 0.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0538,
          0.9986
        ]
      },
      {
        "frame": 19,
        "time": 0.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0561,
          0.9984
        ]
      },
      {
        "frame": 20,
        "time": 0.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0578,
          0.9983
        ]
      },
      {
        "frame": 21,
        "time": 0.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.059,
          0.9983
        ]
      },
      {
        "frame": 22,
        "time": 0.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0597,
          0.9982
        ]
      },
      {
        "frame": 23,
        "time": 0.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0599,
          0.9982
        ]
      },
      {
        "frame": 24,
        "time": 0.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 25,
        "time": 0.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 26,
        "time": 0.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 27,
        "time": 0.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 28,
        "time": 0.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 29,
        "time": 0.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 30,
        "time": 1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 31,
        "time": 1.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 32,
        "time": 1.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 33,
        "time": 1.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 34,
        "time": 1.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 35,
        "time": 1.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 36,
        "time": 1.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 37,
        "time": 1.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 38,
        "time": 1.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 39,
        "time": 1.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 40,
        "time": 1.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 41,
        "time": 1.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 42,
        "time": 1.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 43,
        "time": 1.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 44,
        "time": 1.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 45,
        "time": 1.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 46,
        "time": 1.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 47,
        "time": 1.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 48,
        "time": 1.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 49,
        "time": 1.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 50,
        "time": 1.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 51,
        "time": 1.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 52,
        "time": 1.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 53,
        "time": 1.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 54,
        "time": 1.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 55,
        "time": 1.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 56,
        "time": 1.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 57,
        "time": 1.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 58,
        "time": 1.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 59,
        "time": 1.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 60,
        "time": 2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 61,
        "time": 2.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 62,
        "time": 2.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 63,
        "time": 2.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 64,
        "time": 2.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 65,
        "time": 2.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 66,
        "time": 2.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 67,
        "time": 2.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 68,
        "time": 2.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 69,
        "time": 2.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 70,
        "time": 2.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 71,
        "time": 2.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 72,
        "time": 2.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 73,
        "time": 2.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 74,
        "time": 2.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 75,
        "time": 2.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 76,
        "time": 2.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 77,
        "time": 2.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 78,
        "time": 2.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 79,
        "time": 2.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 80,
        "time": 2.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 81,
        "time": 2.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 82,
        "time": 2.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 83,
        "time": 2.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 84,
        "time": 2.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 85,
        "time": 2.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0599,
          0.9982
        ]
      },
      {
        "frame": 86,
        "time": 2.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0597,
          0.9982
        ]
      },
      {
        "frame": 87,
        "time": 2.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.059,
          0.9983
        ]
      },
      {
        "frame": 88,
        "time": 2.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0578,
          0.9983
        ]
      },
      {
        "frame": 89,
        "time": 2.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0561,
          0.9984
        ]
      },
      {
        "frame": 90,
        "time": 3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0538,
          0.9986
        ]
      },
      {
        "frame": 91,
        "time": 3.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0508,
          0.9987
        ]
      },
      {
        "frame": 92,
        "time": 3.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0474,
          0.9989
        ]
      },
      {
        "frame": 93,
        "time": 3.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0435,
          0.9991
        ]
      },
      {
        "frame": 94,
        "time": 3.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0392,
          0.9992
        ]
      },
      {
        "frame": 95,
        "time": 3.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0347,
          0.9994
        ]
      },
      {
        "frame": 96,
        "time": 3.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.03,
          0.9996
        ]
      },
      {
        "frame": 97,
        "time": 3.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0253,
          0.9997
        ]
      },
      {
        "frame": 98,
        "time": 3.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0208,
          0.9998
        ]
      },
      {
        "frame": 99,
        "time": 3.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0165,
          0.9999
        ]
      },
      {
        "frame": 100,
        "time": 3.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0126,
          0.9999
        ]
      },
      {
        "frame": 101,
        "time": 3.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0091,
          1
        ]
      },
      {
        "frame": 102,
        "time": 3.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0062,
          1
        ]
      },
      {
        "frame": 103,
        "time": 3.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0039,
          1
        ]
      },
      {
        "frame": 104,
        "time": 3.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0021,
          1
        ]
      },
      {
        "frame": 105,
        "time": 3.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.001,
          1
        ]
      },
      {
        "frame": 106,
        "time": 3.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0003,
          1
        ]
      },
      {
        "frame": 107,
        "time": 3.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      },
      {
        "frame": 108,
        "time": 3.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      }
    ],
    "右薬指３": [
      {
        "frame": 0,
        "time": 0,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      },
      {
        "frame": 1,
        "time": 0.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      },
      {
        "frame": 2,
        "time": 0.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0003,
          1
        ]
      },
      {
        "frame": 3,
        "time": 0.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0008,
          1
        ]
      },
      {
        "frame": 4,
        "time": 0.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0018,
          1
        ]
      },
      {
        "frame": 5,
        "time": 0.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0032,
          1
        ]
      },
      {
        "frame": 6,
        "time": 0.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0052,
          1
        ]
      },
      {
        "frame": 7,
        "time": 0.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0076,
          1
        ]
      },
      {
        "frame": 8,
        "time": 0.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0105,
          0.9999
        ]
      },
      {
        "frame": 9,
        "time": 0.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0138,
          0.9999
        ]
      },
      {
        "frame": 10,
        "time": 0.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0173,
          0.9998
        ]
      },
      {
        "frame": 11,
        "time": 0.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0211,
          0.9998
        ]
      },
      {
        "frame": 12,
        "time": 0.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.025,
          0.9997
        ]
      },
      {
        "frame": 13,
        "time": 0.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0289,
          0.9996
        ]
      },
      {
        "frame": 14,
        "time": 0.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0327,
          0.9995
        ]
      },
      {
        "frame": 15,
        "time": 0.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0362,
          0.9993
        ]
      },
      {
        "frame": 16,
        "time": 0.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0395,
          0.9992
        ]
      },
      {
        "frame": 17,
        "time": 0.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0424,
          0.9991
        ]
      },
      {
        "frame": 18,
        "time": 0.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0448,
          0.999
        ]
      },
      {
        "frame": 19,
        "time": 0.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0468,
          0.9989
        ]
      },
      {
        "frame": 20,
        "time": 0.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0482,
          0.9988
        ]
      },
      {
        "frame": 21,
        "time": 0.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0492,
          0.9988
        ]
      },
      {
        "frame": 22,
        "time": 0.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0497,
          0.9988
        ]
      },
      {
        "frame": 23,
        "time": 0.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0499,
          0.9988
        ]
      },
      {
        "frame": 24,
        "time": 0.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 25,
        "time": 0.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 26,
        "time": 0.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 27,
        "time": 0.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 28,
        "time": 0.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 29,
        "time": 0.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 30,
        "time": 1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 31,
        "time": 1.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 32,
        "time": 1.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 33,
        "time": 1.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 34,
        "time": 1.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 35,
        "time": 1.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 36,
        "time": 1.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 37,
        "time": 1.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 38,
        "time": 1.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 39,
        "time": 1.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 40,
        "time": 1.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 41,
        "time": 1.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 42,
        "time": 1.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 43,
        "time": 1.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 44,
        "time": 1.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 45,
        "time": 1.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 46,
        "time": 1.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 47,
        "time": 1.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 48,
        "time": 1.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 49,
        "time": 1.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 50,
        "time": 1.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 51,
        "time": 1.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 52,
        "time": 1.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 53,
        "time": 1.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 54,
        "time": 1.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 55,
        "time": 1.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 56,
        "time": 1.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 57,
        "time": 1.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 58,
        "time": 1.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 59,
        "time": 1.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 60,
        "time": 2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 61,
        "time": 2.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 62,
        "time": 2.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 63,
        "time": 2.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 64,
        "time": 2.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 65,
        "time": 2.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 66,
        "time": 2.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 67,
        "time": 2.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 68,
        "time": 2.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 69,
        "time": 2.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 70,
        "time": 2.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 71,
        "time": 2.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 72,
        "time": 2.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 73,
        "time": 2.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 74,
        "time": 2.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 75,
        "time": 2.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 76,
        "time": 2.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 77,
        "time": 2.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 78,
        "time": 2.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 79,
        "time": 2.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 80,
        "time": 2.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 81,
        "time": 2.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 82,
        "time": 2.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 83,
        "time": 2.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 84,
        "time": 2.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.05,
          0.9988
        ]
      },
      {
        "frame": 85,
        "time": 2.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0499,
          0.9988
        ]
      },
      {
        "frame": 86,
        "time": 2.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0497,
          0.9988
        ]
      },
      {
        "frame": 87,
        "time": 2.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0492,
          0.9988
        ]
      },
      {
        "frame": 88,
        "time": 2.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0482,
          0.9988
        ]
      },
      {
        "frame": 89,
        "time": 2.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0468,
          0.9989
        ]
      },
      {
        "frame": 90,
        "time": 3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0448,
          0.999
        ]
      },
      {
        "frame": 91,
        "time": 3.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0424,
          0.9991
        ]
      },
      {
        "frame": 92,
        "time": 3.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0395,
          0.9992
        ]
      },
      {
        "frame": 93,
        "time": 3.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0362,
          0.9993
        ]
      },
      {
        "frame": 94,
        "time": 3.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0327,
          0.9995
        ]
      },
      {
        "frame": 95,
        "time": 3.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0289,
          0.9996
        ]
      },
      {
        "frame": 96,
        "time": 3.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.025,
          0.9997
        ]
      },
      {
        "frame": 97,
        "time": 3.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0211,
          0.9998
        ]
      },
      {
        "frame": 98,
        "time": 3.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0173,
          0.9998
        ]
      },
      {
        "frame": 99,
        "time": 3.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0138,
          0.9999
        ]
      },
      {
        "frame": 100,
        "time": 3.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0105,
          0.9999
        ]
      },
      {
        "frame": 101,
        "time": 3.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0076,
          1
        ]
      },
      {
        "frame": 102,
        "time": 3.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0052,
          1
        ]
      },
      {
        "frame": 103,
        "time": 3.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0032,
          1
        ]
      },
      {
        "frame": 104,
        "time": 3.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0018,
          1
        ]
      },
      {
        "frame": 105,
        "time": 3.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0008,
          1
        ]
      },
      {
        "frame": 106,
        "time": 3.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0003,
          1
        ]
      },
      {
        "frame": 107,
        "time": 3.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      },
      {
        "frame": 108,
        "time": 3.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      }
    ],
    "右小指１": [
      {
        "frame": 0,
        "time": 0,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      },
      {
        "frame": 1,
        "time": 0.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0001,
          1
        ]
      },
      {
        "frame": 2,
        "time": 0.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0.0003,
          0.0006,
          1
        ]
      },
      {
        "frame": 3,
        "time": 0.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0.0008,
          0.0019,
          1
        ]
      },
      {
        "frame": 4,
        "time": 0.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0.0018,
          0.0043,
          1
        ]
      },
      {
        "frame": 5,
        "time": 0.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0.0032,
          0.0077,
          1
        ]
      },
      {
        "frame": 6,
        "time": 0.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0001,
          0.0052,
          0.0122,
          0.9999
        ]
      },
      {
        "frame": 7,
        "time": 0.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0001,
          0.0076,
          0.0175,
          0.9998
        ]
      },
      {
        "frame": 8,
        "time": 0.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0002,
          0.0105,
          0.0232,
          0.9997
        ]
      },
      {
        "frame": 9,
        "time": 0.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0004,
          0.0138,
          0.0291,
          0.9995
        ]
      },
      {
        "frame": 10,
        "time": 0.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0006,
          0.0173,
          0.0347,
          0.9992
        ]
      },
      {
        "frame": 11,
        "time": 0.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0008,
          0.0211,
          0.0396,
          0.999
        ]
      },
      {
        "frame": 12,
        "time": 0.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0011,
          0.025,
          0.0438,
          0.9987
        ]
      },
      {
        "frame": 13,
        "time": 0.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0014,
          0.0289,
          0.047,
          0.9985
        ]
      },
      {
        "frame": 14,
        "time": 0.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0016,
          0.0326,
          0.0494,
          0.9982
        ]
      },
      {
        "frame": 15,
        "time": 0.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0019,
          0.0362,
          0.0511,
          0.998
        ]
      },
      {
        "frame": 16,
        "time": 0.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0021,
          0.0394,
          0.0522,
          0.9979
        ]
      },
      {
        "frame": 17,
        "time": 0.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0023,
          0.0423,
          0.0533,
          0.9977
        ]
      },
      {
        "frame": 18,
        "time": 0.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0024,
          0.0447,
          0.0545,
          0.9975
        ]
      },
      {
        "frame": 19,
        "time": 0.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0026,
          0.0467,
          0.056,
          0.9973
        ]
      },
      {
        "frame": 20,
        "time": 0.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0028,
          0.0481,
          0.0583,
          0.9971
        ]
      },
      {
        "frame": 21,
        "time": 0.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.003,
          0.0491,
          0.0612,
          0.9969
        ]
      },
      {
        "frame": 22,
        "time": 0.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0032,
          0.0496,
          0.0648,
          0.9967
        ]
      },
      {
        "frame": 23,
        "time": 0.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0035,
          0.0498,
          0.0692,
          0.9964
        ]
      },
      {
        "frame": 24,
        "time": 0.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0037,
          0.0498,
          0.0742,
          0.996
        ]
      },
      {
        "frame": 25,
        "time": 0.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.004,
          0.0498,
          0.0798,
          0.9956
        ]
      },
      {
        "frame": 26,
        "time": 0.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0043,
          0.0498,
          0.0859,
          0.9951
        ]
      },
      {
        "frame": 27,
        "time": 0.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0046,
          0.0498,
          0.0921,
          0.9945
        ]
      },
      {
        "frame": 28,
        "time": 0.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0049,
          0.0497,
          0.0982,
          0.9939
        ]
      },
      {
        "frame": 29,
        "time": 0.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0052,
          0.0497,
          0.104,
          0.9933
        ]
      },
      {
        "frame": 30,
        "time": 1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0055,
          0.0497,
          0.1091,
          0.9928
        ]
      },
      {
        "frame": 31,
        "time": 1.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0057,
          0.0497,
          0.1134,
          0.9923
        ]
      },
      {
        "frame": 32,
        "time": 1.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0058,
          0.0496,
          0.1167,
          0.9919
        ]
      },
      {
        "frame": 33,
        "time": 1.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0059,
          0.0496,
          0.1187,
          0.9917
        ]
      },
      {
        "frame": 34,
        "time": 1.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.006,
          0.0496,
          0.1196,
          0.9916
        ]
      },
      {
        "frame": 35,
        "time": 1.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.006,
          0.0496,
          0.1191,
          0.9916
        ]
      },
      {
        "frame": 36,
        "time": 1.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0059,
          0.0496,
          0.1173,
          0.9918
        ]
      },
      {
        "frame": 37,
        "time": 1.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0057,
          0.0497,
          0.1143,
          0.9922
        ]
      },
      {
        "frame": 38,
        "time": 1.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0055,
          0.0497,
          0.1103,
          0.9926
        ]
      },
      {
        "frame": 39,
        "time": 1.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0053,
          0.0497,
          0.1054,
          0.9932
        ]
      },
      {
        "frame": 40,
        "time": 1.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.005,
          0.0497,
          0.0997,
          0.9938
        ]
      },
      {
        "frame": 41,
        "time": 1.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0047,
          0.0498,
          0.0937,
          0.9943
        ]
      },
      {
        "frame": 42,
        "time": 1.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0044,
          0.0498,
          0.0874,
          0.9949
        ]
      },
      {
        "frame": 43,
        "time": 1.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0041,
          0.0498,
          0.0813,
          0.9954
        ]
      },
      {
        "frame": 44,
        "time": 1.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0038,
          0.0498,
          0.0755,
          0.9959
        ]
      },
      {
        "frame": 45,
        "time": 1.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0035,
          0.0499,
          0.0704,
          0.9963
        ]
      },
      {
        "frame": 46,
        "time": 1.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0033,
          0.0499,
          0.0661,
          0.9966
        ]
      },
      {
        "frame": 47,
        "time": 1.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0031,
          0.0499,
          0.0628,
          0.9968
        ]
      },
      {
        "frame": 48,
        "time": 1.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.003,
          0.0499,
          0.0607,
          0.9969
        ]
      },
      {
        "frame": 49,
        "time": 1.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.003,
          0.0499,
          0.0599,
          0.997
        ]
      },
      {
        "frame": 50,
        "time": 1.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.003,
          0.0499,
          0.0604,
          0.9969
        ]
      },
      {
        "frame": 51,
        "time": 1.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0031,
          0.0499,
          0.0622,
          0.9968
        ]
      },
      {
        "frame": 52,
        "time": 1.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0033,
          0.0499,
          0.0651,
          0.9966
        ]
      },
      {
        "frame": 53,
        "time": 1.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0035,
          0.0499,
          0.0692,
          0.9963
        ]
      },
      {
        "frame": 54,
        "time": 1.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0037,
          0.0498,
          0.0742,
          0.996
        ]
      },
      {
        "frame": 55,
        "time": 1.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.004,
          0.0498,
          0.0798,
          0.9956
        ]
      },
      {
        "frame": 56,
        "time": 1.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0043,
          0.0498,
          0.0859,
          0.9951
        ]
      },
      {
        "frame": 57,
        "time": 1.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0046,
          0.0498,
          0.0921,
          0.9945
        ]
      },
      {
        "frame": 58,
        "time": 1.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0049,
          0.0497,
          0.0982,
          0.9939
        ]
      },
      {
        "frame": 59,
        "time": 1.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0052,
          0.0497,
          0.104,
          0.9933
        ]
      },
      {
        "frame": 60,
        "time": 2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0055,
          0.0497,
          0.1091,
          0.9928
        ]
      },
      {
        "frame": 61,
        "time": 2.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0057,
          0.0497,
          0.1134,
          0.9923
        ]
      },
      {
        "frame": 62,
        "time": 2.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0058,
          0.0496,
          0.1167,
          0.9919
        ]
      },
      {
        "frame": 63,
        "time": 2.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0059,
          0.0496,
          0.1187,
          0.9917
        ]
      },
      {
        "frame": 64,
        "time": 2.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.006,
          0.0496,
          0.1196,
          0.9916
        ]
      },
      {
        "frame": 65,
        "time": 2.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.006,
          0.0496,
          0.1191,
          0.9916
        ]
      },
      {
        "frame": 66,
        "time": 2.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0059,
          0.0496,
          0.1173,
          0.9918
        ]
      },
      {
        "frame": 67,
        "time": 2.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0057,
          0.0497,
          0.1143,
          0.9922
        ]
      },
      {
        "frame": 68,
        "time": 2.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0055,
          0.0497,
          0.1103,
          0.9926
        ]
      },
      {
        "frame": 69,
        "time": 2.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0053,
          0.0497,
          0.1054,
          0.9932
        ]
      },
      {
        "frame": 70,
        "time": 2.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.005,
          0.0497,
          0.0997,
          0.9938
        ]
      },
      {
        "frame": 71,
        "time": 2.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0047,
          0.0498,
          0.0937,
          0.9943
        ]
      },
      {
        "frame": 72,
        "time": 2.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0044,
          0.0498,
          0.0874,
          0.9949
        ]
      },
      {
        "frame": 73,
        "time": 2.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0041,
          0.0498,
          0.0813,
          0.9954
        ]
      },
      {
        "frame": 74,
        "time": 2.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0038,
          0.0498,
          0.0755,
          0.9959
        ]
      },
      {
        "frame": 75,
        "time": 2.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0035,
          0.0499,
          0.0704,
          0.9963
        ]
      },
      {
        "frame": 76,
        "time": 2.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0033,
          0.0499,
          0.0661,
          0.9966
        ]
      },
      {
        "frame": 77,
        "time": 2.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0031,
          0.0499,
          0.0628,
          0.9968
        ]
      },
      {
        "frame": 78,
        "time": 2.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.003,
          0.0499,
          0.0607,
          0.9969
        ]
      },
      {
        "frame": 79,
        "time": 2.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.003,
          0.0499,
          0.0599,
          0.997
        ]
      },
      {
        "frame": 80,
        "time": 2.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.003,
          0.0499,
          0.0604,
          0.9969
        ]
      },
      {
        "frame": 81,
        "time": 2.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0031,
          0.0499,
          0.0622,
          0.9968
        ]
      },
      {
        "frame": 82,
        "time": 2.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0033,
          0.0499,
          0.0651,
          0.9966
        ]
      },
      {
        "frame": 83,
        "time": 2.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0035,
          0.0499,
          0.0692,
          0.9963
        ]
      },
      {
        "frame": 84,
        "time": 2.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0037,
          0.0498,
          0.0742,
          0.996
        ]
      },
      {
        "frame": 85,
        "time": 2.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.004,
          0.0498,
          0.0797,
          0.9956
        ]
      },
      {
        "frame": 86,
        "time": 2.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0043,
          0.0495,
          0.0854,
          0.9951
        ]
      },
      {
        "frame": 87,
        "time": 2.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0045,
          0.049,
          0.0906,
          0.9947
        ]
      },
      {
        "frame": 88,
        "time": 2.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0046,
          0.048,
          0.0948,
          0.9943
        ]
      },
      {
        "frame": 89,
        "time": 2.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0046,
          0.0465,
          0.0973,
          0.9942
        ]
      },
      {
        "frame": 90,
        "time": 3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0044,
          0.0446,
          0.0979,
          0.9942
        ]
      },
      {
        "frame": 91,
        "time": 3.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0041,
          0.0422,
          0.0962,
          0.9945
        ]
      },
      {
        "frame": 92,
        "time": 3.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0036,
          0.0393,
          0.0923,
          0.9949
        ]
      },
      {
        "frame": 93,
        "time": 3.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0031,
          0.0361,
          0.0862,
          0.9956
        ]
      },
      {
        "frame": 94,
        "time": 3.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0026,
          0.0326,
          0.0783,
          0.9964
        ]
      },
      {
        "frame": 95,
        "time": 3.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.002,
          0.0288,
          0.069,
          0.9972
        ]
      },
      {
        "frame": 96,
        "time": 3.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0015,
          0.025,
          0.0588,
          0.998
        ]
      },
      {
        "frame": 97,
        "time": 3.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.001,
          0.0211,
          0.0484,
          0.9986
        ]
      },
      {
        "frame": 98,
        "time": 3.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0007,
          0.0173,
          0.0383,
          0.9991
        ]
      },
      {
        "frame": 99,
        "time": 3.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0004,
          0.0138,
          0.0291,
          0.9995
        ]
      },
      {
        "frame": 100,
        "time": 3.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0002,
          0.0105,
          0.021,
          0.9997
        ]
      },
      {
        "frame": 101,
        "time": 3.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0.0001,
          0.0076,
          0.0143,
          0.9999
        ]
      },
      {
        "frame": 102,
        "time": 3.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0.0052,
          0.0091,
          0.9999
        ]
      },
      {
        "frame": 103,
        "time": 3.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0.0032,
          0.0053,
          1
        ]
      },
      {
        "frame": 104,
        "time": 3.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0.0018,
          0.0027,
          1
        ]
      },
      {
        "frame": 105,
        "time": 3.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0.0008,
          0.0011,
          1
        ]
      },
      {
        "frame": 106,
        "time": 3.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0.0003,
          0.0003,
          1
        ]
      },
      {
        "frame": 107,
        "time": 3.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      },
      {
        "frame": 108,
        "time": 3.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      }
    ],
    "右小指２": [
      {
        "frame": 0,
        "time": 0,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      },
      {
        "frame": 1,
        "time": 0.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0001,
          1
        ]
      },
      {
        "frame": 2,
        "time": 0.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0004,
          1
        ]
      },
      {
        "frame": 3,
        "time": 0.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0012,
          1
        ]
      },
      {
        "frame": 4,
        "time": 0.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0027,
          1
        ]
      },
      {
        "frame": 5,
        "time": 0.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0048,
          1
        ]
      },
      {
        "frame": 6,
        "time": 0.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0078,
          1
        ]
      },
      {
        "frame": 7,
        "time": 0.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0114,
          0.9999
        ]
      },
      {
        "frame": 8,
        "time": 0.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0157,
          0.9999
        ]
      },
      {
        "frame": 9,
        "time": 0.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0206,
          0.9998
        ]
      },
      {
        "frame": 10,
        "time": 0.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.026,
          0.9997
        ]
      },
      {
        "frame": 11,
        "time": 0.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0317,
          0.9995
        ]
      },
      {
        "frame": 12,
        "time": 0.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0375,
          0.9993
        ]
      },
      {
        "frame": 13,
        "time": 0.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0433,
          0.9991
        ]
      },
      {
        "frame": 14,
        "time": 0.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.049,
          0.9988
        ]
      },
      {
        "frame": 15,
        "time": 0.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0543,
          0.9985
        ]
      },
      {
        "frame": 16,
        "time": 0.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0592,
          0.9982
        ]
      },
      {
        "frame": 17,
        "time": 0.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0635,
          0.998
        ]
      },
      {
        "frame": 18,
        "time": 0.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0672,
          0.9977
        ]
      },
      {
        "frame": 19,
        "time": 0.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0701,
          0.9975
        ]
      },
      {
        "frame": 20,
        "time": 0.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0723,
          0.9974
        ]
      },
      {
        "frame": 21,
        "time": 0.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0737,
          0.9973
        ]
      },
      {
        "frame": 22,
        "time": 0.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0745,
          0.9972
        ]
      },
      {
        "frame": 23,
        "time": 0.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0749,
          0.9972
        ]
      },
      {
        "frame": 24,
        "time": 0.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0749,
          0.9972
        ]
      },
      {
        "frame": 25,
        "time": 0.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0749,
          0.9972
        ]
      },
      {
        "frame": 26,
        "time": 0.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0749,
          0.9972
        ]
      },
      {
        "frame": 27,
        "time": 0.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0749,
          0.9972
        ]
      },
      {
        "frame": 28,
        "time": 0.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0749,
          0.9972
        ]
      },
      {
        "frame": 29,
        "time": 0.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0749,
          0.9972
        ]
      },
      {
        "frame": 30,
        "time": 1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0749,
          0.9972
        ]
      },
      {
        "frame": 31,
        "time": 1.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0749,
          0.9972
        ]
      },
      {
        "frame": 32,
        "time": 1.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0749,
          0.9972
        ]
      },
      {
        "frame": 33,
        "time": 1.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0749,
          0.9972
        ]
      },
      {
        "frame": 34,
        "time": 1.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0749,
          0.9972
        ]
      },
      {
        "frame": 35,
        "time": 1.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0749,
          0.9972
        ]
      },
      {
        "frame": 36,
        "time": 1.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0749,
          0.9972
        ]
      },
      {
        "frame": 37,
        "time": 1.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0749,
          0.9972
        ]
      },
      {
        "frame": 38,
        "time": 1.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0749,
          0.9972
        ]
      },
      {
        "frame": 39,
        "time": 1.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0749,
          0.9972
        ]
      },
      {
        "frame": 40,
        "time": 1.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0749,
          0.9972
        ]
      },
      {
        "frame": 41,
        "time": 1.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0749,
          0.9972
        ]
      },
      {
        "frame": 42,
        "time": 1.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0749,
          0.9972
        ]
      },
      {
        "frame": 43,
        "time": 1.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0749,
          0.9972
        ]
      },
      {
        "frame": 44,
        "time": 1.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0749,
          0.9972
        ]
      },
      {
        "frame": 45,
        "time": 1.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0749,
          0.9972
        ]
      },
      {
        "frame": 46,
        "time": 1.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0749,
          0.9972
        ]
      },
      {
        "frame": 47,
        "time": 1.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0749,
          0.9972
        ]
      },
      {
        "frame": 48,
        "time": 1.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0749,
          0.9972
        ]
      },
      {
        "frame": 49,
        "time": 1.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0749,
          0.9972
        ]
      },
      {
        "frame": 50,
        "time": 1.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0749,
          0.9972
        ]
      },
      {
        "frame": 51,
        "time": 1.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0749,
          0.9972
        ]
      },
      {
        "frame": 52,
        "time": 1.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0749,
          0.9972
        ]
      },
      {
        "frame": 53,
        "time": 1.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0749,
          0.9972
        ]
      },
      {
        "frame": 54,
        "time": 1.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0749,
          0.9972
        ]
      },
      {
        "frame": 55,
        "time": 1.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0749,
          0.9972
        ]
      },
      {
        "frame": 56,
        "time": 1.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0749,
          0.9972
        ]
      },
      {
        "frame": 57,
        "time": 1.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0749,
          0.9972
        ]
      },
      {
        "frame": 58,
        "time": 1.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0749,
          0.9972
        ]
      },
      {
        "frame": 59,
        "time": 1.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0749,
          0.9972
        ]
      },
      {
        "frame": 60,
        "time": 2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0749,
          0.9972
        ]
      },
      {
        "frame": 61,
        "time": 2.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0749,
          0.9972
        ]
      },
      {
        "frame": 62,
        "time": 2.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0749,
          0.9972
        ]
      },
      {
        "frame": 63,
        "time": 2.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0749,
          0.9972
        ]
      },
      {
        "frame": 64,
        "time": 2.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0749,
          0.9972
        ]
      },
      {
        "frame": 65,
        "time": 2.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0749,
          0.9972
        ]
      },
      {
        "frame": 66,
        "time": 2.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0749,
          0.9972
        ]
      },
      {
        "frame": 67,
        "time": 2.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0749,
          0.9972
        ]
      },
      {
        "frame": 68,
        "time": 2.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0749,
          0.9972
        ]
      },
      {
        "frame": 69,
        "time": 2.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0749,
          0.9972
        ]
      },
      {
        "frame": 70,
        "time": 2.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0749,
          0.9972
        ]
      },
      {
        "frame": 71,
        "time": 2.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0749,
          0.9972
        ]
      },
      {
        "frame": 72,
        "time": 2.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0749,
          0.9972
        ]
      },
      {
        "frame": 73,
        "time": 2.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0749,
          0.9972
        ]
      },
      {
        "frame": 74,
        "time": 2.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0749,
          0.9972
        ]
      },
      {
        "frame": 75,
        "time": 2.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0749,
          0.9972
        ]
      },
      {
        "frame": 76,
        "time": 2.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0749,
          0.9972
        ]
      },
      {
        "frame": 77,
        "time": 2.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0749,
          0.9972
        ]
      },
      {
        "frame": 78,
        "time": 2.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0749,
          0.9972
        ]
      },
      {
        "frame": 79,
        "time": 2.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0749,
          0.9972
        ]
      },
      {
        "frame": 80,
        "time": 2.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0749,
          0.9972
        ]
      },
      {
        "frame": 81,
        "time": 2.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0749,
          0.9972
        ]
      },
      {
        "frame": 82,
        "time": 2.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0749,
          0.9972
        ]
      },
      {
        "frame": 83,
        "time": 2.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0749,
          0.9972
        ]
      },
      {
        "frame": 84,
        "time": 2.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0749,
          0.9972
        ]
      },
      {
        "frame": 85,
        "time": 2.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0749,
          0.9972
        ]
      },
      {
        "frame": 86,
        "time": 2.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0745,
          0.9972
        ]
      },
      {
        "frame": 87,
        "time": 2.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0737,
          0.9973
        ]
      },
      {
        "frame": 88,
        "time": 2.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0723,
          0.9974
        ]
      },
      {
        "frame": 89,
        "time": 2.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0701,
          0.9975
        ]
      },
      {
        "frame": 90,
        "time": 3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0672,
          0.9977
        ]
      },
      {
        "frame": 91,
        "time": 3.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0635,
          0.998
        ]
      },
      {
        "frame": 92,
        "time": 3.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0592,
          0.9982
        ]
      },
      {
        "frame": 93,
        "time": 3.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0543,
          0.9985
        ]
      },
      {
        "frame": 94,
        "time": 3.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.049,
          0.9988
        ]
      },
      {
        "frame": 95,
        "time": 3.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0433,
          0.9991
        ]
      },
      {
        "frame": 96,
        "time": 3.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0375,
          0.9993
        ]
      },
      {
        "frame": 97,
        "time": 3.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0317,
          0.9995
        ]
      },
      {
        "frame": 98,
        "time": 3.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.026,
          0.9997
        ]
      },
      {
        "frame": 99,
        "time": 3.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0206,
          0.9998
        ]
      },
      {
        "frame": 100,
        "time": 3.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0157,
          0.9999
        ]
      },
      {
        "frame": 101,
        "time": 3.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0114,
          0.9999
        ]
      },
      {
        "frame": 102,
        "time": 3.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0078,
          1
        ]
      },
      {
        "frame": 103,
        "time": 3.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0048,
          1
        ]
      },
      {
        "frame": 104,
        "time": 3.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0027,
          1
        ]
      },
      {
        "frame": 105,
        "time": 3.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0012,
          1
        ]
      },
      {
        "frame": 106,
        "time": 3.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0004,
          1
        ]
      },
      {
        "frame": 107,
        "time": 3.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0001,
          1
        ]
      },
      {
        "frame": 108,
        "time": 3.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      }
    ],
    "右小指３": [
      {
        "frame": 0,
        "time": 0,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      },
      {
        "frame": 1,
        "time": 0.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      },
      {
        "frame": 2,
        "time": 0.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0003,
          1
        ]
      },
      {
        "frame": 3,
        "time": 0.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.001,
          1
        ]
      },
      {
        "frame": 4,
        "time": 0.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0021,
          1
        ]
      },
      {
        "frame": 5,
        "time": 0.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0039,
          1
        ]
      },
      {
        "frame": 6,
        "time": 0.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0062,
          1
        ]
      },
      {
        "frame": 7,
        "time": 0.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0091,
          1
        ]
      },
      {
        "frame": 8,
        "time": 0.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0126,
          0.9999
        ]
      },
      {
        "frame": 9,
        "time": 0.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0165,
          0.9999
        ]
      },
      {
        "frame": 10,
        "time": 0.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0208,
          0.9998
        ]
      },
      {
        "frame": 11,
        "time": 0.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0253,
          0.9997
        ]
      },
      {
        "frame": 12,
        "time": 0.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.03,
          0.9996
        ]
      },
      {
        "frame": 13,
        "time": 0.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0347,
          0.9994
        ]
      },
      {
        "frame": 14,
        "time": 0.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0392,
          0.9992
        ]
      },
      {
        "frame": 15,
        "time": 0.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0435,
          0.9991
        ]
      },
      {
        "frame": 16,
        "time": 0.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0474,
          0.9989
        ]
      },
      {
        "frame": 17,
        "time": 0.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0508,
          0.9987
        ]
      },
      {
        "frame": 18,
        "time": 0.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0538,
          0.9986
        ]
      },
      {
        "frame": 19,
        "time": 0.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0561,
          0.9984
        ]
      },
      {
        "frame": 20,
        "time": 0.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0578,
          0.9983
        ]
      },
      {
        "frame": 21,
        "time": 0.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.059,
          0.9983
        ]
      },
      {
        "frame": 22,
        "time": 0.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0597,
          0.9982
        ]
      },
      {
        "frame": 23,
        "time": 0.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0599,
          0.9982
        ]
      },
      {
        "frame": 24,
        "time": 0.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 25,
        "time": 0.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 26,
        "time": 0.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 27,
        "time": 0.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 28,
        "time": 0.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 29,
        "time": 0.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 30,
        "time": 1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 31,
        "time": 1.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 32,
        "time": 1.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 33,
        "time": 1.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 34,
        "time": 1.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 35,
        "time": 1.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 36,
        "time": 1.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 37,
        "time": 1.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 38,
        "time": 1.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 39,
        "time": 1.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 40,
        "time": 1.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 41,
        "time": 1.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 42,
        "time": 1.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 43,
        "time": 1.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 44,
        "time": 1.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 45,
        "time": 1.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 46,
        "time": 1.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 47,
        "time": 1.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 48,
        "time": 1.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 49,
        "time": 1.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 50,
        "time": 1.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 51,
        "time": 1.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 52,
        "time": 1.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 53,
        "time": 1.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 54,
        "time": 1.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 55,
        "time": 1.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 56,
        "time": 1.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 57,
        "time": 1.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 58,
        "time": 1.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 59,
        "time": 1.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 60,
        "time": 2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 61,
        "time": 2.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 62,
        "time": 2.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 63,
        "time": 2.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 64,
        "time": 2.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 65,
        "time": 2.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 66,
        "time": 2.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 67,
        "time": 2.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 68,
        "time": 2.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 69,
        "time": 2.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 70,
        "time": 2.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 71,
        "time": 2.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 72,
        "time": 2.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 73,
        "time": 2.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 74,
        "time": 2.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 75,
        "time": 2.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 76,
        "time": 2.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 77,
        "time": 2.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 78,
        "time": 2.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 79,
        "time": 2.6333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 80,
        "time": 2.6667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 81,
        "time": 2.7,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 82,
        "time": 2.7333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 83,
        "time": 2.7667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 84,
        "time": 2.8,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.06,
          0.9982
        ]
      },
      {
        "frame": 85,
        "time": 2.8333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0599,
          0.9982
        ]
      },
      {
        "frame": 86,
        "time": 2.8667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0597,
          0.9982
        ]
      },
      {
        "frame": 87,
        "time": 2.9,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.059,
          0.9983
        ]
      },
      {
        "frame": 88,
        "time": 2.9333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0578,
          0.9983
        ]
      },
      {
        "frame": 89,
        "time": 2.9667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0561,
          0.9984
        ]
      },
      {
        "frame": 90,
        "time": 3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0538,
          0.9986
        ]
      },
      {
        "frame": 91,
        "time": 3.0333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0508,
          0.9987
        ]
      },
      {
        "frame": 92,
        "time": 3.0667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0474,
          0.9989
        ]
      },
      {
        "frame": 93,
        "time": 3.1,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0435,
          0.9991
        ]
      },
      {
        "frame": 94,
        "time": 3.1333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0392,
          0.9992
        ]
      },
      {
        "frame": 95,
        "time": 3.1667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0347,
          0.9994
        ]
      },
      {
        "frame": 96,
        "time": 3.2,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.03,
          0.9996
        ]
      },
      {
        "frame": 97,
        "time": 3.2333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0253,
          0.9997
        ]
      },
      {
        "frame": 98,
        "time": 3.2667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0208,
          0.9998
        ]
      },
      {
        "frame": 99,
        "time": 3.3,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0165,
          0.9999
        ]
      },
      {
        "frame": 100,
        "time": 3.3333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0126,
          0.9999
        ]
      },
      {
        "frame": 101,
        "time": 3.3667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0091,
          1
        ]
      },
      {
        "frame": 102,
        "time": 3.4,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0062,
          1
        ]
      },
      {
        "frame": 103,
        "time": 3.4333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0039,
          1
        ]
      },
      {
        "frame": 104,
        "time": 3.4667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0021,
          1
        ]
      },
      {
        "frame": 105,
        "time": 3.5,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.001,
          1
        ]
      },
      {
        "frame": 106,
        "time": 3.5333,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0.0003,
          1
        ]
      },
      {
        "frame": 107,
        "time": 3.5667,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      },
      {
        "frame": 108,
        "time": 3.6,
        "position": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0,
          1
        ]
      }
    ]
  },
  "morphs": {
    "笑い": [
      {
        "frame": 0,
        "time": 0,
        "weight": 0
      },
      {
        "frame": 1,
        "time": 0.0333,
        "weight": 0.0006
      },
      {
        "frame": 2,
        "time": 0.0667,
        "weight": 0.0043
      },
      {
        "frame": 3,
        "time": 0.1,
        "weight": 0.0136
      },
      {
        "frame": 4,
        "time": 0.1333,
        "weight": 0.0302
      },
      {
        "frame": 5,
        "time": 0.1667,
        "weight": 0.0548
      },
      {
        "frame": 6,
        "time": 0.2,
        "weight": 0.088
      },
      {
        "frame": 7,
        "time": 0.2333,
        "weight": 0.1294
      },
      {
        "frame": 8,
        "time": 0.2667,
        "weight": 0.1784
      },
      {
        "frame": 9,
        "time": 0.3,
        "weight": 0.2339
      },
      {
        "frame": 10,
        "time": 0.3333,
        "weight": 0.2946
      },
      {
        "frame": 11,
        "time": 0.3667,
        "weight": 0.3589
      },
      {
        "frame": 12,
        "time": 0.4,
        "weight": 0.425
      },
      {
        "frame": 13,
        "time": 0.4333,
        "weight": 0.4911
      },
      {
        "frame": 14,
        "time": 0.4667,
        "weight": 0.5554
      },
      {
        "frame": 15,
        "time": 0.5,
        "weight": 0.6161
      },
      {
        "frame": 16,
        "time": 0.5333,
        "weight": 0.6716
      },
      {
        "frame": 17,
        "time": 0.5667,
        "weight": 0.7206
      },
      {
        "frame": 18,
        "time": 0.6,
        "weight": 0.762
      },
      {
        "frame": 19,
        "time": 0.6333,
        "weight": 0.7952
      },
      {
        "frame": 20,
        "time": 0.6667,
        "weight": 0.8198
      },
      {
        "frame": 21,
        "time": 0.7,
        "weight": 0.8364
      },
      {
        "frame": 22,
        "time": 0.7333,
        "weight": 0.8457
      },
      {
        "frame": 23,
        "time": 0.7667,
        "weight": 0.8494
      },
      {
        "frame": 24,
        "time": 0.8,
        "weight": 0.85
      },
      {
        "frame": 25,
        "time": 0.8333,
        "weight": 0.85
      },
      {
        "frame": 26,
        "time": 0.8667,
        "weight": 0.85
      },
      {
        "frame": 27,
        "time": 0.9,
        "weight": 0.85
      },
      {
        "frame": 28,
        "time": 0.9333,
        "weight": 0.85
      },
      {
        "frame": 29,
        "time": 0.9667,
        "weight": 0.85
      },
      {
        "frame": 30,
        "time": 1,
        "weight": 0.85
      },
      {
        "frame": 31,
        "time": 1.0333,
        "weight": 0.85
      },
      {
        "frame": 32,
        "time": 1.0667,
        "weight": 0.85
      },
      {
        "frame": 33,
        "time": 1.1,
        "weight": 0.85
      },
      {
        "frame": 34,
        "time": 1.1333,
        "weight": 0.85
      },
      {
        "frame": 35,
        "time": 1.1667,
        "weight": 0.85
      },
      {
        "frame": 36,
        "time": 1.2,
        "weight": 0.85
      },
      {
        "frame": 37,
        "time": 1.2333,
        "weight": 0.85
      },
      {
        "frame": 38,
        "time": 1.2667,
        "weight": 0.85
      },
      {
        "frame": 39,
        "time": 1.3,
        "weight": 0.85
      },
      {
        "frame": 40,
        "time": 1.3333,
        "weight": 0.85
      },
      {
        "frame": 41,
        "time": 1.3667,
        "weight": 0.85
      },
      {
        "frame": 42,
        "time": 1.4,
        "weight": 0.85
      },
      {
        "frame": 43,
        "time": 1.4333,
        "weight": 0.85
      },
      {
        "frame": 44,
        "time": 1.4667,
        "weight": 0.85
      },
      {
        "frame": 45,
        "time": 1.5,
        "weight": 0.85
      },
      {
        "frame": 46,
        "time": 1.5333,
        "weight": 0.85
      },
      {
        "frame": 47,
        "time": 1.5667,
        "weight": 0.85
      },
      {
        "frame": 48,
        "time": 1.6,
        "weight": 0.85
      },
      {
        "frame": 49,
        "time": 1.6333,
        "weight": 0.85
      },
      {
        "frame": 50,
        "time": 1.6667,
        "weight": 0.85
      },
      {
        "frame": 51,
        "time": 1.7,
        "weight": 0.85
      },
      {
        "frame": 52,
        "time": 1.7333,
        "weight": 0.85
      },
      {
        "frame": 53,
        "time": 1.7667,
        "weight": 0.85
      },
      {
        "frame": 54,
        "time": 1.8,
        "weight": 0.85
      },
      {
        "frame": 55,
        "time": 1.8333,
        "weight": 0.85
      },
      {
        "frame": 56,
        "time": 1.8667,
        "weight": 0.85
      },
      {
        "frame": 57,
        "time": 1.9,
        "weight": 0.85
      },
      {
        "frame": 58,
        "time": 1.9333,
        "weight": 0.85
      },
      {
        "frame": 59,
        "time": 1.9667,
        "weight": 0.85
      },
      {
        "frame": 60,
        "time": 2,
        "weight": 0.85
      },
      {
        "frame": 61,
        "time": 2.0333,
        "weight": 0.85
      },
      {
        "frame": 62,
        "time": 2.0667,
        "weight": 0.85
      },
      {
        "frame": 63,
        "time": 2.1,
        "weight": 0.85
      },
      {
        "frame": 64,
        "time": 2.1333,
        "weight": 0.85
      },
      {
        "frame": 65,
        "time": 2.1667,
        "weight": 0.85
      },
      {
        "frame": 66,
        "time": 2.2,
        "weight": 0.85
      },
      {
        "frame": 67,
        "time": 2.2333,
        "weight": 0.85
      },
      {
        "frame": 68,
        "time": 2.2667,
        "weight": 0.85
      },
      {
        "frame": 69,
        "time": 2.3,
        "weight": 0.85
      },
      {
        "frame": 70,
        "time": 2.3333,
        "weight": 0.85
      },
      {
        "frame": 71,
        "time": 2.3667,
        "weight": 0.85
      },
      {
        "frame": 72,
        "time": 2.4,
        "weight": 0.85
      },
      {
        "frame": 73,
        "time": 2.4333,
        "weight": 0.85
      },
      {
        "frame": 74,
        "time": 2.4667,
        "weight": 0.85
      },
      {
        "frame": 75,
        "time": 2.5,
        "weight": 0.85
      },
      {
        "frame": 76,
        "time": 2.5333,
        "weight": 0.85
      },
      {
        "frame": 77,
        "time": 2.5667,
        "weight": 0.85
      },
      {
        "frame": 78,
        "time": 2.6,
        "weight": 0.85
      },
      {
        "frame": 79,
        "time": 2.6333,
        "weight": 0.85
      },
      {
        "frame": 80,
        "time": 2.6667,
        "weight": 0.85
      },
      {
        "frame": 81,
        "time": 2.7,
        "weight": 0.85
      },
      {
        "frame": 82,
        "time": 2.7333,
        "weight": 0.85
      },
      {
        "frame": 83,
        "time": 2.7667,
        "weight": 0.85
      },
      {
        "frame": 84,
        "time": 2.8,
        "weight": 0.85
      },
      {
        "frame": 85,
        "time": 2.8333,
        "weight": 0.8494
      },
      {
        "frame": 86,
        "time": 2.8667,
        "weight": 0.8457
      },
      {
        "frame": 87,
        "time": 2.9,
        "weight": 0.8364
      },
      {
        "frame": 88,
        "time": 2.9333,
        "weight": 0.8198
      },
      {
        "frame": 89,
        "time": 2.9667,
        "weight": 0.7952
      },
      {
        "frame": 90,
        "time": 3,
        "weight": 0.762
      },
      {
        "frame": 91,
        "time": 3.0333,
        "weight": 0.7206
      },
      {
        "frame": 92,
        "time": 3.0667,
        "weight": 0.6716
      },
      {
        "frame": 93,
        "time": 3.1,
        "weight": 0.6161
      },
      {
        "frame": 94,
        "time": 3.1333,
        "weight": 0.5554
      },
      {
        "frame": 95,
        "time": 3.1667,
        "weight": 0.4911
      },
      {
        "frame": 96,
        "time": 3.2,
        "weight": 0.425
      },
      {
        "frame": 97,
        "time": 3.2333,
        "weight": 0.3589
      },
      {
        "frame": 98,
        "time": 3.2667,
        "weight": 0.2946
      },
      {
        "frame": 99,
        "time": 3.3,
        "weight": 0.2339
      },
      {
        "frame": 100,
        "time": 3.3333,
        "weight": 0.1784
      },
      {
        "frame": 101,
        "time": 3.3667,
        "weight": 0.1294
      },
      {
        "frame": 102,
        "time": 3.4,
        "weight": 0.088
      },
      {
        "frame": 103,
        "time": 3.4333,
        "weight": 0.0548
      },
      {
        "frame": 104,
        "time": 3.4667,
        "weight": 0.0302
      },
      {
        "frame": 105,
        "time": 3.5,
        "weight": 0.0136
      },
      {
        "frame": 106,
        "time": 3.5333,
        "weight": 0.0043
      },
      {
        "frame": 107,
        "time": 3.5667,
        "weight": 0.0006
      },
      {
        "frame": 108,
        "time": 3.6,
        "weight": 0
      }
    ],
    "照れ": [
      {
        "frame": 0,
        "time": 0,
        "weight": 0
      },
      {
        "frame": 1,
        "time": 0.0333,
        "weight": 0.0002
      },
      {
        "frame": 2,
        "time": 0.0667,
        "weight": 0.0013
      },
      {
        "frame": 3,
        "time": 0.1,
        "weight": 0.004
      },
      {
        "frame": 4,
        "time": 0.1333,
        "weight": 0.0089
      },
      {
        "frame": 5,
        "time": 0.1667,
        "weight": 0.0161
      },
      {
        "frame": 6,
        "time": 0.2,
        "weight": 0.0259
      },
      {
        "frame": 7,
        "time": 0.2333,
        "weight": 0.0381
      },
      {
        "frame": 8,
        "time": 0.2667,
        "weight": 0.0525
      },
      {
        "frame": 9,
        "time": 0.3,
        "weight": 0.0688
      },
      {
        "frame": 10,
        "time": 0.3333,
        "weight": 0.0867
      },
      {
        "frame": 11,
        "time": 0.3667,
        "weight": 0.1056
      },
      {
        "frame": 12,
        "time": 0.4,
        "weight": 0.125
      },
      {
        "frame": 13,
        "time": 0.4333,
        "weight": 0.1444
      },
      {
        "frame": 14,
        "time": 0.4667,
        "weight": 0.1633
      },
      {
        "frame": 15,
        "time": 0.5,
        "weight": 0.1812
      },
      {
        "frame": 16,
        "time": 0.5333,
        "weight": 0.1975
      },
      {
        "frame": 17,
        "time": 0.5667,
        "weight": 0.2119
      },
      {
        "frame": 18,
        "time": 0.6,
        "weight": 0.2241
      },
      {
        "frame": 19,
        "time": 0.6333,
        "weight": 0.2339
      },
      {
        "frame": 20,
        "time": 0.6667,
        "weight": 0.2411
      },
      {
        "frame": 21,
        "time": 0.7,
        "weight": 0.246
      },
      {
        "frame": 22,
        "time": 0.7333,
        "weight": 0.2487
      },
      {
        "frame": 23,
        "time": 0.7667,
        "weight": 0.2498
      },
      {
        "frame": 24,
        "time": 0.8,
        "weight": 0.25
      },
      {
        "frame": 25,
        "time": 0.8333,
        "weight": 0.25
      },
      {
        "frame": 26,
        "time": 0.8667,
        "weight": 0.25
      },
      {
        "frame": 27,
        "time": 0.9,
        "weight": 0.25
      },
      {
        "frame": 28,
        "time": 0.9333,
        "weight": 0.25
      },
      {
        "frame": 29,
        "time": 0.9667,
        "weight": 0.25
      },
      {
        "frame": 30,
        "time": 1,
        "weight": 0.25
      },
      {
        "frame": 31,
        "time": 1.0333,
        "weight": 0.25
      },
      {
        "frame": 32,
        "time": 1.0667,
        "weight": 0.25
      },
      {
        "frame": 33,
        "time": 1.1,
        "weight": 0.25
      },
      {
        "frame": 34,
        "time": 1.1333,
        "weight": 0.25
      },
      {
        "frame": 35,
        "time": 1.1667,
        "weight": 0.25
      },
      {
        "frame": 36,
        "time": 1.2,
        "weight": 0.25
      },
      {
        "frame": 37,
        "time": 1.2333,
        "weight": 0.25
      },
      {
        "frame": 38,
        "time": 1.2667,
        "weight": 0.25
      },
      {
        "frame": 39,
        "time": 1.3,
        "weight": 0.25
      },
      {
        "frame": 40,
        "time": 1.3333,
        "weight": 0.25
      },
      {
        "frame": 41,
        "time": 1.3667,
        "weight": 0.25
      },
      {
        "frame": 42,
        "time": 1.4,
        "weight": 0.25
      },
      {
        "frame": 43,
        "time": 1.4333,
        "weight": 0.25
      },
      {
        "frame": 44,
        "time": 1.4667,
        "weight": 0.25
      },
      {
        "frame": 45,
        "time": 1.5,
        "weight": 0.25
      },
      {
        "frame": 46,
        "time": 1.5333,
        "weight": 0.25
      },
      {
        "frame": 47,
        "time": 1.5667,
        "weight": 0.25
      },
      {
        "frame": 48,
        "time": 1.6,
        "weight": 0.25
      },
      {
        "frame": 49,
        "time": 1.6333,
        "weight": 0.25
      },
      {
        "frame": 50,
        "time": 1.6667,
        "weight": 0.25
      },
      {
        "frame": 51,
        "time": 1.7,
        "weight": 0.25
      },
      {
        "frame": 52,
        "time": 1.7333,
        "weight": 0.25
      },
      {
        "frame": 53,
        "time": 1.7667,
        "weight": 0.25
      },
      {
        "frame": 54,
        "time": 1.8,
        "weight": 0.25
      },
      {
        "frame": 55,
        "time": 1.8333,
        "weight": 0.25
      },
      {
        "frame": 56,
        "time": 1.8667,
        "weight": 0.25
      },
      {
        "frame": 57,
        "time": 1.9,
        "weight": 0.25
      },
      {
        "frame": 58,
        "time": 1.9333,
        "weight": 0.25
      },
      {
        "frame": 59,
        "time": 1.9667,
        "weight": 0.25
      },
      {
        "frame": 60,
        "time": 2,
        "weight": 0.25
      },
      {
        "frame": 61,
        "time": 2.0333,
        "weight": 0.25
      },
      {
        "frame": 62,
        "time": 2.0667,
        "weight": 0.25
      },
      {
        "frame": 63,
        "time": 2.1,
        "weight": 0.25
      },
      {
        "frame": 64,
        "time": 2.1333,
        "weight": 0.25
      },
      {
        "frame": 65,
        "time": 2.1667,
        "weight": 0.25
      },
      {
        "frame": 66,
        "time": 2.2,
        "weight": 0.25
      },
      {
        "frame": 67,
        "time": 2.2333,
        "weight": 0.25
      },
      {
        "frame": 68,
        "time": 2.2667,
        "weight": 0.25
      },
      {
        "frame": 69,
        "time": 2.3,
        "weight": 0.25
      },
      {
        "frame": 70,
        "time": 2.3333,
        "weight": 0.25
      },
      {
        "frame": 71,
        "time": 2.3667,
        "weight": 0.25
      },
      {
        "frame": 72,
        "time": 2.4,
        "weight": 0.25
      },
      {
        "frame": 73,
        "time": 2.4333,
        "weight": 0.25
      },
      {
        "frame": 74,
        "time": 2.4667,
        "weight": 0.25
      },
      {
        "frame": 75,
        "time": 2.5,
        "weight": 0.25
      },
      {
        "frame": 76,
        "time": 2.5333,
        "weight": 0.25
      },
      {
        "frame": 77,
        "time": 2.5667,
        "weight": 0.25
      },
      {
        "frame": 78,
        "time": 2.6,
        "weight": 0.25
      },
      {
        "frame": 79,
        "time": 2.6333,
        "weight": 0.25
      },
      {
        "frame": 80,
        "time": 2.6667,
        "weight": 0.25
      },
      {
        "frame": 81,
        "time": 2.7,
        "weight": 0.25
      },
      {
        "frame": 82,
        "time": 2.7333,
        "weight": 0.25
      },
      {
        "frame": 83,
        "time": 2.7667,
        "weight": 0.25
      },
      {
        "frame": 84,
        "time": 2.8,
        "weight": 0.25
      },
      {
        "frame": 85,
        "time": 2.8333,
        "weight": 0.2498
      },
      {
        "frame": 86,
        "time": 2.8667,
        "weight": 0.2487
      },
      {
        "frame": 87,
        "time": 2.9,
        "weight": 0.246
      },
      {
        "frame": 88,
        "time": 2.9333,
        "weight": 0.2411
      },
      {
        "frame": 89,
        "time": 2.9667,
        "weight": 0.2339
      },
      {
        "frame": 90,
        "time": 3,
        "weight": 0.2241
      },
      {
        "frame": 91,
        "time": 3.0333,
        "weight": 0.2119
      },
      {
        "frame": 92,
        "time": 3.0667,
        "weight": 0.1975
      },
      {
        "frame": 93,
        "time": 3.1,
        "weight": 0.1812
      },
      {
        "frame": 94,
        "time": 3.1333,
        "weight": 0.1633
      },
      {
        "frame": 95,
        "time": 3.1667,
        "weight": 0.1444
      },
      {
        "frame": 96,
        "time": 3.2,
        "weight": 0.125
      },
      {
        "frame": 97,
        "time": 3.2333,
        "weight": 0.1056
      },
      {
        "frame": 98,
        "time": 3.2667,
        "weight": 0.0867
      },
      {
        "frame": 99,
        "time": 3.3,
        "weight": 0.0688
      },
      {
        "frame": 100,
        "time": 3.3333,
        "weight": 0.0525
      },
      {
        "frame": 101,
        "time": 3.3667,
        "weight": 0.0381
      },
      {
        "frame": 102,
        "time": 3.4,
        "weight": 0.0259
      },
      {
        "frame": 103,
        "time": 3.4333,
        "weight": 0.0161
      },
      {
        "frame": 104,
        "time": 3.4667,
        "weight": 0.0089
      },
      {
        "frame": 105,
        "time": 3.5,
        "weight": 0.004
      },
      {
        "frame": 106,
        "time": 3.5333,
        "weight": 0.0013
      },
      {
        "frame": 107,
        "time": 3.5667,
        "weight": 0.0002
      },
      {
        "frame": 108,
        "time": 3.6,
        "weight": 0
      }
    ]
  }
};

export default gentleWaveMotion;
