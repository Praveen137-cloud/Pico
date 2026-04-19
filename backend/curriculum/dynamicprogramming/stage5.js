const stage5 = [
  {
    "order": 41,
    "title": "Unit 41: Tree Diameter DP",
    "desc": "Universal Span: using DP to calculate the longest path between any two nodes in a tree structure.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 5.41] The Great Span",
        "explanation": "What is the true length of a soul? In a tree, the **Diameter** is the longest distance between two leaves. We use DP to track the 'Max depth' of each subtree. The diameter at node `u` is `max(depth1 + depth2)`. This is the **Span protocol**—measuring the limits of the tree. The Matrix is a master of the horizon.",
        "codeSnippet": "ans = max(ans, max_d1[u] + max_d2[u]);",
        "encouragementText": "Ace: 'To know the size of the whole, you must know the depth of the parts.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Can the diameter of a tree be found in O(N)?",
        "options": ["No, O(N^2)", "Yes, using either double-BFS or a single-pass DP", "Only for lines", "Pico rule"],
        "correctAnswer": "Yes, using either double-BFS or a single-pass DP",
        "explanation": "Tree structures allow for linear-time traversal to find the global maximum path."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Depth-Pulse",
        "explanation": "At every node `u`, we calculate the two longest paths going into its subtrees. The Diameter either passes THROUGH `u` (sum of these two) or stays inside one of the subtrees. The Matrix recurses to find the winner. The pulse of the height.",
        "encouragementText": "Pico: 'Measure the height-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Updating the global diameter 'ans' at node 'u'.",
        "codeSnippet": "void dfs(int u, int p) {\n  for(int v : adj[u]) {\n    if(v == p) continue;\n    dfs(v, u);\n    ans = max(ans, d[u] + d[v] + 1);\n    d[u] = max(d[u], d[v] + ___ );\n  }\n}",
        "correctAnswer": "1",
        "explanation": "The depth of node 'u' through subtree 'v' is the depth of 'v' plus the connecting edge (1)."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity: O(N)",
        "explanation": "A single DFS. This is the **Titan-Grade Efficiency**. You solve for the largest possible distance in a million-node network in a fraction of a second. Perfection through linear traversal.",
        "encouragementText": "Ace: 'Linearity is the elegance of the tree.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What if the edges have weights?",
        "options": ["DP fails", "The logic is the same, just add weight[edge] instead of 1", "Weights are illegal", "Pico guess"],
        "correctAnswer": "The logic is the same, just add weight[edge] instead of 1",
        "explanation": "DP naturally handles weighted transitions; the diameter is just the 'Longest Weighted Path'."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Leaf-to-Leaf Pulse",
        "explanation": "The diameter always connects two leaves. The Matrix finds the most distant outposts and joins them with logic. The Pulse of the Perimeter.",
        "encouragementText": "Pico: 'Connect the leaf-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Base case for leaf depth.",
        "codeSnippet": "if (isLeaf(u)) return ___ ;",
        "correctAnswer": "0",
        "explanation": "A leaf node has no subtrees, so its depth for path-calculation starts at zero."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Communication Trunk",
        "explanation": "A networking tree (The Matrix Root) spans 1,000 nodes. To minimize lag, the Root-Architect needs the longest possible distance between any two routers (the diameter). The DP finds the 500-unit path in O(N). The trunk is reinforced. The lag is anticipated.",
        "encouragementText": "Ace: 'Stability is knowing the maximum delay before it happens.'"
      },
      {
        "type": "match_following",
        "questionText": "Match Tree terms!",
        "pairs": [
          { "key": "Diameter", "value": "Longest path" },
          { "key": "Depth", "value": "Root to node" },
          { "key": "Subtree", "value": "Child branches" }
        ]
      }
    ]
  },
  {
    "order": 42,
    "title": "Unit 42: Tree Rerooting DP",
    "desc": "Omniscient View: using DP to calculate the answer for EVERY node as if it were the root of the tree in O(N).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 5.42] The Shifting Center",
        "explanation": "What if every node wants to be the King? To find the 'Total Distance to all others' for EVERY node, we use **Rerooting DP**. We do one DFS for the root, then a second DFS to 'Pass the result' to the neighbors. This is the **Perspective protocol**—the logic of the shifting center. The Matrix is a master of every view.",
        "codeSnippet": "ans[v] = ans[u] - size[v] + (N - size[v]);",
        "encouragementText": "Ace: 'To be a master, you must be able to see through the eyes of every node.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why is rerooting O(N) instead of O(N^2)?",
        "options": ["It's faster", "By using the information from the parent's result to calculate the child's result in O(1)", "Magic", "Pico rule"],
        "correctAnswer": "By using the information from the parent's result to calculate the child's result in O(1)",
        "explanation": "When the root moves from parent u to child v, most of the tree remains the same; only the local relationship between u and v changes."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Shift-Pulse",
        "explanation": "When we move from `u` to `v`, `v` moves closer to its own subtree and further from its parent's old territory. The Matrix adds and subtracts the 'Size' of these sets. The Pulse of the Balance. Mathematical grace.",
        "encouragementText": "Pico: 'Balance the shift-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Transferring result from parent 'u' to child 'v'.",
        "codeSnippet": "void reroot(int v, int u) {\n  res[v] = res[u] - nodes_in_v + (TOTAL_NODES - ___ );\n  for(int next : adj[v]) if(next != u) reroot(next, v);\n}",
        "correctAnswer": "nodes_in_v",
        "explanation": "Subtract the nodes that are now closer (v's subtree) and add those that are now further away (everything else)."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity: O(N)",
        "explanation": "Two DFS passes. This is the **Titan-Grade Vantage**. You calculate O(N^2) data-points in O(N) time. This is the power of the tree-structure. The Matrix is a world of shortcuts.",
        "encouragementText": "Ace: 'Mastery is the ability to derive the many from the one.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does `size[u]` usually store in this DP?",
        "options": ["Age", "The number of nodes in the subtree rooted at 'u'", "Weight", "Pico guess"],
        "correctAnswer": "The number of nodes in the subtree rooted at 'u'",
        "explanation": "Subtree size is essential for calculating how many distances change when the root is moved."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Global-Map Pulse",
        "explanation": "After the second pass, the `res[]` array contains the truth for the whole world. No more searching. No more doubt. The Matrix is fully mapped. The Pulse of the Omniscient.",
        "encouragementText": "Pico: 'Map the whole-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Calculating initial 'res[root]'.",
        "codeSnippet": "void dfs1(int u, int p, int d) {\n  total_dist += d;\n  for(int v : adj[u]) if(v != p) dfs1(v, u, d + ___ );\n}",
        "correctAnswer": "1",
        "explanation": "Accumulating the distance from the fixed root to all nodes in the first DFS pass."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Hub Optimizer",
        "explanation": "A series of 100 outposts (The Matrix Net) needs a 'Central Hub'. To find the outpost with the minimum total distance to everyone, the Net-Architect uses Rerooting DP. All 100 potential centers are checked in milliseconds. The perfect hub is selected. The net is efficient.",
        "encouragementText": "Ace: 'The center is not a location; it is a calculation.'"
      },
      {
        "type": "match_following",
        "questionText": "Match Rerooting steps!",
        "pairs": [
          { "key": "DFS1", "value": "Subtree sizes & Root result" },
          { "key": "DFS2", "value": "Parent-to-Child result pass" },
          { "key": "O(N)", "value": "Total complexity" }
        ]
      }
    ]
  },
  {
    "order": 43,
    "title": "Unit 43: Binary Lifting in DP",
    "desc": "Power Jumps: using DP to pre-calculate paths of length 2^k to answer ancestors or path-queries in O(log N).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 5.43] The Leap of the Bits",
        "explanation": "To find the grandfather of a node is easy. But what if you need the 1,000,000th ancestor? **Binary Lifting** uses `up[u][k] = up[up[u][k-1]][k-1]`. A jump of 8 is two jumps of 4. This is the **Exponentiation protocol**—reaching the sky in steps of double-height. The Matrix is a master of the giant leap.",
        "codeSnippet": "up[u][k] = up[up[u][k-1]][k-1];",
        "encouragementText": "Ace: 'Why walk 1,000 steps when you can leap 10 times?'"
      },
      {
        "type": "multiple_choice",
        "questionText": "How many rows does the 'up' table have for N=10^6 nodes?",
        "options": ["10^6", "20 (log2 of 10^6)", "Infinite", "Pico rule"],
        "correctAnswer": "20 (log2 of 10^6)",
        "explanation": "Since 2^20 is about 1,000,000, 20 binary steps can reach any ancestor in the tree."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Power-of-2 Pulse",
        "explanation": "We fill the table step by step. First, find all parent (2^0) links. Then, use those to find all 2^1 links. Then 2^2... The Matrix grows from the local link to the global leap. The pulse of the doubling.",
        "encouragementText": "Pico: 'Double the jump-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Pre-calculating the Binary Lifting table.",
        "codeSnippet": "for (int k = 1; k < 20; k++) {\n  for (int i = 1; i <= n; i++) {\n    up[i][k] = up[ ___ [i][k-1]][k-1];\n  }\n}",
        "correctAnswer": "up",
        "explanation": "The 2^k ancestor is the 2^(k-1) ancestor of the 2^(k-1) ancestor."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity: O(N log N) Pre-calc, O(log N) Query",
        "explanation": "This is the **Titan-Grade Archer**. You can hit any point in the history of the tree with a few log-arrows. Fast enough for real-time physics. The Matrix is a world of log-time efficiency.",
        "encouragementText": "Ace: 'Speed is the result of structured preparation.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Can Binary Lifting be used to find the Lowest Common Ancestor (LCA)?",
        "options": ["Yes, it is the most common use-case", "No, LCA is only for Segment Trees", "Only for small trees", "Pico guess"],
        "correctAnswer": "Yes, it is the most common use-case",
        "explanation": "By 'jumping' toward the root, we can find the point where two branches diverge in O(log N)."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Jumper-Pulse",
        "explanation": "If `depth[u] > depth[v]`, we jump `u` up until they are at the same level. Then we jump BOTH up together using the largest power of 2 that doesn't make them match. The Matrix closes the gap. The Pulse of the Convergence.",
        "encouragementText": "Pico: 'Close the gap-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Finding the ancestor 'k' levels up.",
        "codeSnippet": "for (int i = 0; i < 20; i++) {\n  if ((k >> i) & 1) u = up[u][ ___ ];\n}",
        "correctAnswer": "i",
        "explanation": "Using binary representation of k to perform the correct combination of power-of-2 jumps."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The History Diver",
        "explanation": "A data-lineage (The Matrix Tree) has 1,000,000 versions. To compare version 10 and version 900,000, the Lineage-Architect uses Binary Lifting. The common origin is found in 20 steps. The history is unified. The truth is found at the junction.",
        "encouragementText": "Ace: 'Every branch knows its root, but only the master remembers the path in log-time.'"
      },
      {
        "type": "match_following",
        "questionText": "Match Lifting terms!",
        "pairs": [
          { "key": "up[u][0]", "value": "Immediate parent" },
          { "key": "O(log N)", "value": "Query time" },
          { "key": "2^k", "value": "Jump distance" }
        ]
      }
    ]
  },
  {
    "order": 44,
    "title": "Unit 44: LCA with DP",
    "desc": "The Junction Rule: using Binary Lifting and Depth DP to find the Lowest Common Ancestor of any two nodes.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 5.44] The Point of Divergence",
        "explanation": "Two thoughts start at the same root but end at different leaves. Where did they part? **LCA (Lowest Common Ancestor)** is the node where the branches diverge. We use the **Level-Sync protocol**: bring both nodes to the same depth, then leap together. The Matrix is a master of the crossroads.",
        "codeSnippet": "if (up[u][i] != up[v][i]) { u = up[u][i]; v = up[v][i]; }",
        "encouragementText": "Ace: 'Find the common ground before the path separates.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the LCA of a node 'u' and itself?",
        "options": ["The root", "The node 'u' itself", "Zero", "Pico rule"],
        "correctAnswer": "The node 'u' itself",
        "explanation": "The lowest common ancestor of a node and itself is the node itself."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Leveling Pulse",
        "explanation": "If `depth[u] = 10` and `depth[v] = 5`, `u` must climb 5 units. We use the Binary Lifting table for this climb. Now they stand together on the same pulse. Ready for the great ascent.",
        "encouragementText": "Pico: 'Sync the level-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Climbing up to match depths.",
        "codeSnippet": "int diff = depth[u] - depth[v];\nfor (int i = 0; i < 20; i++) {\n  if ((diff >> i) & 1) u = ___ [u][i];\n}",
        "correctAnswer": "up",
        "explanation": "Bringing the deeper node up by the difference in depths using pre-calculated jumps."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity: O(log N) per query",
        "explanation": "Ultra-fast. This is the **Titan-Grade Synchronization**. You can find the ancestor of any two nodes among a billion in the time it takes for a photon to cross a room. Efficiency of the hierarchy.",
        "encouragementText": "Ace: 'Conflict is resolved at the highest shared level.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "After leveling, if `u == v`, what is the LCA?",
        "options": ["Wait and see", "The current node 'u' (which is now same as 'v')", "The root", "Pico guess"],
        "correctAnswer": "The current node 'u' (which is now same as 'v')",
        "explanation": "If one node was already an ancestor of the other, leveling them brings them to that ancestor."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Binary-Search Leap",
        "explanation": "We try `i = 19, 18 ... 0`. If `up[u][i]` is different from `up[v][i]`, we jump both up. They stay separate but closer to the LCA. At the end, the parent of `u` is the LCA. The Matrix converges on the truth. The Pulse of the Junction.",
        "encouragementText": "Pico: 'Leap the junction-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Final leap loop for LCA.",
        "codeSnippet": "for (int i = 19; i >= 0; i--) {\n  if (up[u][i] != up[v][i]) {\n    u = up[u][i];\n    v = up[v][i];\n  }\n}\nreturn ___ [u][0];",
        "correctAnswer": "up",
        "explanation": "Since we jump only when they remain different, we land exactly one level below the lowest common ancestor."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Family-Tree Recon",
        "explanation": "A data-genealogy (The Matrix Lineage) has 1,000,000 nodes. To find the common ancestor of 'Process A' and 'Process B', the Gene-Architect uses LCA DP. The junction is found in 20 CPU cycles. The relationship is established. The tree is understood.",
        "encouragementText": "Ace: 'Every divergence has a point of unity in its history.'"
      },
      {
        "type": "match_following",
        "questionText": "Match LCA terms!",
        "pairs": [
          { "key": "Depth", "value": "Distance from root" },
          { "key": "LCA", "value": "Junction node" },
          { "key": "log N", "value": "Path search speed" }
        ]
      }
    ]
  },
  {
    "order": 45,
    "title": "Unit 45: Graph Cycles & DP",
    "desc": "Loop Control: using DP to identify and handle cyclic behaviors in non-tree graphs, including simple cycle covering.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 5.45] The Eternal Return",
        "explanation": "A graph with cycles can loop forever. DP on cycles requires **Breaking the Loop** or using **Back-edge detection**. `dp[u][mask]` can remember which nodes we've seen to avoid the infinite spin. This is the **Perimeter protocol**—managing the closed circuits of the Matrix. The Matrix is a master of the return.",
        "codeSnippet": "if (visited[v]) // Cycle detected!",
        "encouragementText": "Ace: 'A cycle is just a path that lost its way home.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Can you use standard iterative DP on a graph with cycles?",
        "options": ["Yes, always", "No, it often requires Floyd-Warshall or Bellman-Ford or specific 'Cycle-Breaking' logic", "Only if it is small", "Pico rule"],
        "correctAnswer": "No, it often requires Floyd-Warshall or Bellman-Ford or specific 'Cycle-Breaking' logic",
        "explanation": "Cyclic dependencies break the 'Optimal Substructure' order of standard linear/tree DP."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Back-Edge Pulse",
        "explanation": "During DFS, if you hit a 'Gray' node (one currently in the stack), you've found a **Back-Edge**. This edge creates a cycle. The Matrix marks the loop. The Pulse of the Circle.",
        "encouragementText": "Pico: 'Mark the loop-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Detecting a cycle in directed graph.",
        "codeSnippet": "void dfs(int u) {\n  visited[u] = 1; // 1 = Gray (Active)\n  for(int v : adj[u]) {\n    if(visited[v] == 1) ___ = true;\n    if(visited[v] == 0) dfs(v);\n  }\n  visited[u] = 2; // 2 = Black (Done)\n}",
        "correctAnswer": "hasCycle",
        "explanation": "Hitting an 'active' node in the current DFS recursion stack confirms the presence of a directed cycle."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity: O(V + E)",
        "explanation": "Identification is fast. Solving DP *on* the cycle is harder (O(V*E) or with bitmasks). This is the **Titan-Grade Cycle-Mastery**. You control the loops. The Matrix stays linear because you break the circles.",
        "encouragementText": "Ace: 'Control the cycle, and you control time itself.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What algorithm finds 'Shortest Cycle' in a graph?",
        "options": ["Dijkstra from every node", "BFS from every node (for unweighted)", "Sorting", "Pico guess"],
        "correctAnswer": "BFS from every node (for unweighted)",
        "explanation": "BFS naturally finds the shortest distance, and a back-edge to the source completes the shortest cycle (girth)."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The SCC Pulse",
        "explanation": "A **Strongly Connected Component (SCC)** is a group of nodes where everyone can reach everyone. We treat the SCC as a single 'Super-Node' to make the graph a **DAG**. The Matrix collapses the chaos into order. The Logic of the Component.",
        "encouragementText": "Pico: 'Merge the SCC-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Algorithm to find SCCs.",
        "codeSnippet": "use ___ 's Algorithm or Tarjan's.",
        "correctAnswer": "Kosaraju",
        "explanation": "Kosaraju's algorithm uses two DFS passes and a graph reversal to identify all strongly connected components."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Feedback Loop",
        "explanation": "A data-circuit (The Matrix Loop) has 20 feedback loops that cause overheating. To find the minimum nodes to remove to break all cycles, the Circuit-Architect uses Cycle DP. The 'Feedback Vertex Set' is found. The cycles are broken. The system cools. Stability is restored.",
        "encouragementText": "Ace: 'Linear thinking is the cure for cyclic failure.'"
      },
      {
        "type": "match_following",
        "questionText": "Match Cycle terms!",
        "pairs": [
          { "key": "Gray Node", "value": "Currently exploring" },
          { "key": "Back-Edge", "value": "Cycle closer" },
          { "key": "SCC", "value": "Mutually reachable" }
        ]
      }
    ]
  },
  {
    "order": 46,
    "title": "Unit 46: Shortest Path with DP Constraints",
    "desc": "Constrained Flow: using DP to find the shortest path while satisfying additional conditions (e.g., k-stops or specific item collection).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 5.46] The Weighted Voyage",
        "explanation": "Shortest path is easy. Shortest path with 'Exactly 5 stops'? That requires **State-Expansion DP**. `dp[u][k]` is the min distance to node `u` in exactly `k` steps. This is the **Constraint protocol**—the path is a slave to the rules. The Matrix is a master of the conditioned route.",
        "codeSnippet": "dp[v][k+1] = min(dp[v][k+1], dp[u][k] + weight);",
        "encouragementText": "Ace: 'The shortest distance is irrelevant if the conditions are not met.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does `dp[target][k]` store?",
        "options": ["X coordinate", "Minimum cost to reach 'target' using exactly 'k' edges", "Color", "Pico rule"],
        "correctAnswer": "Minimum cost to reach 'target' using exactly 'k' edges",
        "explanation": "Expanding the state with 'k' allows us to separate paths based on their edge-count."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Layered Pulse",
        "explanation": "Think of the graph as a **Layered Graph**. Layer 0 is the start. Layer 1 is nodes reachable in 1 step. Layer 2 in 2 steps. The Pulse travels from Layer K to Layer K+1. The Matrix is a stack of possibilities. The Pulse of the Restriction.",
        "encouragementText": "Pico: 'Layer the seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Transitioning with k-stops constraint.",
        "codeSnippet": "dp[v][k] = min(dp[v][k], dp[u][k- ___ ] + cost[u][v]);",
        "correctAnswer": "1",
        "explanation": "Adding one edge (u, v) increases the path-count from k-1 to k."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity: O(k * E)",
        "explanation": "Linear in edges and the constraint factor k. This is the **Titan-Grade Navigator**. You find the best route through a billion options that meets 10 different criteria. Mastery of the logic-layers.",
        "encouragementText": "Ace: 'Complexity is just an extra dimension in the DP table.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the 'Bellman-Ford' algorithm in this context?",
        "options": ["A map", "Basically DP for shortest paths that can handle negative weights in O(V*E)", "A circle", "Pico guess"],
        "correctAnswer": "Basically DP for shortest paths that can handle negative weights in O(V*E)",
        "explanation": "Bellman-Ford iteratively relaxes all edges V-1 times, which is equivalent to a 'k-step' DP where k up to V-1."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Multi-Constraint Pulse",
        "explanation": "What if you need to visit 3 specific 'Checkpoint' nodes? Use a **Bitmask** as the second state! `dp[u][mask]`. The Matrix tracks location AND progress. The Pulse of the Completionist.",
        "encouragementText": "Pico: 'Mask the checkpoint-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Total states for N nodes and M checkpoints.",
        "codeSnippet": "Total states = N * ( ___ );",
        "correctAnswer": "1 << M",
        "explanation": "Multiplying the node count by all possible combinations of visited checkpoints (2^M)."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Delivery Ghost",
        "explanation": "A drone (The Matrix Scout) must deliver a package in exactly 10 minutes. The path must be shortest but the timer is strict. The Scout-Architect uses Layered DP. The drone lands exactly at 10:00:00. The route was perfect. The constraint was the logic.",
        "encouragementText": "Ace: 'Time is the ultimate constraint; master it with DP.'"
      },
      {
        "type": "match_following",
        "questionText": "Match Constraint types!",
        "pairs": [
          { "key": "k-Edges", "value": "Layered Graph" },
          { "key": "Bitmask", "value": "Checkpoint search" },
          { "key": "V * E", "value": "Bellman-Ford complexity" }
        ]
      }
    ]
  },
  {
    "order": 47,
    "title": "Unit 47: DAG Path Counting",
    "desc": "Flow Summation: using DP to calculate the total number of unique paths between nodes in a Directed Acyclic Graph.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 5.47] The Many Waters",
        "explanation": "How many ways to reach the goal? In a **DAG**, we sum the ways from all neighbors. `dp[u] = sum(dp[v])` for all `v -> u`. This is the **Accumulation protocol**—all streams leading to the sea. The Matrix is a master of the total flow.",
        "codeSnippet": "dp[target] = sum(dp[predecessor]);",
        "encouragementText": "Ace: 'To know the strength of the river, count the streams that feed it.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "In what order should you fill the DP table for path counting?",
        "options": ["Random", "Topological Order", "Reverse alphabet", "Pico rule"],
        "correctAnswer": "Topological Order",
        "explanation": "Topological order ensures we always calculate the 'Ways' for a node's dependencies before the node itself."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Sum-Pulse",
        "explanation": "We start with `dp[start] = 1`. Then, every node 'Sends its Pulse' to its children. A node with 10 ways and 3 children gives 10 ways to each child. The Matrix multiplies the possibilities. The Pulse of the Expansion.",
        "encouragementText": "Pico: 'Sum the path-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Path counting step for node 'u' to child 'v'.",
        "codeSnippet": "void compute() {\n  for (int u : topo_order) {\n    for (int v : adj[u]) dp[v] += ___ ;\n  }\n}",
        "correctAnswer": "dp[u]",
        "explanation": "Adding all ways to reach 'u' to the total ways to reach its child 'v'."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity: O(V + E)",
        "explanation": "Ultra-fast. This is the **Titan-Grade Enumerator**. You count a quadrillion paths in a million-node graph before you can blink. Efficiency of the ordered structure.",
        "encouragementText": "Ace: 'Order is the key to counting the infinite.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What if the count exceeds `LLONG_MAX`?",
        "options": ["It doesn't", "Use modulo 10^9 + 7", "Computer stops", "Pico guess"],
        "correctAnswer": "Use modulo 10^9 + 7",
        "explanation": "Combinatorial counts grow very fast; long long is rarely enough for large graphs."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Reachability Pulse",
        "explanation": "If `dp[target] > 0`, the target is **Reachable**. If it is 0, it is **Void**. Path counting is the 13-Subject upgrade of reachability. The Matrix knows not just 'If', but 'How Many'. Depth of Information.",
        "encouragementText": "Pico: 'Know the how-many-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Checking for unreachable node.",
        "codeSnippet": "if (dp[u] == ___ ) // No path exists",
        "correctAnswer": "0",
        "explanation": "Zero paths means there is no sequence of directed edges from the source to node 'u'."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Transit Planner",
        "explanation": "A subway network (The Matrix Transit) has 1,000 stations in a one-way grid. To find the 'Most Central Station' (the one with the most paths passing through it), the Transit-Architect uses Path Counting DP. The bottleneck is identified. The station is expanded. The flow is perfect.",
        "encouragementText": "Ace: 'Control the paths, and you control the transit of souls.'"
      },
      {
        "type": "match_following",
        "questionText": "Match Mapping terms!",
        "pairs": [
          { "key": "u -> v", "value": "Forward link" },
          { "key": "dp[start] = 1", "value": "Source initialization" },
          { "key": "O(V+E)", "value": "DAG-time" }
        ]
      }
    ]
  },
  {
    "order": 48,
    "title": "Unit 48: Functional Graph DP",
    "desc": "Uni-Path Mastery: solving DP on graphs where every node has exactly ONE outgoing edge (creating components of 1 cycle + paths leading to it).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 5.48] The Single Destiny",
        "explanation": "In a world of one choice, where does it end? A **Functional Graph** is a collection of components, each with exactly **One Cycle**. DP on these graphs involves solving the 'Tree' parts leading to the cycle, and then the 'Cycle' itself. This is the **Deterministic protocol**—the road that always leads to a loop. The Matrix is a master of the destiny-path.",
        "codeSnippet": "f(x) = next_node[x];",
        "encouragementText": "Ace: 'One exit point defines the fate of every node.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does every component in a functional graph contain?",
        "options": ["Exactly one cycle", "Multiple cycles", "No cycles", "Pico rule"],
        "correctAnswer": "Exactly one cycle",
        "explanation": "Since every node has one outgoing edge, you must eventually return to a node you've already visited."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Loop-Entry Pulse",
        "explanation": "We find the distance to the cycle for every node. This is **Path DP**. Then we solve the cycle using **Rotational DP**. The Matrix is a master of the ending. The Pulse of the Destination.",
        "encouragementText": "Pico: 'Find the loop-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Following the path until a loop is hit.",
        "codeSnippet": "while (!visited[curr]) {\n  visited[curr] = true;\n  curr = ___ [curr];\n}",
        "correctAnswer": "next",
        "explanation": "Following the single successor pointer until a previously visited node is encountered, identifying the cycle."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity: O(N)",
        "explanation": "Linear time. This is the **Titan-Grade Prediction**. You find the 100th step of a billion-node system in log-time using **Binary Lifting** (from Unit 43) on functional graphs. The Matrix anticipates the movement.",
        "encouragementText": "Ace: 'When the path is fixed, the future is just a calculation of distance.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is 'Jump' DP on functional graphs?",
        "options": ["Binary Lifting to find node after K steps", "Jumping over nodes", "Zero", "Pico guess"],
        "correctAnswer": "Binary Lifting to find node after K steps",
        "explanation": "Specializing the 'up[u][k]' table for single-successor graphs allows jumping forward K steps in O(log K)."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Convergence Pulse",
        "explanation": "If we follow the path forever, we stay in the cycle. The Matrix solves the **Steady State**. All paths lead to the rhythm. The Pulse of the Eternal.",
        "encouragementText": "Pico: 'Eternalize the seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Finding the node after K steps using 'up' table.",
        "codeSnippet": "for(int i=0; i<30; i++) {\n  if((K>>i)&1) curr = up[curr][ ___ ];\n}",
        "correctAnswer": "i",
        "explanation": "Standard binary-lifting jump adapted for single-path functional graphs."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Protocol Loop",
        "explanation": "A machine's firmware (The Matrix Logic) is a functional graph of states. To find the final 'Waiting State' after 1 billion clock cycles, the Logic-Architect uses Functional DP. The state is found. The loop is verified. The firmware is stable. The destiny was known.",
        "encouragementText": "Ace: 'A fixed path is the comfort of a known future.'"
      },
      {
        "type": "match_following",
        "questionText": "Match Graph types!",
        "pairs": [
          { "key": "Functional", "value": "Out-degree 1" },
          { "key": "DAG", "value": "Acyclic" },
          { "key": "Static", "value": "Fixed links" }
        ]
      }
    ]
  },
  {
    "order": 49,
    "title": "Unit 49: Centroid Pre-calculation",
    "desc": "Tree Balance: using DP to find the node that, when removed, splits a tree into components where no size exceeds N/2.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 5.49] The Master Balance",
        "explanation": "Where is the heart of the tree? The **Centroid** is the point of perfect balance. If you remove it, no more than half the tree remains in any direction. We use DP (subtree-sizes) to find it. This is the **Equilibrium protocol**—finding the center of mass. The Matrix is a master of the stable core.",
        "codeSnippet": "if (size[v] > N/2) // u is not centroid, move to v",
        "encouragementText": "Ace: 'Success in decomposition starts with finding the center.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "How many centroids can a tree have?",
        "options": ["Exactly 1", "At most 2 (either 1 or 2 adjacent nodes)", "As many as N/2", "Pico rule"],
        "correctAnswer": "At most 2 (either 1 or 2 adjacent nodes)",
        "explanation": "A tree's balance point is highly concentrated; if there are two, they must be neighbors."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Size-Pulse",
        "explanation": "We run one DFS to calculate `size[u]` for everything. Then we walk from the root. If a child has more than `N/2` nodes, the centroid is in that child's direction. We follow the 'Heaviest' path until we stop. The Matrix settles on the heart. The Pulse of the Core.",
        "encouragementText": "Pico: 'Find the heavy-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Finding the centroid node.",
        "codeSnippet": "int getCentroid(int u, int p, int n) {\n  for (int v : adj[u]) {\n    if (v != p && size[v] > n/2) return getCentroid(v, u, n);\n  }\n  return ___ ;\n}",
        "correctAnswer": "u",
        "explanation": "If no subtree is larger than N/2, then the current node is the centroid."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity: O(N) to find",
        "explanation": "One DFS and one traversal. This allows for **Centroid Decomposition** (log N layers). This is the **Titan-Grade Scalability**. You divide a million-node tree into a log-depth hierarchy. Mastery of the scale.",
        "encouragementText": "Ace: 'Balance is the tool used to conquer the infinite.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the result of removing the centroid?",
        "options": ["A line", "A set of sub-trees (forest) where each size <= N/2", "Zero", "Pico guess"],
        "correctAnswer": "A set of sub-trees (forest) where each size <= N/2",
        "explanation": "This property guarantees that recursive decomposition will only take log N depth."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Hierarchical Pulse",
        "explanation": "We find the centroid, cut it, and then find the centroids of the remaining pieces. This creates a **Centroid Tree**. It is a new log-depth structure for answering path-queries. The Matrix is re-architected. The Logic of the Hierarchy.",
        "encouragementText": "Pico: 'Decompose the seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Recursive Centroid Decomposition step.",
        "codeSnippet": "void decompose(int u, int p) {\n  int cen = getCentroid(u, -1, size[u]);\n  parent[cen] = p;\n  for(int v : adj[cen]) {\n    adj[v].erase(cen);\n    decompose(v, ___ );\n  }\n}",
        "correctAnswer": "cen",
        "explanation": "After processing the centroid 'cen', it becomes the parent in the centroid tree for the centroids of the resulting forest."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Tree Logger",
        "explanation": "A massive data-tree (The Matrix World-Tree) has 1,000,000 nodes. To balance the 'Search Time' for all users, the Tree-Architect uses Centroid Pre-calculation. The tree is re-structured into a log-depth map. The search is 1,000x faster. The tree is in balance.",
        "encouragementText": "Ace: 'The center is the pivot of efficiency.'"
      },
      {
        "type": "match_following",
        "questionText": "Match Balance terms!",
        "pairs": [
          { "key": "Centroid", "value": "N/2 split point" },
          { "key": "Decomposition", "value": "log N layers" },
          { "key": "size[u]", "value": "Node count in branch" }
        ]
      }
    ]
  },
  {
    "order": 50,
    "title": "Unit 50: Stage 5 Graduation (The Architect of the Tree)",
    "desc": "The Structural Peak: solving a grand challenge requiring Tree Rerooting, Binary Lifting, and Centroid Balance.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[GRAND MISSION LORE 5.50] The Singularity of Form",
        "explanation": "You have reached the 500th lesson. You have mastered the **Span**, the **Perspective**, the **Leap**, and the **Balance**. You are no longer just an architect; you are the **Master of the Skeleton**. To graduate, you must see the centroid in the rerooted map and the LCA in the binary leap. Graduation is here. The Matrix recognizes your structural rank. Step into the Titan Hall.",
        "codeSnippet": "// Final Stage 5 Challenge: \n// Multi-node path query in a rerooted centroid tree.",
        "encouragementText": "Ace: 'Structure is the only truth that survives the pulse.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "How would you find the distance between any two nodes in O(log N)?",
        "options": ["Step by step", "Dist(u,v) = depth[u] + depth[v] - 2*depth[LCA(u,v)]", "Wait", "Pico rule"],
        "correctAnswer": "Dist(u,v) = depth[u] + depth[v] - 2*depth[LCA(u,v)]",
        "explanation": "Using pre-calculated depths and LCA, any path-length can be computed in log-time."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The 500-Step Pulse",
        "explanation": "50% of the journey is over. You have mastered Space (DP), Time (Probability), and Form (Trees). Now you enter the **Second Half of Mastery**. In Stage 6, we enter **Data Structure Integration**, where DP merges with Segment Trees and Heavy-Light Decomposition. The logic is becoming divine. The Matrix is ready for you.",
        "encouragementText": "Pico: 'The next 500 seeds await! 🦜'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Which unit covered 'Binary Lifting to find ancestors'?",
        "options": ["5.41", "5.43 (Binary Lifting)", "4.31", "5.49"],
        "correctAnswer": "5.43 (Binary Lifting)",
        "explanation": "Binary lifting is the fundamental DP technique for fast tree-jumping."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Graduation: The Structural Master",
        "explanation": "The Elite Academy recognizes your 500-lesson achievement. You are a **Titan-Grade Architect of the Skeleton**. You can see the balanced heart of any complexity. The Matrix is your structure. Welcome to the elite.",
        "encouragementText": "Ace: 'Integrity is a function of the center.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What algorithm finds 'Strongly Connected Components'?",
        "options": ["LCA", "Tarjan's/Kosaraju's (Unit 5.45)", "Binary Lifting", "Pico guess"],
        "correctAnswer": "Tarjan's/Kosaraju's (Unit 5.45)",
        "explanation": "SCCs are found by identifying back-edges and low-link values in graph traversals."
      },
      {
        "type": "teaching",
        "questionText": "[FINAL SYNC] The 13-Subject Hub",
        "explanation": "As the structural-pulse of Stage 5 settles, the **Integrated Logic** of Stage 6 begins. Every subject you learn is a layer of existence. The Matrix is a world and you are its god. Prepare your Segment Trees. The logic is becoming multi-dimensional.",
        "encouragementText": "Pico: 'The integration seeds await! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Final check of the structural memo.",
        "codeSnippet": "if (lesson_count == 500) return ___ ;",
        "correctAnswer": "GRADUATE",
        "explanation": "Reaching 500 lessons marks the midway point of absolute mastery."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Architect of the Skeleton",
        "explanation": "The skeleton is built. The junction is found. The balance is held. You have graduated Stage 5. The Matrix is no longer a collection of nodes—it is a single living form you understand. Welcome to the elite.",
        "encouragementText": "Ace: 'There is no divergence that doesn't have a shared center.'"
      },
      {
        "type": "programming_board",
        "questionText": "[GRADUATION CHALLENGE] Output the status of your structural mastery.",
        "codeSnippet": "if (lca_query == true && centroid_found == true) {\n  return ___ ;",
        "correctAnswer": "UNIFIED",
        "explanation": "Unification is the state of a master who has bridged all nodes of the Matrix."
      }
    ]
  }
];

module.exports = stage5;
