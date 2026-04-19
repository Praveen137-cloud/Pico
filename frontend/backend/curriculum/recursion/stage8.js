const stage8 = [
  {
    "order": 71,
    "title": "DFS: Depth First Search",
    "desc": "The quintessential recursive graph crawl.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Graph Glider! DFS is simply Recursion applied to nodes and edges. Explore deep before coming back up! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Mark the current bird nest as VISITED, then recurse into every unvisited neighbor! 🦜\"",
        "codeSnippet": "void dfs(u) {\n  visited[u] = true;\n  for (v : adj[u]) {\n    if (!visited[v]) dfs(v);\n  }\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Which data structure is implicitly used by recursive DFS?",
        "options": [
          "Stack",
          "Queue",
          "Hash Map"
        ],
        "correctAnswer": "Stack"
      },
      {
        "type": "match_following",
        "questionText": "Match the DFS Rules!",
        "pairs": [
          {
            "key": "visited[u] = true",
            "value": "Prevent Infinite Loops"
          },
          {
            "key": "adj[u]",
            "value": "Neighboring Nests"
          },
          {
            "key": "Recursive State",
            "value": "Current Node"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The check before recursing into a neighbor.",
        "codeSnippet": "if (___ visited[neighbor]) dfs(neighbor);",
        "correctAnswer": "!"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"DFS visits every node and every edge once. Complexity is O(V + E)! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What happens if you remove the 'visited' check?",
        "options": [
          "Infinite recursion / Crash",
          "It becomes BFS",
          "Nothing"
        ],
        "correctAnswer": "Infinite recursion / Crash"
      },
      {
        "type": "code_fill_in",
        "questionText": "Time complexity for a graph with V vertices and E edges.",
        "codeSnippet": "O(V ___ E)",
        "correctAnswer": "+"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Go deep, fledgling! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I at the end of the line?\"",
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
    "title": "Finding a Path",
    "desc": "Is there a route between two birds?",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Pathfinder! Can you get from bird A to bird B? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Recursively search from A. If you reach B, return TRUE. If all paths fail, return FALSE! 🦜\"",
        "codeSnippet": "bool hasPath(u, dest) {\n  if (u == dest) return true;\n  visited[u] = true;\n  for (v : adj[u]) {\n    if (!visited[v] && hasPath(v, dest)) return true;\n  }\n  return false;\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "When do we stop the recursion in 'hasPath'?",
        "options": [
          "When destination is found",
          "When all nodes are visited",
          "After 10 steps"
        ],
        "correctAnswer": "When destination is found"
      },
      {
        "type": "match_following",
        "questionText": "Match Search Outcomes!",
        "pairs": [
          {
            "key": "Return True",
            "value": "Path Found!"
          },
          {
            "key": "Return False",
            "value": "No route here"
          },
          {
            "key": "Visited",
            "value": "Avoid backtracking in loops"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The base case for finding the destination.",
        "codeSnippet": "if (current ___ destination) return true;",
        "correctAnswer": "=="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"DFS finds ANY path, but not necessarily the SHORTEST one. For that, you need BFS! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Does hasPath work on directed graphs?",
        "options": [
          "Yes",
          "No",
          "Only in elite mode"
        ],
        "correctAnswer": "Yes"
      },
      {
        "type": "code_fill_in",
        "questionText": "Condition for continuing search.",
        "codeSnippet": "if (!vis[v] && hasPath(v, ___))",
        "correctAnswer": "dest"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The shortest path is a dream, any path is a reality! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Can I get to you?\"",
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
    "title": "Topological Sort",
    "desc": "Ordering birds by their dependencies.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Topological Sort! If Bird A must eat before Bird B can sing, what order should they act in? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Use DFS. When a node is FINISHED (all neighbors visited), push it onto a stack. The reverse of the stack is the sorted order! 🦜\"",
        "codeSnippet": "void topo(u) {\n  visited[u] = true;\n  for (v : adj[u]) if (!visited[v]) topo(v);\n  res.push(u); // Finished\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Topological sort only works on which type of graph?",
        "options": [
          "DAG (Directed Acyclic Graph)",
          "Any Graph",
          "Circle Graph"
        ],
        "correctAnswer": "DAG (Directed Acyclic Graph)"
      },
      {
        "type": "match_following",
        "questionText": "Match Topo Terms!",
        "pairs": [
          {
            "key": "DAG",
            "value": "Directed, No Cycles"
          },
          {
            "key": "Stack",
            "value": "Holds finished nodes"
          },
          {
            "key": "Post-order",
            "value": "Logic behind finish time"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Add current node to result after neighbors are done.",
        "codeSnippet": "for (v : adj[u]) if (!v) dfs(v);\nres. ___ (u);",
        "correctAnswer": "push"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"If there is a cycle (Bird A feeds B, B feeds A), Topo sort is impossible! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "If A depends on B, which comes first in Topo Sort?",
        "options": [
          "B",
          "A",
          "Simultaneously"
        ],
        "correctAnswer": "B"
      },
      {
        "type": "code_fill_in",
        "questionText": "Final sorted list is the ___ of the stack.",
        "codeSnippet": "sorted = ___ (stack)",
        "correctAnswer": "reverse"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Follow the order of nature! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I first?\"",
        "options": [
          "DEPENDS!",
          "Yes.",
          "0"
        ],
        "correctAnswer": "DEPENDS!"
      }
    ]
  },
  {
    "order": 74,
    "title": "Flood Fill",
    "desc": "Recoloring the bird domain recursively.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Flood Fill! Click a pixel (or bird) and change the color of everything connected to it with the same original color! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This is just DFS on a 2D grid! Check the 4 neighbors (Up, Down, Left, Right). 🦜\"",
        "codeSnippet": "void fill(r, c, oldC, newC) {\n  if (invalid || color != oldC) return;\n  color = newC;\n  fill(r+1, c, ...); fill(r-1, c, ...);\n  fill(r, c+1, ...); fill(r, c-1, ...);\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Which famous app tool uses Flood Fill?",
        "options": [
          "Paint Bucket tool",
          "Eraser",
          "Crop"
        ],
        "correctAnswer": "Paint Bucket tool"
      },
      {
        "type": "match_following",
        "questionText": "Match the Fill Rules!",
        "pairs": [
          {
            "key": "Initial Color",
            "value": "What we replace"
          },
          {
            "key": "New Color",
            "value": "The replacement"
          },
          {
            "key": "Neighbors",
            "value": "Recursive branches"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Condition to prevent infinite fill.",
        "codeSnippet": "if (currentPixelColor ___ targetColor) return;",
        "correctAnswer": "=="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"It's simple but powerful. Used in map editors, image software, and game logic! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity for an MxN image?",
        "options": [
          "O(MN)",
          "O(M+N)",
          "O(1)"
        ],
        "correctAnswer": "O(MN)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Recursive call down.",
        "codeSnippet": "fill(r ___ 1, c, old, new);",
        "correctAnswer": "+"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Spread the colors of excellence! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I colorful?\"",
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
    "title": "Island Counting",
    "desc": "How many separate bird colonies exist?",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Island Explorer! In a grid of '1's (Land) and '0's (Water), how many separate land masses exist? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"For every '1' you find, start a DFS to 'sink' or 'mark' the whole island. Each time you start a NEW DFS, you found an island! 🦜\"",
        "codeSnippet": "if (grid[i][j] == '1') {\n  count++;\n  sinkIsland(i, j);\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "How common is this algorithmic pattern?",
        "options": [
          "Very common in interview prep",
          "Rarely used",
          "Only for cartographers"
        ],
        "correctAnswer": "Very common in interview prep"
      },
      {
        "type": "match_following",
        "questionText": "Match the Logic!",
        "pairs": [
          {
            "key": "Main Loop",
            "value": "Find start of island"
          },
          {
            "key": "DFS",
            "value": "Mark the whole island"
          },
          {
            "key": "Result",
            "value": "Number of DFS starts"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The mark to sink the island (avoid re-counting).",
        "codeSnippet": "grid[i][j] = '___' ;",
        "correctAnswer": "0"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Ensure you handle the grid boundaries in each recursive call! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Number of islands in [[1,0],[0,1]]?",
        "options": [
          "2",
          "1",
          "0"
        ],
        "correctAnswer": "2",
        "explanation": "Cells are only adjacent UP/DOWN/LEFT/RIGHT."
      },
      {
        "type": "code_fill_in",
        "questionText": "Boundary check for index `r`.",
        "codeSnippet": "if (r < 0 || r ___ n) return;",
        "correctAnswer": ">="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Every colony is unique! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is my branch an island?\"",
        "options": [
          "Yes!",
          "No.",
          "0"
        ],
        "correctAnswer": "Yes!"
      }
    ]
  },
  {
    "order": 76,
    "title": "Cycle Detection (Directed)",
    "desc": "Are we trapped in a dependency loop?",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Eternal Flight! Does Bird A call B, and B call A? We need to find cycles in a directed graph! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Use a 'Recursion Stack' array. If you visit a node that is CURRENTLY in the active recursion stack, you found a cycle! 🦜\"",
        "codeSnippet": "if (recStack[v]) return true;\nif (!vis[v] && dfs(v)) return true;"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why is 'visited' not enough to find cycles in a directed graph?",
        "options": [
          "Because a node could be reachable via different paths without a loop",
          "It is enough",
          "Pico says recursion stack is better"
        ],
        "correctAnswer": "Because a node could be reachable via different paths without a loop"
      },
      {
        "type": "match_following",
        "questionText": "Match Cycle Signals!",
        "pairs": [
          {
            "key": "In recStack",
            "value": "Cycle exists!"
          },
          {
            "key": "visited only",
            "value": "Node processed already"
          },
          {
            "key": "Back-edge",
            "value": "Technical term for cycle edge"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Set the recursion stack bit after finishing a branch.",
        "codeSnippet": "recStack[u] = true;\nif (dfsNeighbors()) return true;\nrecStack[u] = ___ ;",
        "correctAnswer": "false"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This O(V+E) check is vital for compilers to avoid infinite loops in code dependencies! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is a cycle possible in a tree?",
        "options": [
          "No (by definition)",
          "Yes",
          "Only in elite trees"
        ],
        "correctAnswer": "No (by definition)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Check neighbor `v`.",
        "codeSnippet": "if (recStack[___]) return true;",
        "correctAnswer": "v"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Break the loop, fledgling! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I circling?\"",
        "options": [
          "Never!",
          "Yes.",
          "0"
        ],
        "correctAnswer": "Never!"
      }
    ]
  },
  {
    "order": 77,
    "title": "Cycle Detection (Undirected)",
    "desc": "Loops in a connected web.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Undirected Cycles! If Bird A is connected to B, they can see each other. Does the entire web have a loop? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Simple Rule: If we visit a node that is ALREADY visited and it's NOT the direct parent of the current node, we found a cycle! 🦜\"",
        "codeSnippet": "if (visited[v]) {\n  if (v != parent) return true;\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "In undirected graphs, why must we ignore the 'parent' node?",
        "options": [
          "Because every edge is a 2-way street by nature",
          "The parent is invisible",
          "It's already sorted"
        ],
        "correctAnswer": "Because every edge is a 2-way street by nature"
      },
      {
        "type": "match_following",
        "questionText": "Match Undirected Rules!",
        "pairs": [
          {
            "key": "v == parent",
            "value": "Normal 2-way edge"
          },
          {
            "key": "v != parent && vis[v]",
            "value": "Cycle found"
          },
          {
            "key": "DFS(v, u)",
            "value": "Pass current as parent"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Pass the current node as the next parent.",
        "codeSnippet": "if (isCycle(neighbor, ___ )) return true;",
        "correctAnswer": "u"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Complexity O(V+E). This is how we verify if a connected graph is actually a Tree! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Can a graph with 2 nodes and 1 edge have a cycle?",
        "options": [
          "No",
          "Yes",
          "Only in multi-graphs"
        ],
        "correctAnswer": "No"
      },
      {
        "type": "code_fill_in",
        "questionText": "Initial parent value for start node.",
        "codeSnippet": "dfs(start, ___ )",
        "correctAnswer": "-1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Keep the web clean! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I connected?\"",
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
    "title": "Bipartite Check",
    "desc": "Can we split the flock into two friendly colors?",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Two Colors! Can we color every bird nest RED or BLUE so that no two neighbors have the same color? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Recursive Coloring! Give a bird a color, then give all its' neighbors the OPPOSITE color. If a conflict occurs, it's not bipartite! 🦜\"",
        "codeSnippet": "color[v] = 1 - color[u];\nif (!dfs(v)) return false;"
      },
      {
        "type": "multiple_choice",
        "questionText": "A graph is NOT bipartite if it contains:",
        "options": [
          "An odd-length cycle",
          "An even-length cycle",
          "Any cycle"
        ],
        "correctAnswer": "An odd-length cycle"
      },
      {
        "type": "match_following",
        "questionText": "Match the Bipartite Logic!",
        "pairs": [
          {
            "key": "Color 0",
            "value": "Team Blue"
          },
          {
            "key": "Color 1",
            "value": "Team Red"
          },
          {
            "key": "Conflict",
            "value": "Neighbor same color"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "XOR to switch colors (0 and 1).",
        "codeSnippet": "nextColor = currentColor ___ 1;",
        "correctAnswer": "^"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Used in matching algorithms. Many real-world problems (like Job-Worker assignments) are bipartite! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is a Triangle graph (3 nodes, 3 edges) bipartite?",
        "options": [
          "No (Odd cycle)",
          "Yes",
          "Depends on the start"
        ],
        "correctAnswer": "No (Odd cycle)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Check conflict.",
        "codeSnippet": "if (color[v] == color[u]) return ___ ;",
        "correctAnswer": "false"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Fair and balanced teams! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I red or blue?\"",
        "options": [
          "Pico-Colored!",
          "Red.",
          "Blue."
        ],
        "correctAnswer": "Pico-Colored!"
      }
    ]
  },
  {
    "order": 79,
    "title": "Longest Path (DAG)",
    "desc": "The furthest flight in a directed world.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Grand Journey! In a Directed Acyclic Graph (DAG), what is the longest path from any bird to any other? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Use DFS + Memoization! The longest path from U = 1 + max(longest path from any neighbor V). 🦜\"",
        "codeSnippet": "int dist(u) {\n  if (memo[u] != -1) return memo[u];\n  int maxD = 0;\n  for(v : adj[u]) maxD = max(maxD, 1 + dist(v));\n  return memo[u] = maxD;\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why must the graph be Acyclic (DAG) for this simple recursion?",
        "options": [
          "Cycles would cause infinite recursion",
          "Paths don't exist in cycles",
          "It's just better"
        ],
        "correctAnswer": "Cycles would cause infinite recursion"
      },
      {
        "type": "match_following",
        "questionText": "Match the Path Math!",
        "pairs": [
          {
            "key": "dist(u)",
            "value": "1 + max(dist(v))"
          },
          {
            "key": "Memoization",
            "value": "Save results to avoid re-calls"
          },
          {
            "key": "Complexity",
            "value": "O(V + E)"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The update for the maximum distance from neighbors.",
        "codeSnippet": "ans = ___(ans, 1 + solve(v));",
        "correctAnswer": "max"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This is Dynamic Programming on Graphs. Every node is solved once! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Longest path for A -> B, B -> C, A -> C?",
        "options": [
          "2 (A-B-C)",
          "1",
          "3"
        ],
        "correctAnswer": "2 (A-B-C)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Store the result in cache.",
        "codeSnippet": "return ___ [u] = res;",
        "correctAnswer": "memo"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Enjoy the long flight, fledgling! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Was it worth the distance?\"",
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
    "order": 80,
    "title": "Master Point (Recursion 8)",
    "desc": "Graph glider status confirmed.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"STAGE 8 COMPLETE! You've navigated mazes, counted islands, sorted dependencies, and detected cycles. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "In graph recursion, what prevents the 'Infinite Flight'?",
        "options": [
          "Visited array",
          "The CPU",
          "A timer"
        ],
        "correctAnswer": "Visited array"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of DFS?",
        "options": [
          "O(V + E)",
          "O(N^2)",
          "O(log N)"
        ],
        "correctAnswer": "O(V + E)"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"You're a Graph Glider! In Stage 9, we merge Recursion with the magic of Dynamic Programming! 🦜\""
      },
      {
        "type": "match_following",
        "questionText": "Match the Rank!",
        "pairs": [
          {
            "key": "Stage 8",
            "value": "Graph Glider"
          },
          {
            "key": "Stage 9",
            "value": "State Spinner"
          },
          {
            "key": "Next",
            "value": "DP Depths"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Nodes Glided.",
        "codeSnippet": "8 * ___ ;",
        "correctAnswer": "100"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The web is vast, but you have flyed through it all! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Enter the DP realm?",
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
        "questionText": "Final DFS?",
        "options": [
          "Recurse deep!",
          "Done.",
          "0"
        ],
        "correctAnswer": "Recurse deep!"
      }
    ]
  }
];

module.exports = stage8;
