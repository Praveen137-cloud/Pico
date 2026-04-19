const stage6 = [
  {
    "order": 51,
    "title": "Permutations (nPr)",
    "desc": "Order matters in the flock.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Order Up! If you have 3 birds (A, B, C) and 2 seats, how many ways can they sit? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Permutations (nPr): The arrangement where order matters. (AB is different from BA). 🦜\"",
        "codeSnippet": "nPr = n! / (n - r)!"
      },
      {
        "type": "multiple_choice",
        "questionText": "Value of 3P2?",
        "options": [
          "6 (AB, AC, BA, BC, CA, CB)",
          "3",
          "9"
        ],
        "correctAnswer": "6 (AB, AC, BA, BC, CA, CB)"
      },
      {
        "type": "match_following",
        "questionText": "Match the Perms!",
        "pairs": [
          {
            "key": "n!",
            "value": "Arranging n items"
          },
          {
            "key": "nPr",
            "value": "Arranging r from n"
          },
          {
            "key": "Circular",
            "value": "(n - 1)!"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Formula part for nPr.",
        "codeSnippet": "result = fact[n] / fact[___] ;",
        "correctAnswer": "n-r"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Circular Permutations: If 4 birds sit around a round feeder, there are only (4-1)! = 6 ways, because rotating the feeder doesn't change the neighbors! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Ways to arrange 5 birds in a circle?",
        "options": [
          "24",
          "120",
          "5"
        ],
        "correctAnswer": "24"
      },
      {
        "type": "code_fill_in",
        "questionText": "Ordering term.",
        "codeSnippet": "P ___ utation",
        "correctAnswer": "erm"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Line them up! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Does order matter?\"",
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
    "order": 52,
    "title": "Combinations (nCr)",
    "desc": "Just picking the group.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Team select! Combinations (nCr) are ways to pick objects where order DOES NOT matter. (AB is same as BA). 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Formula: nCr = n! / (r! * (n-r)!). This is also known as the Binomial Coefficient. 🦜\"",
        "codeSnippet": "nCr = nPr / r!"
      },
      {
        "type": "multiple_choice",
        "questionText": "Value of 3C2?",
        "options": [
          "3 ({AB, BC, AC})",
          "6",
          "1"
        ],
        "correctAnswer": "3 ({AB, BC, AC})"
      },
      {
        "type": "match_following",
        "questionText": "Match the Combi!",
        "pairs": [
          {
            "key": "nC0",
            "value": "1"
          },
          {
            "key": "nCn",
            "value": "1"
          },
          {
            "key": "nCr",
            "value": "nC(n-r)"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Combination symmetry property.",
        "codeSnippet": "nCr = nC( ___ );",
        "correctAnswer": "n-r"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Pascal's Identity: nCr = (n-1)Cr + (n-1)C(r-1). This lets us build the Pascal Triangle using DP! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity to build Pascal Triangle for N?",
        "options": [
          "O(N^2)",
          "O(N)",
          "O(log N)"
        ],
        "correctAnswer": "O(N^2)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Picking term.",
        "codeSnippet": "C ___ ination",
        "correctAnswer": "omb"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Pick the best! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Order matters?\"",
        "options": [
          "SQUAWK NO!",
          "Yes.",
          "0"
        ],
        "correctAnswer": "SQUAWK NO!"
      }
    ]
  },
  {
    "order": 53,
    "title": "Binomial Theorem",
    "desc": "Expanding the power.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Algebra Power! (x + y)^n can be expanded using Binomial Coefficients nCr. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"(x + y)^2 = 2C0 x^2 + 2C1 xy + 2C2 y^2 = 1x^2 + 2xy + 1y^2. 🦜\"",
        "codeSnippet": "Σ (nCr * x^(n-r) * y^r)"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the sum of all coefficients in (x + y)^n?",
        "options": [
          "2^n",
          "n^2",
          "n"
        ],
        "correctAnswer": "2^n"
      },
      {
        "type": "match_following",
        "questionText": "Match the Expansion!",
        "pairs": [
          {
            "key": "(x+y)^0",
            "value": "1"
          },
          {
            "key": "(x+y)^1",
            "value": "1x + 1y"
          },
          {
            "key": "(x+y)^3 coeffs",
            "value": "1, 3, 3, 1"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Total number of terms in (x+y)^n expansion.",
        "codeSnippet": "count = ___ ;",
        "correctAnswer": "n+1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The coefficient of x^k in (1 + x)^n is simply nCk. This is fundamental for 'Generating Functions'! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What is 5C0 + 5C1 + 5C2 + 5C3 + 5C4 + 5C5?",
        "options": [
          "32 (2^5)",
          "25",
          "10"
        ],
        "correctAnswer": "32 (2^5)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Theorem name.",
        "codeSnippet": "B ___ Theorem",
        "correctAnswer": "inomial"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Power expansion! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"2^n?\"",
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
    "order": 54,
    "title": "Inclusion-Exclusion",
    "desc": "The counting correction.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Overlapping nests! To find the size of |A ∪ B|, you add |A| and |B|, then EXCLUDE the intersection |A ∩ B| because you counted it twice! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"|A ∪ B ∪ C| = |A| + |B| + |C| - (|AB| + |AC| + |BC|) + |ABC|. 🦜\"",
        "codeSnippet": "Add odd intersections, subtract even intersections."
      },
      {
        "type": "multiple_choice",
        "questionText": "Formula size of |A ∪ B|?",
        "options": [
          "|A| + |B| - |A ∩ B|",
          "|A| + |B|",
          "|A| * |B|"
        ],
        "correctAnswer": "|A| + |B| - |A ∩ B|"
      },
      {
        "type": "match_following",
        "questionText": "Match the Inclusion!",
        "pairs": [
          {
            "key": "1 Set",
            "value": "Positive (+)"
          },
          {
            "key": "2 Sets",
            "value": "Negative (-)"
          },
          {
            "key": "3 Sets",
            "value": "Positive (+)"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Sign for intersection of 4 sets.",
        "codeSnippet": "sign = ___ ;",
        "correctAnswer": "-1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"PIE is the secret to counting things that are 'Not' something. Like: 'Total - (Divisible by 2 or 3 or 5)'! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "How many numbers <= 10 divisible by 2 or 3?",
        "options": [
          "7 (5 + 3 - 1)",
          "8",
          "10"
        ],
        "correctAnswer": "7 (5 + 3 - 1)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Principle name.",
        "codeSnippet": "I ___ -Exclusion",
        "correctAnswer": "nclusion"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Correct the count! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Did we overlap?\"",
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
    "order": 55,
    "title": "Derangements (!n)",
    "desc": "Nobody in their own nest.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Messy Room! How many ways can N birds sit in N nests such that NO bird is in its own home? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This is called a Derangement (!n). !3 = 2 ({BCA, CAB}). !2 = 1 ({BA}). 🦜\"",
        "codeSnippet": "D(n) = (n - 1) * (D(n-1) + D(n-2))"
      },
      {
        "type": "multiple_choice",
        "questionText": "Value of !1?",
        "options": [
          "0 (The bird must be in its home)",
          "1",
          "-1"
        ],
        "correctAnswer": "0 (The bird must be in its home)"
      },
      {
        "type": "match_following",
        "questionText": "Match Derange Facts!",
        "pairs": [
          {
            "key": "!2",
            "value": "1"
          },
          {
            "key": "!3",
            "value": "2"
          },
          {
            "key": "!4",
            "value": "9"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Recurrence for D(n).",
        "codeSnippet": "D(n) = (n-1) * (D(n-1) ___ D(n-2));",
        "correctAnswer": "+"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"As N grows, the probability that a random arrangement is a derangement approaches 1/e (approx 0.368)! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Formula !n in terms of Inclusion-Exclusion?",
        "options": [
          "n! * Σ ((-1)^k / k!)",
          "n! * e",
          "n"
        ],
        "correctAnswer": "n! * Σ ((-1)^k / k!)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Confusion term.",
        "codeSnippet": "D ___ ment",
        "correctAnswer": "erange"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Pure chaos! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is everyone misplaced?\"",
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
    "order": 56,
    "title": "Catalan Numbers (Cn)",
    "desc": "The structure counting bird.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Structural Mastery! Catalan numbers count everything: Balanced parentheses, Binary trees, Polygon triangulations! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Cn = (1 / (n+1)) * (2n C n). C0=1, C1=1, C2=2, C3=5. 🦜\"",
        "codeSnippet": "C(n) = Σ (Ci * C(n-1-i))"
      },
      {
        "type": "multiple_choice",
        "questionText": "How many binary trees with 3 nodes?",
        "options": [
          "5 (C3)",
          "3",
          "8"
        ],
        "correctAnswer": "5 (C3)"
      },
      {
        "type": "match_following",
        "questionText": "Match Catalan Uses!",
        "pairs": [
          {
            "key": "BSTs",
            "value": "Cn trees"
          },
          {
            "key": "Parens",
            "value": "Cn valid strings"
          },
          {
            "key": "Paths",
            "value": "Dyck paths"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Formula denominator.",
        "codeSnippet": "C(n) = (2n C n) / ___ ;",
        "correctAnswer": "n+1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"For N = 4, C4 = 14. This is a very fast-growing sequence. Essential for competitive coding! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "How many ways to parenthesize n+1 factors?",
        "options": [
          "Cn",
          "n!",
          "2^n"
        ],
        "correctAnswer": "Cn"
      },
      {
        "type": "code_fill_in",
        "questionText": "Number name.",
        "codeSnippet": "C ___",
        "correctAnswer": "atalan"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Tree of life! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is it balanced?\"",
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
    "order": 57,
    "title": "Stirling Numbers (S2)",
    "desc": "Grouping birds into nests.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Group Power! Stirling Numbers of Second Kind {n, k} are ways to partition N items into K non-empty, unlabeled subsets. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Recurrence: S(n, k) = k * S(n-1, k) + S(n-1, k-1). 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Ways to put 3 items in 2 groups?",
        "options": [
          "3 ({AB, C}, {AC, B}, {BC, A})",
          "1",
          "6"
        ],
        "correctAnswer": "3 ({AB, C}, {AC, B}, {BC, A})"
      },
      {
        "type": "match_following",
        "questionText": "Match Stirling!",
        "pairs": [
          {
            "key": "S(n, 1)",
            "value": "1"
          },
          {
            "key": "S(n, n)",
            "value": "1"
          },
          {
            "key": "S(n, 0)",
            "value": "0 (for n>0)"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Coefficient for same-group continuation.",
        "codeSnippet": "S(n, k) = ___ * S(n-1, k) + S(n-1, k-1);",
        "correctAnswer": "k"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This is different from combinations because the groups (nests) are identical! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Sum of S(n, k) for all k is...?",
        "options": [
          "Bell Number (B_n)",
          "n!",
          "2^n"
        ],
        "correctAnswer": "Bell Number (B_n)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Name.",
        "codeSnippet": "S ___ Numbers",
        "correctAnswer": "tirling"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Clump the flock! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Found the groups?\"",
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
    "order": 58,
    "title": "Partition Numbers (Pn)",
    "desc": "Sums of integers.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Integer breakdown! How many ways to write N as a sum of positive integers? 4 = 4 = 3+1 = 2+2 = 2+1+1 = 1+1+1+1 (5 ways). 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Partition Numbers (Pn) grow very quickly. P(5) = 7. P(10) = 42. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "How many partitions of 3?",
        "options": [
          "3 (3, 2+1, 1+1+1)",
          "2",
          "5"
        ],
        "correctAnswer": "3 (3, 2+1, 1+1+1)"
      },
      {
        "type": "match_following",
        "questionText": "Match the Breakdowns!",
        "pairs": [
          {
            "key": "3",
            "value": "3, 2+1, 1+1+1"
          },
          {
            "key": "Order",
            "value": "Irrelevant"
          },
          {
            "key": "P(n)",
            "value": "Total ways"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Recursive DP state.",
        "codeSnippet": "dp[i][j] = dp[i-1][j] + dp[i][j-___];",
        "correctAnswer": "i"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Hardy-Ramanujan Formula: P(n) ≈ (1 / 4n√3) * exp(π √(2n/3)). Elite math territory! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is partition order-dependent?",
        "options": [
          "No (1+2 is same as 2+1)",
          "Yes",
          "Depends on birds"
        ],
        "correctAnswer": "No (1+2 is same as 2+1)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Section name.",
        "codeSnippet": "P ___ ition",
        "correctAnswer": "art"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Splitting the seed! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Summed up?\"",
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
    "order": 59,
    "title": "Burnside's Lemma",
    "desc": "Counting under symmetry.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Necklace Logic! How many different 3-bead necklaces can you make with 2 colors, if rotating them makes it 'the same'? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Burnside's Lemma: Total ways = (1 / |G|) * Σ fixed_points. G is the set of symmetries (rotations). 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Burnside's is used for...",
        "options": [
          "Counting distinct objects under rotation/flip",
          "Adding numbers",
          "Sorting"
        ],
        "correctAnswer": "Counting distinct objects under rotation/flip"
      },
      {
        "type": "match_following",
        "questionText": "Match Symmetry!",
        "pairs": [
          {
            "key": "Id",
            "value": "Do nothing"
          },
          {
            "key": "Rotation",
            "value": "Turn the wheel"
          },
          {
            "key": "|G|",
            "value": "Number of symmetries"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Formula part.",
        "codeSnippet": "distinct = (1.0 / group_size) * ___ ;",
        "correctAnswer": "total_fixed"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Polya Enumeration Theorem is an even more powerful extension of Burnside’s for colorings! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "If a square can be rotated 0, 90, 180, 270, what is |G|?",
        "options": [
          "4",
          "2",
          "8 (with flips)"
        ],
        "correctAnswer": "4"
      },
      {
        "type": "code_fill_in",
        "questionText": "Lemma author.",
        "codeSnippet": "B ___ 's Lemma",
        "correctAnswer": "urnside"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Spin the flock! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are we symmetry-free?\"",
        "options": [
          "Unique and Elite!",
          "No.",
          "0"
        ],
        "correctAnswer": "Unique and Elite!"
      }
    ]
  },
  {
    "order": 60,
    "title": "Master Point (Mathbits 6)",
    "desc": "Combinatorial captain status confirmed.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"STAGE 6 COMPLETE! You've mastered Permutations, Catalan structures, and counting under the spinning gaze of Burnside. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Which number counts binary trees?",
        "options": [
          "Catalan",
          "Stirling",
          "Binomial"
        ],
        "correctAnswer": "Catalan"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does Inclusion-Exclusion fix?",
        "options": [
          "Overcounting intersections",
          "Multiplication",
          "Divisibility"
        ],
        "correctAnswer": "Overcounting intersections"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"You are a Combinatorial Captain! In Stage 7, we enter the world of Probabilities and Expected Values! 🦜\""
      },
      {
        "type": "match_following",
        "questionText": "Match the Rank!",
        "pairs": [
          {
            "key": "Stage 6",
            "value": "Combinatorial Captain"
          },
          {
            "key": "Stage 7",
            "value": "Probability Pilot"
          },
          {
            "key": "Next",
            "value": "Mathbits 7"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Counting Points.",
        "codeSnippet": "6 * ___ ;",
        "correctAnswer": "100"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Fly precisely! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Ready for Chance?",
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
        "questionText": "Final Count?",
        "options": [
          "n!",
          "1",
          "Done."
        ],
        "correctAnswer": "n!"
      }
    ]
  }
];

module.exports = stage6;
