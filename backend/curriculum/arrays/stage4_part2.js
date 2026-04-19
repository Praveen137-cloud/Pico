const stage4_part2 = [
  {
    order: 71,
    title: 'Rainwater Traps II (2D)',
    desc: 'Calculating trapped water in a 2D grid matrix.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Flooded Island! Instead of a row, the water is trapped in a 2D GRID! This is 3D trapping, fledgling! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Use a Min Heap of all boundary cells. Process the shortest boundary cell, and check its neighbors! 🦜"', codeSnippet: 'while (!pq.isEmpty()) {\n  Cell curr = pq.poll();\n  for(neighbor : curr) {\n    water += max(0, curr.h - n.h);\n    pq.push(Cell(n.x, n.y, max(n.h, curr.h)));\n  }\n}' },
      { type: 'multiple_choice', questionText: 'Best data structure for 2D Trapping Rainwater?', options: ['Min Heap (Priority Queue)', 'Queue (BFS)', 'Stack'], correctAnswer: 'Min Heap (Priority Queue)' },
      { type: 'match_following', questionText: 'Match 2D Trap Logic!', pairs: [{key: 'Boundary', value: 'Min Heap entries'}, {key: 'Processing', value: 'BFS with Heap'}, {key: 'Complexity', value: 'O(MN log(MN))'}] },
      { type: 'programming_board', questionText: 'Add initial boundary to the heap.', codeSnippet: 'if (isBoundary(r, c)) heap.___(new Cell(r, c, mat[r][c]));', correctAnswer: 'push' },
      { type: 'teaching', questionText: '🦜 Pico: "The water only leaks from the lowest point on the perimeter. So we always process the MINIMUM boundary! Brilliant! 🦜"' },
      { type: 'multiple_choice', questionText: 'Time complexity for 2D Rainwater Trapping?', options: ['O(MN log(MN))', 'O(MN)', 'O(M+N)'], correctAnswer: 'O(MN log(MN))' },
      { type: 'code_fill_in', questionText: 'Mark cell as visited.', codeSnippet: 'visited[r][c] = ___;', correctAnswer: 'true' },
      { type: 'teaching', questionText: '🦜 Pico: "An island of code in a sea of logic! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Can I swim?"', options: ['Parrots fly!', 'Yes.', '0'], correctAnswer: 'Parrots fly!' }
    ]
  },
  {
    order: 72,
    title: 'Range Sum 2D (Mutable)',
    desc: 'Updating and querying rectangle sums in O(log M * log N).',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "2D Fenwick Tree! Updating a single point and querying the sum of any rectangle in the matrix! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Nested BITs! An outer Fenwick tree for Rows, and inner Fenwick trees for Columns! 🦜"', codeSnippet: 'for(; i<=m; i+=i&-i)\n  for(; j<=n; j+=j&-j)\n    tree[i][j] += val;' },
      { type: 'multiple_choice', questionText: 'Complexity of point update in 2D Fenwick Tree?', options: ['O(log M * log N)', 'O(M * N)', 'O(log(M+N))'], correctAnswer: 'O(log M * log N)' },
      { type: 'match_following', questionText: 'Match 2D BIT Terms!', pairs: [{key: 'update(r, c)', value: 'Nested Loops'}, {key: 'query(r, c)', value: 'Rect sum(0,0 to r,c)'}, {key: 'Space', value: 'O(MN)'}] },
      { type: 'programming_board', questionText: 'Query sum of rectangle (r1, c1) to (r2, c2).', codeSnippet: 'ans = sum(r2,c2) - sum(r1-1,c2) - sum(r2,c1-1) ___ sum(r1-1,c1-1);', correctAnswer: '+' },
      { type: 'teaching', questionText: '🦜 Pico: "This is the cornerstone of dynamic 2D grid processing. Extremely efficient for frequent updates! 🦜"' },
      { type: 'multiple_choice', questionText: 'Can a 2D segment tree do the same thing?', options: ['Yes (O(log M * log N))', 'No', 'Only for 1D'], correctAnswer: 'Yes (O(log M * log N))' },
      { type: 'code_fill_in', questionText: 'Update loop for J index.', codeSnippet: 'for(; j <= cols; j += (j & ___))', correctAnswer: '-j' },
      { type: 'teaching', questionText: '🦜 Pico: "The matrix moves as I fly! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Is the rectangle gold?"', options: ['SQUAWK YES!', 'No.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 73,
    title: 'The Skyline 2D (Intro)',
    desc: 'Finding the outer perimeter of buildings in a 2D plane.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Skyline Recall! Let\'s build the Divide and Conquer version of the skyline problem for maximum efficiency! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Split the buildings into two halves. Recursively find the skyline for each, and then Merge! 🦜"', codeSnippet: 'vector<Point> merge(leftSky, rightSky);' },
      { type: 'multiple_choice', questionText: 'Complexity of Divide and Conquer Skyline?', options: ['O(N log N)', 'O(N^2)', 'O(N)'], correctAnswer: 'O(N log N)' },
      { type: 'match_following', questionText: 'Match D&C Steps!', pairs: [{key: 'Base Case', value: 'One building'}, {key: 'Combine', value: 'Merge points'}, {key: 'Pivot', value: 'N/2'}] },
      { type: 'programming_board', questionText: 'Compare current heights of left and right skylines.', codeSnippet: 'h = max(h_left, ___);', correctAnswer: 'h_right' },
      { type: 'teaching', questionText: '🦜 Pico: "Merging is tricky—you must check for redundant points where the height doesn\'t change! 🦜"' },
      { type: 'multiple_choice', questionText: 'Why is D&C sometimes preferred over Sweep-Line?', options: ['Easier to parallelize', 'Faster', 'Slower'], correctAnswer: 'Easier to parallelize' },
      { type: 'code_fill_in', questionText: 'Update last height.', codeSnippet: 'lastH = ___;', correctAnswer: 'h' },
      { type: 'teaching', questionText: '🦜 Pico: "The horizon is clearer now! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Do I have a skyline?"', options: ['A silhouette of glory!', 'No.', '0'], correctAnswer: 'A silhouette of glory!' }
    ]
  },
  {
    order: 74,
    title: 'Median of Unsorted',
    desc: 'Finding the median of an unsorted array in O(N).',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "QuickSelect! How to find the median (or Kth smallest) of a jumbled flock in LINEAR time! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Partition like QuickSort! If the pivot index is K, you found it! If not, only fly into ONE half! 🦜"', codeSnippet: 'if (pivotIdx == k) return a[k];\nelse if (pivotIdx > k) return quickSelect(low, pivotIdx-1);\nelse return quickSelect(pivotIdx+1, high);' },
      { type: 'multiple_choice', questionText: 'Average case time complexity for QuickSelect?', options: ['O(N)', 'O(N log N)', 'O(N^2)'], correctAnswer: 'O(N)' },
      { type: 'match_following', questionText: 'Match Partitioning!', pairs: [{key: 'Pivot < K', value: 'Search Right'}, {key: 'Pivot > K', value: 'Search Left'}, {key: 'Worst Case', value: 'O(N^2)'}] },
      { type: 'programming_board', questionText: 'Find the element at the middle index (Median).', codeSnippet: 'result = quickSelect(0, n-1, ___);', correctAnswer: 'n/2' },
      { type: 'teaching', questionText: '🦜 Pico: "To guarantee O(N) even in the worst case, use the \'Median of Medians\' algorithm to pick a good pivot! 🦜"' },
      { type: 'multiple_choice', questionText: 'Worst-case time complexity for QuickSelect with Median of Medians?', options: ['O(N)', 'O(N^2)', 'O(log N)'], correctAnswer: 'O(N)' },
      { type: 'code_fill_in', questionText: 'Randomly pick a pivot index.', codeSnippet: 'int pIdx = low + rand() % (___);', correctAnswer: 'high-low+1' },
      { type: 'teaching', questionText: '🦜 Pico: "The true median remains hidden until you partition! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I the median bird?"', options: ['SQUAWK YES!', 'No.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 75,
    title: 'Subarray XOR K',
    desc: 'Counting subarrays with XOR sum equal to M (O(N)).',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "XOR Puzzles! Exactly like Subarray Sum K, but with Bitwise XOR! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "If `PrefixXOR[j] ^ PrefixXOR[i] == M`, then the subarray i to j matches! Check if `currXOR ^ M` is in your map! 🦜"', codeSnippet: 'if (map.has(currXOR ^ m)) count += map.get(currXOR ^ m);' },
      { type: 'multiple_choice', questionText: 'Complexity of finding Subarray XOR M?', options: ['O(N)', 'O(N^2)', 'O(N log N)'], correctAnswer: 'O(N)' },
      { type: 'match_following', questionText: 'Match XOR Magic!', pairs: [{key: 'X ^ X', value: '0'}, {key: 'X ^ 0', value: 'X'}, {key: 'X ^ Y = M', value: 'X ^ M = Y'}] },
      { type: 'programming_board', questionText: 'The bitwise target calculation.', codeSnippet: 'target = currXOR ___ k;', correctAnswer: '^' },
      { type: 'teaching', questionText: '🦜 Pico: "XOR is its own inverse! That is why we check for `currXOR ^ M`. Bitwise logic at the highest level! 🦜"' },
      { type: 'multiple_choice', questionText: 'Initial value in the XOR map for sum 0?', options: ['{0: 1}', '{1: 1}', '{}'], correctAnswer: '{0: 1}' },
      { type: 'code_fill_in', questionText: 'Update current XOR.', codeSnippet: 'currXOR ___ arr[i];', correctAnswer: '^=' },
      { type: 'teaching', questionText: '🦜 Pico: "Bits are my friends, fledgling! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Is the XOR 0?"', options: ['Only if I’m cloned!', 'Yes.', '0'], correctAnswer: 'Only if I’m cloned!' }
    ]
  },
  {
    order: 76,
    title: 'Count Smallest After',
    desc: 'Counting smaller elements to the right for each bird (Fenwick Tree).',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Smaller Right! For each bird, how many smaller birds are to its right? Let\'s process backward! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Process from right to left. For each bird `x`, query the Fenwick Tree for `sum(x-1)`, then `update(x, 1)`! 🦜"', codeSnippet: 'for(int i=n-1; i>=0; i--) {\n  ans[i] = query(rank[arr[i]] - 1);\n  update(rank[arr[i]], 1);\n}' },
      { type: 'multiple_choice', questionText: 'Complexity for Count of Smaller Elements Self?', options: ['O(N log N)', 'O(N^2)', 'O(N)'], correctAnswer: 'O(N log N)' },
      { type: 'match_following', questionText: 'Match BIT Steps!', pairs: [{key: 'Backward', value: 'Right side seen'}, {key: 'query(x-1)', value: 'Counts seen value < x'}, {key: 'update(x)', value: 'Mark bird as seen'}] },
      { type: 'programming_board', questionText: 'Update BIT with seen value.', codeSnippet: 'bit.update(value, ___);', correctAnswer: '1' },
      { type: 'teaching', questionText: '🦜 Pico: "You MUST coordinate (compress) the values first so they fit in a small BIT! 🦜"' },
      { type: 'multiple_choice', questionText: 'What if elements repeat?', options: ['Handles correctly via rank', 'Crashes', 'Ignore'], correctAnswer: 'Handles correctly via rank' },
      { type: 'code_fill_in', questionText: 'Query for smaller birds.', codeSnippet: 'count = bit.query(rank - ___);', correctAnswer: '1' },
      { type: 'teaching', questionText: '🦜 Pico: "Looking back to see the future of the array! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Are the birds smaller?"', options: ['SQUAWK!', 'No.', '0'], correctAnswer: 'SQUAWK!' }
    ]
  },
  {
    order: 77,
    title: 'Range Max (Mutable)',
    desc: 'Updating and querying range maximums (Segment Tree).',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Segment Tree Mastery! A binary tree where each node stores the MAX of its children. 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Update a value? Update the leaf and climb the tree to refresh affected maxes! O(log N). 🦜"', codeSnippet: 'tree[v] = max(tree[2*v], tree[2*v+1]);' },
      { type: 'multiple_choice', questionText: 'Complexity of Range Max Query in a Segment Tree?', options: ['O(log N)', 'O(1)', 'O(N)'], correctAnswer: 'O(log N)' },
      { type: 'match_following', questionText: 'Match SegTree Terms!', pairs: [{key: 'Leaf', value: 'Actual array elements'}, {key: 'Internal', value: 'max(L, R)'}, {key: 'Build', value: 'O(N)'}] },
      { type: 'programming_board', questionText: 'Left child index for node `v`.', codeSnippet: 'leftChild = ___ ;', correctAnswer: '2*v' },
      { type: 'teaching', questionText: '🦜 Pico: "Segment trees are the heavy artillery of array processing. They can do Range Sum, Range Min, Range Max, even GCD! 🦜"' },
      { type: 'multiple_choice', questionText: 'Space complexity for a Segment Tree?', options: ['O(4N)', 'O(N)', 'O(log N)'], correctAnswer: 'O(4N)' },
      { type: 'code_fill_in', questionText: 'Recursive query merge logic.', codeSnippet: 'return max(query(left), query(___));', correctAnswer: 'right' },
      { type: 'teaching', questionText: '🦜 Pico: "A tree of peaks! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I the root?"', options: ['The ultimate max!', 'No.', '0'], correctAnswer: 'The ultimate max!' }
    ]
  },
  {
    order: 78,
    title: 'Maximum XOR Pair',
    desc: 'Finding two numbers with the maximum XOR result (Trie).',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Max XOR Pair! How to find two birds whose bits clash the hardest? 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Store every number in a BIT-TRIE. For each number, try to traverse the path that has the OPPOSITE bit! 🦜"', codeSnippet: 'if (trie.has(!currentBit)) { res += (1 << i); node = node.next[!currentBit]; }' },
      { type: 'multiple_choice', questionText: 'Time complexity for Max XOR Pair using a Trie?', options: ['O(N * Log(MaxVal))', 'O(N^2)', 'O(N)'], correctAnswer: 'O(N * Log(MaxVal))' },
      { type: 'match_following', questionText: 'Match Trie Rules!', pairs: [{key: 'Opposite bit', value: 'Adds (1<<i)'}, {key: 'Same bit', value: 'Required path'}, {key: 'Bit depth', value: '31 or 63'}] },
      { type: 'programming_board', questionText: 'Get the bit at position `i`.', codeSnippet: 'bit = (x >>> ___) & 1;', correctAnswer: 'i' },
      { type: 'teaching', questionText: '🦜 Pico: "If you can\'t find the opposite bit, you must settle for the same bit. But we always prefer the clash! 🦜"' },
      { type: 'multiple_choice', questionText: 'Space complexity for the Bitwise Trie?', options: ['O(N * bitDepth)', 'O(N)', 'O(1)'], correctAnswer: 'O(N * bitDepth)' },
      { type: 'code_fill_in', questionText: 'Current max XOR calculation.', codeSnippet: 'max_xor = max(max_xor, ___);', correctAnswer: 'current_val' },
      { type: 'teaching', questionText: '🦜 Pico: "The clash of bits creates the spark of logic! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Is the XOR maxed?"', options: ['SQUAWK YES!', 'No.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 79,
    title: 'The Sliding Window Min',
    desc: 'Finding the minimum in every window of size K.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Window Min Recall! The opposite mission. Maximize the smallness, every single step! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Monotonic Deque (Increasing)! Kick out anyone BIGGER than the new bird! They are useless! 🦜"', codeSnippet: 'while (!dq.empty() && a[dq.back()] >= a[i]) dq.pop_back();' },
      { type: 'multiple_choice', questionText: 'Required complexity for Sliding Window Minimum?', options: ['O(N)', 'O(N*K)', 'O(N log K)'], correctAnswer: 'O(N)' },
      { type: 'match_following', questionText: 'Match Deque Rules!', pairs: [{key: 'dq.front()', value: 'Current Min Index'}, {key: 'New bird is smaller', value: 'Wipe Deque'}, {key: 'Goal', value: 'O(N) time'}] },
      { type: 'programming_board', questionText: 'Add index to deque.', codeSnippet: 'dq.___(i);', correctAnswer: 'push_back' },
      { type: 'teaching', questionText: '🦜 Pico: "Sliding window max and min are the twin wings of performance! 🦜"' },
      { type: 'multiple_choice', questionText: 'Can you solve this with a Segment Tree?', options: ['Yes (O(N log N))', 'No', '0'], correctAnswer: 'Yes (O(N log N))' },
      { type: 'code_fill_in', questionText: 'Remove expired indices.', codeSnippet: 'if (dq.front() <= i - ___) dq.pop_front();', correctAnswer: 'k' },
      { type: 'teaching', questionText: '🦜 Pico: "Window to the smallest secret! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I small?"', options: ['Tiny but mighty!', 'No.', '0'], correctAnswer: 'Tiny but mighty!' }
    ]
  },
  {
    order: 80,
    title: 'Stage 4 Graduation',
    desc: 'Touch the Sun: Elite Array Mastery.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "STAGE 4 COMPLETE! You have reached the summit of Elite Array logic. 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "2D Rainwater, Skyline D&C, Segment Trees, Fenwick Trees, and Max XOR Tries. You are no longer a fledgling; you are a RAPTOR! 🦜"' },
      { type: 'multiple_choice', questionText: 'What was the toughest Elite pattern?', options: ['Median of Two Sorted', 'Fenwick Tree', 'D&C Skyline'], correctAnswer: 'Median of Two Sorted' },
      { type: 'multiple_choice', questionText: 'QuickSelect average time?', options: ['O(N)', 'O(N^2)'], correctAnswer: 'O(N)' },
      { type: 'multiple_choice', questionText: 'Segment Tree space?', options: ['O(4N)', 'O(N)'], correctAnswer: 'O(4N)' },
      { type: 'multiple_choice', questionText: 'First Missing Positive time?', options: ['O(N)', 'O(N^2)'], correctAnswer: 'O(N)' },
      { type: 'multiple_choice', questionText: 'Median of medians goal?', options: ['O(N) worst case', 'Sorting'], correctAnswer: 'O(N) worst case' },
      { type: 'match_following', questionText: 'Final Elite Match!', pairs: [{key: 'Fledgling', value: 'Past'}, {key: 'Raptor', value: 'Present'}, {key: 'Master', value: 'Stage 5'}] },
      { type: 'teaching', questionText: '🦜 Pico: "Next, we enter the Realm of Strings. Prepare for KMP, Manacher, and Suffix Automata! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Are you ready for Stage 5?"', options: ['SQUAWK YES!', 'Wait...', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  }
];

module.exports = stage4_part2;
