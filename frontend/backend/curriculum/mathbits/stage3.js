const stage3 = [
  {
    "order": 21,
    "title": "Divisibility Rules",
    "desc": "Mental math for digital birds.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Math flight! Before we code, we must know our numbers. How can you tell if 123 is divisible by 3 without dividing? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Add the digits! 1+2+3 = 6. Since 6 is divisible by 3, so is 123! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Rule for divisibility by 2?",
        "options": [
          "Last digit is even",
          "Sum of digits is even",
          "Ends in 5"
        ],
        "correctAnswer": "Last digit is even"
      },
      {
        "type": "match_following",
        "questionText": "Match the Rules!",
        "pairs": [
          {
            "key": "By 3",
            "value": "Sum of digits % 3 == 0"
          },
          {
            "key": "By 4",
            "value": "Last 2 digits divisible by 4"
          },
          {
            "key": "By 5",
            "value": "Ends in 0 or 5"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Divisibility check for 9.",
        "codeSnippet": "if (sum_of_digits % ___ == 0)",
        "correctAnswer": "9"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Rule for 11: (Sum of odd-position digits) - (Sum of even-position digits) must be 0 or divisible by 11! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is 121 divisible by 11?",
        "options": [
          "SQUAWK YES! (1+1 - 2 = 0)",
          "No",
          "Maybe"
        ],
        "correctAnswer": "SQUAWK YES! (1+1 - 2 = 0)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Even check.",
        "codeSnippet": "n % ___ == 0",
        "correctAnswer": "2"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Shortcuts for speed! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is 88 divisible by 11?\"",
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
    "order": 22,
    "title": "Prime Numbers",
    "desc": "The building blocks of math.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Prime Birds! A prime number has exactly TWO factors: 1 and itself. 2, 3, 5, 7, 11... 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"1 is NOT prime, because it only has one factor (itself). 2 is the ONLY even prime! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "The smallest prime number?",
        "options": [
          "2",
          "1",
          "3"
        ],
        "correctAnswer": "2"
      },
      {
        "type": "match_following",
        "questionText": "Match the Numbers!",
        "pairs": [
          {
            "key": "Prime",
            "value": "2 factors"
          },
          {
            "key": "Composite",
            "value": "> 2 factors"
          },
          {
            "key": "1",
            "value": "Neither"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Check if N = 4 is prime.",
        "codeSnippet": "is_prime = (4 == 2 || 4 == 3) ? true : ___ ;",
        "correctAnswer": "false"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Primes are used in everything from encryption to music harmony! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Which of these is a prime?",
        "options": [
          "13",
          "15",
          "21"
        ],
        "correctAnswer": "13"
      },
      {
        "type": "code_fill_in",
        "questionText": "Factor count.",
        "codeSnippet": "Exact ___ factors",
        "correctAnswer": "2"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Pure and lonely! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is 57 prime?\"",
        "options": [
          "No (19 * 3)",
          "Yes",
          "Maybe"
        ],
        "correctAnswer": "No (19 * 3)"
      }
    ]
  },
  {
    "order": 23,
    "title": "Sieve of Eratosthenes",
    "desc": "Catching all primes at once.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Sieve time! To find all primes up to N, don't check each one. Instead, kill the multiples! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Start at 2. It's prime. Now mark 4, 6, 8, 10... as NOT prime. Move to 3. Mark 6, 9, 12... 🦜\"",
        "codeSnippet": "for (p = 2; p * p <= n; p++) {\n  if (isPrime[p]) {\n    for (i = p * p; i <= n; i += p) isPrime[i] = false;\n  }\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why do we start marking multiples at `p * p` instead of `2 * p`?",
        "options": [
          "Smaller multiples were already marked by earlier primes",
          "It's faster math",
          "It's tradition"
        ],
        "correctAnswer": "Smaller multiples were already marked by earlier primes"
      },
      {
        "type": "match_following",
        "questionText": "Match Sieve Logic!",
        "pairs": [
          {
            "key": "isPrime[]",
            "value": "Boolean array"
          },
          {
            "key": "Outer Loop",
            "value": "p * p <= n"
          },
          {
            "key": "Inner Loop",
            "value": "Marking multiples"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Increment step for marking multiples of prime `p`.",
        "codeSnippet": "for (i = start; i <= n; i += ___ )",
        "correctAnswer": "p"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Complexity: O(N log log N). For N=1,000,000, it's almost linear! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is 10,000 too big for a standard sieve?",
        "options": [
          "No (Easy!)",
          "Yes",
          "Only in binary"
        ],
        "correctAnswer": "No (Easy!)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Array default.",
        "codeSnippet": "fill(isPrime, ___ )",
        "correctAnswer": "true"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Filtered and firm! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Did we sieve?\"",
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
    "order": 24,
    "title": "Trial Division",
    "desc": "Checking one prime in the field.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Checking one bird? To see if N is prime, try dividing it by every bird from 2 to sqrt(N). 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Why sqrt(N)? Because if N = A * B, at least one factor must be <= sqrt(N)! 🦜\"",
        "codeSnippet": "for (i = 2; i * i <= n; i++) {\n  if (n % i == 0) return false;\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of Trial Division?",
        "options": [
          "O(sqrt N)",
          "O(N)",
          "O(log N)"
        ],
        "correctAnswer": "O(sqrt N)"
      },
      {
        "type": "match_following",
        "questionText": "Match Factors!",
        "pairs": [
          {
            "key": "36",
            "value": "factors: 2, 3, 4, 6"
          },
          {
            "key": "sqrt(36)",
            "value": "6"
          },
          {
            "key": "Range",
            "value": "2 to 6"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Loop condition.",
        "codeSnippet": "for (i = 2; i * i ___ n; i++)",
        "correctAnswer": "<="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Special optimization: Check 2 first, then only odd numbers up to sqrt(N). Twice as fast! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Result of trial dividing 101?",
        "options": [
          "Prime (No factors up to 10)",
          "Composite",
          "0"
        ],
        "correctAnswer": "Prime (No factors up to 10)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Math function.",
        "codeSnippet": "___ (N)",
        "correctAnswer": "sqrt"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Test the nest! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is it solid?\"",
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
    "order": 25,
    "title": "Prime Factorization",
    "desc": "Breaking down the number.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Bird Atoms! Every number > 1 is either prime or can be written as a product of primes. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"12 = 2 * 2 * 3. 30 = 2 * 3 * 5. Just keep dividing by the smallest prime factor until you reach 1! 🦜\"",
        "codeSnippet": "while (n % i == 0) {\n  factors.push(i);\n  n /= i;\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Prime factorization of 100?",
        "options": [
          "2 * 2 * 5 * 5",
          "10 * 10",
          "2 * 50"
        ],
        "correctAnswer": "2 * 2 * 5 * 5"
      },
      {
        "type": "match_following",
        "questionText": "Match the Breakdowns!",
        "pairs": [
          {
            "key": "24",
            "value": "2^3 * 3"
          },
          {
            "key": "15",
            "value": "3 * 5"
          },
          {
            "key": "7",
            "value": "7"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Reduction step.",
        "codeSnippet": "n = n ___ factor;",
        "correctAnswer": "/"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"If you have many numbers to factorize, use a Sieve first to pre-calculate the 'Smallest Prime Factor' (SPF) for every number! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "If SPF is known, complexity to factorize N?",
        "options": [
          "O(log N)",
          "O(sqrt N)",
          "O(1)"
        ],
        "correctAnswer": "O(log N)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Fundamental Theorem of...",
        "codeSnippet": "___",
        "correctAnswer": "Arithmetic"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"To the core! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Factorized?\"",
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
    "order": 26,
    "title": "GCD (Greatest Common Divisor)",
    "desc": "The biggest mutual friend.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Common ground! GCD is the largest number that divides BOTH A and B. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Euclid's Algorithm: `gcd(a, b) = gcd(b, a % b)`. Keep going until B is 0! 🦜\"",
        "codeSnippet": "int gcd(int a, int b) {\n  return b == 0 ? a : gcd(b, a % b);\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is GCD(12, 18)?",
        "options": [
          "6",
          "3",
          "2"
        ],
        "correctAnswer": "6"
      },
      {
        "type": "match_following",
        "questionText": "Match GCD pairs!",
        "pairs": [
          {
            "key": "10, 5",
            "value": "5"
          },
          {
            "key": "7, 13",
            "value": "1 (Co-prime)"
          },
          {
            "key": "0, X",
            "value": "X"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Recursive call logic.",
        "codeSnippet": "return gcd(b, a ___ b);",
        "correctAnswer": "%"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Complexity: O(log(min(A, B))). This is one of the oldest and most useful algorithms in history! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What does it mean if GCD(A, B) = 1?",
        "options": [
          "A and B are 'Co-prime' (Relatively prime)",
          "A and B are both prime",
          "0"
        ],
        "correctAnswer": "A and B are 'Co-prime' (Relatively prime)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Algorithm name.",
        "codeSnippet": "E ___ 's",
        "correctAnswer": "uclid"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The common link! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Found the biggest?\"",
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
    "order": 27,
    "title": "LCM (Least Common Multiple)",
    "desc": "The first shared future.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Shared future! LCM is the smallest number that is a multiple of BOTH A and B. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Magic Link: `A * B = GCD(A, B) * LCM(A, B)`. To find LCM, just use the GCD! 🦜\"",
        "codeSnippet": "lcm = (a * b) / gcd(a, b);"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is LCM(4, 6)?",
        "options": [
          "12",
          "24",
          "2"
        ],
        "correctAnswer": "12"
      },
      {
        "type": "match_following",
        "questionText": "Match LCM pairs!",
        "pairs": [
          {
            "key": "5, 10",
            "value": "10"
          },
          {
            "key": "3, 7",
            "value": "21"
          },
          {
            "key": "12, 18",
            "value": "36"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Safe formula to avoid overflow (Divide first).",
        "codeSnippet": "lcm = (a / gcd(a, b)) ___ b;",
        "correctAnswer": "*"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Warning: `(a * b)` can overflow BEFORE you divide by GCD. Always divide first if possible! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "If GCD(A, B) = 1, what is LCM(A, B)?",
        "options": [
          "A * B",
          "A + B",
          "1"
        ],
        "correctAnswer": "A * B"
      },
      {
        "type": "code_fill_in",
        "questionText": "Shared point.",
        "codeSnippet": "Least ___ Multiple",
        "correctAnswer": "Common"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Find the rhythm! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Shared multiple found?\"",
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
    "order": 28,
    "title": "Properties of Divisors",
    "desc": "How many friends does a number have?",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Total Divisors! If N = P1^a * P2^b, the number of divisors is `(a + 1) * (b + 1)`. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Example: 12 = 2^2 * 3^1. Divisors: (2+1) * (1+1) = 6. (1, 2, 3, 4, 6, 12). 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "How many divisors does 16 (2^4) have?",
        "options": [
          "5 (4 + 1)",
          "4",
          "16"
        ],
        "correctAnswer": "5 (4 + 1)"
      },
      {
        "type": "match_following",
        "questionText": "Match the Counts!",
        "pairs": [
          {
            "key": "Prime X",
            "value": "2 divisors"
          },
          {
            "key": "Perfect Square",
            "value": "Odd number of divisors"
          },
          {
            "key": "Number 1",
            "value": "1 divisor"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Calculation of count.",
        "codeSnippet": "total = total * (exponent + ___ );",
        "correctAnswer": "1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Why do perfect squares have an odd number of divisors? Because one pair is (sqrt N, sqrt N)—the same number twice! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Does 100 have an odd number of divisors?",
        "options": [
          "SQUAWK YES! (It's a perfect square)",
          "No",
          "Only in base 10"
        ],
        "correctAnswer": "SQUAWK YES! (It's a perfect square)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Divisor count type.",
        "codeSnippet": "N ___",
        "correctAnswer": "umber"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Count them all! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Found the total?\"",
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
    "order": 29,
    "title": "Sum of Divisors",
    "desc": "The total weight of factors.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Total Sum! If N = P^a, the sum of divisors is `(P^(a+1) - 1) / (P - 1)`. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"For 12 (2^2 * 3^1), Sum = [(2^3 - 1)/(2-1)] * [(3^2 - 1)/(3-1)] = 7 * 4 = 28. (1+2+3+4+6+12 = 28). 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Sum of divisors of 6?",
        "options": [
          "12 (1+2+3+6)",
          "6",
          "10"
        ],
        "correctAnswer": "12 (1+2+3+6)"
      },
      {
        "type": "match_following",
        "questionText": "Match the Weights!",
        "pairs": [
          {
            "key": "Perfect Number",
            "value": "Sum = 2 * N"
          },
          {
            "key": "Abundant",
            "value": "Sum > 2 * N"
          },
          {
            "key": "Deficient",
            "value": "Sum < 2 * N"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Geometric series sum part.",
        "codeSnippet": "sum = (pow(p, a+1) - 1) / (p - ___ );",
        "correctAnswer": "1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"6 and 28 are 'Perfect Numbers' because the sum of their proper divisors (excluding N) equals N! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is 8 a perfect number?",
        "options": [
          "No (1+2+4 = 7)",
          "Yes",
          "0"
        ],
        "correctAnswer": "No (1+2+4 = 7)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Property type.",
        "codeSnippet": "S ___ of Divisors",
        "correctAnswer": "um"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Add it up! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is it perfect?\"",
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
    "order": 30,
    "title": "Master Point (Mathbits 3)",
    "desc": "Prime pioneer status confirmed.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"STAGE 3 COMPLETE! You've mastered Divisibility, Sieve of Eratosthenes, GCD/LCM, and the secret life of Divisors. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What algorithm finds GCD efficiently?",
        "options": [
          "Euclid's",
          "Sieve of Eratosthenes",
          "Trial Division"
        ],
        "correctAnswer": "Euclid's"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of Sieve of Eratosthenes up to N?",
        "options": [
          "O(N log log N)",
          "O(N log N)",
          "O(sqrt N)"
        ],
        "correctAnswer": "O(N log log N)"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"You are a Prime Pioneer! In Stage 4, we enter Advanced Primes: Segmented Sieves, Euler's Totient, and large number Primality! 🦜\""
      },
      {
        "type": "match_following",
        "questionText": "Match the Rank!",
        "pairs": [
          {
            "key": "Stage 3",
            "value": "Prime Pioneer"
          },
          {
            "key": "Stage 4",
            "value": "Sieve Sage"
          },
          {
            "key": "Next",
            "value": "Mathbits 4"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Prime Points.",
        "codeSnippet": "3 * ___ ;",
        "correctAnswer": "100"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Fly higher! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Ready for Advanced Primes?",
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
        "questionText": "Final Factor?",
        "options": [
          "Prime!",
          "Composite.",
          "0"
        ],
        "correctAnswer": "Prime!"
      }
    ]
  }
];

module.exports = stage3;
