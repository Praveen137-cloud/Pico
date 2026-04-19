const stage2_part1 = [
  {
    order: 21,
    title: 'The Triple Reverse',
    desc: 'Rotate an array by K steps in O(1) space.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Rotating K steps? Don\'t just fly in circles! There is a faster way using THREE flips. 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Rule: 1. Reverse the whole array. 2. Reverse the first K. 3. Reverse the rest! 🦜"', codeSnippet: 'reverse(arr, 0, n-1);\nreverse(arr, 0, k-1);\nreverse(arr, k, n-1);' },
      { type: 'multiple_choice', questionText: 'After reversing [1, 2, 3, 4, 5] and K=2, what is the first step result?', options: ['[5, 4, 3, 2, 1]', '[4, 5, 1, 2, 3]', '[1, 2, 3, 4, 5]'], correctAnswer: '[5, 4, 3, 2, 1]' },
      { type: 'match_following', questionText: 'Match the Steps!', pairs: [{key: 'Step 1', value: 'Whole Array'}, {key: 'Step 2', value: 'First K'}, {key: 'Step 3', value: 'The Rest'}] },
      { type: 'programming_board', questionText: 'If K=2 and N=5, what is the middle boundary index?', codeSnippet: 'reverse(arr, k, ___);', correctAnswer: 'n-1' },
      { type: 'teaching', questionText: '🦜 Pico: "This is a Google classic! It saves space because you don\'t need a temporary array. O(1) space, O(N) time!"' },
      { type: 'multiple_choice', questionText: 'Time complexity of Triple Reverse?', options: ['O(N)', 'O(N^2)', 'O(K)'], correctAnswer: 'O(N)' },
      { type: 'code_fill_in', questionText: 'Make K safe using modulo.', codeSnippet: 'k = k ___ n;', correctAnswer: '%' },
      { type: 'teaching', questionText: '🦜 Pico: "Always use modulo. If K is 100 and N is 5, you shouldn\'t fly 100 times! Just 0!"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Did the birds get dizzy?"', options: ['Maybe!', 'No.', 'What was the question?'], correctAnswer: 'Maybe!' }
    ]
  },
  {
    order: 22,
    title: 'Sliding Window (Fixed)',
    desc: 'Finding the maximum sum of K consecutive birds.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Sliding Window! Imagine a window of size K moving across the nests. Don\'t re-calculate the sum every time! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Subtract the bird that leaves the window, and add the new bird that enters! 🦜"', codeSnippet: 'current_sum = current_sum - arr[i-k] + arr[i];' },
      { type: 'multiple_choice', questionText: 'What is the sum of a window of size 3 on [1, 4, 2, 10, 2]?', options: ['16 (4+2+10)', '7 (1+4+2)', '14 (2+10+2)'], correctAnswer: '16 (4+2+10)' },
      { type: 'match_following', questionText: 'Match Window Actions!', pairs: [{key: 'Enter', value: 'Add element'}, {key: 'Exit', value: 'Subtract element'}, {key: 'Slide', value: 'Update Current'}] },
      { type: 'programming_board', questionText: 'Index of the element exiting a window of size K.', codeSnippet: 'exit_index = i ___ K;', correctAnswer: '-' },
      { type: 'teaching', questionText: '🦜 Pico: "This turns an O(N*K) problem into O(N). Brilliantly efficient, like a hawk diving!"' },
      { type: 'multiple_choice', questionText: 'Time complexity of Sliding Window?', options: ['O(N)', 'O(N*K)', 'O(log N)'], correctAnswer: 'O(N)' },
      { type: 'code_fill_in', questionText: 'Initialize max_sum.', codeSnippet: 'max_sum = ___(max_sum, current_sum);', correctAnswer: 'max' },
      { type: 'teaching', questionText: '🦜 Pico: "Keep the window moving. Never look back! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Is the window open?"', options: ['YES!', 'No.', 'SQUAWK!'], correctAnswer: 'YES!' }
    ]
  },
  {
    order: 23,
    title: 'Two Pointer Squeeze',
    desc: 'Finding two birds that sum up to a target (2Sum Sorted).',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Squeeze! If the nests are SORTED, we use two pointers: one at the start, one at the end. 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Sum > Target? Move the right bird left. Sum < Target? Move the left bird right! 🦜"', codeSnippet: 'if (sum > target) right--;\nelse if (sum < target) left++;' },
      { type: 'multiple_choice', questionText: 'Requirement for the Two-Pointer Squeeze?', options: ['Sorted Array', 'Unsorted Array', 'Large Array'], correctAnswer: 'Sorted Array' },
      { type: 'match_following', questionText: 'Match Moves!', pairs: [{key: 'Sum too big', value: 'right--'}, {key: 'Sum too small', value: 'left++'}, {key: 'Found', value: 'Done!'}] },
      { type: 'programming_board', questionText: 'Condition for the while loop.', codeSnippet: 'while (left ___ right)', correctAnswer: '<' },
      { type: 'teaching', questionText: '🦜 Pico: "O(1) space! No extra hash map needed if the input is already sorted. Elite efficiency!"' },
      { type: 'multiple_choice', questionText: 'In [1, 2, 4, 7, 11] with target 9, what elements are found?', options: ['2 and 7', '1 and 11', '4 and 7'], correctAnswer: '2 and 7' },
      { type: 'code_fill_in', questionText: 'Increment left pointer.', codeSnippet: 'left___ ;', correctAnswer: '++' },
      { type: 'teaching', questionText: '🦜 Pico: "Don\'t get squeezed! Stay sharp! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Are your pointers touching?"', options: ['No, that\'s the limit!', 'Yes.', '0'], correctAnswer: 'No, that\'s the limit!' }
    ]
  },
  {
    order: 24,
    title: 'Kadane\'s Wings',
    desc: 'Finding the maximum subarray sum (Maximum contiguous sum).',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The heavy hitter! Kadane\'s Algorithm. How to find the most seeds in a contiguous sub-flock! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "If the current sum becomes negative, THROW IT AWAY! Start fresh from the next bird! 🦜"', codeSnippet: 'current_sum += arr[i];\nif (current_sum < 0) current_sum = 0;' },
      { type: 'multiple_choice', questionText: 'In [-2, 1, -3, 4, -1, 2, 1, -5, 4], what is the max sum?', options: ['6', '4', '8'], correctAnswer: '6', explanation: '[4, -1, 2, 1] sums to 6.' },
      { type: 'match_following', questionText: 'Match Kadane Logic!', pairs: [{key: 'current_sum', value: 'Running total'}, {key: 'max_sum', value: 'Global record'}, {key: 'Reset', value: 'current_sum = 0'}] },
      { type: 'programming_board', questionText: 'Update max_sum.', codeSnippet: 'max_sum = max(max_sum, ___);', correctAnswer: 'current_sum' },
      { type: 'teaching', questionText: '🦜 Pico: "O(N) time. This is pure dynamic programming magic. Fast as a thunderbolt! 🦜"' },
      { type: 'multiple_choice', questionText: 'What if all numbers in the array are NEGATIVE?', options: ['Max is the largest negative number', 'Max is 0', 'Max is -Infinity'], correctAnswer: 'Max is the largest negative number' },
      { type: 'code_fill_in', questionText: 'Initialize max_sum for all-negative handling.', codeSnippet: 'int max_s = ___;', correctAnswer: 'INT_MIN' },
      { type: 'teaching', questionText: '🦜 Pico: "Zoho, Amazon, Google—they ALL ask this. It\'s a foundational elite move!"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Can you fly as high as Kadane?"', options: ['HIGHER!', 'No.', 'SQUAWK!'], correctAnswer: 'HIGHER!' }
    ]
  },
  {
    order: 25,
    title: 'The Dutch National Bird',
    desc: 'Sorting 0s, 1s, and 2s in O(N) (DNF Algorithm).',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Sorting with three types of birds! Low (0), Mid (1), and High (2). We called it the Dutch National Flag algorithm! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Use three pointers: Low, Mid, High. If Mid is 0, swap with Low. If Mid is 2, swap with High! 🦜"', codeSnippet: 'if (a[mid] == 0) swap(a[low++], a[mid++]);' },
      { type: 'multiple_choice', questionText: 'What happens to the `mid` pointer when we swap with `high`?', options: ['mid stays (needs re-check)', 'mid moves forward', 'mid moves backward'], correctAnswer: 'mid stays (needs re-check)' },
      { type: 'match_following', questionText: 'Match the Swaps!', pairs: [{key: 'Case 0', value: 'Swap(Low, Mid)'}, {key: 'Case 1', value: 'Mid++'}, {key: 'Case 2', value: 'Swap(Mid, High)'}] },
      { type: 'programming_board', questionText: 'Condition to keep partitioning.', codeSnippet: 'while (mid ___ high)', correctAnswer: '<=' },
      { type: 'teaching', questionText: '🦜 Pico: "Complexity? O(N). Why sort the whole flock when you only have three types? Smart bird! 🦜"' },
      { type: 'multiple_choice', questionText: 'What property does DNF ensure?', options: ['Sorted colors', 'Median found', 'Random order'], correctAnswer: 'Sorted colors' },
      { type: 'code_fill_in', questionText: 'Initialize `high` pointer.', codeSnippet: 'high = ___;', correctAnswer: 'n-1' },
      { type: 'teaching', questionText: '🦜 Pico: "Every elite interview has this variation. Master the pointers, master the flag!"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Is my flag red, white, and blue?"', options: ['Yes!', 'No, gold!', '0'], correctAnswer: 'Yes!' }
    ]
  },
  {
    order: 26,
    title: 'The Majority Bird',
    desc: 'Finding an element that appears > N/2 times (Boyer-Moore).',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Is there a bird that rules the flock? A majority element appears more than HALF the time! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Boyer-Moore Voting! If count is 0, pick a new candidate. If current == candidate, count++. Else, count--! 🦜"', codeSnippet: 'if (count == 0) candidate = arr[i];' },
      { type: 'multiple_choice', questionText: 'In [2, 2, 1, 1, 1, 2, 2], what is the majority element?', options: ['2', '1', 'None'], correctAnswer: '2' },
      { type: 'match_following', questionText: 'Match Vote Actions!', pairs: [{key: 'Matches Candidate', value: 'count++'}, {key: 'Different', value: 'count--'}, {key: 'Count 0', value: 'New Candidate'}] },
      { type: 'programming_board', questionText: 'Check the majority count threshold.', codeSnippet: 'if (freq > (n / ___))', correctAnswer: '2' },
      { type: 'teaching', questionText: '🦜 Pico: "O(1) space and O(N) time. You don\'t need a hash map to find the king! 🦜"' },
      { type: 'multiple_choice', questionText: 'Does the voting algorithm GUARANTEE a majority if one exists?', options: ['Yes', 'No', 'Only for parrots'], correctAnswer: 'Yes' },
      { type: 'code_fill_in', questionText: 'Initialize the `candidate` variable.', codeSnippet: 'int cand = ___;', correctAnswer: 'arr[0]' },
      { type: 'teaching', questionText: '🦜 Pico: "This is a beautiful logic riddle. It feels like magic, but it\'s just math!"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Do I have the majority vote?"', options: ['YES!', 'In your dreams.', 'SQUAWK!'], correctAnswer: 'YES!' }
    ]
  },
  {
    order: 27,
    title: 'The Overlapping Horizon',
    desc: 'Merging overlapping intervals.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Flight Schedules! If two time intervals overlap, we must merge them. 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Sort them by START time first! Then compare the current end to the next start. 🦜"', codeSnippet: 'if (current_end >= next_start) merge();' },
      { type: 'multiple_choice', questionText: 'Merge [1, 3] and [2, 6]?', options: ['[1, 6]', '[1, 3], [2, 6]', '[2, 3]'], correctAnswer: '[1, 6]' },
      { type: 'match_following', questionText: 'Match Interval Terms!', pairs: [{key: 'Start', value: 'First element'}, {key: 'End', value: 'Second element'}, {key: 'Overlap', value: 'Start <= Prev End'}] },
      { type: 'programming_board', questionText: 'Update the merged end time.', codeSnippet: 'merged_end = max(prev_end, ___) ;', correctAnswer: 'curr_end' },
      { type: 'teaching', questionText: '🦜 Pico: "Crucial for scheduling apps. O(N log N) because of the sorting! 🦜"' },
      { type: 'multiple_choice', questionText: 'Complexity of Merging Intervals after sorting?', options: ['O(N)', 'O(N log N)', 'O(1)'], correctAnswer: 'O(N)' },
      { type: 'code_fill_in', questionText: 'Sort by start time (Index 0).', codeSnippet: 'intervals.sort(a, b => a[___] - b[___])', correctAnswer: '0' },
      { type: 'teaching', questionText: '🦜 Pico: "If the first start isn\'t before the second end, they are separate islands! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Is our flight on time?"', options: ['Always.', 'Delayed.', '0'], correctAnswer: 'Always.' }
    ]
  },
  {
    order: 28,
    title: 'Stock Market Seeds',
    desc: 'Buy and Sell Stocks once for maximum profit.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Buy low, sell high! Like trading rare feathers for golden seeds. 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Keep track of the `min_price` seen so far. Every day, calculate the profit if you sold TODAY! 🦜"', codeSnippet: 'profit = priceToday - minPrice;' },
      { type: 'multiple_choice', questionText: 'Max profit from [7, 1, 5, 3, 6, 4]?', options: ['5 (Buy at 1, Sell at 6)', '7', '4'], correctAnswer: '5 (Buy at 1, Sell at 6)' },
      { type: 'match_following', questionText: 'Match Stock Actions!', pairs: [{key: 'minPrice', value: 'Best day to buy'}, {key: 'maxProfit', value: 'Global best trade'}, {key: 'Today', value: 'Potential sell day'}] },
      { type: 'programming_board', questionText: 'Update min_price.', codeSnippet: 'min_p = min(min_p, ___);', correctAnswer: 'price' },
      { type: 'teaching', questionText: '🦜 Pico: "O(N) time, O(1) space. A clean, classic elite interview question! 🦜"' },
      { type: 'multiple_choice', questionText: 'What is the profit if prices only go DOWN?', options: ['0', '-1', '-Infinity'], correctAnswer: '0' },
      { type: 'code_fill_in', questionText: 'Initialize max_profit.', codeSnippet: 'int p = ___;', correctAnswer: '0' },
      { type: 'teaching', questionText: '🦜 Pico: "Dont be greedy! Take the profit when its at its peak! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Should I buy more seeds?"', options: ['HODL!', 'Sell!', 'Buy!'], correctAnswer: 'HODL!' }
    ]
  },
  {
    order: 29,
    title: 'The Next Permutation',
    desc: 'Finding the next lexicographical higher arrangement.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Word puzzles! What is the next bigger arrangement of numbers? 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Step 1: Find the first dip from the right (`arr[i] < arr[i+1]`). 🦜"' },
      { type: 'multiple_choice', questionText: 'Next permutation of [1, 2, 3]?', options: ['[1, 3, 2]', '[2, 1, 3]', '[3, 2, 1]'], correctAnswer: '[1, 3, 2]' },
      { type: 'match_following', questionText: 'Match Permutation Steps!', pairs: [{key: 'Step 1', value: 'Identify dip'}, {key: 'Step 2', value: 'Swap with larger'}, {key: 'Step 3', value: 'Reverse rest'}] },
      { type: 'programming_board', questionText: 'Find dip from the end.', codeSnippet: 'if (arr[i] ___ arr[i+1]) break;', correctAnswer: '<' },
      { type: 'teaching', questionText: '🦜 Pico: "Complexity? O(N). Brute force would be O(N!). This is why we fly, not crawl! 🦜"' },
      { type: 'multiple_choice', questionText: 'What is the next permutation of [3, 2, 1]?', options: ['[1, 2, 3]', '[3, 1, 2]', '[1, 3, 2]'], correctAnswer: '[1, 2, 3]', explanation: 'It wraps back to the smallest.' },
      { type: 'code_fill_in', questionText: 'Standard library function for this in C++.', codeSnippet: '___(begin, end);', correctAnswer: 'next_permutation' },
      { type: 'teaching', questionText: '🦜 Pico: "If no dip is found, the flock is in reverse-sorted order. Just flip the whole thing!"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I the best bird?"', options: ['YES!', 'No.', '0'], correctAnswer: 'YES!' }
    ]
  },
  {
    order: 30,
    title: 'Rainfall Traps (Intro)',
    desc: 'Calculating trapped water between bird cages.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Storm! Water is trapped between nests of different heights. How much can we store? 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "For each nest, the water height is `min(MaxLeft, MaxRight) - NestHeight`. 🦜"' },
      { type: 'multiple_choice', questionText: 'In heights [3, 0, 2], how much water at index 1?', options: ['2', '0', '3'], correctAnswer: '2', explanation: 'min(3, 2) - 0 = 2.' },
      { type: 'match_following', questionText: 'Match Trap Logic!', pairs: [{key: 'Cage height', value: 'arr[i]'}, {key: 'Water height', value: 'Pillar min'}, {key: 'Total', value: 'Sum all'}] },
      { type: 'programming_board', questionText: 'Calculate water trapped at index `i`.', codeSnippet: 'w = min(l[i], r[i]) ___ arr[i];', correctAnswer: '-' },
      { type: 'teaching', questionText: '🦜 Pico: "Pre-calculate MaxLeft and MaxRight arrays (Prefix sums!) to solve it in O(N) time and space! 🦜"' },
      { type: 'multiple_choice', questionText: 'Complexity with pre-calculated arrays?', options: ['O(N)', 'O(N^2)', 'O(log N)'], correctAnswer: 'O(N)' },
      { type: 'code_fill_in', questionText: 'Update left max array.', codeSnippet: 'l[i] = max(l[i-1], ___);', correctAnswer: 'arr[i]' },
      { type: 'teaching', questionText: '🦜 Pico: "Next we will learn the O(1) space version using two pointers. But first, let these seeds soak! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Do you have an umbrella?"', options: ['No, I enjoy it!', 'Yes.', '0'], correctAnswer: 'No, I enjoy it!' }
    ]
  }
];

module.exports = stage2_part1;
