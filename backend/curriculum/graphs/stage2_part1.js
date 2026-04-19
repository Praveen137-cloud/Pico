const stage2_part1 = [
  {
    order: 21,
    title: 'The Binary Maze',
    desc: 'Finding the shortest path in a grid of 0s and 1s.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "The Digital Labyrinth! Find the shortest flight from (0,0) to (N-1,N-1) in a grid of seeds (1) and walls (0). 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Use BFS! Since every hop costs exactly 1 energy, BFS guarantees the shortest path. Just keep track of (row, col) and the distance! 🦜"', codeSnippet: 'q.push({0,0,0});\nwhile(!q.empty()) {\n  {r, c, d} = q.pop();\n  if(r==n-1 && c==n-1) return d;\n  for(dir : 8_directions) {\n    nr = r + dir.r; nc = c + dir.c;\n    if(isValid(nr, nc) && grid[nr][nc] == 0) {\n      grid[nr][nc] = 1; q.push({nr, nc, d+1});\n    }\n  }\n}' },
      { type: 'multiple_choice', questionText: 'Why is BFS used for shortest path in a grid with uniform edge weights?', options: ['Guarantees first reach is shortest', 'It is faster than DFS', 'Pico rule'], correctAnswer: 'Guarantees first reach is shortest' },
      { type: 'match_following', questionText: 'Match Maze components!', pairs: [{key: 'Queue', value: 'Nodes to explore'}, {key: 'visited[][]', value: 'Prevent cycles'}, {key: '8 Directions', value: 'Surrounding movement'}] },
      { type: 'programming_board', questionText: 'Mark the cell as visited to avoid re-processing.', codeSnippet: 'grid[nr][nc] = ___;', correctAnswer: '1' },
      { type: 'teaching', questionText: 'By Pico: "O(N^2) time where N is the grid side. Every cell is visited once. Efficient flight through the maze! 🦜"' },
      { type: 'multiple_choice', questionText: 'How many neighbors in a 2D grid including diagonals?', options: ['8', '4', '9'], correctAnswer: '8' },
      { type: 'code_fill_in', questionText: 'Check if target is reached.', codeSnippet: 'if (r == n - 1 ___ c == m - 1)', correctAnswer: '&&' },
      { type: 'teaching', questionText: 'By Pico: "Navigating the squares! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Did I find the exit?"', options: ['SQUAWK YES!', 'No.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 22,
    title: 'Minimum Effort Path',
    desc: 'Finding a path where the maximum absolute difference between adjacent cells is minimized.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "The Easy Flight! Find a path from start to end such that the absolute hardest hop (height difference) is as small as possible. 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Use Dijkstra! The \'distance\' to a cell is the max-effort seen so far on that path. Always pick the cell with the smallest max-effort from the PQ! 🦜"', codeSnippet: 'pq.push({0, 0, 0});\nwhile(!pq.empty()) {\n  {diff, r, c} = pq.pop();\n  for(neighbor : neighbors) {\n    newEffort = max(diff, abs(grid[r][c] - grid[nr][nc]));\n    if(newEffort < dist[nr][nc]) { dist[nr][nc] = newEffort; pq.push({newEffort, nr, nc}); }\n  }\n}' },
      { type: 'multiple_choice', questionText: 'In "Path with Minimum Effort", the "distance" stored is?', options: ['Max difference on the path', 'Sum of differences', 'Number of hops'], correctAnswer: 'Max difference on the path' },
      { type: 'match_following', questionText: 'Match Effort logic!', pairs: [{key: 'abs(h1 - h2)', value: 'Current hop effort'}, {key: 'max(prev, current)', value: 'Path effort'}, {key: 'Min-PQ', value: 'Greedy choice'}] },
      { type: 'programming_board', questionText: 'Initialize effort distances.', codeSnippet: 'vector<vector<int>> effort(rows, vector<int>(cols, ___));', correctAnswer: 'INT_MAX' },
      { type: 'teaching', questionText: 'By Pico: "O(E log V) or O(Rows * Cols * log(Rows * Cols)). This is a classic modification of Dijkstra for a different kind of \'shortest\' path! 🦜"' },
      { type: 'multiple_choice', questionText: 'Does this algorithm find the shortest path in terms of hops?', options: ['No (Minimizes max-effort)', 'Yes', 'Pico rule'], correctAnswer: 'No (Minimizes max-effort)' },
      { type: 'code_fill_in', questionText: 'Update new effort.', codeSnippet: 'newEffort = ___(effort, abs(h1 - h2));', correctAnswer: 'max' },
      { type: 'teaching', questionText: 'By Pico: "Smooth trails! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Is the flight easy?"', options: ['Minimum friction!', 'No.', '0'], correctAnswer: 'Minimum friction!' }
    ]
  },
  {
    order: 23,
    title: 'Cheapest Flight (K Stops)',
    desc: 'Shortest path with a limit on the number of intermediate nodes.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "The Budget Flyer! Find the cheapest flight from A to B, but you can only make at most K intermediate stops. 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Use a Modified BFS or Bellman-Ford! Relax edges only up to K+1 levels. A queue of `{current_node, current_price, current_stops}` works best! 🦜"', codeSnippet: 'q.push({src, 0, 0});\nwhile(!q.empty()) {\n  {u, price, stops} = q.pop();\n  if(stops > k) continue;\n  for(v, w : adj[u]) {\n    if(price + w < dist[v]) { dist[v] = price + w; q.push({v, dist[v], stops + 1}); }\n  }\n}' },
      { type: 'multiple_choice', questionText: 'Why not use standard Dijkstra for Cheapest Flight with K stops?', options: ['Standard Dijkstra doesn’t account for stop limits', 'It is too slow', 'Pico rule'], correctAnswer: 'Standard Dijkstra doesn’t account for stop limits' },
      { type: 'match_following', questionText: 'Match Budget logic!', pairs: [{key: 'Stops > K', value: 'Stop exploration'}, {key: 'Price + W', value: 'Total Cost'}, {key: 'dist[v]', value: 'Best price for node'}] },
      { type: 'programming_board', questionText: 'Limit on intermediate stops.', codeSnippet: 'if (stops ___ k) break;', correctAnswer: '>' },
      { type: 'teaching', questionText: 'By Pico: "O(K * E). Since we only care about paths with <= K stops, a simple BFS-like relaxation for K+1 levels is optimal! 🦜"' },
      { type: 'multiple_choice', questionText: 'Result if no path exists with <= K stops?', options: ['-1', '0', 'Infinity'], correctAnswer: '-1' },
      { type: 'code_fill_in', questionText: 'Update cost.', codeSnippet: 'if (cost + w < ___[v])', correctAnswer: 'dist' },
      { type: 'teaching', questionText: 'By Pico: "Economy class mastery! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Did I save seeds?"', options: ['Frugal elite!', 'No.', '0'], correctAnswer: 'Frugal elite!' }
    ]
  },
  {
    order: 24,
    title: 'Network Delay (Dijkstra)',
    desc: 'Total time for a signal to reach all nodes from a source.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "Signal Spreading! How long does it take for a news-message to reach every bird in the forest starting from source K? 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Standard Dijkstra! Find the shortest time to every node. The final answer is the MAXIMUM time among all reachable nodes! 🦜"', codeSnippet: 'dijkstra(k);\nint maxT = 0;\nfor(t : dist) maxT = max(maxT, t);\nreturn (maxT == INF) ? -1 : maxT;' },
      { type: 'multiple_choice', questionText: 'The total time for network signal spread is determined by?', options: ['The time to reach the furthest node', 'The sum of all times', 'Pico rule'], correctAnswer: 'The time to reach the furthest node' },
      { type: 'match_following', questionText: 'Match Signal steps!', pairs: [{key: 'Dijkstra', value: 'Calculate arrival times'}, {key: 'max(dist)', value: 'Total network time'}, {key: 'INF check', value: 'Unreachable nodes'}] },
      { type: 'programming_board', questionText: 'Value to search for in the final distance list.', codeSnippet: 'totalTime = ___ (dist.begin(), dist.end());', correctAnswer: '*max_element' },
      { type: 'teaching', questionText: 'By Pico: "O(E log V). If any bird is unreachable (dist is still Infinity), return -1. 🦜"' },
      { type: 'multiple_choice', questionText: 'Is Dijkstra correct if wait times are always positive?', options: ['Yes', 'No', 'If Pico likes it'], correctAnswer: 'Yes' },
      { type: 'code_fill_in', questionText: 'Check for disconnected bird.', codeSnippet: 'if (time == ___) return -1;', correctAnswer: 'INT_MAX' },
      { type: 'teaching', questionText: 'By Pico: "Communicating with all! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Did they all hear me?"', options: ['SQUAWK YES!', 'No.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 25,
    title: 'Ways to Destination',
    desc: 'Counting the number of shortest paths to a destination.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "Multiple Routes! How many DIFFERENT paths have the same minimum total flight time? 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Combine Dijkstra with DP! Keep a `ways[]` array. If you find a BETTER distance, `ways[v] = ways[u]`. If you find an EQUAL distance, `ways[v] += ways[u]`! 🦜"', codeSnippet: 'if(newDist < dist[v]) {\n  dist[v] = newDist; ways[v] = ways[u];\n}\nelse if(newDist == dist[v]) {\n  ways[v] = (ways[v] + ways[u]) % MOD;\n}' },
      { type: 'multiple_choice', questionText: 'If you find a new path to node V with the SAME distance as current best?', options: ['Add paths: ways[v] += ways[u]', 'Reset paths: ways[v] = ways[u]', '0'], correctAnswer: 'Add paths: ways[v] += ways[u]' },
      { type: 'match_following', questionText: 'Match DP-Dijkstra!', pairs: [{key: 'dist[v] > d+w', value: 'Better path found'}, {key: 'dist[v] == d+w', value: 'Alternative path found'}, {key: 'ways[src] = 1', value: 'Base Case'}] },
      { type: 'programming_board', questionText: 'The MOD value to prevent overflow.', codeSnippet: 'ways = (ways + ways_to_u) % ___;', correctAnswer: '1000000007' },
      { type: 'teaching', questionText: 'By Pico: "O(E log V). This is a beautiful merging of shortest path logic and combinatorial counting! 🦜"' },
      { type: 'multiple_choice', questionText: 'Initial `ways` for the source bird?', options: ['1', '0', 'Infinity'], correctAnswer: '1' },
      { type: 'code_fill_in', questionText: 'Inherit ways from parent.', codeSnippet: 'if(d + w < dist[v]) { ways[v] = ___; }', correctAnswer: 'ways[u]' },
      { type: 'teaching', questionText: 'By Pico: "Infinite possibilities! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Are there many paths?"', options: ['A forest of routes!', 'No.', '0'], correctAnswer: 'A forest of routes!' }
    ]
  },
  {
    order: 26,
    title: 'Word Ladder (BFS)',
    desc: 'Changing word A to B one letter at a time through a dictionary.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "Language Flight! Change "HIT" to "COG" through "HOT", "DOT", "DOG". One letter change per hop! 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Treat each word as a NODE! Two words have an edge if they differ by exactly 1 letter. BFS finds the shortest transformation! 🦜"', codeSnippet: 'q.push({start, 1});\nwhile(!q.empty()) {\n  word = q.pop();\n  for(char : word) {\n    for(c : \'a\' to \'z\') {\n      newW = word; newW[i] = c;\n      if(set.contains(newW)) { q.push({newW, level+1}); set.remove(newW); }\n    }\n  }\n}' },
      { type: 'multiple_choice', questionText: 'Why remove the word from the set after adding to the queue?', options: ['To mark it as visited and avoid cycles', 'To save memory', 'Pico rule'], correctAnswer: 'To mark it as visited and avoid cycles' },
      { type: 'match_following', questionText: 'Match Ladder pieces!', pairs: [{key: 'Set', value: 'Dictionary + Visited'}, {key: 'Queue', value: 'Current transformations'}, {key: '26 Chars', value: 'Alphabet scan'}] },
      { type: 'programming_board', questionText: 'Length of the shortest chain if "HIT" -> "HOT" -> "DOT" -> "DOG" -> "COG".', codeSnippet: 'Length = ___ ;', correctAnswer: '5' },
      { type: 'teaching', questionText: 'By Pico: "Complexity: O(M^2 * N) where M is word length and N is dictionary size. BFS is the key to morphological evolution! 🦜"' },
      { type: 'multiple_choice', questionText: 'What if "COG" is not in the dictionary?', options: ['Result is 0 (No path)', 'Result is -1', 'Infinite loop'], correctAnswer: 'Result is 0 (No path)' },
      { type: 'code_fill_in', questionText: 'Scan the alphabet.', codeSnippet: 'for(char c = \'a\'; c <= ___; c++)', correctAnswer: "'z'" },
      { type: 'teaching', questionText: 'By Pico: "Literal metamorphosis! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Did the word change?"', options: ['Evolved elite!', 'No.', '0'], correctAnswer: 'Evolved elite!' }
    ]
  },
  {
    order: 27,
    title: 'Alien Dictionary (Topo)',
    desc: 'Determining the order of characters in an unknown language.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "Ancient Scrolls! Given a sorted list of words like ["wrt", "wrf", "er", "ett"], what is the alphabet order? 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Build a Graph! For adjacent words, find the first different character: that gives you an edge (char1 -> char2). Use TOPOLOGICAL SORT to find the order! 🦜"', codeSnippet: 'for(int i=0; i<n-1; i++) {\n  s1 = words[i]; s2 = words[i+1];\n  if(s1[j] != s2[j]) { adj[s1[j]].push_back(s2[j]); break; }\n}' },
      { type: 'multiple_choice', questionText: 'If "apple" comes before "apply" in the alien dictionary, what is the edge?', options: ['e -> y', 'a -> p', 'e -> l'], correctAnswer: 'e -> y' },
      { type: 'match_following', questionText: 'Match Alien logic!', pairs: [{key: 'Words order', value: 'Implicit edges'}, {key: 'Topo Sort', value: 'Result alphabet'}, {key: 'Cycle check', value: 'Invalid language check'}] },
      { type: 'programming_board', questionText: 'Total number of distinct birds (chars) to sort.', codeSnippet: 'Nodes count = ___.size();', correctAnswer: 'distinctChars' },
      { type: 'teaching', questionText: 'By Pico: "O(Total_Chars). If there is a cycle in the edges (like a > b and b > a), the language is invalid and there is NO order! 🦜"' },
      { type: 'multiple_choice', questionText: 'Alien order for ["ba", "bc", "ac"]?', options: ['b -> a -> c', 'a -> b -> c', 'c -> b -> a'], correctAnswer: 'b -> a -> c', explanation: 'b comes before a. b comes before c. order: b, a, c (or b, c, a)' },
      { type: 'code_fill_in', questionText: 'Find first difference.', codeSnippet: 'if (s1[j] != s2[j]) { adj[s1[j]].___(s2[j]); break; }', correctAnswer: 'push_back' },
      { type: 'teaching', questionText: 'By Pico: "Cracking the code! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Is the language clear?"', options: ['Deciphered!', 'No.', '0'], correctAnswer: 'Deciphered!' }
    ]
  },
  {
    order: 28,
    title: 'Course Schedule (I & II)',
    desc: 'Detecting cycles and finding ordering for dependencies.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "Academic Planning! To take Course 0, you must first take Course 1. Can you finish all courses? In what order? 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Course Schedule I: Cycle Detection (DFS/BFS). Course Schedule II: Topological Sort. 🦜"', codeSnippet: 'if(hasCycle(numCourses, prerequisites)) return false;\nelse return findOrder(numCourses, prerequisites);' },
      { type: 'multiple_choice', questionText: 'If you have a cycle [0->1, 1->0], can you complete the schedule?', options: ['No', 'Yes', 'Only with extra credit'], correctAnswer: 'No' },
      { type: 'match_following', questionText: 'Match Course steps!', pairs: [{key: 'Edge', value: 'Prerequisite link'}, {key: 'Cycle', value: 'Unfinishable courses'}, {key: 'Topo Result', value: 'Graduation path'}] },
      { type: 'programming_board', questionText: 'Condition for unfinishable schedule.', codeSnippet: 'if (detectCycle()) return ___;', correctAnswer: 'empty' },
      { type: 'teaching', questionText: 'By Pico: "O(V + E). This is the absolute classic application of Topological Sort. Manage your dependencies like a wise parrot! 🦜"' },
      { type: 'multiple_choice', questionText: 'Is Kahn’s algorithm suitable for this?', options: ['Yes (Iterative Topo)', 'No', '0'], correctAnswer: 'Yes (Iterative Topo)' },
      { type: 'code_fill_in', questionText: 'Push to topo result on finish.', codeSnippet: 'ans.push_back(u); counter___;', correctAnswer: '++' },
      { type: 'teaching', questionText: 'By Pico: "Educational roadmap! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Did you graduate?"', options: ['SQUAWK YES!', 'No.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 29,
    title: 'Tarjans Bridges (Elite)',
    desc: 'Finding edges whose removal increases connected components.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "Critical Links! Which social connections are the ONLY bridge between two groups? If they break, the forest splits! 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Use DFS with Discovery Time `tin` and Low Link Time `low`. If `low[child] > tin[parent]`, the edge (parent, child) is a BRIDGE! 🦜"', codeSnippet: 'void dfs(u, p) {\n  vis[u]=T; tin[u]=low[u]=timer++;\n  for(v : adj[u]) {\n    if(v == p) continue;\n    if(vis[v]) low[u] = min(low[u], tin[v]);\n    else {\n      dfs(v, u);\n      low[u] = min(low[u], low[v]);\n      if(low[v] > tin[u]) bridges.push({u, v});\n    }\n  }\n}' },
      { type: 'multiple_choice', questionText: 'Condition for an edge (u, v) to be a bridge?', options: ['low[v] > tin[u]', 'low[v] < tin[u]', 'low[v] == tin[u]'], correctAnswer: 'low[v] > tin[u]' },
      { type: 'match_following', questionText: 'Match Tarjan variables!', pairs: [{key: 'tin[u]', value: 'First discovery visit'}, {key: 'low[u]', value: 'Lowest level reachable'}, {key: 'timer', value: 'DFS clock'}] },
      { type: 'programming_board', questionText: 'Update low value from a back-edge.', codeSnippet: 'low[u] = min(low[u], ___ [v]);', correctAnswer: 'tin' },
      { type: 'teaching', questionText: 'By Pico: "O(V + E) in ONE pass! This is a legendary algorithm. It identifies the structural weak points of the whole network! 🦜"' },
      { type: 'multiple_choice', questionText: 'Can a bridge be part of a cycle?', options: ['No (Cycles mean multiple ways)', 'Yes', 'Pico rule'], correctAnswer: 'No (Cycles mean multiple ways)' },
      { type: 'code_fill_in', questionText: 'Propagate low value from child.', codeSnippet: 'low[u] = min(low[u], low[___]);', correctAnswer: 'v' },
      { type: 'teaching', questionText: 'By Pico: "Structural stability! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Found the weak links?"', options: ['Identified elite!', 'No.', '0'], correctAnswer: 'Identified elite!' }
    ]
  },
  {
    order: 30,
    title: 'Intermediate Master Point',
    desc: 'Reflecting on the Intermediate Graph stage.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "INTERMEDIATE STAGE HALFWAY! 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Mazes, Efforts, Budgets, and the Discovery of Critical Bridges. You are a network god! 🦜"' },
      { type: 'multiple_choice', questionText: 'Cheapest Flight K-stops complexity?', options: ['O(K * E)', 'O(E log V)'], correctAnswer: 'O(K * E)' },
      { type: 'multiple_choice', questionText: 'Ways to destination Dijkstra adjustment?', options: ['ways[v] += ways[u] for equal dist', 'ways[v] = ways[u] only'], correctAnswer: 'ways[v] += ways[u] for equal dist' },
      { type: 'multiple_choice', questionText: 'Alien dictionary edge find?', options: ['First different char', 'Last different char'], correctAnswer: 'First different char' },
      { type: 'multiple_choice', questionText: 'Tarjan’s Bridge condition?', options: ['low[child] > tin[parent]', 'low[child] < tin[parent]'], correctAnswer: 'low[child] > tin[parent]' },
      { type: 'multiple_choice', questionText: 'Word Ladder search type?', options: ['BFS', 'DFS'], correctAnswer: 'BFS' },
      { type: 'match_following', questionText: 'Master Pivot Match!', pairs: [{key: 'Networks', value: 'Calculated!'}, {key: 'Bridges', value: 'Found!'}, {key: 'Pico', value: 'Amazed!'}] },
      { type: 'teaching', questionText: 'By Pico: "Final 10 units of Intermediate Graphs: Strongly Connected Components, Articulation Points, and the DSU Unity! SQUAWK! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Are you ready for the deep unity?"', options: ['BEYOND AND UP!', 'Wait...', '0'], correctAnswer: 'BEYOND AND UP!' }
    ]
  }
];

module.exports = stage2_part1;
