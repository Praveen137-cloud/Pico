const stage2 = [
  {
    "order": 11,
    "title": "Parity Check",
    "desc": "Are there an even or odd number of 1s?",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Parity! It's simply 1 if the number of set bits is ODD, and 0 if it's EVEN. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Wait, there's a trick! XORing all bits of a number gives you the parity! 🦜\"",
        "codeSnippet": "while (n) {\n  parity ^= (n & 1);\n  n >>= 1;\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the parity of binary 1011?",
        "options": [
          "1 (3 bits are 1)",
          "0",
          "Depends on Pico"
        ],
        "correctAnswer": "1 (3 bits are 1)"
      },
      {
        "type": "match_following",
        "questionText": "Match Parity States!",
        "pairs": [
          {
            "key": "3 bits set",
            "value": "Odd Parity"
          },
          {
            "key": "4 bits set",
            "value": "Even Parity"
          },
          {
            "key": "Operation",
            "value": "XOR Accumulation"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Cumulative XOR to find total parity.",
        "codeSnippet": "p = p ___ (n & 1);",
        "correctAnswer": "^"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"You can speed this up using the property `X ^ (X >> 1)` to crush the bits together! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is 1010 even parity?",
        "options": [
          "SQUAWK YES! (2 bits are 1)",
          "No",
          "Maybe"
        ],
        "correctAnswer": "SQUAWK YES! (2 bits are 1)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Parity type.",
        "codeSnippet": "O ___ or Even",
        "correctAnswer": "dd"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Balance the flock! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Found the odd one?\"",
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
    "order": 12,
    "title": "Brian Kernighan's Math",
    "desc": "The most efficient bit count.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Brian's Secret! The expression `n & (n - 1)` clears the RIGHTMOST set bit of N. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Instead of shifting 32 times, we only loop as many times as there are 1s! 🦜\"",
        "codeSnippet": "while (n > 0) {\n  n = n & (n - 1);\n  count++;\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "If N = 12 (1100), what is N & (N-1)?",
        "options": [
          "8 (1000)",
          "11",
          "0"
        ],
        "correctAnswer": "8 (1000)"
      },
      {
        "type": "match_following",
        "questionText": "Match the Steps!",
        "pairs": [
          {
            "key": "n & (n-1)",
            "value": "Subtract/AND loop"
          },
          {
            "key": "Standard shift",
            "value": "O(log N) iterations"
          },
          {
            "key": "Kernighan",
            "value": "O(Sets) iterations"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Update step in Kernighan's counting.",
        "codeSnippet": "n = n ___ (n - 1);",
        "correctAnswer": "&"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This is used widely in chess engines to count 'Hamming weight' or bits on a board! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "How many iterations for N=127 (01111111)?",
        "options": [
          "7",
          "32",
          "1"
        ],
        "correctAnswer": "7"
      },
      {
        "type": "code_fill_in",
        "questionText": "Bit removal target.",
        "codeSnippet": "R ___ set bit",
        "correctAnswer": "ightmost"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Snip the bit! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Counting complete?\"",
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
    "order": 13,
    "title": "Power of 2 Check",
    "desc": "One line to rule them all.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Quick Check! A power of 2 (2, 4, 8, 16...) has exactly ONE bit set. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"If `n & (n - 1)` is 0, it means removing that one bit left nothing. It's a power of 2! 🦜\"",
        "codeSnippet": "return n > 0 && (n & (n - 1)) == 0;"
      },
      {
        "type": "multiple_choice",
        "questionText": "Is 6 a power of 2?",
        "options": [
          "No (6 & 5 is 4, not 0)",
          "Yes",
          "Only in binary"
        ],
        "correctAnswer": "No (6 & 5 is 4, not 0)"
      },
      {
        "type": "match_following",
        "questionText": "Match Power Bits!",
        "pairs": [
          {
            "key": "2 (decimal)",
            "value": "00...010"
          },
          {
            "key": "8 (decimal)",
            "value": "00...1000"
          },
          {
            "key": "Condition",
            "value": "n > 0"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Check for 2-power logic.",
        "codeSnippet": "if (n ___ (n - 1) == 0)",
        "correctAnswer": "&"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Don't forget to check `n > 0`. Zero is NOT a power of 2, but `0 & -1` is 0! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Can we use this to check for powers of 4?",
        "options": [
          "Yes, with an extra mask (0x55555555)",
          "No, never",
          "Only with XOR"
        ],
        "correctAnswer": "Yes, with an extra mask (0x55555555)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Exponent base.",
        "codeSnippet": "Power of ___",
        "correctAnswer": "2"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Double up! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is it powered?\"",
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
    "order": 14,
    "title": "Single Number II",
    "desc": "Triplets and a loner.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Tougher flock! Every bird appears 3 TIMES, except for one that appears ONCE. Find the loner! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Counting bits! Sum the 1s at each position across all numbers. If `sum % 3` is non-zero, that bit belongs to our loner! 🦜\"",
        "codeSnippet": "for (i=0; i<32; i++) {\n  if (count[i] % 3 != 0) res |= (1 << i);\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Can we use simple XOR for this problem?",
        "options": [
          "No (XOR only cancels pairs, not triplets)",
          "Yes",
          "Sometimes"
        ],
        "correctAnswer": "No (XOR only cancels pairs, not triplets)"
      },
      {
        "type": "match_following",
        "questionText": "Match Trip Terms!",
        "pairs": [
          {
            "key": "Pairs",
            "value": "XOR (X^X=0)"
          },
          {
            "key": "Triplets",
            "value": "Bit Summation % 3"
          },
          {
            "key": "Any K times",
            "value": "Bit Summation % K"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The modulo value used for triplets.",
        "codeSnippet": "mod = ___ ;",
        "correctAnswer": "3"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"There is an elite O(N) O(1) space way using two vars `ones` and `twos` but it's very complex bit-math! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What does `ones & twos` represent in the advanced solution?",
        "options": [
          "Bits that have appeared 3 times (and should be reset)",
          "The answer",
          "Nothing"
        ],
        "correctAnswer": "Bits that have appeared 3 times (and should be reset)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Result update.",
        "codeSnippet": "res ___ (1 << i)",
        "correctAnswer": "|="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Three is a crowd! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Found the loner?\"",
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
    "order": 15,
    "title": "Single Number III",
    "desc": "Double trouble (Two loners).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Two birds! Every element appears twice, except for TWO unique birds. Find them both. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"XORing everything gives `X ^ Y`. But how to separate them? 🦜\"",
        "codeSnippet": "xor_sum = 0;\nfor (n : nums) xor_sum ^= n;"
      },
      {
        "type": "multiple_choice",
        "questionText": "If `X ^ Y` is non-zero, what must be true about at least one bit?",
        "options": [
          "It's different in X and Y",
          "It's 1 in both",
          "It's 0 in both"
        ],
        "correctAnswer": "It's different in X and Y"
      },
      {
        "type": "match_following",
        "questionText": "Match Split Logic!",
        "pairs": [
          {
            "key": "Step 1",
            "value": "XOR all to get X^Y"
          },
          {
            "key": "Step 2",
            "value": "Find rightmost set bit"
          },
          {
            "key": "Step 3",
            "value": "Partition numbers into two groups"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Extract rightmost set bit formula.",
        "codeSnippet": "mask = n ___ (-n) ;",
        "correctAnswer": "&"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Group A contains numbers with that bit set. Group B has them cleared. X and Y will be in DIFFERENT groups! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What happens when you XOR all elements in Group A?",
        "options": [
          "You get exactly X",
          "You get X^Y",
          "You get 0"
        ],
        "correctAnswer": "You get exactly X"
      },
      {
        "type": "code_fill_in",
        "questionText": "Partition check.",
        "codeSnippet": "if (n & ___ )",
        "correctAnswer": "mask"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Divide and conquer! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Found them both?\"",
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
    "order": 16,
    "title": "Rightmost Set Bit",
    "desc": "The n & -n trick.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Binary Snipe! How to isolate the rightmost 1-bit and kill everything else? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Property: `-n` in 2's complement is `~n + 1`. This flips all bits until the rightmost 1! 🦜\"",
        "codeSnippet": "isolate = n & -n;"
      },
      {
        "type": "multiple_choice",
        "questionText": "Result of 12 & -12 (1100 & ...0100)?",
        "options": [
          "4 (0100)",
          "0",
          "12"
        ],
        "correctAnswer": "4 (0100)"
      },
      {
        "type": "match_following",
        "questionText": "Match the Isolate!",
        "pairs": [
          {
            "key": "n",
            "value": "...1000"
          },
          {
            "key": "n & -n",
            "value": "Result: 1000"
          },
          {
            "key": "Purpose",
            "value": "Fenwick Trees / Masking"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Formula to isolate.",
        "codeSnippet": "val = n & ___ n;",
        "correctAnswer": "-"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"You can also remove it with `n & (n-1)`. Isolate with `n & -n`. Learn both! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What is x & -x if x is ODD?",
        "options": [
          "1",
          "0",
          "x"
        ],
        "correctAnswer": "1"
      },
      {
        "type": "code_fill_in",
        "questionText": "Sign operator.",
        "codeSnippet": "n & ___ n",
        "correctAnswer": "-"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Snipped and captured! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"The lone one?\"",
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
    "order": 17,
    "title": "Hamming Distance",
    "desc": "Measuring bi-distance.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"How far apart are we? Hamming distance is the number of positions where bits differ! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Step 1: `X ^ Y` cancels same bits and leaves 1s where they differ. Step 2: COUNT the bits! 🦜\"",
        "codeSnippet": "diff = x ^ y;\nreturn countSetBits(diff);"
      },
      {
        "type": "multiple_choice",
        "questionText": "Hamming distance between 1 (001) and 4 (100)?",
        "options": [
          "2",
          "1",
          "3"
        ],
        "correctAnswer": "2"
      },
      {
        "type": "match_following",
        "questionText": "Match Calc Path!",
        "pairs": [
          {
            "key": "Diff",
            "value": "X ^ Y"
          },
          {
            "key": "Check",
            "value": "Weight of diff"
          },
          {
            "key": "Use",
            "value": "Error Correction / Genetics"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Initial operator to find differences.",
        "codeSnippet": "mask = a ___ b;",
        "correctAnswer": "^"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Total Hamming Distance in an array: Count how many 1s vs 0s at each position. `count1 * count0` gives pairs! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of advanced Total Hamming Distance?",
        "options": [
          "O(N)",
          "O(N^2)",
          "O(1)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Distance name.",
        "codeSnippet": "H ___",
        "correctAnswer": "amming"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Stay close! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are we similar?\"",
        "options": [
          "SQUAWK YES!",
          "No.",
          "Maybe."
        ],
        "correctAnswer": "SQUAWK YES!"
      }
    ]
  },
  {
    "order": 18,
    "title": "Subsets with Bits",
    "desc": "The Power Set trick.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Every subset corresponds to a binary number! If we have {A, B, C}, there are 2^3 = 8 subsets. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"000 is {}, 101 is {A, C}, 111 is {A, B, C}. Loop from 0 to 2^N - 1! 🦜\"",
        "codeSnippet": "for (i=0; i < (1 << n); i++) {\n  // Process subset i\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "How many subsets for a set of size 5?",
        "options": [
          "32 (1 << 5)",
          "25",
          "10"
        ],
        "correctAnswer": "32 (1 << 5)"
      },
      {
        "type": "match_following",
        "questionText": "Match Subset Terms!",
        "pairs": [
          {
            "key": "1 << N",
            "value": "Total Subsets (Power set)"
          },
          {
            "key": "j-th bit",
            "value": "Check if element j is in"
          },
          {
            "key": "Empty set",
            "value": "Binary 0"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Condition to check if element `j` is in subset `i`.",
        "codeSnippet": "if (i ___ (1 << j))",
        "correctAnswer": "&"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This bitmasking approach is efficient for small N (up to ~20 elements). 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of generating all subsets?",
        "options": [
          "O(N * 2^N)",
          "O(2^N)",
          "O(N^2)"
        ],
        "correctAnswer": "O(N * 2^N)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Set type.",
        "codeSnippet": "P ___ Set",
        "correctAnswer": "ower"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Include everyone! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is the set full?\"",
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
    "order": 19,
    "title": "Gray Code Intro",
    "desc": "Only one bit changes.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Gray Code! A sequence where every two consecutive numbers differ by exactly ONE bit. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Binary 0(00), 1(01), 2(10), 3(11). Gray 0(00), 1(01), 3(11), 2(10). 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Formula to convert Binary N to Gray Code?",
        "options": [
          "n ^ (n >> 1)",
          "n ^ (n << 1)",
          "n & (n - 1)"
        ],
        "correctAnswer": "n ^ (n >> 1)"
      },
      {
        "type": "match_following",
        "questionText": "Match Gray Values!",
        "pairs": [
          {
            "key": "Binary 2 (10)",
            "value": "Gray 3 (11)"
          },
          {
            "key": "Binary 3 (11)",
            "value": "Gray 2 (10)"
          },
          {
            "key": "Use",
            "value": "Avoid errors in sensors"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Binary to Gray Code calculation.",
        "codeSnippet": "gray = n ___ (n >> 1);",
        "correctAnswer": "^"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Gray codes are important for rotators or digital switches to prevent multi-bit glitches! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is Gray Code sequence unique?",
        "options": [
          "No (Many reflect orientations exist)",
          "Yes",
          "Only and always"
        ],
        "correctAnswer": "No (Many reflect orientations exist)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Sequence name.",
        "codeSnippet": "G ___ Code",
        "correctAnswer": "ray"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Smooth transitions! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"One bit at a time?\"",
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
    "order": 20,
    "title": "Master Point (Mathbits 2)",
    "desc": "Parity pilot status confirmed.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"STAGE 2 COMPLETE! You've mastered Kernighan's count, Hamming distance, and Gray codes. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Which formula clears the rightmost set bit?",
        "options": [
          "n & (n-1)",
          "n & -n",
          "n | (n-1)"
        ],
        "correctAnswer": "n & (n-1)"
      },
      {
        "type": "multiple_choice",
        "questionText": "Convert Binary `n` to Gray Code?",
        "options": [
          "n ^ (n >> 1)",
          "n & (n-1)",
          "n | -n"
        ],
        "correctAnswer": "n ^ (n >> 1)"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"You are a Parity Pilot! In Stage 3, we leave the bits for a while to explore Number Theory: Factors, Primes, and Sieve of Eratosthenes! 🦜\""
      },
      {
        "type": "match_following",
        "questionText": "Match the Rank!",
        "pairs": [
          {
            "key": "Stage 2",
            "value": "Parity Pilot"
          },
          {
            "key": "Stage 3",
            "value": "Prime Pioneer"
          },
          {
            "key": "Next",
            "value": "Mathbits 3"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Efficiency Points.",
        "codeSnippet": "2 * ___ ;",
        "correctAnswer": "100"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Flipping with style! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Ready for Primes?",
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
        "questionText": "Final Flip?",
        "options": [
          "Done.",
          "Next.",
          "0"
        ],
        "correctAnswer": "Done."
      }
    ]
  }
];

module.exports = stage2;
