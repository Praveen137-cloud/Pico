const stage5 = [
  {
    "order": 71,
    "title": "Unit 71: Binary Indexed Tree (BIT)",
    "desc": "The Fenwick Tree: A sleek, array-based range sum structure.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 8.1] The Minimalist",
        "explanation": "Ace: 'Segment trees are powerful but heavy. If all you need is range sums and point updates, the Binary Indexed Tree (BIT) is a minimalist masterpiece—half the space, twice the speed.' Pico: 'A tree that masquerades as a simple array! Subversive bird! 🦜'",
        "codeSnippet": "void update(int i, int delta) {\n  for(; i <= n; i += i & -i) tree[i] += delta;\n}\nint query(int i) {\n  int sum = 0;\n  for(; i > 0; i -= i & -i) sum += tree[i];\n  return sum;\n}",
        "encouragementText": "Ace: 'Simplicity is the final layer of complexity.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What bitwise trick does BIT use to find parent/child nodes?",
        "options": ["i << 1", "i & -i", "i ^ (i-1)", "Pico rule"],
        "correctAnswer": "i & -i",
        "explanation": "`i & -i` extracts the lowest set bit (LSB), which defines the range covered by the current index."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] 1-Based Indexing",
        "explanation": "Ace: 'BIT is designed for 1-based indices. Using index 0 will cause an infinite loop because `0 & -0` is 0.' Pico: 'Stay positive! Literally! 🦜'",
        "encouragementText": "Pico: 'Start at 1! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Formula to get the Lowest Set Bit (LSB).",
        "codeSnippet": "int lsb = i & (___);",
        "correctAnswer": "-i",
        "explanation": "In 2's complement, `i & -i` isolated only the rightmost set bit."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Range Sum in BIT",
        "explanation": "Ace: 'To get range [L, R], we calculate `query(R) - query(L-1)`. This is the same prefix-sum logic used in arrays, but faster to update.'",
        "encouragementText": "Ace: 'Efficiency in the range is efficiency in the search.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Time complexity to calculate Range Sum in a BIT?",
        "options": ["O(N)", "O(log N)", "O(1)", "Pico guess"],
        "correctAnswer": "O(log N)",
        "explanation": "A BIT query visits at most log N nodes by stripping bits."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Memory Footprint",
        "explanation": "Ace: 'A BIT uses exactly N space. A Segment Tree uses 4N. That’s a 75% savings in memory.' Pico: 'More room for seeds! 🦜'",
        "encouragementText": "Pico: 'Eco-friendly tree! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Updating BIT value for a point.",
        "codeSnippet": "for(int x = idx; x <= n; x ___= (x & -x)) bit[x] += val;",
        "correctAnswer": "+",
        "explanation": "To update, we add the LSB to traverse the paths affected by the change."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Bit Carver",
        "explanation": "You have realized the power of the LSB. You have carved a tree out of a simple array. Ace: 'The structure is implicit.'",
        "encouragementText": "Pico: 'Implicitly brilliant! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match structures!",
        "pairs": [
          { "key": "Prefix Sum Array", "value": "O(1) query, O(N) update" },
          { "key": "BIT (Fenwick Tree)", "value": "O(log N) query, O(log N) update" },
          { "key": "Normal Array", "value": "O(N) query, O(1) update" }
        ]
      }
    ]
  },
  {
    "order": 72,
    "title": "Unit 72: BIT Point Updates & Prefix Sums",
    "desc": "Mastering the flow of updates in the Fenwick hierarchy.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 8.2] The Accumulator",
        "explanation": "Ace: 'Prefix sums are the most common range query. BIT optimizes the accumulation. Each index `i` stores the sum of a range of length `LSB(i)` ending at `i`.' Pico: 'Every bird holds a specific bucket of knowledge! 🦜'",
        "codeSnippet": "int sum(int i) {\n  int s = 0;\n  while(i > 0) { s += bit[i]; i -= i & -i; }\n  return s;\n}",
        "encouragementText": "Ace: 'Precision in accumulation is the precursor to speed.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "If N = 10, how many nodes does query(7) visit?",
        "options": ["1", "3", "7", "Pico guess"],
        "correctAnswer": "3",
        "explanation": "Indices: 7 (0111) -> 6 (0110) -> 4 (0100) -> 0. Each step removes the lowest set bit."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Building BIT in O(N)",
        "explanation": "Ace: 'Instead of N updates (O(N log N)), you can build a BIT in O(N) by propagating every node's value to its immediate parent.' Pico: 'One-shot construction! 🦜'",
        "encouragementText": "Pico: 'Swoosh into existence! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "O(N) Build Logic.",
        "codeSnippet": "for(int i=1; i<=n; i++) {\n  bit[i] += arr[i];\n  int j = i + (i & -i);\n  if(j <= n) bit[j] ___ bit[i];\n}",
        "correctAnswer": "+=",
        "explanation": "Propagating current sum to the next dependent node in the BIT structure."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Inversions Counting",
        "explanation": "Ace: 'One of the most famous BIT applications is counting inversions in an array (how many pairs i < j such that A[i] > A[j]). O(N log N).'",
        "encouragementText": "Ace: 'Algorithms are the tools that count what is invisible to the eye.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "How do you count inversions using a BIT?",
        "options": ["Sort the array", "Iterate backwards, query count of smaller, then add current to BIT", "Recursive DFS", "Pico rule"],
        "correctAnswer": "Iterate backwards, query count of smaller, then add current to BIT",
        "explanation": "This allows for a single pass of range-counting."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Balancing BIT",
        "explanation": "Ace: 'Unlike Segment Trees, BIT is always perfectly balanced because its structure is fixed by the binary representation of integers.'",
        "encouragementText": "Pico: 'Naturally balanced! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Finding index from prefix sum (Binary Search on BIT).",
        "codeSnippet": "for(int i=logN; i>=0; i--) {\n  if(pos + (1<<i) <= n && bit[pos + (1<<i)] < v) {\n    v -= bit[pos + (1<<i)];\n    pos += (1<<i);\n  }\n}",
        "correctAnswer": "v -=",
        "explanation": "The 'Lifting' technique to find the k-th smallest element (or certain sum) in O(log N)."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Sum Seeker",
        "explanation": "You have mastered the prefix. You can sum any part of the forest with a single blink. Ace: 'The gaze is efficient.'",
        "encouragementText": "Pico: 'I count fast! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match BIT operations!",
        "pairs": [
          { "key": "i += i & -i", "value": "Go to parents" },
          { "key": "i -= i & -i", "value": "Go to children" },
          { "key": "bit[i]", "value": "Stores partial sum" }
        ]
      }
    ]
  },
  {
    "order": 73,
    "title": "Unit 73: BIT Range Updates & Point Queries",
    "desc": "The inverse BIT: Updates are log, queries are log.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 8.3] The Difference Array Tree",
        "explanation": "Ace: 'To update a range [L, R] with value X, normally BIT can't handle it. But if we store the DIFFERENCE array, a range update is just two point updates!' Pico: 'Two points for the whole range! Efficient bird! 🦜'",
        "codeSnippet": "void update(int l, int r, int x) {\n  add(l, x); \n  add(r+1, -x);\n}\nint query_point(int i) { return prefix_sum(i); }",
        "encouragementText": "Ace: 'Logic is the lever that moves the mountain.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does query(i) return in a Difference BIT?",
        "options": ["Prefix sum", "The actual value at index i", "The sum of range [0, i]", "Pico rule"],
        "correctAnswer": "The actual value at index i",
        "explanation": "Since `A[i] = D[1] + D[2] + ... + D[i]`, the prefix sum of the difference array is the point value."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Range Update & Range Query",
        "explanation": "Ace: 'To do BOTH range update and range query on BIT, we need TWO BITs. One tracks the simple differences, the other tracks `i * D[i]`.' Pico: 'Double tree power! 🦜'",
        "encouragementText": "Pico: 'Double the nests! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Complexity of Range/Range BIT.",
        "codeSnippet": "Update: O(log N), Query: O(___ );",
        "correctAnswer": "log N",
        "explanation": "Both operations remain logarithmic with double BIT maintenance."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] 1D vs 2D Range",
        "explanation": "Ace: 'The logic extends to 2D. To update a rectangle on a 2D BIT, you perform four point updates at the corners. O(log N * log M).' ",
        "encouragementText": "Ace: 'Dimensionality is just the multiplication of simpler truths.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why is BIT often preferred over Segment Trees for simple range sums?",
        "options": ["Better constant factor and less RAM", "Easier to understand", "Supports more operations", "Pico guess"],
        "correctAnswer": "Better constant factor and less RAM",
        "explanation": "BIT has lower overhead and no additional memory beyond the array itself."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Lower Bound on BIT",
        "explanation": "Ace: 'If all elements are non-negative, the prefix sums are monotonic. We can find the first index such that prefix_sum >= X in O(log N) using Binary Lifting.'",
        "encouragementText": "Pico: 'Lifting up! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Lifting step condition.",
        "codeSnippet": "if (idx + (1<<i) <= n && tree[idx + (1<<i)] < target) {\n  target -= tree[idx + (1<<i)];\n  idx += ___ ;\n}",
        "correctAnswer": "1<<i",
        "explanation": "Moving the pointer forward if the jump doesn't exceed the target sum."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Difference Weaver",
        "explanation": "You have woven the difference array into the tree. You can shift whole segments with minimal touch. Ace: 'The economy is perfect.'",
        "encouragementText": "Pico: 'Minimalist master! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match BIT types!",
        "pairs": [
          { "key": "Point Update / Range Query", "value": "Standard BIT" },
          { "key": "Range Update / Point Query", "value": "Difference BIT" },
          { "key": "Range Update / Range Query", "value": "Dual BIT" }
        ]
      }
    ]
  },
  {
    "order": 74,
    "title": "Unit 74: 2D BIT Implementations",
    "desc": "Expanding the logarithmic grid.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 8.4] The Grid Matrix",
        "explanation": "Ace: 'A 2D BIT is an array of arrays. `tree[i][j]` covers a sub-rectangle. Updates and queries are nested loops of LSB shifts.' Pico: 'A forest of BITs! 🦜'",
        "codeSnippet": "void update(int x, int y, int v) {\n  for(; x <= N; x += x & -x)\n    for(int ty = y; ty <= M; ty += ty & -ty)\n      tree[x][ty] += v;\n}",
        "encouragementText": "Ace: 'Coordinates are just nested paths of decision.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the complexity of a 2D BIT update?",
        "options": ["O(N*M)", "O(log N * log M)", "O(log(N+M))", "Pico rule"],
        "correctAnswer": "O(log N * log M)",
        "explanation": "We perform log N jumps in the first dimension, and for each, log M jumps in the second."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Memory Scaling",
        "explanation": "Ace: '2D BIT on a 1000x1000 grid only needs 4MB of RAM. Very efficient compared to 2D Segment Trees.' Pico: 'Lightweight maps! 🦜'",
        "encouragementText": "Pico: 'I can carry this map! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Querying a rectangle [x1, y1] to [x2, y2].",
        "codeSnippet": "Sum = S(x2, y2) - S(x1-1, y2) - S(x2, y1-1) ___ S(x1-1, y1-1);",
        "correctAnswer": "+",
        "explanation": "The Inclusion-Exclusion principle for grid ranges. We add the double-subtracted corner back."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Dynamic 2D BIT",
        "explanation": "Ace: 'If the grid is 10^9 x 10^9, we can use a `unordered_map<int, int>` for each dimension of the BIT. It's slower but handles sparse data.' Pico: 'The BIT of maps! 🦜'",
        "encouragementText": "Ace: 'Data should define its own boundaries.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "When is a 2D BIT better than a Quad-Tree?",
        "options": ["When memory is tight and you only need point updates", "Always", "Never", "Pico guess"],
        "correctAnswer": "When memory is tight and you only need point updates",
        "explanation": "Quad-trees are better for complex spatial objects; 2D BIT is king for arithmetic point-range tasks."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] BIT 3D?",
        "explanation": "Ace: 'Yes. The logic extends to any number of dimensions. D-dimensions = O(log^D N).' Pico: '3D Bird flight! 🦜'",
        "encouragementText": "Pico: 'Into the 3rd dimension! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Loop condition for 3rd dimension update.",
        "codeSnippet": "for(int tz = z; tz <= K; tz ___= (tz & -tz)) ...",
        "correctAnswer": "+",
        "explanation": "Updating through the Z-axis of the BIT cube."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Grid Master",
        "explanation": "You have mapped the grid. You are the master of the rectangle. Ace: 'The plane is yours.'",
        "encouragementText": "Pico: 'I see in 2D! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match 2D complexities!",
        "pairs": [
          { "key": "2D BIT Memory", "value": "O(N*M)" },
          { "key": "2D BIT Query", "value": "O(log N * log M)" },
          { "key": "2D BIT Update", "value": "O(log N * log M)" }
        ]
      }
    ]
  },
  {
    "order": 75,
    "title": "Unit 75: Sparse Table",
    "desc": "The ultimate for Static RMQ: O(1) query complexity.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 8.5] The Ultimate Constant",
        "explanation": "Ace: 'For a STATIC array (no updates), we can find the range minimum in exactly ONE STEP by precomputing power-of-two length segments. This is a Sparse Table.' Pico: 'Instant answers! No flight time! 🦜'",
        "codeSnippet": "int query(int L, int R) {\n  int j = log2[R - L + 1];\n  return min(st[j][L], st[j][R - (1 << j) + 1]);\n}",
        "encouragementText": "Ace: 'True power is the luxury of a constant result.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the query time complexity for a Sparse Table?",
        "options": ["O(log N)", "O(1)", "O(N)", "Pico rule"],
        "correctAnswer": "O(1)",
        "explanation": "By picking two overlapping power-of-two intervals, we cover any arbitrary range in one step."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Overlapping Minimum",
        "explanation": "Ace: 'Min(A, B) doesn't change if A and B overlap. This is why Sparse Table works for MIN/MAX/GCD, but NOT for SUM.' Pico: 'Overlap is fine for finding the tiniest bird! 🦜'",
        "encouragementText": "Pico: 'Don't overlap the seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Why doesn't Sparse Table work for Range Sum in O(1)?",
        "options": ["Too slow", "Sum(A, B) is different if segments overlap", "Array limit", "Pico guess"],
        "correctAnswer": "Sum(A, B) is different if segments overlap",
        "explanation": "If two segments overlap, some elements are added twice, yielding a wrong sum."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Preprocessing Complexity",
        "explanation": "Ace: 'Sparse Table takes O(N log N) time and space to build. Use it only when updates are absent.'",
        "encouragementText": "Ace: 'Preparation is the sacrifice for speed.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "If N = 10^5, how many rows are in the Sparse Table?",
        "options": ["10^5", "17", "2", "Pico guess"],
        "correctAnswer": "17",
        "explanation": "log2(100,000) is approximately 16.6."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Fast Log Calculation",
        "explanation": "Ace: 'Calculating `log2(n)` with `log2()` function is slow. Precompute it in an array for absolute O(1) performance.'",
        "encouragementText": "Pico: 'Precompute everything! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Building the table (DP style).",
        "codeSnippet": "st[j][i] = min(st[j-1][i], st[j-1][i + (1 << ___ )]);",
        "correctAnswer": "j-1",
        "explanation": "Merging two results from the previous power-of-two level (j-1)."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Constant Seer",
        "explanation": "You have eliminated the log. You can see the answer before the bird has even finished the question. Ace: 'The result is instant.'",
        "encouragementText": "Pico: 'Zoom! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Static Query stats!",
        "pairs": [
          { "key": "Build", "value": "O(N log N)" },
          { "key": "Query (Min)", "value": "O(1)" },
          { "key": "Query (Sum)", "value": "O(log N)" }
        ]
      }
    ]
  },
  {
    "order": 76,
    "title": "Unit 76: Disjoint Set Union (DSU) on Trees",
    "desc": "Managing connected components and properties in tree structures.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 8.6] The Group Flock",
        "explanation": "Ace: 'DSU is usually for generic sets, but on trees, we can use it to track path properties or merge whole subtrees. With Path Compression and Union by Rank, it’s almost O(1).' Pico: 'Flocking the birds together! 🦜'",
        "codeSnippet": "int find(int i) {\n  if(parent[i] == i) return i;\n  return parent[i] = find(parent[i]);\n}",
        "encouragementText": "Ace: 'Unity is the ultimate data structure.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does Path Compression do in DSU?",
        "options": ["Deletes the tree", "Links all nodes in the find path directly to the root", "Compresses the array into a BIT", "Pico rule"],
        "correctAnswer": "Links all nodes in the find path directly to the root",
        "explanation": "This keeps the tree extremely flat, ensuring almost constant time queries."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Kruskal's Connection",
        "explanation": "Ace: 'We'll use DSU later for Kruskal's MST, but for now, imagine using it to find if two nodes are in the same branch of a broken forest.' Pico: 'Are we in the same nest? 🦜'",
        "encouragementText": "Pico: 'Same family! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Union by size.",
        "codeSnippet": "if (sz[x] < sz[y]) swap(x, y);\nparent[y] = x;\nsz[x] ___= sz[y];",
        "correctAnswer": "+",
        "explanation": "Merging the smaller set into the larger one to keep the tree depth small (O(log N) worst case before path compression)."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] DSU with Rollback",
        "explanation": "Ace: 'For some problems, we need to DELETE an edge. Path compression is hard to undo. In these cases, we only use Union by Rank and a stack to rollback changes.'",
        "encouragementText": "Ace: 'History is the log of progress and its inverse.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Can you use Path Compression if you need to rollback the DSU state?",
        "options": ["Yes", "No (It changes too many pointers permanently)", "Only if the tree is small", "Pico guess"],
        "correctAnswer": "No (It changes too many pointers permanently)",
        "explanation": "Rolling back path compression would require storing all intermediate changes, which is inefficient."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Inverse Ackermann",
        "explanation": "Ace: 'The complexity of DSU with both optimizations is α(N), which is effectively constant for any N in the universe.' Pico: 'Titan-Grade speed! 🦜'",
        "encouragementText": "Pico: 'The ultimate constant! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Find root with path compression.",
        "codeSnippet": "return parent[x] = find( ___ );",
        "correctAnswer": "parent[x]",
        "explanation": "Moving the node's parent directly to the root of the set."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Flock Leader",
        "explanation": "You have united the disparate. You can manage the connectivity of a billion nodes in constant time. Ace: 'The union is strong.'",
        "encouragementText": "Pico: 'Together we stand! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match DSU terms!",
        "pairs": [
          { "key": "Find", "value": "O(α(N))" },
          { "key": "Union", "value": "Merge groups" },
          { "key": "Path Compression", "value": "Flatten tree" }
        ]
      }
    ]
  },
  {
    "order": 77,
    "title": "Unit 77: Small to Large Merging",
    "desc": "The dsu-on-tree technique: Solving path queries without HLD.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 8.7] The Weight Optimization",
        "explanation": "Ace: 'When merging two sets of data (like maps or vectors) in a tree, ALWAYS move the smaller set into the larger one. This ensures every element is moved at most log N times.' Pico: 'Efficiency by weight! 🦜'",
        "codeSnippet": "if (cnt[u].size() < cnt[v].size()) swap(cnt[u], cnt[v]);",
        "encouragementText": "Ace: 'Constraint leads to the discovery of the logarithmic bound.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What's the total time complexity of merging N elements up a tree using Small-to-Large?",
        "options": ["O(N^2)", "O(N log^2 N) or O(N log N)", "O(N)", "Pico rule"],
        "correctAnswer": "O(N log^2 N) or O(N log N)",
        "explanation": "Each element is moved only when its containing set grows by at least double, which happens only log N times."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Sack (dsu-on-tree)",
        "explanation": "Ace: 'This technique allows you to answer subtree queries (like \"how many unique colors in this branch?\") in O(N log N) without using Segment Trees.' Pico: 'Pack the sack! 🦜'",
        "encouragementText": "Pico: 'Pack and go! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Merging set B into A.",
        "codeSnippet": "for(auto x : B) A.insert(x);\nB. ___ ();",
        "correctAnswer": "clear",
        "explanation": "Cleaning up the smaller set after its elements are safely moved."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Heaviest Child Selection",
        "explanation": "Ace: 'To implement sack, we first identify the child with the largest subtree. We process all light children, clear their info, then process the heavy child and KEEP its info.'",
        "encouragementText": "Ace: 'Logic flow defines the efficiency of memory.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Which child's information is preserved in 'dsu-on-tree'?",
        "options": ["Left", "Right", "The child with the largest subtree (Heavy Child)", "Pico guess"],
        "correctAnswer": "The child with the largest subtree (Heavy Child)",
        "explanation": "By preserving the largest set, we minimize the number of elements that must be re-processed."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Global Array Optimization",
        "explanation": "Ace: 'Instead of separate sets, use a single global array and frequency counters. Visit the light children twice, heavy child once.'",
        "encouragementText": "Pico: 'Fast counting! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "DFS order for dsu-on-tree.",
        "codeSnippet": "for(int v : adj[u]) \n  if(v != p && v != heavy) dfs(v, u, ___ );",
        "correctAnswer": "false",
        "explanation": "Processing light children and clearing their data (keep = false)."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Set Master",
        "explanation": "You have optimized the merge. You can consolidate any amount of data up a giant tree without waste. Ace: 'The growth is logarithmic.'",
        "encouragementText": "Pico: 'Sack the competition! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Merging types!",
        "pairs": [
          { "key": "Brute Force", "value": "O(N^2)" },
          { "key": "Small-to-Large", "value": "O(N log N)" },
          { "key": "HLD", "value": "O(N log^2 N) queries" }
        ]
      }
    ]
  },
  {
    "order": 78,
    "title": "Unit 78: Kruskal's Reconstruction Tree",
    "desc": "Answering bottleneck queries with an auxiliary tree.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 8.8] The Bottleneck Ghost",
        "explanation": "Ace: 'Given nodes U and V, what is the maximum edge on the path between them in the MST? We build an auxiliary tree where each edge becomes a node connecting two sub-trees.' Pico: 'The edges become the leaves! 🦜'",
        "codeSnippet": "while(find(u) != find(v)) {\n  int new_node = n + (++edge_count);\n  parent[find(u)] = new_node;\n  parent[find(v)] = new_node;\n  val[new_node] = weight(u, v);\n}",
        "encouragementText": "Ace: 'Data transformation is the highest form of analysis.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "In a Kruskal Reconstruction Tree, what does the LCA of nodes U and V represent?",
        "options": ["Their distance", "The maximum weight edge on the path between them in the MST", "Average speed", "Pico guess"],
        "correctAnswer": "The maximum weight edge on the path between them in the MST",
        "explanation": "The tree is built such that ancestor nodes hold the weights of the edges that connected their children."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Max-Min Range",
        "explanation": "Ace: 'This tree has (2N-1) nodes. All original nodes are leaves. All internal nodes represent edges. The higher the internal node, the larger the edge weight it represents.' Pico: 'Climbing the weight ladder! 🦜'",
        "encouragementText": "Pico: 'Climb high! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Property of leaf nodes in Reconstruction Tree.",
        "codeSnippet": "val[leaf] = ___ ;",
        "correctAnswer": "0",
        "explanation": "Original nodes (leaves) have no edge weight of their own."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Connectivity Query",
        "explanation": "Ace: 'You can answer \"At what edge weight did U and V first become connected?\" by querying the LCA in this tree.'",
        "encouragementText": "Ace: 'The history of connection is encoded in the height of the ancestor.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What other algorithm is typically used with Kruskal Reconstruction trees?",
        "options": ["Dijkstra", "LCA (Lowest Common Ancestor)", "Sorting", "Pico rule"],
        "correctAnswer": "LCA (Lowest Common Ancestor)",
        "explanation": "Because the answer for (U, V) is always at their LCA in the reconstruction tree."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Minimum Spanning Tree basis",
        "explanation": "Ace: 'This tree literally represents the progress of Kruskal's algorithm over time.'",
        "encouragementText": "Pico: 'Timeline tree! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "New internal node creation.",
        "codeSnippet": "int node = ++tot;\nadj[node].push_back(root_u); \nadj[node].push_back(root_v);\nval[node] = ___ ;",
        "correctAnswer": "w",
        "explanation": "The value of the internal node is the weight of the MST edge connecting the two sets."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Bottleneck Seer",
        "explanation": "You have seen the limit of the path. You know the exact weight that binds the forest. Ace: 'The threshold is identified.'",
        "encouragementText": "Pico: 'Found the narrow gate! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Reconstruction properties!",
        "pairs": [
          { "key": "Internal Nodes", "value": "Edge weights" },
          { "key": "Leaves", "value": "Original nodes" },
          { "key": "LCA(u, v)", "value": "Path bottleneck" }
        ]
      }
    ]
  },
  {
    "order": 79,
    "title": "Unit 79: Cartesian Trees",
    "desc": "The tree that represents Range Minimum Queries perfectly.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 8.9] The Heap-Sort Hybrid",
        "explanation": "Ace: 'A Cartesian Tree for an array is a binary tree where the root is the MINIMUM. Its left child is the Cartesian Tree of the left subarray, and right is right. It maintains the HEAP property and INORDER property simultaneously.' Pico: 'Min-Heap and BST in one bird! 🦜'",
        "codeSnippet": "while(!stk.empty() && arr[stk.top()] > arr[i]) {\n  left[i] = stk.top();\n  stk.pop();\n}\nif(!stk.empty()) right[stk.top()] = i;\nstk.push(i);",
        "encouragementText": "Ace: 'Dual properties lead to singular power.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the complexity to build a Cartesian Tree for N elements in a single pass?",
        "options": ["O(N log N)", "O(N) using a stack", "O(N^2)", "Pico rule"],
        "correctAnswer": "O(N) using a stack",
        "explanation": "We use a monotonic stack to find the correct insertion points in one pass."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] RMQ Connection",
        "explanation": "Ace: 'RMQ of array indices [L, R] is exactly the LCA of nodes L and R in the Cartesian tree! Dual structures strike again!' Pico: 'Another way to O(1) RMQ! 🦜'",
        "encouragementText": "Pico: 'LCA = RMQ! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Condition for monotonic stack (finding parent of current element).",
        "codeSnippet": "while(!st.empty() && val[st.top()] ___ val[i]) \n  lc[i] = st.pop();",
        "correctAnswer": ">",
        "explanation": "Popping elements larger than current to maintain the min-heap property."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Treaps and Cartesian Trees",
        "explanation": "Ace: 'A Treap is essentially a Cartesian tree where the \"priority\" values are randomly assigned. This ensures the tree stays balanced on average.'",
        "encouragementText": "Ace: 'Randomness is the defense against skewness.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "If the array is sorted [1, 2, 3, 4, 5], what does the Cartesian Tree look like?",
        "options": ["A flat line (skewed tree)", "A balanced star", "A grid", "Pico guess"],
        "correctAnswer": "A flat line (skewed tree)",
        "explanation": "Because each successive element is always the minimum (or maximum) of the remaining range."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Unique Tree",
        "explanation": "Ace: 'If all elements in the array are unique, the Cartesian Tree is unique. No other structure matches it exactly.'",
        "encouragementText": "Pico: 'One of a kind! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "The final root of the Cartesian Tree.",
        "codeSnippet": "return stk.front(); // or stk.bottom()",
        "correctAnswer": "stk[0]",
        "explanation": "The element that remains at the bottom of the monotonic stack is the global minimum (the root)."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Tree Mechanic",
        "explanation": "You have synthesized the heap and the search tree into a single masterpiece. Ace: 'The integration is complete.'",
        "encouragementText": "Pico: 'Mechanically sound! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Cartesian properties!",
        "pairs": [
          { "key": "Root", "value": "Min of range" },
          { "key": "Inorder", "value": "Same as array order" },
          { "key": "LCA(i, j)", "value": "RMQ(i, j)" }
        ]
      }
    ]
  },
  {
    "order": 80,
    "title": "Unit 80: Stage 8 Graduation (The Efficiency Architect)",
    "desc": "Claiming the Query Peak: BIT, Sparse Table, and DSU are yours.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[GRAND MISSION LORE 8.10] The Citadel of Efficiency",
        "explanation": "Ace: 'You have mastered the minimalist BIT, the instantaneous Sparse Table, and the unifying DSU. You no longer walk the forest; you manipulate its very existence through these abstract bridges.' Pico: 'Stage 8 Complete! We fly to the Tree Decompositions next! 🦜'",
        "encouragementText": "Ace: 'Brevity is the soul of performance.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Which structure should you use for O(1) Range Minimum Query if there are NO updates?",
        "options": ["Segment Tree", "Sparse Table", "BIT", "Pico guess"],
        "correctAnswer": "Sparse Table",
        "explanation": "Only Sparse Table achieves O(1) query time for RMQ via overlapping intervals."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Query Supremacy",
        "explanation": "10 units, 100 lessons. This stage has equipped you with the high-speed specialized tools for the Academic Atlas. Ace: 'Use them with intent.'",
        "encouragementText": "Pico: '80% through the 1,000-lesson gauntlet! 🦜'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does a BIT with 2D coordinates track?",
        "options": ["Rectangular sums", "Circular areas", "Depth", "Pico secret"],
        "correctAnswer": "Rectangular sums",
        "explanation": "2D BIT is for prefix sums in a matrix, allowing for O(log N * log M) area queries."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Graduation Check",
        "explanation": "Ace: 'Prove you can transition from BIT to DSU and LCA to RMQ in your mental buffers.' Pico: 'Efficiency is my middle name! 🦜'",
        "encouragementText": "Ace: 'The tool defines the limits of the solution.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Time complexity to merge two DSU sets?",
        "options": ["O(log N)", "O(α(N))", "O(N)", "Pico guess"],
        "correctAnswer": "O(α(N))",
        "explanation": "With both path compression and union by rank, it's near-constant."
      },
      {
        "type": "teaching",
        "questionText": "[FINAL SYNC] The 10x10x10 Path",
        "explanation": "You are 80% through the ultimate journey. Your next target: **Stage 9: Tree Decompositions & Paths (HLD/Centroid)**. Ace: 'The structure of paths awaits.'",
        "encouragementText": "Pico: 'Stage 9 seeds are waiting! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Final stage signal.",
        "codeSnippet": "if (efficiency_architect == true) return ___ ;",
        "correctAnswer": "GRADUATE",
        "explanation": "You have successfully mastered the Specialized Query Structures."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Architect of Efficiency",
        "explanation": "The queries are instant. The groups are unified. You are a Stage 8 Graduate. Ace: 'Welcome to the inner circle.'",
        "encouragementText": "Pico: 'Titan-Grade! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "[GRADUATION CHALLENGE] Output the status of your journey.",
        "codeSnippet": "for(int i=71; i<=80; i++) verify_efficiency(i);\nreturn ___ ;",
        "correctAnswer": "COMPLETE",
        "explanation": "The eighth decile of the 1,000-lesson curriculum for Trees is fully verified."
      }
    ]
  }
];

module.exports = stage5;
