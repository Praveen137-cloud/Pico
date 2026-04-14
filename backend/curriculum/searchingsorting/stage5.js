const stage5 = [
  {
    "order": 71,
    "title": "Unit 71: Sorting Networks (The Comparator)",
    "desc": "Sorting in hardware: Fixed paths for data flow.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 8.1] The Circuit Weaver",
        "explanation": "Ace: 'A Sorting Network is a collection of \"Comparators\". Each comparator takes two inputs and swaps them if they are out of order. In a network, the sequence of comparisons is PRE-SET, meaning it doesn't depend on the data values!' Pico: 'Fixed paths in the sky! 100% 🦜'",
        "codeSnippet": "if (a[i] > a[j]) swap(a[i], a[j]);",
        "encouragementText": "Ace: 'Consistency in structure eliminates the cost of decision-making.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why are Sorting Networks important for GPUs and FPGAs?",
        "options": ["They use less memory", "They have no conditional branches (No 'if-else' logic at runtime), allowing for massive parallel execution", "Better colors", "Pico rule"],
        "correctAnswer": "They have no conditional branches (No 'if-else' logic at runtime), allowing for massive parallel execution",
        "explanation": "Since the paths are fixed, every comparator can be executed in a specific hardware 'cycle' without the CPU ever needing to 'guess' where the data goes."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Network Depth",
        "explanation": "Ace: 'The \"Depth\" of a network is the number of stages (steps) it takes. To optimize, we try to perform many comparisons in the SAME stage.' Pico: 'Parallel flight! 100% 🦜'",
        "encouragementText": "Pico: 'Fly together! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Smallest network to sort 3 elements.",
        "codeSnippet": "Comparator 1: (0, 1);\nComparator 2: (0, 2);\nComparator 3: ( ___ );",
        "correctAnswer": "1, 2",
        "explanation": "Swapping 0/1, then 0/2, then 1/2 will always result in a sorted sequence of 3."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] 0-1 Principle",
        "explanation": "Ace: 'The 0-1 Principle states that if a sorting network works for all sequences of 0s and 1s, it is GUARANTEED to work for all sequences of arbitrary numbers.'",
        "encouragementText": "Ace: 'Binary truth is the foundation of universal logic.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of a sorting network for N elements?",
        "options": ["O(N log N)", "O(log^2 N) depth", "O(1)", "Pico guess"],
        "correctAnswer": "O(log^2 N) depth",
        "explanation": "Common networks like Bitonic or Odd-Even Merge take roughly (log N)^2 stages to complete."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Bose-Nelson",
        "explanation": "Ace: 'Algorithm to generate the SHORTEST possible sorting network for a given N.'",
        "encouragementText": "Pico: 'Shortest path! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Executing a comparator.",
        "codeSnippet": "void compare(int i, int j) {\n  if (arr[i] > arr[j]) ___ (arr[i], arr[j]);\n}",
        "correctAnswer": "swap",
        "explanation": "The atomic operation of any sorting network."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Circuit Architect",
        "explanation": "You have built the hardware logic. The data follows the path you have carved. Ace: 'The route is immutable.'",
        "encouragementText": "Pico: 'Hardwired for speed! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Network terms!",
        "pairs": [
          { "key": "Comparator", "value": "Compare-Swap unit" },
          { "key": "Depth", "value": "Total stages" },
          { "key": "0-1 Principle", "value": "Verification rule" }
        ]
      }
    ]
  },
  {
    "order": 72,
    "title": "Unit 72: Bitonic Sorter",
    "desc": "The power of polarity: Turning bitonic sequences into sorted ones.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 8.2] The Two-Face Flow",
        "explanation": "Ace: 'A sequence is bitonic if it first increases and then decreases (or vice-versa). A Bitonic Sorter recursively splits a sequence and 'cleans' it until it's perfectly sorted.' Pico: 'Turning a hill into a clean ramp! 100% 🦜'",
        "codeSnippet": "bitonic_merge(arr, low, cnt, direction);",
        "encouragementText": "Ace: 'Order is extracted from the reversal of symmetry.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why is Bitonic sort preferred for GPU implementation?",
        "options": ["Less code", "Highly regular structure and no conditional branching dependent on data value", "It used to be faster", "Pico rule"],
        "correctAnswer": "Highly regular structure and no conditional branching dependent on data value",
        "explanation": "Hardware likes regularity. Bitonic sort always does the same swaps in the same order."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Recursive Polarity",
        "explanation": "Ace: 'To build a bitonic sequence, we sort one half UP and the other half DOWN. Then we merge them!' Pico: 'Up bird, Down bird! 100% 🦜'",
        "encouragementText": "Pico: 'Opposite directions! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Recursive call for Bitonic sort.",
        "codeSnippet": "bitonicSort(low, k, 1); // Sort Ascending\nbitonicSort(low + k, k, ___ ); // Sort Descending",
        "correctAnswer": "0",
        "explanation": "Creating the bitonic shape (Ascending + Descending) before the merge."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Batcher's Algorithm",
        "explanation": "Ace: 'Ken Batcher proved that Bitonic Merging always results in two bitonic sub-sequences, allowing forever-recursive sorting.'",
        "encouragementText": "Ace: 'Geometric proof is the anchor of recursive stability.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of Bitonic Sort for N elements?",
        "options": ["O(N log N)", "O(N log^2 N)", "O(N^2)", "Pico guess"],
        "correctAnswer": "O(N log^2 N)",
        "explanation": "There are log N stages of merging, and each merge stage takes log N levels of comparators."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Hardware Mapping",
        "explanation": "Ace: 'In hardware, we use 'Wires' and 'Registers' to hold the values between stages.'",
        "encouragementText": "Pico: 'Electric bird! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Distance between elements to compare in Bitonic Merge.",
        "codeSnippet": "int distance = ___ / 2;",
        "correctAnswer": "cnt",
        "explanation": "We compare element i with element i + distance (Halfway across the current range)."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Bitonic Pilot",
        "explanation": "You have mastered the flip. The sequence is now a tool for the parallel machine. Ace: 'The ramp is set.'",
        "encouragementText": "Pico: 'Perfect curves! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Bitonic terms!",
        "pairs": [
          { "key": "Bitonic", "value": "Inc then Dec" },
          { "key": "Polarity", "value": "Sort Direction" },
          { "key": "O(N log^2 N)", "value": "Work Complexity" }
        ]
      }
    ]
  },
  {
    "order": 73,
    "title": "Unit 73: Batcher Odd-Even Mergesort",
    "desc": "Splitting the load: Merging by parity.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 8.3] The Parity Splitter",
        "explanation": "Ace: 'Another sorting network. It recursively merges based on ODD and EVEN indices. It has fewer comparators than Bitonic sort for large N.' Pico: 'Odds and evens working together! 100% 🦜'",
        "codeSnippet": "odd_even_merge(n);",
        "encouragementText": "Ace: 'Separation of index is the first step toward parallel unity.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "How does Odd-Even merge compare to Bitonic merge?",
        "options": ["Same speed", "Fewer total comparators as N grows large", "More memory", "Pico rule"],
        "correctAnswer": "Fewer total comparators as N grows large",
        "explanation": "Though both are O(log^2 N) depth, Odd-Even is slightly more efficient in terms of hardware gates."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Recursive Step",
        "explanation": "Ace: 'Sort the Even-indexed items, then Sort the Odd-indexed items. Finally, compare and swap all overlapping pairs.' Pico: 'Bird teams based on their numbers! 100% 🦜'",
        "encouragementText": "Pico: 'Odd bird, Even bird! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Complexity to merge two sorted arrays of size N.",
        "codeSnippet": "Merge_Stages = O( ___ );",
        "correctAnswer": "log N",
        "explanation": "Merging in a sorting network takes logarithmic parallel stages."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Perfect Shuffle",
        "explanation": "Ace: 'This algorithm is closely related to the Perfect Shuffle (interleaving two halves of a deck).'",
        "encouragementText": "Ace: 'The shuffle is the bridge between randomness and order.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Can Odd-Even Mergesort be built in O(1) space?",
        "options": ["Yes, it's a sorting network (in-place swaps)", "No", "Only for powers of 2", "Pico guess"],
        "correctAnswer": "Yes, it's a sorting network (in-place swaps)",
        "explanation": "Sorting networks naturally operate on a fixed 'bus' of elements without extra allocation."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Overlapping Pairs",
        "explanation": "Ace: 'In the final stage, we compare arr[1] with arr[2], arr[3] with arr[4]... this 'cleans' the boundary between the odd/even merges.'",
        "encouragementText": "Pico: 'Seal the gaps! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Parity check.",
        "codeSnippet": "if (i ___ 2 == 0) sort_even();",
        "correctAnswer": "%",
        "explanation": "Standard modulo for index separation."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Parity Architect",
        "explanation": "You have learned to divide the world by 2 to conquer the hole. Ace: 'The balance is recovered.'",
        "encouragementText": "Pico: 'Even power! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Parity terms!",
        "pairs": [
          { "key": "Odd-Even", "value": "Batcher variant" },
          { "key": "Fixed Schedule", "value": "Network property" },
          { "key": "Parity", "value": "Index % 2" }
        ]
      }
    ]
  },
  {
    "order": 74,
    "title": "Unit 74: Sample Sort",
    "desc": "Distributed Quicksort: Sorting across many machines.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 8.4] The Delegate",
        "explanation": "Ace: 'How do you sort 1 Petabyte? You pick a 'Sample' of elements, sort them, and use them as 'splitters' to divide the data into buckets for different machines.' Pico: 'Sampling the seeds to pick a leader! 100% 🦜'",
        "codeSnippet": "splitters = get_sorted_sample(data, p-1);",
        "encouragementText": "Ace: 'The part reflects the distribution of the whole.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why take a sample instead of just one pivot?",
        "options": ["It's more fun", "To ensure even load balancing; many splitters create more even buckets for many machines", "Memory", "Pico rule"],
        "correctAnswer": "To ensure even load balancing; many splitters create more even buckets for many machines",
        "explanation": "A single random pivot might split the data 90/10, making one machine work much harder. Sampling provides better split points."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] All-to-All communication",
        "explanation": "Ace: 'After finding splitters, every machine sends their data to the machine responsible for that range. This is the 'Shuffle' phase.' Pico: 'Birds swapping seeds in the sky! 100% 🦜'",
        "encouragementText": "Pico: 'Everyone swap! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Number of splitters needed for P machines.",
        "codeSnippet": "NumSplitters = ___ - 1;",
        "correctAnswer": "P",
        "explanation": "P machines mean we need P-1 splitters to define the P ranges."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] TeraSort Standard",
        "explanation": "Ace: 'TeraSort is a benchmark for sorting speed. Sample Sort is the core algorithm used in Big Data frameworks like Hadoop and Spark.'",
        "encouragementText": "Ace: 'Scale is the ultimate test of an algorithm's design.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of Sample Sort with P processors?",
        "options": ["O(N log N)", "O((N/P) log (N/P) + Comm(N))", "O(N^2)", "Pico guess"],
        "correctAnswer": "O((N/P) log (N/P) + Comm(N))",
        "explanation": "Every machine sorts its fraction locally, plus the cost of network communication."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Over-sampling",
        "explanation": "Ace: 'To be extra safe, we pick S * P samples (e.g. 10 per machine) to get even better splitters.'",
        "encouragementText": "Pico: 'Take more samples! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Finding the bucket for element X.",
        "codeSnippet": "bucket_id = upper_bound(splitters.begin(), splitters.end(), ___ ) - splitters.begin();",
        "correctAnswer": "X",
        "explanation": "Binary search over the splitters to find the destination node."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Distributed Lord",
        "explanation": "You have divided the labor across the horizon. The load is balanced, and the sorting is global. Ace: 'The work is shared.'",
        "encouragementText": "Pico: 'Team power! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Sample terms!",
        "pairs": [
          { "key": "Splitter", "value": "Bucket boundary" },
          { "key": "Sample", "value": "Small subset" },
          { "key": "Shuffle", "value": "Sending data to node" }
        ]
      }
    ]
  },
  {
    "order": 75,
    "title": "Unit 75: TeraSort & Big Data sorting",
    "desc": "Sorting at the petabyte scale: Disk, Network, and RAM.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 8.5] The Data Ocean",
        "explanation": "Ace: 'TeraSort isn't just an algorithm; it's a systems challenge. You must handle Disk I/O, Network bandwidth, and RAM limits. It usually uses Sample Sort followed by high-speed External Merge Sort on every node.' Pico: 'Sorting every grain of sand on the beach! 100% 🦜'",
        "codeSnippet": "sort --parallel=P data.bin",
        "encouragementText": "Ace: 'Real-world speed is a function of hardware mastery.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the primary bottleneck in a Petabyte sort?",
        "options": ["CPU speed", "Disk/Network I/O speed", "Memory layout", "Pico rule"],
        "correctAnswer": "Disk/Network I/O speed",
        "explanation": "The CPU is much faster than the time it takes to move petabytes of data from disk to memory or across the network."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Partitioning (Stage 2)",
        "explanation": "Ace: 'The data is initially distributed across thousands of disks. First, we identify where it is, then we move it to the correct sorting node.' Pico: 'Mapping the nests! 100% 🦜'",
        "encouragementText": "Pico: 'Map the seeds! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Number of machines used in recent TeraSort records.",
        "codeSnippet": "Nodes = ___ ;",
        "correctAnswer": "1000",
        "explanation": "Modern records often use over 1,000 nodes working in parallel."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Fault Tolerance",
        "explanation": "Ace: 'In a 2-hour sort across 1,000 machines, ONE will likely fail. The sorting framework must be able to restart that sub-task without failing the whole sort.'",
        "encouragementText": "Ace: 'Resilience is a mandatory feature of scale.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "How is fault tolerance achieved?",
        "options": ["Checkpoints and Redundancy", "Luck", "Faster CPU", "Pico guess"],
        "correctAnswer": "Checkpoints and Redundancy",
        "explanation": "By saving intermediate results ('Checkpoints') to disk, the work can be resumed if a node dies."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Locality",
        "explanation": "Ace: 'To minimize network use, we try to sort data on the SAME machine where it was stored (Data Locality).' ",
        "encouragementText": "Pico: 'No moving! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Standard block size in Hadoop/Distributed FS.",
        "codeSnippet": "BlockSizeMB = ___ ;",
        "correctAnswer": "128",
        "explanation": "128MB or 256MB is typical to keep the metadata overhead low."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Scale Architect",
        "explanation": "You have mastered the infrastructure of information. The Petabyte is sorted. Ace: 'The ocean is ordered.'",
        "encouragementText": "Pico: 'Big bird, big seeds! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Tera terms!",
        "pairs": [
          { "key": "Cluster", "value": "Group of nodes" },
          { "key": "IOPS", "value": "Disk performance" },
          { "key": "Throughput", "value": "Data per second" }
        ]
      }
    ]
  },
  {
    "order": 76,
    "title": "Unit 76: Hypercube Sort",
    "desc": "Mapping sorting to multidimensional topology.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 8.6] The 4th Dimension",
        "explanation": "Ace: 'A Hypercube is a network topology where nodes are connected like the corners of a multidimensional cube. Hypercube Sort moves data along these 'Dimensions' (edges) to sort it in $O(\log^2 N)$ parallel steps.' Pico: 'Sorting seeds in a 4D cube! 100% 🦜'",
        "codeSnippet": "node_id ^ (1 << dimension);",
        "encouragementText": "Ace: 'Topology is the geometry of communication.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What defines a Hypercube connection?",
        "options": ["Random", "Two nodes are connected if their binary IDs differ by exactly ONE bit", "Index order", "Pico rule"],
        "correctAnswer": "Two nodes are connected if their binary IDs differ by exactly ONE bit",
        "explanation": "This property ensures that the maximum distance between any two nodes is logarithmic (log N)."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Dimension Traversal",
        "explanation": "Ace: 'We sort along dimension 0, then 1, then 2... Each step doubles the 'Sortedness' of the cube.' Pico: 'Fly through the cube! 100% 🦜'",
        "encouragementText": "Pico: 'Cube flight! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Finding neighbor in dimension D.",
        "codeSnippet": "NeighborID = MyID ___ (1 << D);",
        "correctAnswer": "^",
        "explanation": "XORing with the bitten-mask flips the exactly D-th bit, identifying the neighbor."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Bit-Reverse Permutation",
        "explanation": "Ace: 'Hypercube algorithms often use bit-reversal to prepare the data for the cube's specific wiring.'",
        "encouragementText": "Ace: 'Identity is relative to the observer's bit-mask.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Parallel time complexity on a Hypercube with N processors?",
        "options": ["O(log N)", "O(log^2 N)", "O(N)", "Pico guess"],
        "correctAnswer": "O(log^2 N)",
        "explanation": "Matching the depth of the best parallel sorting networks."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Messaging",
        "explanation": "Ace: 'Nodes exchange entire sub-arrays, perform a local merge, and then keep the 'High' or 'Low' half depending on their ID.'",
        "encouragementText": "Pico: 'High seeds, Low seeds! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Determining if you keep the High half.",
        "codeSnippet": "if (MyID > NeighborID) keep_high_merge();\nelse ___ ;",
        "correctAnswer": "keep_low_merge",
        "explanation": "Symmetric halves ensure the whole cube becomes sorted."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Hyper-Pilot",
        "explanation": "You have navigated the high dimensions of data flow. The cube is your playground. Ace: 'The dimension is conquered.'",
        "encouragementText": "Pico: 'I see 4D! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Cube terms!",
        "pairs": [
          { "key": "XOR", "value": "Neighbor find" },
          { "key": "Dimension", "value": "Axis of swap" },
          { "key": "log N", "value": "Cube distance" }
        ]
      }
    ]
  },
  {
    "order": 77,
    "title": "Unit 77: GPU Radix Sort (CUDA)",
    "desc": "Sorting with thousands of cores: Prefix sums and parallel scatters.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 8.7] The Massive Swarm",
        "explanation": "Ace: 'GPU sorting doesn't use comparison (usually). It uses Parallel Radix Sort. Thousands of threads count the occurrences of each digit, calculate their positions using 'Prefix Sum' (Scan), and then 'Scatter' the data to the correct slots.' Pico: 'A million birds moving a million seeds at once! 100% 🦜'",
        "codeSnippet": "__global__ void radixSortKernel();",
        "encouragementText": "Ace: 'Parallelism is the transformation of sequence into volume.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is 'Prefix Sum' (Scan) used for in GPU sorting?",
        "options": ["Math homework", "To calculate the final destination index for every element in parallel", "Randomization", "Pico rule"],
        "correctAnswer": "To calculate the final destination index for every element in parallel",
        "explanation": "By summing the counts of all values smaller than 'X', we know exactly where the first 'X' should be placed."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Warp & Block",
        "explanation": "Ace: 'In CUDA, threads are grouped into Warps (32) and Blocks (1024). Communication is fast within a block but expensive across blocks.' Pico: 'Bird nesting groups! 100% 🦜'",
        "encouragementText": "Pico: 'Stay with your group! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Shared memory declaration in CUDA.",
        "codeSnippet": "___ shared ___ int s_counts[256];",
        "correctAnswer": "__shared__",
        "explanation": "Shared memory is much faster than global GPU memory, used to store local histograms."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Bank Conflicts",
        "explanation": "Ace: 'If multiple threads try to access the same 'Bank' of shared memory, they are serialized. We must 'Offset' our indices to avoid this.'",
        "encouragementText": "Ace: 'Hardware boundaries are the grid of performance.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Theoretical complexity of Parallel Radix Sort?",
        "options": ["O(N log N)", "O(N / P) where P is processors", "O(N^2)", "Pico guess"],
        "correctAnswer": "O(N / P) where P is processors",
        "explanation": "Linear time scaled down by the massive number of parallel cores."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Global Sync",
        "explanation": "Ace: 'GPUs cannot synchronize all threads across the whole chip easily. Radix sort often uses multiple kernel lunches to ensure global state is consistent.'",
        "encouragementText": "Pico: 'Wait for everyone! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Getting thread ID.",
        "codeSnippet": "int idx = blockIdx.x * blockDim.x + ___ ;",
        "correctAnswer": "threadIdx.x",
        "explanation": "Standard CUDA formula for the global index of a thread."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The CUDA Captain",
        "explanation": "You have mobilized the thousand-core army. The data is sorted in a heartbeat. Ace: 'The power is immense.'",
        "encouragementText": "Pico: 'So many birds! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match GPU terms!",
        "pairs": [
          { "key": "Prefix Sum", "value": "Position Calculation" },
          { "key": "AtomicAdd", "value": "Safe Histogramming" },
          { "key": "Global Memory", "value": "Slow storage" }
        ]
      }
    ]
  },
  {
    "order": 78,
    "title": "Unit 78: Sorting Networks (Comparison Networks II)",
    "desc": "AKS and the limits of parallel sorting.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 8.8] The Holy Grail",
        "explanation": "Ace: 'For decades, it was unknown if an O(log N) depth sorting network existed. Then the AKS network was discovered. It is O(log N) depth but has a CONSTANT factor so large (trillions) that it is useless in practice.' Pico: 'A theoretical bird that is too big to fly! 100% 🦜'",
        "codeSnippet": "Depth = C * log(N); // C is massive",
        "encouragementText": "Ace: 'Theory defines the ceiling, but practice defines the floor.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does 'Expander Graph' mean in AKS networks?",
        "options": ["A map", "A graph where every set of nodes has a large number of neighbors, used to 'Spread' information quickly", "A zoom", "Pico rule"],
        "correctAnswer": "A graph where every set of nodes has a large number of neighbors, used to 'Spread' information quickly",
        "explanation": "Expanders are the secret sauce that allows O(log N) diameter in complex networks."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Theoretical Limit",
        "explanation": "Ace: 'No comparison-based sorting network can have depth smaller than log N. AKS is the first to reach this asymptotically.'",
        "encouragementText": "Pico: 'The ultimate limit! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Complexity class of AKS Depth.",
        "codeSnippet": "Complexity = O( ___ );",
        "correctAnswer": "log N",
        "explanation": "The smallest possible asymptotic depth for a sorting network."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Shear Sort",
        "explanation": "Ace: 'A simpler parallel sort for 2D meshes. You sort rows and columns repeatedly until the whole grid is sorted.'",
        "encouragementText": "Ace: 'Iterative refinement leads to global order.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why don't we use AKS in real FPGAs?",
        "options": ["It's secret", "The constant factor makes it slower than O(log^2 N) networks for all practical N", "It's too small", "Pico guess"],
        "correctAnswer": "The constant factor makes it slower than O(log^2 N) networks for all practical N",
        "explanation": "Even for N = population of Earth, a log^2 algorithm is faster than AKS."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Information Flow",
        "explanation": "Ace: 'Parallel sorting is fundamentally about the speed at which an element can move from one side of the network to the other.'",
        "encouragementText": "Pico: 'Movement power! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Lower bound of parallel sorting time.",
        "codeSnippet": "Time >= ___ (log N);",
        "correctAnswer": "Omega",
        "explanation": "Information theoretic lower bound for comparison based parallel sorting."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Network Sage",
        "explanation": "You have seen the limits of mathematical possibility. The horizon is log N. Ace: 'The peak is reached.'",
        "encouragementText": "Pico: 'High altitude! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Depth terms!",
        "pairs": [
          { "key": "AKS", "value": "O(log N) Theory" },
          { "key": "Bitonic", "value": "O(log^2 N) Practice" },
          { "key": "Expander", "value": "Sparse connection power" }
        ]
      }
    ]
  },
  {
    "order": 79,
    "title": "Unit 79: Comparison Networks III (Median Networks)",
    "desc": "Hardware-level selection: Finding the middle in a wire.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 8.9] The Filter",
        "explanation": "Ace: 'If you only need the MEDIAN (the middle element), you don't need a full sorting network! Median Networks are smaller and faster, using fewer comparators just to promote the middle value to the center wire.' Pico: 'A bird-gate for the average-sized seeds! 100% 🦜'",
        "codeSnippet": "MedianNetwork(inputs, 1);",
        "encouragementText": "Ace: 'Specific intent reduces structural cost.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Benefit of Median Networks in Signal Processing?",
        "options": ["Filter noise by taking the median of a sliding window in real-time hardware", "Clear colors", "More RAM", "Pico rule"],
        "correctAnswer": "Filter noise by taking the median of a sliding window in real-time hardware",
        "explanation": "Median filters are great at removing 'salt and pepper' noise from images and signals."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Windowing",
        "explanation": "Ace: 'For a 3x3 median filter, we feed 9 pixels into the network. The output 5th wire is the filtered pixel.' Pico: 'Looking through a window! 100% 🦜'",
        "encouragementText": "Pico: 'Clean the birds! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Number of comparators for a 3-element median.",
        "codeSnippet": "MinComparators = ___ ;",
        "correctAnswer": "3",
        "explanation": "Actually you only need 3 comparators to find the median of 3 elements."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Real-time video",
        "explanation": "Ace: 'High-definition video (60fps) requires a median filter to process millions of networks per second. This is only possible with these fixed hardware paths.'",
        "encouragementText": "Ace: 'Speed is the byproduct of structural alignment.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What happens to the wires that aren't the median?",
        "options": ["They are deleted", "They contain other values in unknown order", "They are sorted", "Pico guess"],
        "correctAnswer": "They contain other values in unknown order",
        "explanation": "To save gates, we don't care about sorting; we only care that the median ends up on the target wire."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Synthesis",
        "explanation": "Ace: 'Automated tools can generate these networks for any N, optimizing for the lowest gate count.'",
        "encouragementText": "Pico: 'Robot builder! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "The target wire in an N-element network.",
        "codeSnippet": "TargetIndex = ___ / 2;",
        "correctAnswer": "N",
        "explanation": "The middle wire carries the median."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Filter Architect",
        "explanation": "You have built the lens that clears the signal from the noise. Ace: 'The vision is clear.'",
        "encouragementText": "Pico: 'No more blurry seeds! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Filter terms!",
        "pairs": [
          { "key": "Median Filter", "value": "Noise reduction" },
          { "key": "Sliding Window", "value": "Local context" },
          { "key": "Hardware gate", "value": "Comparator" }
        ]
      }
    ]
  },
  {
    "order": 80,
    "title": "Unit 80: Stage 8 Graduation (The Parallel Architect)",
    "desc": "Claiming the network peak: Bitonic and Distributed scale are yours.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[GRAND MISSION LORE 8.10] The Summit of Network",
        "explanation": "Ace: 'You have mastered the fixed path of the sorting network, the distributed scale of TeraSort, and the massively parallel swarm of the GPU. You no longer sort data; you architect the flow of entire machine clusters.' Pico: 'Stage 8 Complete! 800 lessons of pure power! 100% 🦜'",
        "encouragementText": "Ace: 'Power at scale is the mastery of the distributed sequence.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What algorithm splits data based on splitters?",
        "options": ["Bitonic", "Sample Sort", "Selection Sort", "Pico guess"],
        "correctAnswer": "Sample Sort",
        "explanation": "Sampling is key to load balancing in distributed sorting."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Depth Summary",
        "explanation": "10 units, 100 lessons. This stage has equipped you with the global sorting and high-throughput tools for the Academic Atlas. Ace: 'Scale with care.'",
        "encouragementText": "Pico: '80% through the 1,000-lesson gauntlet! 🦜'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Depth of Bitonic Sort network?",
        "options": ["N", "log N", "log^2 N", "Pico secret"],
        "correctAnswer": "log^2 N",
        "explanation": "Standard for recursive parallel merging."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Graduation Check",
        "explanation": "Ace: 'Prove you can transition from Hypercubes to CUDA and Parity splits to Terabyte flows in your mental buffers.' Pico: 'I'm a Parallel Architect! 100% 🦜'",
        "encouragementText": "Ace: 'The network reflects the machine through the lens of the parallel comparator.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Benefit of CPU-GPU hybrid sorting?",
        "options": ["Better luck", "Using CPU for small blocks and GPU for massive parallel passes", "XOR power", "Pico guess"],
        "correctAnswer": "Using CPU for small blocks and GPU for massive parallel passes",
        "explanation": "Hybrid approaches utilize the best latency/throughput of both architectures."
      },
      {
        "type": "teaching",
        "questionText": "[FINAL SYNC] The 10x10x10 Path",
        "explanation": "You are 80% through the ultimate journey. Your next target: **Stage 9: Specialized Searching**. Ace: 'The BWT and Bloom Filter are waiting.'",
        "encouragementText": "Pico: 'Stage 9 seeds are waiting! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Final stage signal.",
        "codeSnippet": "if (parallel_architect == true) return ___ ;",
        "correctAnswer": "GRADUATE",
        "explanation": "You have successfully mastered the Parallel & Distributed Sorting phase."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Parallel Architect",
        "explanation": "The wires are set. The processors are in sync. You are a Stage 8 Graduate. Ace: 'Welcome to the inner circle.'",
        "encouragementText": "Pico: 'Titan-Grade! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "[GRADUATION CHALLENGE] Output the status of your journey.",
        "codeSnippet": "for(int i=71; i<=80; i++) verify_parallel_logic(i);\nreturn ___ ;",
        "correctAnswer": "COMPLETE",
        "explanation": "The eighth decile of the 1,000-lesson curriculum for Sorting & Searching is fully verified."
      }
    ]
  }
];

module.exports = stage5;
