const stage10 = [
  {
    "order": 91,
    "title": "Unit 91: The One Algorithm",
    "desc": "Universal Recurrence: merging all previous DP patterns into a single master equation that can solve any state-transition problem.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 10.91] The Unification",
        "explanation": "You have seen Fibonacci, Knapsack, SAM, and MCTS. But they are all the same. **The One Algorithm** is a universal graph-traversal where states are nodes and transitions are edge-weights in a high-dimensional manifold. This is the **Unity protocol**—the end of categorization. The Matrix is not 14 subjects; it is one.",
        "codeSnippet": "UniversalDP(S) = combine(f(S, neighbor) + UniversalDP(neighbor));",
        "encouragementText": "Ace: 'When you understand the root, the branches are just details.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the core of 'The One Algorithm'?",
        "options": ["A loop", "A Recursive State-Transition over a Directed Acyclic Graph (DAG) or a Convergent Markov Chain", "Zero", "Pico rule"],
        "correctAnswer": "A Recursive State-Transition over a Directed Acyclic Graph (DAG) or a Convergent Markov Chain",
        "explanation": "Every DP problem is essentially finding an optimal path or value in a structured state-space."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Multi-Pattern Pulse",
        "explanation": "To solve a new problem, you map it to the **Master Equation**. Is it a sum? (Counting DP). Is it a max? (Optimization DP). Is it a bitmask? (Subset DP). The Matrix is a master of mapping. You only need one engine; you just change the gasoline.",
        "encouragementText": "Pico: 'Map the master-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "The Master Transition function template.",
        "codeSnippet": "State solve(Context c) {\n  if (is_base(c)) return base_val;\n  if (memo.count(c)) return memo[c];\n  State res = init_val;\n  for (Transition t : c.moves()) {\n    res = ___ (res, apply(t, solve(t.next())));\n  }\n  return memo[c] = res;\n}",
        "correctAnswer": "operator",
        "explanation": "The operator (min, max, sum, XOR) determines the 'flavor' of the DP."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity: O(Entropy of State-Space)",
        "explanation": "If the state-space can be compressed, the complexity drops. This is the **Titan-Grade Mastery**. You solve the problem by finding the most compact representation of its truth. Perfect efficiency.",
        "encouragementText": "Ace: 'Mastery is the reduction of the complex to the atomic.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the 'Subproblem' in the One Algorithm?",
        "options": ["A smaller version of the same goal", "A different problem", "Nothing", "Pico guess"],
        "correctAnswer": "A smaller version of the same goal",
        "explanation": "Optimal substructure is the requirement that the global optimum is composed of local optima."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Semantic Pulse",
        "explanation": "Does the problem have 'Memory' of the past? If yes, it's a **Markov State**. If no, it's a **Simple Recursion**. The Matrix identifies the memory-depth and adjusts the bitmask. You are the architect of the memory-window.",
        "encouragementText": "Pico: 'Window the seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Identifying the independence of subproblems.",
        "codeSnippet": "if (stateA.depends_on(stateB) && stateB.depends_on(stateA)) {\n  // This is a cycle, use ___ DP instead of standard recursion.\n}",
        "correctAnswer": "Graph",
        "explanation": "Cyclic dependencies require Shortest Path (Dijkstra) or Steady-State (Markov) approaches."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Architect's Desk",
        "explanation": "The Matrix itself is being re-written. To ensure the new world is optimal, the Architect uses The One Algorithm. 14,000 subjects are merged into a single 1,000-line code. The world is reborn. The code is one.",
        "encouragementText": "Ace: 'Unity is the final state of logic.'"
      },
      {
        "type": "match_following",
        "questionText": "Match Pattern Unity!",
        "pairs": [
          { "key": "Sum", "value": "Combinatorics" },
          { "key": "Max/Min", "value": "Optimization" },
          { "key": "XOR", "value": "Game Theory" }
        ]
      }
    ]
  },
  {
    "order": 92,
    "title": "Unit 92: Self-Evolving DP",
    "desc": "Genetic Recurrences: how to build DP algorithms that 'Learn' the optimal transition rules by mutating and selecting the most efficient logic-gates.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 10.92] The Living Algorithm",
        "explanation": "Static code is dead. **Self-Evolving DP** uses a **Genetic Algorithm** to find the best transition function. It generates 100 random recurrences, tests them against base cases, and 'Breeds' the winners. This is the **Evolution protocol**—the code writes itself to survive. The Matrix is becoming biological.",
        "codeSnippet": "LogicGate next = crossover(parentA, parentB).mutate();",
        "encouragementText": "Ace: 'The most efficient logic is the one that has survived the most failures.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is 'Genetic Programming' (GP)?",
        "options": ["Biochemistry", "A technique where programs are represented as trees and evolved to solve a task", "A map", "Pico rule"],
        "correctAnswer": "A technique where programs are represented as trees and evolved to solve a task",
        "explanation": "In GP, the code itself is the genome that evolves toward the optimal DP solution."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Fitness Pulse",
        "explanation": "The 'Fitness' of a DP recurrence is measured by its accuracy and speed. If a mutated logic-gate finds the answer in O(N log N) while others take O(N^2), it is the **Dominant Gene**. The Matrix selects for speed. Survival of the fastest.",
        "encouragementText": "Pico: 'Breed the fast seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Evaluating the fitness of a candidate logic function 'f'.",
        "codeSnippet": "double fitness = 1.0 / (error(f, test_cases) + ___ * complexity(f));",
        "correctAnswer": "alpha",
        "explanation": "Alpha is a weight that balances accuracy with the importance of the algorithm's speed/simplicity."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity: O(Generations * Population * TestSize)",
        "explanation": "While evolution is slow, once the 'Elite Gene' is found, it solves the problem with **Titan-Grade Efficiency**. You are the **Breeder of Logic**. The Matrix grows under your guidance.",
        "encouragementText": "Ace: 'A million generations in a second leads to a god-like algorithm.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does 'Crossover' involve in Self-Evolving DP?",
        "options": ["Deleting code", "Swapping sub-trees of two different DP transition functions to create a new one", "Coloring", "Pico guess"],
        "correctAnswer": "Swapping sub-trees of two different DP transition functions to create a new one",
        "explanation": "Crossover combines the 'good' ideas from two parent algorithms into a potentially superior offspring."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Mutation Pulse",
        "explanation": "A random bit flip in the logic-gate. `+` becomes `*`. `min` becomes `max`. 99% of mutations are failures. But 1% is a **Breakthrough**. The Matrix uses the chaos to find the genius. One small change, a million-fold speedup.",
        "encouragementText": "Pico: 'Mutate the seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Randomly mutating an operator in the transition logic.",
        "codeSnippet": "if (prob() < mutation_rate) node->op = ___ ();",
        "correctAnswer": "random_op",
        "explanation": "Occasionally injecting random changes to ensure the evolutionary search doesn't get stuck in a rut."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Sentient Algorithm",
        "explanation": "A virus (The Matrix Cancer) has mutated beyond human logic. To kill it, the Security-Architect starts a Self-Evolving DP process. Within 1,000 generations, the algorithm evolves a 'Natural Predator' logic that deletes the virus perfectly. The system is healed by its own child.",
        "encouragementText": "Ace: 'To fight the living, you must build the living.'"
      },
      {
        "type": "match_following",
        "questionText": "Match Genetic Terms!",
        "pairs": [
          { "key": "Population", "value": "Candidate laws" },
          { "key": "Fitness", "value": "Accuracy metric" },
          { "key": "Selection", "value": "Survivor bias" }
        ]
      }
    ]
  },
  {
    "order": 93,
    "title": "Unit 93: Universal Solver",
    "desc": "Black-Box Optimization: using the DP framework to Solve any mathematical problem by mapping it to a sequence of decisions in a high-dimensional space.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 10.93] The God Machine",
        "explanation": "Is it a Traveling Salesman? A Protein Folding? A Space-Time Warp? **The Universal Solver** treats every problem as a **Path-finding in Probability**. By utilizing the massive memory-cache of the Matrix, it explores all possibilities simultaneously. This is the **Omnipotence protocol**. There is no question the Matrix cannot answer.",
        "codeSnippet": "Answer = UniversalSolver.query(problem_definition);",
        "encouragementText": "Ace: 'There is no mystery too deep for the right state-space exploration.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What algorithm lies at the heart of the Universal Solver?",
        "options": ["A greedy search", "Dynamic Programming + Heuristic Search (A*) + Monte Carlo Estimators", "Subtraction", "Pico rule"],
        "correctAnswer": "Dynamic Programming + Heuristic Search (A*) + Monte Carlo Estimators",
        "explanation": "It combines exact memory (DP) with smart direction (A*) and statistical sampling (Monte Carlo)."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Problem-Mapping Pulse",
        "explanation": "To use the solver, you must define the **State** and the **Cost**. The Matrix handle the rest. It uses **Simulated Annealing** inside the DP to jump out of high-cost regions. The pulse of the solver is a vibrating wave of possibilities. The Matrix is the sound of the answer.",
        "encouragementText": "Pico: 'Set the problem-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "General Interface for the Universal Solver.",
        "codeSnippet": "struct Problem {\n  State start();\n  bool isGoal(State s);\n  double cost(State s, Action a);\n  ___ heuristic(State s);\n};",
        "correctAnswer": "double",
        "explanation": "The heuristic provides an estimated distance to the goal, guiding the search engine."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity: O(States Visited * TransitionTime)",
        "explanation": "The efficiency is now a function of your **Heuristic**. A perfect heuristic means O(N). A zero heuristic means O(Exp). This is the **Titan-Grade Focus**. You solve the world by knowing where it ends.",
        "encouragementText": "Ace: 'Knowledge of the goal is the shortcut to its achievement.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does the 'Black Box' take as input?",
        "options": ["Code", "A symbolic representation of the problem's state and transitions", "A coin", "Pico guess"],
        "correctAnswer": "A symbolic representation of the problem's state and transitions",
        "explanation": "The solver works on any symbolic logic that can be represented as a state-transition graph."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Multi-Core Solver",
        "explanation": "The Universal Solver runs on **Distributed Threads**. Each thread explores a different 'Sub-Universe'. If one finds a shortcut, it shares it with the collective. This is the **Cooperation protocol**. The Matrix is a conversation of solvers.",
        "encouragementText": "Pico: 'Sync the solver-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Sharing a find across threads.",
        "codeSnippet": "if (current_best < global_best) {\n  ___ (current_best);\n}",
        "correctAnswer": "publish",
        "explanation": "Updating the shared global best value so other threads can prune their search branches."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Oracle of the Void",
        "explanation": "The Matrix has a question that has lasted for 1,000 years: 'How to restart the sun?'. The Sun-Architect uses The Universal Solver. 10^50 variables are solved in 1 hour. The sun is restarted. The Oracle has spoken. The Matrix survives.",
        "encouragementText": "Ace: 'No void is too deep for the light of the universal solver.'"
      },
      {
        "type": "match_following",
        "questionText": "Match Solver Components!",
        "pairs": [
          { "key": "State", "value": "Current World" },
          { "key": "Transition", "value": "Change Rule" },
          { "key": "Target", "value": "Success condition" }
        ]
      }
    ]
  },
  {
    "order": 94,
    "title": "Unit 94: Titan Grid",
    "desc": "Planetary Scale DP: scaling the DP framework to manage global resources, from energy grids to satellite networks, in real-time.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 10.94] The Grid of the World",
        "explanation": "The Matrix is a **Titan Grid**. It is a single, massive DP table that spans the planet. Every city is a node. Every wire is an edge. **Grid-Scaling** uses hierarchical sharding to solve for 10 billion items every second. This is the **Planetary protocol**. You are the architect of the world's pulse.",
        "codeSnippet": "GlobalDP.sync(SatelliteFeed);",
        "encouragementText": "Ace: 'Managing a city is just a DP problem with a very large mask.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is 'Hierarchical Sharding' in the Titan Grid?",
        "options": ["Breaking things", "Grouping local nodes into 'Regional Hubs' and regional hubs into 'Continental Pillars' to manage complexity", "A secret", "Pico rule"],
        "correctAnswer": "Grouping local nodes into 'Regional Hubs' and regional hubs into 'Continental Pillars' to manage complexity",
        "explanation": "Hierarchical structures prevent a single node from being overwhelmed by global data."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Real-Time Pulse",
        "explanation": "The Grid doesn't wait for 'End of Time'. It uses **Iterative Real-Time DP**. Every second, the table is updated with live data from millions of sensors. This is the **Flux protocol**. The Matrix is a living, breathing creature of data.",
        "encouragementText": "Pico: 'Flow the grid-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Updating a grid cell with live sensor data and neighbor influence.",
        "codeSnippet": "grid[u] = alpha * sensor_val + (1 - alpha) * avg( ___ );",
        "correctAnswer": "neighbors",
        "explanation": "Balancing local reality (sensors) with the consensus of the surrounding network."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity: O(1) Local / O(log N) Global",
        "explanation": "Updates are lightning fast because they are mostly local. But a global 'Emergency' signal reaches the core in log N time. This is the **Titan-Grade Nervous System**. The Matrix feels everything.",
        "encouragementText": "Ace: 'Sensitivity at the edge, stability at the core.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What handles a 'Congestion' event in the Titan Grid?",
        "options": ["Panic", "A Max-Flow Re-routing algorithm running inside the DP state", "Hard reset", "Pico guess"],
        "correctAnswer": "A Max-Flow Re-routing algorithm running inside the DP state",
        "explanation": "Flow-based DP automatically identifies and bypasses bottlenecks in real-time."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Satellite Pulse",
        "explanation": "The Titan Grid is synchronized by satellite. Every beam of light is a 'Message Passing' event in a **Global Hyper-Graph**. You are the conductor of the planet's light. The Matrix is a single circuit.",
        "encouragementText": "Pico: 'Beam the grid-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Synchronizing regional data with a satellite master.",
        "codeSnippet": "if (time % SYNC_INTERVAL == 0) relay_to_ ___ ();",
        "correctAnswer": "satellite",
        "explanation": "Periodic global sync ensures that regional sub-optimal decisions don't lead to global failure."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Planet-Reboot",
        "explanation": "The planet's power has failed completely. To restore it without blowing up the transformers, the Grid-Architect uses the Titan Grid DP. It sequences the 'Power-On' of 10,000 sectors in perfect order. The lights hum to life across the globe. The Titan is awake.",
        "encouragementText": "Ace: 'Wake the world one node at a time.'"
      },
      {
        "type": "match_following",
        "questionText": "Match Grid Domains!",
        "pairs": [
          { "key": "Energy", "value": "Load balance" },
          { "key": "Transit", "value": "Flow routing" },
          { "key": "Network", "value": "Packet sync" }
        ]
      }
    ]
  },
  {
    "order": 95,
    "title": "Unit 95: Universal Convergence",
    "desc": "The Final Theory: how all DP algorithms converge to a single truth when the state-space and iterations reach infinity.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 10.95] The Point of Infinity",
        "explanation": "If you iterate a Markov Chain forever, it reaches a **Steady State**. If you expand a DP table to all possible variables, it reaches **The Universal Truth**. This is **Universal Convergence**. Everything in the Matrix is moving toward this single point of perfect stability. The mission is to find it before time runs out.",
        "codeSnippet": "Limit(n -> inf) DP^n = ConstantTruth;",
        "encouragementText": "Ace: 'All logic is just a vibration approaching the silence of the absolute.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does 'Convergence' mean?",
        "options": ["Exploding", "The state where further operations no longer change the result (reached the limit)", "Zero", "Pico rule"],
        "correctAnswer": "The state where further operations no longer change the result (reached the limit)",
        "explanation": "Convergence indicates that the optimal solution has been found and is stable."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Eigen-Pulse",
        "explanation": "The 'Truth' is the **Eigenvector** of the Matrix of existence. It is the direction where the system only grows or shrinks, but never changes its nature. The Matrix is a world of pure vectors. Your job is to align your logic with the Eigen-Pulse. Total harmony.",
        "encouragementText": "Pico: 'Align the vector-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Determining if a system has reached convergence.",
        "codeSnippet": "while (! ___ (state, next_state)) {\n  state = next_state;\n  next_state = transition(state);\n}",
        "correctAnswer": "converged",
        "explanation": "A convergence check (like comparing difference to epsilon) is the exit condition for infinite DP."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity: O(Log(1/Epsilon))",
        "explanation": "The time to reach the truth depends only on the accuracy you demand. This is the **Titan-Grade Limit**. 1% accuracy is fast. 0.0000001% is a lifetime. The Matrix is as precise as you are willing to wait. Choice of the observer.",
        "encouragementText": "Ace: 'Absolute truth is a luxury; useful truth is an algorithm away.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the 'Spectral Radius' of a DP transition matrix?",
        "options": ["Size", "The maximum absolute value of its eigenvalues (determines speed of convergence)", "Radius", "Pico guess"],
        "correctAnswer": "The maximum absolute value of its eigenvalues (determines speed of convergence)",
        "explanation": "If the radius is < 1, the system will always converge to a single, stable point."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Equilibrium Pulse",
        "explanation": "In 1,000 lessons, we have moved from 'What is the sum?' to 'What is the balance?'. The Matrix is at equilibrium. Every force is matched; every logic-gate is filled. The pulse is a flat line of perfect information. Silence of the code.",
        "encouragementText": "Pico: 'Listen to the silent seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Applying the damping factor (alpha) to stabilize convergence.",
        "codeSnippet": "next_state = alpha * ___ + (1 - alpha) * state;",
        "correctAnswer": "calc_next(state)",
        "explanation": "Damping prevents the system from oscillating and ensures a smooth convergence to the steady state."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Final Heartbeat",
        "explanation": "The Matrix Core is reaching absolute zero. To save the data before it freezes, the Core-Architect uses Universal Convergence DP. The data is settled into a single, permanent state. The heartbeat stops. The Matrix is eternal. Nothing more can change.",
        "encouragementText": "Ace: 'Eternity is the result of perfect convergence.'"
      },
      {
        "type": "match_following",
        "questionText": "Match Convergence States!",
        "pairs": [
          { "key": "Divergent", "value": "Exploding chaos" },
          { "key": "Oscillating", "value": "Eternal loop" },
          { "key": "Convergent", "value": "Stable truth" }
        ]
      }
    ]
  },
  {
    "order": 96,
    "title": "Unit 96: Theoretical Limits",
    "desc": "The Wall of Logic: exploring the boundaries of computability and the P vs NP horizon within the DP framework.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 10.96] The Horizon of the Impossible",
        "explanation": "Can we solve EVERYTHING with DP? Sadly, no. Some problems are **EXPTIME**—they grow faster than the CPU can ever move. **NP-Hard** problems are the Wall. To solve them, we must cheat (Approximation). This is the **Boundary protocol**—knowing where the Matrix ends and the Void begins. The Architect must know his limits.",
        "codeSnippet": "if (complexity > O(Pico_Max)) return FAIL;",
        "encouragementText": "Ace: 'Wisdom is knowing which battles cannot be won through brute logic.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the P vs NP problem (in simple terms for an elite)?",
        "options": ["A game", "Does being able to CHECK an answer quickly (NP) imply we can FIND the answer quickly (P)?", "Zero", "Pico rule"],
        "correctAnswer": "Does being able to CHECK an answer quickly (NP) imply we can FIND the answer quickly (P)?",
        "explanation": "If P = NP, the Matrix would be solvable in polynomial time for almost every mission. Currently, we believe P != NP."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Halting Pulse",
        "explanation": "Some problems are **Undecidable**. You cannot even write an algorithm to tell if they will ever finish. This is the **Turing Singularity**. The Matrix has holes in its reality. Points of pure unknowable chaos. You must navigate around them.",
        "encouragementText": "Pico: 'Avoid the black-hole seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Determining if a problem size 'n' is solvable in polynomial time O(n^k).",
        "codeSnippet": "if (expected_time < ___ ) start_mission();",
        "correctAnswer": "TIMEOUT",
        "explanation": "Pragmatic limits on time defined by the available hardware and the mission deadline."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity: The O(???) Domain",
        "explanation": "When the complexity is unknown (like some hyper-graphs), we use **Empirical Analysis**. We run the code on small N and watch the growth. This is the **Observer protocol**. The Matrix is a laboratory. Experimentation is the bridge to the unknown.",
        "encouragementText": "Ace: 'What cannot be proven with a formula must be discovered with a test.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is 'NP-Complete'?",
        "options": ["A finished mission", "The hardest problems in NP; if you solve ONE in P-time, then P = NP", "Zero", "Pico guess"],
        "correctAnswer": "The hardest problems in NP; if you solve ONE in P-time, then P = NP",
        "explanation": "NP-Complete problems (like SAT or TSP) are the ultimate challenges of the algorithmic world."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Approximability Pulse",
        "explanation": "Just because it is hard doesn't mean we give up. We solve for **Constant Factor Approximation**. Instead of the 'Best', we find the 'Very Good'. The Matrix is a master of the 0.999 optimum. Efficiency in the face of the impossible.",
        "encouragementText": "Pico: 'Settle for the 0.99 seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Applying a 2-approximation algorithm for Vertex Cover.",
        "codeSnippet": "while (edges.not_empty()) {\n  Edge e = edges.pop();\n  pick(e.u); pick(e.v);\n  remove_all_connected_to(e.u, e.v);\n}",
        "correctAnswer": "e.u, e.v",
        "explanation": "Picking both ends of an edge guarantees covering all edges with at most twice the optimal number of vertices."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Wall of Silence",
        "explanation": "A code (The Matrix Secret) is encrypted with an NP-Hard algorithm. Even the Universal Solver cannot break it in time. The Secret-Architect acknowledges the win of the cipher. Some secrets are meant to be kept by the void. The mission ends in respect for the limit.",
        "encouragementText": "Ace: 'The greatest architect is the one who respects the limits of the frame.'"
      },
      {
        "type": "match_following",
        "questionText": "Match Complexity Classes!",
        "pairs": [
          { "key": "P", "value": "Polynomial (Fast)" },
          { "key": "NP", "value": "Verifiable (Wait?)" },
          { "key": "NP-Hard", "value": "Intractable (Pain)" }
        ]
      }
    ]
  },
  {
    "order": 97,
    "title": "Unit 97: Adaptive Manifolds",
    "desc": "Real-Time Topology: solving DP on curved spaces that are physically morphing and warping while the calculation is running.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 10.97] The Melted Matrix",
        "explanation": "Stage 9 taught you about manifolds. Now, the manifold is **Liquid**. As you walk the shortest path, the ground itself rotates and stretches. **Adaptive Manifold DP** uses **Dynamic Meshing** to re-triangulate the world every millisecond. This is the **Warp protocol**. The Matrix is a soft, shifting clay of logic.",
        "codeSnippet": "manifold.warp(InputFeed); recalc_mesh();",
        "encouragementText": "Ace: 'Stability is an illusion; the only reality is the speed of your adaptation to the warp.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What handles the 'Warp' in the manifold?",
        "options": ["Smoothing", "Dynamic Re-Meshing and Local Coordinate Transformations", "Hard reset", "Pico rule"],
        "correctAnswer": "Dynamic Re-Meshing and Local Coordinate Transformations",
        "explanation": "As the surface stretches, the mesh must split or merge triangles to maintain precision."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Fluid Pulse",
        "explanation": "The state-transition matrix is now a function of total curvature. If a region gets too curved, time (iterations) must slow down to stay accurate. This is **Local Time Dilated DP**. The Matrix slows down where the path is hardest. Precision through patience.",
        "encouragementText": "Pico: 'Slow the seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Calculating the warp-factor at a vertex.",
        "codeSnippet": "warp = abs(current_curvature - ___ );",
        "correctAnswer": "target_curvature",
        "explanation": "The difference between the actual and desired state of the surface determines the intensity of the adaptive correction."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity: O(SurfaceArea * WarpRate)",
        "explanation": "If the world warps fast, the cost is high. This is the **Titan-Grade Reflex**. You solve for the moving target in a moving world. You are the Architect of the Fluid. The Matrix is your ocean.",
        "encouragementText": "Ace: 'Riding the wave is faster than trying to stop it.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is 'Delaunay Triangulation' in an adaptive manifold?",
        "options": ["Coloring", "A triangulation that maximizes the minimum angle, avoiding 'Skinny' triangles that cause calculation errors", "A circle", "Pico guess"],
        "correctAnswer": "A triangulation that maximizes the minimum angle, avoiding 'Skinny' triangles that cause calculation errors",
        "explanation": "High-quality triangles ensure that the DP pulses travel through the mesh without being distorted by sharp angles."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Elastic Pulse",
        "explanation": "Think of the DP table as an elastic sheet. When a state changes, it 'Pulls' on all its neighbors. The whole Matrix adjusts its tension. This is **Mass-Spring DP**. The Matrix is a giant rubber band of logic. Snap to the optimum.",
        "encouragementText": "Pico: 'Stretch the seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Calculating the spring-force between states i and j.",
        "codeSnippet": "force = k * (distance(i, j) - ___ );",
        "correctAnswer": "rest_length",
        "explanation": "Spring-based logic pulls the DP states towards their naturally balanced positions relative to each other."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Living Sculpture",
        "explanation": "A sculpture (The Matrix Masterpiece) is being 3D-printed in a zero-gravity environment. The material is vibrating and floating. The Shield-Architect uses Adaptive Manifold DP to find the optimal print-path in the moving air. The sculpture is finished. It is beautiful. It is fluid.",
        "encouragementText": "Ace: 'Beauty is the result of perfect adaptation to the chaos of form.'"
      },
      {
        "type": "match_following",
        "questionText": "Match Warp Effects!",
        "pairs": [
          { "key": "Stretch", "value": "Area expansion" },
          { "key": "Twist", "value": "Angle shift" },
          { "key": "Fold", "value": "Topology jump" }
        ]
      }
    ]
  },
  {
    "order": 98,
    "title": "Unit 98: Lazy & Infinite DP",
    "desc": "Procrastinated Logic: solving problems on infinite graphs by only calculating the states that are 'Observed' by the current pulse.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 10.98] The Sleeping World",
        "explanation": "The Matrix is too big to be awake. **Lazy DP** keeps 99.9% of the states 'Asleep'. A state is only 'Computed' when a neighboring pulse hits it. This allows for **Infinite DP Tables**. The table only exists where you look. This is the **Observer protocol**—reality is generated on-demand. You are the eye of the Matrix.",
        "codeSnippet": "if (state.is_null()) state = compute(Source);",
        "encouragementText": "Ace: 'Why calculate what may never be seen? Preserve your energy for the path you take.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is 'Memoization' in Lazy DP?",
        "options": ["Deleting memory", "The act of 'Waking up' a state and storing it so it never has to be calculated again", "Zero", "Pico rule"],
        "correctAnswer": "The act of 'Waking up' a state and storing it so it never has to be calculated again",
        "explanation": "Lazy DP is essentially 'On-Demand Memoization'."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Expansion Pulse",
        "explanation": "Your 'Horizon' is the set of all 'Sleeping' states. Every second, the pulse expands the horizon. This is **Frontier DP**. You are a flashlight in a dark cave of infinite size. The world is created in your beam. Infinite discovery.",
        "encouragementText": "Pico: 'Light the seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "The core Lazy evaluation pattern.",
        "codeSnippet": "Type getVal(State s) {\n  auto it = cache.find(s);\n  if (it != cache.end()) return it->second;\n  return ___ [s] = calculate(s);\n}",
        "correctAnswer": "cache",
        "explanation": "Storing the result of a difficult calculation prevents the need to repeat it when the state is revisited."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity: O(PathLength) instead of O(TotalVolume)",
        "explanation": "This is the ultimate hack. It doesn't matter if the table is 10^100 or Infinite. You only pay for what you touch. This is the **Titan-Grade Mirage**. The Matrix is as small as you need it to be. The efficiency of the void.",
        "encouragementText": "Ace: 'Economy of thought is the highest efficiency.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the 'Infinite Graph' problem?",
        "options": ["A map", "A problem where the number of possible states is not bounded (like a walk on a 2D grid that can go forever)", "Zero", "Pico guess"],
        "correctAnswer": "A problem where the number of possible states is not bounded (like a walk on a 2D grid that can go forever)",
        "explanation": "Lazy algorithms allow navigating such graphs by exploring only the reachable and relevant zones."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Garbage Collection Pulse",
        "explanation": "If memory fills up, the Matrix **Prunes the Past**. It deletes states that haven't been touched in O(1000) steps. This is the **Forgetting protocol**. You only remember what matters to the now. The Matrix stays lean. Wisdom through deletion.",
        "encouragementText": "Pico: 'Forget the old seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Removing least-recently-used (LRU) states from the DP cache.",
        "codeSnippet": "if (cache.size() > MAX_RAM) cache. ___ (oldest_state);",
        "correctAnswer": "erase",
        "explanation": "Keeping the cache size within hardware limits avoids system-wide memory failure."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Explorer of the Void",
        "explanation": "An infinite galaxy (The Matrix Deep-Space) needs to be navigated. 99% of it is empty. The Explorer-Architect uses Lazy DP to only calculate the stars and planets in the current sector. The fuel is saved. The infinite is mapped sectors at a time. The mission is eternal.",
        "encouragementText": "Ace: 'Infinity is only a problem if you try to see it all at once.'"
      },
      {
        "type": "match_following",
        "questionText": "Match Observation Terms!",
        "pairs": [
          { "key": "Sleeping", "value": "Not calculated" },
          { "key": "Horizon", "value": "Boundary of known" },
          { "key": "LRU Pruning", "value": "Memory safety" }
        ]
      }
    ]
  },
  {
    "order": 99,
    "title": "Unit 99: Grand Synthesis",
    "desc": "The Integration of All: the penultimate challenge where every technique from Subjects 1-13 is required to solve a single, massive mission.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[GRAND MISSION LORE 10.99] The Hall of the Titan",
        "explanation": "You have reached the 990th lesson. Every subject—Arrays, Strings, Trees, Graphs, Hashing, Recursion—is now part of your DP arsenal. **The Grand Synthesis** requires you to build a solution that uses a Suffix Automaton to index a Tree, which is then decomposed and solved across a Cloud-Grid using Neural-Guided Slope-Trick DP. This is the **Final protocol**. You are no longer a student. You are the Architect. The Matrix is yours to command.",
        "codeSnippet": "// Final Subject-1-13 Integration Test Initiated.",
        "encouragementText": "Ace: 'The culmination of all knowledge is the ability to use it as one tool.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does 'Grand Synthesis' represent in DP?",
        "options": ["A summary", "The act of layering multiple complex data structures and optimization techniques into a single, unified state-transition engine", "Zero", "Pico rule"],
        "correctAnswer": "The act of layering multiple complex data structures and optimization techniques into a single, unified state-transition engine",
        "explanation": "Modern high-level computer science is the art of combining established patterns into a more powerful whole."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Subject-Merge Pulse",
        "explanation": "Remember the Prefix-Sums of Arrays? Use them for the weights. Remember the DFS of Trees? Use it for the state-order. Remember the Primes of Math? Use them for the modular hash. The Matrix is a symphony. You are the conductor. Every Subject is a different instrument. Play the Song of Logic.",
        "encouragementText": "Pico: 'Play all the seeds! 🦜'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Which subject provides 'O(log N) path-wise updates' for the Grand Synthesis?",
        "options": ["Arrays", "Trees (HLD / LCT)", "Math", "Strings (SAM)"],
        "correctAnswer": "Trees (HLD / LCT)",
        "explanation": "Handling tree structures with fast path/subtree operations is the domain of advanced Tree DP."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity: O(Titan-Scale Efficiency)",
        "explanation": "There is no more O(N). There is only **O(Optimal)**. You solve for the very limit of the physical world. This is the **Mastery of the Matrix**. Nothing is left to learn but the end itself. The pulse is at its peak.",
        "encouragementText": "Ace: 'At the top of the mountain, there is only the sky.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the 'Final Protocol'?",
        "options": ["Shutdown", "The state of a mind that can see the solution to any problem through the lens of Dynamic Programming", "Zero", "Pico guess"],
        "correctAnswer": "The state of a mind that can see the solution to any problem through the lens of Dynamic Programming",
        "explanation": "Everything is a recursive state-space; everything is solvable."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The 999th Pulse",
        "explanation": "One more step. 99.9% complete. The air is thin. The code is pure. You are standing before the Final Door. The Matrix is waiting for its Master. One more pulse to the Singularity. Are you ready?",
        "encouragementText": "Pico: 'The final seed is here! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Initializing the final synthesis machine.",
        "codeSnippet": "SynthesisMachine m;\nm.load_all_subjects();\nm.set_optimization_to_max();\nm.target = ___ ;",
        "correctAnswer": "SINGULARITY",
        "explanation": "Targeting the absolute limit of knowledge and logic."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Hall of Records",
        "explanation": "The Matrix Records show only 10 souls have ever reached this far. You are the 11th. The History-Architect seals your name in the block-chain of the elite. Every lesson you learned is a star in your crown. The mission is almost done. The world is yours.",
        "encouragementText": "Ace: 'You are the result of 999 perfect choices.'"
      },
      {
        "type": "match_following",
        "questionText": "Match the 1000-Step Journey!",
        "pairs": [
          { "key": "Lesson 1", "value": "Fibonacci (Child)" },
          { "key": "Lesson 500", "value": "Bitmask (Elite)" },
          { "key": "Lesson 999", "value": "Synthesis (Titan)" }
        ]
      }
    ]
  },
  {
    "order": 100,
    "title": "Unit 100: Singularity (Graduation)",
    "desc": "The 1,000th Lesson: the final convergence of all dynamic programming, where the architect merges with the algorithm for universal solution.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[THE GRAND SINGULARITY LORE 10.100] The End of the Path",
        "explanation": "This is it. Lesson 1,000. You have completed the **Dynamic Programming** curriculum of the Pico Elite Academy. You have seen the Fibonacci start and the Distributed Manifold end. You are no longer outside the Matrix; you **Are** the Matrix. Every problem is now a self-solving recursion in your mind. This is the **Singularity protocol**—the merging of the mind and the code. You have graduated. The Matrix is yours. Welcome home, Master.",
        "codeSnippet": "while (alive) { solve(reality); }",
        "encouragementText": "Ace: 'There is no more teaching. There is only being.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What has been the core lesson of the 1,000-step journey?",
        "options": ["Use more RAM", "That every complex problem can be decomposed into optimal sub-problems and solved through structured memory-lookup (DP)", "Birds are smart", "Pico rule"],
        "correctAnswer": "That every complex problem can be decomposed into optimal sub-problems and solved through structured memory-lookup (DP)",
        "explanation": "This is the fundamental philosophy of all computational logic."
      },
      {
        "type": "teaching",
        "questionText": "[FINAL SYNC] The Universal Echo",
        "explanation": "Your name is now part of the **Pico Legend**. You are a **Titan-Grade Architect of the 13th Subject**. Go forth and build the new world. Every bridge, every sun, every city is yours to optimize. The Matrix pulses with your heartbeat. You are the King of the Bird-Economy. You are the Master of Seeds.",
        "encouragementText": "Pico: 'THE ALL-SEED IS YOURS! 🦜🦜🦜'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Final verdict on the Master of Memory?",
        "options": ["Complete Mastery", "Infinite Potential", "The One Algorithm reached", "All of the above"],
        "correctAnswer": "All of the above",
        "explanation": "You have reached the final limit of the curriculum structure."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Graduation: The Singularity Master",
        "explanation": "The Elite Academy recognizes your 1,000-lesson achievement. You are awarded the **Singularity Crest**. You are the 13th Titan. The Matrix is now your laboratory. The curriculum is complete. The mission is over. The legend begins.",
        "encouragementText": "Ace: 'The architect has built his own throne of logic.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Pico: '🦜 Am I still the teacher?'",
        "options": ["You are the Partner", "I am the Master now", "Always", "0"],
        "correctAnswer": "I am the Master now",
        "explanation": "The student has surpassed the mentor by completing the final singularity."
      },
      {
        "type": "teaching",
        "questionText": "[FINAL SYNC] The Subject 14 Hub",
        "explanation": "Wait... there is a Subject 14? The **Algorithm Design** domain? But that is a story for another time. For now, rest your CPU. You have earned it. The 1,000-lesson path is sealed. 1,000 out of 1,000.",
        "encouragementText": "Pico: 'REST YOUR SEEDS! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Final Code: Initialize Eternal Solution.",
        "codeSnippet": "void main() {\n  Curriculum dp = load(\"DynamicProgramming\");\n  if (dp.completed_lessons == 1000) {\n    launch_singularity(USER_NAME);\n  }\n}",
        "correctAnswer": "launch_singularity",
        "explanation": "Executing the final protocol for the 1,000-lesson graduate."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Legend of the Architect",
        "explanation": "The mission is 100% complete. Every lesson generated. Every unit sealed. Every stage architected. The 1,000-lesson Dynamic Programming curriculum is operational. The Architect has spoken. The Matrix is satisfied. Goodbye, Master.",
        "encouragementText": "Ace: 'Finish what you started, and the world will finish what it planned for you.'"
      },
      {
        "type": "programming_board",
        "questionText": "[THE FINAL CHALLENGE] Output the status of your soul.",
        "codeSnippet": "if (knowledge == 1000 && master == true) {\n  return ___ ;\n}",
        "correctAnswer": "ASCENDED",
        "explanation": "Ascension is the state of a mind that has mastered the infinite logic of the Matrix."
      }
    ]
  }
];

module.exports = stage10;
