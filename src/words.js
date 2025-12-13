const words = [
  {
    "word": "abduction",
    "no": 621,
    "valence": {
      "mean": 2.76,
      "sd": 2.06
    },
    "arousal": {
      "mean": 5.53,
      "sd": 2.43
    },
    "dominance": {
      "mean": 3.49,
      "sd": 2.38
    },
    "word_frequency": 1,
    "hint_word": "kidnapping"
  },
  {
    "word": "abortion",
    "no": 622,
    "valence": {
      "mean": 3.5,
      "sd": 2.3
    },
    "arousal": {
      "mean": 5.39,
      "sd": 2.8
    },
    "dominance": {
      "mean": 4.59,
      "sd": 2.54
    },
    "word_frequency": 6,
    "hint_word": "termination"
  },
  {
    "word": "absurd",
    "no": 623,
    "valence": {
      "mean": 4.26,
      "sd": 1.82
    },
    "arousal": {
      "mean": 4.36,
      "sd": 2.2
    },
    "dominance": {
      "mean": 4.73,
      "sd": 1.72
    },
    "word_frequency": 17,
    "hint_word": "ridiculous"
  },
  {
    "word": "abundance",
    "no": 624,
    "valence": {
      "mean": 6.59,
      "sd": 2.01
    },
    "arousal": {
      "mean": 5.51,
      "sd": 2.63
    },
    "dominance": {
      "mean": 5.8,
      "sd": 2.16
    },
    "word_frequency": 13,
    "hint_word": "plenty"
  },
  {
    "word": "abuse",
    "no": 1,
    "valence": {
      "mean": 1.8,
      "sd": 1.23
    },
    "arousal": {
      "mean": 6.83,
      "sd": 2.7
    },
    "dominance": {
      "mean": 3.69,
      "sd": 2.94
    },
    "word_frequency": 18,
    "hint_word": "mistreatment"
  },
  {
    "word": "acceptance",
    "no": 625,
    "valence": {
      "mean": 7.98,
      "sd": 1.42
    },
    "arousal": {
      "mean": 5.4,
      "sd": 2.7
    },
    "dominance": {
      "mean": 6.64,
      "sd": 1.91
    },
    "word_frequency": 49,
    "hint_word": "approval"
  },
  {
    "word": "accident",
    "no": 2,
    "valence": {
      "mean": 2.05,
      "sd": 1.19
    },
    "arousal": {
      "mean": 6.26,
      "sd": 2.87
    },
    "dominance": {
      "mean": 3.76,
      "sd": 2.22
    },
    "word_frequency": 33,
    "hint_word": "mishap"
  },
  {
    "word": "ace",
    "no": 626,
    "valence": {
      "mean": 6.88,
      "sd": 1.93
    },
    "arousal": {
      "mean": 5.5,
      "sd": 2.66
    },
    "dominance": {
      "mean": 6.39,
      "sd": 2.31
    },
    "word_frequency": 15,
    "hint_word": "acelike"
  },
  {
    "word": "ache",
    "no": 627,
    "valence": {
      "mean": 2.46,
      "sd": 1.52
    },
    "arousal": {
      "mean": 5,
      "sd": 2.45
    },
    "dominance": {
      "mean": 3.54,
      "sd": 1.73
    },
    "word_frequency": 4,
    "hint_word": "aches"
  },
  {
    "word": "achievement",
    "no": 3,
    "valence": {
      "mean": 7.89,
      "sd": 1.38
    },
    "arousal": {
      "mean": 5.53,
      "sd": 2.81
    },
    "dominance": {
      "mean": 6.56,
      "sd": 2.35
    },
    "word_frequency": 65,
    "hint_word": "success"
  },
  {
    "word": "activate",
    "no": 4,
    "valence": {
      "mean": 5.46,
      "sd": 0.98
    },
    "arousal": {
      "mean": 4.86,
      "sd": 2.56
    },
    "dominance": {
      "mean": 5.43,
      "sd": 1.84
    },
    "word_frequency": 2,
    "hint_word": "enable"
  },
  {
    "word": "addict",
    "no": 581,
    "valence": {
      "mean": 2.48,
      "sd": 2.08
    },
    "arousal": {
      "mean": 5.66,
      "sd": 2.26
    },
    "dominance": {
      "mean": 3.72,
      "sd": 2.54
    },
    "word_frequency": 1,
    "hint_word": "dependent"
  },
  {
    "word": "addicted",
    "no": 628,
    "valence": {
      "mean": 2.51,
      "sd": 1.42
    },
    "arousal": {
      "mean": 4.81,
      "sd": 2.46
    },
    "dominance": {
      "mean": 3.46,
      "sd": 2.23
    },
    "word_frequency": 3,
    "hint_word": "addicting"
  },
  {
    "word": "admired",
    "no": 5,
    "valence": {
      "mean": 7.74,
      "sd": 1.84
    },
    "arousal": {
      "mean": 6.11,
      "sd": 2.36
    },
    "dominance": {
      "mean": 7.53,
      "sd": 1.94
    },
    "word_frequency": 17,
    "hint_word": "respected"
  },
  {
    "word": "adorable",
    "no": 6,
    "valence": {
      "mean": 7.81,
      "sd": 1.24
    },
    "arousal": {
      "mean": 5.12,
      "sd": 2.71
    },
    "dominance": {
      "mean": 5.74,
      "sd": 2.48
    },
    "word_frequency": 3,
    "hint_word": "cute"
  },
  {
    "word": "adult",
    "no": 546,
    "valence": {
      "mean": 6.49,
      "sd": 1.5
    },
    "arousal": {
      "mean": 4.76,
      "sd": 1.95
    },
    "dominance": {
      "mean": 5.75,
      "sd": 2.21
    },
    "word_frequency": 25,
    "hint_word": "grownup"
  },
  {
    "word": "advantage",
    "no": 629,
    "valence": {
      "mean": 6.95,
      "sd": 1.85
    },
    "arousal": {
      "mean": 4.76,
      "sd": 2.18
    },
    "dominance": {
      "mean": 6.36,
      "sd": 2.23
    },
    "word_frequency": 73,
    "hint_word": "benefit"
  },
  {
    "word": "adventure",
    "no": 630,
    "valence": {
      "mean": 7.6,
      "sd": 1.5
    },
    "arousal": {
      "mean": 6.98,
      "sd": 2.15
    },
    "dominance": {
      "mean": 6.46,
      "sd": 1.67
    },
    "word_frequency": 14,
    "hint_word": "quest"
  },
  {
    "word": "affection",
    "no": 7,
    "valence": {
      "mean": 8.39,
      "sd": 0.86
    },
    "arousal": {
      "mean": 6.21,
      "sd": 2.75
    },
    "dominance": {
      "mean": 6.08,
      "sd": 2.22
    },
    "word_frequency": 18,
    "hint_word": "love"
  },
  {
    "word": "afraid",
    "no": 8,
    "valence": {
      "mean": 2,
      "sd": 1.28
    },
    "arousal": {
      "mean": 6.67,
      "sd": 2.54
    },
    "dominance": {
      "mean": 3.98,
      "sd": 2.63
    },
    "word_frequency": 57,
    "hint_word": "scared"
  },
  {
    "word": "aggressive",
    "no": 9,
    "valence": {
      "mean": 5.1,
      "sd": 1.68
    },
    "arousal": {
      "mean": 5.83,
      "sd": 2.33
    },
    "dominance": {
      "mean": 5.59,
      "sd": 2.4
    },
    "word_frequency": 17,
    "hint_word": "hostile"
  },
  {
    "word": "agility",
    "no": 22,
    "valence": {
      "mean": 6.46,
      "sd": 1.57
    },
    "arousal": {
      "mean": 4.85,
      "sd": 1.8
    },
    "dominance": {
      "mean": 5.87,
      "sd": 1.52
    },
    "word_frequency": 3,
    "hint_word": "speed"
  },
  {
    "word": "agony",
    "no": 10,
    "valence": {
      "mean": 2.43,
      "sd": 2.17
    },
    "arousal": {
      "mean": 6.06,
      "sd": 2.67
    },
    "dominance": {
      "mean": 4.02,
      "sd": 2.49
    },
    "word_frequency": 9,
    "hint_word": "pain"
  },
  {
    "word": "agreement",
    "no": 631,
    "valence": {
      "mean": 7.08,
      "sd": 1.59
    },
    "arousal": {
      "mean": 5.02,
      "sd": 2.24
    },
    "dominance": {
      "mean": 6.22,
      "sd": 1.85
    },
    "word_frequency": 106,
    "hint_word": "contract"
  },
  {
    "word": "air",
    "no": 632,
    "valence": {
      "mean": 6.34,
      "sd": 1.56
    },
    "arousal": {
      "mean": 4.12,
      "sd": 2.3
    },
    "dominance": {
      "mean": 5.1,
      "sd": 1.56
    },
    "word_frequency": 257,
    "hint_word": "atmosphere"
  },
  {
    "word": "alcoholic",
    "no": 582,
    "valence": {
      "mean": 2.84,
      "sd": 2.34
    },
    "arousal": {
      "mean": 5.69,
      "sd": 2.36
    },
    "dominance": {
      "mean": 4.45,
      "sd": 2.56
    },
    "word_frequency": 3,
    "hint_word": "drunkard"
  },
  {
    "word": "alert",
    "no": 11,
    "valence": {
      "mean": 6.2,
      "sd": 1.76
    },
    "arousal": {
      "mean": 6.85,
      "sd": 2.53
    },
    "dominance": {
      "mean": 5.96,
      "sd": 2.24
    },
    "word_frequency": 33,
    "hint_word": "aware"
  },
  {
    "word": "alien",
    "no": 633,
    "valence": {
      "mean": 5.6,
      "sd": 1.82
    },
    "arousal": {
      "mean": 5.45,
      "sd": 2.15
    },
    "dominance": {
      "mean": 4.64,
      "sd": 2.07
    },
    "word_frequency": 16,
    "hint_word": "extraterrestrial"
  },
  {
    "word": "alimony",
    "no": 634,
    "valence": {
      "mean": 3.95,
      "sd": 2
    },
    "arousal": {
      "mean": 4.3,
      "sd": 2.29
    },
    "dominance": {
      "mean": 4.63,
      "sd": 2.3
    },
    "word_frequency": 2,
    "hint_word": "support"
  },
  {
    "word": "alive",
    "no": 635,
    "valence": {
      "mean": 7.25,
      "sd": 2.22
    },
    "arousal": {
      "mean": 5.5,
      "sd": 2.74
    },
    "dominance": {
      "mean": 6.39,
      "sd": 2.15
    },
    "word_frequency": 57,
    "hint_word": "living"
  },
  {
    "word": "allergy",
    "no": 636,
    "valence": {
      "mean": 3.07,
      "sd": 1.64
    },
    "arousal": {
      "mean": 4.64,
      "sd": 2.34
    },
    "dominance": {
      "mean": 3.21,
      "sd": 1.77
    },
    "word_frequency": 1,
    "hint_word": "reaction"
  },
  {
    "word": "alley",
    "no": 637,
    "valence": {
      "mean": 4.48,
      "sd": 1.97
    },
    "arousal": {
      "mean": 4.91,
      "sd": 2.42
    },
    "dominance": {
      "mean": 4,
      "sd": 1.7
    },
    "word_frequency": 8,
    "hint_word": "lane"
  },
  {
    "word": "alone",
    "no": 12,
    "valence": {
      "mean": 2.41,
      "sd": 1.77
    },
    "arousal": {
      "mean": 4.83,
      "sd": 2.66
    },
    "dominance": {
      "mean": 3.7,
      "sd": 2.42
    },
    "word_frequency": 195,
    "hint_word": "solitary"
  },
  {
    "word": "aloof",
    "no": 13,
    "valence": {
      "mean": 4.9,
      "sd": 1.92
    },
    "arousal": {
      "mean": 4.28,
      "sd": 2.1
    },
    "dominance": {
      "mean": 4.69,
      "sd": 1.92
    },
    "word_frequency": 5,
    "hint_word": "distant"
  },
  {
    "word": "ambition",
    "no": 14,
    "valence": {
      "mean": 7.04,
      "sd": 1.98
    },
    "arousal": {
      "mean": 5.61,
      "sd": 2.92
    },
    "dominance": {
      "mean": 6.93,
      "sd": 2.07
    },
    "word_frequency": 19,
    "hint_word": "drive"
  },
  {
    "word": "ambulance",
    "no": 15,
    "valence": {
      "mean": 2.47,
      "sd": 1.5
    },
    "arousal": {
      "mean": 7.33,
      "sd": 1.96
    },
    "dominance": {
      "mean": 3.22,
      "sd": 2.29
    },
    "word_frequency": 6,
    "hint_word": "emergency"
  },
  {
    "word": "angel",
    "no": 16,
    "valence": {
      "mean": 7.53,
      "sd": 1.58
    },
    "arousal": {
      "mean": 4.83,
      "sd": 2.63
    },
    "dominance": {
      "mean": 4.97,
      "sd": 2.34
    },
    "word_frequency": 18,
    "hint_word": "seraph"
  },
  {
    "word": "anger",
    "no": 17,
    "valence": {
      "mean": 2.34,
      "sd": 1.32
    },
    "arousal": {
      "mean": 7.63,
      "sd": 1.91
    },
    "dominance": {
      "mean": 5.5,
      "sd": 2.82
    },
    "word_frequency": 48,
    "hint_word": "rage"
  },
  {
    "word": "angry",
    "no": 18,
    "valence": {
      "mean": 2.85,
      "sd": 1.7
    },
    "arousal": {
      "mean": 7.17,
      "sd": 2.07
    },
    "dominance": {
      "mean": 5.55,
      "sd": 2.74
    },
    "word_frequency": 45,
    "hint_word": "furious"
  },
  {
    "word": "anguished",
    "no": 19,
    "valence": {
      "mean": 2.12,
      "sd": 1.56
    },
    "arousal": {
      "mean": 5.33,
      "sd": 2.69
    },
    "dominance": {
      "mean": 3.45,
      "sd": 2.37
    },
    "word_frequency": 2,
    "hint_word": "tormented"
  },
  {
    "word": "ankle",
    "no": 638,
    "valence": {
      "mean": 5.27,
      "sd": 1.54
    },
    "arousal": {
      "mean": 4.16,
      "sd": 2.03
    },
    "dominance": {
      "mean": 4.77,
      "sd": 1.74
    },
    "word_frequency": 8,
    "hint_word": "joint"
  },
  {
    "word": "annoy",
    "no": 20,
    "valence": {
      "mean": 2.74,
      "sd": 1.81
    },
    "arousal": {
      "mean": 6.49,
      "sd": 2.17
    },
    "dominance": {
      "mean": 5.09,
      "sd": 2.04
    },
    "word_frequency": 2,
    "hint_word": "irritate"
  },
  {
    "word": "answer",
    "no": 639,
    "valence": {
      "mean": 6.63,
      "sd": 1.68
    },
    "arousal": {
      "mean": 5.41,
      "sd": 2.43
    },
    "dominance": {
      "mean": 5.85,
      "sd": 1.88
    },
    "word_frequency": 152,
    "hint_word": "response"
  },
  {
    "word": "anxious",
    "no": 21,
    "valence": {
      "mean": 4.81,
      "sd": 1.98
    },
    "arousal": {
      "mean": 6.92,
      "sd": 1.81
    },
    "dominance": {
      "mean": 5.33,
      "sd": 1.82
    },
    "word_frequency": 29,
    "hint_word": "nervous"
  },
  {
    "word": "applause",
    "no": 640,
    "valence": {
      "mean": 7.5,
      "sd": 1.5
    },
    "arousal": {
      "mean": 5.8,
      "sd": 2.79
    },
    "dominance": {
      "mean": 6.48,
      "sd": 2.11
    },
    "word_frequency": 14,
    "hint_word": "cheers"
  },
  {
    "word": "appliance",
    "no": 641,
    "valence": {
      "mean": 5.1,
      "sd": 1.21
    },
    "arousal": {
      "mean": 4.05,
      "sd": 2.06
    },
    "dominance": {
      "mean": 5.05,
      "sd": 1.34
    },
    "word_frequency": 5,
    "hint_word": "device"
  },
  {
    "word": "arm",
    "no": 642,
    "valence": {
      "mean": 5.34,
      "sd": 1.82
    },
    "arousal": {
      "mean": 3.59,
      "sd": 2.4
    },
    "dominance": {
      "mean": 5.07,
      "sd": 1.5
    },
    "word_frequency": 94,
    "hint_word": "limb"
  },
  {
    "word": "army",
    "no": 23,
    "valence": {
      "mean": 4.72,
      "sd": 1.75
    },
    "arousal": {
      "mean": 5.03,
      "sd": 2.03
    },
    "dominance": {
      "mean": 5.03,
      "sd": 2.45
    },
    "word_frequency": 132,
    "hint_word": "military"
  },
  {
    "word": "aroused",
    "no": 24,
    "valence": {
      "mean": 7.97,
      "sd": 1
    },
    "arousal": {
      "mean": 6.63,
      "sd": 2.7
    },
    "dominance": {
      "mean": 6.14,
      "sd": 1.97
    },
    "word_frequency": 20,
    "hint_word": "excited"
  },
  {
    "word": "arrogant",
    "no": 25,
    "valence": {
      "mean": 3.69,
      "sd": 2.4
    },
    "arousal": {
      "mean": 5.65,
      "sd": 2.23
    },
    "dominance": {
      "mean": 5.14,
      "sd": 2.71
    },
    "word_frequency": 2,
    "hint_word": "conceited"
  },
  {
    "word": "art",
    "no": 643,
    "valence": {
      "mean": 6.68,
      "sd": 2.1
    },
    "arousal": {
      "mean": 4.86,
      "sd": 2.88
    },
    "dominance": {
      "mean": 5.3,
      "sd": 2.33
    },
    "word_frequency": 208,
    "hint_word": "painting"
  },
  {
    "word": "assassin",
    "no": 26,
    "valence": {
      "mean": 3.09,
      "sd": 2.09
    },
    "arousal": {
      "mean": 6.28,
      "sd": 2.53
    },
    "dominance": {
      "mean": 4.33,
      "sd": 2.68
    },
    "word_frequency": 6,
    "hint_word": "killer"
  },
  {
    "word": "assault",
    "no": 27,
    "valence": {
      "mean": 2.03,
      "sd": 1.55
    },
    "arousal": {
      "mean": 7.51,
      "sd": 2.28
    },
    "dominance": {
      "mean": 3.94,
      "sd": 3.1
    },
    "word_frequency": 15,
    "hint_word": "attack"
  },
  {
    "word": "astonished",
    "no": 28,
    "valence": {
      "mean": 6.56,
      "sd": 1.61
    },
    "arousal": {
      "mean": 6.58,
      "sd": 2.22
    },
    "dominance": {
      "mean": 5.16,
      "sd": 1.79
    },
    "word_frequency": 6,
    "hint_word": "amazed"
  },
  {
    "word": "astronaut",
    "no": 501,
    "valence": {
      "mean": 6.66,
      "sd": 1.6
    },
    "arousal": {
      "mean": 5.28,
      "sd": 2.11
    },
    "dominance": {
      "mean": 5.2,
      "sd": 1.95
    },
    "word_frequency": 2,
    "hint_word": "cosmonaut"
  },
  {
    "word": "athletics",
    "no": 644,
    "valence": {
      "mean": 6.61,
      "sd": 2.08
    },
    "arousal": {
      "mean": 6.1,
      "sd": 2.29
    },
    "dominance": {
      "mean": 6.12,
      "sd": 2.12
    },
    "word_frequency": 9,
    "hint_word": "sports"
  },
  {
    "word": "autumn",
    "no": 29,
    "valence": {
      "mean": 6.3,
      "sd": 2.14
    },
    "arousal": {
      "mean": 4.51,
      "sd": 2.5
    },
    "dominance": {
      "mean": 5.15,
      "sd": 1.85
    },
    "word_frequency": 22,
    "hint_word": "fall"
  },
  {
    "word": "avalanche",
    "no": 645,
    "valence": {
      "mean": 3.29,
      "sd": 1.95
    },
    "arousal": {
      "mean": 5.54,
      "sd": 2.37
    },
    "dominance": {
      "mean": 3.61,
      "sd": 2
    },
    "word_frequency": 1,
    "hint_word": "snowslide"
  },
  {
    "word": "avenue",
    "no": 646,
    "valence": {
      "mean": 5.5,
      "sd": 1.37
    },
    "arousal": {
      "mean": 4.12,
      "sd": 2.01
    },
    "dominance": {
      "mean": 5.4,
      "sd": 1.53
    },
    "word_frequency": 46,
    "hint_word": "boulevard"
  },
  {
    "word": "awed",
    "no": 30,
    "valence": {
      "mean": 6.7,
      "sd": 1.38
    },
    "arousal": {
      "mean": 5.74,
      "sd": 2.31
    },
    "dominance": {
      "mean": 5.3,
      "sd": 2.03
    },
    "word_frequency": 5,
    "hint_word": "wonderstruck"
  },
  {
    "word": "baby",
    "no": 31,
    "valence": {
      "mean": 8.22,
      "sd": 1.2
    },
    "arousal": {
      "mean": 5.53,
      "sd": 2.8
    },
    "dominance": {
      "mean": 5,
      "sd": 2.8
    },
    "word_frequency": 62,
    "hint_word": "infant"
  },
  {
    "word": "bake",
    "no": 647,
    "valence": {
      "mean": 6.17,
      "sd": 1.71
    },
    "arousal": {
      "mean": 5.1,
      "sd": 2.3
    },
    "dominance": {
      "mean": 5.49,
      "sd": 1.88
    },
    "word_frequency": 12,
    "hint_word": "cook"
  },
  {
    "word": "bandage",
    "no": 648,
    "valence": {
      "mean": 4.54,
      "sd": 1.75
    },
    "arousal": {
      "mean": 3.9,
      "sd": 2.07
    },
    "dominance": {
      "mean": 4.52,
      "sd": 1.89
    },
    "word_frequency": 4,
    "hint_word": "dressing"
  },
  {
    "word": "bankrupt",
    "no": 32,
    "valence": {
      "mean": 2,
      "sd": 1.31
    },
    "arousal": {
      "mean": 6.21,
      "sd": 2.79
    },
    "dominance": {
      "mean": 3.27,
      "sd": 2.39
    },
    "word_frequency": 5,
    "hint_word": "insolvent"
  },
  {
    "word": "banner",
    "no": 649,
    "valence": {
      "mean": 5.4,
      "sd": 0.83
    },
    "arousal": {
      "mean": 3.83,
      "sd": 1.95
    },
    "dominance": {
      "mean": 4.8,
      "sd": 1.57
    },
    "word_frequency": 8,
    "hint_word": "flag"
  },
  {
    "word": "bar",
    "no": 650,
    "valence": {
      "mean": 6.42,
      "sd": 2.05
    },
    "arousal": {
      "mean": 5,
      "sd": 2.83
    },
    "dominance": {
      "mean": 5.47,
      "sd": 1.94
    },
    "word_frequency": 82,
    "hint_word": "pub"
  },
  {
    "word": "barrel",
    "no": 651,
    "valence": {
      "mean": 5.05,
      "sd": 1.46
    },
    "arousal": {
      "mean": 3.36,
      "sd": 2.28
    },
    "dominance": {
      "mean": 4.89,
      "sd": 1.57
    },
    "word_frequency": 24,
    "hint_word": "cask"
  },
  {
    "word": "basket",
    "no": 547,
    "valence": {
      "mean": 5.45,
      "sd": 1.15
    },
    "arousal": {
      "mean": 3.63,
      "sd": 2.02
    },
    "dominance": {
      "mean": 5.76,
      "sd": 1.45
    },
    "word_frequency": 17,
    "hint_word": "container"
  },
  {
    "word": "bastard",
    "no": 33,
    "valence": {
      "mean": 3.36,
      "sd": 2.16
    },
    "arousal": {
      "mean": 6.07,
      "sd": 2.15
    },
    "dominance": {
      "mean": 4.17,
      "sd": 2.4
    },
    "word_frequency": 12,
    "hint_word": "jerk"
  },
  {
    "word": "bath",
    "no": 502,
    "valence": {
      "mean": 7.33,
      "sd": 1.45
    },
    "arousal": {
      "mean": 4.16,
      "sd": 2.31
    },
    "dominance": {
      "mean": 6.41,
      "sd": 1.87
    },
    "word_frequency": 26,
    "hint_word": "soak"
  },
  {
    "word": "bathroom",
    "no": 548,
    "valence": {
      "mean": 5.55,
      "sd": 1.36
    },
    "arousal": {
      "mean": 3.88,
      "sd": 1.72
    },
    "dominance": {
      "mean": 5.65,
      "sd": 1.59
    },
    "word_frequency": 18,
    "hint_word": "restroom"
  },
  {
    "word": "bathtub",
    "no": 652,
    "valence": {
      "mean": 6.69,
      "sd": 1.57
    },
    "arousal": {
      "mean": 4.36,
      "sd": 2.59
    },
    "dominance": {
      "mean": 5.76,
      "sd": 1.76
    },
    "word_frequency": 4,
    "hint_word": "tub"
  },
  {
    "word": "beach",
    "no": 34,
    "valence": {
      "mean": 8.03,
      "sd": 1.59
    },
    "arousal": {
      "mean": 5.53,
      "sd": 3.07
    },
    "dominance": {
      "mean": 5.44,
      "sd": 2.52
    },
    "word_frequency": 61,
    "hint_word": "shore"
  },
  {
    "word": "beast",
    "no": 653,
    "valence": {
      "mean": 4.23,
      "sd": 2.41
    },
    "arousal": {
      "mean": 5.57,
      "sd": 2.61
    },
    "dominance": {
      "mean": 4.89,
      "sd": 2.29
    },
    "word_frequency": 7,
    "hint_word": "monster"
  },
  {
    "word": "beautiful",
    "no": 654,
    "valence": {
      "mean": 7.6,
      "sd": 1.64
    },
    "arousal": {
      "mean": 6.17,
      "sd": 2.34
    },
    "dominance": {
      "mean": 6.29,
      "sd": 1.81
    },
    "word_frequency": 127,
    "hint_word": "gorgeous"
  },
  {
    "word": "beauty",
    "no": 35,
    "valence": {
      "mean": 7.82,
      "sd": 1.16
    },
    "arousal": {
      "mean": 4.95,
      "sd": 2.57
    },
    "dominance": {
      "mean": 5.53,
      "sd": 2.1
    },
    "word_frequency": 71,
    "hint_word": "loveliness"
  },
  {
    "word": "bed",
    "no": 549,
    "valence": {
      "mean": 7.51,
      "sd": 1.38
    },
    "arousal": {
      "mean": 3.61,
      "sd": 2.56
    },
    "dominance": {
      "mean": 6.88,
      "sd": 1.78
    },
    "word_frequency": 127,
    "hint_word": "mattress"
  },
  {
    "word": "bees",
    "no": 583,
    "valence": {
      "mean": 3.2,
      "sd": 2.07
    },
    "arousal": {
      "mean": 6.51,
      "sd": 2.14
    },
    "dominance": {
      "mean": 4.16,
      "sd": 2.11
    },
    "word_frequency": 15,
    "hint_word": "wasps"
  },
  {
    "word": "beggar",
    "no": 36,
    "valence": {
      "mean": 3.22,
      "sd": 2.02
    },
    "arousal": {
      "mean": 4.91,
      "sd": 2.45
    },
    "dominance": {
      "mean": 4.09,
      "sd": 2.38
    },
    "word_frequency": 2,
    "hint_word": "panhandler"
  },
  {
    "word": "bench",
    "no": 655,
    "valence": {
      "mean": 4.61,
      "sd": 1.4
    },
    "arousal": {
      "mean": 3.59,
      "sd": 2.07
    },
    "dominance": {
      "mean": 4.68,
      "sd": 1.38
    },
    "word_frequency": 35,
    "hint_word": "seat"
  },
  {
    "word": "bereavement",
    "no": 656,
    "valence": {
      "mean": 4.57,
      "sd": 1.7
    },
    "arousal": {
      "mean": 4.2,
      "sd": 2.15
    },
    "dominance": {
      "mean": 4.33,
      "sd": 1.73
    },
    "word_frequency": 4,
    "hint_word": "grief"
  },
  {
    "word": "betray",
    "no": 37,
    "valence": {
      "mean": 1.68,
      "sd": 1.02
    },
    "arousal": {
      "mean": 7.24,
      "sd": 2.06
    },
    "dominance": {
      "mean": 4.92,
      "sd": 2.97
    },
    "word_frequency": 4,
    "hint_word": "deceive"
  },
  {
    "word": "beverage",
    "no": 657,
    "valence": {
      "mean": 6.83,
      "sd": 1.48
    },
    "arousal": {
      "mean": 5.21,
      "sd": 2.46
    },
    "dominance": {
      "mean": 5.63,
      "sd": 2.17
    },
    "word_frequency": 5,
    "hint_word": "drink"
  },
  {
    "word": "bird",
    "no": 38,
    "valence": {
      "mean": 7.27,
      "sd": 1.36
    },
    "arousal": {
      "mean": 3.17,
      "sd": 2.23
    },
    "dominance": {
      "mean": 4.42,
      "sd": 2.26
    },
    "word_frequency": 31,
    "hint_word": "avian"
  },
  {
    "word": "birthday",
    "no": 39,
    "valence": {
      "mean": 7.84,
      "sd": 1.92
    },
    "arousal": {
      "mean": 6.68,
      "sd": 2.11
    },
    "dominance": {
      "mean": 5.89,
      "sd": 2.61
    },
    "word_frequency": 18,
    "hint_word": "anniversary"
  },
  {
    "word": "black",
    "no": 543,
    "valence": {
      "mean": 5.39,
      "sd": 1.8
    },
    "arousal": {
      "mean": 4.61,
      "sd": 2.24
    },
    "dominance": {
      "mean": 5.14,
      "sd": 1.79
    },
    "word_frequency": 203,
    "hint_word": "ebony"
  },
  {
    "word": "blackmail",
    "no": 40,
    "valence": {
      "mean": 2.95,
      "sd": 1.95
    },
    "arousal": {
      "mean": 6.03,
      "sd": 2.7
    },
    "dominance": {
      "mean": 3.54,
      "sd": 2.67
    },
    "word_frequency": 2,
    "hint_word": "extortion"
  },
  {
    "word": "bland",
    "no": 658,
    "valence": {
      "mean": 4.1,
      "sd": 1.08
    },
    "arousal": {
      "mean": 3.29,
      "sd": 1.89
    },
    "dominance": {
      "mean": 4.88,
      "sd": 1.27
    },
    "word_frequency": 3,
    "hint_word": "tasteless"
  },
  {
    "word": "blase",
    "no": 41,
    "valence": {
      "mean": 4.89,
      "sd": 1.16
    },
    "arousal": {
      "mean": 3.94,
      "sd": 1.76
    },
    "dominance": {
      "mean": 4.57,
      "sd": 1.44
    },
    "word_frequency": 7,
    "hint_word": "indifferent"
  },
  {
    "word": "blasphemy",
    "no": 659,
    "valence": {
      "mean": 3.75,
      "sd": 2.26
    },
    "arousal": {
      "mean": 4.93,
      "sd": 2.34
    },
    "dominance": {
      "mean": 4.75,
      "sd": 1.59
    },
    "word_frequency": 4,
    "hint_word": "profanity"
  },
  {
    "word": "bless",
    "no": 42,
    "valence": {
      "mean": 7.19,
      "sd": 1.69
    },
    "arousal": {
      "mean": 4.05,
      "sd": 2.59
    },
    "dominance": {
      "mean": 5.52,
      "sd": 2.22
    },
    "word_frequency": 9,
    "hint_word": "sanctify"
  },
  {
    "word": "blind",
    "no": 43,
    "valence": {
      "mean": 3.05,
      "sd": 1.99
    },
    "arousal": {
      "mean": 4.39,
      "sd": 2.36
    },
    "dominance": {
      "mean": 3.28,
      "sd": 1.91
    },
    "word_frequency": 47,
    "hint_word": "sightless"
  },
  {
    "word": "bliss",
    "no": 660,
    "valence": {
      "mean": 6.95,
      "sd": 2.24
    },
    "arousal": {
      "mean": 4.41,
      "sd": 2.95
    },
    "dominance": {
      "mean": 6.12,
      "sd": 2.15
    },
    "word_frequency": 4,
    "hint_word": "ecstasy"
  },
  {
    "word": "blister",
    "no": 661,
    "valence": {
      "mean": 2.88,
      "sd": 1.75
    },
    "arousal": {
      "mean": 4.1,
      "sd": 2.34
    },
    "dominance": {
      "mean": 3.98,
      "sd": 1.9
    },
    "word_frequency": 3,
    "hint_word": "bubble"
  },
  {
    "word": "blond",
    "no": 662,
    "valence": {
      "mean": 6.43,
      "sd": 2.04
    },
    "arousal": {
      "mean": 5.07,
      "sd": 2.7
    },
    "dominance": {
      "mean": 5.74,
      "sd": 1.67
    },
    "word_frequency": 11,
    "hint_word": "fair"
  },
  {
    "word": "bloody",
    "no": 584,
    "valence": {
      "mean": 2.9,
      "sd": 1.98
    },
    "arousal": {
      "mean": 6.41,
      "sd": 2
    },
    "dominance": {
      "mean": 3.96,
      "sd": 1.89
    },
    "word_frequency": 8,
    "hint_word": "gory"
  },
  {
    "word": "blossom",
    "no": 44,
    "valence": {
      "mean": 7.26,
      "sd": 1.18
    },
    "arousal": {
      "mean": 5.03,
      "sd": 2.65
    },
    "dominance": {
      "mean": 5.53,
      "sd": 2.21
    },
    "word_frequency": 7,
    "hint_word": "flower"
  },
  {
    "word": "blubber",
    "no": 663,
    "valence": {
      "mean": 3.52,
      "sd": 1.99
    },
    "arousal": {
      "mean": 4.57,
      "sd": 2.38
    },
    "dominance": {
      "mean": 3.86,
      "sd": 1.97
    },
    "word_frequency": 1,
    "hint_word": "whale"
  },
  {
    "word": "blue",
    "no": 544,
    "valence": {
      "mean": 6.76,
      "sd": 1.78
    },
    "arousal": {
      "mean": 4.31,
      "sd": 2.2
    },
    "dominance": {
      "mean": 5.63,
      "sd": 1.64
    },
    "word_frequency": 143,
    "hint_word": "azure"
  },
  {
    "word": "board",
    "no": 664,
    "valence": {
      "mean": 4.82,
      "sd": 1.23
    },
    "arousal": {
      "mean": 3.36,
      "sd": 2.12
    },
    "dominance": {
      "mean": 4.98,
      "sd": 1.77
    },
    "word_frequency": 239,
    "hint_word": "plank"
  },
  {
    "word": "body",
    "no": 665,
    "valence": {
      "mean": 5.55,
      "sd": 2.37
    },
    "arousal": {
      "mean": 5.52,
      "sd": 2.63
    },
    "dominance": {
      "mean": 5.34,
      "sd": 2.12
    },
    "word_frequency": 276,
    "hint_word": "corpse"
  },
  {
    "word": "bold",
    "no": 45,
    "valence": {
      "mean": 6.8,
      "sd": 1.61
    },
    "arousal": {
      "mean": 5.6,
      "sd": 2.21
    },
    "dominance": {
      "mean": 6.67,
      "sd": 1.81
    },
    "word_frequency": 21,
    "hint_word": "brave"
  },
  {
    "word": "bomb",
    "no": 46,
    "valence": {
      "mean": 2.1,
      "sd": 1.19
    },
    "arousal": {
      "mean": 7.15,
      "sd": 2.4
    },
    "dominance": {
      "mean": 4.54,
      "sd": 2.88
    },
    "word_frequency": 36,
    "hint_word": "explosive"
  },
  {
    "word": "book",
    "no": 47,
    "valence": {
      "mean": 5.72,
      "sd": 1.54
    },
    "arousal": {
      "mean": 4.17,
      "sd": 2.49
    },
    "dominance": {
      "mean": 5.3,
      "sd": 2.05
    },
    "word_frequency": 193,
    "hint_word": "novel"
  },
  {
    "word": "bored",
    "no": 48,
    "valence": {
      "mean": 2.95,
      "sd": 1.35
    },
    "arousal": {
      "mean": 2.83,
      "sd": 2.31
    },
    "dominance": {
      "mean": 4.11,
      "sd": 1.7
    },
    "word_frequency": 14,
    "hint_word": "tedious"
  },
  {
    "word": "bottle",
    "no": 666,
    "valence": {
      "mean": 6.15,
      "sd": 1.49
    },
    "arousal": {
      "mean": 4.79,
      "sd": 2.44
    },
    "dominance": {
      "mean": 4.78,
      "sd": 1.65
    },
    "word_frequency": 76,
    "hint_word": "flask"
  },
  {
    "word": "bouquet",
    "no": 667,
    "valence": {
      "mean": 7.02,
      "sd": 1.84
    },
    "arousal": {
      "mean": 5.46,
      "sd": 2.47
    },
    "dominance": {
      "mean": 6.15,
      "sd": 1.8
    },
    "word_frequency": 4,
    "hint_word": "flowers"
  },
  {
    "word": "bowl",
    "no": 49,
    "valence": {
      "mean": 5.33,
      "sd": 1.33
    },
    "arousal": {
      "mean": 3.47,
      "sd": 2.12
    },
    "dominance": {
      "mean": 4.69,
      "sd": 1.67
    },
    "word_frequency": 23,
    "hint_word": "dish"
  },
  {
    "word": "boxer",
    "no": 585,
    "valence": {
      "mean": 5.51,
      "sd": 1.8
    },
    "arousal": {
      "mean": 5.12,
      "sd": 2.26
    },
    "dominance": {
      "mean": 5.1,
      "sd": 1.64
    },
    "word_frequency": 1,
    "hint_word": "fighter"
  },
  {
    "word": "boy",
    "no": 50,
    "valence": {
      "mean": 6.32,
      "sd": 1.6
    },
    "arousal": {
      "mean": 4.58,
      "sd": 2.37
    },
    "dominance": {
      "mean": 5.34,
      "sd": 2.2
    },
    "word_frequency": 242,
    "hint_word": "lad"
  },
  {
    "word": "brave",
    "no": 668,
    "valence": {
      "mean": 7.15,
      "sd": 1.64
    },
    "arousal": {
      "mean": 6.15,
      "sd": 2.45
    },
    "dominance": {
      "mean": 7.22,
      "sd": 1.86
    },
    "word_frequency": 24,
    "hint_word": "courageous"
  },
  {
    "word": "breast",
    "no": 51,
    "valence": {
      "mean": 6.5,
      "sd": 1.78
    },
    "arousal": {
      "mean": 5.37,
      "sd": 2.39
    },
    "dominance": {
      "mean": 5.39,
      "sd": 2.27
    },
    "word_frequency": 11,
    "hint_word": "bosom"
  },
  {
    "word": "breeze",
    "no": 669,
    "valence": {
      "mean": 6.85,
      "sd": 1.71
    },
    "arousal": {
      "mean": 4.37,
      "sd": 2.32
    },
    "dominance": {
      "mean": 5.54,
      "sd": 1.67
    },
    "word_frequency": 14,
    "hint_word": "wind"
  },
  {
    "word": "bride",
    "no": 670,
    "valence": {
      "mean": 7.34,
      "sd": 1.71
    },
    "arousal": {
      "mean": 5.55,
      "sd": 2.74
    },
    "dominance": {
      "mean": 5.74,
      "sd": 2.36
    },
    "word_frequency": 33,
    "hint_word": "newlywed"
  },
  {
    "word": "bright",
    "no": 671,
    "valence": {
      "mean": 7.5,
      "sd": 1.55
    },
    "arousal": {
      "mean": 5.4,
      "sd": 2.33
    },
    "dominance": {
      "mean": 6.34,
      "sd": 1.82
    },
    "word_frequency": 87,
    "hint_word": "luminous"
  },
  {
    "word": "broken",
    "no": 672,
    "valence": {
      "mean": 3.05,
      "sd": 1.92
    },
    "arousal": {
      "mean": 5.43,
      "sd": 2.42
    },
    "dominance": {
      "mean": 4.14,
      "sd": 1.62
    },
    "word_frequency": 63,
    "hint_word": "shattered"
  },
  {
    "word": "brother",
    "no": 52,
    "valence": {
      "mean": 7.11,
      "sd": 2.17
    },
    "arousal": {
      "mean": 4.71,
      "sd": 2.68
    },
    "dominance": {
      "mean": 5.12,
      "sd": 2.31
    },
    "word_frequency": 73,
    "hint_word": "sibling"
  },
  {
    "word": "brutal",
    "no": 53,
    "valence": {
      "mean": 2.8,
      "sd": 1.9
    },
    "arousal": {
      "mean": 6.6,
      "sd": 2.36
    },
    "dominance": {
      "mean": 4.59,
      "sd": 2.7
    },
    "word_frequency": 7,
    "hint_word": "savage"
  },
  {
    "word": "building",
    "no": 550,
    "valence": {
      "mean": 5.29,
      "sd": 1.15
    },
    "arousal": {
      "mean": 3.92,
      "sd": 1.94
    },
    "dominance": {
      "mean": 5.25,
      "sd": 1.57
    },
    "word_frequency": 160,
    "hint_word": "structure"
  },
  {
    "word": "bullet",
    "no": 673,
    "valence": {
      "mean": 3.29,
      "sd": 2.06
    },
    "arousal": {
      "mean": 5.33,
      "sd": 2.48
    },
    "dominance": {
      "mean": 3.9,
      "sd": 2.61
    },
    "word_frequency": 28,
    "hint_word": "ammunition"
  },
  {
    "word": "bunny",
    "no": 54,
    "valence": {
      "mean": 7.24,
      "sd": 1.32
    },
    "arousal": {
      "mean": 4.06,
      "sd": 2.61
    },
    "dominance": {
      "mean": 4.97,
      "sd": 2.18
    },
    "word_frequency": 1,
    "hint_word": "rabbit"
  },
  {
    "word": "burdened",
    "no": 55,
    "valence": {
      "mean": 2.5,
      "sd": 1.32
    },
    "arousal": {
      "mean": 5.63,
      "sd": 2.07
    },
    "dominance": {
      "mean": 5.03,
      "sd": 2.35
    },
    "word_frequency": 4,
    "hint_word": "overloaded"
  },
  {
    "word": "burial",
    "no": 56,
    "valence": {
      "mean": 2.05,
      "sd": 1.41
    },
    "arousal": {
      "mean": 5.08,
      "sd": 2.4
    },
    "dominance": {
      "mean": 3.55,
      "sd": 1.95
    },
    "word_frequency": 11,
    "hint_word": "interment"
  },
  {
    "word": "burn",
    "no": 586,
    "valence": {
      "mean": 2.73,
      "sd": 1.72
    },
    "arousal": {
      "mean": 6.22,
      "sd": 1.91
    },
    "dominance": {
      "mean": 4.22,
      "sd": 1.83
    },
    "word_frequency": 15,
    "hint_word": "scorch"
  },
  {
    "word": "bus",
    "no": 541,
    "valence": {
      "mean": 4.51,
      "sd": 1.57
    },
    "arousal": {
      "mean": 3.55,
      "sd": 1.8
    },
    "dominance": {
      "mean": 4.84,
      "sd": 1.75
    },
    "word_frequency": 34,
    "hint_word": "coach"
  },
  {
    "word": "busybody",
    "no": 674,
    "valence": {
      "mean": 5.17,
      "sd": 2.02
    },
    "arousal": {
      "mean": 4.84,
      "sd": 2.41
    },
    "dominance": {
      "mean": 5.45,
      "sd": 1.97
    },
    "word_frequency": ".",
    "hint_word": "meddler"
  },
  {
    "word": "butter",
    "no": 57,
    "valence": {
      "mean": 5.33,
      "sd": 1.2
    },
    "arousal": {
      "mean": 3.17,
      "sd": 1.84
    },
    "dominance": {
      "mean": 4.67,
      "sd": 1.69
    },
    "word_frequency": 27,
    "hint_word": "margarine"
  },
  {
    "word": "butterfly",
    "no": 58,
    "valence": {
      "mean": 7.17,
      "sd": 1.2
    },
    "arousal": {
      "mean": 3.47,
      "sd": 2.39
    },
    "dominance": {
      "mean": 4.65,
      "sd": 2.27
    },
    "word_frequency": 2,
    "hint_word": "moth"
  },
  {
    "word": "cabinet",
    "no": 675,
    "valence": {
      "mean": 5.05,
      "sd": 0.31
    },
    "arousal": {
      "mean": 3.43,
      "sd": 1.85
    },
    "dominance": {
      "mean": 4.73,
      "sd": 1.66
    },
    "word_frequency": 17,
    "hint_word": "cupboard"
  },
  {
    "word": "cake",
    "no": 59,
    "valence": {
      "mean": 7.26,
      "sd": 1.27
    },
    "arousal": {
      "mean": 5,
      "sd": 2.37
    },
    "dominance": {
      "mean": 5.16,
      "sd": 2.05
    },
    "word_frequency": 9,
    "hint_word": "pastry"
  },
  {
    "word": "cancer",
    "no": 60,
    "valence": {
      "mean": 1.5,
      "sd": 0.85
    },
    "arousal": {
      "mean": 6.42,
      "sd": 2.83
    },
    "dominance": {
      "mean": 3.42,
      "sd": 2.99
    },
    "word_frequency": 25,
    "hint_word": "tumor"
  },
  {
    "word": "candy",
    "no": 61,
    "valence": {
      "mean": 6.54,
      "sd": 2.09
    },
    "arousal": {
      "mean": 4.58,
      "sd": 2.4
    },
    "dominance": {
      "mean": 5.33,
      "sd": 1.91
    },
    "word_frequency": 16,
    "hint_word": "sweet"
  },
  {
    "word": "cane",
    "no": 677,
    "valence": {
      "mean": 4,
      "sd": 1.8
    },
    "arousal": {
      "mean": 4.2,
      "sd": 1.93
    },
    "dominance": {
      "mean": 4.27,
      "sd": 1.95
    },
    "word_frequency": 12,
    "hint_word": "stick"
  },
  {
    "word": "cannon",
    "no": 678,
    "valence": {
      "mean": 4.9,
      "sd": 2.2
    },
    "arousal": {
      "mean": 4.71,
      "sd": 2.84
    },
    "dominance": {
      "mean": 5.17,
      "sd": 2.29
    },
    "word_frequency": 7,
    "hint_word": "artillery"
  },
  {
    "word": "capable",
    "no": 62,
    "valence": {
      "mean": 7.16,
      "sd": 1.39
    },
    "arousal": {
      "mean": 5.08,
      "sd": 2.07
    },
    "dominance": {
      "mean": 6.47,
      "sd": 1.94
    },
    "word_frequency": 66,
    "hint_word": "competent"
  },
  {
    "word": "car",
    "no": 551,
    "valence": {
      "mean": 7.73,
      "sd": 1.63
    },
    "arousal": {
      "mean": 6.24,
      "sd": 2.04
    },
    "dominance": {
      "mean": 6.98,
      "sd": 2.06
    },
    "word_frequency": 274,
    "hint_word": "automobile"
  },
  {
    "word": "carcass",
    "no": 679,
    "valence": {
      "mean": 3.34,
      "sd": 1.92
    },
    "arousal": {
      "mean": 4.83,
      "sd": 2.07
    },
    "dominance": {
      "mean": 4.9,
      "sd": 1.79
    },
    "word_frequency": 7,
    "hint_word": "remains"
  },
  {
    "word": "carefree",
    "no": 63,
    "valence": {
      "mean": 7.54,
      "sd": 1.38
    },
    "arousal": {
      "mean": 4.17,
      "sd": 2.84
    },
    "dominance": {
      "mean": 5.78,
      "sd": 2.5
    },
    "word_frequency": 9,
    "hint_word": "relaxed"
  },
  {
    "word": "caress",
    "no": 64,
    "valence": {
      "mean": 7.84,
      "sd": 1.16
    },
    "arousal": {
      "mean": 5.14,
      "sd": 3
    },
    "dominance": {
      "mean": 5.83,
      "sd": 2.13
    },
    "word_frequency": 1,
    "hint_word": "stroke"
  },
  {
    "word": "cash",
    "no": 503,
    "valence": {
      "mean": 8.37,
      "sd": 1
    },
    "arousal": {
      "mean": 7.37,
      "sd": 2.21
    },
    "dominance": {
      "mean": 6.96,
      "sd": 2.39
    },
    "word_frequency": 36,
    "hint_word": "money"
  },
  {
    "word": "casino",
    "no": 680,
    "valence": {
      "mean": 6.81,
      "sd": 1.66
    },
    "arousal": {
      "mean": 6.51,
      "sd": 2.12
    },
    "dominance": {
      "mean": 5.12,
      "sd": 2.15
    },
    "word_frequency": 2,
    "hint_word": "gambling"
  },
  {
    "word": "cat",
    "no": 504,
    "valence": {
      "mean": 5.72,
      "sd": 2.43
    },
    "arousal": {
      "mean": 4.38,
      "sd": 2.24
    },
    "dominance": {
      "mean": 6.16,
      "sd": 2.05
    },
    "word_frequency": ".",
    "hint_word": "feline"
  },
  {
    "word": "cell",
    "no": 587,
    "valence": {
      "mean": 3.82,
      "sd": 1.7
    },
    "arousal": {
      "mean": 4.08,
      "sd": 2.19
    },
    "dominance": {
      "mean": 4.12,
      "sd": 2.13
    },
    "word_frequency": 65,
    "hint_word": "prison"
  },
  {
    "word": "cellar",
    "no": 681,
    "valence": {
      "mean": 4.32,
      "sd": 1.68
    },
    "arousal": {
      "mean": 4.39,
      "sd": 2.33
    },
    "dominance": {
      "mean": 4.66,
      "sd": 1.61
    },
    "word_frequency": 26,
    "hint_word": "basement"
  },
  {
    "word": "cemetery",
    "no": 65,
    "valence": {
      "mean": 2.63,
      "sd": 1.4
    },
    "arousal": {
      "mean": 4.82,
      "sd": 2.66
    },
    "dominance": {
      "mean": 4.27,
      "sd": 2.14
    },
    "word_frequency": 15,
    "hint_word": "graveyard"
  },
  {
    "word": "chair",
    "no": 66,
    "valence": {
      "mean": 5.08,
      "sd": 0.98
    },
    "arousal": {
      "mean": 3.15,
      "sd": 1.77
    },
    "dominance": {
      "mean": 4.56,
      "sd": 1.6
    },
    "word_frequency": 66,
    "hint_word": "furniture"
  }
];

export default words;