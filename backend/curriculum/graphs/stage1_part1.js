const stage1_part1 = [
  {
    order: 1,
    title: 'The Interconnected Web (Graphs)',
    desc: 'Introduction to Graph data structures.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "The Global Network! A graph is a set of birds (nodes) and the social links (edges) between them. Unlike trees, anyone can link to anyone! 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Graphs can be Directed (one-way flight) or Undirected (two-way). They are the ultimate maps of the world! 🦜"', codeSnippet: 'Nodes: {A, B, C}\nEdges: {(A,B), (B,C), (C,A)}' },
      { type: 'multiple_choice', questionText: 'What are the connections between nodes in a graph called?', options: ['Edges', 'Branches', 'Strings'], correctAnswer: 'Edges' },
      { type: 'match_following', questionText: 'Match Graph Types!', pairs: [{key: 'Directed', value: 'One-way arrow'}, {key: 'Undirected', value: 'Two-way link'}, {key: 'Cyclic', value: 'Path returns to start'}] },
      { type: 'programming_board', questionText: 'Term for a graph where every node is reachable from every other node.', codeSnippet: 'A graph is ___ if there is a path between all pairs.', correctAnswer: 'connected' },
      { type: 'teaching', questionText: 'By Pico: "Graphs represent social networks, maps, internet routing, and even the way your brain is wired! 🦜"' },
      { type: 'multiple_choice', questionText: 'Can a tree be considered a type of graph?', options: ['Yes (A graph with no cycles)', 'No', 'Only if it has leaves'], correctAnswer: 'Yes (A graph with no cycles)' },
      { type: 'code_fill_in', questionText: 'Identify a node.', codeSnippet: 'Graph v = {___ , edges};', correctAnswer: 'vertices' },
      { type: 'teaching', questionText: 'By Pico: "Mapping the infinity! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Is the world a graph?"', options: ['The ultimate connection!', 'No.', '0'], correctAnswer: 'The ultimate connection!' }
    ]
  },
  {
    order: 2,
    title: 'The Social Grid (Matrix)',
    desc: 'Representing graphs using Adjacency Matrices.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "Grid Logic! Use a 2D array where `adj[i][j] = 1` means bird `i` is linked to bird `j`. 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Perfect for dense graphs where many birds are linked. But beware: it uses O(N^2) space! 🦜"', codeSnippet: 'int adj[N][N];\n// Link 0 to 1\nadj[0][1] = 1;\nadj[1][0] = 1;' },
      { type: 'multiple_choice', questionText: 'Space complexity of an Adjacency Matrix?', options: ['O(V^2)', 'O(V + E)', 'O(E)'], correctAnswer: 'O(V^2)' },
      { type: 'match_following', questionText: 'Match Matrix values!', pairs: [{key: '1', value: 'Edge exists'}, {key: '0', value: 'No edge'}, {key: 'V x V', value: 'Matrix size'}] },
      { type: 'programming_board', questionText: 'Check if there is an edge between node 1 and 2.', codeSnippet: 'if (adj[1][___] == 1) return true;', correctAnswer: '2' },
      { type: 'teaching', questionText: 'By Pico: "Adding/Removing an edge is O(1). Checking if birds know each other is also O(1). Speed in the grid! 🦜"' },
      { type: 'multiple_choice', questionText: 'Why is Matrix bad for sparse graphs (few edges)?', options: ['Wastes too much memory on zeros', 'Too slow', 'Pico rule'], correctAnswer: 'Wastes too much memory on zeros' },
      { type: 'code_fill_in', questionText: 'Initialize matrix with zero.', codeSnippet: 'memset(adj, ___, sizeof(adj));', correctAnswer: '0' },
      { type: 'teaching', questionText: 'By Pico: "Geometric connections! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Am I in the grid?"', options: ['Digitally linked!', 'No.', '0'], correctAnswer: 'Digitally linked!' }
    ]
  },
  {
    order: 3,
    title: 'The Contact List (Adjacency List)',
    desc: 'Representing graphs using Adjacency Lists.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "Phonebooks of the Forest! Each bird keeps a list of only the friends it is directly linked to. 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Efficient for sparse graphs. Space: O(V + E). Most algorithms use this! 🦜"', codeSnippet: 'vector<int> adj[N];\n// Link 0 to 1\nadj[0].push_back(1);\nadj[1].push_back(0);' },
      { type: 'multiple_choice', questionText: 'Space complexity of an Adjacency List?', options: ['O(V + E)', 'O(V^2)', 'O(E)'], correctAnswer: 'O(V + E)' },
      { type: 'match_following', questionText: 'Match List Parts!', pairs: [{key: 'vector<int> adj[V]', value: 'Array of lists'}, {key: 'push_back', value: 'Add friend'}, {key: 'v + e', value: 'Memory footprint'}] },
      { type: 'programming_board', questionText: 'Add an edge between `u` and `v` in an undirected graph.', codeSnippet: 'adj[u].push_back(v); adj[___].push_back(u);', correctAnswer: 'v' },
      { type: 'teaching', questionText: 'By Pico: "Unlike the matrix, checking if an edge exists requires scanning the list, which can be O(Degree of node). 🦜"' },
      { type: 'multiple_choice', questionText: 'Adjacency list of a node with no edges?', options: ['Empty vector', 'Vector of 0', 'NULL'], correctAnswer: 'Empty vector' },
      { type: 'code_fill_in', questionText: 'Traverse neighbors of node `u`.', codeSnippet: 'for(int v : adj[___])', correctAnswer: 'u' },
      { type: 'teaching', questionText: 'By Pico: "Dynamic and slim! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Am I on the list?"', options: ['Part of the circle!', 'No.', '0'], correctAnswer: 'Part of the circle!' }
    ]
  },
  {
    order: 4,
    title: 'BFS: The Ripple (Graphs)',
    desc: 'Breadth-First Search in Graphs.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "The Ripple Effect! Spread out from a starting node, visiting all neighbors first, then their neighbors. 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Use a QUEUE and a VISITED array! This prevents you from flying in circles forever. 🦜"', codeSnippet: 'visited[start] = true; q.push(start);\nwhile(!q.empty()) {\n  u = q.pop();\n  for(v : adj[u]) {\n    if(!visited[v]) { visited[v] = true; q.push(v); }\n  }\n}' },
      { type: 'multiple_choice', questionText: 'BFS in a graph finds the?', options: ['Shortest path (in unweighted graph)', 'Longest path', 'Deepest node'], correctAnswer: 'Shortest path (in unweighted graph)' },
      { type: 'match_following', questionText: 'Match BFS tools!', pairs: [{key: 'Queue', value: 'FIFO order'}, {key: 'Visited[]', value: 'Cycle prevention'}, {key: 'O(V + E)', value: 'Complexity'}] },
      { type: 'programming_board', questionText: 'Mark node as visited before pushing to queue.', codeSnippet: 'if (!visited[neighbor]) { visited[neighbor] = ___; q.push(neighbor); }', correctAnswer: 'true' },
      { type: 'teaching', questionText: 'By Pico: "Complexity: O(V + E). Every node and every edge is explored exactly once. 🦜"' },
      { type: 'multiple_choice', questionText: 'If a graph is disconnected, does one BFS visit everyone?', options: ['No (Only the current component)', 'Yes', 'Pico rule'], correctAnswer: 'No (Only the current component)' },
      { type: 'code_fill_in', questionText: 'Extract node from queue.', codeSnippet: 'int u = q.___(); q.pop();', correctAnswer: 'front' },
      { type: 'teaching', questionText: 'By Pico: "Spreading the word! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Am I rippling?"', options: ['Layer by layer!', 'No.', '0'], correctAnswer: 'Layer by layer!' }
    ]
  },
  {
    order: 5,
    title: 'DFS: The Expedition (Graphs)',
    desc: 'Depth-First Search in Graphs.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "The Deep Expedition! Fly as far as you can down one path before backtracking to explore others. 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Use recursion or a STACK, plus a VISITED array! 🦜"', codeSnippet: 'void dfs(u) {\n  visited[u] = true;\n  for(v : adj[u]) {\n    if(!visited[v]) dfs(v);\n  }\n}' },
      { type: 'multiple_choice', questionText: 'DFS in a graph is most useful for?', options: ['Cycle detection & Topology', 'Shortest path', 'Level order'], correctAnswer: 'Cycle detection & Topology' },
      { type: 'match_following', questionText: 'Match DFS tools!', pairs: [{key: 'Recursion', value: 'The auto-stack'}, {key: 'Visited[]', value: 'Safety first'}, {key: 'Backtracking', value: 'Return to forks'}] },
      { type: 'programming_board', questionText: 'Number of times a node is visited in standard DFS.', codeSnippet: 'Exactly ___ time(s).', correctAnswer: '1' },
      { type: 'teaching', questionText: 'By Pico: "Complexity: O(V + E). Just like BFS, but it explores the depth of the forest instead of the surface! 🦜"' },
      { type: 'multiple_choice', questionText: 'DFS starting at 0 for 0-1, 1-2, 0-2? Possible path?', options: ['0-1-2', '0-1-0', 'Random'], correctAnswer: '0-1-2' },
      { type: 'code_fill_in', questionText: 'Check if neighbor needs visiting.', codeSnippet: 'if (!___ [v]) dfs(v);', correctAnswer: 'visited' },
      { type: 'teaching', questionText: 'By Pico: "Into the dark! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Am I deep enough?"', options: ['Touching the core!', 'No.', '0'], correctAnswer: 'Touching the core!' }
    ]
  },
  {
    order: 6,
    title: 'The Island Counter',
    desc: 'Finding the number of connected components.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "Isolated Groups! A graph can have multiple separate islands of birds that cannot fly to each other. 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Loop through every node. If it isn\'t visited, start a BFS/DFS and increment your counter! 🦜"', codeSnippet: 'for(int i=0; i<n; i++) {\n  if(!visited[i]) {\n    count++;\n    dfs(i);\n  }\n}' },
      { type: 'multiple_choice', questionText: 'How many connected components in a connected graph?', options: ['1', 'V', 'E'], correctAnswer: '1' },
      { type: 'match_following', questionText: 'Match Island terms!', pairs: [{key: 'Loop', value: 'Visit all starting points'}, {key: 'count++', value: 'New island found'}, {key: 'DFS(i)', value: 'Explore the whole island'}] },
      { type: 'programming_board', questionText: 'Condition to start a new traversal for a component.', codeSnippet: 'if (!___ [i]) { islands++; bfs(i); }', correctAnswer: 'visited' },
      { type: 'teaching', questionText: 'By Pico: "O(V + E). This logic lets you map separate networks in one pass through the global vertex list! 🦜"' },
      { type: 'multiple_choice', questionText: 'If a graph has 10 nodes and 0 edges, how many components?', options: ['10', '1', '0'], correctAnswer: '10' },
      { type: 'code_fill_in', questionText: 'Count the group.', codeSnippet: 'if(!vis[i]) { ___ ++; dfs(i); }', correctAnswer: 'ans' },
      { type: 'teaching', questionText: 'By Pico: "Counting the archipelago! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Are we isolated?"', options: ['One island at a time!', 'No.', '0'], correctAnswer: 'One island at a time!' }
    ]
  },
  {
    order: 7,
    title: 'Cycle Hunt (BFS)',
    desc: 'Detecting a cycle in an undirected graph using BFS.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "Loop-de-Loop! A cycle occurs if you meet a visited bird that IS NOT the one you just came from (your parent). 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Use a Queue of `{Current, Parent}` pairs! If you see a neighbor already visited and `neighbor != parent`, it is a cycle! 🦜"', codeSnippet: 'q.push({start, -1});\nwhile(!q.empty()) {\n  auto p = q.pop();\n  for(v : adj[u]) {\n    if(!vis[v]) { vis[v]=T; q.push({v, u}); }\n    else if(v != parent) return true;\n  }\n}' },
      { type: 'multiple_choice', questionText: 'In undirected cycle detection, a cycle is found if neighbor is visited and?', options: ['neighbor != parent', 'neighbor == parent', '0'], correctAnswer: 'neighbor != parent' },
      { type: 'match_following', questionText: 'Match Cycle logic!', pairs: [{key: 'vis[v]', value: 'Already seen'}, {key: 'v == parent', value: 'The path we came from'}, {key: 'v != parent', value: 'A shortcut cycle'}] },
      { type: 'programming_board', questionText: 'Store the parent info in the queue.', codeSnippet: 'queue.push({node, ___});', correctAnswer: 'parent' },
      { type: 'teaching', questionText: 'By Pico: "O(V + E). In an undirected graph, going back to your parent is NOT a cycle. It\'s just the way back home! 🦜"' },
      { type: 'multiple_choice', questionText: 'Can a tree have a cycle?', options: ['No (by definition)', 'Yes', '0'], correctAnswer: 'No (by definition)' },
      { type: 'code_fill_in', questionText: 'Check for back-edge.', codeSnippet: 'if(visited[v] && v ___ parent) return true;', correctAnswer: '!=' },
      { type: 'teaching', questionText: 'By Pico: "Breaking the loop! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Did I find a circle?"', options: ['Around and around!', 'No.', '0'], correctAnswer: 'Around and around!' }
    ]
  },
  {
    order: 8,
    title: 'Cycle Hunt (DFS)',
    desc: 'Detecting cycles using DFS.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "Deep Loop Detection! DFS makes cycle detection even simpler using recursion parameters. 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Pass the `parent` as an argument. If you see an already visited neighbor that is not the parent, a cycle exists! 🦜"', codeSnippet: 'bool dfs(u, p) {\n  vis[u] = true;\n  for(v : adj[u]) {\n    if(!vis[v]) {\n      if(dfs(v, u)) return true;\n    }\n    else if(v != p) return true;\n  }\n  return false;\n}' },
      { type: 'multiple_choice', questionText: 'Condition for cycle in undirected DFS?', options: ['visited[v] && v != parent', 'visited[v] && v == parent', '0'], correctAnswer: 'visited[v] && v != parent' },
      { type: 'match_following', questionText: 'Match DFS Cycle steps!', pairs: [{key: 'dfs(v, u)', value: 'u becomes v\'s parent'}, {key: 'true', value: 'Cycle propagated up'}, {key: 'O(V+E)', value: 'Scan effort'}] },
      { type: 'programming_board', questionText: 'Check result of recursive child search.', codeSnippet: 'if (dfs(v, u) ___ true) return true;', correctAnswer: '==' },
      { type: 'teaching', questionText: 'By Pico: "O(V + E). DFS is the standard way to find cycles in complex graph structures! 🦜"' },
      { type: 'multiple_choice', questionText: 'If DFS returns true, how many cycles are there?', options: ['At least one', 'Exactly one', 'V'], correctAnswer: 'At least one' },
      { type: 'code_fill_in', questionText: 'Initial call parent.', codeSnippet: 'if(dfs(i, ___)) return true;', correctAnswer: '-1' },
      { type: 'teaching', questionText: 'By Pico: "Sniffing out the loops! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Did I find the back-edge?"', options: ['SQUAWK YES!', 'No.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 9,
    title: 'Dual-Color (Bipartite)',
    desc: 'Checking if a graph is Bipartite (Colorable with 2 colors).',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "The Two-Party System! Can you divide all birds into two groups (Red and Blue) such that NO two friends have the same color? 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Use BFS/DFS! Color yourself 0, and color all neighbors 1. If you find a neighbor already colored with your own color, it is NOT Bipartite! 🦜"', codeSnippet: 'color[v] = 1 - color[u];\nif(color[v] == color[u]) return false;' },
      { type: 'multiple_choice', questionText: 'A graph is bipartite if and only if it has no?', options: ['Odd-length cycles', 'Even-length cycles', 'Edges'], correctAnswer: 'Odd-length cycles' },
      { type: 'match_following', questionText: 'Match Bipartite terms!', pairs: [{key: '0 and 1', value: 'The two colors'}, {key: '1 - current', value: 'Opposite color'}, {key: 'Conflict', value: 'Same color neighbors'}] },
      { type: 'programming_board', questionText: 'Assign opposite color to neighbor.', codeSnippet: 'color[v] = 1 ___ color[u];', correctAnswer: '-' },
      { type: 'teaching', questionText: 'By Pico: "O(V + E). Perfect for modeling matchmaking, job assignments, or colored maps! 🦜"' },
      { type: 'multiple_choice', questionText: 'Is a Square (cycle 4) bipartite?', options: ['Yes', 'No', 'If Pico likes it'], correctAnswer: 'Yes' },
      { type: 'code_fill_in', questionText: 'Conflict check.', codeSnippet: 'if (color[v] == ___) return false;', correctAnswer: 'color[u]' },
      { type: 'teaching', questionText: 'By Pico: "Harmonious division! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Am I colorful?"', options: ['SQUAWK YES!', 'No.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 10,
    title: 'Master Point (Foundation)',
    desc: 'Reflecting on the Graph Basics.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "FOUNDATION HALFWAY! 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Matrix, List, BFS, DFS, and the detection of islands and cycles. You are a graph architect! 🦜"' },
      { type: 'multiple_choice', questionText: 'Adjacency Matrix space?', options: ['O(V^2)', 'O(V+E)'], correctAnswer: 'O(V^2)' },
      { type: 'multiple_choice', questionText: 'Bipartite graph odd cycle check?', options: ['Bipartite if no odd cycles', 'Bipartite if odd cycles'], correctAnswer: 'Bipartite if no odd cycles' },
      { type: 'multiple_choice', questionText: 'BFS shortest path property?', options: ['True for unweighted', 'False'], correctAnswer: 'True for unweighted' },
      { type: 'multiple_choice', questionText: 'DFS cycle detection condition?', options: ['vis[v] && v != parent', 'vis[v]'], correctAnswer: 'vis[v] && v != parent' },
      { type: 'multiple_choice', questionText: 'Graph Connected Components finding tool?', options: ['BFS or DFS', 'Matrix only'], correctAnswer: 'BFS or DFS' },
      { type: 'match_following', questionText: 'Master Pivot Match!', pairs: [{key: 'Pico', value: 'Salutes!'}, {key: 'Network', value: 'Mapped!'}, {key: 'Graphs', value: 'Mastered!'}] },
      { type: 'teaching', questionText: 'By Pico: "Final 10 units of Foundation: Directed Cycles, Topological Sorting, and the start of the Shortest Path algorithms! SQUAWK! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Are you ready to fly into directed space?"', options: ['BEYOND AND UP!', 'Wait...', '0'], correctAnswer: 'BEYOND AND UP!' }
    ]
  }
];

module.exports = stage1_part1;
