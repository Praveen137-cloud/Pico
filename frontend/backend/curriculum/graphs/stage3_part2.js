const stage3_part2 = [
  {
    order: 51,
    title: 'The K-th Path',
    desc: 'Finding the second, third, or K-th shortest path.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "The Backup Routes! What if the shortest path is blocked? We need the second shortest, and the third! 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Use Modified Dijkstra! Allow each bird to be visited up to K times in the Priority Queue. Only the Kth time you reach the destination, it is your answer! 🦜"', codeSnippet: 'while(!pq.empty()) {\n  {d, u} = pq.pop();\n  count[u]++;\n  if(count[u] == k && u == dest) return d;\n  if(count[u] <= k) {\n    for(v, w : adj[u]) pq.push({d+w, v});\n  }\n}' },
      { type: 'multiple_choice', questionText: 'In K-th shortest path, how many times can a node be processed?', options: ['K times', '1 time', 'Unlimited'], correctAnswer: 'K times' },
      { type: 'match_following', questionText: 'Match K-path pieces!', pairs: [{key: 'count[u]', value: 'Arrivals at node u'}, {key: 'count[dest] == k', value: 'Found k-th shortest'}, {key: 'O(K * E log V)', value: 'Complexity'}] },
      { type: 'programming_board', questionText: 'Condition to continue searching from node `u`.', codeSnippet: 'if (visitCount[u] ___ k) continue;', correctAnswer: '>' },
      { type: 'teaching', questionText: 'By Pico: "Complexity: O(K * E log V). This ensures you have a contingency plan for every flight! 🦜"' },
      { type: 'multiple_choice', questionText: 'Is the 1st shortest path always the same as standard Dijkstra?', options: ['Yes', 'No', '0'], correctAnswer: 'Yes' },
      { type: 'code_fill_in', questionText: 'Increase arrival count.', codeSnippet: '___[u]++;', correctAnswer: 'count' },
      { type: 'teaching', questionText: 'By Pico: "Strategic alternatives! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Ready for Plan B?"', options: ['SQUAWK YES!', 'No.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 52,
    title: 'Johnsons Algorithm',
    desc: 'All-pairs shortest paths in sparse graphs with negative weights.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "Sparse Wisdom! Floyd-Warshall is too slow (O(V^3)) for sparse forests. Johnson’s is faster! 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Combine Bellman-Ford and Dijkstra! 1. Use BF to find \'potential\' values for each node. 2. Re-weight edges to make them all POSITIVE. 3. Run Dijkstra V times! 🦜"', codeSnippet: 'NewWeight = W(u,v) + h[u] - h[v];\n// All NewWeights are guaranteed >= 0!' },
      { type: 'multiple_choice', questionText: 'Complexity of Johnson’s Algorithm?', options: ['O(V*E + V*E log V)', 'O(V^3)', 'O(E^2)'], correctAnswer: 'O(V*E + V*E log V)' },
      { type: 'match_following', questionText: 'Match Johnson steps!', pairs: [{key: 'Bellman-Ford', value: 'Handle negative weights'}, {key: 'Re-weighting', value: 'Ensure positive edges'}, {key: 'V x Dijkstra', value: 'Find all paths'}] },
      { type: 'programming_board', questionText: 'The potential function `h[u]` comes from running ___ on a dummy source.', codeSnippet: 'h[u] = result of ___ (src, u);', correctAnswer: 'Bellman-Ford' },
      { type: 'teaching', questionText: 'By Pico: "This is a masterpiece of algorithm combining. It handles negative weights AND remains efficient for sparse networks! 🦜"' },
      { type: 'multiple_choice', questionText: 'Initial `h` value for nodes in the dummy BFS?', options: ['Distance from dummy src', '0', 'Infinity'], correctAnswer: 'Distance from dummy src' },
      { type: 'code_fill_in', questionText: 'Calculate final distance.', codeSnippet: 'realDist = diagDist - h[src] ___ h[dest];', correctAnswer: '+' },
      { type: 'teaching', questionText: 'By Pico: "The Sparse King! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Is the map complete?"', options: ['Every route calculated!', 'No.', '0'], correctAnswer: 'Every route calculated!' }
    ]
  },
  {
    order: 53,
    title: 'Dials Speed (Dial’s)',
    desc: 'Optimized Dijkstra for small integer weights.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "The Small Edge Trick! If edge weights are small integers (0 to W), we don\'t need a full Priority Queue! 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Use BUCKETS! Have an array of `W*V` buckets. Place birds in bucket `dist[u]`. Scan buckets sequentially! 🦜"', codeSnippet: 'vector<int> buckets[W * V + 1];\nbuckets[0].push(src);\n// Iterate through buckets from 0 to max_dist...' },
      { type: 'multiple_choice', questionText: 'Complexity of Dial’s Algorithm?', options: ['O(V * W + E)', 'O(E log V)', 'O(V^3)'], correctAnswer: 'O(V * W + E)' },
      { type: 'match_following', questionText: 'Match Dial pieces!', pairs: [{key: 'Bucket i', value: 'Nodes with distance i'}, {key: 'W', value: 'Max edge weight'}, {key: 'Sequential scan', value: 'Auto-sorting'}] },
      { type: 'programming_board', questionText: 'Total number of buckets needed for max path length.', codeSnippet: 'BucketsCount = maxWeight ___ numNodes;', correctAnswer: '*' },
      { type: 'teaching', questionText: 'By Pico: "It turns Dijkstra into a near-linear search. Perfect for road maps where speed limits and lengths are small! 🦜"' },
      { type: 'multiple_choice', questionText: 'Is Dial’s faster than Dijkstra if W is very large?', options: ['No', 'Yes', 'Pico rule'], correctAnswer: 'No' },
      { type: 'code_fill_in', questionText: 'Move bird to new bucket.', codeSnippet: 'buckets[oldDist].erase(u); buckets[___].push(u);', correctAnswer: 'newDist' },
      { type: 'teaching', questionText: 'By Pico: "Bucket-sort Dijkstra! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Fast enough?"', options: ['SQUAWK YES!', 'No.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 54,
    title: 'Hopcroft-Karp (Matching)',
    desc: 'The fastest algorithm for Maximum Bipartite Matching.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "The Super Matchmaker! Hopcroft-Karp is faster than standard Max-Flow for matching birds to nests. 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "It uses BFS to find multiple SHORTEST augmenting paths simultaneously, then DFS to update. O(E * sqrt(V))! 🦜"', codeSnippet: 'while(bfs()) {\n  for(u : sets) if(!match[u]) dfs(u);\n}' },
      { type: 'multiple_choice', questionText: 'Complexity of Hopcroft-Karp?', options: ['O(E * sqrt(V))', 'O(V * E)', 'O(E^2)'], correctAnswer: 'O(E * sqrt(V))' },
      { type: 'match_following', questionText: 'Match H-K tools!', pairs: [{key: 'BFS', value: 'Build layered graph'}, {key: 'DFS', value: 'Augment multiple paths'}, {key: 'sqrt(V)', value: 'Limit on search layers'}] },
      { type: 'programming_board', questionText: 'Condition for a bird to be "free" (unmatched).', codeSnippet: 'if (matching[u] ___ NULL) q.push(u);', correctAnswer: '==' },
      { type: 'teaching', questionText: 'By Pico: "This is the \'Dinic\'s of Matching\'. It processes paths in batches of increasing length! 🦜"' },
      { type: 'multiple_choice', questionText: 'Can Hopcroft-Karp work on non-bipartite graphs?', options: ['No', 'Yes', '0'], correctAnswer: 'No' },
      { type: 'code_fill_in', questionText: 'Matching map update.', codeSnippet: 'matchL[u] = v; matchR[v] = ___;', correctAnswer: 'u' },
      { type: 'teaching', questionText: 'By Pico: "Perfect efficiency! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Maximum matches found?"', options: ['Optimization peak!', 'No.', '0'], correctAnswer: 'Optimization peak!' }
    ]
  },
  {
    order: 55,
    title: 'Min-Cut Max-Flow (Dual)',
    desc: 'Proving and applying the duality in network flow.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "The Structural Sieve! The Minimum Cut isn\'t just a number; it is the set of edges that form the weakest link. 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "After Max Flow, any edge (u, v) where `dist[u]` is reachable and `dist[v]` is NOT in the residual graph... is a Cut Edge! 🦜"', codeSnippet: 'if(reachable[u] && !reachable[v]) edges.push({u,v});' },
      { type: 'multiple_choice', questionText: 'In a residual graph, reachable means?', options: ['There is a path with capacity > 0', 'The node exists', '0'], correctAnswer: 'There is a path with capacity > 0' },
      { type: 'match_following', questionText: 'Match Duality logic!', pairs: [{key: 'Reachable', value: 'Part of Source set'}, {key: 'Unreachable', value: 'Part of Sink set'}, {key: 'Bridge Edge', value: 'The Min-Cut solution'}] },
      { type: 'programming_board', questionText: 'Run a simple ___ from source on residual graph to find reachable nodes.', codeSnippet: 'reachable = ___ (source, residual);', correctAnswer: 'bfs' },
      { type: 'teaching', questionText: 'By Pico: "The Max-Flow tells you WHAT can pass. The Min-Cut tells you WHERE to strengthen or break to stop the flow! 🦜"' },
      { type: 'multiple_choice', questionText: 'Min-Cut capacity of a graph with max-flow 100?', options: ['100', '0', '50'], correctAnswer: '100' },
      { type: 'code_fill_in', questionText: 'Identify cut edges.', codeSnippet: 'if(vis[u] && !vis[v] && original_cap[u][v] ___ 0)', correctAnswer: '>' },
      { type: 'teaching', questionText: 'By Pico: "Structural logic! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Is the cut optimal?"', options: ['SQUAWK YES!', 'No.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 56,
    title: 'Directed MST (Edmonds)',
    desc: 'Finding Minimum Spanning Tree in directed graphs (Chu-Liu/Edmonds).',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "Directed Spanning! Standard Kruskal’s doesn\'t work for arrows. We need Chu-Liu/Edmonds! 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Pick the cheapest incoming edge for every bird. If cycles exist, contract them into a single \'mega-node\' and repeat! 🦜"', codeSnippet: 'while(cycles_exist) {\n  pickMinEdges();\n  contractCycles();\n  adjustEdgeWeights();\n}' },
      { type: 'multiple_choice', questionText: 'Why is directed MST harder?', options: ['Picking best edges can form directed cycles', 'Arrows are heavy', '0'], correctAnswer: 'Picking best edges can form directed cycles' },
      { type: 'match_following', questionText: 'Match Edmonds steps!', pairs: [{key: 'Min Edge', value: 'Greedy choice'}, {key: 'Contract', value: 'Remove cycles'}, {key: 'Weight Adjust', value: 'Account for existing edges'}] },
      { type: 'programming_board', questionText: 'Complexity of Chu-Liu/Edmonds is approximately ___?', codeSnippet: 'Complexity = ___ ;', correctAnswer: 'O(V*E)' },
      { type: 'teaching', questionText: 'By Pico: "O(V * E). This is the definitive way to connect directed forest networks with minimal cost! 🦜"' },
      { type: 'multiple_choice', questionText: 'Does this algorithm work for unweighted graphs?', options: ['Yes (Any edge=1)', 'No', '0'], correctAnswer: 'Yes (Any edge=1)' },
      { type: 'code_fill_in', questionText: 'Identify and contract.', codeSnippet: 'if (___(v) == v) contract();', correctAnswer: 'cycle' },
      { type: 'teaching', questionText: 'By Pico: "Directed unity! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Is the root connected?"', options: ['One source, one forest!', 'No.', '0'], correctAnswer: 'One source, one forest!' }
    ]
  },
  {
    order: 57,
    title: 'Flow Variation (Min-Cost)',
    desc: 'Introduction to Minimum Cost Maximum Flow.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "The Profit Hunter! Send maximum flow, but with the minimum possible total COST (EdgeWeight * Flow). 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Use Successive Shortest Path! Instead of simple BFS (E-K), use Bellman-Ford or SPFA to find the \'cheapest\' path in terms of cost! 🦜"', codeSnippet: 'while(findCheapestPath(s, t)) {\n  augmentFlow();\n}' },
      { type: 'multiple_choice', questionText: 'In Min-Cost Max-Flow, we find paths using?', options: ['Shortest paths based on per-unit cost', 'Random BFS', '0'], correctAnswer: 'Shortest paths based on per-unit cost' },
      { type: 'match_following', questionText: 'Match Cost-Flow!', pairs: [{key: 'Capacity', value: 'Flow limit'}, {key: 'Cost', value: 'Price per flow'}, {key: 'SPFA', value: 'Negative cost handling'}] },
      { type: 'programming_board', questionText: 'Update cost based on flow sent.', codeSnippet: 'total_cost += flowSent * ___ ;', correctAnswer: 'edgeCost' },
      { type: 'teaching', questionText: 'By Pico: "O(MaxFlow * V * E). This solves the most complex logistics problems in the forest! 🦜"' },
      { type: 'multiple_choice', questionText: 'Initial cost for reversing an edge in Min-Cost Flow?', options: ['-cost', '0', 'cost'], correctAnswer: '-cost' },
      { type: 'code_fill_in', questionText: 'Find augmenting path by cost.', codeSnippet: 'if (___(s, t, p, d)) augment();', correctAnswer: 'spfa' },
      { type: 'teaching', questionText: 'By Pico: "Economical flood! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Did I save gold?"', options: ['Minimalist profit!', 'No.', '0'], correctAnswer: 'Minimalist profit!' }
    ]
  },
  {
    order: 58,
    title: 'Centroid Split (Tree-Graph)',
    desc: 'Centroid Decomposition for complex graph/tree hybrid queries.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "Forest Balance! Find a node (Centroid) such that removing it leaves sub-forests with at most half the birds! 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Build a Centroid Tree! Recurse on sub-forests. This allows you to solve distance/path queries in O(log N) depth! 🦜"', codeSnippet: 'int getCentroid(u, p, n) {\n  for(v : adj[u]) if(v != p && size[v] > n/2) return getCentroid(v, u, n);\n  return u;\n}' },
      { type: 'multiple_choice', questionText: 'A centroid existence guarantee?', options: ['Every tree has 1-2 centroids', 'None', 'Only if root is node 1'], correctAnswer: 'Every tree has 1-2 centroids' },
      { type: 'match_following', questionText: 'Match Centroid terms!', pairs: [{key: 'size[v] > n/2', value: 'Not a centroid'}, {key: 'Decomposition', value: 'Recursive splitting'}, {key: 'O(N log N)', value: 'Total work'}] },
      { type: 'programming_board', questionText: 'Condition for a node to be a centroid candidate.', codeSnippet: 'if (max_subtree_size ___ totalNodes / 2)', correctAnswer: '<=' },
      { type: 'teaching', questionText: 'By Pico: "Complexity: O(N log N). This is the elite merger of hierarchical and network logic! 🦜"' },
      { type: 'multiple_choice', questionText: 'Maximum depth of a Centroid Tree?', options: ['O(log N)', 'O(N)', 'O(1)'], correctAnswer: 'O(log N)' },
      { type: 'code_fill_in', questionText: 'Calculate component size.', codeSnippet: 'int sz = ___(u, -1);', correctAnswer: 'dfsSize' },
      { type: 'teaching', questionText: 'By Pico: "The balanced pivot! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Did I split the forest?"', options: ['Perfectly balanced!', 'No.', '0'], correctAnswer: 'Perfectly balanced!' }
    ]
  },
  {
    order: 59,
    title: 'Master Subject Review',
    desc: 'Global Review of Graphs Subject.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "THE ELITE FINALE! 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "From DFS ripples to Max Flow floods and Chu-Liu contractive logic. You are the Architect of the Interconnected World! 🦜"' },
      { type: 'multiple_choice', questionText: 'Dinic’s time complexity?', options: ['O(V^2 E)', 'O(V E^2)'], correctAnswer: 'O(V^2 E)' },
      { type: 'multiple_choice', questionText: 'Directed MST algorithm?', options: ['Chu-Liu/Edmonds', 'Kruskals'], correctAnswer: 'Chu-Liu/Edmonds' },
      { type: 'multiple_choice', questionText: 'K-th shortest path Dijkstra?', options: ['Wait for k-th arrival at dest', 'Visit node once'], correctAnswer: 'Wait for k-th arrival at dest' },
      { type: 'multiple_choice', questionText: 'Max Flow equals?', options: ['Min Cut', 'Euler Path'], correctAnswer: 'Min Cut' },
      { type: 'multiple_choice', questionText: 'Johnson’s algorithm strength?', options: ['Sparse graphs + Negative weights', 'Dense graphs'], correctAnswer: 'Sparse graphs + Negative weights' },
      { type: 'match_following', questionText: 'Master Final Match!', pairs: [{key: 'Graphs', value: 'Mastered!'}, {key: 'Pico', value: 'Speechless!'}, {key: 'Infinity', value: 'Reached!'}] },
      { type: 'teaching', questionText: 'By Pico: "Final unit: The Graph Academy Graduation! You are a God of Connections! SQUAWK! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Are you ready for the ultimate credential?"', options: ['BEYOND AND UP!', 'Wait...', '0'], correctAnswer: 'BEYOND AND UP!' }
    ]
  },
  {
    order: 60,
    title: 'Graphs Graduation',
    desc: 'The Subject Complete: Graph-God Master.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "GRADUATION DAY! You have completed all 60 units of the Graphs Academy. 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "You have decoded the social web, the structural flows, and the most complex paths in existence. You ARE the network! 🦜"' },
      { type: 'multiple_choice', questionText: 'What structure has NO cycles?', options: ['Tree', 'Graph', 'Network'], correctAnswer: 'Tree' },
      { type: 'multiple_choice', questionText: 'Shortest path in unweighted?', options: ['BFS', 'DFS'], correctAnswer: 'BFS' },
      { type: 'multiple_choice', questionText: 'MST goal?', options: ['Min total edge weight', 'Zero cycles'], correctAnswer: 'Min total edge weight' },
      { type: 'multiple_choice', questionText: 'Bipartite matching speed?', options: ['Hopcroft-Karp', 'Simple BFS'], correctAnswer: 'Hopcroft-Karp' },
      { type: 'multiple_choice', questionText: 'FlowCorrection technique?', options: ['Back-edges in residual', 'More flow'], correctAnswer: 'Back-edges in residual' },
      { type: 'multiple_choice', questionText: 'All-Pairs Shortest Path (Dense)?', options: ['Floyd-Warshall', 'Dijkstra'], correctAnswer: 'Floyd-Warshall' },
      { type: 'multiple_choice', questionText: 'DFS uses?', options: ['Stack / Recursion', 'Queue'], correctAnswer: 'Stack / Recursion' },
      { type: 'match_following', questionText: 'Subject Mastery Match!', pairs: [{key: 'Subject', value: 'Complete!'}, {key: 'World', value: 'Interconnected!'}, {key: 'Next', value: 'HEAPS!'}] },
      { type: 'teaching', questionText: 'By Pico: "Graphs are done. You have conquered the world. Next, we enter the Realm of Priorities: HEAPS & PRIORITY QUEUES! SQUAWK! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Are you ready to prioritize your next mission?"', options: ['SQUAWK YES!', 'Fly high!', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  }
];

module.exports = stage3_part2;
