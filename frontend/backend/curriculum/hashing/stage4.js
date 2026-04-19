const stage4 = [
  {
    "order": 31,
    "title": "Polynomial String Hashing",
    "desc": "The gold standard for string IDs.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Polynomial Hashing! We treat each string as a number in base-P (usually 31 or 53). 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The formula ensures that 'abc' hashes differently than 'cba' because positions are weighted! 🦜\"",
        "codeSnippet": "hash = (s[0]*P^0 + s[1]*P^1 + ... + s[n-1]*P^(n-1)) % M;"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why use 53 as a base for strings with upper AND lower case?",
        "options": [
          "It's larger than the number of unique characters (52)",
          "It's a lucky number",
          "It's smaller than 31"
        ],
        "correctAnswer": "It's larger than the number of unique characters (52)"
      },
      {
        "type": "match_following",
        "questionText": "Match Hash Bases!",
        "pairs": [
          {
            "key": "P = 31",
            "value": "Lower case only"
          },
          {
            "key": "P = 53",
            "value": "Mixed case"
          },
          {
            "key": "M = 10^9+7",
            "value": "Large Prime Modulo"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Value of character 'a' in most hashes (offset).",
        "codeSnippet": "int val = s[i] - '___' + 1;",
        "correctAnswer": "a"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"We use `+ 1` so that 'a' doesn't become zero, which would make leading 'a's invisible to the hash! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the time complexity to hash a string of length L?",
        "options": [
          "O(L)",
          "O(1)",
          "O(2^L)"
        ],
        "correctAnswer": "O(L)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Large prime modulo used in competitive programming.",
        "codeSnippet": "1e9 + ___",
        "correctAnswer": "7"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Build the string strong! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are you poly-ready?\"",
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
    "order": 32,
    "title": "Rolling Hash Intro",
    "desc": "Updating hashes as you slide.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Rolling Hash! Imagine a sliding window over a long string. Instead of re-hashing the whole window, just UPDATE the hash as it moves! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Remove the 'outgoing' char and add the 'incoming' one in O(1)! 🦜\"",
        "codeSnippet": "newHash = (oldHash - outChar) / P + inChar * P^(k-1);"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the main advantage of a rolling hash?",
        "options": [
          "O(1) update time per window slide",
          "It uses zero memory",
          "It never collides"
        ],
        "correctAnswer": "O(1) update time per window slide"
      },
      {
        "type": "match_following",
        "questionText": "Match Rolling Actions!",
        "pairs": [
          {
            "key": "Subtract",
            "value": "Remove old lead char"
          },
          {
            "key": "Divide/Shift",
            "value": "Move window right"
          },
          {
            "key": "Add",
            "value": "Include new char"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The multiplier used to shift the window efficiently.",
        "codeSnippet": "hash = (hash * P + char) ___ MOD;",
        "correctAnswer": "%"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This technique is the core of the Rabin-Karp pattern matching algorithm! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Rolling hash complexity to check ALL windows of length M in string N?",
        "options": [
          "O(N)",
          "O(N * M)",
          "O(M^2)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Value representing current hash update speed.",
        "codeSnippet": "O( ___ )",
        "correctAnswer": "1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Slide and glide! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are you rolling?\"",
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
    "order": 33,
    "title": "Rabin-Karp Algorithm",
    "desc": "Searching for patterns with math.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Rabin-Karp! To find a pattern 'P' in text 'T', calculate hash(P) and compare it to rolling hashes of 'T'. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"If hashes match, check the characters (to avoid false positives/collisions)! 🦜\"",
        "codeSnippet": "if (hashP == currentHashT) {\n  if (verifyWords(P, T, i)) return i;\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the average time complexity of Rabin-Karp?",
        "options": [
          "O(N + M)",
          "O(N * M)",
          "O(N^2)"
        ],
        "correctAnswer": "O(N + M)"
      },
      {
        "type": "match_following",
        "questionText": "Match Rabin-Karp Steps!",
        "pairs": [
          {
            "key": "Precompute",
            "value": "Hash of pattern"
          },
          {
            "key": "Slide",
            "value": "Rolling hash update"
          },
          {
            "key": "Compare",
            "value": "Check hash match"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The character check performed ONLY when hashes match.",
        "codeSnippet": "if (h1 ___ h2) doubleCheck();",
        "correctAnswer": "=="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"If your hash function is elite, you'll rarely need to do the expensive string comparison! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Worst-case complexity if EVERY window collides?",
        "options": [
          "O(N * M)",
          "O(N)",
          "O(1)"
        ],
        "correctAnswer": "O(N * M)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Rolling hash update: Subtract (oldChar * P^ ___ ).",
        "codeSnippet": "m - ___",
        "correctAnswer": "1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Hunt for patterns like a hawk! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Found it?\"",
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
    "order": 34,
    "title": "Large Prime Modulo",
    "desc": "Managing the overflow birdhouse.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Large Modulo! Since string hashes get HUGE, we always work with `% MOD` at every step to prevent overflows and maintain uniformity. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Subtraction trick: `(a - b) % MOD` can be negative. Always add MOD to fix it! 🦜\"",
        "codeSnippet": "hash = (hash - val + MOD) % MOD;"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why is it important to add MOD before taking the final modulo in subtraction?",
        "options": [
          "To keep the result positive",
          "It makes it faster",
          "To avoid floating point errors"
        ],
        "correctAnswer": "To keep the result positive"
      },
      {
        "type": "match_following",
        "questionText": "Match Modulo Math!",
        "pairs": [
          {
            "key": "(A + B) % M",
            "value": "(A%M + B%M) % M"
          },
          {
            "key": "(A * B) % M",
            "value": "((A%M) * (B%M)) % M"
          },
          {
            "key": "A - B",
            "value": "(A - B + M) % M"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The constant added for safe subtraction.",
        "codeSnippet": "h = (h - v + ___ ) % M;",
        "correctAnswer": "M"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Commonly used primes: 10^9+7, 10^9+9, or even 10^12+39 for elite accuracy! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What happens if we don't use a prime MOD?",
        "options": [
          "Higher collision rate (patterns in keys align with divisors)",
          "Nothing",
          "It becomes faster"
        ],
        "correctAnswer": "Higher collision rate (patterns in keys align with divisors)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Standard exponent for large prime modulo.",
        "codeSnippet": "10^ ___ + 7",
        "correctAnswer": "9"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Keep your numbers safe! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are you overflowing?\"",
        "options": [
          "NEVER!",
          "Yes.",
          "Maybe."
        ],
        "correctAnswer": "NEVER!"
      }
    ]
  },
  {
    "order": 35,
    "title": "Double Hashing for Strings",
    "desc": "Virtually zero collisions.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Double String Hashing! Even with a prime modulo, collisions happen. To be 100% safe, calculate TWO hashes with different MODS for the same string! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"If both `h1(S) == h1(P)` AND `h2(S) == h2(P)`, the chance of a false match is astronomical! 🦜\"",
        "codeSnippet": "pair<long, long> getHash(s) {\n  return {h1(s), h2(s)};\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "If one hash has a collision probability of 1/10^9, what is the probability for double hashing?",
        "options": [
          "1 / 10^18",
          "2 / 10^9",
          "1 / 10^4.5"
        ],
        "correctAnswer": "1 / 10^18"
      },
      {
        "type": "match_following",
        "questionText": "Match Multi-Mods!",
        "pairs": [
          {
            "key": "Mod 1",
            "value": "10^9 + 7"
          },
          {
            "key": "Mod 2",
            "value": "10^9 + 9"
          },
          {
            "key": "Safety",
            "value": "Combine both results"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The structure used to return twin hashes in C++.",
        "codeSnippet": "___ <long, long> hashes;",
        "correctAnswer": "pair"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This is essentially required in top-tier competitive programming to avoid 'anti-hash' test cases! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Does double hashing double the time complexity?",
        "options": [
          "Effectively yes (O(2N) still = O(N))",
          "No, it's faster",
          "Yes, it becomes O(N^2)"
        ],
        "correctAnswer": "Effectively yes (O(2N) still = O(N))"
      },
      {
        "type": "code_fill_in",
        "questionText": "Probability of collision in double hashing.",
        "codeSnippet": "P1 ___ P2",
        "correctAnswer": "*"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Safe as a bird in a cage! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are you double-safe?\"",
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
    "order": 36,
    "title": "Sliding Hash Applications",
    "desc": "Where rolling math matters.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Beyond basic search! Rolling hashes are used to find common substrings in DNA, detect plagiarism, and sync files! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Rsync uses rolling hashes to find which parts of a file have changed, so only the differences are sent! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Rsync's efficient update uses:",
        "options": [
          "Rolling Checksums",
          "Full file upload",
          "Manual comparison"
        ],
        "correctAnswer": "Rolling Checksums"
      },
      {
        "type": "match_following",
        "questionText": "Match Rolling Uses!",
        "pairs": [
          {
            "key": "Rsync",
            "value": "File Synchronization"
          },
          {
            "key": "Bioinformatics",
            "value": "Sequence Alignment"
          },
          {
            "key": "Anti-Plagiarism",
            "value": "Common Fingerprints"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Term for a unique string signature.",
        "codeSnippet": "\"FINGER\" + \"___\" ;",
        "correctAnswer": "PRINT"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"By hashing small chunks of text, we can find similarities even if the files are mostly different! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Can rolling hashes find similar strings if only ONE character is changed?",
        "options": [
          "No (Whole hash changes usually)",
          "Yes, always",
          "Only in elite mode"
        ],
        "correctAnswer": "No (Whole hash changes usually)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Tool for finding file differences.",
        "codeSnippet": "___ tool",
        "correctAnswer": "diff"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The sync is strong! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are you synchronized?\"",
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
    "order": 37,
    "title": "Modular Exponentiation",
    "desc": "Fast powers for hashing.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"To update a rolling hash, we often need `P^(length-1) % MOD`. We can calculate this in O(log N) using Binary Exponentiation! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Pre-calculating all powers of P up to length L is best for rolling hashes! 🦜\"",
        "codeSnippet": "pow[0] = 1;\nfor(i=1; i<L; i++) pow[i] = (pow[i-1] * P) % MOD;"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why pre-calculate the powers?",
        "options": [
          "To make every window update O(1)",
          "To use more RAM",
          "It's easier to write"
        ],
        "correctAnswer": "To make every window update O(1)"
      },
      {
        "type": "match_following",
        "questionText": "Match Power Math!",
        "pairs": [
          {
            "key": "P^3",
            "value": "P*P*P"
          },
          {
            "key": "pow[i]",
            "value": "P^i % MOD"
          },
          {
            "key": "Binary Exp",
            "value": "O(log N)"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Pre-computing the exponent array.",
        "codeSnippet": "pow[i] = (pow[i-1] ___ P) % MOD;",
        "correctAnswer": "*"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Pre-computing powers of P and their modular inverses allows for arbitrary substring hashing in O(1)! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity to pre-compute L powers?",
        "options": [
          "O(L)",
          "O(L log L)",
          "O(1)"
        ],
        "correctAnswer": "O(L)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Base value for powers.",
        "codeSnippet": "pow[0] = ___ ;",
        "correctAnswer": "1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Power up your hash! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Do you feel the power?\"",
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
    "order": 38,
    "title": "Substring Hash O(1)",
    "desc": "The Prefix Sum of Hashing.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Substring Power! By pre-calculating the 'Prefix Hashes', we can find the hash of ANY substring [L...R] in O(1) time! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Formula: `Hash[L...R] = (Prefix[R] - Prefix[L-1]) / P^L`. 🦜\"",
        "codeSnippet": "res = (pref[r] - pref[l-1] + MOD) % MOD;\nres = (res * invPow[l]) % MOD;"
      },
      {
        "type": "multiple_choice",
        "questionText": "What concept is this similar to?",
        "options": [
          "Prefix Sum Arrays",
          "Binary Search",
          "Recursion"
        ],
        "correctAnswer": "Prefix Sum Arrays"
      },
      {
        "type": "match_following",
        "questionText": "Match Prefix Logic!",
        "pairs": [
          {
            "key": "Prefix[i]",
            "value": "Hash of S[0...i]"
          },
          {
            "key": "Subtract Pref[L-1]",
            "value": "Remove preceding items"
          },
          {
            "key": "Multiply Inv",
            "value": "Proper alignment"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The required constant for substring extraction.",
        "codeSnippet": "prefix[i] = (prefix[i-1] + s[i] * ___ [i]) % MOD;",
        "correctAnswer": "pow"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This allows you to check if two substrings are equal in O(1), making it an elite alternative to Suffix Trees! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity to build Prefix Hash array for length N?",
        "options": [
          "O(N)",
          "O(1)",
          "O(N^2)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Accessing substring from L to R.",
        "codeSnippet": "result = hash( ___ , R)",
        "correctAnswer": "L"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Snippets in a snap! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is it instant?\"",
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
    "order": 39,
    "title": "Language Hash Secrets",
    "desc": "Java, Python, and C++ internals.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Language Nests! Every language has its' own default hash function for strings. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Java uses `h = 31*h + c`. Python uses a more complex 'Salted' hash to prevent attacks. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What is 'Hash Seed / Salting'?",
        "options": [
          "Adding a random number to the hash start to stop hackers",
          "Adding salt to the birdseed",
          "Making the hash slower"
        ],
        "correctAnswer": "Adding a random number to the hash start to stop hackers"
      },
      {
        "type": "match_following",
        "questionText": "Match the Origins!",
        "pairs": [
          {
            "key": "Java",
            "value": "31 multiplier"
          },
          {
            "key": "Python",
            "value": "SipHash"
          },
          {
            "key": "C++",
            "value": "std::hash (Implementation defined)"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Java string hash constant.",
        "codeSnippet": "multiplier = ___ ;",
        "correctAnswer": "31"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"In Python, your string hash might CHANGE every time you restart the script due to the randomized seed! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Why randomize the seed?",
        "options": [
          "To prevent Denial of Service (DoS) attacks using collisions",
          "For fun",
          "To save memory"
        ],
        "correctAnswer": "To prevent Denial of Service (DoS) attacks using collisions"
      },
      {
        "type": "code_fill_in",
        "questionText": "Python's robust hash name.",
        "codeSnippet": "___ Hash",
        "correctAnswer": "Sip"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The secrets of the flock! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are you salted?\"",
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
    "order": 40,
    "title": "Master Point (Hashing 4)",
    "desc": "Rolling raptor status confirmed.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"STAGE 4 COMPLETE! You've mastered Polynomials, Rabin-Karp, and O(1) Substring Hashing. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What does Rabin-Karp use to achieve O(N+M)?",
        "options": [
          "Rolling Hash",
          "Binary Search",
          "Sorting"
        ],
        "correctAnswer": "Rolling Hash"
      },
      {
        "type": "multiple_choice",
        "questionText": "Probability of collision with Double Hashing (Size 10^9)?",
        "options": [
          "1 / 10^18",
          "1 / 10^9",
          "1 / 2"
        ],
        "correctAnswer": "1 / 10^18"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"You are a Rolling Raptor! In Stage 5, we look INSIDE the map to see how Hash Sets and Maps work! 🦜\""
      },
      {
        "type": "match_following",
        "questionText": "Match the Rank!",
        "pairs": [
          {
            "key": "Stage 4",
            "value": "Rolling Raptor"
          },
          {
            "key": "Stage 5",
            "value": "Map Mechanic"
          },
          {
            "key": "Next",
            "value": "Set Secrets"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Characters Rolled.",
        "codeSnippet": "4 * ___ ;",
        "correctAnswer": "100"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Slide to the next level! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Ready for Map Mechanics?",
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
        "questionText": "Final Window Update?",
        "options": [
          "Slide!",
          "Done.",
          "0"
        ],
        "correctAnswer": "Slide!"
      }
    ]
  }
];

module.exports = stage4;
