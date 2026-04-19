const stage4 = [
  {
    "order": 31,
    "title": "Segmented Sieve",
    "desc": "Finding primes in a giant range [L, R].",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Deep exploration! What if you need primes between 10^9 and 10^9 + 10^6? A standard sieve would explode! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Segmented Sieve! Use a small sieve up to sqrt(R) first. Then, for each prime found, mark its multiples in the [L, R] segment. 🦜\"",
        "codeSnippet": "for (long p : primes) {\n  long start = (L / p) * p;\n  if (start < L) start += p;\n  for (long j = start; j <= R; j += p) isPrimeInRange[j - L] = false;\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the memory complexity of Segmented Sieve?",
        "options": [
          "O(R - L + sqrt(R))",
          "O(R)",
          "O(L)"
        ],
        "correctAnswer": "O(R - L + sqrt(R))"
      },
      {
        "type": "match_following",
        "questionText": "Match the Ranges!",
        "pairs": [
          {
            "key": "Standard Sieve",
            "value": "Up to 10^7"
          },
          {
            "key": "Segmented Sieve",
            "value": "Range of 10^6 up to 10^12"
          },
          {
            "key": "Memory Bound",
            "value": "Size of segment"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Initial offset in the segment array.",
        "codeSnippet": "mark[j ___ L] = false;",
        "correctAnswer": "-"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This allows us to find primes in segments for very large numbers while keeping memory low! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Minimum primes needed to sieve up to R?",
        "options": [
          "Primes up to sqrt(R)",
          "Primes up to R/2",
          "All numbers"
        ],
        "correctAnswer": "Primes up to sqrt(R)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Segment size.",
        "codeSnippet": "R ___ L",
        "correctAnswer": "-"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Explore the gaps! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Segment reached?\"",
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
    "title": "Smallest Prime Factor (SPF)",
    "desc": "Pre-calculating factors for speed.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Factorization Hack! By modifying the Sieve, we can store the Smallest Prime Factor for EVERY number! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Instead of `isPrime[i] = false`, do `spf[i] = p` for the first prime that hits it! 🦜\"",
        "codeSnippet": "for (i = 2; i <= n; i++) {\n  if (spf[i] == i) { // i is prime\n    for (j = i*i; j <= n; j += i)\n      if (spf[j] == j) spf[j] = i;\n  }\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Value of spf[6]?",
        "options": [
          "2",
          "3",
          "6"
        ],
        "correctAnswer": "2"
      },
      {
        "type": "match_following",
        "questionText": "Match SPF Benefits!",
        "pairs": [
          {
            "key": "spf[15]",
            "value": "3"
          },
          {
            "key": "Factorizing 30",
            "value": "30->15->5->1"
          },
          {
            "key": "Complexity",
            "value": "O(log N) per query"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Condition to set SPF for an unmarked number.",
        "codeSnippet": "if (spf[j] ___ j) spf[j] = p;",
        "correctAnswer": "=="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Once you have the SPF array, you can factorize any number like a breeze! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is SPF(X) always prime?",
        "options": [
          "SQUAWK YES!",
          "No",
          "Only for even numbers"
        ],
        "correctAnswer": "SQUAWK YES!"
      },
      {
        "type": "code_fill_in",
        "questionText": "SPF acronym.",
        "codeSnippet": "Smallest ___ Factor",
        "correctAnswer": "Prime"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Find the core! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Pre-calced?\"",
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
    "title": "Euler's Totient (Φ)",
    "desc": "The count of co-primes.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Phi Bird! Φ(N) is the count of numbers from 1 to N that are CO-PRIME to N (i.e. GCD(X, N) = 1). 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Example: Φ(4) = 2 ({1, 3}). Φ(5) = 4 ({1, 2, 3, 4}). 🦜\"."
      },
      {
        "type": "multiple_choice",
        "questionText": "What is Φ(P) for a prime P?",
        "options": [
          "P - 1",
          "P",
          "1"
        ],
        "correctAnswer": "P - 1"
      },
      {
        "type": "match_following",
        "questionText": "Match the Phi!",
        "pairs": [
          {
            "key": "Φ(1)",
            "value": "1"
          },
          {
            "key": "Φ(6)",
            "value": "2 ({1, 5})"
          },
          {
            "key": "Φ(8)",
            "value": "4 ({1, 3, 5, 7})"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Condition for co-prime check.",
        "codeSnippet": "if (gcd(i, n) == ___ ) count++;",
        "correctAnswer": "1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Euler's Product Formula: Φ(N) = N * Π(1 - 1/p) for every prime factor p of N. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Φ(10)? (Factors 2, 5)",
        "options": [
          "10 * (1-1/2) * (1-1/5) = 4",
          "5",
          "2"
        ],
        "correctAnswer": "10 * (1-1/2) * (1-1/5) = 4"
      },
      {
        "type": "code_fill_in",
        "questionText": "Greek letter for Totient.",
        "codeSnippet": "___ (N)",
        "correctAnswer": "Phi"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The counting bird! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Φ(3) is?\"",
        "options": [
          "2",
          "3",
          "1"
        ],
        "correctAnswer": "2"
      }
    ]
  },
  {
    "order": 34,
    "title": "Modular Power",
    "desc": "Calculating giant exponents efficiently.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Huge heights! How to find 2^1000 % 7? You can't just calculate 2^1000. It's too big! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Binary Exponentiation! Break the exponent into bits and square the base at each step. 🦜\"",
        "codeSnippet": "while (b > 0) {\n  if (b & 1) res = (res * a) % m;\n  a = (a * a) % m;\n  b >>= 1;\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of Modular Exponentiation?",
        "options": [
          "O(log Exponent)",
          "O(Exponent)",
          "O(1)"
        ],
        "correctAnswer": "O(log Exponent)"
      },
      {
        "type": "match_following",
        "questionText": "Match the Power Step!",
        "pairs": [
          {
            "key": "b & 1",
            "value": "Check if current bit is 1"
          },
          {
            "key": "a = (a * a) % m",
            "value": "Square the base"
          },
          {
            "key": "b >>= 1",
            "value": "Next bit"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Update result in binary exponentiation.",
        "codeSnippet": "res = (res * ___) % m;",
        "correctAnswer": "a"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Remember: (A * B) % M = ((A % M) * (B % M)) % M. Apply this at every step to prevent data overflows! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Value of 2^3 % 5?",
        "options": [
          "3",
          "8",
          "1"
        ],
        "correctAnswer": "3"
      },
      {
        "type": "code_fill_in",
        "questionText": "Operation to keep numbers small.",
        "codeSnippet": "___ (%)",
        "correctAnswer": "Modulo"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Scaling the cliff! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Powered up?\"",
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
    "order": 35,
    "title": "Fermat's Little Theorem",
    "desc": "The prime shortcut.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Fermat's Secret Flight! If P is prime and A is not divisible by P, then `A^(P-1) % P = 1`. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This means `A^P % P = A`. A very powerful identity for cryptography! 🦜\"",
        "codeSnippet": "2^6 % 7 = 1\n(2^7 % 7 = 2)"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is 3^4 % 5?",
        "options": [
          "1",
          "3",
          "4"
        ],
        "correctAnswer": "1"
      },
      {
        "type": "match_following",
        "questionText": "Match Fermat Logic!",
        "pairs": [
          {
            "key": "P",
            "value": "Must be prime"
          },
          {
            "key": "A^(P-1)",
            "value": "≡ 1 mod P"
          },
          {
            "key": "Condition",
            "value": "GCD(A, P) = 1"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Euler's Extension: A^Φ(M) % M = ___ .",
        "codeSnippet": "result = ___ ;",
        "correctAnswer": "1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Euler's Totient Theorem generalizes Fermat: `A^Φ(M) ≡ 1 mod M`. This works for ANY M! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Which theorem is used in RSA encryption?",
        "options": [
          "Euler's/Fermat's",
          "Pythagoras",
          "Newton's"
        ],
        "correctAnswer": "Euler's/Fermat's"
      },
      {
        "type": "code_fill_in",
        "questionText": "Theorem author.",
        "codeSnippet": "___ 's Little Theorem",
        "correctAnswer": "Fermat"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The prime elegance! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is P prime?\"",
        "options": [
          "SQUAWK YES!",
          "No.",
          "Maybe"
        ],
        "correctAnswer": "SQUAWK YES!"
      }
    ]
  },
  {
    "order": 36,
    "title": "Modular Inverse",
    "desc": "How to divide in modular world.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"In modular math, `1 / A` doesn't exist. Instead, we find its MATCH `B` such that `(A * B) % M = 1`. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"If M is prime, use Fermat: `A^(M-2) % M` is the inverse of A! 🦜\"",
        "codeSnippet": "inv(A) = power(A, M-2, M);"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the inverse of 2 mod 5?",
        "options": [
          "3 (2*3 = 6 ≡ 1 mod 5)",
          "2",
          "1"
        ],
        "correctAnswer": "3 (2*3 = 6 ≡ 1 mod 5)"
      },
      {
        "type": "match_following",
        "questionText": "Match Inverse Methods!",
        "pairs": [
          {
            "key": "M is prime",
            "value": "Fermat (A^(M-2))"
          },
          {
            "key": "M is anything",
            "value": "Extended Euclid"
          },
          {
            "key": "A and M",
            "value": "Must be Co-prime"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Inverse exists if GCD(A, M) is ___ .",
        "codeSnippet": "if (gcd(a, m) == ___ )",
        "correctAnswer": "1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Division becomes Multiplication! `(A / B) % M = (A * inv(B)) % M`. A game changer! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Does inverse of 2 mod 10 exist?",
        "options": [
          "No (GCD(2, 10) = 2, not 1)",
          "Yes",
          "Depends on Pico"
        ],
        "correctAnswer": "No (GCD(2, 10) = 2, not 1)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Inverse relation.",
        "codeSnippet": "(a * b) % ___ == 1",
        "correctAnswer": "m"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Flip the bird! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Inverse found?\"",
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
    "title": "Wilson's Theorem",
    "desc": "The factorial prime check.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Factorial Math! Wilson's Theorem says if P is prime, then `(P-1)! % P = P-1` (or -1). 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Example: P=5. (5-1)! = 4! = 24. 24 % 5 = 4 (Pass!). 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What is (7-1)! % 7?",
        "options": [
          "6",
          "1",
          "0"
        ],
        "correctAnswer": "6"
      },
      {
        "type": "match_following",
        "questionText": "Match Wilson Truth!",
        "pairs": [
          {
            "key": "(P-1)!",
            "value": "≡ -1 mod P"
          },
          {
            "key": "Applicability",
            "value": "Checking primality"
          },
          {
            "key": "Performance",
            "value": "Slow (O(P))"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Inverse of (P-1) mod P is always ___ .",
        "codeSnippet": "result = ___ ;",
        "correctAnswer": "P-1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"While theoretically perfect, calculating factorials is O(P), making it slower than Trial Division! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Can we use Wilson's for P=10^9?",
        "options": [
          "No (Too slow)",
          "Yes",
          "Only in binary"
        ],
        "correctAnswer": "No (Too slow)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Mathematical constant.",
        "codeSnippet": "___ !",
        "correctAnswer": "Factorial"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Heavy lifting! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Factorial ready?\"",
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
    "title": "Miller-Rabin (Intro)",
    "desc": "Probabilistic Primality.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Speeding through primes! Miller-Rabin is a probabilistic algorithm that checks large numbers quickly. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"It uses Fermat's theorem with multiple 'witnesses'. If it fails for any, the number is COMPOSITE! 🦜\"",
        "codeSnippet": "if (millerRabin(n, iterations)) return maybe_prime;"
      },
      {
        "type": "multiple_choice",
        "questionText": "Can Miller-Rabin be 100% sure for all 64-bit numbers?",
        "options": [
          "Yes, if used with specific bases ({2, 3, 5, 7, ...})",
          "No, it's always an estimate",
          "Only and always"
        ],
        "correctAnswer": "Yes, if used with specific bases ({2, 3, 5, 7, ...})"
      },
      {
        "type": "match_following",
        "questionText": "Match Test Types!",
        "pairs": [
          {
            "key": "Deterministic",
            "value": "Trial Division"
          },
          {
            "key": "Probabilistic",
            "value": "Miller-Rabin"
          },
          {
            "key": "Scale",
            "value": "Numbers up to 10^18"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Base used in basic Miller-Rabin check.",
        "codeSnippet": "a = 2 + rand() % (n - ___ );",
        "correctAnswer": "4"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Successively squaring and checking for nontrivial roots of unity makes this test extremely hard to fool! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of one Miller-Rabin iteration?",
        "options": [
          "O(log^3 N)",
          "O(N)",
          "O(sqrt N)"
        ],
        "correctAnswer": "O(log^3 N)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Test name.",
        "codeSnippet": "Miller- ___",
        "correctAnswer": "Rabin"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Probably prime! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Ready to test?\"",
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
    "title": "Prime Density",
    "desc": "How many primes are there?",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Endless flight! Prime Number Theorem: Primes become rarer as numbers get larger. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The number of primes up to N is approximately `N / ln(N)`. 🦜\"",
        "codeSnippet": "density = 1 / log(100); // approx"
      },
      {
        "type": "multiple_choice",
        "questionText": "Approximate number of primes up to 100?",
        "options": [
          "21 (100 / ln 100 ≈ 21.7)",
          "50",
          "10"
        ],
        "correctAnswer": "21 (100 / ln 100 ≈ 21.7)"
      },
      {
        "type": "match_following",
        "questionText": "Match the Counts!",
        "pairs": [
          {
            "key": "π(10)",
            "value": "4 (2, 3, 5, 7)"
          },
          {
            "key": "π(100)",
            "value": "25"
          },
          {
            "key": "π(N)",
            "value": "Count of primes up to N"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Probability a random number up to N is prime.",
        "codeSnippet": "p = 1 / ___ (n);",
        "correctAnswer": "ln"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This means to find a prime near X, you only need to check about ln(X) numbers! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "How many numbers to check to find a prime near 10^9?",
        "options": [
          "about 20 (ln 10^9 ≈ 20.7)",
          "1,000",
          "Half of them"
        ],
        "correctAnswer": "about 20 (ln 10^9 ≈ 20.7)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Logarithm base.",
        "codeSnippet": "ln (Natural ___ )",
        "correctAnswer": "Log"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Infinite horizon! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Will we ever run out?\"",
        "options": [
          "NEVER (Euclid proved this!)",
          "Yes.",
          "0"
        ],
        "correctAnswer": "NEVER (Euclid proved this!)"
      }
    ]
  },
  {
    "order": 40,
    "title": "Master Point (Mathbits 4)",
    "desc": "Sieve sage status confirmed.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"STAGE 4 COMPLETE! You've mastered Euler's Totient, Fermat's shortcuts, and the great Sieve of the Segments. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Modular Exponentiation is O(log Exponent)?",
        "options": [
          "SQUAWK YES!",
          "No",
          "Only in binary"
        ],
        "correctAnswer": "SQUAWK YES!"
      },
      {
        "type": "multiple_choice",
        "questionText": "Formula to get Modular Inverse for prime M?",
        "options": [
          "A^(M-2) % M",
          "A * M",
          "A + M"
        ],
        "correctAnswer": "A^(M-2) % M"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"You are a Sieve Sage! In Stage 5, we master Advanced Modular Math: Chinese Remainder Theorem, Discrete Logs, and Roots! 🦜\""
      },
      {
        "type": "match_following",
        "questionText": "Match the Rank!",
        "pairs": [
          {
            "key": "Stage 4",
            "value": "Sieve Sage"
          },
          {
            "key": "Stage 5",
            "value": "Modulo Master"
          },
          {
            "key": "Status",
            "value": "Titan-grade"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Totient Points.",
        "codeSnippet": "4 * ___ ;",
        "correctAnswer": "100"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Flying at speed! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Ready for Modulo Mastery?",
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
        "questionText": "Final Euler?",
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

module.exports = stage4;
