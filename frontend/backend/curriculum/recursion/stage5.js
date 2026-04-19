const stage5 = [
  {
    "order": 41,
    "title": "Universal Subsets",
    "desc": "Mastering the Power Set once and for all.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Power Set! Given a flock of birds {A, B, C}, find every possible sub-group including the empty one. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Recursive pattern: A subset of size N is formed by taking/ignoring the Nth bird and combining it with all subsets of size N-1! 🦜\"",
        "codeSnippet": "void subsets(nums, i, curr) {\n  if (i == nums.size()) { res.push(curr); return; }\n  subsets(nums, i + 1, curr); // Ignore\n  curr.push(nums[i]);\n  subsets(nums, i + 1, curr); // Include\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Total number of subsets for a set of size 4?",
        "options": [
          "16 (2^4)",
          "8",
          "4"
        ],
        "correctAnswer": "16 (2^4)"
      },
      {
        "type": "match_following",
        "questionText": "Match Subset Terms!",
        "pairs": [
          {
            "key": "Empty Set",
            "value": "Ignore all"
          },
          {
            "key": "Full Set",
            "value": "Include all"
          },
          {
            "key": "Binary",
            "value": "2 options per bird"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The backtracking step after 'Including' the bird.",
        "codeSnippet": "curr.push(nums[i]);\nsubsets(nums, i + 1, curr);\ncurr.___();",
        "correctAnswer": "pop_back"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Each bird is a binary switch: 0 or 1. This is why there are 2^N birds in the power set! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is the order of elements in a subset important?",
        "options": [
          "No (A,B is same as B,A)",
          "Yes",
          "Only in elite math"
        ],
        "correctAnswer": "No (A,B is same as B,A)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Complexity: O( ___ * N )",
        "codeSnippet": "O(___ * N)",
        "correctAnswer": "2^N"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Collect them all, fledgling! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I in every subset?\"",
        "options": [
          "If you're the favorite!",
          "No.",
          "0"
        ],
        "correctAnswer": "If you're the favorite!"
      }
    ]
  },
  {
    "order": 42,
    "title": "Subset Sum",
    "desc": "Can we reach the target weight?",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Target Weight! You have birds with weights [2, 3, 5]. Can any combination sum up to 8? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"For each bird, either add its weight to the current sum or skip it! 🦜\"",
        "codeSnippet": "bool canReach(arr, n, target) {\n  if (target == 0) return true;\n  if (n == 0) return false;\n  return canReach(arr, n-1, target - arr[n-1]) // Include\n      || canReach(arr, n-1, target);           // Exclude\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Can weights [3, 4, 10] sum to 7?",
        "options": [
          "Yes (3 + 4)",
          "No",
          "Only if we can use birds twice"
        ],
        "correctAnswer": "Yes (3 + 4)"
      },
      {
        "type": "match_following",
        "questionText": "Match the Recursive Logic!",
        "pairs": [
          {
            "key": "target - arr[i]",
            "value": "Including the bird"
          },
          {
            "key": "target stays same",
            "value": "Skipping the bird"
          },
          {
            "key": "|| operator",
            "value": "Check if EITHER path works"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Base case: target achieved perfectly.",
        "codeSnippet": "if (target ___ 0) return true;",
        "correctAnswer": "=="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This is the foundation of the Knapsack problem. It's NP-Complete, meaning it's hard for computers as the flock grows! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity to check all sums?",
        "options": [
          "O(2^N)",
          "O(N^2)",
          "O(N)"
        ],
        "correctAnswer": "O(2^N)"
      },
      {
        "type": "code_fill_in",
        "questionText": "What if a bird is heavier than the target?",
        "codeSnippet": "if (arr[i] > target) return ___ (i-1, target);",
        "correctAnswer": "solve"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Balance the scales, fledgling! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Does my weight count?\"",
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
    "title": "Count Subset Sums",
    "desc": "How many teams sum to S?",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Counting Teams! Instead of just 'Yes/No', how many different sub-flocks have a total weight of S? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Instead of OR (||), use ADDITION (+)! 🦜\"",
        "codeSnippet": "return count(n-1, target - arr[n-1]) + count(n-1, target);"
      },
      {
        "type": "multiple_choice",
        "questionText": "Count sum=5 with [2, 3, 5, 0]?",
        "options": [
          "4 ( {2,3}, {5}, {2,3,0}, {5,0} )",
          "2",
          "1"
        ],
        "correctAnswer": "4 ( {2,3}, {5}, {2,3,0}, {5,0} )"
      },
      {
        "type": "match_following",
        "questionText": "Match Counting Rules!",
        "pairs": [
          {
            "key": "+",
            "value": "Combine paths"
          },
          {
            "key": "target=0",
            "value": "Found 1 team"
          },
          {
            "key": "n=0, target!=0",
            "value": "Found 0 teams"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Base case for an empty sum found.",
        "codeSnippet": "if (target == 0) return ___ ;",
        "correctAnswer": "1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Zeros are tricky. If you have zeros, you can double your count because {2,3} and {2,3,0} both sum to 5! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "If no subset sums to S, what should the function return?",
        "options": [
          "0",
          "-1",
          "False"
        ],
        "correctAnswer": "0"
      },
      {
        "type": "code_fill_in",
        "questionText": "Sum of both branches.",
        "codeSnippet": "return left + ___ ;",
        "correctAnswer": "right"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Every bird counts toward the goal! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are there many paths to me?\"",
        "options": [
          "SQUAWK YES!",
          "Just one.",
          "0"
        ],
        "correctAnswer": "SQUAWK YES!"
      }
    ]
  },
  {
    "order": 44,
    "title": "Partition Equal Sum",
    "desc": "Splitting the flock into two equal-weight teams.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Great Split! Can you divide the whole flock into two teams with the EXACT same total weight? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Step 1: Calculate total sum. Step 2: If sum is ODD, game over (No). Step 3: Find if any subset sums to (TotalSum / 2)! 🦜\"",
        "codeSnippet": "if (total % 2 != 0) return false;\nreturn subsetSum(arr, total / 2);"
      },
      {
        "type": "multiple_choice",
        "questionText": "Can you partition [1, 5, 11, 5]?",
        "options": [
          "Yes (Team1={1,5,5}, Team2={11})",
          "No",
          "Maybe"
        ],
        "correctAnswer": "Yes (Team1={1,5,5}, Team2={11})"
      },
      {
        "type": "match_following",
        "questionText": "Match Partition Logic!",
        "pairs": [
          {
            "key": "Odd Sum",
            "value": "Impossible"
          },
          {
            "key": "Even Sum",
            "value": "Target = Sum / 2"
          },
          {
            "key": "Goal",
            "value": "Perfect Balance"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Condition for impossibility.",
        "codeSnippet": "if (totalSum ___ 2 != 0) return false;",
        "correctAnswer": "%"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This is essentially a Subset Sum problem with a fixed target. Power through it! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What if the sum is 100? What is the target?",
        "options": [
          "50",
          "100",
          "25"
        ],
        "correctAnswer": "50"
      },
      {
        "type": "code_fill_in",
        "questionText": "Target for partitioning.",
        "codeSnippet": "target = total / ___ ;",
        "correctAnswer": "2"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Equity for all birds! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are we even?\"",
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
    "title": "Combinations (nCr)",
    "desc": "Selecting K birds from N without order mattering.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Combinations! Choosing 2 birds from a flock of 4. 'AB' is the same as 'BA'! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The formula: nCr = (n-1)C(r-1) + (n-1)C(r). Base cases: nCn is 1, nC1 is n, and nC0 is 1. 🦜\"",
        "codeSnippet": "int nCr(n, r) {\n  if (r == 0 || r == n) return 1;\n  return nCr(n-1, r-1) + nCr(n-1, r);\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is 4C2 (4 choose 2)?",
        "options": [
          "6",
          "4",
          "2"
        ],
        "correctAnswer": "6",
        "explanation": "4*3 / 2*1 = 6"
      },
      {
        "type": "match_following",
        "questionText": "Match Combinations!",
        "pairs": [
          {
            "key": "5C0",
            "value": "1"
          },
          {
            "key": "5C5",
            "value": "1"
          },
          {
            "key": "5C1",
            "value": "5"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The additive property of combinations (Pascal's rule).",
        "codeSnippet": "return C(n-1, r-1) ___ C(n-1, r);",
        "correctAnswer": "+"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This recursive formula is the basis of Pascal's Triangle. Each value is the sum of the two above it! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Efficiency of this naive recursion for 100C50?",
        "options": [
          "Terrible (Exponential)",
          "Great (Linear)",
          "Small"
        ],
        "correctAnswer": "Terrible (Exponential)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Base case: Choose 0 items.",
        "codeSnippet": "if (r == 0) return ___ ;",
        "correctAnswer": "1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Pick your team and fly! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Did you choose me for the team?\"",
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
    "title": "Pascal's Triangle",
    "desc": "Visualizing recursive combinations.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Triangle of Power! Each row represents combinations for a fixed N. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Row 0: 1 | Row 1: 1 1 | Row 2: 1 2 1 | Row 3: 1 3 3 1. See the pattern? 🦜\"",
        "codeSnippet": "   1\n  1 1\n 1 2 1\n1 3 3 1"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the next row after 1 3 3 1?",
        "options": [
          "1 4 6 4 1",
          "1 4 4 4 1",
          "1 5 10 10 5 1"
        ],
        "correctAnswer": "1 4 6 4 1"
      },
      {
        "type": "match_following",
        "questionText": "Match Row Values!",
        "pairs": [
          {
            "key": "Corners",
            "value": "Always 1"
          },
          {
            "key": "Middle",
            "value": "Sum of above"
          },
          {
            "key": "Row Sum",
            "value": "2^N"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Value at (n, r) using previous row results.",
        "codeSnippet": "row[i] = prevRow[i-1] + prevRow[___];",
        "correctAnswer": "i"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Every cell (n, r) is exactly nCr. Mathematics is beautiful! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Sum of elements in Row 4 (1 4 6 4 1)?",
        "options": [
          "16 (2^4)",
          "10",
          "20"
        ],
        "correctAnswer": "16 (2^4)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Triangle height N. Total cells?",
        "codeSnippet": "N * (N + 1) / ___",
        "correctAnswer": "2"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"A pyramid built of numbers! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I at the top?\"",
        "options": [
          "Number 1!",
          "No.",
          "0"
        ],
        "correctAnswer": "Number 1!"
      }
    ]
  },
  {
    "order": 47,
    "title": "Tower of Hanoi",
    "desc": "The most famous recursive puzzle.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Towers of Hanoi! Move N discs from Source to Destination using an Auxiliary peg. Rules: 1. Move one at a time. 2. No bigger disc on a smaller one! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"To move N discs: 1. Move N-1 to Aux. 2. Move Nth to Dest. 3. Move N-1 from Aux to Dest! 🦜\"",
        "codeSnippet": "void hanoi(n, src, aux, dest) {\n  if (n == 0) return;\n  hanoi(n-1, src, dest, aux);\n  print(\"Move \" + n + \" from \" + src + \" to \" + dest);\n  hanoi(n-1, aux, src, dest);\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Minimum moves for N=3 discs?",
        "options": [
          "7 (2^3 - 1)",
          "3",
          "9"
        ],
        "correctAnswer": "7 (2^3 - 1)"
      },
      {
        "type": "match_following",
        "questionText": "Match Peg Roles!",
        "pairs": [
          {
            "key": "A (Source)",
            "value": "Start here"
          },
          {
            "key": "B (Aux)",
            "value": "Holding zone"
          },
          {
            "key": "C (Dest)",
            "value": "Goal"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The number of moves for N discs.",
        "codeSnippet": "totalMoves = (2 ___ n) - 1;",
        "correctAnswer": "**"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This is perfect 'Indirect' logic. Pegs switch roles depending on which disc is being moved! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "If N=64 (Brahma puzzle), will the world end before it's solved?",
        "options": [
          "Yes (billions of years)",
          "No",
          "Maybe"
        ],
        "correctAnswer": "Yes (billions of years)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Base case for 0 discs.",
        "codeSnippet": "if (n == 0) ___ ;",
        "correctAnswer": "return"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Disc by disc, we move the mountain! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I a disc?\"",
        "options": [
          "THE LARGEST ONE!",
          "No.",
          "0"
        ],
        "correctAnswer": "THE LARGEST ONE!"
      }
    ]
  },
  {
    "order": 48,
    "title": "Josephus Problem",
    "desc": "Recursive survival in a circle.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Survival Game! N birds are in a circle. Every K-th bird is removed until only ONE remains. Who survives? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Recursive state: `J(n, k) = (J(n-1, k) + k) % n`. Solve for (n-1) and shift the index! 🦜\"",
        "codeSnippet": "int josephus(n, k) {\n  if (n == 1) return 0;\n  return (josephus(n - 1, k) + k) % n;\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Survivor index for N=2, K=2 (0-based)?",
        "options": [
          "0",
          "1",
          "-1"
        ],
        "correctAnswer": "0",
        "explanation": "(J(1,2)+2)%2 = (0+2)%2 = 0"
      },
      {
        "type": "match_following",
        "questionText": "Match Survival Logic!",
        "pairs": [
          {
            "key": "n=1",
            "value": "Survivor found"
          },
          {
            "key": "+ k",
            "value": "Index shift"
          },
          {
            "key": "% n",
            "value": "Keep in circle"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Recursive call with one less bird.",
        "codeSnippet": "return (___(n - 1, k) + k) % n;",
        "correctAnswer": "josephus"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This is O(N). A brilliant way to solve a circle problem without a loop or manual removals! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is there a O(log N) bitwise trick if K=2?",
        "options": [
          "Yes (Left shift + 1)",
          "No",
          "Only in elite math"
        ],
        "correctAnswer": "Yes (Left shift + 1)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Survivor found at base case.",
        "codeSnippet": "if (n == 1) return ___ ;",
        "correctAnswer": "0"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Last bird standing! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I the survivor?\"",
        "options": [
          "I am the Master!",
          "No.",
          "0"
        ],
        "correctAnswer": "I am the Master!"
      }
    ]
  },
  {
    "order": 49,
    "title": "Gray Code",
    "desc": "The one-bit flip sequence.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Gray Code! An ordering of binary numbers where any two neighbors differ by ONLY ONE bit. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Recursive Build: 1. Get Gray Code for N-1. 2. Prepend '0' to them. 3. Prepend '1' to their REVERSE. 🦜\"",
        "codeSnippet": "// n=1: {0, 1}\n// n=2: {00, 01, 11, 10}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Gray Code for N=2?",
        "options": [
          "00, 01, 11, 10",
          "00, 01, 10, 11",
          "0, 1, 2, 3"
        ],
        "correctAnswer": "00, 01, 11, 10"
      },
      {
        "type": "match_following",
        "questionText": "Match Gray Steps!",
        "pairs": [
          {
            "key": "Step 1",
            "value": "Copy N-1"
          },
          {
            "key": "Step 2",
            "value": "Mirror them"
          },
          {
            "key": "Step 3",
            "value": "Add LSB/MSB"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Reflect and add a leading bit.",
        "codeSnippet": "for(int j=i-1; j>=0; j--)\n  res.push_back(res[j] ___ (1 << i));",
        "correctAnswer": "|"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Used in error correction and rotating encoders. Pure efficiency! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "How many codes for N-bit Gray sequence?",
        "options": [
          "2^N",
          "N^2",
          "N!"
        ],
        "correctAnswer": "2^N"
      },
      {
        "type": "code_fill_in",
        "questionText": "Base case for n=0.",
        "codeSnippet": "if (n == 0) return {\"___\"};",
        "correctAnswer": "0"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"One bit at a time, fledgling! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I a code?\"",
        "options": [
          "THE BEST CODE!",
          "No.",
          "0"
        ],
        "correctAnswer": "THE BEST CODE!"
      }
    ]
  },
  {
    "order": 50,
    "title": "Master Point (Recursion 5)",
    "desc": "Combinatorial clouds cleared.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"STAGE 5 COMPLETE! Subsets, Combinations, Towers, and Survival circles. Your math is supreme! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Which problem uses 'Reflect and Append' logic?",
        "options": [
          "Gray Code",
          "Tower of Hanoi",
          "Subset Sum"
        ],
        "correctAnswer": "Gray Code"
      },
      {
        "type": "multiple_choice",
        "questionText": "Minimum moves for 4 Hanoi discs?",
        "options": [
          "15",
          "7",
          "16"
        ],
        "correctAnswer": "15"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"You're a Subset Specialist! In Stage 6, we enter the world of Trees and Hierarchies! 🦜\""
      },
      {
        "type": "match_following",
        "questionText": "Match the Rank!",
        "pairs": [
          {
            "key": "Stage 5",
            "value": "Subset Specialist"
          },
          {
            "key": "Stage 6",
            "value": "Tree climber"
          },
          {
            "key": "Next",
            "value": "Binary Branches"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Halfway mark reached.",
        "codeSnippet": "5 * ___ ;",
        "correctAnswer": "100"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Numbers tell stories. You just have to listen to the call! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Climb the trees?",
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
        "questionText": "One last combo?",
        "options": [
          "Generate!",
          "Done.",
          "0"
        ],
        "correctAnswer": "Generate!"
      }
    ]
  }
];

module.exports = stage5;
