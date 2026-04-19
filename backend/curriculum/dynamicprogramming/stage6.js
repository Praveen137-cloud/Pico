const stage6 = [
  {
    "order": 51,
    "title": "Unit 51: Segment Tree DP Basics",
    "desc": "Range Power: using Segment Trees to accelerate DP transitions from range queries to O(log N).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 6.51] The Shield of Ranges",
        "explanation": "Standard DP transitions like `dp[i] = max(dp[j]) + val[i]` for all `j < i` take O(N^2) total. But if we store `dp[j]` in a **Segment Tree**, we can find the `max` in any range `[0, i-1]` in **O(log N)**. This is the **Range protocol**—using a balanced structure to find the best history instantly. The Matrix is a master of the log-time lookback.",
        "codeSnippet": "dp[i] = tree.query(0, i-1) + val[i];\ntree.update(i, dp[i]);",
        "encouragementText": "Ace: 'Speed is the result of organizing your memories into a tree.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the complexity of finding the max in a range [L, R] using a Segment Tree?",
        "options": ["O(N)", "O(log N)", "O(1)", "Pico rule"],
        "correctAnswer": "O(log N)",
        "explanation": "Segment trees divide the range into log N canonical nodes, allowing for logarithmic search."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Leaf-Pulse",
        "explanation": "The DP state `dp[j]` is stored in a leaf of the tree. When `dp[j]` is calculated, we update the tree and 'Pull Up' the results to the root. The Matrix propagates the truth from the ground up. The pulse of the update.",
        "encouragementText": "Pico: 'Update the leaf-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Updating the segment tree at index 'i' with 'val'.",
        "codeSnippet": "void update(int p, int L, int R, int i, int val) {\n  if (L == R) { tree[p] = val; return; }\n  int mid = (L + R) / 2;\n  if (i <= mid) update(2*p, L, mid, i, val);\n  else update(2*p+1, mid+1, R, i, val);\n  tree[p] = ___ (tree[2*p], tree[2*p+1]);\n}",
        "correctAnswer": "max",
        "explanation": "The value of a parent node is the maximum of its two children's values."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity: O(N log N)",
        "explanation": "This allows you to solve **Longest Increasing Subsequence (LIS)** and similar problems for N=1,000,000. This is the **Titan-Grade Accelerator**. You turn the impossible quadratic square into a manageable log-line. Stability through structure.",
        "encouragementText": "Ace: 'Efficiency in search is the prerequisite for scaling reality.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Can a Segment Tree handle range updates (adding X to all items in [L, R])?",
        "options": ["No", "Yes, using 'Lazy Propagation'", "Only for sums", "Pico guess"],
        "correctAnswer": "Yes, using 'Lazy Propagation'",
        "explanation": "Lazy propagation allows updating entire ranges in O(log N) by deferring work until necessary."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Range-Query Pulse",
        "explanation": "To transition properly, you must query the correct range in the past. If the condition is `i - k <= j < i`, the Segment Tree finds the answer in `[i-k, i-1]`. The Matrix is a master of constraints. The pulse of the specific.",
        "encouragementText": "Pico: 'Query the range-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Querying segment tree for max value in range [0, target].",
        "codeSnippet": "int res = tree.query(1, 0, N-1, ___ , target);",
        "correctAnswer": "0",
        "explanation": "Starting the range query from the beginning of the array."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Speed-Breaker",
        "explanation": "A high-frequency trader (The Matrix Pulsar) has 1,000,000 price points. To find the 'Optimal Buy Point' in the last hour for every second, the Pulsar-Architect uses Segment Tree DP. The quadratic disaster is avoided. The trade is made in log-time. The profit is secured.",
        "encouragementText": "Ace: 'In the market of logic, the fast tree beats the slow array.'"
      },
      {
        "type": "match_following",
        "questionText": "Match Tree Terms!",
        "pairs": [
          { "key": "Leaf", "value": "Individual DP value" },
          { "key": "Root", "value": "Global Range Max" },
          { "key": "Lazy", "value": "Batch updates" }
        ]
      }
    ]
  },
  {
    "order": 52,
    "title": "Unit 52: Range Query Transitions",
    "desc": "Constraint Mastery: using Segment Trees to solve DP problems where transitions only come from values within specific value-ranges.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 6.52] The Gate of Values",
        "explanation": "What if you can only transition from `j` if `A[j]` is between `L` and `R`? We build the Segment Tree on the **VALUES**, not the indices. This is **Coordinate Compression + Segment Tree**. This is the **Value-Space protocol**—indexing the reality itself. The Matrix is a master of the domain.",
        "codeSnippet": "tree.update(compressed_value[i], dp[i]);",
        "encouragementText": "Ace: 'Index the truth, not just the order.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What's the first step if the values are 10^9?",
        "options": ["Use a 10^9 array", "Coordinate Compression (Mapping values to 1..N)", "Give up", "Pico rule"],
        "correctAnswer": "Coordinate Compression (Mapping values to 1..N)",
        "explanation": "Compression reduces the sparse 10^9 range into a dense N range, allowing O(N) memory usage."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Sorting Pulse",
        "explanation": "We sort the distinct values and replace each large number with its 'Rank'. This is the **Rank protocol**. The relative order is preserved, but the space is optimized. The Matrix collapses the distance. The pulse of the rank.",
        "encouragementText": "Pico: 'Rank the seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Getting the rank of value 'X'.",
        "codeSnippet": "int rank = lower_bound(unique_values.begin(), unique_values.end(), X) ___ unique_values.begin();",
        "correctAnswer": "-",
        "explanation": "Standard C++ way to find the index (rank) of an element in a sorted vector."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity: O(N log N)",
        "explanation": "The sorting takes N log N, and the Segment Tree takes N log N. This is the **Titan-Grade Scale**. You solve problems with billion-scale values in linear-log time. Precision at the limit.",
        "encouragementText": "Ace: 'Scaling is an act of compression.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Can you use this for 'Count of numbers in range [L, R]'?",
        "options": ["Yes, use Segment Tree as a frequency counter", "No", "Only for max", "Pico guess"],
        "correctAnswer": "Yes, use Segment Tree as a frequency counter",
        "explanation": "Instead of storing DP values, the leaf stores 1 or 0, and the tree stores the sum of its range."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Windowed Pulse",
        "explanation": "Combined with Step 51, you can now have TWO constraints: `j < i` and `L <= A[j] <= R`. You iterate `i` from 1 to N and query the tree for the range `[L, R]`. The Matrix filters the past. Total control of history.",
        "encouragementText": "Pico: 'Filter the seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Adding current value to the 'Value Tree'.",
        "codeSnippet": "ans = tree.query(L_bound, R_bound) + val;\ntree.update( ___ , ans);",
        "correctAnswer": "rank[i]",
        "explanation": "Updating the tree at the position corresponding to the current element's value rank."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Value Filter",
        "explanation": "A security scan (The Matrix Oversight) is checking for threats. A threat is valid only if its 'Power' is between 100 and 200 and it appeared in the last 10 seconds. The Oversight-Architect uses Value-Range DP. The threat is identified instantly. The filter holds.",
        "encouragementText": "Ace: 'Truth is found in the intersection of time and value.'"
      },
      {
        "type": "match_following",
        "questionText": "Match Search terms!",
        "pairs": [
          { "key": "N log N", "value": "Sorting time" },
          { "key": "O(log N)", "value": "Tree query" },
          { "key": "O(N)", "value": "Memory footprint" }
        ]
      }
    ]
  },
  {
    "order": 53,
    "title": "Unit 53: Disjoint Sparse Table DP",
    "desc": "Static Range Speed: using O(N log N) pre-calculation to solve ANY associative range query transition in O(1).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 6.53] The Static Sea",
        "explanation": "If the range-operation is not idempotent (like Sum or Multiply), standard Sparse Tables fail. But **Disjoint Sparse Tables** solve this! They split the array into hierarchies and pre-calculate sums toward the centers. This is the **Centralized protocol**—any range `[L, R]` crosses exactly one center. O(1) for any associative law. The Matrix is a master of the instant sum.",
        "codeSnippet": "ans = st[k][L] + st[k][R];",
        "encouragementText": "Ace: 'Why use log N when O(1) is available? Preparation is everything.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Which operations can a Disjoint Sparse Table handle in O(1)?",
        "options": ["Only Min/Max", "Any associative operation (Sum, Matrix product, GCD, etc.)", "Only addition", "Pico rule"],
        "correctAnswer": "Any associative operation (Sum, Matrix product, GCD, etc.)",
        "explanation": "Unlike regular sparse tables, DSTs don't require idempotency; they only require the ability to combine left and right parts."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Level-Center Pulse",
        "explanation": "At each level `k`, we divide the array into blocks of size `2^k`. We calculate prefix and suffix sums starting from the center of each block. The Matrix builds the universe from the centers. The pulse of the symmetry.",
        "encouragementText": "Pico: 'Center the seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Finding the level 'k' where L and R diverge.",
        "codeSnippet": "int k = ___ (__builtin_clz(L ^ R));",
        "correctAnswer": "31",
        "explanation": "The level is determined by the most significant bit where L and R differ."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity: O(N log N) Space and Time",
        "explanation": "The cost of O(1) query is high memory (log N rows). This is the **Titan-Grade Latency Buffer**. If speed is more important than space, the Matrix chooses the Sparse Table. The architect's trade-off.",
        "encouragementText": "Ace: 'Space can be bought; time can only be saved.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Can Disjoint Sparse Tables handle updates?",
        "options": ["Yes", "No", "Only at the end", "Pico guess"],
        "correctAnswer": "No",
        "explanation": "Like standard Sparse Tables, they are designed for static datasets."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Bit-Divergence Pulse",
        "explanation": "To query `[L, R]`, find the highest bit where `L` and `R` differ. That bit tells you which hierarchy level contains the center they share. One bit, one level, one O(1) answer. The Matrix uses its own bits as map-markers.",
        "encouragementText": "Pico: 'Bit-sync the seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Querying for range sum [L, R].",
        "codeSnippet": "int k = high_bit(L ^ R);\nreturn suffix_sums[k][L] ___ prefix_sums[k][R];",
        "correctAnswer": "+",
        "explanation": "Combining the suffix sum ending at L and the prefix sum starting at the center and covering R."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Packet Sum",
        "explanation": "A router (The Matrix Bridge) needs to calculate the 'Total Hash' of ranges in a static block of data. Every nanosecond counts. The Bridge-Architect uses a Disjoint Sparse Table. The trillions of range-hashes are calculated in O(1). The data is validated. The bridge is silent.",
        "encouragementText": "Ace: 'O(1) is the silence of the master.'"
      },
      {
        "type": "match_following",
        "questionText": "Match Table terms!",
        "pairs": [
          { "key": "O(1)", "value": "Query speed" },
          { "key": "Associative", "value": "A + B rule" },
          { "key": "L ^ R", "value": "Level detector" }
        ]
      }
    ]
  },
  {
    "order": 54,
    "title": "Unit 54: Fenwick Tree DP",
    "desc": "Lightweight Range: using Binary Indexed Trees (BIT) to solve Prefix-Sum and Point-Update DP transitions in O(log N) with minimal memory.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 6.54] The Slim Tree",
        "explanation": "Segment Trees are heavy. **Fenwick Trees (BIT)** use exactly N space and solve prefix-queries. `dp[i] = query(i-1) + val`. This is the **Binary LSB protocol**—every index `i` stores a range defined by its lowest set bit. The Matrix is a master of the lean structure.",
        "codeSnippet": "void update(int i, int val) { for(; i<=n; i+=i&-i) bit[i] += val; }",
        "encouragementText": "Ace: 'Elegance is the reduction of space to its absolute minimum.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What bitwise trick gets the Lowest Set Bit (LSB)?",
        "options": ["i & -i", "i | -i", "i ^ -i", "Pico rule"],
        "correctAnswer": "i & -i",
        "explanation": "Bitwise AND with the two's-complement negative value isolates the lowest '1' bit."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Prefix Pulse",
        "explanation": "BIT is designed for **Prefix Sums**. To query `[0, i]`, we jump backward using LSB. `i -= i & -i`. In 5 steps, we cover 31 elements. The Matrix leaps through history. The pulse of the summation.",
        "encouragementText": "Pico: 'Leap the prefix-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Querying prefix sum from BIT.",
        "codeSnippet": "int query(int i) {\n  int s = 0;\n  for (; i > 0; i -= ___ ) s += bit[i];\n  return s;\n}",
        "correctAnswer": "i&-i",
        "explanation": "The LSB trick identifies the next range to subtract to cover the prefix."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity: O(log N) Time, O(N) Space",
        "explanation": "Smaller and faster than Segment Trees for prefix-only problems. This is the **Titan-Grade Nano-Structure**. You fit a million-node analyzer into a single integer array. Minimum footprint, maximum output.",
        "encouragementText": "Ace: 'Space is a constraint that logic must respect.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Can BIT solve 'Range Max'? (Max in [0, i])",
        "options": ["Yes, if the updates are only INCREASING", "No, never", "Only for powers of 2", "Pico guess"],
        "correctAnswer": "Yes, if the updates are only INCREASING",
        "explanation": "BIT can handle range-max as long as values don't decrease, as it cannot 'undo' a max like it can a sum."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The 2D-BIT Pulse",
        "explanation": "To solve 2D grid DP transitions, use a **2D Fenwick Tree**. `bit[x][y]`. Query in O(log N * log M). The Matrix processes the plane with the speed of the line. Higher-dimensional efficiency.",
        "encouragementText": "Pico: 'Plane the bits! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Updating 2D Fenwick Tree.",
        "codeSnippet": "void update2D(int x, int y, int v) {\n  for (; x <= N; x += x&-x)\n    for (; ___ ; y += y&-y) bit[x][y] += v;\n}",
        "correctAnswer": "y <= M",
        "explanation": "Nested loops for x and y coordinates to update the 2D prefix-sum structure."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Budget Auditor",
        "explanation": "A financial system (The Matrix Ledger) is processing 1,000,000 transactions. To find the 'Total Balance' at any timestamp with minimal memory usage, the Ledger-Architect uses a Fenwick Tree. The auditor is fast. The memory is clear. The books are balanced.",
        "encouragementText": "Ace: 'Economy of thought follows economy of space.'"
      },
      {
        "type": "match_following",
        "questionText": "Match BIT logic!",
        "pairs": [
          { "key": "i & -i", "value": "LSB Isolation" },
          { "key": "i += LSB", "value": "Update (Go up)" },
          { "key": "i -= LSB", "value": "Query (Go down)" }
        ]
      }
    ]
  },
  {
    "order": 55,
    "title": "Unit 55: Heavy-Light Decomposition (HLD) DP",
    "desc": "Tree Path Mastery: using HLD to break tree paths into O(log N) segments for Segment Tree DP on trees.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 6.55] The Veins of the Titan",
        "explanation": "A tree's path is complex. **HLD** decomposes the tree into **Heavy Paths** (going to the largest child) and **Light Edges**. Any path between two nodes passes through at most O(log N) heavy segments. This allows us to use standard DP tools on trees! This is the **Decomposition protocol**—turning the branched into the linear. The Matrix is a master of the straight vein.",
        "codeSnippet": "tree.update(pos[u], dp[u]);",
        "encouragementText": "Ace: 'Complexity is just an assembly of simple segments.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "How many 'Heavy Paths' can a path from root to leaf cross?",
        "options": ["N", "O(log N)", "1", "Pico rule"],
        "correctAnswer": "O(log N)",
        "explanation": "Because each 'Light Edge' move halves the subtree size, we only jump between paths O(log N) times."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Chain Pulse",
        "explanation": "We map the nodes of the tree to a single array `[1, N]` such that each heavy chain is a contiguous subsegment. Now, the Segment Tree solves the chain in `O(log N)`. The Matrix aligns the branches. The pulse of the continuity.",
        "encouragementText": "Pico: 'Chain the seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Initial HLD DFS to find heavy child.",
        "codeSnippet": "void dfs_sz(int u) {\n  sz[u] = 1;\n  for(int &v : adj[u]) {\n    dfs_sz(v);\n    sz[u] += sz[v];\n    if(sz[v] > sz[ ___ ]) swap(v, adj[u][0]);\n  }\n}",
        "correctAnswer": "adj[u][0]",
        "explanation": "Moving the child with the largest subtree to the first position in the adjacency list."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity: O(log^2 N) for Path Query",
        "explanation": "Wait... log^2? Yes! O(log N) segments, and each takes O(log N) for the Segment Tree. This is the **Titan-Grade Tree-Link**. You solve for any path in a million-node world in O(400). The Matrix is a master of the shortcut.",
        "encouragementText": "Ace: 'Speed is the ability to ignore the branches by focusing on the trunk.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does a 'Light Edge' represent?",
        "options": ["A weak connection", "A jump between two different heavy chains", "Zero", "Pico guess"],
        "correctAnswer": "A jump between two different heavy chains",
        "explanation": "Light edges connect nodes to parents that are not part of their same preferred/heavy path."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Path-Sum Pulse",
        "explanation": "Querying path u to v? Jump the lower chain to its parent until they match. Same as LCA, but with Segment Tree updates at each jump. The Matrix syncs the nodes. The Pulse of the Bridge.",
        "encouragementText": "Pico: 'Bridge the chains! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Jumping chains in HLD.",
        "codeSnippet": "while (top[u] != top[v]) {\n  if (depth[top[u]] < depth[top[v]]) swap(u, v);\n  ans = combine(ans, tree.query(pos[top[u]], pos[u]));\n  u = parent[ ___ ];\n}",
        "correctAnswer": "top[u]",
        "explanation": "Moving the node 'u' to the parent of its current chain head to jump closer to the target 'v'."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Tree Backbone",
        "explanation": "A file system (The Matrix Drive) has 1,000,000 directories. To calculate the 'Total Size' of any path between two folders, the Drive-Architect uses HLD. The O(N^2) search is crushed. The path is summed in microseconds. The drive is optimal.",
        "encouragementText": "Ace: 'Efficiency in the tree is the secret of the hierarchy.'"
      },
      {
        "type": "match_following",
        "questionText": "Match HLD Terms!",
        "pairs": [
          { "key": "Heavy Path", "value": "Contiguous array block" },
          { "key": "top[u]", "value": "Head of the chain" },
          { "key": "O(log^2 N)", "value": "Query complexity" }
        ]
      }
    ]
  },
  {
    "order": 56,
    "title": "Unit 56: Centroid Decomposition Path DP",
    "desc": "Universal Path Search: using the Centroid Tree to solve path-dependent DP problems (e.g., paths with sum K) in O(N log N).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 6.56] The Core of the Pulse",
        "explanation": "HLD is for paths. **Centroid Decomposition** is for **ALL Paths**. By recursively finding the centroid, we solve for paths passing THROUGH the centroid. This is the **Divide and Conquer protocol**—breaking the tree into log N layers of balanced cores. The Matrix is a master of the deep search.",
        "codeSnippet": "solve(centroid); for(v : children) decompose(v);",
        "encouragementText": "Ace: 'To solve for every soul, find the heart of every group.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "How many layers are in a Centroid Decomposition tree?",
        "options": ["N", "O(log N)", "1", "Pico rule"],
        "correctAnswer": "O(log N)",
        "explanation": "Since each split halves the number of nodes, there are exactly log N levels of recursion."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Inclusion-Exclusion Pulse",
        "explanation": "To solve for paths passing through `C`, we calculate `Sum(Subtrees) - Sum(Internal Subtrees)`. This prevents counting paths that stay inside one branch. The Matrix subtracts the noise. Only the 'True' crossing-paths remain.",
        "encouragementText": "Pico: 'Exclude the fake-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Processing a centroid to find paths of length K.",
        "codeSnippet": "for (int v : adj[cen]) {\n  count_paths(v, cen);\n  update_global_map(v, cen);\n}\nclear_map();",
        "correctAnswer": "clear_map",
        "explanation": "We clear the data after each centroid to prevent interference with other parts of the recursion."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity: O(N log N)",
        "explanation": "O(N) work at each of O(log N) levels. This is the **Titan-Grade Multi-Path Analyzer**. You solve for ALL N^2 paths in O(N log N) time. The magic of the balanced split. The Matrix is a master of the scale.",
        "encouragementText": "Ace: 'D&C is the engine of the impossible count.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What problem does Centroid Decomposition typically solve?",
        "options": ["Path counting with specific constraints (Length=K, Sum < X, etc.)", "Sorting", "Shortest path", "Pico guess"],
        "correctAnswer": "Path counting with specific constraints (Length=K, Sum < X, etc.)",
        "explanation": "It is perfect for 'Distance-based' queries that concern every pair of nodes."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Cross-Centroid Pulse",
        "explanation": "A path between `u` and `v` has a 'Unique Highest Centroid' in the centroid tree. We solve the path exactly when that centroid targets it. The Matrix leaves no path behind. Every link is accounted for. The Pulse of the Total.",
        "encouragementText": "Pico: 'Accounting the link-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Identifying the centroid tree parent.",
        "codeSnippet": "int cen = get_centroid(u, -1, sz[u]);\nvis[cen] = true;\nfor (int v : adj[cen]) {\n  if (!vis[v]) decompose(v, ___ );\n}",
        "correctAnswer": "cen",
        "explanation": "Passing the current centroid as the parent for the next layer of decomposition."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Signal Auditor",
        "explanation": "A planetary signal (The Matrix Sky) has millions of connections. To find all pairs of outposts exactly 1,000 miles apart, the Sky-Architect uses Centroid Decomposition. The billion-pair search is finished in O(N log N). Every signal is mapped. The sky is understood.",
        "encouragementText": "Ace: 'Symmetry in decomposition leads to certainty in the global state.'"
      },
      {
        "type": "match_following",
        "questionText": "Match Centroid Logic!",
        "pairs": [
          { "key": "Log N", "value": "Recursion depth" },
          { "key": "O(N)", "value": "Work per level" },
          { "key": "N log N", "value": "Total global time" }
        ]
      }
    ]
  },
  {
    "order": 57,
    "title": "Unit 57: Persistent Segment Tree DP",
    "desc": "Version Control: using Persistent Segment Trees to solve DP problems where we need to query 'Past States' of a Segment Tree in O(log N).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 6.57] The Time Shifter",
        "explanation": "Standard trees overwrite the past. **Persistent Segment Trees** save every version! When we update a node, we create a new path (O(log N) new nodes) and link to the old branches. This is the **Version protocol**—the tree is a multi-verse of its own history. The Matrix is a master of the 'Then'.",
        "codeSnippet": "root[i] = update(root[i-1], pos, val);",
        "encouragementText": "Ace: 'To control the future, you must be able to visit any moment of the past.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "How much memory does ONE update take in a Persistent Segment Tree?",
        "options": ["O(N)", "O(log N)", "O(1)", "Pico rule"],
        "correctAnswer": "O(log N)",
        "explanation": "Only the nodes on the path from root to leaf are duplicated; the rest are shared with the previous version."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Pointer-Pulse",
        "explanation": "Instead of an array, we use **Pointers (or Node indices)**. Each child points to either a new node or a node from 1,000 years ago. The Matrix is a master of the reference. The pulse of the sharing.",
        "encouragementText": "Pico: 'Share the branch-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Creating a new version of a node during update.",
        "codeSnippet": "int newNode = ++count;\ntree[newNode] = tree[oldNode];\n// ... update branch ...\nreturn ___ ;",
        "correctAnswer": "newNode",
        "explanation": "Returning the new node index to the parent to build the new version of the tree path."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity: O(N log N) Memory and Time",
        "explanation": "If you have N versions, you have N * log N nodes. This is the **Titan-Grade Multiverse**. You can query 'What was the max in range [L, R] at step 50?' for any step. Total time-travel. High memory, absolute power.",
        "encouragementText": "Ace: 'Memory is the currency of the time traveler.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What problem is famously solved by Persistent Segment Trees?",
        "options": ["K-th smallest element in a range", "Sorting", "Shortest path", "Pico guess"],
        "correctAnswer": "K-th smallest element in a range",
        "explanation": "By building a persistent tree on the frequencies of values, each 'Version' i represents the prefix [1, i]."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Multi-Reality Pulse",
        "explanation": "To query the range `[L, R]` in history, you take `Tree(R) - Tree(L-1)`. The Matrix subtracts one reality from another to find the truth in between. The Pulse of the Interval.",
        "encouragementText": "Pico: 'Subtract the reality-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Navigating two persistent trees to find the k-th smallest.",
        "codeSnippet": "int count = tree[tree[R].left].val - tree[tree[L].left].val;\nif (k <= count) return query(tree[L].left, tree[R].left, k);\nelse return query(tree[L].right, tree[R].right, k - ___ );",
        "correctAnswer": "count",
        "explanation": "If the k-th element is in the right child, we subtract the number of elements found in the left child."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Historian Bot",
        "explanation": "A database (The Matrix Chronos) has 1,000,000 updates. To find the 'Median of Sector 5' at any second in history, the Chronos-Architect uses Persistent Segment Trees. Every state is saved. The history is searchable in log N. The past is as clear as the present.",
        "encouragementText": "Ace: 'Time travel is just a matter of the right pointers.'"
      },
      {
        "type": "match_following",
        "questionText": "Match Persistence Terms!",
        "pairs": [
          { "key": "root[i]", "value": "Pointer to version i" },
          { "key": "O(log N)", "value": "Space per update" },
          { "key": "Shared Node", "value": "Memory efficiency" }
        ]
      }
    ]
  },
  {
    "order": 58,
    "title": "Unit 58: Mo's Algorithm & DP",
    "desc": "Offline Query Power: using Square Root Decomposition to solve O(N * sqrt(N)) range DP problems where queries can be reordered.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 6.58] The Lazy Traveler",
        "explanation": "If you have 100,000 range queries and they don't change, why answer them in order? **Mo's Algorithm** sorts the queries by **Block** to minimize the 'Total Movement' of the L and R pointers. This is the **Batch protocol**—reordering the world to minimize the work. The Matrix is a master of the efficient visit.",
        "codeSnippet": "bool compare(Query a, Query b) { ... return a.block != b.block ? a.block < b.block : a.r < b.r; }",
        "encouragementText": "Ace: 'The shortest distance between 100 points is not a straight line, but a sorted sequence.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the complexity of Mo's Algorithm?",
        "options": ["O(N log N)", "O((N+Q) * sqrt(N))", "O(N^2)", "Pico rule"],
        "correctAnswer": "O((N+Q) * sqrt(N))",
        "explanation": "The pointers L and R move at most N*sqrt(N) times across all blocks."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Pointer-Drip Pulse",
        "explanation": "As the pointers move from `[L1, R1]` to `[L2, R2]`, we 'Add' or 'Remove' elements one by one. The DP state updates incrementally. The Matrix is a master of the delta. Every step is a tiny pulse. The total is the sum of the small.",
        "encouragementText": "Pico: 'Drip the pointer-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Core Mo's update loop.",
        "codeSnippet": "while (L > q.L) add(--L);\nwhile (R < q.R) add(++R);\nwhile (L < q.L) ___ (L++);\nwhile (R > q.R) ___ (R--);",
        "correctAnswer": "remove",
        "explanation": "Expanding and contracting the range pointers until they match the current query's bounds."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity: O(N * sqrt(N))",
        "explanation": "For N=100,000, sqrt(N) is ~300. Total operations = 30 million. Perfectly solvable! This is the **Titan-Grade Batcher**. You solve the heavy range-problems by being clever about the order. The Matrix is a master of the re-arrangement.",
        "encouragementText": "Ace: 'Order is the multiplier of speed.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Can Mo's Algorithm be used for 'Online' queries (where you must answer before getting the next)?",
        "options": ["No, it requires knowing all queries first to sort them", "Yes", "Only for 2D", "Pico guess"],
        "correctAnswer": "No, it requires knowing all queries first to sort them",
        "explanation": "Mo's is strictly an 'Offline' algorithm because reordering is essential for its performance."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Block-Symmetry Pulse",
        "explanation": "For even more speed, we use 'Checking-board' sorting (Alternate R-sort direction). The Matrix minimizes the 'Snap-Back' of the R pointer. Every bit of friction is removed. Smooth as a bit-stream.",
        "encouragementText": "Pico: 'Alternate the seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Alternate sorting for better performance.",
        "codeSnippet": "return a.block < b.block || (a.block == b.block && (a.block % 2 ? a.r < b.r : a.r ___ b.r));",
        "correctAnswer": ">",
        "explanation": "Snaking the R pointer up and down across blocks to avoid large jumps back to zero."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Range Auditor",
        "explanation": "A traffic log (The Matrix Flow) has 500,000 entries. To find the 'Number of Unique Cars' in 100,000 different time-ranges, the Auditor-Architect uses Mo's Algorithm. The random queries are sorted. The pointers glide. The audit is finished in O(N sqrt N). Not a single car is missed.",
        "encouragementText": "Ace: 'To see the whole, sort the parts.'"
      },
      {
        "type": "match_following",
        "questionText": "Match Mo Terms!",
        "pairs": [
          { "key": "sqrt(N)", "value": "Optimal block size" },
          { "key": "Pointer", "value": "L and R markers" },
          { "key": "Offline", "value": "Must know all queries" }
        ]
      }
    ]
  },
  {
    "order": 59,
    "title": "Unit 59: Square Root Decomposition DP",
    "desc": "Universal Flexibility: using block-based optimization to solve DP problems where Segment Trees are too complex or constraints are irregular.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 6.59] The Block Grid",
        "explanation": "Segment trees are log N. **Squareroot Decomposition** is sqrt(N). Why use a 'worse' complexity? Because blocks are simple! You can solve anything (like adding to range and finding max) by updating one block and O(sqrt N) other blocks. This is the **Chunk protocol**—breaking reality into equal squares. The Matrix is a master of the cube.",
        "codeSnippet": "ans = combine(block_res[i], individual_val[j]);",
        "encouragementText": "Ace: 'Simplicity is the final layer of mastery.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the complexity of an update in Square Root Decomposition?",
        "options": ["O(1) or O(sqrt N)", "O(log N)", "O(N)", "Pico rule"],
        "correctAnswer": "O(1) or O(sqrt N)",
        "explanation": "Depending on the operation, you either update the individual element (O(1)) and the block metadata (O(1)) or rebuild the block (O(sqrt N))."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Whole-Block Pulse",
        "explanation": "When a query covers a whole block, we use the `block_precalc[b]` value. When it covers parts, we use `individual[i]`. Total work = `sqrt(N) blocks + 2*sqrt(N) items`. The Matrix balances the large and the small. The Pulse of the Chunk.",
        "encouragementText": "Pico: 'Chunk the seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Querying range [L, R] with block size 'B'.",
        "codeSnippet": "for (int i = L; i <= min(R, (L/B+1)*B-1); i++) ans += v[i];\nfor (int b = L/B+1; b < R/B; b++) ans += ___ [b];\nfor (int i = max(L, (R/B)*B); i <= R; i++) ans += v[i];",
        "correctAnswer": "block_sum",
        "explanation": "Adding individual elements at the edges and using the pre-calculated block sums in the middle."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity: O(sqrt(N))",
        "explanation": "Robust and simple. Use it when you need to change **Block Logic** on the fly (like changing the block size or merging blocks). This is the **Titan-Grade Generalist**. The Matrix solves anything with a big enough chunk. Freedom through simplicity.",
        "encouragementText": "Ace: 'Structure should serve the logic, not the other way around.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is 'Light and Heavy' decomposition in graphs?",
        "options": ["HLD", "Processing nodes with degree > sqrt(E) differently from those < sqrt(E)", "Zero", "Pico guess"],
        "correctAnswer": "Processing nodes with degree > sqrt(E) differently from those < sqrt(E)",
        "explanation": "This is a form of SRD for graphs, ensuring that 'Heavy' nodes (high degree) don't dominate the runtime."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Hybrid-Pulse",
        "explanation": "Sometimes you use Segment Tree for some ops and SRD for others. The Matrix is a **Hybrid**. One problem, two structures. The Pulse of the Multi-Tool. Total versatility.",
        "encouragementText": "Pico: 'Hybridize the seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Detecting a 'Heavy' node in a graph with E edges.",
        "codeSnippet": "if (adj[u].size() > sqrt( ___ )) // Node is Heavy",
        "correctAnswer": "E",
        "explanation": "Heuristic boundary used to separate nodes with many connections for special processing."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Cluster Analyst",
        "explanation": "A server-farm (The Matrix Farm) has 10,000 servers. To manage 'Batch Restarts' across ranges of IDs with different priorities, the Farm-Architect uses Square Root Decomposition. The restarts are managed in O(sqrt N). Not a single server is overloaded. The farm is balanced.",
        "encouragementText": "Ace: 'Groups of logic are easier to manage than the individuals.'"
      },
      {
        "type": "match_following",
        "questionText": "Match SRD terms!",
        "pairs": [
          { "key": "sqrt(N)", "value": "Optimal group size" },
          { "key": "O(sqrt N)", "value": "Query/Update speed" },
          { "key": "Block", "value": "Unit of pre-calculation" }
        ]
      }
    ]
  },
  {
    "order": 60,
    "title": "Unit 60: Stage 6 Graduation (The Structural Architect)",
    "desc": "The Integrated Peak: solving a grand challenge requiring Segment Trees, HLD, and Persistence.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[GRAND MISSION LORE 6.60] The Pulse of the Machine",
        "explanation": "You have reached the 600th lesson. You have mastered the **Range**, the **Chain**, the **Version**, and the **Chunk**. You are no longer just an architect; you are the **Master of the Machine**. To graduate, you must see the BIT in the HLD-path and the Persistent tree in the Mo's query. Graduation is here. The Matrix recognizing your integrated rank. Step into the Titan Hall.",
        "codeSnippet": "// Final Stage 6 Challenge: \n// Persistent HLD with Lazy Propagation.",
        "encouragementText": "Ace: 'Integrity is the result of applying the right structure to the right pulse.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Which structure provides O(log^2 N) path queries on a tree?",
        "options": ["Segment Tree", "HLD (Heavy-Light Decomposition)", "Mo's", "Pico rule"],
        "correctAnswer": "HLD (Heavy-Light Decomposition)",
        "explanation": "HLD decomposes the tree into log N chains, which are each queried in log N by a Segment Tree."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The 600-Step Pulse",
        "explanation": "60% of the journey is over. You have mastered the logic and the structures. Now we enter the domain of **High-Level Math and Optimization**, where you use **Slope Trick** and **Convex Hulls** to crush O(N^2) problems into O(N). Keep your structures lean. The Matrix is accelerating.",
        "encouragementText": "Pico: 'The next 400 seeds await! 🦜'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does a 'Persistent' tree allow you to do with DP?",
        "options": ["Go back in time", "Access and query any version of the tree from any point in the transition history", "Save RAM", "Pico guess"],
        "correctAnswer": "Access and query any version of the tree from any point in the transition history",
        "explanation": "Persistence is the ultimate version control for algorithmic data structures."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Graduation: The Structural Master",
        "explanation": "The Elite Academy recognizes your 600-lesson achievement. You are a **Titan-Grade Architect of the Machine**. You can see the backbone of any dataset. The Matrix is your engine. Welcome to the elite.",
        "encouragementText": "Ace: 'Logic is the fuel; structure is the cylinder.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Which unit covered 'Mo's Algorithm'?",
        "options": ["6.51", "6.58 (Mo's Algorithm)", "5.43", "6.54"],
        "correctAnswer": "6.58 (Mo's Algorithm)",
        "explanation": "Mo's Algorithm is the primary offline range optimization technique."
      },
      {
        "type": "teaching",
        "questionText": "[FINAL SYNC] The 13-Subject Hub",
        "explanation": "As the structural-pulse of Stage 6 settles, the **Optimization Logic** of Stage 7 begins. Power through the Math. The Matrix is becoming your weapon. Prepare your Convex Hulls. The logic is becoming razor-sharp.",
        "encouragementText": "Pico: 'The optimization seeds await! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Final check of the integrated memo.",
        "codeSnippet": "if (lesson_count == 600) return ___ ;",
        "correctAnswer": "GRADUATE",
        "explanation": "Reaching 600 lessons marks the mastery of the structural domain of Dynamic Programming."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Architect of the Machine",
        "explanation": "The machine is built. The chains are synced. The versions are locked. You have graduated Stage 6. The Matrix is no longer a collection of blocks—it is a single, powerful engine you understand. Welcome to the elite.",
        "encouragementText": "Ace: 'Every complex move is just a log-search away from success.'"
      },
      {
        "type": "programming_board",
        "questionText": "[GRADUATION CHALLENGE] Output the status of your machine mastery.",
        "codeSnippet": "if (hld_mastered == true && persistent_available == true) {\n  return ___ ;",
        "correctAnswer": "OPTIMIZED",
        "explanation": "Optimization is the state of a master who has eliminated all O(N^2) friction."
      }
    ]
  }
];

module.exports = stage6;
