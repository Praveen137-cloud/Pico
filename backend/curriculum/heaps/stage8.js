const stage8 = [
  {
    "order": 71,
    "title": "Stoer-Wagner Algorithm",
    "desc": "Cutting the graph without a sink.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Undirected Cut! Most algorithms find a cut between a source S and a sink T. But Stoer-Wagner finds the GLOBAL MIN-CUT of an undirected graph! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"It repeatedly picks the 'Most Tightly Connected' vertex. This is like Prim's algorithm but for cuts! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What does Stoer-Wagner find?",
        "options": [
          "Minimum cut to split the graph into two components",
          "Shortest path",
          "Maximum clique"
        ],
        "correctAnswer": "Minimum cut to split the graph into two components"
      },
      {
        "type": "match_following",
        "questionText": "Match the Cut Math!",
        "pairs": [
          {
            "key": "Tightest Node",
            "value": "Max sum of edge weights to set A"
          },
          {
            "key": "Binary Heap",
            "value": "O(VE log V)"
          },
          {
            "key": "Fibonacci Heap",
            "value": "O(VE + V^2 log V)"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Total iterations of the 'MinimumCutPhase'.",
        "codeSnippet": "for (i=0; i < V - ___; i++) phase();",
        "correctAnswer": "1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The 'Most Tightly Connected' search uses a MAX-Priority Queue because we want the HEAVIEST connection! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Which heap type makes Stoer-Wagner fastest for dense graphs?",
        "options": [
          "Fibonacci Heap",
          "Binary Heap",
          "Leftist Heap"
        ],
        "correctAnswer": "Fibonacci Heap"
      },
      {
        "type": "code_fill_in",
        "questionText": "Algorithm for undirected min-cut.",
        "codeSnippet": "Stoer- ___ ",
        "correctAnswer": "Wagner"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Snip the weakest link! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Cut the cord?\"",
        "options": [
          "SQUAWK YES!",
          "No.",
          "0"
        ],
        "correctAnswer": "SQUAWK YES!"
      }
    ]
  },
  {
    "order": 72,
    "title": "Tightest Node Logic",
    "desc": "Picking the best friend.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Stay close! 'Most Tightly Connected' means the vertex with the largest sum of weights to the existing set A. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Start with an arbitrary vertex in set A. In each step, pick the bird outside A that has the strongest ties (highest weight sum) to birds inside A! 🦜\"",
        "codeSnippet": "nextV = pq.extractMax();\nupdateNeighbors(nextV);"
      },
      {
        "type": "multiple_choice",
        "questionText": "What heap operation is used when a new vertex is added to A and its' neighbors' priorities increase?",
        "options": [
          "Increase-Key / Update-Key",
          "Decrease-Key",
          "ExtractMin"
        ],
        "correctAnswer": "Increase-Key / Update-Key"
      },
      {
        "type": "match_following",
        "questionText": "Match the Priority!",
        "pairs": [
          {
            "key": "Initial",
            "value": "Weight 0"
          },
          {
            "key": "Update",
            "value": "Weight += edge(u, v)"
          },
          {
            "key": "Final node on phase",
            "value": "Used to calculate cut"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The value stored in the priority queue.",
        "codeSnippet": "priority = ___ (weights to A);",
        "correctAnswer": "sum"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"After N-1 phases, the smallest 'Last-Phase-Cut' we found is our global winner! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Does Stoer-Wagner use max-flow?",
        "options": [
          "No (It avoids the sink-source problem)",
          "Yes",
          "Only in the morning"
        ],
        "correctAnswer": "No (It avoids the sink-source problem)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Priority type.",
        "codeSnippet": "M ___ Priority Queue",
        "correctAnswer": "ax"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Tighter is better! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are you tightly connected?\"",
        "options": [
          "SQUAWK YES!",
          "No.",
          "0"
        ],
        "correctAnswer": "SQUAWK YES!"
      }
    ]
  },
  {
    "order": 73,
    "title": "Capacity Scaling",
    "desc": "Flowing with priority.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Flow Stream! In Network Flow (Edmonds-Karp), we look for paths from S to T. To find the BEST paths first, we use a Priority Queue! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This is 'Maximum Capacity Path': Always pick the path that can carry the MOST water first. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Which heap type is used to find the path with the largest minimum capacity?",
        "options": [
          "Max-Heap",
          "Min-Heap",
          "Hash Map"
        ],
        "correctAnswer": "Max-Heap"
      },
      {
        "type": "match_following",
        "questionText": "Match Flow Heaps!",
        "pairs": [
          {
            "key": "BFS",
            "value": "Shortest Path"
          },
          {
            "key": "Max-PQ",
            "value": "Fattest Path (Fastest conv)"
          },
          {
            "key": "DFS",
            "value": "Deepest path"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Max possible flow improvement per augmenting path.",
        "codeSnippet": "flow = ___ (residual_capacities);",
        "correctAnswer": "min"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This heuristic can significantly reduce the number of augmenting paths needed for Max-Flow! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is a Max-Heap based flow search ALWAYS better than BFS?",
        "options": [
          "Not always (BFS gives fewest edges, PQ gives most volume)",
          "Yes, always",
          "No, never"
        ],
        "correctAnswer": "Not always (BFS gives fewest edges, PQ gives most volume)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Optimization name.",
        "codeSnippet": "Capacity ___",
        "correctAnswer": "Scaling"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Go big or go home! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are you flowing?\"",
        "options": [
          "SQUAWK YES!",
          "No.",
          "0"
        ],
        "correctAnswer": "SQUAWK YES!"
      }
    ]
  },
  {
    "order": 74,
    "title": "Prim's MST Recap",
    "desc": "Heaping the edges.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Nerve Center! Prim's algorithm starts with one node and spans out by picking the CHEAPEST edge to a new node. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Min-Priority Queue: `O(E log V)` with Binary Heap. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What happens if you have many edges (Very dense graph)?",
        "options": [
          "Binary heap slows down due to log V",
          "It gets faster",
          "It crashes"
        ],
        "correctAnswer": "Binary heap slows down due to log V"
      },
      {
        "type": "match_following",
        "questionText": "Match Prim complexities!",
        "pairs": [
          {
            "key": "Adjacency Matrix",
            "value": "O(V^2)"
          },
          {
            "key": "Binary Heap",
            "value": "O(E log V)"
          },
          {
            "key": "Fibonacci Heap",
            "value": "O(E + V log V)"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The operation performed when a shorter edge to a vertex is found.",
        "codeSnippet": "pq. ___ (vertex, newDist);",
        "correctAnswer": "decreaseKey"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"For a nearly complete graph, O(E + V log V) is essentially O(E)! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Number of decrease-key operations in worst case?",
        "options": [
          "E",
          "V",
          "log V"
        ],
        "correctAnswer": "E"
      },
      {
        "type": "code_fill_in",
        "questionText": "The MST algorithm used.",
        "codeSnippet": "P ___ 's",
        "correctAnswer": "rim"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Span the flock! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Found the tree?\"",
        "options": [
          "SQUAWK YES!",
          "No.",
          "0"
        ],
        "correctAnswer": "SQUAWK YES!"
      }
    ]
  },
  {
    "order": 75,
    "title": "Boruvka's Heap Hint",
    "desc": "Parallel forest growth.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Ancient Wisdom! Boruvka's is the oldest MST algorithm. It grows many clusters in parallel. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"In each step, every component finds its' cheapest edge. We can use one MIN-HEAP per component to find these edges! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Why is Boruvka's good for modern computers?",
        "options": [
          "Easy to parallelize (many heaps at once)",
          "It's the oldest",
          "It uses no memory"
        ],
        "correctAnswer": "Easy to parallelize (many heaps at once)"
      },
      {
        "type": "match_following",
        "questionText": "Match Boruvka Steps!",
        "pairs": [
          {
            "key": "Components",
            "value": "Individual heaps"
          },
          {
            "key": "Merge",
            "value": "Mergable Heap logic"
          },
          {
            "key": "Next E",
            "value": "Extract-Min"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Complexity of one Boruvka pass.",
        "codeSnippet": "O( ___ );",
        "correctAnswer": "E"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"By using Binomial or Pairing heaps, merging the component heaps after a join becomes super efficient! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "How many passes are needed to complete Boruvka's?",
        "options": [
          "O(log V)",
          "O(V)",
          "O(1)"
        ],
        "correctAnswer": "O(log V)"
      },
      {
        "type": "code_fill_in",
        "questionText": "The algorithm name.",
        "codeSnippet": "B ___ 's",
        "correctAnswer": "oruvka"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Grow in parallel! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Parallelize?\"",
        "options": [
          "SQUAWK YES!",
          "No.",
          "0"
        ],
        "correctAnswer": "SQUAWK YES!"
      }
    ]
  },
  {
    "order": 76,
    "title": "Dynamic MST",
    "desc": "Updating the tree in real-time.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Live Tree! What if edges change? Adding an edge is easy; deleting an edge from the MST is HARD. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"We use 'Link-Cut Trees' or 'Euler Tour Trees' which often use heaps internally to find replacement edges in O(log^2 V)! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the goal of a Dynamic MST?",
        "options": [
          "Maintain the MST as edges are added/deleted",
          "Build one MST once",
          "Find the tallest bird"
        ],
        "correctAnswer": "Maintain the MST as edges are added/deleted"
      },
      {
        "type": "match_following",
        "questionText": "Match Dynamic Actions!",
        "pairs": [
          {
            "key": "Add Edge",
            "value": "Check for cycle/replace max"
          },
          {
            "key": "Delete Edge",
            "value": "Find replacement"
          },
          {
            "key": "Tool",
            "value": "Priority Search Tree"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Maximum number of edges in a tree.",
        "codeSnippet": "edges = V - ___ ;",
        "correctAnswer": "1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Heaps help manage the 'Replacement Candidates' for any edge that gets cut! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity for a single update in top-tier dynamic MST?",
        "options": [
          "O(log^2 V) or better",
          "O(E)",
          "O(V)"
        ],
        "correctAnswer": "O(log^2 V) or better"
      },
      {
        "type": "code_fill_in",
        "questionText": "Updating type.",
        "codeSnippet": "D ___",
        "correctAnswer": "ynamic"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Never stop growing! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Still standing?\"",
        "options": [
          "SQUAWK YES!",
          "No.",
          "0"
        ],
        "correctAnswer": "SQUAWK YES!"
      }
    ]
  },
  {
    "order": 77,
    "title": "Bottleneck Paths",
    "desc": "The strongest link search.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Bottleneck Bird! Finding the 'Bottleneck Spanning Tree' is finding a tree where the MAXIMUM edge weight is as small as possible. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Result: Every MST is a Bottleneck Spanning Tree! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What defines a Bottleneck Spanning Tree?",
        "options": [
          "Minimized largest edge weight",
          "Minimized sum of weights",
          "Maximized smallest edge"
        ],
        "correctAnswer": "Minimized largest edge weight"
      },
      {
        "type": "match_following",
        "questionText": "Match Path Terms!",
        "pairs": [
          {
            "key": "MST",
            "value": "Min Total Weight"
          },
          {
            "key": "Bottleneck",
            "value": "Min MAX edge"
          },
          {
            "key": "Relationship",
            "value": "All MSTs are Bottlenecks"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Search logic to find bottleneck path between U and V.",
        "codeSnippet": "pathMax = ___ (edges_on_path);",
        "correctAnswer": "max"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"We can use a modified Prim's algorithm with a heap to find these paths instantly! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "If a bottleneck tree is NOT an MST, what must be true about its' total weight?",
        "options": [
          "It must be >= MST total weight",
          "It must be smaller",
          "It's impossible"
        ],
        "correctAnswer": "It must be >= MST total weight"
      },
      {
        "type": "code_fill_in",
        "questionText": "Narrows point.",
        "codeSnippet": "B ___",
        "correctAnswer": "ottleneck"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Pass the bottle! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Found the limit?\"",
        "options": [
          "SQUAWK YES!",
          "No.",
          "0"
        ],
        "correctAnswer": "SQUAWK YES!"
      }
    ]
  },
  {
    "order": 78,
    "title": "K-th Smallest MST",
    "desc": "Beyond the optimal one.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Backup Plans! Sometimes the primary MST fails. We need the 2nd best, 3rd best... K-th best Spanning Tree! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Katoh's algorithm uses Heaps to find these in O(K * E log V). 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "How to find the 2nd MST?",
        "options": [
          "Find best replacement for each edge in the MST",
          "Sort all edges",
          "Randomly delete one edge"
        ],
        "correctAnswer": "Find best replacement for each edge in the MST"
      },
      {
        "type": "match_following",
        "questionText": "Match the Hierarchy!",
        "pairs": [
          {
            "key": "1st MST",
            "value": "The absolute minimum"
          },
          {
            "key": "2nd MST",
            "value": "Next best"
          },
          {
            "key": "Heap Search",
            "value": "Maintain candidates"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Number of replacements to check for the 2nd MST.",
        "codeSnippet": "checks = V - ___ ;",
        "correctAnswer": "1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"A 'Priority Queue of Heaps' is used in some advanced versions of this problem! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is the 2nd MST drastically different from the 1st?",
        "options": [
          "No, usually only one edge difference",
          "Yes, completely different",
          "0"
        ],
        "correctAnswer": "No, usually only one edge difference"
      },
      {
        "type": "code_fill_in",
        "questionText": "Rank of tree.",
        "codeSnippet": "K-th ___",
        "correctAnswer": "Best"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The next best thing! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"What's the backup?\"",
        "options": [
          "THE 2ND MST!",
          "None.",
          "0"
        ],
        "correctAnswer": "THE 2ND MST!"
      }
    ]
  },
  {
    "order": 79,
    "title": "Hierarchical Heaping",
    "desc": "Nests within nests.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Nested Power! To handle billions of edges, some solvers use a 'Hierarchy of Heaps'. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Divide the graph into clusters. Use a heap for each cluster, then a MASTER HEAP to find the best among cluster-winners! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What concept does this Hierarchical approach mimic?",
        "options": [
          "Divide and Conquer",
          "Binary Search",
          "Linked Lists"
        ],
        "correctAnswer": "Divide and Conquer"
      },
      {
        "type": "match_following",
        "questionText": "Match the Levels!",
        "pairs": [
          {
            "key": "Leaf Heap",
            "value": "Local edges"
          },
          {
            "key": "Root Heap",
            "value": "Cluster winners"
          },
          {
            "key": "Performance",
            "value": "Great for Distributed systems"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Total hierarchy height.",
        "codeSnippet": "height = ___ (levels);",
        "correctAnswer": "log"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This is essentially what happens in modern GPU-accelerated graph libraries! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Can a master heap manage millions of sub-heaps?",
        "options": [
          "SQUAWK YES!",
          "No",
          "Only and always"
        ],
        "correctAnswer": "SQUAWK YES!"
      },
      {
        "type": "code_fill_in",
        "questionText": "Hierarchy type.",
        "codeSnippet": "H ___",
        "correctAnswer": "ierarchical"
      },
      {
        "type": "teaching",
                "questionText": "🦜 Pico: \"Heaps all the way down! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Who wins the master?\"",
        "options": [
          "THE TOP ROOT!",
          "No one.",
          "0"
        ],
        "correctAnswer": "THE TOP ROOT!"
      }
    ]
  },
  {
    "order": 80,
    "title": "Master Point (Heaps 8)",
    "desc": "Network nightingale status confirmed.",
    "lessons": [
      {
        "type": "teaching",
                "questionText": "🦜 Pico: \"STAGE 8 COMPLETE! You've mastered Undirected Cuts, Dynamic Spanning, and the Hierarchy of Nests. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Which algorithm finds an undirected min-cut using Max-Heaps?",
        "options": [
          "Stoer-Wagner",
          "Dijkstra",
          "Prim"
        ],
        "correctAnswer": "Stoer-Wagner"
      },
      {
        "type": "multiple_choice",
        "questionText": "What algorithm uses heaps in parallel to grow an MST?",
        "options": [
          "Boruvka's",
          "Kruskal's",
          "Stoer-Wagner"
        ],
        "correctAnswer": "Boruvka's"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"You are a Network Nightingale! In Stage 9, we look at Heap Library Internals: STL, malloc, and C# tricks! 🦜\""
      },
      {
        "type": "match_following",
        "questionText": "Match the Rank!",
        "pairs": [
          {
            "key": "Stage 8",
            "value": "Network Nightingale"
          },
          {
            "key": "Stage 9",
            "value": "Library Lynx"
          },
          {
            "key": "Next",
            "value": "Heaps 9"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Connectivity Points.",
        "codeSnippet": "8 * ___ ;",
        "correctAnswer": "100"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Sing through the wires! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Ready for Libraries?",
        "options": [
          "SQUAWK YES!",
          "Maybe.",
          "No."
        ],
        "correctAnswer": "SQUAWK YES!"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"SQUAWK! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Final Cut?",
        "options": [
          "Snip!",
          "Done.",
          "0"
        ],
        "correctAnswer": "Snip!"
      }
    ]
  }
];

module.exports = stage8;
