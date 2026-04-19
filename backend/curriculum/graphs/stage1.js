const stage1 = [
  {
    "order": 1,
    "title": "The Interconnected Web (Graphs)",
    "desc": "Introduction to Graph data structures.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Global Network! A graph is a set of birds (nodes) and the social links (edges) between them. Unlike trees, anyone can link to anyone! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Graphs can be Directed (one-way flight) or Undirected (two-way). They are the ultimate maps of the world! 🦜\"",
        "codeSnippet": "Nodes: {A, B, C}\nEdges: {(A,B), (B,C), (C,A)}"
      },
      {
        "type": "multiple_choice",
        "questionText": "What are the connections between nodes in a graph called?",
        "options": [
          "Edges",
          "Branches",
          "Strings"
        ],
        "correctAnswer": "Edges"
      },
      {
        "type": "match_following",
        "questionText": "Match Graph Types!",
        "pairs": [
          {
            "key": "Directed",
            "value": "One-way arrow"
          },
          {
            "key": "Undirected",
            "value": "Two-way link"
          },
          {
            "key": "Cyclic",
            "value": "Path returns to start"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Term for a graph where every node is reachable from every other node.",
        "codeSnippet": "A graph is ___ if there is a path between all pairs.",
        "correctAnswer": "connected"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Graphs represent social networks, maps, internet routing, and even the way your brain is wired! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Can a tree be considered a type of graph?",
        "options": [
          "Yes (A graph with no cycles)",
          "No",
          "Only if it has leaves"
        ],
        "correctAnswer": "Yes (A graph with no cycles)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Identify a node.",
        "codeSnippet": "Graph v = {___ , edges};",
        "correctAnswer": "vertices"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Mapping the infinity! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Is the world a graph?\"",
        "options": [
          "The ultimate connection!",
          "No.",
          "0"
        ],
        "correctAnswer": "The ultimate connection!"
      }
    ]
  },
  {
    "order": 2,
    "title": "The Social Grid (Matrix)",
    "desc": "Representing graphs using Adjacency Matrices.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"Grid Logic! Use a 2D array where `adj[i][j] = 1` means bird `i` is linked to bird `j`. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Perfect for dense graphs where many birds are linked. But beware: it uses O(N^2) space! 🦜\"",
        "codeSnippet": "int adj[N][N];\n// Link 0 to 1\nadj[0][1] = 1;\nadj[1][0] = 1;"
      },
      {
        "type": "multiple_choice",
        "questionText": "Space complexity of an Adjacency Matrix?",
        "options": [
          "O(V^2)",
          "O(V + E)",
          "O(E)"
        ],
        "correctAnswer": "O(V^2)"
      },
      {
        "type": "match_following",
        "questionText": "Match Matrix values!",
        "pairs": [
          {
            "key": "1",
            "value": "Edge exists"
          },
          {
            "key": "0",
            "value": "No edge"
          },
          {
            "key": "V x V",
            "value": "Matrix size"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Check if there is an edge between node 1 and 2.",
        "codeSnippet": "if (adj[1][___] == 1) return true;",
        "correctAnswer": "2"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Adding/Removing an edge is O(1). Checking if birds know each other is also O(1). Speed in the grid! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Why is Matrix bad for sparse graphs (few edges)?",
        "options": [
          "Wastes too much memory on zeros",
          "Too slow",
          "Pico rule"
        ],
        "correctAnswer": "Wastes too much memory on zeros"
      },
      {
        "type": "code_fill_in",
        "questionText": "Initialize matrix with zero.",
        "codeSnippet": "memset(adj, ___, sizeof(adj));",
        "correctAnswer": "0"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Geometric connections! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Am I in the grid?\"",
        "options": [
          "Digitally linked!",
          "No.",
          "0"
        ],
        "correctAnswer": "Digitally linked!"
      }
    ]
  },
  {
    "order": 3,
    "title": "The Contact List (Adjacency List)",
    "desc": "Representing graphs using Adjacency Lists.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"Phonebooks of the Forest! Each bird keeps a list of only the friends it is directly linked to. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Efficient for sparse graphs. Space: O(V + E). Most algorithms use this! 🦜\"",
        "codeSnippet": "vector<int> adj[N];\n// Link 0 to 1\nadj[0].push_back(1);\nadj[1].push_back(0);"
      },
      {
        "type": "multiple_choice",
        "questionText": "Space complexity of an Adjacency List?",
        "options": [
          "O(V + E)",
          "O(V^2)",
          "O(E)"
        ],
        "correctAnswer": "O(V + E)"
      },
      {
        "type": "match_following",
        "questionText": "Match List Parts!",
        "pairs": [
          {
            "key": "vector<int> adj[V]",
            "value": "Array of lists"
          },
          {
            "key": "push_back",
            "value": "Add friend"
          },
          {
            "key": "v + e",
            "value": "Memory footprint"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Add an edge between `u` and `v` in an undirected graph.",
        "codeSnippet": "adj[u].push_back(v); adj[___].push_back(u);",
        "correctAnswer": "v"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Unlike the matrix, checking if an edge exists requires scanning the list, which can be O(Degree of node). 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Adjacency list of a node with no edges?",
        "options": [
          "Empty vector",
          "Vector of 0",
          "NULL"
        ],
        "correctAnswer": "Empty vector"
      },
      {
        "type": "code_fill_in",
        "questionText": "Traverse neighbors of node `u`.",
        "codeSnippet": "for(int v : adj[___])",
        "correctAnswer": "u"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Dynamic and slim! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Am I on the list?\"",
        "options": [
          "Part of the circle!",
          "No.",
          "0"
        ],
        "correctAnswer": "Part of the circle!"
      }
    ]
  },
  {
    "order": 4,
    "title": "BFS: The Ripple (Graphs)",
    "desc": "Breadth-First Search in Graphs.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Ripple Effect! Spread out from a starting node, visiting all neighbors first, then their neighbors. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Use a QUEUE and a VISITED array! This prevents you from flying in circles forever. 🦜\"",
        "codeSnippet": "visited[start] = true; q.push(start);\nwhile(!q.empty()) {\n  u = q.pop();\n  for(v : adj[u]) {\n    if(!visited[v]) { visited[v] = true; q.push(v); }\n  }\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "BFS in a graph finds the?",
        "options": [
          "Shortest path (in unweighted graph)",
          "Longest path",
          "Deepest node"
        ],
        "correctAnswer": "Shortest path (in unweighted graph)"
      },
      {
        "type": "match_following",
        "questionText": "Match BFS tools!",
        "pairs": [
          {
            "key": "Queue",
            "value": "FIFO order"
          },
          {
            "key": "Visited[]",
            "value": "Cycle prevention"
          },
          {
            "key": "O(V + E)",
            "value": "Complexity"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Mark node as visited before pushing to queue.",
        "codeSnippet": "if (!visited[neighbor]) { visited[neighbor] = ___; q.push(neighbor); }",
        "correctAnswer": "true"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Complexity: O(V + E). Every node and every edge is explored exactly once. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "If a graph is disconnected, does one BFS visit everyone?",
        "options": [
          "No (Only the current component)",
          "Yes",
          "Pico rule"
        ],
        "correctAnswer": "No (Only the current component)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Extract node from queue.",
        "codeSnippet": "int u = q.___(); q.pop();",
        "correctAnswer": "front"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Spreading the word! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Am I rippling?\"",
        "options": [
          "Layer by layer!",
          "No.",
          "0"
        ],
        "correctAnswer": "Layer by layer!"
      }
    ]
  },
  {
    "order": 5,
    "title": "DFS: The Expedition (Graphs)",
    "desc": "Depth-First Search in Graphs.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Deep Expedition! Fly as far as you can down one path before backtracking to explore others. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Use recursion or a STACK, plus a VISITED array! 🦜\"",
        "codeSnippet": "void dfs(u) {\n  visited[u] = true;\n  for(v : adj[u]) {\n    if(!visited[v]) dfs(v);\n  }\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "DFS in a graph is most useful for?",
        "options": [
          "Cycle detection & Topology",
          "Shortest path",
          "Level order"
        ],
        "correctAnswer": "Cycle detection & Topology"
      },
      {
        "type": "match_following",
        "questionText": "Match DFS tools!",
        "pairs": [
          {
            "key": "Recursion",
            "value": "The auto-stack"
          },
          {
            "key": "Visited[]",
            "value": "Safety first"
          },
          {
            "key": "Backtracking",
            "value": "Return to forks"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Number of times a node is visited in standard DFS.",
        "codeSnippet": "Exactly ___ time(s).",
        "correctAnswer": "1"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Complexity: O(V + E). Just like BFS, but it explores the depth of the forest instead of the surface! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "DFS starting at 0 for 0-1, 1-2, 0-2? Possible path?",
        "options": [
          "0-1-2",
          "0-1-0",
          "Random"
        ],
        "correctAnswer": "0-1-2"
      },
      {
        "type": "code_fill_in",
        "questionText": "Check if neighbor needs visiting.",
        "codeSnippet": "if (!___ [v]) dfs(v);",
        "correctAnswer": "visited"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Into the dark! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Am I deep enough?\"",
        "options": [
          "Touching the core!",
          "No.",
          "0"
        ],
        "correctAnswer": "Touching the core!"
      }
    ]
  },
  {
    "order": 6,
    "title": "The Island Counter",
    "desc": "Finding the number of connected components.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"Isolated Groups! A graph can have multiple separate islands of birds that cannot fly to each other. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Loop through every node. If it isn't visited, start a BFS/DFS and increment your counter! 🦜\"",
        "codeSnippet": "for(int i=0; i<n; i++) {\n  if(!visited[i]) {\n    count++;\n    dfs(i);\n  }\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "How many connected components in a connected graph?",
        "options": [
          "1",
          "V",
          "E"
        ],
        "correctAnswer": "1"
      },
      {
        "type": "match_following",
        "questionText": "Match Island terms!",
        "pairs": [
          {
            "key": "Loop",
            "value": "Visit all starting points"
          },
          {
            "key": "count++",
            "value": "New island found"
          },
          {
            "key": "DFS(i)",
            "value": "Explore the whole island"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Condition to start a new traversal for a component.",
        "codeSnippet": "if (!___ [i]) { islands++; bfs(i); }",
        "correctAnswer": "visited"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"O(V + E). This logic lets you map separate networks in one pass through the global vertex list! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "If a graph has 10 nodes and 0 edges, how many components?",
        "options": [
          "10",
          "1",
          "0"
        ],
        "correctAnswer": "10"
      },
      {
        "type": "code_fill_in",
        "questionText": "Count the group.",
        "codeSnippet": "if(!vis[i]) { ___ ++; dfs(i); }",
        "correctAnswer": "ans"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Counting the archipelago! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Are we isolated?\"",
        "options": [
          "One island at a time!",
          "No.",
          "0"
        ],
        "correctAnswer": "One island at a time!"
      }
    ]
  },
  {
    "order": 7,
    "title": "Cycle Hunt (BFS)",
    "desc": "Detecting a cycle in an undirected graph using BFS.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"Loop-de-Loop! A cycle occurs if you meet a visited bird that IS NOT the one you just came from (your parent). 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Use a Queue of `{Current, Parent}` pairs! If you see a neighbor already visited and `neighbor != parent`, it is a cycle! 🦜\"",
        "codeSnippet": "q.push({start, -1});\nwhile(!q.empty()) {\n  auto p = q.pop();\n  for(v : adj[u]) {\n    if(!vis[v]) { vis[v]=T; q.push({v, u}); }\n    else if(v != parent) return true;\n  }\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "In undirected cycle detection, a cycle is found if neighbor is visited and?",
        "options": [
          "neighbor != parent",
          "neighbor == parent",
          "0"
        ],
        "correctAnswer": "neighbor != parent"
      },
      {
        "type": "match_following",
        "questionText": "Match Cycle logic!",
        "pairs": [
          {
            "key": "vis[v]",
            "value": "Already seen"
          },
          {
            "key": "v == parent",
            "value": "The path we came from"
          },
          {
            "key": "v != parent",
            "value": "A shortcut cycle"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Store the parent info in the queue.",
        "codeSnippet": "queue.push({node, ___});",
        "correctAnswer": "parent"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"O(V + E). In an undirected graph, going back to your parent is NOT a cycle. It's just the way back home! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Can a tree have a cycle?",
        "options": [
          "No (by definition)",
          "Yes",
          "0"
        ],
        "correctAnswer": "No (by definition)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Check for back-edge.",
        "codeSnippet": "if(visited[v] && v ___ parent) return true;",
        "correctAnswer": "!="
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Breaking the loop! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Did I find a circle?\"",
        "options": [
          "Around and around!",
          "No.",
          "0"
        ],
        "correctAnswer": "Around and around!"
      }
    ]
  },
  {
    "order": 8,
    "title": "Cycle Hunt (DFS)",
    "desc": "Detecting cycles using DFS.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"Deep Loop Detection! DFS makes cycle detection even simpler using recursion parameters. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Pass the `parent` as an argument. If you see an already visited neighbor that is not the parent, a cycle exists! 🦜\"",
        "codeSnippet": "bool dfs(u, p) {\n  vis[u] = true;\n  for(v : adj[u]) {\n    if(!vis[v]) {\n      if(dfs(v, u)) return true;\n    }\n    else if(v != p) return true;\n  }\n  return false;\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Condition for cycle in undirected DFS?",
        "options": [
          "visited[v] && v != parent",
          "visited[v] && v == parent",
          "0"
        ],
        "correctAnswer": "visited[v] && v != parent"
      },
      {
        "type": "match_following",
        "questionText": "Match DFS Cycle steps!",
        "pairs": [
          {
            "key": "dfs(v, u)",
            "value": "u becomes v's parent"
          },
          {
            "key": "true",
            "value": "Cycle propagated up"
          },
          {
            "key": "O(V+E)",
            "value": "Scan effort"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Check result of recursive child search.",
        "codeSnippet": "if (dfs(v, u) ___ true) return true;",
        "correctAnswer": "=="
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"O(V + E). DFS is the standard way to find cycles in complex graph structures! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "If DFS returns true, how many cycles are there?",
        "options": [
          "At least one",
          "Exactly one",
          "V"
        ],
        "correctAnswer": "At least one"
      },
      {
        "type": "code_fill_in",
        "questionText": "Initial call parent.",
        "codeSnippet": "if(dfs(i, ___)) return true;",
        "correctAnswer": "-1"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Sniffing out the loops! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Did I find the back-edge?\"",
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
    "order": 9,
    "title": "Dual-Color (Bipartite)",
    "desc": "Checking if a graph is Bipartite (Colorable with 2 colors).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Two-Party System! Can you divide all birds into two groups (Red and Blue) such that NO two friends have the same color? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Use BFS/DFS! Color yourself 0, and color all neighbors 1. If you find a neighbor already colored with your own color, it is NOT Bipartite! 🦜\"",
        "codeSnippet": "color[v] = 1 - color[u];\nif(color[v] == color[u]) return false;"
      },
      {
        "type": "multiple_choice",
        "questionText": "A graph is bipartite if and only if it has no?",
        "options": [
          "Odd-length cycles",
          "Even-length cycles",
          "Edges"
        ],
        "correctAnswer": "Odd-length cycles"
      },
      {
        "type": "match_following",
        "questionText": "Match Bipartite terms!",
        "pairs": [
          {
            "key": "0 and 1",
            "value": "The two colors"
          },
          {
            "key": "1 - current",
            "value": "Opposite color"
          },
          {
            "key": "Conflict",
            "value": "Same color neighbors"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Assign opposite color to neighbor.",
        "codeSnippet": "color[v] = 1 ___ color[u];",
        "correctAnswer": "-"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"O(V + E). Perfect for modeling matchmaking, job assignments, or colored maps! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is a Square (cycle 4) bipartite?",
        "options": [
          "Yes",
          "No",
          "If Pico likes it"
        ],
        "correctAnswer": "Yes"
      },
      {
        "type": "code_fill_in",
        "questionText": "Conflict check.",
        "codeSnippet": "if (color[v] == ___) return false;",
        "correctAnswer": "color[u]"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Harmonious division! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Am I colorful?\"",
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
    "order": 10,
    "title": "Master Point (Foundation)",
    "desc": "Reflecting on the Graph Basics.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"FOUNDATION HALFWAY! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Matrix, List, BFS, DFS, and the detection of islands and cycles. You are a graph architect! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Adjacency Matrix space?",
        "options": [
          "O(V^2)",
          "O(V+E)"
        ],
        "correctAnswer": "O(V^2)"
      },
      {
        "type": "multiple_choice",
        "questionText": "Bipartite graph odd cycle check?",
        "options": [
          "Bipartite if no odd cycles",
          "Bipartite if odd cycles"
        ],
        "correctAnswer": "Bipartite if no odd cycles"
      },
      {
        "type": "multiple_choice",
        "questionText": "BFS shortest path property?",
        "options": [
          "True for unweighted",
          "False"
        ],
        "correctAnswer": "True for unweighted"
      },
      {
        "type": "multiple_choice",
        "questionText": "DFS cycle detection condition?",
        "options": [
          "vis[v] && v != parent",
          "vis[v]"
        ],
        "correctAnswer": "vis[v] && v != parent"
      },
      {
        "type": "multiple_choice",
        "questionText": "Graph Connected Components finding tool?",
        "options": [
          "BFS or DFS",
          "Matrix only"
        ],
        "correctAnswer": "BFS or DFS"
      },
      {
        "type": "match_following",
        "questionText": "Master Pivot Match!",
        "pairs": [
          {
            "key": "Pico",
            "value": "Salutes!"
          },
          {
            "key": "Network",
            "value": "Mapped!"
          },
          {
            "key": "Graphs",
            "value": "Mastered!"
          }
        ]
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Final 10 units of Foundation: Directed Cycles, Topological Sorting, and the start of the Shortest Path algorithms! SQUAWK! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Are you ready to fly into directed space?\"",
        "options": [
          "BEYOND AND UP!",
          "Wait...",
          "0"
        ],
        "correctAnswer": "BEYOND AND UP!"
      }
    ]
  },
  {
    "order": 11,
    "title": "Directed Cycle (The Loop)",
    "desc": "Detecting cycles in a Directed Graph using DFS (DFS Stack).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"The One-Way Trap! In a directed graph, a cycle means you follow the arrows and end up back where you started. Undirected logic won't work here! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Use TWO visited arrays! `vis[]` for global memory and `pathVis[]` for the current recursive path. If you hit a node already in `pathVis[]`, you found a trap! 🦜\"",
        "codeSnippet": "bool dfs(u) {\n  vis[u] = pathVis[u] = true;\n  for(v : adj[u]) {\n    if(!vis[v]) { if(dfs(v)) return true; }\n    else if(pathVis[v]) return true;\n  }\n  pathVis[u] = false; return false;\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why do we need `pathVis[]` in directed cycle detection?",
        "options": [
          "To track nodes in the current recursion stack",
          "To save space",
          "Pico rule"
        ],
        "correctAnswer": "To track nodes in the current recursion stack"
      },
      {
        "type": "match_following",
        "questionText": "Match Directed Cycle tools!",
        "pairs": [
          {
            "key": "vis[u]",
            "value": "Global seen nodes"
          },
          {
            "key": "pathVis[u]",
            "value": "Current path state"
          },
          {
            "key": "pathVis[u]=false",
            "value": "Backtracking exit"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Reset the path-visited flag for the current node.",
        "codeSnippet": "pathVis[u] = ___; return false;",
        "correctAnswer": "false"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Complexity: O(V + E). In directed graphs, a cycle is a \"Back-Edge\" that points to an ancestor in the same DFS activation trial! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "If 0 -> 1 and 0 -> 2 and 1 -> 2, is there a cycle?",
        "options": [
          "No",
          "Yes",
          "Only on weekends"
        ],
        "correctAnswer": "No"
      },
      {
        "type": "code_fill_in",
        "questionText": "Check for back-edge.",
        "codeSnippet": "else if (___ [v]) return true;",
        "correctAnswer": "pathVis"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Identifying the cage! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Did I loop back?\"",
        "options": [
          "Trapped in the flow!",
          "No.",
          "0"
        ],
        "correctAnswer": "Trapped in the flow!"
      }
    ]
  },
  {
    "order": 12,
    "title": "Topological Sort (DFS)",
    "desc": "Ordering nodes such that for every edge u -> v, u comes before v.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Task Scheduler! In a DAG (Directed Acyclic Graph), what is the order to complete chores such that dependencies are always met? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Use DFS! When a node has NO MORE neighbors to visit (expedition finished), push it onto a STACK. The final stack reversed is your answer! 🦜\"",
        "codeSnippet": "void dfs(u) {\n  vis[u] = true;\n  for(v : adj[u]) if(!vis[v]) dfs(v);\n  s.push(u);\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Topological sort is ONLY possible in?",
        "options": [
          "Directed Acyclic Graphs (DAG)",
          "Undirected Graphs",
          "Fully connected graphs"
        ],
        "correctAnswer": "Directed Acyclic Graphs (DAG)"
      },
      {
        "type": "match_following",
        "questionText": "Match Topo Sort steps!",
        "pairs": [
          {
            "key": "DFS",
            "value": "Explore dependencies"
          },
          {
            "key": "Stack Push",
            "value": "On finish (Postorder)"
          },
          {
            "key": "Stack Result",
            "value": "Nodes in order"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The property: if u -> v, then u appears ___ v in topological order.",
        "codeSnippet": "u must appear ___ v;",
        "correctAnswer": "before"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Complexity: O(V + E). It’s basically a DFS that remembers the order of completion. The root of the dependency chain finishes last! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "One DAG can have?",
        "options": [
          "Multiple valid Topo sorts",
          "Only one",
          "0"
        ],
        "correctAnswer": "Multiple valid Topo sorts"
      },
      {
        "type": "code_fill_in",
        "questionText": "Add to stack after recursion.",
        "codeSnippet": "___ .push(u);",
        "correctAnswer": "st"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Ordered flight! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Am I sorted?\"",
        "options": [
          "Dependencies met!",
          "No.",
          "0"
        ],
        "correctAnswer": "Dependencies met!"
      }
    ]
  },
  {
    "order": 13,
    "title": "Kahns Algorithm (BFS)",
    "desc": "Topological sorting using In-Degrees and a Queue.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Practical Scheduler! Pick tasks that have ZERO dependencies (In-degree 0), complete them, and update their neighbors. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Count In-degree for everyone. Push all 0-degree nodes to a queue. Pop, add to result, and decrement neighbor In-degrees. If neighbor hits 0, push it! 🦜\"",
        "codeSnippet": "for(v : adj[u]) {\n  inDegree[v]--;\n  if(inDegree[v] == 0) q.push(v);\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is \"In-degree\" of a node?",
        "options": [
          "Number of arrows pointing AT it",
          "Number of arrows pointing AWAY",
          "Pico rule"
        ],
        "correctAnswer": "Number of arrows pointing AT it"
      },
      {
        "type": "match_following",
        "questionText": "Match Kahn pieces!",
        "pairs": [
          {
            "key": "In-degree 0",
            "value": "Ready to start"
          },
          {
            "key": "Queue",
            "value": "Available tasks"
          },
          {
            "key": "Decrement",
            "value": "dependency solved"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Condition to add a neighbor to the queue.",
        "codeSnippet": "if (inDegree[v] ___ 0) q.push(v);",
        "correctAnswer": "=="
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Complexity: O(V + E). This is perfect because it ALSO detects cycles: if result size != V, there is a cycle! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Can Kahn’s algorithm detect cycles?",
        "options": [
          "Yes",
          "No",
          "If it wants"
        ],
        "correctAnswer": "Yes"
      },
      {
        "type": "code_fill_in",
        "questionText": "Calculate initial in-degree.",
        "codeSnippet": "for(int v : adj[u]) inDegree[v]___;",
        "correctAnswer": "++"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Logical flow! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Are we dependency-free?\"",
        "options": [
          "Cleared for take-off!",
          "No.",
          "0"
        ],
        "correctAnswer": "Cleared for take-off!"
      }
    ]
  },
  {
    "order": 14,
    "title": "Shortest Path (DAG)",
    "desc": "Finding shortest path from source in a Directed Acyclic Graph.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Elite Shortcut! In a DAG (weighted), you can find shortest paths even faster than Dijkstra! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"1. Topological Sort. 2. For each node in Topo-order, relax all its edges. O(V + E) total time! 🦜\"",
        "codeSnippet": "dist[src] = 0;\nfor(u : topoOrder) {\n  for(v, w : adj[u]) {\n    if(dist[v] > dist[u] + w) dist[v] = dist[u] + w;\n  }\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why use Topo Sort for shortest path in DAG?",
        "options": [
          "To process nodes in dependency order",
          "To save memory",
          "Pico rule"
        ],
        "correctAnswer": "To process nodes in dependency order"
      },
      {
        "type": "match_following",
        "questionText": "Match Relaxation!",
        "pairs": [
          {
            "key": "dist[v]",
            "value": "Current best effort"
          },
          {
            "key": "dist[u] + w",
            "value": "New potential route"
          },
          {
            "key": "if(dist[v] > ...)",
            "value": "Relaxation"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Update condition for a shorter path.",
        "codeSnippet": "if (dist[v] ___ dist[u] + weight)",
        "correctAnswer": ">"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Because there are NO cycles, we never have to revisit a node after we process it in Topo order. Linear excellence! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the initial distance for non-source nodes?",
        "options": [
          "Infinity",
          "0",
          "-1"
        ],
        "correctAnswer": "Infinity"
      },
      {
        "type": "code_fill_in",
        "questionText": "Process node u from sorted list.",
        "codeSnippet": "for (int u : ___) { relax(u); }",
        "correctAnswer": "topoSort"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Straight line to victory! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Did I take the shortest?\"",
        "options": [
          "Minimalist elite!",
          "No.",
          "0"
        ],
        "correctAnswer": "Minimalist elite!"
      }
    ]
  },
  {
    "order": 15,
    "title": "Dijkstras Algorithm",
    "desc": "Shortest path in weighted graph (no negative weights).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Map King! The most famous shortest-path algorithm for weighted edges. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Use a MIN-PRIORITY QUEUE! Always pick the closest unvisited bird and relax its neighbors! 🦜\"",
        "codeSnippet": "pq.push({0, src});\nwhile(!pq.empty()) {\n  u = pq.pop().node;\n  for(v, w : adj[u]) {\n    if(dist[v] > dist[u] + w) {\n      dist[v] = dist[u] + w;\n      pq.push({dist[v], v});\n    }\n  }\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Dijkstra fails if the graph has?",
        "options": [
          "Negative weights",
          "Cycles",
          "Birds"
        ],
        "correctAnswer": "Negative weights"
      },
      {
        "type": "match_following",
        "questionText": "Match Dijkstra components!",
        "pairs": [
          {
            "key": "Min-Heap",
            "value": "Greedy choice"
          },
          {
            "key": "dist[v]",
            "value": "Shortest record"
          },
          {
            "key": "O(E log V)",
            "value": "Complexity"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The data structure that makes Dijkstra fast.",
        "codeSnippet": "A min-___ queue.",
        "correctAnswer": "priority"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Greedy search! Once a node is popped from the PQ with a fixed distance, its shortest path is guaranteed... unless weights are negative! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity with binary heap?",
        "options": [
          "O(E log V)",
          "O(V^2)",
          "O(E)"
        ],
        "correctAnswer": "O(E log V)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Push the updated distance.",
        "codeSnippet": "pq.push({dist[v], ___});",
        "correctAnswer": "v"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Master of maps! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Did I find the way?\"",
        "options": [
          "Guaranteed elite!",
          "No.",
          "0"
        ],
        "correctAnswer": "Guaranteed elite!"
      }
    ]
  },
  {
    "order": 16,
    "title": "Bellman-Ford (Negatives)",
    "desc": "Shortest path with negative weights and negative cycle detection.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"Negative Reality! If edges have negative weights, Dijkstra breaks. Bellman-Ford saves the day! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Relax all edges (V-1) times. If you can relax one more time on the Vth pass, a negative cycle exists! 🦜\"",
        "codeSnippet": "for(int i=0; i<v-1; i++) {\n  for(auto e : edges) {\n    if(dist[e.v] > dist[e.u] + e.w) dist[e.v] = dist[e.u] + e.w;\n  }\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Number of relaxations needed for V nodes?",
        "options": [
          "V - 1",
          "V",
          "E"
        ],
        "correctAnswer": "V - 1"
      },
      {
        "type": "match_following",
        "questionText": "Match Bellman terms!",
        "pairs": [
          {
            "key": "V-1 passes",
            "value": "Path building"
          },
          {
            "key": "V-th pass",
            "value": "Cycle detection"
          },
          {
            "key": "O(V*E)",
            "value": "Complexity"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Check for further improvement (negative cycle).",
        "codeSnippet": "if (canStillRelaxOnPassV) return ___;",
        "correctAnswer": "cycle"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"O(V * E). It is slower than Dijkstra, but more robust against negative bird-attitudes! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What is a negative cycle?",
        "options": [
          "A path sum that goes to minus infinity",
          "A cycle with 0 sum",
          "0"
        ],
        "correctAnswer": "A path sum that goes to minus infinity"
      },
      {
        "type": "code_fill_in",
        "questionText": "Iterate all edges.",
        "codeSnippet": "for (auto& edge : ___) { relax(edge); }",
        "correctAnswer": "edges"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Reliable even in the dark! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Did I catch the cycle?\"",
        "options": [
          "Nothing escapes BF!",
          "No.",
          "0"
        ],
        "correctAnswer": "Nothing escapes BF!"
      }
    ]
  },
  {
    "order": 17,
    "title": "All-Pairs (Floyd-Warshall)",
    "desc": "Finding shortest paths between ALL pairs of nodes.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"Global Wisdom! What if we want the distance between EVERY bird in the forest? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Use 3 nested loops! For every intermediate bird `k`, check if `i -> k -> j` is shorter than `i -> j`. 🦜\"",
        "codeSnippet": "for(int k=0; k<v; k++)\n  for(int i=0; i<v; i++)\n    for(int j=0; j<v; j++)\n      dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j]);"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of Floyd-Warshall?",
        "options": [
          "O(V^3)",
          "O(V^2)",
          "O(V*E)"
        ],
        "correctAnswer": "O(V^3)"
      },
      {
        "type": "match_following",
        "questionText": "Match Floyd logic!",
        "pairs": [
          {
            "key": "k",
            "value": "Intermediate node"
          },
          {
            "key": "i, j",
            "value": "Source, Destination"
          },
          {
            "key": "Matrix",
            "value": "Dynamic programming table"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Condition to update shortest path matrix.",
        "codeSnippet": "d[i][j] = ___ (d[i][j], d[i][k] + d[k][j]);",
        "correctAnswer": "min"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"The ultimate DP on graphs. O(V^2) space. Best for smaller forests where you need all answers! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Initialization of `dist[i][i]`?",
        "options": [
          "0",
          "Infinity",
          "Pico"
        ],
        "correctAnswer": "0"
      },
      {
        "type": "code_fill_in",
        "questionText": "Check for intermediate route.",
        "codeSnippet": "if (dist[i][k] + dist[k][j] ___ dist[i][j])",
        "correctAnswer": "<"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Knowing everything! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Do I have the whole map?\"",
        "options": [
          "Full forest coverage!",
          "No.",
          "0"
        ],
        "correctAnswer": "Full forest coverage!"
      }
    ]
  },
  {
    "order": 18,
    "title": "Connecting (Prims)",
    "desc": "Minimum Spanning Tree (MST) using Prims Algorithm.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"Minimum Forest Connectivity! Connect all birds with the shortest total length of social edges. No cycles! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Start at any node. Use a Min-PQ to always add the shortest edge that connects a visited bird to an unvisited bird! 🦜\"",
        "codeSnippet": "pq.push({0, start});\nwhile(!pq.empty()) {\n  {w, u} = pq.pop();\n  if(vis[u]) continue; vis[u]=T; sum+=w;\n  for(v, weight : adj[u]) if(!vis[v]) pq.push({weight, v});\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Prims algorithm finds the?",
        "options": [
          "Minimum Spanning Tree (MST)",
          "Shortest path",
          "Max flow"
        ],
        "correctAnswer": "Minimum Spanning Tree (MST)"
      },
      {
        "type": "match_following",
        "questionText": "Match Prims pieces!",
        "pairs": [
          {
            "key": "Min-PQ",
            "value": "Shortest connecting edge"
          },
          {
            "key": "vis[]",
            "value": "Nodes in MST"
          },
          {
            "key": "sum",
            "value": "Total MST weight"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Skip if node is already part of the connection network.",
        "codeSnippet": "if (visited[node]) ___;",
        "correctAnswer": "continue"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"O(E log V). It is greedy, just like Dijkstra, but it cares about the TOTAL weight of the tree, not distance from a root! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Can MST have cycles?",
        "options": [
          "No",
          "Yes",
          "Only if weights are negative"
        ],
        "correctAnswer": "No"
      },
      {
        "type": "code_fill_in",
        "questionText": "Update MST weight.",
        "codeSnippet": "if(!vis[u]) { ___ += weight; }",
        "correctAnswer": "sum"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"A tight net! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Are all birds connected?\"",
        "options": [
          "Minimalist unity!",
          "No.",
          "0"
        ],
        "correctAnswer": "Minimalist unity!"
      }
    ]
  },
  {
    "order": 19,
    "title": "Connecting (Kruskals)",
    "desc": "MST using Edge Sorting and Disjoint Set Union (DSU).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"Edge-First Connection! Sort EVERY edge by weight. Add them one by one IF they don't create a cycle. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Use DSU for cycle detection! `if(find(u) != find(v)) { union(u, v); sum += w; }` 🦜\"",
        "codeSnippet": "sort(edges);\nfor(auto e : edges) {\n  if(find(e.u) != find(e.v)) {\n    dsu.unite(e.u, e.v);\n    totalWeight += e.w;\n  }\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Which data structure is essential for Kruskal’s?",
        "options": [
          "Disjoint Set Union (DSU)",
          "Stack",
          "Queue"
        ],
        "correctAnswer": "Disjoint Set Union (DSU)"
      },
      {
        "type": "match_following",
        "questionText": "Match Kruskal steps!",
        "pairs": [
          {
            "key": "Sort edges",
            "value": "Greedy ordering"
          },
          {
            "key": "find(u) == find(v)",
            "value": "Cycle detected"
          },
          {
            "key": "Union",
            "value": "Combine components"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Add to MST only if u and v are in different components.",
        "codeSnippet": "if (find(u) ___ find(v)) { union(u, v); }",
        "correctAnswer": "!="
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"O(E log E) for sorting + O(E log V) for DSU. It views the forest as many small islands merging into one! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "If edges are {1, 2, 5, 10}, which is picked first?",
        "options": [
          "1",
          "10",
          "Any"
        ],
        "correctAnswer": "1"
      },
      {
        "type": "code_fill_in",
        "questionText": "Sort the edges array.",
        "codeSnippet": "___ (edges.begin(), edges.end(), compare);",
        "correctAnswer": "sort"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Unified forest! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Am I in the MST?\"",
        "options": [
          "A crucial link!",
          "No.",
          "0"
        ],
        "correctAnswer": "A crucial link!"
      }
    ]
  },
  {
    "order": 20,
    "title": "Stage 1 Graduation",
    "desc": "The Graph Foundation Complete.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"STAGE 1 COMPLETE! You have conquered the Networks, the Paths, and the Spanning Trees! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Dijkstra, Bellman-Ford, Kruskal, and the logic of dependencies. You are a master of connections! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Topological sort requirement?",
        "options": [
          "Directed Acyclic Graph (DAG)",
          "Any graph"
        ],
        "correctAnswer": "Directed Acyclic Graph (DAG)"
      },
      {
        "type": "multiple_choice",
        "questionText": "Dijkstra runtime (heap)?",
        "options": [
          "O(E log V)",
          "O(V^2)"
        ],
        "correctAnswer": "O(E log V)"
      },
      {
        "type": "multiple_choice",
        "questionText": "Bellman-Ford relaxation limit?",
        "options": [
          "V-1 times",
          "V times"
        ],
        "correctAnswer": "V-1 times"
      },
      {
        "type": "multiple_choice",
        "questionText": "MST property?",
        "options": [
          "Connect all nodes min total edge weight",
          "Shortest distance from root"
        ],
        "correctAnswer": "Connect all nodes min total edge weight"
      },
      {
        "type": "multiple_choice",
        "questionText": "Directed cycle detection tool?",
        "options": [
          "Recursion stack (pathVis)",
          "Simple visited"
        ],
        "correctAnswer": "Recursion stack (pathVis)"
      },
      {
        "type": "match_following",
        "questionText": "Final Foundation Match!",
        "pairs": [
          {
            "key": "Graph",
            "value": "Social!"
          },
          {
            "key": "Paths",
            "value": "Mapped!"
          },
          {
            "key": "Pico",
            "value": "Salutes!"
          }
        ]
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Next, we face the Intermediate Stage: Tarjan’s Bridges, Kosaraju’s Islands, and the SCC Discovery of the Gods! SQUAWK! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Are you ready for the deep connections?\"",
        "options": [
          "BEYOND AND UP!",
          "Wait...",
          "0"
        ],
        "correctAnswer": "BEYOND AND UP!"
      }
    ]
  }
];

module.exports = stage1;