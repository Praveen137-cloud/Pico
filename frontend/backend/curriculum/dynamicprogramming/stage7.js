const stage7 = [
  {
    "order": 61,
    "title": "Unit 61: Slope Trick Basics",
    "desc": "Function Bending: using piecewise linear convex functions to solve DP transitions in O(N log N).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 7.61] The Elastic String",
        "explanation": "What if your cost function is a 'V' shape? **Slope Trick** represents convex functions as a set of 'Change points' (slopes). Instead of calculating the whole function, we use two Priority Queues to track where the slope changes. This is the **Elastic protocol**—the function bends as you add points. The Matrix is a master of the smooth curve.",
        "codeSnippet": "L.push(x); R.push(x);",
        "encouragementText": "Ace: 'Do not store the values; store the points where the values change their mind.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does Slope Trick usually maintain?",
        "options": ["A map", "Two priority queues (Left heap and Right heap) representing the slope changes", "A circle", "Pico rule"],
        "correctAnswer": "Two priority queues (Left heap and Right heap) representing the slope changes",
        "explanation": "The heaps store the x-coordinates where the slope of the absolute difference function changes by 1."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The V-Shape Pulse",
        "explanation": "A function like `f(x) = |x - a|` has its minimum at `a`. Its slope is -1 before `a` and +1 after. When we add two such functions, the change points just accumulate in our heaps. The Matrix sums the shapes, not the numbers. The pulse of the geometry.",
        "encouragementText": "Pico: 'Add the shape-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Updating the function with |x - a| cost.",
        "codeSnippet": "void add_abs(int a) {\n  L.push(a); R.push(a);\n  if (L.top() > R.top()) {\n    int l = L.top(), r = R.top();\n    L.pop(); R.pop();\n    L.push( ___ ); R.push( ___ );\n  }\n}",
        "correctAnswer": "r, l",
        "explanation": "Swapping the top elements ensures the 'Minimum Flat' range [L.top(), R.top()] remains valid."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity: O(N log N)",
        "explanation": "This solves 'Minimum cost to make an array non-decreasing' in O(N log N) instead of O(N^2). This is the **Titan-Grade Curve-Fitter**. You handle continuous optimizations with discrete heaps. Mastery of the piecewise linear reality.",
        "encouragementText": "Ace: 'The curve is just a collection of straight decisions.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Can Slope Trick handle `min_{y <= x} f(y)`?",
        "options": ["Yes, by 'Clearing the Right Heap' (setting all future slopes to 0)", "No", "Only for lines", "Pico guess"],
        "correctAnswer": "Yes, by 'Clearing the Right Heap' (setting all future slopes to 0)",
        "explanation": "Taking the prefix minimum is equivalent to keeping the left part of the function and flattening the right."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Offset Pulse",
        "explanation": "If your function shifts (e.g., `f(x) = f(x-1)`), just use constant offsets for your heaps! `L.push(x - offset)`. The Matrix moves the world without moving the data. The pulse of the relative frame.",
        "encouragementText": "Pico: 'Offset the seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Applying a shift 'd' to the function.",
        "codeSnippet": "offset_L -= d;\noffset_R += ___ ;",
        "correctAnswer": "d",
        "explanation": "Shifting the coordinate system to represent the horizontal movement of the convex function."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Market Smoother",
        "explanation": "A stock price (The Matrix Chart) is erratic. To find the minimum changes needed to make it a perfectly rising line, the Chart-Architect uses Slope Trick. The 100,000-point chart is smoothed in milliseconds. The trend is revealed. The market is understood.",
        "encouragementText": "Ace: 'In the noise of the now, the master finds the quietest path to the future.'"
      },
      {
        "type": "match_following",
        "questionText": "Match Trick terms!",
        "pairs": [
          { "key": "L-Heap", "value": "Negative slopes" },
          { "key": "R-Heap", "value": "Positive slopes" },
          { "key": "O(log N)", "value": "Point addition speed" }
        ]
      }
    ]
  },
  {
    "order": 62,
    "title": "Unit 62: Convex Hull Trick (CHT)",
    "desc": "Linear Envelope: using the upper or lower envelope of lines to solve O(N^2) DP transitions in O(N log N).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 7.62] The Line of Best Fit",
        "explanation": "Transitions like `dp[i] = min(m[j]*x[i] + b[j])` are common. Instead of checking every `j`, we treat `m[j]x + b[j]` as **Lines**. We maintain the **Lower Envelope** of these lines. This is the **Silhouette protocol**—at any `x`, only one line is 'The Best'. The Matrix is a master of the razor-edge.",
        "codeSnippet": "current_min = lines.get_min(x[i]);",
        "encouragementText": "Ace: 'Competition among lines ends in the survival of the lowest.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "When is a line 'Useless' in CHT?",
        "options": ["When it's vertical", "When it never forms a part of the lower envelope because other lines are always below it", "When it's blue", "Pico rule"],
        "correctAnswer": "When it never forms a part of the lower envelope because other lines are always below it",
        "explanation": "During insertion, we check if the intersection of the new line makes an older line irrelevant."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Intersection Pulse",
        "explanation": "We use the **Cross-Product** or simple math to find where two lines meet. If the new line meets Line B before Line B meets Line A, then B is dead. The Matrix prunes the weak links. The pulse of the intersection.",
        "encouragementText": "Pico: 'Prune the line-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Checking if line L2 is redundant between L1 and L3.",
        "codeSnippet": "bool isBad(Line L1, Line L2, Line L3) {\n  return intersect(L1, L3) ___ intersect(L1, L2);\n}",
        "correctAnswer": "<",
        "explanation": "If L3 meets L1 earlier than L2 does, L2 is completely covered and useless."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity: O(N log N) (or O(N) if sorted)",
        "explanation": "If slopes are added in order and queries are too, it's linear! This is the **Titan-Grade Optimality**. You find the global minimum of a million lines in O(N). Efficiency of the geometric form.",
        "encouragementText": "Ace: 'Order in parameters leads to the simplicity of life.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What if slopes are NOT sorted?",
        "options": ["CHT fails", "Use a Dynamic CHT (Balanced BST or Li Chao Tree)", "Use an array", "Pico guess"],
        "correctAnswer": "Use a Dynamic CHT (Balanced BST or Li Chao Tree)",
        "explanation": "Dynamic CHT handles line insertion in any order in O(log N) per line."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Binary Search Pulse",
        "explanation": "If the slopes are sorted but queries are random, we use **Binary Search** on the envelope to find the 'Optimal Line' for any x. One log-leap to the bottom. The pulse of the target.",
        "encouragementText": "Pico: 'Binary-search the line-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Querying for x in a sorted envelope.",
        "codeSnippet": "int idx = lower_bound(starts.begin(), starts.end(), x) - starts.begin();\nreturn lines[idx].eval(x);",
        "correctAnswer": "lower_bound",
        "explanation": "Finding the interval in the envelope that contains the target x-coordinate."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Bridge Builder",
        "explanation": "A bridge (The Matrix Arch) is being built with 100,000 cables. Each cable cost follows a linear function `m*x + b`. To find the cheapest cable for any distance, the Bridge-Architect uses CHT. The $10,000,000 project is optimized. The bridge is silent and cheap.",
        "encouragementText": "Ace: 'Cost is a function of the lowest line.'"
      },
      {
        "type": "match_following",
        "questionText": "Match CHT Logic!",
        "pairs": [
          { "key": "Sorting", "value": "O(N) transition" },
          { "key": "Intersection", "value": "Redundancy check" },
          { "key": "Monotonicity", "value": "The key to speed" }
        ]
      }
    ]
  },
  {
    "order": 63,
    "title": "Unit 63: Li Chao Tree DP",
    "desc": "The Segment Line Tree: using a specialized segment tree to manage lines and answer range-min queries in O(log N).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 7.63] The Tree of Edges",
        "explanation": "CHT is for global mins. What if you need the min line in a **SPECIFIC RANGE** [L, R]? **Li Chao Tree** stores lines inside a Segment Tree. Each node stores the 'Best Line' at its center. This is the **Segment-Line protocol**—the tree of competing slopes. The Matrix is a master of the local minimum.",
        "codeSnippet": "tree.add_line({m, b});",
        "encouragementText": "Ace: 'A line is not a point; it is a destiny over a range. Map it.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does each node in a Li Chao Tree store?",
        "options": ["The sum", "Exactly one line that is potentially optimal in its range", "A list of lines", "Pico rule"],
        "correctAnswer": "Exactly one line that is potentially optimal in its range",
        "explanation": "By storing the 'Master' line at the center, we can decide where the other competing lines must go."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Middle-Pulse",
        "explanation": "When adding a new line, we compare it with the current line at the `mid` point. The winner stays. The loser moves to either the left or right child. The Matrix recursively pushes the competition into the leaves. The pulse of the descent.",
        "encouragementText": "Pico: 'Push the line-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Adding a line to the Li Chao Tree.",
        "codeSnippet": "void add(int p, int L, int R, Line newLine) {\n  int mid = (L + R) / 2;\n  bool betterMid = newLine.eval(mid) < tree[p].eval(mid);\n  if (betterMid) swap(tree[p], newLine);\n  if (L == R) return;\n  if (newLine.eval(L) < tree[p].eval(L)) add(2*p, L, mid, newLine);\n  else add(2*p+1, mid+1, R, ___ );\n}",
        "correctAnswer": "newLine",
        "explanation": "The 'loser' at mid-point is passed down to the child where it might still be a winner."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity: O(log N) Insertion and Query",
        "explanation": "Handles any slope, any order, any query. This is the **Titan-Grade Multi-Tool**. It replaces Dynamic CHT with a simpler, faster structure. The Matrix is a world of logarithmic certainty.",
        "encouragementText": "Ace: 'Versatility is the result of a robust recursive structure.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Can Li Chao Tree handle 'Line Segments' (lines valid only in [x1, x2])?",
        "options": ["Yes, by using standard Segment Tree range decomposition + Li Chao insertion", "No", "Only for lines", "Pico guess"],
        "correctAnswer": "Yes, by using standard Segment Tree range decomposition + Li Chao insertion",
        "explanation": "This combined structure is called a 'Segment Tree Beats' or simply Segment Tree of Li Chao nodes."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Path-Query Pulse",
        "explanation": "To find the min at `x`, you travel from root to leaf and check every line you meet. The answer is the best overall. The Matrix accumulates the best of every level. The pulse of the minimum.",
        "encouragementText": "Pico: 'Accumulate the best-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Querying for x coordinate.",
        "codeSnippet": "int query(int x) {\n  int res = tree[p].eval(x);\n  if (L == R) return res;\n  if (x <= mid) return min(res, query(2*p, L, mid, x));\n  else return min(res, query(2*p+1, ___ , R, x));\n}",
        "correctAnswer": "mid+1",
        "explanation": "Moving down the tree and keeping the minimum value found among all lines on the path."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Local Cost Opt",
        "explanation": "A delivery route (The Matrix Dash) has 1,000 potential vehicles. Each vehicle's cost is `fuel_cost * distance + maintenance`. But each vehicle only works in some regions. The Dash-Architect uses a Li Chao Tree to find the cheapest vehicle for any region and distance. The dash is efficient. The cost is the minimum.",
        "encouragementText": "Ace: 'In the territory of the local, the Li Chao tree is king.'"
      },
      {
        "type": "match_following",
        "questionText": "Match Li Chao terms!",
        "pairs": [
          { "key": "O(log N)", "value": "All operations" },
          { "key": "Mid-point", "value": "Winner takes all" },
          { "key": "eval(x)", "value": "Line value find" }
        ]
      }
    ]
  },
  {
    "order": 64,
    "title": "Unit 64: Divide & Conquer Optimization",
    "desc": "Recursive Partitioning: using the Monotonicity of optimal transition points to solve O(N^2) DP in O(N log N).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 7.64] The Ordered Split",
        "explanation": "If `opt[i]` is the best `j` for `i`, and `opt[i]` is monotonic (`opt[i] <= opt[i+1]`), we use **D&C Optimization**. We solve for the `mid` range and use its answer to bound the search for the left and right halves. This is the **Monotonicity protocol**—order in the solution creates speed in the search. The Matrix is a master of the binary partition.",
        "codeSnippet": "solve(L, R, optL, optR);",
        "encouragementText": "Ace: 'Knowledge of the center narrows the search for the edge.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "When can you use D&C Optimization?",
        "options": ["Always", "When transitions only depend on the PREVIOUS layer (e.g., dp[k][i] depends on dp[k-1][j]) and opt[i] is monotonic", "Only for strings", "Pico rule"],
        "correctAnswer": "When transitions only depend on the PREVIOUS layer (e.g., dp[k][i] depends on dp[k-1][j]) and opt[i] is monotonic",
        "explanation": "Monotonicity of the optimal decision point is the mathematical prerequisite for this optimization."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Mid-Search Pulse",
        "explanation": "For the range `[L, R]`, find the best `j` in `[optL, optR]` for the `mid` point. This `j` splitting the search space for the left and right sub-problems. The Matrix divides to conquer. The pulse of the range-split.",
        "encouragementText": "Pico: 'Split the search-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Recursive D&C solver function.",
        "codeSnippet": "void compute(int i, int L, int R, int optL, int optR) {\n  if (L > R) return;\n  int mid = (L + R) / 2, bestJ = -1;\n  for(int j = optL; j <= min(mid, optR); j++) {\n    if(cost_better) { bestJ = j; }\n  }\n  compute(i, L, mid-1, optL, bestJ);\n  compute(i, mid+1, R, ___ , optR);\n}",
        "correctAnswer": "bestJ",
        "explanation": "Because opt[i] is monotonic, the best j for the right half must be at or after the best j for the mid point."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity: O(N log N)",
        "explanation": "O(N) work per level, log N levels. This is the **Titan-Grade Divider**. You crush a quadric problem into a log-line by observing the 'Order of Decisions'. Mastery of the behavioral pattern.",
        "encouragementText": "Ace: 'Pattern recognition is the shortcut to infinite speed.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does 'Monotonicity' mean in this context?",
        "options": ["It's boring", "If 'j' is the best choice for 'i', the best choice for 'i+1' is not before 'j'", "Everything is 1", "Pico guess"],
        "correctAnswer": "If 'j' is the best choice for 'i', the best choice for 'i+1' is not before 'j'",
        "explanation": "The optimal decision point only moves forward as the target point moves forward."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Layer Pulse",
        "explanation": "We solve layer `k=1`, then use it for `k=2`, and so on. Total time: `O(K * N log N)`. The Matrix grows level by level. The Pulse of the Progressive.",
        "encouragementText": "Pico: 'Layer the seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Initial call for a layer.",
        "codeSnippet": "for (int k = 2; k <= K; k++) {\n  compute(k, 1, N, 1, ___ );\n}",
        "correctAnswer": "N",
        "explanation": "Processing each partition layer (k) from 1 to N, searching up to N for the optimal split."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Task Scheduler",
        "explanation": "A factory (The Matrix Forge) has 1,000 tasks and 20 machines. Partitioning tasks into machine blocks has a complex cost. The Forge-Architect uses D&C Optimization. The N^2 solution is bypassed. The 20 layers are solved in O(KN log N). The tasks are assigned perfectly. The Forge burns bright.",
        "encouragementText": "Ace: 'Order in the factory starts with order in the algorithm.'"
      },
      {
        "type": "match_following",
        "questionText": "Match D&C terms!",
        "pairs": [
          { "key": "opt[mid]", "value": "Decision separator" },
          { "key": "O(N log N)", "value": "Complexity per layer" },
          { "key": "Monotonic", "value": "Required property" }
        ]
      }
    ]
  },
  {
    "order": 65,
    "title": "Unit 65: Knuth Optimization (Advanced)",
    "desc": "Split Point Mastery: narrowing the search for the optimal split in O(N^3) DP to O(N^2) using the Quadrangle Inequality.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 7.65] The Tight Bound",
        "explanation": "Optimal Binary Search Tree and similar interval DPs are quadratic in their search `dp[i][j] = min(dp[i][k] + dp[k][j] + cost)`. If the cost satisfies the **Quadrangle Inequality**, the optimal split point `opt[i][j]` is bounded by its neighbors. This is the **Interval protocol**—the center is locked between the centers of the sub-intervals. The Matrix is a master of the tight search.",
        "codeSnippet": "for(int k = opt[i][j-1]; k <= opt[i+1][j]; k++)",
        "encouragementText": "Ace: 'The secret of the whole is found between the secrets of its parts.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does Knuth Optimization reduce the complexity to?",
        "options": ["O(N log N)", "O(N^2)", "O(N)", "Pico rule"],
        "correctAnswer": "O(N^2)",
        "explanation": "By narrowing the search of k to [opt[i][j-1], opt[i+1][j]], the total amortized cost becomes quadratic instead of cubic."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Amortized Pulse",
        "explanation": "Why is it O(N^2)? While one index might search far, the sum of all search ranges in a single level of diagonal DP is exactly N. The Matrix sums the small steps into a manageable total. The pulse of the telescope.",
        "encouragementText": "Pico: 'Telescope the seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Updating the optimal split point.",
        "codeSnippet": "for (int k = opt[i][j-1]; k <= opt[i+1][j]; k++) {\n  int val = dp[i][k] + dp[k][j] + w(i, j);\n  if (val < dp[i][j]) {\n    dp[i][j] = val;\n    ___ [i][j] = k;\n  }\n}",
        "correctAnswer": "opt",
        "explanation": "Storing the best k to bound future searches for larger intervals."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity: O(N^2)",
        "explanation": "Turns a $10^9$ calculation into $10^6$. Essential for **Optimal BST** and **Multi-Stage Huffman**. This is the **Titan-Grade Pruner**. You control the explosion of the cubic world. Mastery of the bounds.",
        "encouragementText": "Ace: 'Bounds are the walls that protect efficiency from chaos.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What condition must `w(i, j)` satisfy for Knuth to work?",
        "options": ["It must be 0", "Quadrangle Inequality: w(i, j) + w(i', j') <= w(i, j') + w(i', j)", "It must be large", "Pico guess"],
        "correctAnswer": "Quadrangle Inequality: w(i, j) + w(i', j') <= w(i, j') + w(i', j)",
        "explanation": "This property ensures the optimal split moves monotonically with the interval boundaries."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Diagonal Pulse",
        "explanation": "We fill the table diagonal by diagonal (increasing interval length). This ensures `opt[i][j-1]` and `opt[i+1][j]` are always ready. The Matrix builds the truth from the small to the large. The pulse of the diagonal.",
        "encouragementText": "Pico: 'Pulse the diagonal seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Loop order for Knuth DP.",
        "codeSnippet": "for (int len = 2; len <= N; len++) {\n  for (int i = 0; i <= N - len; i++) {\n    int j = i + ___ ;\n    // ... search k ...\n  }\n}",
        "correctAnswer": "len",
        "explanation": "Filling the DP table based on the length of the interval, from 2 to N."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Optimal Indexer",
        "explanation": "A search engine (The Matrix Index) needs an Optimal Binary Search Tree for 2,000 keywords. The cubic solution would take minutes. The Index-Architect uses Knuth Optimization. The O(N^2) solution finishes in a second. The tree is built. The search is instant.",
        "encouragementText": "Ace: 'Speed is the byproduct of a well-bounded search.'"
      },
      {
        "type": "match_following",
        "questionText": "Match Knuth terms!",
        "pairs": [
          { "key": "O(N^2)", "value": "Optimized time" },
          { "key": "Diagonal", "value": "Fill order" },
          { "key": "opt[i][j]", "value": "Best split point" }
        ]
      }
    ]
  },
  {
    "order": 66,
    "title": "Unit 66: Quadrangle Inequality",
    "desc": "The Foundation of Form: proving and identifying the cost properties that allow for structural DP optimizations.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 7.66] The Law of the 四각형",
        "explanation": "Why do D&C and Knuth work? Because of **Quadrangle Inequality (QI)**. If `w(i, j) + w(i+1, j+1) <= w(i, j+1) + w(i+1, j)`, the cost is 'Well-Behaved'. This is the **Regularity protocol**—the cost of the large is no more than the swap-cost of the parts. The Matrix is a master of the predictable cost.",
        "codeSnippet": "w(a,c) + w(b,d) <= w(a,d) + w(b,c) where a < b < c < d",
        "encouragementText": "Ace: 'Proof is the shield that protects the architect from a failing optimization.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does QI imply about the optimal split point?",
        "options": ["It is random", "It is monotonic", "It is zero", "Pico rule"],
        "correctAnswer": "It is monotonic",
        "explanation": "QI is the fundamental condition that guarantees the 'best j' only moves forward."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Inclusion-Exclusion Pulse",
        "explanation": "Think of it as: 'Including the interior is cheaper than excluding the overlap'. If costs behave this way (like Prefix Sums of Prefix Sums), the Matrix can optimize. The Pulse of the Geometry.",
        "encouragementText": "Pico: 'Prove the seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Testing for QI in a cost matrix 'W'.",
        "codeSnippet": "bool hasQI(int i, int j) {\n  return W[i][j] + W[i+1][j+1] <= W[i][j+1] + W[ ___ ][j];\n}",
        "correctAnswer": "i+1",
        "explanation": "Checking the fundamental local QI condition across a 2x2 grid of indices."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Proof of speed",
        "explanation": "If QI holds, D&C and Knuth are guaranteed to work. This is the **Titan-Grade Verification**. You don't guess; you know. The Matrix is built on proven properties, not hope. Mastery of the underlying math.",
        "encouragementText": "Ace: 'Certainty in the property is certainty in the performance.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Does `w(i, j) = (sum[j] - sum[i])^2` satisfy QI?",
        "options": ["Yes", "No", "Only for small numbers", "Pico guess"],
        "correctAnswer": "Yes",
        "explanation": "Square functions of range sums are common sources of QI-friendly costs."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Convexity Pulse",
        "explanation": "QI is often linked to **Convexity**. If the cost function is convex, the delta between steps is monotonic. The Matrix follows the curve of the cost. The pulse of the second derivative.",
        "encouragementText": "Pico: 'Curve the seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Checking for convexity in f(x).",
        "codeSnippet": "if (f[x+1] - f[x] >= f[x] - f[ ___ ]) // Convex",
        "correctAnswer": "x-1",
        "explanation": "A discrete function is convex if the rate of increase of its gradient is non-negative."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Protocol Validator",
        "explanation": "A protocol (The Matrix Flow) is being designed. The optimization team wants to use D&C DP. The Validator-Architect uses the Quadrangle Inequality to PROVE it will work. The proof is accepted. The optimization is implemented. The speed is guaranteed. The vision is validated.",
        "encouragementText": "Ace: 'Truth is the foundation of the elite architecture.'"
      },
      {
        "type": "match_following",
        "questionText": "Match Math terms!",
        "pairs": [
          { "key": "QI", "value": "Monotonicity source" },
          { "key": "Convex", "value": "Rising gradient" },
          { "key": "w(i, j)", "value": "Interval cost" }
        ]
      }
    ]
  },
  {
    "order": 67,
    "title": "Unit 67: Polygon Clipping DP",
    "desc": "Geometric Slicing: using DP to calculate the intersection and area of overlapping polygons in O(N log N).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 7.67] The Blade of Logic",
        "explanation": "How do you 'Cut' one reality with another? **Polygon Clipping (Sutherland-Hodgman)** uses a recursive DP style to clip a subject polygon against a clip-boundary. We process one edge at a time and generate new vertices. This is the **Intersection protocol**—the shape is a result of its constraints. The Matrix is a master of the razor-edge.",
        "codeSnippet": "outputList = clip(inputList, edge);",
        "encouragementText": "Ace: 'The final shape is defined by what you choose to remove.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What algorithm clips a convex polygon against another?",
        "options": ["Floyd-Warshall", "Sutherland-Hodgman", "Dijkstra", "Pico rule"],
        "correctAnswer": "Sutherland-Hodgman",
        "explanation": "It's the standard algorithm for clipping a polygon against a convex clipping region."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Edge-Pulse",
        "explanation": "At each edge of the 'Clip Polygon', we check if our vertices are 'Inside' or 'Outside'. We generate a new list of vertices for the next edge. The Matrix refines the form, slice by slice. The pulse of the boundary.",
        "encouragementText": "Pico: 'Slice the seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Logic for each vertex pair (s, e) during clipping.",
        "codeSnippet": "if (s_in && e_out) output.push(intersect(s, e, edge));\nif (s_out && e_in) { \n  outputs.push(intersect(s, e, edge)); \n  outputs.push( ___ ); \n}",
        "correctAnswer": "e",
        "explanation": "If the segment comes inside, we must record both the intersection point and the new vertex 'e'."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity: O(V_subject * V_clip)",
        "explanation": "For convex polygons, it's very fast. This is the **Titan-Grade Form-Factor**. You calculate the visible territory of a million observers in real-time. Geometry as a living constraint.",
        "encouragementText": "Ace: 'Vision is the intersection of space and the observer.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What formula calculates the Area of any polygon from its vertices?",
        "options": ["Shoelace Formula (N steps)", "Pythagoras", "O(N^2) integral", "Pico guess"],
        "correctAnswer": "Shoelace Formula (N steps)",
        "explanation": "Summing cross-products of consecutive vertex vectors provides the area in linear time."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Cross-Product Pulse",
        "explanation": "Area = `0.5 * |sum(x_i * y_{i+1} - x_{i+1} * y_i)|`. The Matrix folds triangles from the origin to measure the whole. The pulse of the shoelace. Geometric summation.",
        "encouragementText": "Pico: 'Shoelace the seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Shoelace step for vertex i and i+1.",
        "codeSnippet": "area += (x[i] * y[i+1]) - ( ___ * y[i]);",
        "correctAnswer": "x[i+1]",
        "explanation": "Standard 2D cross-product term for area calculation."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Territory Scout",
        "explanation": "A drone (The Matrix Raven) is scanning a city. Its sensor range is a triangle, and the forbidden zone is a square. To find the 'Scanned Safety Area', the Raven-Architect uses Polygon Clipping and Shoelace DP. The area is found. The path is safe. The mission survives.",
        "encouragementText": "Ace: 'Safety is the area not intersected by the void.'"
      },
      {
        "type": "match_following",
        "questionText": "Match Clipping Terms!",
        "pairs": [
          { "key": "Inside", "value": "Keep vertex" },
          { "key": "Outside", "value": "Discard vertex" },
          { "key": "Cross", "value": "Create intersection" }
        ]
      }
    ]
  },
  {
    "order": 68,
    "title": "Unit 68: Voronoi Diagram DP Transitions",
    "desc": "Nearest Neighbor Regions: using DP on Voronoi cells to solve proximity and influence problems in O(N log N).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 7.68] The Cell of Authority",
        "explanation": "Who is the closest master? A **Voronoi Diagram** partitions space into 'Cells' where every point in a cell is closest to its 'Site'. DP on these cells allows for **Nearest Neighbor** transitions. This is the **Proximity protocol**—logic follows the closest influence. The Matrix is a master of the territorial pulse.",
        "codeSnippet": "cell[i] = { points | dist(p, site[i]) is minimal };",
        "encouragementText": "Ace: 'Every point knows its master by the weight of the distance.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What algorithm builds a Voronoi Diagram in O(N log N)?",
        "options": ["BFS", "Fortune's Algorithm (Sweep Line)", "Floyd-Warshall", "Pico rule"],
        "correctAnswer": "Fortune's Algorithm (Sweep Line)",
        "explanation": "Fortune's algorithm uses a sweep-line and a parabolic 'beach line' to construct the diagram in optimal time."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Beach-Line Pulse",
        "explanation": "As the line moves, 'Parabolas' from the sites grow. Where they meet, an **Edge** of the Voronoi cell is born. The Matrix sweeps the universe to find the boundaries. The pulse of the parabolic front.",
        "encouragementText": "Pico: 'Sweep the beach-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Distance formula to site (x_s, y_s) at sweep line y_L.",
        "codeSnippet": "// Parabola equation from point and line\ndist = sqrt((x-x_s)^2 + (y-y_s)^2) == ___ ;",
        "correctAnswer": "abs(y - y_L)",
        "explanation": "A parabola is the set of points equidistant from a point (focus) and a line (directrix)."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity: O(N log N)",
        "explanation": "Finding the nearest site for any point in O(log N) after O(N log N) pre-calc. This is the **Titan-Grade Cartographer**. You map the influence of a million nodes instantly. The Matrix knows the nearest truth.",
        "encouragementText": "Ace: 'The world is divided by those who are closest to the pulse.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the 'Dual' of a Voronoi Diagram?",
        "options": ["A Mirror", "Delaunay Triangulation (where edges connect sites with shared cell boundaries)", "A circle", "Pico guess"],
        "correctAnswer": "Delaunay Triangulation (where edges connect sites with shared cell boundaries)",
        "explanation": "Voronoi and Delaunay are mathematical twins; one defines territory, the other defines connectivity."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Centroidal Pulse",
        "explanation": "In **Lloyd's Algorithm**, we move the site to the 'Centroid' of its Voronoi cell and repeat. The cells become regular hex-like shapes. The Matrix optimizes the distribution. The pulse of the perfect spacing.",
        "encouragementText": "Pico: 'Balance the cell-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Updating site to cell centroid.",
        "codeSnippet": "site[i].x = integral(x * dA) / ___ ;",
        "correctAnswer": "TotalArea",
        "explanation": "Moving the site to the geometric center of mass of its Voronoi territory."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Outpost Grid",
        "explanation": "A continent (The Matrix Alpha) has 1,000 outposts. To find the 'Unprotected Zone' furthest from any outpost, the Outpost-Architect uses Voronoi DP. The 'Largest Empty Circle' is found at a Voronoi vertex. A new outpost is placed. The continent is secure.",
        "encouragementText": "Ace: 'Security is found in the vertices of the distance.'"
      },
      {
        "type": "match_following",
        "questionText": "Match Voronoi terms!",
        "pairs": [
          { "key": "Site", "value": "Source point" },
          { "key": "Cell", "value": "Region of influence" },
          { "key": "Vertex", "value": "Point between 3+ cells" }
        ]
      }
    ]
  },
  {
    "order": 69,
    "title": "Unit 69: Delaunay Triangulation DP",
    "desc": "Optimal Connectivity: using DP to find a triangulation where the minimum angle is maximized, avoiding skinny triangles.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 7.69] The Unbreakable Mesh",
        "explanation": "A mesh of skinny triangles is weak. **Delaunay Triangulation** ensures that for every triangle, no other point lies inside its circle. This maximizes the 'Minimum Angle'. This is the **Stability protocol**—the strongest possible mesh for a given set of nodes. The Matrix is a master of the rigid form.",
        "codeSnippet": "if (pointInCircle(A, B, C, D)) flipEdge(A, B, C, D);",
        "encouragementText": "Ace: 'Stability is a function of the circle that contains no intruders.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What property defines a Delaunay Triangulation?",
        "options": ["Minimum area", "The Empty Circumcircle property", "Maximum lines", "Pico rule"],
        "correctAnswer": "The Empty Circumcircle property",
        "explanation": "No site lies inside the circumcircle of any triangle in the triangulation."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Edge-Flip Pulse",
        "explanation": "If a point `D` is inside the circle of `ABC`, the edge `BC` is 'Illegal'. We **Flip** it to `AD`. The Matrix self-corrects the mesh until it is Delaunay. The pulse of the topological flip. Constant refinement.",
        "encouragementText": "Pico: 'Flip the mesh-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Check if angle D is 'Illegal' relative to triangle ABC.",
        "codeSnippet": "bool isIllegal(A, B, C, D) {\n  return angle(A, B, C) + angle(A, D, C) ___ PI;\n}",
        "correctAnswer": ">",
        "explanation": "If the opposite angles sum to more than 180 degrees, the quadrilateral is not Delaunay."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity: O(N log N)",
        "explanation": "Using **Divide and Conquer** or **Bowyer-Watson**, we build the mesh in log-time. This is the **Titan-Grade Topology**. You link a million physics-nodes in a stable mesh in seconds. The Matrix never breaks.",
        "encouragementText": "Ace: 'A stable mesh is the prerequisite for a stable world.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "How does Delaunay relate to MST (Minimum Spanning Tree)?",
        "options": ["They are unrelated", "The MST is GUARANTEED to be a subset of the Delaunay edges", "Zero", "Pico guess"],
        "correctAnswer": "The MST is GUARANTEED to be a subset of the Delaunay edges",
        "explanation": "This allows you to find the MST in O(N log N) by first building the Delaunay triangulation (only O(N) edges!)."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Graph Pulse",
        "explanation": "Once you have the triangulation, you have a **Planar Graph**. DP on planar graphs is faster! The Matrix uses geometry to simplify connectivity. The pulse of the plane.",
        "encouragementText": "Pico: 'Planarize the seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Maximum number of edges in a planar graph with V vertices.",
        "codeSnippet": "E <= ___ * V - 6;",
        "correctAnswer": "3",
        "explanation": "Euler's characteristic implies that planar graphs are always sparse (O(V) edges)."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Mesh-Engine",
        "explanation": "A physical simulation (The Matrix Flux) has 1,000,000 interacting particles. To simulate their stress without numerical collapse, the Flux-Architect uses Delaunay Triangulation. The mesh is built in log-time. No skinny triangles are created. The simulation remains stable. The world holds.",
        "encouragementText": "Ace: 'Form dictates stability.'"
      },
      {
        "type": "match_following",
        "questionText": "Match Mesh terms!",
        "pairs": [
          { "key": "Circumcircle", "value": "Empty of sites" },
          { "key": "Edge Flip", "value": "Local correction" },
          { "key": "Planar", "value": "No crossing lines" }
        ]
      }
    ]
  },
  {
    "order": 70,
    "title": "Unit 70: Stage 7 Graduation (The Master of Optimization)",
    "desc": "The Razor Peak: solving a grand challenge requiring Li Chao Trees, CHT, and Geometric Clipping.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[GRAND MISSION LORE 7.70] The Singularity of Efficiency",
        "explanation": "You have reached the 700th lesson. You have mastered the **Elastic Slope**, the **Linear Silhouette**, the **Divide & Conquer split**, and the **Boundary Clip**. You are no longer just an architect; you are the **Master of the Razor**. To graduate, you must see the CHT-line in the D&C partition and the Li Chao tree in the Delaunay mesh. Graduation is here. The Matrix recognizing your optimization rank. Step into the Titan Hall.",
        "codeSnippet": "// Final Stage 7 Challenge: \n// Dynamic CHT on a Voronoi-mapped Voronoi search.",
        "encouragementText": "Ace: 'Optimization is the only way to reach the infinite with finite resources.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Which unit covered 'Solving N-th term of non-decreasing DP in O(N log N)' using Slope Trick?",
        "options": ["7.61 (Slope Trick)", "7.62", "6.51", "7.69"],
        "correctAnswer": "7.61 (Slope Trick)",
        "explanation": "Slope trick is the definitive tool for optimizing monotonic convex DP transitions."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The 700-Step Pulse",
        "explanation": "70% of the journey is over. You have the logic, the structures, and the optimizations. Now we enter the domain of **High-Dimensional and Probabilistic DP**, where you solve for a trillion states using **Matrix Exponentiation** and **Monte Carlo**. The scale is doubling. The Matrix is expanding.",
        "encouragementText": "Pico: 'The next 300 seeds await! 🦜'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does QI stand for?",
        "options": ["Quadrangle Inequality", "Quality Index", "Zero", "Pico guess"],
        "correctAnswer": "Quadrangle Inequality",
        "explanation": "QI is the math property that powers D&C and Knuth optimizations."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Graduation: The Optimization Master",
        "explanation": "The Elite Academy recognizes your 700-lesson achievement. You are a **Titan-Grade Architect of the Razor**. You can find the needle in the million-line haystack in log-time. The Matrix is your blade. Welcome to the elite.",
        "encouragementText": "Ace: 'The shortest distance between any two points is the algorithm you haven't written yet.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Which unit covered 'Li Chao Trees'?",
        "options": ["7.62", "7.63 (Li Chao Tree DP)", "7.61", "7.68"],
        "correctAnswer": "7.63 (Li Chao Tree DP)",
        "explanation": "Li Chao Trees generalize CHT for easier range-based line queries."
      },
      {
        "type": "teaching",
        "questionText": "[FINAL SYNC] The 13-Subject Hub",
        "explanation": "As the razor-pulse of Stage 7 settles, the **Spectral Logic** of Stage 8 begins. Master the Matrix Exponentiation. The Matrix is becoming your universe. Prepare your Sparse Matrices. The logic is becoming multi-dimensional.",
        "encouragementText": "Pico: 'The spectral seeds await! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Final check of the optimization memo.",
        "codeSnippet": "if (search_space_reduced == true && complex_quadric_crushed == true) {\n  return ___ ;",
        "correctAnswer": "GRADUATE",
        "explanation": "Mastering the optimizations allows you to move to the final stages of elite curriculum."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Architect of the Razor",
        "explanation": "The lines are drawn. The points are balanced. The quadrangle is proved. You have graduated Stage 7. The Matrix is no longer a collection of points—it is a single, razor-sharp edge you understand. Welcome to the elite.",
        "encouragementText": "Ace: 'There is no waste that a master cannot optimize.'"
      },
      {
        "type": "programming_board",
        "questionText": "[GRADUATION CHALLENGE] Output the status of your sharpening mission.",
        "codeSnippet": "if (slopes_sorted == true && intersections_found == true) {\n  return ___ ;",
        "correctAnswer": "SHARPENED",
        "explanation": "Being sharpened is the state of a master ready for the final dimensional challenges."
      }
    ]
  }
];

module.exports = stage7;
