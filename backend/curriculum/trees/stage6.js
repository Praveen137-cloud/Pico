const stage6 = [
  {
    "order": 81,
    "title": "Unit 81: Heavy-Light Decomposition (HLD) Intro",
    "desc": "Flattening the complex tree into manageable logarithmic paths.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 9.1] The Arteries of the Forest",
        "explanation": "Ace: 'In a giant tree, ranges aren't just in subtrees; they are along paths. HLD decomposes every edge into either a \"Heavy\" edge (to the largest child) or a \"Light\" edge. This ensures any path from Root to Leaf crosses only log N light edges.' Pico: 'Creating super-highways for the birds! 🦜'",
        "codeSnippet": "void dfs_sz(int u) {\n  sz[u] = 1;\n  for(int &v : adj[u]) {\n    dfs_sz(v);\n    sz[u] += sz[v];\n    if(sz[v] > sz[adj[u][0]]) swap(v, adj[u][0]);\n  }\n}",
        "encouragementText": "Ace: 'Decomposition is the first step toward universal query power.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What defines a 'Heavy' edge in HLD?",
        "options": ["The edge to the first child", "The edge to the child with the largest subtree", "The edge to the tallest leaf", "Pico rule"],
        "correctAnswer": "The edge to the child with the largest subtree",
        "explanation": "Heavy edges form continuous chains that can be processed as contiguous segments in an array."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] HLD Chains",
        "explanation": "Ace: 'Heavy edges connect to form chains. Every node belongs to exactly one chain. We map these chains into a single Segment Tree using their DFS order.' Pico: 'One long line of nests! 🦜'",
        "encouragementText": "Pico: 'Chain it up! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Mapping node 'u' to Segment Tree position.",
        "codeSnippet": "pos[u] = ++timer;\nhead[v] = (v == adj[u][0] ? head[u] : v);\ndfs_hld(v);",
        "correctAnswer": "head[u]",
        "explanation": "The 'head' of a child is the same as the parent if it is part of the same heavy chain."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Path Complexity",
        "explanation": "Ace: 'Any path between two nodes in the tree can be decomposed into at most O(log N) heavy chains. This is why HLD works.'",
        "encouragementText": "Ace: 'The path is long, but the shortcuts are few.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the complexity of a path update/query in HLD using a Segment Tree?",
        "options": ["O(N)", "O(log^2 N)", "O(log N)", "Pico guess"],
        "correctAnswer": "O(log^2 N)",
        "explanation": "We visit log N chains, and for each chain, we perform a log N segment tree query."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Heavy vs Light",
        "explanation": "Ace: 'HLD ensures that as you move towards the root, each light edge you cross at least doubles the size of the current subtree.'",
        "encouragementText": "Pico: 'Double or nothing! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Moving up the chains for path query.",
        "codeSnippet": "while (head[u] != head[v]) {\n  if (dep[head[u]] < dep[head[v]]) swap(u, v);\n  query_seg(pos[head[u]], pos[u]);\n  u = ___ [head[u]];\n}",
        "correctAnswer": "parent",
        "explanation": "Jumping to the parent of the current chain's head to move to the next chain."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Highway Engineer",
        "explanation": "You have mapped the heavy chains. No path in the forest is more than a few jumps away. Ace: 'The paths are paved.'",
        "encouragementText": "Pico: 'Fast lanes! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match HLD terms!",
        "pairs": [
          { "key": "Heavy Edge", "value": "To largest child" },
          { "key": "Chain Head", "value": "Top of a heavy segment" },
          { "key": "DFS Order", "value": "SegTree mapping" }
        ]
      }
    ]
  },
  {
    "order": 82,
    "title": "Unit 82: HLD Path Queries & Updates",
    "desc": "Applying the Segment Tree logic to tree paths.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 8.2] The Pulse of the Path",
        "explanation": "Ace: 'With HLD, we can now add 10 to every node on the path from U to V. We jump up the heavy chains, updating the Segment Tree ranges for each segment.' Pico: 'Zoning the highways! 🦜'",
        "codeSnippet": "while(head[u] != head[v]) {\n  if(dep[head[u]] < dep[head[v]]) swap(u, v);\n  update_seg(1, 0, n-1, pos[head[u]], pos[u], x);\n  u = parent[head[u]];\n}",
        "encouragementText": "Ace: 'Transformation at scale is the definition of power.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What do we do when U and V are finally on the same heavy chain?",
        "options": ["Stop", "Perform one final Segment Tree query on the internal range between them", "Reset", "Pico rule"],
        "correctAnswer": "Perform one final Segment Tree query on the internal range between them",
        "explanation": "The remaining segment is just a contiguous range in our mapped array."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Edge Weights in HLD",
        "explanation": "Ace: 'To store values on EDGES instead of NODES, we assign each edge's value to the child node it connects to. During path queries, we exclude the LCA node from the final range.' Pico: 'Nodes hold edge secrets! 🦜'",
        "encouragementText": "Pico: 'Top node is free! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Handling subtree queries in HLD.",
        "codeSnippet": "Subtree(u) = Query_Seg(pos[u], pos[u] + ___ - 1);",
        "correctAnswer": "sz[u]",
        "explanation": "Because DFS order for HLD preserves subtrees as contiguous blocks."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Time-Space Tradeoff",
        "explanation": "Ace: 'HLD takes O(N) space and O(N) build time. It is generally faster than Centroid Decomposition for path queries, but slower than Link-Cut Trees for dynamic forests.'",
        "encouragementText": "Ace: 'Choosing the right tool is the first step of the elite artist.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "HLD vs Centroid Decomposition: Which is better for path updates?",
        "options": ["HLD", "Centroid Decomposition", "Both same", "Pico guess"],
        "correctAnswer": "HLD",
        "explanation": "HLD natively supports range updates via Segment Trees on its paths; Centroid Decomposition is better for distance-based subtree properties."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Multiple Queries",
        "explanation": "Ace: 'You can query Path Sum, Path Max, Path GCD... anything that works on a Segment Tree now works on your Tree Paths!'",
        "encouragementText": "Pico: 'Infinite possibilities! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Final range query between u and v on same chain.",
        "codeSnippet": "if (dep[u] > dep[v]) swap(u, v);\nres = merge(res, query_seg(pos[u], ___ ));",
        "correctAnswer": "pos[v]",
        "explanation": "Querying the contiguous segment between the two nodes that now share a chain."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Path Ruler",
        "explanation": "You have imposed order on the wandering paths. No road in the forest is hidden from your gaze. Ace: 'The route is calculated.'",
        "encouragementText": "Pico: 'Road trip! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match HLD operations!",
        "pairs": [
          { "key": "pos[u]", "value": "SegTree Index" },
          { "key": "head[u]", "value": "Chain Jump point" },
          { "key": "sz[u]", "value": "Subtree range size" }
        ]
      }
    ]
  },
  {
    "order": 83,
    "title": "Unit 83: Centroid Decomposition Foundations",
    "desc": "The divide and conquer strategy for tree distances.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 9.3] The Balance of Mass",
        "explanation": "Ace: 'A Centroid of a tree is a node whose removal leaves no component larger than N/2. By finding centroids recursively, we build a \"Centroid Tree\" of height log N.' Pico: 'Finding the perfect balance of the flock! 🦜'",
        "codeSnippet": "int get_centroid(int u, int p, int n) {\n  for(int v : adj[u]) \n    if(v != p && !vis[v] && sz[v] > n/2) return get_centroid(v, u, n);\n  return u;\n}",
        "encouragementText": "Ace: 'Balance is the leverage of the conqueror.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "How many centroids can a tree have?",
        "options": ["Exactly 1", "At most 2", "Unlimited", "Pico rule"],
        "correctAnswer": "At most 2",
        "explanation": "If a tree has two centroids, they are always adjacent."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Centroid Tree",
        "explanation": "Ace: 'The Centroid Tree is a DIFFERENT tree structure from the original. Its height is O(log N), allowing various distance queries.' Pico: 'A new map of the forest! 🦜'",
        "encouragementText": "Pico: 'New map, who dis? 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Centroid Decomposition recursive step.",
        "codeSnippet": "vis[center] = true;\nfor(int v : adj[center]) {\n  if(!vis[v]) {\n    int next = get_centroid(v, -1, new_sz);\n    centroid_parent[next] = ___ ;\n  }\n}",
        "correctAnswer": "center",
        "explanation": "Linking the new sub-centroid to the current centroid in the decomposition hierarchy."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Point-to-All Distances",
        "explanation": "Ace: 'In the original tree, the path between any two nodes U and V passes through exactly one of their common ancestors in the Centroid Tree.'",
        "encouragementText": "Ace: 'Universal truths are reachable from the center.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Height of the Centroid Tree?",
        "options": ["O(N)", "O(log N)", "O(1)", "Pico guess"],
        "correctAnswer": "O(log N)",
        "explanation": "Since each level reduces the subtree size by at least half, there are at most log N levels."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Application: Range of Path Lengths",
        "explanation": "Ace: 'Use Centroid Decomposition to answer: \"How many paths have length between K1 and K2?\"'",
        "encouragementText": "Pico: 'Count the paths! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Marking nodes as visited during decomposition.",
        "codeSnippet": "___ [centroid] = true;",
        "correctAnswer": "vis",
        "explanation": "We 'remove' the centroid from the graph to process the remaining disconnected components."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Center Seeker",
        "explanation": "You have located the balance points. The forest's mass is under your control. Ace: 'The center holds.'",
        "encouragementText": "Pico: 'Perfect balance! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Tree structures!",
        "pairs": [
          { "key": "Original Tree", "value": "O(N) Height" },
          { "key": "Centroid Tree", "value": "O(log N) Height" },
          { "key": "HLD Chains", "value": "Log N Segments" }
        ]
      }
    ]
  },
  {
    "order": 84,
    "title": "Unit 84: Centroid Distance Queries",
    "desc": "Answering global path queries using the centroid hierarchy.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 8.4] The Ancestor Probe",
        "explanation": "Ace: 'To update/query property of node U relative to ALL other nodes, we climb up U's ancestors in the Centroid Tree. Every distance query involving U can be handled through these O(log N) nodes.' Pico: 'Climbing the family tree! 🦜'",
        "codeSnippet": "void update(int u) {\n  for(int v = u; v; v = centroid_parent[v]) {\n    data[v] = min(data[v], dist(u, v));\n  }\n}",
        "encouragementText": "Ace: 'Perspective shift is the key to global awareness.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why does climbing Centroid Ancestors work for distances?",
        "options": ["LCA in centroid tree is always on the path in original tree", "Every path (u, v) in original tree has exactly one node that is an ancestor of both in the Centroid tree", "Distance is always 0", "Pico rule"],
        "correctAnswer": "Every path (u, v) in original tree has exactly one node that is an ancestor of both in the Centroid tree",
        "explanation": "The highest (first) node that separated U and V during the recursive decomposition MUST be on their original path."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Dynamic Point Updates",
        "explanation": "Ace: 'This allows us to answer \"What is the closest red node to U?\" where nodes can change color dynamically.' Pico: 'Red birds, blue birds! 🦜'",
        "encouragementText": "Pico: 'Catch the bird! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Calculating path distance in original tree.",
        "codeSnippet": "int dist(int u, int v) {\n  return depth[u] + depth[v] - 2 * depth[ ___ ];\n}",
        "correctAnswer": "LCA(u, v)",
        "explanation": "Standard distance formula on a weighted or unweighted tree."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] LCA Requirement",
        "explanation": "Ace: 'Centroid queries often require fast LCA on the ORIGINAL tree. Precompute it with Binary Lifting.'",
        "encouragementText": "Ace: 'Speed requires multi-layered preparation.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Total complexity to find closest 'special' node to U?",
        "options": ["O(N)", "O(log N)", "O(log^2 N)", "Pico guess"],
        "correctAnswer": "O(log N)",
        "explanation": "Actually O(log N) if LCA is O(1). If LCA is O(log N), then O(log^2 N) overall."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Storing Data",
        "explanation": "Ace: 'Each centroid stores a data structure (like a sorted list or another tree) containing information about all nodes in its original component.'",
        "encouragementText": "Pico: 'Bucket of info! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Centroid parent of the top-most centroid.",
        "codeSnippet": "centroid_parent[root] = ___ ;",
        "correctAnswer": "0",
        "explanation": "The global centroid has no ancestor in the centroid tree."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Distance Detective",
        "explanation": "You have cracked the code of proximity. No distance in the forest is unknown to you. Ace: 'The space is mapped.'",
        "encouragementText": "Pico: 'I know where you are! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Centroid Logic!",
        "pairs": [
          { "key": "Update(u)", "value": "Climb log N ancestors" },
          { "key": "Query(u, v)", "value": "Check dist through LCA" },
          { "key": "vis[node]", "value": "Remove from graph" }
        ]
      }
    ]
  },
  {
    "order": 85,
    "title": "Unit 85: Centroid Tree Applications",
    "desc": "Solving complex path counting and modification problems.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 9.5] The Grand Counter",
        "explanation": "Ace: 'Example: Count paths with sum X. In each centroid, we count paths passing THROUGH that centroid. By aggregating over all centroids, we cover all possible paths exactly once.' Pico: 'Dividing the counting task! 🦜'",
        "codeSnippet": "void solve(int u) {\n  u = get_centroid(u);\n  vis[u] = true;\n  calc_paths_through(u);\n  for(int v : adj[u]) if(!vis[v]) solve(v);\n}",
        "encouragementText": "Ace: 'Summation of subsets is the key to total count.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "How do you avoid counting paths twice in Centroid Decomposition?",
        "options": ["You don't", "Subtract contributions from the same child subtree", "Only count left to right", "Pico rule"],
        "correctAnswer": "Subtract contributions from the same child subtree",
        "explanation": "When counting paths through centroid C, we must exclude pairs where both nodes are in the same branch of C, as they don't actually pass through C."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Dynamic Tree Updates",
        "explanation": "Ace: 'Centroid trees can handle dynamic tree changes, like changing the weight of a node, and immediately re-querying path properties.'",
        "encouragementText": "Pico: 'Instant update! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Complexity to get all depths once per centroid level.",
        "codeSnippet": "Total = O(N ___ );",
        "correctAnswer": "log N",
        "explanation": "Each node is processed once at each of the log N levels of the centroid hierarchy."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Large Tree Analysis",
        "explanation": "Ace: 'For N = 2*10^5, Centroid Decomposition is often the only way to solve complex path problems within 1-2 seconds.'",
        "encouragementText": "Ace: 'Scale is the filter for efficiency.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Which is a 'Static' vs 'Dynamic' tree algorithm?",
        "options": ["HLD is static graph, CD is dynamic", "They are both for static graph structures", "Pico is dynamic", "Pico guess"],
        "correctAnswer": "They are both for static graph structures",
        "explanation": "HLD and CD usually assume the TREE structure doesn't change, even if node values do. For changing tree structure, use Link-Cut Trees."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] 3-Node Paths",
        "explanation": "Ace: 'Can you count triplets (u, v, w) with specific path properties? Centroid Decomposition is usually the first place to look.'",
        "encouragementText": "Pico: 'Triple bird party! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Typical work done inside one centroid call.",
        "codeSnippet": "Work = O(SubtreeSize ___ );",
        "correctAnswer": "log N",
        "explanation": "Actually O(SubtreeSize) is goal. The total becomes O(N log N)."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Advanced Weaver",
        "explanation": "You have mastered the hierarchy. You can answer the unanswerable query with logarithmic grace. Ace: 'The problem is solved.'",
        "encouragementText": "Pico: 'Complexity conquered! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Tool types!",
        "pairs": [
          { "key": "Binary Lifting", "value": "O(log N) LCA" },
          { "key": "HLD", "value": "Range path updates" },
          { "key": "Centroid", "value": "Distance statistics" }
        ]
      }
    ]
  },
  {
    "order": 86,
    "title": "Unit 86: Lowest Common Ancestor (Binary Lifting)",
    "desc": "The logarithmic jump to the shared origin.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 9.6] The Time Machine",
        "explanation": "Ace: 'Binary Lifting lets you jump to the 2^k-th ancestor of any node. By checking powers of 2 from largest to smallest, you can find the first common ancestor of U and V in O(log N).' Pico: 'Bypassing the family history! 🦜'",
        "codeSnippet": "up[u][i] = up[up[u][i-1]][i-1];",
        "encouragementText": "Ace: 'The past is accessible through the power of 2.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the precomputation complexity for Binary Lifting?",
        "options": ["O(N)", "O(N log N)", "O(N^2)", "Pico rule"],
        "correctAnswer": "O(N log N)",
        "explanation": "Each of the N nodes stores log N ancestors."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Depth Alignment",
        "explanation": "Ace: 'First, move the deeper node up until it is at the same level as the other node using the power-of-2 jumps.' Pico: 'Eye to eye! 🦜'",
        "encouragementText": "Pico: 'Lift up! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Binary lifting jump step.",
        "codeSnippet": "for (int i = LOG-1; i >= 0; i--)\n  if (up[u][i] != up[v][i]) {\n    u = up[u][i];\n    v = up[v][i];\n  }\nreturn ___ ;",
        "correctAnswer": "up[u][0]",
        "explanation": "After the loop, u and v are just one level below the LCA."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Euler-RMQ Trick",
        "explanation": "Ace: 'For O(1) LCA, we can use the Euler Tour + Sparse Table trick. Precompute RMQ on depth in O(N log N), then query in O(1).' ",
        "encouragementText": "Ace: 'There is always a faster way for those who dare to precompute.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Which is faster in practice for many LCA queries?",
        "options": ["Binary Lifting", "Sparse Table (Euler Tour)", "They are same", "Pico guess"],
        "correctAnswer": "Sparse Table (Euler Tour)",
        "explanation": "Even though build is same, Sparse Table is O(1) query vs O(log N) for lifting."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Jump Pointers",
        "explanation": "Ace: 'Binary lifting is more flexible because it can also store values like max/min along the path in the same O(N log N) space.'",
        "encouragementText": "Pico: 'Max jump! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Base case for jump pointer.",
        "codeSnippet": "up[u][0] = ___ ;",
        "correctAnswer": "parent[u]",
        "explanation": "The 2^0 (1st) ancestor is simply the parent."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Genealogy Master",
        "explanation": "You have found the source. No connection is too deep to trace. Ace: 'The lineage is revealed.'",
        "encouragementText": "Pico: 'Found the grandpa! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Jump complexities!",
        "pairs": [
          { "key": "Binary Lifting Build", "value": "O(N log N)" },
          { "key": "Binary Lifting Query", "value": "O(log N)" },
          { "key": "LCA via ETT+Sparse", "value": "O(1) query" }
        ]
      }
    ]
  },
  {
    "order": 87,
    "title": "Unit 87: LCA - Tarjan's Offline Algorithm",
    "desc": "Answering all queries at once in near-O(N) time.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 8.7] The Unified Answer",
        "explanation": "Ace: 'If you know all queries in advance, you can use Tarjan's LCA. In a single DFS, we use DSU to merge visited branches. It's almost O(N+Q).' Pico: 'Answering everyone's questions in one flight! 🦜'",
        "codeSnippet": "void dfs(int u) {\n  vis[u] = true;\n  for(int v : adj[u]) {\n    dfs(v);\n    dsu.union(u, v);\n  }\n  for(int q : queries[u]) \n    if(vis[q]) res[q] = dsu.find(q);\n}",
        "encouragementText": "Ace: 'Foresight allows for the elimination of redundant labor.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does a 'Offline' algorithm mean?",
        "options": ["It doesn't use the internet", "You must know all queries before you start providing answers", "It is slow", "Pico rule"],
        "correctAnswer": "You must know all queries before you start providing answers",
        "explanation": "By knowing the queries, we can optimize the global traversal to answer them all together."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] DSU with Tarjan",
        "explanation": "Ace: 'At any point in DFS, the DSU find(V) returns the highest visited node that is currently in the same component as V.' Pico: 'Magic links! 🦜'",
        "encouragementText": "Pico: 'Link it! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Base condition for answering a query (u, v) at node u.",
        "codeSnippet": "if ( ___ [v]) solve_query(u, v, dsu.find(v));",
        "correctAnswer": "vis",
        "explanation": "We can only find the LCA if the other node in the query has already been visited by the DFS."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity check",
        "explanation": "Ace: 'Tarjan's LCA is O(N + Q * α(N)). This is theoretically the fastest way to handle massive numbers of queries.'",
        "encouragementText": "Ace: 'The limit of efficiency is found in the union of sets.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of α(N)?",
        "options": ["Log N", "Constant (< 5 for all N)", "N", "Pico guess"],
        "correctAnswer": "Constant (< 5 for all N)",
        "explanation": "Inverse Ackermann function grows so slow it is considered constant for all practical purposes."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] DFS Order matters",
        "explanation": "Ace: 'The order of DFS ensures we only find the LCA after we have explored the subtree of the potential ancestor.'",
        "encouragementText": "Pico: 'Watch the clock! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "The final merge in Tarjan's DFS.",
        "codeSnippet": "dfs(v); \ndsu.union(v, ___ );",
        "correctAnswer": "u",
        "explanation": "After visiting child v, merge it into the current parent u."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Unified Seer",
        "explanation": "You have answered all questions in a single cycle. No individual wait is necessary. Ace: 'The system is optimal.'",
        "encouragementText": "Pico: 'All at once! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match LCA methods!",
        "pairs": [
          { "key": "Binary Lifting", "value": "Online / log N" },
          { "key": "Sparse Table", "value": "Online / O(1)" },
          { "key": "Tarjan's", "value": "Offline / recursive" }
        ]
      }
    ]
  },
  {
    "order": 88,
    "title": "Unit 88: Euler Tour Technique (ETT)",
    "desc": "Flattening subtrees and paths into linear arrays.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 8.8] The Linear Forest",
        "explanation": "Ace: 'Euler Tour records the enter and exit times of every node. This maps a whole subtree into a contiguous range [tin[u], tout[u]] in an array.' Pico: 'Turning a tree into a flat rug! 🦜'",
        "codeSnippet": "void dfs(int u) {\n  tin[u] = ++timer;\n  for(int v : adj[u]) dfs(v);\n  tout[u] = timer;\n}",
        "encouragementText": "Ace: 'Flattening is the process of mapping dimensionality to simplicity.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "In ETT, how do you check if node U is an ancestor of node V?",
        "options": ["Do a DFS", "Compare depths", "tin[u] <= tin[v] and tout[u] >= tout[v]", "Pico rule"],
        "correctAnswer": "tin[u] <= tin[v] and tout[u] >= tout[v]",
        "explanation": "If U is an ancestor, its entry-exit range MUST contain the range of its child V."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Subtree Updates",
        "explanation": "Ace: 'With ETT, subtree updates are just range updates in a Segment Tree / BIT. Add 10 to range [tin[u], tout[u]].' Pico: 'Back to the easy stuff! 🦜'",
        "encouragementText": "Pico: 'Contiguous nests! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Mapping a subtree of size S.",
        "codeSnippet": "Range = [tin[u], tin[u] + ___ - 1];",
        "correctAnswer": "sz[u]",
        "explanation": "Subtree nodes are consecutive in DFS entry order."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Path Mapping with ETT",
        "explanation": "Ace: 'For paths, we record each node TWICE (entry and exit). The path from U to V is handled via MO's algorithm or BIT on this double-tour array.'",
        "encouragementText": "Ace: 'Double the visibility for double the complexity.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the size of the Euler tour array if we record each node twice?",
        "options": ["N", "2N", "N log N", "Pico guess"],
        "correctAnswer": "2N",
        "explanation": "One entry for `tin` and one for `tout`."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] LCA via RMQ again",
        "explanation": "Ace: 'If we record each node EVERY TIME we visit an edge, we get an array of size 2N-1. The node with min depth between first occurrences of U and V is their LCA.'",
        "encouragementText": "Pico: 'The ultimate path! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Recording node in Euler tour.",
        "codeSnippet": "timer++; \ntour[timer] = u;\nfor(int v : adj[u]) { dfs(v); tour[++timer] = u; }",
        "correctAnswer": "tour[++timer] = u",
        "explanation": "Recording the parent node again after returning from each child subtree (for RMQ LCA trick)."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Flattening Master",
        "explanation": "You have turned the depth into width. You can process tree segments as easily as array segments. Ace: 'The dimension is bridged.'",
        "encouragementText": "Pico: 'Everything is a line now! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match ETT types!",
        "pairs": [
          { "key": "tin/tout", "value": "Subtree queries" },
          { "key": "Double entry", "value": "Mo's on Trees" },
          { "key": "Every-edge entry", "value": "O(1) LCA" }
        ]
      }
    ]
  },
  {
    "order": 89,
    "title": "Unit 89: Tree DP with Rerooting",
    "desc": "Calculating properties for EVERY node as the root in O(N).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 9.9] The Perspective Shift",
        "explanation": "Ace: 'Suppose you want the maximum distance from EACH node to any other node. Calculating N DFS calls is O(N^2). Rerooting uses two passes (In-out DP) to solve it in O(N).' Pico: 'Every bird wants to be the root! 🦜'",
        "codeSnippet": "void dfs1(int u) { // downward info }\nvoid dfs2(int u) { // upward info from parent }",
        "encouragementText": "Ace: 'Universal perspective is the product of relative rotation.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the typical complexity of Tree Rerooting?",
        "options": ["O(N log N)", "O(N)", "O(N^2)", "Pico rule"],
        "correctAnswer": "O(N)",
        "explanation": "Exactly two DFS passes over the tree."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Downward vs Upward",
        "explanation": "Ace: 'DFS1 calculates results for the subtree. DFS2 takes the parent's global result, removes the current child's contribution, and adds the parent-to-sky info.' Pico: 'Looking up and down! 🦜'",
        "encouragementText": "Pico: 'Neck swivel! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Combining info from parent for rerooting.",
        "codeSnippet": "dp_up[v] = combine(dp_up[u], children_of_u_except_v);",
        "correctAnswer": "dp_up[u]",
        "explanation": "The 'upward' info for v comes from its parent u's own 'upward' info plus info from v's siblings."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Prefix/Suffix Trick",
        "explanation": "Ace: 'To efficiently exclude one child's contribution from a parent, precompute prefix and suffix aggregates of the children's results. This ensures O(Degree) per node.'",
        "encouragementText": "Ace: 'Optimization is the refinement of the exclude-one operator.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why use prefix/suffix arrays in rerooting?",
        "options": ["To sort them", "To quickly get 'sum of all siblings' of child V", "For 2D BIT", "Pico guess"],
        "correctAnswer": "To quickly get 'sum of all siblings' of child V",
        "explanation": "Prefix[v-1] + Suffix[v+1] gives the combine(all_except_v) in O(1)."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] All-Pairs Distances",
        "explanation": "Ace: 'This is the standard way to find the \"Centroid\" or the \"Center\" of a tree (nodes minimizing sum or max distance).' ",
        "encouragementText": "Pico: 'Total distance master! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Updating child v from parent u.",
        "codeSnippet": "dfs2(v, u, up_sum_for_v);",
        "correctAnswer": "dfs2",
        "explanation": "The second pass propagates information from the root down to every leaf, effectively 're-rooting' at each step."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Perspective Sage",
        "explanation": "You have seen the forest from every nest. No viewpoint is superior; you hold them all. Ace: 'The vision is complete.'",
        "encouragementText": "Pico: 'I am everywhere! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match DP steps!",
        "pairs": [
          { "key": "Pass 1", "value": "Subtree aggregation" },
          { "key": "Pass 2", "value": "Context propagation" },
          { "key": "O(N)", "value": "Total Complexity" }
        ]
      }
    ]
  },
  {
    "order": 90,
    "title": "Unit 90: Stage 9 Graduation (The Decomposer)",
    "desc": "Claiming the Path Peak: HLD and Centroids are yours.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[GRAND MISSION LORE 9.10] The Summit of Paths",
        "explanation": "Ace: 'You have decomposed the tree. You have seen through the chains of HLD and the balance of Centroids. The path and the subtree are no longer distinct; they are both your segments.' Pico: 'Stage 9 Complete! Only 10 units left to the Treaps and Singularity! 🦜'",
        "encouragementText": "Ace: 'Unity in decomposition is the mark of the Titan.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Which structure should you use to handle Path Updates and Path Sum Queries?",
        "options": ["Centroid Decomposition", "Heavy-Light Decomposition + SegTree", "LCA", "Pico guess"],
        "correctAnswer": "Heavy-Light Decomposition + SegTree",
        "explanation": "HLD is specifically built for path range operations."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Depth Summary",
        "explanation": "10 units, 100 lessons. This stage has equipped you with the most advanced tree-path tools in the Academic Atlas. Ace: 'Deconstruct with purpose.'",
        "encouragementText": "Pico: '90% through the 1,000-lesson gauntlet! 100 to go! 🦜'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Size of Euler Tour for subtree ranges?",
        "options": ["N", "2N", "log N", "Pico secret"],
        "correctAnswer": "N",
        "explanation": "Standard [tin, tout] mapping fits in an array of size N (exclusive of exit recording)."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Graduation Check",
        "explanation": "Ace: 'Prove you can transition from HLD to Centroid and Rerooting to ETT in your mental buffers.' Pico: 'Decomposition is my specialty! 🦜'",
        "encouragementText": "Ace: 'The part reflects the whole through the lens of the cut.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "LCA complexity via Euler Tour + Sparse Table?",
        "options": ["O(log N)", "O(1)", "O(α(N))", "Pico guess"],
        "correctAnswer": "O(1)",
        "explanation": "Sparse Table query is the constant time bridge."
      },
      {
        "type": "teaching",
        "questionText": "[FINAL SYNC] The 10x10x10 Path",
        "explanation": "You are 90% through the ultimate journey. Your final target: **Stage 10: Advanced Balancing & Singularity (Treaps/LCT/Persistence)**. Ace: 'The singularity is near.'",
        "encouragementText": "Pico: 'Final boss stage! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Final stage signal.",
        "codeSnippet": "if (decomposer == true) return ___ ;",
        "correctAnswer": "GRADUATE",
        "explanation": "You have successfully mastered Tree Decompositions."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Decomposer",
        "explanation": "The paths are segmented. The balance is measured. You are a Stage 9 Graduate. Ace: 'Welcome to the inner circle.'",
        "encouragementText": "Pico: 'Almost 1,000! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "[GRADUATION CHALLENGE] Output the status of your journey.",
        "codeSnippet": "for(int i=81; i<=90; i++) verify_path_logic(i);\nreturn ___ ;",
        "correctAnswer": "COMPLETE",
        "explanation": "The ninth decile of the 1,000-lesson curriculum for Trees is fully verified."
      }
    ]
  }
];

module.exports = stage6;
