const stage3 = [
  {
    "order": 21,
    "title": "Unit 21: Bitmask Basics",
    "desc": "Bitwise Encodings: using integers to represent sets of up to 20 elements as DP states.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 3.21] The Binary Key",
        "explanation": "When the items are few (N <= 20) but their combination matters, we use **Bitmasking**. An integer `mask` represents the set: the `i-th` bit is 1 if item `i` is included. This is the **Digital protocol**—mapping a whole world of choices into a single number. The Matrix is a master of the bit.",
        "codeSnippet": "if (mask & (1 << i)) // check if item i is in mask",
        "encouragementText": "Ace: 'Efficiency in state representation determines the reach of the algorithm.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "How many states does a bitmask for 10 items have?",
        "options": ["10", "100", "2^10 (1,024)", "Pico rule"],
        "correctAnswer": "2^10 (1,024)",
        "explanation": "Each item can be either 'in' or 'out', leading to 2 possibilities per item, multiplied for N items."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Set-Transition Pulse",
        "explanation": "To add item `i` to `mask`, use `mask | (1 << i)`. To remove, use `mask & ~(1 << i)`. The Matrix transitions by flipping bits. One bit, one life. One pulse, one state.",
        "encouragementText": "Pico: 'Flip the bit-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Correct way to add node 'u' to bitmask 'm'.",
        "codeSnippet": "new_mask = m ___ (1 << u);",
        "correctAnswer": "|",
        "explanation": "Bitwise OR sets the bit at position 'u' to 1 without affecting other bits."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity: O(2^N * poly(N))",
        "explanation": "Exponential complexity! This is why N must be small (usually around 20-22). This is the **Titan-Grade Boundary**. The Matrix is a dense jungle of sub-sets. Navigate with precision.",
        "encouragementText": "Ace: 'Know the limits of the bit, and you will know the limits of the world.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does a bitmask of '1101' represent? (Least significant bit is item 0)",
        "options": ["Items 1, 2, 4", "Items 0, 2, 3", "Items 11 and 1", "Pico guess"],
        "correctAnswer": "Items 0, 2, 3",
        "explanation": "Bits 0, 2, and 3 are set to 1. (Reading from right to left: 1, 0, 1, 1 -> items 0, 1(skip), 2, 3)."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Popcount Pulse",
        "explanation": "Sometimes you need to know how many items are currently in the mask. We use `__builtin_popcount(mask)`. This tells the Matrix the 'Weight' of the current state. The density of the choice.",
        "encouragementText": "Pico: 'Count the bit-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Check if total items in mask is exactly K.",
        "codeSnippet": "if (___(mask) == K) { ... }",
        "correctAnswer": "__builtin_popcount",
        "explanation": "This compiler-optimized function returns the number of set bits in an integer."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Vault Keypad",
        "explanation": "A vault (The Matrix Core) requires 15 keys to be pressed in any order. To find the optimal path through the keys, the Key-Architect uses Bitmask DP. 2^15 combinations are searched in milliseconds. The vault clicks open.",
        "encouragementText": "Ace: 'Every complex lock is just a sequence of bits.'"
      },
      {
        "type": "match_following",
        "questionText": "Match Bitwise Ops!",
        "pairs": [
          { "key": "|", "value": "Add item" },
          { "key": "&", "value": "Check presence" },
          { "key": "^", "value": "Toggle state" }
        ]
      }
    ]
  },
  {
    "order": 22,
    "title": "Unit 22: Traveling Salesman (TSP)",
    "desc": "Path Optimization: finding the shortest path that visits every city exactly once and returns home using Bitmask DP.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 3.22] The Galactic Delivery",
        "explanation": "You have 15 planets to visit. You want the shortest route. **TSP** uses `dp[mask][current_city]` to store the min cost to visit all cities in `mask` ending at `current_city`. This is the **Hamiltonian protocol**—the tour of the universe. The Matrix is a master of the shortest mile.",
        "codeSnippet": "dp[mask][u] = min(cost[v][u] + dp[mask ^ (1<<u)][v]);",
        "encouragementText": "Ace: 'Efficiency in travel is the result of perfect memoization.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the complexity of DP-based TSP?",
        "options": ["O(N!)", "O(2^N * N^2)", "O(N^3)", "Pico rule"],
        "correctAnswer": "O(2^N * N^2)",
        "explanation": "Held-Karp algorithm uses bitmasking to reduce the O(N!) factorial search to an exponential but faster O(2^N * N^2)."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Visit-State Pulse",
        "explanation": "We iterate through every possible `mask`, and for each mask, we try every possible 'Last City' `u`. Then we try every predecessor `v`. The Matrix builds the path from the memories of smaller paths. The tour grows.",
        "encouragementText": "Pico: 'Visit the city-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "TSP inner transition loop.",
        "codeSnippet": "for (int v = 0; v < n; v++) {\n  if (v != u && (mask & (1 << v))) {\n    dp[mask][u] = min(dp[mask][u], dp[mask ^ (1 << u)][v] + ___ [v][u]);\n  }\n}",
        "correctAnswer": "dist",
        "explanation": "Adding the distance from city 'v' to current city 'u' to find the total path cost."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity: O(2^N * N^2) vs O(N!)",
        "explanation": "For N=20, 2^N is 1 million, but N! is 2 quintillion. This is the **Efficiency Breakthrough**. You solve the unsolvable by indexing the subsets. The Matrix is a master of the shortcut.",
        "encouragementText": "Ace: 'Memoization turns the infinite into the countable.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the base case for TSP?",
        "options": ["dp[0][start] = 0", "dp[1 << start][start] = 0", "dp[all_ones][end] = 0", "Pico guess"],
        "correctAnswer": "dp[1 << start][start] = 0",
        "explanation": "Starting at the first city with only that city visited has zero cost."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Return-Pulse",
        "explanation": "After visiting all cities (mask = all 1s), don't forget to add the distance back to the 'Start City'. The Matrix is a circle, not just a line. The return to the source. The Final mile.",
        "encouragementText": "Pico: 'Return home seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Calculating the final result (Return to City 0).",
        "codeSnippet": "ans = min(ans, dp[(1 << n) - 1][i] + dist[i][ ___ ]);",
        "correctAnswer": "0",
        "explanation": "Adding the cost from any final city 'i' back to the origin city 0."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Star-Courier",
        "explanation": "A courier ship (The Matrix Voyager) must deliver 20 packages to 20 star-systems. To save fuel, the Voyager-Architect uses TSP DP. The 2-billion-year tour is calculated in 0.5 seconds. The path is set. The jump-drive engages.",
        "encouragementText": "Ace: 'Fuel is the currency of the galaxy; logic is the discount.'"
      },
      {
        "type": "match_following",
        "questionText": "Match TSP states!",
        "pairs": [
          { "key": "Mask", "value": "Cities visited" },
          { "key": "U", "value": "Last city visited" },
          { "key": "dp[mask][u]", "value": "Current min cost" }
        ]
      }
    ]
  },
  {
    "order": 23,
    "title": "Unit 23: Hamiltonian Path",
    "desc": "Connectivity Search: using Bitmask DP to determine if there exists a path that visits every node exactly once in a directed graph.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 3.23] The Fragile Link",
        "explanation": "A graph (The Matrix Neural-Link) allows specific one-way travel. Is there a sequence that touches every neuron exactly once? This is **Hamiltonian Path**. It is TSP but without the weights. It is the **Existence protocol**—finding the one unique life-line in the mess. The Matrix is a search for truth.",
        "codeSnippet": "dp[mask][u] = dp[mask ^ (1<<u)][v] && adj[v][u];",
        "encouragementText": "Ace: 'Connectivity is the prerequisite of awareness.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What type of DP is Hamiltonian Path?",
        "options": ["Numerical", "Boolean (Existence) DP", "Optimization", "Pico rule"],
        "correctAnswer": "Boolean (Existence) DP",
        "explanation": "We only care if the path 'Exists' (True/False) at each state."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Adjacency Pulse",
        "explanation": "To move from `v` to `u`, the link `adj[v][u]` must be active. The Matrix only allows the possible. The Pulse only travels through the wires that actually exist. Logical constraints.",
        "encouragementText": "Pico: 'Connect the link-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Updating the boolean reachability state.",
        "codeSnippet": "dp[mask][u] = dp[mask][u] || (dp[mask ^ (1 << u)][v] && ___ [v][u]);",
        "correctAnswer": "adj",
        "explanation": "Checking if node 'u' can be reached by coming from an existing path that ended at 'v'."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity: O(2^N * N^2)",
        "explanation": "Complexity is identical to TSP. If N is 20, the Matrix is solvable. If N is 100, the Matrix is NP-Hard. This is the **Complexity Ceiling**. You must know where to stop your search.",
        "encouragementText": "Ace: 'The hardest paths are often the ones that visit everything once.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Difference from Eulerian Path (edges)?",
        "options": ["None", "Hamiltonian visits NODES once; Eulerian visits EDGES once (P vs NP)", "Colors", "Pico guess"],
        "correctAnswer": "Hamiltonian visits NODES once; Eulerian visits EDGES once (P vs NP)",
        "explanation": "Eulerian paths are solvable in O(E), while Hamiltonian paths are much, much harder."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Self-Avoiding Pulse",
        "explanation": "Because the mask prevents visiting the same node twice, the Pulse is **Self-Avoiding**. The Matrix respects the individual's time. One node, one visit. The purity of the sequence.",
        "encouragementText": "Pico: 'Keep the bits unique! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Checking the final all-visited state.",
        "codeSnippet": "for (int i = 0; i < n; i++) {\n  if (dp[(1 << n) - ___ ][i]) return true;\n}",
        "correctAnswer": "1",
        "explanation": "Check if any path exists that has every bit set (visits all 'n' nodes)."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Neural Bridge",
        "explanation": "A brain-link (The Matrix Bridge) is broken into 20 segments. To restore consciousness, every segment must be activated in a specific valid order. The Bridge-Architect uses Hamiltonian Path DP. The ordering is found. The bridge is up. Consciousness is restored.",
        "encouragementText": "Ace: 'The mind is a sequence of moments visited once.'"
      },
      {
        "type": "match_following",
        "questionText": "Match Path Terms!",
        "pairs": [
          { "key": "Hamiltonian", "value": "Node focus" },
          { "key": "Eulerian", "value": "Edge focus" },
          { "key": "Cycle", "value": "Ends at start" }
        ]
      }
    ]
  },
  {
    "order": 24,
    "title": "Unit 24: Assignment Problem",
    "desc": "Optimal Matching: using Bitmask DP to pair N workers with N tasks to minimize total cost.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 3.24] The Task-Master",
        "explanation": "You have 15 Agents and 15 Missions. Each Agent has a cost for each Mission. **Assignment Problem** uses `dp[mask]` where mask is the set of TASKS assigned to the first `k` agents. This is the **Matching protocol**—finding the best role for every soul. The Matrix is a master of the fit.",
        "codeSnippet": "dp[mask] = min(cost[k][j] + dp[mask ^ (1<<j)]);",
        "encouragementText": "Ace: 'Efficiency is putting the right tool in the right hand.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does `popcount(mask)` represent here?",
        "options": ["Number of tasks", "The number of workers already assigned (k)", "Cost", "Pico rule"],
        "correctAnswer": "The number of workers already assigned (k)",
        "explanation": "If we assigned 'k' tasks, we must have used 'k' workers (the first k)."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Pairing Pulse",
        "explanation": "We assign workers 0, 1, 2... in order. For worker `k`, we try every available task `j` in the mask. The Matrix builds the total from the individual. One agent, one mission. The matching completes.",
        "encouragementText": "Pico: 'Pair the agent-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Transition for assignment.",
        "codeSnippet": "int k = __builtin_popcount(mask);\ndp[mask] = min(dp[mask], dp[mask ^ (1 << j)] + cost[ ___ ][j]);",
        "correctAnswer": "k-1",
        "explanation": "The 'k-th' task (in a 0-indexed world) is being assigned to a worker to reach a state with 'k' tasks assigned."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity: O(2^N * N)",
        "explanation": "Much faster than O(N!). For N=20, this is the **Titan-Grade HR**. For N=1,000, you'd need the **Hungarian Algorithm**. But for bitmasks, this is the peak of the logic.",
        "encouragementText": "Ace: 'Solving for the many starts with the selection of the few.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Can this be used to MAXIMIZE profit (Matching)?",
        "options": ["Yes, just change min() to max()", "No, only for costs", "Not really", "Pico guess"],
        "correctAnswer": "Yes, just change min() to max()",
        "explanation": "The logic of selection remains identical whether you optimize for cost or reward."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Availability Pulse",
        "explanation": "An agent is 'Available' if its task bit is 0 in the current mask. We only transition to states where the bit was 1. We are 'Enabling' the agents one by one. The Matrix powers up.",
        "encouragementText": "Pico: 'Watch the availability-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Check if task 'j' is already in mask.",
        "codeSnippet": "if (mask & (1 << ___ )) { // Task already assigned\n  dp[mask] = min(dp[mask], ...);\n}",
        "correctAnswer": "j",
        "explanation": "We ensure we only build the current mask by adding task 'j' to a state where 'j' was missing."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Squad Assembly",
        "explanation": "A strike-team (The Matrix Elite) has 10 roles: Sniper, Hacker, Pilot... There are 10 agents with different skills. To build the absolute best team, the Squad-Architect uses Assignment DP. Each agent is given their perfect role. The team is 100% efficient. The mission is a ghost-run.",
        "encouragementText": "Ace: 'The sum is greater than the parts if the parts are assigned with truth.'"
      },
      {
        "type": "match_following",
        "questionText": "Match Matching Terms!",
        "pairs": [
          { "key": "Assignment", "value": "N-to-N Matching" },
          { "key": "Cost", "value": "Penalty of pairing" },
          { "key": "Mask", "value": "Task occupancy" }
        ]
      }
    ]
  },
  {
    "order": 25,
    "title": "Unit 25: Connected Components DP",
    "desc": "Bitwise Graph Theory: using masks to count or find properties of graph components (e.g., Steiner Tree or Cycle covering).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 3.25] The Archipelago",
        "explanation": "The Matrix is a set of Islands. **Connected Components DP** uses masks to track which nodes are joined. `dp[mask]` might store if `mask` is a connected component. This is the **Cohesion protocol**—identifying the limits of the signal. The Matrix is a group of groups.",
        "codeSnippet": "if (is_connected[mask]) count++;",
        "encouragementText": "Ace: 'Unity is a subset of the infinite complexity.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What algorithm finds connected components for a MASK in DP?",
        "options": ["BFS/DFS within the mask items", "Sorting", "Adding 1", "Pico rule"],
        "correctAnswer": "BFS/DFS within the mask items",
        "explanation": "To check properties of a mask, we treat the masked nodes as a sub-graph and run graph algorithms."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Inclusion Pulse",
        "explanation": "We iterate through subsets of a mask using `(sub - 1) & mask`. This allows the Matrix to check every combination of islands inside a larger island. The pulse of the group. Efficiency in subset-iteration.",
        "encouragementText": "Pico: 'Iterate the subset-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Iterating through all non-empty subsets of mask 'm'.",
        "codeSnippet": "for (int s = m; s > 0; s = (s - 1) & ___ ) {\n  // check sub-component s\n}",
        "correctAnswer": "m",
        "explanation": "The bitwise trick `(s - 1) & m` correctly generates all sub-masks of 'm' in descending order."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity: O(3^N)",
        "explanation": "Wait... O(3^N)? Yes! Sum of `2^(popcount(mask))` over all masks is 3^N. This is the **Steiner Ceiling**. For N=15, 3^15 = 14 million. Solvable! The Matrix is a world of subsets-within-subsets. Geometric growth.",
        "encouragementText": "Ace: 'Layers of complexity require layers of logic.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does a 'Clique' mean in this DP?",
        "options": ["A group of friends", "A component where every node is connected to every other node in the mask", "Zero", "Pico guess"],
        "correctAnswer": "A component where every node is connected to every other node in the mask",
        "explanation": "Clique DP often counts how many ways a graph can be covered by disjoint cliques."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Cycle Pulse",
        "explanation": "Some missions require covering a graph with disjoint cycles. We use `dp[mask]`. This is the **Partition Protocol**. The Matrix is divided into closed loops. Infinity through repetition.",
        "encouragementText": "Pico: 'Circle the seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Checking if mask 's' can be isolated as a component.",
        "codeSnippet": "if (can_isolate(s)) dp[m] = dp[m ^ ___ ] + 1;",
        "correctAnswer": "s",
        "explanation": "Finding the number of isolated components 'm' can be broken into by removing 's'."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Island Mapper",
        "explanation": "A cluster of 15 data-servers (The Matrix Isle) has various links. To find the fewest energy-fields needed to cover all active links, the Isle-Architect uses Connected Component DP. The 3^15 possibilities are scanned. The minimum field-set is deployed. The isle is safe.",
        "encouragementText": "Ace: 'Strength is found in the connection of the right nodes.'"
      },
      {
        "type": "match_following",
        "questionText": "Match Component terms!",
        "pairs": [
          { "key": "3^N", "value": "All subsets of all masks" },
          { "key": "Clique", "value": "Fully connected" },
          { "key": "Partition", "value": "Disjoint set" }
        ]
      }
    ]
  },
  {
    "order": 26,
    "title": "Unit 26: Nim & Sprague-Grundy",
    "desc": "Game Theory Foundations: using the XOR-sum of states to determine if a game is won or lost from current positions.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 3.26] The Game of Kings",
        "explanation": "The Matrix is a game. **Nim** is the core. If you have several piles of seeds, can you win? The **Sprague-Grundy Theorem** says every impartial game is just a single number (a Grundy Value). The XOR of these numbers tells the truth: If it's 0, you lose. If it's > 0, you win. This is the **Winning protocol**—the math of the victor.",
        "codeSnippet": "NimSum = s1 ^ s2 ^ s3 ^ ...;",
        "encouragementText": "Ace: 'There is no luck in a game where the XOR is known.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the 'MEX' (Minimum Excluded value)?",
        "options": ["A map", "The smallest non-negative integer NOT present in a set of Grundy values", "Zero", "Pico rule"],
        "correctAnswer": "The smallest non-negative integer NOT present in a set of Grundy values",
        "explanation": "The Grundy value of a state is the MEX of the values of all reachable next states."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The XOR Pulse",
        "explanation": "XORing states is like 'Canceling out' identical possibilities. The Matrix collapses to a single digit. This is the **Anti-Matter protocol**. Two identical games cancel to 0 (a loss for the mover). Pure symmetry.",
        "encouragementText": "Pico: 'XOR the seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Determining the Grundy Value (G) for a state.",
        "codeSnippet": "set<int> next_vals;\nfor (State s : moves) next_vals.insert(Grundy(s));\nreturn ___ (next_vals);",
        "correctAnswer": "MEX",
        "explanation": "Applying the Sprague-Grundy theorem by finding the smallest missing value among reachable states."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity: O(States * Transitions)",
        "explanation": "This is DP! You memoize the Grundy values of every position. This turns a massive 'Should I move here?' into a simple `val == 0`. This is the **Titan-Grade Strategist**. The Matrix knows the winner before the first move.",
        "encouragementText": "Ace: 'Vulnerability is having a non-zero NimSum while your opponent holds the move.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "If the NimSum is 0, what is the game state?",
        "options": ["P-position (Previous player winning / current player losing)", "N-position (Next player winning)", "Draw", "Pico guess"],
        "correctAnswer": "P-position (Previous player winning / current player losing)",
        "explanation": "A NimSum of 0 means every move will lead to a non-zero state, giving the advantage back to your opponent."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Multi-Game Pulse",
        "explanation": "If you have 10 games running at once, you just XOR their Grundy values. This is the **Superposition protocol**. Many worlds, one winning bit. The Matrix is a master of the parallel.",
        "encouragementText": "Pico: 'Parallel the seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Total Grundy for multiple independent games.",
        "codeSnippet": "int total_g = 0;\nfor (int g : individual_grundy) total_g ___ g;",
        "correctAnswer": "^=",
        "explanation": "XORing the Grundy values of independent sub-games gives the Sprague-Grundy value of the whole system."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Poker bot of Destiny",
        "explanation": "A high-stakes gamble (The Matrix Bet) is being played. The game is complex. The Gambler-Architect uses Grundy DP to calculate the exact win-state of the board. The bet is placed. The logic is flawless. The jackpot is 100% certain.",
        "encouragementText": "Ace: 'Gambling is for those who cannot count the MEX.'"
      },
      {
        "type": "match_following",
        "questionText": "Match Game terms!",
        "pairs": [
          { "key": "N-position", "value": "Current wins" },
          { "key": "P-position", "value": "Previous wins" },
          { "key": "MEX", "value": "Smallest missing" }
        ]
      }
    ]
  },
  {
    "order": 27,
    "title": "Unit 27: Minimax with Memoization",
    "desc": "Adversarial Search: using DP to solve zero-sum games where two players (Max and Min) play optimally.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 3.27] The Duel of Minds",
        "explanation": "In Tit-for-Tat missions, you want the BEST result for you, while your enemy wants the WORST result for you. **Minimax** explores the tree of moves. DP saves the results of every 'Game State' so we never solve the same duel twice. This is the **Equilibrium protocol**—finding the perfect balance of offense and defense. The Matrix is a chess-board.",
        "codeSnippet": "score = max( -solve(next_state) );",
        "encouragementText": "Ace: 'Anticipate the response, and you control the outcome.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does a score of +1 mean in a win/loss game?",
        "options": ["Lose", "Current player can force a win", "Draw", "Pico rule"],
        "correctAnswer": "Current player can force a win",
        "explanation": "In standard minimax, positive values favor the 'Maximizer' and negative values favor the 'Minimizer'."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Negamax Pulse",
        "explanation": "A clever trick: `Win(A) = -Lose(B)`. We just return `-solve(next)` every time it flips turns. This is **Negamax**. It simplifies the code by making every level a 'Max' level with a sign-flip. The Matrix is a mirror. Flip the truth.",
        "encouragementText": "Pico: 'Flip the score-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Negamax recursive step.",
        "codeSnippet": "int solve(State s) {\n  if (memo.count(s)) return memo[s];\n  int best = -INF;\n  for (State next : s.moves()) {\n    best = max(best, ___ solve(next));\n  }\n  return memo[s] = best;\n}",
        "correctAnswer": "-",
        "explanation": "In Negamax, your score is the negative of the best score your opponent can achieve from the next state."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity: O(BranchingFactor ^ Depth)",
        "explanation": "With Memoization (DP), it is O(Total Unique States). Much faster! This is the **Titan-Grade Foresight**. You see the end of the game by remembering the paths to the end. No wasted thought.",
        "encouragementText": "Ace: 'Memory is the multiplier of vision.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is 'Alpha-Beta Pruning'?",
        "options": ["Cutting trees", "A technique to skip searching branches that cannot affect the final minimax decision", "Zero", "Pico guess"],
        "correctAnswer": "A technique to skip searching branches that cannot affect the final minimax decision",
        "explanation": "Pruning keeps the search-tree lean, often doubling the depth you can explore in the same time."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Depth Pulse",
        "explanation": "If the game is too large, we only search to `Depth = D`. We use a **Heuristic** to guess the score at the leaves. The Matrix looks ahead as far as it can. Limited foresight is better than blindness.",
        "encouragementText": "Pico: 'Guess the leaf-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Stopping search at depth limit.",
        "codeSnippet": "if (depth == 0) return ___ (s);",
        "correctAnswer": "evaluate",
        "explanation": "Returning a heuristic value when the search reaches its predetermined depth limit."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Grandmaster-Bot",
        "explanation": "A high-security board-game (The Matrix Chess) must be won against a rival AI. The game has 10^10 states. The Game-Architect uses Minimax DP with Alpha-Beta Pruning. The bot sees the checkmate in 20 moves. The rival is defeated. The Matrix celebrates.",
        "encouragementText": "Ace: 'The game ends before the first move if the search is deep enough.'"
      },
      {
        "type": "match_following",
        "questionText": "Match Minimax terms!",
        "pairs": [
          { "key": "Maximizer", "value": "Current player goal" },
          { "key": "Minimizer", "value": "Opponent goal" },
          { "key": "Pruning", "value": "Efficiency boost" }
        ]
      }
    ]
  },
  {
    "order": 28,
    "title": "Unit 28: Game State Compression",
    "desc": "Compact Logic: using bit-packing and hashing to represent entire game boards as single DP indices.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 3.28] The Packed Reality",
        "explanation": "A Tic-Tac-Toe board isn't a 2D array; it's a 9-digit base-3 number. `3^9 = 19,683`. **State Compression** packs the soul of the board into a single integer. This is the **Compression protocol**—fitting a galaxy into a pin-prick. The Matrix is a master of the small.",
        "codeSnippet": "hash = (hash * 3) + cell_value;",
        "encouragementText": "Ace: 'Volume is the enemy of the cache. Squeeze the state.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why use base-3 for Tic-Tac-Toe?",
        "options": ["It's cool", "Each cell has 3 states: Empty (0), X (1), O (2)", "3 is a prime", "Pico rule"],
        "correctAnswer": "Each cell has 3 states: Empty (0), X (1), O (2)",
        "explanation": "Base-K encoding perfectly represents a grid of N cells where each cell has K possible values."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Bit-Packing Pulse",
        "explanation": "For binary states, use bitwise shifts. `(1 << pos)`. For multi-state cells, use **Mixed Radix encoding**. The Matrix multiplies by the 'Base' at every step. One integer, one universe. Compact logic.",
        "encouragementText": "Pico: 'Pack the state-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Getting the 5th digit (base 3) of a hash.",
        "codeSnippet": "digit = (hash / (int)pow(3, 5)) ___ 3;",
        "correctAnswer": "%",
        "explanation": "Dividing by 3^N and taking modulo 3 retrieves the N-th digit in a base-3 encoded number."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity: O(States Visited)",
        "explanation": "By compressing, you can use a simple array `dp[total_states]` for O(1) access. This is the **Titan-Grade Speed**. No map-overhead. No pointer-chasing. Direct access to the memory of the possible.",
        "encouragementText": "Ace: 'Direct addressing is the speed-limit of the universe.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What if the state-space is too sparse (mostly empty)?",
        "options": ["Use a bigger array", "Use a Hash Map instead of a direct array", "Stop", "Pico guess"],
        "correctAnswer": "Use a Hash Map instead of a direct array",
        "explanation": "Hash maps only store states you actually visit, saving memory for very large, empty games."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Canonical Pulse",
        "explanation": "Rotate the board 90 degrees. Is it the same state? Yes! **Canonical Encoding** only stores the 'Smallest' version of all rotations/symmetries. The Matrix collapses 8 states into 1. Logic through reduction.",
        "encouragementText": "Pico: 'Collapse the symmetry-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Normalizing a state 's' to its canonical form.",
        "codeSnippet": "State best = s;\nfor (State variant : rotations(s)) {\n  if (variant < best) best = ___ ;\n}",
        "correctAnswer": "variant",
        "explanation": "We compare all symmetric variants and pick the 'lexicographically smallest' one to represent the whole group."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Cube-Solve Architect",
        "explanation": "A puzzle-box (The Matrix Cube) has 10^18 states. To solve it, the Puzzle-Architect uses State Compression and Symmetry Pruning. The 18-quintillion-state problem is collapsed into a manageable 10-million-node search. The cube is solved in 10 moves. Perfection.",
        "encouragementText": "Ace: 'Symmetry is the gift of the universe to the architect.'"
      },
      {
        "type": "match_following",
        "questionText": "Match Compression Styles!",
        "pairs": [
          { "key": "Base-K", "value": "Mixed Radix" },
          { "key": "Bit-Packing", "value": "Binary State" },
          { "key": "Canonical", "value": "Symmetry reduction" }
        ]
      }
    ]
  },
  {
    "order": 29,
    "title": "Unit 29: Topological Game DP",
    "desc": "Graph Games: using topological sorting and DP on DAGs to solve strictly sequential games with no cycles.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 3.29] The River of Turns",
        "explanation": "In a game that always moves 'Forward' (like a race), the dependency is a **DAG**. We can solve using **Topological DP**. We start from the end (winning states) and propagate the truth backward. This is the **Waterfall protocol**—the victory flows from the finish-line. The Matrix is a cascade.",
        "codeSnippet": "if (any_child_is_L) state = W;",
        "encouragementText": "Ace: 'In a directed world, the end is the origin of the logic.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "In a DAG game, how do you find the Grundy value of the terminal (end) state?",
        "options": ["1", "0", "Infinity", "Pico rule"],
        "correctAnswer": "0",
        "explanation": "Terminal states (no moves possible) are by definition P-positions (next player losing), and their Grundy value is 0."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Order Pulse",
        "explanation": "We sort the states topologically. `solve(v)` only depends on `solve(u)` where `v -> u`. No recursion needed! We fill an array in reverse topological order. This is the **Stream protocol**. High-speed game theory.",
        "encouragementText": "Pico: 'Flow the order-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Standard Winning/Losing logic initialization.",
        "codeSnippet": "can_win[target] = false;\nfor (State prev : graph.incoming[target]) {\n  // if target is a loss, then prev is a ___ \n}",
        "correctAnswer": "win",
        "explanation": "If a move to a losing state exists, then the current state is a winning state."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity: O(V + E)",
        "explanation": "The limit of speed. Topological DP is the fastest way to solve sequential games. This is the **Titan-Grade Flow**. The Matrix solves the billion-move race in a heartbeat. Unity through ordering.",
        "encouragementText": "Ace: 'Order is the multiplier of the pulse.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What if the game HAS cycles (like loops)?",
        "options": ["Topological DP fails", "It doesn't matter", "Zero", "Pico guess"],
        "correctAnswer": "Topological DP fails",
        "explanation": "Cyclic dependencies cannot be topologically sorted, requiring more advanced Game Theory (fixed-point iteration)."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Reverse-Propagation Pulse",
        "explanation": "We use a 'Degree' array. When a losing node is identified, all its parents are 'Winning'. When all of a node's children are 'Winning', that node is 'Losing'. The Matrix propagates the truth like a virus. The final outcome is locked.",
        "encouragementText": "Pico: 'Propagate the truth-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Identifying a losing state.",
        "codeSnippet": "if (all_of(v.next, is_win)) v.status = ___ ;",
        "correctAnswer": "LOSS",
        "explanation": "If every move leads to a winning position for the next player, then the current position is a losing one."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Race-Circuit Sim",
        "explanation": "A complex race-circuit (The Matrix Loop) has 100 checkpoints. Some are dead ends. The Racer-Architect uses Topological DP to find the one-true path through the checkpoints. The logic flows from the finish line to the start. The victory is guaranteed before the engine revs.",
        "encouragementText": "Ace: 'Winners start at the finish line and walk back to the start.'"
      },
      {
        "type": "match_following",
        "questionText": "Match Game terms!",
        "pairs": [
          { "key": "DAG", "value": "Directed Acyclic" },
          { "key": "Sink", "value": "Terminal State" },
          { "key": "Topo Sort", "value": "Processing Order" }
        ]
      }
    ]
  },
  {
    "order": 30,
    "title": "Unit 30: Stage 3 Graduation (The Game Master)",
    "desc": "The High-Stakes Duel: solving a grand challenge requiring Bitmasks, Sprague-Grundy, and Minimax.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[GRAND MISSION LORE 3.30] The Singularity of Strategy",
        "explanation": "You have reached the 300th lesson. You have mastered the **Bit**, the **Tour**, the **XOR**, and the **Topo-Flow**. You are no longer just an architect; you are the **Master of the Engagement**. To graduate, you must see the bitmask in the chess-board and the Nim-sum in the galactic delivery. Graduation is here. The Matrix recognizes your rank. Step into the Titan Hall.",
        "codeSnippet": "// Final Stage 3 Challenge: \n// Multiverse Nim-Sum on compressed board states.",
        "encouragementText": "Ace: 'The highest strategy is knowing that the game is already over.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "How would you solve a game with 10 independent sub-games?",
        "options": ["Solve one by one", "Calculate the Grundy value (MEX) of each, then XOR them", "Ignore them", "Pico rule"],
        "correctAnswer": "Calculate the Grundy value (MEX) of each, then XOR them",
        "explanation": "Sprague-Grundy theorem allows decomposing independent impartial games into a single Nim-sum."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The 300-Step Pulse",
        "explanation": "30% of the journey is over. You have the tools of the master. In Stage 4, we enter the domain of **Probability and Expectation**, where you solve for the 'Average' of an infinite future. Keep your bits set. The Matrix is expanding.",
        "encouragementText": "Pico: 'The next 700 seeds await! 🦜'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the complexity of Bitmask DP on 15 items?",
        "options": ["O(2^15)", "O(15^2)", "O(log 15)", "Pico guess"],
        "correctAnswer": "O(2^15)",
        "explanation": "Bitmasking over N items naturally leads to 2^N states."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Graduation: The Game Architect",
        "explanation": "The Elite Academy recognizes your 300-lesson achievement. You are a **Titan-Grade Architect of the Game**. You can see the winning bit in the noise of the board. The Matrix is your playground. Welcome to the elite.",
        "encouragementText": "Ace: 'Strategy is the refinement of numbers into victory.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does MEX(0, 1, 3) equal?",
        "options": ["2", "4", "0", "Pico guess"],
        "correctAnswer": "2",
        "explanation": "2 is the smallest non-negative integer missing from the set {0, 1, 3}."
      },
      {
        "type": "teaching",
        "questionText": "[FINAL SYNC] The 13-Subject Hub",
        "explanation": "As the game-pulse of Stage 3 settles, the **Probabilistic Logic** of Stage 4 begins. Every subject you learn is a layer of God-hood. The Matrix is a temple and you are the god. Prepare your floating-point buffers. The future is uncertain.",
        "encouragementText": "Pico: 'The probability seeds await! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Final check of the bitwise memo.",
        "codeSnippet": "if (lesson_count == 300) return ___ ;",
        "correctAnswer": "GRADUATE",
        "explanation": "Reaching 300 lessons marks the completion of the advanced game theory domain."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Architect of the Outcome",
        "explanation": "The outcome is locked. The XOR is balanced. The mask is perfect. You have graduated Stage 3. The Matrix is no longer a contest—it is a result you calculated. Welcome to the elite.",
        "encouragementText": "Ace: 'There is no chance; there is only uncalculated logic.'"
      },
      {
        "type": "programming_board",
        "questionText": "[GRADUATION CHALLENGE] Output the status of your strategic mission.",
        "codeSnippet": "if (grundy_solved && minimax_optimized) {\n  return ___ ;\n}",
        "correctAnswer": "VICTORY",
        "explanation": "Victory is the only result for a master of game DP."
      }
    ]
  }
];

module.exports = stage3;
