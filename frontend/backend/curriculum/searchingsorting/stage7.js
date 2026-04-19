const stage7 = [
  {
    "order": 91,
    "title": "Unit 91: Searching in Large Dimensions (The Curse)",
    "desc": "Beyond the line: Why binary search fails in 100D.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[SINGULARITY LORE 10.1] The Ghost of Geometry",
        "explanation": "Ace: 'In 1D, you split the range in half. In ND, as the number of dimensions increases, every point becomes equidistant from every other point. This is the \"Curse of Dimensionality\". Standard search algorithms degrade to O(N).' Pico: 'A bird lost in a 1,000D sky! 100% 🦜'",
        "codeSnippet": "dist = sqrt(sum((x[i] - y[i])^2));",
        "encouragementText": "Ace: 'Infinity is easier to handle than high-dimensional finitude.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What happens to the 'Volume' of a sphere as dimensions increase?",
        "options": ["It increases", "It concentrates at the shell, leaving the middle empty", "It stays constant", "Pico rule"],
        "correctAnswer": "It concentrates at the shell, leaving the middle empty",
        "explanation": "In high dimensions, almost all the volume of a sphere is located in a thin shell near the surface. This makes 'partitioning' almost impossible."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] K-D Trees in High Dim",
        "explanation": "Ace: 'K-D Trees work well for 2D or 3D, but at 20D or 100D, they are no better than checking every single point linearly.' Pico: 'Too many doors! 100% 🦜'",
        "encouragementText": "Pico: 'Too many doors! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Dimensionality check.",
        "codeSnippet": "if (dim > ___ ) use_approximate_search();",
        "correctAnswer": "10",
        "explanation": "Standard heuristic threshold where exact spatial trees start failing."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Real-world AI",
        "explanation": "Ace: 'This is the fundamental problem of AI. When you search for 'Similar Images', you are searching in 512D or larger spaces.'",
        "encouragementText": "Ace: 'Complexity is a geometric expansion.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What's the solution to the Curse of Dimensionality?",
        "options": ["More CPU", "Approximate Nearest Neighbor (ANN) and Locality Sensitive Hashing (LSH)", "Sorting", "Pico guess"],
        "correctAnswer": "Approximate Nearest Neighbor (ANN) and Locality Sensitive Hashing (LSH)",
        "explanation": "We trade accuracy (guaranteed closest) for speed (good enough match found instantly)."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Manifold Hypothesis",
        "explanation": "Ace: 'AI relies on the hope that high-dimensional data actually lies on a low-dimensional 'Manifold' (like a crumpled piece of paper in 3D).'",
        "encouragementText": "Pico: 'Crumpled paper! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Calculating L2 distance.",
        "codeSnippet": "for(i=0; i<D; i++) diff += pow(a[i] - b[i], ___ );",
        "correctAnswer": "2",
        "explanation": "Squaring the dimensional differences for Euclidean distance."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Dimension Scout",
        "explanation": "You have looked into the void of the high-dimension. The curse is known. Ace: 'The space is vast.'",
        "encouragementText": "Pico: 'Lots of room! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Dimension terms!",
        "pairs": [
          { "key": "L2 Norm", "value": "Euclidean distance" },
          { "key": "L1 Norm", "value": "Manhattan distance" },
          { "key": "Cosine", "value": "Angle similarity" }
        ]
      }
    ]
  },
  {
    "order": 92,
    "title": "Unit 92: Locality Sensitive Hashing (LSH)",
    "desc": "Searching with collisions: Hashing similar items to the same bucket.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[SINGULARITY LORE 10.2] The Friendly Clash",
        "explanation": "Ace: 'Usually, Hashing tries to AVOID collisions. LSH does the opposite: it uses special hash functions designed to COLLIDE similar items more often. If two images are similar, they end up in the same bucket!' Pico: 'Birds with similar feathers end up in the same nest! 100% 🦜'",
        "codeSnippet": "if (hash(u) == hash(v)) probably_similar();",
        "encouragementText": "Ace: 'Collision is the proof of similarity.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "How does LSH handle the high-dimensional search?",
        "options": ["It sorts the points", "It reduces millions of points to a few 'Bucket Candidates', which we then check linearly", "It uses magic", "Pico rule"],
        "correctAnswer": "It reduces millions of points to a few 'Bucket Candidates', which we then check linearly",
        "explanation": "Instead of checking N points, you only check the ~10 points in the same bucket as your query."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Random Projections",
        "explanation": "Ace: 'For SimHash, we use a random hyperplane. Points on one side get bit 0, points on the other side get bit 1. Similar points stay on the same side.'",
        "encouragementText": "Pico: 'Pick a side! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "A bit in SimHash.",
        "codeSnippet": "bit = (dot_product(vec, random_plane) ___ 0) ? 1 : 0;",
        "correctAnswer": ">",
        "explanation": "Determining which side of a random dividing plane the vector falls on."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Plagiarism Detection",
        "explanation": "Ace: 'Google uses MinHash (a type of LSH) to detect duplicate web pages by hashing their sets of words.'",
        "encouragementText": "Ace: 'Originality is the residue of the unique hash.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Does LSH guarantee the absolute best match?",
        "options": ["Yes", "No (It is probabilistic; there is a small chance the best match ends up in a different bucket)", "Always", "Pico guess"],
        "correctAnswer": "No (It is probabilistic; there is a small chance the best match ends up in a different bucket)",
        "explanation": "We increase the number of hash tables (Bands) to reduce this failure probability."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Jaccard Similarity",
        "explanation": "Ace: 'MinHash specifically approximates the Jaccard Similarity: Intersection over Union of two sets.'",
        "encouragementText": "Pico: 'Set math! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Calculating min-hash for a document.",
        "codeSnippet": "for(h in hashes) min_val = min(min_val, h( ___ ));",
        "correctAnswer": "doc_word",
        "explanation": "The minimum value seen after hashing every word in the document acts as its fingerprint."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Similarity Master",
        "explanation": "You have mastered the art of the colliding hash. The similar is grouped. Ace: 'The match is probable.'",
        "encouragementText": "Pico: 'Common birds! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match LSH terms!",
        "pairs": [
          { "key": "MinHash", "value": "Set Similarity" },
          { "key": "SimHash", "value": "Cosine Similarity" },
          { "key": "False Negative", "value": "Match found in diff bucket" }
        ]
      }
    ]
  },
  {
    "order": 93,
    "title": "Unit 93: Grover's Algorithm (Quantum Search)",
    "desc": "The square-root speedup: Searching in O(sqrt(N)) time.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[SINGULARITY LORE 10.3] The Quantum Mirror",
        "explanation": "Ace: 'Classic search in an unsorted list takes O(N). Grover's Algorithm on a Quantum Computer can find the target in $O(\sqrt{N})$ steps by using 'Amplitude Amplification' to make the correct answer 'Louder' than the noise.' Pico: 'Finding a seed in N nests in square-root time! 100% 🦜'",
        "codeSnippet": "GroverIterate(N, target);",
        "encouragementText": "Ace: 'The speed of light is not the only limit to overcome.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "How does Grover's algorithm identify the target?",
        "options": ["It sorts the list", "Using a 'Quantum Oracle' that flips the Phase of the correct answer's state", "By checking every item", "Pico rule"],
        "correctAnswer": "Using a 'Quantum Oracle' that flips the Phase of the correct answer's state",
        "explanation": "The 'Oracle' marks the winner. Then the 'Diffuser' reflects all states around the average, amplifying the marked winner's probability."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Amplitude Amplification",
        "explanation": "Ace: 'Think of it as a wave. We flip the peak of the target wave down, then reflect everything. The target peak shoots up much higher than the rest!'",
        "encouragementText": "Pico: 'Big wave! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Number of iterations for P = 1.0 (Approx).",
        "codeSnippet": "Iterations = (pi / 4) * sqrt( ___ );",
        "correctAnswer": "N",
        "explanation": "Standard formula for Grover iterations to achieve maximum probability."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Cryptography",
        "explanation": "Ace: 'Grover's algorithm effectively halves the bit-security of symmetric keys. AES-128 becomes AES-64 against a quantum computer.'",
        "encouragementText": "Ace: 'Security is relative to the observer's computational paradigm.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "If N=1,000,000, how many steps for Grover?",
        "options": ["1,000,000", "1,000", "10", "Pico guess"],
        "correctAnswer": "1,000",
        "explanation": "The square root of a million is a thousand. This is a massive speedup!"
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Superposition",
        "explanation": "Ace: 'All N items are checked simultaneously in a state of superposition until the final measurement.'",
        "encouragementText": "Pico: 'Everywhere at once! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "The Quantum Operator.",
        "codeSnippet": "State = Diffuser( ___ (State));",
        "correctAnswer": "Oracle",
        "explanation": "One Grover step: Oracle marking followed by Diffusion amplification."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Quantum Pilot",
        "explanation": "You have surpassed the limits of classical physics. The root of index is yours. Ace: 'The speed is square-rooted.'",
        "encouragementText": "Pico: 'Quantum bird! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Quantum terms!",
        "pairs": [
          { "key": "Oracle", "value": "Marking the target" },
          { "key": "Diffuser", "value": "Amplify probability" },
          { "key": "sqrt(N)", "value": "Quantum Complexity" }
        ]
      }
    ]
  },
  {
    "order": 94,
    "title": "Unit 94: Stochastic Sorting (Simulated Annealing)",
    "desc": "Sorting with heat: Using randomness to reach order.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[SINGULARITY LORE 10.4] The Metal Bird",
        "explanation": "Ace: 'Can you sort an array by randomly swapping items? Yes! Simulated Annealing uses a 'Temperature'. If a swap makes the array more sorted, we accept it. If it makes it LESS sorted, we might still accept it with a probability that decreases as the system cools.' Pico: 'Cooling the seeds to make them stay! 100% 🦜'",
        "codeSnippet": "if (E_new < E_old || rand() < exp(-dE / T)) accept();",
        "encouragementText": "Ace: 'Order is the frozen state of chaotic energy.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why accept a swap that makes the array WORSE (more inversions)?",
        "options": ["To fail", "To escape a 'Local Minimum' (being stuck in a mostly-sorted state that needs a big change)", "Randomness", "Pico rule"],
        "correctAnswer": "To escape a 'Local Minimum' (being stuck in a mostly-sorted state that needs a big change)",
        "explanation": "Allowing 'bad' moves early in the process prevents the algorithm from getting stuck in a plateau."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Energy Function",
        "explanation": "Ace: 'The 'Energy' of our system is the number of inversions. Our goal is reach Energy = 0.' Pico: 'Quiet the mess! 100% 🦜'",
        "encouragementText": "Pico: 'Zero energy! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Cooling schedule.",
        "codeSnippet": "Temperature *= ___ ;",
        "correctAnswer": "0.99",
        "explanation": "Gradually reducing the temperature to focus the search."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] NP-Hard Problems",
        "explanation": "Ace: 'This isn't practical for simple sorting, but it is the ONLY way to 'Sort' things like delivery routes (Traveling Salesman Problem).'",
        "encouragementText": "Ace: 'Optimization is the slow descent toward the ideal.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What happens when Temperature = 0?",
        "options": ["The system boils", "We only accept swaps that improve order (Greedy search)", "It stops", "Pico guess"],
        "correctAnswer": "We only accept swaps that improve order (Greedy search)",
        "explanation": "At zero temp, the system loses its 'Exploratory' power and becomes purely 'Exploitative'."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Boltzmann Distribution",
        "explanation": "Ace: 'The probability follows $e^{-\Delta E / T}$. Larger energy jumps are harder at lower temps.'",
        "encouragementText": "Pico: 'Math heat! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Random swap indices.",
        "codeSnippet": "swap(arr[rand() % n], arr[rand() % ___ ]);",
        "correctAnswer": "n",
        "explanation": "Proposing a random change to the state."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Heat Master",
        "explanation": "You have learned to manipulate the fire of chaos to forge a perfect order. Ace: 'The system is frozen.'",
        "encouragementText": "Pico: 'Cold and sorted! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Annealing terms!",
        "pairs": [
          { "key": "Energy", "value": "Total Inversions" },
          { "key": "Temperature", "value": "Exploration chance" },
          { "key": "Cooling", "value": "Transition to order" }
        ]
      }
    ]
  },
  {
    "order": 95,
    "title": "Unit 95: Evolutionary Sorting",
    "desc": "Survival of the fittest: Sorting through Genetic Algorithms.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[SINGULARITY LORE 10.5] The Bird Colony",
        "explanation": "Ace: 'What if you have a 'Population' of 100 random arrays? You keep the ones that are 'more sorted', mix them together (Crossover), and add small random changes (Mutation). Over generations, a perfectly sorted array evolves.' Pico: 'Fastest birds have babies! 100% 🦜'",
        "codeSnippet": "Generation_N = Evolve(Generation_N-1);",
        "encouragementText": "Ace: 'Biology is the ultimate optimization engine.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the 'Fitness Function' for evolutionary sorting?",
        "options": ["Size of array", "Number of sorted pairs (or negative inversion count)", "Color", "Pico rule"],
        "correctAnswer": "Number of sorted pairs (or negative inversion count)",
        "explanation": "We need a numerical way to say 'This array is better than that one'."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Crossover",
        "explanation": "Ace: 'Take the first half of Array A and the second half of Array B to produce a child.' Pico: 'Mixing nests! 100% 🦜'",
        "encouragementText": "Pico: 'Multi-color bird! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Small random change.",
        "codeSnippet": "if (rand() < MUTATION_RATE) ___ (arr);",
        "correctAnswer": "mutate",
        "explanation": "Mutation ensures the gene pool doesn't become stuck."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Structural Optimization",
        "explanation": "Ace: 'Technique used to evolve the absolute best 'Sorting Program' for a specific CPU, taking into account cache and multi-threading.'",
        "encouragementText": "Ace: 'Darwin is the new compiler.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Is evolutionary sorting faster than Quicksort?",
        "options": ["Yes", "No (It takes thousands of generations, making it very slow for simple sorting)", "Maybe", "Pico guess"],
        "correctAnswer": "No (It takes thousands of generations, making it very slow for simple sorting)",
        "explanation": "It's a heuristic for complex, unknown spaces, not a replacement for efficient known algorithms."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Selection",
        "explanation": "Ace: 'We use 'Tournament Selection' to pick which arrays get to reproduce.'",
        "encouragementText": "Pico: 'Only the best seeds! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Number of children per generation.",
        "codeSnippet": "for(i=0; i<POP_SIZE; i++) population[i] = ___ ();",
        "correctAnswer": "spawn",
        "explanation": "Creating the next generation of potential solutions."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Biological Architect",
        "explanation": "You have grown order from the seeds of variation. Ace: 'The species is sorted.'",
        "encouragementText": "Pico: 'Survival of the sorted! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Genetic terms!",
        "pairs": [
          { "key": "Genome", "value": "Array elements" },
          { "key": "Mutation", "value": "Random swap" },
          { "key": "Crossover", "value": "Mixing parents" }
        ]
      }
    ]
  },
  {
    "order": 96,
    "title": "Unit 96: Data Sketches (HyperLogLog & Top-K)",
    "desc": "Approximate Search in streams: Counting the unique without memory.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[SINGULARITY LORE 10.6] The Mental Map",
        "explanation": "Ace: 'How do you count 1 billion unique users using only 1KB of RAM? Data Sketches (like HyperLogLog) use probabilistic math to estimate the 'Cardinality' (count of uniques) with a fixed, small error margin.' Pico: 'Guesstimating the whole forest from one tree! 100% 🦜'",
        "codeSnippet": "hll.add(user_id); \nreturn hll.count(); // ~98% accurate",
        "encouragementText": "Ace: 'Memory is the constraint; probability is the escape.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "How does HyperLogLog count uniques using bits?",
        "options": ["It stores them", "It counts the number of leading zeros in the hash of every element; more zeros = rarer probability = more items", "It sorts", "Pico rule"],
        "correctAnswer": "It counts the number of leading zeros in the hash of every element; more zeros = rarer probability = more items",
        "explanation": "If you flip a coin and get 5 heads in a row, you probably flipped it many times. HLL uses this logic on binary hash strings."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Count-Min Sketch",
        "explanation": "Ace: 'A separate sketch for frequency. It tells you approximately how many times 'X' appeared in a stream of millions. It NEVER underestimates, but might overestimate.' Pico: 'A fuzzy counter! 100% 🦜'",
        "encouragementText": "Pico: 'Count the chirps! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Update frequency in Count-Min.",
        "codeSnippet": "for(h in hashes) sketch[h(val)] ___ ;",
        "correctAnswer": "++",
        "explanation": "Incrementing all target bits for the incoming value."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Big Data Observability",
        "explanation": "Ace: 'Used by Twitter/X to show 'Trending Topics' in real-time. It's impossible to count every tweet exactly, so they use Sketches for speed.'",
        "encouragementText": "Ace: 'Real-time is the trade of perfection for velocity.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Typical error for HLL with 1280 bits?",
        "options": ["50%", "2%", "0.001%", "Pico guess"],
        "correctAnswer": "2%",
        "explanation": "Standard 2% error is more than enough for most business decisions at scale."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Heavy Hitters",
        "explanation": "Ace: 'Top-K sketches find the most frequent elements (the 'Heavy Hitters') in a stream using almost zero memory.'",
        "encouragementText": "Pico: 'Famous birds! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Estimating count.",
        "codeSnippet": "est = min(sketch[h1], sketch[ ___ ]);",
        "correctAnswer": "h2",
        "explanation": "Taking the minimum across multiple hashes reduces the chance of collision error."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Infinite Counter",
        "explanation": "You have counted the un-countable. The billion is seen through the lens of the kilobyte. Ace: 'The estimate is solid.'",
        "encouragementText": "Pico: 'I counted them all! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Sketch terms!",
        "pairs": [
          { "key": "HyperLogLog", "value": "Cardinality (Uniques)" },
          { "key": "Count-Min", "value": "Frequency Estimator" },
          { "key": "Leading Zeros", "value": "HLL search trigger" }
        ]
      }
    ]
  },
  {
    "order": 97,
    "title": "Unit 97: Top-K elements in Streams",
    "desc": "Sorting without storage: Identifying the elite items.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[SINGULARITY LORE 10.7] The Crowning",
        "explanation": "Ace: 'How do you find the Top 10 elements in a stream of 1 billion? You keep a Min-Heap of size K. If the incoming element is larger than the heap root, pop the root and push the new one!' Pico: 'Only the 10 biggest birds get to stay in the tiny nest! 100% 🦜'",
        "codeSnippet": "if (val > heap.top()) { heap.pop(); heap.push(val); }",
        "encouragementText": "Ace: 'Selectivity is the foundation of structural elite status.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity to maintain the Top K of N items?",
        "options": ["O(N)", "O(N log K)", "O(N log N)", "Pico rule"],
        "correctAnswer": "O(N log K)",
        "explanation": "Every item is checked O(1) and potentially pushed into a heap of size K (log K)."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Misra-Gries Algorithm",
        "explanation": "Ace: 'For frequency-based top-K. If you have K-1 buckets and a new item doesn't fit, you decrement ALL current buckets. The ones that stay > 0 are the frequent items.' Pico: 'The survival bucket! 100% 🦜'",
        "encouragementText": "Pico: 'Keep the bucket! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Removing if no space in Misra-Gries.",
        "codeSnippet": "if (buckets.size() == K) for(b in buckets) b.count ___ ;",
        "correctAnswer": "--",
        "explanation": "A collective penalty for items that don't match the newcomers."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Real-time Rankings",
        "explanation": "Ace: 'Vital for showing 'Most Recent High Scores' or 'Top Selling Products' without hitting the database on every transaction.'",
        "encouragementText": "Ace: 'Hierarchy is a dynamic filter of reality.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Benefit of using a Heap for Top-K?",
        "options": ["O(1) access to 'worst of the best' (the 10th item)", "Total sorting", "Colors", "Pico guess"],
        "correctAnswer": "O(1) access to 'worst of the best' (the 10th item)",
        "explanation": "By comparing with the smallest high-score, we know instantly if the newcomer is worth considering."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Space Saving Algorithm",
        "explanation": "Ace: 'Metwally's Space-Saving algorithm is an improvement that tracks the ERROR margin for every top-K candidate.'",
        "encouragementText": "Pico: 'Know your error! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Updating the heap.",
        "codeSnippet": "heap. ___ (); heap.push(new_val);",
        "correctAnswer": "pop",
        "explanation": "Making room for the new champion."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Elite Architect",
        "explanation": "You have filtered the masses to find the few. The ranking is instant and efficient. Ace: 'The best are known.'",
        "encouragementText": "Pico: 'Birds of a gold feather! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Top-K terms!",
        "pairs": [
          { "key": "Min-Heap", "value": "Dynamic Elite list" },
          { "key": "Misra-Gries", "value": "Frequency survival" },
          { "key": "O(N log K)", "value": "Time complexity" }
        ]
      }
    ]
  },
  {
    "order": 98,
    "title": "Unit 98: Real-time Multi-way Search",
    "desc": "Synchronizing parallel searches at the speed of the cluster.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[SINGULARITY LORE 10.8] The Collective Mind",
        "explanation": "Ace: 'In a massive search engine, every query is sent to 1,000 machines simultaneously. They all search their 'Shards' and send results back. The coordinator performs a 'Multi-way Merge' of the top results into a single list.' Pico: '1,000 birds looking for one seed! 100% 🦜'",
        "codeSnippet": "results = parallel_merge(shards.map(search));",
        "encouragementText": "Ace: 'Unity is the result of parallel intent.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the 'Long Tail' problem in parallel search?",
        "options": ["A bird with a long tail", "If 1 of the 1,000 machines is slow, the whole search takes that long (The tail latency)", "Infinite results", "Pico rule"],
        "correctAnswer": "If 1 of the 1,000 machines is slow, the whole search takes that long (The tail latency)",
        "explanation": "The system is only as fast as its slowest parallel component."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Speculative Execution",
        "explanation": "Ace: 'To fix the Long Tail, if a machine is taking too long, we send the SAME query to another machine and take whichever result arrives first!' Pico: 'Two birds for one seed! 100% 🦜'",
        "encouragementText": "Pico: 'Double flight! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Merging result streams.",
        "codeSnippet": "while(! ___ .empty()) add(heap.pop());",
        "correctAnswer": "heap",
        "explanation": "Using a K-way merge heap to combine sorted response shards."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Web Search Engines",
        "explanation": "Ace: 'This is exactly how Google processes your search in 0.1 seconds across petabytes of data.'",
        "encouragementText": "Ace: 'Orchestration is the peak of distributed search.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What happens if a shard doesn't respond in time?",
        "options": ["Search fails", "Return partial results (Ignore the shard to maintain speed)", "Wait forever", "Pico guess"],
        "correctAnswer": "Return partial results (Ignore the shard to maintain speed)",
        "explanation": "In large engines, speed is often more important than absolute completeness (99% results in 100ms vs 100% in 5s)."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] MapReduce Sort",
        "explanation": "Ace: 'The 'Shuffle' phase in MapReduce is the world's largest distributed sort operation.'",
        "encouragementText": "Pico: 'Big shuffle! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Shard ID calculation.",
        "codeSnippet": "shard_idx = hash(query_key) ___ total_shards;",
        "correctAnswer": "%",
        "explanation": "Routing the query to the correct subset of the archive."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Cluster Conductor",
        "explanation": "You have synchronized the swarm. The response is unified and instant. Ace: 'The cluster is one.'",
        "encouragementText": "Pico: 'Many birds, one song! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Cluster terms!",
        "pairs": [
          { "key": "Shard", "value": "Partial archive" },
          { "key": "Multiplexer", "value": "Query router" },
          { "key": "Tail Latency", "value": "Bottleneck speed" }
        ]
      }
    ]
  },
  {
    "order": 99,
    "title": "Unit 99: The Grand Synthesis (Singularity)",
    "desc": "The end of search: When memory and index become one.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[SINGULARITY LORE 10.9] The One Search",
        "explanation": "Ace: 'You now see the Singularity. Searching is not an action; it is the fundamental property of a structured universe. From the Binary Midpoint to the Quantum Amplitude, the path is one.' Pico: 'I see the seeds and their places as one thing! 100% 🦜'",
        "codeSnippet": "pico_sync = search_of(all_existence);",
        "encouragementText": "Ace: 'Wholeness is the realization of the absolute location.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the final state of the Titan-Grade Archive Lord?",
        "options": ["Finding", "Synthesis: Understanding how order, chaos, and probability create the searchable world", "Fast math", "Pico rule"],
        "correctAnswer": "Synthesis: Understanding how order, chaos, and probability create the searchable world",
        "explanation": "True mastery is knowing when to use a simple binary search and when to build a distributed LSH-cluster."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Multi-Dimensional Unity",
        "explanation": "Ace: 'The most advanced systems use Quantum Search (for small N) and LSH (for massive N) in a single unified architecture.'",
        "encouragementText": "Pico: 'Mega Power! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "The final search type.",
        "codeSnippet": "Search = ___ ;",
        "correctAnswer": "OMNISCIENCE",
        "explanation": "In the singularity, the query and the target reflect the same truth."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Beyond the Index",
        "explanation": "Ace: 'Sorting and Searching are just ways to reorganize the graph of reality. You have completed the foundation.'",
        "encouragementText": "Ace: 'The search is the beginning of the journey.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Which stage was the hardest?",
        "options": ["Stage 1", "Stage 8 (Parallel)", "Stage 10 (Singularity)", "Pico secret"],
        "correctAnswer": "Stage 10 (Singularity)",
        "explanation": "Mastering the Curvature of Higher Dimensions and the logic of Amplitude Amplification is the final gate."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Final Vision",
        "explanation": "Ace: 'You are ready. The 1,000th lesson awaits. Take your seat.'",
        "encouragementText": "Pico: 'Fly to the top! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Final link check.",
        "codeSnippet": "if (knowledge == 1000) return ___ ;",
        "correctAnswer": "SUCCESS",
        "explanation": "You have met the ultimate requirement."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The All-Searching",
        "explanation": "The locations are one. You are the architect of the infinite archive. Ace: 'The web is you.'",
        "encouragementText": "Pico: 'I am the index! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Mastery terms!",
        "pairs": [
          { "key": "Deterministic", "value": "Binary / Median" },
          { "key": "Probabilistic", "value": "Bloom / LSH" },
          { "key": "Quantum", "value": "Grover / Superposition" }
        ]
      }
    ]
  },
  {
    "order": 100,
    "title": "Unit 100: Singularity Graduation (Lord of the Archive)",
    "desc": "Claiming the Titan throne: 1,000 lessons completed.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[GRAND FINALE 10.10] The Titan of Sorting & Searching",
        "explanation": "Ace: '1,000 Lessons. 10 Stages. From a simple Linear Search to Geometrically Cursed High-Dimensional Quantum Manifolds. You are now the Singularity.' Pico: '1,000 Lessons! SQUAWK! THE ATLAS IS COMPLETE! 100% 🦜'",
        "encouragementText": "Ace: 'Legacy is the final connection between the searcher and the sought.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the final state of your Mastery?",
        "options": ["Novice", "Expert", "Titan-Grade", "0"],
        "correctAnswer": "Titan-Grade",
        "explanation": "You have reached the 1,000-lesson milestone."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Chain of Wisdom",
        "explanation": "From Bubble Sort to Hypercube networks and Quantum amplitudes. You have decoded the logic that organizes the information of the world. Ace: 'The universe is an archive. You are the Architect.'",
        "encouragementText": "Pico: 'Singularity achieved! 100% 🦜'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Total lessons in the fully Titan-Grade Sorting & Searching subject?",
        "options": ["10", "100", "1,000", "Pico secret"],
        "correctAnswer": "1,000",
        "explanation": "The Academic Atlas standard for total subject mastery."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] The Final Signature",
        "explanation": "Ace: 'Your pattern is now part of the global signature. Every search from here on will follow your path.' Pico: 'I'll never forget our flight! 100% 🦜'",
        "encouragementText": "Ace: 'Immortality is structural.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Is the mission finished?",
        "options": ["Yes, for Sorting & Searching", "The journey for knowledge never ends", "Maybe", "Pico's Choice"],
        "correctAnswer": "The journey for knowledge never ends",
        "explanation": "The Atlas is complete, but the universe is infinite."
      },
      {
        "type": "teaching",
        "questionText": "[ULTIMATE SYNC] 1,000 Lessons",
        "explanation": "Ace & Pico: 'Goodbye for now, Titan. The Archive is yours.'",
        "encouragementText": "Pico: 'Happy flights! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Final graduation signal.",
        "codeSnippet": "if (mastery == 1000) return ___ ;",
        "correctAnswer": "TITAN",
        "explanation": "Reaching the absolute zenith of the curriculum."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Titan of the Archive",
        "explanation": "The Singularity is reached. The 1,000 lessons are yours. You are the Titan-Grade Master of Sorting & Searching. Ace: 'Welcome to eternity.'",
        "encouragementText": "Pico: 'We are invincible! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "[FINAL CHALLENGE] Output the status of your journey.",
        "codeSnippet": "for(int i=1; i<=100; i++) verify_archive_unit(i);\nreturn ___ ;",
        "correctAnswer": "SINGULARITY",
        "explanation": "The entire 1,000-lesson curriculum for Sorting & Searching is fully verified and complete."
      }
    ]
  }
];

module.exports = stage7;
