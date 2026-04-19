const stage4 = [
  {
    "order": 61,
    "title": "Unit 61: Median of Medians",
    "desc": "The deterministic selection: Guaranteeing O(N) worst-case for the k-th element.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 7.1] The Picky General",
        "explanation": "Ace: 'QuickSelect is fast on average, but O(N^2) in the worst case. Median of Medians is a deterministic algorithm that finds a \"good-enough\" pivot by splitting the array into groups of 5 and finding their medians.' Pico: 'Grouping the birds to find the middle bird! 100% 🦜'",
        "codeSnippet": "int pivot = medianOfMedians(arr, groupsOf5);",
        "encouragementText": "Ace: 'Certainty in the worst case is the foundation of robust theory.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why do we use groups of exactly 5 in this algorithm?",
        "options": ["It's a lucky number", "5 is the smallest odd number that guarantees at least 30% of elements are smaller/larger than the pivot", "CPU cache size", "Pico rule"],
        "correctAnswer": "5 is the smallest odd number that guarantees at least 30% of elements are smaller/larger than the pivot",
        "explanation": "Math proves that groups of 5 ensure the resulting pivot prunes enough of the search space to keep the recurrence T(n) = T(n/5) + T(7n/10) + O(n) linear."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Recurrence Relation",
        "explanation": "Ace: 'T(n) = T(n/5) [work to find medians] + T(7n/10) [work on partitioned side] + O(n) [partitioning work]. This resolves to O(N)!' Pico: 'One big math wing! 100% 🦜'",
        "encouragementText": "Pico: 'Math wings! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Base case for Median of Medians recursion.",
        "codeSnippet": "if (n <= ___ ) return brute_force_median(arr);",
        "correctAnswer": "5",
        "explanation": "If the array is 5 or smaller, we just sort it and pick the middle element."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Standard Library",
        "explanation": "Ace: 'C++'s `std::nth_element` usually uses Introsort/Introselect which starts with QuickSelect and switches to Median of Medians if the recursion depth gets too high.'",
        "encouragementText": "Ace: 'Hybrids are the engineers' response to theoretical extremes.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of Median of Medians?",
        "options": ["O(N log N)", "O(N) Worst Case", "O(1)", "Pico guess"],
        "correctAnswer": "O(N) Worst Case",
        "explanation": "Unlike random QuickSelect, this algorithm NEVER degrades to O(N^2)."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Grouping Logic",
        "explanation": "Ace: 'Each group of 5 is sorted (O(1)). The medians are collected into a new array. Then we recursively find the median of THAT array.'",
        "encouragementText": "Pico: 'Sort the little groups! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Finding the number of groups.",
        "codeSnippet": "int num_groups = (n + 4) ___ 5;",
        "correctAnswer": "/",
        "explanation": "Standard ceiling division to find how many groups of 5 exist."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Deterministic Master",
        "explanation": "You have removed luck from the equation. The k-th element is always found in linear time. Ace: 'The result is guaranteed.'",
        "encouragementText": "Pico: 'No more gambling! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Selection terms!",
        "pairs": [
          { "key": "Median of Medians", "value": "O(N) Deterministic" },
          { "key": "QuickSelect", "value": "O(N) Average / O(N^2) Worst" },
          { "key": "Introselect", "value": "Hybrid of both" }
        ]
      }
    ]
  },
  {
    "order": 62,
    "title": "Unit 62: QuickSelect vs Random Selection",
    "desc": "The power of the coin flip: Why average O(N) is often better.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 7.2] The Lucky Scout",
        "explanation": "Ace: 'While Median of Medians is theoretically superior, Random QuickSelect is usually faster in practice because it has a lower constant factor. By picking a random pivot, we avoid $O(N^2)$ cases in 99.99% of real data.' Pico: 'Closing your eyes and picking a seed! 100% 🦜'",
        "codeSnippet": "int pivot = arr[rand() % n];",
        "encouragementText": "Ace: 'Practicality is the art of neglecting the improbable.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the probability of picking the median as a pivot in one try?",
        "options": ["0%", "1/N", "50%", "Pico rule"],
        "correctAnswer": "1/N",
        "explanation": "Assuming all elements are unique, there is only one true median."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Partitioning",
        "explanation": "Ace: 'Once the pivot is picked, we move smaller elements to the left and larger to the right. If the k-th index is in the left side, we ignore the right!' Pico: 'Throwing away half the array! 100% 🦜'",
        "encouragementText": "Pico: 'Half off! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Determining which side to recurse into.",
        "codeSnippet": "if (k < pivot_idx) return select(arr, left, pivot_idx-1, k);\nelse if (k > pivot_idx) return select(arr, ___ , right, k);",
        "correctAnswer": "pivot_idx+1",
        "explanation": "We only continue in the range where the rank k must reside."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Stack Depth",
        "explanation": "Ace: 'Random QuickSelect can be implemented iteratively to avoid stack overflow, even in the O(N^2) case.'",
        "encouragementText": "Ace: 'Structure the loop to preserve the frame.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of Random QuickSelect on a sorted array if you always pick the first element as pivot?",
        "options": ["O(N)", "O(N log N)", "O(N^2)", "Pico guess"],
        "correctAnswer": "O(N^2)",
        "explanation": "This is the 'Worst Pivot' scenario where we only prune one element at a time."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Practical Speed",
        "explanation": "Ace: 'In industry, standard QuickSelect is ~20x faster than Median of Medians for arrays smaller than 10,000 elements.'",
        "encouragementText": "Pico: 'Faster than sound! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Randomizing the pivot.",
        "codeSnippet": "swap(&arr[low + rand() % (high - low + 1)], &arr[ ___ ]);",
        "correctAnswer": "high",
        "explanation": "Moving a random element to the pivot position before partitioning."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Fortune Seeker",
        "explanation": "You have learned when to trust the dice. Average speed is the currency of the real world. Ace: 'The bet is calculated.'",
        "encouragementText": "Pico: 'Feeling lucky! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Choice terms!",
        "pairs": [
          { "key": "Random Pivot", "value": "Probabilistic speed" },
          { "key": "Partition", "value": "Eliminating range" },
          { "key": "K-th smallest", "value": "Target rank" }
        ]
      }
    ]
  },
  {
    "order": 63,
    "title": "Unit 63: Smoothsort",
    "desc": "Sorting with the golden ratio: Leonardo Heats and nearly-ordered work.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 7.3] The Leonardo Loom",
        "explanation": "Ace: 'Smoothsort is a variation of Heapsort that uses Leonardo Numbers ($1, 1, 3, 5, 15, ...$) to build a collection of heaps. It is uniquely O(N) for nearly sorted data.' Pico: 'Building nests that grow naturally! 100% 🦜'",
        "codeSnippet": "L(n) = L(n-1) + L(n-2) + 1;",
        "encouragementText": "Ace: 'Geometry and order are the silent partners of the machine.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What makes Smoothsort better than standard Heapsort?",
        "options": ["It's faster for random data", "It's adaptive: O(N) when the array is already sorted", "Uses less memory", "Pico rule"],
        "correctAnswer": "It's adaptive: O(N) when the array is already sorted",
        "explanation": "Standard Heapsort is O(N log N) even if input is sorted. Smoothsort 'recognizes' the order."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Leonardo Heaps",
        "explanation": "Ace: 'Unlike binary heaps, Leonardo heaps are shaped like trees of size L(n). They are merged as the array is traversed.' Pico: 'A forest of different sizes! 100% 🦜'",
        "encouragementText": "Pico: 'Leonardo's forest! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Leonardo sequence step.",
        "codeSnippet": "L_next = L_curr + L_prev ___ 1;",
        "correctAnswer": "+",
        "explanation": "L(k) = L(k-1) + L(k-2) + 1. Similar to Fibonacci but with a +1 offset."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Dijkstra's Algorithm",
        "explanation": "Ace: 'Smoothsort was invented by Edsger W. Dijkstra. It is notoriously difficult to implement correctly but mathematically beautiful.'",
        "encouragementText": "Ace: 'Mastery of the complex is the proof of the architect.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of Smoothsort on random data?",
        "options": ["O(N)", "O(N log N)", "O(N^2)", "Pico guess"],
        "correctAnswer": "O(N log N)",
        "explanation": "In the worst case, it matches Heapsort's complexity."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] String of Heaps",
        "explanation": "Ace: 'The algorithm maintains a sequence of Leonardo heaps. As it moves through the array, it combines two heaps into one larger Leonardo heap.'",
        "encouragementText": "Pico: 'Merge the nests! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Condition to merge two heaps of sizes L(x) and L(x-1).",
        "codeSnippet": "if (last_two_sizes_are_sequential) combine_to_make(L_ ___ );",
        "correctAnswer": "x+1",
        "explanation": "The properties of Leonardo numbers allow them to combine into the next rank."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Smooth Operator",
        "explanation": "You have learned to ride the wave of existing order. The sorted array is but a flat surface to your eyes. Ace: 'The flow is smooth.'",
        "encouragementText": "Pico: 'Golden ratio sort! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Smooth terms!",
        "pairs": [
          { "key": "Leonardo Number", "value": "Heap size rule" },
          { "key": "Adaptive", "value": "O(N) for sorted data" },
          { "key": "Heapsort Variant", "value": "Underlying logic" }
        ]
      }
    ]
  },
  {
    "order": 64,
    "title": "Unit 64: Patience Sorting (LIS connection)",
    "desc": "Sorting like a card player: Finding sequences through piles.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 7.4] The Card Shark",
        "explanation": "Ace: 'Patience sorting is motivated by the game of Solitaire. You place every incoming card on the first pile whose top card is GREATER than the current. If no such pile exists, create a new one to the right.' Pico: 'Stacking cards to find the longest flight! 100% 🦜'",
        "codeSnippet": "while(card < pile.top()) ???",
        "encouragementText": "Ace: 'Complexity can be decomposed into layers of simple rules.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What property of the piles allows finding the Longest Increasing Subsequence (LIS)?",
        "options": ["The total weight", "The number of piles equals the length of the LIS", "The color of cards", "Pico rule"],
        "correctAnswer": "The number of piles equals the length of the LIS",
        "explanation": "Every time you create a new pile, it signifies that the current element cannot continue any previous subsequence, effectively increasing the LIS length."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Complexity",
        "explanation": "Ace: 'To find the correct pile, we use Binary Search on the top elements of the piles. This makes the whole process O(N log N).' Pico: 'Searching for the nest! 100% 🦜'",
        "encouragementText": "Pico: 'Log N search! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Binary search for the leftmost pile.",
        "codeSnippet": "auto it = std::lower_bound(piles.begin(), piles.end(), ___ );",
        "correctAnswer": "card",
        "explanation": "Finding the first pile whose top is >= our current card."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Multi-way Merge",
        "explanation": "Ace: 'Once the cards are into piles, each pile is sorted in descending order. To fully sort the array, you must merge these piles using a Priority Queue.'",
        "encouragementText": "Ace: 'The decomposition is followed by the unification.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "If you process [3, 5, 2, 1, 4, 6], how many piles do you get?",
        "options": ["2", "3", "4", "Pico guess"],
        "correctAnswer": "3",
        "explanation": "3 (pile 1). 5 (pile 2). 2 (top of pile 1). 1 (top of pile 1). 4 (top of pile 2). 6 (pile 3)."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Backpointers",
        "explanation": "Ace: 'To reconstruct the ACTUAL LIS (not just the length), every card must point to the top of the pile to its left when it's placed.'",
        "encouragementText": "Pico: 'Look left! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Updating the pile.",
        "codeSnippet": "if (it == piles.end()) piles.push_back(card);\nelse *it = ___ ;",
        "correctAnswer": "card",
        "explanation": "Replacing the top of the found pile with our smaller card."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Patient Archer",
        "explanation": "You have learned to see the sequences hidden within the chaos. The piles reveal the truth. Ace: 'The sequence is identified.'",
        "encouragementText": "Pico: 'One card at a time! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Patience terms!",
        "pairs": [
          { "key": "Num Piles", "value": "LIS Length" },
          { "key": "Lower Bound", "value": "Finding the pile" },
          { "key": "Greedy Placement", "value": "The base rule" }
        ]
      }
    ]
  },
  {
    "order": 65,
    "title": "Unit 65: Block Sort (O(1) Merge)",
    "desc": "Sorting in the tightest spot: Merge sort without the extra array.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 7.5] The Packed Nest",
        "explanation": "Ace: 'Merge sort usually needs O(N) extra space. Block Sort achieves O(N log N) time with O(1) extra space by splitting the array into blocks and using part of the array as a \"Buffer\" to perform the swaps.' Pico: 'Moving the seeds without leaving the bucket! 100% 🦜'",
        "codeSnippet": "BlockSort(arr, size);",
        "encouragementText": "Ace: 'True efficiency is found when the architect accepts no external waste.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "How does Block Sort move elements without a temporary array?",
        "options": ["Magic", "Using 'Internal Buffers' by swapping groups of elements", "It's slower", "Pico rule"],
        "correctAnswer": "Using 'Internal Buffers' by swapping groups of elements",
        "explanation": "It identifies a set of unique elements to act as a tag/buffer for moving other blocks around."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Tagged Blocks",
        "explanation": "Ace: 'The algorithm sorts blocks by their first elements and uses the 'Buffer' to keep track of where elements were moved. It's extremely complex but highly stable.' Pico: 'Tagging the birds! 100% 🦜'",
        "encouragementText": "Pico: 'Tag it! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Ideal block size.",
        "codeSnippet": "BlockSize = sqrt( ___ );",
        "correctAnswer": "N",
        "explanation": "The square root of N is the mathematically optimal choice to balance the number of blocks vs block size."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Stability",
        "explanation": "Ace: 'Unlike Heapsort (O(1) space), Block Sort is STABLE. This makes it a serious contender for low-memory database engines.'",
        "encouragementText": "Ace: 'Integrity is preserved through meticulous rearrangement.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Is Block Sort faster than standard Merge Sort?",
        "options": ["Yes", "No (The overhead of O(1) space makes it slower in terms of constant factors)", "Same", "Pico guess"],
        "correctAnswer": "No (The overhead of O(1) space makes it slower in terms of constant factors)",
        "explanation": "The extra swaps and 'buffer management' take more time than just copying to a temporary array."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] In-place Merging",
        "explanation": "Ace: 'The core of Block Sort is the In-Place Merge, which combines two sorted sub-arrays using only the existing array space.'",
        "encouragementText": "Pico: 'No extra bags! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Merging blocks A and B.",
        "codeSnippet": "merge_in_place(arr, start, mid, ___ );",
        "correctAnswer": "end",
        "explanation": "Defining the boundaries for the internal merge process."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Space Master",
        "explanation": "You have mastered the art of sorting in a vacuum. No space is wasted; no bit is lost. Ace: 'The space is reclaimed.'",
        "encouragementText": "Pico: 'Bigger than it looks! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match In-place terms!",
        "pairs": [
          { "key": "Buffer", "value": "Working space" },
          { "key": "sqrt(N)", "value": "Block size" },
          { "key": "Stable", "value": "Preserves order" }
        ]
      }
    ]
  },
  {
    "order": 66,
    "title": "Unit 66: Burstsort",
    "desc": "Caching for speed: The string sorting champion.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 7.6] The Wind Tunnel",
        "explanation": "Ace: 'Standard sorting for strings (Quicksort) is slow because of pointer indirection and cache misses. Burstsort builds a Trie on the fly. When a leaf gets too full, it \"Bursts\" into a sub-trie.' Pico: 'Inflating the nests until they pop into more nests! 100% 🦜'",
        "codeSnippet": "if (bucket.size() > THRESHOLD) bucket.burst();",
        "encouragementText": "Ace: 'Pressure is the mother of expansion.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why is Burstsort faster for strings?",
        "options": ["It ignores characters", "It minimizes cache misses by keeping small buckets in the CPU cache", "It's random", "Pico rule"],
        "correctAnswer": "It minimizes cache misses by keeping small buckets in the CPU cache",
        "explanation": "Processing small buckets of similar strings is much better for modern CPU memory architectures."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Bucket Sort connection",
        "explanation": "Ace: 'Burstsort is essentially a recursive, cache-aware bucket sort applied to string characters.' Pico: 'Sorting colors by the first letter! 100% 🦜'",
        "encouragementText": "Pico: 'Color sort! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Internal structure of a Burstsort node.",
        "codeSnippet": "Node* children[ ___ ]; // One for each character",
        "correctAnswer": "256",
        "explanation": "A standard ASCII burst node has 256 children, representing all possible byte values."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] String Redundancy",
        "explanation": "Ace: 'Burstsort is extremely efficient for large datasets with common prefixes, like DNA sequences or web URLs.'",
        "encouragementText": "Ace: 'Similarity in data is the efficiency of the structure.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What happens when a bucket 'Bursts'?",
        "options": ["It is deleted", "It is replaced by a new Trie node with another 256 children", "It stays the same", "Pico guess"],
        "correctAnswer": "It is replaced by a new Trie node with another 256 children",
        "explanation": "This allows the search/sort to move to the next character index."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Complexity",
        "explanation": "Ace: 'Burstsort is O(N * L / W) where L is average string length and W is word size. Practically, it's the fastest string sorter today.'",
        "encouragementText": "Pico: 'Top speed bird! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Finding the child for character 'C'.",
        "codeSnippet": "Node* next = root->children[(int) ___ ];",
        "correctAnswer": "C",
        "explanation": "Direct indexing into the child array."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The High-Pressure Architect",
        "explanation": "You have forced the data to organize. The burst is the signal of a new layer of order. Ace: 'The expansion is managed.'",
        "encouragementText": "Pico: 'Pop pop! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Burst terms!",
        "pairs": [
          { "key": "Burst", "value": "Trie expansion" },
          { "key": "Bucket", "value": "Small data set" },
          { "key": "String", "value": "Primary data type" }
        ]
      }
    ]
  },
  {
    "order": 67,
    "title": "Unit 67: Counting Inversions",
    "desc": "Measuring chaos: How far is the array from being sorted?",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 7.7] The Entropy Scale",
        "explanation": "Ace: 'An inversion is a pair (i, j) where i < j but arr[i] > arr[j]. The total number of inversions is a measure of how messy the array is.' Pico: 'Counting every bird flying the wrong way! 100% 🦜'",
        "codeSnippet": "if (arr[i] > arr[j]) inversions++;",
        "encouragementText": "Ace: 'Chaos is the distance between reality and the ideal.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the inversion count of a perfectly sorted array?",
        "options": ["N", "0", "N^2", "Pico rule"],
        "correctAnswer": "0",
        "explanation": "In a sorted array, no element comes after a larger element."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Merge Sort Modification",
        "explanation": "Ace: 'We can count inversions in O(N log N) by modifying Merge Sort. When an element from the right array is picked first, it is in inversion with ALL remaining elements in the left array!' Pico: 'Jumping the line! 100% 🦜'",
        "encouragementText": "Pico: 'Line jump! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Adding to the inversion count during merge.",
        "codeSnippet": "if (arr[left_idx] > arr[right_idx]) {\n  inv_count += (mid - ___ + 1);\n  // Merge right element\n}",
        "correctAnswer": "left_idx",
        "explanation": "Since left side is sorted, if left[i] > right[j], then EVERYTHING from left[i...mid] is also > right[j]."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Ranking & Recommendations",
        "explanation": "Ace: 'Inversion counting is used to find the similarity between two users' rankings (Collaborative Filtering). Lower inversions = higher similarity.'",
        "encouragementText": "Ace: 'Logic finds friends through the minimization of chaos.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Max number of inversions for size N?",
        "options": ["N", "N log N", "N * (N-1) / 2", "Pico guess"],
        "correctAnswer": "N * (N-1) / 2",
        "explanation": "This happens when the array is in reverse order."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Kendall Tau Distance",
        "explanation": "Ace: 'The normalized inversion count is also known as Kendall Tau Distance in statistics.'",
        "encouragementText": "Pico: 'Fancy name! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "The merge step for inversions.",
        "codeSnippet": "mergeSortCount(arr, 0, ___ );",
        "correctAnswer": "n-1",
        "explanation": "Total count is the sum of (left side + right side + merge step)."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Entropy Master",
        "explanation": "You have quantified the mess. The degree of disorder is no longer a mystery. Ace: 'The chaos is measured.'",
        "encouragementText": "Pico: 'I count the wrong birds! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Inversion terms!",
        "pairs": [
          { "key": "0 Inversions", "value": "Sorted Array" },
          { "key": "Max Inversions", "value": "Reverse Sorted" },
          { "key": "O(N log N)", "value": "Merge-Count efficiency" }
        ]
      }
    ]
  },
  {
    "order": 68,
    "title": "Unit 68: Boyer-Moore Voting",
    "desc": "Finding the king: The Majority Element in linear time.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 7.8] The Champion's Ring",
        "explanation": "Ace: 'How do you find an element that appears more than N/2 times in O(N) time and O(1) space? You maintain a candidate and a counter. If the current is the same as candidate, counter++. Else counter--.' Pico: 'The bird that survives the argument! 100% 🦜'",
        "codeSnippet": "if (count == 0) candidate = x;",
        "encouragementText": "Ace: 'Surviving the erosion of the many is the proof of the majority.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Does Boyer-Moore work if the majority element ONLY appears 49% of the time?",
        "options": ["Yes", "No (It only guarantees finding an element with > 50% frequency)", "Maybe", "Pico rule"],
        "correctAnswer": "No (It only guarantees finding an element with > 50% frequency)",
        "explanation": "If no true majority exists, the algorithm will return a candidate, but you must do a second pass to verify it."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Pairing Off",
        "explanation": "Ace: 'Conceptually, we are pairing off different elements. Since the majority appears more than half the time, it is guaranteed to have at least one element left over after all others are paired off.'",
        "encouragementText": "Pico: 'One bird standing! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Updating the vote.",
        "codeSnippet": "if (num == candidate) count++;\nelse ___ ;",
        "correctAnswer": "count--",
        "explanation": "A different element 'votes against' the current candidate."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Streaming Data",
        "explanation": "Ace: 'Because it uses O(1) space, Boyer-Moore is vital for high-speed network switches that need to find 'Heavy Hitters' in a stream of billions of packets.'",
        "encouragementText": "Ace: 'Efficiency in memory is the gate to real-time streams.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Space Complexity of Boyer-Moore?",
        "options": ["O(N)", "O(log N)", "O(1)", "Pico guess"],
        "correctAnswer": "O(1)",
        "explanation": "You only store the current candidate and a count, regardless of N."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Generalized Moore",
        "explanation": "Ace: 'You can generalize this to find all elements that appear more than N/K times using K-1 candidates.' Pico: 'Many champions! 100% 🦜'",
        "encouragementText": "Pico: 'More champions! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Resetting the count.",
        "codeSnippet": "if (count == 0) {\n  candidate = ___ ;\n  count = 1;\n}",
        "correctAnswer": "num",
        "explanation": "When the count hits zero, the next element becomes the new candidate."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Majority Marshall",
        "explanation": "You have identified the dominant factor with absolute minimal memory. Ace: 'The king is found.'",
        "encouragementText": "Pico: 'Long live the bird! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Voting terms!",
        "pairs": [
          { "key": "Candidate", "value": "Potential Majority" },
          { "key": "Count", "value": "Weight of current vote" },
          { "key": "Second Pass", "value": "Verification of truth" }
        ]
      }
    ]
  },
  {
    "order": 69,
    "title": "Unit 69: Introsort (The Real Standard)",
    "desc": "Hybrid power: The sorting algorithm behind C++ and Java.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 7.9] The Triple Threat",
        "explanation": "Ace: 'A perfect sorter doesn't exist. Introsort (Introspective Sort) starts with Quicksort. If it takes too long, it switches to Heapsort. For small ranges, it uses Insertion Sort. It's the multi-tool of the Atlas.' Pico: 'Picking the best nest for the job! 100% 🦜'",
        "codeSnippet": "if (depth > limit) Heapsort();",
        "encouragementText": "Ace: 'Mastery is not just having the best tool, but knowing when to switch.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the 'Depth Limit' before Introsort switches to Heapsort?",
        "options": ["2", "N", "2 * log2(N)", "Pico rule"],
        "correctAnswer": "2 * log2(N)",
        "explanation": "A healthy Quicksort should finish in log N depth. If depth exceeds this significantly, it's likely hitting the N^2 worst-case, so we switch to the guaranteed O(N log N) Heapsort."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Insertion Sort Finishing",
        "explanation": "Ace: 'Once the array is split into very small segments (e.g. size < 16), Introsort stops recursing and finishes everything with a single pass of Insertion Sort. This is faster because of cache locality.' Pico: 'Cleanup crew! 100% 🦜'",
        "encouragementText": "Pico: 'Fast cleanup! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Base case for switching to Insertion Sort.",
        "codeSnippet": "if (end - start < ___ ) return insertionSort(start, end);",
        "correctAnswer": "16",
        "explanation": "16 is the standard threshold where Insertion Sort's lower constant factor beats Quicksort."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] std::sort",
        "explanation": "Ace: 'When you call `std::sort` in C++, you are almost certainly executing Introsort. It guarantees O(N log N) worst case while maintaining Quicksort's average speed.'",
        "encouragementText": "Ace: 'Engineering is the optimization of the average case without the risk of the worst.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Is Introsort stable?",
        "options": ["Yes", "No (Heapsort and Quicksort are both unstable)", "Only for small N", "Pico guess"],
        "correctAnswer": "No (Heapsort and Quicksort are both unstable)",
        "explanation": "To get a stable sorter, most languages use Timsort (Unit 40)."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Median-of-Three",
        "explanation": "Ace: 'Introsort uses Median-of-Three pivot selection (First, Middle, Last) to avoid already-sorted worst-cases in Quicksort.'",
        "encouragementText": "Pico: 'Pick the middle seed! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Heapsort switch condition.",
        "codeSnippet": "if (depth_limit == ___ ) Heapsort(arr, start, end);",
        "correctAnswer": "0",
        "explanation": "Decrementing depth_limit at each recursion; when it hits zero, we stop the gamble."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Hybrid Architect",
        "explanation": "You have combined the best of all worlds. No data set can defeat your strategy. Ace: 'The sorting is total.'",
        "encouragementText": "Pico: 'Best of all birds! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Intro terms!",
        "pairs": [
          { "key": "Quicksort", "value": "Fast Average case" },
          { "key": "Heapsort", "value": "Safe Worst case" },
          { "key": "Insertion Sort", "value": "Small data cleanup" }
        ]
      }
    ]
  },
  {
    "order": 70,
    "title": "Unit 70: Stage 7 Graduation (The Statistical Master)",
    "desc": "Claiming the analysis peak: Chaos and Medians are your domains.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[GRAND MISSION LORE 7.10] The Summit of Analysis",
        "explanation": "Ace: 'You have mastered the deterministic median, the measured chaos of inversions, and the hybrid precision of Introsort. You no longer just move items; you analyze the sequence of the universe.' Pico: 'Stage 7 Complete! 70% of the entire Academy decoded! 100% 🦜'",
        "encouragementText": "Ace: 'Mastery in analysis is the prerequisite for mastery in large-scale systems.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Which algorithm wasO(N) for nearly sorted data?",
        "options": ["Quicksort", "Smoothsort", "Selection Sort", "Pico guess"],
        "correctAnswer": "Smoothsort",
        "explanation": "Dijkstra's adaptive heapsort recognizes pre-sorted ranges."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Depth Summary",
        "explanation": "10 units, 100 lessons. This stage has equipped you with the advanced selection and statistical tools for the Academic Atlas. Ace: 'Sort with precision.'",
        "encouragementText": "Pico: '70% through the 1,000-lesson gauntlet! 🦜'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Algorithm for finding majority (> 50%) in O(1) space?",
        "options": ["Heapsort", "Boyer-Moore", "Counting sort", "Pico secret"],
        "correctAnswer": "Boyer-Moore",
        "explanation": "The voting logic is purely constant-space."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Graduation Check",
        "explanation": "Ace: 'Prove you can transition from Median of Medians to Introsort and Chaos measurement to Bursting Tries in your mental buffers.' Pico: 'I'm a Statistical Master now! 100% 🦜'",
        "encouragementText": "Ace: 'The sorting reflects the entropy through the lens of the algorithm.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Benefit of Median of Medians?",
        "options": ["Better luck", "Worst-case O(N) guarantee", "XOR power", "Pico guess"],
        "correctAnswer": "Worst-case O(N) guarantee",
        "explanation": "It removes the fear of the N^2 worst-case in selection."
      },
      {
        "type": "teaching",
        "questionText": "[FINAL SYNC] The 10x10x10 Path",
        "explanation": "You are 70% through the ultimate journey. Your next target: **Stage 8: Parallel & Distributed Sorting**. Ace: 'The global network is waiting.'",
        "encouragementText": "Pico: 'Stage 8 seeds are waiting! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Final stage signal.",
        "codeSnippet": "if (statistical_master == true) return ___ ;",
        "correctAnswer": "GRADUATE",
        "explanation": "You have successfully mastered the Advanced Statistical Sorting phase."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Statistical Master",
        "explanation": "The entropy is low. The pivots are precise. You are a Stage 7 Graduate. Ace: 'Welcome to the inner circle.'",
        "encouragementText": "Pico: 'Titan-Grade! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "[GRADUATION CHALLENGE] Output the status of your journey.",
        "codeSnippet": "for(int i=61; i<=70; i++) verify_statistical_logic(i);\nreturn ___ ;",
        "correctAnswer": "COMPLETE",
        "explanation": "The seventh decile of the 1,000-lesson curriculum for Sorting & Searching is fully verified."
      }
    ]
  }
];

module.exports = stage4;
