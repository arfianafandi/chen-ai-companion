import type { IVmdStructuredMotion } from '../types';

/**
 * Otentik Lambaian Tangan Ramah Anime dengan Transisi Mulus Organik
 * - Mulai tepat di posisi resting arm idle (Euler Z=0.62, X=0.08, Y=-0.04)
 * - Naik secara mulus dengan kurva quintic smootherstep ke posisi melambai (Frame 0-20)
 * - Telapak tangan terbuka ramah menghadap depan Dokutah dengan pergelangan melambai ritmis (Frame 20-75)
 * - Turun secara mulus dengan kurva quintic smootherstep mendarat sempurna di resting arm idle (Frame 75-96)
 * - Senyuman ramah anime selaras dengan durasi lambaian tanpa ada jeda/hentakan.
 */
export const gentleWaveMotion: IVmdStructuredMotion = {
  "metadata": {
    "version": "Vocaloid Motion Data 0002",
    "modelName": "Chen_GentleWave",
    "totalFrames": 96,
    "durationSeconds": 3.2,
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
          -0.0002,
          0.0002,
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
          -0.0005,
          0.0007,
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
          -0.0011,
          0.0015,
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
          -0.0019,
          0.0027,
          0.0046,
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
          -0.0031,
          0.0042,
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
          -0.0044,
          0.0061,
          0.0105,
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
          -0.006,
          0.0082,
          0.0141,
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
          -0.0077,
          0.0105,
          0.0181,
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
          -0.0094,
          0.013,
          0.0223,
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
          -0.0112,
          0.0154,
          0.0264,
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
          -0.0128,
          0.0177,
          0.0304,
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
          -0.0144,
          0.0198,
          0.034,
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
          -0.0157,
          0.0217,
          0.0372,
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
          -0.0169,
          0.0232,
          0.0399,
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
          -0.0177,
          0.0244,
          0.0419,
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
          -0.0183,
          0.0252,
          0.0433,
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
          -0.0186,
          0.0257,
          0.0441,
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
          0.0444,
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
          -0.0188,
          0.0259,
          0.0445,
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
          -0.0188,
          0.0259,
          0.0445,
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
          -0.0188,
          0.0259,
          0.0445,
          0.9985
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
          -0.0188,
          0.0259,
          0.0445,
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
          -0.0187,
          0.0257,
          0.0442,
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
          -0.0184,
          0.0253,
          0.0435,
          0.9986
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
          -0.0178,
          0.0246,
          0.0422,
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
          -0.0171,
          0.0235,
          0.0404,
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
          -0.0161,
          0.0222,
          0.0381,
          0.9989
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
          -0.0149,
          0.0205,
          0.0352,
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
          -0.0134,
          0.0185,
          0.0318,
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
          -0.0119,
          0.0164,
          0.0281,
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
          -0.0102,
          0.0141,
          0.0242,
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
          -0.0086,
          0.0118,
          0.0203,
          0.9997
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
          -0.0069,
          0.0095,
          0.0164,
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
          -0.0054,
          0.0074,
          0.0127,
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
          -0.0039,
          0.0054,
          0.0093,
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
          -0.0027,
          0.0037,
          0.0064,
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
          -0.0017,
          0.0024,
          0.0041,
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
          -0.001,
          0.0013,
          0.0023,
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
          -0.0004,
          0.0006,
          0.001,
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
          -0.0001,
          0.0002,
          0.0003,
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
          0,
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
          -0.032,
          0.0312,
          0.304,
          0.9516
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
          -0.0316,
          0.0308,
          0.3037,
          0.9517
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
          -0.0295,
          0.0277,
          0.3017,
          0.9525
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
          -0.0243,
          0.0204,
          0.297,
          0.9544
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
          -0.0152,
          0.0076,
          0.2887,
          0.9573
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
          -0.0019,
          -0.0111,
          0.2764,
          0.961
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
          0.0154,
          -0.0354,
          0.26,
          0.9648
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
          0.0364,
          -0.0648,
          0.2398,
          0.968
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
          0.0602,
          -0.0982,
          0.2162,
          0.9695
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
          0.0859,
          -0.1343,
          0.1901,
          0.9687
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
          0.1125,
          -0.1714,
          0.1623,
          0.9652
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
          0.1387,
          -0.2081,
          0.1341,
          0.9589
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
          0.1635,
          -0.2428,
          0.1066,
          0.9502
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
          0.186,
          -0.2741,
          0.0811,
          0.94
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
          0.2053,
          -0.301,
          0.0586,
          0.9294
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
          0.221,
          -0.3229,
          0.0399,
          0.9194
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
          0.2329,
          -0.3394,
          0.0255,
          0.911
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
          0.2409,
          -0.3506,
          0.0157,
          0.9048
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
          0.2455,
          -0.357,
          0.01,
          0.9012
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
          0.2474,
          -0.3596,
          0.0077,
          0.8996
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
          0.2477,
          -0.36,
          0.0073,
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
          0.2472,
          -0.3603,
          0.0086,
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
          0.2467,
          -0.3607,
          0.0098,
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
          0.2462,
          -0.361,
          0.011,
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
          0.2458,
          -0.3613,
          0.0122,
          0.8994
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
          0.2453,
          -0.3616,
          0.0133,
          0.8994
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
          0.2449,
          -0.3619,
          0.0143,
          0.8994
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
          0.2445,
          -0.3622,
          0.0153,
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
          0.2442,
          -0.3624,
          0.0161,
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
          0.2439,
          -0.3626,
          0.0168,
          0.8993
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
          0.2436,
          -0.3627,
          0.0175,
          0.8993
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
          0.2434,
          -0.3629,
          0.0179,
          0.8993
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
          0.2433,
          -0.363,
          0.0183,
          0.8993
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
          0.2432,
          -0.363,
          0.0185,
          0.8993
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
          0.2432,
          -0.363,
          0.0186,
          0.8993
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
          0.2432,
          -0.363,
          0.0185,
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
          0.2433,
          -0.363,
          0.0183,
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
          0.0179,
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
          0.2436,
          -0.3627,
          0.0175,
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
          0.2439,
          -0.3626,
          0.0168,
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
          0.2442,
          -0.3624,
          0.0161,
          0.8993
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
          0.2445,
          -0.3622,
          0.0153,
          0.8993
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
          0.2449,
          -0.3619,
          0.0143,
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
          0.2453,
          -0.3616,
          0.0133,
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
          0.2458,
          -0.3613,
          0.0122,
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
          0.2462,
          -0.361,
          0.011,
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
          0.2467,
          -0.3607,
          0.0098,
          0.8994
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
          0.2472,
          -0.3603,
          0.0086,
          0.8994
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
          0.2477,
          -0.36,
          0.0073,
          0.8994
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
          0.2482,
          -0.3596,
          0.0061,
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
          0.2487,
          -0.3593,
          0.0048,
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
          0.2492,
          -0.359,
          0.0036,
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
          0.2497,
          -0.3586,
          0.0024,
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
          0.2501,
          -0.3583,
          0.0013,
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
          0.2505,
          -0.358,
          0.0003,
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
          0.2509,
          -0.3578,
          -0.0006,
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
          0.2512,
          -0.3575,
          -0.0015,
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
          0.2515,
          -0.3573,
          -0.0022,
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
          0.2517,
          -0.3572,
          -0.0028,
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
          0.2519,
          -0.357,
          -0.0033,
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
          0.2521,
          -0.3569,
          -0.0036,
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
          0.2522,
          -0.3569,
          -0.0038,
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
          0.2522,
          -0.3569,
          -0.0039,
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
          0.2522,
          -0.3569,
          -0.0038,
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
          0.2521,
          -0.3569,
          -0.0036,
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
          0.2519,
          -0.357,
          -0.0033,
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
          0.2517,
          -0.3572,
          -0.0028,
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
          0.2515,
          -0.3573,
          -0.0022,
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
          0.2512,
          -0.3575,
          -0.0015,
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
          0.2509,
          -0.3578,
          -0.0006,
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
          0.2505,
          -0.358,
          0.0003,
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
          0.2501,
          -0.3583,
          0.0013,
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
          0.2497,
          -0.3586,
          0.0024,
          0.8995
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
          0.2492,
          -0.359,
          0.0036,
          0.8995
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
          0.2487,
          -0.3593,
          0.0048,
          0.8995
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
          0.2482,
          -0.3596,
          0.0061,
          0.8995
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
          0.2479,
          -0.3592,
          0.0064,
          0.8997
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
          0.2463,
          -0.357,
          0.0085,
          0.901
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
          0.2423,
          -0.3514,
          0.0135,
          0.9043
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
          0.2352,
          -0.3415,
          0.0222,
          0.9097
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
          0.2247,
          -0.327,
          0.035,
          0.9173
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
          0.2106,
          -0.3075,
          0.0518,
          0.9265
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
          0.1932,
          -0.2833,
          0.0722,
          0.9366
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
          0.1728,
          -0.2549,
          0.0957,
          0.9466
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
          0.1499,
          -0.223,
          0.1214,
          0.9555
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
          0.1254,
          -0.1888,
          0.1482,
          0.9626
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
          0.1001,
          -0.1535,
          0.1751,
          0.9674
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
          0.0749,
          -0.1184,
          0.2011,
          0.9695
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
          0.051,
          -0.085,
          0.2252,
          0.9693
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
          -0.0544,
          0.2467,
          0.9671
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
          0.0102,
          -0.0278,
          0.2649,
          0.9638
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
          -0.0054,
          -0.0061,
          0.2795,
          0.9601
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
          -0.0172,
          0.0105,
          0.2905,
          0.9567
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
          -0.0252,
          0.0217,
          0.2978,
          0.954
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
          -0.0298,
          0.0282,
          0.302,
          0.9524
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
          -0.0317,
          0.0308,
          0.3037,
          0.9517
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
          -0.032,
          0.0312,
          0.304,
          0.9516
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
          0.0749,
          0.9972
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
          0.0002,
          -0.0004,
          0.0741,
          0.9972
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
          0.0018,
          -0.0027,
          0.0691,
          0.9976
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
          0.0057,
          -0.0085,
          0.0569,
          0.9983
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
          0.0124,
          -0.0186,
          0.0356,
          0.9991
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
          0.0221,
          -0.0332,
          0.0046,
          0.9992
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
          0.0347,
          -0.0522,
          -0.0359,
          0.9974
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
          0.0499,
          -0.075,
          -0.0848,
          0.9923
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
          0.0671,
          -0.1008,
          -0.1402,
          0.9827
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
          0.0854,
          -0.1283,
          -0.1999,
          0.9676
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
          0.1041,
          -0.1563,
          -0.2609,
          0.9469
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
          0.1222,
          -0.1835,
          -0.3206,
          0.9212
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
          0.139,
          -0.2087,
          -0.3763,
          0.8919
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
          0.1538,
          -0.231,
          -0.426,
          0.8612
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
          0.1663,
          -0.2497,
          -0.468,
          0.8313
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
          0.1762,
          -0.2646,
          -0.5017,
          0.8046
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
          0.1835,
          -0.2756,
          -0.5267,
          0.783
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
          0.1884,
          -0.283,
          -0.5435,
          0.7676
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
          0.1912,
          -0.2871,
          -0.553,
          0.7585
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
          0.1923,
          -0.2888,
          -0.5569,
          0.7547
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
          0.1925,
          -0.2891,
          -0.5575,
          0.7541
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
          0.1925,
          -0.2891,
          -0.5575,
          0.7541
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
          0.1925,
          -0.2891,
          -0.5575,
          0.7541
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
          0.1923,
          -0.2889,
          -0.557,
          0.7546
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
          0.1914,
          -0.2874,
          -0.5536,
          0.7579
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
          0.1889,
          -0.2838,
          -0.5453,
          0.7659
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
          0.1846,
          -0.2773,
          -0.5305,
          0.7795
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
          0.1782,
          -0.2676,
          -0.5084,
          0.7989
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
          0.1694,
          -0.2544,
          -0.4785,
          0.8232
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
          0.1582,
          -0.2376,
          -0.4409,
          0.851
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
          0.1449,
          -0.2176,
          -0.396,
          0.8803
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
          0.1296,
          -0.1946,
          -0.3451,
          0.909
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
          0.1128,
          -0.1694,
          -0.2897,
          0.9352
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
          0.0952,
          -0.143,
          -0.2319,
          0.9575
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
          0.0775,
          -0.1164,
          -0.174,
          0.9748
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
          0.0604,
          -0.0907,
          -0.1185,
          0.987
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
          0.0446,
          -0.067,
          -0.0676,
          0.9945
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
          0.0308,
          -0.0463,
          -0.0234,
          0.9982
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
          0.0195,
          -0.0293,
          0.0129,
          0.9993
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
          0.0109,
          -0.0163,
          0.0404,
          0.999
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
          0.005,
          -0.0075,
          0.0592,
          0.9982
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
          0.0016,
          -0.0024,
          0.0699,
          0.9976
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
          0.0002,
          -0.0003,
          0.0742,
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
          0,
          0,
          0.0749,
          0.9972
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
          -0.0002,
          -0.0005,
          -0.0014,
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
          -0.0006,
          -0.0016,
          -0.0043,
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
          -0.0013,
          -0.0035,
          -0.0094,
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
          -0.0024,
          -0.0063,
          -0.0169,
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
          -0.0038,
          -0.01,
          -0.0265,
          0.9996
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
          -0.0054,
          -0.0144,
          -0.0383,
          0.9991
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
          -0.0073,
          -0.0194,
          -0.0517,
          0.9983
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
          -0.0249,
          -0.0662,
          0.9972
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
          -0.0115,
          -0.0306,
          -0.0813,
          0.9958
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
          -0.0137,
          -0.0363,
          -0.0964,
          0.9941
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
          -0.0157,
          -0.0417,
          -0.1108,
          0.9923
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
          -0.0176,
          -0.0467,
          -0.1241,
          0.9903
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
          -0.0193,
          -0.0511,
          -0.1357,
          0.9884
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
          -0.0206,
          -0.0547,
          -0.1453,
          0.9867
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
          -0.0217,
          -0.0574,
          -0.1526,
          0.9853
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
          -0.0224,
          -0.0593,
          -0.1576,
          0.9843
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
          -0.0228,
          -0.0604,
          -0.1605,
          0.9837
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
          -0.023,
          -0.0608,
          -0.1617,
          0.9834
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
          -0.023,
          -0.0609,
          -0.1619,
          0.9834
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
          -0.035,
          -0.0235,
          -0.156,
          0.9855
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
          -0.0464,
          0.0119,
          -0.15,
          0.9861
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
          -0.0565,
          0.0437,
          -0.1443,
          0.9855
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
          0.0701,
          -0.1393,
          0.9841
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
          -0.0713,
          0.09,
          -0.1354,
          0.9825
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
          -0.0752,
          0.1023,
          -0.133,
          0.9813
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
          -0.0765,
          0.1064,
          -0.1321,
          0.9809
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
          -0.0752,
          0.1023,
          -0.133,
          0.9813
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
          -0.0713,
          0.09,
          -0.1354,
          0.9825
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
          -0.065,
          0.0701,
          -0.1393,
          0.9841
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
          -0.0565,
          0.0437,
          -0.1443,
          0.9855
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
          -0.0464,
          0.0119,
          -0.15,
          0.9861
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
          -0.035,
          -0.0235,
          -0.156,
          0.9855
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
          -0.023,
          -0.0609,
          -0.1619,
          0.9834
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
          -0.0109,
          -0.0981,
          -0.1674,
          0.9797
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
          0.0006,
          -0.1334,
          -0.1723,
          0.9748
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
          0.0109,
          -0.1649,
          -0.1764,
          0.9692
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
          0.0194,
          -0.191,
          -0.1795,
          0.9637
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
          0.0259,
          -0.2106,
          -0.1817,
          0.959
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
          0.0299,
          -0.2228,
          -0.183,
          0.9559
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
          0.0312,
          -0.2269,
          -0.1835,
          0.9548
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
          0.0299,
          -0.2228,
          -0.183,
          0.9559
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
          0.0259,
          -0.2106,
          -0.1817,
          0.959
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
          -0.191,
          -0.1795,
          0.9637
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
          0.0109,
          -0.1649,
          -0.1764,
          0.9692
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
          0.0006,
          -0.1334,
          -0.1723,
          0.9748
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
          -0.0109,
          -0.0981,
          -0.1674,
          0.9797
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
          -0.023,
          -0.0609,
          -0.1619,
          0.9834
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
          -0.035,
          -0.0235,
          -0.156,
          0.9855
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
          -0.0464,
          0.0119,
          -0.15,
          0.9861
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
          -0.0565,
          0.0437,
          -0.1443,
          0.9855
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
          -0.065,
          0.0701,
          -0.1393,
          0.9841
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
          -0.0713,
          0.09,
          -0.1354,
          0.9825
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
          -0.0752,
          0.1023,
          -0.133,
          0.9813
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
          -0.0765,
          0.1064,
          -0.1321,
          0.9809
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
          -0.0752,
          0.1023,
          -0.133,
          0.9813
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
          -0.0713,
          0.09,
          -0.1354,
          0.9825
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
          -0.065,
          0.0701,
          -0.1393,
          0.9841
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
          -0.0565,
          0.0437,
          -0.1443,
          0.9855
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
          -0.0464,
          0.0119,
          -0.15,
          0.9861
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
          -0.035,
          -0.0235,
          -0.156,
          0.9855
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
          -0.0609,
          -0.1619,
          0.9834
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
          -0.0109,
          -0.0981,
          -0.1674,
          0.9797
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
          0.0006,
          -0.1334,
          -0.1723,
          0.9748
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
          0.0109,
          -0.1649,
          -0.1764,
          0.9692
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
          0.0194,
          -0.191,
          -0.1795,
          0.9637
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
          0.0259,
          -0.2106,
          -0.1817,
          0.959
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
          0.0299,
          -0.2228,
          -0.183,
          0.9559
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
          0.0312,
          -0.2269,
          -0.1835,
          0.9548
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
          0.0299,
          -0.2228,
          -0.183,
          0.9559
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
          0.0259,
          -0.2106,
          -0.1817,
          0.959
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
          0.0194,
          -0.191,
          -0.1795,
          0.9637
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
          0.0109,
          -0.1649,
          -0.1764,
          0.9692
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
          0.0006,
          -0.1334,
          -0.1723,
          0.9748
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
          -0.0109,
          -0.0981,
          -0.1674,
          0.9797
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
          -0.0109,
          -0.098,
          -0.1672,
          0.9797
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
          -0.0108,
          -0.0974,
          -0.1662,
          0.98
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
          -0.0106,
          -0.0958,
          -0.1636,
          0.9806
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
          -0.0104,
          -0.0932,
          -0.159,
          0.9817
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
          -0.0099,
          -0.0892,
          -0.1523,
          0.9832
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
          -0.0093,
          -0.0841,
          -0.1434,
          0.9851
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
          -0.0086,
          -0.0777,
          -0.1326,
          0.9873
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
          -0.0078,
          -0.0704,
          -0.1201,
          0.9896
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
          -0.0069,
          -0.0623,
          -0.1062,
          0.9919
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
          -0.006,
          -0.0537,
          -0.0916,
          0.994
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
          -0.0449,
          -0.0767,
          0.9958
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
          -0.004,
          -0.0363,
          -0.0619,
          0.9972
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
          -0.0031,
          -0.0281,
          -0.048,
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
          -0.0023,
          -0.0207,
          -0.0354,
          0.9991
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
          -0.0016,
          -0.0143,
          -0.0244,
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
          -0.001,
          -0.009,
          -0.0154,
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
          -0.0006,
          -0.005,
          -0.0086,
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
          -0.0003,
          -0.0023,
          -0.0039,
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
          -0.0001,
          -0.0007,
          -0.0013,
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
          -0.0001,
          -0.0002,
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
          -0.0002,
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
          0.0004,
          -0.0012,
          -0.0011,
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
          0.0013,
          -0.0036,
          -0.0035,
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
          0.0029,
          -0.0078,
          -0.0076,
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
          0.0052,
          -0.014,
          -0.0135,
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
          0.0082,
          -0.022,
          -0.0213,
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
          0.0118,
          -0.0318,
          -0.0307,
          0.999
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
          0.0159,
          -0.0429,
          -0.0414,
          0.9981
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
          0.0203,
          -0.0549,
          -0.0531,
          0.9969
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
          0.025,
          -0.0675,
          -0.0652,
          0.9953
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
          0.0296,
          -0.08,
          -0.0773,
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
          0.034,
          -0.092,
          -0.0889,
          0.9912
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
          0.0381,
          -0.103,
          -0.0995,
          0.9889
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
          0.0417,
          -0.1126,
          -0.1088,
          0.9867
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
          0.0446,
          -0.1205,
          -0.1165,
          0.9848
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
          0.0469,
          -0.1266,
          -0.1224,
          0.9832
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
          0.0484,
          -0.1308,
          -0.1264,
          0.9821
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
          0.0493,
          -0.1332,
          -0.1287,
          0.9814
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
          0.0496,
          -0.1341,
          -0.1297,
          0.9811
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
          0.0497,
          -0.1343,
          -0.1298,
          0.9811
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
          0.0483,
          -0.1345,
          -0.1287,
          0.9813
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
          0.0469,
          -0.1347,
          -0.1276,
          0.9815
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
          0.0454,
          -0.1349,
          -0.1264,
          0.9817
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
          0.044,
          -0.1351,
          -0.1253,
          0.9819
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
          0.0428,
          -0.1353,
          -0.1243,
          0.982
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
          0.0418,
          -0.1354,
          -0.1235,
          0.9822
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
          0.041,
          -0.1355,
          -0.1228,
          0.9823
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
          0.0405,
          -0.1356,
          -0.1225,
          0.9823
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
          0.0404,
          -0.1356,
          -0.1223,
          0.9823
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
          0.0405,
          -0.1356,
          -0.1225,
          0.9823
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
          0.041,
          -0.1355,
          -0.1228,
          0.9823
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
          0.0418,
          -0.1354,
          -0.1235,
          0.9822
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
          0.0428,
          -0.1353,
          -0.1243,
          0.982
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
          0.044,
          -0.1351,
          -0.1253,
          0.9819
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
          0.0454,
          -0.1349,
          -0.1264,
          0.9817
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
          0.0469,
          -0.1347,
          -0.1275,
          0.9815
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
          0.0483,
          -0.1345,
          -0.1287,
          0.9813
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
          0.0497,
          -0.1343,
          -0.1298,
          0.9812
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
          0.0509,
          -0.1341,
          -0.1308,
          0.981
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
          0.0519,
          -0.1339,
          -0.1316,
          0.9808
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
          0.0527,
          -0.1338,
          -0.1323,
          0.9807
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
          0.0532,
          -0.1337,
          -0.1326,
          0.9807
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
          0.0534,
          -0.1337,
          -0.1328,
          0.9806
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
          0.0532,
          -0.1337,
          -0.1326,
          0.9807
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
          0.0527,
          -0.1338,
          -0.1323,
          0.9807
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
          0.0519,
          -0.1339,
          -0.1316,
          0.9808
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
          0.0509,
          -0.1341,
          -0.1308,
          0.981
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
          0.0497,
          -0.1343,
          -0.1298,
          0.9811
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
          0.0483,
          -0.1345,
          -0.1287,
          0.9813
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
          0.0469,
          -0.1347,
          -0.1276,
          0.9815
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
          0.0454,
          -0.1349,
          -0.1264,
          0.9817
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
          0.044,
          -0.1351,
          -0.1253,
          0.9819
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
          0.0428,
          -0.1353,
          -0.1243,
          0.982
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
          0.0418,
          -0.1354,
          -0.1235,
          0.9822
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
          0.041,
          -0.1355,
          -0.1228,
          0.9823
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
          0.0405,
          -0.1356,
          -0.1225,
          0.9823
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
          0.0404,
          -0.1356,
          -0.1223,
          0.9823
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
          0.0405,
          -0.1356,
          -0.1225,
          0.9823
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
          0.041,
          -0.1355,
          -0.1228,
          0.9823
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
          0.0418,
          -0.1354,
          -0.1235,
          0.9822
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
          0.0428,
          -0.1353,
          -0.1243,
          0.982
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
          0.044,
          -0.1351,
          -0.1253,
          0.9819
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
          0.0454,
          -0.1349,
          -0.1264,
          0.9817
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
          0.0469,
          -0.1347,
          -0.1275,
          0.9815
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
          0.0483,
          -0.1345,
          -0.1287,
          0.9813
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
          0.0497,
          -0.1343,
          -0.1298,
          0.9812
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
          0.0509,
          -0.1341,
          -0.1308,
          0.981
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
          0.0519,
          -0.1339,
          -0.1316,
          0.9808
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
          0.0527,
          -0.1338,
          -0.1323,
          0.9807
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
          0.0532,
          -0.1337,
          -0.1326,
          0.9807
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
          0.0534,
          -0.1337,
          -0.1328,
          0.9806
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
          0.0532,
          -0.1337,
          -0.1326,
          0.9807
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
          0.0527,
          -0.1338,
          -0.1323,
          0.9807
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
          0.0519,
          -0.1339,
          -0.1316,
          0.9808
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
          0.0509,
          -0.1341,
          -0.1308,
          0.981
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
          0.0508,
          -0.134,
          -0.1307,
          0.981
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
          0.0505,
          -0.1331,
          -0.1298,
          0.9813
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
          0.0497,
          -0.131,
          -0.1278,
          0.9819
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
          0.0483,
          -0.1274,
          -0.1242,
          0.9829
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
          0.0463,
          -0.122,
          -0.119,
          0.9843
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
          0.0436,
          -0.1149,
          -0.1121,
          0.9861
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
          0.0403,
          -0.1062,
          -0.1036,
          0.9881
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
          0.0365,
          -0.0962,
          -0.0938,
          0.9903
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
          0.0323,
          -0.0851,
          -0.083,
          0.9924
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
          0.0278,
          -0.0734,
          -0.0716,
          0.9944
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
          0.0233,
          -0.0614,
          -0.0599,
          0.996
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
          0.0188,
          -0.0496,
          -0.0484,
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
          0.0146,
          -0.0385,
          -0.0375,
          0.9985
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
          0.0107,
          -0.0283,
          -0.0276,
          0.9992
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
          0.0074,
          -0.0195,
          -0.019,
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
          0.0047,
          -0.0123,
          -0.012,
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
          0.0026,
          -0.0069,
          -0.0067,
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
          0.0012,
          -0.0031,
          -0.0031,
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
          0.0004,
          -0.001,
          -0.001,
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
          0.0001,
          -0.0001,
          -0.0001,
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
          -0.0004,
          -0.0005,
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
          -0.0009,
          -0.0011,
          -0.0016,
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
          -0.002,
          -0.0024,
          -0.0035,
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
          -0.0044,
          -0.0062,
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
          -0.0057,
          -0.0069,
          -0.0098,
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
          -0.0082,
          -0.0099,
          -0.0142,
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
          -0.0111,
          -0.0134,
          -0.0192,
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
          -0.0142,
          -0.0172,
          -0.0246,
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
          -0.0174,
          -0.0211,
          -0.0302,
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
          -0.0207,
          -0.025,
          -0.0358,
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
          -0.0238,
          -0.0288,
          -0.0412,
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
          -0.0266,
          -0.0323,
          -0.0461,
          0.9981
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
          -0.0291,
          -0.0353,
          -0.0505,
          0.9977
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
          -0.0312,
          -0.0378,
          -0.0541,
          0.9973
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
          -0.0328,
          -0.0398,
          -0.0568,
          0.9971
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
          -0.0339,
          -0.0411,
          -0.0587,
          0.9969
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
          -0.0345,
          -0.0418,
          -0.0598,
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
          -0.0348,
          -0.0422,
          -0.0602,
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
          -0.0348,
          -0.0422,
          -0.0603,
          0.9967
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
          -0.0361,
          -0.0422,
          -0.0593,
          0.9967
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
          -0.0375,
          -0.0423,
          -0.0583,
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
          -0.0389,
          -0.0423,
          -0.0572,
          0.9967
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
          -0.0402,
          -0.0424,
          -0.0562,
          0.9967
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
          -0.0413,
          -0.0424,
          -0.0553,
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
          -0.0423,
          -0.0424,
          -0.0546,
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
          -0.043,
          -0.0424,
          -0.054,
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
          -0.0435,
          -0.0424,
          -0.0537,
          0.9967
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
          -0.0424,
          -0.0535,
          0.9967
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
          -0.0435,
          -0.0424,
          -0.0537,
          0.9967
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
          -0.0431,
          -0.0424,
          -0.054,
          0.9967
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
          -0.0423,
          -0.0424,
          -0.0546,
          0.9967
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
          -0.0413,
          -0.0424,
          -0.0553,
          0.9967
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
          -0.0402,
          -0.0424,
          -0.0562,
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
          -0.0389,
          -0.0423,
          -0.0572,
          0.9967
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
          -0.0375,
          -0.0423,
          -0.0583,
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
          -0.0361,
          -0.0422,
          -0.0593,
          0.9967
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
          -0.0348,
          -0.0422,
          -0.0603,
          0.9967
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
          -0.0336,
          -0.0422,
          -0.0612,
          0.9967
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
          -0.0421,
          -0.062,
          0.9967
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
          -0.0319,
          -0.0421,
          -0.0625,
          0.9966
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
          -0.0315,
          -0.0421,
          -0.0629,
          0.9966
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
          -0.0313,
          -0.0421,
          -0.063,
          0.9966
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
          -0.0315,
          -0.0421,
          -0.0629,
          0.9966
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
          -0.0319,
          -0.0421,
          -0.0625,
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
          -0.0327,
          -0.0421,
          -0.062,
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
          -0.0336,
          -0.0422,
          -0.0612,
          0.9967
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
          -0.0348,
          -0.0422,
          -0.0603,
          0.9967
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
          -0.0361,
          -0.0422,
          -0.0593,
          0.9967
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
          -0.0375,
          -0.0423,
          -0.0583,
          0.9967
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
          -0.0389,
          -0.0423,
          -0.0572,
          0.9967
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
          -0.0402,
          -0.0424,
          -0.0562,
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
          -0.0413,
          -0.0424,
          -0.0553,
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
          -0.0423,
          -0.0424,
          -0.0546,
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
          -0.043,
          -0.0424,
          -0.054,
          0.9967
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
          -0.0435,
          -0.0424,
          -0.0537,
          0.9967
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
          -0.0437,
          -0.0424,
          -0.0535,
          0.9967
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
          -0.0435,
          -0.0424,
          -0.0537,
          0.9967
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
          -0.0431,
          -0.0424,
          -0.054,
          0.9967
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
          -0.0423,
          -0.0424,
          -0.0546,
          0.9967
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
          -0.0413,
          -0.0424,
          -0.0553,
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
          -0.0402,
          -0.0424,
          -0.0562,
          0.9967
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
          -0.0389,
          -0.0423,
          -0.0572,
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
          -0.0375,
          -0.0423,
          -0.0583,
          0.9967
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
          -0.0361,
          -0.0422,
          -0.0593,
          0.9967
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
          -0.0348,
          -0.0422,
          -0.0603,
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
          -0.0336,
          -0.0422,
          -0.0612,
          0.9967
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
          -0.0327,
          -0.0421,
          -0.062,
          0.9967
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
          -0.0319,
          -0.0421,
          -0.0625,
          0.9966
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
          -0.0315,
          -0.0421,
          -0.0629,
          0.9966
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
          -0.0313,
          -0.0421,
          -0.063,
          0.9966
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
          -0.0315,
          -0.0421,
          -0.0629,
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
          -0.0319,
          -0.0421,
          -0.0625,
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
          -0.0327,
          -0.0421,
          -0.062,
          0.9967
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
          -0.0336,
          -0.0422,
          -0.0612,
          0.9967
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
          -0.0336,
          -0.0422,
          -0.0611,
          0.9967
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
          -0.0334,
          -0.0419,
          -0.0607,
          0.9967
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
          -0.0328,
          -0.0412,
          -0.0598,
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
          -0.0319,
          -0.0401,
          -0.0581,
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
          -0.0305,
          -0.0384,
          -0.0556,
          0.9973
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
          -0.0287,
          -0.0361,
          -0.0524,
          0.9976
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
          -0.0266,
          -0.0334,
          -0.0484,
          0.9979
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
          -0.024,
          -0.0302,
          -0.0438,
          0.9983
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
          -0.0213,
          -0.0267,
          -0.0387,
          0.9987
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
          -0.0183,
          -0.023,
          -0.0334,
          0.999
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
          -0.0153,
          -0.0192,
          -0.0279,
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
          -0.0124,
          -0.0155,
          -0.0225,
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
          -0.0096,
          -0.012,
          -0.0175,
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
          -0.0071,
          -0.0089,
          -0.0129,
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
          -0.0049,
          -0.0061,
          -0.0089,
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
          -0.0031,
          -0.0039,
          -0.0056,
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
          -0.0017,
          -0.0021,
          -0.0031,
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
          -0.0008,
          -0.001,
          -0.0014,
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
          -0.0003,
          -0.0003,
          -0.0005,
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
          -0.0001,
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
          -0.0002,
          -0.0002,
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
          -0.0007,
          -0.0006,
          -0.0008,
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
          -0.0015,
          -0.0012,
          -0.0018,
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
          -0.0028,
          -0.0022,
          -0.0033,
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
          -0.0044,
          -0.0034,
          -0.0051,
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
          -0.0063,
          -0.0049,
          -0.0074,
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
          -0.0085,
          -0.0066,
          -0.01,
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
          -0.0109,
          -0.0085,
          -0.0128,
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
          -0.0134,
          -0.0105,
          -0.0157,
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
          -0.0158,
          -0.0124,
          -0.0186,
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
          -0.0182,
          -0.0143,
          -0.0214,
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
          -0.0204,
          -0.016,
          -0.024,
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
          -0.0223,
          -0.0175,
          -0.0263,
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
          -0.0239,
          -0.0187,
          -0.0282,
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
          -0.0252,
          -0.0197,
          -0.0296,
          0.999
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
          -0.026,
          -0.0203,
          -0.0306,
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
          -0.0265,
          -0.0207,
          -0.0311,
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
          -0.0267,
          -0.0209,
          -0.0314,
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
          -0.0267,
          -0.0209,
          -0.0314,
          0.9989
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
          -0.028,
          -0.0209,
          -0.0304,
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
          -0.0294,
          -0.0209,
          -0.0294,
          0.9989
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
          -0.0307,
          -0.0209,
          -0.0284,
          0.9989
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
          -0.032,
          -0.0209,
          -0.0274,
          0.9989
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
          -0.0332,
          -0.0209,
          -0.0265,
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
          -0.0341,
          -0.0209,
          -0.0258,
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
          -0.0349,
          -0.0209,
          -0.0252,
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
          -0.0353,
          -0.0209,
          -0.0249,
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
          -0.0355,
          -0.0209,
          -0.0248,
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
          -0.0353,
          -0.0209,
          -0.0249,
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
          -0.0349,
          -0.0209,
          -0.0252,
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
          -0.0341,
          -0.0209,
          -0.0258,
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
          -0.0332,
          -0.0209,
          -0.0265,
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
          -0.032,
          -0.0209,
          -0.0274,
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
          -0.0307,
          -0.0209,
          -0.0283,
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
          -0.0294,
          -0.0209,
          -0.0294,
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
          -0.028,
          -0.0209,
          -0.0304,
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
          -0.0267,
          -0.0209,
          -0.0314,
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
          -0.0256,
          -0.0208,
          -0.0323,
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
          -0.0246,
          -0.0208,
          -0.033,
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
          -0.0239,
          -0.0208,
          -0.0335,
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
          -0.0234,
          -0.0208,
          -0.0339,
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
          -0.0233,
          -0.0208,
          -0.034,
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
          -0.0234,
          -0.0208,
          -0.0339,
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
          -0.0239,
          -0.0208,
          -0.0335,
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
          -0.0246,
          -0.0208,
          -0.033,
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
          -0.0256,
          -0.0208,
          -0.0323,
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
          -0.0267,
          -0.0209,
          -0.0314,
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
          -0.028,
          -0.0209,
          -0.0304,
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
          -0.0294,
          -0.0209,
          -0.0294,
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
          -0.0307,
          -0.0209,
          -0.0284,
          0.9989
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
          -0.032,
          -0.0209,
          -0.0274,
          0.9989
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
          -0.0332,
          -0.0209,
          -0.0265,
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
          -0.0341,
          -0.0209,
          -0.0258,
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
          -0.0349,
          -0.0209,
          -0.0252,
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
          -0.0353,
          -0.0209,
          -0.0249,
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
          -0.0355,
          -0.0209,
          -0.0248,
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
          -0.0353,
          -0.0209,
          -0.0249,
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
          -0.0349,
          -0.0209,
          -0.0252,
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
          -0.0341,
          -0.0209,
          -0.0258,
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
          -0.0332,
          -0.0209,
          -0.0265,
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
          -0.032,
          -0.0209,
          -0.0274,
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
          -0.0307,
          -0.0209,
          -0.0283,
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
          -0.0294,
          -0.0209,
          -0.0294,
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
          -0.028,
          -0.0209,
          -0.0304,
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
          -0.0267,
          -0.0209,
          -0.0314,
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
          -0.0256,
          -0.0208,
          -0.0323,
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
          -0.0246,
          -0.0208,
          -0.033,
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
          -0.0239,
          -0.0208,
          -0.0335,
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
          -0.0234,
          -0.0208,
          -0.0339,
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
          -0.0233,
          -0.0208,
          -0.034,
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
          -0.0234,
          -0.0208,
          -0.0339,
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
          -0.0239,
          -0.0208,
          -0.0335,
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
          -0.0246,
          -0.0208,
          -0.033,
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
          -0.0256,
          -0.0208,
          -0.0323,
          0.9989
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
          -0.0256,
          -0.0208,
          -0.0323,
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
          -0.0254,
          -0.0206,
          -0.0321,
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
          -0.025,
          -0.0203,
          -0.0315,
          0.999
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
          -0.0243,
          -0.0197,
          -0.0307,
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
          -0.0233,
          -0.0189,
          -0.0294,
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
          -0.0219,
          -0.0178,
          -0.0276,
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
          -0.0202,
          -0.0164,
          -0.0255,
          0.9993
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
          -0.0183,
          -0.0149,
          -0.0231,
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
          -0.0162,
          -0.0132,
          -0.0204,
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
          -0.0139,
          -0.0113,
          -0.0176,
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
          -0.0117,
          -0.0095,
          -0.0147,
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
          -0.0094,
          -0.0077,
          -0.0119,
          0.9999
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
          -0.0073,
          -0.0059,
          -0.0092,
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
          -0.0054,
          -0.0044,
          -0.0068,
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
          -0.0037,
          -0.003,
          -0.0047,
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
          -0.0023,
          -0.0019,
          -0.003,
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
          -0.0013,
          -0.0011,
          -0.0016,
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
          -0.0006,
          -0.0005,
          -0.0008,
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
          -0.0002,
          -0.0002,
          -0.0002,
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
          0,
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
          -0.0001,
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
          -0.0005,
          -0.0001,
          -0.0004,
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
          -0.0015,
          -0.0005,
          -0.0011,
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
          -0.0033,
          -0.001,
          -0.0024,
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
          -0.0059,
          -0.0018,
          -0.0042,
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
          -0.0093,
          -0.0028,
          -0.0067,
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
          -0.0133,
          -0.0041,
          -0.0096,
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
          -0.018,
          -0.0055,
          -0.013,
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
          -0.0231,
          -0.0071,
          -0.0167,
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
          -0.0284,
          -0.0087,
          -0.0205,
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
          -0.0336,
          -0.0103,
          -0.0243,
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
          -0.0387,
          -0.0119,
          -0.028,
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
          -0.0434,
          -0.0133,
          -0.0314,
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
          -0.0475,
          -0.0146,
          -0.0343,
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
          -0.0508,
          -0.0156,
          -0.0368,
          0.9979
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
          -0.0534,
          -0.0164,
          -0.0386,
          0.9977
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
          -0.0552,
          -0.0169,
          -0.0399,
          0.9975
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
          -0.0562,
          -0.0173,
          -0.0406,
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
          -0.0566,
          -0.0174,
          -0.041,
          0.9974
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
          -0.0567,
          -0.0174,
          -0.041,
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
          -0.058,
          -0.0174,
          -0.04,
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
          -0.0593,
          -0.0174,
          -0.039,
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
          -0.0607,
          -0.0173,
          -0.038,
          0.9973
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
          -0.0619,
          -0.0173,
          -0.037,
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
          -0.0631,
          -0.0173,
          -0.0362,
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
          -0.064,
          -0.0173,
          -0.0354,
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
          -0.0648,
          -0.0173,
          -0.0349,
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
          -0.0652,
          -0.0173,
          -0.0345,
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
          -0.0654,
          -0.0173,
          -0.0344,
          0.9971
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
          -0.0652,
          -0.0173,
          -0.0345,
          0.9971
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
          -0.0648,
          -0.0173,
          -0.0349,
          0.9971
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
          -0.0641,
          -0.0173,
          -0.0354,
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
          -0.0631,
          -0.0173,
          -0.0361,
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
          -0.0619,
          -0.0173,
          -0.037,
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
          -0.0607,
          -0.0173,
          -0.038,
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
          -0.0593,
          -0.0174,
          -0.039,
          0.9973
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
          -0.058,
          -0.0174,
          -0.04,
          0.9974
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
          -0.0567,
          -0.0174,
          -0.041,
          0.9974
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
          -0.0555,
          -0.0174,
          -0.0419,
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
          -0.0546,
          -0.0174,
          -0.0426,
          0.9974
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
          -0.0539,
          -0.0174,
          -0.0431,
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
          -0.0534,
          -0.0174,
          -0.0435,
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
          -0.0532,
          -0.0174,
          -0.0436,
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
          -0.0534,
          -0.0174,
          -0.0435,
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
          -0.0538,
          -0.0174,
          -0.0432,
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
          -0.0546,
          -0.0174,
          -0.0426,
          0.9974
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
          -0.0555,
          -0.0174,
          -0.0419,
          0.9974
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
          -0.0174,
          -0.041,
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
          -0.058,
          -0.0174,
          -0.04,
          0.9974
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
          -0.0593,
          -0.0174,
          -0.039,
          0.9973
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
          -0.0607,
          -0.0173,
          -0.038,
          0.9973
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
          -0.0619,
          -0.0173,
          -0.037,
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
          -0.0631,
          -0.0173,
          -0.0362,
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
          -0.064,
          -0.0173,
          -0.0354,
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
          -0.0648,
          -0.0173,
          -0.0349,
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
          -0.0652,
          -0.0173,
          -0.0345,
          0.9971
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
          -0.0654,
          -0.0173,
          -0.0344,
          0.9971
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
          -0.0652,
          -0.0173,
          -0.0345,
          0.9971
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
          -0.0648,
          -0.0173,
          -0.0349,
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
          -0.0641,
          -0.0173,
          -0.0354,
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
          -0.0631,
          -0.0173,
          -0.0361,
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
          -0.0619,
          -0.0173,
          -0.037,
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
          -0.0607,
          -0.0173,
          -0.038,
          0.9973
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
          -0.0593,
          -0.0174,
          -0.039,
          0.9973
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
          -0.058,
          -0.0174,
          -0.04,
          0.9974
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
          -0.0567,
          -0.0174,
          -0.041,
          0.9974
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
          -0.0555,
          -0.0174,
          -0.0419,
          0.9974
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
          -0.0546,
          -0.0174,
          -0.0426,
          0.9974
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
          -0.0539,
          -0.0174,
          -0.0431,
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
          -0.0534,
          -0.0174,
          -0.0435,
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
          -0.0532,
          -0.0174,
          -0.0436,
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
          -0.0534,
          -0.0174,
          -0.0435,
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
          -0.0538,
          -0.0174,
          -0.0432,
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
          -0.0546,
          -0.0174,
          -0.0426,
          0.9974
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
          -0.0555,
          -0.0174,
          -0.0419,
          0.9974
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
          -0.0554,
          -0.0174,
          -0.0419,
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
          -0.0551,
          -0.0173,
          -0.0416,
          0.9974
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
          -0.017,
          -0.0409,
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
          -0.0527,
          -0.0165,
          -0.0398,
          0.9977
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
          -0.0504,
          -0.0158,
          -0.0381,
          0.9979
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
          -0.0475,
          -0.0149,
          -0.0358,
          0.9981
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
          -0.0439,
          -0.0138,
          -0.0331,
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
          -0.0397,
          -0.0124,
          -0.03,
          0.9987
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
          -0.0351,
          -0.011,
          -0.0265,
          0.999
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
          -0.0302,
          -0.0095,
          -0.0228,
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
          -0.0253,
          -0.0079,
          -0.0191,
          0.9995
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
          -0.0204,
          -0.0064,
          -0.0154,
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
          -0.0158,
          -0.005,
          -0.012,
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
          -0.0117,
          -0.0037,
          -0.0088,
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
          -0.008,
          -0.0025,
          -0.0061,
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
          -0.0051,
          -0.0016,
          -0.0038,
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
          -0.0028,
          -0.0009,
          -0.0021,
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
          -0.0013,
          -0.0004,
          -0.001,
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
          -0.0004,
          -0.0001,
          -0.0003,
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
          -0.0001,
          0,
          0,
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
          -0.0001,
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
          -0.0006,
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
          -0.0018,
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
          -0.0039,
          -0.0003,
          -0.0007,
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
          -0.007,
          -0.0006,
          -0.0012,
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
          -0.011,
          -0.0009,
          -0.0019,
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
          -0.0158,
          -0.0014,
          -0.0027,
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
          -0.0214,
          -0.0018,
          -0.0037,
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
          -0.0274,
          -0.0024,
          -0.0047,
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
          -0.0337,
          -0.0029,
          -0.0058,
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
          -0.0399,
          -0.0034,
          -0.0069,
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
          -0.046,
          -0.004,
          -0.0079,
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
          -0.0515,
          -0.0044,
          -0.0089,
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
          -0.0563,
          -0.0049,
          -0.0097,
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
          -0.0603,
          -0.0052,
          -0.0104,
          0.9982
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
          -0.0634,
          -0.0055,
          -0.0109,
          0.998
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
          -0.0655,
          -0.0056,
          -0.0113,
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
          -0.0667,
          -0.0058,
          -0.0115,
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
          -0.0672,
          -0.0058,
          -0.0116,
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
          -0.0673,
          -0.0058,
          -0.0116,
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
          -0.0685,
          -0.0057,
          -0.0106,
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
          -0.0699,
          -0.0057,
          -0.0096,
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
          -0.0712,
          -0.0056,
          -0.0086,
          0.9974
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
          -0.0725,
          -0.0056,
          -0.0077,
          0.9973
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
          -0.0736,
          -0.0055,
          -0.0068,
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
          -0.0746,
          -0.0055,
          -0.0061,
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
          -0.0753,
          -0.0054,
          -0.0056,
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
          -0.0757,
          -0.0054,
          -0.0052,
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
          -0.0759,
          -0.0054,
          -0.0051,
          0.9971
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
          -0.0757,
          -0.0054,
          -0.0052,
          0.9971
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
          -0.0753,
          -0.0054,
          -0.0055,
          0.9971
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
          -0.0746,
          -0.0055,
          -0.0061,
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
          -0.0736,
          -0.0055,
          -0.0068,
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
          -0.0725,
          -0.0056,
          -0.0077,
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
          -0.0712,
          -0.0056,
          -0.0086,
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
          -0.0699,
          -0.0057,
          -0.0096,
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
          -0.0686,
          -0.0057,
          -0.0106,
          0.9976
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
          -0.0673,
          -0.0058,
          -0.0116,
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
          -0.0661,
          -0.0058,
          -0.0124,
          0.9977
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
          -0.0652,
          -0.0059,
          -0.0132,
          0.9978
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
          -0.0645,
          -0.0059,
          -0.0137,
          0.9978
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
          -0.064,
          -0.0059,
          -0.014,
          0.9978
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
          -0.0639,
          -0.0059,
          -0.0141,
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
          -0.064,
          -0.0059,
          -0.014,
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
          -0.0645,
          -0.0059,
          -0.0137,
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
          -0.0652,
          -0.0059,
          -0.0132,
          0.9978
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
          -0.0661,
          -0.0058,
          -0.0125,
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
          -0.0673,
          -0.0058,
          -0.0116,
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
          -0.0685,
          -0.0057,
          -0.0106,
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
          -0.0699,
          -0.0057,
          -0.0096,
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
          -0.0712,
          -0.0056,
          -0.0086,
          0.9974
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
          -0.0725,
          -0.0056,
          -0.0077,
          0.9973
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
          -0.0736,
          -0.0055,
          -0.0068,
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
          -0.0746,
          -0.0055,
          -0.0061,
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
          -0.0753,
          -0.0054,
          -0.0056,
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
          -0.0757,
          -0.0054,
          -0.0052,
          0.9971
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
          -0.0759,
          -0.0054,
          -0.0051,
          0.9971
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
          -0.0757,
          -0.0054,
          -0.0052,
          0.9971
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
          -0.0753,
          -0.0054,
          -0.0055,
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
          -0.0746,
          -0.0055,
          -0.0061,
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
          -0.0736,
          -0.0055,
          -0.0068,
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
          -0.0725,
          -0.0056,
          -0.0077,
          0.9973
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
          -0.0712,
          -0.0056,
          -0.0086,
          0.9974
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
          -0.0699,
          -0.0057,
          -0.0096,
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
          -0.0686,
          -0.0057,
          -0.0106,
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
          -0.0673,
          -0.0058,
          -0.0116,
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
          -0.0661,
          -0.0058,
          -0.0124,
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
          -0.0652,
          -0.0059,
          -0.0132,
          0.9978
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
          -0.0645,
          -0.0059,
          -0.0137,
          0.9978
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
          -0.064,
          -0.0059,
          -0.014,
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
          -0.0639,
          -0.0059,
          -0.0141,
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
          -0.064,
          -0.0059,
          -0.014,
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
          -0.0645,
          -0.0059,
          -0.0137,
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
          -0.0652,
          -0.0059,
          -0.0132,
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
          -0.0661,
          -0.0058,
          -0.0125,
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
          -0.066,
          -0.0058,
          -0.0125,
          0.9977
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
          -0.0656,
          -0.0058,
          -0.0124,
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
          -0.0646,
          -0.0057,
          -0.0122,
          0.9978
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
          -0.0627,
          -0.0055,
          -0.0119,
          0.9979
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
          -0.0601,
          -0.0053,
          -0.0114,
          0.9981
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
          -0.0565,
          -0.005,
          -0.0107,
          0.9983
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
          -0.0522,
          -0.0046,
          -0.0099,
          0.9986
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
          -0.0473,
          -0.0041,
          -0.0089,
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
          -0.0418,
          -0.0037,
          -0.0079,
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
          -0.036,
          -0.0032,
          -0.0068,
          0.9993
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
          -0.0301,
          -0.0026,
          -0.0057,
          0.9995
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
          -0.0243,
          -0.0021,
          -0.0046,
          0.9997
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
          -0.0189,
          -0.0017,
          -0.0036,
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
          -0.0139,
          -0.0012,
          -0.0026,
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
          -0.0096,
          -0.0008,
          -0.0018,
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
          -0.006,
          -0.0005,
          -0.0011,
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
          -0.0034,
          -0.0003,
          -0.0006,
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
          -0.0015,
          -0.0001,
          -0.0003,
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
          -0.0005,
          0,
          -0.0001,
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
          -0.0001,
          0,
          0,
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
          -0.0003,
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
          -0.001,
          0,
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
          -0.0022,
          0,
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
          -0.0039,
          0,
          -0.0002,
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
          -0.0061,
          0,
          -0.0003,
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
          -0.0088,
          0,
          -0.0005,
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
          -0.0119,
          0,
          -0.0006,
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
          -0.0152,
          0,
          -0.0008,
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
          -0.0187,
          -0.0001,
          -0.001,
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
          -0.0222,
          -0.0001,
          -0.0012,
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
          -0.0255,
          -0.0001,
          -0.0014,
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
          -0.0286,
          -0.0001,
          -0.0015,
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
          -0.0313,
          -0.0001,
          -0.0017,
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
          -0.0335,
          -0.0001,
          -0.0018,
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
          -0.0352,
          -0.0001,
          -0.0019,
          0.9994
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
          -0.0364,
          -0.0001,
          -0.0019,
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
          -0.0371,
          -0.0001,
          -0.002,
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
          -0.0374,
          -0.0001,
          -0.002,
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
          -0.0374,
          -0.0001,
          -0.002,
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
          -0.0386,
          0,
          -0.001,
          0.9993
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
          -0.04,
          0,
          0,
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
          -0.0413,
          0,
          0.001,
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
          -0.0426,
          0.0001,
          0.0019,
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
          -0.0437,
          0.0001,
          0.0028,
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
          -0.0447,
          0.0002,
          0.0035,
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
          -0.0454,
          0.0002,
          0.004,
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
          -0.0458,
          0.0002,
          0.0044,
          0.9989
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
          -0.046,
          0.0002,
          0.0045,
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
          -0.0458,
          0.0002,
          0.0044,
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
          -0.0454,
          0.0002,
          0.0041,
          0.999
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
          -0.0447,
          0.0002,
          0.0035,
          0.999
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
          -0.0437,
          0.0001,
          0.0028,
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
          -0.0426,
          0.0001,
          0.002,
          0.9991
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
          -0.0413,
          0,
          0.001,
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
          -0.04,
          0,
          0,
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
          -0.0387,
          0,
          -0.001,
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
          -0.0374,
          -0.0001,
          -0.0019,
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
          -0.0363,
          -0.0001,
          -0.0028,
          0.9993
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
          -0.0353,
          -0.0001,
          -0.0035,
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
          -0.0346,
          -0.0001,
          -0.004,
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
          -0.0341,
          -0.0001,
          -0.0044,
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
          -0.034,
          -0.0002,
          -0.0045,
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
          -0.0341,
          -0.0001,
          -0.0044,
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
          -0.0346,
          -0.0001,
          -0.0041,
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
          -0.0353,
          -0.0001,
          -0.0035,
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
          -0.0362,
          -0.0001,
          -0.0028,
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
          -0.0374,
          -0.0001,
          -0.002,
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
          -0.0386,
          0,
          -0.001,
          0.9993
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
          -0.04,
          0,
          0,
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
          -0.0413,
          0,
          0.001,
          0.9991
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
          0.0001,
          0.0019,
          0.9991
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
          -0.0437,
          0.0001,
          0.0028,
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
          -0.0447,
          0.0002,
          0.0035,
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
          -0.0454,
          0.0002,
          0.004,
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
          -0.0458,
          0.0002,
          0.0044,
          0.9989
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
          -0.046,
          0.0002,
          0.0045,
          0.9989
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
          -0.0458,
          0.0002,
          0.0044,
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
          -0.0454,
          0.0002,
          0.0041,
          0.999
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
          -0.0447,
          0.0002,
          0.0035,
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
          -0.0437,
          0.0001,
          0.0028,
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
          0.0001,
          0.002,
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
          -0.0413,
          0,
          0.001,
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
          -0.04,
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
          -0.0387,
          0,
          -0.001,
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
          -0.0374,
          -0.0001,
          -0.0019,
          0.9993
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
          -0.0363,
          -0.0001,
          -0.0028,
          0.9993
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
          -0.0353,
          -0.0001,
          -0.0035,
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
          -0.0346,
          -0.0001,
          -0.004,
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
          -0.0341,
          -0.0001,
          -0.0044,
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
          -0.034,
          -0.0002,
          -0.0045,
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
          -0.0341,
          -0.0001,
          -0.0044,
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
          -0.0346,
          -0.0001,
          -0.0041,
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
          -0.0353,
          -0.0001,
          -0.0035,
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
          -0.0362,
          -0.0001,
          -0.0028,
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
          -0.0362,
          -0.0001,
          -0.0028,
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
          -0.0359,
          -0.0001,
          -0.0028,
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
          -0.0354,
          -0.0001,
          -0.0027,
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
          -0.0344,
          -0.0001,
          -0.0027,
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
          -0.0329,
          -0.0001,
          -0.0025,
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
          -0.031,
          -0.0001,
          -0.0024,
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
          -0.0286,
          -0.0001,
          -0.0022,
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
          -0.0259,
          -0.0001,
          -0.002,
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
          -0.0229,
          -0.0001,
          -0.0018,
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
          -0.0197,
          -0.0001,
          -0.0015,
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
          -0.0165,
          0,
          -0.0013,
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
          -0.0133,
          0,
          -0.001,
          0.9999
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
          -0.0103,
          0,
          -0.0008,
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
          -0.0076,
          0,
          -0.0006,
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
          -0.0052,
          0,
          -0.0004,
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
          -0.0033,
          0,
          -0.0003,
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
          -0.0018,
          0,
          -0.0001,
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
          -0.0008,
          0,
          -0.0001,
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
          -0.0003,
          0,
          0,
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
          0,
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
          -0.0001,
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
          -0.0004,
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
          -0.0014,
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
          -0.003,
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
          -0.0054,
          0,
          -0.0007,
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
          -0.0085,
          -0.0001,
          -0.0011,
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
          -0.0123,
          -0.0001,
          -0.0016,
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
          -0.0166,
          -0.0001,
          -0.0022,
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
          -0.0213,
          -0.0002,
          -0.0028,
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
          -0.0262,
          -0.0002,
          -0.0035,
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
          -0.0311,
          -0.0002,
          -0.0041,
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
          -0.0003,
          -0.0047,
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
          -0.0401,
          -0.0003,
          -0.0053,
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
          -0.0439,
          -0.0003,
          -0.0058,
          0.999
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
          -0.047,
          -0.0004,
          -0.0062,
          0.9989
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
          -0.0494,
          -0.0004,
          -0.0065,
          0.9988
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
          -0.051,
          -0.0004,
          -0.0067,
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
          -0.052,
          -0.0004,
          -0.0068,
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
          -0.0523,
          -0.0004,
          -0.0069,
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
          -0.0524,
          -0.0004,
          -0.0069,
          0.9986
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
          -0.0536,
          -0.0003,
          -0.006,
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
          -0.055,
          -0.0003,
          -0.005,
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
          -0.0563,
          -0.0002,
          -0.004,
          0.9984
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
          -0.0576,
          -0.0002,
          -0.003,
          0.9983
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
          -0.0587,
          -0.0001,
          -0.0022,
          0.9983
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
          -0.0597,
          -0.0001,
          -0.0015,
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
          -0.0604,
          -0.0001,
          -0.0009,
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
          -0.0608,
          0,
          -0.0006,
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
          -0.061,
          0,
          -0.0005,
          0.9981
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
          -0.0608,
          0,
          -0.0006,
          0.9981
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
          -0.0604,
          -0.0001,
          -0.0009,
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
          -0.0597,
          -0.0001,
          -0.0015,
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
          -0.0587,
          -0.0001,
          -0.0022,
          0.9983
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
          -0.0576,
          -0.0002,
          -0.003,
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
          -0.0563,
          -0.0002,
          -0.004,
          0.9984
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
          -0.055,
          -0.0003,
          -0.005,
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
          -0.0536,
          -0.0003,
          -0.006,
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
          -0.0524,
          -0.0004,
          -0.0069,
          0.9986
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
          -0.0512,
          -0.0004,
          -0.0078,
          0.9987
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
          -0.0503,
          -0.0004,
          -0.0085,
          0.9987
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
          -0.0496,
          -0.0004,
          -0.009,
          0.9987
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
          -0.0491,
          -0.0005,
          -0.0094,
          0.9987
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
          -0.049,
          -0.0005,
          -0.0095,
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
          -0.0491,
          -0.0005,
          -0.0094,
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
          -0.0496,
          -0.0004,
          -0.009,
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
          -0.0503,
          -0.0004,
          -0.0085,
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
          -0.0512,
          -0.0004,
          -0.0078,
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
          -0.0524,
          -0.0004,
          -0.0069,
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
          -0.0536,
          -0.0003,
          -0.006,
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
          -0.055,
          -0.0003,
          -0.005,
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
          -0.0563,
          -0.0002,
          -0.004,
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
          -0.0576,
          -0.0002,
          -0.003,
          0.9983
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
          -0.0587,
          -0.0001,
          -0.0022,
          0.9983
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
          -0.0597,
          -0.0001,
          -0.0015,
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
          -0.0604,
          -0.0001,
          -0.0009,
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
          -0.0608,
          0,
          -0.0006,
          0.9981
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
          -0.061,
          0,
          -0.0005,
          0.9981
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
          -0.0608,
          0,
          -0.0006,
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
          -0.0604,
          -0.0001,
          -0.0009,
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
          -0.0597,
          -0.0001,
          -0.0015,
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
          -0.0587,
          -0.0001,
          -0.0022,
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
          -0.0002,
          -0.003,
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
          -0.0563,
          -0.0002,
          -0.004,
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
          -0.055,
          -0.0003,
          -0.005,
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
          -0.0536,
          -0.0003,
          -0.006,
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
          -0.0524,
          -0.0004,
          -0.0069,
          0.9986
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
          -0.0512,
          -0.0004,
          -0.0078,
          0.9987
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
          -0.0503,
          -0.0004,
          -0.0085,
          0.9987
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
          -0.0004,
          -0.009,
          0.9987
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
          -0.0491,
          -0.0005,
          -0.0094,
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
          -0.049,
          -0.0005,
          -0.0095,
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
          -0.0491,
          -0.0005,
          -0.0094,
          0.9987
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
          -0.0496,
          -0.0004,
          -0.009,
          0.9987
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
          -0.0503,
          -0.0004,
          -0.0085,
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
          -0.0512,
          -0.0004,
          -0.0078,
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
          -0.0511,
          -0.0004,
          -0.0078,
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
          -0.0508,
          -0.0004,
          -0.0077,
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
          -0.05,
          -0.0004,
          -0.0076,
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
          -0.0486,
          -0.0004,
          -0.0074,
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
          -0.0465,
          -0.0004,
          -0.0071,
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
          -0.0438,
          -0.0003,
          -0.0067,
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
          -0.0405,
          -0.0003,
          -0.0062,
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
          -0.0366,
          -0.0003,
          -0.0056,
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
          -0.0324,
          -0.0003,
          -0.0049,
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
          -0.0279,
          -0.0002,
          -0.0042,
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
          -0.0233,
          -0.0002,
          -0.0036,
          0.9997
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
          -0.0188,
          -0.0001,
          -0.0029,
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
          -0.0146,
          -0.0001,
          -0.0022,
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
          -0.0108,
          -0.0001,
          -0.0016,
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
          -0.0074,
          -0.0001,
          -0.0011,
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
          -0.0047,
          0,
          -0.0007,
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
          -0.0026,
          0,
          -0.0004,
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
          -0.0012,
          0,
          -0.0002,
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
          -0.0004,
          0,
          -0.0001,
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
          -0.0001,
          0,
          0,
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
          -0.0001,
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
          -0.0006,
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
          -0.0019,
          0,
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
          -0.0042,
          0,
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
          -0.0075,
          0,
          -0.0002,
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
          -0.0118,
          0,
          -0.0003,
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
          -0.017,
          0,
          -0.0005,
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
          -0.023,
          0,
          -0.0006,
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
          -0.0008,
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
          -0.0362,
          -0.0001,
          -0.001,
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
          -0.0429,
          -0.0001,
          -0.0012,
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
          -0.0494,
          -0.0001,
          -0.0014,
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
          -0.0553,
          -0.0001,
          -0.0015,
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
          -0.0605,
          -0.0001,
          -0.0017,
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
          -0.0648,
          -0.0001,
          -0.0018,
          0.9979
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
          -0.0681,
          -0.0001,
          -0.0019,
          0.9977
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
          -0.0704,
          -0.0001,
          -0.0019,
          0.9975
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
          -0.0717,
          -0.0001,
          -0.002,
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
          -0.0722,
          -0.0001,
          -0.002,
          0.9974
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
          -0.0723,
          -0.0001,
          -0.002,
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
          -0.0736,
          -0.0001,
          -0.001,
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
          -0.0749,
          0,
          0,
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
          -0.0763,
          0.0001,
          0.001,
          0.9971
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
          -0.0775,
          0.0002,
          0.0019,
          0.997
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
          -0.0787,
          0.0002,
          0.0028,
          0.9969
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
          -0.0796,
          0.0003,
          0.0035,
          0.9968
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
          -0.0803,
          0.0003,
          0.004,
          0.9968
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
          -0.0808,
          0.0004,
          0.0044,
          0.9967
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
          -0.0809,
          0.0004,
          0.0045,
          0.9967
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
          -0.0808,
          0.0004,
          0.0044,
          0.9967
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
          -0.0803,
          0.0003,
          0.004,
          0.9968
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
          -0.0796,
          0.0003,
          0.0035,
          0.9968
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
          -0.0787,
          0.0002,
          0.0028,
          0.9969
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
          -0.0775,
          0.0002,
          0.002,
          0.997
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
          0.0001,
          0.001,
          0.9971
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
          -0.0749,
          0,
          0,
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
          -0.0736,
          -0.0001,
          -0.001,
          0.9973
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
          -0.0723,
          -0.0001,
          -0.0019,
          0.9974
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
          -0.0712,
          -0.0002,
          -0.0028,
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
          -0.0703,
          -0.0002,
          -0.0035,
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
          -0.0695,
          -0.0003,
          -0.004,
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
          -0.0691,
          -0.0003,
          -0.0044,
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
          -0.0689,
          -0.0003,
          -0.0045,
          0.9976
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
          -0.0691,
          -0.0003,
          -0.0044,
          0.9976
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
          -0.0695,
          -0.0003,
          -0.004,
          0.9976
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
          -0.0702,
          -0.0002,
          -0.0035,
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
          -0.0712,
          -0.0002,
          -0.0028,
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
          -0.0723,
          -0.0001,
          -0.002,
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
          -0.0736,
          -0.0001,
          -0.001,
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
          -0.0749,
          0,
          0,
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
          -0.0763,
          0.0001,
          0.001,
          0.9971
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
          -0.0775,
          0.0002,
          0.0019,
          0.997
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
          -0.0787,
          0.0002,
          0.0028,
          0.9969
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
          -0.0796,
          0.0003,
          0.0035,
          0.9968
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
          -0.0803,
          0.0003,
          0.004,
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
          -0.0808,
          0.0004,
          0.0044,
          0.9967
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
          -0.0809,
          0.0004,
          0.0045,
          0.9967
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
          -0.0808,
          0.0004,
          0.0044,
          0.9967
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
          -0.0803,
          0.0003,
          0.004,
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
          -0.0796,
          0.0003,
          0.0035,
          0.9968
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
          -0.0787,
          0.0002,
          0.0028,
          0.9969
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
          0.0002,
          0.002,
          0.997
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
          0.0001,
          0.001,
          0.9971
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
          -0.0749,
          0,
          0,
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
          -0.0736,
          -0.0001,
          -0.001,
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
          -0.0723,
          -0.0001,
          -0.0019,
          0.9974
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
          -0.0712,
          -0.0002,
          -0.0028,
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
          -0.0703,
          -0.0002,
          -0.0035,
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
          -0.0695,
          -0.0003,
          -0.004,
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
          -0.0691,
          -0.0003,
          -0.0044,
          0.9976
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
          -0.0689,
          -0.0003,
          -0.0045,
          0.9976
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
          -0.0691,
          -0.0003,
          -0.0044,
          0.9976
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
          -0.0695,
          -0.0003,
          -0.004,
          0.9976
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
          -0.0002,
          -0.0035,
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
          -0.0712,
          -0.0002,
          -0.0028,
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
          -0.0711,
          -0.0002,
          -0.0028,
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
          -0.0707,
          -0.0002,
          -0.0028,
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
          -0.0695,
          -0.0002,
          -0.0027,
          0.9976
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
          -0.0676,
          -0.0002,
          -0.0027,
          0.9977
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
          -0.0647,
          -0.0002,
          -0.0025,
          0.9979
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
          -0.0609,
          -0.0002,
          -0.0024,
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
          -0.0563,
          -0.0002,
          -0.0022,
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
          -0.0509,
          -0.0001,
          -0.002,
          0.9987
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
          -0.045,
          -0.0001,
          -0.0018,
          0.999
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
          -0.0388,
          -0.0001,
          -0.0015,
          0.9993
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
          -0.0324,
          -0.0001,
          -0.0013,
          0.9995
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
          -0.0262,
          -0.0001,
          -0.001,
          0.9997
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
          -0.0203,
          -0.0001,
          -0.0008,
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
          -0.015,
          0,
          -0.0006,
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
          -0.0103,
          0,
          -0.0004,
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
          -0.0065,
          0,
          -0.0003,
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
          -0.0036,
          0,
          -0.0001,
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
          -0.0017,
          0,
          -0.0001,
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
          -0.0005,
          0,
          0,
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
          -0.0001,
          0,
          0,
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
          -0.0004,
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
          -0.0011,
          0,
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
          -0.0025,
          0,
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
          -0.0044,
          0,
          -0.0002,
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
          -0.0069,
          0,
          -0.0003,
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
          -0.01,
          0,
          -0.0005,
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
          -0.0135,
          0,
          -0.0006,
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
          -0.0173,
          0,
          -0.0008,
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
          -0.0212,
          -0.0001,
          -0.001,
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
          -0.0252,
          -0.0001,
          -0.0012,
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
          -0.0289,
          -0.0001,
          -0.0014,
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
          -0.0324,
          -0.0001,
          -0.0015,
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
          -0.0355,
          -0.0001,
          -0.0017,
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
          -0.038,
          -0.0001,
          -0.0018,
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
          -0.0399,
          -0.0001,
          -0.0019,
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
          -0.0413,
          -0.0001,
          -0.0019,
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
          -0.042,
          -0.0001,
          -0.002,
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
          -0.0424,
          -0.0001,
          -0.002,
          0.9991
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
          -0.0424,
          -0.0001,
          -0.002,
          0.9991
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
          -0.0436,
          0,
          -0.001,
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
          -0.045,
          0,
          0,
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
          -0.0463,
          0,
          0.001,
          0.9989
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
          -0.0476,
          0.0001,
          0.0019,
          0.9989
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
          -0.0487,
          0.0001,
          0.0028,
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
          -0.0497,
          0.0002,
          0.0035,
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
          -0.0504,
          0.0002,
          0.004,
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
          -0.0508,
          0.0002,
          0.0044,
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
          -0.051,
          0.0002,
          0.0045,
          0.9987
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
          -0.0508,
          0.0002,
          0.0044,
          0.9987
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
          -0.0504,
          0.0002,
          0.0041,
          0.9987
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
          -0.0497,
          0.0002,
          0.0035,
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
          -0.0487,
          0.0001,
          0.0028,
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
          -0.0476,
          0.0001,
          0.002,
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
          -0.0463,
          0,
          0.001,
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
          -0.045,
          0,
          0,
          0.999
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
          -0.0437,
          0,
          -0.001,
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
          -0.0424,
          -0.0001,
          -0.0019,
          0.9991
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
          -0.0413,
          -0.0001,
          -0.0028,
          0.9991
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
          -0.0403,
          -0.0001,
          -0.0035,
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
          -0.0396,
          -0.0002,
          -0.004,
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
          -0.0391,
          -0.0002,
          -0.0044,
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
          -0.039,
          -0.0002,
          -0.0045,
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
          -0.0391,
          -0.0002,
          -0.0044,
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
          -0.0396,
          -0.0002,
          -0.0041,
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
          -0.0403,
          -0.0001,
          -0.0035,
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
          -0.0412,
          -0.0001,
          -0.0028,
          0.9991
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
          -0.0424,
          -0.0001,
          -0.002,
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
          -0.0436,
          0,
          -0.001,
          0.999
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
          -0.045,
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
          -0.0463,
          0,
          0.001,
          0.9989
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
          -0.0476,
          0.0001,
          0.0019,
          0.9989
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
          -0.0487,
          0.0001,
          0.0028,
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
          -0.0497,
          0.0002,
          0.0035,
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
          -0.0504,
          0.0002,
          0.004,
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
          -0.0508,
          0.0002,
          0.0044,
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
          -0.051,
          0.0002,
          0.0045,
          0.9987
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
          -0.0508,
          0.0002,
          0.0044,
          0.9987
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
          -0.0504,
          0.0002,
          0.0041,
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
          -0.0497,
          0.0002,
          0.0035,
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
          -0.0487,
          0.0001,
          0.0028,
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
          0.0001,
          0.002,
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
          -0.0463,
          0,
          0.001,
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
          -0.045,
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
          -0.0437,
          0,
          -0.001,
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
          -0.0424,
          -0.0001,
          -0.0019,
          0.9991
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
          -0.0413,
          -0.0001,
          -0.0028,
          0.9991
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
          -0.0403,
          -0.0001,
          -0.0035,
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
          -0.0002,
          -0.004,
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
          -0.0391,
          -0.0002,
          -0.0044,
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
          -0.039,
          -0.0002,
          -0.0045,
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
          -0.0391,
          -0.0002,
          -0.0044,
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
          -0.0396,
          -0.0002,
          -0.0041,
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
          -0.0403,
          -0.0001,
          -0.0035,
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
          -0.0412,
          -0.0001,
          -0.0028,
          0.9991
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
          -0.0412,
          -0.0001,
          -0.0028,
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
          -0.0409,
          -0.0001,
          -0.0028,
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
          -0.0402,
          -0.0001,
          -0.0027,
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
          -0.0391,
          -0.0001,
          -0.0027,
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
          -0.0374,
          -0.0001,
          -0.0025,
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
          -0.0352,
          -0.0001,
          -0.0024,
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
          -0.0326,
          -0.0001,
          -0.0022,
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
          -0.0295,
          -0.0001,
          -0.002,
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
          -0.026,
          -0.0001,
          -0.0018,
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
          -0.0224,
          -0.0001,
          -0.0015,
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
          -0.0188,
          0,
          -0.0013,
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
          -0.0152,
          0,
          -0.001,
          0.9999
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
          -0.0117,
          0,
          -0.0008,
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
          -0.0086,
          0,
          -0.0006,
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
          -0.006,
          0,
          -0.0004,
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
          -0.0038,
          0,
          -0.0003,
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
          -0.0021,
          0,
          -0.0001,
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
          -0.001,
          0,
          -0.0001,
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
          -0.0003,
          0,
          0,
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
          0,
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
          -0.0001,
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
          -0.0005,
          0.0001,
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
          -0.0017,
          0.0003,
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
          -0.0036,
          0.0007,
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
          -0.0064,
          0.0012,
          0.0028,
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
          -0.0101,
          0.0019,
          0.0045,
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
          -0.0146,
          0.0028,
          0.0064,
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
          -0.0197,
          0.0037,
          0.0087,
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
          -0.0252,
          0.0048,
          0.0112,
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
          -0.031,
          0.0059,
          0.0137,
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
          -0.0368,
          0.0069,
          0.0163,
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
          -0.0423,
          0.008,
          0.0187,
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
          -0.0474,
          0.009,
          0.021,
          0.9986
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
          -0.0519,
          0.0098,
          0.0229,
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
          -0.0556,
          0.0105,
          0.0246,
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
          -0.0584,
          0.011,
          0.0258,
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
          -0.0604,
          0.0114,
          0.0267,
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
          -0.0615,
          0.0116,
          0.0272,
          0.9976
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
          -0.0619,
          0.0117,
          0.0274,
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
          -0.062,
          0.0117,
          0.0274,
          0.9976
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
          -0.0633,
          0.0118,
          0.0283,
          0.9975
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
          -0.0646,
          0.0119,
          0.0293,
          0.9974
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
          -0.0659,
          0.012,
          0.0303,
          0.9973
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
          -0.0672,
          0.0121,
          0.0312,
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
          -0.0683,
          0.0122,
          0.032,
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
          -0.0693,
          0.0123,
          0.0327,
          0.997
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
          -0.07,
          0.0124,
          0.0333,
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
          -0.0704,
          0.0124,
          0.0336,
          0.9969
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
          -0.0706,
          0.0124,
          0.0337,
          0.9969
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
          -0.0704,
          0.0124,
          0.0336,
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
          -0.07,
          0.0124,
          0.0333,
          0.9969
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
          -0.0693,
          0.0123,
          0.0327,
          0.997
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
          -0.0683,
          0.0122,
          0.032,
          0.9971
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
          -0.0672,
          0.0121,
          0.0312,
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
          -0.0659,
          0.012,
          0.0303,
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
          -0.0646,
          0.0119,
          0.0293,
          0.9974
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
          -0.0633,
          0.0118,
          0.0283,
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
          -0.0621,
          0.0117,
          0.0274,
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
          -0.0609,
          0.0116,
          0.0265,
          0.9977
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
          -0.06,
          0.0116,
          0.0258,
          0.9978
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
          -0.0593,
          0.0115,
          0.0253,
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
          -0.0588,
          0.0115,
          0.025,
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
          -0.0587,
          0.0115,
          0.0249,
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
          -0.0588,
          0.0115,
          0.025,
          0.9979
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
          -0.0593,
          0.0115,
          0.0253,
          0.9979
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
          -0.06,
          0.0116,
          0.0258,
          0.9978
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
          -0.0609,
          0.0116,
          0.0265,
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
          -0.062,
          0.0117,
          0.0274,
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
          -0.0633,
          0.0118,
          0.0283,
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
          -0.0646,
          0.0119,
          0.0293,
          0.9974
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
          -0.0659,
          0.012,
          0.0303,
          0.9973
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
          -0.0672,
          0.0121,
          0.0312,
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
          -0.0683,
          0.0122,
          0.032,
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
          -0.0693,
          0.0123,
          0.0327,
          0.997
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
          -0.07,
          0.0124,
          0.0333,
          0.9969
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
          -0.0704,
          0.0124,
          0.0336,
          0.9969
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
          -0.0706,
          0.0124,
          0.0337,
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
          -0.0704,
          0.0124,
          0.0336,
          0.9969
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
          -0.07,
          0.0124,
          0.0333,
          0.9969
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
          -0.0693,
          0.0123,
          0.0327,
          0.997
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
          -0.0683,
          0.0122,
          0.032,
          0.9971
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
          -0.0672,
          0.0121,
          0.0312,
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
          -0.0659,
          0.012,
          0.0303,
          0.9973
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
          -0.0646,
          0.0119,
          0.0293,
          0.9974
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
          -0.0633,
          0.0118,
          0.0283,
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
          -0.0621,
          0.0117,
          0.0274,
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
          -0.0609,
          0.0116,
          0.0265,
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
          -0.06,
          0.0116,
          0.0258,
          0.9978
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
          -0.0593,
          0.0115,
          0.0253,
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
          -0.0588,
          0.0115,
          0.025,
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
          -0.0587,
          0.0115,
          0.0249,
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
          -0.0588,
          0.0115,
          0.025,
          0.9979
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
          -0.0593,
          0.0115,
          0.0253,
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
          -0.06,
          0.0116,
          0.0258,
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
          -0.0609,
          0.0116,
          0.0265,
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
          -0.0608,
          0.0116,
          0.0265,
          0.9977
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
          -0.0604,
          0.0115,
          0.0263,
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
          -0.0595,
          0.0113,
          0.0259,
          0.9978
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
          -0.0578,
          0.011,
          0.0252,
          0.9979
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
          -0.0553,
          0.0105,
          0.0241,
          0.9981
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
          -0.0521,
          0.0099,
          0.0227,
          0.9983
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
          -0.0481,
          0.0092,
          0.0209,
          0.9986
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
          -0.0436,
          0.0083,
          0.019,
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
          -0.0385,
          0.0073,
          0.0168,
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
          -0.0332,
          0.0063,
          0.0144,
          0.9993
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
          -0.0278,
          0.0053,
          0.0121,
          0.9995
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
          -0.0224,
          0.0043,
          0.0098,
          0.9997
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
          -0.0174,
          0.0033,
          0.0076,
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
          -0.0128,
          0.0024,
          0.0056,
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
          -0.0088,
          0.0017,
          0.0038,
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
          -0.0056,
          0.0011,
          0.0024,
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
          -0.0031,
          0.0006,
          0.0013,
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
          -0.0014,
          0.0003,
          0.0006,
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
          -0.0005,
          0.0001,
          0.0002,
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
          -0.0001,
          0,
          0,
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
          -0.0001,
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
          -0.0007,
          0,
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
          -0.0021,
          0.0001,
          0.0002,
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
          -0.0045,
          0.0003,
          0.0004,
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
          -0.008,
          0.0006,
          0.0008,
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
          -0.0126,
          0.0009,
          0.0012,
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
          0.0013,
          0.0018,
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
          0.0018,
          0.0024,
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
          -0.0315,
          0.0023,
          0.0031,
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
          -0.0387,
          0.0028,
          0.0038,
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
          -0.0459,
          0.0033,
          0.0045,
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
          -0.0528,
          0.0038,
          0.0052,
          0.9986
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
          -0.0591,
          0.0043,
          0.0058,
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
          -0.0647,
          0.0047,
          0.0064,
          0.9979
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
          -0.0693,
          0.005,
          0.0068,
          0.9976
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
          -0.0728,
          0.0053,
          0.0072,
          0.9973
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
          -0.0752,
          0.0055,
          0.0074,
          0.9972
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
          -0.0766,
          0.0056,
          0.0075,
          0.9971
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
          -0.0772,
          0.0056,
          0.0076,
          0.997
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
          -0.0773,
          0.0056,
          0.0076,
          0.997
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
          -0.0785,
          0.0057,
          0.0086,
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
          -0.0799,
          0.0058,
          0.0096,
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
          -0.0812,
          0.0059,
          0.0106,
          0.9966
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
          -0.0824,
          0.006,
          0.0115,
          0.9965
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
          -0.0836,
          0.0061,
          0.0123,
          0.9964
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
          -0.0845,
          0.0061,
          0.013,
          0.9963
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
          -0.0852,
          0.0062,
          0.0136,
          0.9963
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
          -0.0857,
          0.0062,
          0.0139,
          0.9962
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
          -0.0858,
          0.0062,
          0.014,
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
          -0.0857,
          0.0062,
          0.0139,
          0.9962
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
          -0.0852,
          0.0062,
          0.0136,
          0.9962
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
          -0.0845,
          0.0061,
          0.013,
          0.9963
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
          -0.0836,
          0.0061,
          0.0123,
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
          -0.0824,
          0.006,
          0.0115,
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
          -0.0812,
          0.0059,
          0.0106,
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
          -0.0799,
          0.0058,
          0.0096,
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
          -0.0785,
          0.0057,
          0.0086,
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
          -0.0773,
          0.0056,
          0.0076,
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
          -0.0762,
          0.0055,
          0.0068,
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
          -0.0752,
          0.0055,
          0.0061,
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
          -0.0745,
          0.0054,
          0.0056,
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
          -0.0741,
          0.0054,
          0.0052,
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
          -0.0739,
          0.0054,
          0.0051,
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
          -0.0741,
          0.0054,
          0.0052,
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
          -0.0745,
          0.0054,
          0.0056,
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
          -0.0752,
          0.0055,
          0.0061,
          0.9971
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
          -0.0761,
          0.0055,
          0.0068,
          0.9971
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
          -0.0773,
          0.0056,
          0.0076,
          0.997
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
          -0.0785,
          0.0057,
          0.0086,
          0.9969
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
          -0.0799,
          0.0058,
          0.0096,
          0.9967
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
          -0.0812,
          0.0059,
          0.0106,
          0.9966
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
          -0.0824,
          0.006,
          0.0115,
          0.9965
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
          -0.0836,
          0.0061,
          0.0123,
          0.9964
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
          -0.0845,
          0.0061,
          0.013,
          0.9963
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
          -0.0852,
          0.0062,
          0.0136,
          0.9963
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
          -0.0857,
          0.0062,
          0.0139,
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
          -0.0858,
          0.0062,
          0.014,
          0.9962
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
          -0.0857,
          0.0062,
          0.0139,
          0.9962
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
          -0.0852,
          0.0062,
          0.0136,
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
          -0.0845,
          0.0061,
          0.013,
          0.9963
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
          -0.0836,
          0.0061,
          0.0123,
          0.9964
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
          -0.0824,
          0.006,
          0.0115,
          0.9965
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
          -0.0812,
          0.0059,
          0.0106,
          0.9966
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
          -0.0799,
          0.0058,
          0.0096,
          0.9967
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
          -0.0785,
          0.0057,
          0.0086,
          0.9969
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
          -0.0773,
          0.0056,
          0.0076,
          0.997
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
          0.0055,
          0.0068,
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
          -0.0752,
          0.0055,
          0.0061,
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
          -0.0745,
          0.0054,
          0.0056,
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
          -0.0741,
          0.0054,
          0.0052,
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
          -0.0739,
          0.0054,
          0.0051,
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
          -0.0741,
          0.0054,
          0.0052,
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
          -0.0745,
          0.0054,
          0.0056,
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
          -0.0752,
          0.0055,
          0.0061,
          0.9971
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
          -0.0761,
          0.0055,
          0.0068,
          0.9971
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
          -0.076,
          0.0055,
          0.0068,
          0.9971
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
          -0.0755,
          0.0055,
          0.0067,
          0.9971
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
          -0.0743,
          0.0054,
          0.0066,
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
          -0.0722,
          0.0052,
          0.0065,
          0.9974
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
          -0.0692,
          0.005,
          0.0062,
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
          -0.0651,
          0.0047,
          0.0058,
          0.9979
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
          -0.0602,
          0.0043,
          0.0054,
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
          -0.0544,
          0.0039,
          0.0049,
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
          -0.0481,
          0.0035,
          0.0043,
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
          -0.0415,
          0.003,
          0.0037,
          0.9991
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
          -0.0347,
          0.0025,
          0.0031,
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
          -0.028,
          0.002,
          0.0025,
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
          -0.0217,
          0.0016,
          0.0019,
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
          -0.016,
          0.0012,
          0.0014,
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
          -0.011,
          0.0008,
          0.001,
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
          -0.007,
          0.0005,
          0.0006,
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
          -0.0039,
          0.0003,
          0.0003,
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
          -0.0018,
          0.0001,
          0.0002,
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
          -0.0006,
          0,
          0.0001,
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
          -0.0001,
          0,
          0,
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
          -0.0001,
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
          -0.0004,
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
          -0.0013,
          0,
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
          -0.0027,
          0,
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
          -0.0049,
          0,
          -0.0002,
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
          -0.0077,
          0,
          -0.0003,
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
          -0.0112,
          0,
          -0.0005,
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
          -0.0151,
          0,
          -0.0006,
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
          -0.0193,
          0,
          -0.0008,
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
          -0.0237,
          -0.0001,
          -0.001,
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
          -0.0281,
          -0.0001,
          -0.0012,
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
          -0.0324,
          -0.0001,
          -0.0014,
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
          -0.0363,
          -0.0001,
          -0.0015,
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
          -0.0397,
          -0.0001,
          -0.0017,
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
          -0.0425,
          -0.0001,
          -0.0018,
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
          -0.0447,
          -0.0001,
          -0.0019,
          0.999
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
          -0.0461,
          -0.0001,
          -0.0019,
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
          -0.047,
          -0.0001,
          -0.002,
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
          -0.0473,
          -0.0001,
          -0.002,
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
          -0.0474,
          -0.0001,
          -0.002,
          0.9989
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
          -0.0486,
          0,
          -0.001,
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
          -0.05,
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
          -0.0513,
          0.0001,
          0.001,
          0.9987
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
          -0.0526,
          0.0001,
          0.0019,
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
          -0.0537,
          0.0002,
          0.0028,
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
          -0.0547,
          0.0002,
          0.0035,
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
          -0.0554,
          0.0002,
          0.004,
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
          -0.0558,
          0.0002,
          0.0044,
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
          -0.056,
          0.0003,
          0.0045,
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
          -0.0558,
          0.0002,
          0.0044,
          0.9984
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
          -0.0554,
          0.0002,
          0.0041,
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
          -0.0547,
          0.0002,
          0.0035,
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
          -0.0537,
          0.0002,
          0.0028,
          0.9986
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
          -0.0526,
          0.0001,
          0.002,
          0.9986
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
          -0.0513,
          0.0001,
          0.001,
          0.9987
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
          -0.05,
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
          -0.0487,
          0,
          -0.001,
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
          -0.0474,
          -0.0001,
          -0.0019,
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
          -0.0462,
          -0.0001,
          -0.0028,
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
          -0.0453,
          -0.0002,
          -0.0035,
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
          -0.0446,
          -0.0002,
          -0.004,
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
          -0.0441,
          -0.0002,
          -0.0044,
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
          -0.044,
          -0.0002,
          -0.0045,
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
          -0.0441,
          -0.0002,
          -0.0044,
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
          -0.0446,
          -0.0002,
          -0.0041,
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
          -0.0453,
          -0.0002,
          -0.0035,
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
          -0.0462,
          -0.0001,
          -0.0028,
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
          -0.0474,
          -0.0001,
          -0.002,
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
          -0.0486,
          0,
          -0.001,
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
          -0.05,
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
          -0.0513,
          0.0001,
          0.001,
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
          -0.0526,
          0.0001,
          0.0019,
          0.9986
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
          -0.0537,
          0.0002,
          0.0028,
          0.9986
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
          -0.0547,
          0.0002,
          0.0035,
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
          -0.0554,
          0.0002,
          0.004,
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
          -0.0558,
          0.0002,
          0.0044,
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
          -0.056,
          0.0003,
          0.0045,
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
          -0.0558,
          0.0002,
          0.0044,
          0.9984
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
          -0.0554,
          0.0002,
          0.0041,
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
          -0.0547,
          0.0002,
          0.0035,
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
          -0.0537,
          0.0002,
          0.0028,
          0.9986
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
          0.0001,
          0.002,
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
          -0.0513,
          0.0001,
          0.001,
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
          -0.05,
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
          -0.0487,
          0,
          -0.001,
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
          -0.0474,
          -0.0001,
          -0.0019,
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
          -0.0462,
          -0.0001,
          -0.0028,
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
          -0.0453,
          -0.0002,
          -0.0035,
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
          -0.0002,
          -0.004,
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
          -0.0441,
          -0.0002,
          -0.0044,
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
          -0.044,
          -0.0002,
          -0.0045,
          0.999
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
          -0.0441,
          -0.0002,
          -0.0044,
          0.999
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
          -0.0446,
          -0.0002,
          -0.0041,
          0.999
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
          -0.0453,
          -0.0002,
          -0.0035,
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
          -0.0462,
          -0.0001,
          -0.0028,
          0.9989
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
          -0.0462,
          -0.0001,
          -0.0028,
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
          -0.0459,
          -0.0001,
          -0.0028,
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
          -0.0451,
          -0.0001,
          -0.0027,
          0.999
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
          -0.0001,
          -0.0027,
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
          -0.042,
          -0.0001,
          -0.0025,
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
          -0.0395,
          -0.0001,
          -0.0024,
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
          -0.0365,
          -0.0001,
          -0.0022,
          0.9993
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
          -0.033,
          -0.0001,
          -0.002,
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
          -0.0292,
          -0.0001,
          -0.0018,
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
          -0.0252,
          -0.0001,
          -0.0015,
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
          -0.021,
          0,
          -0.0013,
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
          -0.017,
          0,
          -0.001,
          0.9999
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
          -0.0132,
          0,
          -0.0008,
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
          -0.0097,
          0,
          -0.0006,
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
          -0.0067,
          0,
          -0.0004,
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
          -0.0042,
          0,
          -0.0003,
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
          -0.0024,
          0,
          -0.0001,
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
          -0.0011,
          0,
          -0.0001,
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
          -0.0003,
          0,
          0,
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
          0,
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
          -0.0001,
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
          -0.0007,
          0.0002,
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
          -0.002,
          0.0007,
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
          -0.0044,
          0.0014,
          0.0033,
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
          -0.0079,
          0.0025,
          0.0058,
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
          -0.0124,
          0.004,
          0.0092,
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
          -0.0179,
          0.0057,
          0.0133,
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
          -0.0242,
          0.0078,
          0.0179,
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
          -0.031,
          0.0099,
          0.0229,
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
          -0.038,
          0.0122,
          0.0282,
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
          -0.0451,
          0.0145,
          0.0334,
          0.9983
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
          -0.0519,
          0.0167,
          0.0385,
          0.9978
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
          -0.0582,
          0.0187,
          0.0431,
          0.9972
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
          -0.0636,
          0.0204,
          0.0471,
          0.9966
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
          -0.0682,
          0.0219,
          0.0505,
          0.9961
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
          -0.0716,
          0.023,
          0.053,
          0.9957
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
          -0.074,
          0.0238,
          0.0548,
          0.9955
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
          -0.0754,
          0.0242,
          0.0558,
          0.9953
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
          -0.0759,
          0.0244,
          0.0562,
          0.9952
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
          -0.076,
          0.0244,
          0.0563,
          0.9952
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
          -0.0772,
          0.0245,
          0.0572,
          0.9951
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
          -0.0786,
          0.0247,
          0.0582,
          0.9949
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
          -0.0799,
          0.0248,
          0.0591,
          0.9947
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
          -0.0811,
          0.025,
          0.06,
          0.9946
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
          -0.0822,
          0.0251,
          0.0609,
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
          -0.0831,
          0.0253,
          0.0615,
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
          -0.0838,
          0.0253,
          0.0621,
          0.9942
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
          -0.0843,
          0.0254,
          0.0624,
          0.9942
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
          -0.0844,
          0.0254,
          0.0625,
          0.9941
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
          -0.0843,
          0.0254,
          0.0624,
          0.9942
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
          -0.0838,
          0.0253,
          0.0621,
          0.9942
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
          -0.0831,
          0.0253,
          0.0616,
          0.9943
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
          -0.0822,
          0.0251,
          0.0609,
          0.9944
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
          -0.0811,
          0.025,
          0.06,
          0.9946
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
          -0.0799,
          0.0248,
          0.0591,
          0.9947
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
          -0.0786,
          0.0247,
          0.0582,
          0.9949
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
          -0.0773,
          0.0245,
          0.0572,
          0.9951
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
          -0.076,
          0.0244,
          0.0563,
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
          -0.0749,
          0.0243,
          0.0555,
          0.9954
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
          -0.074,
          0.0242,
          0.0548,
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
          -0.0733,
          0.0241,
          0.0543,
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
          -0.0728,
          0.024,
          0.0539,
          0.9956
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
          -0.0727,
          0.024,
          0.0538,
          0.9956
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
          -0.0728,
          0.024,
          0.0539,
          0.9956
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
          -0.0733,
          0.0241,
          0.0543,
          0.9955
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
          -0.074,
          0.0242,
          0.0548,
          0.9955
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
          -0.0749,
          0.0243,
          0.0555,
          0.9954
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
          -0.076,
          0.0244,
          0.0563,
          0.9952
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
          -0.0772,
          0.0245,
          0.0572,
          0.9951
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
          -0.0786,
          0.0247,
          0.0582,
          0.9949
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
          -0.0799,
          0.0248,
          0.0591,
          0.9947
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
          -0.0811,
          0.025,
          0.06,
          0.9946
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
          -0.0822,
          0.0251,
          0.0609,
          0.9944
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
          -0.0831,
          0.0253,
          0.0615,
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
          -0.0838,
          0.0253,
          0.0621,
          0.9942
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
          -0.0843,
          0.0254,
          0.0624,
          0.9942
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
          -0.0844,
          0.0254,
          0.0625,
          0.9941
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
          -0.0843,
          0.0254,
          0.0624,
          0.9942
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
          -0.0838,
          0.0253,
          0.0621,
          0.9942
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
          -0.0831,
          0.0253,
          0.0616,
          0.9943
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
          -0.0822,
          0.0251,
          0.0609,
          0.9944
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
          -0.0811,
          0.025,
          0.06,
          0.9946
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
          -0.0799,
          0.0248,
          0.0591,
          0.9947
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
          -0.0786,
          0.0247,
          0.0582,
          0.9949
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
          -0.0773,
          0.0245,
          0.0572,
          0.9951
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
          -0.076,
          0.0244,
          0.0563,
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
          -0.0749,
          0.0243,
          0.0555,
          0.9954
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
          -0.074,
          0.0242,
          0.0548,
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
          -0.0733,
          0.0241,
          0.0543,
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
          -0.0728,
          0.024,
          0.0539,
          0.9956
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
          -0.0727,
          0.024,
          0.0538,
          0.9956
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
          -0.0728,
          0.024,
          0.0539,
          0.9956
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
          -0.0733,
          0.0241,
          0.0543,
          0.9955
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
          -0.074,
          0.0242,
          0.0548,
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
          -0.0749,
          0.0243,
          0.0555,
          0.9954
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
          -0.0748,
          0.0243,
          0.0554,
          0.9954
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
          -0.0743,
          0.0241,
          0.0551,
          0.9955
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
          -0.0732,
          0.0237,
          0.0542,
          0.9956
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
          -0.0711,
          0.0231,
          0.0527,
          0.9959
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
          -0.0681,
          0.0221,
          0.0504,
          0.9962
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
          -0.0641,
          0.0208,
          0.0475,
          0.9966
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
          -0.0592,
          0.0192,
          0.0439,
          0.9971
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
          -0.0536,
          0.0174,
          0.0397,
          0.9976
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
          -0.0474,
          0.0154,
          0.0351,
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
          -0.0408,
          0.0132,
          0.0303,
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
          -0.0342,
          0.0111,
          0.0253,
          0.999
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
          -0.0276,
          0.009,
          0.0204,
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
          -0.0214,
          0.0069,
          0.0158,
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
          -0.0157,
          0.0051,
          0.0117,
          0.9998
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
          -0.0109,
          0.0035,
          0.008,
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
          -0.0069,
          0.0022,
          0.0051,
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
          -0.0038,
          0.0012,
          0.0028,
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
          -0.0017,
          0.0006,
          0.0013,
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
          -0.0006,
          0.0002,
          0.0004,
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
          -0.0001,
          0,
          0.0001,
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
          -0.0001,
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
          -0.0007,
          0.0001,
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
          -0.0023,
          0.0003,
          0.0005,
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
          -0.0051,
          0.0007,
          0.001,
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
          -0.009,
          0.0012,
          0.0018,
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
          -0.0142,
          0.0019,
          0.0028,
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
          -0.0205,
          0.0027,
          0.004,
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
          -0.0277,
          0.0037,
          0.0054,
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
          -0.0355,
          0.0047,
          0.007,
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
          -0.0436,
          0.0058,
          0.0086,
          0.999
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
          -0.0517,
          0.0068,
          0.0102,
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
          -0.0595,
          0.0079,
          0.0117,
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
          -0.0667,
          0.0088,
          0.0131,
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
          -0.0729,
          0.0096,
          0.0143,
          0.9972
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
          -0.0781,
          0.0103,
          0.0153,
          0.9968
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
          -0.0821,
          0.0108,
          0.0161,
          0.9964
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
          -0.0848,
          0.0112,
          0.0166,
          0.9962
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
          -0.0864,
          0.0114,
          0.017,
          0.9961
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
          -0.087,
          0.0115,
          0.0171,
          0.996
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
          -0.0871,
          0.0115,
          0.0171,
          0.996
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
          -0.0883,
          0.0116,
          0.018,
          0.9959
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
          -0.0896,
          0.0118,
          0.019,
          0.9957
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
          -0.091,
          0.0119,
          0.02,
          0.9956
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
          -0.0922,
          0.012,
          0.0209,
          0.9954
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
          -0.0933,
          0.0121,
          0.0218,
          0.9953
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
          -0.0943,
          0.0122,
          0.0225,
          0.9952
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
          -0.095,
          0.0122,
          0.023,
          0.9951
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
          -0.0954,
          0.0123,
          0.0233,
          0.9951
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
          -0.0956,
          0.0123,
          0.0234,
          0.9951
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
          -0.0954,
          0.0123,
          0.0233,
          0.9951
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
          -0.095,
          0.0122,
          0.023,
          0.9951
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
          -0.0943,
          0.0122,
          0.0225,
          0.9952
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
          -0.0934,
          0.0121,
          0.0218,
          0.9953
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
          -0.0922,
          0.012,
          0.0209,
          0.9954
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
          -0.091,
          0.0119,
          0.02,
          0.9956
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
          -0.0897,
          0.0118,
          0.019,
          0.9957
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
          -0.0883,
          0.0116,
          0.018,
          0.9959
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
          -0.0871,
          0.0115,
          0.0171,
          0.996
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
          -0.086,
          0.0114,
          0.0163,
          0.9961
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
          -0.085,
          0.0114,
          0.0156,
          0.9962
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
          -0.0843,
          0.0113,
          0.015,
          0.9963
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
          -0.0839,
          0.0113,
          0.0147,
          0.9963
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
          -0.0837,
          0.0113,
          0.0146,
          0.9963
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
          -0.0839,
          0.0113,
          0.0147,
          0.9963
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
          -0.0843,
          0.0113,
          0.015,
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
          -0.085,
          0.0114,
          0.0156,
          0.9962
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
          -0.086,
          0.0114,
          0.0163,
          0.9961
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
          -0.0871,
          0.0115,
          0.0171,
          0.996
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
          -0.0883,
          0.0116,
          0.018,
          0.9959
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
          -0.0896,
          0.0118,
          0.019,
          0.9957
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
          -0.091,
          0.0119,
          0.02,
          0.9956
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
          -0.0922,
          0.012,
          0.0209,
          0.9954
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
          -0.0933,
          0.0121,
          0.0218,
          0.9953
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
          -0.0943,
          0.0122,
          0.0225,
          0.9952
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
          -0.095,
          0.0122,
          0.023,
          0.9951
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
          -0.0954,
          0.0123,
          0.0233,
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
          -0.0956,
          0.0123,
          0.0234,
          0.9951
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
          -0.0954,
          0.0123,
          0.0233,
          0.9951
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
          -0.095,
          0.0122,
          0.023,
          0.9951
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
          -0.0943,
          0.0122,
          0.0225,
          0.9952
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
          -0.0934,
          0.0121,
          0.0218,
          0.9953
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
          -0.0922,
          0.012,
          0.0209,
          0.9954
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
          -0.091,
          0.0119,
          0.02,
          0.9956
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
          -0.0897,
          0.0118,
          0.019,
          0.9957
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
          -0.0883,
          0.0116,
          0.018,
          0.9959
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
          -0.0871,
          0.0115,
          0.0171,
          0.996
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
          -0.086,
          0.0114,
          0.0163,
          0.9961
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
          -0.085,
          0.0114,
          0.0156,
          0.9962
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
          -0.0843,
          0.0113,
          0.015,
          0.9963
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
          -0.0839,
          0.0113,
          0.0147,
          0.9963
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
          -0.0837,
          0.0113,
          0.0146,
          0.9963
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
          -0.0839,
          0.0113,
          0.0147,
          0.9963
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
          -0.0843,
          0.0113,
          0.015,
          0.9963
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
          -0.085,
          0.0114,
          0.0156,
          0.9962
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
          -0.086,
          0.0114,
          0.0163,
          0.9961
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
          -0.0859,
          0.0114,
          0.0163,
          0.9961
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
          -0.0854,
          0.0113,
          0.0162,
          0.9962
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
          -0.084,
          0.0111,
          0.0159,
          0.9963
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
          -0.0816,
          0.0108,
          0.0155,
          0.9965
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
          -0.0782,
          0.0104,
          0.0148,
          0.9968
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
          -0.0736,
          0.0098,
          0.0139,
          0.9971
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
          -0.068,
          0.009,
          0.0129,
          0.9976
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
          -0.0615,
          0.0082,
          0.0117,
          0.998
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
          -0.0544,
          0.0072,
          0.0103,
          0.9984
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
          -0.0469,
          0.0062,
          0.0089,
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
          -0.0392,
          0.0052,
          0.0074,
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
          -0.0317,
          0.0042,
          0.006,
          0.9995
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
          -0.0245,
          0.0033,
          0.0047,
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
          -0.0181,
          0.0024,
          0.0034,
          0.9998
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
          -0.0125,
          0.0017,
          0.0024,
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
          -0.0079,
          0.001,
          0.0015,
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
          -0.0044,
          0.0006,
          0.0008,
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
          -0.002,
          0.0003,
          0.0004,
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
          -0.0006,
          0.0001,
          0.0001,
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
          -0.0001,
          0,
          0,
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
          -0.0001,
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
          -0.0005,
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
          -0.0015,
          0,
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
          -0.0033,
          0,
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
          -0.0059,
          0,
          -0.0002,
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
          -0.0094,
          0,
          -0.0003,
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
          -0.0135,
          0,
          -0.0005,
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
          -0.0182,
          0,
          -0.0006,
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
          -0.0234,
          0,
          -0.0008,
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
          -0.0287,
          -0.0001,
          -0.001,
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
          -0.0341,
          -0.0001,
          -0.0012,
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
          -0.0392,
          -0.0001,
          -0.0014,
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
          -0.0439,
          -0.0001,
          -0.0015,
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
          -0.048,
          -0.0001,
          -0.0017,
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
          -0.0515,
          -0.0001,
          -0.0018,
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
          -0.0541,
          -0.0001,
          -0.0019,
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
          -0.0559,
          -0.0001,
          -0.0019,
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
          -0.0569,
          -0.0001,
          -0.002,
          0.9984
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
          -0.0573,
          -0.0001,
          -0.002,
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
          -0.0574,
          -0.0001,
          -0.002,
          0.9984
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
          -0.0586,
          -0.0001,
          -0.001,
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
          -0.06,
          0,
          0,
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
          -0.0613,
          0.0001,
          0.001,
          0.9981
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
          -0.0626,
          0.0001,
          0.0019,
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
          -0.0637,
          0.0002,
          0.0028,
          0.998
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
          -0.0646,
          0.0002,
          0.0035,
          0.9979
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
          -0.0654,
          0.0003,
          0.004,
          0.9979
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
          -0.0658,
          0.0003,
          0.0044,
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
          -0.066,
          0.0003,
          0.0045,
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
          -0.0658,
          0.0003,
          0.0044,
          0.9978
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
          -0.0654,
          0.0003,
          0.004,
          0.9979
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
          -0.0646,
          0.0002,
          0.0035,
          0.9979
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
          -0.0637,
          0.0002,
          0.0028,
          0.998
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
          -0.0626,
          0.0001,
          0.002,
          0.998
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
          -0.0613,
          0.0001,
          0.001,
          0.9981
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
          -0.06,
          0,
          0,
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
          -0.0586,
          -0.0001,
          -0.001,
          0.9983
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
          -0.0574,
          -0.0001,
          -0.0019,
          0.9984
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
          -0.0562,
          -0.0002,
          -0.0028,
          0.9984
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
          -0.0553,
          -0.0002,
          -0.0035,
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
          -0.0546,
          -0.0002,
          -0.004,
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
          -0.0541,
          -0.0002,
          -0.0044,
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
          -0.054,
          -0.0002,
          -0.0045,
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
          -0.0541,
          -0.0002,
          -0.0044,
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
          -0.0546,
          -0.0002,
          -0.0041,
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
          -0.0553,
          -0.0002,
          -0.0035,
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
          -0.0562,
          -0.0002,
          -0.0028,
          0.9984
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
          -0.0574,
          -0.0001,
          -0.002,
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
          -0.0586,
          -0.0001,
          -0.001,
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
          -0.06,
          0,
          0,
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
          -0.0613,
          0.0001,
          0.001,
          0.9981
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
          -0.0626,
          0.0001,
          0.0019,
          0.998
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
          -0.0637,
          0.0002,
          0.0028,
          0.998
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
          -0.0646,
          0.0002,
          0.0035,
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
          -0.0654,
          0.0003,
          0.004,
          0.9979
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
          -0.0658,
          0.0003,
          0.0044,
          0.9978
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
          -0.066,
          0.0003,
          0.0045,
          0.9978
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
          -0.0658,
          0.0003,
          0.0044,
          0.9978
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
          -0.0654,
          0.0003,
          0.004,
          0.9979
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
          -0.0646,
          0.0002,
          0.0035,
          0.9979
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
          -0.0637,
          0.0002,
          0.0028,
          0.998
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
          -0.0626,
          0.0001,
          0.002,
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
          0.0001,
          0.001,
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
          -0.06,
          0,
          0,
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
          -0.0586,
          -0.0001,
          -0.001,
          0.9983
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
          -0.0574,
          -0.0001,
          -0.0019,
          0.9984
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
          -0.0562,
          -0.0002,
          -0.0028,
          0.9984
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
          -0.0553,
          -0.0002,
          -0.0035,
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
          -0.0002,
          -0.004,
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
          -0.0541,
          -0.0002,
          -0.0044,
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
          -0.054,
          -0.0002,
          -0.0045,
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
          -0.0541,
          -0.0002,
          -0.0044,
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
          -0.0546,
          -0.0002,
          -0.0041,
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
          -0.0553,
          -0.0002,
          -0.0035,
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
          -0.0562,
          -0.0002,
          -0.0028,
          0.9984
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
          -0.0561,
          -0.0002,
          -0.0028,
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
          -0.0558,
          -0.0002,
          -0.0028,
          0.9984
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
          -0.0549,
          -0.0002,
          -0.0027,
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
          -0.0533,
          -0.0002,
          -0.0027,
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
          -0.0511,
          -0.0002,
          -0.0025,
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
          -0.0481,
          -0.0002,
          -0.0024,
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
          -0.0444,
          -0.0002,
          -0.0022,
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
          -0.0402,
          -0.0001,
          -0.002,
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
          -0.0355,
          -0.0001,
          -0.0018,
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
          -0.0306,
          -0.0001,
          -0.0015,
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
          -0.0256,
          -0.0001,
          -0.0013,
          0.9997
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
          -0.0207,
          -0.0001,
          -0.001,
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
          -0.016,
          -0.0001,
          -0.0008,
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
          -0.0118,
          0,
          -0.0006,
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
          -0.0081,
          0,
          -0.0004,
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
          -0.0051,
          0,
          -0.0003,
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
          -0.0029,
          0,
          -0.0001,
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
          -0.0013,
          0,
          -0.0001,
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
          -0.0004,
          0,
          0,
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
          -0.0001,
          0,
          0,
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
        "weight": 0.001
      },
      {
        "frame": 2,
        "time": 0.0667,
        "weight": 0.0073
      },
      {
        "frame": 3,
        "time": 0.1,
        "weight": 0.0226
      },
      {
        "frame": 4,
        "time": 0.1333,
        "weight": 0.0492
      },
      {
        "frame": 5,
        "time": 0.1667,
        "weight": 0.088
      },
      {
        "frame": 6,
        "time": 0.2,
        "weight": 0.1386
      },
      {
        "frame": 7,
        "time": 0.2333,
        "weight": 0.1999
      },
      {
        "frame": 8,
        "time": 0.2667,
        "weight": 0.2698
      },
      {
        "frame": 9,
        "time": 0.3,
        "weight": 0.3458
      },
      {
        "frame": 10,
        "time": 0.3333,
        "weight": 0.425
      },
      {
        "frame": 11,
        "time": 0.3667,
        "weight": 0.5042
      },
      {
        "frame": 12,
        "time": 0.4,
        "weight": 0.5802
      },
      {
        "frame": 13,
        "time": 0.4333,
        "weight": 0.6501
      },
      {
        "frame": 14,
        "time": 0.4667,
        "weight": 0.7114
      },
      {
        "frame": 15,
        "time": 0.5,
        "weight": 0.762
      },
      {
        "frame": 16,
        "time": 0.5333,
        "weight": 0.8008
      },
      {
        "frame": 17,
        "time": 0.5667,
        "weight": 0.8274
      },
      {
        "frame": 18,
        "time": 0.6,
        "weight": 0.8427
      },
      {
        "frame": 19,
        "time": 0.6333,
        "weight": 0.849
      },
      {
        "frame": 20,
        "time": 0.6667,
        "weight": 0.85
      },
      {
        "frame": 21,
        "time": 0.7,
        "weight": 0.85
      },
      {
        "frame": 22,
        "time": 0.7333,
        "weight": 0.85
      },
      {
        "frame": 23,
        "time": 0.7667,
        "weight": 0.85
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
        "weight": 0.8491
      },
      {
        "frame": 77,
        "time": 2.5667,
        "weight": 0.8437
      },
      {
        "frame": 78,
        "time": 2.6,
        "weight": 0.8302
      },
      {
        "frame": 79,
        "time": 2.6333,
        "weight": 0.8068
      },
      {
        "frame": 80,
        "time": 2.6667,
        "weight": 0.7723
      },
      {
        "frame": 81,
        "time": 2.7,
        "weight": 0.727
      },
      {
        "frame": 82,
        "time": 2.7333,
        "weight": 0.6716
      },
      {
        "frame": 83,
        "time": 2.7667,
        "weight": 0.6077
      },
      {
        "frame": 84,
        "time": 2.8,
        "weight": 0.5373
      },
      {
        "frame": 85,
        "time": 2.8333,
        "weight": 0.4629
      },
      {
        "frame": 86,
        "time": 2.8667,
        "weight": 0.3871
      },
      {
        "frame": 87,
        "time": 2.9,
        "weight": 0.3127
      },
      {
        "frame": 88,
        "time": 2.9333,
        "weight": 0.2423
      },
      {
        "frame": 89,
        "time": 2.9667,
        "weight": 0.1784
      },
      {
        "frame": 90,
        "time": 3,
        "weight": 0.123
      },
      {
        "frame": 91,
        "time": 3.0333,
        "weight": 0.0777
      },
      {
        "frame": 92,
        "time": 3.0667,
        "weight": 0.0432
      },
      {
        "frame": 93,
        "time": 3.1,
        "weight": 0.0198
      },
      {
        "frame": 94,
        "time": 3.1333,
        "weight": 0.0063
      },
      {
        "frame": 95,
        "time": 3.1667,
        "weight": 0.0009
      },
      {
        "frame": 96,
        "time": 3.2,
        "weight": 0
      }
    ]
  },
  "cameras": [],
  "ik": []
};

export default gentleWaveMotion;
