const stage3_part1 = [
  {
    order: 41,
    title: 'Rainwater Traps (Elite)',
    desc: 'Solving the trapping rainwater problem in O(1) space.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Storm continues! But this time, we don\'t have extra bags (arrays) to store MaxLeft and MaxRight. We must use two pointers! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Keep `leftMax` and `rightMax` as single variables. If `leftHeight < rightHeight`, we know the water depends on the left side! 🦜"', codeSnippet: 'if (height[l] <= height[r]) {\n  if (height[l] >= lMax) lMax = height[l];\n  else total += lMax - height[l];\n  l++;\n}' },
      { type: 'multiple_choice', questionText: 'What is the space complexity of the Two-Pointer Trapping Rainwater solution?', options: ['O(1)', 'O(N)', 'O(log N)'], correctAnswer: 'O(1)' },
      { type: 'match_following', questionText: 'Match Trap Variables!', pairs: [{key: 'leftMax', value: 'Highest on the left'}, {key: 'rightMax', value: 'Highest on the right'}, {key: 'height[l]', value: 'Current cage'}] },
      { type: 'programming_board', questionText: 'Move the right pointer inward.', codeSnippet: 'else {\n  if (height[r] >= rMax) rMax = height[r];\n  else total += rMax - height[r];\n  ___ ;\n}', correctAnswer: 'r--' },
      { type: 'teaching', questionText: '🦜 Pico: "This is the Peak of array manipulation! If you can do this from memory, you are ready for a Senior SWE cage! 🦜"' },
      { type: 'multiple_choice', questionText: 'In heights [0, 1, 0, 2, 1, 0, 1, 3], total water trapped?', options: ['6', '5', '4'], correctAnswer: '6' },
      { type: 'code_fill_in', questionText: 'Initialize left and right pointers.', codeSnippet: 'int l=0, r=___ ;', correctAnswer: 'n-1' },
      { type: 'teaching', questionText: '🦜 Pico: "The water only stays if there\'s a bird to hold it on both sides. Remember that! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Are you staying dry?"', options: ['SQUAWK!', 'Drowning in code.', '0'], correctAnswer: 'SQUAWK!' }
    ]
  },
  {
    order: 42,
    title: 'The Peak Element',
    desc: 'Finding a peak element using Binary Search.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "A peak element is greater than its neighbors. Like me on the tallest branch! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Even in an unsorted array, we can find A peak in O(log N) time! If the next bird is bigger, the peak must be to the right! 🦜"', codeSnippet: 'if (arr[mid] < arr[mid+1]) low = mid + 1;' },
      { type: 'multiple_choice', questionText: 'Complexity of finding A peak element?', options: ['O(log N)', 'O(N)', 'O(1)'], correctAnswer: 'O(log N)' },
      { type: 'match_following', questionText: 'Match Peak Scenarios!', pairs: [{key: 'mid < mid+1', value: 'Go Right'}, {key: 'mid > mid+1', value: 'Go Left'}, {key: 'Success', value: 'found index'}] },
      { type: 'programming_board', questionText: 'Check if mid is a peak.', codeSnippet: 'if (arr[mid] ___ arr[mid-1] && arr[mid] ___ arr[mid+1])', correctAnswer: '>' },
      { type: 'teaching', questionText: '🦜 Pico: "Binary Search doesn\'t always need a sorted flock. It just needs a property to decide which half to kill! 🦜"' },
      { type: 'multiple_choice', questionText: 'Is every array guaranteed to have at least one peak?', options: ['Yes', 'No', 'Only if N > 3'], correctAnswer: 'Yes' },
      { type: 'code_fill_in', questionText: 'Binary search return value.', codeSnippet: 'return ___;', correctAnswer: 'low' },
      { type: 'teaching', questionText: '🦜 Pico: "Climb the mountain, fledgling! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I the peak bird?"', options: ['YES!', 'No.', 'What was the question?'], correctAnswer: 'YES!' }
    ]
  },
  {
    order: 43,
    title: 'The Rotated Search',
    desc: 'Searching in a sorted but cyclically rotated array.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "A sorted array was rotated! [4, 5, 6, 7, 0, 1, 2]. How to find a bird in O(log N)? 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "In a rotated array, at least one half is ALWAYS perfectly sorted! Find that half first! 🦜"', codeSnippet: 'if (arr[low] <= arr[mid]) // Left half sorted' },
      { type: 'multiple_choice', questionText: 'If the left half is sorted, and `target` is within the left range, where do we go?', options: ['Left', 'Right', 'Back to nest'], correctAnswer: 'Left' },
      { type: 'match_following', questionText: 'Match Search Logic!', pairs: [{key: 'Left Sorted', value: 'low <= mid'}, {key: 'Right Sorted', value: 'mid <= high'}, {key: 'Binary', value: 'O(log N)'}] },
      { type: 'programming_board', questionText: 'Check target range in sorted left half.', codeSnippet: 'if (target >= arr[low] && target ___ arr[mid])', correctAnswer: '<' },
      { type: 'teaching', questionText: '🦜 Pico: "This is the most common Google phone screen question. It tests if you can handle nested conditions! 🦜"' },
      { type: 'multiple_choice', questionText: 'Time complexity of Search in Rotated Sorted Array?', options: ['O(log N)', 'O(N)', 'O(1)'], correctAnswer: 'O(log N)' },
      { type: 'code_fill_in', questionText: 'Adjust right pointer.', codeSnippet: 'high = ___;', correctAnswer: 'mid-1' },
      { type: 'teaching', questionText: '🦜 Pico: "Stay calm, fledgling. One half is always your friend! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Can you find me in a circle?"', options: ['YES!', 'No.', '0'], correctAnswer: 'YES!' }
    ]
  },
  {
    order: 44,
    title: 'The Square Root Root',
    desc: 'Finding the integer square root of N using Binary Search.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Can you find a square root without a calculator? Use Binary Search on the range 0 to N! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "If `mid*mid <= N`, it might be the answer, so save it and look for a bigger one! 🦜"', codeSnippet: 'if (mid * mid <= n) { ans = mid; low = mid + 1; }' },
      { type: 'multiple_choice', questionText: 'Integer square root of 26?', options: ['5', '6', '5.1'], correctAnswer: '5' },
      { type: 'match_following', questionText: 'Match Mid Checks!', pairs: [{key: 'mid*mid > N', value: 'high = mid - 1'}, {key: 'mid*mid <= N', value: 'low = mid + 1'}, {key: 'Result', value: 'Last Valid Ans'}] },
      { type: 'programming_board', questionText: 'Find sqrt(N) safely without overflow.', codeSnippet: 'if (mid ___ n / mid)', correctAnswer: '<=' },
      { type: 'teaching', questionText: '🦜 Pico: "Always use `mid <= n / mid` instead of `mid * mid <= n` to avoid the integer overflow eagle! 🦜"' },
      { type: 'multiple_choice', questionText: 'Time complexity of Binary Search Sqrt?', options: ['O(log N)', 'O(N)', 'O(sqrt N)'], correctAnswer: 'O(log N)' },
      { type: 'code_fill_in', questionText: 'Final saved answer variable.', codeSnippet: 'return ___;', correctAnswer: 'ans' },
      { type: 'teaching', questionText: '🦜 Pico: "Roots and branches, fledgling. Roots and branches! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Sqrt of my ego?"', options: ['Infinite!', '1', '0'], correctAnswer: 'Infinite!' }
    ]
  },
  {
    order: 45,
    title: 'The Subarray Sum K',
    desc: 'Finding a subarray with a specific sum K (Prefix Sum + Map).',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Does any contiguous sub-flock sum up to exactly K? This is where Hash Maps and Prefix Sums bond! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "If `PrefixSum[j] - PrefixSum[i] == K`, then the sub-flock from i to j is our match! Check if `PrefixSum - K` exists in your map! 🦜"', codeSnippet: 'if (map.has(currSum - k)) count += map.get(currSum - k);' },
      { type: 'multiple_choice', questionText: 'Complexity of finding Subarray Sum K in an array with negative numbers?', options: ['O(N)', 'O(N^2)', 'O(N log N)'], correctAnswer: 'O(N)' },
      { type: 'match_following', questionText: 'Match Logic Components!', pairs: [{key: 'Prefix Sum', value: 'Running total'}, {key: 'K', value: 'Target'}, {key: 'Map', value: 'History of sums'}] },
      { type: 'programming_board', questionText: 'The core check condition.', codeSnippet: 'if (map.contains(___ - k))', correctAnswer: 'currSum' },
      { type: 'teaching', questionText: '🦜 Pico: "Don\'t forget to initialize `{0: 1}` in your map! A sum of 0 has already happened once! 🦜"' },
      { type: 'multiple_choice', questionText: 'Why use a Map instead of Two-Pointers for this specific problem?', options: ['Handles Negatives', 'Faster', 'Easier'], correctAnswer: 'Handles Negatives' },
      { type: 'code_fill_in', questionText: 'Python: Increment the map count.', codeSnippet: 'counts[s] = counts.get(s, 0) ___ 1', correctAnswer: '+' },
      { type: 'teaching', questionText: '🦜 Pico: "This is a Gold-Tier pattern. It appears in hundreds of variations! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Is the sum correct?"', options: ['YES!', 'No.', 'What was the question?'], correctAnswer: 'YES!' }
    ]
  },
  {
    order: 46,
    title: '3Sum Squeeze',
    desc: 'Finding all unique triplets that sum to 0.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Three birds, one sum! Summing to 0. It\'s a 2Sum Squeeze inside a Loop! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Sort the flock! For each bird `i`, find two other birds `j` and `k` such that `a[j] + a[k] == -a[i]`. 🦜"', codeSnippet: 'for(int i=0; i<n-2; i++) {\n  if(i > 0 && a[i] == a[i-1]) continue; // Skip duplicates\n}' },
      { type: 'multiple_choice', questionText: 'Complexity of 3Sum?', options: ['O(N^2)', 'O(N^3)', 'O(N log N)'], correctAnswer: 'O(N^2)' },
      { type: 'match_following', questionText: 'Match 3Sum Steps!', pairs: [{key: 'Sort', value: 'Step 1'}, {key: 'Outer Loop', value: 'Step 2'}, {key: 'Two Pointers', value: 'Step 3'}] },
      { type: 'programming_board', questionText: 'Condition to move the left pointer in 3Sum.', codeSnippet: 'if (sum ___ 0) low++;', correctAnswer: '<' },
      { type: 'teaching', questionText: '🦜 Pico: "Skipping duplicates is the hardest part. If the neighbor is the same, keep flying! 🦜"' },
      { type: 'multiple_choice', questionText: 'Why skip duplicates in 3Sum?', options: ['Unique triplets only', 'Faster', 'To look smart'], correctAnswer: 'Unique triplets only' },
      { type: 'code_fill_in', questionText: 'Initialize right pointer.', codeSnippet: 'int high = ___;', correctAnswer: 'n-1' },
      { type: 'teaching', questionText: '🦜 Pico: "Triple the birds, triple the fun! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Who is the third bird?"', options: ['Pico!', 'Me.', '0'], correctAnswer: 'Pico!' }
    ]
  },
  {
    order: 47,
    title: 'Product Except Self',
    desc: 'Calculating products in O(N) without the division operator.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Product of everyone EXCEPT ME! And you can\'t use division! Why? Because what if there is a zero in the nest? 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Use two passes! First, store prefix products. Then, multiply by suffix products from the right! 🦜"', codeSnippet: 'res[i] = prefix;\nprefix *= arr[i];' },
      { type: 'multiple_choice', questionText: 'Final complexity of Product Except Self?', options: ['O(N)', 'O(N^2)', 'O(N log N)'], correctAnswer: 'O(N)' },
      { type: 'match_following', questionText: 'Match Product Terms!', pairs: [{key: 'Prefix', value: 'A[0]*...*A[i-1]'}, {key: 'Suffix', value: 'A[i+1]*...*A[n-1]'}, {key: 'Result', value: 'Pre * Suf'}] },
      { type: 'programming_board', questionText: 'Reset the multiplier for the backward pass.', codeSnippet: 'int suffix = ___;', correctAnswer: '1' },
      { type: 'teaching', questionText: '🦜 Pico: "Two-pass mastery! O(N) time and O(1) extra space if we reuse the result array. Splendid! 🦜"' },
      { type: 'multiple_choice', questionText: 'Result for [1, 2, 3, 4] at index 1?', options: ['12 (1 * 3 * 4)', '8', '24'], correctAnswer: '12 (1 * 3 * 4)' },
      { type: 'code_fill_in', questionText: 'Update backward product.', codeSnippet: 'suffix ___ arr[i];', correctAnswer: '*=' },
      { type: 'teaching', questionText: '🦜 Pico: "No division. No shortcuts. Just pure mathematical flight! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Is the product of my seeds 0?"', options: ['Never!', 'Yes.', '0'], correctAnswer: 'Never!' }
    ]
  },
  {
    order: 48,
    title: 'The Spiral Fill',
    desc: 'Filling a matrix with numbers in spiral order.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Inverse Spiral! Instead of reading it, we are BUILDING a spiral matrix 1 to N^2. 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Use the same 4-boundary logic, but fill values as you go! 🦜"', codeSnippet: 'matrix[top][i] = val++;' },
      { type: 'multiple_choice', questionText: 'Last value in a 3x3 spiral matrix?', options: ['9', '3', '0'], correctAnswer: '9' },
      { type: 'match_following', questionText: 'Match Fill Order!', pairs: [{key: 'Top Row', value: 'Value 1, 2, 3...'}, {key: 'Center', value: 'Value 9'}, {key: 'Complexity', value: 'O(N^2)'}] },
      { type: 'programming_board', questionText: 'Inner loop for filling the right column.', codeSnippet: 'for(int i = top; i <= bottom; i++) {\n  matrix[i][right] = ___;\n}', correctAnswer: 'val++' },
      { type: 'teaching', questionText: '🦜 Pico: "Boundary control is everything. If you slip, the spiral breaks! 🦜"' },
      { type: 'multiple_choice', questionText: 'Space complexity for an NxN spiral matrix?', options: ['O(N^2)', 'O(N)', 'O(1)'], correctAnswer: 'O(N^2)' },
      { type: 'code_fill_in', questionText: 'Shrink the right boundary.', codeSnippet: 'right___ ;', correctAnswer: '--' },
      { type: 'teaching', questionText: '🦜 Pico: "Build it strong, build it beautiful! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Is the spiral infinite?"', options: ['No, N*N.', 'Yes.', '0'], correctAnswer: 'No, N*N.' }
    ]
  },
  {
    order: 49,
    title: 'Set Matrix Zeroes (Elite)',
    desc: 'Setting rows and columns to zero in O(1) space.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "A zero in the nest ruins the whole row and column! But can you do it without extra memory? 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Use the FIRST row and FIRST column of the matrix itself as your signal array! 🦜"', codeSnippet: 'if (mat[i][j] == 0) {\n  mat[i][0] = 0;\n  mat[0][j] = 0;\n}' },
      { type: 'multiple_choice', questionText: 'Space complexity of the First-Line-Marker solution?', options: ['O(1)', 'O(M+N)', 'O(MN)'], correctAnswer: 'O(1)' },
      { type: 'match_following', questionText: 'Match Markers!', pairs: [{key: 'mat[i][0] == 0', value: 'Row i becomes zero'}, {key: 'mat[0][j] == 0', value: 'Col j becomes zero'}, {key: 'mat[0][0]', value: 'Corner Case'}] },
      { type: 'programming_board', questionText: 'Check if first column needs zeroing later.', codeSnippet: 'if (mat[i][0] == 0) col0 = ___;', correctAnswer: 'true' },
      { type: 'teaching', questionText: '🦜 Pico: "Handle the first row and column LAST, or they will spread the zero too early like a flock of sick birds! 🦜"' },
      { type: 'multiple_choice', questionText: 'Time complexity of Set Matrix Zeroes?', options: ['O(MN)', 'O(M+N)', 'O(1)'], correctAnswer: 'O(MN)' },
      { type: 'code_fill_in', questionText: 'Loop backward to avoid corruption.', codeSnippet: 'for(int i = rows-1; i ___ 0; i--)', correctAnswer: '>=' },
      { type: 'teaching', questionText: '🦜 Pico: "Space efficiency makes you an Elite Parrot! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Is 0 a good number?"', options: ['It’s a marker!', 'No.', '0'], correctAnswer: 'It’s a marker!' }
    ]
  },
  {
    order: 50,
    title: 'Merge Intervals (Elite)',
    desc: 'Optimized merging logic with sorting.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Merge mission final boss! We must process these intervals and produce a CLEAN list of non-overlapping birds. 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Sort. Maintain a `current` interval. If the next starts before `current` ends, STRETCH the `current` end! 🦜"', codeSnippet: 'if (it[0] <= curr[1]) curr[1] = max(curr[1], it[1]);' },
      { type: 'multiple_choice', questionText: 'Final result of [1, 4], [4, 5]?', options: ['[1, 5]', '[1, 4], [4, 5]', '[4, 4]'], correctAnswer: '[1, 5]' },
      { type: 'match_following', questionText: 'Match Logic!', pairs: [{key: 'Overlap', value: 'Stretch End'}, {key: 'No Overlap', value: 'Push current'}, {key: 'Goal', value: 'Disjoint Sets'}] },
      { type: 'programming_board', questionText: 'The condition to push the current interval and start a new one.', codeSnippet: 'if (it[0] ___ curr[1]) {\n  ans.push(curr);\n  curr = it;\n}', correctAnswer: '>' },
      { type: 'teaching', questionText: '🦜 Pico: "O(N log N) is the cost of sorting. The merge itself is O(N). Fast and sharp! 🦜"' },
      { type: 'multiple_choice', questionText: 'What is the maximum number of intervals after merging?', options: ['N', '1', 'Depends on Pico'], correctAnswer: 'N' },
      { type: 'code_fill_in', questionText: 'Sort syntax (JS).', codeSnippet: 'arr.sort((a,b) => ___) ;', correctAnswer: 'a[0]-b[0]' },
      { type: 'teaching', questionText: '🦜 Pico: "You have conquered the Horizon! Now, prepare for the Matrix Mastery! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Are you an elite merge bot?"', options: ['SQUAWK YES!', 'Merging...', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  }
];

module.exports = stage3_part1;
