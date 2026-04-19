const stage6 = [
  {
    "order": 81,
    "title": "Unit 81: Min-Cost Max-Flow (MCMF) Intro",
    "desc": "Adding a second dimension: When every unit of flow has a price tag.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 9.1] The Toll Roads",
        "explanation": "Ace: 'Max Flow pushed the volume, but what if every pipe has a toll? Min-Cost Max-Flow (MCMF) finds the maximum possible flow that has the MINIMUM total cost.' Pico: 'Moving seeds while saving enough to buy more! 🦜'",
        "codeSnippet": "Cost = Sum(f(u, v) * cost(u, v));\nSubject to: Maximize total Flow and Minimize Cost.",
        "encouragementText": "Ace: 'Efficiency is the optimization of two conflicting variables.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "In MCMF, what is the cost of a BACKWARD edge (-v, -u)?",
        "options": ["0", "The same as the forward cost", "The negative of the forward cost (-cost(u, v))", "Pico rule"],
        "correctAnswer": "The negative of the forward cost (-cost(u, v))",
        "explanation": "Removing flow from an edge gives us back the money we spent on it!"
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Goal Shift",
        "explanation": "Ace: 'We can't use BFS anymore because we need the SHORTEST path based on COST, not hop count. This means using SPFA or Dijkstra.' Pico: 'Finding the cheapest flight! 🦜'",
        "encouragementText": "Pico: 'Cheap seeds over fast seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Total cost update formula.",
        "codeSnippet": "total_cost += pushed_flow * ___ ;",
        "correctAnswer": "dist[T]",
        "explanation": "The distance to the sink in the cost-weighted residual graph is the cost-per-unit for that augmenting path."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity of MCMF",
        "explanation": "Ace: 'The standard algorithm is the Successive Shortest Path algorithm. It takes O(F * E * log V) or O(F * E) depending on the shortest path sub-routine.'",
        "encouragementText": "Ace: 'The price of multiple variables is higher computation.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Can MCMF handle negative costs?",
        "options": ["No", "Yes, if there are no negative cycles", "Only if max flow is 1", "Pico guess"],
        "correctAnswer": "Yes, if there are no negative cycles",
        "explanation": "If a negative cycle exists, you could push infinite flow to get infinite profit, which breaks the physical model."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Min-Cost Perfect Matching",
        "explanation": "Ace: 'This is a special case of MCMF where we find the cheapest way to pair N items to N targets perfectly.'",
        "encouragementText": "Pico: 'Value matching! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Initial cost of forward edge (u, v).",
        "codeSnippet": "edge[u, v].cost = c;\nedge[v, u].cost = ___ ;",
        "correctAnswer": "-c",
        "explanation": "Applying the skew-symmetry to costs in the residual graph."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Economy Pilot",
        "explanation": "You have factored in the budget. The seeds are moving at the lowest price. Ace: 'The economy is balanced.'",
        "encouragementText": "Pico: 'Bargain hunter! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match MCMF terms!",
        "pairs": [
          { "key": "Forward cost", "value": "Positive price" },
          { "key": "Backward cost", "value": "Refund" },
          { "key": "Dist[T]", "value": "Cost per unit" }
        ]
      }
    ]
  },
  {
    "order": 82,
    "title": "Unit 82: Successive Shortest Path Algorithm",
    "desc": "Implementing MCMF: Using SPFA to find the cheapest augmentation.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 9.2] The Wallet-Friendly Path",
        "explanation": "Ace: 'To implement MCMF, we repeatedly find the shortest path from S to T in the residual graph using SPFA (Shortest Path Faster Algorithm), push flow, and repeat.' Pico: 'SPFA is like a smarter bird looking for discounts! 🦜'",
        "codeSnippet": "while(spfa(S, T)) {\n  int f = push_min_cost_flow();\n  max_flow += f;\n}",
        "encouragementText": "Ace: 'Selection based on value is the strategy of the elite.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why do we use SPFA instead of Dijkstra for the first pass?",
        "options": ["It is faster", "It can handle the initial negative costs on backward edges", "It is easier to type", "Pico rule"],
        "correctAnswer": "It can handle the initial negative costs on backward edges",
        "explanation": "Dijkstra only works for non-negative weights; residual graphs always have potential negative backward costs."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Path Recording",
        "explanation": "Ace: 'Just like Edmonds-Karp, we store `parent[v]` and `edge_to[v]` to trace back the path and update residual capacities and costs.' Pico: 'Leaving breadcrumbs! 🦜'",
        "encouragementText": "Pico: 'Trace it back! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "SPFA relaxation step.",
        "codeSnippet": "if (dist[v] > dist[u] + cost[e]) {\n  dist[v] = dist[u] + cost[e];\n  if(!in_queue[v]) { q.push(v); in_queue[v] = ___ ; }\n}",
        "correctAnswer": "true",
        "explanation": "Standard SPFA logic: only add to queue if not already being processed."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Potential Bottleneck",
        "explanation": "Ace: 'Multiple SPFA passes can be slow. In some cases, we use \"Potentials\" to transform edges to non-negative costs, allowing us to use Dijkstra.'",
        "encouragementText": "Ace: 'Transformation is the key to acceleration.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What happens if you find a negative cycle during SPFA?",
        "options": ["The algorithm stops", "The logic is BROKEN (MCMF assumes no negative cycles reachable from S)", "It ignores it", "Pico guess"],
        "correctAnswer": "The logic is BROKEN (MCMF assumes no negative cycles reachable from S)",
        "explanation": "A negative cycle would allow for infinitely cheap flow, which must be handled with specialized circulation algorithms."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Max Flow vs Feasible Flow",
        "explanation": "Ace: 'If you only want a specific total flow X at minimum cost, stop the loop when `max_flow` reaches X.'",
        "encouragementText": "Pico: 'Stop when you're full! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Pushing bottleneck flow through path edges.",
        "codeSnippet": "edge[e].flow += f;\nedge[e ^ 1].flow -= f;",
        "correctAnswer": "e ^ 1",
        "explanation": "Using the XOR 1 trick to immediately access the residual edge in our adjacency list."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Discount Voyager",
        "explanation": "You have optimized the route for cost. Every unit is a victory for the budget. Ace: 'The route is frugal.'",
        "encouragementText": "Pico: 'Cheap seeds! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match algorithm roles!",
        "pairs": [
          { "key": "SPFA", "value": "Shortest path with negatives" },
          { "key": "Dijkstra + Potential", "value": "Fastest MCMF iteration" },
          { "key": "Successive Path", "value": "MCMF Framework" }
        ]
      }
    ]
  },
  {
    "order": 83,
    "title": "Unit 83: Hopcroft-Karp (Fast Bipartite) ",
    "desc": "The supercar of matching: Achieving O(E √V) for maximum bipartite pairing.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 9.3] The Matching Speedster",
        "explanation": "Ace: 'While Dinic's is fast, Hopcroft-Karp is a specialized algorithm for bipartite matching that uses simultaneous BFS to find multiple vertex-disjoint augmenting paths.' Pico: 'Super-sonic speed matching! 🦜'",
        "codeSnippet": "while(bfs()) {\n  for(v : SetU) if(!matched[v] && dfs(v)) total++;\n}",
        "encouragementText": "Ace: 'Specialization is the ultimate form of speed.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of Hopcroft-Karp?",
        "options": ["O(V E)", "O(E √V)", "O(V^2)", "Pico rule"],
        "correctAnswer": "O(E √V)",
        "explanation": "It shares the same theoretical bound as Dinic's on unit networks but is often faster in actual practice."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Vertex Disjoint",
        "explanation": "Ace: 'The BFS finds the shortest path distance to all unmatched nodes. The DFS then finds as many non-overlapping paths of that distance as possible.' Pico: 'Parallel paths! 🦜'",
        "encouragementText": "Pico: 'Don't cross the lines! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "DFS condition to follow BFS distance.",
        "codeSnippet": "if (dist[matchY[v]] == dist[u] ___ 1) {\n  if (dfs(matchY[v])) { ... }\n}",
        "correctAnswer": "+",
        "explanation": "Only moving forward in the layered graph built by the BFS."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Augmenting Path recall",
        "explanation": "Ace: 'An augmenting path starts at an UNMATCHED node in set U, alternates between matched and unmatched edges, and ends at an UNMATCHED node in set V.'",
        "encouragementText": "Ace: 'The path is the transformation from zero to one.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "In Hopcroft-Karp, what does dist[0] (or dist[Null]) represent?",
        "options": ["Error", "The layer of unreachable nodes", "The target for finding a complete augmenting path", "Pico guess"],
        "correctAnswer": "The target for finding a complete augmenting path",
        "explanation": "We use a virtual node (0) to represent the 'end' of any successful augmenting path."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Bipartite Only",
        "explanation": "Ace: 'Remember: Hopcroft-Karp and Dinic's only work this efficiently because the graph is bipartite. General matching is much harder!'",
        "encouragementText": "Pico: 'Two groups only! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Updating the match in DFS.",
        "codeSnippet": "matchY[v] = u; \nmatchX[u] = ___ ;",
        "correctAnswer": "v",
        "explanation": "Confirming the symmetric pairing between the two sets."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Speed Demon",
        "explanation": "You have reached the limit of bipartite pairing speed. The forest is matched before the birds can blink. Ace: 'The speed is absolute.'",
        "encouragementText": "Pico: 'Zoom! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Matching speeds!",
        "pairs": [
          { "key": "Hopcroft-Karp", "value": "O(E √V)" },
          { "key": "DFS Matching", "value": "O(VE)" },
          { "key": "Bipartite", "value": "Layered matching" }
        ]
      }
    ]
  },
  {
    "order": 84,
    "title": "Unit 84: Stable Marriage Algorithm",
    "desc": "The Gale-Shapley Algorithm: Ensuring harmony in preferences.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 9.4] The Harmony Logic",
        "explanation": "Ace: 'A matching is STABLE if there is no pair (A, B) who both prefer each other over their current partners. Gale-Shapley guarantees a stable solution in O(N^2).' Pico: 'Making everyone as happy as possible! 🦜'",
        "codeSnippet": "While free man M exists:\n  M proposes to best woman W who he hasn't proposed to yet.\n  If W is free, they match.\n  If W prefers M over current husband H, she dumps H and matches with M.",
        "encouragementText": "Ace: 'Stability is the absence of local envy.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Who is favored in the standard Gale-Shapley algorithm (where men propose)?",
        "options": ["The Women", "The Men", "Neither", "Pico rule"],
        "correctAnswer": "The Men",
        "explanation": "The side that proposes always gets their best possible stable result, while the other side gets their worst possible stable result."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Guaranteed Ending",
        "explanation": "Ace: 'The algorithm ALWAYS terminates and ALWAYS produces a stable matching for equal-sized groups.' Pico: 'Everyone gets a partner! 🦜'",
        "encouragementText": "Pico: 'Happy endings! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Woman W's preference check.",
        "codeSnippet": "if (prefers(W, new_man, current_man)) { ... }",
        "correctAnswer": "prefers",
        "explanation": "The decision to switch depends purely on the preference list of the receiver."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Economic Nobel",
        "explanation": "Ace: 'This algorithm won the Nobel Prize in Economics! It is used to match Medical Students to Residencies and for organ donation networks.'",
        "encouragementText": "Ace: 'Real-world impact is the highest form of algorithmic achievement.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Can a woman ever have a 'Strictly Better' partner after dumping her current one?",
        "options": ["No", "Yes", "Only if she is lucky", "Pico guess"],
        "correctAnswer": "Yes",
        "explanation": "A woman only dumps her partner if the new proposer is Higher on her preference list."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Preference Storage",
        "explanation": "Ace: 'To check preference in O(1), store the man's rank in the woman's list in a 2D array: `rank[woman][man]`.'",
        "encouragementText": "Pico: 'Fast ranking! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "A man's next proposal index.",
        "codeSnippet": "int w = pref[man][ ___ [man]++];",
        "correctAnswer": "next_proposal",
        "explanation": "A man moves down his preference list one by one."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Harmony Weaver",
        "explanation": "You have balanced the desires of the many. There is no one left to complain. Ace: 'The peace is stable.'",
        "encouragementText": "Pico: 'Love is in the air! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Marriage properties!",
        "pairs": [
          { "key": "Stable", "value": "No mutual envie" },
          { "key": "Proposer", "value": "Gets best possible" },
          { "key": "Complexity", "value": "O(N^2)" }
        ]
      }
    ]
  },
  {
    "order": 85,
    "title": "Unit 85: Blossom Algorithm (General Matching)",
    "desc": "Solving the unsolvable: Handling odd cycles in non-bipartite graphs.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 9.5] The Cycle Paradox",
        "explanation": "Ace: 'In general graphs, augmenting paths can get stuck in odd-length cycles (Blossoms). Edmonds Blossom algorithm detects and \"contracts\" these cycles to find a max matching.' Pico: 'Breaking the loops to find the pairs! 🦜'",
        "codeSnippet": "if (dfs_finds_odd_cycle) contract_blossom();",
        "encouragementText": "Ace: 'Complexity is a loop that must be collapsed to be understood.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why is matching harder in general graphs than bipartite?",
        "options": ["More nodes", "Odd cycles make augmenting paths non-trivial to find", "Pico doesn't like it", "Pico rule"],
        "correctAnswer": "Odd cycles make augmenting paths non-trivial to find",
        "explanation": "In a bipartite graph, all cycles are even, so you never get stuck in a contradictory state."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Contraction",
        "explanation": "Ace: 'When we find an odd cycle, we shrink all nodes in the cycle into a single \"Super-node\". If an augmenting path exists in the shrunken graph, it exists in the original.' Pico: 'Meta-nodes! 🦜'",
        "encouragementText": "Pico: 'Shrink ray! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "LCA in Blossom (finding the base of the cycle).",
        "codeSnippet": "int base = find_lca(u, v);\n___ (u, v, base);",
        "correctAnswer": "blossom",
        "explanation": "The 'base' is the entry point to the odd cycle from the rest of the matching tree."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Edmonds' Theorem",
        "explanation": "Ace: 'Edmonds' Blossom Algorithm is O(V^3) or O(V E log V) with optimizations. It is the pinnacle of classical matching theory.'",
        "encouragementText": "Ace: 'The resolution of the cycle is the birth of the match.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Application of General Matching?",
        "options": ["Scheduling pairs of people (who might all know each other)", "Bipartite matching", "Max Flow", "Pico guess"],
        "correctAnswer": "Scheduling pairs of people (who might all know each other)",
        "explanation": "When there aren't two distinct sets (e.g., room-mate pairing), it's a general matching problem."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Tutte-Berge Formula",
        "explanation": "Ace: 'This formula relates the size of the maximum matching in any graph to its independent sets and component removals.'",
        "encouragementText": "Pico: 'Math wings! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Updating matches after finding path in blossomed graph.",
        "codeSnippet": "expand_and_match(path);",
        "correctAnswer": "expand_and_match",
        "explanation": "Once a path is found in the contracted graph, it must be mapped back to the original nodes."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Cycle Breaker",
        "explanation": "You have collapsed the paradox. No loop can hide the truth of the pair. Ace: 'The cycle is resolved.'",
        "encouragementText": "Pico: 'Blossom power! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Matching types!",
        "pairs": [
          { "key": "Bipartite", "value": "Even cycles only / Flow" },
          { "key": "General", "value": "Odd cycles / Blossom" },
          { "key": "Contraction", "value": "Cycle to Node" }
        ]
      }
    ]
  },
  {
    "order": 86,
    "title": "Unit 86: Push-Relabel Algorithm",
    "desc": "A different approach to Max Flow: Moving flow locally without global paths.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 9.6] The Gravity Flow",
        "explanation": "Ace: 'Ford-Fulkerson looks for global paths. Push-Relabel (Goldberg-Tarjan) is local. It maintains a \"Pre-flow\" and uses \"Heights\" to push flow downhill. If a node is stuck, we \"Relabel\" it to raise its height.' Pico: 'Pouring seeds and raising the floors! 🦜'",
        "codeSnippet": "Excess flow > 0? Push to lower neighbor or Relabel self.",
        "encouragementText": "Ace: 'Local pressure creates global movement.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What determines if flow can be pushed in Push-Relabel?",
        "options": ["The shortest path", "The height difference (h[u] == h[v] + 1)", "Pico rule", "Source distance"],
        "correctAnswer": "The height difference (h[u] == h[v] + 1)",
        "explanation": "Flow only moves 'downhill' based on the height function."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Height of the Source",
        "explanation": "Ace: 'We initialize the source height to N (the number of nodes) and all others to 0. This creates the initial pressure to push flow into the network.' Pico: 'Source is the high mountain! 🦜'",
        "encouragementText": "Pico: 'Mountain source! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "The Relabel operation.",
        "codeSnippet": "h[u] = ___ (h[v] for v in neighbors with r_cap > 0) + 1;",
        "correctAnswer": "min",
        "explanation": "To push flow out, a node must be at least one unit higher than its best available neighbor."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity of Push-Relabel",
        "explanation": "Ace: 'The standard version is O(V^2 E), but with \"Highest-Label\" selection, it reaches O(V^2 √E). In practice, it is often faster than Dinic for specific topologies.'",
        "encouragementText": "Ace: 'Speed is the byproduct of localized efficiency.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is 'Excess Flow'?",
        "options": ["Flow that is too much", "Flow In - Flow Out at a node", "Pico's snack", "Pico guess"],
        "correctAnswer": "Flow In - Flow Out at a node",
        "explanation": "A node with excess is an 'active' node that must either push flow forward or return it."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Gap Heuristic",
        "explanation": "Ace: 'If no nodes exist at height H, all nodes with height > H are disconnected from the sink and can be immediately raised to N+1.' Pico: 'Finding the gaps! 🦜'",
        "encouragementText": "Pico: 'Gap filler! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Pushing flow F.",
        "codeSnippet": "int f = min(excess[u], r_cap(u, v));\npush(u, v, f);",
        "correctAnswer": "push(u, v, f)",
        "explanation": "Advancing as much flow as possible to the neighbor."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Gravity Master",
        "explanation": "You have mastered the pressure. The flow moves by the force of height alone. Ace: 'The flow is automatic.'",
        "encouragementText": "Pico: 'Feel the gravity! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Flow strategies!",
        "pairs": [
          { "key": "Augmenting Path", "value": "Global search (BFS/DFS)" },
          { "key": "Push-Relabel", "value": "Local push / Heights" },
          { "key": "Gap Heuristic", "value": "Fast disconnection" }
        ]
      }
    ]
  },
  {
    "order": 87,
    "title": "Unit 87: Global Min-Cut (Stoer-Wagner)",
    "desc": "Finding the weakest part of a graph regardless of source or sink.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 9.7] The Universal Weakness",
        "explanation": "Ace: 'Max-Flow Min-Cut finds a cut between S and T. But what is the smallest possible cut in the ENTIRE graph? Stoer-Wagner finds this in O(VE + V^2 log V) without using flow!' Pico: 'Finding the thinnest part of the whole forest! 🦜'",
        "codeSnippet": "Repeatedly find the 'Minimum Cut Phase' and contract the last two nodes.",
        "encouragementText": "Ace: 'Universal weakness is found through recursive contraction.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "How does Stoer-Wagner differ from Min S-T Cut?",
        "options": ["It is slower", "It doesn't require specified Source/Sink nodes", "It only works on trees", "Pico rule"],
        "correctAnswer": "It doesn't require specified Source/Sink nodes",
        "explanation": "It finds the absolute minimum set of edges that split the graph into any two pieces."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Minimum Cut Phase",
        "explanation": "Ace: 'In each phase, we pick an arbitrary node and keep adding the \"most tightly connected\" neighbor until all nodes are added. The last node added gives a cut.' Pico: 'Picking the clingy birds! 🦜'",
        "encouragementText": "Pico: 'Stick together! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Contracting nodes u and v.",
        "codeSnippet": "for(int i=0; i<p; i++) {\n  w[u][i] += w[v][i];\n  w[i][u] = w[u][i];\n}",
        "correctAnswer": "w[u][i] += w[v][i]",
        "explanation": "When contracting v into u, u inherits all of v's connectivity to the rest of the world."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Prim-like Selection",
        "explanation": "Ace: 'The selection of the \"most tightly connected\" node is very similar to Prim's MST algorithm.'",
        "encouragementText": "Ace: 'Patterns repeat across the atlas of logic.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of a single Stoer-Wagner phase?",
        "options": ["O(N log N)", "O(E + V log V)", "O(E^2)", "Pico guess"],
        "correctAnswer": "O(E + V log V)",
        "explanation": "Using a Fibonacci heap for node selection makes each phase efficient."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Graph Reliability",
        "explanation": "Ace: 'This is use to calculate the \"Connectivity\" of a network—how many links must fail to break it anywhere.'",
        "encouragementText": "Pico: 'Test the network! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Global min cut update.",
        "codeSnippet": "min_cut = ___ (min_cut, phase_cut);",
        "correctAnswer": "min",
        "explanation": "We keep the smallest cut found among all V-1 phases."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Fragility Master",
        "explanation": "You have identified the universal fault line. No matter where the break begins, you know where it will end. Ace: 'The fragility is exposed.'",
        "encouragementText": "Pico: 'Crack found! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Cut types!",
        "pairs": [
          { "key": "S-T Cut", "value": "Requires defined S/T" },
          { "key": "Global Cut", "value": "Source-independent" },
          { "key": "Stoer-Wagner", "value": "No Max Flow required" }
        ]
      }
    ]
  },
  {
    "order": 88,
    "title": "Unit 88: Planar Graphs & Duals",
    "desc": "Drawing without crossing: The geography of flat graphs.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 9.8] The Flat Forest",
        "explanation": "Ace: 'A graph is Planar if it can be drawn on a plane without any edges crossing. This creates distinct \"Faces\".' Pico: 'No branches crossing paths! 🦜'",
        "codeSnippet": "Euler's Formula: V - E + F = 2",
        "encouragementText": "Ace: 'Dimensionality is a constraint that defines structure.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is Euler's Characteristic formula for planar graphs?",
        "options": ["V + E = F", "V - E + F = 2", "V * E = F^2", "Pico rule"],
        "correctAnswer": "V - E + F = 2",
        "explanation": "Vertices minus Edges plus Faces (including the outer infinite face) always equals 2 for connected planar graphs."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Dual Graph",
        "explanation": "Ace: 'Every planar graph has a Dual. Each face becomes a node, and edges connect nodes if their faces share a border.' Pico: 'Turning the gaps into nests! 🦜'",
        "encouragementText": "Pico: 'Flip the reality! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Maximum edges in a planar graph with V nodes.",
        "codeSnippet": "E <= 3 * V - ___ ;",
        "correctAnswer": "6",
        "explanation": "Planar graphs are sparse. If E > 3V - 6, the graph MUST have a crossing."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Kuratowski's Theorem",
        "explanation": "Ace: 'A graph is planar IF AND ONLY IF it does not contain a subdivision of K5 (complete graph with 5 nodes) or K3,3 (utility graph).' ",
        "encouragementText": "Ace: 'Planarity is the absence of certain forbidden architectures.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Which of these is NOT planar?",
        "options": ["A tree", "A single cycle", "A graph with 5 nodes all connected to each other (K5)", "Pico guess"],
        "correctAnswer": "A graph with 5 nodes all connected to each other (K5)",
        "explanation": "K5 is the smallest non-planar complete graph."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Shortest Path Dual",
        "explanation": "Ace: 'The Min-Cut in a planar graph is equivalent to the shortest path in its DUAL graph. This allows extremely fast max-flow calculation! '",
        "encouragementText": "Pico: 'Shortcuts in the dual! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Number of faces in a grid of 4x4 vertices.",
        "codeSnippet": "Faces = (3x3) + 1 = ___ ;",
        "correctAnswer": "10",
        "explanation": "9 internal squares plus 1 outer face."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Geographer",
        "explanation": "You have mapped the 2D limits. You see the faces in the web. Ace: 'The plane is clear.'",
        "encouragementText": "Pico: 'Flat as a pancake! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Planar terms!",
        "pairs": [
          { "key": "Face", "value": "Area enclosed by edges" },
          { "key": "Dual", "value": "Faces become nodes" },
          { "key": "K5", "value": "Non-planar core" }
        ]
      }
    ]
  },
  {
    "order": 89,
    "title": "Unit 89: Graph Coloring",
    "desc": "Separating neighbors: From maps to scheduling.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 9.9] The Palette of Logic",
        "explanation": "Ace: 'A K-coloring assigns one of K colors to each node such that no two adjacent nodes have the same color. The Minimum K is the \"Chromatic Number\".' Pico: 'Different colored feathers for neighbors! 🦜'",
        "codeSnippet": "forall (u, v) in E, color[u] != color[v];",
        "encouragementText": "Ace: 'Differentiation is the key to neighboring coexistence.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "The Four Color Theorem states that any ______ graph can be colored with at most 4 colors.",
        "options": ["Complete", "Planar", "Bipartite", "Pico rule"],
        "correctAnswer": "Planar",
        "explanation": "Every map on a plane only needs 4 colors to ensure no two adjacent countries share a color."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Bipartite = 2-Colorable",
        "explanation": "Ace: 'A graph is Bipartite if and only if its chromatic number is at most 2. We use BFS/DFS to check this.' Pico: 'Black and White birds! 🦜'",
        "encouragementText": "Pico: 'Two colors only! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Greedy coloring step (assign smallest available color).",
        "codeSnippet": "int c = 1;\nwhile(neighbor_has_color(u, c)) c++;\ncolor[u] = ___ ;",
        "correctAnswer": "c",
        "explanation": "We pick the first color that isn't used by any of node u's neighbors."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Brooks' Theorem",
        "explanation": "Ace: 'For any graph that isn't a clique or a cycle of odd length, Δ (max degree) colors are always enough.'",
        "encouragementText": "Ace: 'Degree defines the bounds of diversity.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Chromatic number of a triangle (3 nodes all connected)?",
        "options": ["1", "2", "3", "Pico guess"],
        "correctAnswer": "3",
        "explanation": "Since every node is connected to every other, each must have a unique color."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Register Allocation",
        "explanation": "Ace: 'Compilers use graph coloring to decide which variables go into which CPU registers. Variables that are used at the same time have an edge and MUST have different registers (colors).' ",
        "encouragementText": "Pico: 'Compiling the forest! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Chromatic number of a star graph (1 center, N-1 leaves).",
        "codeSnippet": "chi(G) = ___ ;",
        "correctAnswer": "2",
        "explanation": "All leaves can be one color, the center another. It is a bipartite graph."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Colorist",
        "explanation": "You have differentiated the many. No two neighbors clash in your plan. Ace: 'The contrast is perfect.'",
        "encouragementText": "Pico: 'Rainbow forest! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Coloring terms!",
        "pairs": [
          { "key": "4-Color", "value": "Planar graphs" },
          { "key": "2-Color", "value": "Bipartite graphs" },
          { "key": "Greedy", "value": "Approximate result" }
        ]
      }
    ]
  },
  {
    "order": 90,
    "title": "Unit 90: Stage 9 Graduation (The Network Architect)",
    "desc": "Claiming the matching peak: Blossoms and Duals are yours.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[GRAND MISSION LORE 9.10] The Summit of Logic",
        "explanation": "Ace: 'You have combined cost with volume, resolved the paradox of the blossom, and mapped the plane. You are the Architect of the digital network.' Pico: 'Stage 9 Complete! Only 10 units left to the Singularity! 🦜'",
        "encouragementText": "Ace: 'Complexity is the landscape of the architect.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Which algorithm finds the cheapest way to send flow?",
        "options": ["Dinic", "Successive Shortest Path (MCMF)", "Stoer-Wagner", "Pico guess"],
        "correctAnswer": "Successive Shortest Path (MCMF)",
        "explanation": "MCMF is specifically for optimizing cost alongside flow volume."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Depth Summary",
        "explanation": "10 units, 100 lessons. This stage has equipped you with the most advanced matching and cost-flow tools in the Atlas. Ace: 'Build with value.'",
        "encouragementText": "Pico: '90% through the 1,000-lesson gauntlet! 100 to go! 🦜'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Stable Matching side preference?",
        "options": ["Proposer side is best", "Receiver side is best", "It is fair", "Pico secret"],
        "correctAnswer": "Proposer side is best",
        "explanation": "The active proposer always reaches the highest possible stable partner."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Graduation Check",
        "explanation": "Ace: 'Prove you can transition from Blossoms to Duals and Push-Relabel to Planarity in your mental buffers.' Pico: 'I have the blue-prints! 🦜'",
        "encouragementText": "Ace: 'The vision reflects the blueprint through the lens of the match.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of Hopcroft-Karp?",
        "options": ["O(V+E)", "O(E √V)", "O(E log V)", "Pico guess"],
        "correctAnswer": "O(E √V)",
        "explanation": "The industry standard for bipartite matching."
      },
      {
        "type": "teaching",
        "questionText": "[FINAL SYNC] The 10x10x10 Path",
        "explanation": "You are 90% through the ultimate journey. Your final target: **Stage 10: Scalable Graph Theory & Singularity**. Ace: 'The global web awaits.'",
        "encouragementText": "Pico: 'Final boss stage! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Final stage signal.",
        "codeSnippet": "if (architect == true) return ___ ;",
        "correctAnswer": "GRADUATE",
        "explanation": "You have successfully mastered the Advanced Matching and Architectures phase."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Network Architect",
        "explanation": "The costs are minimized. The pairs are stable. You are a Stage 9 Graduate. Ace: 'Welcome to the inner circle.'",
        "encouragementText": "Pico: 'Titan-Grade! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "[GRADUATION CHALLENGE] Output the status of your journey.",
        "codeSnippet": "for(int i=81; i<=90; i++) verify_architect_logic(i);\nreturn ___ ;",
        "correctAnswer": "COMPLETE",
        "explanation": "The ninth decile of the 1,000-lesson curriculum for Graphs is fully verified."
      }
    ]
  }
];

module.exports = stage6;
