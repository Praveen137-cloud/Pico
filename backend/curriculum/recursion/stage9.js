const stage9 = [
  {
    "order": 81,
    "title": "The Memory Nest",
    "desc": "Introduction to Memoization (Sticky Recursion).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Sticky Recursion! Why solve the same problem 100 times when you can solve it ONCE and remember the answer? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This is 'Memoization'. Use a cache (like an array or map) to store results of recursive calls. 🦜\"",
        "codeSnippet": "int solve(n) {\n  if (memo[n] != -1) return memo[n];\n  // ... solve ...\n  return memo[n] = result;\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the primary benefit of Memoization?",
        "options": [
          "Reduces time complexity",
          "Reduces space complexity",
          "Makes code shorter"
        ],
        "correctAnswer": "Reduces time complexity"
      },
      {
        "type": "match_following",
        "questionText": "Match Memoization Terms!",
        "pairs": [
          {
            "key": "Cache",
            "value": "Storage for results"
          },
          {
            "key": "Lookup",
            "value": "Check before computing"
          },
          {
            "key": "Store",
            "value": "Save result for future"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The check for a cached value.",
        "codeSnippet": "if (cache[state] ___ -1) return cache[state];",
        "correctAnswer": "!="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Memoization turns an Exponential O(2^N) problem into a Linear O(N) or Quadratic O(N^2) one! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Where do we usually initialize the cache?",
        "options": [
          "Outside the recursive function",
          "Inside the loop",
          "In the base case"
        ],
        "correctAnswer": "Outside the recursive function"
      },
      {
        "type": "code_fill_in",
        "questionText": "Save result to `memo[n]` before returning.",
        "codeSnippet": "return ___ [n] = ans;",
        "correctAnswer": "memo"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Smart birds don't re-count their seeds! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Do you remember me?\"",
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
    "order": 82,
    "title": "Sticky Fibonacci",
    "desc": "Solving the rabbit problem in record time.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Fibonacci Speedrun! Without memory, Fib(50) takes years. With memory, it takes microseconds! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Every number is calculated exactly once and then retrieved from the nest. 🦜\"",
        "codeSnippet": "long fib(n) {\n  if (n <= 1) return n;\n  if (memo[n] != 0) return memo[n];\n  return memo[n] = fib(n-1) + fib(n-2);\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Time complexity of Fibonacci WITH memoization?",
        "options": [
          "O(N)",
          "O(2^N)",
          "O(log N)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "match_following",
        "questionText": "Match the Improvements!",
        "pairs": [
          {
            "key": "Recursive",
            "value": "O(2^N)"
          },
          {
            "key": "Memoized",
            "value": "O(N)"
          },
          {
            "key": "Fib(100)",
            "value": "Impossible without memo"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Assign result to memo while returning.",
        "codeSnippet": "return memo[n] ___ fib(n-1) + fib(n-2);",
        "correctAnswer": "="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The number of unique states (different N values) is precisely N+1. That's why it becomes O(N)! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Space complexity of memoized Fibonacci?",
        "options": [
          "O(N) (Stack + Cache)",
          "O(1)",
          "O(2^N)"
        ],
        "correctAnswer": "O(N) (Stack + Cache)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Initial value for empty cache.",
        "codeSnippet": "fill(memo, memo + n, ___ );",
        "correctAnswer": "-1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Efficiency is the wing-beat of success! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Ready for more stairs?\"",
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
    "order": 83,
    "title": "Climbing Stairs",
    "desc": "How many ways to reach the top?",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Stair Quest! To reach Step N, you can either jump from Step N-1 or jump from Step N-2. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Ways(N) = Ways(N-1) + Ways(N-2). It's secretly Fibonacci in disguise! 🦜\"",
        "codeSnippet": "int count(n) {\n  if (n <= 2) return n;\n  return memo[n] = count(n-1) + count(n-2);\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "How many ways to climb 3 stairs?",
        "options": [
          "3 (1-1-1, 1-2, 2-1)",
          "2",
          "4"
        ],
        "correctAnswer": "3 (1-1-1, 1-2, 2-1)"
      },
      {
        "type": "match_following",
        "questionText": "Match Stair Jump Rules!",
        "pairs": [
          {
            "key": "Step 0",
            "value": "1 way (staying put)"
          },
          {
            "key": "Step 1",
            "value": "1 way"
          },
          {
            "key": "Step 2",
            "value": "2 ways"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Return base case for 0 or 1 stairs.",
        "codeSnippet": "if (n ___ 2) return n;",
        "correctAnswer": "<="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This pattern appears in many problems where you have small 'choices' that build up to a larger state. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "If N=4, how many ways?",
        "options": [
          "5",
          "4",
          "8"
        ],
        "correctAnswer": "5"
      },
      {
        "type": "code_fill_in",
        "questionText": "Recursive call name.",
        "codeSnippet": "return ___(n-1) + ___(n-2);",
        "correctAnswer": "count"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Climb to the peak of the academy! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are you tired?\"",
        "options": [
          "NEVER!",
          "Yes.",
          "0"
        ],
        "correctAnswer": "NEVER!"
      }
    ]
  },
  {
    "order": 84,
    "title": "Min Cost Path",
    "desc": "Navigating the cheapest route.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Budget Flight! Each stair has a cost. You want to reach the top with MINIMUM total cost! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Cost(i) = price[i] + Min(Cost(i-1), Cost(i-2)). 🦜\"",
        "codeSnippet": "int solve(i) {\n  if (i < 0) return 0;\n  if (i <= 1) return price[i];\n  return cost[i] = price[i] + min(solve(i-1), solve(i-2));\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "What distinguishes this from normal climbing?",
        "options": [
          "We use min() instead of sum (+)",
          "It's harder",
          "It uses no recursion"
        ],
        "correctAnswer": "We use min() instead of sum (+)"
      },
      {
        "type": "match_following",
        "questionText": "Match Cost Rules!",
        "pairs": [
          {
            "key": "price[i]",
            "value": "Current cell cost"
          },
          {
            "key": "min()",
            "value": "Picking best path"
          },
          {
            "key": "cost[i]",
            "value": "Total min cost so far"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Pick the cheaper branch.",
        "codeSnippet": "return price[i] + ___(solve(i-1), solve(i-2));",
        "correctAnswer": "min"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Memory is even more vital here because 'min' paths are checked thousands of times in different combinations! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity with 1D Memoization?",
        "options": [
          "O(N)",
          "O(N^2)",
          "O(2^N)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Base case: cost of stay.",
        "codeSnippet": "if (i < 0) return ___ ;",
        "correctAnswer": "0"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Fly smart, fly cheap! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Do you save seeds?\"",
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
    "order": 85,
    "title": "House Robber",
    "desc": "The Choice between Greed and Caution.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Robber Hawk! You want to steal seeds from nests in a row. But if you rob two ADJACENT nests, the alarm sounds! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Choice at nest `i`: Either rob it and move to `i-2`, OR skip it and move to `i-1`. Pick the maximum! 🦜\"",
        "codeSnippet": "int rob(i) {\n  if (i < 0) return 0;\n  return memo[i] = max(val[i] + rob(i-2), rob(i-1));\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why do we jump to `i-2` if we rob nest `i`?",
        "options": [
          "To avoid the adjacent alarm",
          "It's a longer jump",
          "Nests come in pairs"
        ],
        "correctAnswer": "To avoid the adjacent alarm"
      },
      {
        "type": "match_following",
        "questionText": "Match the Robber Choices!",
        "pairs": [
          {
            "key": "Take",
            "value": "val[i] + rob(i-2)"
          },
          {
            "key": "Skip",
            "value": "rob(i-1)"
          },
          {
            "key": "Goal",
            "value": "Maximize profit"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Select the better of two choices.",
        "codeSnippet": "return ___(robCurrent, skipCurrent);",
        "correctAnswer": "max"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This is the 'Take/Skip' pattern. It's the core of most Dynamic Programming problems! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Max seeds in [1, 2, 3, 1]?",
        "options": [
          "4 (1+3)",
          "3",
          "5"
        ],
        "correctAnswer": "4 (1+3)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Check memo for index `i`.",
        "codeSnippet": "if (memo[i] != ___ ) return memo[i];",
        "correctAnswer": "-1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Be a silent hawk, fledgling! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Did you rob me?\"",
        "options": [
          "Never!",
          "Yes.",
          "0"
        ],
        "correctAnswer": "Never!"
      }
    ]
  },
  {
    "order": 86,
    "title": "Subsequence Match (LCS)",
    "desc": "Finding the shared DNA of strings.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Longest Common Subsequence! What is the longest set of letters shared by two strings in order? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Compare `s1[i]` and `s2[j]`. If they match: 1 + solve(i+1, j+1). If they don't: Max(solve(i+1, j), solve(i, j+1))! 🦜\"",
        "codeSnippet": "if (s1[i] == s2[j]) return 1 + lcs(i+1, j+1);\nelse return max(lcs(i+1, j), lcs(i, j+1));"
      },
      {
        "type": "multiple_choice",
        "questionText": "LCS of 'abcde' and 'ace'?",
        "options": [
          "3 ('ace')",
          "2",
          "1"
        ],
        "correctAnswer": "3 ('ace')"
      },
      {
        "type": "match_following",
        "questionText": "Match LCS Scenarios!",
        "pairs": [
          {
            "key": "Characters Match",
            "value": "1 + rest"
          },
          {
            "key": "Mismatch",
            "value": "max(skip S1, skip S2)"
          },
          {
            "key": "Empty",
            "value": "Empty result (0)"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Mismatch logic: skip one bird from string 1.",
        "codeSnippet": "return max(solve(i + 1, j), solve(i, ___ ));",
        "correctAnswer": "j + 1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Complexity with 2D Memoization: O(N * M). Used in 'diff' tools and DNA sequencing! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "LCS of 'Pico' and 'Elite'?",
        "options": [
          "1 ('i')",
          "0",
          "2"
        ],
        "correctAnswer": "1 ('i')"
      },
      {
        "type": "code_fill_in",
        "questionText": "Base case: one string ends.",
        "codeSnippet": "if (i == s1.len || j == s2.len) return ___ ;",
        "correctAnswer": "0"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Find the common thread! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are we similar?\"",
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
    "order": 87,
    "title": "Increasing Paths (LIS)",
    "desc": "Birds ascending in ranking.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Longest Increasing Subsequence! Find the longest subsequence where every bird is BIGGER than the previous one! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Choice: At current index `i`, if `val[i] > prevVal`, we can either INCLUDE or EXCLUDE. Else, we must EXCLUDE! 🦜\"",
        "codeSnippet": "int solve(i, prev) {\n  if (i == n) return 0;\n  int excl = solve(i+1, prev);\n  int incl = 0;\n  if (val[i] > prev) incl = 1 + solve(i+1, val[i]);\n  return max(incl, excl);\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "LIS of [10, 20, 10, 30]?",
        "options": [
          "3 (10, 20, 30)",
          "4",
          "2"
        ],
        "correctAnswer": "3 (10, 20, 30)"
      },
      {
        "type": "match_following",
        "questionText": "Match LIS Logic!",
        "pairs": [
          {
            "key": "Valid",
            "value": "curr > prev"
          },
          {
            "key": "Invalid",
            "value": "curr <= prev"
          },
          {
            "key": "Optimization",
            "value": "Memoize by (i, prevIdx)"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Final result is the max of including or excluding.",
        "codeSnippet": "return ___(taking, notTaking);",
        "correctAnswer": "max"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This is similar to Subset Sum, but with an ordering constraint! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity with memoization?",
        "options": [
          "O(N^2)",
          "O(N)",
          "O(2^N)"
        ],
        "correctAnswer": "O(N^2)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Base case reached.",
        "codeSnippet": "if (idx == n) return ___ ;",
        "correctAnswer": "0"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Keep climbing higher! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is my score increasing?\"",
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
    "order": 88,
    "title": "Coin Change",
    "desc": "Minimum seeds for exact payment.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Smallest Change! You have infinite seeds of values [1, 2, 5]. What is the MINIMUM number of seeds to make sum 11? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"For every seed, try taking it and subtract its' value from the target. Min of all paths + 1! 🦜\"",
        "codeSnippet": "int minCoins(target) {\n  if (target == 0) return 0;\n  if (memo[target] != -1) return memo[target];\n  int res = INF;\n  for (c : coins) {\n    if (target >= c) res = min(res, 1 + minCoins(target - c));\n  }\n  return memo[target] = res;\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Min coins for target 6 using [1, 3, 4]?",
        "options": [
          "2 (3 + 3)",
          "6",
          "3"
        ],
        "correctAnswer": "2 (3 + 3)"
      },
      {
        "type": "match_following",
        "questionText": "Match Coin Terms!",
        "pairs": [
          {
            "key": "target - c",
            "value": "Reducing problem"
          },
          {
            "key": "1 + ...",
            "value": "Counting current coin"
          },
          {
            "key": "INF",
            "value": "Impossible initial state"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The update for the min number of coins.",
        "codeSnippet": "ans = ___(ans, 1 + solve(target - coins[i]));",
        "correctAnswer": "min"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Recursive branching is huge here. Memoization is the only way to survive! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "If target = 0, how many coins?",
        "options": [
          "0",
          "1",
          "INF"
        ],
        "correctAnswer": "0"
      },
      {
        "type": "code_fill_in",
        "questionText": "Infinite constant.",
        "codeSnippet": "int res = ___ ;",
        "correctAnswer": "INT_MAX"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Exact change only! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Did I pay you?\"",
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
    "order": 89,
    "title": "The Knapsack",
    "desc": "Perfectly packing your recursive bag.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"0/1 Knapsack! You have items with weights and values. Your bag has a max capacity. Which items do you take to GET MAX VALUE? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Classic Choice: Take i if weight[i] <= capacity, or Skip i. Return the max of both! 🦜\"",
        "codeSnippet": "if (wt[i] > cap) return solve(i-1, cap);\nreturn memo[i][cap] = max(\n  val[i] + solve(i-1, cap - wt[i]), \n  solve(i-1, cap)\n);"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why is it called '0/1' Knapsack?",
        "options": [
          "You either take 1 item (all of it) or 0 (none)",
          "It uses binary",
          "Only 0 or 1 items exist"
        ],
        "correctAnswer": "You either take 1 item (all of it) or 0 (none)"
      },
      {
        "type": "match_following",
        "questionText": "Match Knapsack Logic!",
        "pairs": [
          {
            "key": "Take",
            "value": "val + solve(wt - curr)"
          },
          {
            "key": "Skip",
            "value": "solve(same cap)"
          },
          {
            "key": "Limit",
            "value": "Capacity"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The max profit update.",
        "codeSnippet": "return ___(incl, excl);",
        "correctAnswer": "max"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This recursive structure solves the decision problem optimally. 2D Memoization: O(N * Capacity)! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What if N = 1000 and Capacity = 1000?",
        "options": [
          "1,000,000 states",
          "1,000 states",
          "2^1000 states"
        ],
        "correctAnswer": "1,000,000 states"
      },
      {
        "type": "code_fill_in",
        "questionText": "Recursive call with less capacity.",
        "codeSnippet": "solve(i - 1, cap ___ wt[i]);",
        "correctAnswer": "-"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Pack light, pack smart! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I in your bag?\"",
        "options": [
          "THE MOST VALUABLE ITEM!",
          "No.",
          "0"
        ],
        "correctAnswer": "THE MOST VALUABLE ITEM!"
      }
    ]
  },
  {
    "order": 90,
    "title": "Master Point (Recursion 9)",
    "desc": "State spinner status confirmed.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"STAGE 9 COMPLETE! Fibonacci, Knapsacks, Coins, and Common Strings. Your recursive memory is vast! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What does Memoization store?",
        "options": [
          "Results of recursive sub-problems",
          "Strings",
          "User names"
        ],
        "correctAnswer": "Results of recursive sub-problems"
      },
      {
        "type": "multiple_choice",
        "questionText": "Time complexity of memoized 0/1 Knapsack?",
        "options": [
          "O(N * Capacity)",
          "O(2^N)",
          "O(N log N)"
        ],
        "correctAnswer": "O(N * Capacity)"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"You are a State Spinner! In Stage 10, we face the Final Bosses of Recursion! 🦜\""
      },
      {
        "type": "match_following",
        "questionText": "Match the Rank!",
        "pairs": [
          {
            "key": "Stage 9",
            "value": "State Spinner"
          },
          {
            "key": "Stage 10",
            "value": "Recursive God"
          },
          {
            "key": "Next",
            "value": "Titan's End"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "States Spun.",
        "codeSnippet": "9 * ___ ;",
        "correctAnswer": "100"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"One final climb to the sun! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Climb for the crown?",
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
        "questionText": "Final State?",
        "options": [
          "Solved!",
          "Done.",
          "0"
        ],
        "correctAnswer": "Solved!"
      }
    ]
  }
];

module.exports = stage9;
