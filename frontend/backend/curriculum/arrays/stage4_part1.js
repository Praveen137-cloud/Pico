const stage4_part1 = [
  {
    order: 61,
    title: 'Min Window Substring',
    desc: 'Finding the smallest window in S that contains all characters of T.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Elite Sliding Window! We need the SMALLEST nest possible that holds all the different birds we seek. 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Expand the `right` pointer until you have all birds. Then, shrink the `left` pointer as much as possible while keeping all birds! 🦜"', codeSnippet: 'while (count == targetCount) {\n  if (right - left < minLen) { minLen = right - left; start = left; }\n  if (map[s[left]]++ == 0) count--;\n  left++;\n}' },
      { type: 'multiple_choice', questionText: 'Goal of Min Window Substring?', options: ['Smallest window with T', 'Largest window', 'All unique chars'], correctAnswer: 'Smallest window with T' },
      { type: 'match_following', questionText: 'Match Window Actions!', pairs: [{key: 'Expand', value: 'right++'}, {key: 'Shrink', value: 'left++'}, {key: 'Condition', value: 'Still has all T'}] },
      { type: 'programming_board', questionText: 'Check if current char is in T.', codeSnippet: 'if (map[s[right]]-- ___ 0) count++;', correctAnswer: '>' },
      { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(N). Space: O(constant) for the character map. This is a Meta and Amazon legend! 🦜"' },
      { type: 'multiple_choice', questionText: 'Total passes over the string S?', options: ['Two (one for each pointer)', 'One', 'N'], correctAnswer: 'Two (one for each pointer)' },
      { type: 'code_fill_in', questionText: 'Initialize min length.', codeSnippet: 'int minL = ___;', correctAnswer: 'INT_MAX' },
      { type: 'teaching', questionText: '🦜 Pico: "Keep it tight, fledgling! Waste no room! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Did the window break?"', options: ['No, optimized!', 'Yes.', '0'], correctAnswer: 'No, optimized!' }
    ]
  },
  {
    order: 62,
    title: 'Median of Two Sorted',
    desc: 'Finding the median of two sorted arrays in O(log(min(M,N))).',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "THE FINAL BOSS of array logic. Finding the median of TWO sorted flocks without merging them! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Binary Search on the PARTITION of the smaller array! Ensure `leftSideMax <= rightSideMin` for both flocks. 🦜"', codeSnippet: 'if (maxLeftX <= minRightY && maxLeftY <= minRightX) // Found!' },
      { type: 'multiple_choice', questionText: 'Required time complexity for Median of Two Sorted Arrays?', options: ['O(log(min(M,N)))', 'O(M+N)', 'O(log(M+N))'], correctAnswer: 'O(log(min(M,N)))' },
      { type: 'match_following', questionText: 'Match Partition Rules!', pairs: [{key: 'leftSideSize', value: '(m+n+1)/2'}, {key: 'maxLeftX', value: 'A[i-1]'}, {key: 'minRightX', value: 'A[i]'}] },
      { type: 'programming_board', questionText: 'Partition index of array Y.', codeSnippet: 'partitionY = (m + n + 1) / 2 ___ partitionX;', correctAnswer: '-' },
      { type: 'teaching', questionText: '🦜 Pico: "If one flock is empty, the median is just the middle of the other. Handling edge cases is 90% of this battle! 🦜"' },
      { type: 'multiple_choice', questionText: 'Is the smaller array always used for Binary Search?', options: ['Yes, for speed', 'No', 'Depends on Pico'], correctAnswer: 'Yes, for speed' },
      { type: 'code_fill_in', questionText: 'Adjust partitionX if maxLeftX > minRightY.', codeSnippet: 'high = ___;', correctAnswer: 'partitionX-1' },
      { type: 'teaching', questionText: '🦜 Pico: "The most prestigious solution in all of LeetCode. You are touching the sun! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I the median?"', options: ['The EXACT middle!', 'No.', '0'], correctAnswer: 'The EXACT middle!' }
    ]
  },
  {
    order: 63,
    title: 'Matrix Shifting (Advanced)',
    desc: 'Rotating a rectangle matrix 90 degrees in O(1) space.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Rectangular Rotation! Squares are easy, but rotating a rectangle matrix IN-PLACE? That requires a different flight path! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Actually, you can ONLY do it in-place for SQUARE matrices. For rectangles, you MUST create a new bird cage of size CxR! 🦜"', codeSnippet: 'newMat[j][rows - 1 - i] = oldMat[i][j];' },
      { type: 'multiple_choice', questionText: 'If you rotate a 2x3 matrix, what are the new dimensions?', options: ['3x2', '2x3', '2x2'], correctAnswer: '3x2' },
      { type: 'match_following', questionText: 'Match Coordinate Mapping!', pairs: [{key: 'old[i][j]', value: 'new[j][R-1-i]'}, {key: 'Space', value: 'O(R*C)'}, {key: 'Time', value: 'O(R*C)'}] },
      { type: 'programming_board', questionText: 'New row index in the rotated matrix.', codeSnippet: 'new_row = ___ ;', correctAnswer: 'j' },
      { type: 'teaching', questionText: '🦜 Pico: "Don\'t try to be too clever with memory. Sometimes a new cage is the only way for a rectangular flock! 🦜"' },
      { type: 'multiple_choice', questionText: 'Complexity of non-square matrix rotation?', options: ['O(R*C)', 'O(N^2)', 'O(1)'], correctAnswer: 'O(R*C)' },
      { type: 'code_fill_in', questionText: 'New column index in total height `H`.', codeSnippet: 'new_col = H - 1 - ___ ;', correctAnswer: 'i' },
      { type: 'teaching', questionText: '🦜 Pico: "Elite developers know when to use extra space and when to be stingy! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Is the rectangle a square?"', options: ['If R == C!', 'No.', '0'], correctAnswer: 'If R == C!' }
    ]
  },
  {
    order: 64,
    title: 'Count Inversions',
    desc: 'Counting how many swaps a bubble sort would need (Merge Sort application).',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Inversion Counting! How jumbled is the flock? An inversion is when a bigger bird comes before a smaller bird! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Use Merge Sort! During the merge step, if `leftBird > rightBird`, then `leftBird` and ALL BIRDS AFTER IT in the left half are inversions! 🦜"', codeSnippet: 'if (left[i] > right[j]) count += (mid - i + 1);' },
      { type: 'multiple_choice', questionText: 'Time complexity of counting inversions?', options: ['O(N log N)', 'O(N^2)', 'O(N)'], correctAnswer: 'O(N log N)' },
      { type: 'match_following', questionText: 'Match Inversion Logic!', pairs: [{key: 'Merge Sort', value: 'The engine'}, {key: 'Left[i] > Right[j]', value: 'Match!'}, {key: 'count +=', value: 'mid - i + 1'}] },
      { type: 'programming_board', questionText: 'Recursive call to count left inversions.', codeSnippet: 'c = countInv(arr, low, ___) + countInv(...);', correctAnswer: 'mid' },
      { type: 'teaching', questionText: '🦜 Pico: "This measures how \'unsorted\' the array is. It’s used in ranking algorithms and search engines! 🦜"' },
      { type: 'multiple_choice', questionText: 'Max inversions in a reverse sorted array of size N?', options: ['N(N-1)/2', 'N', '0'], correctAnswer: 'N(N-1)/2' },
      { type: 'code_fill_in', questionText: 'Final total inversions.', codeSnippet: 'return leftCount + rightCount + ___ ;', correctAnswer: 'mergeCount' },
      { type: 'teaching', questionText: '🦜 Pico: "Sort and Count. A powerful dual-mission! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Are we upside down?"', options: ['Total inversions!', 'No.', '0'], correctAnswer: 'Total inversions!' }
    ]
  },
  {
    order: 65,
    title: 'The Skyline Sketch',
    desc: 'Drawing the silhouette of buildings (Priority Queue + Arrays).',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Skyline! Multiple buildings (rectangles) overlapping. We need the outer silhouette! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Break buildings into `(Start, Height)` and `(End, Height)`. Sweep across the X-axis and keep the MAX height in a Priority Queue! 🦜"', codeSnippet: 'if (currMaxHeight != prevMaxHeight) ans.push({x, currMaxHeight});' },
      { type: 'multiple_choice', questionText: 'Best data structure for tracking heights in the Skyline problem?', options: ['Max Heap / Priority Queue', 'Hash Map', 'Stack'], correctAnswer: 'Max Heap / Priority Queue' },
      { type: 'match_following', questionText: 'Match Sweep Actions!', pairs: [{key: 'Start point', value: 'Add height'}, {key: 'End point', value: 'Remove height'}, {key: 'Critical Point', value: 'Height change'}] },
      { type: 'programming_board', questionText: 'Insert height into heap for a start point.', codeSnippet: 'heap.___(height);', correctAnswer: 'push' },
      { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(N log N). Every roof vertex is a critical point. This is the ultimate test of geometry logic! 🦜"' },
      { type: 'multiple_choice', questionText: 'What happens if two critical points have the same X coordinate?', options: ['Process them together', 'Ignore one', 'Crash'], correctAnswer: 'Process them together' },
      { type: 'code_fill_in', questionText: 'Sort by X, then handle height ties.', codeSnippet: 'events.sort((a,b) => a.x - b.x || ___) ;', correctAnswer: 'b.h - a.h' },
      { type: 'teaching', questionText: '🦜 Pico: "The city looks beautiful from up here, fledgling! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I the tallest building?"', options: ['SQUAWK YES!', 'No.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 66,
    title: 'Fenwick Tree Flight',
    desc: 'Intro to Binary Indexed Trees (BIT) for prefix sums.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The BIT Tree! Prefix sums that can be UPDATED in O(log N). Fixed prefix sums are too static for a bird! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Use `i & (-i)` to find the \'Last Set Bit\'. This magic bit tells you which branch to fly to! 🦜"', codeSnippet: 'void update(int i, int val) {\n  for (; i <= n; i += (i & -i)) tree[i] += val;\n}' },
      { type: 'multiple_choice', questionText: 'Update complexity for a Fenwick Tree?', options: ['O(log N)', 'O(1)', 'O(N)'], correctAnswer: 'O(log N)' },
      { type: 'match_following', questionText: 'Match BIT Terms!', pairs: [{key: 'update(i)', value: 'i += (i & -i)'}, {key: 'query(i)', value: 'i -= (i & -i)'}, {key: 'Space', value: 'O(N)'}] },
      { type: 'programming_board', questionText: 'The bitwise trick to find the isolated last set bit.', codeSnippet: 'parent = i - (i & ___);', correctAnswer: '-i' },
      { type: 'teaching', questionText: '🦜 Pico: "It fits in a simple array of the same size. No complex nodes, just pure bit math. Elegance at its peak! 🦜"' },
      { type: 'multiple_choice', questionText: 'Can a Fenwick Tree do Range Sum queries?', options: ['Yes: query(R) - query(L-1)', 'No', 'Only for 0 to N'], correctAnswer: 'Yes: query(R) - query(L-1)' },
      { type: 'code_fill_in', questionText: 'Calculate prefix sum up to index `i`.', codeSnippet: 'for(; i > 0; i -= (i & -i)) sum += ___;', correctAnswer: 'tree[i]' },
      { type: 'teaching', questionText: '🦜 Pico: "Bitwise flight is the fastest flight! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Are you a bit or a byte?"', options: ['A bit of both!', 'Byte.', '0'], correctAnswer: 'A bit of both!' }
    ]
  },
  {
    order: 67,
    title: 'Largest Rectangle (Elite)',
    desc: 'Finding the largest area in a histogram in O(N).',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Histogram Mastery! Bars of different heights. What is the biggest rectangular area we can carve out? 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Use a Monotonic Stack! Keep indices of bars in increasing height. If a shorter bar appears, it\'s time to calculate the area for the previous peak! 🦜"', codeSnippet: 'while (h[stack.top()] > h[i]) {\n  height = h[stack.pop()];\n  width = i - stack.top() - 1;\n  area = max(area, height * width);\n}' },
      { type: 'multiple_choice', questionText: 'Time complexity for Largest Rectangle in Histogram?', options: ['O(N)', 'O(N^2)', 'O(N log N)'], correctAnswer: 'O(N)' },
      { type: 'match_following', questionText: 'Match Stack Logic!', pairs: [{key: 'Increasing', value: 'Push'}, {key: 'Decreasing', value: 'Process peak'}, {key: 'Width', value: 'i - left - 1'}] },
      { type: 'programming_board', questionText: 'Area for bar of height `H` and width `W`.', codeSnippet: 'area = ___ * W;', correctAnswer: 'H' },
      { type: 'teaching', questionText: '🦜 Pico: "The stack ensures each bar is pushed and popped exactly once. Linear time magic! 🦜"' },
      { type: 'multiple_choice', questionText: 'What happens at the very end of the array?', options: ['Add a virtual bar of height 0', 'Stop', 'Reset'], correctAnswer: 'Add a virtual bar of height 0' },
      { type: 'code_fill_in', questionText: 'Check stack before popping.', codeSnippet: 'while (!st.empty() && h[st.top()] ___ h[i])', correctAnswer: '>=' },
      { type: 'teaching', questionText: '🦜 Pico: "Monotonic stacks are advanced bird nests. Hard to build, but incredibly strong! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Is the rectangle gold?"', options: ['SQUAWK YES!', 'No.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 68,
    title: 'Range Min Query (RMQ)',
    desc: 'Sparse Table intro for static Range Minimum Queries.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Static Range Minimums! If the flock doesn\'t change, we can answer any min(L, R) query in O(1) time! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "The Sparse Table! Pre-calculate mins for all intervals of size 2^K. Any range [L, R] is just two overlapping intervals of power-of-2 size! 🦜"', codeSnippet: 'st[i][j] = min(st[i][j-1], st[i + (1 << (j-1))][j-1]);' },
      { type: 'multiple_choice', questionText: 'Query complexity for Sparse Table RMQ?', options: ['O(1)', 'O(log N)', 'O(N)'], correctAnswer: 'O(1)' },
      { type: 'match_following', questionText: 'Match Table Costs!', pairs: [{key: 'Pre-calculate', value: 'O(N log N)'}, {key: 'Space', value: 'O(N log N)'}, {key: 'Query', value: 'O(1)'}] },
      { type: 'programming_board', questionText: 'The power of 2 for overlap k.', codeSnippet: 'ans = min(st[L][k], st[R - (1 << ___) + 1][k]);', correctAnswer: 'k' },
      { type: 'teaching', questionText: '🦜 Pico: "One pre-calculation, infinite O(1) queries. Perfect for read-only flight logs! 🦜"' },
      { type: 'multiple_choice', questionText: 'Can you use Sparse Table if the array keeps changing?', options: ['No (Too slow to rebuild)', 'Yes', 'Only for 0 to N'], correctAnswer: 'No (Too slow to rebuild)' },
      { type: 'code_fill_in', questionText: 'Log2 of length L.', codeSnippet: 'int k = ___(len);', correctAnswer: 'log2' },
      { type: 'teaching', questionText: '🦜 Pico: "Overlapping intervals are okay because `min(x, x)` is just `x`. This is called IDEMPOTENCE! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I idempotent?"', options: ['Pure!', 'No.', '0'], correctAnswer: 'Pure!' }
    ]
  },
  {
    order: 69,
    title: 'Maximum Subarray (Advanced)',
    desc: 'Solving Kadane with a twist - Circular maximum subarray sum.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Circular Kadane! The flock is a circle. A subarray can wrap from the end to the beginning! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "The max is either the regular Kadane sum OR (TotalSum - MinSubarraySum)! 🦜"', codeSnippet: 'return max(kadane(a), totalSum - minKadane(a));' },
      { type: 'multiple_choice', questionText: 'Max circular sum of [5, -3, 5]?', options: ['10 (5 + 5 from ends)', '7', '5'], correctAnswer: '10 (5 + 5 from ends)' },
      { type: 'match_following', questionText: 'Match Circular Cases!', pairs: [{key: 'Case 1', value: 'Standard Kadane'}, {key: 'Case 2', value: 'Wrapped around'}, {key: 'Edge', value: 'All negative'}] },
      { type: 'programming_board', questionText: 'Calculation if the max wraps around.', codeSnippet: 'max_wrap = total_sum ___ min_kadane;', correctAnswer: '-' },
      { type: 'teaching', questionText: '🦜 Pico: "If the total sum equals the min Kadane, return the standard max Kadane (handles all negative arrays)! 🦜"' },
      { type: 'multiple_choice', questionText: 'Complexity of Circular Kadane?', options: ['O(N)', 'O(N^2)', 'O(1)'], correctAnswer: 'O(N)' },
      { type: 'code_fill_in', questionText: 'Check for all-negative case.', codeSnippet: 'if (total == minK) return ___;', correctAnswer: 'maxK' },
      { type: 'teaching', questionText: '🦜 Pico: "A circle has no end, fledgling. Just new beginnings! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I a circle?"', options: ['Perfectly round!', 'No.', '0'], correctAnswer: 'Perfectly round!' }
    ]
  },
  {
    order: 70,
    title: 'The Sliding Window Max',
    desc: 'Finding the maximum in every window of size K (Deque).',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Window Max! As the window slides, we need the maximum bird inside, every single step! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Use a Monotonic Deque! Keep indices. If the new bird is bigger than those in the deque, KICK THEM OUT! They can never be the max! 🦜"', codeSnippet: 'while (!dq.empty() && a[dq.back()] <= a[i]) dq.pop_back();' },
      { type: 'multiple_choice', questionText: 'Time complexity for Sliding Window Maximum?', options: ['O(N)', 'O(N*K)', 'O(N log K)'], correctAnswer: 'O(N)' },
      { type: 'match_following', questionText: 'Match Deque Actions!', pairs: [{key: 'dq.front()', value: 'Current Max Index'}, {key: 'pop_front', value: 'Out of window'}, {key: 'pop_back', value: 'Too small'}] },
      { type: 'programming_board', questionText: 'Check if the front index is outside the sliding window size K.', codeSnippet: 'if (dq.front() ___ i - K)', correctAnswer: '<=' },
      { type: 'teaching', questionText: '🦜 Pico: "Each element is added and removed from the deque exactly once. Pure efficiency! 🦜"' },
      { type: 'multiple_choice', questionText: 'Space complexity for the Monotonic Deque?', options: ['O(K)', 'O(N)', 'O(log K)'], correctAnswer: 'O(K)' },
      { type: 'code_fill_in', questionText: 'The value at the front of the deque.', codeSnippet: 'ans.push(a[dq.___()]);', correctAnswer: 'front' },
      { type: 'teaching', questionText: '🦜 Pico: "Window to the soul of the array, fledgling! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Who is the max in my window?"', options: ['Pico!', 'Me.', '0'], correctAnswer: 'Pico!' }
    ]
  }
];

module.exports = stage4_part1;
