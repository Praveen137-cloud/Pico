const stage1_part2 = [
  {
    order: 11,
    title: 'Instant Forest (Build-Heap)',
    desc: 'Converting an arbitrary array into a Heap efficiently.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "Efficiency Alert! To turn a random group of birds into a Heap, we don\'t have to insert them one by one. There is a faster way! 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Build-Heap: Start from the last non-leaf node and work your way up to the root, calling Heapify at each step. Complexity: O(N)! 🦜"', codeSnippet: 'for(i = n/2 - 1; i >= 0; i--) heapify(i);' },
      { type: 'multiple_choice', questionText: 'Time complexity of the optimal Build-Heap algorithm?', options: ['O(N)', 'O(N log N)', 'O(log N)'], correctAnswer: 'O(N)' },
      { type: 'match_following', questionText: 'Match Build-Heap pieces!', pairs: [{key: 'n/2 - 1', value: 'Start node (last internal)'}, {key: '0', value: 'End node (root)'}, {key: 'Bottom-Up', value: 'Direction'}] },
      { type: 'programming_board', questionText: 'We call ___ on each internal node in reverse order.', codeSnippet: 'for(...) { ___ (i); }', correctAnswer: 'heapify' },
      { type: 'teaching', questionText: 'By Pico: "Why O(N)? Because most nodes are near the bottom and only travel a short distance, while fewer nodes need long travels! 🦜"' },
      { type: 'multiple_choice', questionText: 'Does inserting one-by-one also take O(N)?', options: ['No (It takes O(N log N))', 'Yes', 'Pico rule'], correctAnswer: 'No (It takes O(N log N))' },
      { type: 'code_fill_in', questionText: 'Loop starting point.', codeSnippet: 'for(int i = n/2 ___ 1; i >= 0; i--)', correctAnswer: '-' },
      { type: 'teaching', questionText: 'By Pico: "Instant order! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Is the forest ready?"', options: ['SQUAWK YES!', 'No.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 12,
    title: 'The Min-Fixer (Min-Heapify)',
    desc: 'Deep dive into the Min-Heapify operation.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "Refining the Scale! If a bird at index `i` is too heavy (violates Min-Property), it must sink until it finds lighter balance. 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Compare node `i` with its left and right children. Swap with the SMALLEST child and recurse down! 🦜"', codeSnippet: 'void minHeapify(i) {\n  smallest = i;\n  if(L < n && heap[L] < heap[smallest]) smallest = L;\n  if(R < n && heap[R] < heap[smallest]) smallest = R;\n  if(smallest != i) { swap(i, smallest); minHeapify(smallest); }\n}' },
      { type: 'multiple_choice', questionText: 'In Min-Heapify, which child do you swap with?', options: ['The smallest child', 'The largest child', 'The left child only'], correctAnswer: 'The smallest child' },
      { type: 'match_following', questionText: 'Match Min-Fixer tools!', pairs: [{key: 'smallest = i', value: 'Initial assumption'}, {key: 'heap[L] < heap[smallest]', value: 'Found better parent'}, {key: 'Recursion', value: 'Fix entire path'}] },
      { type: 'programming_board', questionText: 'Target index for the next recursive call if swap happens.', codeSnippet: 'minHeapify( ___ );', correctAnswer: 'smallest' },
      { type: 'teaching', questionText: 'By Pico: "This ensures the minimum value bubbles UP correctly while keeping the rest of the forest in check! 🦜"' },
      { type: 'multiple_choice', questionText: 'Complexity of a single Heapify call?', options: ['O(log N)', 'O(1)', 'O(N)'], correctAnswer: 'O(log N)' },
      { type: 'code_fill_in', questionText: 'Base case condition.', codeSnippet: 'if (smallest ___ i) return;', correctAnswer: '==' },
      { type: 'teaching', questionText: 'By Pico: "Precise balance! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Is the min-heap fixed?"', options: ['Perfectly light!', 'No.', '0'], correctAnswer: 'Perfectly light!' }
    ]
  },
  {
    order: 13,
    title: 'The Max-Fixer (Max-Heapify)',
    desc: 'Deep dive into the Max-Heapify operation.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "Refining the Crown! For a Max-Heap, if a small bird is at the root, it must sink until its larger children take over! 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Compare node `i` with its children. Swap with the LARGEST child and recurse down! 🦜"', codeSnippet: 'void maxHeapify(i) {\n  largest = i;\n  if(L < n && heap[L] > heap[largest]) largest = L;\n  if(R < n && heap[R] > heap[largest]) largest = R;\n  if(largest != i) { swap(i, largest); maxHeapify(largest); }\n}' },
      { type: 'multiple_choice', questionText: 'In Max-Heapify, which child do you swap with?', options: ['The largest child', 'The smallest', 'Right child'], correctAnswer: 'The largest child' },
      { type: 'match_following', questionText: 'Match Max-Fixer tools!', pairs: [{key: 'largest = i', value: 'Initial assumption'}, {key: 'heap[L] > heap[largest]', value: 'Found better leader'}, {key: 'Recursion', value: 'Sinking the bird'}] },
      { type: 'programming_board', questionText: 'Condition for the right child to take over.', codeSnippet: 'if (R < n && heap[R] ___ heap[largest])', correctAnswer: '>' },
      { type: 'teaching', questionText: 'By Pico: "O(log N). This maintain the structural integrity of the elite canopy! 🦜"' },
      { type: 'multiple_choice', questionText: 'Max-Heapify ensures that the parent of node `i` is?', options: ['>= node i', '<= node i', 'Equal to node i'], correctAnswer: '>= node i' },
      { type: 'code_fill_in', questionText: 'Swap logic.', codeSnippet: 'if(largest != i) ___ (heap[i], heap[largest]);', correctAnswer: 'swap' },
      { type: 'teaching', questionText: 'By Pico: "Elite hierarchy! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Is the max-heap fixed?"', options: ['SQUAWK YES!', 'No.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 14,
    title: 'The Sort Prep (Heap-Sort I)',
    desc: 'Phase 1 of Heap-Sort: Building the Heap.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "Sorting the Forest! To sort an array, first turn it into a Max-Heap to prepare its strongest birds for the count! 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Phase 1: Perform Build-Heap (O(N)). Now, our largest values are ready at the root! 🦜"', codeSnippet: 'for(i = n/2-1; i>=0; i--) maxHeapify(i);' },
      { type: 'multiple_choice', questionText: 'Which type of heap is used for sorting in Ascending order?', options: ['Max-Heap', 'Min-Heap', 'Binary Tree'], correctAnswer: 'Max-Heap' },
      { type: 'match_following', questionText: 'Match Sorting logic!', pairs: [{key: 'Phase 1', value: 'Build Max-Heap'}, {key: 'Phase 2', value: 'Swap and Shrink'}, {key: 'Result', value: 'Sorted Array'}] },
      { type: 'programming_board', questionText: 'Build-Heap complexity in Phase 1.', codeSnippet: 'Complexity = O( ___ );', correctAnswer: 'N' },
      { type: 'teaching', questionText: 'By Pico: "By the end of Phase 1, the root is definitely the largest. But the rest isn\'t sorted yet! 🦜"' },
      { type: 'multiple_choice', questionText: 'After Phase 1, is the entire array sorted?', options: ['No', 'Yes', 'Pico rule'], correctAnswer: 'No' },
      { type: 'code_fill_in', questionText: 'Begin build loop.', codeSnippet: 'for(int i = ___ / 2 - 1; i >= 0; i--)', correctAnswer: 'n' },
      { type: 'teaching', questionText: 'By Pico: "Ready for harvest! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Is the heap built?"', options: ['Maximum extraction ready!', 'No.', '0'], correctAnswer: 'Maximum extraction ready!' }
    ]
  },
  {
    order: 15,
    title: 'The Great Extraction (Heap-Sort II)',
    desc: 'Phase 2 of Heap-Sort: Swapping and Sinking.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "The Harvest! One by one, swap the largest bird (root) with the last bird in the forest, then shrink the forest and sink the root! 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Phase 2: For each bird, swap `heap[0]` with `heap[i]`, then call `maxHeapify(0)` on a smaller size. O(N log N)! 🦜"', codeSnippet: 'for(i = n-1; i > 0; i--) {\n  swap(heap[0], heap[i]);\n  maxHeapify(heap, i, 0);\n}' },
      { type: 'multiple_choice', questionText: 'Total time complexity of Heap-Sort?', options: ['O(N log N)', 'O(N^2)', 'O(N)'], correctAnswer: 'O(N log N)' },
      { type: 'match_following', questionText: 'Match Extraction steps!', pairs: [{key: 'Swap', value: 'Move Max to end'}, {key: 'i--', value: 'Shrink boundaries'}, {key: 'Heapify(0, i)', value: 'Restore structure'}] },
      { type: 'programming_board', questionText: 'The sorted part of the array grows from the ___ to the ___ during Heap-Sort.', codeSnippet: 'Direction = ___ to ___ ;', correctAnswer: 'back to front' },
      { type: 'teaching', questionText: 'By Pico: "O(N log N) is guaranteed. It is an In-Place sort with O(1) extra space! 🦜"' },
      { type: 'multiple_choice', questionText: 'Extra space used by Heap-Sort?', options: ['O(1)', 'O(N)', 'O(log N)'], correctAnswer: 'O(1)' },
      { type: 'code_fill_in', questionText: 'Correct the heap size for heapify.', codeSnippet: 'maxHeapify(array, ___, 0);', correctAnswer: 'i' },
      { type: 'teaching', questionText: 'By Pico: "Sorted flight! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Is the array sorted?"', options: ['SQUAWK YES!', 'No.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 16,
    title: 'Ranking Update',
    desc: 'Changing the priority of an existing node in a Heap.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "Promotion or Demotion! What if a bird becomes more important? We must update its location! 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Change Key: Update the value at index `i`. If new value is larger, call Up-Heapify. If smaller, call Down-Heapify! 🦜"', codeSnippet: 'void update(i, val) {\n  if(val > heap[i]) { heap[i] = val; upHeap(i); }\n  else { heap[i] = val; sink(i); }\n}' },
      { type: 'multiple_choice', questionText: 'Time complexity of updating a priority in a Heap?', options: ['O(log N)', 'O(1)', 'O(N)'], correctAnswer: 'O(log N)' },
      { type: 'match_following', questionText: 'Match Update logic!', pairs: [{key: 'Increase Val', value: 'Percolate Up'}, {key: 'Decrease Val', value: 'Sink Down'}, {key: 'O(log N)', value: 'Complexity'}] },
      { type: 'programming_board', questionText: 'Function used if the priority is INCREASED in a Max-Heap.', codeSnippet: 'If (priorityIncreased) ___ (i);', correctAnswer: 'upHeap' },
      { type: 'teaching', questionText: 'By Pico: "This is the backbone of Dijkstra’s Algorithm (Decrease-Key). Keeping ranks current is vital! 🦜"' },
      { type: 'multiple_choice', questionText: 'In a Min-Heap, if a value decreases, do we Up-Heap or Sink?', options: ['Up-Heap (bubbles to top)', 'Sink', '0'], correctAnswer: 'Up-Heap (bubbles to top)' },
      { type: 'code_fill_in', questionText: 'Set new value.', codeSnippet: 'heap[i] ___ newVal;', correctAnswer: '=' },
      { type: 'teaching', questionText: 'By Pico: "Dynamic ranks! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Is the rank updated?"', options: ['Modern priority!', 'No.', '0'], correctAnswer: 'Modern priority!' }
    ]
  },
  {
    order: 17,
    title: 'The Deep Delete',
    desc: 'Deleting an arbitrary node from a Heap.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "Expulsion! To remove a specific bird (not just the root), we swap it with the last bird and restore order! 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "1. Update its value to INFINITY (for Max-Heap). 2. Up-Heapify to the root. 3. Call `pop()`! Or just swap with last and check both directions. 🦜"', codeSnippet: 'void deleteAny(i) {\n  swap(heap[i], heap.back());\n  heap.pop_back();\n  // Check if we need to sink or float!\n  sink(i); upHeap(i);\n}' },
      { type: 'multiple_choice', questionText: 'Complexity of deleting a node at index `i`?', options: ['O(log N)', 'O(N)', 'O(1)'], correctAnswer: 'O(log N)' },
      { type: 'match_following', questionText: 'Match Deletion tools!', pairs: [{key: 'Swap with last', value: 'Safe removal'}, {key: 'pop_back()', value: 'Erase node'}, {key: 'sink/upHeap', value: 'Fix balance'}] },
      { type: 'programming_board', questionText: 'Shortcut: Decrease to -inf then ___ for Min-Heap.', codeSnippet: 'pq. ___ ();', correctAnswer: 'pop' },
      { type: 'teaching', questionText: 'By Pico: "It is slightly more complex than root deletion because you might need to move the replacement node UP or DOWN! 🦜"' },
      { type: 'multiple_choice', questionText: 'Can we delete from an empty heap?', options: ['No (Underflow)', 'Yes', '0'], correctAnswer: 'No (Underflow)' },
      { type: 'code_fill_in', questionText: 'Erase last.', codeSnippet: 'heap. ___ ();', correctAnswer: 'pop_back' },
      { type: 'teaching', questionText: 'By Pico: "Clean forest! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Is the node gone?"', options: ['SQUAWK YES!', 'No.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 18,
    title: 'The K-th King (Largest)',
    desc: 'Finding the K-th largest element using a Heap.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "Top K Rankings! How to find the 3rd or 10th largest bird in a massive flock? 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Use a Min-Heap of size K! Keep the K largest birds we\'ve seen so far. If a new bird is larger than the root (the smallest of the top K), swap them! 🦜"', codeSnippet: 'for(x : array) {\n  pq.push(x);\n  if(pq.size() > k) pq.pop();\n}\nreturn pq.top();' },
      { type: 'multiple_choice', questionText: 'To find K-th LARGEST, what type of heap of size K do you use?', options: ['Min-Heap', 'Max-Heap', 'B-Tree'], correctAnswer: 'Min-Heap' },
      { type: 'match_following', questionText: 'Match Top-K logic!', pairs: [{key: 'Min-Heap size K', value: 'Store largest K'}, {key: 'Root', value: 'The K-th largest'}, {key: 'O(N log K)', value: 'Complexity'}] },
      { type: 'programming_board', questionText: 'Complexity of finding K-th largest in array N.', codeSnippet: 'Complexity = O(N log ___ );', correctAnswer: 'K' },
      { type: 'teaching', questionText: 'By Pico: "O(N log K) is much faster than sorting O(N log N) if K is small! 🦜"' },
      { type: 'multiple_choice', questionText: 'Result if pq.top() returns 10 in a size-3 min-heap?', options: ['10 is the 3rd largest', '10 is the maximum', '0'], correctAnswer: '10 is the 3rd largest' },
      { type: 'code_fill_in', questionText: 'Maintain size.', codeSnippet: 'if (pq.size() ___ k) pq.pop();', correctAnswer: '>' },
      { type: 'teaching', questionText: 'By Pico: "Elite selection! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Did I find the king?"', options: ['The K-th elite!', 'No.', '0'], correctAnswer: 'The K-th elite!' }
    ]
  },
  {
    order: 19,
    title: 'The K-th Scale (Smallest)',
    desc: 'Finding the K-th smallest element using a Heap.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "Small K! How to find the 5th smallest berry in the forest? 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Use a Max-Heap of size K! Keep the K smallest items. If a new item is SMALLER than the root (the largest of the bottom K), swap them! 🦜"', codeSnippet: 'for(x : array) {\n  pq.push(x);\n  if(pq.size() > k) pq.pop();\n}\nreturn pq.top();' },
      { type: 'multiple_choice', questionText: 'To find K-th SMALLEST, which heap of size K do you use?', options: ['Max-Heap', 'Min-Heap', '0'], correctAnswer: 'Max-Heap' },
      { type: 'match_following', questionText: 'Match Bottom-K logic!', pairs: [{key: 'Max-Heap size K', value: 'Store smallest K'}, {key: 'Root', value: 'The K-th smallest'}, {key: 'Size check', value: 'Maintain K limit'}] },
      { type: 'programming_board', questionText: 'Root of the max-heap size K is the ___ largest of the K smallest.', codeSnippet: 'Role = ___ smallest bird;', correctAnswer: 'K-th' },
      { type: 'teaching', questionText: 'By Pico: "Complexity: O(N log K). Perfect for filtering the bottom of the rankings! 🦜"' },
      { type: 'multiple_choice', questionText: 'Is this faster than full sort?', options: ['Yes (O(N log K) < O(N log N))', 'No', '0'], correctAnswer: 'Yes (O(N log K) < O(N log N))' },
      { type: 'code_fill_in', questionText: 'Heap type.', codeSnippet: 'priority_queue<int> max_pq; // for ___ smallest', correctAnswer: 'K-th' },
      { type: 'teaching', questionText: 'By Pico: "Miniature focus! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Did I find the berry?"', options: ['The smallest elite!', 'No.', '0'], correctAnswer: 'The smallest elite!' }
    ]
  },
  {
    order: 20,
    title: 'Heap Mastery I',
    desc: 'Reflecting on the foundations of Heaps.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "FOUNDATION MASTERY! 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "You have conquered Build-Heap, Heap-Sort, Updating keys, and the elite K-th strategies. The priority forest is yours! 🦜"' },
      { type: 'multiple_choice', questionText: 'Build-Heap complexity?', options: ['O(N)', 'O(N log N)'], correctAnswer: 'O(N)' },
      { type: 'multiple_choice', questionText: 'Optimal K-th largest uses?', options: ['Min-Heap size K', 'Max-Heap size K'], correctAnswer: 'Min-Heap size K' },
      { type: 'multiple_choice', questionText: 'Heap-Sort in-place?', options: ['Yes', 'No'], correctAnswer: 'Yes' },
      { type: 'multiple_choice', questionText: 'Max-Heapify root swap?', options: ['With largest child', 'With smallest child'], correctAnswer: 'With largest child' },
      { type: 'multiple_choice', questionText: 'Decrease-key (Min-Heap)?', options: ['Up-Heapify', 'Sink-Down'], correctAnswer: 'Up-Heapify' },
      { type: 'match_following', questionText: 'Master Final Match!', pairs: [{key: 'Heapify', value: 'Restored!'}, {key: 'Sort', value: 'Sorted!'}, {key: 'Pico', value: 'Proud!'}] },
      { type: 'teaching', questionText: 'By Pico: "Stage 2: Advanced Heaps! We will merge heaps, find medians in real-time, and solve the elite K-way merge! SQUAWK! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Ready for the advanced climb?"', options: ['BEYOND AND UP!', 'Wait...', '0'], correctAnswer: 'BEYOND AND UP!' }
    ]
  }
];

module.exports = stage1_part2;
