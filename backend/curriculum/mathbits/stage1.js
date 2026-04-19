const stage1 = [
  {
    "order": 1,
    "title": "Binary & Nibbles",
    "desc": "Thinking like a computer with 0s and 1s.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Welcome to the Bits! Computers don't speak human; they speak in voltages: ON (1) or OFF (0). 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"A 'Bit' is the smallest piece of data. 8 Bits make a Byte. And 4 Bits? That's a 'Nibble'! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "How many bits are in a Nibble?",
        "options": [
          "4",
          "8",
          "2"
        ],
        "correctAnswer": "4"
      },
      {
        "type": "match_following",
        "questionText": "Match the Sizes!",
        "pairs": [
          {
            "key": "Bit",
            "value": "0 or 1"
          },
          {
            "key": "Nibble",
            "value": "4 bits"
          },
          {
            "key": "Byte",
            "value": "8 bits"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Highest decimal value a 4-bit nibble can store.",
        "codeSnippet": "val = (2^4) - ___ ;",
        "correctAnswer": "1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Binary counting: 1 (2^0), 2 (2^1), 4 (2^2), 8 (2^3). Just sum the powers where you see a 1! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What is binary 1011 in decimal?",
        "options": [
          "11 (8+2+1)",
          "10",
          "13"
        ],
        "correctAnswer": "11 (8+2+1)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Base of binary system.",
        "codeSnippet": "Base ___",
        "correctAnswer": "2"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"One or zero, that is the question! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are you binary ready?\"",
        "options": [
          "SQUAWK YES!",
          "No.",
          "0"
        ],
        "correctAnswer": "SQUAWK YES!"
      }
    ]
  },
  {
    "order": 2,
    "title": "Bitwise AND (&)",
    "desc": "The strict gatekeeper.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The & (AND) operator only returns 1 if BOTH bits are 1. It's very picky! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"1 & 1 = 1. Everything else (1&0, 0&1, 0&0) is 0. 🦜\"",
        "codeSnippet": "  1011 (11)\n& 1101 (13)\n----------\n  1001 (9)"
      },
      {
        "type": "multiple_choice",
        "questionText": "Result of 5 & 3 (101 & 011)?",
        "options": [
          "1 (001)",
          "7",
          "0"
        ],
        "correctAnswer": "1 (001)"
      },
      {
        "type": "match_following",
        "questionText": "Match the AND Truth!",
        "pairs": [
          {
            "key": "1 & 1",
            "value": "1"
          },
          {
            "key": "1 & 0",
            "value": "0"
          },
          {
            "key": "0 & 0",
            "value": "0"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Result of N & 0 for any N.",
        "codeSnippet": "result = ___ ;",
        "correctAnswer": "0"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"AND is often used to 'Mask' or check if a specific bit is set. If `N & (1 << K)` is non-zero, the K-th bit is a 1! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What does N & 1 check?",
        "options": [
          "If N is ODD (last bit is 1)",
          "If N is EVEN",
          "If N is 0"
        ],
        "correctAnswer": "If N is ODD (last bit is 1)"
      },
      {
        "type": "code_fill_in",
        "questionText": "AND operator symbol.",
        "codeSnippet": "a ___ b",
        "correctAnswer": "&"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Keep it strict! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Did we AND?\"",
        "options": [
          "SQUAWK YES!",
          "No.",
          "0"
        ],
        "correctAnswer": "SQUAWK YES!"
      }
    ]
  },
  {
    "order": 3,
    "title": "Bitwise OR (|)",
    "desc": "The inclusive gathering.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The | (OR) operator returns 1 if AT LEAST ONE bit is 1. It's very generous! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"0 | 0 = 0. Everything else (1|1, 1|0, 0|1) is 1. 🦜\"",
        "codeSnippet": "  1011 (11)\n| 1101 (13)\n----------\n  1111 (15)"
      },
      {
        "type": "multiple_choice",
        "questionText": "Result of 4 | 2 (100 | 010)?",
        "options": [
          "6 (110)",
          "4",
          "0"
        ],
        "correctAnswer": "6 (110)"
      },
      {
        "type": "match_following",
        "questionText": "Match the OR Truth!",
        "pairs": [
          {
            "key": "1 | 0",
            "value": "1"
          },
          {
            "key": "0 | 0",
            "value": "0"
          },
          {
            "key": "1 | 1",
            "value": "1"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Result of N | 0 for any N.",
        "codeSnippet": "result = ___ ;",
        "correctAnswer": "N"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"OR is used to 'Set' bits. If you want to make the 3rd bit of N a 1, just OR it with (1 << 3)! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Does N | 1 always make N ODD (if it wasn't already)?",
        "options": [
          "SQUAWK YES!",
          "No",
          "Only if N is 0"
        ],
        "correctAnswer": "SQUAWK YES!"
      },
      {
        "type": "code_fill_in",
        "questionText": "OR operator symbol.",
        "codeSnippet": "a ___ b",
        "correctAnswer": "|"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The more the merrier! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is it 1 yet?\"",
        "options": [
          "YES!",
          "No.",
          "0"
        ],
        "correctAnswer": "YES!"
      }
    ]
  },
  {
    "order": 4,
    "title": "The Magic XOR (^)",
    "desc": "The power of difference.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Be unique! XOR (^) is 1 if the bits are DIFFERENT, and 0 if they are SAME. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"1 ^ 1 = 0 (same). 0 ^ 0 = 0 (same). 1 ^ 0 = 1 (diff). 0 ^ 1 = 1 (diff). 🦜\"",
        "codeSnippet": "  1010 (10)\n^ 1100 (12)\n----------\n  0110 (6)"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is 7 ^ 7?",
        "options": [
          "0 (same bits cancel out)",
          "7",
          "14"
        ],
        "correctAnswer": "0 (same bits cancel out)"
      },
      {
        "type": "match_following",
        "questionText": "Match XOR Rules!",
        "pairs": [
          {
            "key": "X ^ X",
            "value": "0"
          },
          {
            "key": "X ^ 0",
            "value": "X"
          },
          {
            "key": "X ^ Y ^ X",
            "value": "Y (X cancels out)"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Result of (5 ^ 3 ^ 5).",
        "codeSnippet": "result = ___ ;",
        "correctAnswer": "3"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Wait, XOR is magical! You can swap two birds without a temporary nest using XOR! 🦜\"",
        "codeSnippet": "a = a ^ b;\nb = a ^ b;\na = a ^ b;"
      },
      {
        "type": "multiple_choice",
        "questionText": "Does XOR work for finding a unique element in an array of pairs?",
        "options": [
          "SQUAWK YES!",
          "No",
          "Only and always"
        ],
        "correctAnswer": "SQUAWK YES!"
      },
      {
        "type": "code_fill_in",
        "questionText": "XOR operator symbol.",
        "codeSnippet": "a ___ b",
        "correctAnswer": "^"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Spot the difference! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are we different?\"",
        "options": [
          "1",
          "0",
          "Depends."
        ],
        "correctAnswer": "1"
      }
    ]
  },
  {
    "order": 5,
    "title": "NOT & Complement",
    "desc": "Flipping the entire flock.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The ~ (NOT) operator flips every single bit. 1 becomes 0, and 0 becomes 1! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"In modern computers, ~X is actually -(X + 1). This is due to '2's Complement' math! 🦜\"",
        "codeSnippet": "~5 = -6\n~0 = -1"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the value of ~(-1)?",
        "options": [
          "0",
          "-1",
          "1"
        ],
        "correctAnswer": "0"
      },
      {
        "type": "match_following",
        "questionText": "Match the Comp!",
        "pairs": [
          {
            "key": "1's Complement",
            "value": "Flip all bits (~X)"
          },
          {
            "key": "2's Complement",
            "value": "~X + 1 (Negative Numbers)"
          },
          {
            "key": "Sign Bit",
            "value": "Leftmost bit"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Formula for ~N.",
        "codeSnippet": "~N = -(N + ___ );",
        "correctAnswer": "1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"2's Complement is used to represent negative numbers. To find -X: flip all bits and add 1! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Binary for -1 in an 8-bit byte?",
        "options": [
          "11111111",
          "10000001",
          "00000001"
        ],
        "correctAnswer": "11111111"
      },
      {
        "type": "code_fill_in",
        "questionText": "NOT operator symbol.",
        "codeSnippet": "___ a",
        "correctAnswer": "~"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Flip the bird! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"~SQUAWK?\"",
        "options": [
          "Flipped!",
          "No.",
          "0"
        ],
        "correctAnswer": "Flipped!"
      }
    ]
  },
  {
    "order": 6,
    "title": "Left Shift (<<)",
    "desc": "Moving left for multiplication.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Shift left! `a << b` moves the bits of `a` to the left by `b` positions, filling with 0s on the right. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Every shift left multiplies the number by 2! 🦜\"",
        "codeSnippet": "5 << 1 = 10\n5 << 2 = 20\n(101 to 1010 to 10100)"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is 1 << 4?",
        "options": [
          "16 (2 to the power of 4)",
          "8",
          "4"
        ],
        "correctAnswer": "16 (2 to the power of 4)"
      },
      {
        "type": "match_following",
        "questionText": "Match Left Shift Math!",
        "pairs": [
          {
            "key": "X << 1",
            "value": "X * 2"
          },
          {
            "key": "X << 3",
            "value": "X * 8"
          },
          {
            "key": "X << K",
            "value": "X * (2^K)"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Value of 3 << 2.",
        "codeSnippet": "3 * (2^2) = ___ ;",
        "correctAnswer": "12"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Left shift can cause OVERFLOW if the bits move past the storage size (e.g. 32 bits)! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is total value always increasing in a left shift (until overflow)?",
        "options": [
          "SQUAWK YES!",
          "No",
          "Only for negative numbers"
        ],
        "correctAnswer": "SQUAWK YES!"
      },
      {
        "type": "code_fill_in",
        "questionText": "Left shift operator.",
        "codeSnippet": "a ___ b",
        "correctAnswer": "<<"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Zoom to the left! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Did we multiply?\"",
        "options": [
          "SQUAWK YES!",
          "No.",
          "0"
        ],
        "correctAnswer": "SQUAWK YES!"
      }
    ]
  },
  {
    "order": 7,
    "title": "Right Shift (>>)",
    "desc": "Moving right for division.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Shift right! `a >> b` moves the bits of `a` to the right, discarding the ones that fall off the edge. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Every shift right divides the number by 2 (floored)! 🦜\"",
        "codeSnippet": "10 >> 1 = 5\n11 >> 1 = 5\n(1011 to 0101)"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is 16 >> 2?",
        "options": [
          "4",
          "8",
          "2"
        ],
        "correctAnswer": "4"
      },
      {
        "type": "match_following",
        "questionText": "Match Right Shift Math!",
        "pairs": [
          {
            "key": "X >> 1",
            "value": "X / 2"
          },
          {
            "key": "X >> 4",
            "value": "X / 16"
          },
          {
            "key": "X >> K",
            "value": "X / (2^K)"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Value of 25 >> 1.",
        "codeSnippet": "floor(25 / 2) = ___ ;",
        "correctAnswer": "12"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Logical Right Shift (`>>>` in some languages) fills with 0s. Arithmetic Right Shift (`>>`) fills with the sign bit to keep negative numbers negative! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Does right shift keep the fractional part?",
        "options": [
          "No (It’s integer division)",
          "Yes",
          "Only in elite mode"
        ],
        "correctAnswer": "No (It’s integer division)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Right shift operator.",
        "codeSnippet": "a ___ b",
        "correctAnswer": ">>"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Discard the leftovers! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Divide and conquer?\"",
        "options": [
          "SQUAWK YES!",
          "No.",
          "0"
        ],
        "correctAnswer": "SQUAWK YES!"
      }
    ]
  },
  {
    "order": 8,
    "title": "Get & Set Bits",
    "desc": "Inspecting and modifying bits.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Precision Pecking! How do we target just ONE bit in the nest? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Get K-th bit: `(N & (1 << K)) != 0`. Set K-th bit: `N | (1 << K)`. 🦜\"",
        "codeSnippet": "mask = 1 << 3;\nif (n & mask) cout << 'Bit 3 is 1';"
      },
      {
        "type": "multiple_choice",
        "questionText": "Which operation is used to SET a bit without changing others?",
        "options": [
          "OR (|)",
          "AND (&)",
          "XOR (^)"
        ],
        "correctAnswer": "OR (|)"
      },
      {
        "type": "match_following",
        "questionText": "Match Bit Actions!",
        "pairs": [
          {
            "key": "Check Bit",
            "value": "AND 1<<K"
          },
          {
            "key": "Force 1",
            "value": "OR 1<<K"
          },
          {
            "key": "Shift",
            "value": "1 << K"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Formula to set the 5th bit of N.",
        "codeSnippet": "N = N ___ (1 << 5);",
        "correctAnswer": "|"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Imagine you have 8 lights. Each bit controls one light. XORing would toggle the light! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the value of (1 << 0)?",
        "options": [
          "1",
          "0",
          "2"
        ],
        "correctAnswer": "1"
      },
      {
        "type": "code_fill_in",
        "questionText": "Target bit index.",
        "codeSnippet": "1 << ___",
        "correctAnswer": "K"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Surgical strike! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Did we get it?\"",
        "options": [
          "SQUAWK YES!",
          "No.",
          "0"
        ],
        "correctAnswer": "SQUAWK YES!"
      }
    ]
  },
  {
    "order": 9,
    "title": "Clear & Toggle Bits",
    "desc": "Removing and switching bits.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Delete and Swap! To CLEAR a bit (force to 0): use AND with a NOT mask. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Clear K-th: `N & ~(1 << K)`. Toggle K-th: `N ^ (1 << K)`. 🦜\"",
        "codeSnippet": "n = n & ~(1 << 2); // Force bit 2 to 0\nn = n ^ (1 << 2); // Switch bit 2"
      },
      {
        "type": "multiple_choice",
        "questionText": "Which operator switches a bit (0 to 1, or 1 to 0)?",
        "options": [
          "XOR (^)",
          "AND (&)",
          "NOT (~)"
        ],
        "correctAnswer": "XOR (^)"
      },
      {
        "type": "match_following",
        "questionText": "Match the Cleanup!",
        "pairs": [
          {
            "key": "Set to 0",
            "value": "AND ~(1<<K)"
          },
          {
            "key": "Switch",
            "value": "XOR (1<<K)"
          },
          {
            "key": "Identify",
            "value": "Masking"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Formula to toggle bit 3.",
        "codeSnippet": "N = N ___ (1 << 3);",
        "correctAnswer": "^"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Toggling is great for status flags (e.g. Turn sound ON/OFF)! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "If a bit is 1, and you XOR it with 1, what happens?",
        "options": [
          "It becomes 0",
          "It stays 1",
          "It becomes 2"
        ],
        "correctAnswer": "It becomes 0"
      },
      {
        "type": "code_fill_in",
        "questionText": "Clear mask.",
        "codeSnippet": "~(1 << ___ )",
        "correctAnswer": "K"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Clean the nest! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is it toggled?\"",
        "options": [
          "SQUAWK YES!",
          "No.",
          "0"
        ],
        "correctAnswer": "SQUAWK YES!"
      }
    ]
  },
  {
    "order": 10,
    "title": "Master Point (Bits 1)",
    "desc": "Binary logic mastery confirmed.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"STAGE 1 COMPLETE! You've mastered Binary, AND, OR, XOR, Shifts, and bit surgery. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Which operator divides by 2?",
        "options": [
          "Right Shift (>>)",
          "Left Shift (<<)",
          "AND (&)"
        ],
        "correctAnswer": "Right Shift (>>)"
      },
      {
        "type": "multiple_choice",
        "questionText": "How to toggle the K-th bit?",
        "options": [
          "N ^ (1 << K)",
          "N | (1 << K)",
          "N & ~(1 << K)"
        ],
        "correctAnswer": "N ^ (1 << K)"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"You are a Bitwise Beginner! In Stage 2, we tackle Brian Kernighan's Algorithm, Subsets, and Gray Codes! 🦜\""
      },
      {
        "type": "match_following",
        "questionText": "Match the Rank!",
        "pairs": [
          {
            "key": "Stage 1",
            "value": "Bitwise Beginner"
          },
          {
            "key": "Stage 2",
            "value": "Parity Pilot"
          },
          {
            "key": "Next",
            "value": "Mathbits 2"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Binary Points.",
        "codeSnippet": "1 * ___ ;",
        "correctAnswer": "100"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Click into place! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Ready for Stage 2?",
        "options": [
          "SQUAWK YES!",
          "Maybe.",
          "No."
        ],
        "correctAnswer": "SQUAWK YES!"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"SQUAWK! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Final Bit?",
        "options": [
          "1",
          "0",
          "Done."
        ],
        "correctAnswer": "1"
      }
    ]
  }
];

module.exports = stage1;
