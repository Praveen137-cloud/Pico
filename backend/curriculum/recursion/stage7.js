const stage7 = [
  {
    "order": 61,
    "title": "Binary Exponentiation",
    "desc": "Calculating X^N in O(log N).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Exponential Speed! Calculating 2^1000 usually takes 1000 steps. But with recursion, we can do it in just 10! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"X^N = (X^(N/2))^2. If N is odd, multiply by X once more. Divide and Conquer! 🦜\"",
        "codeSnippet": "long power(x, n) {\n  if (n == 0) return 1;\n  temp = power(x, n/2);\n  if (n % 2 == 0) return temp * temp;\n  return x * temp * temp;\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Time complexity of Binary Exponentiation?",
        "options": [
          "O(log N)",
          "O(N)",
          "O(1)"
        ],
        "correctAnswer": "O(log N)"
      },
      {
        "type": "match_following",
        "questionText": "Match the Power Steps!",
        "pairs": [
          {
            "key": "N is Even",
            "value": "(x^(n/2))^2"
          },
          {
            "key": "N is Odd",
            "value": "x * (x^(n/2))^2"
          },
          {
            "key": "N = 0",
            "value": "1 (Base Case)"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Recursive call for half the power.",
        "codeSnippet": "long res = ___(x, n / 2);",
        "correctAnswer": "power"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"We only call the function ONCE per level and store the result in `temp`. Don't call it twice or it becomes O(N)! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "How many steps to calculate 2^1024?",
        "options": [
          "10",
          "1024",
          "512"
        ],
        "correctAnswer": "10",
        "explanation": "log2(1024) = 10"
      },
      {
        "type": "code_fill_in",
        "questionText": "Modulo operator for large results.",
        "codeSnippet": "return (x * temp * temp) ___ mod;",
        "correctAnswer": "%"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Reach for the stars in record time! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I powerful?\"",
        "options": [
          "Limitless!",
          "No.",
          "0"
        ],
        "correctAnswer": "Limitless!"
      }
    ]
  },
  {
    "order": 62,
    "title": "Extended Euclidean GCD",
    "desc": "Finding the GCD and more recursively.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"GCD Master! The Greatest Common Divisor of A and B is the GCD of B and A%B. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Extended GCD also finds coefficients X and Y such that `ax + by = gcd(a, b)`. Very useful for cryptography! 🦜\"",
        "codeSnippet": "int gcd(a, b) {\n  if (b == 0) return a;\n  return gcd(b, a % b);\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of Recursive GCD (Lame's Theorem)?",
        "options": [
          "O(log(min(a,b)))",
          "O(1)",
          "O(n)"
        ],
        "correctAnswer": "O(log(min(a,b)))"
      },
      {
        "type": "match_following",
        "questionText": "Match the GCD Terms!",
        "pairs": [
          {
            "key": "b = 0",
            "value": "Base Case"
          },
          {
            "key": "a % b",
            "value": "Reduction Step"
          },
          {
            "key": "log N",
            "value": "Time Complexity"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The recursive step for Euclidean algorithm.",
        "codeSnippet": "return gcd(b, a ___ b);",
        "correctAnswer": "%"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This algorithm has been used for over 2,000 years. Ancient wisdom in modern code! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "GCD of 48 and 18?",
        "options": [
          "6",
          "3",
          "12"
        ],
        "correctAnswer": "6"
      },
      {
        "type": "code_fill_in",
        "questionText": "Stop when b reaches ___.",
        "codeSnippet": "if (b == ___ ) return a;",
        "correctAnswer": "0"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Find the common ground! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is our GCD high?\"",
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
    "order": 63,
    "title": "Karatsuba Multiplication",
    "desc": "Multiplying giant numbers with fewer branches.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Karatsuba! Standard multiplication of N-digit numbers takes O(N^2). Karatsuba found a trick to do it with only THREE recursive calls instead of four! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Divide N-digit numbers into halves high1low1 and high2low2. Combine them using math magic! 🦜\"",
        "codeSnippet": "res = z2*10^n + (z1-z2-z0)*10^(n/2) + z0"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of Karatsuba Multiplication?",
        "options": [
          "O(N^1.58)",
          "O(N^2)",
          "O(N log N)"
        ],
        "correctAnswer": "O(N^1.58)"
      },
      {
        "type": "match_following",
        "questionText": "Match the Work!",
        "pairs": [
          {
            "key": "Standard",
            "value": "O(N^2)"
          },
          {
            "key": "Karatsuba",
            "value": "O(N^1.58)"
          },
          {
            "key": "FFT",
            "value": "O(N log N)"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Number of recursive multiplications in Karatsuba.",
        "codeSnippet": "calls = ___ ;",
        "correctAnswer": "3"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This is used by libraries to multiply numbers with thousands of digits! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Why is it faster?",
        "options": [
          "Reduces recursive branching",
          "It uses faster hardware",
          "Pico likes Russian math"
        ],
        "correctAnswer": "Reduces recursive branching"
      },
      {
        "type": "code_fill_in",
        "questionText": "Base case: single digit multiplication.",
        "codeSnippet": "if (n ___ 1) return a * b;",
        "correctAnswer": "<="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Multiply your strength! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are you a math whiz?\"",
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
    "order": 64,
    "title": "Count Set Bits",
    "desc": "Recursive binary analysis.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Set Bits! How many '1's are in the binary form of X? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Logic: Check the last bit (X % 2). Add it to the count of set bits in the remaining part (X / 2)! 🦜\"",
        "codeSnippet": "int countSet(int n) {\n  if (n == 0) return 0;\n  return (n & 1) + countSet(n >> 1);\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "How many set bits in binary 7 (0111)?",
        "options": [
          "3",
          "7",
          "1"
        ],
        "correctAnswer": "3"
      },
      {
        "type": "match_following",
        "questionText": "Match the Bit Actions!",
        "pairs": [
          {
            "key": "n & 1",
            "value": "Check LSB"
          },
          {
            "key": "n >> 1",
            "value": "Shift Right (Divide by 2)"
          },
          {
            "key": "n == 0",
            "value": "Stop"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The recursive step using bit-shift.",
        "codeSnippet": "return (n & 1) + countSet(n ___ 1);",
        "correctAnswer": ">>"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This recursive bit-checking is the core of how computers analyze data! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is this O(log N)?",
        "options": [
          "Yes (Number of bits)",
          "No",
          "O(1)"
        ],
        "correctAnswer": "Yes (Number of bits)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Check if a number is even (recursive).",
        "codeSnippet": "if (n ___ 2 == 0) return true;",
        "correctAnswer": "%"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"One bit at a time, fledgling! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I 1 or 0?\"",
        "options": [
          "Number 1!",
          "Zero.",
          "NULL."
        ],
        "correctAnswer": "Number 1!"
      }
    ]
  },
  {
    "order": 65,
    "title": "Gray Code Mastery",
    "desc": "Recursive sequences for error correction.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Gray Code revisited! Generating the sequence where neighbors differ by only one bit. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Recursive Mirroring: take the N-1 sequence, add 0 to front of original and 1 to front of reversed. 🦜\"",
        "codeSnippet": "L1 = {0, 1}\nL2 = {00, 01, 11, 10}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Gray code for 3? (011 binary)",
        "options": [
          "010 (binary Gray)",
          "111",
          "000"
        ],
        "correctAnswer": "010 (binary Gray)"
      },
      {
        "type": "match_following",
        "questionText": "Match the Bit Orders!",
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
            "key": "N-1 sequence",
            "value": "Half original size"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Reverse the list inside code.",
        "codeSnippet": "for(int j=i-1; j>=0; j--) res.___ (res[j]);",
        "correctAnswer": "push_back"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Binary-to-Gray math: `G = B ^ (B >> 1)`. Recursive generation mirrors this beauty! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "How many Gray codes for N bits?",
        "options": [
          "2^N",
          "N!",
          "N^2"
        ],
        "correctAnswer": "2^N"
      },
      {
        "type": "code_fill_in",
        "questionText": "XOR operator.",
        "codeSnippet": "gray = n ___ (n >> 1);",
        "correctAnswer": "^"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Change is constant, but slow! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Can I mirror you?\"",
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
    "order": 66,
    "title": "Recursive Reversal (Bits)",
    "desc": "Flipping the binary birdhouse.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Bit Reversal! 1000 (8) becomes 0001 (1). 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Like reversing a string! Take the last bit, shift it to the far left, and recurse on the rest. 🦜\"",
        "codeSnippet": "int reverse(n, bits) {\n  if (bits == 0) return 0;\n  return ((n & 1) << (bits - 1)) | reverse(n >> 1, bits - 1);\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Result of reversing 110 (6) in 3 bits?",
        "options": [
          "011 (3)",
          "110",
          "001"
        ],
        "correctAnswer": "011 (3)"
      },
      {
        "type": "match_following",
        "questionText": "Match Bit Flips!",
        "pairs": [
          {
            "key": "n & 1",
            "value": "Extract bit"
          },
          {
            "key": "<< (bits-1)",
            "value": "Move to opposite end"
          },
          {
            "key": "|",
            "value": "Combine results"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The pipe character for Bitwise OR.",
        "codeSnippet": "return leftSide ___ rightSide;",
        "correctAnswer": "|"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Used in Fast Fourier Transform (FFT) to organize data. Essential for digital signals! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is bit reversal the same as bitwise NOT (~)?",
        "options": [
          "No (Reversing order vs Inverting)",
          "Yes",
          "Only in elite mode"
        ],
        "correctAnswer": "No (Reversing order vs Inverting)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Base case: 0 bits left.",
        "codeSnippet": "if (bits ___ 0) return 0;",
        "correctAnswer": "=="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Turn the world upside down! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I reversed?\"",
        "options": [
          "Maybe!",
          "No.",
          "0"
        ],
        "correctAnswer": "Maybe!"
      }
    ]
  },
  {
    "order": 67,
    "title": "Power Check",
    "desc": "Is it a power of two?",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Power Birds! Is this number a power of 2 (2, 4, 8, 16...)? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"If N is 1, YES. If N is even, check N/2. If ODD, NO! 🦜\"",
        "codeSnippet": "bool isPower(n) {\n  if (n == 1) return true;\n  if (n == 0 || n % 2 != 0) return false;\n  return isPower(n / 2);\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Is 32 a power of 2?",
        "options": [
          "Yes",
          "No",
          "Only in binary"
        ],
        "correctAnswer": "Yes"
      },
      {
        "type": "match_following",
        "questionText": "Match Numbers!",
        "pairs": [
          {
            "key": "2^5",
            "value": "32"
          },
          {
            "key": "2^10",
            "value": "1024"
          },
          {
            "key": "Non-power",
            "value": "15"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Bitwise trick for power of 2.",
        "codeSnippet": "return (n > 0) && ((n & (n ___ 1)) == 0);",
        "correctAnswer": "-"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Powers of 2 only have exactly ONE bit set. Bitwise logic is usually faster, but recursion is clearer for beginners! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Recursive depth for 2^N?",
        "options": [
          "N",
          "2^N",
          "1"
        ],
        "correctAnswer": "N"
      },
      {
        "type": "code_fill_in",
        "questionText": "Condition for odd number.",
        "codeSnippet": "if (n ___ 2 != 0) return false;",
        "correctAnswer": "%"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Double up, fledgling! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I a power of 2?\"",
        "options": [
          "YOU ARE THE ONE!",
          "No.",
          "0"
        ],
        "correctAnswer": "YOU ARE THE ONE!"
      }
    ]
  },
  {
    "order": 68,
    "title": "Recursive Logarithm",
    "desc": "Calculating log N recursively.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Log Logic! Log2(N) is how many times you can divide N by 2 before reaching 1. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"1 + log2(N/2). Sound familiar? 🦜\"",
        "codeSnippet": "int log2(n) {\n  if (n <= 1) return 0;\n  return 1 + log2(n >> 1);\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is log2(128)?",
        "options": [
          "7",
          "8",
          "6"
        ],
        "correctAnswer": "7"
      },
      {
        "type": "match_following",
        "questionText": "Match Log Bases!",
        "pairs": [
          {
            "key": "log2(8)",
            "value": "3"
          },
          {
            "key": "log2(1)",
            "value": "0"
          },
          {
            "key": "log2(2)",
            "value": "1"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Complete the recursive log call.",
        "codeSnippet": "return 1 + ___(n / 2);",
        "correctAnswer": "log2"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Log N is the height of most balanced recursive trees. It's the speed of light in DSA! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "If N doubles, what happens to log N?",
        "options": [
          "Increases by 1",
          "Doubles",
          "Stays same"
        ],
        "correctAnswer": "Increases by 1"
      },
      {
        "type": "code_fill_in",
        "questionText": "Base case return.",
        "codeSnippet": "if (n < 2) return ___ ;",
        "correctAnswer": "0"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Complexity in reverse! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Do you have log brains?\"",
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
    "order": 69,
    "title": "Multi-Multiply (Karatsuba Final)",
    "desc": "Recursive bigint multiplication depth.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Final Math Peak! To multiply two giant numbers, split them into High/Low parts and use 3 products! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This recursive recursion reduces complexity from O(N^2) to O(N^1.58). This is the Karatsuba ascension! 🦜\"",
        "codeSnippet": "Z0 = karatsuba(low1, low2)\nZ2 = karatsuba(high1, high2)\nZ1 = karatsuba(low1+high1, low2+high2) - Z0 - Z2"
      },
      {
        "type": "multiple_choice",
        "questionText": "How many recursive multiplications per step in Karatsuba?",
        "options": [
          "3",
          "4",
          "1"
        ],
        "correctAnswer": "3"
      },
      {
        "type": "match_following",
        "questionText": "Match Multiplying Methods!",
        "pairs": [
          {
            "key": "Traditional",
            "value": "O(N^2)"
          },
          {
            "key": "Karatsuba",
            "value": "O(N^1.58)"
          },
          {
            "key": "Schoolbook",
            "value": "4 sub-multiplies"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The middle term Z1 logic.",
        "codeSnippet": "Z1 = kar(a0+a1, b0+b1) - Z2 ___ Z0;",
        "correctAnswer": "-"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Math is just recursion in number-space! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is Karatsuba better for small numbers?",
        "options": [
          "No (Overhead of recursion)",
          "Yes",
          "Always"
        ],
        "correctAnswer": "No (Overhead of recursion)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Recursive call name.",
        "codeSnippet": "res = ___(high, high);",
        "correctAnswer": "karatsuba"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Multiply your speed! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I your product?\"",
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
    "order": 70,
    "title": "Master Point (Recursion 7)",
    "desc": "Bitweaver status confirmed.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"STAGE 7 COMPLETE! GCDs, Binary Powers, Karatsuba, and Bit Flips. Your logical wings are massive! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of binary exponentiation?",
        "options": [
          "O(log N)",
          "O(N)",
          "O(1)"
        ],
        "correctAnswer": "O(log N)"
      },
      {
        "type": "multiple_choice",
        "questionText": "How many recursive calls per step in Karatsuba?",
        "options": [
          "3",
          "4",
          "2"
        ],
        "correctAnswer": "3"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"You are a Bit Weaver! In Stage 8, we explore the depth of Linked Lists and Graphs! 🦜\""
      },
      {
        "type": "match_following",
        "questionText": "Match the Rank!",
        "pairs": [
          {
            "key": "Stage 7",
            "value": "Bit Weaver"
          },
          {
            "key": "Stage 8",
            "value": "Graph Glider"
          },
          {
            "key": "Next",
            "value": "Recursive Paths"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Bits processed.",
        "codeSnippet": "7 * ___ ;",
        "correctAnswer": "100"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The numbers are deep. The path is bright! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Fly to the graphs?",
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
        "questionText": "Final Shift?",
        "options": [
          "Shift Left!",
          "Done.",
          "0"
        ],
        "correctAnswer": "Shift Left!"
      }
    ]
  }
];

module.exports = stage7;
