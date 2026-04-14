const stage3 = [
  {
    "order": 41,
    "title": "Unit 41: Radix Sort (LSD)",
    "desc": "Sorting by digits from least significant to most.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 3.1] The Digit Scout",
        "explanation": "Ace: 'Radix Sort avoids comparisons. It sorts by the individual digits of numbers, starting from the ones place, then tens, and so on. It assumes all values have the same number of digits.' Pico: 'Sorting by the small feathers first! 100% 🦜'",
        "encouragementText": "Ace: 'Precision in the parts leads to alignment in the whole.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What stable sort is typically used as the subroutine for Radix Sort?",
        "options": ["Quick Sort", "Counting Sort", "Selection Sort", "Pico rule"],
        "correctAnswer": "Counting Sort",
        "explanation": "Counting Sort is linear and stable, making it perfect for sorting individual digits (0-9)."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Complexity $O(d \cdot (n + k))$",
        "explanation": "Ace: 'Here `d` is the number of digits and `k` is the range of digits (usually 10). For fixed precision, this is essentially O(N).'",
        "encouragementText": "Pico: 'Fast counting! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Formula to get the digit at `exp` place (1, 10, 100...).",
        "codeSnippet": "digit = (num / exp) ___ 10;",
        "correctAnswer": "%",
        "explanation": "Dividing by exp shifts the digit to the ones place, and modulo 10 isolates it."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Constraints",
        "explanation": "Ace: 'Only works for integers and strings. Sorting floats with Radix requires special bit-manipulation.'",
        "encouragementText": "Ace: 'The type defines the sort.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "In LSD Radix Sort, which digit is processed LAST?",
        "options": ["Ones place", "Most Significant Digit (MSD)", "None", "Pico guess"],
        "correctAnswer": "Most Significant Digit (MSD)",
        "explanation": "LSD starts at the right and moves left; MSD is the final pass."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Stability",
        "explanation": "Ace: 'If the digit-sort isn't stable, Radix Sort will fail to maintain the order established by previous digits.'",
        "encouragementText": "Pico: 'Stay in line! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Looping through digits of max number.",
        "codeSnippet": "for (int exp = 1; max / exp > 0; exp *= ___ )",
        "correctAnswer": "10",
        "explanation": "Moving from ones to tens to hundreds."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Digit Master",
        "explanation": "You have learned to sort by parts. Ace: 'The components are aligned.'",
        "encouragementText": "Pico: 'Digitally sorted! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Radix terms!",
        "pairs": [
          { "key": "d", "value": "Number of digits" },
          { "key": "k", "value": "Base (usually 10)" },
          { "key": "LSD", "value": "Right-to-left" }
        ]
      }
    ]
  },
  {
    "order": 42,
    "title": "Unit 42: Shell Sort (The Gap Sort)",
    "desc": "Optimizing Insertion Sort with declining gaps.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 3.2] The Long Jump",
        "explanation": "Ace: 'Insertion sort is slow because it only moves items by one position. Shell Sort allows elements to \"Jump\" far distances using a gap sequence.' Pico: 'Long jumps in the forest! 100% 🦜'",
        "encouragementText": "Ace: 'Distance is the shortcut to local alignment.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What happens as the gap decreases to 1?",
        "options": ["It becomes Bubble Sort", "It becomes standard Insertion Sort", "It stops", "Pico rule"],
        "correctAnswer": "It becomes standard Insertion Sort",
        "explanation": "A gap of 1 is just regular insertion sort, dealing with a mostly-sorted array."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Knuth Sequence",
        "explanation": "Ace: 'The performance depends heavily on the gap sequence used. Knuth's sequence ($3k+1$) is a popular choice.'",
        "encouragementText": "Pico: 'Magic numbers! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Shell's original gap sequence starting point.",
        "codeSnippet": "gap = n / ___ ;",
        "correctAnswer": "2",
        "explanation": "Starting by comparing elements half an array apart."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] In-place Speed",
        "explanation": "Ace: 'Shell sort is in-place and faster than simple O(N^2) sorts, making it useful for embedded systems without extra RAM.'",
        "encouragementText": "Ace: 'Speed is relative to the constraints of the host.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Is Shell Sort stable?",
        "options": ["Yes", "No (Long jumps can swap equal items over far distances)", "Always", "Pico guess"],
        "correctAnswer": "No (Long jumps can swap equal items over far distances)",
        "explanation": "Far-reaching swaps destroy the relative order of equal elements."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Pass Complexity",
        "explanation": "Ace: 'Hard to analyze, but usually around $O(N^{1.3})$ to $O(N^2)$ depending on gaps.'",
        "encouragementText": "Pico: 'A bit mysterious! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Gap reduction loop.",
        "codeSnippet": "for (int gap = n/2; gap > 0; gap /= ___ )",
        "correctAnswer": "2",
        "explanation": "Halving the gap in each major pass."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Gap Lord",
        "explanation": "You have mastered the long-distance jump. Ace: 'The alignment is accelerated.'",
        "encouragementText": "Pico: 'Jumped it! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Shell terms!",
        "pairs": [
          { "key": "Gap", "value": "Comparison distance" },
          { "key": "Insertion", "value": "Final pass (gap=1)" },
          { "key": "Unstable", "value": "Stability property" }
        ]
      }
    ]
  },
  {
    "order": 43,
    "title": "Unit 43: Heap Sort I (The Build)",
    "desc": "Constructing the Binary Heap tree.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 3.3] The Royal Mound",
        "explanation": "Ace: 'A Heap is a complete binary tree where every parent is larger (Max-Heap) than its children. To sort, we first transform an array into a Heap!' Pico: 'Building the mountain! 100% 🦜'",
        "encouragementText": "Ace: 'Structure is the container of priority.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Time complexity to BUILD a heap from an unsorted array of size N?",
        "options": ["O(N log N)", "O(N)", "O(N^2)", "Pico rule"],
        "correctAnswer": "O(N)",
        "explanation": "Using the 'bottom-up' buildHeap method is mathematicaly proven to be linear."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Parent-Child Index",
        "explanation": "Ace: 'For a node at index `i`, its left child is at `2*i + 1` and right child is at `2*i + 2`.'",
        "encouragementText": "Pico: 'Family tree! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Parent index of node `i`.",
        "codeSnippet": "parent = (i - 1) / ___ ;",
        "correctAnswer": "2",
        "explanation": "Standard array representation of a binary tree."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Priority",
        "explanation": "Ace: 'Heaps are the logic behind Priority Queues. They ensure the \"Most Important\" bird is always at the top.'",
        "encouragementText": "Ace: 'Order starts with the most significant member.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Where is the largest element in a Max-Heap?",
        "options": ["At a leaf", "At the root (index 0)", "In the middle", "Pico guess"],
        "correctAnswer": "At the root (index 0)",
        "explanation": "By definition of a Max-Heap."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Heapify",
        "explanation": "Ace: 'Heapify cost $O(\log N)$. We call it for all non-leaf nodes to build the heap.'",
        "encouragementText": "Pico: 'Fix the mountain! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Index of the last non-leaf node for N total nodes.",
        "codeSnippet": "lastNonLeaf = (N / ___ ) - 1;",
        "correctAnswer": "2",
        "explanation": "The starting point for the bottom-up build."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Heap Builder",
        "explanation": "You have organized the forest into a hierarchy. Ace: 'The mound is secure.'",
        "encouragementText": "Pico: 'Ready to sort! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Heap terms!",
        "pairs": [
          { "key": "Root", "value": "Max element" },
          { "key": "BuildHeap", "value": "O(N) operation" },
          { "key": "Heapify", "value": "O(log N) repair" }
        ]
      }
    ]
  },
  {
    "order": 44,
    "title": "Unit 44: Heap Sort II (The Extraction)",
    "desc": "Sorting by repeatedly removing the maximum.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 3.4] The Harvest",
        "explanation": "Ace: 'Once the Heap is built, swap the root with the last element. Shrink the heap size, and Heapify the new root. Repeat until empty!' Pico: 'Taking from the top! 100% 🦜'",
        "encouragementText": "Ace: 'Order is extracted from the structure one piece at a time.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of full Heap Sort?",
        "options": ["O(N log N)", "O(N)", "O(N^2)", "Pico rule"],
        "correctAnswer": "O(N log N)",
        "explanation": "We extract N elements, and each extraction costs O(log N) to repair the heap."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] In-Place",
        "explanation": "Ace: 'Heap Sort is in-place! We move the largest items to the end of the array, effectively sorting it from right to left.'",
        "encouragementText": "Pico: 'No extra memory! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Extraction loop.",
        "codeSnippet": "for (int i = n - 1; i ___ 0; i--) {\n  swap(arr[0], arr[i]);\n  heapify(arr, i, 0);\n}",
        "correctAnswer": ">",
        "explanation": "Moving the max to the back and rebuilding for the remaining elements."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Comparison with QuickSort",
        "explanation": "Ace: 'Heap Sort has a guaranteed O(N log N) worst-case. It is safer than Quick Sort, though usually slightly slower in practice.'",
        "encouragementText": "Ace: 'Safety is the trade-off for raw velocity.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Is Heap Sort stable?",
        "options": ["Yes", "No (Swaps between roots and leaves are long-range)", "Always", "Pico guess"],
        "correctAnswer": "No (Swaps between roots and leaves are long-range)",
        "explanation": "The tree structure does not preserve the original relative order of equal keys."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Final State",
        "explanation": "Ace: 'At the end of the loop, the array is perfectly sorted in ascending order.'",
        "encouragementText": "Pico: 'Freshly sorted seeds! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Next element to heapify after root swap.",
        "codeSnippet": "heapify(arr, newSize, ___ );",
        "correctAnswer": "0",
        "explanation": "We always repair from the root down."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Harvest Lord",
        "explanation": "You have extracted the order from the mound. Ace: 'The sorting is done.'",
        "encouragementText": "Pico: 'I'm full of seeds! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match extraction terms!",
        "pairs": [
          { "key": "Swap", "value": "Move root to back" },
          { "key": "Shrink", "value": "Reduce heap range" },
          { "key": "Repair", "value": "Heapify(0)" }
        ]
      }
    ]
  },
  {
    "order": 45,
    "title": "Unit 45: Tree Sort (BST Sort)",
    "desc": "Sorting by building a Binary Search Tree.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 3.5] The Branching Path",
        "explanation": "Ace: 'If you insert every element into a Binary Search Tree (BST) and then perform an \"In-Order Traversal\", you get the elements sorted!' Pico: 'Climbing the branches in order! 100% 🦜'",
        "encouragementText": "Ace: 'Growth is the organic path to sequence.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Average time complexity to sort using a standard BST?",
        "options": ["O(N log N)", "O(N)", "O(N^2)", "Pico rule"],
        "correctAnswer": "O(N log N)",
        "explanation": "Insert N items, each taking O(log N) on average."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] In-Order Traversal",
        "explanation": "Ace: 'Visit Left, then Root, then Right. This naturally yields sorted values because of BST properties.'",
        "encouragementText": "Pico: 'Left most first! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Worst-case complexity if data is already sorted?",
        "options": ["O(N log N)", "O(N^2) (The tree becomes a line)", "O(N)", "Pico secret"],
        "correctAnswer": "O(N^2) (The tree becomes a line)",
        "explanation": "Without balancing, a BST can degrade into a linked list."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Self-Balancing",
        "explanation": "Ace: 'To guarantee O(N log N), we use self-balancing trees like AVL or Red-Black trees for Tree Sort.'",
        "encouragementText": "Ace: 'Balance is the correction of growth.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Is Tree Sort stable?",
        "options": ["Yes, if equal items go only to the right child", "No", "Always", "Pico guess"],
        "correctAnswer": "Yes, if equal items go only to the right child",
        "explanation": "Maintaining a strict insertion rule for duplicates preserves their relative order."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Extra Space",
        "explanation": "Ace: 'Tree sort uses O(N) extra space to store the actual tree nodes.'",
        "encouragementText": "Pico: 'Lots of wood! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "In-order recursive step 1.",
        "codeSnippet": "inOrder(node-> ___ );\nprint(node->val);\ninOrder(node->right);",
        "correctAnswer": "left",
        "explanation": "Visiting the smaller sub-tree first."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Branch Lord",
        "explanation": "You have mapped the forest's growth to its rank. Ace: 'The traversal is complete.'",
        "encouragementText": "Pico: 'I love trees! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Tree terms!",
        "pairs": [
          { "key": "Left-Root-Right", "value": "In-order traversal" },
          { "key": "Balance", "value": "O(N log N) guarantee" },
          { "key": "Space O(N)", "value": "Additional storage" }
        ]
      }
    ]
  },
  {
    "order": 46,
    "title": "Unit 46: Comb Sort (Bubble with a Gap)",
    "desc": "The improved Bubble Sort using gap reduction.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 3.6] The Sorting Comb",
        "explanation": "Ace: 'Bubble Sort is slow because small values at the end (Turtles) take forever to move to the start. Comb Sort uses a gap (like Shell Sort) to eliminate turtles!' Pico: 'Combing the forest floor! 100% 🦜'",
        "encouragementText": "Ace: 'Widening the reach eliminates the local drag.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the standard 'Shrink Factor' for the gap in Comb Sort?",
        "options": ["2.0", "1.3", "10", "Pico rule"],
        "correctAnswer": "1.3",
        "explanation": "Empirically discovered to be the most efficient ratio for shrinking the gap."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Turtles",
        "explanation": "Ace: 'Turtles are small values at high indices that move very slowly in standard Bubble Sort. Comb sort jumps them to the start quickly.'",
        "encouragementText": "Pico: 'Wake up, turtles! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Next gap calculation.",
        "codeSnippet": "gap = (gap * 10) / ___ ;",
        "correctAnswer": "13",
        "explanation": "Representing the 1.3 shrink factor using integer math."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity",
        "explanation": "Ace: 'Average case is O(N log N), but worst case is still O(N^2). It's a huge upgrade over Bubble Sort.'",
        "encouragementText": "Ace: 'Optimization is the refinement of the baseline.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Like Shell Sort, is Comb Sort stable?",
        "options": ["Yes", "No", "Depends", "Pico guess"],
        "correctAnswer": "No",
        "explanation": "Large-gap swaps naturally break stability."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Swap count",
        "explanation": "Ace: 'Like Bubble Sort, we continue as long as the gap > 1 OR at least one swap happened.'",
        "encouragementText": "Pico: 'Swapped again! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Min gap size.",
        "codeSnippet": "if (gap < ___ ) gap = 1;",
        "correctAnswer": "1",
        "explanation": "The last pass is always a standard bubble pass of gap 1."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Comb Scout",
        "explanation": "You have smoothed the tangles of the forest. Ace: 'The sequence is brushed.'",
        "encouragementText": "Pico: 'No more knots! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Comb terms!",
        "pairs": [
          { "key": "1.3", "value": "Shrink factor" },
          { "key": "Turtles", "value": "Slow movers" },
          { "key": "Gap", "value": "Jump distance" }
        ]
      }
    ]
  },
  {
    "order": 47,
    "title": "Unit 47: Cycle Sort (Minimal Writing)",
    "desc": "Sorting by rotating elements in their cycles.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 3.7] The Efficient Porter",
        "explanation": "Ace: 'In many memory systems, WRITING data is expensive. Cycle Sort is unique because it makes the ABSOLUTE MINIMUM number of writes possible ($O(n)$).' Pico: 'Only moving things if I have to! 100% 🦜'",
        "encouragementText": "Ace: 'Economy is the wisdom of movement.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "If an item is already in its correct spot, does Cycle Sort write to memory?",
        "options": ["Yes", "No", "Sometimes", "Pico rule"],
        "correctAnswer": "No",
        "explanation": "It only moves an element if it belongs elsewhere, and it moves it directly to its final spot."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Theoretical Minimum",
        "explanation": "Ace: 'Every permutation can be decomposed into cycles. Cycle sort simply follows these cycles and places elements.'",
        "encouragementText": "Pico: 'Round in circles! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Complexity of Cycle Sort?",
        "options": ["O(N log N)", "O(N^2)", "O(N)", "Pico secret"],
        "correctAnswer": "O(N^2)",
        "explanation": "For each element, we scan the whole array to find its correct position."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Use cases",
        "explanation": "Ace: 'Perfect for sorting items in Flash memory where write cycles are limited.'",
        "encouragementText": "Ace: 'Algorithm architecture must respect physical longevity.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the count of WRITES to memory in Cycle Sort?",
        "options": ["N log N", "N or less", "N^2", "Pico guess"],
        "correctAnswer": "N or less",
        "explanation": "Each element is written to its final destination exactly once (if not already there)."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Rotation",
        "explanation": "Ace: 'We pick an item, count how many items are smaller than it, and that count is its final index.'",
        "encouragementText": "Pico: 'Count and jump! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Correct spot calculation.",
        "codeSnippet": "for (int i=cur+1; i<n; i++) if (arr[i] < item) ___ ++;",
        "correctAnswer": "pos",
        "explanation": "Counting predecessors to find the final ranking."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Cycle Scout",
        "explanation": "You have achieved order with the least exertion. Ace: 'The energy is conserved.'",
        "encouragementText": "Pico: 'Lazy but smart! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Cycle terms!",
        "pairs": [
          { "key": "O(N) Writes", "value": "Optimal memory use" },
          { "key": "O(N^2) Time", "value": "Scan cost" },
          { "key": "Cycle", "value": "Permutation path" }
        ]
      }
    ]
  },
  {
    "order": 48,
    "title": "Unit 48: Pigeonhole Sort",
    "desc": "Sorting by nesting elements in their labeled holes.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 3.8] The Bird's Nest",
        "explanation": "Ace: 'If you have N items and the range of values (Max - Min) is similar to N, you can use Pigeonhole Sort. It's like Counting Sort but stores actual objects.' Pico: 'Nesting in the right slot! 100% 🦜'",
        "encouragementText": "Ace: 'Classification is the fast track to alignment.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "When is Pigeonhole Sort better than Counting Sort?",
        "options": ["Always", "When elements are complex objects (not just integers)", "Never", "Pico rule"],
        "correctAnswer": "When elements are complex objects (not just integers)",
        "explanation": "Pigeonholes (usually linked lists) can store full objects, while Counting Sort just marks frequencies."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Gap mapping",
        "explanation": "Ace: 'Hole Index = (Value - Min). This shifts the range to start at zero.'",
        "encouragementText": "Pico: 'Shift the nest! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Ideal range for Pigeonhole sort.",
        "codeSnippet": "Range = (Max - Min) + ___ ;",
        "correctAnswer": "1",
        "explanation": "The number of distinct possible values."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Distribution",
        "explanation": "Ace: 'If the range is much larger than N, the number of empty pigeonholes will waste massive amounts of RAM.'",
        "encouragementText": "Ace: 'Density defines spatial efficiency.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of Pigeonhole sort?",
        "options": ["O(N + Range)", "O(N log N)", "O(N^2)", "Pico guess"],
        "correctAnswer": "O(N + Range)",
        "explanation": "Linear in both input size and the value span."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Linked Lists",
        "explanation": "Ace: 'Each pigeonhole is often implemented as a list to handle duplicates.'",
        "encouragementText": "Pico: 'Growing nests! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Backwards mapping.",
        "codeSnippet": "item = holes[i].pop(); \narr[k++] = ___ ;",
        "correctAnswer": "item",
        "explanation": "Merging the contents of the holes back into the main array."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Nest Architect",
        "explanation": "You have mapped the population to their specific homes. Ace: 'The alignment is natural.'",
        "encouragementText": "Pico: 'Home sweet home! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Pigeon terms!",
        "pairs": [
          { "key": "Hole", "value": "Bucket for one value" },
          { "key": "Range", "value": "Max - Min + 1" },
          { "key": "Non-integer", "value": "Stored objects" }
        ]
      }
    ]
  },
  {
    "order": 49,
    "title": "Unit 49: Pancake Sort",
    "desc": "Sorting by flipping prefix stacks.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 3.9] The Griddle Scout",
        "explanation": "Ace: 'Imagine a stack of pancakes of different sizes. The ONLY operation you can do is a \"Flip\"—insert a spatula at index `i` and reverse everyone from 0 to `i`!' Pico: 'Flipping seeds in the pan! 100% 🦜'",
        "encouragementText": "Ace: 'Constraint is the father of creative procedure.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "To move the largest pancake (at index X) to the bottom of a stack (size N):",
        "options": ["Wait", "Flip(X) to move it to top, then Flip(N-1) to move it to bottom", "Flip(N-1) directly", "Pico rule"],
        "correctAnswer": "Flip(X) to move it to top, then Flip(N-1) to move it to bottom",
        "explanation": "By flipping X, the max becomes the very first pancake. Then flipping the whole stack puts that first pancake at the very end."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Complexity $O(N)$ flips",
        "explanation": "Ace: 'We use at most $2n - 3$ flips to sort any stack. It's a fun mathematical puzzle!'",
        "encouragementText": "Pico: 'Twirl it! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Reversing an array fragment [0...i].",
        "codeSnippet": "void flip(arr, i) { for(j=0; j < i/2; j++) swap(arr[j], arr[ ___ -j]); }",
        "correctAnswer": "i",
        "explanation": "The standard two-pointer array reverse."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Real World",
        "explanation": "Ace: 'Used in bioinformatics for DNA resequencing where \"Reversal\" mutations are common.'",
        "encouragementText": "Ace: 'Metaphor meets the organic code.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity in time (comparisons)?",
        "options": ["O(N^2)", "O(N log N)", "O(N)", "Pico guess"],
        "correctAnswer": "O(N^2)",
        "explanation": "We search for the max N times, each taking O(N)."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Step by Step",
        "explanation": "Ace: 'Find current max, flip to top, flip to current bottom, ignore that bottom, repeat for smaller stack.'",
        "encouragementText": "Pico: 'Shrinking pan! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Finding the max index in [0...curr_size].",
        "codeSnippet": "max_idx = findMax(arr, ___ );",
        "correctAnswer": "curr_size",
        "explanation": "Focusing the search on the unsorted remainder."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Griddle Master",
        "explanation": "You have mastered the flip. The stack is ordered. Ace: 'The breakfast is served.'",
        "encouragementText": "Pico: 'Tasty sorting! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Pancake terms!",
        "pairs": [
          { "key": "Flip(i)", "value": "Reverse [0...i]" },
          { "key": "2n - 3", "value": "Upper bound flips" },
          { "key": "Top pancake", "value": "Index 0" }
        ]
      }
    ]
  },
  {
    "order": 50,
    "title": "Unit 50: Half-way Graduation II (The Heap Lord)",
    "desc": "Claiming the 50% threshold: Mastery of heaps, radix, and exotic flips.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[GRAND MISSION LORE 3.10] The Summit of Logic",
        "explanation": "Ace: '500 Lessons. You have built mountains from arrays, sorted by digits, and flipped pancakes into rank. You are a Heap Lord.' Pico: 'Stage 3 Milestone! 500 lessons! Halfway there! 100% 🦜'",
        "encouragementText": "Ace: 'Consistency is the bridge to the impossible.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Time complexity to BUILD a heap?",
        "options": ["O(N log N)", "O(N)", "O(N^2)", "Pico guess"],
        "correctAnswer": "O(N)",
        "explanation": "The linear foundation of the heap mound."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Progress Summary",
        "explanation": "10 units, 100 lessons in this module. From Radix digit-logic to Cycle-write counts and Pancake flips. Ace: 'Search with precision.'",
        "encouragementText": "Pico: '50% through the 1,000-lesson gauntlet! 🦜'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Stable linear sort for integers?",
        "options": ["QuickSort", "Radix Sort with Counting Sort", "Selection", "Pico secret"],
        "correctAnswer": "Radix Sort with Counting Sort",
        "explanation": "The LSD variant is the king of stable integer sorting."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Graduation Check",
        "explanation": "Ace: 'Prove you can transition from Heap mounds to Radix passes and Pigeonhole nesting in your mental buffers.' Pico: 'I'm a Heap Lord now! 100% 🦜'",
        "encouragementText": "Ace: 'The mound reflects the peak through the lens of the root.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Benefit of Cycle Sort?",
        "options": ["Fastest", "Least memory writes", "Simplest", "Pico guess"],
        "correctAnswer": "Least memory writes",
        "explanation": "O(N) writes is theoretically optimal."
      },
      {
        "type": "teaching",
        "questionText": "[FINAL SYNC] The 10x10x10 Path",
        "explanation": "You are 50% through the ultimate journey. Your next target: **Stage 3 (Extended): Bitwise & Hybrid Elite**. Ace: 'Introsort and SleepSort are waiting.'",
        "encouragementText": "Pico: 'Unit 51 seeds are waiting! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Final stage signal.",
        "codeSnippet": "if (heap_lord == true) return ___ ;",
        "correctAnswer": "GRADUATE",
        "explanation": "You have successfully mastered the Priority Strategy phase."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Heap Lord",
        "explanation": "The fifth gate is passed. The mound is yours. You are a Stage 3 Graduate. Ace: 'Welcome to the inner circle.'",
        "encouragementText": "Pico: 'Titan-Grade! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "[FINAL CHALLENGE] Output the status of your journey.",
        "codeSnippet": "for(int i=41; i<=50; i++) verify_heap_logic(i);\nreturn ___ ;",
        "correctAnswer": "COMPLETE",
        "explanation": "The first 500 lessons of the 1,000-lesson curriculum for Sort/Search are verified."
      }
    ]
  },
  {
    "order": 51,
    "title": "Unit 51: Gnome Sort (The Garden Hunt)",
    "desc": "Sorting like a garden gnome moving flower pots.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 3.11] The Garden Gnome",
        "explanation": "Ace: 'A gnome looks at two adjacent pots. If they are in order, he moves one step forward. If not, he swaps them and moves one step BACKWARD to check the previous pair.' Pico: 'A little bird hopping back and forth! 100% 🦜'",
        "encouragementText": "Ace: 'Retreat is often the only way to verify order.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of Gnome Sort?",
        "options": ["O(N)", "O(N^2)", "O(log N)", "Pico rule"],
        "correctAnswer": "O(N^2)",
        "explanation": "In the worst case (reversed array), it behaves like Insertion Sort with lots of extra hopping."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Simplicity",
        "explanation": "Ace: 'Gnome sort is conceptually simple: only one loop and one index variable needed.'",
        "encouragementText": "Pico: 'Only one pot to hold! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Moving forward.",
        "codeSnippet": "if (arr[i] >= arr[i-1]) i ___ ;",
        "correctAnswer": "++",
        "explanation": "If correct, the gnome moves to the next pair."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Adaptive Properties",
        "explanation": "Ace: 'Like Insertion Sort, Gnome sort is O(N) for already sorted data. It is highly adaptive.'",
        "encouragementText": "Ace: 'Presence of order accelerates the gnome.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Moving backward after a swap?",
        "options": ["i++", "i--", "i = 0", "Pico guess"],
        "correctAnswer": "i--",
        "explanation": "The gnome must check if the swapped element is also out of order with its new previous neighbor."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Stability",
        "explanation": "Ace: 'Gnome sort is Stable as long as it only swaps strictly smaller elements backwards.'",
        "encouragementText": "Pico: 'Gentle gnome! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Starting position.",
        "codeSnippet": "int i = ___ ; // Start at second element",
        "correctAnswer": "1",
        "explanation": "You need at least two elements to compare."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Garden Scout",
        "explanation": "You have smoothed the flower beds. Ace: 'The rank is ready.'",
        "encouragementText": "Pico: 'Hop hop hop! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Gnome terms!",
        "pairs": [
          { "key": "i++", "value": "Forward movement" },
          { "key": "i--", "value": "Backward check" },
          { "key": "O(N^2)", "value": "Worst case" }
        ]
      }
    ]
  },
  {
    "order": 52,
    "title": "Unit 52: Stooge Sort (The Humor Sort)",
    "desc": "Sorting by extreme overkill recursion.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 3.12] The Three Stooges",
        "explanation": "Ace: 'Stooge Sort is a recursive algorithm that sorts the first 2/3, then the last 2/3, then the first 2/3 AGAIN. It is famously inefficient!' Pico: 'Three silly birds doing extra work! 100% 🦜'",
        "encouragementText": "Ace: 'Inefficiency is a mathematical curiosity.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Time complexity of Stooge Sort?",
        "options": ["O(N^2)", "O(N^2.709)", "O(N log N)", "Pico rule"],
        "correctAnswer": "O(N^2.709)",
        "explanation": "Calculated by $T(n) = 3T(2n/3) + O(1)$. It is slower than even Bubble Sort!"
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Overkill",
        "explanation": "Ace: 'It is never used in real software. It exists to teach students how NOT to design a recursive split.'",
        "encouragementText": "Pico: 'Don't do it! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Initial check.",
        "codeSnippet": "if (arr[low] > arr[high]) ___ (arr[low], arr[high]);",
        "correctAnswer": "swap",
        "explanation": "The only direct comparison made in each call."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Recession Pass",
        "explanation": "Ace: 'The three recursive calls ensure that the absolute maximum finds its way to the back and minimum to the front.'",
        "encouragementText": "Ace: 'Brute force eventually triumphs through repetition.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What fraction of the array is sorted in each step?",
        "options": ["1/2", "2/3", "1/3", "Pico guess"],
        "correctAnswer": "2/3",
        "explanation": "Stooge sort splits into two-thirds."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Stability",
        "explanation": "Ace: 'It is stable, but nobody cares because it's so slow!'",
        "encouragementText": "Pico: 'Stable but sleepy! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Recursive call count.",
        "codeSnippet": "stooge(L, H); stooge(L, H); stooge(L, H); Total = ___ ;",
        "correctAnswer": "3",
        "explanation": "Three full calls per level."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Silly Scout",
        "explanation": "You have witnessed the slowest descent into order. Ace: 'The array is eventually sorted.'",
        "encouragementText": "Pico: 'Finally done! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Stooge terms!",
        "pairs": [
          { "key": "2/3", "value": "Split ratio" },
          { "key": "3 calls", "value": "Recursive burden" },
          { "key": "O(N^2.71)", "value": "Complexity" }
        ]
      }
    ]
  },
  {
    "order": 53,
    "title": "Unit 53: Bogosort (The Luck Sort)",
    "desc": "Sorting by throwing seeds into the air.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 3.13] The Lucky Bird",
        "explanation": "Ace: 'Bogosort (or Random Sort) is the ultimate joke algorithm. It shuffles the array and checks if it happens to be sorted. If not, it shuffles again.' Pico: 'Throwing seeds and hoping! 100% 🦜'",
        "encouragementText": "Ace: 'Hope is not a strategy, but it is an algorithm.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Average time complexity of Bogosort?",
        "options": ["O(N!)", "O(N * N!)", "Infinity", "Pico rule"],
        "correctAnswer": "O(N * N!)",
        "explanation": "There are N! permutations. For each, we take O(N) to check if it's sorted."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Probability",
        "explanation": "Ace: 'For N=10, there are 3.6 million permutations. You might get lucky, but usually search will run for years.'",
        "encouragementText": "Pico: 'Gambling for seeds! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "The loop condition.",
        "codeSnippet": "while ( ___ (arr) == false) shuffle(arr);",
        "correctAnswer": "isSorted",
        "explanation": "Continuously checking for a lucky miracle."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Convergence",
        "explanation": "Ace: 'Bogosort is not guaranteed to ever finish in a finite time, unlike deterministic sorts.'",
        "encouragementText": "Ace: 'Randomness lacks a termination memory.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What if the bird is super lucky?",
        "options": ["O(N)", "O(1)", "O(N!)", "Pico guess"],
        "correctAnswer": "O(N)",
        "explanation": "Best case: Array is already sorted (takes O(N) to check)."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Bozosort",
        "explanation": "Ace: 'A variant called Bozosort picks two random elements and swaps them. Still O(N!).'",
        "encouragementText": "Pico: 'Silly birds! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Shuffle mechanism.",
        "codeSnippet": "random_ ___ (arr.begin(), arr.end());",
        "correctAnswer": "shuffle",
        "explanation": "Using standard randomness to generate a new permutation."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Gambler",
        "explanation": "You have seen the face of chaos. Ace: 'The order was a fluke.'",
        "encouragementText": "Pico: 'I won! (maybe) 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Bogo terms!",
        "pairs": [
          { "key": "isSorted", "value": "Verification check" },
          { "key": "Shuffle", "value": "Permutation jump" },
          { "key": "N!", "value": "The math of doom" }
        ]
      }
    ]
  },
  {
    "order": 54,
    "title": "Unit 54: Sleep Sort (The Timeline Sort)",
    "desc": "Sorting using the operating system's sleep timer.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 3.14] The Napping Bird",
        "explanation": "Ace: 'Sleep Sort is a creative (and terrible) idea: For every number X, start a thread that sleeps for X seconds, then prints X. Small numbers wake up first!' Pico: 'Sleeping until it's my turn! 100% 🦜'",
        "encouragementText": "Ace: 'Time is the ultimate dimension of order.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "When does Sleep Sort fail?",
        "options": ["Negative numbers", "Values that are very close together (Timing jitter)", "Large numbers (takes too long)", "All of the above"],
        "correctAnswer": "All of the above",
        "explanation": "It relies on OS scheduling, which is not precise enough for small differences."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] OS Scheduling",
        "explanation": "Ace: 'It effectively turns the CPU's scheduler into a sorting engine. Extremely inefficient but conceptually brilliant.'",
        "encouragementText": "Pico: 'Zzzzz... 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Thread command.",
        "codeSnippet": "sleep(x); ___ << x;",
        "correctAnswer": "cout",
        "explanation": "Printing the number after its designated nap time."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity",
        "explanation": "Ace: 'It is O(MaxVal + N). The time depends more on the size of the numbers than the number of items!'",
        "encouragementText": "Ace: 'Wait-time is the cost of the sequence.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Sorting [10, 1] with Sleep Sort takes how many seconds?",
        "options": ["1", "10", "11", "Pico guess"],
        "correctAnswer": "10",
        "explanation": "The largest number determines the total time."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Multithreading",
        "explanation": "Ace: 'You need N threads running in parallel for this to even attempt to work.'",
        "encouragementText": "Pico: 'So many birds sleeping! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Precision issues.",
        "codeSnippet": "Delay = x * ___ ; // Scaling factor for safety",
        "correctAnswer": "100",
        "explanation": "Multiplying the sleep time to reduce the chance of small numbers waking up out of order."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Dreamer",
        "explanation": "You have sorted through the sands of time. Ace: 'The sequence woke up.'",
        "encouragementText": "Pico: 'Rise and shine! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Sleep terms!",
        "pairs": [
          { "key": "Sleep(x)", "value": "Temporal delay" },
          { "key": "Thread", "value": "Execution unit" },
          { "key": "Jitter", "value": "Timing error" }
        ]
      }
    ]
  },
  {
    "order": 55,
    "title": "Unit 55: Bitwise Radix Sort",
    "desc": "Sorting by bits (0s and 1s).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 3.15] The Binary Scout",
        "explanation": "Ace: 'Computers are binary. Sorting by individual bits (Radix with Base 2) is often extremely fast and requires very small counting arrays (only 2 slots!).' Pico: 'Sorting by zeroes and ones! 100% 🦜'",
        "encouragementText": "Ace: 'Power lies in the base of the machine.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "How many passes are needed to bit-sort 32-bit integers?",
        "options": ["1", "32", "10", "Pico rule"],
        "correctAnswer": "32",
        "explanation": "One pass for every bit position."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Bitmask",
        "explanation": "Ace: 'Use `(val >> i) & 1` to get the i-th bit from the right.'",
        "encouragementText": "Pico: 'Scan the bits! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Isolating the bit.",
        "codeSnippet": "bit = (num >> i) ___ 1;",
        "correctAnswer": "&",
        "explanation": "Bitwise AND with 1 extracts the LSB after the shift."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Hybrid power",
        "explanation": "Ace: 'Bitwise radix is used in \"High Performance Computing\" to sort massive datasets of pointers or integers.'",
        "encouragementText": "Ace: 'Hardware alignment is the final ceiling of speed.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Stability in Bit-sort?",
        "options": ["Doesn't matter", "Mandatory (Uses stable Counting Sort on bits)", "None", "Pico guess"],
        "correctAnswer": "Mandatory (Uses stable Counting Sort on bits)",
        "explanation": "Like all Radix sorts, stability is the glue that keeps previous passes valid."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] MSD variant",
        "explanation": "Ace: 'Binary MSD Radix sort is essentially QuickSort where the pivot is always the middle of the current power-of-2 range!'",
        "encouragementText": "Pico: 'Pivot bits! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Shift value for 4th bit.",
        "codeSnippet": "bit = (num >> ___ ) & 1;",
        "correctAnswer": "3",
        "explanation": "Bit positions are zero-indexed."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Bit Lord",
        "explanation": "You have spoken the language of the machine. Ace: 'The binary is ordered.'",
        "encouragementText": "Pico: '101010 sorted! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Bit terms!",
        "pairs": [
          { "key": ">>", "value": "Right shift" },
          { "key": "& 1", "value": "Extraction" },
          { "key": "32", "value": "Standard int passes" }
        ]
      }
    ]
  },
  {
    "order": 56,
    "title": "Unit 56: Binary Insertion Sort",
    "desc": "Optimizing search in Insertion Sort.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 3.16] The Hybrid Scout",
        "explanation": "Ace: 'In normal Insertion Sort, we use Linear Search to find where to put the next element. Why not use Binary Search? It reduces the number of comparisons!' Pico: 'Logarithmic card organizing! 100% 🦜'",
        "encouragementText": "Ace: 'Knowledge of the sorted segment allows for faster insertion point discovery.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Does Binary Insertion Sort improve the complexity class?",
        "options": ["Yes, to O(N log N)", "No, still O(N^2) due to shifting", "Only O(N)", "Pico rule"],
        "correctAnswer": "No, still O(N^2) due to shifting",
        "explanation": "While finding the spot is O(log N), moving elements to make room still takes O(N) in the worst case."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Complexity $O(N^2)$",
        "explanation": "Ace: 'Comparisons: $O(N \log N)$. Swaps/Shifts: $O(N^2)$. Total: $O(N^2)$. Useful when comparisons are much more expensive than shifts.'",
        "encouragementText": "Pico: 'Shifting is hard work! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Binary Search range for item i.",
        "codeSnippet": "pos = binarySearch(arr, 0, ___ , item);",
        "correctAnswer": "i-1",
        "explanation": "The search is restricted to the already-sorted part of the array."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Expensive Compare",
        "explanation": "Ace: 'Used when comparing two items takes a long time (e.g. comparing long DNA strings) but moving them is fast.'",
        "encouragementText": "Ace: 'Minimize the heaviest operation.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Is Binary Insertion Sort stable?",
        "options": ["Yes (Use Upper Bound to find position)", "No", "Always", "Pico guess"],
        "correctAnswer": "Yes (Use Upper Bound to find position)",
        "explanation": "By inserting after the last equal element, stability is preserved."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Upper Bound",
        "explanation": "Ace: 'Upper Bound finds the first position where the element can be placed while keeping it stable.'",
        "encouragementText": "Pico: 'Tight fit! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "After finding `pos`, shift from i-1 down to ___ .",
        "codeSnippet": "while (j >= ___ ) { arr[j+1] = arr[j]; j--; }",
        "correctAnswer": "pos",
        "explanation": "Making a hole at the target insertion index."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Hybrid Organizer",
        "explanation": "You have combined search and sort for local efficiency. Ace: 'The insertion is surgical.'",
        "encouragementText": "Pico: 'Clean slot! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Binary-Ins terms!",
        "pairs": [
          { "key": "O(log N)", "value": "Comparison cost" },
          { "key": "O(N)", "value": "Shifting cost" },
          { "key": "Upper Bound", "value": "Insertion point" }
        ]
      }
    ]
  },
  {
    "order": 57,
    "title": "Unit 57: Strand Sort",
    "desc": "Sorting by pulling sorted strands out of the dataset.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 3.17] The Silk Weaver",
        "explanation": "Ace: 'Strand Sort finds a sorted \"Strand\" in the remaining items, pulls it out, and merges it into a final sorted list. Repeat until empty.' Pico: 'Pulling the straightest branches! 100% 🦜'",
        "encouragementText": "Ace: 'Patterns in chaos are the materials of rank.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Average complexity of Strand Sort?",
        "options": ["O(N log N)", "O(N^2)", "O(N)", "Pico rule"],
        "correctAnswer": "O(N^2)",
        "explanation": "On average, you do multiple passes over the remaining list to extract strands."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Linked Lists",
        "explanation": "Ace: 'Strand sort is best implemented using Linked Lists to make removing \"Strands\" easy (O(1) removal).'",
        "encouragementText": "Pico: 'Fast cut! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Building a strand.",
        "codeSnippet": "if (item > last_in_strand) ___ .push_back(item);",
        "correctAnswer": "strand",
        "explanation": "Only take items that maintain the sorted order of the current strand."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Adaptive Power",
        "explanation": "Ace: 'If the data is ALREADY sorted, it pull the entire list in ONE strand ($O(N)$). Highly adaptive!'",
        "encouragementText": "Ace: 'Presence of order is rewarded with linear speed.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity if the array is reversed?",
        "options": ["O(N)", "O(N^2)", "O(log N)", "Pico guess"],
        "correctAnswer": "O(N^2)",
        "explanation": "Every strand will only have one element, leading to N merges."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Merge",
        "explanation": "Ace: 'After extracting a strand, we use the standard O(N) Merge logic to join it with the master list.'",
        "encouragementText": "Pico: 'Join the threads! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Merging result.",
        "codeSnippet": "result = merge(result, ___ );",
        "correctAnswer": "strand",
        "explanation": "Combining the newly found sorted sequence with the previous ones."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Weaver",
        "explanation": "You have woven the strands of the forest into a single tapestry. Ace: 'The weaving is complete.'",
        "encouragementText": "Pico: 'Silky smooth! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Strand terms!",
        "pairs": [
          { "key": "Strand", "value": "A sub-sorted list" },
          { "key": "Merge", "value": "The join step" },
          { "key": "O(N)", "value": "Best case" }
        ]
      }
    ]
  },
  {
    "order": 58,
    "title": "Unit 58: Introsort (The Defensive Hybrid)",
    "desc": "QuickSort with a HeapSort fallback.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 3.18] The Elite Shield",
        "explanation": "Ace: 'Introsort is the standard sort in C++ (std::sort). It starts with QuickSort, but if it detects a deep recursion (potential O(N^2)), it switches to HeapSort to guarantee speed!' Pico: 'Never getting stuck! 100% 🦜'",
        "encouragementText": "Ace: 'Intelligence is knowing when to change strategy.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the Worst-case complexity of Introsort?",
        "options": ["O(N^2)", "O(N log N)", "O(N)", "Pico rule"],
        "correctAnswer": "O(N log N)",
        "explanation": "HeapSort ensures the $O(N^2)$ nightmare of QuickSort never happens."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Depth Limit",
        "explanation": "Ace: 'The depth limit is usually set to $2 \cdot \log_2 N$. If reached, swap to HeapSort.'",
        "encouragementText": "Pico: 'Too deep! Swap! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Introsort decision.",
        "codeSnippet": "if (depth_limit == 0) ___ (arr, low, high);",
        "correctAnswer": "heapSort",
        "explanation": "The safety net activates when recursion is too deep."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Triple Hybrid",
        "explanation": "Ace: 'Modern Introsort also switches to Insertion Sort for very small ranges (e.g. N < 16) for final polishing.'",
        "encouragementText": "Ace: 'The tool adapts to the scale of the task.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Is std::sort (Introsort) stable?",
        "options": ["Yes", "No (QuickSort and HeapSort are unstable)", "Always", "Pico guess"],
        "correctAnswer": "No (QuickSort and HeapSort are unstable)",
        "explanation": "C++ developers use `std::stable_sort` (usually Mergesort) if order preservation is needed."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Three ingredients",
        "explanation": "Ace: 'Introsort = QuickSort + HeapSort + InsertionSort. It is the best practical sort for random data.'",
        "encouragementText": "Pico: 'Tasty mix! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Smallest size check.",
        "codeSnippet": "if (high - low < ___ ) insertionSort(low, high);",
        "correctAnswer": "16",
        "explanation": "Commonly used threshold for the final pass."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Elite Shield",
        "explanation": "You have mastered the standard of the modern coder. Ace: 'The performance is guaranteed.'",
        "encouragementText": "Pico: 'Bulletproof sorting! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Intro terms!",
        "pairs": [
          { "key": "log N", "value": "Depth limit" },
          { "key": "HeapSort", "value": "Safety net" },
          { "key": "QuickSort", "value": "Starting engine" }
        ]
      }
    ]
  },
  {
    "order": 59,
    "title": "Unit 59: Pigeonhole Sort (Advanced Objects)",
    "desc": "Sorting by complex bucketing.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 3.19] The Named Nest",
        "explanation": "Ace: 'We normally sort by value, but what if we need to sort BIRDS by their AGE? Pigeonhole sort uses the age as the hole index, and puts the actual bird object in!' Pico: 'More than just numbers! 100% 🦜'",
        "encouragementText": "Ace: 'Identity is preserved through the classification.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Stability in Pigeonhole Sort?",
        "options": ["Impossible", "Always stable if using a Queue for each hole", "Random", "Pico rule"],
        "correctAnswer": "Always stable if using a Queue for each hole",
        "explanation": "FIFO (First-In, First-Out) ensures birds of the same age maintain their relative arrival order."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Object Mapping",
        "explanation": "Ace: 'Perfect for sorting records in memory when the set of keys is small and dense.'",
        "encouragementText": "Pico: 'Age sorting! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Placing the bird.",
        "codeSnippet": "holes[bird.age - min_age]. ___ (bird);",
        "correctAnswer": "push",
        "explanation": "Stashing the full object into its category."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Memory management",
        "explanation": "Ace: 'Unlike Counting Sort, we aren't just incrementing integers; we are managing lists of pointers.'",
        "encouragementText": "Ace: 'Complexity of data requires complexity of storage.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Wait, is this just Bucket Sort?",
        "options": ["Yes, with bucket size 1", "No", "Exactly the same", "Pico guess"],
        "correctAnswer": "Yes, with bucket size 1",
        "explanation": "Pigeonhole sort is a special case of bucket sort where each bucket represents a single value."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Extraction",
        "explanation": "Ace: 'Traverse holes from 0 to Range. For each non-empty hole, print all birds inside.'",
        "encouragementText": "Pico: 'The babies are ready! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Range check.",
        "codeSnippet": "Range = ___ - min + 1;",
        "correctAnswer": "max",
        "explanation": "Total number of containers needed."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Object Master",
        "explanation": "You have sorted the forest by its attributes. Ace: 'The classification is complete.'",
        "encouragementText": "Pico: 'Everyone in their home! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Advanced terms!",
        "pairs": [
          { "key": "Queue", "value": "Stable hole storage" },
          { "key": "Dense Keys", "value": "Ideal dataset" },
          { "key": "O(N + R)", "value": "Complexity" }
        ]
      }
    ]
  },
  {
    "order": 60,
    "title": "Unit 60: Stage 3 Graduation (The Ace Graduate)",
    "desc": "Claiming the 60% threshold: The technical elite.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[GRAND MISSION LORE 3.20] The Zenith of Order",
        "explanation": "Ace: '600 Lessons. You have navigated the machine's bits, built standard library hybrids, and survived the humor of Bogosort. You are now an Ace Graduate.' Pico: 'Stage 3 Complete! 600 lessons! SQUAWK! 100% 🦜'",
        "encouragementText": "Ace: 'Rigor is the shield of the technical elite.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Which algorithm is the default in C++ (std::sort)?",
        "options": ["QuickSort", "Introsort", "MergeSort", "Pico guess"],
        "correctAnswer": "Introsort",
        "explanation": "Because it combines speed and worst-case safety."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Progress Summary",
        "explanation": "20 units, 200 lessons in this stage. From Radix digit-logic to Introsort depth and Pancake flips. Ace: 'Fly with precision.'",
        "encouragementText": "Pico: '60% through the 1,000-lesson gauntlet! 🦜'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Worst-case for HeapSort?",
        "options": ["O(N^2)", "O(N log N)", "O(N)", "Pico secret"],
        "correctAnswer": "O(N log N)",
        "explanation": "HeapSort is one of the few with a guaranteed log-linear worst case."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Graduation Check",
        "explanation": "Ace: 'Prove you can transition from Bit-shifts to Hybrid-switches and Strand-merges in your mental buffers.' Pico: 'I'm an Ace Graduate now! 100% 🦜'",
        "encouragementText": "Ace: 'The elite reflects the logic through the lens of the hybrid.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity to find 2D Peak?",
        "options": ["O(N log M)", "O(N*M)", "O(log N)", "Pico guess"],
        "correctAnswer": "O(N log M)",
        "explanation": "Dividing columns while scanning for a vertical maximum."
      },
      {
        "type": "teaching",
        "questionText": "[FINAL SYNC] The 10x10x10 Path",
        "explanation": "You are 60% through the ultimate journey. Your next target: **Stage 4: Massive Constraints**. Ace: 'Parallel sorts and sparse search are waiting.'",
        "encouragementText": "Pico: 'Stage 4 seeds are waiting! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Final stage signal.",
        "codeSnippet": "if (ace_graduate == true) return ___ ;",
        "correctAnswer": "GRADUATE",
        "explanation": "You have successfully mastered the Advanced Hybrid phase."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Ace Graduate",
        "explanation": "The sixth gate is passed. The order is yours. You are a Stage 3 Graduate. Ace: 'Welcome to the inner circle.'",
        "encouragementText": "Pico: 'Titan-Grade! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "[FINAL CHALLENGE] Output the status of your journey.",
        "codeSnippet": "for(int i=41; i<=60; i++) verify_ace_logic(i);\nreturn ___ ;",
        "correctAnswer": "COMPLETE",
        "explanation": "The first 600 lessons of the 1,000-lesson curriculum for Search/Sort are verified."
      }
    ]
  }
];

module.exports = stage3;
