const stage9 = [
  {
    "order": 81,
    "title": "Unit 81: Self-Healing Networks",
    "desc": "Repair DP: maintaining optimal state-reconstruction in networks where nodes and edges are dynamically failing and restoring.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 9.81] The Ever-Mending Matrix",
        "explanation": "Static logic fails in a dying system. **Self-Healing DP** calculates not just the optimum, but the **Cost of Repair**. We store 'Back-up States' that can be activated instantly if a primary node fails. This is the **Resurrection protocol**—the system knows how to become its own successor. The Matrix never truly dies; it only reconfigures.",
        "codeSnippet": "dp[u] = best(primary, fallback_state);",
        "encouragementText": "Ace: 'True strength is the ability to maintain the optimum during a crisis.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does a 'Self-Healing' state store?",
        "options": ["Just the best answer", "The best answer AND the best alternative given a single failure", "Nothing", "Pico rule"],
        "correctAnswer": "The best answer AND the best alternative given a single failure",
        "explanation": "Storing fallbacks allows for O(1) recovery if a node in the optimal path is deleted."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The K-Best Pulse",
        "explanation": "Instead of `dp[u] = val`, we store `dp[u] = {val1, val2, ... valK}`. If the best state is corrupted, we shift to the second. This is the **Redundancy protocol**. The Matrix is a layer of safety nets. 10 failures, and the system still finds the 11th path to victory.",
        "encouragementText": "Pico: 'Stack the backup-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Maintaining Top-2 fallback values in a DP step.",
        "codeSnippet": "void update(int val) {\n  if (val > best1) { best2 = best1; best1 = val; }\n  else if (val > best2) { ___ = val; }\n}",
        "correctAnswer": "best2",
        "explanation": "Ensuring the second-best state is updated if the new value doesn't beat the absolute best."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity: O(k * N)",
        "explanation": "Where k is the redundancy factor. For k=2, it's virtually the same speed as standard DP. This is the **Titan-Grade Resilience**. The Matrix remains operational in the heart of a solar flare.",
        "encouragementText": "Ace: 'A single point of failure is a failure of design.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "When is Self-Healing DP mandatory?",
        "options": ["In sorted arrays", "In mission-critical systems where node-availability is probabilistic", "Never", "Pico guess"],
        "correctAnswer": "In mission-critical systems where node-availability is probabilistic",
        "explanation": "High-availability networks use these techniques to avoid constant re-calculation of global routes."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Partial Reconstruction Pulse",
        "explanation": "If a whole sub-tree is lost, the system uses 'Differential Updates' to only fix the affected nodes. This is exactly what **Dynamic DP** (from Stage 6) was built for. The pulse of repair travels only through the wound. Efficiency in healing.",
        "encouragementText": "Pico: 'Heal the affected seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Check if current node 'u' needs reconstruction.",
        "codeSnippet": "if (u.hash != expected_hash || u.status == ___ ) reconstruct(u);",
        "correctAnswer": "OFFLINE",
        "explanation": "Triggering repair protocols only when data-corruption or node-failure is detected."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Phoenix Protocol",
        "explanation": "A data-center (The Matrix Hub) is being bombarded by electromagnetic interference. 20% of the servers are failing every second. The Hub-Architect uses Self-Healing DP to maintain a live connection through the chaos. The data reaches its destination. The system is a Phoenix.",
        "encouragementText": "Ace: 'The mission continues as long as a single fallback remains.'"
      },
      {
        "type": "match_following",
        "questionText": "Match Repair Terms!",
        "pairs": [
          { "key": "Primary", "value": "Optimal path" },
          { "key": "Fallback", "value": "Backup path" },
          { "key": "Redundancy", "value": "k-states" }
        ]
      }
    ]
  },
  {
    "order": 82,
    "title": "Unit 82: Neural-Guided DP",
    "desc": "Smart Pruning: using pre-trained heuristic models to skip 99% of DP states that are mathematically unlikely to be optimal.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 9.82] The Intuition of the Machine",
        "explanation": "Why calculate billions of states when a 'Neural Model' can tell you which ones are garbage? **Neural-Guided DP** uses a lightweight heuristic to **Prune** branches before they are even visited. This is the **Insight protocol**—the speed of intuition combined with the rigor of DP. The Matrix dreams of the answer before it proves it.",
        "codeSnippet": "if (NeuralModel.predict(state) < threshold) return;",
        "encouragementText": "Ace: 'Intelligence is the ability to ignore the irrelevant with high confidence.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the danger of Neural-Guided Pruning?",
        "options": ["It's slow", "It might skip the true global optimum if the model's 'Confidence Threshold' is too aggressive", "It uses no RAM", "Pico rule"],
        "correctAnswer": "It might skip the true global optimum if the model's 'Confidence Threshold' is too aggressive",
        "explanation": "Pruning is a trade-off between speed and perfect accuracy. Higher thresholds = higher risk."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Gradient Pulse",
        "explanation": "The model calculates a 'Score' for every state transition. We use these scores to order our search. This is **Best-First DP**. The most promising futures are explored first. The Matrix follows the scent of the solution through the maze of the possible.",
        "encouragementText": "Pico: 'Follow the high-score seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Sorting transitions by model-confidence.",
        "codeSnippet": "sort(next_states.begin(), next_states.end(), [](State a, State b) {\n  return model. ___ (a) > model. ___ (b);\n});",
        "correctAnswer": "score",
        "explanation": "Moving the most likely optimal states to the front of the exploration queue."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity: O(Guided Search * ModelInference)",
        "explanation": "If the model is fast (like a simple linear regression or a small bitset-lookup), you can solve problems with **10^50 states** in a few million steps. This is the **Titan-Grade Heuristic**. The Matrix solves the unsolvable by being smart.",
        "encouragementText": "Ace: 'Brute force is for the weak; guidance is for the elite.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "How is the 'Neural Model' typically trained?",
        "options": ["By random guessing", "By solving small instances of the DP problem exactly and learning the patterns that lead to the win", "By sleeping", "Pico guess"],
        "correctAnswer": "By solving small instances of the DP problem exactly and learning the patterns that lead to the win",
        "explanation": "Imitation learning allows the fast heuristic to mimic the slow, perfect solver."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Safety Net Pulse",
        "explanation": "If the Neural-Guided search fails, the system triggers a **Deep Recovery Search**. It uses 10% of its resources to verify the model's 'Intuition'. The Matrix trust, but verifies. Doubled-edged logic for a sharp mission.",
        "encouragementText": "Pico: 'Verify the dream-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Setting the confidence threshold (epsilon).",
        "codeSnippet": "if (model.confidence(state) > ___ ) explore_branch(state);",
        "correctAnswer": "EPSILON",
        "explanation": "Only exploring paths where the model's confidence exceeds our safety limit."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Star-Map Navigator",
        "explanation": "A jump-ship (The Matrix Voyager) must navigate 10^20 possible routes through a asteroid field. A standard DP would take a century to find the path. The Voyager-Architect uses Neural-Guided DP to find the survival-route in 2 seconds. The ship jumps. The mission is a success.",
        "encouragementText": "Ace: 'Intuition is the engine of the impossible.'"
      },
      {
        "type": "match_following",
        "questionText": "Match Search Modes!",
        "pairs": [
          { "key": "Brute Force", "value": "Zero Guidance (Slow)" },
          { "key": "Neural-Guided", "value": "Heuristic Pruning (Fast)" },
          { "key": "Epsilon", "value": "Risk Threshold" }
        ]
      }
    ]
  },
  {
    "order": 83,
    "title": "Unit 83: Link-Cut Tree DP",
    "desc": "Dynamic Topology: solving DP problems on trees where paths are being literally 'Cut' and 'Joined' in real-time.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 9.83] The Slicing Branch",
        "explanation": "What if the tree itself is a lie? One second two nodes are connected; the next, they are in different forests. **Link-Cut Trees (LCT)** use **Splay Trees** to maintain path-aggregates across dynamic connectivity. You can solve path-DP (like Max Path Sum) in **O(log N)** even while the tree is being cut into pieces. This is the **Severance protocol**. The Matrix is a puzzle with no fixed shape.",
        "codeSnippet": "lct.cut(u, v); lct.link(u, v);",
        "encouragementText": "Ace: 'Connection is a state, not a law. It can be broken at any moment.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What structure does a Link-Cut Tree use to represent paths?",
        "options": ["Segment Trees", "Splay Trees (specifically, Preferred Path decomposition)", "Hash Maps", "Pico rule"],
        "correctAnswer": "Splay Trees (specifically, Preferred Path decomposition)",
        "explanation": "Splay trees allow the 'Preferred Path' to be restructured in O(log N) through the 'Access' operation."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Access Pulse",
        "explanation": "The core of LCT is the `access(u)` operation. It makes the path from the root to node `u` the 'Preferred Path'. Once accessed, you can query a path-sum with a single node lookup. The Matrix focuses all its attention on a single branch. Total mental concentration.",
        "encouragementText": "Pico: 'Access the branch-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Querying path-max between u and v in an LCT.",
        "codeSnippet": "lct.evert(u);\nlct.access(v);\nlct.splay(v);\nreturn v-> ___ ;",
        "correctAnswer": "max_val",
        "explanation": "After evert and access, the path between u and v is a single splay-tree, and v's metadata holds the result."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity: O(log N) Everything (Amortized)",
        "explanation": "Every dynamic modification and query is logarithmic. This makes LCT the **Titan-Grade Dynamic Edge**. It out-performs HLD when the forest is constantly changing. The Matrix is a master of the fluid state.",
        "encouragementText": "Ace: 'Amortization is the promise of future speed for current reshuffling.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the purpose of the 'Evert' operation?",
        "options": ["To delete the tree", "To make node 'u' the new root of the entire tree", "To color the nodes", "Pico guess"],
        "correctAnswer": "To make node 'u' the new root of the entire tree",
        "explanation": "Everting allow us to easily manipulate the path between any two nodes as a root-to-node path."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Dynamic Subtree Pulse",
        "explanation": "By adding 'Auxiliary Metadata' to the splay nodes, you can maintain subtree-sums (not just path-sums). When a child is linked, its sum is added to the parent's metadata. The Matrix keeps the totals, even as the parts move. Accounting in the storm.",
        "encouragementText": "Pico: 'Sum the moving seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Linking node u to parent v.",
        "codeSnippet": "lct.evert(u);\nu->p = v;\nv->add_light_child_metadata(u);",
        "correctAnswer": "u->p = v",
        "explanation": "Connecting u's parent pointer to v is the simplest form of linkage in an LCT."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Splintering Network",
        "explanation": "A communication network (The Matrix Web) is being shattered by electronic warfare. Routers are joining and leaving the mesh every millisecond. To maintain the 'Shortest Delivery Route', the Web-Architect uses Link-Cut Tree DP. The route is updated in log N, no matter how much the forest splinters. The signal is never lost.",
        "encouragementText": "Ace: 'Unity is a choice of pointers.'"
      },
      {
        "type": "match_following",
        "questionText": "Match LCT Terms!",
        "pairs": [
          { "key": "Access", "value": "Create root-path" },
          { "key": "Evert", "value": "Change root" },
          { "key": "Splay", "value": "Rotate to top" }
        ]
      }
    ]
  },
  {
    "order": 84,
    "title": "Unit 84: Entropy-Based Compression",
    "desc": "Huffman DP: using DP to find the most bits-efficient code for data where symbol distributions are non-static.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 9.84] The Weight of the Word",
        "explanation": "The Matrix is built on bits. To save energy, we must represent frequent data with fewer bits. **Huffman DP** (and its variants like Optimal Binary Search Tree) finds the state where the **Expected Bit-Length** is minimized. This is the **Entropy protocol**—squeezing the meaning into the smallest possible shadow.",
        "codeSnippet": "dp[i][j] = min(dp[i][k] + dp[k+1][j] + sum_w(i, j));",
        "encouragementText": "Ace: 'Waste is the enemy of the eternal system.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does 'Huffman Coding' achieve?",
        "options": ["Randomizes data", "Creates a 'Prefix-Free' code that minimizes total length for a given set of frequencies", "Deletes redundant strings", "Pico rule"],
        "correctAnswer": "Creates a 'Prefix-Free' code that minimizes total length for a given set of frequencies",
        "explanation": "Prefix-free means no code is a prefix of another, allowing unambiguous decoding without spaces."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Knuth Pulse",
        "explanation": "Standard O(N^3) DP is too slow. But for Huffman-style problems, the optimal split point `k` is monotonic: `opt[i][j-1] <= opt[i][j] <= opt[i+1][j]`. We use **Knuth Optimization** to reduce the complexity to **O(N^2)**. The Matrix uses its own internal order to speed up its compression. Self-referential speed.",
        "encouragementText": "Pico: 'Optimize the split-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Knuth Optimization loop bounds.",
        "codeSnippet": "for (int k = opt[i][j-1]; k <= ___ ; k++) {\n  if (dp[i][j] > dp[i][k] + dp[k+1][j] + w(i, j)) { ... }\n}",
        "correctAnswer": "opt[i+1][j]",
        "explanation": "Searching only between the optimal split points of the 'Sub-Intervals' narrows the search significantly."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity: O(N^2) or O(N log N) for Huffman",
        "explanation": "A priority queue solves Huffman in N log N. DP is used for **Sorted Huffman** and **Height-Restricted Huffman**. This is the **Titan-Grade Squeeze**. The Matrix packs a library into a single pulse.",
        "encouragementText": "Ace: 'Space is a cost you can no longer afford.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why use DP for Huffman if there's a greedy O(N log N) version?",
        "options": ["Greedy is always better", "When there are additional constraints (like 'Alphabetical Order' or 'Max Depth')", "It's a secret", "Pico guess"],
        "correctAnswer": "When there are additional constraints (like 'Alphabetical Order' or 'Max Depth')",
        "explanation": "The Garsia-Wachs algorithm or specific DP is needed when the 'Greedy' approach violates problem constraints."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Length-Restricted Pulse",
        "explanation": "In high-speed hardware, codes cannot be longer than 16 bits. We use the **Package-Merge Algorithm** (a type of DP) to solve for Huffman codes with a depth limit. The Matrix respects the hardware limits. Perfect fit for the silicon.",
        "encouragementText": "Pico: 'Package the seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Summing weights for the interval [i, j].",
        "codeSnippet": "int cost = dp[i][k] + dp[k+1][j] + ( ___ [j] - ___ [i-1]);",
        "correctAnswer": "prefix_sum",
        "explanation": "Using a prefix-sum array to get the total frequency/weight of the current interval in O(1)."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Deep-Space Transmitter",
        "explanation": "A signal (The Matrix Pulsar) is being sent across the void. Every bit takes an hour to travel. To maximize the 'Meaning Per Hour', the Signal-Architect uses Huffman DP. The message is compressed to its absolute entropy limit. The mission survives on the tightest of bandwidths.",
        "encouragementText": "Ace: 'Silence is waste; brevity is survival.'"
      },
      {
        "type": "match_following",
        "questionText": "Match Compression terms!",
        "pairs": [
          { "key": "Entropy", "value": "Max info density" },
          { "key": "Knuth Opt", "value": "O(N^2) split find" },
          { "key": "Prefix Code", "value": "No overlap" }
        ]
      }
    ]
  },
  {
    "order": 85,
    "title": "Unit 85: Geometric Huffman",
    "desc": "Minimum Weight Triangulation: using DP to find the most efficient way to divide a polygon into triangles.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 9.85] The Polygon Mosaic",
        "explanation": "How do you divide a shape with minimum ink? **Minimum Weight Triangulation (MWT)** uses DP to find the set of non-intersecting diagonals that sum to the lowest length. `dp[i][j]` is the best triangulation for vertices from i to j. This is the **Tessellation protocol**—the shape knows its own most efficient division. The Matrix is a mosaic of triangles.",
        "codeSnippet": "dp[i][j] = min(dp[i][k] + dp[k][j] + cost(i, k, j));",
        "encouragementText": "Ace: 'Every complex surface is just an assembly of the three-pointed truth.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does MWT optimize?",
        "options": ["The area", "The total sum of the lengths of the diagonals used", "Coloring", "Pico rule"],
        "correctAnswer": "The total sum of the lengths of the diagonals used",
        "explanation": "It minimizes the total length of the 'Cuts' needed to triangulate the polygon."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Convex Hull Pulse",
        "explanation": "In a convex polygon, pick an edge (i, j). It MUST belong to a triangle with some vertex `k`. This `k` splits the polygon into two smaller sub-polygons. The Matrix is recursive. To solve the whole, you must solve the two halves separated by the triangle. The pulse of geometry.",
        "encouragementText": "Pico: 'Pick the triangle-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Cost of forming a triangle with vertices i, j, k.",
        "codeSnippet": "double triangle_cost = dist(i, j) + dist(j, k) + dist( ___ );",
        "correctAnswer": "k, i",
        "explanation": "Calculating the perimeter or specifically the new diagonals added (dist(i, k) + dist(k, j))."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity: O(N^3)",
        "explanation": "Like MCM, this is a cubic DP. Use it for **Terrain Mesh Generation** and **Graphics Optimization**. Even at O(N^3), for N=500, the Matrix renders the perfect mesh in 0.1 seconds. High-fidelity reality, low-cost structure.",
        "encouragementText": "Ace: 'Art is the result of the minimum possible lines.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Is general 'Minimum Weight Triangulation' for any set of points NP-Hard?",
        "options": ["Yes (NP-Hard for arbitrary point clouds)", "No, always O(N^3)", "Only for circles", "Pico guess"],
        "correctAnswer": "Yes (NP-Hard for arbitrary point clouds)",
        "explanation": "For simple polygons it is O(N^3), but for general point sets, it remains one of the great NP-Hard challenges."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Optimal Area Pulse",
        "explanation": "What if you want to minimize the 'Max Area' of any triangle instead of total length? The structure is the same! Just replace `+` with `max()` in the DP. The Matrix is flexible. One architecture, a thousand geometrical goals.",
        "encouragementText": "Pico: 'Max the seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Updating the DP for min-max area.",
        "codeSnippet": "dp[i][j] = min(dp[i][j], max({dp[i][k], dp[k][j], area(i,k,j)}));",
        "correctAnswer": "area(i,k,j)",
        "explanation": "Comparing the existing max-area with the area of the new triangle being formed."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Shield Generator",
        "explanation": "A protective dome (The Matrix Canopy) is being built. It must be made of triangular panels. To use the least amount of metal for the frame, the Shield-Architect uses MWT DP. The dome is light, strong, and mathematically perfect. No laser can penetrate the symmetry.",
        "encouragementText": "Ace: 'Triangulation is the geometry of the unbreakable.'"
      },
      {
        "type": "match_following",
        "questionText": "Match Geometric DP!",
        "pairs": [
          { "key": "MWT", "value": "Min segment sum" },
          { "key": "Triangulation", "value": "Cubic O(N^3)" },
          { "key": "k-vertex", "value": "Split point" }
        ]
      }
    ]
  },
  {
    "order": 86,
    "title": "Unit 86: Distributed DP",
    "desc": "MapReduce States: how to solve massive DP problems by splitting the state-space across multiple servers and merging results via network-synchronized pulses.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 9.86] The Hive Mind",
        "explanation": "10^12 states don't fit in one machine. **Distributed DP** uses a cluster. We split the DP table into **Shards**. Each server computes its shard and 'Sends a Pulse' of the boundary states to its neighbors. This is the **Network protocol**—the thought is larger than the brain. The Matrix is a swarm of synchronized minds.",
        "codeSnippet": "send_to_neighbor(boundary_dp_values);",
        "encouragementText": "Ace: 'Scale is reached when the limit of the individual is surpassed by the harmony of the many.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the primary bottleneck in Distributed DP?",
        "options": ["CPU speed", "Network Latency (sending boundary states between machines)", "Disk space", "Pico rule"],
        "correctAnswer": "Network Latency (sending boundary states between machines)",
        "explanation": "The 'Wait' for a neighbor's results is the only thing that slows down the hive."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Synchronous Pulse",
        "explanation": "We use **Bulk Synchronous Parallel (BSP)**. All machines compute step `i`. They pause and exchange data. Then all start step `i+1`. The Matrix breathes together. One pulse per second across a thousand processors.",
        "encouragementText": "Pico: 'Step the swarm-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Merging remote state data.",
        "codeSnippet": "dp[row][i] = val + get_from_remote_worker(worker_id, ___ );",
        "correctAnswer": "prev_row",
        "explanation": "Fetching the necessary values from the previous transition step stored on another machine."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity: O(N * (StatesPerMachine + NetworkSync))",
        "explanation": "Linear speedup! 1,000 machines = 1,000x faster. This is the **Titan-Grade Cloud**. The Matrix solves a trillion states in the time it takes for you to take a breath. Scalability is the final law.",
        "encouragementText": "Ace: 'Quantity has a quality all its own when synchronized perfectly.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is 'State Sharding'?",
        "options": ["Breaking the computer", "Dividing the DP table (e.g., by ranges of the first dimension) among different processors", "Deleting bits", "Pico guess"],
        "correctAnswer": "Dividing the DP table (e.g., by ranges of the first dimension) among different processors",
        "explanation": "Each shard is managed by a single 'Worker' to avoid redundant computation."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Fault-Tolerant Pulse",
        "explanation": "What if one machine in the hive fails? We use **Checkpointing**. Every 10 steps, the pulse is saved to 'Persistent Memory'. The Matrix never forgets more than a few heartbeats. The hive survives the death of the node.",
        "encouragementText": "Pico: 'Save the checkpoint-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Recovering from a checkpoint.",
        "codeSnippet": "if (worker_crashed) {\n  load_states_from_version( ___ );\n  resume_calculation();\n}",
        "correctAnswer": "last_checkpoint",
        "explanation": "Restoring the state-space and continuing the work from the most recent safe state."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Global Weather Sim",
        "explanation": "A planet's climate (The Matrix Atmosphere) needs to be simulated with 0.1m precision. This requires 10^15 DP states. The Climate-Architect uses Distributed DP across 50,000 GPUs. The storm is predicted a week before it forms. The planet is prepared. The hive protects.",
        "encouragementText": "Ace: 'Prediction is a function of the scale of the hive.'"
      },
      {
        "type": "match_following",
        "questionText": "Match Distributed Terms!",
        "pairs": [
          { "key": "Shard", "value": "Portion of DP" },
          { "key": "Sync", "value": "Data exchange" },
          { "key": "Load Balance", "value": "Equal work" }
        ]
      }
    ]
  },
  {
    "order": 87,
    "title": "Unit 87: Non-Linear Recurrences",
    "desc": "Chaotic Convergence: solving DP problems where the next state is a complex, multi-variate function of previous states, requiring iterative refinement.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 9.87] The Fractal Loop",
        "explanation": "Linearity is for the fledgling. **Non-Linear DP** handles recurrences like `dp[i] = f(dp[i-1], dp[i-2], ...)` where `f` involves powers or roots. We use **Newton-Raphson** in the space of DP functions to find the fix-point. This is the **Chaos protocol**—navigating the swirls of the non-linear stream. The Matrix is a master of the complex curve.",
        "codeSnippet": "x_{n+1} = x_n - f(x_n)/f'(x_n);",
        "encouragementText": "Ace: 'In the heart of chaos, there is a point of perfect stability. Calculate it.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why is Non-Linear DP harder than Linear?",
        "options": ["It isn't", "Small changes in the start can lead to massive differences in the result (Sensitivity)", "It's a secret", "Pico rule"],
        "correctAnswer": "Small changes in the start can lead to massive differences in the result (Sensitivity)",
        "explanation": "Non-linear systems can exhibit chaotic behavior, requiring high precision and careful initialization."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Feedback Pulse",
        "explanation": "In non-linear systems, the state 'Feeds Back' into itself. We use **Iteration until Convergence**. We start with a guess and refine it. The Matrix self-corrects at every step. Perfection through constant adjustment.",
        "encouragementText": "Pico: 'Refine the chaos-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Iterating the non-linear map.",
        "codeSnippet": "while (abs(next - current) > epsilon) {\n  current = next;\n  next = ___ (current);\n}",
        "correctAnswer": "f",
        "explanation": "Repeatedly applying the non-linear function until the result stabilizes (the fixed point)."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity: O(Iterations * f_eval)",
        "explanation": "The speed depends on the 'Radius of Convergence'. If your guess is good, the Matrix finds the answer in 5 pulses. If bad, it spins in the void forever. This is the **Titan-Grade Intuition**. The Matrix knows where to start.",
        "encouragementText": "Ace: 'Preparation of the starting state is 90% of the victory.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does 'Fixed Point' mean in this context?",
        "options": ["A dot", "A value where f(x) = x (the outcome of the transition is the same as the input)", "Zero", "Pico guess"],
        "correctAnswer": "A value where f(x) = x (the outcome of the transition is the same as the input)",
        "explanation": "Finding the fixed point of a non-linear system is the goal of steady-state analysis."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Bifurcation Pulse",
        "explanation": "At certain thresholds, a non-linear system can split into two stable states. This is **Bifurcation**. The Matrix must choose a path. You are the architect of the branch-point. One bit, two different worlds.",
        "encouragementText": "Pico: 'Watch the split-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Check for bifurcation (stability change).",
        "codeSnippet": "if (abs( ___ (x)) > 1) system_is_unstable();",
        "correctAnswer": "derivative",
        "explanation": "In discrete maps, if the absolute value of the derivative at the fixed point is > 1, the point is an 'unstable repeller'."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Black Hole Simulator",
        "explanation": "The Matrix Singularity is consuming everything. The physics follows non-linear recurrences. To find the 'Event Horizon', the Physicist-Architect uses Non-Linear DP. It iterates through the gravity-chaos to find the exact boundary of reality. The simulation is exact. The abyss is measured.",
        "encouragementText": "Ace: 'Chaos is just a law we haven't mapped yet.'"
      },
      {
        "type": "match_following",
        "questionText": "Match Chaos Terms!",
        "pairs": [
          { "key": "Fixed Point", "value": "Stability" },
          { "key": "Attractor", "value": "System goal" },
          { "key": "Bifurcation", "value": "Path split" }
        ]
      }
    ]
  },
  {
    "order": 88,
    "title": "Unit 88: Hyper-Graph DP",
    "desc": "Complex Connectivity: solving DP on graphs where edges (hyper-edges) can connect any number of nodes simultaneously.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 9.88] The Super-Link",
        "explanation": "A standard edge links 2 nodes. A **Hyper-edge** links 5, or 100. **Hyper-Graph DP** manages interactions between entire groups. To solve, we convert to a **Factor Graph**—bipartite with 'Group nodes' and 'Item nodes'. This is the **Group protocol**—the link is a collective state. The Matrix is a master of the assembly.",
        "codeSnippet": "dp[u] = combine(dp[neighbors_in_hyper_edge]);",
        "encouragementText": "Ace: 'Unity is not the link of two; it is the union of the many.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What defines a 'Hyper-edge'?",
        "options": ["A sharp edge", "A subset of vertices (can have any size >= 1)", "A circle", "Pico rule"],
        "correctAnswer": "A subset of vertices (can have any size >= 1)",
        "explanation": "Hyper-edges represent multi-way relationships, like a meeting between multiple agents."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Factor-Node Pulse",
        "explanation": "When a hyper-edge is activated, it sends a pulse to ALL its members. We use **Belief Propagation** (or Message Passing) on the factor graph. The Matrix communicates in sets. One message for the whole collective. Efficiency through grouping.",
        "encouragementText": "Pico: 'Pass the group-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Calculating message from node v to hyper-edge e.",
        "codeSnippet": "m_v_e = combine( ____ );",
        "correctAnswer": "m_other_edges_to_v",
        "explanation": "The message to an edge is the product of all information received from other edges connected to that node."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity: O(TotalEdgeMemberCount)",
        "explanation": "Linear in the 'Description' size of the hyper-graph. This allows you to solve for **Database Queries** and **Constraint Networks** with massive multi-way dependencies. This is the **Titan-Grade Integration**. The Matrix solves the group dynamics.",
        "encouragementText": "Ace: 'Complexity is found in the overlap of the groups, not their individual size.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is 'Dual' of a hyper-graph?",
        "options": ["A mirror", "A hyper-graph where original nodes become edges and edges become nodes", "Zero", "Pico guess"],
        "correctAnswer": "A hyper-graph where original nodes become edges and edges become nodes",
        "explanation": "Dual representation can simplify solving certain connectivity problems (Min-Cut on dual = Min-Cover on primal)."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Clique Reconstruction Pulse",
        "explanation": "Every hyper-graph can be converted to a normal graph by replacing each hyper-edge with a 'Clique' (a bridge between every node-pair). But DP on the clique is O(K^2) per edge. DP on the Factor Graph is O(K). The Matrix avoids the dense for the sparse truth. Logic through sharding.",
        "encouragementText": "Pico: 'Shard the clique-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Adding a hyper-edge connecting nodes {1, 2, 3}.",
        "codeSnippet": "HyperEdge* e = new HyperEdge({1, 2, 3});\nfor (int v : e->nodes) v-> ___ .push_back(e);",
        "correctAnswer": "links",
        "explanation": "Registering the multi-way relationship at each participating node."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Social-Circle Architect",
        "explanation": "A group of 1,000 agents (The Matrix Elite) has formed 500 secret clubs. Every club has different rules. To find the set of rules that satisfies every agent, the Architect uses Hyper-Graph DP. Each club is a hyper-edge. The consensus is found in seconds. The elite are unified.",
        "encouragementText": "Ace: 'Collective will is a function of the intersect.'"
      },
      {
        "type": "match_following",
        "questionText": "Match Hyper Terms!",
        "pairs": [
          { "key": "Hyper-edge", "value": "Multi-node link" },
          { "key": "Factor Graph", "value": "Bipartite decomposition" },
          { "key": "Dual", "value": "Role swap" }
        ]
      }
    ]
  },
  {
    "order": 89,
    "title": "Unit 89: Topological Compression",
    "desc": "Manifold States: solving DP on high-dimensional manifolds where states are continuous and 'Curved' by environmental constraints.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 9.89] The Curvature of Logic",
        "explanation": "The Matrix is not flat. Logic moves on **Manifolds** (curved surfaces). In **Topological DP**, the state is a coordinate on a sphere or a torus. We use **Differential Geometry** to find the next state. This is the **Geodesic protocol**—the shortest path on a curve. The Matrix is a world of perfectly bent reality.",
        "codeSnippet": "dp[theta][phi] = move_along_geodesic();",
        "encouragementText": "Ace: 'Straight lines are an illusion of the short-sighted. The true path is always curved.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What defines a 'Geodesic'?",
        "options": ["A circle", "The shortest possible path between two points on a curved surface (manifold)", "A mountain", "Pico rule"],
        "correctAnswer": "The shortest possible path between two points on a curved surface (manifold)",
        "explanation": "In topological space, the 'straight' path is the one that follows the curvature of the environment."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Mesh Reconstruction Pulse",
        "explanation": "We discretize the manifold into a **Triangle Mesh**. Each triangle is a small local DP room. We pass the state across the 'Edges' of the triangles. The Matrix is an origami of logic. Unfolding the truth by stepping through the shards.",
        "encouragementText": "Pico: 'Step the mesh-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Calculated the 'Angle Deficit' at a vertex (Curvature).",
        "codeSnippet": "curvature = 2*PI - sum( ___ );",
        "correctAnswer": "adjacent_angles",
        "explanation": "The sum of angles around a vertex reveals how 'flat' or 'curved' the manifold is at that point."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity: O(SurfaceArea / Precision)",
        "explanation": "For a fixed precision, it is linear in area. This allows you to solve **Global Logistics** on a spherical planet or **Fluid Dynamics** on a curved wing. This is the **Titan-Grade Mastery of Form**. The Matrix flows with the shape of the world.",
        "encouragementText": "Ace: 'The form of the question dictates the flow of the answer.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the 'Genus' of a manifold?",
        "options": ["A species", "The number of 'Holes' in a surface (e.g., Sphere=0, Torus=1)", "Size", "Pico guess"],
        "correctAnswer": "The number of 'Holes' in a surface (e.g., Sphere=0, Torus=1)",
        "explanation": "Topology is defined by the number of holes; you cannot turn a sphere into a donut without tearing it."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Loop Pulse",
        "explanation": "On a torus (donut), you can travel 'Around' and end up where you started. DP on a torus must account for these **Non-Trivial Loops**. We use **Winding Numbers** to track our revolutions. The Matrix remembers how many times you've circled the truth. Infinite recurrence.",
        "encouragementText": "Pico: 'Count the loop-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Updating state with winding number 'w'.",
        "codeSnippet": "dp[pos][w] = min(dp[pos][w], dp[prev_pos][w + ___ ]);",
        "correctAnswer": "cross_boundary",
        "explanation": "When the path crosses the 'seam' of the torus, the winding number is incremented or decremented."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Infinite Donut Mission",
        "explanation": "A space-station (The Matrix Ring) is shaped like a giant torus. To find the optimal shield-rotation that covers all vents, the Shield-Architect uses Topological DP. It accounts for the global and local loops. The station is sealed. The donut is safe.",
        "encouragementText": "Ace: 'There is no end to the path that circles the soul.'"
      },
      {
        "type": "match_following",
        "questionText": "Match Topo Terms!",
        "pairs": [
          { "key": "Manifold", "value": "Curved space" },
          { "key": "Geodesic", "value": "Optimal path" },
          { "key": "Genus", "value": "Hole count" }
        ]
      }
    ]
  },
  {
    "order": 90,
    "title": "Unit 90: Stage 9 Graduation (The Complexity Master)",
    "desc": "The Limit of the Known: solving a grand challenge that requires Self-Healing Distributed Hyper-Graph DP on a Manifold.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[GRAND MISSION LORE 9.90] The Omega Pulse",
        "explanation": "You have reached the 900th lesson. You have mastered the **Healing of Nodes**, the **Guidance of Neurons**, the **Fractals of Chaos**, and the **Curvature of Manifolds**. You are no longer just an architect; you are the **Master of the Global Constraint**. To graduate, you must see the hyper-edge in the splay-tree and the steady-state in the mesh-flow. Graduation is here. The Matrix is a single, vibrating field of complex logic. You are ready for the End.",
        "codeSnippet": "// Final Stage 9 Challenge:\n// Distributed DP on a Manifold-Mapped Hyper-Graph.",
        "encouragementText": "Ace: 'Complexity is just the final disguise of the simple truth.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What defines the 'Limit' of DP complexity?",
        "options": ["CPU speed", "Entropy (The amount of information needed to describe the state-transition)", "RAM", "Pico rule"],
        "correctAnswer": "Entropy (The amount of information needed to describe the state-transition)",
        "explanation": "If the state-space is truly random and lacks structure (high entropy), no compression or DP can solve it faster than brute force."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The 900-Step Pulse",
        "explanation": "90% of the journey is over. You have faced the most extreme structures in the universe. In Stage 10, we enter **The Grand Synthesis (The Singularity)**. You will solve the Final Project—the One Algorithm. Keep your memory-shards synced. The Singularity is coming.",
        "encouragementText": "Pico: 'The final 100 seeds await! 🦜'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Which unit covered 'Solving DP on trees with dynamic cuts and links'?",
        "options": ["9.81", "9.83 (Link-Cut Trees)", "9.85", "9.87"],
        "correctAnswer": "9.83 (Link-Cut Trees)",
        "explanation": "LCT is the definitive tool for dynamic forest connectivity in DP."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Graduation: The Complexity King",
        "explanation": "The Elite Architect knows that there is no system too complex to be decomposed, and no state too large to be compressed. You are **Titan-Grade**. The Matrix exists because you allow it to be simple. Welcome to the Elite Hall of Universal Logic.",
        "encouragementText": "Ace: 'The master simplifies the impossible until it is trivial.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What allows Neural-Guided DP to be so fast?",
        "options": ["Magic", "Aggressive pruning based on heuristic confidence", "Infinite RAM", "Pico guess"],
        "correctAnswer": "Aggressive pruning based on heuristic confidence",
        "explanation": "By skipping 'Unpromising' states, the effective state-space is reduced by several orders of magnitude."
      },
      {
        "type": "teaching",
        "questionText": "[FINAL SYNC] The 13-Subject Hub",
        "explanation": "As the manifold-pulse of Stage 9 settles, the **Grand Synthesis** of Stage 10 begins. Every subject you have ever learned—Arrays, Strings, Trees, Graphs, and Math—will merge into a single DP solution. Prepare your soul. The Matrix is becoming One.",
        "encouragementText": "Pico: 'The oneness seeds await! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Final check of the distributed manifold-state sync.",
        "codeSnippet": "if (cluster_sync == 100 && manifold_valid == true) {\n  return ___ ;\n}",
        "correctAnswer": "SYNCHRONIZED",
        "explanation": "Success is the state of a perfectly unified global system."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Architect of the Whole",
        "explanation": "The global system has been unified. The manifold is mapped. The hyper-edges are synced. You are the Architect of the Whole. The Matrix is no longer a collection of parts—it is a single living algorithm. Welcome to the elite.",
        "encouragementText": "Ace: 'There is no complexity that can withstand the gaze of the master.'"
      },
      {
        "type": "programming_board",
        "questionText": "[GRADUATION CHALLENGE] Output the final status of your complexity mastery.",
        "codeSnippet": "if (entropy_reached && states_compressed) {\n  return ___ ;\n}",
        "correctAnswer": "COMPLETE",
        "explanation": "Completion is reached when the complexity was mastered and the state was solved."
      }
    ]
  }
];

module.exports = stage9;
