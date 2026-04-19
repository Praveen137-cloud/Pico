const stage2_part2 = [
  {
    order: 31,
    title: 'The Vital Joints',
    desc: 'Finding Articulation Points in an undirected graph.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "The Vital Birds! Which birds areArticulations? If one flies away, the whole social network splits! 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Just like Tarjan’s Bridges, but we check NODES. For a parent `u`, if its child `v` has `low[v] >= tin[u]`, then `u` is an Articulation Point! 🦜"', codeSnippet: 'if(p != -1 && low[v] >= tin[u]) isArtic[u] = true;\nif(p == -1 && children > 1) isArtic[u] = true;' },
      { type: 'multiple_choice', questionText: 'Condition for an internal node `u` to be an articulation point?', options: ['low[child] >= tin[u]', 'low[child] < tin[u]', 'low[child] == 0'], correctAnswer: 'low[child] >= tin[u]' },
      { type: 'match_following', questionText: 'Match Joint logic!', pairs: [{key: 'low[v] >= tin[u]', value: 'Child cannot bypass u'}, {key: 'p == -1', value: 'Root node case'}, {key: 'children > 1', value: 'Root needs 2+ branches'}] },
      { type: 'programming_board', questionText: 'The special condition for the starting root of the DFS.', codeSnippet: 'if (p == -1 && ___ > 1) result.insert(u);', correctAnswer: 'children' },
      { type: 'teaching', questionText: 'By Pico: "O(V + E). The root is an articulation point ONLY if it has more than one disconnected child in the DFS tree. 🦜"' },
      { type: 'multiple_choice', questionText: 'If low[v] = 4 and tin[u] = 2, is u an articulation point?', options: ['Yes (4 >= 2)', 'No', '0'], correctAnswer: 'Yes (4 >= 2)' },
      { type: 'code_fill_in', questionText: 'Increment root child count.', codeSnippet: 'if(p == -1) ___++;', correctAnswer: 'children' },
      { type: 'teaching', questionText: 'By Pico: "Holding it all together! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Did I find the hubs?"', options: ['Critical birds identified!', 'No.', '0'], correctAnswer: 'Critical birds identified!' }
    ]
  },
  {
    order: 32,
    title: 'Strong Unity (Kosaraju)',
    desc: 'Finding Strongly Connected Components (SCC) in directed graphs.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "Strong Islands! In directed graphs, an SCC is a group of birds where every bird can reach every other bird. 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Kosaraju’s 3 Steps: 1. Topo-order (Stack). 2. REVERSE all edges. 3. DFS in stack-order to find islands! 🦜"', codeSnippet: '1. DFS -> Stack\n2. Reverse Adj\n3. DFS from Stack.top()' },
      { type: 'multiple_choice', questionText: 'Why reverse the edges in Kosaraju’s algorithm?', options: ['To prevent flying out of the SCC', 'To save space', 'Pico rule'], correctAnswer: 'To prevent flying out of the SCC' },
      { type: 'match_following', questionText: 'Match SCC steps!', pairs: [{key: 'Step 1', value: 'Sort by finish time'}, {key: 'Step 2', value: 'Transpose Graph'}, {key: 'Step 3', value: 'Discover Components'}] },
      { type: 'programming_board', questionText: 'Number of DFS calls in the 3rd step equals the number of ___?', codeSnippet: 'count = ___ ;', correctAnswer: 'SCCs' },
      { type: 'teaching', questionText: 'By Pico: "O(V + E). Because you reversed the flow, the DFS from the stack-leader can ONLY visit other birds inside its own SCC! 🦜"' },
      { type: 'multiple_choice', questionText: 'Can an SCC be a single node?', options: ['Yes', 'No', 'Only in loops'], correctAnswer: 'Yes' },
      { type: 'code_fill_in', questionText: 'Reverse adjacency entry.', codeSnippet: 'adjRev[v].___(u);', correctAnswer: 'push_back' },
      { type: 'teaching', questionText: 'By Pico: "Unbreakable bonds! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Found the strongholds?"', options: ['Islands mapped!', 'No.', '0'], correctAnswer: 'Islands mapped!' }
    ]
  },
  {
    order: 33,
    title: 'Unity of Disjoint Sets',
    desc: 'Introduction to Disjoint Set Union (DSU).',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "The Identity Card! Which birds belong to the same flock? DSU tells you instantly! 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Each flock has a LEADER bird. To see if two birds are together, check if they have the same leader! 🦜"', codeSnippet: 'int find(int i) {\n  if(parent[i] == i) return i;\n  return find(parent[i]);\n}\nvoid unite(int i, int j) { parent[find(i)] = find(j); }' },
      { type: 'multiple_choice', questionText: 'Primary purpose of DSU?', options: ['Grouping elements and checking connectivity', 'Sorting node values', '0'], correctAnswer: 'Grouping elements and checking connectivity' },
      { type: 'match_following', questionText: 'Match DSU Basics!', pairs: [{key: 'Parent[i]', value: 'Immediate superior'}, {key: 'find(i)', value: 'The ultimate leader'}, {key: 'unite(i, j)', value: 'Combine flocks'}] },
      { type: 'programming_board', questionText: 'Initialization: every bird is its own leader.', codeSnippet: 'for(int i=0; i<n; i++) parent[i] = ___ ;', correctAnswer: 'i' },
      { type: 'teaching', questionText: 'By Pico: "This simple version is O(N) in the worst case (a chain of leaders). We can make it nearly O(1) with elite path compression! 🦜"' },
      { type: 'multiple_choice', questionText: 'If 0->1 and 1->2, what is find(0)?', options: ['2', '1', '0'], correctAnswer: '2' },
      { type: 'code_fill_in', questionText: 'Base case of find.', codeSnippet: 'if (parent[i] == ___) return i;', correctAnswer: 'i' },
      { type: 'teaching', questionText: 'By Pico: "Identify the flock! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Are we one?"', options: ['Connected souls!', 'No.', '0'], correctAnswer: 'Connected souls!' }
    ]
  },
  {
    order: 34,
    title: 'Path Compression (Elite)',
    desc: 'Optimizing DSU Find and Union by Rank.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "Elite Efficiency! Every time a bird asks who the leader is, tell them to point directly at the leader forever! 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Path Compression: `parent[i] = find(parent[i])`. Union by Rank: Always attach the smaller flock to the larger leader! 🦜"', codeSnippet: 'int find(int i) {\n  if(parent[i] == i) return i;\n  return parent[i] = find(parent[i]);\n}\nvoid unite(i, j) {\n  rootI=find(i); rootJ=find(j);\n  if(rank[rootI] < rank[rootJ]) parent[rootI]=rootJ;\n  else if(...) { ... rank[rootI]++; }\n}' },
      { type: 'multiple_choice', questionText: 'Amortized time complexity of DSU with Path Compression and Union by Rank?', options: ['O(α(N)) - Inverse Ackermann', 'O(log N)', 'O(1)'], correctAnswer: 'O(α(N)) - Inverse Ackermann' },
      { type: 'match_following', questionText: 'Match Optimization!', pairs: [{key: 'Path Compression', value: 'Flatten the tree'}, {key: 'Union by Rank', value: 'Keep tree short'}, {key: 'α(N)', value: 'Practically constant'}] },
      { type: 'programming_board', questionText: 'The line that flattens the DSU tree.', codeSnippet: 'return parent[i] = ___ (parent[i]);', correctAnswer: 'find' },
      { type: 'teaching', questionText: 'By Pico: "Inverse Ackermann α(N) is so slow-growing that for all practical purposes (birds in the universe), it is less than 5. Nearly O(1) performance! 🦜"' },
      { type: 'multiple_choice', questionText: 'Does Path Compression change the leader?', options: ['No (Only the route)', 'Yes', 'Only if rank changes'], correctAnswer: 'No (Only the route)' },
      { type: 'code_fill_in', questionText: 'Attach to larger rank.', codeSnippet: 'if(rank[rootI] < rank[rootJ]) { parent[___] = rootJ; }', correctAnswer: 'rootI' },
      { type: 'teaching', questionText: 'By Pico: "Instant identification! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Am I super fast?"', options: ['Lighting elite!', 'No.', '0'], correctAnswer: 'Lighting elite!' }
    ]
  },
  {
    order: 35,
    title: 'The Full Connection',
    desc: 'Calculating operations to connect a disjoint graph.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "Bridge the Gaps! You have redundant wires in some parts of the forest. Can you move them to connect the islands? 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Use DSU! 1. Count extra edges (where both birds are already in the same flock). 2. Count number of islands. If extraEdges >= (islands-1), you can connect them all! 🦜"', codeSnippet: 'for(edge : edges) {\n  if(find(u) == find(v)) extra++;\n  else union(u, v);\n}\nif(extra >= islands - 1) return islands - 1;' },
      { type: 'multiple_choice', questionText: 'Minimum edges needed to connect K separate components?', options: ['K - 1', 'K', '1'], correctAnswer: 'K - 1' },
      { type: 'match_following', questionText: 'Match Connection math!', pairs: [{key: 'extraEdges', value: 'find(u) == find(v)'}, {key: 'islands', value: 'Distinct DSU sets'}, {key: 'Impossible', value: 'extra < islands - 1'}] },
      { type: 'programming_board', questionText: 'Condition for nodes being already connected.', codeSnippet: 'if (dsu.find(u) ___ dsu.find(v)) extraEdges++;', correctAnswer: '==' },
      { type: 'teaching', questionText: 'By Pico: "O(E * α(V)). This is a perfect real-world application of DSU for network stability! 🦜"' },
      { type: 'multiple_choice', questionText: 'If you have 4 islands, how many wires do you need?', options: ['3', '4', '1'], correctAnswer: '3' },
      { type: 'code_fill_in', questionText: 'Calculate final result.', codeSnippet: 'return (extraEdges >= numComponents - 1) ? (___ - 1) : -1;', correctAnswer: 'numComponents' },
      { type: 'teaching', questionText: 'By Pico: "Wiring the forest! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Is the network linked?"', options: ['Fully operational!', 'No.', '0'], correctAnswer: 'Fully operational!' }
    ]
  },
  {
    order: 36,
    title: 'Stones and Rows (DSU)',
    desc: 'Removing stones on the same row or column using DSU.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "Stone Removal! You can remove a stone if another stone exists in the same row or column. Find the MAX stones removed. 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Treat every row and column as a NODE in a graph! A stone at (r, c) connects row-node `r` and column-node `c`. Max Removed = `TotalStones - NumberOfDSUComponents`! 🦜"', codeSnippet: 'union(r, c + 10001);\ncount = set(find(all_stones)).size();\nreturn stones.size() - count;' },
      { type: 'multiple_choice', questionText: 'Why subtract the number of components from total stones?', options: ['Because every component must leave at least 1 "leader" stone', 'Pico math', '0'], correctAnswer: 'Because every component must leave at least 1 "leader" stone' },
      { type: 'match_following', questionText: 'Match Stone logic!', pairs: [{key: 'Row r', value: 'Group index (0-10000)'}, {key: 'Col c', value: 'Group index (10001-20000)'}, {key: 'Union(r, c)', value: 'Link groups via stone'}] },
      { type: 'programming_board', questionText: 'Total stones that stay in the forest.', codeSnippet: 'StonesStay = number of ___ ;', correctAnswer: 'components' },
      { type: 'teaching', questionText: 'By Pico: "O(N * α(N)). This turns a geometry problem into a graph connectivity problem! Powerful DSU! 🦜"' },
      { type: 'multiple_choice', questionText: 'Stones at (0,0) and (0,1). How many can be removed?', options: ['1', '2', '0'], correctAnswer: '1', explanation: 'Same row. 1 remains, 1 removed.' },
      { type: 'code_fill_in', questionText: 'Offset column IDs.', codeSnippet: 'dsu.unite(r, c + ___);', correctAnswer: '10001' },
      { type: 'teaching', questionText: 'By Pico: "Clean grids! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Did the stones vanish?"', options: ['Minimalist elite!', 'No.', '0'], correctAnswer: 'Minimalist elite!' }
    ]
  },
  {
    order: 37,
    title: 'Accounts Merge',
    desc: 'Merging accounts with duplicate email addresses using DSU.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "Email Merging! Multiple names but duplicate emails mean they belong to the same bird. Merge them! 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "1. Map each email to a unique ID. 2. For each account, `unite` all email-IDs to the first email-ID. 3. Group by DSU parent! 🦜"', codeSnippet: 'for(email : emails) {\n  if(!emailToId.count(email)) emailToId[email] = id++;\n  dsu.unite(emailToId[first], emailToId[email]);\n}' },
      { type: 'multiple_choice', questionText: 'In Accounts Merge, why do we use DSU?', options: ['To find groups of emails linked by the same account', 'To sort emails alphabetically', '0'], correctAnswer: 'To find groups of emails linked by the same account' },
      { type: 'match_following', questionText: 'Match Merge steps!', pairs: [{key: 'Map', value: 'Email to DSU Index'}, {key: 'Unite', value: 'Link all account emails'}, {key: 'Group', value: 'Gather by leader'}] },
      { type: 'programming_board', questionText: 'Component key for grouping emails.', codeSnippet: 'leader = dsu.find(emailId); result[___].push(email);', correctAnswer: 'leader' },
      { type: 'teaching', questionText: 'By Pico: "O(Total_Emails * α(N)). Now you can clean up the entire forest’s registration list! 🦜"' },
      { type: 'multiple_choice', questionText: 'If Account A has [1, 2] and Account B has [2, 3], are they the same?', options: ['Yes (Linked by email 2)', 'No', '0'], correctAnswer: 'Yes (Linked by email 2)' },
      { type: 'code_fill_in', questionText: 'Unite account emails.', codeSnippet: 'dsu.unite(idMap[emails[0]], idMap[___]);', correctAnswer: 'email' },
      { type: 'teaching', questionText: 'By Pico: "Unified identity! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Are the accounts clean?"', options: ['Perfectly merged!', 'No.', '0'], correctAnswer: 'Perfectly merged!' }
    ]
  },
  {
    order: 38,
    title: 'Power of Rank (DSU)',
    desc: 'Using DSU for complex grid problems (Large Island).',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "Island Expander! In a grid of 0s and 1s, change ONE 0 to 1 and find the largest possible island sum! 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "1. Group all current islands using DSU and store their SIZES. 2. For every 0, check its 4 neighbors, sum the sizes of their UNIQUE DSU leaders, and add 1! 🦜"', codeSnippet: 'for(neighbor : 4_dirs) {\n  leader = find(neighbor);\n  if(used.find(leader) == used.end()) {\n    totalSize += size[leader];\n    used.insert(leader);\n  }\n}' },
      { type: 'multiple_choice', questionText: 'Why use a "used" set for neighbors of a zero?', options: ['To avoid counting the same island twice', 'To save memory', 'Pico rule'], correctAnswer: 'To avoid counting the same island twice' },
      { type: 'match_following', questionText: 'Match Island Expansion!', pairs: [{key: 'Grid to ID', value: 'r * N + c'}, {key: 'Size Map', value: 'DSU leader to count'}, {key: 'Max Sum', value: 'Final answer'}] },
      { type: 'programming_board', questionText: 'Increment the island size for the new addition.', codeSnippet: 'max_island = max(max_island, potentialSize ___ 1);', correctAnswer: '+' },
      { type: 'teaching', questionText: 'By Pico: "O(N^2 * α(N)). This is the elite combination of DSU and Grid traversal! 🦜"' },
      { type: 'multiple_choice', questionText: 'Size of two adjacent islands of size 3 after merging?', options: ['7 (3 + 3 + 1)', '6', '1'], correctAnswer: '7 (3 + 3 + 1)' },
      { type: 'code_fill_in', questionText: 'Get leader of neighbor.', codeSnippet: 'int l = dsu.find(ni * n + ___);', correctAnswer: 'nj' },
      { type: 'teaching', questionText: 'By Pico: "Merging the shores! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Is the island massive?"', options: ['Mega-land elite!', 'No.', '0'], correctAnswer: 'Mega-land elite!' }
    ]
  },
  {
    order: 39,
    title: 'Cycle Logic (Redundant)',
    desc: 'Finding the edge that creates a cycle in an undirected graph.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "Redundant Connections! Which specific wire turned our forest tree into a cyclic graph? 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Iterate through the edges. For each edge (u, v), if `find(u) == find(v)`, this is the redundant edge! Return it immediately! 🦜"', codeSnippet: 'for(edge : edges) {\n  if(dsu.find(e.u) == dsu.find(e.v)) return e;\n  else dsu.unite(e.u, e.v);\n}' },
      { type: 'multiple_choice', questionText: 'How does DSU identify a cycle edge?', options: ['If find(u) == find(v), they were already connected elsewhere', 'If they have different leaders', '0'], correctAnswer: 'If find(u) == find(v), they were already connected elsewhere' },
      { type: 'match_following', questionText: 'Match Redundant terms!', pairs: [{key: 'Redundant', value: 'The Cycle Edge'}, {key: 'unite(u, v)', value: 'Building the tree'}, {key: 'find(u)', value: 'Checking parent'}] },
      { type: 'programming_board', questionText: 'Condition for the cycle-causing edge.', codeSnippet: 'if (rootU ___ rootV) return edge;', correctAnswer: '==' },
      { type: 'teaching', questionText: 'By Pico: "O(E * α(V)). This is the fastest way to debug connectivity! 🦜"' },
      { type: 'multiple_choice', questionText: 'In a tree with V nodes and V edges, how many redundant edges are there?', options: ['1', '0', 'V'], correctAnswer: '1' },
      { type: 'code_fill_in', questionText: 'Update component mapping.', codeSnippet: 'if(!dsu.unite(u, v)) return ___;', correctAnswer: 'edge' },
      { type: 'teaching', questionText: 'By Pico: "Pruning the network! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Did I find the extra wire?"', options: ['Perfectly located!', 'No.', '0'], correctAnswer: 'Perfectly located!' }
    ]
  },
  {
    order: 40,
    title: 'Stage 2 Graduation',
    desc: 'Intermediate Graph Mastery Complete.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "STAGE 2 COMPLETE! You have mastered the Articulation points, the Strongly Connected Islands, and the Power of the Disjoint Set! 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Grid Mazes and Binary Network Merging. You are a titan of logic! 🦜"' },
      { type: 'multiple_choice', questionText: 'Articulation point root rule?', options: ['>1 children in DFS-tree', 'Any child'], correctAnswer: '>1 children in DFS-tree' },
      { type: 'multiple_choice', questionText: 'Kosaraju’s second step?', options: ['Reverse edges', 'Sort by rank'], correctAnswer: 'Reverse edges' },
      { type: 'multiple_choice', questionText: 'DSU Find efficiency?', options: ['Path compression (O(α(N)))', 'Standard O(N)'], correctAnswer: 'Path compression (O(α(N)))' },
      { type: 'multiple_choice', questionText: 'Connecting islands required wires?', options: ['islands - 1', 'islands'], correctAnswer: 'islands - 1' },
      { type: 'multiple_choice', questionText: 'Stones removal formula?', options: ['Total - Components', 'Total - Edges'], correctAnswer: 'Total - Components' },
      { type: 'match_following', questionText: 'Final Intermediate Match!', pairs: [{key: 'Social', value: 'Solved!'}, {key: 'DSU', value: 'Unified!'}, {key: 'Pico', value: 'Salutes!'}] },
      { type: 'teaching', questionText: 'By Pico: "Next, we face the Master Stage: Bitmasking on Graphs, Maximum Flows, and the Traveling Bird Problem! SQUAWK! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Are you ready for the peak?"', options: ['BEYOND AND UP!', 'Wait...', '0'], correctAnswer: 'BEYOND AND UP!' }
    ]
  }
];

module.exports = stage2_part2;
