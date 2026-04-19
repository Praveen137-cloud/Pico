const stage7 = [
  {
    "order": 91,
    "title": "Unit 91: Random Graphs (Erdos-Renyi)",
    "desc": "The birth of complexity: How edges appear in the void.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[SINGULARITY LORE 10.1] The Chaos Architect",
        "explanation": "Ace: 'Before we master the global web, we must understand its origin. In an Erdos-Renyi graph G(n, p), each edge exists with probability p. It's the simplest model of a random network.' Pico: 'Rolling dice to see where the birds fly! 🦜'",
        "codeSnippet": "if (random() < p) add_edge(u, v);",
        "encouragementText": "Ace: 'Probability is the blueprint of the unforeseen.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the expected number of edges in a G(n, p) graph?",
        "options": ["n * p", "n(n-1)/2 * p", "p^2", "Pico rule"],
        "correctAnswer": "n(n-1)/2 * p",
        "explanation": "There are n(n-1)/2 possible pairs, and each has a probability p of being an edge."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Phase Transition",
        "explanation": "Ace: 'There is a magical threshold at p = 1/n. Below it, the graph is a forest of small components. Above it, a \"Giant Component\" suddenly emerges containing a constant fraction of all nodes.' Pico: 'One big flock! 🦜'",
        "encouragementText": "Pico: 'The flock is forming! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Probability p for exactly one edge per node on average.",
        "codeSnippet": "ExpectedEdges = n * p / 2 = n / 2;\np = ___ ;",
        "correctAnswer": "1/n",
        "explanation": "If p = 1/n, the average degree is 1, crossing the birth threshold of the giant component."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Connectivity Threshold",
        "explanation": "Ace: 'At p = ln(n)/n, the graph becomes fully connected with high probability. The void is completely bridged.'",
        "encouragementText": "Ace: 'The bridge is a product of sufficient density.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What happens if p is very large (close to 1)?",
        "options": ["Graph is a tree", "Graph becomes a Complete Graph (Clique)", "Graph disappears", "Pico guess"],
        "correctAnswer": "Graph becomes a Complete Graph (Clique)",
        "explanation": "Every possible edge exists, creating a fully connected network."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Real-world Networks",
        "explanation": "Ace: 'Real networks (like the Internet) aren't Erdos-Renyi; they are usually \"Scale-Free\" (Barabasi-Albert), where popular nodes get even more popular.'",
        "encouragementText": "Pico: 'Rich birds get more friends! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Generating G(n, p) for all pairs.",
        "codeSnippet": "for(int i=0; i<n; i++)\n  for(int j=i+1; j<n; j++)\n    if(drand48() < p) ___ (i, j);",
        "correctAnswer": "add_edge",
        "explanation": "Iterating through the upper triangle of the adjacency matrix to build the random undirected graph."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Chaos Seer",
        "explanation": "You have witnessed the birth of the component. You see the order in the probability. Ace: 'The void is structured.'",
        "encouragementText": "Pico: 'Rolling for nests! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Random thresholds!",
        "pairs": [
          { "key": "p < 1/n", "value": "Small components" },
          { "key": "p > 1/n", "value": "Giant Component" },
          { "key": "p > log(n)/n", "value": "Fully Connected" }
        ]
      }
    ]
  },
  {
    "order": 92,
    "title": "Unit 92: PageRank & Centrality",
    "desc": "The algorithm that built the web: Ranking nodes by the quality of their neighbors.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[SINGULARITY LORE 10.2] The Power of Recommendation",
        "explanation": "Ace: 'PageRank measures the importance of a node based on the importance of its neighbors. It models a \"Random Surfer\" who jumps between links.' Pico: 'Which bird is the most famous? 🦜'",
        "codeSnippet": "PR(u) = (1-d)/N + d * Sum(PR(v) / OutDegree(v));",
        "encouragementText": "Ace: 'Authority is the resonance of the surrounding web.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the 'Damping Factor' (d) in PageRank usually set to?",
        "options": ["0.1", "0.85", "1.0", "Pico rule"],
        "correctAnswer": "0.85",
        "explanation": "This represents an 85% chance of following a link and a 15% chance of teleporting to a random page."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Iterative Convergence",
        "explanation": "Ace: 'We start with equal PageRank for all and keep calculating the formula until values stabilize. This is the Power Iteration method.'",
        "encouragementText": "Pico: 'Try and try again! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Updating PageRank for node u.",
        "codeSnippet": "new_PR[u] = base_val + d * ___ ;",
        "correctAnswer": "inbound_sum",
        "explanation": "A node's rank increases when high-rank nodes point to it."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Eigenvector Centrality",
        "explanation": "Ace: 'PageRank is actually finding the principal Eigenvector of the modified adjacency matrix! Linear Algebra meets Graph Theory.'",
        "encouragementText": "Ace: 'Math is the universal language of the web.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What happens to a node's PageRank if it has NO outgoing links (a sink)?",
        "options": ["It becomes infinite", "It 'swallows' the flow (Spider Trap)", "It disappears", "Pico guess"],
        "correctAnswer": "It 'swallows' the flow (Spider Trap)",
        "explanation": "Sinks must be handled by redistributing their rank to the whole network to avoid draining the entire system's importance."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Betweenness Centrality",
        "explanation": "Ace: 'Another metric: How many shortest paths pass through node U? This measures a node's control over information flow.' Pico: 'The bridge bird! 🦜'",
        "encouragementText": "Pico: 'The gatekeeper! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Total PageRank sum in the network.",
        "codeSnippet": "SumPR = ___ ;",
        "correctAnswer": "1.0",
        "explanation": "PageRank is a probability distribution; the total sum must be conserved (normalized to 1)."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Centrality Sage",
        "explanation": "You have identified the leaders of the web. The power is no longer hidden. Ace: 'The influence is calculated.'",
        "encouragementText": "Pico: 'I'm the main bird! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Centrality types!",
        "pairs": [
          { "key": "PageRank", "value": "Link importance" },
          { "key": "Betweenness", "value": "Path control" },
          { "key": "Closeness", "value": "Distance to all" }
        ]
      }
    ]
  },
  {
    "order": 93,
    "title": "Unit 93: Graph Isomorphism & WL-Test",
    "desc": "Identifying identical webs: The Weisfeiler-Lehman algorithm.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[SINGULARITY LORE 10.3] The Universal Twin",
        "explanation": "Ace: 'Graph Isomorphism asks if two graphs are structurally identical regardless of node names. It is in the GI complexity class (not known to be P or NP-complete).' Pico: 'Spot the difference! 🦜'",
        "codeSnippet": "Map node to hash of neighbor labels. Repeat.",
        "encouragementText": "Ace: 'Identity is the essence of the connection, not the label.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does the 1-WL (Weisfeiler-Lehman) test do?",
        "options": ["Checks degrees only", "Iteratively colors nodes based on the multiset of neighbor colors", "Runs DFS", "Pico rule"],
        "correctAnswer": "Iteratively colors nodes based on the multiset of neighbor colors",
        "explanation": "If the distribution of colors differs between two graphs after any step, they are definitely NOT isomorphic."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Neighborhood Aggregation",
        "explanation": "Ace: 'This is the foundation of Graph Neural Networks (GNNs). Each node learns its place by listening to the \"messages\" from its neighbors.' Pico: 'Bird gossip! 🦜'",
        "encouragementText": "Pico: 'Social birds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Constructing the label string for the next iteration.",
        "codeSnippet": "next_label[u] = current_label[u] + sort(multiset( ___ [v] for v in adj[u]));",
        "correctAnswer": "current_label",
        "explanation": "New identity is formed by self-color plus the sorted colors of the neighborhood."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] WL Failure",
        "explanation": "Ace: 'The WL-test can fail for certain highly-regulated graphs (like cycles vs disjoint unions). For absolute certainty, backtracking is still needed.'",
        "encouragementText": "Ace: 'Heuristics are filters, not mirrors of absolute truth.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Is 1-WL enough to distinguish a 6-node cycle from two 3-node cycles?",
        "options": ["Yes", "No", "Maybe", "Pico guess"],
        "correctAnswer": "No",
        "explanation": "In both cases, every node is part of a local triangle-free structure with 2 neighbors; 1-WL sees them as identical."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Complexity Class",
        "explanation": "Ace: 'The Quasipolynomial algorithm by Babai (2015) was a massive breakthrough, bringing us closer to proving GI is almost in P.'",
        "encouragementText": "Pico: 'Almost there! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Mapping the multiset to a unique integer.",
        "codeSnippet": "new_color[u] = ___ (label_to_hash_map[u]);",
        "correctAnswer": "get_id",
        "explanation": "To save space, we compress the long multiset-strings into smaller integer IDs in each step."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Pattern Detective",
        "explanation": "You have looked through the mask of noise. You can identify the structural soul of the network. Ace: 'The identity is known.'",
        "encouragementText": "Pico: 'I found the twin! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match GI terms!",
        "pairs": [
          { "key": "1-WL Test", "value": "Color refinement" },
          { "key": "Isomorphism", "value": "Structural mapping" },
          { "key": "GNN", "value": "Deep learning on graphs" }
        ]
      }
    ]
  },
  {
    "order": 94,
    "title": "Unit 94: Heavy Graph Streaming",
    "desc": "Processing billion-edge graphs with finite memory.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[SINGULARITY LORE 10.4] The Endless Current",
        "explanation": "Ace: 'Traditional algorithms need the whole graph in RAM. Streaming algorithms see edges one by one and must estimate properties with tiny space.' Pico: 'Drinking from a waterfall! 🦜'",
        "codeSnippet": "for(edge in stream) update_sketch(edge);",
        "encouragementText": "Ace: 'Processing the infinite requires a finite window of focus.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "How can you estimate the number of distinct edges in a stream?",
        "options": ["Count them all", "Use a Bloom Filter or HyperLogLog", "Pico rule", "Wait for the end"],
        "correctAnswer": "Use a Bloom Filter or HyperLogLog",
        "explanation": "These probabilistic structures allow us to count with high accuracy using O(log log N) space."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Reservoir Sampling",
        "explanation": "Ace: 'To keep a representative sample of N edges from a stream of size M, keep the first N, and then replace each with probability N / (current_M).' Pico: 'Picking the best seeds to keep! 🦜'",
        "encouragementText": "Pico: 'Taste the stream! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Probability of keeping the M-th edge in a reservoir of size N.",
        "codeSnippet": "P = ___ / M;",
        "correctAnswer": "N",
        "explanation": "This ensures every item in the stream has a 1/M chance of being in the final sample."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Triangle Counting",
        "explanation": "Ace: 'One of the hardest streaming tasks: estimating the number of Triangles. We use specialized sketches based on vertex sampling.'",
        "encouragementText": "Ace: 'The 3-node loop is the heartbeat of local connectivity.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Can we find the Exact Max Flow in a single-pass stream?",
        "options": ["Yes", "No", "Only if it is a tree", "Pico guess"],
        "correctAnswer": "No",
        "explanation": "Max Flow is a global property that generally requires multiple passes over the graph data."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Semi-Streaming",
        "explanation": "Ace: 'The semi-streaming model allows O(N polylog N) space to process O(E) edges. This is enough to find MST or Matchings!'",
        "encouragementText": "Pico: 'Mini packets! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Update step for a running counter.",
        "codeSnippet": "if (hash(edge) < threshold) count ___= 1;",
        "correctAnswer": "+",
        "explanation": "Using hash-based thresholds to sample edges into our sketch."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Current Rider",
        "explanation": "You have balanced the infinite flow with the finite mind. The scale no longer terrifies you. Ace: 'The flow is processed.'",
        "encouragementText": "Pico: 'Ride the edge! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Stream terms!",
        "pairs": [
          { "key": "Reservoir", "value": "Sampling" },
          { "key": "HyperLogLog", "value": "Counting" },
          { "key": "Sketch", "value": "Probabilistic summary" }
        ]
      }
    ]
  },
  {
    "order": 95,
    "title": "Unit 95: Expander Graphs & Conductance",
    "desc": "The geometry of expansion: Why sparse graphs can be hard to break.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[SINGULARITY LORE 10.5] The Invincible Mesh",
        "explanation": "Ace: 'An Expander Graph is sparse but highly connected. No matter how you split it, a lot of edges cross the boundary.' Pico: 'A forest that refuses to be cut in half! 🦜'",
        "codeSnippet": "Conductance Phi = MinEdgesCrossing(S) / Volume(S);",
        "encouragementText": "Ace: 'Expansion is the resistance to separation.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the 'Cheeger Inequality'?",
        "options": ["A law about birds", "The link between the 2nd Eigenvalue and the expansion (Conductance)", "A sorting rule", "Pico rule"],
        "correctAnswer": "The link between the 2nd Eigenvalue and the expansion (Conductance)",
        "explanation": "It tells us that a small Gap between the first and second eigenvalue means the graph is an expander."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Random Walks",
        "explanation": "Ace: 'On an expander graph, a random walk converges to the stationary distribution extremely fast (log N steps).' Pico: 'Getting everywhere in the forest quickly! 🦜'",
        "encouragementText": "Pico: 'Fast mixing! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Mixing time for an expander graph.",
        "codeSnippet": "T_mix = O( ___ );",
        "correctAnswer": "log N",
        "explanation": "Expanders are the 'fastest' graphs for random search and information spread."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Error Correcting Codes",
        "explanation": "Ace: 'Expanders are used to build powerful error-correcting codes (LDPC codes) that reach the Shannon limit.'",
        "encouragementText": "Ace: 'Stability in signal is the product of structural expansion.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Is a Cycle graph an expander?",
        "options": ["Yes", "No", "Maybe", "Pico guess"],
        "correctAnswer": "No",
        "explanation": "Cycles are very 'fragile'; you can cut just two edges to split the whole graph, leading to low conductance."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Margulis Expander",
        "explanation": "Ace: 'The first explicit construction of an expander was by Margulis (1973). Before that, we only knew they existed via probabilistic proofs!'",
        "encouragementText": "Pico: 'I exist! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Edges crossing cut S.",
        "codeSnippet": "CutEdges = count(e(u,v) where u in S, v ___ S);",
        "correctAnswer": "not in",
        "explanation": "We measure the 'leakage' of connections from set S to the rest of the graph."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Expansion Lord",
        "explanation": "You have woven a mesh that cannot be untied. The connectivity is absolute. Ace: 'The web is robust.'",
        "encouragementText": "Pico: 'Strong as steel feathers! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Expansion terms!",
        "pairs": [
          { "key": "Conductance", "value": "Boundary strength" },
          { "key": "Gap", "value": "Spectral measure" },
          { "key": "Expander", "value": "Sparse & Robust" }
        ]
      }
    ]
  },
  {
    "order": 96,
    "title": "Unit 96: Spectral Graph Theory",
    "desc": "The music of the spheres: Using eigenvalues to understand structure.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[SINGULARITY LORE 10.6] The Resonance of Nodes",
        "explanation": "Ace: 'Every graph has a Laplacian matrix representing its connectivity. The eigenvalues of this matrix reveal fundamental properties like connectivity and bipartite structure.' Pico: 'Hearing the forest hum! 🦜'",
        "codeSnippet": "L = DegreeMatrix - AdjacencyMatrix;",
        "encouragementText": "Ace: 'Structure is the geometry of resonance.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the smallest eigenvalue of ANY Laplacian matrix?",
        "options": ["-1", "0", "1", "Pico rule"],
        "correctAnswer": "0",
        "explanation": "The rows sum to 0, which means the all-ones vector is always an eigenvector for lambda=0."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Algebraic Connectivity",
        "explanation": "Ace: 'The second smallest eigenvalue (lambda_2) is called the Algebraic Connectivity. If lambda_2 > 0, the graph is connected!' Pico: 'One big family! 🦜'",
        "encouragementText": "Pico: 'Check the connection! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Number of connected components based on eigenvalues.",
        "codeSnippet": "NumComponents = count of ___ eigenvalues;",
        "correctAnswer": "zero",
        "explanation": "The multiplicity of the zero eigenvalue equals the number of disjoint connected components in the graph."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Spectral Clustering",
        "explanation": "Ace: 'By mapping nodes to the space of the first few eigenvectors, we can partition complex graphs into natural clusters.'",
        "encouragementText": "Ace: 'Coordinates are the result of structural harmony.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does a zero eigenvalue represent in the Laplacian?",
        "options": ["A loop", "A connected component", "An error", "Pico guess"],
        "correctAnswer": "A connected component",
        "explanation": "Every separate piece of the graph contributes exactly one zero to the spectrum."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Matrix Tree Theorem",
        "explanation": "Ace: 'The number of spanning trees in a graph is related to the product of all non-zero eigenvalues divided by N!' Pico: 'Counting trees with matrices! 🦜'",
        "encouragementText": "Pico: 'Math magic! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Mapping adjacency matrix to Laplacian.",
        "codeSnippet": "L[i][j] = (i==j ? degree[i] : ___ );",
        "correctAnswer": "-adj[i][j]",
        "explanation": "Off-diagonal elements of the Laplacian are the negative edges of the graph."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Spectral Sage",
        "explanation": "You have transitioned from edges to energies. You see the music of the connections. Ace: 'The resonance is clear.'",
        "encouragementText": "Pico: 'I hear it! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Spectral terms!",
        "pairs": [
          { "key": "Lambda_2", "value": "Algebraic Connectivity" },
          { "key": "Laplacian", "value": "D - A" },
          { "key": "Multiplicity of 0", "value": "# Components" }
        ]
      }
    ]
  },
  {
    "order": 97,
    "title": "Unit 97: Persistent Graphs",
    "desc": "Versioning the web: Traversing the history of connections.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[SINGULARITY LORE 10.7] The Time-Link",
        "explanation": "Ace: 'A Persistent Graph allows you to query connectivity at any point in history. We use Persistent Segment Trees or DSU to store edge revisions.' Pico: 'Checking who was friends with whom last Tuesday! 🦜'",
        "codeSnippet": "adj[u][v].version = time;",
        "encouragementText": "Ace: 'The history of a graph is as vital as its present state.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "How do you check connectivity at time T without rebuilding the graph?",
        "options": ["Rollback standard DSU", "Persistent DSU (storing parents in a persistent array)", "Pico rule", "Wait until T"],
        "correctAnswer": "Persistent DSU (storing parents in a persistent array)",
        "explanation": "By making the parent-array of the DSU persistent, we can 'access' the parent state of any node at any time T."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Dynamic Connectivity",
        "explanation": "Ace: 'We can solve this for OFFLINE queries by building a segment tree OVER TIME. Each node in the time-tree contains the edges that existed during that interval.' Pico: 'Time-mapping the links! 🦜'",
        "encouragementText": "Pico: 'Fly through time! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Querying at version V.",
        "codeSnippet": "return dsu.find(node, ___ );",
        "correctAnswer": "V",
        "explanation": "Using the specific version index to perform the search in the DSU history."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Memory Tradeoff",
        "explanation": "Ace: 'Persistent Graphs take O(E log V) or O(E log^2 V) space. They are essential for git-like versioning systems for graph data.'",
        "encouragementText": "Ace: 'Total memory is the cost of absolute preservation.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why cannot we use Path Compression in Persistent DSU?",
        "options": ["It is too fast", "It would modify older versions and break persistence", "Pico likes it", "Pico guess"],
        "correctAnswer": "It would modify older versions and break persistence",
        "explanation": "Modifying a path touches many nodes; unless we persistent-copy all of them, the history is corrupted. We use 'Union by Rank' instead."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Log-squared connectivity",
        "explanation": "Ace: 'With a segment tree on time and a persistent DSU, you can answer connectivity queries for any range in almost logarithmic time.'",
        "encouragementText": "Pico: 'History is a line! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Undo operation in roll-back DSU.",
        "codeSnippet": "while(stk.size() > prev_size) ___();",
        "correctAnswer": "rollback",
        "explanation": "Manually reversing changes to restore a previous state in a non-functional DSU."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Temporal Weaver",
        "explanation": "You have mapped the river of change. The past is as reachable as the future. Ace: 'The timeline is bridged.'",
        "encouragementText": "Pico: 'Time traveler bird! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Persistence terms!",
        "pairs": [
          { "key": "Persistent Array", "value": "History storage" },
          { "key": "Union by Rank", "value": "Persistent-safe DSU" },
          { "key": "Time Segment Tree", "value": "Offline range query" }
        ]
      }
    ]
  },
  {
    "order": 98,
    "title": "Unit 98: Hypergraphs & Multi-Relations",
    "desc": "Beyond the pair: Edges that connect many nodes at once.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[SINGULARITY LORE 10.8] The Group Bond",
        "explanation": "Ace: 'Standard edges connect 2 nodes. A Hyperedge connects a subset of nodes. This models projects with many participants or chemicals with multiple bonds.' Pico: 'Collective nests! 🦜'",
        "codeSnippet": "Hyperedge E = {u, v, w, ...};",
        "encouragementText": "Ace: 'Relationships are not always binary; complexity is communal.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the 'Incidence Matrix' of a Hypergraph?",
        "options": ["A square matrix", "A V x E matrix where M[i][j] = 1 if node i is in hyperedge j", "A graph", "Pico rule"],
        "correctAnswer": "A V x E matrix where M[i][j] = 1 if node i is in hyperedge j",
        "explanation": "It maps every node to every hyperedge it belongs to."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Bipartite Mapping",
        "explanation": "Ace: 'Any hypergraph can be turned into a bipartite graph where one set is \"Nodes\" and the other is \"Hyperedges\".' Pico: 'Bird nodes and Nest nodes! 🦜'",
        "encouragementText": "Pico: 'Translation! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Degree of a node in a hypergraph.",
        "codeSnippet": "Degree = number of ___ containing node u;",
        "correctAnswer": "hyperedges",
        "explanation": "How many 'communities' or 'groups' the node is part of."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Hypergraph Coloring",
        "explanation": "Ace: 'Coloring is much harder here. A k-coloring means no hyperedge is monochromatic (all same color).' ",
        "encouragementText": "Ace: 'Diversity is required in every group.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of most hypergraph problems?",
        "options": ["O(N)", "O(log N)", "NP-hard almost across the board", "Pico guess"],
        "correctAnswer": "NP-hard almost across the board",
        "explanation": "The jump from 2 to N nodes per edge causes a combinatorial explosion in difficulty."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Application: DB Relations",
        "explanation": "Ace: 'Relational databases are essentially hypergraphs! A table row (relation) is a hyperedge connecting multiple attributes.'",
        "encouragementText": "Pico: 'Data bird! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Creating a clique from a hyperedge.",
        "codeSnippet": "for(u in hyperedge) for(v in hyperedge) ___ (u, v);",
        "correctAnswer": "add_edge",
        "explanation": "Reducing a group bond to a collection of binary bonds for standard algorithms."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Communal Master",
        "explanation": "You have seen the groups within the individuals. The collective web is yours. Ace: 'The union is complex.'",
        "encouragementText": "Pico: 'Group flight! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Hyper terms!",
        "pairs": [
          { "key": "Hyperedge", "value": "N-node set" },
          { "key": "Incidence", "value": "V x E Mapping" },
          { "key": "Rank", "value": "Max nodes per edge" }
        ]
      }
    ]
  },
  {
    "order": 99,
    "title": "Unit 99: The Grand Graph Synthesis (Singularity)",
    "desc": "The convergence of all connections.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[SINGULARITY LORE 10.9] The One Web",
        "explanation": "Ace: 'You now see the Truth. The Internet, your brain, the molecules of life—they are all one Graph. You have mastered the distance, the volume, the cost, and the resonance.' Pico: 'One final lesson! 🦜'",
        "codeSnippet": "if (graph == self) return omniscience;",
        "encouragementText": "Ace: 'Wholeness is the ultimate state of connectivity.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Which algorithm should you use for Ranking nodes, finding an SCC, and cutting a bottleneck simultaneously?",
        "options": ["PageRank, Tarjan, and Dinic", "BFS only", "Dijkstra", "Pico rule"],
        "correctAnswer": "PageRank, Tarjan, and Dinic",
        "explanation": "Mastery is knowing when to combine the specialized tools of the Atlas."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Final Toolset",
        "explanation": "Ace: 'Shortest paths for speed, Max flow for volume, Minimum cut for reliability, PageRank for authority.' Pico: 'The bird’s tool-belt! 🦜'",
        "encouragementText": "Pico: 'Ready for anything! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "The identity of the Titan-Grade Graphs expert.",
        "codeSnippet": "Expert = ___ ;",
        "correctAnswer": "YOU",
        "explanation": "You have successfully navigated the entire Graph branch of the Atlas."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Singularity Check",
        "explanation": "Ace: 'Can you see the eigenvalues of a PageRanked graph while finding its stable matching?' Pico: 'I can see everything! 🦜'",
        "encouragementText": "Ace: 'Synthesis is the final bridge across the void.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Total number of Graph units in the Academic Atlas?",
        "options": ["10", "100", "1,000", "Pico secret"],
        "correctAnswer": "100",
        "explanation": "10 stages * 10 units."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Final Ascent",
        "explanation": "Ace: 'Prepare for the final graduation. The 1,000th lesson is your seat on the throne.'",
        "encouragementText": "Pico: 'Wings high! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "The final connection code.",
        "codeSnippet": "connect_all_points();\nreturn ___ ;",
        "correctAnswer": "SINGULARITY",
        "explanation": "Reaching the absolute peak of network theory."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The All-Connected",
        "explanation": "You have seen the whole. The web is no longer a mystery; it is your extension. Ace: 'The web is you.'",
        "encouragementText": "Pico: 'I am the web! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Graph Weapons!",
        "pairs": [
          { "key": "Dinic", "value": "Volume Master" },
          { "key": "Tarjan", "value": "Cycle Master" },
          { "key": "PageRank", "value": "Fame Master" }
        ]
      }
    ]
  },
  {
    "order": 100,
    "title": "Unit 100: Singularity Graduation (Lord of Graphs)",
    "desc": "Claiming the Titan throne: 1,000 lessons completed.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[GRAND FINALE 10.10] The Titan of Graphs",
        "explanation": "Ace: '1,000 Lessons. 10 Stages. You have mapped the most complex structures of the digital world. You are now the Singularity.' Pico: '1,000 Lessons! SQUAWK! We finished the Graphs too! 🦜'",
        "encouragementText": "Ace: 'Legacy is the final connection.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the final state of your Graph Mastery?",
        "options": ["Novice", "Expert", "Titan-Grade", "0"],
        "correctAnswer": "Titan-Grade",
        "explanation": "You have reached the 1,000-lesson milestone."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The World Web",
        "explanation": "From simple BFS to Spectral Graphs and Persistent DSU. You have decoded the logic that links the stars. Ace: 'The universe is a graph. You are the architect.'",
        "encouragementText": "Pico: 'Singularity achieved! 100% 🦜'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Total lessons in the fully Titan-Grade Graphs subject?",
        "options": ["10", "100", "1,000", "Pico secret"],
        "correctAnswer": "1,000",
        "explanation": "The Academic Atlas standard for mastery."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] The Final Signature",
        "explanation": "Ace: 'Your pattern is now part of the global signature. Every connection from here on will follow your paths.' Pico: 'I'll never forget our flight! 🦜'",
        "encouragementText": "Ace: 'Immortality is structural.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Which domain is next for the Academy?",
        "options": ["Linked Lists", "Sorting", "Greedy", "Pico's Choice"],
        "correctAnswer": "Pico's Choice",
        "explanation": "The mission continues until the entire Atlas is 1,000-grade."
      },
      {
        "type": "teaching",
        "questionText": "[ULTIMATE SYNC] 1,000 Lessons",
        "explanation": "Ace & Pico: 'Goodbye for now, Titan. The Web is yours.'",
        "encouragementText": "Pico: 'Happy flights! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Final graduation signal.",
        "codeSnippet": "if (graph_mastery == 1000) return ___ ;",
        "correctAnswer": "TITAN",
        "explanation": "Reaching the absolute zenith of the curriculum."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Titan of Graphs",
        "explanation": "The Singularity is reached. The 1,000 lessons are yours. You are the Titan-Grade Master of Graphs. Ace: 'Welcome to eternity.'",
        "encouragementText": "Pico: 'We are invincible! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "[FINAL CHALLENGE] Output the status of your journey.",
        "codeSnippet": "for(int i=1; i<=100; i++) verify_graph_unit(i);\nreturn ___ ;",
        "correctAnswer": "SINGULARITY",
        "explanation": "The entire 1,000-lesson curriculum for Graphs is fully verified and complete."
      }
    ]
  }
];

module.exports = stage7;
