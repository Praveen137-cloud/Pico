const stage5 = [
  {
    "order": 41,
    "title": "Chinese Remainder (Basic)",
    "desc": "Solving simultaneous congruences.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Secret Number! Find a number X such that `X % 3 = 2` and `X % 5 = 3`. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Chinese Remainder Theorem (CRT) says if your moduli (3 and 5) are co-prime, such a number ALWAYS exists! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the smallest X for {X%3=2, X%5=3}?",
        "options": [
          "8",
          "11",
          "13"
        ],
        "correctAnswer": "8"
      },
      {
        "type": "match_following",
        "questionText": "Match the CRT logic!",
        "pairs": [
          {
            "key": "Moduli",
            "value": "Must be Pairwise Co-prime"
          },
          {
            "key": "Solution",
            "value": "Unique modulo (m1*m2*...)"
          },
          {
            "key": "Application",
            "value": "Giant number arithmetic"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Condition for CRT existence.",
        "codeSnippet": "if (gcd(m1, m2) == ___ )",
        "correctAnswer": "1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"For small moduli, you can just loop: Start at 2 (first 3-mod), then check 5, 8, 11... 8 works for both! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Smallest X for {X%2=1, X%3=1}?",
        "options": [
          "1 (1 % 2 = 1, 1 % 3 = 1)",
          "7",
          "5"
        ],
        "correctAnswer": "1 (1 % 2 = 1, 1 % 3 = 1)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Theorem origin.",
        "codeSnippet": "___ Remainder Theorem",
        "correctAnswer": "Chinese"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Hidden in plain sight! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is X found?\"",
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
    "order": 42,
    "title": "CRT (The Formula)",
    "desc": "Direct construction of X.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Math Construction! To solve a system, we use: `X = ∑ (a_i * M/m_i * inv(M/m_i, m_i)) % M`. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This allows you to compute numbers too large for a 64-bit integer by working with small, co-prime moduli! 🦜\"",
        "codeSnippet": "M = m1 * m2 * ... * mn;\nfor (i=0; i<n; i++) {\n  Ni = M / mi;\n  invNi = modInverse(Ni, mi);\n  x = (x + ai * Ni * invNi) % M;\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does Ni represent?",
        "options": [
          "Product of all moduli EXCEPT mi",
          "mi",
          "Smallest prime"
        ],
        "correctAnswer": "Product of all moduli EXCEPT mi"
      },
      {
        "type": "match_following",
        "questionText": "Match the Formula!",
        "pairs": [
          {
            "key": "ai",
            "value": "Target remainder"
          },
          {
            "key": "invNi",
            "value": "Inverse mod mi"
          },
          {
            "key": "M",
            "value": "Common product"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Calculate `Ni`.",
        "codeSnippet": "Ni = total_product / ___ ;",
        "correctAnswer": "mi"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This technique is the basis for 'Modular Arithmetic' systems in high-performance computing! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Can you handle 100-digit numbers using CRT and 32-bit integers?",
        "options": [
          "SQUAWK YES! (With enough moduli)",
          "No",
          "Only in binary"
        ],
        "correctAnswer": "SQUAWK YES! (With enough moduli)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Modular division step.",
        "codeSnippet": "___ (Ni, mi)",
        "correctAnswer": "modInverse"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Assemble the bird! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Formula complete?\"",
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
    "order": 43,
    "title": "Baby-step Giant-step",
    "desc": "Solving a^x ≡ b mod m (Discrete Log).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Finding the hidden exponent! If `3^x % 7 = 6`, how do we find `x`? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Baby-step Giant-step is a Meet-in-the-middle algorithm that runs in O(sqrt(M)) time! 🦜\"",
        "codeSnippet": "sqrtM = sqrt(m);\n// Precompute small steps\nfor (j=0; j<sqrtM; j++) table[pow(a, j, m)] = j;\n// Take giant steps\nfor (i=0; i<sqrtM; i++) {\n  target = (b * inv(pow(a, i*sqrtM, m))) % m;\n  if (table[target]) return i*sqrtM + table[target];\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the complexity of Discrete Logarithm using BSGS?",
        "options": [
          "O(sqrt M)",
          "O(M)",
          "O(log M)"
        ],
        "correctAnswer": "O(sqrt M)"
      },
      {
        "type": "match_following",
        "questionText": "Match the Steps!",
        "pairs": [
          {
            "key": "Baby-step",
            "value": "Precompute small powers"
          },
          {
            "key": "Giant-step",
            "value": "Check chunks of sqrt(M)"
          },
          {
            "key": "Meet-in-middle",
            "value": "The core strategy"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Step size for BSGS.",
        "codeSnippet": "step = ___ (m);",
        "correctAnswer": "sqrt"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This is used to break simple cryptographic systems based on the 'Discrete Log Problem'! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is 3^x % 7 = 6 solvable?",
        "options": [
          "Yes, x = 3 (27 % 7 = 6)",
          "No",
          "Maybe"
        ],
        "correctAnswer": "Yes, x = 3 (27 % 7 = 6)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Data structure for baby steps.",
        "codeSnippet": "unordered_ ___ <int, int> vals",
        "correctAnswer": "map"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Catching the flyer! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Log found?\"",
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
    "order": 44,
    "title": "Discrete Roots",
    "desc": "Solving x^k ≡ a mod p.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Modular Roots! How to find x such that `x^3 % 7 = 6`? This is the reverse of Modular Power. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"We use 'Primitive Roots'! For most primes, there exists a number 'G' such that all its powers generate the entire set {1...p-1}. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is 3 a primitive root mod 7?",
        "options": [
          "SQUAWK YES! (3, 2, 6, 4, 5, 1)",
          "No",
          "Only and always"
        ],
        "correctAnswer": "SQUAWK YES! (3, 2, 6, 4, 5, 1)"
      },
      {
        "type": "match_following",
        "questionText": "Match the Root logic!",
        "pairs": [
          {
            "key": "Primitive Root G",
            "value": "Generates all mod P"
          },
          {
            "key": "x = G^y",
            "value": "Transform to Discrete Log"
          },
          {
            "key": "Solution",
            "value": "Use BSGS on y"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Equation transformation.",
        "codeSnippet": "(g^y)^k ≡ a mod p -> g^(yk) ≡ a ___ p;",
        "correctAnswer": "mod"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"By substituting `x = g^y`, we turn the 'Root' problem into a 'Discrete Log' problem. Clever bird! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Does every prime have a primitive root?",
        "options": [
          "SQUAWK YES!",
          "No",
          "Only 2 and 5"
        ],
        "correctAnswer": "SQUAWK YES!"
      },
      {
        "type": "code_fill_in",
        "questionText": "Root type.",
        "codeSnippet": "P ___ Root",
        "correctAnswer": "rimitive"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Dig to the roots! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Found X?\"",
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
    "order": 45,
    "title": "Matrix Exponentiation 1",
    "desc": "Linear Recurrences transformed.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Matrix Magic! Did you know that any linear sequence (like Fibonacci) can be written as a Matrix multiplication? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"F(n) = F(n-1) + F(n-2) becomes: `[[1,1],[1,0]] * [F(n-1), F(n-2)] = [F(n), F(n-1)]`. 🦜\"",
        "codeSnippet": "Transformation T = [[1, 1], [1, 0]];\nResult = T^(n-1) * [F(1), F(0)];"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the complexity of finding F(10^18) using Matrix Exponentiation?",
        "options": [
          "O(log N)",
          "O(N)",
          "Impossible"
        ],
        "correctAnswer": "O(log N)"
      },
      {
        "type": "match_following",
        "questionText": "Match the Recurrence!",
        "pairs": [
          {
            "key": "Fibonacci",
            "value": "[[1,1],[1,0]]"
          },
          {
            "key": "A(n) = A(n-1) + C",
            "value": "[[1,1],[0,1]]"
          },
          {
            "key": "Exponent",
            "value": "n - 1"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Initial matrix for Fib.",
        "codeSnippet": "mat = {{1, 1}, {___, 0}};",
        "correctAnswer": "1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Wait, matrices can be multiplied by exponents just like numbers! We use Binary Exponentiation on the Matrix! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "If matrix size is KxK, complexity of multiplication?",
        "options": [
          "O(K^3)",
          "O(K^2)",
          "O(K)"
        ],
        "correctAnswer": "O(K^3)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Math tool.",
        "codeSnippet": "M ___ Exponentiation",
        "correctAnswer": "atrix"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Skip the steps! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Matrix powered?\"",
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
    "order": 46,
    "title": "Pollard's Rho",
    "desc": "Fast factorization for giant numbers.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Rho Bird! For numbers up to 10^18, Trial Division takes billions of years. Pollard's Rho does it in seconds! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"It uses a pseudo-random sequence `x = (x^2 + c) % n` and looks for factors using GCD. 🦜\"",
        "codeSnippet": "while (d == 1) {\n  x = (x*x + c) % n;\n  y = (y*y + c) % n; y = (y*y + c) % n;\n  d = gcd(abs(x-y), n);\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of Pollard's Rho?",
        "options": [
          "O(n^(1/4))",
          "O(sqrt n)",
          "O(n)"
        ],
        "correctAnswer": "O(n^(1/4))"
      },
      {
        "type": "match_following",
        "questionText": "Match the Rho Logic!",
        "pairs": [
          {
            "key": "x and y",
            "value": "Tortoise and Hare"
          },
          {
            "key": "gcd(abs(x-y), n)",
            "value": "Finding the factor"
          },
          {
            "key": "Target",
            "value": "Giant Composite numbers"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Function for Rho sequence.",
        "codeSnippet": "f(x) = (x*x + ___) % n;",
        "correctAnswer": "c"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The 'Rho' (ρ) comes from the path the sequence takes: it eventually enters a cycle, looking like the Greek letter Rho! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Should we use Miller-Rabin before Pollard's Rho?",
        "options": [
          "SQUAWK YES! (Don't try to factorize a prime)",
          "No",
          "Only for even numbers"
        ],
        "correctAnswer": "SQUAWK YES! (Don't try to factorize a prime)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Greek letter.",
        "codeSnippet": "P ___ 's Rho",
        "correctAnswer": "ollard"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Spinning factor! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Factor found?\"",
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
    "order": 47,
    "title": "Mobius Function (μ)",
    "desc": "The exclusion principle bird.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"μ (Mobius) is a special bird: 🦜\n1 if N=1\n0 if N has a squared prime factor (e.g. 4, 12)\n(-1)^k if N is a product of k distinct primes!\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"μ(6) = (-1)^2 = 1. μ(4) = 0. μ(30) = (-1)^3 = -1! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What is μ(10)? (Factors 2, 5)",
        "options": [
          "1",
          "-1",
          "0"
        ],
        "correctAnswer": "1"
      },
      {
        "type": "match_following",
        "questionText": "Match the Mobius!",
        "pairs": [
          {
            "key": "μ(p)",
            "value": "-1"
          },
          {
            "key": "μ(p^2)",
            "value": "0"
          },
          {
            "key": "μ(1)",
            "value": "1"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Calculate `μ` using SPF.",
        "codeSnippet": "if (N % (spf[n]*spf[n]) == 0) return ___ ;",
        "correctAnswer": "0"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Mobius Inversion Principle allows us to solve complex counting problems involving GCDs! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Value of μ(12)?",
        "options": [
          "0 (divisible by 2^2)",
          "1",
          "-1"
        ],
        "correctAnswer": "0 (divisible by 2^2)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Function name.",
        "codeSnippet": "M ___",
        "correctAnswer": "obius"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Flips and squares! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is it square-free?\"",
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
    "order": 48,
    "title": "Lucas Theorem",
    "desc": "Combinations mod P.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Giant Combinations! How to calculate `nCr % p` when `n` is 10^18 but `p` is small (~10^5)? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Lucas says: `nCr % p = ∏ (ni Cr i % p)` where `ni` and `ri` are the digits of `n` and `r` in BASE P! 🦜\"",
        "codeSnippet": "while (n > 0) {\n  res = (res * nCr_mod_p(n % p, r % p)) % p;\n  n /= p; r /= p;\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "When is Lucas Theorem applicable?",
        "options": [
          "P must be prime and small",
          "P can be anything",
          "n must be small"
        ],
        "correctAnswer": "P must be prime and small"
      },
      {
        "type": "match_following",
        "questionText": "Match the Lucas!",
        "pairs": [
          {
            "key": "Base",
            "value": "Base P"
          },
          {
            "key": "n % p",
            "value": "Current digit"
          },
          {
            "key": "∏",
            "value": "Product of combinations"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Reduction step for Lucas.",
        "codeSnippet": "n = n ___ p; r = r / p;",
        "correctAnswer": "/"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This transforms one massive calculation into several tiny ones. Efficient and elegant! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of Lucas Theorem?",
        "options": [
          "O(p + log_p n)",
          "O(n)",
          "O(p^2)"
        ],
        "correctAnswer": "O(p + log_p n)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Theorem name.",
        "codeSnippet": "L ___ Theorem",
        "correctAnswer": "ucas"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Combined and conquered! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Base P ready?\"",
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
    "order": 49,
    "title": "nCr with Giant Modulo",
    "desc": "Lucas vs Fermat.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Decision Matrix! If P is small, use Lucas. If P is large AND PRIME, use Fermat's Inverse! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"`nCr % P = (n! * inv(r!) * inv((n-r)!)) % P`. This works perfectly for large primes like 10^9 + 7. 🦜\"",
        "codeSnippet": "invFactorial[i] = power(factorial[i], P-2, P);"
      },
      {
        "type": "multiple_choice",
        "questionText": "Best method for nCr % (10^9 + 7) with n=10^6?",
        "options": [
          "Fermat-based Inverse",
          "Lucas Theorem",
          "Pascal's Triangle"
        ],
        "correctAnswer": "Fermat-based Inverse"
      },
      {
        "type": "match_following",
        "questionText": "Match the Strategy!",
        "pairs": [
          {
            "key": "n, r small (~1000)",
            "value": "Pascal's Triangle (DP)"
          },
          {
            "key": "P large prime",
            "value": "Precompute factorials"
          },
          {
            "key": "P small prime",
            "value": "Lucas Theorem"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Combination formula part.",
        "codeSnippet": "denom = (fact[r] ___ fact[n-r]) % p;",
        "correctAnswer": "*"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"If P is COMPOSITE, we need the giant bird: Chinese Remainder Theorem + Lucas! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Can we handle any modulo for combinations?",
        "options": [
          "SQUAWK YES! (CRT + Lucas/Prime-Powers)",
          "No",
          "Only for 10^9"
        ],
        "correctAnswer": "SQUAWK YES! (CRT + Lucas/Prime-Powers)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Inverse of denominator.",
        "codeSnippet": "___ (denom, p)",
        "correctAnswer": "modInverse"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Pick the best path! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Combination complete?\"",
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
    "order": 50,
    "title": "Master Point (Mathbits 5)",
    "desc": "Modulo master status confirmed.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"STAGE 5 COMPLETE! You've mastered CRT, Pollard's Rho, Matrix Power, and the art of Giant Combinations. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Which algorithm finds the Discrete Logarithm?",
        "options": [
          "Baby-step Giant-step",
          "Pollard's Rho",
          "Lucas Theorem"
        ],
        "correctAnswer": "Baby-step Giant-step"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of nth Fibonacci with Matrix power?",
        "options": [
          "O(log N)",
          "O(N)",
          "O(sqrt N)"
        ],
        "correctAnswer": "O(log N)"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"You are a Modulo Master! In Stage 6, we descend into Mathematical Combinatorics: Permutations, Derangements, and Catalan! 🦜\""
      },
      {
        "type": "match_following",
        "questionText": "Match the Rank!",
        "pairs": [
          {
            "key": "Stage 5",
            "value": "Modulo Master"
          },
          {
            "key": "Stage 6",
            "value": "Combinatorial Captain"
          },
          {
            "key": "Next",
            "value": "Mathbits 6"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Modular Points.",
        "codeSnippet": "5 * ___ ;",
        "correctAnswer": "100"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Infinite modulo! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Ready for Combinatorics?",
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
        "questionText": "Final Modulo?",
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

module.exports = stage5;
