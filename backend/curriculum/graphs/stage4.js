const stage4 = [
  {
    "order": 61,
    "title": "Unit 61: Strong Connectivity (Tarjan's vs Kosaraju's)",
    "desc": "One-way roads and closed loops: Finding the kernels of a directed graph.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 7.1] The Unbreakable Circles",
        "explanation": "Ace: 'In a directed graph, a Strongly Connected Component (SCC) is a group where every node can reach every other node. It is the core of a recursive system.' Pico: 'A loop that never ends! Every bird can visit every other nest! 🦜'",
        "codeSnippet": "void tarjan(int u) {\n  low[u] = dfn[u] = ++timer;\n  stk.push(u); inStk[u] = true;\n  for(int v : adj[u]) {\n    if(!dfn[v]) { tarjan(v); low[u] = min(low[u], low[v]); }\n    else if(inStk[v]) low[u] = min(low[u], dfn[v]);\n  }\n}",
        "encouragementText": "Ace: 'True connection is a cycle of mutual reachability.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does a low-link value (low[u]) represent in Tarjan's algorithm?",
        "options": ["The depth of the node", "The smallest DFS number reachable from u in the same SCC", "The number of children", "Pico rule"],
        "correctAnswer": "The smallest DFS number reachable from u in the same SCC",
        "explanation": "If a node can reach an ancestor, they must be in the same strongly connected loop."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Kosaraju's Method",
        "explanation": "Ace: 'Kosaraju's use two DFS passes and a transposed graph. It's easier to understand but often slightly slower than Tarjan's single-pass approach.' Pico: 'Flip the map! 🦜'",
        "encouragementText": "Pico: 'Reverse the flight! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Identifying the root of an SCC in Tarjan's.",
        "codeSnippet": "if (dfn[u] ___ low[u]) {\n  while(true) {\n    int v = stk.pop(); inStk[v] = false;\n    if(u == v) break;\n  }\n}",
        "correctAnswer": "==",
        "explanation": "If a node's low-link equals its DFS number, it is the highest node of an SCC."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Condensation Graphs",
        "explanation": "Ace: 'By shrinking every SCC into a single node, you transform ANY directed graph into a Directed Acyclic Graph (DAG).' ",
        "encouragementText": "Ace: 'Simplicity is found by grouping complexity into singular points.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "After SCC condensation, what is the structure of the resulting graph?",
        "options": ["Cycle", "DAG (No cycles)", "Path", "Pico guess"],
        "correctAnswer": "DAG (No cycles)",
        "explanation": "If there were still a cycle, those nodes would have been part of a larger SCC."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Complexity Check",
        "explanation": "Ace: 'Both Tarjan's and Kosaraju's are O(V + E). Perfect efficiency for identifying structural patterns.'",
        "encouragementText": "Pico: 'Fast as a falcon! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Recursive call step in Tarjan's for unvisited child.",
        "codeSnippet": "if(!dfn[v]) {\n  tarjan(v);\n  low[u] = ___ (low[u], low[v]);\n}",
        "correctAnswer": "min",
        "explanation": "The parent inherits the best reachability from its child."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Kernel Finder",
        "explanation": "You have located the loops. The flow is no longer a mystery. Ace: 'The structure is condensed.'",
        "encouragementText": "Pico: 'Loop-de-loop! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match SCC terms!",
        "pairs": [
          { "key": "Tarjan", "value": "Single DFS / Stack" },
          { "key": "Kosaraju", "value": "Two DFS / Transpose" },
          { "key": "Condensation", "value": "Cycles to DAG" }
        ]
      }
    ]
  },
  {
    "order": 62,
    "title": "Unit 62: Bridges & Articulation Points",
    "desc": "The critical links: Identifying vertices that hold the entire structure together.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 7.2] The Fragile Bridge",
        "explanation": "Ace: 'A Bridge is an edge whose removal increases the number of connected components. An Articulation Point is a vertex that does the same.' Pico: 'Snipping the only thread! 🦜'",
        "codeSnippet": "if (low[v] > dfn[u]) isBridge(u, v);\nif (low[v] >= dfn[u]) isArticulationPoint(u);",
        "encouragementText": "Ace: 'Vulnerability is the price of connectivity.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the condition for an edge (u, v) to be a bridge?",
        "options": ["low[v] < dfn[u]", "low[v] == dfn[u]", "low[v] > dfn[u]", "Pico rule"],
        "correctAnswer": "low[v] > dfn[u]",
        "explanation": "If the best ancestor V can reach is strictly BELOW U, then edge (u, v) is the only path between them."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Root Exception",
        "explanation": "Ace: 'In DFS, the root is an Articulation Point ONLY if it has more than one child in the DFS tree.' Pico: 'The root needs two wings to be critical! 🦜'",
        "encouragementText": "Pico: 'Two kids for the boss! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Articulation point condition for non-root node.",
        "codeSnippet": "if (parent != -1 && low[v] ___ dfn[u]) art[u] = true;",
        "correctAnswer": ">=",
        "explanation": "Greater than OR EQUAL TO means v cannot reach anything higher than u, thus u is the neck."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Biconnected Components",
        "explanation": "Ace: 'Bridges and Articulation Points divide an undirected graph into Biconnected Components (BCCs)—regions where you can remove any one edge/node and stay connected.'",
        "encouragementText": "Ace: 'Redundancy is the secret to resilience.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What algorithm is used to find both bridges and articulation points?",
        "options": ["Dijkstra", "BFS", "DFS with low-link (Tarjan/Hopcroft variant)", "Pico guess"],
        "correctAnswer": "DFS with low-link (Tarjan/Hopcroft variant)",
        "explanation": "Exactly like SCC, we use DFS times and reachability."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Real-world Network",
        "explanation": "Ace: 'Identifying articulation points is how we find single points of failure in internet backbones or power grids.'",
        "encouragementText": "Pico: 'Protect the points! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Updating low-link for a back-edge.",
        "codeSnippet": "if (v != parent) low[u] = min(low[u], ___ [v]);",
        "correctAnswer": "dfn",
        "explanation": "For back-edges (v is an ancestor), we use its entry time (dfn), not its low-link."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Bridge Inspector",
        "explanation": "You have mapped the fragile points. You know exactly where the forest can be broken. Ace: 'The safety is measured.'",
        "encouragementText": "Pico: 'Safe flight! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Connection terms!",
        "pairs": [
          { "key": "Bridge", "value": "Critical Edge" },
          { "key": "Articulation Point", "value": "Critical Vertex" },
          { "key": "low[v] > dfn[u]", "value": "Edge (u, v) is bridge" }
        ]
      }
    ]
  },
  {
    "order": 63,
    "title": "Unit 63: 2-SAT Problem",
    "desc": "Solving Boolean satisfiability (A or B) using Strongly Connected Components.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 7.3] The logic Web",
        "explanation": "Ace: 'SAT is generally NP-complete, but 2-SAT (where clauses have only 2 literals like \"X or Y\") can be solved in linear time by modeling it as a Graph.' Pico: 'Logic with wings! 🦜'",
        "codeSnippet": "if (X || Y) is (~X -> Y) and (~Y -> X);",
        "encouragementText": "Ace: 'Logic is the invisible edge between truths.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "How is a range of (X or Y) clauses represented in a graph?",
        "options": ["Edges (X, Y)", "Implication edges (~X -> Y) and (~Y -> X)", "A single node", "Pico rule"],
        "correctAnswer": "Implication edges (~X -> Y) and (~Y -> X)",
        "explanation": "If ~X is true, then Y must be true to satisfy the clause."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] SAT Satisfiability",
        "explanation": "Ace: 'A 2-SAT instance is UNSATISFIABLE if and only if both X and ~X are in the same Strongly Connected Component (SCC).' Pico: 'A bird can't be both in and out of the nest! 🦜'",
        "encouragementText": "Pico: 'Pick a side! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Checking unsatisfiability in 2-SAT.",
        "codeSnippet": "if (scc[x] ___ scc[not_x]) return UNSATISFIABLE;",
        "correctAnswer": "==",
        "explanation": "If x and its negation can reach each other, they are logically contradictory."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Topological Assignment",
        "explanation": "Ace: 'To find a valid assignment, we use the reverse topological order of SCCs. If scc[x] < scc[not_x], we assign X as FALSE (and ~X as TRUE).' ",
        "encouragementText": "Ace: 'The order of deduction is the order of truth building.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the complexity of 2-SAT?",
        "options": ["O(N^2)", "O(N + M)", "O(2^N)", "Pico guess"],
        "correctAnswer": "O(N + M)",
        "explanation": "Because it relies entirely on a single SCC pass (Tarjan/Kosaraju), it stays linear."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Mapping Literals",
        "explanation": "Ace: 'We represent literals X and ~X as nodes `2*i` and `2*i + 1`. This maps variable index `i` to two distinct points in the web.'",
        "encouragementText": "Pico: 'Two nodes for every bird! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Index of the negation of node i (even/odd trick).",
        "codeSnippet": "int not_i = i ___ 1;",
        "correctAnswer": "^",
        "explanation": "Using XOR 1 swaps 0/1, 2/3, etc., mapping any node to its opposite."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Logic Weaver",
        "explanation": "You have untangled the knot of logic. You have found the truth hidden in the web. Ace: 'The deduction is complete.'",
        "encouragementText": "Pico: 'Logical flight! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match 2-SAT rules!",
        "pairs": [
          { "key": "X or Y", "value": "~X -> Y and ~Y -> X" },
          { "key": "UNSAT", "value": "X and ~X in same SCC" },
          { "key": "Complexity", "value": "O(V + E)" }
        ]
      }
    ]
  },
  {
    "order": 64,
    "title": "Unit 64: Euler Circuits",
    "desc": "The Seven Bridges of Königsberg: Visiting every edge exactly once.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 7.4] The Perfect Path",
        "explanation": "Ace: 'An Euler Circuit is a path that visits every EDGE exactly once and returns to the start. It exists in an undirected graph if every node has an EVEN degree.' Pico: 'The ultimate sightseeing tour! 🦜'",
        "codeSnippet": "void find_circuit(int u) {\n  while(!adj[u].empty()) {\n    int v = adj[u].back();\n    adj[u].pop_back();\n    find_circuit(v);\n  }\n  path.push(u);\n}",
        "encouragementText": "Ace: 'Efficiency is the path of no repetition.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "When does a directed graph have an Euler Circuit?",
        "options": ["All nodes have same degree", "in-degree == out-degree for every node", "It is a tree", "Pico rule"],
        "correctAnswer": "in-degree == out-degree for every node",
        "explanation": "Every arrival must have a corresponding departure to clear the edges."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Hierholzer's Algorithm",
        "explanation": "Ace: 'Hierholzer's algorithm finds the circuit in O(E). We follow edges until we get stuck, then backtrack and splice in remaining loops.' Pico: 'Splicing the circles! 🦜'",
        "encouragementText": "Pico: 'Slice and splice! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Reversing for the correct order.",
        "codeSnippet": "find_circuit(start);\n___ (path.begin(), path.end());",
        "correctAnswer": "reverse",
        "explanation": "Post-order DFS traversal gives the circuit in reverse order."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Eulerian Path vs Circuit",
        "explanation": "Ace: 'A Path visits every edge but can end elsewhere. It exists if exactly two nodes have odd degrees (the start and end points).' ",
        "encouragementText": "Ace: 'The start and the finish are the only exceptions to parity.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Minimum number of odd-degree nodes for an Euler Path in an undirected graph?",
        "options": ["0 or 2", "1 or 3", "Exactly 4", "Pico guess"],
        "correctAnswer": "0 or 2",
        "explanation": "0 means a circuit; 2 means a distinct path."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Large Graphs",
        "explanation": "Ace: 'In practice, we use a global edge pointer/index to avoid repeated visits, ensuring the time remains purely linear.'",
        "encouragementText": "Pico: 'Don't look back! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Edge removal in Hierholzer's.",
        "codeSnippet": "visited_edge[edge_id] = true;\n___ (next_v);",
        "correctAnswer": "find_circuit",
        "explanation": "Continuing the journey into the neighbor node."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Edge Explorer",
        "explanation": "You have mapped the perfect route. Not a single stone is unturned. Ace: 'The coverage is absolute.'",
        "encouragementText": "Pico: 'No bird left behind! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Eulerian rules!",
        "pairs": [
          { "key": "Circuit", "value": "Even degrees / 0 odd" },
          { "key": "Path", "value": "Exactly 2 odd degrees" },
          { "key": "Complexity", "value": "O(E)" }
        ]
      }
    ]
  },
  {
    "order": 65,
    "title": "Unit 65: Hamiltonian Paths",
    "desc": "Visiting every vertex exactly once: The NP-hard challenge.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 7.5] The Vertex Gauntlet",
        "explanation": "Ace: 'Unlike Eulerian paths (visit every edge), a Hamiltonian Path visits every VERTEX exactly once. This is notoriously difficult (NP-complete) with no simple degree requirements.' Pico: 'Visiting every nest, with no simple math to help! 🦜'",
        "codeSnippet": "dp[mask][u] = can we visit mask of nodes ending at u?",
        "encouragementText": "Ace: 'Search is the only answer when logic fails to simplify.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the complexity of finding a Hamiltonian path using Bitmask DP?",
        "options": ["O(N^2)", "O(2^N * N^2)", "O(N!)", "Pico rule"],
        "correctAnswer": "O(2^N * N^2)",
        "explanation": "We check every combination of visited nodes (2^N) and every possible ending node (N)."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Traveling Salesperson (TSP)",
        "explanation": "Ace: 'The most famous version is TSP: Find the SHORTEST Hamiltonian circuit. It powers logistics and travel apps world-wide.' Pico: 'Fastest route to all the seeds! 🦜'",
        "encouragementText": "Pico: 'Save the fuel! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Updating the mask state in TSP DP.",
        "codeSnippet": "new_mask = mask | (1 << ___ );",
        "correctAnswer": "v",
        "explanation": "Using a bitmask to mark node 'v' as visited."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Dirac's Theorem",
        "explanation": "Ace: 'A graph with N >= 3 nodes has a Hamiltonian cycle if every node has degree >= N/2. This is a sufficient, though not necessary, condition.' ",
        "encouragementText": "Ace: 'Connectivity is the precursor to existence.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "If a graph is a complete graph (all nodes connected), how many Hamiltonian circuits are there?",
        "options": ["1", "N", "(N-1)! / 2", "Pico guess"],
        "correctAnswer": "(N-1)! / 2",
        "explanation": "Every permutation of vertices forming a cycle is a valid path."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Approximation",
        "explanation": "Ace: 'Since TSP is hard, we use heuristics like 2-opt or the Christofides algorithm to find solutions within a small factor of the optimal.'",
        "encouragementText": "Pico: 'Close enough is good enough! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Base case for TSP DP.",
        "codeSnippet": "dp[1 << start][start] = ___ ;",
        "correctAnswer": "0",
        "explanation": "Starting at the first node takes 0 distance."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Vertex Voyager",
        "explanation": "You have faced the absolute search. You have seen the difficulty of the individual visit. Ace: 'The route is exhaustive.'",
        "encouragementText": "Pico: 'Every nest checked! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Path types!",
        "pairs": [
          { "key": "Eulerian", "value": "O(E) / Every edge" },
          { "key": "Hamiltonian", "value": "O(2^N) / Every vertex" },
          { "key": "Dirac", "value": "Degree >= N/2" }
        ]
      }
    ]
  },
  {
    "order": 66,
    "title": "Unit 66: Steiner Tree Problem",
    "desc": "Connecting a specific subset of nodes with minimum total edge weight.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 7.6] The Key Connection",
        "explanation": "Ace: 'MST connects ALL nodes. Steiner Tree connects only a specific subset of \"terminals\" using optional \"Steiner nodes\". It's NP-hard but essential for network design.' Pico: 'Connect the VIP nests only! 🦜'",
        "codeSnippet": "dp[mask][i] = min weight to connect terminal set 'mask' with node 'i' as anchor.",
        "encouragementText": "Ace: 'Efficiency in connection requires selective inclusion.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "If the subset of nodes is ALL nodes, what does the Steiner Tree become?",
        "options": ["Shortest Path", "Minimum Spanning Tree (MST)", "Hamiltonian Cycle", "Pico rule"],
        "correctAnswer": "Minimum Spanning Tree (MST)",
        "explanation": "In that case, the problem simplifies to connecting every node in the graph."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Dreyfus-Wagner Algorithm",
        "explanation": "Ace: 'We use dynamic programming on subsets of terminals. For each subset, we either split it into two or move to a neighbor.' Pico: 'Splitting the VIP list! 🦜'",
        "encouragementText": "Pico: 'Divide the party! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Merging two terminal subsets at node i.",
        "codeSnippet": "dp[mask][i] = min(dp[mask][i], dp[sub][i] + dp[mask ^ ___ ][i]);",
        "correctAnswer": "sub",
        "explanation": "Combining the costs of two disjoint subsets of terminals anchored at the same node."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity check",
        "explanation": "Ace: 'Complexity is O(3^K * N + 2^K * E), where K is the number of terminals. It is efficient if K is small (under 10-15).' ",
        "encouragementText": "Ace: 'The number of goals defines the burden of optimization.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What happens if K = 2?",
        "options": ["It scales to O(N^3)", "It becomes the Shortest Path problem between two points", "It is impossible", "Pico guess"],
        "correctAnswer": "It becomes the Shortest Path problem between two points",
        "explanation": "Connecting two points with minimum weight is just the shortest path."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Dijkstra in Steiner",
        "explanation": "Ace: 'After merging subsets, we run a round of Dijkstra for each mask to propagate the values across all nodes in the graph.'",
        "encouragementText": "Pico: 'Spread the news! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Updating node j from node i within the same terminal mask.",
        "codeSnippet": "dp[mask][j] = min(dp[mask][j], dp[mask][i] + ___ (i, j));",
        "correctAnswer": "weight",
        "explanation": "Propagating the current set connection to a neighbor."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Selective Connector",
        "explanation": "You have mapped the vital links. You have connected the few without including the many. Ace: 'The focus is sharp.'",
        "encouragementText": "Pico: 'VIP only! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Tree types!",
        "pairs": [
          { "key": "MST", "value": "Connects Everyone" },
          { "key": "Steiner Tree", "value": "Connects specific Subset" },
          { "key": "Shortest Path", "value": "Connects exactly 2" }
        ]
      }
    ]
  },
  {
    "order": 67,
    "title": "Unit 67: Boruvka's MST Algorithm",
    "desc": "The parallel edge-selector: An alternative to Prim and Kruskal.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 7.7] The Simultaneous Growth",
        "explanation": "Ace: 'Boruvka's algorithm is the oldest MST algorithm. It works by having every component simultaneously pick its cheapest neighbor edge and merge. It is perfect for parallel processing.' Pico: 'Everyone picks their favorite seed at once! 🦜'",
        "codeSnippet": "while(components > 1) {\n  for(each component) find_min_edge(c);\n  merge_components();\n}",
        "encouragementText": "Ace: 'Parallelism is the fastest road to unity.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "How many iterations does Boruvka's algorithm take at most?",
        "options": ["N", "E", "log N", "Pico rule"],
        "correctAnswer": "log N",
        "explanation": "Since every component merges with at least one other, the number of components is at least halved in every step."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Edge Weights",
        "explanation": "Ace: 'To avoid cycles, all edge weights must be unique. In practice, we use (Weight, Original_ID) as a tie-breaker.' Pico: 'Every branch is special! 🦜'",
        "encouragementText": "Pico: 'No ties allowed! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Finding the root of a component using DSU.",
        "codeSnippet": "int root_u = ___ (u);",
        "correctAnswer": "find",
        "explanation": "We use Disjoint Set Union to track which component a node belongs to."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Comparison with Kruskal",
        "explanation": "Ace: 'Kruskal's is O(E log E) due to sorting. Boruvka's can reach O(E log V) but works better on distributed systems.'",
        "encouragementText": "Ace: 'Scale chooses the algorithm.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why is Boruvka's great for parallel computing?",
        "options": ["It uses more memory", "Nodes don't need to communicate during the edge selection phase", "It only works on trees", "Pico guess"],
        "correctAnswer": "Nodes don't need to communicate during the edge selection phase",
        "explanation": "Each component independently finds its own minimum edge before the global merge."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Step Summary",
        "explanation": "Ace: 'Step 1: Each node picks min edge. Step 2: Merge. Step 3: Repeat until 1 component remains.'",
        "encouragementText": "Pico: 'Step by step! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Updating the min-edge for parent component.",
        "codeSnippet": "if (w < min_edge[root_u].w) min_edge[root_u] = ___ ;",
        "correctAnswer": "current_edge",
        "explanation": "Saving the best edge found so far for the current component."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Parallel Planter",
        "explanation": "You have grown the forest in a single synchronized movement. Ace: 'The expansion is rapid.'",
        "encouragementText": "Pico: 'Everyone together! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match MST algorithms!",
        "pairs": [
          { "key": "Kruskal", "value": "Sorting / DSU" },
          { "key": "Prim", "value": "Priority Queue" },
          { "key": "Boruvka", "value": "Parallel Merge" }
        ]
      }
    ]
  },
  {
    "order": 68,
    "title": "Unit 68: Directed MST (Chu-Liu/Edmonds)",
    "desc": "Connecting a directed graph with minimum total weight - The Arborescence.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 7.8] The Flowing Root",
        "explanation": "Ace: 'In directed graphs, an MST is called an Arborescence (a directed tree with one root). Standard Prim/Kruskal fails here. We use Chu-Liu/Edmonds for an O(VE) or O(E log V) solution.' Pico: 'A tree that only flows DOWN! 🦜'",
        "codeSnippet": "For each node, pick the min weight incoming edge. If cycles exist, contract them and repeat.",
        "encouragementText": "Ace: 'Direction changes everything.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What do you do if your initial 'min incoming edge' selection forms a cycle?",
        "options": ["Delete it", "Contract the cycle into a single 'meta-node' and recalculate", "Start over", "Pico rule"],
        "correctAnswer": "Contract the cycle into a single 'meta-node' and recalculate",
        "explanation": "The contraction allows us to treat the cycle as a single unit until we find the bridge into it."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Edge Cost Adjustment",
        "explanation": "Ace: 'When entering a meta-node, we subtract the cost of the internal cycle edge to correctly calculate the total cost.' Pico: 'Discount for the cycle birds! 🦜'",
        "encouragementText": "Pico: 'Save on the entry fee! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "New weight for an edge (u, v) entering a cycle node v.",
        "codeSnippet": "new_w = w - inside_min_edge[ ___ ];",
        "correctAnswer": "v",
        "explanation": "Adjusting the arrival cost based on the edge we are replacing inside the cycle."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Arborescence Property",
        "explanation": "Ace: 'In a valid arborescence, every node (except the root) has exactly one incoming edge.' ",
        "encouragementText": "Ace: 'Singularity in entry is the mark of a directed tree.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Can a Directed MST have multiple roots?",
        "options": ["Yes", "No (Exactly one for an Arborescence)", "Only if cyclic", "Pico guess"],
        "correctAnswer": "No (Exactly one for an Arborescence)",
        "explanation": "By definition, an arborescence is rooted at a single source node."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Base Case",
        "explanation": "Ace: 'If no cycles are found after picking min-incoming edges, the current set is your MST.'",
        "encouragementText": "Pico: 'Done in one! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Identifying the cycle root.",
        "codeSnippet": "while (vis[curr] != timer) { ... }",
        "correctAnswer": "vis[curr]",
        "explanation": "Using a timer to detect if we have looped back to a node visited in the current pass."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Vector Weaver",
        "explanation": "You have mapped the directed flow. You have found the minimum path for the command. Ace: 'The hierarchy is optimized.'",
        "encouragementText": "Pico: 'Command and control! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match graph types!",
        "pairs": [
          { "key": "Undirected MST", "value": "Prim/Kruskal" },
          { "key": "Directed MST", "value": "Chu-Liu/Edmonds" },
          { "key": "Contraction", "value": "Cycle resolution" }
        ]
      }
    ]
  },
  {
    "order": 69,
    "title": "Unit 69: Graph Centers & Medians",
    "desc": "Finding the 'Middle' of the web: Eccentricity and sum of distances.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 7.9] The Central Nest",
        "explanation": "Ace: 'Where should we build the main nest? The Graph Center minimizes the maximum distance to any other node. The Graph Median minimizes the SUM of distances to everyone.' Pico: 'Finding the heart of the flock! 🦜'",
        "codeSnippet": "Eccentricity(u) = max(dist(u, v) for all v);\nCenter = node minimizing Eccentricity.",
        "encouragementText": "Ace: 'Balance is defined by the perspective of distance.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What defines the Graph Radius?",
        "options": ["The total distance", "The maximum distance to everyone", "The minimum possible eccentricity in the graph", "Pico rule"],
        "correctAnswer": "The minimum possible eccentricity in the graph",
        "explanation": "It is the 'best' possible worst-case distance from a center node."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Floyd-Warshall use",
        "explanation": "Ace: 'For small graphs, we use Floyd-Warshall O(N^3) to find all-pairs distances before identifying the center/median.' Pico: 'Measure everyone first! 🦜'",
        "encouragementText": "Pico: 'Nests at O(N^3)! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Finding eccentricity for node i.",
        "codeSnippet": "int ecc = 0;\nfor(int j=1; j<=n; j++) ecc = max(ecc, d[i][j]);",
        "correctAnswer": "max(ecc, d[i][j])",
        "explanation": "Eccentricity is the furthest distance any other node has from node i."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Center vs Median",
        "explanation": "Ace: 'A Center node is best for an emergency response station. A Median node is best for a delivery warehouse.' ",
        "encouragementText": "Ace: 'Purpose defines the metric of the middle.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "In a simple Path graph (1-2-3-4-5), where is the center?",
        "options": ["1", "5", "3", "Pico guess"],
        "correctAnswer": "3",
        "explanation": "Node 3 is exactly in the middle of the path."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Scale",
        "explanation": "Ace: 'On huge graphs, we estimate centers using random sampling to avoid the N^3 wall.'",
        "encouragementText": "Pico: 'Pick some random birds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Total sum distance calculation (for Median).",
        "codeSnippet": "long long sum_dist = 0;\nfor(int j=1; j<=n; j++) sum_dist ___ d[i][j];",
        "correctAnswer": "+=",
        "explanation": "Medians depend on the total distance to all other participants."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Heart Seer",
        "explanation": "You have located the gravity of the web. The middle is no longer a guess. Ace: 'The center holds.'",
        "encouragementText": "Pico: 'I found the heart! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Metrics!",
        "pairs": [
          { "key": "Eccentricity", "value": "Max distance" },
          { "key": "Center", "value": "Minimizes Max Dist" },
          { "key": "Median", "value": "Minimizes Sum Dist" }
        ]
      }
    ]
  },
  {
    "order": 70,
    "title": "Unit 70: Stage 7 Graduation (The Web Navigator)",
    "desc": "Claiming the Connectivity Peak: You see the structure in the chaos.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[GRAND MISSION LORE 7.10] The Summit of Connectivity",
        "explanation": "Ace: 'You have mastered the Kernel, the Edge, and the Logic. You see the bridges and the circuits within the static web. You are no longer a visitor; you are the navigator.' Pico: 'Stage 7 Complete! We fly to the Network Flows next! 🦜'",
        "encouragementText": "Ace: 'Unity is the ultimate stage of knowledge.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Which structure should you use to check if a directed graph can be reduced to a DAG?",
        "options": ["Shortest Path", "Strongly Connected Components (SCC)", "Minimum Spanning Tree", "Pico guess"],
        "correctAnswer": "Strongly Connected Components (SCC)",
        "explanation": "Condensing SCCs is the definition of turning a directed graph into a DAG."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Depth Summary",
        "explanation": "10 units, 100 lessons. This stage has equipped you with the structural analysis tools for the Academic Atlas. Ace: 'Deconstruct with purpose.'",
        "encouragementText": "Pico: '70% through the 1,000-lesson gauntlet! 🦜'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of finding bridges in a graph?",
        "options": ["O(V+E)", "O(V*E)", "O(V^2)", "Exactly N-1"],
        "correctAnswer": "O(V+E)",
        "explanation": "Uses a single DFS pass with low-link logic."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Graduation Check",
        "explanation": "Ace: 'Prove you can transition from SCC to 2-SAT and Euler to Hamiltonian in your mental buffers.' Pico: 'I'm a Web Master now! 🦜'",
        "encouragementText": "Ace: 'The part reflects the whole through the lens of connectivity.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Which MST algorithm is best for parallel systems?",
        "options": ["Kruskal", "Prim", "Boruvka", "Pico guess"],
        "correctAnswer": "Boruvka",
        "explanation": "It allows independent component selection in each iteration."
      },
      {
        "type": "teaching",
        "questionText": "[FINAL SYNC] The 10x10x10 Path",
        "explanation": "You are 70% through the ultimate journey. Your next target: **Stage 8: Network Flow Foundations (Dinic/MaxFlow)**. Ace: 'The flow begins.'",
        "encouragementText": "Pico: 'Stage 8 seeds are waiting! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Final stage signal.",
        "codeSnippet": "if (web_navigator == true) return ___ ;",
        "correctAnswer": "GRADUATE",
        "explanation": "You have successfully mastered the Advanced Connectivity Phase."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Web Navigator",
        "explanation": "The loops are identified. The bridges are guarded. You are a Stage 7 Graduate. Ace: 'Welcome to the inner circle.'",
        "encouragementText": "Pico: 'Titan-Grade! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "[GRADUATION CHALLENGE] Output the status of your journey.",
        "codeSnippet": "for(int i=61; i<=70; i++) verify_web_logic(i);\nreturn ___ ;",
        "correctAnswer": "COMPLETE",
        "explanation": "The seventh decile of the 1,000-lesson curriculum for Graphs is fully verified."
      }
    ]
  }
];

module.exports = stage4;
