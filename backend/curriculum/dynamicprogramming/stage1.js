const stage1 = [
  {
    "order": 1,
    "title": "The Memory Vault (Intro to DP)",
    "desc": "Understanding Overlapping Subproblems and Optimal Substructure.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Dynamic Programming! It sounds fancy, but it's just 'Recursion with a Memory Bank'. Why re-calculate something we already know? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"We use DP when we see two things: Overlapping Subproblems (doing the same work twice) and Optimal Substructure (the solution can be built from smaller versions of itself). 🦜\"",
        "codeSnippet": "// Fibonacci(5) = Fibonacci(4) + Fibonacci(3)\n// Both Fib(4) and Fib(3) will end up calling Fib(2)!\n// That's an overlapping subproblem. 🦜"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does 'memoization' actually mean in DP?",
        "options": [
          "Storing results to avoid re-calculation",
          "Memorizing the entire code",
          "A type of bird seed"
        ],
        "correctAnswer": "Storing results to avoid re-calculation"
      },
      {
        "type": "match_following",
        "questionText": "Match DP components!",
        "pairs": [
          {
            "key": "Subproblem",
            "value": "Smaller instance"
          },
          {
            "key": "Overlap",
            "value": "Repeated work"
          },
          {
            "key": "Optimal",
            "value": "Best solution"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Term for the 'Top-Down' DP approach.",
        "codeSnippet": "Recursion + Storing = ___ ;",
        "correctAnswer": "memoization"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Imagine a bird building a nest. If you've already found the best way to weave a branch, just remember it! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is DP always faster than simple recursion?",
        "options": [
          "Yes, if subproblems overlap",
          "No, it uses more memory",
          "Only for Fibonacci"
        ],
        "correctAnswer": "Yes, if subproblems overlap"
      },
      {
        "type": "code_fill_in",
        "questionText": "Basic memoization check.",
        "codeSnippet": "if (memo[n] != ___) return memo[n];",
        "correctAnswer": "-1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Smart birds save time! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Can I store my seeds in a memo?\"",
        "options": [
          "The ultimate cache!",
          "No.",
          "0"
        ],
        "correctAnswer": "The ultimate cache!"
      }
    ]
  },
  {
    "order": 2,
    "title": "The Fibonacci Blueprint",
    "desc": "Applying DP to the world's most famous sequence.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Let's fix Fibonacci! The standard O(2^n) recursion is a disaster. It calculates Fib(2) thousands of times for Fib(40)! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"With DP, we solve it in O(N). Just one flight per number! 🦜\"",
        "codeSnippet": "int fib(int n) {\n  if(n <= 1) return n;\n  if(memo[n] != -1) return memo[n];\n  return memo[n] = fib(n-1) + fib(n-2);\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Time complexity of Fibonacci with DP?",
        "options": [
          "O(N)",
          "O(2^N)",
          "O(log N)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "match_following",
        "questionText": "Match Fibonacci states!",
        "pairs": [
          {
            "key": "Fib(0)",
            "value": "0"
          },
          {
            "key": "Fib(1)",
            "value": "1"
          },
          {
            "key": "Fib(2)",
            "value": "1"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Space complexity of Memoized Fibonacci.",
        "codeSnippet": "Memory used for the array = O(___);",
        "correctAnswer": "N"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"We are trading space (the memo array) for time (no more repeats). A fair trade! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Does Fibonacci display optimal substructure?",
        "options": [
          "Yes",
          "No",
          "Only for large N"
        ],
        "correctAnswer": "Yes"
      },
      {
        "type": "code_fill_in",
        "questionText": "Compute and store in one line.",
        "codeSnippet": "return memo[n] = f(n-1) ___ f(n-2);",
        "correctAnswer": "+"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Sequence of success! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Ready to tabulate?\"",
        "options": [
          "Let's build the table!",
          "Maybe later.",
          "1"
        ],
        "correctAnswer": "Let's build the table!"
      }
    ]
  },
  {
    "order": 3,
    "title": "Bottom-Up Ascent (Tabulation)",
    "desc": "Solving subproblems iteratively from small to large.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Tabulation is DP's other wing. Instead of starting from N and going down (Top-Down), we start at 0 and build UP! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"No recursion limits, no stack overflow. Just a loop and a table! 🦜\"",
        "codeSnippet": "int fib(int n) {\n  dp[0] = 0; dp[1] = 1;\n  for(int i=2; i<=n; i++)\n    dp[i] = dp[i-1] + dp[i-2];\n  return dp[n];\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Which DP approach is iterative?",
        "options": [
          "Tabulation",
          "Memoization",
          "Binary Search"
        ],
        "correctAnswer": "Tabulation"
      },
      {
        "type": "match_following",
        "questionText": "Match DP Styles!",
        "pairs": [
          {
            "key": "Top-Down",
            "value": "Memoization"
          },
          {
            "key": "Bottom-Up",
            "value": "Tabulation"
          },
          {
            "key": "Wait",
            "value": "Sleep"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Term for DP that doesn't use recursion.",
        "codeSnippet": "Iterative DP = ___;",
        "correctAnswer": "tabulation"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"It's like climbing a tree node by node from the ground. You always have the base you need! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Main risk of Top-Down recursion?",
        "options": [
          "Stack Overflow",
          "Table too large",
          "Bird attack"
        ],
        "correctAnswer": "Stack Overflow"
      },
      {
        "type": "code_fill_in",
        "questionText": "The core iteration in tabulation.",
        "codeSnippet": "for(int i = ___; i <= n; i++)",
        "correctAnswer": "2"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Steady progress! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Which wing is stronger?\"",
        "options": [
          "Both are essential!",
          "Top-Down only.",
          "Right Wing."
        ],
        "correctAnswer": "Both are essential!"
      }
    ]
  },
  {
    "order": 4,
    "title": "Hop, Skip, Jump (Climbing Stairs)",
    "desc": "How many ways to reach the top? A fundamental counting problem.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Climbing Stairs puzzle! You're a bird that can hop 1 or 2 nests. How many ways to reach nest N? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"It's actually Fibonacci in disguise! To reach step N, you must have come from N-1 (1 hop) OR N-2 (2 hops). 🦜\"",
        "codeSnippet": "Ways(N) = Ways(N-1) + Ways(N-2);\nBase Cases: Ways(1)=1, Ways(2)=2."
      },
      {
        "type": "multiple_choice",
        "questionText": "Ways to climb 3 stairs?",
        "options": [
          "3",
          "2",
          "4"
        ],
        "correctAnswer": "3"
      },
      {
        "type": "match_following",
        "questionText": "Match Stair Scenarios!",
        "pairs": [
          {
            "key": "N=1",
            "value": "1 way (1)"
          },
          {
            "key": "N=2",
            "value": "2 ways (1+1, 2)"
          },
          {
            "key": "N=3",
            "value": "3 ways (1+1+1, 1+2, 2+1)"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Function that solves Climbing Stairs.",
        "codeSnippet": "int countWays(int n) {\n  return ___(n);\n}",
        "correctAnswer": "fib"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"DP is perfect for 'counting' problems where the future depends on the immediate past! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "If you could hop 1, 2, or 3 stairs, the formula would be?",
        "options": [
          "f(n-1) + f(n-2) + f(n-3)",
          "f(n-1) + f(n-3)",
          "3 * f(n-1)"
        ],
        "correctAnswer": "f(n-1) + f(n-2) + f(n-3)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Base case for stair climbing.",
        "codeSnippet": "if (n <= 2) return ___ ;",
        "correctAnswer": "n"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Scaling heights! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Can I reach the clouds?\"",
        "options": [
          "Step by step!",
          "No.",
          "0"
        ],
        "correctAnswer": "Step by step!"
      }
    ]
  },
  {
    "order": 5,
    "title": "Cheap Flights (Min Cost Stairs)",
    "desc": "Finding the path with the minimum weight/cost.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"What if every nest has a 'cost' (like energy)? We want the cheapest flight to the top! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Cost to reach N = `cost[N] + min(total[N-1], total[N-2])`. Choose the weaker wind! 🦜\"",
        "codeSnippet": "int minCost(int n) {\n  dp[i] = cost[i] + min(dp[i-1], dp[i-2]);\n  return min(dp[n-1], dp[n-2]);\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Function used to pick the cheaper path?",
        "options": [
          "min()",
          "max()",
          "average()"
        ],
        "correctAnswer": "min()"
      },
      {
        "type": "match_following",
        "questionText": "Match Cost Rules!",
        "pairs": [
          {
            "key": "Subproblem",
            "value": "Min cost to step i"
          },
          {
            "key": "Decision",
            "value": "Step 1 or Step 2"
          },
          {
            "key": "Target",
            "value": "Top of stairs"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Array used to store min costs.",
        "codeSnippet": "vector<int> ___ (n+1);",
        "correctAnswer": "dp"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Always look back at the last two nests. The one that was easier to reach is our origin! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What's the complexity if there are N stairs?",
        "options": [
          "O(N)",
          "O(N^2)",
          "O(1)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Final min calculation.",
        "codeSnippet": "return ___ (dp[n-1], dp[n-2]);",
        "correctAnswer": "min"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Saving energy for the long haul! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I the cheapest bird?\"",
        "options": [
          "Cost-effective king!",
          "No.",
          "0"
        ],
        "correctAnswer": "Cost-effective king!"
      }
    ]
  },
  {
    "order": 6,
    "title": "The Fruit Bandit (House Robber)",
    "desc": "Introduction to non-adjacent decision making.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Fruit Bandit! You want to rob fruit from nests in a row, but if you hit two ADJACENT nests, the alarm sounds! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Decision at nest `i`: Either rob it (`val[i] + max_loot[i-2]`) OR skip it (`max_loot[i-1]`). 🦜\"",
        "codeSnippet": "dp[i] = max(dp[i-2] + nums[i], dp[i-1]);"
      },
      {
        "type": "multiple_choice",
        "questionText": "Loot from houses [10, 20, 30, 40]?",
        "options": [
          "60 (20+40)",
          "70 (10+30+Skipped)",
          "40 (30+10 is worse than 40+20)"
        ],
        "correctAnswer": "60 (20+40)"
      },
      {
        "type": "match_following",
        "questionText": "Match Bandit Logic!",
        "pairs": [
          {
            "key": "Rob",
            "value": "current + dp[i-2]"
          },
          {
            "key": "Skip",
            "value": "dp[i-1]"
          },
          {
            "key": "Goal",
            "value": "max(Rob, Skip)"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Constraint of the House Robber problem.",
        "codeSnippet": "Cannot rob ___ houses.",
        "correctAnswer": "adjacent"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"It's about the BIG PICTURE. Sometimes skipping a small nest now lets you rob a massive one next loop! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Space needed if we only look back at i-1 and i-2?",
        "options": [
          "O(1) (Just two variables)",
          "O(N)",
          "O(N^2)"
        ],
        "correctAnswer": "O(1) (Just two variables)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Initial DP values for houses.",
        "codeSnippet": "dp[0] = nums[0]; dp[1] = max(___, nums[1]);",
        "correctAnswer": "nums[0]"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Strategic heist! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I the best thief?\"",
        "options": [
          "Smooth operator!",
          "No.",
          "0"
        ],
        "correctAnswer": "Smooth operator!"
      }
    ]
  },
  {
    "order": 7,
    "title": "Grid Navigator I",
    "desc": "Unique Paths in a 2D grid.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Lost in the 2D Woods! You start at (0,0) and want to reach (M,N). You can only move RIGHT or DOWN. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Ways to reach (r,c) = `Ways(r-1, c) + Ways(r, c-1)`. Every nest is a sum of its neighbors! 🦜\"",
        "codeSnippet": "dp[i][j] = dp[i-1][j] + dp[i][j-1];"
      },
      {
        "type": "multiple_choice",
        "questionText": "Number of ways in a 2x2 grid?",
        "options": [
          "2",
          "4",
          "6"
        ],
        "correctAnswer": "2"
      },
      {
        "type": "match_following",
        "questionText": "Match Grid directions!",
        "pairs": [
          {
            "key": "Right",
            "value": "(i, j+1)"
          },
          {
            "key": "Down",
            "value": "(i+1, j)"
          },
          {
            "key": "Origin",
            "value": "(0, 0)"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Value of all cells in the first row/column.",
        "codeSnippet": "dp[0][j] = dp[i][0] = ___ ;",
        "correctAnswer": "1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This is essentially Pascal's Triangle laid flat! Simple math, powerful DP. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What if there's an obstacle in a cell?",
        "options": [
          "Set ways to 0",
          "Jump over it",
          "Cry"
        ],
        "correctAnswer": "Set ways to 0"
      },
      {
        "type": "code_fill_in",
        "questionText": "Initialize target cell.",
        "codeSnippet": "dp[0][0] = ___ ;",
        "correctAnswer": "1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Mapping the path! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I at the destination?\"",
        "options": [
          "Goal reached!",
          "No.",
          "0"
        ],
        "correctAnswer": "Goal reached!"
      }
    ]
  },
  {
    "order": 8,
    "title": "Grid Navigator II (Min Path Sum)",
    "desc": "Finding the path with the minimum sum in a grid.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Stormy Grid! Every cell has a cost. Find the path from top-left to bottom-right with the lowest total sum. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Cost to (r,c) = `grid[r][c] + min(dp[r-1][c], dp[r][c-1])`. Choose the path of least resistance! 🦜\"",
        "codeSnippet": "dp[i][j] = grid[i][j] + min(dp[i-1][j], dp[i][j-1]);"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity for an M x N grid?",
        "options": [
          "O(M*N)",
          "O(M+N)",
          "O(2^(M+N))"
        ],
        "correctAnswer": "O(M*N)"
      },
      {
        "type": "match_following",
        "questionText": "Match path logic!",
        "pairs": [
          {
            "key": "Current",
            "value": "grid[i][j]"
          },
          {
            "key": "Lookup",
            "value": "min(left, up)"
          },
          {
            "key": "Store",
            "value": "dp[i][j]"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Function to pick the cheaper entry point.",
        "codeSnippet": "best = ___ (dp[i-1][j], dp[i][j-1]);",
        "correctAnswer": "min"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"We fill the table row by row, ensuring we always know the cost of the cells above and to the left. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Can we solve this in O(N) space?",
        "options": [
          "Yes (Reuse 1D array)",
          "No",
          "Only for square grids"
        ],
        "correctAnswer": "Yes (Reuse 1D array)"
      },
      {
        "type": "code_fill_in",
        "questionText": "First column initialization.",
        "codeSnippet": "dp[i][0] += dp[___][0];",
        "correctAnswer": "i-1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Avoiding the clouds! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I the min path bird?\"",
        "options": [
          "Efficiency master!",
          "No.",
          "0"
        ],
        "correctAnswer": "Efficiency master!"
      }
    ]
  },
  {
    "order": 9,
    "title": "Subsequence Secrets (LCS Intro)",
    "desc": "Finding the longest common subsequence between two strings.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Secret Code! Longest Common Subsequence (LCS). What's the longest shared sequence of notes between two bird songs? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"If chars match: `1 + LCS(next)`. If not: `max(LCS(skip_A), LCS(skip_B))`. 🦜\"",
        "codeSnippet": "if(s1[i] == s2[j]) dp[i][j] = 1 + dp[i-1][j-1];\nelse dp[i][j] = max(dp[i-1][j], dp[i][j-1]);"
      },
      {
        "type": "multiple_choice",
        "questionText": "LCS of 'ABCD' and 'ACDF'?",
        "options": [
          "3 (ACD)",
          "4 (ABCD)",
          "2 (AD)"
        ],
        "correctAnswer": "3 (ACD)"
      },
      {
        "type": "match_following",
        "questionText": "Match LCS states!",
        "pairs": [
          {
            "key": "Match",
            "value": "+1 to count"
          },
          {
            "key": "Mismatch",
            "value": "Discard one char"
          },
          {
            "key": "Base Case",
            "value": "Empty string = 0"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "DP Table size for strings S1 and S2.",
        "codeSnippet": "int dp[___][s2.length()+1];",
        "correctAnswer": "s1.length()+1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Unlike a substring, a subsequence doesn't have to be together—just in the same order! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of LCS?",
        "options": [
          "O(M*N)",
          "O(M+N)",
          "O(2^N)"
        ],
        "correctAnswer": "O(M*N)"
      },
      {
        "type": "code_fill_in",
        "questionText": "If characters don't match, take the max of neighbors.",
        "codeSnippet": "dp[i][j] = ___ (dp[i-1][j], dp[i][j-1]);",
        "correctAnswer": "max"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Finding the pattern! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I a pattern match?\"",
        "options": [
          "Sequence sync!",
          "No.",
          "0"
        ],
        "correctAnswer": "Sequence sync!"
      }
    ]
  },
  {
    "order": 10,
    "title": "The Weighty Cache (Knapsack Intro)",
    "desc": "Introduction to the 0/1 Knapsack problem.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Picnic Basket! You have items with weights and values. Your basket can only carry so much. What's the max value? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Each item: Pick it (`val + dp[rem_weight]`) OR leave it (`dp[prev_max]`). 0/1 means you can't split a seed! 🦜\"",
        "codeSnippet": "dp[i][w] = max(val[i-1] + dp[i-1][w-wt[i-1]], dp[i-1][w]);"
      },
      {
        "type": "multiple_choice",
        "questionText": "Decision in 0/1 Knapsack?",
        "options": [
          "Take or Leave",
          "Take fraction",
          "Eat it now"
        ],
        "correctAnswer": "Take or Leave"
      },
      {
        "type": "match_following",
        "questionText": "Match Knapsack terms!",
        "pairs": [
          {
            "key": "Weight",
            "value": "Capacity cost"
          },
          {
            "key": "Value",
            "value": "Utility gain"
          },
          {
            "key": "0/1",
            "value": "Discrete choice"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Term for Knapsack where portions are allowed.",
        "codeSnippet": "Fractional Knapsack (___ algorithm);",
        "correctAnswer": "greedy"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"DP is overkill for fractional knapsack, but MANDATORY for 0/1! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity if capacity is W and items N?",
        "options": [
          "O(N*W)",
          "O(2^N)",
          "O(N^2)"
        ],
        "correctAnswer": "O(N*W)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Check if weight fits.",
        "codeSnippet": "if (wt[i-1] ___ w)",
        "correctAnswer": "<="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Maxing out the stash! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I full?\"",
        "options": [
          "Optimal value reached!",
          "No.",
          "0"
        ],
        "correctAnswer": "Optimal value reached!"
      }
    ]
  },
  // Units 11-20 continue with deeper DP concepts...
  {
    "order": 11,
    "title": "Coin Collector (Coin Change I)",
    "desc": "Finding the number of ways to make progress.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Collecting Coins! How many ways to make change for amount `K` using a set of bird-coins? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Each coin can be used multiple times (Unbounded). `ways[i] += ways[i - coin]`. 🦜\"",
        "codeSnippet": "dp[amount] += dp[amount - coin];"
      },
      {
        "type": "multiple_choice",
        "questionText": "Ways to make 3 using {1, 2}?",
        "options": [
          "2 (1+1+1, 1+2)",
          "3",
          "1"
        ],
        "correctAnswer": "2 (1+1+1, 1+2)"
      },
      {
        "type": "programming_board",
        "questionText": "Initial value for `dp[0]` in counting problems.",
        "codeSnippet": "dp[0] = ___ ;",
        "correctAnswer": "1"
      },
      { "type": "teaching", "questionText": "🦜 Pico: \"Building sums! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Complexity?", "options": ["O(Amount * Coins)", "O(Coins^2)"], "correctAnswer": "O(Amount * Coins)" }
    ]
  },
  {
    "order": 12,
    "title": "The Efficient Change (Coin Change II)",
    "desc": "Finding the minimum number of coins needed.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Least Coins! Not how many ways, but the absolute MINIMUM number of coins. 🦜\"" },
      { "type": "teaching", "questionText": "🦜 Pico: \"`dp[i] = min(dp[i], 1 + dp[i-coin])`. Greed isn't enough here! 🦜\"", "codeSnippet": "dp[i] = min(dp[i], 1 + dp[i-c]);" },
      { "type": "multiple_choice", "questionText": "Min coins for 6 using {1, 3, 4}?", "options": ["2 (3+3)", "3 (4+1+1)", "6"], "correctAnswer": "2 (3+3)" },
      { "type": "programming_board", "questionText": "Initialization value for min-finding DP arrays.", "codeSnippet": "fill(dp, dp+n, ___);", "correctAnswer": "INF" }
    ]
  },
  {
    "order": 13,
    "title": "Subarray Sums (Kadane's Intro)",
    "desc": "Finding the maximum sum of a contiguous subarray.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Maximum contiguous treasure! Kadane's Algorithm is a legendary 1D DP. 🦜\"" },
      { "type": "teaching", "questionText": "🦜 Pico: \"At index `i`, either join the current streak (`sum + nums[i]`) OR start fresh (`nums[i]`). 🦜\"", "codeSnippet": "max_so_far = max(nums[i], current_max + nums[i]);" },
      { "type": "multiple_choice", "questionText": "Max sum of [-2, 1, -3, 4, -1, 2, 1, -5, 4]?", "options": ["6", "4", "5"], "correctAnswer": "6" },
      { "type": "programming_board", "questionText": "Complexity of Kadane's.", "codeSnippet": "Time = O(___);", "correctAnswer": "N" }
    ]
  },
  {
    "order": 14,
    "title": "Bitwise Foundations (DP + Bits)",
    "desc": "Introduction to Bitmasking in DP.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Bitmasking! Use a binary integer to represent a set of items. 1 means 'have', 0 means 'not'. 🦜\"" },
      { "type": "teaching", "questionText": "🦜 Pico: \"Perfect for small state spaces (N < 20). 🦜\"", "codeSnippet": "if (mask & (1 << i)) // Is the i-th bird in the set?" },
      { "type": "multiple_choice", "questionText": "What mask represents {0, 2} in binary?", "options": ["5 (101)", "3 (011)", "7"], "correctAnswer": "5 (101)" },
      { "type": "programming_board", "questionText": "Operation to add item `i` to mask.", "codeSnippet": "mask ___ (1 << i);", "correctAnswer": "|" }
    ]
  },
  {
    "order": 15,
    "title": "Partition Power",
    "desc": "Checking if an array can be partitioned into equal sums.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Equal shares! Can we split the seeds into two equal piles? 🦜\"" },
      { "type": "teaching", "questionText": "🦜 Pico: \"Find if a subset exists with sum = `total_sum / 2`. 🦜\"", "codeSnippet": "bool target = sum/2;" },
      { "type": "multiple_choice", "questionText": "Can {1, 5, 11, 5} be partitioned?", "options": ["Yes (11 and 5+5+1)", "No", "Only if sorted"], "correctAnswer": "Yes (11 and 5+5+1)" }
    ]
  },
  {
    "order": 16,
    "title": "Palindrome Polish (LPS)",
    "desc": "Longest Palindromic Subsequence.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Symmetric songs! LPS is just LCS of a string and its REVERSE. 🦜\"" },
      { "type": "multiple_choice", "questionText": "LPS of 'BBABCBC'?", "options": ["5 (BBCBB)", "7", "3"], "correctAnswer": "5 (BBCBB)" }
    ]
  },
  {
    "order": 17,
    "title": "Edit Distance (Levenshtein)",
    "desc": "Min ops to convert string A to B.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Typo fixer! Insert, Delete, or Replace. 🦜\"" },
      { "type": "multiple_choice", "questionText": "Edit distance 'Horse' to 'Ros'?", "options": ["3", "2", "5"], "correctAnswer": "3" }
    ]
  },
  {
    "order": 18,
    "title": "Target Sum Techniques",
    "desc": "Using +/- to reach a target sum.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Math magic! Assign signs to every number in the list. 🦜\"" },
      { "type": "multiple_choice", "questionText": "Ways to get 1 from {1, 1, 1, 1, 1}?", "options": ["10", "5", "1"], "correctAnswer": "10" }
    ]
  },
  {
    "order": 19,
    "title": "Interleaving Strings",
    "desc": "Checking if C is interleaving of A and B.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Weaving threads! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Interleaving is O(M*N)?", "options": ["Yes", "No"], "correctAnswer": "Yes" }
    ]
  },
  {
    "order": 20,
    "title": "Master Point (DP Fundamentals)",
    "desc": "Reflection on Stage 1 Mastery.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"STAGE 1 COMPLETE! You now handle overlapping problems like a pro. 🦜\"" },
      { "type": "multiple_choice", "questionText": "Main takeaway?", "options": ["Don't repeat work!", "DP is hard", "Always use BFS"], "correctAnswer": "Don't repeat work!" }
    ]
  }
];

module.exports = stage1;
