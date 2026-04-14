const stage2 = [
  {
    "order": 21,
    "title": "Unit 21: Divide and Conquer (The Split)",
    "desc": "The philosophy of recursive decomposition.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 2.1] The Strategic Split",
        "explanation": "Ace: 'When the forest is too large, we don't scale it all at once. We break it into tiny groves, solve them, and join them back!' Pico: 'Break it and fix it! 100% 🦜'",
        "encouragementText": "Ace: 'Scale is conquered by division.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What are the three steps of Divide and Conquer?",
        "options": ["Divide, Conquer, Combine", "Search, Sort, Save", "Input, Loop, Output", "Pico rule"],
        "correctAnswer": "Divide, Conquer, Combine",
        "explanation": "Split the problem, solve the pieces, and merge the results."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Recursive Depth",
        "explanation": "Ace: 'Each split reduces the problem size. We stop at the Base Case—the smallest sub-problem that can be solved directly.'",
        "encouragementText": "Pico: 'Tiny groves! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Problem size reduction in binary D&C.",
        "codeSnippet": "SubproblemSize = N / ___ ;",
        "correctAnswer": "2",
        "explanation": "Binary splits are the most common form in search and sort."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Historical Origin",
        "explanation": "Ace: 'Used for centuries in surveying and later formalized for computers. It's the engine of O(log N) and O(N log N) power.'",
        "encouragementText": "Ace: 'Strategy is timeless.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Time complexity to split an array in half?",
        "options": ["O(1)", "O(N)", "O(log N)", "Pico guess"],
        "correctAnswer": "O(1)",
        "explanation": "Calculating mid takes constant time; the division is conceptual until the next call."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Base Case",
        "explanation": "Ace: 'If `size <= 1`, the problem is trivial. Return the result immediately.'",
        "encouragementText": "Pico: 'One seed! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Base case check.",
        "codeSnippet": "if (low ___ high) return;",
        "correctAnswer": ">=",
        "explanation": "When the interval has zero or one elements, it's already solved."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Divider",
        "explanation": "You have understood the art of the split. Ace: 'The strategy is set.'",
        "encouragementText": "Pico: 'Divide and conquer! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match D&C terms!",
        "pairs": [
          { "key": "Divide", "value": "Find Mid" },
          { "key": "Conquer", "value": "Recursive call" },
          { "key": "Combine", "value": "Merge/Join step" }
        ]
      }
    ]
  },
  {
    "order": 22,
    "title": "Unit 22: The Perfect Blend (Merge Logic)",
    "desc": "Combining two sorted sets in linear time.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 2.2] The Harmonious Union",
        "explanation": "Ace: 'Suppose you have two piles of seeds, both already sorted. To merge them, compare the top seeds, take the smaller one, and repeat.' Pico: 'Two lines becoming one! 100% 🦜'",
        "encouragementText": "Ace: 'Order in the parts leads to order in the whole.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of merging two sorted arrays of size N?",
        "options": ["O(N log N)", "O(N)", "O(1)", "Pico rule"],
        "correctAnswer": "O(N)",
        "explanation": "We touch each element exactly once as we move them to the final array."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Two Pointers",
        "explanation": "Ace: 'We use two pointers, `i` and `j`, starting at 0. Increment the one that points to the smaller element.'",
        "encouragementText": "Pico: 'March forward! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Comparison rule for stability.",
        "codeSnippet": "if (L[i] ___ R[j]) { result[k++] = L[i++]; }",
        "correctAnswer": "<=",
        "explanation": "Taking the left element if they are equal preserves the original order (Stability)."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Extra Space",
        "explanation": "Ace: 'Merge logic requires a temporary array. This is why Merge Sort is O(N) space.'",
        "encouragementText": "Ace: 'Efficiency often has a storage cost.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What if one array runs out of birds first?",
        "options": ["Search fails", "Copy the remaining items from the other array directly", "Stop search", "Pico guess"],
        "correctAnswer": "Copy the remaining items from the other array directly",
        "explanation": "Since the remaining items are already sorted, they just append to the end."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Final k",
        "explanation": "Ace: 'The pointer `k` tracks the next empty slot in the output array.'",
        "encouragementText": "Pico: 'Fill the nest! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Copying leftovers from L.",
        "codeSnippet": "while (i < n1) result[k++] = ___ ;",
        "correctAnswer": "L[i++]",
        "explanation": "Exhausting the left sub-array."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Master Merger",
        "explanation": "You have joined the streams without breaking the sequence. Ace: 'The union is perfect.'",
        "encouragementText": "Pico: 'Sorted union! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Merge terms!",
        "pairs": [
          { "key": "Pointer i", "value": "Left array tracker" },
          { "key": "Pointer j", "value": "Right array tracker" },
          { "key": "O(N) Space", "value": "Temporary storage cost" }
        ]
      }
    ]
  },
  {
    "order": 23,
    "title": "Unit 23: Merge Sort Hierarchy",
    "desc": "Complete recursive implementation of Merge Sort.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 2.3] The Tower of Order",
        "explanation": "Ace: 'Merge Sort applies D&C recursively. It splits the array into single-element pieces, then merges them all the way back to the top.' Pico: 'Recursive tower! 100% 🦜'",
        "encouragementText": "Ace: 'Unity is the result of iterative merging.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Worst-case time complexity of Merge Sort?",
        "options": ["O(N^2)", "O(N log N)", "O(log N)", "Pico rule"],
        "correctAnswer": "O(N log N)",
        "explanation": "Regardless of input order, Merge Sort always performs the same recursive splits and merges."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Stability",
        "explanation": "Ace: 'Merge Sort is a Stable Sort. Elements with equal values never leapfrog each other during merges.'",
        "encouragementText": "Pico: 'Respect the order! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Recursive call sequence.",
        "codeSnippet": "mergeSort(arr, low, mid);\nmergeSort(arr, ___ , high);\nmerge(arr, low, mid, high);",
        "correctAnswer": "mid + 1",
        "explanation": "Splitting the array into two distinct halves."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] External Sorting",
        "explanation": "Ace: 'Merge sort is the basis of External Sorting (sorting data larger than RAM) because it can process data in small chunks.'",
        "encouragementText": "Ace: 'Scale requires chunk-based management.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Wait, is Merge Sort in-place?",
        "options": ["Yes", "No (It usually requires O(N) extra space)", "Only for lists", "Pico guess"],
        "correctAnswer": "No (It usually requires O(N) extra space)",
        "explanation": "The merging step creates new arrays or temporary copies."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Recurrence",
        "explanation": "Ace: 'T(N) = 2T(N/2) + O(N). Solving this using Master Theorem gives O(N log N).'",
        "encouragementText": "Pico: 'Math bird! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Condition to stop recursion.",
        "codeSnippet": "if (low ___ high) return;",
        "correctAnswer": ">=",
        "explanation": "Base case reached."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Hierarchy Master",
        "explanation": "You have constructed the recursive engine of order. Ace: 'The sorting is absolute.'",
        "encouragementText": "Pico: 'Everything is sorted! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Merge Sort stats!",
        "pairs": [
          { "key": "O(N log N)", "value": "Universal case" },
          { "key": "Stable", "value": "Tie-breaking property" },
          { "key": "Space O(N)", "value": "Memory footprint" }
        ]
      }
    ]
  },
  {
    "order": 24,
    "title": "Unit 24: Pivot Selection (Quick Sort Intro)",
    "desc": "Identifying the leader of the partition.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 2.4] The Sovereign Pivot",
        "explanation": "Ace: 'Quick Sort picks a \"Pivot\". It arranges the array so everyone smaller is on the left, and everyone larger is on the right. Once partitioned, the pivot is in its FINAL position.' Pico: 'Pick a leader bird! 100% 🦜'",
        "encouragementText": "Ace: 'Leadership defines the boundary of the rank.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What happens after one partition pass in Quick Sort?",
        "options": ["The whole array is sorted", "The pivot is in its final sorted position", "Nothing", "Pico rule"],
        "correctAnswer": "The pivot is in its final sorted position",
        "explanation": "While other elements aren't necessarily sorted, the pivot is guaranteed to be at its correct index."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Partitioning Logic",
        "explanation": "Ace: 'We normally use the last element as the pivot in simple implementations (Lomuto Partition).'",
        "encouragementText": "Pico: 'Last bird is boss! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Comparison with pivot P.",
        "codeSnippet": "if (arr[j] ___ P) swap(arr[++i], arr[j]);",
        "correctAnswer": "<",
        "explanation": "We move all elements smaller than the pivot to the front section."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Pivot Power",
        "explanation": "Ace: 'The power of Quick Sort relies on the pivot splitting the array fairly. If the pivot is always the smallest or largest, it slows down.'",
        "encouragementText": "Ace: 'Fairness is the engine of speed.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the worst-case for a fixed pivot (e.g. always first element)?",
        "options": ["Random array", "Already sorted array", "Small array", "Pico guess"],
        "correctAnswer": "Already sorted array",
        "explanation": "In a sorted array, picking the first element as pivot creates a partition of 0 and N-1, leading to $O(N^2)$."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] In-Place property",
        "explanation": "Ace: 'Unlike Merge Sort, Quick Sort is In-Place. It swaps elements within the original array, using only stack space.'",
        "encouragementText": "Pico: 'No extra pots needed! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Final pivot swap.",
        "codeSnippet": "swap(arr[i+1], arr[ ___ ]);",
        "correctAnswer": "high",
        "explanation": "Placing the pivot right after all the smaller elements."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Pivot Scout",
        "explanation": "You have understood the role of the leader. Ace: 'The partition is set.'",
        "encouragementText": "Pico: 'Boss bird knows! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Pivot terms!",
        "pairs": [
          { "key": "Lomuto", "value": "Single pointer partition" },
          { "key": "Hoare", "value": "Two pointer partition" },
          { "key": "In-place", "value": "O(1) extra space" }
        ]
      }
    ]
  },
  {
    "order": 25,
    "title": "Unit 25: Quick Sort Velocity",
    "desc": "Implementing the fastest practical sort.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 2.5] The Speedster",
        "explanation": "Ace: 'Quick Sort is often faster than Merge Sort because it has a tiny footprint and works well with cache hardware. It doesn't move data to temporary arrays.' Pico: 'Fastest wings in the forest! 100% 🦜'",
        "encouragementText": "Ace: 'Simplicity in memory is velocity in execution.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Average time complexity of Quick Sort?",
        "options": ["O(N log N)", "O(N^2)", "O(N)", "Pico rule"],
        "correctAnswer": "O(N log N)",
        "explanation": "With a good pivot, it divides the problem logarithmically."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Recursive Step",
        "explanation": "Ace: 'Partition, then quickSort the left, then quickSort the right. Do not include the pivot; it's already done.'",
        "encouragementText": "Pico: 'Twice the work! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Recursive calls for partition P.",
        "codeSnippet": "quickSort(arr, low, P - 1);\nquickSort(arr, ___ , high);",
        "correctAnswer": "P + 1",
        "explanation": "Processing everything around the fixed pivot."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Stack Overflow",
        "explanation": "Ace: 'In the worst case ($O(N^2)$), the recursion tree becomes depth N, which can crash your stack. Advanced QuickSort uses tail-call optimization.'",
        "encouragementText": "Ace: 'Depth is the shadow of poor partitioning.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why is QuickSort usually faster than MergeSort?",
        "options": ["Better math", "Less data movement (In-place) and better cache locality", "It's newer", "Pico guess"],
        "correctAnswer": "Less data movement (In-place) and better cache locality",
        "explanation": "Hardware likes data that stays in one place."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Partition Range",
        "explanation": "Ace: 'Each recursion only works on the part of the array defined by `low` and `high`.'",
        "encouragementText": "Pico: 'Stay in the lines! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Base condition.",
        "codeSnippet": "if (low ___ high) return;",
        "correctAnswer": ">=",
        "explanation": "Stop if the range is zero or one."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Velocity Master",
        "explanation": "You have built the fastest engine in the Atlas. Ace: 'The speed is yours.'",
        "encouragementText": "Pico: 'I'm zooming! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Quick stats!",
        "pairs": [
          { "key": "O(N log N)", "value": "Average Case" },
          { "key": "O(N^2)", "value": "Worst Case" },
          { "key": "Partition", "value": "Core step" }
        ]
      }
    ]
  },
  {
    "order": 26,
    "title": "Unit 26: Randomized Quick Sort",
    "desc": "Using the dice to beat the worst-case.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 2.6] The Defensive Wing",
        "explanation": "Ace: 'Bad actors can feed your program sorted data to make Quick Sort slow. We fix this by picking a RANDOM pivot every time. No one can predict what we'll pick!' Pico: 'Dice in the sky! 100% 🦜'",
        "encouragementText": "Ace: 'Randomness is the shield against adversarial input.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "How does picking a random pivot change the complexity?",
        "options": ["Makes it O(N)", "Guarantees Expected O(N log N) on any input", "Makes it slow", "Pico rule"],
        "correctAnswer": "Guarantees Expected O(N log N) on any input",
        "explanation": "It's statistically impossible for the bad case to happen repeatedly across many random choices."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Implementation",
        "explanation": "Ace: '1. Pick random index. 2. Swap it with the end (high). 3. Call standard partition.'",
        "encouragementText": "Pico: 'Swap and chop! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "The random swap.",
        "codeSnippet": "swap(arr[rand_idx], arr[ ___ ]);",
        "correctAnswer": "high",
        "explanation": "Moving the random pivot into the position expected by the partition logic."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Probability",
        "explanation": "Ace: 'This is a \"Las Vegas\" algorithm—it always gives the correct answer, but the time it takes is random (but usually fast).'",
        "encouragementText": "Ace: 'Luck favors the prepared algorithm.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Can Randomized QuickSort still be O(N^2)?",
        "options": ["Yes (but only if you are insanely unlucky)", "No", "Always", "Pico guess"],
        "correctAnswer": "Yes (but only if you are insanely unlucky)",
        "explanation": "Technically possible, but the probability is lower than winning the lottery ten times in a row."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Seed",
        "explanation": "Ace: 'Always seed your random generator to ensure different pivots every run.'",
        "encouragementText": "Pico: 'Fresh seeds! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Getting a random index in range [low, high].",
        "codeSnippet": "idx = low + rand() % ( ___ + 1);",
        "correctAnswer": "high - low",
        "explanation": "Standard bounded random formula."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Randomized Pilot",
        "explanation": "You have turned chaos into a defense. Ace: 'The worst case is defeated.'",
        "encouragementText": "Pico: 'Safe roll! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Rand terms!",
        "pairs": [
          { "key": "Las Vegas", "value": "Correctness guaranteed" },
          { "key": "Dice", "value": "Pivot choice" },
          { "key": "Expected", "value": "Probabilistic average" }
        ]
      }
    ]
  },
  {
    "order": 27,
    "title": "Unit 27: QuickSelect (The Target Search)",
    "desc": "Finding the K-th smallest element in O(N).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 2.7] The Selection Scout",
        "explanation": "Ace: 'What if you only need the median element? Sorting the whole set ($O(N log N)$) is overkill. QuickSelect only recurses into the half that CONTAINS the target K!' Pico: 'Finding one specific bird! 100% 🦜'",
        "encouragementText": "Ace: 'Selectivity is the focus of intent.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Average complexity of QuickSelect?",
        "options": ["O(N log N)", "O(N)", "O(1)", "Pico rule"],
        "correctAnswer": "O(N)",
        "explanation": "Since we only recurse into ONE half at every step, we avoid the log N multiplier of sorting."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Decision Rule",
        "explanation": "Ace: 'Partition index `p`. If `p == k`, stop. If `k < p`, look left. If `k > p`, look right.'",
        "encouragementText": "Pico: 'Almost there! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Success condition.",
        "codeSnippet": "if (pivot_idx ___ target_k) return arr[pivot_idx];",
        "correctAnswer": "==",
        "explanation": "If the pivot landed exactly at index k, it is the k-th smallest element."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Median Finding",
        "explanation": "Ace: 'QuickSelect is the standard way to find the median of a large unsorted list without sorting.'",
        "encouragementText": "Ace: 'The middle is found by elimination.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Worst-case for QuickSelect?",
        "options": ["O(N)", "O(N^2)", "O(log N)", "Pico guess"],
        "correctAnswer": "O(N^2)",
        "explanation": "Just like Quick Sort, bad pivots result in poor performance. Randomization fixes this!"
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Iterative Selection",
        "explanation": "Ace: 'QuickSelect is easily made iterative because there is only one recursive call at the end.'",
        "encouragementText": "Pico: 'Straight line! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Searching the left side for k.",
        "codeSnippet": "if (k ___ p) right = p - 1;",
        "correctAnswer": "<",
        "explanation": "If target is smaller than the pivot's index, move left."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Selector",
        "explanation": "You have learned to find the one among the many. Ace: 'The target is identified.'",
        "encouragementText": "Pico: 'Picked him! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Select terms!",
        "pairs": [
          { "key": "O(N)", "value": "Linear average" },
          { "key": "Elimination", "value": "Discarding 1/2 of work" },
          { "key": "k-th smallest", "value": "The goal" }
        ]
      }
    ]
  },
  {
    "order": 28,
    "title": "Unit 28: Search on Answer Space",
    "desc": "Beyond the index: Searching for the optimal value.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 2.8] The Optimizer",
        "explanation": "Ace: 'Sometimes the answer is a range of values, not an index. Can we binary search on the \"Answer Space\"? Yes, if our decision is \"Monotonic\" (If 10 works, 20 also works).' Pico: 'Searching for the best seed size! 100% 🦜'",
        "encouragementText": "Ace: 'Logic applies to value as much as to location.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Mandatory property to Binary Search on Answers?",
        "options": ["Sorting", "Monotonicity (A clear T/F split in the answer range)", "Colors", "Pico rule"],
        "correctAnswer": "Monotonicity (A clear T/F split in the answer range)",
        "explanation": "We need to know that if `X` is too large, all values `> X` are also too large."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Range Bounds",
        "explanation": "Ace: 'Set `low` to the absolute minimum possible answer and `high` to the maximum. Check the middle value with a helper function.'",
        "encouragementText": "Pico: 'Boundary flight! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Typical loop for answer space.",
        "codeSnippet": "while(low <= high) {\n  mid = low + (high - low) / 2;\n  if (isValid(mid)) { ___ ; low = mid + 1; }\n  else high = mid - 1;\n}",
        "correctAnswer": "ans = mid",
        "explanation": "Saving the best feasible answer found so far."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Aggressive Cows / Painters Partition",
        "explanation": "Ace: 'Famous problems where you binary search on the \"Minimum Distance\" or \"Maximum Time\" to find an optimal configuration.'",
        "encouragementText": "Ace: 'Search is the tool of the architect.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of Search on Answer Space?",
        "options": ["O(log N)", "O(CostOf(isValid) * log(Range))", "O(N)", "Pico guess"],
        "correctAnswer": "O(CostOf(isValid) * log(Range))",
        "explanation": "We do log(Range) checks, each taking time dependent on the feasibility check function."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Optimization",
        "explanation": "Ace: 'We normally look for either the SMALLEST feasible value or the LARGEST feasible value.'",
        "encouragementText": "Pico: 'Pick the best! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Feasibility function signature.",
        "codeSnippet": "bool isValid(int ___ );",
        "correctAnswer": "value",
        "explanation": "The check depends on the candidate answer value."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Logic Architect",
        "explanation": "You have turned search into a tool of optimization. Ace: 'The best value is found.'",
        "encouragementText": "Pico: 'Perfect seed size! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Answer terms!",
        "pairs": [
          { "key": "Monotonic", "value": "Yes/No boundary" },
          { "key": "isValid", "value": "Verification check" },
          { "key": "Range", "value": "Min to Max possible" }
        ]
      }
    ]
  },
  {
    "order": 29,
    "title": "Unit 29: Peak Element Hunting",
    "desc": "Finding the summit in unsorted terrain.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 2.9] The Mountain Scout",
        "explanation": "Ace: 'A Peak is a bird who is larger than both neighbors. In an unsorted array, we can still find a peak in logarithmic time!' Pico: 'How?! 100% 🦜'",
        "encouragementText": "Ace: 'Slope is enough to find the peak.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "If `arr[mid] < arr[mid+1]`, is there a peak to the left or right?",
        "options": ["Left", "Right", "Nowhere", "Pico rule"],
        "correctAnswer": "Right",
        "explanation": "Since the slope is increasing to the right, either the array keeps increasing to the boundary (making the end a peak) or it drops later (making a peak in between)."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Descent through Division",
        "explanation": "Ace: 'If `arr[mid] > arr[mid+1]`, our current mid might be the peak, or there's one to the left. Move the high bound to mid.'",
        "encouragementText": "Pico: 'Slide down! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Peak condition snippet.",
        "codeSnippet": "if (arr[mid] < arr[mid+1]) low = ___ ;",
        "correctAnswer": "mid + 1",
        "explanation": "Ascending slope guarantees a peak exists in the right half."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Real-world Signals",
        "explanation": "Ace: 'Peak finding is used to identify local maxima in digital signals and sensor streams.'",
        "encouragementText": "Ace: 'Local context identifies global features.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity for 1D Peak Finding?",
        "options": ["O(N)", "O(log N)", "O(1)", "Pico guess"],
        "correctAnswer": "O(log N)",
        "explanation": "By discarding half the array based on the slope, we hit the peak logarithmically."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Guarantees",
        "explanation": "Ace: 'Every array of size > 0 is guaranteed to have at least one peak.'",
        "encouragementText": "Pico: 'Always a winner! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "The final result.",
        "codeSnippet": "while (low < high) { ... } return ___ ;",
        "correctAnswer": "low",
        "explanation": "When low meets high, we've found the peak index."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Summit Pilot",
        "explanation": "You have navigated the chaotic slope to find the peak. Ace: 'The summit is conquered.'",
        "encouragementText": "Pico: 'I'm at the top! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Peak terms!",
        "pairs": [
          { "key": "Peak", "value": "A > neighbors" },
          { "key": "arr[m] < arr[m+1]", "value": "Go right" },
          { "key": "O(log N)", "value": "Search time" }
        ]
      }
    ]
  },
  {
    "order": 30,
    "title": "Unit 30: Stage 2 Graduation (The Strategist)",
    "desc": "Mastery of Divide & Conquer achieved.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[GRAND MISSION LORE 2.10] The Zenith of Strategy",
        "explanation": "Ace: 'You have mastered the split of Merge Sort, the pivot of Quick Sort, and the logic of Peak Finding. You solve problems by breaking them.' Pico: 'Stage 2 Complete! 400 lessons total! 100% 🦜'",
        "encouragementText": "Ace: 'Strategy is the multiplier of effort.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Which algorithm finds the k-th smallest in linear time?",
        "options": ["Merge Sort", "QuickSelect", "Heap Sort", "Pico rule"],
        "correctAnswer": "QuickSelect",
        "explanation": "Selective recursion is the key for single target discovery."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Progress Summary",
        "explanation": "10 units, 100 lessons. This stage has equipped you with recursive depth and optimal partitioning for the Academic Atlas. Ace: 'Divide with precision.'",
        "encouragementText": "Pico: '40% through the 1,000-lesson gauntlet! 🦜'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of Search on Answer Space?",
        "options": ["O(log N)", "O(Cost * log Range)", "O(N)", "Pico secret"],
        "correctAnswer": "O(Cost * log Range)",
        "explanation": "Dependent on the target value space."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Graduation Check",
        "explanation": "Ace: 'Prove you can transition from Recursive Merges to Randomized Pivots and Monotonic Answers in your mental buffers.' Pico: 'I'm a Strategist now! 100% 🦜'",
        "encouragementText": "Ace: 'The split reflects the whole through the lens of the recursion.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why use random pivots?",
        "options": ["Fun", "Adversarial defense and expected performance", "Less RAM", "Pico guess"],
        "correctAnswer": "Adversarial defense and expected performance",
        "explanation": "Prevents data from forcing the $O(N^2)$ worst-case."
      },
      {
        "type": "teaching",
        "questionText": "[FINAL SYNC] The 10x10x10 Path",
        "explanation": "You are 40% through the ultimate journey. Your next target: **Stage 3: Advanced Linear Logic**. Ace: 'Advanced partitioning and range logic are waiting.'",
        "encouragementText": "Pico: 'Stage 3 seeds are waiting! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Final stage signal.",
        "codeSnippet": "if (strategist == true) return ___ ;",
        "correctAnswer": "GRADUATE",
        "explanation": "You have successfully mastered the Strategy phase."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Strategist",
        "explanation": "The second gate is passed. The strategy is set. You are a Stage 2 Graduate. Ace: 'Welcome to the inner circle.'",
        "encouragementText": "Pico: 'Titan-Grade! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "[GRADUATION CHALLENGE] Output the status of your journey.",
        "codeSnippet": "for(int i=21; i<=30; i++) verify_strategy(i);\nreturn ___ ;",
        "correctAnswer": "COMPLETE",
        "explanation": "The second 200 lessons (Units 21-40 but I grouped them 10 per file in this rewrite) are verified."
      }
    ]
  },
  {
    "order": 31,
    "title": "Unit 31: 2D Matrix Search I (Sorted Matrix)",
    "desc": "Searching in a flattened 2D space.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 2.11] The Grid Map",
        "explanation": "Ace: 'If a matrix is sorted row by row (e.g. last of row 1 < first of row 2), we can treat it as one giant 1D array of size N*M and Binary Search!' Pico: 'One big line! 100% 🦜'",
        "encouragementText": "Ace: 'Geometry is the illusion of layout; the index is the reality.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "If a matrix is N x M, what is the index of element at [row][col] in 1D?",
        "options": ["row + col", "row * M + col", "row + col * N", "Pico rule"],
        "correctAnswer": "row * M + col",
        "explanation": "Standard row-major mapping."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Reverse Mapping",
        "explanation": "Ace: 'To get row/col from 1D index `idx`: `row = idx / M`, `col = idx % M`.'",
        "encouragementText": "Pico: 'Back to the grid! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Middle element in matrix search.",
        "codeSnippet": "val = matrix[mid / M][ ___ ];",
        "correctAnswer": "mid % M",
        "explanation": "Accessing the 2D position using the 1D index."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Constraints",
        "explanation": "Ace: 'This only works if the rows are strictly ordered in sequence. If only rows and columns are individually sorted, we need a different plan.'",
        "encouragementText": "Ace: 'Prerequisites defined the method.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of searching in a strictly sorted matrix?",
        "options": ["O(N*M)", "O(log(N*M))", "O(N + M)", "Pico guess"],
        "correctAnswer": "O(log(N*M))",
        "explanation": "Same as binary searching an array of that size."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Step Count",
        "explanation": "Ace: 'For a 1000x1000 matrix (1 million elements), we find the target in just 20 steps.'",
        "encouragementText": "Pico: 'Super speed! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Total elements in N*M matrix.",
        "codeSnippet": "high = (N * M) ___ 1;",
        "correctAnswer": "-",
        "explanation": "The 1D index range of an N*M array."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Grid Scout",
        "explanation": "You have flattened the world to find your target. Ace: 'The map is clear.'",
        "encouragementText": "Pico: 'Grid locked! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Matrix terms!",
        "pairs": [
          { "key": "row", "value": "idx / M" },
          { "key": "col", "value": "idx % M" },
          { "key": "flatten", "value": "1D perspective" }
        ]
      }
    ]
  },
  {
    "order": 32,
    "title": "Unit 32: 2D Matrix Search II (Staircase Search)",
    "desc": "The O(N+M) diagonal hunt.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 2.12] The Zig-Zag path",
        "explanation": "Ace: 'If rows and columns are sorted independently, start at the TOP-RIGHT corner. If target is smaller, move LEFT. If target is larger, move DOWN.' Pico: 'Walking the stairs! 100% 🦜'",
        "encouragementText": "Ace: 'Alignment in two axes creates the diagonal path of least resistance.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why start at Top-Right (or Bottom-Left)?",
        "options": ["Random", "Because those corners have one neighbor larger and one neighbor smaller, allowing a decision", "It looks cool", "Pico rule"],
        "correctAnswer": "Because those corners have one neighbor larger and one neighbor smaller, allowing a decision",
        "explanation": "At [0, n], moving left decreases value, moving down increases value. This enables a binary choice."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Step Logic",
        "explanation": "Ace: 'Current = matrix[r][c]. If target < current, c--. If target > current, r++.'",
        "encouragementText": "Pico: 'Left or Down! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Boundary check for Staircase search.",
        "codeSnippet": "while (r < N && c ___ 0)",
        "correctAnswer": ">=",
        "explanation": "Ensuring we don't walk off the grid."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Search Efficiency",
        "explanation": "Ace: 'In an N x N matrix, this takes at most 2N steps. Much faster than scanning all $N^2$ items.'",
        "encouragementText": "Ace: 'Pathing is the optimization of scan.' "
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of Staircase search?",
        "options": ["O(N log M)", "O(N + M)", "O(N * M)", "Pico guess"],
        "correctAnswer": "O(N + M)",
        "explanation": "In each step, we eliminate either an entire row or an entire column."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Initial position",
        "explanation": "Ace: 'Row = 0, Col = M - 1. This is the top right.'",
        "encouragementText": "Pico: 'Top corner! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Moving down.",
        "codeSnippet": "if (target > matrix[r][c]) ___ ;",
        "correctAnswer": "r++",
        "explanation": "Target is larger, so we look in higher-indexed rows."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Staircase Master",
        "explanation": "You have navigated the rows and columns to find the intersection. Ace: 'The target is trapped.'",
        "encouragementText": "Pico: 'Zig zag victory! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Pathing!",
        "pairs": [
          { "key": "Target < current", "value": "Move Left" },
          { "key": "Target > current", "value": "Move Down" },
          { "key": "Starting point", "value": "Top Right corner" }
        ]
      }
    ]
  },
  {
    "order": 33,
    "title": "Unit 33: Binary Search for Missing Element",
    "desc": "Finding the gap in a sequence.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 2.13] The Empty Nest",
        "explanation": "Ace: 'If you have a sorted sequence [1, 2, 3, 5], you can find the first missing element (4) using Binary Search by checking if `arr[idx] == idx + start_val`.' Pico: 'Where did the seed go? 100% 🦜'",
        "encouragementText": "Ace: 'Presence is verified by the expectation of the index.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "In [1, 2, 3, 5], at index 3, the value is 5. What does `5 - 3 = 2` (where start=1) tell us?",
        "options": ["Nothing", "A gap exists to the left", "Everything is okay", "Pico rule"],
        "correctAnswer": "A gap exists to the left",
        "explanation": "If no gap existed, index 3 should be 4 (3 + 1). Since it's 5, someone is missing earlier."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Leftward Bias",
        "explanation": "Ace: 'Always look left as long as the offset is wrong, to find the FIRST gap.'",
        "encouragementText": "Pico: 'Left scout! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "The offset check.",
        "codeSnippet": "if (arr[mid] - mid ___ 1) low = mid + 1;",
        "correctAnswer": "==",
        "explanation": "If value - index == start_val, everything is aligned so far; look right."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Array Completion",
        "explanation": "Ace: 'Used to find the first available ID or the first hole in a sequence of sorted records.'",
        "encouragementText": "Ace: 'Silence of the element is the data of the search.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity to find 1 missing element in sorted array?",
        "options": ["O(N)", "O(log N)", "O(1)", "Pico guess"],
        "correctAnswer": "O(log N)",
        "explanation": "Standard binary search efficiency."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Result Logic",
        "explanation": "Ace: 'The answer is usually `low + start_val` after the loop finishes.'",
        "encouragementText": "Pico: 'Mystery solved! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Starting offset.",
        "codeSnippet": "Offset = arr[0] - ___ ;",
        "correctAnswer": "0",
        "explanation": "Identifying the baseline relationship between value and index."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Gap Scout",
        "explanation": "You have located the void in the structure. Ace: 'The missing is found.'",
        "encouragementText": "Pico: 'I found the hole! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Gap terms!",
        "pairs": [
          { "key": "Value - Index", "value": "Offset marker" },
          { "key": "O(log N)", "value": "Efficiency" },
          { "key": "Missing", "value": "Expected - Actual" }
        ]
      }
    ]
  },
  {
    "order": 34,
    "title": "Unit 34: Ternary Search Foundations",
    "desc": "Splitting into three: Search in unimodal functions.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 2.14] The Hill Hunter",
        "explanation": "Ace: 'Binary search finds values. Ternary Search finds the peak of a curved \"Hill\" (unimodal function). It uses two midpoints (m1, m2) to split the range into thirds.' Pico: 'Three wings! 100% 🦜'",
        "encouragementText": "Ace: 'Trisection is the logic of optimization.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "If f(m1) < f(m2) and we want the MAXIMUM, where is it?",
        "options": ["Left of m1", "Right of m1", "At m1", "Pico rule"],
        "correctAnswer": "Right of m1",
        "explanation": "Since m1 is lower than m2, the peak cannot be to the left of m1."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] $O(\log_3 N)$",
        "explanation": "Ace: 'Ternary search is slightly slower than binary search but handles functions where binary search fails.'",
        "encouragementText": "Pico: 'Big steps! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Updating low in ternary maximum search.",
        "codeSnippet": "if (f(m1) < f(m2)) low = ___ ;",
        "correctAnswer": "m1",
        "explanation": "Discarding the leftmost 1/3 of the range."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Real-world Math",
        "explanation": "Ace: 'Used in physics simulations and financial models to find the point of highest return or lowest energy.'",
        "encouragementText": "Ace: 'The peak is the destination of the search.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Can Ternary Search find the minimum?",
        "options": ["Yes, just flip the comparison", "No", "Only for lines", "Pico guess"],
        "correctAnswer": "Yes, just flip the comparison",
        "explanation": "It works for any unimodal function (one peak or one valley)."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Iterations",
        "explanation": "Ace: 'For floating point peaks, we often iterate exactly 100 times to guarantee precision.'",
        "encouragementText": "Pico: 'Keep clicking! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Formula for m1.",
        "codeSnippet": "m1 = low + (high - low) / ___ ;",
        "correctAnswer": "3",
        "explanation": "One-third of the way through the current range."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Hill Scout",
        "explanation": "You have located the highest point in the function. Ace: 'The zenith is yours.'",
        "encouragementText": "Pico: 'Top of the mountain! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Ternary terms!",
        "pairs": [
          { "key": "m1, m2", "value": "Trisection points" },
          { "key": "Unimodal", "value": "One local extreme" },
          { "key": "O(log3 N)", "value": "Complexity" }
        ]
      }
    ]
  },
  {
    "order": 35,
    "title": "Unit 35: Fibonacci Search (Introduction)",
    "desc": "Using the golden sequence for non-power-of-two division.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 2.15] The Spiral Scout",
        "explanation": "Ace: 'Fibonacci Search is like Binary Search but uses Fibonacci numbers to divide the range. Historically faster on hardware that hates division!' Pico: 'Jumping by the golden rule! 100% 🦜'",
        "encouragementText": "Ace: 'Natural sequences reflect hardware efficiency.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Main benefit of Fibonacci Search over Binary Search in old CPUs?",
        "options": ["It only uses addition and subtraction to calculate indices", "It's faster at math", "It uses less RAM", "Pico rule"],
        "correctAnswer": "It only uses addition and subtraction to calculate indices",
        "explanation": "Division was very expensive; adding/subtracting Fibonacci numbers is almost free."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Fibonacci Property",
        "explanation": "Ace: 'Wait for the smallest Fib number $F_k \ge N$. Then use $F_{k-1}$ and $F_{k-2}$ as your splitters.'",
        "encouragementText": "Pico: '1, 1, 2, 3, 5, 8... 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Recurrence for Fibonacci.",
        "codeSnippet": "F(n) = F(n-1) + ___ ;",
        "correctAnswer": "F(n-2)",
        "explanation": "Every number is the sum of the two preceding ones."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Cache locality",
        "explanation": "Ace: 'Some researchers argue Fibonacci search stays \"Closer\" to the previous search area, which can be better for specific disk access patterns.'",
        "encouragementText": "Ace: 'Locality is the ghost of performance.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of Fibonacci search?",
        "options": ["O(N)", "O(log N)", "O(1)", "Pico guess"],
        "correctAnswer": "O(log N)",
        "explanation": "Like binary search, it reduces the interval exponentially."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Offset",
        "explanation": "Ace: 'We track an `offset` to correctly identify the index within the current Fibonacci fragment.'",
        "encouragementText": "Pico: 'Track the gap! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Wait condition.",
        "codeSnippet": "while (fibM > ___ ) { ... }",
        "correctAnswer": "1",
        "explanation": "Continuing until the Fibonacci fragment is reduced to size 1."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Spiral Architect",
        "explanation": "You have synchronized your search with the rhythm of life. Ace: 'The sequence is followed.'",
        "encouragementText": "Pico: 'Golden seeds! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Fib terms!",
        "pairs": [
          { "key": "Golden Ratio", "value": "1.618 approx" },
          { "key": "Addition only", "value": "Arithmetic cost" },
          { "key": "log N", "value": "Complexity" }
        ]
      }
    ]
  },
  {
    "order": 36,
    "title": "Unit 36: Interpolation Search (The Estimator)",
    "desc": "Predicting the index based on data distribution.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 2.16] The Smart Guess",
        "explanation": "Ace: 'If you search for \"Zebra\" in a dictionary, you don't start in the middle. You guess near the end. Interpolation Search uses a formula to predict where a value is!' Pico: 'Smart bird guessing! 100% 🦜'",
        "codeSnippet": "pos = low + ( (target-arr[low]) * (high-low) / (arr[high]-arr[low]) )",
        "encouragementText": "Ace: 'Knowledge of distribution is the shortcut to location.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "When is Interpolation Search extremely fast?",
        "options": ["Unsorted data", "Uniformly distributed data (e.g. [10, 20, 30, 40])", "Small data", "Pico rule"],
        "correctAnswer": "Uniformly distributed data (e.g. [10, 20, 30, 40])",
        "explanation": "In uniform data, the formula gives the exact index in nearly constant time."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] O(log log N)",
        "explanation": "Ace: 'For uniform data, it takes $O(\log \log N)$ steps. For N=1 Billion, this is about 5 steps!' Pico: 'Blinked and found it! 100% 🦜'",
        "encouragementText": "Pico: 'So fast! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Interpolation slope component.",
        "codeSnippet": "Slope = (target - arr[low]) / (arr[high] - ___ );",
        "correctAnswer": "arr[low]",
        "explanation": "Calculating how far the target is along the range of values."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Fatal Flaw",
        "explanation": "Ace: 'If the data is NOT uniform (e.g. [1, 2, 4, 8, 1000000]), Interpolation Search can degrade to O(N). Always use it with caution!'",
        "encouragementText": "Ace: 'The model must match the data.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Worst-case for Interpolation Search?",
        "options": ["O(log N)", "O(N)", "O(log log N)", "Pico guess"],
        "correctAnswer": "O(N)",
        "explanation": "Occurs when data is exponentially distributed."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Check bounds",
        "explanation": "Ace: 'You must ensure target is between `arr[low]` and `arr[high]` before interpolating, or the formula might go out of range.'",
        "encouragementText": "Pico: 'Stay inside! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "While loop condition.",
        "codeSnippet": "while (low <= high && target >= arr[low] && target ___ arr[high])",
        "correctAnswer": "<=",
        "explanation": "Ensuring the target is within the sorted range."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Value Predictor",
        "explanation": "You have looked into the value of the data to find its index. Ace: 'The estimate is precise.'",
        "encouragementText": "Pico: 'I guessed it! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Estimator terms!",
        "pairs": [
          { "key": "O(log log N)", "value": "Optimal complexity" },
          { "key": "Uniform", "value": "Best data shape" },
          { "key": "formula", "value": "Linear interpolation" }
        ]
      }
    ]
  },
  {
    "order": 37,
    "title": "Unit 37: 2D Peak Finding (Row Scan)",
    "desc": "Finding a peak in a mountain range of data.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 2.17] The 3D Forest",
        "explanation": "Ace: 'In a 2D matrix, a peak is an element larger than its 4 neighbors (Up, Down, Left, Right). We can find it in O(N log M) using a binary search on columns!' Pico: 'Finding the king peak! 100% 🦜'",
        "encouragementText": "Ace: 'Higher dimensions require layered strategy.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Strategy for 2D Peak finding?",
        "options": ["Check every item", "Binary search columns, find global max in mid-column, check neighbors", "Sort the matrix", "Pico rule"],
        "correctAnswer": "Binary search columns, find global max in mid-column, check neighbors",
        "explanation": "If the global max of middle-column is less than its neighbor, a 2D peak MUST exist in that neighbor's half."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Max in Column",
        "explanation": "Ace: 'Finding the max in a column takes O(N). We do this log(M) times. Total O(N log M).'",
        "encouragementText": "Pico: 'Vertical scan! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Column splitting.",
        "codeSnippet": "midCol = lowCol + (highCol - lowCol) / ___ ;",
        "correctAnswer": "2",
        "explanation": "Standard binary search subdivision on columns."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Mountain Mapping",
        "explanation": "Ace: 'This algorithm is used in terrain analysis to find local summits without checking every pixel.'",
        "encouragementText": "Ace: 'The peak is the point of local dominance.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity for N x N matrix?",
        "options": ["O(N^2)", "O(N log N)", "O(log N)", "Pico guess"],
        "correctAnswer": "O(N log N)",
        "explanation": "Scanning N items in mid-column, repeated log N times."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] 2D Guarantee",
        "explanation": "Ace: 'Like 1D, every non-empty matrix is guaranteed to have at least one peak.'",
        "encouragementText": "Pico: 'Found gold! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Checking the neighbor in row R.",
        "codeSnippet": "if (matrix[R][midCol] < matrix[R][midCol + 1]) lowCol = ___ ;",
        "correctAnswer": "midCol + 1",
        "explanation": "If the global max of the column has a larger neighbor, we move toward that neighbor."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Mountain King",
        "explanation": "You have located the absolute summit of the 2D grid. Ace: 'The height is yours.'",
        "encouragementText": "Pico: 'Higher and higher! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match 2D terms!",
        "pairs": [
          { "key": "Global Max in Col", "value": "Pivot for comparison" },
          { "key": "O(N log M)", "value": "Complexity" },
          { "key": "4-neighbor", "value": "Peak definition" }
        ]
      }
    ]
  },
  {
    "order": 38,
    "title": "Unit 38: Median of Row-Sorted Matrix",
    "desc": "Finding the global middle across multiple sorted lines.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 2.18] The Weighted Grid",
        "explanation": "Ace: 'Each row in a matrix is sorted. To find the global median, we binary search on the ANSWER RANGE [Min, Max] and use `upper_bound` in each row to count how many items are smaller than mid.' Pico: 'Median hunt in the rows! 100% 🦜'",
        "encouragementText": "Ace: 'Search on range is the master key for global medians.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "For a 3x3 matrix, how many elements must be smaller than the median?",
        "options": ["2", "4 (Total/2)", "8", "Pico rule"],
        "correctAnswer": "4 (Total/2)",
        "explanation": "In 9 elements, the median has 4 values <= and 4 values >= to it."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Row-wise Counting",
        "explanation": "Ace: 'For a candidate value `mid`, we call `upper_bound` on every row. Total count = the number of elements <= `mid` globaly.'",
        "encouragementText": "Pico: 'Count them up! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Initial range for median search.",
        "codeSnippet": "low = min_of_first_col;\nhigh = max_of_ ___ ;",
        "correctAnswer": "last_col",
        "explanation": "In row-sorted matrices, the min/max must be in the first/last columns."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Statistical Queries",
        "explanation": "Ace: 'Efficient way to find Percentiles and Medians in sharded database tables without merging them.'",
        "encouragementText": "Ace: 'Global knowledge from local order.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity for N x M matrix?",
        "options": ["O(N*M)", "O(N * log M * log Range)", "O(N+M)", "Pico guess"],
        "correctAnswer": "O(N * log M * log Range)",
        "explanation": "log Range for binary search steps, and N * log M to count using upper_bound on rows."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Step Logic",
        "explanation": "Ace: 'If count < needed_median_count, move `low = mid + 1`. Else move `high = mid - 1`.'",
        "encouragementText": "Pico: 'Nudge the middle! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Counting in row i.",
        "codeSnippet": "count += upper_bound(matrix[i].begin(), matrix[i].end(), mid) - matrix[i]. ___ ();",
        "correctAnswer": "begin",
        "explanation": "Standard STL way to get count of elements <= mid."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Grid Median",
        "explanation": "You have balanced the weights of the matrix. Ace: 'The median is absolute.'",
        "encouragementText": "Pico: 'Found the center! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Grid Median terms!",
        "pairs": [
          { "key": "Search Range", "value": "Val space [Min, Max]" },
          { "key": "upper_bound", "value": "Per-row count" },
          { "key": "log Range", "value": "Binary search steps" }
        ]
      }
    ]
  },
  {
    "order": 39,
    "title": "Unit 39: Intro to Hybrid Sorts (Timsort)",
    "desc": "Real-world sorting: The best of both worlds.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 2.19] The Master's Blade",
        "explanation": "Ace: 'Python and Java use Timsort. It combines Merge Sort for large scales and Insertion Sort for small scales to handle real-world shuffled data.' Pico: 'High speed bird flight! 100% 🦜'",
        "encouragementText": "Ace: 'Hybrids survive where pure forms struggle.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does Timsort do first?",
        "options": ["Sort normally", "Find already-sorted sequences called \"Runs\"", "Shuffle everything", "Pico rule"],
        "correctAnswer": "Find already-sorted sequences called \"Runs\"",
        "explanation": "It takes advantage of natural order already present in the data."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] MinRun",
        "explanation": "Ace: 'If a run is too short, Timsort uses Insertion Sort to pad it to a standard size.'",
        "encouragementText": "Pico: 'Pad the nest! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Complexity of Timsort (Average).",
        "codeSnippet": "Complexity = O( ___ );",
        "correctAnswer": "N log N",
        "explanation": "Based on Merge Sort's global structure."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Adaptive Power",
        "explanation": "Ace: 'Timsort is O(N) for already sorted data and O(N log N) for random data. It is the gold standard for software engineering.'",
        "encouragementText": "Ace: 'Adaptability is the highest form of order.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Is Timsort stable?",
        "options": ["Yes (Crucial for its role as standard library sort)", "No", "Sometimes", "Pico guess"],
        "correctAnswer": "Yes (Crucial for its role as standard library sort)",
        "explanation": "Stability is mandatory for general-purpose sorts in programming languages."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Galoping Merge",
        "explanation": "Ace: 'When merging, Timsort uses \"Galloping\" to skip large sections of the other array if one is dominating consistently.'",
        "encouragementText": "Pico: 'Gallop! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Smallest fragment size before using Merge.",
        "codeSnippet": "MinRunSize = ___ ;",
        "correctAnswer": "32",
        "explanation": "Typically 32 or 64 elements, where Insertion Sort is faster than Merge."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Hybrid Scout",
        "explanation": "You have seen the pinnacle of modern sorting architecture. Ace: 'The tool is refined.'",
        "encouragementText": "Pico: 'Mixed power! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Hybrid terms!",
        "pairs": [
          { "key": "Run", "value": "Already sorted part" },
          { "key": "Galloping", "value": "Fast skip merge" },
          { "key": "Timsort", "value": "Python/Java standard" }
        ]
      }
    ]
  },
  {
    "order": 40,
    "title": "Unit 40: Half-way Graduation (The Grid Lord)",
    "desc": "Claiming the 40% threshold: Search and Order are your servants.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[GRAND MISSION LORE 2.20] The Summit of 2D Strategy",
        "explanation": "Ace: '400 Lessons. You have navigated matrices, found gaps, and mastered the hybrid tools of the modern world. You are a Grid Lord.' Pico: 'Stage 2 Graduation! 400 lessons! SQUAWK! 100% 🦜'",
        "encouragementText": "Ace: 'Mastery of the grid is the mastery of the world.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity for Staircase Search in sorted matrix?",
        "options": ["O(N*M)", "O(N + M)", "O(log(N*M))", "Pico guess"],
        "correctAnswer": "O(N + M)",
        "explanation": "Efficient diagonal traversal."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Depth Summary",
        "explanation": "20 units, 200 lessons in this stage. From D&C splits to Grid peaks and Hybrid blends. Ace: 'Search with depth.'",
        "encouragementText": "Pico: '40% through the 1,000-lesson gauntlet! 🦜'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Best case complexity for Insertion Sort?",
        "options": ["O(log N)", "O(N)", "O(1)", "Pico secret"],
        "correctAnswer": "O(N)",
        "explanation": "Perfect for almost-sorted data."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Graduation Check",
        "explanation": "Ace: 'Prove you can transition from Recursive Splits to Grid Staircases and Timsort Runs in your mental buffers.' Pico: 'I'm a Grid Lord now! 100% 🦜'",
        "encouragementText": "Ace: 'The grid reflects the truth through the lens of the navigator.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "When is Interpolation Search $O(\log \log N)$?",
        "options": ["Always", "Uniformly distributed data", "Random data", "Pico guess"],
        "correctAnswer": "Uniformly distributed data",
        "explanation": "Estimation works best when data follows a linear pattern."
      },
      {
        "type": "teaching",
        "questionText": "[FINAL SYNC] The 10x10x10 Path",
        "explanation": "You are 40% through the ultimate journey. Your next target: **Stage 3: Advanced Linear Logic**. Ace: 'Advanced partitioning and bitwise search are waiting.'",
        "encouragementText": "Pico: 'Stage 3 seeds are waiting! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Final stage signal.",
        "codeSnippet": "if (grid_lord == true) return ___ ;",
        "correctAnswer": "GRADUATE",
        "explanation": "You have successfully mastered the Grid Strategy phase."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Grid Lord",
        "explanation": "The fourth gate is passed. The grid is yours. You are a Stage 2 Graduate. Ace: 'Welcome to the inner circle.'",
        "encouragementText": "Pico: 'Titan-Grade! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "[FINAL CHALLENGE] Output the status of your journey.",
        "codeSnippet": "for(int i=21; i<=40; i++) verify_grid_logic(i);\nreturn ___ ;",
        "correctAnswer": "COMPLETE",
        "explanation": "The first 400 lessons of the 1,000-lesson curriculum for Sort/Search are verified."
      }
    ]
  }
];

module.exports = stage2;
