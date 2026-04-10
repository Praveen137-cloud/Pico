const stage3_part1 = [
  {
    order: 41,
    title: 'The Social Archive',
    desc: 'Serializing and Deserializing a Graph.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "The Big Save! How do you turn a massive network of birds and links into a single string for the cloud, and restore it later? 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Use an Edge List format! A string like `3|0,1;1,2;2,0` tells us there are 3 birds and edges between (0,1), (1,2), and (2,0). 🦜"', codeSnippet: 'string res = to_string(V) + "|";\nfor(auto e : edges) res += to_string(e.u) + "," + to_string(e.v) + ";";' },
      { type: 'multiple_choice', questionText: 'Main challenge of graph serialization compared to trees?', options: ['Handling cycles and multiple edges', 'Graphs are always bigger', '0'], correctAnswer: 'Handling cycles and multiple edges' },
      { type: 'match_following', questionText: 'Match Archive pieces!', pairs: [{key: 'V', value: 'Number of birds'}, {key: ';', value: 'Edge separator'}, {key: ',', value: 'Node separator'}] },
      { type: 'programming_board', questionText: 'Format component for the adjacency information.', codeSnippet: 'res += to_string(u) + "," + to_string(v) + "___";', correctAnswer: ';' },
      { type: 'teaching', questionText: 'By Pico: "Complexity: O(V + E). This is essential for saving game maps, social networks, and forest databases! 🦜"' },
      { type: 'multiple_choice', questionText: 'How to handle weighted graphs in serialization?', options: ['Add a third value: u,v,w', 'Use two strings', 'Pico rule'], correctAnswer: 'Add a third value: u,v,w' },
      { type: 'code_fill_in', questionText: 'Split the edge string.', codeSnippet: 'vector<string> edges = split(data, ___);', correctAnswer: "';'" },
      { type: 'teaching', questionText: 'By Pico: "Restoring the web! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Am I backed up?"', options: ['SQUAWK YES!', 'No.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 42,
    title: 'Bitmasking the Forest',
    desc: 'Using bitmasks to represent sets of visited nodes in graph problems.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "The Memory Trick! If you have 10 nodes, you can represent WHICH ones you visited using a single integer (a bitmask)! 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Each bit is a bird. Bit 0 is bird 0. If the 3rd bit is 1, you visited bird 3. Mask `(1 << 3)` is your key! 🦜"', codeSnippet: 'int mask = 0;\nmask |= (1 << 3); // Visit bird 3\nif(mask & (1 << 3)) // Check bird 3' },
      { type: 'multiple_choice', questionText: 'Representing a set of 20 nodes with a bitmask requires an integer of at least?', options: ['32 bits', '20 bits', '64 bits'], correctAnswer: '20 bits' },
      { type: 'match_following', questionText: 'Match Masking tools!', pairs: [{key: '1 << i', value: 'Create bit for node i'}, {key: 'mask |=', value: 'Mark as visited'}, {key: 'mask &', value: 'Check visited'}] },
      { type: 'programming_board', questionText: 'Check if node `i` is NOT visited in the mask.', codeSnippet: 'if ( (mask & (1 << i)) ___ 0 )', correctAnswer: '==' },
      { type: 'teaching', questionText: 'By Pico: "Bitmasking is the foundation of the Traveling Salesman Problem (TSP) on small graphs. It allows for DP states like `dp[mask][current_node]`! 🦜"' },
      { type: 'multiple_choice', questionText: 'State of 3rd bit (index 2) in binary 101?', options: ['1 (Visited)', '0', '0'], correctAnswer: '1 (Visited)' },
      { type: 'code_fill_in', questionText: 'Turn on the i-th bit.', codeSnippet: 'new_mask = mask ___ (1 << i);', correctAnswer: '|' },
      { type: 'teaching', questionText: 'By Pico: "Binary efficiency! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Am I a bitmask expert?"', options: ['SQUAWK YES!', 'No.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 43,
    title: 'The Great Flood (Max Flow)',
    desc: 'Introduction to Maximum Flow in networks (Ford-Fulkerson).',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "The Water Works! You have pipes (edges) with capacities. How much water can flow from Source (S) to Sink (T)? 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Augmenting Paths! Keep finding any path from S to T with remaining capacity. Push the maximum possible flow through it, and update the residual graph! 🦜"', codeSnippet: 'while(findPath(s, t)) {\n  flow = minCapacityOnPath();\n  maxFlow += flow;\n  updateResidualGraph(flow);\n}' },
      { type: 'multiple_choice', questionText: 'The maximum amount of flow we can send through a path is?', options: ['The minimum capacity edge on that path', 'The maximum', 'The average'], correctAnswer: 'The minimum capacity edge on that path' },
      { type: 'match_following', questionText: 'Match Flow terms!', pairs: [{key: 'Source (S)', value: 'Water start'}, {key: 'Sink (T)', value: 'Water end'}, {key: 'Residual Graph', value: 'Remaining capacity'}] },
      { type: 'programming_board', questionText: 'Subtract the sent flow from the edge capacity.', codeSnippet: 'capacity[u][v] ___= flowSent;', correctAnswer: '-' },
      { type: 'teaching', questionText: 'By Pico: "Complexity: O(MaxFlow * E). You must also add BACK-EDGES with the same flow to allow the algorithm to correct itself (undo flow)! 🦜"' },
      { type: 'multiple_choice', questionText: 'Why do we need back-edges in Ford-Fulkerson?', options: ['To allow "undoing" of bad path choices', 'To make it faster', '0'], correctAnswer: 'To allow "undoing" of bad path choices' },
      { type: 'code_fill_in', questionText: 'Add to max flow total.', codeSnippet: 'total_flow ___= path_min_cap;', correctAnswer: '+=' },
      { type: 'teaching', questionText: 'By Pico: "Flowing rivers! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Is the sink full?"', options: ['Maximum throughput!', 'No.', '0'], correctAnswer: 'Maximum throughput!' }
    ]
  },
  {
    order: 44,
    title: 'Edmonds-Karp (BFS Flow)',
    desc: 'Implementing Max Flow using BFS for path finding.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "The Reliable Flood! Ford-Fulkerson can be slow if we pick bad paths. Edmonds-Karp uses BFS to pick the SHORTEST augmenting path first! 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "BFS ensures we find paths in terms of number of edges. This guarantees completion in O(V * E^2) time! 🦜"', codeSnippet: 'q.push(s);\nwhile(!q.empty()) {\n  curr = q.pop();\n  for(v : adj[curr]) {\n    if(!vis[v] && capacity[curr][v] > 0) {\n      parent[v] = curr; q.push(v);\n    }\n  }\n}' },
      { type: 'multiple_choice', questionText: 'Complexity of Edmonds-Karp?', options: ['O(V * E^2)', 'O(E log V)', 'O(V^2)'], correctAnswer: 'O(V * E^2)' },
      { type: 'match_following', questionText: 'Match E-K steps!', pairs: [{key: 'BFS', value: 'Find shortest augmentation'}, {key: 'parent[]', value: 'Trace path back'}, {key: 'Residual', value: 'Update capacities'}] },
      { type: 'programming_board', questionText: 'Condition to explore an edge in the BFS.', codeSnippet: 'if (!visited[v] && capacity[u][v] ___ 0)', correctAnswer: '>' },
      { type: 'teaching', questionText: 'By Pico: "The time complexity is independent of the actual flow values. Robust and elite! 🦜"' },
      { type: 'multiple_choice', questionText: 'Does Edmonds-Karp work with large capacities?', options: ['Yes', 'No', 'If Pico helps'], correctAnswer: 'Yes' },
      { type: 'code_fill_in', questionText: 'Reverse flow addition.', codeSnippet: 'capacity[v][u] ___= flow;', correctAnswer: '+=' },
      { type: 'teaching', questionText: 'By Pico: "Optimal flooding! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Is it faster?"', options: ['SQUAWK YES!', 'No.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 45,
    title: 'Dinics Algorithm (Elite)',
    desc: 'Advanced Max Flow using Level Graphs and Blocking Flows.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "The Tsunami! Dinic’s algorithm is the current gold standard for Maximum Flow in large networks. 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "It uses BFS to build a \'Level Graph\' and then DFS to send multiple paths of \'Blocking Flow\' at once! 🦜"', codeSnippet: 'while(bfs()) {\n  while(flow = dfs(s, INF)) {\n    maxFlow += flow;\n  }\n}' },
      { type: 'multiple_choice', questionText: 'Complexity of Dinic’s Algorithm?', options: ['O(V^2 * E)', 'O(V * E^2)', 'O(E log V)'], correctAnswer: 'O(V^2 * E)' },
      { type: 'match_following', questionText: 'Match Dinic pieces!', pairs: [{key: 'BFS', value: 'Build Level Graph'}, {key: 'DFS', value: 'Send Blocking Flow'}, {key: 'Level Graph', value: 'Only edges with level[v] == level[u]+1'}] },
      { type: 'programming_board', questionText: 'Condition for an edge to be in the level graph.', codeSnippet: 'if (level[v] == level[u] ___ 1)', correctAnswer: '+' },
      { type: 'teaching', questionText: 'By Pico: "For bipartite graphs, Dinic’s is even faster: O(E * sqrt(V)). Truly elite! 🦜"' },
      { type: 'multiple_choice', questionText: 'Is Dinic’s typically faster than Edmonds-Karp?', options: ['Yes', 'No', '0'], correctAnswer: 'Yes' },
      { type: 'code_fill_in', questionText: 'DFS blocking flow recursive limit.', codeSnippet: 'int pushed = dfs(v, ___ (pushed, cap - flow));', correctAnswer: 'min' },
      { type: 'teaching', questionText: 'By Pico: "The ultimate throughput! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Am I the flow god?"', options: ['SQUAWK YES!', 'No.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 46,
    title: 'Bipartite Matching (Flow)',
    desc: 'Solving Maximum Bipartite Matching using Max Flow.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "The Matchmaker! You have N birds and M nests. Each bird likes specific nests. Can everyone get a nest they like? 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Transform it! 1. Create a Super-Source (S) and Super-Sink (T). 2. Add edges from S to every bird with capacity 1. 3. Add edges from every nest to T with capacity 1. Max Flow = Max Matching! 🦜"', codeSnippet: 'S -> [Birds] cap 1\n[Birds] -> [Nests] cap 1\n[Nests] -> T cap 1' },
      { type: 'multiple_choice', questionText: 'Max Flow in this matching graph represents?', options: ['The maximum number of matches possible', 'The total birds', '0'], correctAnswer: 'The maximum number of matches possible' },
      { type: 'match_following', questionText: 'Match Matching parts!', pairs: [{key: 'S -> Bird', value: 'Bird can only pick one nest'}, {key: 'Nest -> T', value: 'Nest can only take one bird'}, {key: 'Bird -> Nest', value: 'A preference'}] },
      { type: 'programming_board', questionText: 'Capacity of edges between birds and nests in simple matching.', codeSnippet: 'Capacity = ___ ;', correctAnswer: '1' },
      { type: 'teaching', questionText: 'By Pico: "O(E * sqrt(V)) if using Dinic’s. It solves scheduling, seat assignments, and social pairings effortlessly! 🦜"' },
      { type: 'multiple_choice', questionText: 'If Max Flow is 5 and there are 10 birds, can everyone get a nest?', options: ['No (Only 5 can)', 'Yes', '0'], correctAnswer: 'No (Only 5 can)' },
      { type: 'code_fill_in', questionText: 'Create source edge.', codeSnippet: 'addEdge(source, birdId, ___);', correctAnswer: '1' },
      { type: 'teaching', questionText: 'By Pico: "Perfect pairings! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Are they all happy?"', options: ['Maximum harmony!', 'No.', '0'], correctAnswer: 'Maximum harmony!' }
    ]
  },
  {
    order: 47,
    title: 'Cut the Forest (Min-Cut)',
    desc: 'The Min-Cut Max-Flow Theorem.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "The Bottleneck Theorem! The Maximum Flow you can send from S to T is EXACTLY EQUAL to the Minimum Cut you can make to separate them! 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "A \'Cut\' is a set of edges that, if removed, disconnects S from T. Min-Cut is the cut with the smallest total capacity. 🦜"', codeSnippet: 'Max Flow == Min Cut Value' },
      { type: 'multiple_choice', questionText: 'How to find the Cut edges after running Max Flow?', options: ['Edges between nodes reachable from S in residual graph and those NOT reachable', 'Smallest edges', '0'], correctAnswer: 'Edges between nodes reachable from S in residual graph and those NOT reachable' },
      { type: 'match_following', questionText: 'Match Theorem pieces!', pairs: [{key: 'Max Flow', value: 'Throughput capacity'}, {key: 'Min Cut', value: 'Weakest structural link'}, {key: 'Total capacity', value: 'The bottleneck value'}] },
      { type: 'programming_board', questionText: 'Identity: Max Flow ___ Min Cut.', codeSnippet: 'If (maxFlow == minCut) return true;', correctAnswer: '==' },
      { type: 'teaching', questionText: 'By Pico: "This is profound! It links the capacity of flow with the structural strength of the graph. To stop a flood, you only need to break the bottleneck! 🦜"' },
      { type: 'multiple_choice', questionText: 'Value of Min-Cut if Max-Flow is 15?', options: ['15', '0', '30'], correctAnswer: '15' },
      { type: 'code_fill_in', questionText: 'Check reachability in residual.', codeSnippet: 'if (isReachable(s, u) && !isReachable(s, ___))', correctAnswer: 'v' },
      { type: 'teaching', questionText: 'By Pico: "The dual nature of graphs! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Did I find the gap?"', options: ['The bottleneck expert!', 'No.', '0'], correctAnswer: 'The bottleneck expert!' }
    ]
  },
  {
    order: 48,
    title: 'Seven Bridges (Euler)',
    desc: 'Finding an Euler Path or Circuit (Hierholzer’s).',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "The Grand Tour! Can you fly across EVERY edge in the forest exactly once and return home? 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Eulerian Circuit exists if all nodes have EVEN degrees. Use Hierholzer’s Algorithm: DFS while removing edges, and push nodes to result on return! 🦜"', codeSnippet: 'void dfs(u) {\n  while(!adj[u].empty()) {\n    v = adj[u].pop();\n    dfs(v);\n  }\n  res.push(u);\n}' },
      { type: 'multiple_choice', questionText: 'Degree requirement for an Undirected Euler Circuit?', options: ['All nodes have even degree', 'Exactly two nodes have odd degree', '0'], correctAnswer: 'All nodes have even degree' },
      { type: 'match_following', questionText: 'Match Euler terms!', pairs: [{key: 'Circuit', value: 'Fly every edge, return home'}, {key: 'Path', value: 'Fly every edge, start/end different'}, {key: 'Even Degree', value: 'Requirement for circuit'}] },
      { type: 'programming_board', questionText: 'Property of a graph with an Euler Path (not circuit).', codeSnippet: 'Exactly ___ nodes have odd degree.', correctAnswer: '2' },
      { type: 'teaching', questionText: 'By Pico: "Complexity: O(V + E). It’s a specialized DFS. Hierholzer’s ensures you don’t get stuck in a sub-loop before finishing the whole tour! 🦜"' },
      { type: 'multiple_choice', questionText: 'Euler circuit in a Triangle (0-1, 1-2, 2-0)?', options: ['Yes (All degree 2)', 'No', '0'], correctAnswer: 'Yes (All degree 2)' },
      { type: 'code_fill_in', questionText: 'Remove edge after visit.', codeSnippet: 'adj[u].___(v);', correctAnswer: 'erase' },
      { type: 'teaching', questionText: 'By Pico: "The perfect loop! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Did I fly it all?"', options: ['SQUAWK YES!', 'No.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 49,
    title: 'Hamiltonian Dreams',
    desc: 'Introduction to Hamiltonian Paths and the TSP.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "The Node Tour! Can you visit every bird (node) exactly once? This is MUCH harder than the Euler tour! 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "This is NP-Hard. No fast algorithm exists. For small forests (N < 20), we use Bitmask DP to find the shortest tour! 🦜"', codeSnippet: 'dp[mask][u] = min(dp[mask ^ (1<<u)][v] + dist[v][u])' },
      { type: 'multiple_choice', questionText: 'Difference between Euler and Hamiltonian tours?', options: ['Euler: Every Edge | Hamiltonian: Every Node', 'Same thing', '0'], correctAnswer: 'Euler: Every Edge | Hamiltonian: Every Node' },
      { type: 'match_following', questionText: 'Match Complexity!', pairs: [{key: 'Euler', value: 'O(V + E)'}, {key: 'Hamiltonian', value: 'O(2^V * V^2)'}, {key: 'TSP', value: 'Min weight Hamilton'}] },
      { type: 'programming_board', questionText: 'Bitmask for "All nodes visited" in a 10-node graph.', codeSnippet: 'DoneMask = (1 << ___) - 1;', correctAnswer: '10' },
      { type: 'teaching', questionText: 'By Pico: "While Euler is for postmen, Hamiltonian is for salesmen. Bitmasking makes the impossible... merely very expensive! 🦜"' },
      { type: 'multiple_choice', questionText: 'Is every Hamiltonian graph also Eulerian?', options: ['No', 'Yes', 'Pico rule'], correctAnswer: 'No' },
      { type: 'code_fill_in', questionText: 'DP state transition.', codeSnippet: 'memo[mask][u] = solve(mask ___ (1 << u), v) + dist[v][u];', correctAnswer: '|' },
      { type: 'teaching', questionText: 'By Pico: "The node conquest! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Did I visit every bird?"', options: ['One guest at a time!', 'No.', '0'], correctAnswer: 'One guest at a time!' }
    ]
  },
  {
    order: 50,
    title: 'Elite Master Checkpoint',
    desc: 'Reflecting on the God-Mode Graph stage.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "ELITE STAGE HALFWAY! 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Flows, Cuts, Bitmasks, and the Eulerian Tours. You are navigating the fourth dimension of logic! 🦜"' },
      { type: 'multiple_choice', questionText: 'Dinic’s vs E-K speed?', options: ['Dinic is faster (Blocking flow)', 'E-K is faster'], correctAnswer: 'Dinic is faster (Blocking flow)' },
      { type: 'multiple_choice', questionText: 'Max Flow equals?', options: ['Min Cut', 'Max Path'], correctAnswer: 'Min Cut' },
      { type: 'multiple_choice', questionText: 'Bipartite matching flow capacity?', options: ['1 per edge', 'Unlimited'], correctAnswer: '1 per edge' },
      { type: 'multiple_choice', questionText: 'Euler circuit degree property?', options: ['All Even', 'Exactly 2 odd'], correctAnswer: 'All Even' },
      { type: 'multiple_choice', questionText: 'Hamiltonian complexity?', options: ['Exponential (NP-Hard)', 'Linear'], correctAnswer: 'Exponential (NP-Hard)' },
      { type: 'match_following', questionText: 'Master Final Match!', pairs: [{key: 'Pico', value: 'Speechless!'}, {key: 'Flow', value: 'Unstoppable!'}, {key: 'Cuts', value: 'Precise!'}] },
      { type: 'teaching', questionText: 'By Pico: "Final 10 units: K-th paths, Johnson’s Algorithm, Dial’s optimization, and the Ultimate Graph Graduation! SQUAWK! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Are you ready for the final stretch?"', options: ['BEYOND AND UP!', 'Wait...', '0'], correctAnswer: 'BEYOND AND UP!' }
    ]
  }
];

module.exports = stage3_part1;
