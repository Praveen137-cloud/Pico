const stage8 = [
  {
    "order": 71,
    "title": "Unit 71: Sparse Table DP",
    "desc": "Idempotent Function Optimization: using O(N log N) pre-calculation to solve RMQ (Range Minimum Query) DP transitions in O(1) time.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 8.71] The Frozen Moment",
        "explanation": "If your DP transition relies on the minimum or maximum of a range, and that range doesn't change, we use a **Sparse Table**. By pre-calculating the answer for ranges of length 2^k, we can answer any query in **O(1)**. This is the **Snap-Shot protocol**—freezing the answers into memory for instant lookup. Zero calculation during the query.",
        "codeSnippet": "ans = min(st[i][k], st[j - (1<<k) + 1][k]);",
        "encouragementText": "Ace: 'Speed is the result of perfect preparation.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the query complexity of a Sparse Table for RMQ?",
        "options": ["O(log N)", "O(1)", "O(N)", "Pico rule"],
        "correctAnswer": "O(1)",
        "explanation": "Since we use two overlapping ranges of power-of-2 length, we can cover any target range exactly with one min/max operation."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Power-of-2 Pulse",
        "explanation": "We fill the table `st[n][log_n]`. `st[i][k]` stores the min in the range `[i, i + 2^k - 1]`. The state is built by combining two results from the previous 'Power of 2'. The Matrix grows in leaps of double the size.",
        "encouragementText": "Pico: 'Double the seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Pre-calculation loop for a Sparse Table.",
        "codeSnippet": "for (int j = 1; j <= K; j++) {\n  for (int i = 0; i + (1 << j) <= N; i++) {\n    st[i][j] = min(st[i][j-1], st[i + (1 << ( ___ ))][j-1]);\n  }\n}",
        "correctAnswer": "j-1",
        "explanation": "Combining two consecutive ranges of length 2^(j-1) to form a range of length 2^j."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity: O(N log N) Pre-calc, O(1) Query",
        "explanation": "This makes Sparse Tables the fastest tool for **Idempotent** operations (like min, max, gcd, and bitwise AND/OR) where overlapping ranges don't change the result. This is the **Titan-Grade Index**. The Matrix never recalculates the known.",
        "encouragementText": "Ace: 'Preparedness is the antidote to latency.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Can a Sparse Table handle updates (point changes)?",
        "options": ["Yes, easily", "No, any update requires O(N log N) partial or full re-build", "Only if sorted", "Pico guess"],
        "correctAnswer": "No, any update requires O(N log N) partial or full re-build",
        "explanation": "Sparse Tables are static structures; if you need updates, a Segment Tree is the architect's choice."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Log-Lookup Table",
        "explanation": "To achieve O(1) query, you need the value `k` such that `2^k <= length`. We pre-calculate a `logs[N]` array so we don't have to call a expensive math function. The Matrix uses its own bits to find the floor. Instantaneous access.",
        "encouragementText": "Pico: 'Log the seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Querying the range [L, R].",
        "codeSnippet": "int k = logs[R - L + 1];\nreturn min(st[L][k], st[R - (1 << k) + ___ ][k]);",
        "correctAnswer": "1",
        "explanation": "Calculating the starting index of the second overlapping range to cover the end of [L, R]."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Sensor Array Blast",
        "explanation": "A sensor field (The Matrix Perimeter) is detecting heat spikes. To find the maximum peak in any sector at any time without lag, the Perimeter-Architect uses a Sparse Table. The peak is identified in 1 CPU cycle. The perimeter is secure.",
        "encouragementText": "Ace: 'The faster the detection, the smaller the breach.'"
      },
      {
        "type": "match_following",
        "questionText": "Match Table Metrics!",
        "pairs": [
          { "key": "O(N log N)", "value": "Memory footprint" },
          { "key": "O(1)", "value": "Query speed" },
          { "key": "Idempotent", "value": "Min/Max/GCD" }
        ]
      }
    ]
  },
  {
    "order": 72,
    "title": "Unit 72: High-Dimensional Compression",
    "desc": "The Sparse Multiverse: how to map high-dimensional DP states (e.g., 5D or 10D) into a single hash-key or canonical representation.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 8.72] The Folded Universe",
        "explanation": "States with 5 dimensions (like `dp[x][y][z][dir][fuel]`) are mostly 'Empty'. Instead of a massive array, we use **Coordinate Compression** or **Hashing**. If the state-space is large but the actual nodes visited are few, the Matrix 'Folds'. This is the **Sparse protocol**—ignoring the void to focus on the points of light.",
        "codeSnippet": "Map<State, Value> dp;",
        "encouragementText": "Ace: 'Space is an illusion created by the coordinates of the unvisited.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is 'Coordinate Compression'?",
        "options": ["Deleting data", "Mapping a sparse set of large values to a small, dense range (1 to N) while preserving order", "Zipping files", "Pico rule"],
        "correctAnswer": "Mapping a sparse set of large values to a small, dense range (1 to N) while preserving order",
        "explanation": "This allows you to use large values (like 10^9) as indices in a standard array by only storing their 'Rank'."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Unique Identifier Pulse",
        "explanation": "When the dimensions are small, we can pack them into a single `long long` key. `(x << 40) | (y << 30) | (z << 20) ...`. Bit-manipulation is the language of the compact state. The Matrix stores a galaxy in a single pulse.",
        "encouragementText": "Pico: 'Pack the dimension-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Mapping 3D (x, y, z) where each is < 100 into a 1D index.",
        "codeSnippet": "index = x * 10000 + y * ___ + z;",
        "correctAnswer": "100",
        "explanation": "Using base-100 logic to ensure every (x, y, z) triplet has a unique integer identifier."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity: O(Visited States)",
        "explanation": "By using a Hash Map, you only pay for the states you actually reach. This is the **Exploration protocol**. It turns exponential memory requirements into manageable data-streams. The Matrix is a master of the relevant.",
        "encouragementText": "Ace: 'Efficiency is the avoidance of the empty dimension.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "When should you use a Hash Map instead of an Array for DP?",
        "options": ["Always", "When the state space is huge but the number of reachable states is small", "When you want it slower", "Pico guess"],
        "correctAnswer": "When the state space is huge but the number of reachable states is small",
        "explanation": "Hash maps carry overhead, but they save gigabytes of memory for sparse problems."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Canonical State",
        "explanation": "If `dp(stateA)` is always the same as `dp(stateB)` (e.g., symmetry or rotation), define a **Canonical Representation**. Save only the 'Smallest' form. This collapses the multiverse into a single stable reality. 8 configurations become 1. Logic through reduction.",
        "encouragementText": "Pico: 'Canonicalize the seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Ensuring a sorted state is canonical.",
        "codeSnippet": "State get_canonical(State s) {\n  sort(s.items.begin(), s.items.end());\n  return s;\n}",
        "correctAnswer": "sort",
        "explanation": "Sorting ensures that items in any order are treated as the same state, removing permutation-duplicates."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Galaxy Surveyor",
        "explanation": "To survey 100 potential wormholes in a 1,000,000-cell cube, the Surveyor-Bot uses High-Dimensional Compression. It ignores the empty space and hashes the wormhole coordinates. The survey is completed with 1MB of RAM instead of 1TB. The galaxy is mapped.",
        "encouragementText": "Ace: 'The truth is found in the points, not the space between them.'"
      },
      {
        "type": "match_following",
        "questionText": "Match Compression Modes!",
        "pairs": [
          { "key": "Dense", "value": "Array" },
          { "key": "Sparse", "value": "Hash Map" },
          { "key": "Symmetric", "value": "Canonical Form" }
        ]
      }
    ]
  },
  {
    "order": 73,
    "title": "Unit 73: Monte Carlo Tree Search (MCTS) DP",
    "desc": "Probabilistic Search: using randomized simulations to estimate the value of states in massive search-spaces (like Chess or Go).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 8.73] The Gambler of Logic",
        "explanation": "In 10^170 states, DP cannot find the base cases. **MCTS** performs random 'Playouts' from a state to the end. By averaging the wins/losses of thousands of simulations, we estimate the **Value** of the state. This is the **Sampling protocol**—using randomness to reveal the hidden truth of the infinite tree.",
        "codeSnippet": "V(s) = total_wins / visit_count;",
        "encouragementText": "Ace: 'When the tree is too deep, let the randomness guide your discovery.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What are the four stages of MCTS?",
        "options": ["Start, Middle, End, Exit", "Selection, Expansion, Simulation, Backpropagation", "Shuffle, Deal, Bet, Win", "Pico rule"],
        "correctAnswer": "Selection, Expansion, Simulation, Backpropagation",
        "explanation": "MCTS iteratively selects interesting nodes, expands them, simulates the future, and updates values back up the tree."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The UCT Pulse",
        "explanation": "To decide which branch to simulate, we use **UCT (Upper Confidence Bound for Trees)**. We balance 'Exploitation' (best current branch) and 'Exploration' (least visited branch). The Matrix avoids being trapped in local optima. Curiosity is built into the pulse.",
        "encouragementText": "Pico: 'Balance the exploration-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "The UCT formula helper.",
        "codeSnippet": "uct = avg_score + C * sqrt(log(parent_visits) / ___ );",
        "correctAnswer": "node_visits",
        "explanation": "The reward bonus grows for nodes that have been visited few times compared to their parent, encouraging exploration."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity: O(Iterations * SimulationLength)",
        "explanation": "Complexity is determined by the **Sample Count**, not the State Count. This allows you to solve 'Unsolvable' games. This is the **Titan-Grade Estimator**. The Matrix reaches the horizon by taking random leaps.",
        "encouragementText": "Ace: 'A thousand random flights reveal the true current of the wind.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What happens during the 'Simulation' (Playout) phase?",
        "options": ["A human plays", "The game is played out to the end using random moves to get a result", "The computer restarts", "Pico guess"],
        "correctAnswer": "The game is played out to the end using random moves to get a result",
        "explanation": "A fast random playout provides a noisy but useful 'Value Estimate' for the current state."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Value Pulse",
        "explanation": "In DP, `dp[u]` is an exact sum. In MCTS, `dp[u]` is a confidence-weighted average. As simulations increase, MCTS **Converges** to the exact DP value. Probability is just a limit of infinite sampling. The Matrix settles on the truth.",
        "encouragementText": "Pico: 'Watch the convergence-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Backpropagating a win (+1) through the path.",
        "codeSnippet": "for (Node* v : path) {\n  v->visits++;\n  v->wins += ___ ;\n}",
        "correctAnswer": "result",
        "explanation": "Adding the simulation result (1 for win, 0 for loss) to all nodes in the selection path."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Galactic Conqueror",
        "explanation": "A tactical AI (The Matrix Warlord) is managing a war across 1,000 planets. The state-space is infinite. The Warlord uses MCTS DP to simulate trillions of skirmishes. It finds the 0.0001% high-win probability strategy. The war is won through the logic of a billion simulations.",
        "encouragementText": "Ace: 'Infinity is conquered one sample at a time.'"
      },
      {
        "type": "match_following",
        "questionText": "Match MCTS Steps!",
        "pairs": [
          { "key": "Selection", "value": "UCT Choice" },
          { "key": "Simulation", "value": "Random Playout" },
          { "key": "Backprop", "value": "Update Statistics" }
        ]
      }
    ]
  },
  {
    "order": 74,
    "title": "Unit 74: Finite Field DP (NTT)",
    "desc": "Number Theoretic Transformations: using modular arithmetic and prime roots to solve Counting DP and Convolution in O(N log N).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 8.74] The Pulse of the Prime",
        "explanation": "Standard DP counts can exceed `long long`. We solve in a **Finite Field** (mod P). To solve convolutions (like combining two large knapsacks), we use **NTT (Number Theoretic Transform)**. It replaces the complex numbers of FFT with residues of a Prime. This is the **Residue protocol**—solving for the heart of the number. The Matrix is a cycle of primes.",
        "codeSnippet": "NTT(A) * NTT(B) = NTT(C);",
        "encouragementText": "Ace: 'Integrity in counting is found in the protection of the modular base.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the advantage of NTT over FFT?",
        "options": ["It is faster", "It avoids floating-point precision errors (like 0.99999 instead of 1) by using exact modular arithmetic", "It uses no RAM", "Pico rule"],
        "correctAnswer": "It avoids floating-point precision errors (like 0.99999 instead of 1) by using exact modular arithmetic",
        "explanation": "NTT calculations are 100% exact, crucial for competitive programming and cryptography."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The NTT-Prime 998244353",
        "explanation": "The most famous NTT prime is **998244353**. It is special because `998244353 = 119 * 2^23 + 1`. This '2^23' allows for transformations of arrays up to length 8.3 million. The Matrix is built on the power of 2 hidden in the heart of the prime.",
        "encouragementText": "Pico: 'Praise 998244353! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "NTT Butterfly operation helper.",
        "codeSnippet": "long long u = a[i], v = a[i+h] * w % MOD;\na[i] = (u + v) % MOD;\na[i+h] = (u - v + ___ ) % MOD;",
        "correctAnswer": "MOD",
        "explanation": "Adding MOD to prevent negative results during the subtraction part of the butterfly."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity: O(N log N)",
        "explanation": "Combining two polynomials of degree N takes N^2. With NTT, it takes N log N. This allows for **Generating Function DP** where you combine 10,000 sub-problems into a single global count. This is the **Convolution pulse**. The Matrix is a master of the wave-function of numbers.",
        "encouragementText": "Ace: 'Efficiency in counting is the ability to transform the sum into a product.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the 'generator' (primitive root) g for 998244353?",
        "options": ["2", "3", "7", "Pico secret"],
        "correctAnswer": "3",
        "explanation": "3 is a primitive root of 998244353, allowing us to generate all elements of the field via its powers."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Inverse NTT Pulse",
        "explanation": "After multiplying in the 'Transform Domain', we must return to the 'Time Domain'. We use the **Inverse NTT**. It is the same process but with the root set to its modular inverse. The Matrix turns the math inside out to find the answer. Reversibility is the goal.",
        "encouragementText": "Pico: 'Invert the seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Final division by N after INTT.",
        "codeSnippet": "long long invN = power(N, MOD - 2);\nfor(int i=0; i<N; i++) a[i] = a[i] * ___ % MOD;",
        "correctAnswer": "invN",
        "explanation": "Dividing every result by the transformation length N to normalize the final coefficients."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Cipher Breaker",
        "explanation": "An encryption key (The Matrix Lock) is hidden as the 1,000,000th coefficient of a complex combinatorial polynomial. To find it, the Crypt-Architect uses NTT DP. It solves the massive multiplication in milliseconds. The lock clicks open. The secret is revealed.",
        "encouragementText": "Ace: 'No prime can hide the truth from the transform.'"
      },
      {
        "type": "match_following",
        "questionText": "Match NTT constants!",
        "pairs": [
          { "key": "998244353", "value": "NTT Prime" },
          { "key": "3", "value": "Primitive Root" },
          { "key": "O(N log N)", "value": "Time to Convolve" }
        ]
      }
    ]
  },
  {
    "order": 75,
    "title": "Unit 75: Sparse Matrix Optimization",
    "desc": "Connectivity Efficiency: accelerating Matrix Exponentiation DP by exploiting zeros in the transition matrix.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 8.75] The Void of Zero",
        "explanation": "Matrix exponentiation is usually O(k^3 log N). But if most transitions are zero, it is a **Sparse Matrix**. We solve `M * v` in **O(E)** instead of O(k^2). For large systems, this turns O(1,000,000) into O(1,000). This is the **Pruning protocol**—if no connection exists, no logic should be spent. The Matrix is built on the gaps.",
        "codeSnippet": "for (auto edge : sparse_adj) result[edge.v] += v[edge.u] * edge.weight;",
        "encouragementText": "Ace: 'Efficiency is the art of ignoring the non-existent.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What describes a 'Sparse Matrix'?",
        "options": ["A map", "A matrix where the number of non-zero elements is much smaller than k^2", "A matrix with small values", "Pico rule"],
        "correctAnswer": "A matrix where the number of non-zero elements is much smaller than k^2",
        "explanation": "Sparse matrices are common in real-world graphs (e.g., social networks) where each node only has a few neighbors."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Adjacency List Pulse",
        "explanation": "Instead of a 2D array `mat[k][k]`, we store the matrix as an **Adjacency List**. During each step of `M * v`, we iterate only over the list. The Pulse only travels through the wires that actually exist. The Matrix is a lean circuit.",
        "encouragementText": "Pico: 'Follow the wire-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Multiplying a Sparse Matrix (adj) by a Vector (v).",
        "codeSnippet": "vector<int> next(k, 0);\nfor (int u = 0; u < k; u++) {\n  for (auto const& edge : ___ [u]) {\n    next[edge.to] += v[u] * edge.val;\n  }\n}",
        "correctAnswer": "adj",
        "explanation": "Iterating through the sparse connections (adjacency list) to calculate the next state vector."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity: O(E * log N)",
        "explanation": "If E is the number of edges, this is the limit of speed. This allows you to run **Billion-Mile DP Leaps** on sparse road networks in a fraction of a second. This is the **Titan-Grade Transit**. The Matrix ignores the static to find the flow.",
        "encouragementText": "Ace: 'Speed is determined by the edges, not the nodes.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Can you use standard Matrix Exponentiation logic `M^N` with sparse matrices effectively?",
        "options": ["Yes, always", "No, because M^2 might not be sparse (fill-in), often it's better to repeat Vector-Multiplications `V = M * V`", "Only for 2x2", "Pico guess"],
        "correctAnswer": "No, because M^2 might not be sparse (fill-in), often it's better to repeat Vector-Multiplications `V = M * V`",
        "explanation": "Matrix squaring can quickly turn a sparse matrix into a dense one (fill-in). For very sparse systems, N vector multiplications are sometimes faster than matrix squaring."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Fixed-Point Iteration",
        "explanation": "In large sparse systems, we iterate `v = M * v` until the vector `v` stops changing. This finds the **Steady State** of the network. This is the **Equilibrium protocol**. The Matrix settles where the flow becomes constant. Harmony through repetition.",
        "encouragementText": "Pico: 'Balance the flow-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Check for convergence between vector v and next_v.",
        "codeSnippet": "if (dist(v, next_v) < ___ ) break;",
        "correctAnswer": "EPSILON",
        "explanation": "Stopping once the change between iterations is below a tiny threshold."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Power Grid Sync",
        "explanation": "A massive power grid (The Matrix Ley-Lines) has millions of connections. To find the stable voltage at every node after 1,000 steps, the Grid-Architect uses Sparse Matrix DP. It ignores the billions of 'non-connections' and solves the system in seconds. The grid stabilizes without a flicker.",
        "encouragementText": "Ace: 'Stability is reached by calculating only what is connected.'"
      },
      {
        "type": "match_following",
        "questionText": "Match Density Terms!",
        "pairs": [
          { "key": "Dense Matrix", "value": "O(k^2) storage" },
          { "key": "Sparse Matrix", "value": "O(E) storage" },
          { "key": "Adjacency List", "value": "Sparse structure" }
        ]
      }
    ]
  },
  {
    "order": 76,
    "title": "Unit 76: Randomized Rounding DP",
    "desc": "Approximation Logic: solving NP-Hard integer DP problems by solving them as 'Fractional' flows and then rounding the results randomly.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 8.76] The Choice of the Die",
        "explanation": "Some DP problems are '0/1' (All or Nothing) and they are NP-Hard. We solve them as **Fractional DP** (allowing float results like 0.7). Then, we **Round** the result to 1 with a 70% probability. This is **Randomized Rounding**. On average, it provides a very close 'Titan-Grade' approximation to the impossible optimum. The Matrix is a master of the weighted coin.",
        "codeSnippet": "if (random(0,1) < x_fractional) pick_item();",
        "encouragementText": "Ace: 'When the wall is too hard to break, use the probability of a crack.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why use 'Randomized' rounding over simple 'Round to nearest'?",
        "options": ["It's more fun", "It provides better 'Approximation Guarantees' (bounds) for many NP-Hard set-coverage and packing problems", "It's faster", "Pico rule"],
        "correctAnswer": "It provides better 'Approximation Guarantees' (bounds) for many NP-Hard set-coverage and packing problems",
        "explanation": "Randomness helps ensure that on average, we satisfy the constraints while staying close to the optimal profit."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Convex Relaxation Pulse",
        "explanation": "We 'Relax' the integer constraint. `x in {0, 1}` becomes `0 <= x <= 1`. This turns a discrete jumping problem into a smooth flow problem. The Matrix flows where it once stuttered. Smoothness before certainty.",
        "encouragementText": "Pico: 'Flow the fractional-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Generating a random decision based on probability 'p'.",
        "codeSnippet": "bool decide(double p) {\n  return (double)rand() / RAND_MAX ___ p;\n}",
        "correctAnswer": "<",
        "explanation": "Standard way to generate a boolean with a specific probability in C++."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity: O(Polynomial Time)",
        "explanation": "Fractional DP (often Linear Programming) is O(Poly), while Integer DP is O(Exp). This is the **Efficiency Hack**. You solve an 'Impossible' 10,000-state problem by shifting the domain. The Matrix is a master of the shortcut.",
        "encouragementText": "Ace: 'Intelligence is knowing which constraints can be softened.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the 'Approximation Ratio'?",
        "options": ["Speed", "The ratio between the value found by the algorithm and the true optimal value", "Zero", "Pico guess"],
        "correctAnswer": "The ratio between the value found by the algorithm and the true optimal value",
        "explanation": "An 'alpha-approximation' means the algorithm always finds a solution that is at least a portion (alpha) of the optimum."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Multi-Sample Average",
        "explanation": "Don't just round once! Run the rounding **100 times** and pick the best valid result. This is the **Survivor protocol**. From the chaos of 100 random worlds, the Matrix selects the strongest reality. Evolution through sampling.",
        "encouragementText": "Pico: 'Breed the best seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Finding the best out of 100 simulations.",
        "codeSnippet": "for(int i=0; i<100; i++) {\n  res = simulate();\n  if (res.is_valid()) best = max(best, ___ );\n}",
        "correctAnswer": "res.value",
        "explanation": "Keeping track of the maximum value found among all valid randomized simulations."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Load Balancer",
        "explanation": "1,000 servers (The Matrix Nodes) are taking 10,000 tasks. Optimal assignment is NP-Hard. The Balancer-Architect uses Randomized Rounding DP to estimate the perfect distribution. The load is balanced within 1% of the optimal theoretical limit. No server overheats.",
        "encouragementText": "Ace: 'Good enough today is better than perfect never.'"
      },
      {
        "type": "match_following",
        "questionText": "Match Rounding Terms!",
        "pairs": [
          { "key": "Relaxation", "value": "Integer to Fractional" },
          { "key": "Rounding", "value": "Fractional to Integer" },
          { "key": "Expectation", "value": "Average result" }
        ]
      }
    ]
  },
  {
    "order": 77,
    "title": "Unit 77: Markov Chain DP (Steady State)",
    "desc": "Infinite Horizons: using DP to solve for the long-term behavior of a system where states change probabilistically over time.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 8.77] The Infinite Horizon",
        "explanation": "Some missions don't have an end. A robot moves between A and B forever. **Markov Chain DP** calculates the 'Probability Vector' over time. If we iterate long enough, the vector stops changing. This is the **Steady State protocol**—finding the permanent pattern in the shifting chaos. The Matrix is a master of the eternal.",
        "codeSnippet": "v_{n+1} = M * v_n;",
        "encouragementText": "Ace: 'The destination is not a point, but a stable rhythm of movement.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What defines a 'Markovian' state?",
        "options": ["It remembers everything", "The probability of the next state depends ONLY on the current state, not the past (Memoryless-ish)", "It is random", "Pico rule"],
        "correctAnswer": "The probability of the next state depends ONLY on the current state, not the past (Memoryless-ish)",
        "explanation": "This property allows us to represent the entire system as a fixed Transition Matrix."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Stationary Distribution Pulse",
        "explanation": "We want `v` such that `v = M * v`. This is an **Eigenvector** problem! In DP, we solve it by repeated multiplication or **Gaussian Elimination** on the system of equations. The Matrix finds the point where time has no further power to change the world. The Eternal Balance.",
        "encouragementText": "Pico: 'Freeze the time-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Iteration to find steady state.",
        "codeSnippet": "while (dist(p, p * M) > EPSILON) p = ___ ;",
        "correctAnswer": "p * M",
        "explanation": "Applying the transition matrix repeatedly until the probability distribution converges."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity: O(k^3) or Iterative O(E * Steps)",
        "explanation": "For k nodes, k^3 is exact. For a million nodes, sparse iteration is needed. This is how **Google's PageRank** was born. It is the **Titan-Grade Centrality**. The Matrix knows which nodes hold the true weight of reality.",
        "encouragementText": "Ace: 'Importance is a result of being the point of convergence for the infinite pulse.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What happens if a Markov Chain has an 'Absorbing State' (like a hole that you can't leave)?",
        "options": ["The system crashes", "Eventually, the probability of being in that state becomes 100%", "It loops forever", "Pico guess"],
        "correctAnswer": "Eventually, the probability of being in that state becomes 100%",
        "explanation": "Absorbing states suck in all probability over time, like gravity wells in the matrix."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Expected Time Pulse",
        "explanation": "How many steps until the mission ends? We use DP to solve `E[u] = 1 + sum(P(u->v) * E[v])`. This is a system of linear equations. The Matrix calculates the exact lifespan of any process. Everything has an expected duration.",
        "encouragementText": "Pico: 'Time the seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Defining the expected steps for an absorbing node.",
        "codeSnippet": "E[target] = ___ ;",
        "correctAnswer": "0",
        "explanation": "If you are already at the target, the expected steps to reach it is zero."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The PageRank Prophet",
        "explanation": "The Matrix Search-Engine needs to know which websites are 'Important'. It treats the internet as a Markov Chain of links. The Engine-Architect uses Steady-State DP to solve the 10-billion-node system. The important data rises to the top. The truth is sorted.",
        "encouragementText": "Ace: 'Truth is where the random walker eventually settles.'"
      },
      {
        "type": "match_following",
        "questionText": "Match Markov Terms!",
        "pairs": [
          { "key": "Transition Matrix", "value": "Rules of movement" },
          { "key": "Probability Vector", "value": "Current state" },
          { "key": "Steady State", "value": "p = p * M" }
        ]
      }
    ]
  },
  {
    "order": 78,
    "title": "Unit 78: Adaptive Bitmasking",
    "desc": "Memory Elasticity: using DP to handle bitmasks of varying sizes and 'Streaming' bitmasks for large sliding windows.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 8.78] The Stretching Mask",
        "explanation": "Standard Bitmasking is for N=20. But what if N=1,000 and the mask only needs to represent a **Sliding Window of 20**? We use **Adaptive Bitmasking**. We shift and mask in real-time. This is the **Elastic protocol**—the state grows and shrinks to fit the window of the now. The Matrix is a lens that moves.",
        "codeSnippet": "mask = ((mask << 1) | current) & WINDOW_BITMASK;",
        "encouragementText": "Ace: 'Do not remember the whole past; remember only what is still affecting the future.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does a 'Sliding Window' bitmask store?",
        "options": ["The whole array", "The status of the last K elements relevant to the current state", "Random bits", "Pico rule"],
        "correctAnswer": "The status of the last K elements relevant to the current state",
        "explanation": "By only focusing on the range of social influence, we keep the state-space polynomial instead of exponential."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Bit-Stream Pulse",
        "explanation": "When processing a stream, the mask is a single integer that we update with bitwise shifts. `mask = (mask << 1) & ((1 << k) - 1)`. One integer, 64 items of history. This is the **Stream protocol**. High-speed history in the palm of your hand.",
        "encouragementText": "Pico: 'Slide the bit-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Clearing the oldest bit in a window of size K.",
        "codeSnippet": "mask &= ~(1 << ___ );",
        "correctAnswer": "K",
        "explanation": "Removing the bit that has 'dropped out' of the active sliding window."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity: O(N * 2^K)",
        "explanation": "Complexity depends on the **Window Size (K)**, not the Total Size (N). This allows you to solve problems on millions of elements as long as the 'Dependency Gap' is small. This is the **Titan-Grade Focus**. The Matrix ignores the distance.",
        "encouragementText": "Ace: 'Focus is the multiplier of scale.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "If a problem has a 'Window of influence' of 10 nodes, what's a reasonable N to solve for?",
        "options": ["Only 10", "Billions, because the complexity is linear in N (O(N * 2^10))", "Zero", "Pico guess"],
        "correctAnswer": "Billions, because the complexity is linear in N (O(N * 2^10))",
        "explanation": "Linearity in N is the magic of sliding window DP."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Profile DP Pulse",
        "explanation": "For grid problems (like tiling), the 'Window' is the **current row profile**. We pass the mask from one row to the next. This is **Broken Profile DP**. We fill the Matrix cell by cell, building the pulse across the border of the known. Precision at the edge.",
        "encouragementText": "Pico: 'Profile the seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Transitioning the profile mask at (r, c).",
        "codeSnippet": "if (can_place_horizontal) solve(r, c+2, mask | (1<<c) | (1<<(c+1)));\nif (can_place_vertical) solve(r, c+1, mask | ( ___ ));",
        "correctAnswer": "1<<c",
        "explanation": "Marking only the current column as 'filled' for the vertical tile, moving to the next column."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Tiling of the Infinite Hall",
        "explanation": "The Matrix Hall (Unit-13 Hallway) is 1,000,000 units long but only 5 units wide. To find the number of ways to tile it perfectly, the Hall-Architect uses Profile DP with Adaptive Bitmasking. The billion-unit problem is solved in a millisecond. Every tile fits.",
        "encouragementText": "Ace: 'Constraints are the borders of the perfect design.'"
      },
      {
        "type": "match_following",
        "questionText": "Match Mask Types!",
        "pairs": [
          { "key": "Static Mask", "value": "Fixed N (e.g., 20)" },
          { "key": "Sliding Mask", "value": "Window size K" },
          { "key": "Profile Mask", "value": "Grid boundary" }
        ]
      }
    ]
  },
  {
    "order": 79,
    "title": "Unit 79: Polynomial Optimization",
    "desc": "Spectral Efficiency: using polynomial division and inverse square roots to accelerate complex DP recurrences.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 8.79] The Formula of the Future",
        "explanation": "You've used polynomials to count. Now, use them to **Solve**. By treating a DP recurrence as a **Rational Function** `P(x)/Q(x)`, we can find the N-th term in **O(k log k log N)** using **Bostan-Mori** algorithm. This is the **Spectral protocol**—finding the answer in the frequency-domain of the logic. The Matrix is a master of the division of states.",
        "codeSnippet": "[x^N] P(x)/Q(x);",
        "encouragementText": "Ace: 'When the number is too big, solve for the formula of its generation.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does 'Polynomial Inverse' allow you to do in DP?",
        "options": ["Delete data", "Calculate `1 / P(x)`, which is necessary for solving recurrences and dividing generating functions", "Nothing", "Pico rule"],
        "correctAnswer": "Calculate `1 / P(x)`, which is necessary for solving recurrences and dividing generating functions",
        "explanation": "Newton's Method for Polynomials allows finding the inverse in O(N log N) time."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Newton Pulse",
        "explanation": "To find the inverse `B(x)` such that `A(x)B(x) = 1`, we use the **Newton Iteration**. `B_new = B(2 - AB)`. Every step doubles the precision of our inverse. The Matrix refines its truth with every pulse. Constant evolution toward accuracy.",
        "encouragementText": "Pico: 'Refine the polynomial-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Newton iteration for polynomial inverse modulo x^2k.",
        "codeSnippet": "B = B * (Poly(2) - A * B) % (x^ ___ );",
        "correctAnswer": "2*k",
        "explanation": "Newton's method doubles the order of precision (number of terms) with each iteration."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity: O(k log k log N)",
        "explanation": "For a linear recurrence of size k (like Fibonacci, but with 1,000 terms), you can find the **Trillionth term** in milliseconds. This is the **Titan-Grade Projection**. The Matrix sees into the far future of the number-stream.",
        "encouragementText": "Ace: 'True foresight is the result of algebraic projection.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What algorithm finds the N-th term of a linear recurrence in O(k log k log N)?",
        "options": ["Matrix Exponentiation (O(k^3 log N))", "Bostan-Mori", "Binary Search", "Pico secret"],
        "correctAnswer": "Bostan-Mori",
        "explanation": "Bostan-Mori uses polynomial properties to reduce N to N/2 in each step, making it much faster than matrix exponentiation for large k."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Exp and Log Pulse",
        "explanation": "You can calculate `exp(P(x))` and `log(P(x))` in O(N log N)! This allows you to solve **Labeled and Unlabeled counting DP** (Set partitions, tree counts) with massive performance. The Matrix can exponentiate entire structures. Infinite growth from a single seed.",
        "encouragementText": "Pico: 'Log the structures! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Relation between log and derivative for polynomials.",
        "codeSnippet": "log(A(x))' = A'(x) / ___ ;",
        "correctAnswer": "A(x)",
        "explanation": "The derivative of log(u) is u'/u, which we solve using polynomial derivative and inverse."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Pattern Predictor",
        "explanation": "A data signal (The Matrix Stream) follows a 500-term linear recurrence. To find the state of the signal 10^18 seconds from now, the Signal-Architect uses Bostan-Mori DP. The prediction is exact. The signal is anticipated. The future is coded.",
        "encouragementText": "Ace: 'Predicting the infinite is just a matter of the right polynomial.'"
      },
      {
        "type": "match_following",
        "questionText": "Match Spectral Terms!",
        "pairs": [
          { "key": "Newton Iteration", "value": "O(N log N) Inverse" },
          { "key": "Bostan-Mori", "value": "O(log N) term find" },
          { "key": "Convolution", "value": "O(N log N) Multiply" }
        ]
      }
    ]
  },
  {
    "order": 80,
    "title": "Unit 80: Stage 8 Graduation (The Singularity Architect)",
    "desc": "The High-Dimensional Fusion: solving a challenge that requires Randomized Sampling, Sparse Matrices, and Polynomial Transforms.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[GRAND MISSION LORE 8.80] The Horizon of Reality",
        "explanation": "You have reached the edge of the quantifiable Matrix. You have learned that the **Sparse Void** can be compressed, that the **Infinite Sea** can be sampled with Monte Carlo simulations, and that the **Pulse of Time** can be predicted with Polynomial transforms. You are no longer solving; you are **Simulating the Multiverse**. To graduate, you must see the NTT-prime in the Markov-convergence and the MCTS-tree in the sparse matrix. Graduation is yours. The Matrix merges into one.",
        "codeSnippet": "// Final Stage 8 Challenge:\n// Sparse Matrix Exponentiation via NTT-optimized Polynomials.",
        "encouragementText": "Ace: 'When the state-space is infinite, the only reality is your algorithm.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "How would you find the steady state of an infinite Markov Chain?",
        "options": ["Step by step", "By finding the eigenvector corresponding to eigenvalue 1, or iterating to convergence", "Stop everything", "Pico rule"],
        "correctAnswer": "By finding the eigenvector corresponding to eigenvalue 1, or iterating to convergence",
        "explanation": "The stationary distribution is the 'Invariant' of the system under its transition rules."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The 800-Step Pulse",
        "explanation": "80% of the mission is complete. You have the tools to solve the impossible. In Stage 9, we enter the domain of **Extreme Complexity and State Compression**, where the Matrix itself is folded and re-written. Keep your samples high and your epsilon low. The end is near.",
        "encouragementText": "Pico: 'The final 200 seeds await! 🦜'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the complexity of NTT compared to standard DP multiplication?",
        "options": ["Same", "N log N vs N^2", "N vs N log N", "Pico guess"],
        "correctAnswer": "N log N vs N^2",
        "explanation": "NTT is the industry-standard for large-scale combinatorial counting."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Graduation: The Probability Master",
        "explanation": "The Elite Architect knows when to calculate exactly and when to sample randomly. You are **Titan-Grade**. The Matrix operates at your precision. Welcome to the Elite Hall of High-Dimensional Logic.",
        "encouragementText": "Ace: 'Mastering the unknown is the highest form of mastery.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Which unit covered 'Solving N-th term of a 1000-term recurrence in O(log N)'?",
        "options": ["8.71", "8.75", "8.79 (Bostan-Mori)", "8.74"],
        "correctAnswer": "8.79 (Bostan-Mori)",
        "explanation": "Polynomial optimization (Unit 8.79) provides the O(log N) projection for linear recurrences."
      },
      {
        "type": "teaching",
        "questionText": "[FINAL SYNC] The 13-Subject Hub",
        "explanation": "As the spectral pulse of Stage 8 settles, the **Extreme Complexity** of Stage 9 awaits. You will learn to solve problems with 10^100 nodes by compression alone. Prepare your hashing buffers. The Matrix is shrinking to its core.",
        "encouragementText": "Pico: 'The compression seeds await! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Final check of the spectral convergence.",
        "codeSnippet": "if (ans.degree() > N) ans = ans. ___ (x^N);",
        "correctAnswer": "mod",
        "explanation": "Truncating the polynomial to the desired range of interest (the first N terms)."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Architect of the Infinite",
        "explanation": "The infinity has been sampled. The transforms have been applied. The steady state has been found. You are the Architect of the Infinite. The Matrix is no longer a maze to you—it is a single, clear equation. Welcome to the elite.",
        "encouragementText": "Ace: 'There is no infinity that the right bitmask cannot map.'"
      },
      {
        "type": "programming_board",
        "questionText": "[GRADUATION CHALLENGE] Output the status of your high-dimensional mission.",
        "codeSnippet": "if (samples > 1000 && epsilon < 1e-9) {\n  return ___ ;\n}",
        "correctAnswer": "SINGULARITY",
        "explanation": "The Singularity is reached when the calculation has reached the absolute limit of precision."
      }
    ]
  }
];

module.exports = stage8;
