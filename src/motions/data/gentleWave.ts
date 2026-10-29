import type { IVmdStructuredMotion } from '../types';

/**
 * Otentik Lambaian Tangan MMD (Genuine Friendly Anime Hand Wave)
 * Didesain presisi dari anatomi model Chen (chen.pmx):
 * - Tangan terangkat ke samping-depan di area terbuka (x=-3.41, y=18.19, z=3.15),
 *   JAUH dari kepala/telinga sehingga TIDAK mirip garuk-garuk!
 * - Telapak tangan menghadap ke depan ke arah Dokutah.
 * - Pergelangan tangan (右手首) melambai ritmis kiri-kanan (~0.9s per gelombang).
 * - Artikulasi 15 jari (ibu jari, telunjuk, tengah, manis, kelingking) terbuka santai.
 * - Senyuman ramah anime (笑い) dan kontak mata alami mengikuti kursor.
 */
export const gentleWaveMotion: IVmdStructuredMotion = {
  "metadata": {
    "version": "Vocaloid Motion Data 0002",
    "modelName": "Chen_GentleWave",
    "totalFrames": 90,
    "durationSeconds": 3,
    "fps": 30,
    "coordSystem": "raw"
  },
  "bones": {
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
          -0.0002,
          0.0002,
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
          -0.0006,
          0.0009,
          0.0015,
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
          -0.0014,
          0.0019,
          0.0033,
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
          -0.0024,
          0.0033,
          0.0056,
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
          -0.0036,
          0.0049,
          0.0084,
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
          -0.0049,
          0.0067,
          0.0115,
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
          -0.0063,
          0.0087,
          0.0149,
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
          -0.0079,
          0.0108,
          0.0185,
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
          -0.0094,
          0.0129,
          0.0222,
          0.9996
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
          -0.011,
          0.0151,
          0.0259,
          0.9995
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
          -0.0125,
          0.0172,
          0.0295,
          0.9993
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
          -0.014,
          0.0192,
          0.0329,
          0.9992
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
          -0.0153,
          0.021,
          0.0361,
          0.999
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
          -0.0165,
          0.0226,
          0.0389,
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
          -0.0175,
          0.024,
          0.0412,
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
          -0.0182,
          0.025,
          0.0429,
          0.9986
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
          -0.0187,
          0.0256,
          0.0441,
          0.9985
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
          -0.0188,
          0.0259,
          0.0445,
          0.9985
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
          -0.0188,
          0.0259,
          0.0445,
          0.9985
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
          -0.0188,
          0.0259,
          0.0445,
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
          -0.0188,
          0.0259,
          0.0445,
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
          -0.0188,
          0.0259,
          0.0445,
          0.9985
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
          -0.0188,
          0.0259,
          0.0445,
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
          -0.0188,
          0.0259,
          0.0445,
          0.9985
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
          -0.0188,
          0.0259,
          0.0445,
          0.9985
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
          -0.0188,
          0.0259,
          0.0445,
          0.9985
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
          -0.0188,
          0.0259,
          0.0445,
          0.9985
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
          -0.0188,
          0.0259,
          0.0445,
          0.9985
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
          -0.0188,
          0.0259,
          0.0445,
          0.9985
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
          -0.0188,
          0.0259,
          0.0445,
          0.9985
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
          -0.0188,
          0.0259,
          0.0445,
          0.9985
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
          -0.0188,
          0.0259,
          0.0445,
          0.9985
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
          -0.0188,
          0.0259,
          0.0445,
          0.9985
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
          -0.0188,
          0.0259,
          0.0445,
          0.9985
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
          -0.0188,
          0.0259,
          0.0445,
          0.9985
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
          -0.0188,
          0.0259,
          0.0445,
          0.9985
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
          -0.0188,
          0.0259,
          0.0445,
          0.9985
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
          -0.0188,
          0.0259,
          0.0445,
          0.9985
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
          -0.0188,
          0.0259,
          0.0445,
          0.9985
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
          -0.0188,
          0.0259,
          0.0445,
          0.9985
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
          -0.0188,
          0.0259,
          0.0445,
          0.9985
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
          -0.0188,
          0.0259,
          0.0445,
          0.9985
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
          -0.0188,
          0.0259,
          0.0445,
          0.9985
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
          -0.0188,
          0.0259,
          0.0445,
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
          -0.0188,
          0.0259,
          0.0445,
          0.9985
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
          -0.0188,
          0.0259,
          0.0445,
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
          -0.0188,
          0.0259,
          0.0445,
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
          -0.0188,
          0.0259,
          0.0445,
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
          -0.0188,
          0.0259,
          0.0445,
          0.9985
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
          -0.0188,
          0.0259,
          0.0445,
          0.9985
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
          -0.0188,
          0.0259,
          0.0445,
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
          -0.0188,
          0.0259,
          0.0445,
          0.9985
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
          -0.0188,
          0.0259,
          0.0445,
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
          -0.0188,
          0.0259,
          0.0445,
          0.9985
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
          -0.0188,
          0.0259,
          0.0445,
          0.9985
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
          -0.0188,
          0.0259,
          0.0445,
          0.9985
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
          -0.0188,
          0.0259,
          0.0445,
          0.9985
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
          -0.0188,
          0.0259,
          0.0445,
          0.9985
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
          -0.0188,
          0.0259,
          0.0445,
          0.9985
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
          -0.0188,
          0.0259,
          0.0445,
          0.9985
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
          -0.0188,
          0.0259,
          0.0445,
          0.9985
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
          -0.0188,
          0.0259,
          0.0445,
          0.9985
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
          -0.0188,
          0.0259,
          0.0445,
          0.9985
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
          -0.0188,
          0.0259,
          0.0445,
          0.9985
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
          -0.0188,
          0.0259,
          0.0445,
          0.9985
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
          -0.0188,
          0.0259,
          0.0445,
          0.9985
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
          -0.0188,
          0.0259,
          0.0445,
          0.9985
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
          -0.0188,
          0.0259,
          0.0445,
          0.9985
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
          -0.0188,
          0.0259,
          0.0445,
          0.9985
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
          -0.0188,
          0.0259,
          0.0445,
          0.9985
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
          -0.0188,
          0.0259,
          0.0445,
          0.9985
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
          -0.0188,
          0.0259,
          0.0445,
          0.9985
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
          -0.0187,
          0.0256,
          0.0441,
          0.9985
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
          -0.0182,
          0.025,
          0.0429,
          0.9986
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
          -0.0175,
          0.024,
          0.0412,
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
          -0.0165,
          0.0226,
          0.0389,
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
          -0.0153,
          0.021,
          0.0361,
          0.999
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
          -0.014,
          0.0192,
          0.0329,
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
          -0.0125,
          0.0172,
          0.0295,
          0.9993
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
          -0.011,
          0.0151,
          0.0259,
          0.9995
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
          -0.0094,
          0.0129,
          0.0222,
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
          -0.0079,
          0.0108,
          0.0185,
          0.9997
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
          -0.0063,
          0.0087,
          0.0149,
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
          -0.0049,
          0.0067,
          0.0115,
          0.9999
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
          -0.0036,
          0.0049,
          0.0084,
          0.9999
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
          -0.0024,
          0.0033,
          0.0056,
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
          -0.0014,
          0.0019,
          0.0033,
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
          -0.0006,
          0.0009,
          0.0015,
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
          -0.0002,
          0.0002,
          0.0004,
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
          0.0023,
          -0.0033,
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
          0.0088,
          -0.0128,
          0.0003,
          0.9999
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
          0.019,
          -0.0276,
          0.0006,
          0.9994
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
          0.0323,
          -0.047,
          0.001,
          0.9984
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
          0.0483,
          -0.0702,
          0.0014,
          0.9964
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
          0.0663,
          -0.0964,
          0.002,
          0.9931
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
          0.0858,
          -0.1247,
          0.0025,
          0.9885
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
          0.1063,
          -0.1544,
          0.0031,
          0.9823
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
          0.1271,
          -0.1847,
          0.0038,
          0.9745
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
          0.1477,
          -0.2147,
          0.0044,
          0.9654
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
          0.1677,
          -0.2436,
          0.005,
          0.9553
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
          0.1864,
          -0.2708,
          0.0055,
          0.9444
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
          0.2034,
          -0.2955,
          0.006,
          0.9334
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
          0.2182,
          -0.3171,
          0.0065,
          0.9229
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
          0.2305,
          -0.335,
          0.0068,
          0.9136
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
          0.2398,
          -0.3484,
          0.0071,
          0.9061
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
          0.2457,
          -0.357,
          0.0073,
          0.9012
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
          0.2477,
          -0.36,
          0.0073,
          0.8994
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
          0.2471,
          -0.3604,
          0.0089,
          0.8994
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
          0.2465,
          -0.3608,
          0.0104,
          0.8994
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
          0.2459,
          -0.3612,
          0.0119,
          0.8994
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
          0.2453,
          -0.3616,
          0.0134,
          0.8994
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
          0.2447,
          -0.362,
          0.0147,
          0.8994
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
          0.2442,
          -0.3623,
          0.016,
          0.8993
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
          0.2438,
          -0.3627,
          0.0171,
          0.8993
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
          0.2434,
          -0.3629,
          0.0181,
          0.8993
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
          0.243,
          -0.3632,
          0.019,
          0.8993
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
          0.2427,
          -0.3634,
          0.0197,
          0.8993
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
          0.2425,
          -0.3635,
          0.0202,
          0.8992
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
          0.2424,
          -0.3636,
          0.0206,
          0.8992
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
          0.2423,
          -0.3636,
          0.0208,
          0.8992
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
          0.2423,
          -0.3636,
          0.0208,
          0.8992
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
          0.2424,
          -0.3636,
          0.0206,
          0.8992
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
          0.2425,
          -0.3635,
          0.0202,
          0.8992
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
          0.2427,
          -0.3634,
          0.0197,
          0.8993
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
          0.243,
          -0.3632,
          0.019,
          0.8993
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
          0.2434,
          -0.3629,
          0.0181,
          0.8993
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
          0.2438,
          -0.3627,
          0.0171,
          0.8993
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
          0.2442,
          -0.3623,
          0.016,
          0.8993
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
          0.2447,
          -0.362,
          0.0147,
          0.8994
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
          0.2453,
          -0.3616,
          0.0134,
          0.8994
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
          0.2459,
          -0.3612,
          0.0119,
          0.8994
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
          0.2465,
          -0.3608,
          0.0104,
          0.8994
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
          0.2471,
          -0.3604,
          0.0089,
          0.8994
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
          0.2477,
          -0.36,
          0.0073,
          0.8994
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
          0.2483,
          -0.3595,
          0.0058,
          0.8995
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
          0.249,
          -0.3591,
          0.0042,
          0.8995
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
          0.2496,
          -0.3587,
          0.0027,
          0.8995
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
          0.2501,
          -0.3583,
          0.0013,
          0.8995
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
          0.2507,
          -0.3579,
          -0.0001,
          0.8995
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
          0.2512,
          -0.3576,
          -0.0013,
          0.8995
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
          0.2516,
          -0.3573,
          -0.0025,
          0.8995
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
          0.252,
          -0.357,
          -0.0035,
          0.8995
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
          0.2524,
          -0.3567,
          -0.0044,
          0.8995
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
          0.2526,
          -0.3565,
          -0.0051,
          0.8995
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
          0.2529,
          -0.3564,
          -0.0056,
          0.8995
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
          0.253,
          -0.3563,
          -0.006,
          0.8995
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
          0.2531,
          -0.3562,
          -0.0061,
          0.8995
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
          0.2531,
          -0.3562,
          -0.0061,
          0.8995
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
          0.253,
          -0.3563,
          -0.006,
          0.8995
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
          0.2529,
          -0.3564,
          -0.0056,
          0.8995
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
          0.2526,
          -0.3565,
          -0.0051,
          0.8995
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
          0.2524,
          -0.3567,
          -0.0044,
          0.8995
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
          0.252,
          -0.357,
          -0.0035,
          0.8995
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
          0.2516,
          -0.3573,
          -0.0025,
          0.8995
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
          0.2512,
          -0.3576,
          -0.0013,
          0.8995
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
          0.2507,
          -0.3579,
          -0.0001,
          0.8995
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
          0.2501,
          -0.3583,
          0.0013,
          0.8995
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
          0.2496,
          -0.3587,
          0.0027,
          0.8995
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
          0.249,
          -0.3591,
          0.0042,
          0.8995
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
          0.2483,
          -0.3595,
          0.0058,
          0.8995
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
          0.2477,
          -0.36,
          0.0073,
          0.8994
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
          0.2457,
          -0.357,
          0.0073,
          0.9012
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
          0.2398,
          -0.3484,
          0.0071,
          0.9061
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
          0.2305,
          -0.335,
          0.0068,
          0.9136
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
          0.2182,
          -0.3171,
          0.0065,
          0.9229
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
          0.2034,
          -0.2955,
          0.006,
          0.9334
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
          0.1864,
          -0.2708,
          0.0055,
          0.9444
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
          0.1677,
          -0.2436,
          0.005,
          0.9553
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
          0.1477,
          -0.2147,
          0.0044,
          0.9654
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
          0.1271,
          -0.1847,
          0.0038,
          0.9745
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
          0.1063,
          -0.1544,
          0.0031,
          0.9823
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
          0.0858,
          -0.1247,
          0.0025,
          0.9885
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
          0.0663,
          -0.0964,
          0.002,
          0.9931
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
          0.0483,
          -0.0702,
          0.0014,
          0.9964
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
          0.0323,
          -0.047,
          0.001,
          0.9984
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
          0.019,
          -0.0276,
          0.0006,
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
          0.0088,
          -0.0128,
          0.0003,
          0.9999
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
          0.0023,
          -0.0033,
          0.0001,
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
          0.0019,
          -0.0028,
          -0.0054,
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
          0.0072,
          -0.0108,
          -0.0209,
          0.9997
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
          0.0155,
          -0.0234,
          -0.045,
          0.9986
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
          0.0265,
          -0.0398,
          -0.0766,
          0.9959
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
          0.0395,
          -0.0593,
          -0.1144,
          0.9909
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
          0.0541,
          -0.0813,
          -0.1568,
          0.9828
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
          0.0699,
          -0.105,
          -0.2024,
          0.9711
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
          0.0863,
          -0.1296,
          -0.2499,
          0.9557
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
          0.1028,
          -0.1544,
          -0.2976,
          0.9365
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
          0.1189,
          -0.1786,
          -0.3443,
          0.914
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
          0.1342,
          -0.2016,
          -0.3887,
          0.8889
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
          0.1484,
          -0.2228,
          -0.4297,
          0.8624
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
          0.161,
          -0.2417,
          -0.4661,
          0.8357
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
          0.1717,
          -0.2579,
          -0.4974,
          0.8103
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
          0.1805,
          -0.2711,
          -0.5227,
          0.7878
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
          0.187,
          -0.2809,
          -0.5416,
          0.77
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
          0.1911,
          -0.287,
          -0.5534,
          0.7582
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
          0.1925,
          -0.2891,
          -0.5575,
          0.7541
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
          0.1925,
          -0.2891,
          -0.5575,
          0.7541
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
          0.1925,
          -0.2891,
          -0.5575,
          0.7541
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
          0.1925,
          -0.2891,
          -0.5575,
          0.7541
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
          0.1925,
          -0.2891,
          -0.5575,
          0.7541
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
          0.1925,
          -0.2891,
          -0.5575,
          0.7541
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
          0.1925,
          -0.2891,
          -0.5575,
          0.7541
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
          0.1925,
          -0.2891,
          -0.5575,
          0.7541
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
          0.1925,
          -0.2891,
          -0.5575,
          0.7541
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
          0.1925,
          -0.2891,
          -0.5575,
          0.7541
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
          0.1925,
          -0.2891,
          -0.5575,
          0.7541
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
          0.1925,
          -0.2891,
          -0.5575,
          0.7541
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
          0.1925,
          -0.2891,
          -0.5575,
          0.7541
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
          0.1925,
          -0.2891,
          -0.5575,
          0.7541
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
          0.1925,
          -0.2891,
          -0.5575,
          0.7541
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
          0.1925,
          -0.2891,
          -0.5575,
          0.7541
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
          0.1925,
          -0.2891,
          -0.5575,
          0.7541
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
          0.1925,
          -0.2891,
          -0.5575,
          0.7541
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
          0.1925,
          -0.2891,
          -0.5575,
          0.7541
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
          0.1925,
          -0.2891,
          -0.5575,
          0.7541
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
          0.1925,
          -0.2891,
          -0.5575,
          0.7541
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
          0.1925,
          -0.2891,
          -0.5575,
          0.7541
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
          0.1925,
          -0.2891,
          -0.5575,
          0.7541
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
          0.1925,
          -0.2891,
          -0.5575,
          0.7541
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
          0.1925,
          -0.2891,
          -0.5575,
          0.7541
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
          0.1925,
          -0.2891,
          -0.5575,
          0.7541
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
          0.1925,
          -0.2891,
          -0.5575,
          0.7541
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
          0.1925,
          -0.2891,
          -0.5575,
          0.7541
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
          0.1925,
          -0.2891,
          -0.5575,
          0.7541
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
          0.1925,
          -0.2891,
          -0.5575,
          0.7541
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
          0.1925,
          -0.2891,
          -0.5575,
          0.7541
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
          0.1925,
          -0.2891,
          -0.5575,
          0.7541
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
          0.1925,
          -0.2891,
          -0.5575,
          0.7541
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
          0.1925,
          -0.2891,
          -0.5575,
          0.7541
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
          0.1925,
          -0.2891,
          -0.5575,
          0.7541
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
          0.1925,
          -0.2891,
          -0.5575,
          0.7541
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
          0.1925,
          -0.2891,
          -0.5575,
          0.7541
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
          0.1925,
          -0.2891,
          -0.5575,
          0.7541
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
          0.1925,
          -0.2891,
          -0.5575,
          0.7541
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
          0.1925,
          -0.2891,
          -0.5575,
          0.7541
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
          0.1925,
          -0.2891,
          -0.5575,
          0.7541
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
          0.1925,
          -0.2891,
          -0.5575,
          0.7541
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
          0.1925,
          -0.2891,
          -0.5575,
          0.7541
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
          0.1925,
          -0.2891,
          -0.5575,
          0.7541
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
          0.1925,
          -0.2891,
          -0.5575,
          0.7541
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
          0.1925,
          -0.2891,
          -0.5575,
          0.7541
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
          0.1925,
          -0.2891,
          -0.5575,
          0.7541
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
          0.1925,
          -0.2891,
          -0.5575,
          0.7541
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
          0.1925,
          -0.2891,
          -0.5575,
          0.7541
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
          0.1925,
          -0.2891,
          -0.5575,
          0.7541
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
          0.1925,
          -0.2891,
          -0.5575,
          0.7541
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
          0.1925,
          -0.2891,
          -0.5575,
          0.7541
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
          0.1925,
          -0.2891,
          -0.5575,
          0.7541
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
          0.1925,
          -0.2891,
          -0.5575,
          0.7541
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
          0.1925,
          -0.2891,
          -0.5575,
          0.7541
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
          0.1911,
          -0.287,
          -0.5534,
          0.7582
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
          0.187,
          -0.2809,
          -0.5416,
          0.77
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
          0.1805,
          -0.2711,
          -0.5227,
          0.7878
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
          0.1717,
          -0.2579,
          -0.4974,
          0.8103
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
          0.161,
          -0.2417,
          -0.4661,
          0.8357
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
          0.1484,
          -0.2228,
          -0.4297,
          0.8624
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
          0.1342,
          -0.2016,
          -0.3887,
          0.8889
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
          0.1189,
          -0.1786,
          -0.3443,
          0.914
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
          0.1028,
          -0.1544,
          -0.2976,
          0.9365
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
          0.0863,
          -0.1296,
          -0.2499,
          0.9557
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
          0.0699,
          -0.105,
          -0.2024,
          0.9711
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
          0.0541,
          -0.0813,
          -0.1568,
          0.9828
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
          0.0395,
          -0.0593,
          -0.1144,
          0.9909
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
          0.0265,
          -0.0398,
          -0.0766,
          0.9959
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
          0.0155,
          -0.0234,
          -0.045,
          0.9986
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
          0.0072,
          -0.0108,
          -0.0209,
          0.9997
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
          0.0019,
          -0.0028,
          -0.0054,
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
          -0.0006,
          0.0008,
          0.0003,
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
          -0.0023,
          0.0032,
          0.0011,
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
          -0.0049,
          0.0069,
          0.0025,
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
          -0.0084,
          0.0117,
          0.0042,
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
          -0.0125,
          0.0175,
          0.0063,
          0.9997
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
          -0.0172,
          0.024,
          0.0087,
          0.9995
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
          -0.0222,
          0.0311,
          0.0113,
          0.9992
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
          -0.0276,
          0.0386,
          0.014,
          0.9988
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
          -0.0331,
          0.0463,
          0.0168,
          0.9982
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
          -0.0385,
          0.0539,
          0.0195,
          0.9976
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
          -0.0439,
          0.0614,
          0.0222,
          0.9969
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
          -0.049,
          0.0685,
          0.0248,
          0.9961
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
          -0.0536,
          0.075,
          0.0272,
          0.9954
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
          -0.0577,
          0.0808,
          0.0292,
          0.9946
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
          -0.0611,
          0.0856,
          0.031,
          0.994
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
          -0.0638,
          0.0892,
          0.0323,
          0.9934
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
          -0.0654,
          0.0916,
          0.0332,
          0.9931
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
          -0.066,
          0.0924,
          0.0334,
          0.993
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
          -0.0626,
          0.0947,
          0.0701,
          0.9911
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
          -0.0592,
          0.0969,
          0.1046,
          0.988
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
          -0.0562,
          0.0987,
          0.1352,
          0.9843
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
          -0.0537,
          0.1001,
          0.1603,
          0.9805
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
          -0.0518,
          0.101,
          0.1784,
          0.9774
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
          -0.0507,
          0.1016,
          0.1888,
          0.9754
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
          -0.0505,
          0.1017,
          0.191,
          0.975
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
          -0.0511,
          0.1014,
          0.1847,
          0.9762
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
          -0.0526,
          0.1006,
          0.1703,
          0.9788
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
          -0.0548,
          0.0994,
          0.1485,
          0.9824
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
          -0.0577,
          0.0978,
          0.1205,
          0.9862
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
          -0.0609,
          0.0958,
          0.0877,
          0.9897
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
          -0.0643,
          0.0936,
          0.0519,
          0.9922
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
          -0.0677,
          0.0911,
          0.015,
          0.9934
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
          -0.071,
          0.0886,
          -0.0209,
          0.9933
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
          -0.0739,
          0.0862,
          -0.0539,
          0.9921
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
          -0.0763,
          0.0841,
          -0.0821,
          0.9901
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
          -0.0781,
          0.0824,
          -0.104,
          0.9881
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
          -0.0793,
          0.0812,
          -0.1185,
          0.9864
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
          -0.0799,
          0.0807,
          -0.1249,
          0.9857
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
          -0.0797,
          0.0809,
          -0.1228,
          0.9859
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
          -0.0788,
          0.0817,
          -0.1123,
          0.9872
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
          -0.0773,
          0.0832,
          -0.0939,
          0.9891
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
          -0.0752,
          0.0851,
          -0.0687,
          0.9912
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
          -0.0725,
          0.0874,
          -0.0379,
          0.9928
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
          -0.0694,
          0.0899,
          -0.0032,
          0.9935
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
          -0.066,
          0.0924,
          0.0334,
          0.993
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
          -0.0626,
          0.0947,
          0.0701,
          0.9911
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
          -0.0592,
          0.0969,
          0.1046,
          0.988
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
          -0.0562,
          0.0987,
          0.1352,
          0.9843
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
          -0.0537,
          0.1001,
          0.1603,
          0.9805
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
          -0.0518,
          0.101,
          0.1784,
          0.9774
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
          -0.0507,
          0.1016,
          0.1888,
          0.9754
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
          -0.0505,
          0.1017,
          0.191,
          0.975
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
          -0.0511,
          0.1014,
          0.1847,
          0.9762
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
          -0.0526,
          0.1006,
          0.1703,
          0.9788
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
          -0.0548,
          0.0994,
          0.1485,
          0.9824
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
          -0.0577,
          0.0978,
          0.1205,
          0.9862
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
          -0.0609,
          0.0958,
          0.0877,
          0.9897
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
          -0.0643,
          0.0936,
          0.0519,
          0.9922
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
          -0.0677,
          0.0911,
          0.015,
          0.9934
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
          -0.071,
          0.0886,
          -0.0209,
          0.9933
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
          -0.0739,
          0.0862,
          -0.0539,
          0.9921
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
          -0.0763,
          0.0841,
          -0.0821,
          0.9901
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
          -0.0781,
          0.0824,
          -0.104,
          0.9881
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
          -0.0793,
          0.0812,
          -0.1185,
          0.9864
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
          -0.0799,
          0.0807,
          -0.1249,
          0.9857
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
          -0.0797,
          0.0809,
          -0.1228,
          0.9859
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
          -0.0788,
          0.0817,
          -0.1123,
          0.9872
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
          -0.0773,
          0.0832,
          -0.0939,
          0.9891
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
          -0.0752,
          0.0851,
          -0.0687,
          0.9912
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
          -0.0725,
          0.0874,
          -0.0379,
          0.9928
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
          -0.0694,
          0.0899,
          -0.0032,
          0.9935
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
          -0.066,
          0.0924,
          0.0334,
          0.993
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
          -0.0654,
          0.0916,
          0.0332,
          0.9931
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
          -0.0638,
          0.0892,
          0.0323,
          0.9934
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
          -0.0611,
          0.0856,
          0.031,
          0.994
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
          -0.0577,
          0.0808,
          0.0292,
          0.9946
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
          -0.0536,
          0.075,
          0.0272,
          0.9954
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
          -0.049,
          0.0685,
          0.0248,
          0.9961
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
          -0.0439,
          0.0614,
          0.0222,
          0.9969
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
          -0.0385,
          0.0539,
          0.0195,
          0.9976
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
          -0.0331,
          0.0463,
          0.0168,
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
          -0.0276,
          0.0386,
          0.014,
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
          -0.0222,
          0.0311,
          0.0113,
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
          -0.0172,
          0.024,
          0.0087,
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
          -0.0125,
          0.0175,
          0.0063,
          0.9997
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
          -0.0084,
          0.0117,
          0.0042,
          0.9999
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
          -0.0049,
          0.0069,
          0.0025,
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
          -0.0023,
          0.0032,
          0.0011,
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
          -0.0006,
          0.0008,
          0.0003,
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
          -0.0002,
          -0.0006,
          -0.0007,
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
          -0.0009,
          -0.0021,
          -0.0025,
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
          -0.0019,
          -0.0046,
          -0.0054,
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
          -0.0032,
          -0.0078,
          -0.0092,
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
          -0.0047,
          -0.0117,
          -0.0138,
          0.9998
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
          -0.0064,
          -0.0161,
          -0.019,
          0.9997
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
          -0.0083,
          -0.0209,
          -0.0246,
          0.9994
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
          -0.0102,
          -0.0259,
          -0.0305,
          0.9991
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
          -0.0121,
          -0.031,
          -0.0366,
          0.9988
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
          -0.014,
          -0.0361,
          -0.0426,
          0.9983
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
          -0.0158,
          -0.0411,
          -0.0486,
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
          -0.0175,
          -0.0459,
          -0.0542,
          0.9973
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
          -0.0191,
          -0.0502,
          -0.0593,
          0.9968
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
          -0.0204,
          -0.0541,
          -0.0639,
          0.9963
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
          -0.0215,
          -0.0573,
          -0.0677,
          0.9958
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
          -0.0223,
          -0.0597,
          -0.0706,
          0.9955
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
          -0.0229,
          -0.0613,
          -0.0725,
          0.9952
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
          -0.023,
          -0.0618,
          -0.0731,
          0.9951
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
          -0.0244,
          -0.0619,
          -0.073,
          0.9951
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
          -0.0258,
          -0.062,
          -0.0729,
          0.9951
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
          -0.0271,
          -0.0621,
          -0.0729,
          0.995
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
          -0.0284,
          -0.0622,
          -0.0728,
          0.995
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
          -0.0295,
          -0.0623,
          -0.0727,
          0.995
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
          -0.0304,
          -0.0624,
          -0.0727,
          0.9949
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
          -0.031,
          -0.0624,
          -0.0726,
          0.9949
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
          -0.0313,
          -0.0624,
          -0.0726,
          0.9949
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
          -0.0313,
          -0.0624,
          -0.0726,
          0.9949
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
          -0.031,
          -0.0624,
          -0.0726,
          0.9949
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
          -0.0303,
          -0.0624,
          -0.0727,
          0.9949
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
          -0.0294,
          -0.0623,
          -0.0727,
          0.995
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
          -0.0283,
          -0.0622,
          -0.0728,
          0.995
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
          -0.027,
          -0.0621,
          -0.0729,
          0.995
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
          -0.0257,
          -0.062,
          -0.0729,
          0.9951
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
          -0.0243,
          -0.0619,
          -0.073,
          0.9951
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
          -0.023,
          -0.0618,
          -0.0731,
          0.9951
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
          -0.0218,
          -0.0617,
          -0.0732,
          0.9952
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
          -0.0208,
          -0.0617,
          -0.0733,
          0.9952
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
          -0.02,
          -0.0616,
          -0.0733,
          0.9952
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
          -0.0195,
          -0.0616,
          -0.0733,
          0.9952
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
          -0.0194,
          -0.0616,
          -0.0733,
          0.9952
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
          -0.0196,
          -0.0616,
          -0.0733,
          0.9952
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
          -0.0201,
          -0.0616,
          -0.0733,
          0.9952
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
          -0.0208,
          -0.0617,
          -0.0733,
          0.9952
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
          -0.0218,
          -0.0618,
          -0.0732,
          0.9952
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
          -0.023,
          -0.0618,
          -0.0731,
          0.9951
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
          -0.0244,
          -0.0619,
          -0.073,
          0.9951
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
          -0.0258,
          -0.062,
          -0.0729,
          0.9951
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
          -0.0271,
          -0.0621,
          -0.0729,
          0.995
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
          -0.0284,
          -0.0622,
          -0.0728,
          0.995
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
          -0.0295,
          -0.0623,
          -0.0727,
          0.995
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
          -0.0304,
          -0.0624,
          -0.0727,
          0.9949
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
          -0.031,
          -0.0624,
          -0.0726,
          0.9949
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
          -0.0313,
          -0.0624,
          -0.0726,
          0.9949
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
          -0.0313,
          -0.0624,
          -0.0726,
          0.9949
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
          -0.031,
          -0.0624,
          -0.0726,
          0.9949
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
          -0.0303,
          -0.0624,
          -0.0727,
          0.9949
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
          -0.0294,
          -0.0623,
          -0.0727,
          0.995
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
          -0.0283,
          -0.0622,
          -0.0728,
          0.995
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
          -0.027,
          -0.0621,
          -0.0729,
          0.995
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
          -0.0257,
          -0.062,
          -0.0729,
          0.9951
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
          -0.0243,
          -0.0619,
          -0.073,
          0.9951
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
          -0.023,
          -0.0618,
          -0.0731,
          0.9951
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
          -0.0218,
          -0.0617,
          -0.0732,
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
          -0.0208,
          -0.0617,
          -0.0733,
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
          -0.02,
          -0.0616,
          -0.0733,
          0.9952
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
          -0.0195,
          -0.0616,
          -0.0733,
          0.9952
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
          -0.0194,
          -0.0616,
          -0.0733,
          0.9952
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
          -0.0196,
          -0.0616,
          -0.0733,
          0.9952
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
          -0.0201,
          -0.0616,
          -0.0733,
          0.9952
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
          -0.0208,
          -0.0617,
          -0.0733,
          0.9952
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
          -0.0218,
          -0.0618,
          -0.0732,
          0.9952
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
          -0.023,
          -0.0618,
          -0.0731,
          0.9951
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
          -0.0229,
          -0.0613,
          -0.0725,
          0.9952
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
          -0.0223,
          -0.0597,
          -0.0706,
          0.9955
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
          -0.0215,
          -0.0573,
          -0.0677,
          0.9958
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
          -0.0204,
          -0.0541,
          -0.0639,
          0.9963
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
          -0.0191,
          -0.0502,
          -0.0593,
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
          -0.0175,
          -0.0459,
          -0.0542,
          0.9973
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
          -0.0158,
          -0.0411,
          -0.0486,
          0.9978
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
          -0.014,
          -0.0361,
          -0.0426,
          0.9983
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
          -0.0121,
          -0.031,
          -0.0366,
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
          -0.0102,
          -0.0259,
          -0.0305,
          0.9991
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
          -0.0083,
          -0.0209,
          -0.0246,
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
          -0.0064,
          -0.0161,
          -0.019,
          0.9997
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
          -0.0047,
          -0.0117,
          -0.0138,
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
          -0.0032,
          -0.0078,
          -0.0092,
          0.9999
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
          -0.0019,
          -0.0046,
          -0.0054,
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
          -0.0009,
          -0.0021,
          -0.0025,
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
          -0.0002,
          -0.0006,
          -0.0007,
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
          -0.0003,
          -0.0002,
          -0.0004,
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
          -0.0013,
          -0.0009,
          -0.0017,
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
          -0.0029,
          -0.002,
          -0.0036,
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
          -0.0048,
          -0.0034,
          -0.0062,
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
          -0.0072,
          -0.0051,
          -0.0092,
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
          -0.0099,
          -0.007,
          -0.0127,
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
          -0.0127,
          -0.009,
          -0.0165,
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
          -0.0157,
          -0.0112,
          -0.0204,
          0.9996
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
          -0.0188,
          -0.0135,
          -0.0245,
          0.9994
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
          -0.0218,
          -0.0157,
          -0.0286,
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
          -0.0247,
          -0.0178,
          -0.0325,
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
          -0.0274,
          -0.0199,
          -0.0363,
          0.9988
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
          -0.0299,
          -0.0218,
          -0.0397,
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
          -0.032,
          -0.0235,
          -0.0428,
          0.9983
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
          -0.0338,
          -0.0249,
          -0.0454,
          0.9981
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
          -0.0352,
          -0.0259,
          -0.0473,
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
          -0.036,
          -0.0266,
          -0.0486,
          0.9978
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
          -0.0363,
          -0.0268,
          -0.049,
          0.9978
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
          -0.0377,
          -0.0269,
          -0.049,
          0.9977
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
          -0.0391,
          -0.027,
          -0.0489,
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
          -0.0404,
          -0.027,
          -0.0489,
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
          -0.0417,
          -0.0271,
          -0.0488,
          0.9976
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
          -0.0428,
          -0.0271,
          -0.0488,
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
          -0.0437,
          -0.0272,
          -0.0488,
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
          -0.0443,
          -0.0272,
          -0.0488,
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
          -0.0446,
          -0.0272,
          -0.0488,
          0.9974
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
          -0.0446,
          -0.0272,
          -0.0488,
          0.9974
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
          -0.0443,
          -0.0272,
          -0.0488,
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
          -0.0437,
          -0.0272,
          -0.0488,
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
          -0.0428,
          -0.0271,
          -0.0488,
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
          -0.0416,
          -0.0271,
          -0.0488,
          0.9976
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
          -0.0404,
          -0.027,
          -0.0489,
          0.9976
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
          -0.039,
          -0.027,
          -0.0489,
          0.9977
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
          -0.0376,
          -0.0269,
          -0.049,
          0.9977
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
          -0.0363,
          -0.0268,
          -0.049,
          0.9978
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
          -0.0351,
          -0.0268,
          -0.049,
          0.9978
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
          -0.0341,
          -0.0267,
          -0.049,
          0.9979
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
          -0.0333,
          -0.0267,
          -0.0491,
          0.9979
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
          -0.0328,
          -0.0267,
          -0.0491,
          0.9979
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
          -0.0327,
          -0.0267,
          -0.0491,
          0.9979
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
          -0.0329,
          -0.0267,
          -0.0491,
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
          -0.0333,
          -0.0267,
          -0.0491,
          0.9979
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
          -0.0341,
          -0.0267,
          -0.049,
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
          -0.0351,
          -0.0268,
          -0.049,
          0.9978
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
          -0.0363,
          -0.0268,
          -0.049,
          0.9978
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
          -0.0377,
          -0.0269,
          -0.049,
          0.9977
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
          -0.0391,
          -0.027,
          -0.0489,
          0.9977
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
          -0.0404,
          -0.027,
          -0.0489,
          0.9976
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
          -0.0417,
          -0.0271,
          -0.0488,
          0.9976
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
          -0.0428,
          -0.0271,
          -0.0488,
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
          -0.0437,
          -0.0272,
          -0.0488,
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
          -0.0443,
          -0.0272,
          -0.0488,
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
          -0.0446,
          -0.0272,
          -0.0488,
          0.9974
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
          -0.0446,
          -0.0272,
          -0.0488,
          0.9974
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
          -0.0443,
          -0.0272,
          -0.0488,
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
          -0.0437,
          -0.0272,
          -0.0488,
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
          -0.0428,
          -0.0271,
          -0.0488,
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
          -0.0416,
          -0.0271,
          -0.0488,
          0.9976
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
          -0.0404,
          -0.027,
          -0.0489,
          0.9976
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
          -0.039,
          -0.027,
          -0.0489,
          0.9977
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
          -0.0376,
          -0.0269,
          -0.049,
          0.9977
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
          -0.0363,
          -0.0268,
          -0.049,
          0.9978
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
          -0.0351,
          -0.0268,
          -0.049,
          0.9978
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
          -0.0341,
          -0.0267,
          -0.049,
          0.9979
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
          -0.0333,
          -0.0267,
          -0.0491,
          0.9979
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
          -0.0328,
          -0.0267,
          -0.0491,
          0.9979
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
          -0.0327,
          -0.0267,
          -0.0491,
          0.9979
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
          -0.0329,
          -0.0267,
          -0.0491,
          0.9979
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
          -0.0333,
          -0.0267,
          -0.0491,
          0.9979
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
          -0.0341,
          -0.0267,
          -0.049,
          0.9979
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
          -0.0351,
          -0.0268,
          -0.049,
          0.9978
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
          -0.0363,
          -0.0268,
          -0.049,
          0.9978
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
          -0.036,
          -0.0266,
          -0.0486,
          0.9978
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
          -0.0352,
          -0.0259,
          -0.0473,
          0.9979
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
          -0.0338,
          -0.0249,
          -0.0454,
          0.9981
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
          -0.032,
          -0.0235,
          -0.0428,
          0.9983
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
          -0.0299,
          -0.0218,
          -0.0397,
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
          -0.0274,
          -0.0199,
          -0.0363,
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
          -0.0247,
          -0.0178,
          -0.0325,
          0.999
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
          -0.0218,
          -0.0157,
          -0.0286,
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
          -0.0188,
          -0.0135,
          -0.0245,
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
          -0.0157,
          -0.0112,
          -0.0204,
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
          -0.0127,
          -0.009,
          -0.0165,
          0.9997
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
          -0.0099,
          -0.007,
          -0.0127,
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
          -0.0072,
          -0.0051,
          -0.0092,
          0.9999
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
          -0.0048,
          -0.0034,
          -0.0062,
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
          -0.0029,
          -0.002,
          -0.0036,
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
          -0.0013,
          -0.0009,
          -0.0017,
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
          -0.0003,
          -0.0002,
          -0.0004,
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
          -0.0003,
          -0.0001,
          -0.0002,
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
          -0.001,
          -0.0004,
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
          -0.0022,
          -0.0008,
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
          -0.0037,
          -0.0014,
          -0.0031,
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
          -0.0055,
          -0.002,
          -0.0047,
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
          -0.0076,
          -0.0028,
          -0.0064,
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
          -0.0097,
          -0.0036,
          -0.0083,
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
          -0.012,
          -0.0045,
          -0.0103,
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
          -0.0143,
          -0.0054,
          -0.0124,
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
          -0.0165,
          -0.0062,
          -0.0144,
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
          -0.0187,
          -0.0071,
          -0.0164,
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
          -0.0207,
          -0.0079,
          -0.0183,
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
          -0.0226,
          -0.0087,
          -0.02,
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
          -0.0242,
          -0.0093,
          -0.0216,
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
          -0.0255,
          -0.0099,
          -0.0229,
          0.9994
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
          -0.0265,
          -0.0103,
          -0.0239,
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
          -0.0272,
          -0.0106,
          -0.0245,
          0.9993
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
          -0.0274,
          -0.0107,
          -0.0247,
          0.9993
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
          -0.0287,
          -0.0107,
          -0.0247,
          0.9992
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
          -0.0301,
          -0.0108,
          -0.0247,
          0.9992
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
          -0.0315,
          -0.0108,
          -0.0247,
          0.9991
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
          -0.0328,
          -0.0108,
          -0.0247,
          0.9991
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
          -0.0339,
          -0.0108,
          -0.0246,
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
          -0.0348,
          -0.0109,
          -0.0246,
          0.999
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
          -0.0354,
          -0.0109,
          -0.0246,
          0.999
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
          -0.0357,
          -0.0109,
          -0.0246,
          0.999
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
          -0.0357,
          -0.0109,
          -0.0246,
          0.999
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
          -0.0354,
          -0.0109,
          -0.0246,
          0.999
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
          -0.0347,
          -0.0109,
          -0.0246,
          0.999
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
          -0.0338,
          -0.0108,
          -0.0246,
          0.9991
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
          -0.0327,
          -0.0108,
          -0.0247,
          0.9991
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
          -0.0314,
          -0.0108,
          -0.0247,
          0.9991
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
          -0.03,
          -0.0107,
          -0.0247,
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
          -0.0287,
          -0.0107,
          -0.0247,
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
          -0.0273,
          -0.0107,
          -0.0247,
          0.9993
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
          -0.0261,
          -0.0107,
          -0.0247,
          0.9993
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
          -0.0251,
          -0.0106,
          -0.0247,
          0.9993
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
          -0.0244,
          -0.0106,
          -0.0247,
          0.9993
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
          -0.0239,
          -0.0106,
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
          -0.0237,
          -0.0106,
          -0.0247,
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
          -0.0239,
          -0.0106,
          -0.0247,
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
          -0.0244,
          -0.0106,
          -0.0247,
          0.9993
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
          -0.0252,
          -0.0106,
          -0.0247,
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
          -0.0262,
          -0.0107,
          -0.0247,
          0.9993
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
          -0.0274,
          -0.0107,
          -0.0247,
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
          -0.0287,
          -0.0107,
          -0.0247,
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
          -0.0301,
          -0.0108,
          -0.0247,
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
          -0.0315,
          -0.0108,
          -0.0247,
          0.9991
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
          -0.0328,
          -0.0108,
          -0.0247,
          0.9991
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
          -0.0339,
          -0.0108,
          -0.0246,
          0.9991
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
          -0.0348,
          -0.0109,
          -0.0246,
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
          -0.0354,
          -0.0109,
          -0.0246,
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
          -0.0357,
          -0.0109,
          -0.0246,
          0.999
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
          -0.0357,
          -0.0109,
          -0.0246,
          0.999
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
          -0.0354,
          -0.0109,
          -0.0246,
          0.999
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
          -0.0347,
          -0.0109,
          -0.0246,
          0.999
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
          -0.0338,
          -0.0108,
          -0.0246,
          0.9991
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
          -0.0327,
          -0.0108,
          -0.0247,
          0.9991
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
          -0.0314,
          -0.0108,
          -0.0247,
          0.9991
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
          -0.03,
          -0.0107,
          -0.0247,
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
          -0.0287,
          -0.0107,
          -0.0247,
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
          -0.0273,
          -0.0107,
          -0.0247,
          0.9993
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
          -0.0261,
          -0.0107,
          -0.0247,
          0.9993
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
          -0.0251,
          -0.0106,
          -0.0247,
          0.9993
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
          -0.0244,
          -0.0106,
          -0.0247,
          0.9993
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
          -0.0239,
          -0.0106,
          -0.0247,
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
          -0.0237,
          -0.0106,
          -0.0247,
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
          -0.0239,
          -0.0106,
          -0.0247,
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
          -0.0244,
          -0.0106,
          -0.0247,
          0.9993
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
          -0.0252,
          -0.0106,
          -0.0247,
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
          -0.0262,
          -0.0107,
          -0.0247,
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
          -0.0274,
          -0.0107,
          -0.0247,
          0.9993
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
          -0.0272,
          -0.0106,
          -0.0245,
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
          -0.0265,
          -0.0103,
          -0.0239,
          0.9993
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
          -0.0255,
          -0.0099,
          -0.0229,
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
          -0.0242,
          -0.0093,
          -0.0216,
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
          -0.0226,
          -0.0087,
          -0.02,
          0.9995
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
          -0.0207,
          -0.0079,
          -0.0183,
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
          -0.0187,
          -0.0071,
          -0.0164,
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
          -0.0165,
          -0.0062,
          -0.0144,
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
          -0.0143,
          -0.0054,
          -0.0124,
          0.9998
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
          -0.012,
          -0.0045,
          -0.0103,
          0.9999
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
          -0.0097,
          -0.0036,
          -0.0083,
          0.9999
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
          -0.0076,
          -0.0028,
          -0.0064,
          0.9999
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
          -0.0055,
          -0.002,
          -0.0047,
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
          -0.0037,
          -0.0014,
          -0.0031,
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
          -0.0022,
          -0.0008,
          -0.0018,
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
          -0.001,
          -0.0004,
          -0.0008,
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
          -0.0003,
          -0.0001,
          -0.0002,
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
          -0.0004,
          -0.0001,
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
          -0.0017,
          -0.0003,
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
          -0.0037,
          -0.0007,
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
          -0.0063,
          -0.0012,
          0.0007,
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
          -0.0094,
          -0.0018,
          0.001,
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
          -0.0128,
          -0.0025,
          0.0014,
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
          -0.0166,
          -0.0033,
          0.0018,
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
          -0.0205,
          -0.0041,
          0.0023,
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
          -0.0244,
          -0.0049,
          0.0027,
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
          -0.0284,
          -0.0057,
          0.0032,
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
          -0.0322,
          -0.0065,
          0.0036,
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
          -0.0358,
          -0.0072,
          0.0041,
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
          -0.0391,
          -0.0079,
          0.0044,
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
          -0.0419,
          -0.0085,
          0.0048,
          0.9991
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
          -0.0443,
          -0.009,
          0.0051,
          0.999
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
          -0.0461,
          -0.0094,
          0.0053,
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
          -0.0473,
          -0.0097,
          0.0054,
          0.9988
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
          -0.0477,
          -0.0098,
          0.0055,
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
          -0.049,
          -0.0097,
          0.0055,
          0.9987
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
          -0.0504,
          -0.0097,
          0.0055,
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
          -0.0518,
          -0.0097,
          0.0055,
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
          -0.0531,
          -0.0097,
          0.0055,
          0.9985
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
          -0.0542,
          -0.0097,
          0.0055,
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
          -0.0551,
          -0.0097,
          0.0055,
          0.9984
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
          -0.0557,
          -0.0097,
          0.0055,
          0.9984
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
          -0.056,
          -0.0097,
          0.0056,
          0.9984
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
          -0.056,
          -0.0097,
          0.0056,
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
          -0.0556,
          -0.0097,
          0.0055,
          0.9984
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
          -0.055,
          -0.0097,
          0.0055,
          0.9984
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
          -0.0541,
          -0.0097,
          0.0055,
          0.9985
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
          -0.053,
          -0.0097,
          0.0055,
          0.9985
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
          -0.0517,
          -0.0097,
          0.0055,
          0.9986
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
          -0.0503,
          -0.0097,
          0.0055,
          0.9987
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
          -0.0489,
          -0.0097,
          0.0055,
          0.9987
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
          -0.0476,
          -0.0098,
          0.0055,
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
          -0.0464,
          -0.0098,
          0.0055,
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
          -0.0454,
          -0.0098,
          0.0054,
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
          -0.0447,
          -0.0098,
          0.0054,
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
          -0.0442,
          -0.0098,
          0.0054,
          0.999
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
          -0.044,
          -0.0098,
          0.0054,
          0.999
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
          -0.0442,
          -0.0098,
          0.0054,
          0.999
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
          -0.0447,
          -0.0098,
          0.0054,
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
          -0.0455,
          -0.0098,
          0.0054,
          0.9989
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
          -0.0465,
          -0.0098,
          0.0055,
          0.9989
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
          -0.0477,
          -0.0098,
          0.0055,
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
          -0.049,
          -0.0097,
          0.0055,
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
          -0.0504,
          -0.0097,
          0.0055,
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
          -0.0518,
          -0.0097,
          0.0055,
          0.9986
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
          -0.0531,
          -0.0097,
          0.0055,
          0.9985
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
          -0.0542,
          -0.0097,
          0.0055,
          0.9985
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
          -0.0551,
          -0.0097,
          0.0055,
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
          -0.0557,
          -0.0097,
          0.0055,
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
          -0.056,
          -0.0097,
          0.0056,
          0.9984
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
          -0.056,
          -0.0097,
          0.0056,
          0.9984
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
          -0.0556,
          -0.0097,
          0.0055,
          0.9984
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
          -0.055,
          -0.0097,
          0.0055,
          0.9984
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
          -0.0541,
          -0.0097,
          0.0055,
          0.9985
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
          -0.053,
          -0.0097,
          0.0055,
          0.9985
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
          -0.0517,
          -0.0097,
          0.0055,
          0.9986
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
          -0.0503,
          -0.0097,
          0.0055,
          0.9987
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
          -0.0489,
          -0.0097,
          0.0055,
          0.9987
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
          -0.0476,
          -0.0098,
          0.0055,
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
          -0.0464,
          -0.0098,
          0.0055,
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
          -0.0454,
          -0.0098,
          0.0054,
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
          -0.0447,
          -0.0098,
          0.0054,
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
          -0.0442,
          -0.0098,
          0.0054,
          0.999
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
          -0.044,
          -0.0098,
          0.0054,
          0.999
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
          -0.0442,
          -0.0098,
          0.0054,
          0.999
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
          -0.0447,
          -0.0098,
          0.0054,
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
          -0.0455,
          -0.0098,
          0.0054,
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
          -0.0465,
          -0.0098,
          0.0055,
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
          -0.0477,
          -0.0098,
          0.0055,
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
          -0.0473,
          -0.0097,
          0.0054,
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
          -0.0461,
          -0.0094,
          0.0053,
          0.9989
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
          -0.0443,
          -0.009,
          0.0051,
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
          -0.0419,
          -0.0085,
          0.0048,
          0.9991
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
          -0.0391,
          -0.0079,
          0.0044,
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
          -0.0358,
          -0.0072,
          0.0041,
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
          -0.0322,
          -0.0065,
          0.0036,
          0.9995
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
          -0.0284,
          -0.0057,
          0.0032,
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
          -0.0244,
          -0.0049,
          0.0027,
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
          -0.0205,
          -0.0041,
          0.0023,
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
          -0.0166,
          -0.0033,
          0.0018,
          0.9999
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
          -0.0128,
          -0.0025,
          0.0014,
          0.9999
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
          -0.0094,
          -0.0018,
          0.001,
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
          -0.0063,
          -0.0012,
          0.0007,
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
          -0.0037,
          -0.0007,
          0.0004,
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
          -0.0017,
          -0.0003,
          0.0002,
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
          -0.0004,
          -0.0001,
          0,
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
          -0.0006,
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
          -0.0024,
          -0.0002,
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
          -0.0052,
          -0.0004,
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
          -0.0088,
          -0.0006,
          0,
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
          -0.0131,
          -0.0009,
          0.0001,
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
          -0.018,
          -0.0013,
          0.0001,
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
          -0.0233,
          -0.0017,
          0.0001,
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
          -0.0288,
          -0.0021,
          0.0001,
          0.9996
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
          -0.0344,
          -0.0025,
          0.0002,
          0.9994
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
          -0.04,
          -0.0029,
          0.0002,
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
          -0.0454,
          -0.0033,
          0.0002,
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
          -0.0505,
          -0.0037,
          0.0003,
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
          -0.0552,
          -0.004,
          0.0003,
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
          -0.0593,
          -0.0044,
          0.0003,
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
          -0.0628,
          -0.0046,
          0.0003,
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
          -0.0654,
          -0.0048,
          0.0003,
          0.9978
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
          -0.067,
          -0.0049,
          0.0003,
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
          -0.0676,
          -0.005,
          0.0003,
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
          -0.0689,
          -0.005,
          0.0003,
          0.9976
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
          -0.0703,
          -0.005,
          0.0004,
          0.9975
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
          -0.0717,
          -0.005,
          0.0004,
          0.9974
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
          -0.073,
          -0.005,
          0.0004,
          0.9973
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
          -0.0741,
          -0.005,
          0.0004,
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
          -0.075,
          -0.005,
          0.0004,
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
          -0.0756,
          -0.005,
          0.0004,
          0.9971
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
          -0.0759,
          -0.005,
          0.0004,
          0.9971
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
          -0.0759,
          -0.005,
          0.0004,
          0.9971
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
          -0.0756,
          -0.005,
          0.0004,
          0.9971
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
          -0.0749,
          -0.005,
          0.0004,
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
          -0.074,
          -0.005,
          0.0004,
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
          -0.0729,
          -0.005,
          0.0004,
          0.9973
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
          -0.0716,
          -0.005,
          0.0004,
          0.9974
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
          -0.0702,
          -0.005,
          0.0004,
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
          -0.0689,
          -0.005,
          0.0003,
          0.9976
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
          -0.0675,
          -0.005,
          0.0003,
          0.9977
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
          -0.0663,
          -0.005,
          0.0003,
          0.9978
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
          -0.0653,
          -0.005,
          0.0003,
          0.9979
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
          -0.0646,
          -0.005,
          0.0003,
          0.9979
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
          -0.0641,
          -0.005,
          0.0003,
          0.9979
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
          -0.064,
          -0.005,
          0.0003,
          0.9979
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
          -0.0641,
          -0.005,
          0.0003,
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
          -0.0646,
          -0.005,
          0.0003,
          0.9979
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
          -0.0654,
          -0.005,
          0.0003,
          0.9978
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
          -0.0664,
          -0.005,
          0.0003,
          0.9978
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
          -0.0676,
          -0.005,
          0.0003,
          0.9977
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
          -0.0689,
          -0.005,
          0.0003,
          0.9976
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
          -0.0703,
          -0.005,
          0.0004,
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
          -0.0717,
          -0.005,
          0.0004,
          0.9974
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
          -0.073,
          -0.005,
          0.0004,
          0.9973
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
          -0.0741,
          -0.005,
          0.0004,
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
          -0.075,
          -0.005,
          0.0004,
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
          -0.0756,
          -0.005,
          0.0004,
          0.9971
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
          -0.0759,
          -0.005,
          0.0004,
          0.9971
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
          -0.0759,
          -0.005,
          0.0004,
          0.9971
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
          -0.0756,
          -0.005,
          0.0004,
          0.9971
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
          -0.0749,
          -0.005,
          0.0004,
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
          -0.074,
          -0.005,
          0.0004,
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
          -0.0729,
          -0.005,
          0.0004,
          0.9973
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
          -0.0716,
          -0.005,
          0.0004,
          0.9974
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
          -0.0702,
          -0.005,
          0.0004,
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
          -0.0689,
          -0.005,
          0.0003,
          0.9976
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
          -0.0675,
          -0.005,
          0.0003,
          0.9977
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
          -0.0663,
          -0.005,
          0.0003,
          0.9978
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
          -0.0653,
          -0.005,
          0.0003,
          0.9979
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
          -0.0646,
          -0.005,
          0.0003,
          0.9979
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
          -0.0641,
          -0.005,
          0.0003,
          0.9979
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
          -0.064,
          -0.005,
          0.0003,
          0.9979
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
          -0.0641,
          -0.005,
          0.0003,
          0.9979
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
          -0.0646,
          -0.005,
          0.0003,
          0.9979
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
          -0.0654,
          -0.005,
          0.0003,
          0.9978
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
          -0.0664,
          -0.005,
          0.0003,
          0.9978
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
          -0.0676,
          -0.005,
          0.0003,
          0.9977
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
          -0.067,
          -0.0049,
          0.0003,
          0.9977
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
          -0.0654,
          -0.0048,
          0.0003,
          0.9978
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
          -0.0628,
          -0.0046,
          0.0003,
          0.998
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
          -0.0593,
          -0.0044,
          0.0003,
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
          -0.0552,
          -0.004,
          0.0003,
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
          -0.0505,
          -0.0037,
          0.0003,
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
          -0.0454,
          -0.0033,
          0.0002,
          0.999
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
          -0.04,
          -0.0029,
          0.0002,
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
          -0.0344,
          -0.0025,
          0.0002,
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
          -0.0288,
          -0.0021,
          0.0001,
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
          -0.0233,
          -0.0017,
          0.0001,
          0.9997
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
          -0.018,
          -0.0013,
          0.0001,
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
          -0.0131,
          -0.0009,
          0.0001,
          0.9999
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
          -0.0088,
          -0.0006,
          0,
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
          -0.0052,
          -0.0004,
          0,
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
          -0.0024,
          -0.0002,
          0,
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
          -0.0006,
          0,
          0,
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
          -0.0004,
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
          -0.0014,
          0,
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
          -0.003,
          0,
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
          -0.005,
          0,
          0,
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
          -0.0075,
          0,
          0,
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
          -0.0102,
          0,
          0,
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
          -0.0132,
          0,
          0,
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
          -0.0163,
          0,
          0,
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
          -0.0194,
          0,
          0,
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
          -0.0225,
          0,
          0,
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
          -0.0255,
          0,
          0,
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
          -0.0283,
          0,
          0,
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
          -0.0309,
          0,
          0,
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
          -0.0332,
          0,
          0,
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
          -0.035,
          0,
          0,
          0.9994
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
          -0.0364,
          0,
          0,
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
          -0.0373,
          0,
          0,
          0.9993
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
          -0.0377,
          0,
          0,
          0.9993
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
          -0.039,
          0,
          0,
          0.9992
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
          -0.0404,
          0,
          0,
          0.9992
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
          -0.0418,
          0,
          0,
          0.9991
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
          -0.043,
          0,
          0,
          0.9991
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
          -0.0441,
          0,
          0,
          0.999
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
          -0.045,
          0,
          0,
          0.999
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
          -0.0456,
          0,
          0,
          0.999
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
          -0.0459,
          0,
          0,
          0.9989
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
          -0.0459,
          0,
          0,
          0.9989
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
          -0.0456,
          0,
          0,
          0.999
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
          -0.045,
          0,
          0,
          0.999
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
          -0.0441,
          0,
          0,
          0.999
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
          -0.0429,
          0,
          0,
          0.9991
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
          -0.0417,
          0,
          0,
          0.9991
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
          -0.0403,
          0,
          0,
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
          -0.0389,
          0,
          0,
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
          -0.0376,
          0,
          0,
          0.9993
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
          -0.0364,
          0,
          0,
          0.9993
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
          -0.0354,
          0,
          0,
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
          -0.0346,
          0,
          0,
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
          -0.0341,
          0,
          0,
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
          -0.034,
          0,
          0,
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
          -0.0342,
          0,
          0,
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
          -0.0347,
          0,
          0,
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
          -0.0354,
          0,
          0,
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
          -0.0364,
          0,
          0,
          0.9993
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
          -0.0377,
          0,
          0,
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
          -0.039,
          0,
          0,
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
          -0.0404,
          0,
          0,
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
          -0.0418,
          0,
          0,
          0.9991
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
          -0.043,
          0,
          0,
          0.9991
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
          -0.0441,
          0,
          0,
          0.999
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
          -0.045,
          0,
          0,
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
          -0.0456,
          0,
          0,
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
          -0.0459,
          0,
          0,
          0.9989
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
          -0.0459,
          0,
          0,
          0.9989
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
          -0.0456,
          0,
          0,
          0.999
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
          -0.045,
          0,
          0,
          0.999
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
          -0.0441,
          0,
          0,
          0.999
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
          -0.0429,
          0,
          0,
          0.9991
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
          -0.0417,
          0,
          0,
          0.9991
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
          -0.0403,
          0,
          0,
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
          -0.0389,
          0,
          0,
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
          -0.0376,
          0,
          0,
          0.9993
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
          -0.0364,
          0,
          0,
          0.9993
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
          -0.0354,
          0,
          0,
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
          -0.0346,
          0,
          0,
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
          -0.0341,
          0,
          0,
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
          -0.034,
          0,
          0,
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
          -0.0342,
          0,
          0,
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
          -0.0347,
          0,
          0,
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
          -0.0354,
          0,
          0,
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
          -0.0364,
          0,
          0,
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
          -0.0377,
          0,
          0,
          0.9993
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
          -0.0373,
          0,
          0,
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
          -0.0364,
          0,
          0,
          0.9993
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
          -0.035,
          0,
          0,
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
          -0.0332,
          0,
          0,
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
          -0.0309,
          0,
          0,
          0.9995
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
          -0.0283,
          0,
          0,
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
          -0.0255,
          0,
          0,
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
          -0.0225,
          0,
          0,
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
          -0.0194,
          0,
          0,
          0.9998
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
          -0.0163,
          0,
          0,
          0.9999
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
          -0.0132,
          0,
          0,
          0.9999
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
          -0.0102,
          0,
          0,
          0.9999
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
          -0.0075,
          0,
          0,
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
          -0.005,
          0,
          0,
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
          -0.003,
          0,
          0,
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
          -0.0014,
          0,
          0,
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
          -0.0004,
          0,
          0,
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
          -0.0005,
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
          -0.0019,
          0,
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
          -0.0041,
          0,
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
          -0.0069,
          0,
          0,
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
          -0.0103,
          0,
          0,
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
          -0.0141,
          0,
          0,
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
          -0.0182,
          0,
          0,
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
          -0.0225,
          0,
          0,
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
          -0.0269,
          0,
          0,
          0.9996
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
          -0.0313,
          0,
          0,
          0.9995
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
          -0.0355,
          0,
          0,
          0.9994
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
          -0.0394,
          0,
          0,
          0.9992
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
          -0.0431,
          0,
          0,
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
          -0.0463,
          0,
          0,
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
          -0.0489,
          0,
          0,
          0.9988
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
          -0.0509,
          0,
          0,
          0.9987
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
          -0.0522,
          0,
          0,
          0.9986
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
          -0.0526,
          0,
          0,
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
          -0.054,
          0,
          0,
          0.9985
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
          -0.0554,
          0,
          0,
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
          -0.0567,
          0,
          0,
          0.9984
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
          -0.058,
          0,
          0,
          0.9983
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
          -0.0591,
          0,
          0,
          0.9983
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
          -0.06,
          0,
          0,
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
          -0.0606,
          0,
          0,
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
          -0.0609,
          0,
          0,
          0.9981
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
          -0.0609,
          0,
          0,
          0.9981
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
          -0.0606,
          0,
          0,
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
          -0.06,
          0,
          0,
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
          -0.0591,
          0,
          0,
          0.9983
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
          -0.0579,
          0,
          0,
          0.9983
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
          -0.0566,
          0,
          0,
          0.9984
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
          -0.0553,
          0,
          0,
          0.9985
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
          -0.0539,
          0,
          0,
          0.9985
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
          -0.0526,
          0,
          0,
          0.9986
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
          -0.0514,
          0,
          0,
          0.9987
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
          -0.0504,
          0,
          0,
          0.9987
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
          -0.0496,
          0,
          0,
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
          -0.0491,
          0,
          0,
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
          -0.049,
          0,
          0,
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
          -0.0492,
          0,
          0,
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
          -0.0496,
          0,
          0,
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
          -0.0504,
          0,
          0,
          0.9987
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
          -0.0514,
          0,
          0,
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
          -0.0526,
          0,
          0,
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
          -0.054,
          0,
          0,
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
          -0.0554,
          0,
          0,
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
          -0.0567,
          0,
          0,
          0.9984
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
          -0.058,
          0,
          0,
          0.9983
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
          -0.0591,
          0,
          0,
          0.9983
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
          -0.06,
          0,
          0,
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
          -0.0606,
          0,
          0,
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
          -0.0609,
          0,
          0,
          0.9981
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
          -0.0609,
          0,
          0,
          0.9981
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
          -0.0606,
          0,
          0,
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
          -0.06,
          0,
          0,
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
          -0.0591,
          0,
          0,
          0.9983
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
          -0.0579,
          0,
          0,
          0.9983
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
          -0.0566,
          0,
          0,
          0.9984
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
          -0.0553,
          0,
          0,
          0.9985
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
          -0.0539,
          0,
          0,
          0.9985
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
          -0.0526,
          0,
          0,
          0.9986
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
          -0.0514,
          0,
          0,
          0.9987
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
          -0.0504,
          0,
          0,
          0.9987
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
          -0.0496,
          0,
          0,
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
          -0.0491,
          0,
          0,
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
          -0.049,
          0,
          0,
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
          -0.0492,
          0,
          0,
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
          -0.0496,
          0,
          0,
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
          -0.0504,
          0,
          0,
          0.9987
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
          -0.0514,
          0,
          0,
          0.9987
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
          -0.0526,
          0,
          0,
          0.9986
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
          -0.0522,
          0,
          0,
          0.9986
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
          -0.0509,
          0,
          0,
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
          -0.0489,
          0,
          0,
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
          -0.0463,
          0,
          0,
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
          -0.0431,
          0,
          0,
          0.9991
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
          -0.0394,
          0,
          0,
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
          -0.0355,
          0,
          0,
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
          -0.0313,
          0,
          0,
          0.9995
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
          -0.0269,
          0,
          0,
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
          -0.0225,
          0,
          0,
          0.9997
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
          -0.0182,
          0,
          0,
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
          -0.0141,
          0,
          0,
          0.9999
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
          0,
          0,
          0.9999
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
          -0.0069,
          0,
          0,
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
          -0.0041,
          0,
          0,
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
          -0.0019,
          0,
          0,
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
          -0.0005,
          0,
          0,
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
          -0.0007,
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
          -0.0026,
          0,
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
          -0.0055,
          0,
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
          -0.0094,
          0,
          0,
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
          -0.0141,
          0,
          0,
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
          -0.0193,
          0,
          0,
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
          -0.0249,
          0,
          0,
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
          -0.0309,
          0,
          0,
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
          -0.0369,
          0,
          0,
          0.9993
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
          -0.0429,
          0,
          0,
          0.9991
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
          -0.0487,
          0,
          0,
          0.9988
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
          -0.0542,
          0,
          0,
          0.9985
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
          -0.0593,
          0,
          0,
          0.9982
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
          -0.0637,
          0,
          0,
          0.998
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
          -0.0674,
          0,
          0,
          0.9977
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
          -0.0702,
          0,
          0,
          0.9975
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
          -0.072,
          0,
          0,
          0.9974
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
          -0.0726,
          0,
          0,
          0.9974
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
          -0.0739,
          0,
          0,
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
          -0.0753,
          0,
          0,
          0.9972
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
          -0.0767,
          0,
          0,
          0.9971
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
          -0.078,
          0,
          0,
          0.997
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
          -0.0791,
          0,
          0,
          0.9969
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
          -0.08,
          0,
          0,
          0.9968
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
          -0.0806,
          0,
          0,
          0.9967
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
          -0.0809,
          0,
          0,
          0.9967
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
          -0.0809,
          0,
          0,
          0.9967
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
          -0.0805,
          0,
          0,
          0.9968
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
          -0.0799,
          0,
          0,
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
          -0.079,
          0,
          0,
          0.9969
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
          -0.0779,
          0,
          0,
          0.997
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
          -0.0766,
          0,
          0,
          0.9971
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
          -0.0752,
          0,
          0,
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
          -0.0738,
          0,
          0,
          0.9973
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
          -0.0725,
          0,
          0,
          0.9974
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
          -0.0713,
          0,
          0,
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
          -0.0703,
          0,
          0,
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
          -0.0696,
          0,
          0,
          0.9976
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
          -0.0691,
          0,
          0,
          0.9976
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
          -0.0689,
          0,
          0,
          0.9976
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
          -0.0691,
          0,
          0,
          0.9976
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
          -0.0696,
          0,
          0,
          0.9976
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
          -0.0704,
          0,
          0,
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
          -0.0714,
          0,
          0,
          0.9974
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
          -0.0726,
          0,
          0,
          0.9974
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
          -0.0739,
          0,
          0,
          0.9973
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
          -0.0753,
          0,
          0,
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
          -0.0767,
          0,
          0,
          0.9971
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
          -0.078,
          0,
          0,
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
          -0.0791,
          0,
          0,
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
          -0.08,
          0,
          0,
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
          -0.0806,
          0,
          0,
          0.9967
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
          -0.0809,
          0,
          0,
          0.9967
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
          -0.0809,
          0,
          0,
          0.9967
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
          -0.0805,
          0,
          0,
          0.9968
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
          -0.0799,
          0,
          0,
          0.9968
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
          -0.079,
          0,
          0,
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
          -0.0779,
          0,
          0,
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
          -0.0766,
          0,
          0,
          0.9971
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
          -0.0752,
          0,
          0,
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
          -0.0738,
          0,
          0,
          0.9973
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
          -0.0725,
          0,
          0,
          0.9974
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
          -0.0713,
          0,
          0,
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
          -0.0703,
          0,
          0,
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
          -0.0696,
          0,
          0,
          0.9976
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
          -0.0691,
          0,
          0,
          0.9976
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
          -0.0689,
          0,
          0,
          0.9976
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
          -0.0691,
          0,
          0,
          0.9976
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
          -0.0696,
          0,
          0,
          0.9976
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
          -0.0704,
          0,
          0,
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
          -0.0714,
          0,
          0,
          0.9974
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
          -0.0726,
          0,
          0,
          0.9974
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
          -0.072,
          0,
          0,
          0.9974
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
          -0.0702,
          0,
          0,
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
          -0.0674,
          0,
          0,
          0.9977
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
          -0.0637,
          0,
          0,
          0.998
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
          -0.0593,
          0,
          0,
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
          -0.0542,
          0,
          0,
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
          -0.0487,
          0,
          0,
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
          -0.0429,
          0,
          0,
          0.9991
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
          -0.0369,
          0,
          0,
          0.9993
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
          -0.0309,
          0,
          0,
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
          -0.0249,
          0,
          0,
          0.9997
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
          -0.0193,
          0,
          0,
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
          -0.0141,
          0,
          0,
          0.9999
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
          -0.0094,
          0,
          0,
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
          -0.0055,
          0,
          0,
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
          -0.0026,
          0,
          0,
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
          -0.0007,
          0,
          0,
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
          -0.0004,
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
          -0.0015,
          0,
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
          -0.0033,
          0,
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
          -0.0056,
          0,
          0,
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
          -0.0084,
          0,
          0,
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
          -0.0115,
          0,
          0,
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
          -0.0149,
          0,
          0,
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
          -0.0184,
          0,
          0,
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
          -0.0219,
          0,
          0,
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
          -0.0254,
          0,
          0,
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
          -0.0288,
          0,
          0,
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
          -0.032,
          0,
          0,
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
          -0.035,
          0,
          0,
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
          -0.0375,
          0,
          0,
          0.9993
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
          -0.0397,
          0,
          0,
          0.9992
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
          -0.0413,
          0,
          0,
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
          -0.0423,
          0,
          0,
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
          -0.0427,
          0,
          0,
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
          -0.044,
          0,
          0,
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
          -0.0454,
          0,
          0,
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
          -0.0467,
          0,
          0,
          0.9989
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
          -0.048,
          0,
          0,
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
          -0.0491,
          0,
          0,
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
          -0.05,
          0,
          0,
          0.9987
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
          -0.0506,
          0,
          0,
          0.9987
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
          -0.0509,
          0,
          0,
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
          -0.0509,
          0,
          0,
          0.9987
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
          -0.0506,
          0,
          0,
          0.9987
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
          -0.05,
          0,
          0,
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
          -0.0491,
          0,
          0,
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
          -0.0479,
          0,
          0,
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
          -0.0467,
          0,
          0,
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
          -0.0453,
          0,
          0,
          0.999
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
          -0.0439,
          0,
          0,
          0.999
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
          -0.0426,
          0,
          0,
          0.9991
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
          -0.0414,
          0,
          0,
          0.9991
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
          -0.0404,
          0,
          0,
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
          -0.0396,
          0,
          0,
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
          -0.0391,
          0,
          0,
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
          -0.039,
          0,
          0,
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
          -0.0392,
          0,
          0,
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
          -0.0396,
          0,
          0,
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
          -0.0404,
          0,
          0,
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
          -0.0414,
          0,
          0,
          0.9991
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
          -0.0427,
          0,
          0,
          0.9991
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
          -0.044,
          0,
          0,
          0.999
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
          -0.0454,
          0,
          0,
          0.999
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
          -0.0467,
          0,
          0,
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
          -0.048,
          0,
          0,
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
          -0.0491,
          0,
          0,
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
          -0.05,
          0,
          0,
          0.9987
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
          -0.0506,
          0,
          0,
          0.9987
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
          -0.0509,
          0,
          0,
          0.9987
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
          -0.0509,
          0,
          0,
          0.9987
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
          -0.0506,
          0,
          0,
          0.9987
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
          -0.05,
          0,
          0,
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
          -0.0491,
          0,
          0,
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
          -0.0479,
          0,
          0,
          0.9989
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
          -0.0467,
          0,
          0,
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
          -0.0453,
          0,
          0,
          0.999
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
          -0.0439,
          0,
          0,
          0.999
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
          -0.0426,
          0,
          0,
          0.9991
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
          -0.0414,
          0,
          0,
          0.9991
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
          -0.0404,
          0,
          0,
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
          -0.0396,
          0,
          0,
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
          -0.0391,
          0,
          0,
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
          -0.039,
          0,
          0,
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
          -0.0392,
          0,
          0,
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
          -0.0396,
          0,
          0,
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
          -0.0404,
          0,
          0,
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
          -0.0414,
          0,
          0,
          0.9991
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
          -0.0427,
          0,
          0,
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
          -0.0423,
          0,
          0,
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
          -0.0413,
          0,
          0,
          0.9991
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
          -0.0397,
          0,
          0,
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
          -0.0375,
          0,
          0,
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
          -0.035,
          0,
          0,
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
          -0.032,
          0,
          0,
          0.9995
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
          -0.0288,
          0,
          0,
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
          -0.0254,
          0,
          0,
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
          -0.0219,
          0,
          0,
          0.9998
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
          -0.0184,
          0,
          0,
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
          -0.0149,
          0,
          0,
          0.9999
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
          -0.0115,
          0,
          0,
          0.9999
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
          -0.0084,
          0,
          0,
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
          -0.0056,
          0,
          0,
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
          -0.0033,
          0,
          0,
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
          -0.0015,
          0,
          0,
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
          -0.0004,
          0,
          0,
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
          -0.0006,
          0.0001,
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
          -0.0022,
          0.0003,
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
          -0.0048,
          0.0007,
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
          -0.0082,
          0.0013,
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
          -0.0122,
          0.0019,
          -0.0001,
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
          -0.0167,
          0.0026,
          -0.0002,
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
          -0.0216,
          0.0034,
          -0.0002,
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
          -0.0267,
          0.0042,
          -0.0003,
          0.9996
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
          -0.0319,
          0.005,
          -0.0003,
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
          -0.0371,
          0.0058,
          -0.0004,
          0.9993
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
          -0.0421,
          0.0066,
          -0.0004,
          0.9991
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
          -0.0468,
          0.0074,
          -0.0005,
          0.9989
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
          -0.0512,
          0.0081,
          -0.0005,
          0.9987
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
          -0.055,
          0.0087,
          -0.0005,
          0.9984
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
          -0.0581,
          0.0092,
          -0.0006,
          0.9983
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
          -0.0606,
          0.0096,
          -0.0006,
          0.9981
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
          -0.0621,
          0.0099,
          -0.0006,
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
          -0.0626,
          0.01,
          -0.0006,
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
          -0.064,
          0.01,
          -0.0006,
          0.9979
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
          -0.0653,
          0.01,
          -0.0007,
          0.9978
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
          -0.0667,
          0.01,
          -0.0007,
          0.9977
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
          -0.068,
          0.01,
          -0.0007,
          0.9976
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
          -0.0691,
          0.01,
          -0.0007,
          0.9976
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
          -0.07,
          0.01,
          -0.0007,
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
          -0.0706,
          0.01,
          -0.0007,
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
          -0.0709,
          0.01,
          -0.0007,
          0.9974
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
          -0.0709,
          0.01,
          -0.0007,
          0.9974
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
          -0.0706,
          0.01,
          -0.0007,
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
          -0.0699,
          0.01,
          -0.0007,
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
          -0.069,
          0.01,
          -0.0007,
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
          -0.0679,
          0.01,
          -0.0007,
          0.9976
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
          -0.0666,
          0.01,
          -0.0007,
          0.9977
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
          -0.0653,
          0.01,
          -0.0007,
          0.9978
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
          -0.0639,
          0.01,
          -0.0006,
          0.9979
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
          -0.0625,
          0.01,
          -0.0006,
          0.998
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
          -0.0613,
          0.01,
          -0.0006,
          0.9981
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
          -0.0603,
          0.01,
          -0.0006,
          0.9981
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
          -0.0596,
          0.01,
          -0.0006,
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
          -0.0591,
          0.01,
          -0.0006,
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
          -0.059,
          0.01,
          -0.0006,
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
          -0.0591,
          0.01,
          -0.0006,
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
          -0.0596,
          0.01,
          -0.0006,
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
          -0.0604,
          0.01,
          -0.0006,
          0.9981
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
          -0.0614,
          0.01,
          -0.0006,
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
          -0.0626,
          0.01,
          -0.0006,
          0.998
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
          -0.064,
          0.01,
          -0.0006,
          0.9979
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
          -0.0653,
          0.01,
          -0.0007,
          0.9978
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
          -0.0667,
          0.01,
          -0.0007,
          0.9977
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
          -0.068,
          0.01,
          -0.0007,
          0.9976
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
          -0.0691,
          0.01,
          -0.0007,
          0.9976
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
          -0.07,
          0.01,
          -0.0007,
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
          -0.0706,
          0.01,
          -0.0007,
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
          -0.0709,
          0.01,
          -0.0007,
          0.9974
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
          -0.0709,
          0.01,
          -0.0007,
          0.9974
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
          -0.0706,
          0.01,
          -0.0007,
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
          -0.0699,
          0.01,
          -0.0007,
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
          -0.069,
          0.01,
          -0.0007,
          0.9976
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
          -0.0679,
          0.01,
          -0.0007,
          0.9976
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
          -0.0666,
          0.01,
          -0.0007,
          0.9977
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
          -0.0653,
          0.01,
          -0.0007,
          0.9978
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
          -0.0639,
          0.01,
          -0.0006,
          0.9979
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
          -0.0625,
          0.01,
          -0.0006,
          0.998
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
          -0.0613,
          0.01,
          -0.0006,
          0.9981
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
          -0.0603,
          0.01,
          -0.0006,
          0.9981
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
          -0.0596,
          0.01,
          -0.0006,
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
          -0.0591,
          0.01,
          -0.0006,
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
          -0.059,
          0.01,
          -0.0006,
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
          -0.0591,
          0.01,
          -0.0006,
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
          -0.0596,
          0.01,
          -0.0006,
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
          -0.0604,
          0.01,
          -0.0006,
          0.9981
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
          -0.0614,
          0.01,
          -0.0006,
          0.9981
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
          -0.0626,
          0.01,
          -0.0006,
          0.998
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
          -0.0621,
          0.0099,
          -0.0006,
          0.998
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
          -0.0606,
          0.0096,
          -0.0006,
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
          -0.0581,
          0.0092,
          -0.0006,
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
          -0.055,
          0.0087,
          -0.0005,
          0.9984
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
          -0.0512,
          0.0081,
          -0.0005,
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
          -0.0468,
          0.0074,
          -0.0005,
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
          -0.0421,
          0.0066,
          -0.0004,
          0.9991
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
          -0.0371,
          0.0058,
          -0.0004,
          0.9993
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
          -0.0319,
          0.005,
          -0.0003,
          0.9995
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
          -0.0267,
          0.0042,
          -0.0003,
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
          -0.0216,
          0.0034,
          -0.0002,
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
          -0.0167,
          0.0026,
          -0.0002,
          0.9999
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
          -0.0122,
          0.0019,
          -0.0001,
          0.9999
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
          -0.0082,
          0.0013,
          -0.0001,
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
          -0.0048,
          0.0007,
          0,
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
          -0.0022,
          0.0003,
          0,
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
          -0.0006,
          0.0001,
          0,
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
          -0.0008,
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
          -0.0029,
          0.0002,
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
          -0.0063,
          0.0004,
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
          -0.0107,
          0.0006,
          -0.0001,
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
          -0.0159,
          0.0009,
          -0.0001,
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
          -0.0219,
          0.0013,
          -0.0001,
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
          -0.0283,
          0.0017,
          -0.0001,
          0.9996
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
          -0.035,
          0.0021,
          -0.0002,
          0.9994
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
          -0.0419,
          0.0025,
          -0.0002,
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
          -0.0487,
          0.0029,
          -0.0002,
          0.9988
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
          -0.0554,
          0.0033,
          -0.0003,
          0.9985
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
          -0.0616,
          0.0037,
          -0.0003,
          0.9981
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
          -0.0674,
          0.004,
          -0.0003,
          0.9977
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
          -0.0724,
          0.0044,
          -0.0004,
          0.9974
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
          -0.0766,
          0.0046,
          -0.0004,
          0.997
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
          -0.0798,
          0.0048,
          -0.0004,
          0.9968
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
          -0.0819,
          0.0049,
          -0.0004,
          0.9966
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
          -0.0826,
          0.005,
          -0.0004,
          0.9966
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
          -0.0839,
          0.005,
          -0.0004,
          0.9965
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
          -0.0853,
          0.005,
          -0.0004,
          0.9963
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
          -0.0867,
          0.005,
          -0.0004,
          0.9962
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
          -0.0879,
          0.005,
          -0.0004,
          0.9961
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
          -0.089,
          0.005,
          -0.0004,
          0.996
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
          -0.0899,
          0.005,
          -0.0004,
          0.9959
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
          -0.0905,
          0.005,
          -0.0005,
          0.9959
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
          -0.0908,
          0.005,
          -0.0005,
          0.9959
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
          -0.0908,
          0.005,
          -0.0005,
          0.9959
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
          -0.0905,
          0.005,
          -0.0005,
          0.9959
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
          -0.0899,
          0.005,
          -0.0004,
          0.9959
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
          -0.089,
          0.005,
          -0.0004,
          0.996
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
          -0.0878,
          0.005,
          -0.0004,
          0.9961
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
          -0.0866,
          0.005,
          -0.0004,
          0.9962
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
          -0.0852,
          0.005,
          -0.0004,
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
          -0.0838,
          0.005,
          -0.0004,
          0.9965
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
          -0.0825,
          0.005,
          -0.0004,
          0.9966
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
          -0.0813,
          0.005,
          -0.0004,
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
          -0.0803,
          0.005,
          -0.0004,
          0.9968
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
          -0.0795,
          0.005,
          -0.0004,
          0.9968
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
          -0.0791,
          0.005,
          -0.0004,
          0.9969
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
          -0.0789,
          0.005,
          -0.0004,
          0.9969
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
          -0.0791,
          0.005,
          -0.0004,
          0.9969
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
          -0.0796,
          0.005,
          -0.0004,
          0.9968
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
          -0.0803,
          0.005,
          -0.0004,
          0.9968
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
          -0.0814,
          0.005,
          -0.0004,
          0.9967
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
          -0.0826,
          0.005,
          -0.0004,
          0.9966
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
          -0.0839,
          0.005,
          -0.0004,
          0.9965
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
          -0.0853,
          0.005,
          -0.0004,
          0.9963
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
          -0.0867,
          0.005,
          -0.0004,
          0.9962
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
          -0.0879,
          0.005,
          -0.0004,
          0.9961
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
          -0.089,
          0.005,
          -0.0004,
          0.996
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
          -0.0899,
          0.005,
          -0.0004,
          0.9959
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
          -0.0905,
          0.005,
          -0.0005,
          0.9959
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
          -0.0908,
          0.005,
          -0.0005,
          0.9959
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
          -0.0908,
          0.005,
          -0.0005,
          0.9959
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
          -0.0905,
          0.005,
          -0.0005,
          0.9959
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
          -0.0899,
          0.005,
          -0.0004,
          0.9959
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
          -0.089,
          0.005,
          -0.0004,
          0.996
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
          -0.0878,
          0.005,
          -0.0004,
          0.9961
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
          -0.0866,
          0.005,
          -0.0004,
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
          -0.0852,
          0.005,
          -0.0004,
          0.9964
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
          -0.0838,
          0.005,
          -0.0004,
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
          -0.0825,
          0.005,
          -0.0004,
          0.9966
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
          -0.0813,
          0.005,
          -0.0004,
          0.9967
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
          -0.0803,
          0.005,
          -0.0004,
          0.9968
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
          -0.0795,
          0.005,
          -0.0004,
          0.9968
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
          -0.0791,
          0.005,
          -0.0004,
          0.9969
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
          -0.0789,
          0.005,
          -0.0004,
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
          -0.0791,
          0.005,
          -0.0004,
          0.9969
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
          -0.0796,
          0.005,
          -0.0004,
          0.9968
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
          -0.0803,
          0.005,
          -0.0004,
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
          -0.0814,
          0.005,
          -0.0004,
          0.9967
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
          -0.0826,
          0.005,
          -0.0004,
          0.9966
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
          -0.0819,
          0.0049,
          -0.0004,
          0.9966
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
          -0.0798,
          0.0048,
          -0.0004,
          0.9968
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
          -0.0766,
          0.0046,
          -0.0004,
          0.997
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
          -0.0724,
          0.0044,
          -0.0004,
          0.9974
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
          -0.0674,
          0.004,
          -0.0003,
          0.9977
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
          -0.0616,
          0.0037,
          -0.0003,
          0.9981
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
          -0.0554,
          0.0033,
          -0.0003,
          0.9985
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
          -0.0487,
          0.0029,
          -0.0002,
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
          -0.0419,
          0.0025,
          -0.0002,
          0.9991
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
          -0.035,
          0.0021,
          -0.0002,
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
          -0.0283,
          0.0017,
          -0.0001,
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
          -0.0219,
          0.0013,
          -0.0001,
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
          -0.0159,
          0.0009,
          -0.0001,
          0.9999
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
          -0.0107,
          0.0006,
          -0.0001,
          0.9999
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
          -0.0063,
          0.0004,
          0,
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
          -0.0029,
          0.0002,
          0,
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
          -0.0008,
          0,
          0,
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
          -0.0004,
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
          -0.0017,
          0,
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
          -0.0037,
          0,
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
          -0.0063,
          0,
          0,
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
          -0.0093,
          0,
          0,
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
          -0.0128,
          0,
          0,
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
          -0.0165,
          0,
          0,
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
          -0.0204,
          0,
          0,
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
          -0.0244,
          0,
          0,
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
          -0.0284,
          0,
          0,
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
          -0.0322,
          0,
          0,
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
          -0.0357,
          0,
          0,
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
          -0.039,
          0,
          0,
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
          -0.0419,
          0,
          0,
          0.9991
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
          -0.0443,
          0,
          0,
          0.999
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
          -0.0461,
          0,
          0,
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
          -0.0472,
          0,
          0,
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
          -0.0476,
          0,
          0,
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
          -0.049,
          0,
          0,
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
          -0.0504,
          0,
          0,
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
          -0.0517,
          0,
          0,
          0.9987
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
          -0.053,
          0,
          0,
          0.9986
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
          -0.0541,
          0,
          0,
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
          -0.055,
          0,
          0,
          0.9985
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
          -0.0556,
          0,
          0,
          0.9985
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
          -0.0559,
          0,
          0,
          0.9984
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
          -0.0559,
          0,
          0,
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
          -0.0556,
          0,
          0,
          0.9985
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
          -0.055,
          0,
          0,
          0.9985
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
          -0.0541,
          0,
          0,
          0.9985
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
          -0.0529,
          0,
          0,
          0.9986
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
          -0.0517,
          0,
          0,
          0.9987
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
          -0.0503,
          0,
          0,
          0.9987
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
          -0.0489,
          0,
          0,
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
          -0.0476,
          0,
          0,
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
          -0.0464,
          0,
          0,
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
          -0.0454,
          0,
          0,
          0.999
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
          -0.0446,
          0,
          0,
          0.999
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
          -0.0441,
          0,
          0,
          0.999
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
          -0.044,
          0,
          0,
          0.999
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
          -0.0442,
          0,
          0,
          0.999
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
          -0.0446,
          0,
          0,
          0.999
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
          -0.0454,
          0,
          0,
          0.999
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
          -0.0464,
          0,
          0,
          0.9989
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
          -0.0476,
          0,
          0,
          0.9989
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
          -0.049,
          0,
          0,
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
          -0.0504,
          0,
          0,
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
          -0.0517,
          0,
          0,
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
          -0.053,
          0,
          0,
          0.9986
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
          -0.0541,
          0,
          0,
          0.9985
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
          -0.055,
          0,
          0,
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
          -0.0556,
          0,
          0,
          0.9985
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
          -0.0559,
          0,
          0,
          0.9984
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
          -0.0559,
          0,
          0,
          0.9984
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
          -0.0556,
          0,
          0,
          0.9985
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
          -0.055,
          0,
          0,
          0.9985
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
          -0.0541,
          0,
          0,
          0.9985
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
          -0.0529,
          0,
          0,
          0.9986
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
          -0.0517,
          0,
          0,
          0.9987
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
          -0.0503,
          0,
          0,
          0.9987
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
          -0.0489,
          0,
          0,
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
          -0.0476,
          0,
          0,
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
          -0.0464,
          0,
          0,
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
          -0.0454,
          0,
          0,
          0.999
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
          -0.0446,
          0,
          0,
          0.999
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
          -0.0441,
          0,
          0,
          0.999
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
          -0.044,
          0,
          0,
          0.999
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
          -0.0442,
          0,
          0,
          0.999
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
          -0.0446,
          0,
          0,
          0.999
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
          -0.0454,
          0,
          0,
          0.999
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
          -0.0464,
          0,
          0,
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
          -0.0476,
          0,
          0,
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
          -0.0472,
          0,
          0,
          0.9989
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
          -0.0461,
          0,
          0,
          0.9989
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
          -0.0443,
          0,
          0,
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
          -0.0419,
          0,
          0,
          0.9991
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
          -0.039,
          0,
          0,
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
          -0.0357,
          0,
          0,
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
          -0.0322,
          0,
          0,
          0.9995
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
          -0.0284,
          0,
          0,
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
          -0.0244,
          0,
          0,
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
          -0.0204,
          0,
          0,
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
          -0.0165,
          0,
          0,
          0.9999
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
          -0.0128,
          0,
          0,
          0.9999
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
          -0.0093,
          0,
          0,
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
          -0.0063,
          0,
          0,
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
          -0.0037,
          0,
          0,
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
          -0.0017,
          0,
          0,
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
          -0.0004,
          0,
          0,
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
          -0.0007,
          0.0002,
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
          -0.0027,
          0.0007,
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
          -0.0059,
          0.0015,
          -0.0001,
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
          -0.0101,
          0.0025,
          -0.0002,
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
          -0.015,
          0.0038,
          -0.0003,
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
          -0.0206,
          0.0052,
          -0.0004,
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
          -0.0266,
          0.0067,
          -0.0005,
          0.9996
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
          -0.0329,
          0.0083,
          -0.0007,
          0.9994
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
          -0.0394,
          0.01,
          -0.0008,
          0.9992
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
          -0.0458,
          0.0116,
          -0.0009,
          0.9989
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
          -0.0521,
          0.0132,
          -0.001,
          0.9986
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
          -0.0579,
          0.0148,
          -0.0012,
          0.9982
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
          -0.0633,
          0.0162,
          -0.0013,
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
          -0.0681,
          0.0174,
          -0.0014,
          0.9975
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
          -0.072,
          0.0185,
          -0.0014,
          0.9972
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
          -0.075,
          0.0193,
          -0.0015,
          0.997
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
          -0.0769,
          0.0198,
          -0.0015,
          0.9968
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
          -0.0776,
          0.0199,
          -0.0016,
          0.9968
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
          -0.0789,
          0.0199,
          -0.0016,
          0.9967
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
          -0.0803,
          0.0199,
          -0.0016,
          0.9966
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
          -0.0817,
          0.0199,
          -0.0016,
          0.9965
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
          -0.0829,
          0.0199,
          -0.0017,
          0.9964
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
          -0.084,
          0.0199,
          -0.0017,
          0.9963
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
          -0.0849,
          0.0199,
          -0.0017,
          0.9962
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
          -0.0855,
          0.0199,
          -0.0017,
          0.9961
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
          -0.0858,
          0.0199,
          -0.0017,
          0.9961
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
          -0.0858,
          0.0199,
          -0.0017,
          0.9961
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
          -0.0855,
          0.0199,
          -0.0017,
          0.9961
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
          -0.0849,
          0.0199,
          -0.0017,
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
          -0.084,
          0.0199,
          -0.0017,
          0.9963
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
          -0.0829,
          0.0199,
          -0.0017,
          0.9964
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
          -0.0816,
          0.0199,
          -0.0016,
          0.9965
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
          -0.0802,
          0.0199,
          -0.0016,
          0.9966
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
          -0.0788,
          0.0199,
          -0.0016,
          0.9967
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
          -0.0775,
          0.0199,
          -0.0016,
          0.9968
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
          -0.0763,
          0.0199,
          -0.0015,
          0.9969
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
          -0.0753,
          0.0199,
          -0.0015,
          0.997
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
          -0.0745,
          0.0199,
          -0.0015,
          0.997
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
          -0.0741,
          0.0199,
          -0.0015,
          0.9971
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
          -0.0739,
          0.0199,
          -0.0015,
          0.9971
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
          -0.0741,
          0.0199,
          -0.0015,
          0.9971
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
          -0.0746,
          0.0199,
          -0.0015,
          0.997
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
          -0.0753,
          0.0199,
          -0.0015,
          0.997
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
          -0.0764,
          0.0199,
          -0.0015,
          0.9969
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
          -0.0776,
          0.0199,
          -0.0016,
          0.9968
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
          -0.0789,
          0.0199,
          -0.0016,
          0.9967
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
          -0.0803,
          0.0199,
          -0.0016,
          0.9966
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
          -0.0817,
          0.0199,
          -0.0016,
          0.9965
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
          -0.0829,
          0.0199,
          -0.0017,
          0.9964
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
          -0.084,
          0.0199,
          -0.0017,
          0.9963
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
          -0.0849,
          0.0199,
          -0.0017,
          0.9962
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
          -0.0855,
          0.0199,
          -0.0017,
          0.9961
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
          -0.0858,
          0.0199,
          -0.0017,
          0.9961
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
          -0.0858,
          0.0199,
          -0.0017,
          0.9961
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
          -0.0855,
          0.0199,
          -0.0017,
          0.9961
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
          -0.0849,
          0.0199,
          -0.0017,
          0.9962
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
          -0.084,
          0.0199,
          -0.0017,
          0.9963
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
          -0.0829,
          0.0199,
          -0.0017,
          0.9964
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
          -0.0816,
          0.0199,
          -0.0016,
          0.9965
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
          -0.0802,
          0.0199,
          -0.0016,
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
          -0.0788,
          0.0199,
          -0.0016,
          0.9967
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
          -0.0775,
          0.0199,
          -0.0016,
          0.9968
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
          -0.0763,
          0.0199,
          -0.0015,
          0.9969
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
          -0.0753,
          0.0199,
          -0.0015,
          0.997
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
          -0.0745,
          0.0199,
          -0.0015,
          0.997
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
          -0.0741,
          0.0199,
          -0.0015,
          0.9971
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
          -0.0739,
          0.0199,
          -0.0015,
          0.9971
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
          -0.0741,
          0.0199,
          -0.0015,
          0.9971
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
          -0.0746,
          0.0199,
          -0.0015,
          0.997
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
          -0.0753,
          0.0199,
          -0.0015,
          0.997
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
          -0.0764,
          0.0199,
          -0.0015,
          0.9969
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
          -0.0776,
          0.0199,
          -0.0016,
          0.9968
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
          -0.0769,
          0.0198,
          -0.0015,
          0.9968
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
          -0.075,
          0.0193,
          -0.0015,
          0.997
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
          -0.072,
          0.0185,
          -0.0014,
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
          -0.0681,
          0.0174,
          -0.0014,
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
          -0.0633,
          0.0162,
          -0.0013,
          0.9979
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
          -0.0579,
          0.0148,
          -0.0012,
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
          -0.0521,
          0.0132,
          -0.001,
          0.9986
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
          -0.0458,
          0.0116,
          -0.0009,
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
          -0.0394,
          0.01,
          -0.0008,
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
          -0.0329,
          0.0083,
          -0.0007,
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
          -0.0266,
          0.0067,
          -0.0005,
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
          -0.0206,
          0.0052,
          -0.0004,
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
          -0.015,
          0.0038,
          -0.0003,
          0.9999
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
          -0.0101,
          0.0025,
          -0.0002,
          0.9999
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
          -0.0059,
          0.0015,
          -0.0001,
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
          -0.0027,
          0.0007,
          -0.0001,
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
          -0.0007,
          0.0002,
          0,
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
          -0.0009,
          0.0001,
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
          -0.0034,
          0.0003,
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
          -0.0074,
          0.0007,
          -0.0001,
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
          -0.0126,
          0.0013,
          -0.0001,
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
          -0.0188,
          0.0019,
          -0.0002,
          0.9998
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
          -0.0258,
          0.0026,
          -0.0003,
          0.9997
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
          -0.0333,
          0.0033,
          -0.0003,
          0.9994
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
          -0.0413,
          0.0042,
          -0.0004,
          0.9991
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
          -0.0494,
          0.005,
          -0.0005,
          0.9988
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
          -0.0575,
          0.0058,
          -0.0006,
          0.9983
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
          -0.0653,
          0.0066,
          -0.0007,
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
          -0.0727,
          0.0074,
          -0.0007,
          0.9973
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
          -0.0795,
          0.0081,
          -0.0008,
          0.9968
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
          -0.0855,
          0.0087,
          -0.0009,
          0.9963
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
          -0.0905,
          0.0092,
          -0.0009,
          0.9959
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
          -0.0942,
          0.0096,
          -0.0009,
          0.9955
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
          -0.0967,
          0.0099,
          -0.001,
          0.9953
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
          -0.0975,
          0.01,
          -0.001,
          0.9952
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
          -0.0988,
          0.01,
          -0.001,
          0.9951
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
          -0.1002,
          0.0099,
          -0.001,
          0.9949
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
          -0.1016,
          0.0099,
          -0.001,
          0.9948
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
          -0.1029,
          0.0099,
          -0.001,
          0.9946
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
          -0.104,
          0.0099,
          -0.001,
          0.9945
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
          -0.1048,
          0.0099,
          -0.001,
          0.9944
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
          -0.1055,
          0.0099,
          -0.0011,
          0.9944
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
          -0.1058,
          0.0099,
          -0.0011,
          0.9943
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
          -0.1058,
          0.0099,
          -0.0011,
          0.9943
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
          -0.1054,
          0.0099,
          -0.0011,
          0.9944
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
          -0.1048,
          0.0099,
          -0.001,
          0.9944
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
          -0.1039,
          0.0099,
          -0.001,
          0.9945
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
          -0.1028,
          0.0099,
          -0.001,
          0.9947
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
          -0.1015,
          0.0099,
          -0.001,
          0.9948
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
          -0.1001,
          0.0099,
          -0.001,
          0.9949
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
          -0.0987,
          0.01,
          -0.001,
          0.9951
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
          -0.0974,
          0.01,
          -0.001,
          0.9952
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
          -0.0962,
          0.01,
          -0.001,
          0.9953
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
          -0.0952,
          0.01,
          -0.001,
          0.9954
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
          -0.0945,
          0.01,
          -0.0009,
          0.9955
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
          -0.094,
          0.01,
          -0.0009,
          0.9955
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
          -0.0939,
          0.01,
          -0.0009,
          0.9955
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
          -0.094,
          0.01,
          -0.0009,
          0.9955
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
          -0.0945,
          0.01,
          -0.0009,
          0.9955
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
          -0.0953,
          0.01,
          -0.001,
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
          -0.0963,
          0.01,
          -0.001,
          0.9953
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
          -0.0975,
          0.01,
          -0.001,
          0.9952
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
          -0.0988,
          0.01,
          -0.001,
          0.9951
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
          -0.1002,
          0.0099,
          -0.001,
          0.9949
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
          -0.1016,
          0.0099,
          -0.001,
          0.9948
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
          -0.1029,
          0.0099,
          -0.001,
          0.9946
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
          -0.104,
          0.0099,
          -0.001,
          0.9945
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
          -0.1048,
          0.0099,
          -0.001,
          0.9944
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
          -0.1055,
          0.0099,
          -0.0011,
          0.9944
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
          -0.1058,
          0.0099,
          -0.0011,
          0.9943
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
          -0.1058,
          0.0099,
          -0.0011,
          0.9943
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
          -0.1054,
          0.0099,
          -0.0011,
          0.9944
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
          -0.1048,
          0.0099,
          -0.001,
          0.9944
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
          -0.1039,
          0.0099,
          -0.001,
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
          -0.1028,
          0.0099,
          -0.001,
          0.9947
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
          -0.1015,
          0.0099,
          -0.001,
          0.9948
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
          -0.1001,
          0.0099,
          -0.001,
          0.9949
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
          -0.0987,
          0.01,
          -0.001,
          0.9951
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
          -0.0974,
          0.01,
          -0.001,
          0.9952
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
          -0.0962,
          0.01,
          -0.001,
          0.9953
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
          -0.0952,
          0.01,
          -0.001,
          0.9954
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
          -0.0945,
          0.01,
          -0.0009,
          0.9955
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
          -0.094,
          0.01,
          -0.0009,
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
          -0.0939,
          0.01,
          -0.0009,
          0.9955
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
          -0.094,
          0.01,
          -0.0009,
          0.9955
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
          -0.0945,
          0.01,
          -0.0009,
          0.9955
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
          -0.0953,
          0.01,
          -0.001,
          0.9954
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
          -0.0963,
          0.01,
          -0.001,
          0.9953
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
          -0.0975,
          0.01,
          -0.001,
          0.9952
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
          -0.0967,
          0.0099,
          -0.001,
          0.9953
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
          -0.0942,
          0.0096,
          -0.0009,
          0.9955
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
          -0.0905,
          0.0092,
          -0.0009,
          0.9959
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
          -0.0855,
          0.0087,
          -0.0009,
          0.9963
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
          -0.0795,
          0.0081,
          -0.0008,
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
          -0.0727,
          0.0074,
          -0.0007,
          0.9973
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
          -0.0653,
          0.0066,
          -0.0007,
          0.9978
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
          -0.0575,
          0.0058,
          -0.0006,
          0.9983
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
          -0.0494,
          0.005,
          -0.0005,
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
          -0.0413,
          0.0042,
          -0.0004,
          0.9991
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
          -0.0333,
          0.0033,
          -0.0003,
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
          -0.0258,
          0.0026,
          -0.0003,
          0.9997
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
          -0.0188,
          0.0019,
          -0.0002,
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
          -0.0126,
          0.0013,
          -0.0001,
          0.9999
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
          -0.0074,
          0.0007,
          -0.0001,
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
          -0.0034,
          0.0003,
          0,
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
          -0.0009,
          0.0001,
          0,
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
          -0.0005,
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
          -0.0021,
          0,
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
          -0.0044,
          0,
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
          -0.0075,
          0,
          0,
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
          -0.0112,
          0,
          0,
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
          -0.0154,
          0,
          0,
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
          -0.0199,
          0,
          0,
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
          -0.0246,
          0,
          0,
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
          -0.0294,
          0,
          0,
          0.9996
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
          -0.0342,
          0,
          0,
          0.9994
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
          -0.0388,
          0,
          0,
          0.9992
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
          -0.0431,
          0,
          0,
          0.9991
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
          -0.0471,
          0,
          0,
          0.9989
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
          -0.0506,
          0,
          0,
          0.9987
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
          -0.0535,
          0,
          0,
          0.9986
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
          -0.0557,
          0,
          0,
          0.9984
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
          -0.0571,
          0,
          0,
          0.9984
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
          -0.0576,
          0,
          0,
          0.9983
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
          -0.059,
          0,
          0,
          0.9983
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
          -0.0604,
          0,
          0,
          0.9982
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
          -0.0617,
          0,
          0,
          0.9981
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
          -0.063,
          0,
          0,
          0.998
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
          -0.0641,
          0,
          0,
          0.9979
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
          -0.065,
          0,
          0,
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
          -0.0656,
          0,
          0,
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
          -0.0659,
          0,
          0,
          0.9978
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
          -0.0659,
          0,
          0,
          0.9978
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
          -0.0656,
          0,
          0,
          0.9978
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
          -0.0649,
          0,
          0,
          0.9979
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
          -0.064,
          0,
          0,
          0.9979
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
          -0.0629,
          0,
          0,
          0.998
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
          -0.0616,
          0,
          0,
          0.9981
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
          -0.0603,
          0,
          0,
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
          -0.0589,
          0,
          0,
          0.9983
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
          -0.0576,
          0,
          0,
          0.9983
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
          -0.0564,
          0,
          0,
          0.9984
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
          -0.0553,
          0,
          0,
          0.9985
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
          -0.0546,
          0,
          0,
          0.9985
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
          -0.0541,
          0,
          0,
          0.9985
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
          -0.054,
          0,
          0,
          0.9985
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
          -0.0541,
          0,
          0,
          0.9985
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
          -0.0546,
          0,
          0,
          0.9985
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
          -0.0554,
          0,
          0,
          0.9985
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
          -0.0564,
          0,
          0,
          0.9984
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
          -0.0576,
          0,
          0,
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
          -0.059,
          0,
          0,
          0.9983
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
          -0.0604,
          0,
          0,
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
          -0.0617,
          0,
          0,
          0.9981
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
          -0.063,
          0,
          0,
          0.998
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
          -0.0641,
          0,
          0,
          0.9979
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
          -0.065,
          0,
          0,
          0.9979
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
          -0.0656,
          0,
          0,
          0.9978
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
          -0.0659,
          0,
          0,
          0.9978
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
          -0.0659,
          0,
          0,
          0.9978
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
          -0.0656,
          0,
          0,
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
          -0.0649,
          0,
          0,
          0.9979
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
          -0.064,
          0,
          0,
          0.9979
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
          -0.0629,
          0,
          0,
          0.998
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
          -0.0616,
          0,
          0,
          0.9981
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
          -0.0603,
          0,
          0,
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
          -0.0589,
          0,
          0,
          0.9983
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
          -0.0576,
          0,
          0,
          0.9983
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
          -0.0564,
          0,
          0,
          0.9984
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
          -0.0553,
          0,
          0,
          0.9985
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
          -0.0546,
          0,
          0,
          0.9985
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
          -0.0541,
          0,
          0,
          0.9985
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
          -0.054,
          0,
          0,
          0.9985
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
          -0.0541,
          0,
          0,
          0.9985
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
          -0.0546,
          0,
          0,
          0.9985
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
          -0.0554,
          0,
          0,
          0.9985
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
          -0.0564,
          0,
          0,
          0.9984
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
          -0.0576,
          0,
          0,
          0.9983
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
          -0.0571,
          0,
          0,
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
          -0.0557,
          0,
          0,
          0.9984
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
          -0.0535,
          0,
          0,
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
          -0.0506,
          0,
          0,
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
          -0.0471,
          0,
          0,
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
          -0.0431,
          0,
          0,
          0.9991
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
          -0.0388,
          0,
          0,
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
          -0.0342,
          0,
          0,
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
          -0.0294,
          0,
          0,
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
          -0.0246,
          0,
          0,
          0.9997
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
          -0.0199,
          0,
          0,
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
          -0.0154,
          0,
          0,
          0.9999
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
          -0.0112,
          0,
          0,
          0.9999
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
          -0.0075,
          0,
          0,
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
          -0.0044,
          0,
          0,
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
          -0.0021,
          0,
          0,
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
          -0.0005,
          0,
          0,
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
          -0.0001,
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
          -0.0002,
          -0.0003,
          -0.0003,
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
          -0.0007,
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
          -0.0006,
          -0.0013,
          -0.0009,
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
          -0.0009,
          -0.0019,
          -0.0014,
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
          -0.0013,
          -0.0026,
          -0.0019,
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
          -0.0017,
          -0.0034,
          -0.0025,
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
          -0.0042,
          -0.0031,
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
          -0.0025,
          -0.005,
          -0.0037,
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
          -0.0029,
          -0.0058,
          -0.0044,
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
          -0.0033,
          -0.0067,
          -0.005,
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
          -0.0037,
          -0.0074,
          -0.0055,
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
          -0.004,
          -0.0081,
          -0.0061,
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
          -0.0043,
          -0.0088,
          -0.0065,
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
          -0.0046,
          -0.0093,
          -0.0069,
          0.9999
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
          -0.0048,
          -0.0097,
          -0.0072,
          0.9999
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
          -0.0049,
          -0.0099,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.0099,
          -0.0074,
          0.9999
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
          -0.0048,
          -0.0097,
          -0.0072,
          0.9999
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
          -0.0046,
          -0.0093,
          -0.0069,
          0.9999
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
          -0.0043,
          -0.0088,
          -0.0065,
          0.9999
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
          -0.004,
          -0.0081,
          -0.0061,
          0.9999
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
          -0.0037,
          -0.0074,
          -0.0055,
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
          -0.0033,
          -0.0067,
          -0.005,
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
          -0.0029,
          -0.0058,
          -0.0044,
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
          -0.0025,
          -0.005,
          -0.0037,
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
          -0.0021,
          -0.0042,
          -0.0031,
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
          -0.0017,
          -0.0034,
          -0.0025,
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
          -0.0013,
          -0.0026,
          -0.0019,
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
          -0.0009,
          -0.0019,
          -0.0014,
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
          -0.0006,
          -0.0013,
          -0.0009,
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
          -0.0004,
          -0.0007,
          -0.0006,
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
          -0.0002,
          -0.0003,
          -0.0003,
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
          -0.0001,
          -0.0001,
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
          -0.0001,
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
          -0.0002,
          -0.0003,
          -0.0003,
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
          -0.0007,
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
          -0.0006,
          -0.0013,
          -0.0009,
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
          -0.0009,
          -0.0019,
          -0.0014,
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
          -0.0013,
          -0.0026,
          -0.0019,
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
          -0.0017,
          -0.0034,
          -0.0025,
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
          -0.0042,
          -0.0031,
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
          -0.0025,
          -0.005,
          -0.0037,
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
          -0.0029,
          -0.0058,
          -0.0044,
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
          -0.0033,
          -0.0067,
          -0.005,
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
          -0.0037,
          -0.0074,
          -0.0055,
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
          -0.004,
          -0.0081,
          -0.0061,
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
          -0.0043,
          -0.0088,
          -0.0065,
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
          -0.0046,
          -0.0093,
          -0.0069,
          0.9999
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
          -0.0048,
          -0.0097,
          -0.0072,
          0.9999
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
          -0.0049,
          -0.0099,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.01,
          -0.0074,
          0.9999
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
          -0.0049,
          -0.0099,
          -0.0074,
          0.9999
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
          -0.0048,
          -0.0097,
          -0.0072,
          0.9999
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
          -0.0046,
          -0.0093,
          -0.0069,
          0.9999
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
          -0.0043,
          -0.0088,
          -0.0065,
          0.9999
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
          -0.004,
          -0.0081,
          -0.0061,
          0.9999
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
          -0.0037,
          -0.0074,
          -0.0055,
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
          -0.0033,
          -0.0067,
          -0.005,
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
          -0.0029,
          -0.0058,
          -0.0044,
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
          -0.0025,
          -0.005,
          -0.0037,
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
          -0.0021,
          -0.0042,
          -0.0031,
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
          -0.0017,
          -0.0034,
          -0.0025,
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
          -0.0013,
          -0.0026,
          -0.0019,
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
          -0.0009,
          -0.0019,
          -0.0014,
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
          -0.0006,
          -0.0013,
          -0.0009,
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
          -0.0004,
          -0.0007,
          -0.0006,
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
          -0.0002,
          -0.0003,
          -0.0003,
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
          -0.0001,
          -0.0001,
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
        "frame": 18,
        "time": 0.6,
        "weight": 0.85
      },
      {
        "frame": 72,
        "time": 2.4,
        "weight": 0.85
      },
      {
        "frame": 90,
        "time": 3,
        "weight": 0
      }
    ]
  },
  "cameras": [],
  "ik": []
};

export default gentleWaveMotion;
