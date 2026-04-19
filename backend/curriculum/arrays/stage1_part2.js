const stage1_part2 = [
  {
    order: 11,
    title: 'The Balance Beam',
    desc: 'Intro to Equilibrium Index where left sum equals right sum.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Equilibrium Index is the tightrope of the array! At this spot, the sum of all birds on the left matches the sum on the right!"' },
      { type: 'teaching', questionText: '🦜 Pico: "Don\'t use nested loops (O(N^2)). That\'s for slow-brains! Calculate the Total Sum first, then walk across and subtract!"', codeSnippet: 'total_sum -= arr[i];\nif (left_sum == total_sum) return i;\nleft_sum += arr[i];' },
      { type: 'multiple_choice', questionText: 'Equilibrium index of [-7, 1, 5, 2, -4, 3, 0]?', options: ['3', '4', '0'], correctAnswer: '3', explanation: 'At index 3, Left sum = -7+1+5= -1. Right sum = -4+3+0= -1.' },
      { type: 'match_following', questionText: 'Match the Sums!', pairs: [{key: 'Left Sum', value: 'History'}, {key: 'Right Sum', value: 'Future'}, {key: 'Equilibrium', value: 'Balance'}] },
      { type: 'programming_board', questionText: 'Update total_sum during the balance walk.', codeSnippet: 'total_sum ___ arr[i];', correctAnswer: '-=' },
      { type: 'teaching', questionText: '🦜 Pico: "If you reach the end without a match, return -1. There is no balance in the world today!"' },
      { type: 'multiple_choice', questionText: 'Time complexity for the optimized Equilibrium search?', options: ['O(N)', 'O(N^2)', 'O(1)'], correctAnswer: 'O(N)' },
      { type: 'code_fill_in', questionText: 'Initial `left_sum` value?', codeSnippet: 'int left_s = ___ ;', correctAnswer: '0' },
      { type: 'teaching', questionText: '🦜 Pico: "Finding balance is hard for me because I\'m lopsided from eating too much fruit! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Is the first element an equilibrium if the rest sum to 0?"', options: ['Yes', 'No', 'Only for birds'], correctAnswer: 'Yes' }
    ]
  },
  {
    order: 12,
    title: 'Missing Number Mystery',
    desc: 'Finding the bird that flew away from a sequence.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "A sequence of 1 to N, but one bird is missing! Where did it go? Math bird to the rescue! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Use the Gauss Formula: Sum of 1 to N = `N * (N + 1) / 2`. Subtract the actual sum to find the missing one!"', codeSnippet: 'expected = n * (n + 1) / 2;\nreturn expected - actual_sum;' },
      { type: 'multiple_choice', questionText: 'In [1, 2, 4, 5], N=5, what is the missing number?', options: ['3', '15', '0'], correctAnswer: '3', explanation: 'Expected = 5*6/2 = 15. Actual = 12. 15 - 12 = 3.' },
      { type: 'match_following', questionText: 'Match the Formula!', pairs: [{key: 'Sum 1 to N', value: 'n(n+1)/2'}, {key: 'XOR Trick', value: 'n ^ arr[i]'}, {key: 'Space', value: 'O(1)'}] },
      { type: 'programming_board', questionText: 'Calculate expected sum for range N.', codeSnippet: 'sum = (N * (___)) / 2;', correctAnswer: 'N+1' },
      { type: 'teaching', questionText: '🦜 Pico: "Be careful of Overflows! For huge N, the sum can be too large. Use the XOR trick to be a slick bird! 🦜"' },
      { type: 'multiple_choice', questionText: 'What is (X ^ X) in bitwise logic?', options: ['0', 'X', '1'], correctAnswer: '0', explanation: 'Anything XORed with itself is zero.' },
      { type: 'code_fill_in', questionText: 'Initialize XOR result.', codeSnippet: 'int x = ___ ;', correctAnswer: '0' },
      { type: 'teaching', questionText: '🦜 Pico: "XORing all numbers 1 to N and then XORing all elements in the array leaves only the missing bird!"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Which trick is more elegant?"', options: ['XOR', 'Sum', 'Subtraction'], correctAnswer: 'XOR' }
    ]
  },
  {
    order: 13,
    title: 'The Cumulative Climb',
    desc: 'Introduction to Prefix Sums.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Prefix Sum is like building a ladder! Each step is the sum of all elements before it. 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "`prefix[i] = prefix[i-1] + arr[i]`. It lets you answer range sum queries instantly! 🦜"', codeSnippet: 'for(int i=1; i<n; i++) arr[i] += arr[i-1];' },
      { type: 'multiple_choice', questionText: 'Prefix sum of [1, 2, 3, 4]?', options: ['[1, 3, 6, 10]', '[1, 2, 3, 4]', '[10, 6, 3, 1]'], correctAnswer: '[1, 3, 6, 10]' },
      { type: 'match_following', questionText: 'Match Operations!', pairs: [{key: 'Range Sum(i,j)', value: 'P[j] - P[i-1]'}, {key: 'Prefix[0]', value: 'arr[0]'}, {key: 'Time', value: 'O(1) after O(N)'}] },
      { type: 'programming_board', questionText: 'Compute query sum for range [L, R] using prefix array `P`.', codeSnippet: 'result = P[R] - P[___];', correctAnswer: 'L-1' },
      { type: 'teaching', questionText: '🦜 Pico: "This is a core skill for Zoho Elite! They love range query puzzles!"' },
      { type: 'multiple_choice', questionText: 'Space complexity of using a separate Prefix Array?', options: ['O(N)', 'O(1)', 'O(log N)'], correctAnswer: 'O(N)' },
      { type: 'code_fill_in', questionText: 'Update current element with previous sum.', codeSnippet: 'arr[i] ___ arr[i-1];', correctAnswer: '+=' },
      { type: 'teaching', questionText: '🦜 Pico: "If you do it in-place, the space complexity is O(1). Be a smart bird!"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I at the top of the ladder?"', options: ['YES!', 'Keep climbing!', 'Squawk!'], correctAnswer: 'YES!' }
    ]
  },
  {
    order: 14,
    title: 'Odd Birds Out',
    desc: 'Partitioning an array into odd and even numbers.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Separate the flock! Even birds to the left, odd birds to the right! Two-pointers are your wings!"' },
      { type: 'teaching', questionText: '🦜 Pico: "While `left < right`, if `arr[left]` is even, move on. If `arr[right]` is odd, move on. If both are misplaced, SWAP!"', codeSnippet: 'while(l < r) {\n  if(a[l]%2 == 0) l++;\n  else if(a[r]%2 != 0) r--;\n  else swap(a[l], a[r]);\n}' },
      { type: 'multiple_choice', questionText: 'What is the goal of this MISSION?', options: ['Partitioning', 'Sorting', 'Deleting'], correctAnswer: 'Partitioning' },
      { type: 'match_following', questionText: 'Match the Misplaced!', pairs: [{key: 'Even on Right', value: 'Swap'}, {key: 'Odd on Left', value: 'Swap'}, {key: 'Even on Left', value: 'Keep'}] },
      { type: 'programming_board', questionText: 'Check for odd before swapping.', codeSnippet: 'if (arr[right] % 2 ___ 0)', correctAnswer: '!=' },
      { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(N). Each bird is visited once. Space: O(1) if in-place!"' },
      { type: 'multiple_choice', questionText: 'Does this preserve the original relative order?', options: ['No', 'Yes', 'Depends on bird'], correctAnswer: 'No' },
      { type: 'code_fill_in', questionText: 'Condition to continue the two-pointer loop.', codeSnippet: 'while (left ___ right)', correctAnswer: '<' },
      { type: 'teaching', questionText: '🦜 Pico: "If order matters, you need extra space. But Pico likes it in-place! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Which side do I like better?"', options: ['The middle!', 'Even', 'Odd'], correctAnswer: 'The middle!' }
    ]
  },
  {
    order: 15,
    title: 'The Array Rotate',
    desc: 'Shifting the entire flock by one position.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Cyclic rotation! Move every bird one step to the right, and the last bird flies to the front!"' },
      { type: 'teaching', questionText: '🦜 Pico: "Save the last bird first, then shift everyone else backward!"', codeSnippet: 'int last = arr[n-1];\nfor(int i=n-1; i>0; i--) arr[i] = arr[i-1];\narr[0] = last;' },
      { type: 'multiple_choice', questionText: 'After a right rotation on [1, 2, 3], what is the result?', options: ['[3, 1, 2]', '[2, 3, 1]', '[1, 2, 3]'], correctAnswer: '[3, 1, 2]' },
      { type: 'match_following', questionText: 'Match Shifting Directions!', pairs: [{key: 'Right', value: 'arr[i] = arr[i-1]'}, {key: 'Left', value: 'arr[i] = arr[i+1]'}, {key: 'Temporal', value: 'Last bird saved'}] },
      { type: 'programming_board', questionText: 'Set the new first element.', codeSnippet: 'arr[0] = ___;', correctAnswer: 'last' },
      { type: 'teaching', questionText: '🦜 Pico: "One step is O(N). To rotate K steps, repeat it or use a smarter reversal trick! 🦜"' },
      { type: 'multiple_choice', questionText: 'Complexity of rotating by K steps using the simple repeat method?', options: ['O(N*K)', 'O(N)', 'O(K)'], correctAnswer: 'O(N*K)' },
      { type: 'code_fill_in', questionText: 'Shift from right to left index loop.', codeSnippet: 'for(int i = n-1; i ___ 0; i--)', correctAnswer: '>' },
      { type: 'teaching', questionText: '🦜 Pico: "Imagine K is huge. Use `K % N` to avoid pointless flying in circles! 🦜"' },
      { type: 'multiple_choice', questionText: 'If N=5 and K=10, how many effective rotations occur?', options: ['0', '5', '1'], correctAnswer: '0' }
    ]
  },
  {
    order: 16,
    title: 'Frequency Counter',
    desc: 'Counting occurrences of small numbers.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "How many of each bird? If the birds are small numbers, use a frequency array! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Create a `freq` array of size MAX_VAL + 1. Each time you see a number, increment its habitat!"', codeSnippet: 'freq[arr[i]]++;' },
      { type: 'multiple_choice', questionText: 'What is the frequency of 2 in [1, 2, 2, 3, 2]?', options: ['3', '2', '1'], correctAnswer: '3' },
      { type: 'match_following', questionText: 'Match Counter Logic!', pairs: [{key: 'Index', value: 'Value itself'}, {key: 'freq[x]', value: 'Count of x'}, {key: 'Space', value: 'Max Number'}] },
      { type: 'programming_board', questionText: 'Increment the frequency index.', codeSnippet: 'freq[___]++;', correctAnswer: 'arr[i]' },
      { type: 'teaching', questionText: '🦜 Pico: "This is O(N) time but needs space depending on the largest number. Don\'t use this for billions! 🦜"' },
      { type: 'multiple_choice', questionText: 'Space complexity of Frequency Array?', options: ['O(Max_Value)', 'O(N)', 'O(1)'], correctAnswer: 'O(Max_Value)' },
      { type: 'code_fill_in', questionText: 'Initialize results array with zeros.', codeSnippet: 'int freq[100] = {___};', correctAnswer: '0' },
      { type: 'teaching', questionText: '🦜 Pico: "If bird values are huge, use a HASH MAP instead. We\'ll learn that later! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "How many Picos are in this array?"', options: ['1 (Only me!)', 'Many!', '0'], correctAnswer: '1 (Only me!)' }
    ]
  },
  {
    order: 17,
    title: 'Memory Overflows',
    desc: 'Understanding array limits and safety.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Computer memory is not infinite! If you ask for too many nests, the computer will squawk NO!"' },
      { type: 'teaching', questionText: '🦜 Pico: "Stack vs Heap! Local arrays inside functions go to the Stack. They are small and fast. Huge arrays go to the Heap!"' },
      { type: 'multiple_choice', questionText: 'Where are massive arrays (e.g., 10^7 size) usually stored?', options: ['Heap', 'Stack', 'Disk'], correctAnswer: 'Heap' },
      { type: 'match_following', questionText: 'Match the Limits!', pairs: [{key: 'Stack', value: '~1MB to 8MB'}, {key: 'Heap', value: 'GBs (available RAM)'}, {key: 'Array Size', value: 'Fixed'}] },
      { type: 'programming_board', questionText: 'Allocate a massive array on the heap in C++.', codeSnippet: 'int* arr = new ___ [1000000];', correctAnswer: 'int' },
      { type: 'teaching', questionText: '🦜 Pico: "In local variables, avoid `int arr[1000000]`. It will CRASH with Stack Overflow! 🦜"' },
      { type: 'multiple_choice', questionText: 'Which error occurs if a local array is too large?', options: ['Stack Overflow', 'Segmentation Fault', 'Memory Leak'], correctAnswer: 'Stack Overflow' },
      { type: 'code_fill_in', questionText: 'C: Free the heap memory when done.', codeSnippet: '___(arr);', correctAnswer: 'free' },
      { type: 'teaching', questionText: '🦜 Pico: "Don\'t leave trash in your nest! Always free what you allocate!"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Is my memory better than yours?"', options: ['Probably!', 'No.', 'What was the question?'], correctAnswer: 'Probably!' }
    ]
  },
  {
    order: 18,
    title: 'The Binary Twist (Intro)',
    desc: 'Searching in a SORTED flock.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "If the flock is sorted, don\'t walk! Fly! Binary search cuts the search space in half every jump!"' },
      { type: 'teaching', questionText: '🦜 Pico: "Look at the middle bird. If target > middle, ignore the left half. If target < middle, ignore the right half!"', codeSnippet: 'mid = (low + high) / 2;\nif (a[mid] < target) low = mid + 1;' },
      { type: 'multiple_choice', questionText: 'What is the requirement for Binary Search?', options: ['Sorted Array', 'Unsorted Array', 'Large Array'], correctAnswer: 'Sorted Array' },
      { type: 'match_following', questionText: 'Match Search Steps!', pairs: [{key: 'Compare Mid', value: 'O(1)'}, {key: 'Half Space', value: 'O(N/2)'}, {key: 'Complexity', value: 'O(log N)'}] },
      { type: 'programming_board', questionText: 'Calculate the middle index safely to avoid overflow.', codeSnippet: 'mid = low + ( (___ - low) / 2 );', correctAnswer: 'high' },
      { type: 'teaching', questionText: '🦜 Pico: "O(log N) is incredible! You can find a bird among a BILLION in just 30 steps! 🦜"' },
      { type: 'multiple_choice', questionText: 'If N=1000, roughly how many steps for Binary Search?', options: ['10', '100', '1000'], correctAnswer: '10', explanation: '2^10 = 1024' },
      { type: 'code_fill_in', questionText: 'Update `high` if target is smaller.', codeSnippet: 'if (a[mid] > target) high = ___;', correctAnswer: 'mid-1' },
      { type: 'teaching', questionText: '🦜 Pico: "We will dive deeper into this later. For now, remember: SORTED = FAST!"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Can I find you in O(log N)?"', options: ['YES!', 'In O(1)!', 'Never.'], correctAnswer: 'YES!' }
    ]
  },
  {
    order: 19,
    title: 'Sparse Cages',
    desc: 'Handling arrays with mostly zero values.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "A sparse array is like a giant cage with only a few birds. Storing all those empty perches (zeros) is a waste of seeds!"' },
      { type: 'teaching', questionText: '🦜 Pico: "Instead of a giant array, we store only the `(Row, Column, Value)` of the non-empty nests! 🦜"' },
      { type: 'multiple_choice', questionText: 'What is a Sparse Array?', options: ['Mostly zeros', 'Mostly ones', 'Very small'], correctAnswer: 'Mostly zeros' },
      { type: 'match_following', questionText: 'Match the Storage!', pairs: [{key: 'Regular', value: 'Size N'}, {key: 'Sparse', value: 'Non-zero count'}, {key: 'Efficiency', value: 'Saves memory'}] },
      { type: 'programming_board', questionText: 'Percentage of non-zeros to be considered sparse?', codeSnippet: 'if (nonzero_count < (total_size / ___))', correctAnswer: '2' },
      { type: 'teaching', questionText: '🦜 Pico: "This is crucial for Google Maps and social network graphs. Millions of nodes, but few connections!"' },
      { type: 'multiple_choice', questionText: 'Primary benefit of Sparse Array representation?', options: ['Memory savings', 'Search speed', 'Color coding'], correctAnswer: 'Memory savings' },
      { type: 'code_fill_in', questionText: 'Store as a list of ___.', codeSnippet: 'list of ___', correctAnswer: 'triplets' },
      { type: 'teaching', questionText: '🦜 Pico: "Don\'t waste perches, fledgling. Be efficient!"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Is my nest sparse?"', options: ['Full of seeds!', 'Empty.', 'A bit.'], correctAnswer: 'Full of seeds!' }
    ]
  },
  {
    order: 20,
    title: 'Stage 1 Graduation',
    desc: 'The final test of your foundation flight.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "YOU MADE IT! The end of Stage 1. You have proven yourself to be more than a feather-brain! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "We covered Memory, Indexing, Sums, Min/Max, Parity, and simple Search. You are ready to climb higher!"' },
      { type: 'multiple_choice', questionText: 'What is the most important lesson from Stage 1?', options: ['O(1) Access', 'Pico is cute', 'Birdseed is good'], correctAnswer: 'O(1) Access' },
      { type: 'multiple_choice', questionText: 'Array access time?', options: ['O(1)', 'O(N)'], correctAnswer: 'O(1)' },
      { type: 'multiple_choice', questionText: 'Linear search time?', options: ['O(N)', 'O(log N)'], correctAnswer: 'O(N)' },
      { type: 'multiple_choice', questionText: 'Flipping an array space?', options: ['O(1)', 'O(N)'], correctAnswer: 'O(1)' },
      { type: 'multiple_choice', questionText: 'Total sum of [1, 1, 1]?', options: ['3', '1', '2'], correctAnswer: '3' },
      { type: 'match_following', questionText: 'Final Match!', pairs: [{key: 'Pico', value: 'Master'}, {key: 'Student', value: 'You'}, {key: 'DSA', value: 'Mission'}] },
      { type: 'teaching', questionText: '🦜 Pico: "The reward for a good flight is a harder destination. Next: Two-Pointers and Sliding Windows!"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Are you ready for Stage 2?"', options: ['SQUAWK YES!', 'No.', 'Maybe.'], correctAnswer: 'SQUAWK YES!' }
    ]
  }
];

module.exports = stage1_part2;
