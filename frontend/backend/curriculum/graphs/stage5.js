const stage5 = [
  {
    "order": 71,
    "title": "Unit 71: Flow Networks & Residual Graphs",
    "desc": "Pipes, capacities, and the phantom flow: The foundations of network engineering.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 8.1] The Liquid Logic",
        "explanation": "Ace: 'Imagine air flowing through a network of pipes. Each pipe has a maximum capacity. Our goal is to push as much material as possible from the Source (S) to the Sink (T) without exceeding limits.' Pico: 'Moving all the birdseed from the warehouse to the nests! 🦜'",
        "codeSnippet": "Capacity c(u, v) >= Flow f(u, v);\nFlow In == Flow Out (for all nodes except S and T).",
        "encouragementText": "Ace: 'Stability is maintained by the conservation of flow.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the 'Skew Symmetry' property in Flow Networks?",
        "options": ["Flow is always positive", "f(u, v) = -f(v, u)", "Flow equals capacity", "Pico rule"],
        "correctAnswer": "f(u, v) = -f(v, u)",
        "explanation": "If 10 units flow from U to V, it is mathematically equivalent to -10 units flowing from V to U."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Residual Graph",
        "explanation": "Ace: 'The Residual Graph `G_f` shows how much MORE flow we can push. It has forward edges (remaining capacity) and backward edges (removable current flow).' Pico: 'The phantom pipes! 🦜'",
        "encouragementText": "Pico: 'Look for the hidden pipes! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Residual capacity of a forward edge.",
        "codeSnippet": "r_cap(u, v) = c(u, v) ___ f(u, v);",
        "correctAnswer": "-",
        "explanation": "How much room is left before the pipe is full."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Augmenting Path",
        "explanation": "Ace: 'An Augmenting Path is a simple path from S to T in the RESIDUAL graph with residual capacity > 0.'",
        "encouragementText": "Ace: 'Every path found is a gain in volume.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "If no augmenting path exists, what is the current flow?",
        "options": ["Zero", "Minimum", "Maximum Flow", "Pico guess"],
        "correctAnswer": "Maximum Flow",
        "explanation": "This is the core of the Ford-Fulkerson theorem: no more paths means the network is saturated."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Bottleneck",
        "explanation": "Ace: 'The flow we can push along a path is limited by the smallest residual capacity on that path.' Pico: 'The tightest squeeze! 🦜'",
        "encouragementText": "Pico: 'Watch the squeeze! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Finding the bottleneck of path P.",
        "codeSnippet": "bottleneck = min(r_cap(u, v) for (u, v) in ___ );",
        "correctAnswer": "P",
        "explanation": "The maximum flow through a path is determined by its weakest link."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Pipeline Architect",
        "explanation": "You have mapped the capacities. You see the phantom flow in the residual web. Ace: 'The foundation is set.'",
        "encouragementText": "Pico: 'Ready to pump! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Flow terms!",
        "pairs": [
          { "key": "Capacity", "value": "Maximum allowed" },
          { "key": "Residual", "value": "Remaining room" },
          { "key": "Flow", "value": "Current usage" }
        ]
      }
    ]
  },
  {
    "order": 72,
    "title": "Unit 72: Ford-Fulkerson Method",
    "desc": "The iterative search for path augmentation.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 8.2] Finding the Fill",
        "explanation": "Ace: 'The Ford-Fulkerson method is simple: Find any augmenting path, push its bottleneck, update residual graph, and repeat until no paths remain.' Pico: 'Keep pushing seeds until the pipes are full! 🦜'",
        "codeSnippet": "while(find_path(S, T)) {\n  f += push_flow();\n  update_residual();\n}",
        "encouragementText": "Ace: 'Consistency in search leads to optimality in result.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why is Ford-Fulkerson called a 'Method' rather than an 'Algorithm'?",
        "options": ["It is too slow", "It doesn't define HOW to find the augmenting path (DFS, BFS, etc)", "It only works on small graphs", "Pico rule"],
        "correctAnswer": "It doesn't define HOW to find the augmenting path (DFS, BFS, etc)",
        "explanation": "The efficiency depends entirely on the search strategy (Edmonds-Karp using BFS, etc)."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Backwards Edges",
        "explanation": "Ace: 'Backwards edges are critical. They allow the algorithm to \"undo\" a bad choice made earlier by pushing flow BACK.' Pico: 'Oops, wrong pipe! Go back! 🦜'",
        "encouragementText": "Pico: 'Backward is forward! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Updating backward edge capacity after pushing flow F.",
        "codeSnippet": "r_cap(forward) -= F;\nr_cap(backward) ___= F;",
        "correctAnswer": "+",
        "explanation": "Pushing flow forward creates the potential to push flow backward (remove it) later."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity Trap",
        "explanation": "Ace: 'With arbitrary paths (like DFS), Ford-Fulkerson can take O(F * E) time, where F is the Max Flow. If capacities are real numbers, it might not even terminate.'",
        "encouragementText": "Ace: 'Structure is the defense against infinite loops.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Max possible iterations if all capacities are integers and max flow is 1,000,000?",
        "options": ["log(1,000,000)", "1,000,000", "Exactly E", "Pico guess"],
        "correctAnswer": "1,000,000",
        "explanation": "In the worst case (a thin bottleneck), we might only push 1 unit per iteration."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Integer Theorem",
        "explanation": "Ace: 'If all capacities are integers, there always exists a Max Flow where every individual edge flow is also an integer.'",
        "encouragementText": "Pico: 'Whole numbers only! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Terminating condition.",
        "codeSnippet": "if (___ (S, T) == 0) return max_flow;",
        "correctAnswer": "find_path_capacity",
        "explanation": "The loop stops when the residual capacity to the sink is zero."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Flow Finder",
        "explanation": "You have pushed the first unit. The network is starting to fill. Ace: 'The iteration begins.'",
        "encouragementText": "Pico: 'Pumping seeds! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Flow properties!",
        "pairs": [
          { "key": "DFS Path", "value": "O(F * E)" },
          { "key": "BFS Path", "value": "Edmonds-Karp" },
          { "key": "Saturation", "value": "Total Capacity Limit" }
        ]
      }
    ]
  },
  {
    "order": 73,
    "title": "Unit 73: Edmonds-Karp (BFS Flow)",
    "desc": "Ensuring logarithmic bounds: Why BFS is better than DFS for flow.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 8.3] The Shortest Path Strategy",
        "explanation": "Ace: 'By using Breadth-First Search (BFS) to find the SHORTEST augmenting path, Edmonds-Karp guarantees a polynomial runtime of O(V * E^2).' Pico: 'Take the highway, not the scenic route! 🦜'",
        "codeSnippet": "queue.push(S);\nwhile(!queue.empty()) {\n  curr = queue.pop();\n  for(v : adj[curr]) if(r_cap > 0) bfs_visit(v);\n}",
        "encouragementText": "Ace: 'Efficiency is the selection of the most direct route.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "How many augmenting paths does Edmonds-Karp find at most?",
        "options": ["O(V)", "O(E)", "O(V * E)", "Pico rule"],
        "correctAnswer": "O(V * E)",
        "explanation": "The shortest path between any two nodes can only increase O(V) times for each of the E edges."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Capacity Indepence",
        "explanation": "Ace: 'Unlike basic Ford-Fulkerson, Edmonds-Karp doesn't care about the magnitude of capacities. It is equally fast even if flow is billions.' Pico: 'Small pipes, big pipes, same speed! 🦜'",
        "encouragementText": "Pico: 'Capacity doesn't matter! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Recording the path for update.",
        "codeSnippet": "parent[v] = curr;\nvisited[v] = true;\nif(v == T) break; ___ ;",
        "correctAnswer": "bfs_continue",
        "explanation": "Keeping track of the path is necessary to update the residual capacities after the search."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Time-Space Tradeoff",
        "explanation": "Ace: 'While O(V * E^2) is great, it can still be slow for large dense graphs (V=10^4). For that, we need Level Graphs.'",
        "encouragementText": "Ace: 'Every milestone is just a plateau for the next improvement.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the primary bottleneck of Edmonds-Karp?",
        "options": ["Memory", "Doing a full BFS for EVERY unit of bottleneck flow", "It uses DFS internally", "Pico guess"],
        "correctAnswer": "Doing a full BFS for EVERY unit of bottleneck flow",
        "explanation": "We restart the full search even if many paths could have been found at once."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Breadth vs Depth",
        "explanation": "Ace: 'BFS ensures that the level (distance from S) of nodes never decreases across iterations.'",
        "encouragementText": "Pico: 'Fly wide! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "BFS queue initialization.",
        "codeSnippet": "queue q; \nq.push( ___ );",
        "correctAnswer": "source",
        "explanation": "Starting the flow search from the source."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Short-Path Master",
        "explanation": "You have unlocked the polynomial bound. The flow is now predictable. Ace: 'The route is optimized.'",
        "encouragementText": "Pico: 'Fast and steady! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Flow complexities!",
        "pairs": [
          { "key": "BFS (Edmonds-Karp)", "value": "O(VE^2)" },
          { "key": "DFS (Ford-Fulkerson)", "value": "O(FE)" },
          { "key": "Dinic's", "value": "O(V^2E)" }
        ]
      }
    ]
  },
  {
    "order": 74,
    "title": "Unit 74: Dinic's Algorithm (Level Graphs)",
    "desc": "Pushing multiple paths at once: The industry standard for Max Flow.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 8.4] The Layered Attack",
        "explanation": "Ace: 'Dinic's algorithm is a two-step masterpiece: 1. BFS to build a \"Level Graph\" (nodes sorted by distance from S). 2. DFS to push ALL possible flow through that level graph (Blocking Flow).' Pico: 'Why push one path when you can push them all! 10x Flow! 🦜'",
        "codeSnippet": "while(bfs()) {\n  while(int flow = dfs(S, INF)) max_flow += flow;\n}",
        "encouragementText": "Ace: 'Throughput is maximized through layers of coordination.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is a 'Blocking Flow' in Dinic's?",
        "options": ["A flow that blocks the user", "A flow such that every shortest path in the current level graph is saturated", "A random flow", "Pico rule"],
        "correctAnswer": "A flow such that every shortest path in the current level graph is saturated",
        "explanation": "Once a blocking flow is found, the distance from S to T MUST increase in the next BFS."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Dead-End optimization",
        "explanation": "Ace: 'When DFS fails to find flow through a node, we mark it as a dead-end (level=-1) so we never visit it again in the current phase.' Pico: 'Waste no wing-strokes! 🦜'",
        "encouragementText": "Pico: 'Ignore the duds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Recursive DFS step in Dinic's.",
        "codeSnippet": "if (level[v] == level[u] + 1 && r_cap > 0) {\n  int pushed = dfs(v, ___ );\n  if (pushed > 0) return pushed;\n}",
        "correctAnswer": "min(limit, r_cap)",
        "explanation": "Propagating the current bottleneck limit to the next node in the level graph."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity of Dinic",
        "explanation": "Ace: 'Dinic's is O(V^2 E) in general, but on Unit Network (capacities=1), it is extremely fast: O(E √V).' ",
        "encouragementText": "Ace: 'The special case is where the algorithm truly shines.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the complexity of Dinic's on a Bipartite Matching graph?",
        "options": ["O(V^2 E)", "O(E √V)", "O(log N)", "Pico guess"],
        "correctAnswer": "O(E √V)",
        "explanation": "Because each node (except S/T) has a capacity of 1, it satisfies the Unit Network conditions."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Current Edge Optimization",
        "explanation": "Ace: 'Keep track of which edge index you're on in DFS. When an edge is full, skip it forever in the current phase.'",
        "encouragementText": "Pico: 'Pointers save time! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Only follow edges to nodes that are exactly one step further.",
        "codeSnippet": "if (level[v] == level[u] ___ 1) { ... }",
        "correctAnswer": "+",
        "explanation": "Constraints on the Level Graph ensure we only move along shortest paths."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Flow General",
        "explanation": "You have coordinated the attack across all levels. The sink is overwhelmed by the volume. Ace: 'The blockade is broken.'",
        "encouragementText": "Pico: 'Total volume! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Dinic phases!",
        "pairs": [
          { "key": "BFS", "value": "Build Level Graph" },
          { "key": "DFS", "value": "Find Blocking Flow" },
          { "key": "Level[v] == -1", "value": "Unreachable/Dead-end" }
        ]
      }
    ]
  },
  {
    "order": 75,
    "title": "Unit 75: Max-Flow Min-Cut Theorem",
    "desc": "The dual nature of the network: Why the maximum volume equals the minimum wall.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 8.5] The Narrowest Gate",
        "explanation": "Ace: 'The maximum flow from S to T is EXACTLY equal to the minimum total capacity of edges that, if removed, would disconnect S from T. This is the Min-Cut.' Pico: 'The max seeds we can move depend on the smallest pipe in the whole forest! 🦜'",
        "codeSnippet": "Max Flow == Min Cut Value",
        "encouragementText": "Ace: 'Strength is defined by the weakest point of the separation.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "How do you find the actual edges of a Min-Cut after running Max Flow?",
        "options": ["Pick random edges", "Find edges where r_cap == 0", "Edges (u, v) where U is reachable from S in residual graph, but V is not", "Pico rule"],
        "correctAnswer": "Edges (u, v) where U is reachable from S in residual graph, but V is not",
        "explanation": "These edges span the 'boundary' of the saturation in the residual world."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Cutting set",
        "explanation": "Ace: 'A Cut (S, T) partitions the vertices into two sets. The capacity of the cut is the sum of capacities of edges going from the source set to the sink set.' Pico: 'Splitting the forest! 🦜'",
        "encouragementText": "Pico: 'Slice the forest! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Nodes in the Source set (S-set).",
        "codeSnippet": "S_set = {v for v in V if ___ (S, v) in residual graph};",
        "correctAnswer": "reachable",
        "explanation": "Any node S can still reach in the residual graph is part of the source component."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Image Segmentation",
        "explanation": "Ace: 'Min-Cut is used in computer vision! We model pixels as nodes and use edge weights to define similarity. The Min-Cut separates the foreground from the background.'",
        "encouragementText": "Ace: 'Seeing is the result of optimal separation.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Application of Min-Cut?",
        "options": ["Finding bottlenecks", "Reliability analysis", "Image Segmentation", "All of the above"],
        "correctAnswer": "All of the above",
        "explanation": "Any problem involving 'minimum cost to disconnect' is a Min-Cut problem."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Multi-way Cut",
        "explanation": "Ace: 'Disconnected 3 or more sets is NP-hard, but 2-way (S, T) Cut is always equal to the max flow.'",
        "encouragementText": "Pico: 'Two sides only! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Summing the capacity of a cut.",
        "codeSnippet": "cut_val = sum(c(u, v) for u in S_set for v in ___ );",
        "correctAnswer": "T_set",
        "explanation": "Only edges crossing FROM S-set TO T-set count (backward edges don't!)."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Wall Architect",
        "explanation": "You have identified the bottleneck. You know exactly where the network will break. Ace: 'The limit is identified.'",
        "encouragementText": "Pico: 'The weak link! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Flow duality!",
        "pairs": [
          { "key": "Max Flow", "value": "Max S -> T volume" },
          { "key": "Min Cut", "value": "Min S | T partition" },
          { "key": "Residual Reachable", "value": "Source Set" }
        ]
      }
    ]
  },
  {
    "order": 76,
    "title": "Unit 76: Bipartite Matching via Flow",
    "desc": "Mapping candidates to slots: The bipartite power of Max Flow.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 8.6] The Matchmaker",
        "explanation": "Ace: 'How do you assign N birds to N nests? We can model this as a Max Flow problem by creating a Source, a Sink, and edges with capacity 1.' Pico: 'Solving the bird-dating problem with pipes! 🦜'",
        "codeSnippet": "S -> All Birds (cap 1);\nBirds -> Possible Nests (cap 1);\nAll Nests -> T (cap 1);",
        "encouragementText": "Ace: 'Compatibility is a potential that can be realized through flow.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does a flow of '1' through a bird-nest edge represent?",
        "options": ["A rejection", "A successful assignment/matching", "Multiple birds", "Pico rule"],
        "correctAnswer": "A successful assignment/matching",
        "explanation": "Because capacity is 1, an edge either carries 0 (not matched) or 1 (matched)."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Maximum Matching",
        "explanation": "Ace: 'The maximum flow value equals the maximum number of pairs that can be matched in the bipartite graph.' Pico: 'The max matches possible! 🦜'",
        "encouragementText": "Pico: 'Match 'em up! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Capacity of the edge between a bird and a compatible nest.",
        "codeSnippet": "add_edge(bird_i, nest_j, ___ );",
        "correctAnswer": "1",
        "explanation": "Since a bird can occupy at most one nest, and a nest can take at most one bird."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] König's Theorem",
        "explanation": "Ace: 'In a bipartite graph, the number of edges in a maximum matching equals the number of vertices in a minimum vertex cover.'",
        "encouragementText": "Ace: 'Dualities exist in every layer of the graph.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the complexity of Bipartite Matching using Dinic's Algorithm?",
        "options": ["O(V E)", "O(E √V)", "O(S T)", "Pico guess"],
        "correctAnswer": "O(E √V)",
        "explanation": "This is the 'Unit Network' speed of Dinic, making it extremely efficient for matching."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Perfect Matching",
        "explanation": "Ace: 'A matching is perfect if it covers every single vertex in the graph.' Pico: 'Every bird has a home! 🦜'",
        "encouragementText": "Pico: 'Happy birds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Connecting Sink to the right-hand set of nodes.",
        "codeSnippet": "for(v in SetB) add_edge(v, T, ___ );",
        "correctAnswer": "1",
        "explanation": "Each node in the right set (Set B) can participate in at most one match."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The High-Speed Matchmaker",
        "explanation": "You have paired the forest. No bird is without a home if one exists. Ace: 'The union is optimized.'",
        "encouragementText": "Pico: 'Paired up! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Matching terms!",
        "pairs": [
          { "key": "Source Edges", "value": "S -> Left Set" },
          { "key": "Internal Edges", "value": "Left -> Right" },
          { "key": "Sink Edges", "value": "Right -> T" }
        ]
      }
    ]
  },
  {
    "order": 77,
    "title": "Unit 77: Maximum Independent Set",
    "desc": "Finding the largest group where no two members know each other.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 8.7] The Solitary Flock",
        "explanation": "Ace: 'An Independent Set is a group of nodes where NO two have an edge between them. In bipartite graphs, this is the inverse of the Minimum Vertex Cover.' Pico: 'Birds that want to be alone! 🦜'",
        "codeSnippet": "Max Independent Set Size = Total Nodes - Min Vertex Cover Size",
        "encouragementText": "Ace: 'Independence is the subtraction of connection from existence.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "How do you find Min Vertex Cover in a Bipartite Graph?",
        "options": ["Dijkstra", "It equals the Max Matching value (König's)", "Random pick", "Pico rule"],
        "correctAnswer": "It equals the Max Matching value (König's)",
        "explanation": "Finding Max Flow gives us Max Matching, which gives us Min Vertex Cover, which gives us Max Independent Set."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Vertex Cover",
        "explanation": "Ace: 'A Vertex Cover is a set of nodes such that EVERY edge in the graph touches at least one node in the set.' Pico: 'The security guards of the edges! 🦜'",
        "encouragementText": "Pico: 'Watch the edges! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Calculating Max Independent Set size.",
        "codeSnippet": "IS_size = V_total - ___ (S, T);",
        "correctAnswer": "max_flow",
        "explanation": "Subtracting the matching size (minimum cover) from the total vertices."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] NP-Hard general case",
        "explanation": "Ace: 'Max Independent Set is NP-hard for general graphs, but for Bipartite graphs, Max Flow solves it in O(E √V).' ",
        "encouragementText": "Ace: 'Structure simplifies the search for freedom.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is a 'Clique'?",
        "options": ["A small group", "A set where EVERY two nodes are connected", "An error", "Pico guess"],
        "correctAnswer": "A set where EVERY two nodes are connected",
        "explanation": "A Clique in graph G is an Independent Set in the complement graph G'."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Scheduling Conflict",
        "explanation": "Ace: 'This is used to find the maximum number of jobs you can do if some jobs conflict with each other.'",
        "encouragementText": "Pico: 'Work hard, play hard! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Relationship in Bipartite graph.",
        "codeSnippet": "Independent_Set + ___ = Total_Vertices;",
        "correctAnswer": "Vertex_Cover",
        "explanation": "The Gallai identity (specifically for cover/independent sets)."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Solitary Scout",
        "explanation": "You have found the maximum spread. The nodes have their own space. Ace: 'The separation is maximal.'",
        "encouragementText": "Pico: 'Personal space! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match complementary terms!",
        "pairs": [
          { "key": "Bipartite Max Matching", "value": "Min Vertex Cover" },
          { "key": "Vertex Cover", "value": "Covers all edges" },
          { "key": "Independent Set", "value": "No edges within" }
        ]
      }
    ]
  },
  {
    "order": 78,
    "title": "Unit 78: Hall's Marriage Theorem",
    "desc": "The mathematical condition for the perfect match.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 8.8] The Marriage Condition",
        "explanation": "Ace: 'Hall's Theorem states that for a bipartite graph with sets X and Y, a matching exists that covers all of X if for every subset S of X, the number of neighbors N(S) is at least the size of S.' Pico: 'The birds need at least as many nests as there are birds! 🦜'",
        "codeSnippet": "For all S subset X, |N(S)| >= |S|.",
        "encouragementText": "Ace: 'Demand must always be met by a corresponding supply in volume.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does N(S) represent?",
        "options": ["Number of seeds", "The set of all neighbors (compatible nests) for birds in S", "The root", "Pico rule"],
        "correctAnswer": "The set of all neighbors (compatible nests) for birds in S",
        "explanation": "If 5 birds only have 4 possible nests between them, someone will be homeless."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Deficit logic",
        "explanation": "Ace: 'If Hall's condition fails, the difference `|S| - |N(S)|` helps find the maximum matching size.' Pico: 'Finding the shortage! 🦜'",
        "encouragementText": "Pico: 'Count the gap! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Condition for a perfect matching in an equal sized (N, N) bipartite graph.",
        "codeSnippet": "PerfectMatch exists if ___ (S, T) == N;",
        "correctAnswer": "max_flow",
        "explanation": "If the max flow equals the number of nodes in one set, every node is matched."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Generalization",
        "explanation": "Ace: 'Hall's Theorem is the discrete version of the Max-Flow Min-Cut theorem for unit-capacity matchings.' ",
        "encouragementText": "Ace: 'Theory and practice are two sides of the same mirror.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Can you check Hall's condition for ALL subsets efficiently?",
        "options": ["Yes, O(N)", "No, there are 2^N subsets (requires Max Flow instead!)", "Maybe", "Pico guess"],
        "correctAnswer": "No, there are 2^N subsets (requires Max Flow instead!)",
        "explanation": "While the theorem is vital for PROOFS, we use Max Flow (Dinic) to check it in practice."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Dancing Links",
        "explanation": "Ace: 'For more complex exact cover problems, we use algorithms like Knuth's Algorithm X (Dancing Links).'",
        "encouragementText": "Pico: 'Dance it out! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Hall's condition check for a specific subset.",
        "codeSnippet": "if (get_neighbors(subset).size() ___ subset.size()) return false;",
        "correctAnswer": "<",
        "explanation": "If neighbors are fewer than the nodes themselves, a full matching is impossible."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Logic Arbiter",
        "explanation": "You have calculated the bounds of possibility. You know when a match is destined to fail. Ace: 'The impossibility is proven.'",
        "encouragementText": "Pico: 'No match? SQUAWK! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Marriage terms!",
        "pairs": [
          { "key": "Subset S", "value": "A group of nodes" },
          { "key": "Neighbor Set N(S)", "value": "Combined reach" },
          { "key": "|N(S)| < |S|", "value": "Matching fails" }
        ]
      }
    ]
  },
  {
    "order": 79,
    "title": "Unit 79: Flow with Demands",
    "desc": "Required flow: When pipes MUST carry a certain volume.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 8.9] The Absolute Requirement",
        "explanation": "Ace: 'Standard flow has a CAP, but Flow with Demands has a LOWER BOUND. Every edge `e` must carry `L(e) <= f(e) <= C(e)`. This is used in complex project scheduling.' Pico: 'Some pipes MUST stay wet! 🦜'",
        "codeSnippet": "LowerBound L(e) <= Flow f(e) <= UpperBound C(e);",
        "encouragementText": "Ace: 'Duty is the minimum flow of the soul.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "How do we handle a lower bound L(e) using standard Max Flow?",
        "options": ["Subtract it", "Set capacity to C(e) - L(e) and adjust node demands", "It's impossible", "Pico rule"],
        "correctAnswer": "Set capacity to C(e) - L(e) and adjust node demands",
        "explanation": "We 'pre-push' the lower bound flow and use a super-source/super-sink to balance the overflow."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Balancing Nodes",
        "explanation": "Ace: 'For every node, we calculate the net demand from pre-pushed flows. If demand > 0, we connect SuperSource to the node with capacity `demand`.' Pico: 'A bigger source for a thirstier bird! 🦜'",
        "encouragementText": "Pico: 'Balance the books! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Residual capacity for demand-adjusted edge.",
        "codeSnippet": "r_cap = UpperBound - ___ ;",
        "correctAnswer": "LowerBound",
        "explanation": "The room remaining after the obligatory minimum flow is already accounted for."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Feasibility check",
        "explanation": "Ace: 'Circulation with demands is feasible if and only if the Max Flow from SuperSource saturates every source-out edge.' ",
        "encouragementText": "Ace: 'Saturation is the proof of fulfilled obligation.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "When is the flow 'saturated' in demand-flow?",
        "options": ["When max flow == sum of all positive node demands", "When it hits 100", "When Pico is full", "Pico guess"],
        "correctAnswer": "When max flow == sum of all positive node demands",
        "explanation": "This means every 'obligatory' pre-pushed flow has been successfully linked to an 'absorber' node."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Project Scheduling",
        "explanation": "Ace: 'This is used in DAG-based project management to ensure every vital task gets its required resources.'",
        "encouragementText": "Pico: 'Schedule it! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Adjusting demand for node v (target of edge with lower bound L).",
        "codeSnippet": "demand[v] ___ L;",
        "correctAnswer": "+=",
        "explanation": "Node v now 'provides' more flow because of the arrival of the mandatory lower-bound volume."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Duty Manager",
        "explanation": "You have balanced the obligations. The required flow is stable. Ace: 'The commitments are met.'",
        "encouragementText": "Pico: 'Mandatory seeds delivered! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Demand terms!",
        "pairs": [
          { "key": "Lower Bound", "value": "Required Flow" },
          { "key": "Upper Bound", "value": "Max Flow" },
          { "key": "Circulation", "value": "Flow with no S/T" }
        ]
      }
    ]
  },
  {
    "order": 80,
    "title": "Unit 80: Stage 8 Graduation (The Flow Specialist)",
    "desc": "Claiming the Flow Peak: Edmonds-Karp and Dinic are your weapons.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[GRAND MISSION LORE 8.10] The Summit of Volume",
        "explanation": "Ace: 'You have mastered the Pipe and the Cut. You can push the maximum and find the minimum bottleneck. You are the architect of the network.' Pico: 'Stage 8 Complete! We fly to the Advanced Matchings & MCMF next! 🦜'",
        "encouragementText": "Ace: 'Capacity is the boundary, but Flow is the lifeblood.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Which algorithm is generally the fastest for Max Flow on large graphs?",
        "options": ["Ford-Fulkerson", "Edmonds-Karp", "Dinic's Algorithm", "Pico guess"],
        "correctAnswer": "Dinic's Algorithm",
        "explanation": "It pushes blocking flows through level graphs, making it significantly more efficient."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Flow Summary",
        "explanation": "10 units, 100 lessons. This stage has equipped you with the network engineering tools for the Academic Atlas. Ace: 'Push with purpose.'",
        "encouragementText": "Pico: '80% through the 1,000-lesson gauntlet! 🦜'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Max Flow equals...?",
        "options": ["Total Nodes", "Min Cut", "Average Degree", "Pico secret"],
        "correctAnswer": "Min Cut",
        "explanation": "The Max-Flow Min-Cut Theorem is the heart of network theory."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Graduation Check",
        "explanation": "Ace: 'Prove you can transition from Residuals to Blocking Flows and Matching to Independence in your mental buffers.' Pico: 'The flow is in my blood! 🦜'",
        "encouragementText": "Ace: 'The volume reflects the capacity through the lens of the search.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of Dinic's on Unit Networks?",
        "options": ["O(E √V)", "O(V^3)", "O(log N)", "Pico guess"],
        "correctAnswer": "O(E √V)",
        "explanation": "This makes it the tool of choice for bipartite matching."
      },
      {
        "type": "teaching",
        "questionText": "[FINAL SYNC] The 10x10x10 Path",
        "explanation": "You are 80% through the ultimate journey. Your next target: **Stage 9: Advanced Matching & MCMF**. Ace: 'The cost of flow awaits.'",
        "encouragementText": "Pico: 'Stage 9 seeds are waiting! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Final stage signal.",
        "codeSnippet": "if (flow_specialist == true) return ___ ;",
        "correctAnswer": "GRADUATE",
        "explanation": "You have successfully mastered the Network Flow Phase."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Flow Specialist",
        "explanation": "The pipes are full. The cut is identified. You are a Stage 8 Graduate. Ace: 'Welcome to the inner circle.'",
        "encouragementText": "Pico: 'Titan-Grade! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "[GRADUATION CHALLENGE] Output the status of your journey.",
        "codeSnippet": "for(int i=71; i<=80; i++) verify_flow_logic(i);\nreturn ___ ;",
        "correctAnswer": "COMPLETE",
        "explanation": "The eighth decile of the 1,000-lesson curriculum for Graphs is fully verified."
      }
    ]
  }
];

module.exports = stage5;
