const stage2 = [
  {
    "order": 21,
    "title": "The Binary Maze",
    "desc": "Finding the shortest path in a grid of 0s and 1s.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Digital Labyrinth! Find the shortest flight from (0,0) to (N-1,N-1) in a grid of seeds (1) and walls (0). 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Use BFS! Since every hop costs exactly 1 energy, BFS guarantees the shortest path. Just keep track of (row, col) and the distance! 🦜\"",
        "codeSnippet": "q.push({0,0,0});\nwhile(!q.empty()) {\n  {r, c, d} = q.pop();\n  if(r==n-1 && c==n-1) return d;\n  for(dir : 8_directions) {\n    nr = r + dir.r; nc = c + dir.c;\n    if(isValid(nr, nc) && grid[nr][nc] == 0) {\n      grid[nr][nc] = 1; q.push({nr, nc, d+1});\n    }\n  }\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why is BFS used for shortest path in a grid with uniform edge weights?",
        "options": [
          "Guarantees first reach is shortest",
          "It is faster than DFS",
          "Pico rule"
        ],
        "correctAnswer": "Guarantees first reach is shortest"
      },
      {
        "type": "match_following",
        "questionText": "Match Maze components!",
        "pairs": [
          {
            "key": "Queue",
            "value": "Nodes to explore"
          },
          {
            "key": "visited[][]",
            "value": "Prevent cycles"
          },
          {
            "key": "8 Directions",
            "value": "Surrounding movement"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Mark the cell as visited to avoid re-processing.",
        "codeSnippet": "grid[nr][nc] = ___;",
        "correctAnswer": "1"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"O(N^2) time where N is the grid side. Every cell is visited once. Efficient flight through the maze! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "How many neighbors in a 2D grid including diagonals?",
        "options": [
          "8",
          "4",
          "9"
        ],
        "correctAnswer": "8"
      },
      {
        "type": "code_fill_in",
        "questionText": "Check if target is reached.",
        "codeSnippet": "if (r == n - 1 ___ c == m - 1)",
        "correctAnswer": "&&"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Navigating the squares! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Did I find the exit?\"",
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
    "order": 22,
    "title": "Minimum Effort Path",
    "desc": "Finding a path where the maximum absolute difference between adjacent cells is minimized.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Easy Flight! Find a path from start to end such that the absolute hardest hop (height difference) is as small as possible. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Use Dijkstra! The 'distance' to a cell is the max-effort seen so far on that path. Always pick the cell with the smallest max-effort from the PQ! 🦜\"",
        "codeSnippet": "pq.push({0, 0, 0});\nwhile(!pq.empty()) {\n  {diff, r, c} = pq.pop();\n  for(neighbor : neighbors) {\n    newEffort = max(diff, abs(grid[r][c] - grid[nr][nc]));\n    if(newEffort < dist[nr][nc]) { dist[nr][nc] = newEffort; pq.push({newEffort, nr, nc}); }\n  }\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "In \"Path with Minimum Effort\", the \"distance\" stored is?",
        "options": [
          "Max difference on the path",
          "Sum of differences",
          "Number of hops"
        ],
        "correctAnswer": "Max difference on the path"
      },
      {
        "type": "match_following",
        "questionText": "Match Effort logic!",
        "pairs": [
          {
            "key": "abs(h1 - h2)",
            "value": "Current hop effort"
          },
          {
            "key": "max(prev, current)",
            "value": "Path effort"
          },
          {
            "key": "Min-PQ",
            "value": "Greedy choice"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Initialize effort distances.",
        "codeSnippet": "vector<vector<int>> effort(rows, vector<int>(cols, ___));",
        "correctAnswer": "INT_MAX"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"O(E log V) or O(Rows * Cols * log(Rows * Cols)). This is a classic modification of Dijkstra for a different kind of 'shortest' path! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Does this algorithm find the shortest path in terms of hops?",
        "options": [
          "No (Minimizes max-effort)",
          "Yes",
          "Pico rule"
        ],
        "correctAnswer": "No (Minimizes max-effort)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Update new effort.",
        "codeSnippet": "newEffort = ___(effort, abs(h1 - h2));",
        "correctAnswer": "max"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Smooth trails! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Is the flight easy?\"",
        "options": [
          "Minimum friction!",
          "No.",
          "0"
        ],
        "correctAnswer": "Minimum friction!"
      }
    ]
  },
  {
    "order": 23,
    "title": "Cheapest Flight (K Stops)",
    "desc": "Shortest path with a limit on the number of intermediate nodes.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Budget Flyer! Find the cheapest flight from A to B, but you can only make at most K intermediate stops. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Use a Modified BFS or Bellman-Ford! Relax edges only up to K+1 levels. A queue of `{current_node, current_price, current_stops}` works best! 🦜\"",
        "codeSnippet": "q.push({src, 0, 0});\nwhile(!q.empty()) {\n  {u, price, stops} = q.pop();\n  if(stops > k) continue;\n  for(v, w : adj[u]) {\n    if(price + w < dist[v]) { dist[v] = price + w; q.push({v, dist[v], stops + 1}); }\n  }\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why not use standard Dijkstra for Cheapest Flight with K stops?",
        "options": [
          "Standard Dijkstra doesn’t account for stop limits",
          "It is too slow",
          "Pico rule"
        ],
        "correctAnswer": "Standard Dijkstra doesn’t account for stop limits"
      },
      {
        "type": "match_following",
        "questionText": "Match Budget logic!",
        "pairs": [
          {
            "key": "Stops > K",
            "value": "Stop exploration"
          },
          {
            "key": "Price + W",
            "value": "Total Cost"
          },
          {
            "key": "dist[v]",
            "value": "Best price for node"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Limit on intermediate stops.",
        "codeSnippet": "if (stops ___ k) break;",
        "correctAnswer": ">"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"O(K * E). Since we only care about paths with <= K stops, a simple BFS-like relaxation for K+1 levels is optimal! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Result if no path exists with <= K stops?",
        "options": [
          "-1",
          "0",
          "Infinity"
        ],
        "correctAnswer": "-1"
      },
      {
        "type": "code_fill_in",
        "questionText": "Update cost.",
        "codeSnippet": "if (cost + w < ___[v])",
        "correctAnswer": "dist"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Economy class mastery! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Did I save seeds?\"",
        "options": [
          "Frugal elite!",
          "No.",
          "0"
        ],
        "correctAnswer": "Frugal elite!"
      }
    ]
  },
  {
    "order": 24,
    "title": "Network Delay (Dijkstra)",
    "desc": "Total time for a signal to reach all nodes from a source.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"Signal Spreading! How long does it take for a news-message to reach every bird in the forest starting from source K? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Standard Dijkstra! Find the shortest time to every node. The final answer is the MAXIMUM time among all reachable nodes! 🦜\"",
        "codeSnippet": "dijkstra(k);\nint maxT = 0;\nfor(t : dist) maxT = max(maxT, t);\nreturn (maxT == INF) ? -1 : maxT;"
      },
      {
        "type": "multiple_choice",
        "questionText": "The total time for network signal spread is determined by?",
        "options": [
          "The time to reach the furthest node",
          "The sum of all times",
          "Pico rule"
        ],
        "correctAnswer": "The time to reach the furthest node"
      },
      {
        "type": "match_following",
        "questionText": "Match Signal steps!",
        "pairs": [
          {
            "key": "Dijkstra",
            "value": "Calculate arrival times"
          },
          {
            "key": "max(dist)",
            "value": "Total network time"
          },
          {
            "key": "INF check",
            "value": "Unreachable nodes"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Value to search for in the final distance list.",
        "codeSnippet": "totalTime = ___ (dist.begin(), dist.end());",
        "correctAnswer": "*max_element"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"O(E log V). If any bird is unreachable (dist is still Infinity), return -1. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is Dijkstra correct if wait times are always positive?",
        "options": [
          "Yes",
          "No",
          "If Pico likes it"
        ],
        "correctAnswer": "Yes"
      },
      {
        "type": "code_fill_in",
        "questionText": "Check for disconnected bird.",
        "codeSnippet": "if (time == ___) return -1;",
        "correctAnswer": "INT_MAX"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Communicating with all! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Did they all hear me?\"",
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
    "order": 25,
    "title": "Ways to Destination",
    "desc": "Counting the number of shortest paths to a destination.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"Multiple Routes! How many DIFFERENT paths have the same minimum total flight time? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Combine Dijkstra with DP! Keep a `ways[]` array. If you find a BETTER distance, `ways[v] = ways[u]`. If you find an EQUAL distance, `ways[v] += ways[u]`! 🦜\"",
        "codeSnippet": "if(newDist < dist[v]) {\n  dist[v] = newDist; ways[v] = ways[u];\n}\nelse if(newDist == dist[v]) {\n  ways[v] = (ways[v] + ways[u]) % MOD;\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "If you find a new path to node V with the SAME distance as current best?",
        "options": [
          "Add paths: ways[v] += ways[u]",
          "Reset paths: ways[v] = ways[u]",
          "0"
        ],
        "correctAnswer": "Add paths: ways[v] += ways[u]"
      },
      {
        "type": "match_following",
        "questionText": "Match DP-Dijkstra!",
        "pairs": [
          {
            "key": "dist[v] > d+w",
            "value": "Better path found"
          },
          {
            "key": "dist[v] == d+w",
            "value": "Alternative path found"
          },
          {
            "key": "ways[src] = 1",
            "value": "Base Case"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The MOD value to prevent overflow.",
        "codeSnippet": "ways = (ways + ways_to_u) % ___;",
        "correctAnswer": "1000000007"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"O(E log V). This is a beautiful merging of shortest path logic and combinatorial counting! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Initial `ways` for the source bird?",
        "options": [
          "1",
          "0",
          "Infinity"
        ],
        "correctAnswer": "1"
      },
      {
        "type": "code_fill_in",
        "questionText": "Inherit ways from parent.",
        "codeSnippet": "if(d + w < dist[v]) { ways[v] = ___; }",
        "correctAnswer": "ways[u]"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Infinite possibilities! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Are there many paths?\"",
        "options": [
          "A forest of routes!",
          "No.",
          "0"
        ],
        "correctAnswer": "A forest of routes!"
      }
    ]
  },
  {
    "order": 26,
    "title": "Word Ladder (BFS)",
    "desc": "Changing word A to B one letter at a time through a dictionary.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"Language Flight! Change \"HIT\" to \"COG\" through \"HOT\", \"DOT\", \"DOG\". One letter change per hop! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Treat each word as a NODE! Two words have an edge if they differ by exactly 1 letter. BFS finds the shortest transformation! 🦜\"",
        "codeSnippet": "q.push({start, 1});\nwhile(!q.empty()) {\n  word = q.pop();\n  for(char : word) {\n    for(c : 'a' to 'z') {\n      newW = word; newW[i] = c;\n      if(set.contains(newW)) { q.push({newW, level+1}); set.remove(newW); }\n    }\n  }\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why remove the word from the set after adding to the queue?",
        "options": [
          "To mark it as visited and avoid cycles",
          "To save memory",
          "Pico rule"
        ],
        "correctAnswer": "To mark it as visited and avoid cycles"
      },
      {
        "type": "match_following",
        "questionText": "Match Ladder pieces!",
        "pairs": [
          {
            "key": "Set",
            "value": "Dictionary + Visited"
          },
          {
            "key": "Queue",
            "value": "Current transformations"
          },
          {
            "key": "26 Chars",
            "value": "Alphabet scan"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Length of the shortest chain if \"HIT\" -> \"HOT\" -> \"DOT\" -> \"DOG\" -> \"COG\".",
        "codeSnippet": "Length = ___ ;",
        "correctAnswer": "5"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Complexity: O(M^2 * N) where M is word length and N is dictionary size. BFS is the key to morphological evolution! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What if \"COG\" is not in the dictionary?",
        "options": [
          "Result is 0 (No path)",
          "Result is -1",
          "Infinite loop"
        ],
        "correctAnswer": "Result is 0 (No path)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Scan the alphabet.",
        "codeSnippet": "for(char c = 'a'; c <= ___; c++)",
        "correctAnswer": "'z'"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Literal metamorphosis! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Did the word change?\"",
        "options": [
          "Evolved elite!",
          "No.",
          "0"
        ],
        "correctAnswer": "Evolved elite!"
      }
    ]
  },
  {
    "order": 27,
    "title": "Alien Dictionary (Topo)",
    "desc": "Determining the order of characters in an unknown language.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"Ancient Scrolls! Given a sorted list of words like [\"wrt\", \"wrf\", \"er\", \"ett\"], what is the alphabet order? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Build a Graph! For adjacent words, find the first different character: that gives you an edge (char1 -> char2). Use TOPOLOGICAL SORT to find the order! 🦜\"",
        "codeSnippet": "for(int i=0; i<n-1; i++) {\n  s1 = words[i]; s2 = words[i+1];\n  if(s1[j] != s2[j]) { adj[s1[j]].push_back(s2[j]); break; }\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "If \"apple\" comes before \"apply\" in the alien dictionary, what is the edge?",
        "options": [
          "e -> y",
          "a -> p",
          "e -> l"
        ],
        "correctAnswer": "e -> y"
      },
      {
        "type": "match_following",
        "questionText": "Match Alien logic!",
        "pairs": [
          {
            "key": "Words order",
            "value": "Implicit edges"
          },
          {
            "key": "Topo Sort",
            "value": "Result alphabet"
          },
          {
            "key": "Cycle check",
            "value": "Invalid language check"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Total number of distinct birds (chars) to sort.",
        "codeSnippet": "Nodes count = ___.size();",
        "correctAnswer": "distinctChars"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"O(Total_Chars). If there is a cycle in the edges (like a > b and b > a), the language is invalid and there is NO order! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Alien order for [\"ba\", \"bc\", \"ac\"]?",
        "options": [
          "b -> a -> c",
          "a -> b -> c",
          "c -> b -> a"
        ],
        "correctAnswer": "b -> a -> c",
        "explanation": "b comes before a. b comes before c. order: b, a, c (or b, c, a)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Find first difference.",
        "codeSnippet": "if (s1[j] != s2[j]) { adj[s1[j]].___(s2[j]); break; }",
        "correctAnswer": "push_back"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Cracking the code! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Is the language clear?\"",
        "options": [
          "Deciphered!",
          "No.",
          "0"
        ],
        "correctAnswer": "Deciphered!"
      }
    ]
  },
  {
    "order": 28,
    "title": "Course Schedule (I & II)",
    "desc": "Detecting cycles and finding ordering for dependencies.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"Academic Planning! To take Course 0, you must first take Course 1. Can you finish all courses? In what order? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Course Schedule I: Cycle Detection (DFS/BFS). Course Schedule II: Topological Sort. 🦜\"",
        "codeSnippet": "if(hasCycle(numCourses, prerequisites)) return false;\nelse return findOrder(numCourses, prerequisites);"
      },
      {
        "type": "multiple_choice",
        "questionText": "If you have a cycle [0->1, 1->0], can you complete the schedule?",
        "options": [
          "No",
          "Yes",
          "Only with extra credit"
        ],
        "correctAnswer": "No"
      },
      {
        "type": "match_following",
        "questionText": "Match Course steps!",
        "pairs": [
          {
            "key": "Edge",
            "value": "Prerequisite link"
          },
          {
            "key": "Cycle",
            "value": "Unfinishable courses"
          },
          {
            "key": "Topo Result",
            "value": "Graduation path"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Condition for unfinishable schedule.",
        "codeSnippet": "if (detectCycle()) return ___;",
        "correctAnswer": "empty"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"O(V + E). This is the absolute classic application of Topological Sort. Manage your dependencies like a wise parrot! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is Kahn’s algorithm suitable for this?",
        "options": [
          "Yes (Iterative Topo)",
          "No",
          "0"
        ],
        "correctAnswer": "Yes (Iterative Topo)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Push to topo result on finish.",
        "codeSnippet": "ans.push_back(u); counter___;",
        "correctAnswer": "++"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Educational roadmap! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Did you graduate?\"",
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
    "order": 29,
    "title": "Tarjans Bridges (Elite)",
    "desc": "Finding edges whose removal increases connected components.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"Critical Links! Which social connections are the ONLY bridge between two groups? If they break, the forest splits! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Use DFS with Discovery Time `tin` and Low Link Time `low`. If `low[child] > tin[parent]`, the edge (parent, child) is a BRIDGE! 🦜\"",
        "codeSnippet": "void dfs(u, p) {\n  vis[u]=T; tin[u]=low[u]=timer++;\n  for(v : adj[u]) {\n    if(v == p) continue;\n    if(vis[v]) low[u] = min(low[u], tin[v]);\n    else {\n      dfs(v, u);\n      low[u] = min(low[u], low[v]);\n      if(low[v] > tin[u]) bridges.push({u, v});\n    }\n  }\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Condition for an edge (u, v) to be a bridge?",
        "options": [
          "low[v] > tin[u]",
          "low[v] < tin[u]",
          "low[v] == tin[u]"
        ],
        "correctAnswer": "low[v] > tin[u]"
      },
      {
        "type": "match_following",
        "questionText": "Match Tarjan variables!",
        "pairs": [
          {
            "key": "tin[u]",
            "value": "First discovery visit"
          },
          {
            "key": "low[u]",
            "value": "Lowest level reachable"
          },
          {
            "key": "timer",
            "value": "DFS clock"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Update low value from a back-edge.",
        "codeSnippet": "low[u] = min(low[u], ___ [v]);",
        "correctAnswer": "tin"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"O(V + E) in ONE pass! This is a legendary algorithm. It identifies the structural weak points of the whole network! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Can a bridge be part of a cycle?",
        "options": [
          "No (Cycles mean multiple ways)",
          "Yes",
          "Pico rule"
        ],
        "correctAnswer": "No (Cycles mean multiple ways)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Propagate low value from child.",
        "codeSnippet": "low[u] = min(low[u], low[___]);",
        "correctAnswer": "v"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Structural stability! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Found the weak links?\"",
        "options": [
          "Identified elite!",
          "No.",
          "0"
        ],
        "correctAnswer": "Identified elite!"
      }
    ]
  },
  {
    "order": 30,
    "title": "Intermediate Master Point",
    "desc": "Reflecting on the Intermediate Graph stage.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"INTERMEDIATE STAGE HALFWAY! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Mazes, Efforts, Budgets, and the Discovery of Critical Bridges. You are a network god! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Cheapest Flight K-stops complexity?",
        "options": [
          "O(K * E)",
          "O(E log V)"
        ],
        "correctAnswer": "O(K * E)"
      },
      {
        "type": "multiple_choice",
        "questionText": "Ways to destination Dijkstra adjustment?",
        "options": [
          "ways[v] += ways[u] for equal dist",
          "ways[v] = ways[u] only"
        ],
        "correctAnswer": "ways[v] += ways[u] for equal dist"
      },
      {
        "type": "multiple_choice",
        "questionText": "Alien dictionary edge find?",
        "options": [
          "First different char",
          "Last different char"
        ],
        "correctAnswer": "First different char"
      },
      {
        "type": "multiple_choice",
        "questionText": "Tarjan’s Bridge condition?",
        "options": [
          "low[child] > tin[parent]",
          "low[child] < tin[parent]"
        ],
        "correctAnswer": "low[child] > tin[parent]"
      },
      {
        "type": "multiple_choice",
        "questionText": "Word Ladder search type?",
        "options": [
          "BFS",
          "DFS"
        ],
        "correctAnswer": "BFS"
      },
      {
        "type": "match_following",
        "questionText": "Master Pivot Match!",
        "pairs": [
          {
            "key": "Networks",
            "value": "Calculated!"
          },
          {
            "key": "Bridges",
            "value": "Found!"
          },
          {
            "key": "Pico",
            "value": "Amazed!"
          }
        ]
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Final 10 units of Intermediate Graphs: Strongly Connected Components, Articulation Points, and the DSU Unity! SQUAWK! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Are you ready for the deep unity?\"",
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
    "order": 31,
    "title": "The Vital Joints",
    "desc": "Finding Articulation Points in an undirected graph.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Vital Birds! Which birds areArticulations? If one flies away, the whole social network splits! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Just like Tarjan’s Bridges, but we check NODES. For a parent `u`, if its child `v` has `low[v] >= tin[u]`, then `u` is an Articulation Point! 🦜\"",
        "codeSnippet": "if(p != -1 && low[v] >= tin[u]) isArtic[u] = true;\nif(p == -1 && children > 1) isArtic[u] = true;"
      },
      {
        "type": "multiple_choice",
        "questionText": "Condition for an internal node `u` to be an articulation point?",
        "options": [
          "low[child] >= tin[u]",
          "low[child] < tin[u]",
          "low[child] == 0"
        ],
        "correctAnswer": "low[child] >= tin[u]"
      },
      {
        "type": "match_following",
        "questionText": "Match Joint logic!",
        "pairs": [
          {
            "key": "low[v] >= tin[u]",
            "value": "Child cannot bypass u"
          },
          {
            "key": "p == -1",
            "value": "Root node case"
          },
          {
            "key": "children > 1",
            "value": "Root needs 2+ branches"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The special condition for the starting root of the DFS.",
        "codeSnippet": "if (p == -1 && ___ > 1) result.insert(u);",
        "correctAnswer": "children"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"O(V + E). The root is an articulation point ONLY if it has more than one disconnected child in the DFS tree. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "If low[v] = 4 and tin[u] = 2, is u an articulation point?",
        "options": [
          "Yes (4 >= 2)",
          "No",
          "0"
        ],
        "correctAnswer": "Yes (4 >= 2)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Increment root child count.",
        "codeSnippet": "if(p == -1) ___++;",
        "correctAnswer": "children"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Holding it all together! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Did I find the hubs?\"",
        "options": [
          "Critical birds identified!",
          "No.",
          "0"
        ],
        "correctAnswer": "Critical birds identified!"
      }
    ]
  },
  {
    "order": 32,
    "title": "Strong Unity (Kosaraju)",
    "desc": "Finding Strongly Connected Components (SCC) in directed graphs.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"Strong Islands! In directed graphs, an SCC is a group of birds where every bird can reach every other bird. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Kosaraju’s 3 Steps: 1. Topo-order (Stack). 2. REVERSE all edges. 3. DFS in stack-order to find islands! 🦜\"",
        "codeSnippet": "1. DFS -> Stack\n2. Reverse Adj\n3. DFS from Stack.top()"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why reverse the edges in Kosaraju’s algorithm?",
        "options": [
          "To prevent flying out of the SCC",
          "To save space",
          "Pico rule"
        ],
        "correctAnswer": "To prevent flying out of the SCC"
      },
      {
        "type": "match_following",
        "questionText": "Match SCC steps!",
        "pairs": [
          {
            "key": "Step 1",
            "value": "Sort by finish time"
          },
          {
            "key": "Step 2",
            "value": "Transpose Graph"
          },
          {
            "key": "Step 3",
            "value": "Discover Components"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Number of DFS calls in the 3rd step equals the number of ___?",
        "codeSnippet": "count = ___ ;",
        "correctAnswer": "SCCs"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"O(V + E). Because you reversed the flow, the DFS from the stack-leader can ONLY visit other birds inside its own SCC! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Can an SCC be a single node?",
        "options": [
          "Yes",
          "No",
          "Only in loops"
        ],
        "correctAnswer": "Yes"
      },
      {
        "type": "code_fill_in",
        "questionText": "Reverse adjacency entry.",
        "codeSnippet": "adjRev[v].___(u);",
        "correctAnswer": "push_back"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Unbreakable bonds! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Found the strongholds?\"",
        "options": [
          "Islands mapped!",
          "No.",
          "0"
        ],
        "correctAnswer": "Islands mapped!"
      }
    ]
  },
  {
    "order": 33,
    "title": "Unity of Disjoint Sets",
    "desc": "Introduction to Disjoint Set Union (DSU).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Identity Card! Which birds belong to the same flock? DSU tells you instantly! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Each flock has a LEADER bird. To see if two birds are together, check if they have the same leader! 🦜\"",
        "codeSnippet": "int find(int i) {\n  if(parent[i] == i) return i;\n  return find(parent[i]);\n}\nvoid unite(int i, int j) { parent[find(i)] = find(j); }"
      },
      {
        "type": "multiple_choice",
        "questionText": "Primary purpose of DSU?",
        "options": [
          "Grouping elements and checking connectivity",
          "Sorting node values",
          "0"
        ],
        "correctAnswer": "Grouping elements and checking connectivity"
      },
      {
        "type": "match_following",
        "questionText": "Match DSU Basics!",
        "pairs": [
          {
            "key": "Parent[i]",
            "value": "Immediate superior"
          },
          {
            "key": "find(i)",
            "value": "The ultimate leader"
          },
          {
            "key": "unite(i, j)",
            "value": "Combine flocks"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Initialization: every bird is its own leader.",
        "codeSnippet": "for(int i=0; i<n; i++) parent[i] = ___ ;",
        "correctAnswer": "i"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"This simple version is O(N) in the worst case (a chain of leaders). We can make it nearly O(1) with elite path compression! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "If 0->1 and 1->2, what is find(0)?",
        "options": [
          "2",
          "1",
          "0"
        ],
        "correctAnswer": "2"
      },
      {
        "type": "code_fill_in",
        "questionText": "Base case of find.",
        "codeSnippet": "if (parent[i] == ___) return i;",
        "correctAnswer": "i"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Identify the flock! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Are we one?\"",
        "options": [
          "Connected souls!",
          "No.",
          "0"
        ],
        "correctAnswer": "Connected souls!"
      }
    ]
  },
  {
    "order": 34,
    "title": "Path Compression (Elite)",
    "desc": "Optimizing DSU Find and Union by Rank.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"Elite Efficiency! Every time a bird asks who the leader is, tell them to point directly at the leader forever! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Path Compression: `parent[i] = find(parent[i])`. Union by Rank: Always attach the smaller flock to the larger leader! 🦜\"",
        "codeSnippet": "int find(int i) {\n  if(parent[i] == i) return i;\n  return parent[i] = find(parent[i]);\n}\nvoid unite(i, j) {\n  rootI=find(i); rootJ=find(j);\n  if(rank[rootI] < rank[rootJ]) parent[rootI]=rootJ;\n  else if(...) { ... rank[rootI]++; }\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Amortized time complexity of DSU with Path Compression and Union by Rank?",
        "options": [
          "O(α(N)) - Inverse Ackermann",
          "O(log N)",
          "O(1)"
        ],
        "correctAnswer": "O(α(N)) - Inverse Ackermann"
      },
      {
        "type": "match_following",
        "questionText": "Match Optimization!",
        "pairs": [
          {
            "key": "Path Compression",
            "value": "Flatten the tree"
          },
          {
            "key": "Union by Rank",
            "value": "Keep tree short"
          },
          {
            "key": "α(N)",
            "value": "Practically constant"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The line that flattens the DSU tree.",
        "codeSnippet": "return parent[i] = ___ (parent[i]);",
        "correctAnswer": "find"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Inverse Ackermann α(N) is so slow-growing that for all practical purposes (birds in the universe), it is less than 5. Nearly O(1) performance! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Does Path Compression change the leader?",
        "options": [
          "No (Only the route)",
          "Yes",
          "Only if rank changes"
        ],
        "correctAnswer": "No (Only the route)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Attach to larger rank.",
        "codeSnippet": "if(rank[rootI] < rank[rootJ]) { parent[___] = rootJ; }",
        "correctAnswer": "rootI"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Instant identification! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Am I super fast?\"",
        "options": [
          "Lighting elite!",
          "No.",
          "0"
        ],
        "correctAnswer": "Lighting elite!"
      }
    ]
  },
  {
    "order": 35,
    "title": "The Full Connection",
    "desc": "Calculating operations to connect a disjoint graph.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"Bridge the Gaps! You have redundant wires in some parts of the forest. Can you move them to connect the islands? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Use DSU! 1. Count extra edges (where both birds are already in the same flock). 2. Count number of islands. If extraEdges >= (islands-1), you can connect them all! 🦜\"",
        "codeSnippet": "for(edge : edges) {\n  if(find(u) == find(v)) extra++;\n  else union(u, v);\n}\nif(extra >= islands - 1) return islands - 1;"
      },
      {
        "type": "multiple_choice",
        "questionText": "Minimum edges needed to connect K separate components?",
        "options": [
          "K - 1",
          "K",
          "1"
        ],
        "correctAnswer": "K - 1"
      },
      {
        "type": "match_following",
        "questionText": "Match Connection math!",
        "pairs": [
          {
            "key": "extraEdges",
            "value": "find(u) == find(v)"
          },
          {
            "key": "islands",
            "value": "Distinct DSU sets"
          },
          {
            "key": "Impossible",
            "value": "extra < islands - 1"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Condition for nodes being already connected.",
        "codeSnippet": "if (dsu.find(u) ___ dsu.find(v)) extraEdges++;",
        "correctAnswer": "=="
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"O(E * α(V)). This is a perfect real-world application of DSU for network stability! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "If you have 4 islands, how many wires do you need?",
        "options": [
          "3",
          "4",
          "1"
        ],
        "correctAnswer": "3"
      },
      {
        "type": "code_fill_in",
        "questionText": "Calculate final result.",
        "codeSnippet": "return (extraEdges >= numComponents - 1) ? (___ - 1) : -1;",
        "correctAnswer": "numComponents"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Wiring the forest! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Is the network linked?\"",
        "options": [
          "Fully operational!",
          "No.",
          "0"
        ],
        "correctAnswer": "Fully operational!"
      }
    ]
  },
  {
    "order": 36,
    "title": "Stones and Rows (DSU)",
    "desc": "Removing stones on the same row or column using DSU.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"Stone Removal! You can remove a stone if another stone exists in the same row or column. Find the MAX stones removed. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Treat every row and column as a NODE in a graph! A stone at (r, c) connects row-node `r` and column-node `c`. Max Removed = `TotalStones - NumberOfDSUComponents`! 🦜\"",
        "codeSnippet": "union(r, c + 10001);\ncount = set(find(all_stones)).size();\nreturn stones.size() - count;"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why subtract the number of components from total stones?",
        "options": [
          "Because every component must leave at least 1 \"leader\" stone",
          "Pico math",
          "0"
        ],
        "correctAnswer": "Because every component must leave at least 1 \"leader\" stone"
      },
      {
        "type": "match_following",
        "questionText": "Match Stone logic!",
        "pairs": [
          {
            "key": "Row r",
            "value": "Group index (0-10000)"
          },
          {
            "key": "Col c",
            "value": "Group index (10001-20000)"
          },
          {
            "key": "Union(r, c)",
            "value": "Link groups via stone"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Total stones that stay in the forest.",
        "codeSnippet": "StonesStay = number of ___ ;",
        "correctAnswer": "components"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"O(N * α(N)). This turns a geometry problem into a graph connectivity problem! Powerful DSU! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Stones at (0,0) and (0,1). How many can be removed?",
        "options": [
          "1",
          "2",
          "0"
        ],
        "correctAnswer": "1",
        "explanation": "Same row. 1 remains, 1 removed."
      },
      {
        "type": "code_fill_in",
        "questionText": "Offset column IDs.",
        "codeSnippet": "dsu.unite(r, c + ___);",
        "correctAnswer": "10001"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Clean grids! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Did the stones vanish?\"",
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
    "order": 37,
    "title": "Accounts Merge",
    "desc": "Merging accounts with duplicate email addresses using DSU.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"Email Merging! Multiple names but duplicate emails mean they belong to the same bird. Merge them! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"1. Map each email to a unique ID. 2. For each account, `unite` all email-IDs to the first email-ID. 3. Group by DSU parent! 🦜\"",
        "codeSnippet": "for(email : emails) {\n  if(!emailToId.count(email)) emailToId[email] = id++;\n  dsu.unite(emailToId[first], emailToId[email]);\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "In Accounts Merge, why do we use DSU?",
        "options": [
          "To find groups of emails linked by the same account",
          "To sort emails alphabetically",
          "0"
        ],
        "correctAnswer": "To find groups of emails linked by the same account"
      },
      {
        "type": "match_following",
        "questionText": "Match Merge steps!",
        "pairs": [
          {
            "key": "Map",
            "value": "Email to DSU Index"
          },
          {
            "key": "Unite",
            "value": "Link all account emails"
          },
          {
            "key": "Group",
            "value": "Gather by leader"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Component key for grouping emails.",
        "codeSnippet": "leader = dsu.find(emailId); result[___].push(email);",
        "correctAnswer": "leader"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"O(Total_Emails * α(N)). Now you can clean up the entire forest’s registration list! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "If Account A has [1, 2] and Account B has [2, 3], are they the same?",
        "options": [
          "Yes (Linked by email 2)",
          "No",
          "0"
        ],
        "correctAnswer": "Yes (Linked by email 2)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Unite account emails.",
        "codeSnippet": "dsu.unite(idMap[emails[0]], idMap[___]);",
        "correctAnswer": "email"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Unified identity! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Are the accounts clean?\"",
        "options": [
          "Perfectly merged!",
          "No.",
          "0"
        ],
        "correctAnswer": "Perfectly merged!"
      }
    ]
  },
  {
    "order": 38,
    "title": "Power of Rank (DSU)",
    "desc": "Using DSU for complex grid problems (Large Island).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"Island Expander! In a grid of 0s and 1s, change ONE 0 to 1 and find the largest possible island sum! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"1. Group all current islands using DSU and store their SIZES. 2. For every 0, check its 4 neighbors, sum the sizes of their UNIQUE DSU leaders, and add 1! 🦜\"",
        "codeSnippet": "for(neighbor : 4_dirs) {\n  leader = find(neighbor);\n  if(used.find(leader) == used.end()) {\n    totalSize += size[leader];\n    used.insert(leader);\n  }\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why use a \"used\" set for neighbors of a zero?",
        "options": [
          "To avoid counting the same island twice",
          "To save memory",
          "Pico rule"
        ],
        "correctAnswer": "To avoid counting the same island twice"
      },
      {
        "type": "match_following",
        "questionText": "Match Island Expansion!",
        "pairs": [
          {
            "key": "Grid to ID",
            "value": "r * N + c"
          },
          {
            "key": "Size Map",
            "value": "DSU leader to count"
          },
          {
            "key": "Max Sum",
            "value": "Final answer"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Increment the island size for the new addition.",
        "codeSnippet": "max_island = max(max_island, potentialSize ___ 1);",
        "correctAnswer": "+"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"O(N^2 * α(N)). This is the elite combination of DSU and Grid traversal! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Size of two adjacent islands of size 3 after merging?",
        "options": [
          "7 (3 + 3 + 1)",
          "6",
          "1"
        ],
        "correctAnswer": "7 (3 + 3 + 1)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Get leader of neighbor.",
        "codeSnippet": "int l = dsu.find(ni * n + ___);",
        "correctAnswer": "nj"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Merging the shores! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Is the island massive?\"",
        "options": [
          "Mega-land elite!",
          "No.",
          "0"
        ],
        "correctAnswer": "Mega-land elite!"
      }
    ]
  },
  {
    "order": 39,
    "title": "Cycle Logic (Redundant)",
    "desc": "Finding the edge that creates a cycle in an undirected graph.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"Redundant Connections! Which specific wire turned our forest tree into a cyclic graph? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Iterate through the edges. For each edge (u, v), if `find(u) == find(v)`, this is the redundant edge! Return it immediately! 🦜\"",
        "codeSnippet": "for(edge : edges) {\n  if(dsu.find(e.u) == dsu.find(e.v)) return e;\n  else dsu.unite(e.u, e.v);\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "How does DSU identify a cycle edge?",
        "options": [
          "If find(u) == find(v), they were already connected elsewhere",
          "If they have different leaders",
          "0"
        ],
        "correctAnswer": "If find(u) == find(v), they were already connected elsewhere"
      },
      {
        "type": "match_following",
        "questionText": "Match Redundant terms!",
        "pairs": [
          {
            "key": "Redundant",
            "value": "The Cycle Edge"
          },
          {
            "key": "unite(u, v)",
            "value": "Building the tree"
          },
          {
            "key": "find(u)",
            "value": "Checking parent"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Condition for the cycle-causing edge.",
        "codeSnippet": "if (rootU ___ rootV) return edge;",
        "correctAnswer": "=="
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"O(E * α(V)). This is the fastest way to debug connectivity! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "In a tree with V nodes and V edges, how many redundant edges are there?",
        "options": [
          "1",
          "0",
          "V"
        ],
        "correctAnswer": "1"
      },
      {
        "type": "code_fill_in",
        "questionText": "Update component mapping.",
        "codeSnippet": "if(!dsu.unite(u, v)) return ___;",
        "correctAnswer": "edge"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Pruning the network! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Did I find the extra wire?\"",
        "options": [
          "Perfectly located!",
          "No.",
          "0"
        ],
        "correctAnswer": "Perfectly located!"
      }
    ]
  },
  {
    "order": 40,
    "title": "Stage 2 Graduation",
    "desc": "Intermediate Graph Mastery Complete.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"STAGE 2 COMPLETE! You have mastered the Articulation points, the Strongly Connected Islands, and the Power of the Disjoint Set! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Grid Mazes and Binary Network Merging. You are a titan of logic! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Articulation point root rule?",
        "options": [
          ">1 children in DFS-tree",
          "Any child"
        ],
        "correctAnswer": ">1 children in DFS-tree"
      },
      {
        "type": "multiple_choice",
        "questionText": "Kosaraju’s second step?",
        "options": [
          "Reverse edges",
          "Sort by rank"
        ],
        "correctAnswer": "Reverse edges"
      },
      {
        "type": "multiple_choice",
        "questionText": "DSU Find efficiency?",
        "options": [
          "Path compression (O(α(N)))",
          "Standard O(N)"
        ],
        "correctAnswer": "Path compression (O(α(N)))"
      },
      {
        "type": "multiple_choice",
        "questionText": "Connecting islands required wires?",
        "options": [
          "islands - 1",
          "islands"
        ],
        "correctAnswer": "islands - 1"
      },
      {
        "type": "multiple_choice",
        "questionText": "Stones removal formula?",
        "options": [
          "Total - Components",
          "Total - Edges"
        ],
        "correctAnswer": "Total - Components"
      },
      {
        "type": "match_following",
        "questionText": "Final Intermediate Match!",
        "pairs": [
          {
            "key": "Social",
            "value": "Solved!"
          },
          {
            "key": "DSU",
            "value": "Unified!"
          },
          {
            "key": "Pico",
            "value": "Salutes!"
          }
        ]
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Next, we face the Master Stage: Bitmasking on Graphs, Maximum Flows, and the Traveling Bird Problem! SQUAWK! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Are you ready for the peak?\"",
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

module.exports = stage2;