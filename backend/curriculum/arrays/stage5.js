const stage5 = [
  {
    "order": 81,
    "title": "Lazy Segment Trees",
    "desc": "Range updates and range queries in O(log N).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"LAZY CLOUDS! Until now, we only updated one nest. But what if you want to add 10 seeds to EVERY nest in a range? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Don't update every leaf! Store the update in a `lazy` node and only push it down when you actually need to visit the children. Procrastination at its finest! 🦜\"",
        "codeSnippet": "void updateRange(v, l, r, add) {\n  if (lazy[v] != 0) push(v);\n  if (l == tl && r == tr) { lazy[v] += add; push(v); }\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of Range Update in a Lazy Segment Tree?",
        "options": [
          "O(log N)",
          "O(N)",
          "O(N log N)"
        ],
        "correctAnswer": "O(log N)"
      },
      {
        "type": "match_following",
        "questionText": "Match Lazy Terms!",
        "pairs": [
          {
            "key": "Push",
            "value": "Apply lazy to children"
          },
          {
            "key": "Update",
            "value": "O(log N)"
          },
          {
            "key": "Query",
            "value": "O(log N)"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The check to see if a node needs a push.",
        "codeSnippet": "if (lazy[v] ___ 0) push(v);",
        "correctAnswer": "!="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This is the king of range queries. Massive grids, massive games—they all use this to save time! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Does Lazy Propagation save time on a single point update?",
        "options": [
          "Minimal difference",
          "Yes",
          "No"
        ],
        "correctAnswer": "Minimal difference"
      },
      {
        "type": "code_fill_in",
        "questionText": "Lazy update push down logic.",
        "codeSnippet": "lazy[2*v] += lazy[v];\nlazy[2*v+1] += ___;",
        "correctAnswer": "lazy[v]"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Work smarter, not harder. Be lazy, fledgling! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I lazy?\"",
        "options": [
          "SQUAWK NO!",
          "A little.",
          "0"
        ],
        "correctAnswer": "SQUAWK NO!"
      }
    ]
  },
  {
    "order": 82,
    "title": "Square Root Decomp",
    "desc": "Mo's Algorithm for offline range queries.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Mo’s Algorithm! Divide the array into √N blocks. Sort your queries by block index to minimize bird travel! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Sort queries: `(q1.block != q2.block) ? q1.block < q2.block : q1.r < q2.r`. Total travel time is minimized! 🦜\"",
        "codeSnippet": "while (curL > L) add(--curL);\nwhile (curR < R) add(++curR);"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of Mo's Algorithm for Q queries?",
        "options": [
          "O((N+Q)√N)",
          "O(N log N)",
          "O(NQ)"
        ],
        "correctAnswer": "O((N+Q)√N)"
      },
      {
        "type": "match_following",
        "questionText": "Match Mo’s Sort!",
        "pairs": [
          {
            "key": "Left Ptr",
            "value": "Block by Block"
          },
          {
            "key": "Right Ptr",
            "value": "Monotonic per block"
          },
          {
            "key": "Goal",
            "value": "N*sqrt(N)"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Typical block size for SQRT decomposition.",
        "codeSnippet": "blockSize = ___(N) ;",
        "correctAnswer": "sqrt"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This only works for OFFLINE queries (you know all queries beforehand). If the nests change while you fly, use a Segment Tree! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "If N=10000, what is the block size?",
        "options": [
          "100",
          "10",
          "1000"
        ],
        "correctAnswer": "100"
      },
      {
        "type": "code_fill_in",
        "questionText": "Query struct: get block index.",
        "codeSnippet": "int b_idx = L / ___;",
        "correctAnswer": "blockSize"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Mo’s logic is a beautiful dance across the array! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Do I like square roots?\"",
        "options": [
          "They’re tasty!",
          "No.",
          "0"
        ],
        "correctAnswer": "They’re tasty!"
      }
    ]
  },
  {
    "order": 83,
    "title": "Matrix Exponentiation",
    "desc": "Calculating the Nth Fibonacci number in O(log N).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Speed of Light Fibonacci! Standard recursion is O(2^N). Iterative is O(N). But Matrix Exponentiation is O(log N)! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Represent the Fibonacci transition as a matrix `[[1, 1], [1, 0]]`. Raising this matrix to the power of N using Binary Exponentiation! 🦜\"",
        "codeSnippet": "Matrix result = power(T, n-1);"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why is Matrix Exponentiation so fast?",
        "options": [
          "Binary Exponentiation (O(log N))",
          "It uses magic",
          "Small matrices"
        ],
        "correctAnswer": "Binary Exponentiation (O(log N))"
      },
      {
        "type": "match_following",
        "questionText": "Match Matrix Terms!",
        "pairs": [
          {
            "key": "Identity",
            "value": "[[1,0],[0,1]]"
          },
          {
            "key": "Fib Matrix",
            "value": "[[1,1],[1,0]]"
          },
          {
            "key": "Result",
            "value": "T^n * [f1, f0]"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Update power calculation recursively.",
        "codeSnippet": "if (n % 2 == 1) res = res ___ base;",
        "correctAnswer": "*"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Used for any linear recurrence relation. If you can define the jump, you can reach the end in O(log N)! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Final complexity to find Fib(10^18)?",
        "options": [
          "~60 matrix multiplies",
          "10^18 steps",
          "Impossible"
        ],
        "correctAnswer": "~60 matrix multiplies"
      },
      {
        "type": "code_fill_in",
        "questionText": "Matrix multiplication result `c[i][j]`.",
        "codeSnippet": "c[i][j] += a[i][k] * ___;",
        "correctAnswer": "b[k][j]"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Math is the wind beneath your wings! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Can I win this race?\"",
        "options": [
          "O(log N) YES!",
          "No.",
          "0"
        ],
        "correctAnswer": "O(log N) YES!"
      }
    ]
  },
  {
    "order": 84,
    "title": "Range GCD Query",
    "desc": "Finding the Greatest Common Divisor in a range (Segment Tree/Sparse Table).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Range GCD! Find the biggest number that divides all birds in the range [L, R]. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"GCD is IDEMPOTENT (`gcd(x, x) = x`). So we can use Sparse Tables for O(1) queries if the flock is static! 🦜\"",
        "codeSnippet": "st[i][j] = gcd(st[i][j-1], st[i + (1 << (j-1))][j-1]);"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of GCD query using a Sparse Table?",
        "options": [
          "O(1)",
          "O(log N)",
          "O(N)"
        ],
        "correctAnswer": "O(1)"
      },
      {
        "type": "match_following",
        "questionText": "Match GCD Rules!",
        "pairs": [
          {
            "key": "gcd(a, 0)",
            "value": "a"
          },
          {
            "key": "gcd(a, b)",
            "value": "gcd(b, a%b)"
          },
          {
            "key": "Range",
            "value": "Cohesion"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Merge logic for a Segment Tree GCD.",
        "codeSnippet": "tree[v] = ___(tree[2*v], tree[2*v+1]);",
        "correctAnswer": "gcd"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"If the array changes, use a Segment Tree. Each merge costs O(log(maxValue))! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "GCD of [10, 20, 30]?",
        "options": [
          "10",
          "5",
          "30"
        ],
        "correctAnswer": "10"
      },
      {
        "type": "code_fill_in",
        "questionText": "Euclidean GCD function.",
        "codeSnippet": "return (b == 0) ? a : gcd(b, ___);",
        "correctAnswer": "a%b"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The greatest common denominator of all birds is their love for seeds! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is our GCD 1?\"",
        "options": [
          "If we’re unique!",
          "Yes.",
          "0"
        ],
        "correctAnswer": "If we’re unique!"
      }
    ]
  },
  {
    "order": 85,
    "title": "The Inversion Rank",
    "desc": "Finding the number of elements > X in a range (Merge Sort Tree).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Merge Sort Tree! Each node in the segment tree stores a FULL SORTED ARRAY of its range! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"To find birds > X, go to the affected nodes and use BINARY SEARCH (Upper Bound) on their sorted lists! 🦜\"",
        "codeSnippet": "ans += tree[v].end() - upper_bound(tree[v].begin(), tree[v].end(), x);"
      },
      {
        "type": "multiple_choice",
        "questionText": "Query complexity for a Merge Sort Tree?",
        "options": [
          "O(log^2 N)",
          "O(log N)",
          "O(N)"
        ],
        "correctAnswer": "O(log^2 N)",
        "explanation": "log N nodes, each doing log N binary search."
      },
      {
        "type": "match_following",
        "questionText": "Match Costs!",
        "pairs": [
          {
            "key": "Build",
            "value": "O(N log N)"
          },
          {
            "key": "Space",
            "value": "O(N log N)"
          },
          {
            "key": "Query",
            "value": "O(log^2 N)"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Build step: combine two sorted vectors.",
        "codeSnippet": "merge(L.begin(), L.end(), R.begin(), R.end(), ___(tree[v]));",
        "correctAnswer": "back_inserter"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This is a powerful structure for multidimensional range queries. It effectively turns a 1D range query into a 2D constraint query! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Space complexity for Merge Sort Tree?",
        "options": [
          "O(N log N)",
          "O(N)",
          "O(N^2)"
        ],
        "correctAnswer": "O(N log N)"
      },
      {
        "type": "code_fill_in",
        "questionText": "C++ binary search to find elements greater than `k`.",
        "codeSnippet": "auto it = ___(v.begin(), v.end(), k);",
        "correctAnswer": "upper_bound"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Sorting as you build. Efficiency in every layer! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Do you see the patterns?\"",
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
    "order": 86,
    "title": "Disjoint Set Union (DSU)",
    "desc": "Connecting birds and finding flocks (Union-Find).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"DSU! Are these two birds part of the same flock? Groups that merge and grow! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Use 'Path Compression' to keep the tree flat and 'Union by Rank' to keep it balanced. Nearly O(1) time! 🦜\"",
        "codeSnippet": "int find(i) {\n  if (parent[i] == i) return i;\n  return parent[i] = find(parent[i]); // Compress!\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Amortized time complexity of DSU operations (with compression + rank)?",
        "options": [
          "α(N) (Nearly constant)",
          "O(log N)",
          "O(N)"
        ],
        "correctAnswer": "α(N) (Nearly constant)"
      },
      {
        "type": "match_following",
        "questionText": "Match DSU Actions!",
        "pairs": [
          {
            "key": "find(i)",
            "value": "Get flock leader"
          },
          {
            "key": "union(i, j)",
            "value": "Merge two flocks"
          },
          {
            "key": "parent[i]=i",
            "value": "New Lone Bird"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The check to see if two birds are already teammates.",
        "codeSnippet": "if (find(i) ___ find(j)) return;",
        "correctAnswer": "=="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"DSU is the heart of Kruskal’s MST and dynamic connectivity. Fast, simple, and elite! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "If everyone is in their own flock, what is `parent[i]`?",
        "options": [
          "i",
          "0",
          "-1"
        ],
        "correctAnswer": "i"
      },
      {
        "type": "code_fill_in",
        "questionText": "Join two sets via leaders.",
        "codeSnippet": "parent[rootA] = ___;",
        "correctAnswer": "rootB"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Strong together, fledgling! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are we teammates?\"",
        "options": [
          "FLOCK FOR LIFE!",
          "No.",
          "0"
        ],
        "correctAnswer": "FLOCK FOR LIFE!"
      }
    ]
  },
  {
    "order": 87,
    "title": "Range Sum 2D (Static)",
    "desc": "Querying rectangle sums in O(1) using Prefix Matrix.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Static 2D Queries! Pre-calculate a 2D Prefix Sum matrix. Now any rectangle sum is O(1)! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Rectangle(r1,c1 to r2,c2) = `Sum[r2][c2] - Sum[r1-1][c2] - Sum[r2][c1-1] + Sum[r1-1][c1-1]`. Inclusion-Exclusion magic! 🦜\"",
        "codeSnippet": "P[i][j] = val + P[i-1][j] + P[i][j-1] - P[i-1][j-1];"
      },
      {
        "type": "multiple_choice",
        "questionText": "Query complexity for static 2D range sum?",
        "options": [
          "O(1)",
          "O(M+N)",
          "O(log MN)"
        ],
        "correctAnswer": "O(1)"
      },
      {
        "type": "match_following",
        "questionText": "Match 2D Additions!",
        "pairs": [
          {
            "key": "Top neighbor",
            "value": "P[i-1][j]"
          },
          {
            "key": "Left neighbor",
            "value": "P[i][j-1]"
          },
          {
            "key": "Diagonal",
            "value": "Subtract P[i-1][j-1]"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Add the diagonal back to fix over-subtraction.",
        "codeSnippet": "ans = S[r2][c2] - S[r1-1][c2] - S[r2][c1-1] ___ S[r1-1][c1-1];",
        "correctAnswer": "+"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"One O(MN) build, infinite O(1) queries. Used in image processing and heatmaps! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Space complexity for the Prefix Matrix?",
        "options": [
          "O(MN)",
          "O(M+N)",
          "O(1)"
        ],
        "correctAnswer": "O(MN)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Build loop calculation.",
        "codeSnippet": "sum[i][j] = mat[i][j] + sum[i-1][j] + sum[i][j-1] ___ sum[i-1][j-1];",
        "correctAnswer": "-"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Geometry and math, the two eyes of a parrot! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is the area correct?\"",
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
    "title": "The Sliding Window 2D",
    "desc": "Finding the max-sum subgrid of size KxK.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"2D Sliding Window! Find the KxK square in a giant matrix with the most seeds! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Step 1: Calculate vertical sums of size K for every column. Step 2: Run a 1D sliding window on those results! 🦜\"",
        "codeSnippet": "for(j=0; j<N; j++) colSum[j] = sum(mat[0...K, j]);"
      },
      {
        "type": "multiple_choice",
        "questionText": "Final complexity for finding the max KxK subgrid in an MxN matrix?",
        "options": [
          "O(MN)",
          "O(MN*K)",
          "O(MN*K^2)"
        ],
        "correctAnswer": "O(MN)"
      },
      {
        "type": "match_following",
        "questionText": "Match Step Logic!",
        "pairs": [
          {
            "key": "Step 1",
            "value": "Columnar Sums"
          },
          {
            "key": "Step 2",
            "value": "Horizontal Window"
          },
          {
            "key": "Total",
            "value": "Linear per cell"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Update vertical sum as you move down.",
        "codeSnippet": "colSum[j] = colSum[j] - mat[top][j] ___ mat[bottom][j];",
        "correctAnswer": "+"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Two simple 1D slides combined. This is how you conquer 2D grids without breaking your wings! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Space complexity to store temporary column sums?",
        "options": [
          "O(N)",
          "O(MN)",
          "O(1)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Horizontal window shift.",
        "codeSnippet": "window_sum = window_sum - colSum[left] + colSum[___];",
        "correctAnswer": "right"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The view is better from the best subgrid! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I the winner?\"",
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
    "title": "Largest Subgrid (Binary)",
    "desc": "Finding the largest square of 1s in a binary matrix.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Big Square! In a sea of 0s and 1s, what is the side length of the largest perfect square of 1s? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Dynamic Programming! `dp[i][j] = min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1`. Check your neighbors! 🦜\"",
        "codeSnippet": "if (mat[i][j] == 1) dp[i][j] = min({dp[i-1][j], dp[i][j-1], dp[i-1][j-1]}) + 1;"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity to find the largest square of 1s?",
        "options": [
          "O(MN)",
          "O(M+N)",
          "O(min(M,N)^2)"
        ],
        "correctAnswer": "O(MN)"
      },
      {
        "type": "match_following",
        "questionText": "Match DP Neighbors!",
        "pairs": [
          {
            "key": "Top",
            "value": "dp[i-1][j]"
          },
          {
            "key": "Left",
            "value": "dp[i][j-1]"
          },
          {
            "key": "Diagonal",
            "value": "dp[i-1][j-1]"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Result area if side length is `L`.",
        "codeSnippet": "area = ___ * L;",
        "correctAnswer": "L"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The square ONLY grows if all three neighbors are part of their own squares. A perfect square needs a perfect base! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Space complexity for the DP matrix?",
        "options": [
          "O(MN)",
          "O(N) (optimized)",
          "O(1)"
        ],
        "correctAnswer": "O(N) (optimized)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Add 1 to the minimum neighbor square side.",
        "codeSnippet": "dp[i][j] = min_neighbor + ___ ;",
        "correctAnswer": "1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Stability in every corner! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is the square perfect?\"",
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
    "order": 90,
    "title": "Fast Fourier (Intro)",
    "desc": "Multiplying large polynomials using arrays in O(N log N).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The God-Level Move! Multiplying polynomials (or giant numbers) usually takes O(N^2). FFT does it in O(N log N)! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Convert bird values into 'Frequency Space' using complex numbers, multiply them pointwise, and convert back! 🦜\"",
        "codeSnippet": "FFT(a, invert);"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of polynomial multiplication using FFT?",
        "options": [
          "O(N log N)",
          "O(N^2)",
          "O(N)"
        ],
        "correctAnswer": "O(N log N)"
      },
      {
        "type": "match_following",
        "questionText": "Match FFT Steps!",
        "pairs": [
          {
            "key": "DFT",
            "value": "Value to Freq"
          },
          {
            "key": "Multiply",
            "value": "O(N) pointwise"
          },
          {
            "key": "IDFT",
            "value": "Freq to Value"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The recurrence depth for N elements.",
        "codeSnippet": "depth = ___ (N);",
        "correctAnswer": "log2"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This is the backbone of signal processing, audio compression, and multiplying numbers with millions of digits. Pure majesty! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is FFT used in basic interviews?",
        "options": [
          "No, but it secures Elite roles",
          "Yes",
          "Only for math birds"
        ],
        "correctAnswer": "No, but it secures Elite roles"
      },
      {
        "type": "code_fill_in",
        "questionText": "Complex number multiply.",
        "codeSnippet": "A[i] = A[i] ___ W;",
        "correctAnswer": "*"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Transcend the array, fledgling! Join the frequencies! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Do you hear the frequency of code?\"",
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
    "order": 91,
    "title": "The Great Marathon 1",
    "desc": "Mixed Mastery: Sliding Window + Binary Search.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Marathon begins! Let's combine our wings. How to find the smallest subarray with sum >= K when the flock is ALL POSITIVE? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Use a Sliding Window (Variable size). Expand `right` until sum >= K, then shrink `left` to find the minimum! 🦜\"",
        "codeSnippet": "while (sum >= k) {\n  minLen = min(minLen, r - l + 1);\n  sum -= arr[l++];\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of finding the smallest subarray sum >= K?",
        "options": [
          "O(N)",
          "O(N^2)",
          "O(N log N)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "match_following",
        "questionText": "Match Marathon Logic!",
        "pairs": [
          {
            "key": "Expand",
            "value": "r++"
          },
          {
            "key": "Target met",
            "value": "l++ (shrink)"
          },
          {
            "key": "Result",
            "value": "minLen"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Update the minimum length.",
        "codeSnippet": "minL = ___(minL, r - l + 1);",
        "correctAnswer": "min"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Wait! What if the array has NEGATIVES? Then the window breaks! You need a Prefix Sum + Monotonic Deque. Elite bird brain required! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Can Sliding Window handle negative numbers for this problem?",
        "options": [
          "No",
          "Yes",
          "0"
        ],
        "correctAnswer": "No"
      },
      {
        "type": "code_fill_in",
        "questionText": "Initialize results.",
        "codeSnippet": "int ans = ___;",
        "correctAnswer": "INT_MAX"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Fly steady, fledgling! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I fast?\"",
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
    "order": 92,
    "title": "The Great Marathon 2",
    "desc": "Mixed Mastery: Matrix + DP Challenge.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Maximal Rectangle! In a 2D binary matrix, what is the largest rectangle of 1s? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Strategy: For each row, treat it as a Histogram (from Unit 67) and find the largest rectangle! 🦜\"",
        "codeSnippet": "for(row : matrix) {\n  updateHeights(h, row);\n  ans = max(ans, largestRectangleInHistogram(h));\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of Maximal Rectangle in a matrix?",
        "options": [
          "O(MN)",
          "O(M^2N)",
          "O(MN^2)"
        ],
        "correctAnswer": "O(MN)"
      },
      {
        "type": "match_following",
        "questionText": "Match Row Logic!",
        "pairs": [
          {
            "key": "mat[i][j]==1",
            "value": "h[j]++"
          },
          {
            "key": "mat[i][j]==0",
            "value": "h[j]=0"
          },
          {
            "key": "Total",
            "value": "Row-wise scan"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Reset the height if a 0 is found.",
        "codeSnippet": "if (mat[i][j] == 0) h[j] = ___;",
        "correctAnswer": "0"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"You are combining two elite patterns into one god-mode solution. This is how you win the Zoho Elite medal! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Space complexity for the heights array?",
        "options": [
          "O(N)",
          "O(MN)",
          "O(1)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Update height for a 1.",
        "codeSnippet": "h[j] = (row[j] == 1) ? h[j] ___ 1 : 0;",
        "correctAnswer": "+"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Architecture in every row! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is the rectangle silver?\"",
        "options": [
          "No, GOLD!",
          "Yes.",
          "0"
        ],
        "correctAnswer": "No, GOLD!"
      }
    ]
  },
  {
    "order": 93,
    "title": "The Great Marathon 3",
    "desc": "Mixed Mastery: Fenwick Tree + Inversions.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Reverse Pairs! How many pairs (i, j) such that `i < j` and `arr[i] > 2 * arr[j]`? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Merge Sort Strategy! During the merge, count how many elements in the left half satisfy the `2 * arr[j]` condition before merging! 🦜\"",
        "codeSnippet": "while (i <= mid && a[i] <= 2LL * a[j]) i++;\ncount += (mid - i + 1);"
      },
      {
        "type": "multiple_choice",
        "questionText": "Time complexity of the Reverse Pairs problem?",
        "options": [
          "O(N log N)",
          "O(N^2)",
          "O(N)"
        ],
        "correctAnswer": "O(N log N)"
      },
      {
        "type": "match_following",
        "questionText": "Match Pair Conditions!",
        "pairs": [
          {
            "key": "i < j",
            "value": "Ordered"
          },
          {
            "key": "a[i] > 2*a[j]",
            "value": "The Target"
          },
          {
            "key": "Mechanism",
            "value": "Merge Sort"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Check the condition for index `j` against left half `i`.",
        "codeSnippet": "while (i <= mid && a[i] <= ___ * a[j]) i++;",
        "correctAnswer": "2"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This is a variant of Inversion Count but more strict. It destroys simple Fenwick Trees unless you are very clever with coordinate compression! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is the 2LL (long long) necessary for the comparison?",
        "options": [
          "Yes, to prevent overflow",
          "No",
          "Depends on bird"
        ],
        "correctAnswer": "Yes, to prevent overflow"
      },
      {
        "type": "code_fill_in",
        "questionText": "Count remaining elements in left half.",
        "codeSnippet": "cnt += (mid - ___ + 1);",
        "correctAnswer": "i"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Double the birds, double the challenge! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I double amazing?\"",
        "options": [
          "TRIPLE!",
          "Yes.",
          "0"
        ],
        "correctAnswer": "TRIPLE!"
      }
    ]
  },
  {
    "order": 94,
    "title": "The Great Marathon 4",
    "desc": "Mixed Mastery: Sorting + Greedy Interval.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Maximum Length of Pair Chain! Pairs `(a, b)` such that `b < c`. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Sort by the END of the pair! This is a classic greedy choice. Always pick the pair that ends EARLIEST to leave more room! 🦜\"",
        "codeSnippet": "sort(pairs.end());\nif (p[0] > last_end) {\n  count++;\n  last_end = p[1];\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Goal of Maximum Pair Chain?",
        "options": [
          "Longest chain",
          "Shortest",
          "All pairs"
        ],
        "correctAnswer": "Longest chain"
      },
      {
        "type": "match_following",
        "questionText": "Match Chain Choices!",
        "pairs": [
          {
            "key": "Sort by Start",
            "value": "Might fail"
          },
          {
            "key": "Sort by End",
            "value": "Optimal"
          },
          {
            "key": "Time",
            "value": "O(N log N)"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Check if new pair `curr` can be added to the chain `last`.",
        "codeSnippet": "if (curr[0] ___ last[1])",
        "correctAnswer": ">"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This is identical to the Activity Selection problem. One pass, O(N) after the sort. Clean and fast! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Can you solve this with DP?",
        "options": [
          "Yes (O(N^2))",
          "No",
          "0"
        ],
        "correctAnswer": "Yes (O(N^2))"
      },
      {
        "type": "code_fill_in",
        "questionText": "Final chain length.",
        "codeSnippet": "return ___;",
        "correctAnswer": "count"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Chain the success, fledgling! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is the chain broken?\"",
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
    "order": 95,
    "title": "The Great Marathon 5",
    "desc": "Mixed Mastery: Matrix Power + Paths.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"How many paths of length K between two nests? Matrix Power again! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"If `A` is the adjacency matrix, then `A^K[i][j]` is the number of paths of length K from i to j! 🦜\"",
        "codeSnippet": "Matrix pathsOfLengthK = power(adjMatrix, k);"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity to find paths of length K for N nodes?",
        "options": [
          "O(N^3 log K)",
          "O(N^K)",
          "O(N^2)"
        ],
        "correctAnswer": "O(N^3 log K)"
      },
      {
        "type": "match_following",
        "questionText": "Match Graph Matrix!",
        "pairs": [
          {
            "key": "A[i][j]=1",
            "value": "Connection"
          },
          {
            "key": "A^2",
            "value": "Paths of length 2"
          },
          {
            "key": "A^K",
            "value": "O(log K) power"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Exponentiation logic for length K.",
        "codeSnippet": "while (K > 0) {\n  if (K % 2 == 1) res = res * ___; ...\n}",
        "correctAnswer": "base"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Graph theory meets Matrix Algebra. This is the hallmark of a Senior Elite developer! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "If K=10^9 and N=5, is this feasible?",
        "options": [
          "Yes!",
          "Too slow.",
          "0"
        ],
        "correctAnswer": "Yes!"
      },
      {
        "type": "code_fill_in",
        "questionText": "Matrix multiplication sum.",
        "codeSnippet": "sum += A[i][k] * B[___][j];",
        "correctAnswer": "k"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Fly through the connection matrix! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are all paths leading to me?\"",
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
    "order": 96,
    "title": "The Great Marathon 6",
    "desc": "Mixed Mastery: Fenwick Tree + DSU.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Dynamic Range connectivity! Can we find the max element in a flock that is constantly merging? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"In your DSU root, store the MAX index of the current flock. When merging, always update the root with the overall max! 🦜\"",
        "codeSnippet": "int rootA = find(a); maxVal[rootB] = max(maxVal[rootB], maxVal[rootA]);"
      },
      {
        "type": "multiple_choice",
        "questionText": "Goal of DSU with Max?",
        "options": [
          "Find max in O(1)",
          "Sort the flock",
          "Delete birds"
        ],
        "correctAnswer": "Find max in O(1)"
      },
      {
        "type": "match_following",
        "questionText": "Match DSU extensions!",
        "pairs": [
          {
            "key": "Size Map",
            "value": "Count members"
          },
          {
            "key": "Max Map",
            "value": "Elite member"
          },
          {
            "key": "Path Comp",
            "value": "Speed"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Update the aggregate in the new root.",
        "codeSnippet": "parent[rootA] = rootB; aggregate[rootB] ___ aggregate[rootA];",
        "correctAnswer": "+="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"DSU can carry any information—sums, maxes, mins, or even entire sets! Use it like a backpack! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity to fetch max of a flock?",
        "options": [
          "O(α(N)) (Nearly constant)",
          "O(N)",
          "O(log N)"
        ],
        "correctAnswer": "O(α(N)) (Nearly constant)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Find current max for bird `i`.",
        "codeSnippet": "return maxVal[___(i)];",
        "correctAnswer": "find"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"One leader, one record! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I the max leader?\"",
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
    "order": 97,
    "title": "The Great Marathon 7",
    "desc": "Mixed Mastery: Sliding Window + Frequency Map.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Longest Substring with At Most K Distinct Birds! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Sliding window! Expand `right`. If `distinctCount > K`, shrink `left` until `distinctCount == K`. 🦜\"",
        "codeSnippet": "while (map.size() > k) {\n  map[s[l]]--;\n  if (map[s[l]] == 0) map.delete(s[l]);\n  l++;\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Time complexity of Longest Substring with K Distinct?",
        "options": [
          "O(N)",
          "O(N^2)",
          "O(N log N)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "match_following",
        "questionText": "Match Scoping Actions!",
        "pairs": [
          {
            "key": "map.size()",
            "value": "Unique count"
          },
          {
            "key": "map[s[r]]++",
            "value": "Add bird"
          },
          {
            "key": "l++",
            "value": "Evict bird"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The check to remove a key from the map.",
        "codeSnippet": "if (map[s[l]] ___ 0) map.remove(s[l]);",
        "correctAnswer": "=="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The map acts as your memory of who is in the window. Keep it accurate and your flight will be perfect! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Final result for \"eceba\" with K=2?",
        "options": [
          "3 (\"ece\")",
          "4",
          "2"
        ],
        "correctAnswer": "3 (\"ece\")"
      },
      {
        "type": "code_fill_in",
        "questionText": "Update window length.",
        "codeSnippet": "ans = max(ans, r - l + ___);",
        "correctAnswer": "1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Diversity in the window, fledgling! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I distinct?\"",
        "options": [
          "One of a kind!",
          "No.",
          "0"
        ],
        "correctAnswer": "One of a kind!"
      }
    ]
  },
  {
    "order": 98,
    "title": "The Great Marathon 8",
    "desc": "Mixed Mastery: 2D Matrix + BFS Shortcut.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"01 Matrix! For every bird at position 1, find the shortest distance to a bird at position 0! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Multi-Source BFS! Put ALL the 0s into the queue first. Every step, they spread their distance to the 1s! 🦜\"",
        "codeSnippet": "queue.push({x, y}); dist[x][y] = 0;\nwhile(!q.empty()) { ... dist[nx][ny] = dist[x][y] + 1; }"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of 01 Matrix BFS?",
        "options": [
          "O(MN)",
          "O(M^2N^2)",
          "O(M+N)"
        ],
        "correctAnswer": "O(MN)"
      },
      {
        "type": "match_following",
        "questionText": "Match BFS Flow!",
        "pairs": [
          {
            "key": "Queue",
            "value": "Processing order"
          },
          {
            "key": "0s",
            "value": "The sources"
          },
          {
            "key": "1s",
            "value": "The targets"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Update the distance of the neighbor.",
        "codeSnippet": "dist[nx][ny] = dist[x][y] ___ 1;",
        "correctAnswer": "+"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"By starting from all 0s simultaneously, you ensure that every 1 is reached via the SHORTEST possible path. Pure geometry! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Initial distance values for 1s?",
        "options": [
          "-1 or Infinity",
          "0",
          "1"
        ],
        "correctAnswer": "-1 or Infinity"
      },
      {
        "type": "code_fill_in",
        "questionText": "Check if already visited.",
        "codeSnippet": "if (dist[nx][ny] != ___) continue;",
        "correctAnswer": "-1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Distance is just the number of flaps! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I far away?\"",
        "options": [
          "Close as 0!",
          "Yes.",
          "0"
        ],
        "correctAnswer": "Close as 0!"
      }
    ]
  },
  {
    "order": 99,
    "title": "The Great Marathon 9",
    "desc": "Mixed Mastery: Array Cycle Detection.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Circular Array Loop! If the array indices wrap around, can you find a cycle that only moves in one direction? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Floyd’s Cycle Finding (Slow & Fast Pointers)! If They meet at the same nest, a cycle exists. 🦜\"",
        "codeSnippet": "slow = next(slow); fast = next(next(fast));\nif (slow == fast) return true;"
      },
      {
        "type": "multiple_choice",
        "questionText": "Condition for the cycle in this problem?",
        "options": [
          "All move same sign (+ or -)",
          "Only forward",
          "Only backward"
        ],
        "correctAnswer": "All move same sign (+ or -)"
      },
      {
        "type": "match_following",
        "questionText": "Match Pointer Spies!",
        "pairs": [
          {
            "key": "Slow",
            "value": "1 step"
          },
          {
            "key": "Fast",
            "value": "2 steps"
          },
          {
            "key": "Meeting",
            "value": "Cycle detected"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Calculation to get the next circular index.",
        "codeSnippet": "next = (i + arr[i]) % ___ ;",
        "correctAnswer": "n"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Handle the wrapping logic carefully. `(i + arr[i]) % n` might be negative—birds don't like negative indices! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Time complexity for cycle detection?",
        "options": [
          "O(N)",
          "O(N^2)",
          "O(1)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Fix negative modulo.",
        "codeSnippet": "return (res + n) ___ n;",
        "correctAnswer": "%"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The loop repeats, the song remains the same! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I in a loop?\"",
        "options": [
          "A loop of greatness!",
          "No.",
          "0"
        ],
        "correctAnswer": "A loop of greatness!"
      }
    ]
  },
  {
    "order": 100,
    "title": "The God-Mode Graduation",
    "desc": "The Final Apex of Arrays.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"THE FINISH LINE! 100 units of Array Mastery. You have touched the sun and breathed the frequencies of FFT! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"From the first 0-index leap to the 2D Lazy Segment Tree, you has evolved from a fledgling to the GOD-MODE RAPTOR. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Total unique array units mastered?",
        "options": [
          "100",
          "50",
          "200"
        ],
        "correctAnswer": "100"
      },
      {
        "type": "multiple_choice",
        "questionText": "Total unique array lessons analyzed?",
        "options": [
          "1000",
          "100",
          "500"
        ],
        "correctAnswer": "1000"
      },
      {
        "type": "multiple_choice",
        "questionText": "Most powerful data structure mastered?",
        "options": [
          "Segment Tree",
          "Array",
          "List"
        ],
        "correctAnswer": "Segment Tree"
      },
      {
        "type": "multiple_choice",
        "questionText": "Median of two sorted complexity?",
        "options": [
          "O(log min(M,N))",
          "O(M+N)"
        ],
        "correctAnswer": "O(log min(M,N))"
      },
      {
        "type": "multiple_choice",
        "questionText": "Sliding window max time?",
        "options": [
          "O(N)",
          "O(N*K)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "match_following",
        "questionText": "Final Marathon Match!",
        "pairs": [
          {
            "key": "Array",
            "value": "Complete!"
          },
          {
            "key": "Pico",
            "value": "Salutes you!"
          },
          {
            "key": "Next",
            "value": "STRINGS"
          }
        ]
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Take a breath, champion. The next world is made of characters and suffixes. The Strings Academy awaits your flight! SQUAWK! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are you ready for the NEXT SUBJECT?\"",
        "options": [
          "BEYOND AND UP!",
          "Wait...",
          "0"
        ],
        "correctAnswer": "BEYOND AND UP!"
      }
    ]
  }
];

module.exports = stage5;