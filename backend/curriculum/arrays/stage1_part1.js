const stage1 = [
  {
    order: 1,
    title: 'The Memory Map',
    desc: 'Uncover how arrays sit in your computer\'s memory.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Welcome, fledgling! Before we fly, we must understand the ground. An array is just a contiguous block of memory. Think of it as a row of connected bird nests!"', explanation: 'Contiguous memory means all elements are stored right next to each other.' },
      { type: 'teaching', questionText: '🦜 Pico: "Because they are connected, if you know where the first nest is, you can jump to any nest instantly! This is called O(1) access time. Fast as a falcon!"' },
      { type: 'multiple_choice', questionText: 'What is the "O" complexity for accessing an element in an array by its index?', options: ['O(1)', 'O(N)', 'O(log N)'], correctAnswer: 'O(1)' },
      { type: 'teaching', questionText: '🦜 Pico: "But wait! To keep them connected, they must all be the SAME size. You can\'t put an eagle in a sparrow\'s nest! 🦜"', explanation: 'All elements in an array must be of the same data type.' },
      { type: 'match_following', questionText: 'Match the Array Terms!', pairs: [{key: 'Index', value: 'Position'}, {key: 'Element', value: 'Value'}, {key: 'Base address', value: 'Start'}] },
      { type: 'programming_board', questionText: 'If the base address is 1000 and each integer is 4 bytes, what is the address of `arr[2]`?', codeSnippet: 'Address = 1000 + (2 * ___)', correctAnswer: '4' },
      { type: 'teaching', questionText: '🦜 Pico: "Careful! If you try to peak into a nest that doesn\'t exist, you might fall! This is an out-of-bounds error."', explanation: 'Accessing an index >= array.length is a common bug.' },
      { type: 'multiple_choice', questionText: 'What happens if you access `arr[10]` on an array of size 10?', options: ['It returns 0', 'It crashes/IndexOutOfBounds', 'It returns the last element'], correctAnswer: 'It crashes/IndexOutOfBounds' },
      { type: 'code_fill_in', questionText: 'Complete the declaration of an integer array of size 5 in C++.', codeSnippet: 'int arr[___];', correctAnswer: '5' },
      { type: 'teaching', questionText: '🦜 Pico: "Master the memory, and you master the machine. Now, let\'s look at indexing!"' }
    ]
  },
  {
    order: 2,
    title: 'Indexing Insights',
    desc: 'Why do we start at zero? Let Pico explain.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Listen close! In the bird world, we start counting at 1. But in the code world, we start at 0. Why? Because the index is the OFFSET from the start!"', explanation: 'Index 0 means 0 steps away from the memory start.' },
      { type: 'multiple_choice', questionText: 'In an array of size N, what is the last index?', options: ['N', 'N-1', 'N+1'], correctAnswer: 'N-1' },
      { type: 'teaching', questionText: '🦜 Pico: "Think of it as jumping branches. If you are on the first branch, you have made 0 jumps!"' },
      { type: 'match_following', questionText: 'Match the element to its index!', pairs: [{key: '1st Element', value: 'index 0'}, {key: '3rd Element', value: 'index 2'}, {key: '5th Element', value: 'index 4'}] },
      { type: 'programming_board', questionText: 'Access the 4th element of `myArray`.', codeSnippet: 'val = myArray[___];', correctAnswer: '3' },
      { type: 'teaching', questionText: '🦜 Pico: "If you forget this, you will have an \'Off-by-One\' error. It\'s like missing your perch and landing in the mud! 🦜"' },
      { type: 'multiple_choice', questionText: 'Which index represents the middle element in an array of size 7?', options: ['3', '4', '2'], correctAnswer: '3' },
      { type: 'code_fill_in', questionText: 'Python: Access the last element using negative indexing.', codeSnippet: 'last = arr[___]', correctAnswer: '-1' },
      { type: 'teaching', questionText: '🦜 Pico: "Negative indexing is like flying backward! Python lets you do it, but C++ will squawk at you!"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Did you pay attention? What is my favorite index?"', options: ['0', '1', 'Infinity'], correctAnswer: '0' }
    ]
  },
  {
    order: 3,
    title: 'The First Peck',
    desc: 'Finding the biggest bird in the nest (Max Element).',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Mission: Find the largest number in the array! It\'s like finding the bird with the longest wingspan!"' },
      { type: 'teaching', questionText: '🦜 Pico: "Start by assuming the first bird is the biggest. Then compare it to every other bird in the flock!"', codeSnippet: 'int max = arr[0];\nfor(int i=1; i<n; i++) {\n  if(arr[i] > max) max = arr[i];\n}' },
      { type: 'multiple_choice', questionText: 'What should you initialize your `max` variable with for an array of integers?', options: ['0', 'The first element (arr[0])', 'A very large number'], correctAnswer: 'The first element (arr[0])' },
      { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(N). You must look at every bird once. No shortcuts unless they are sorted!"' },
      { type: 'programming_board', questionText: 'Complete the comparison to update the max.', codeSnippet: 'if (currentBird ___ maxWingspan) {\n  maxWingspan = currentBird;\n}', correctAnswer: '>' },
      { type: 'match_following', questionText: 'Match the logic!', pairs: [{key: 'Compare', value: 'if (x > max)'}, {key: 'Update', value: 'max = x'}, {key: 'Loop', value: 'for (int x : arr)'}] },
      { type: 'code_fill_in', questionText: 'Complete the Python code to find max.', codeSnippet: 'max_val = ___(my_list)', correctAnswer: 'max' },
      { type: 'teaching', questionText: '🦜 Pico: "Python has a `max()` function, but under the hood, it\'s still doing the hard work of looking at everyone!"' },
      { type: 'multiple_choice', questionText: 'In an array [3, 7, 2, 9, 5], how many times is the `max` variable UPDATED?', options: ['3', '4', '2'], correctAnswer: '3' },
      { type: 'teaching', questionText: '🦜 Pico: "Great peck! Now let\'s find the smallest!"' }
    ]
  },
  {
    order: 4,
    title: 'The Tiny Snatched Seed',
    desc: 'Finding the smallest element in the flock (Min Element).',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Exact same mission, but this time we want the MINIMUM. Look for the tiniest seed in the pile!"' },
      { type: 'teaching', questionText: '🦜 Pico: "Initialize `min` with `arr[0]` or a very large number like `INT_MAX`. Then flip the comparison sign!"', codeSnippet: 'int min = arr[0];\nfor(int i=1; i<n; i++) {\n  if(arr[i] < min) min = arr[i];\n}' },
      { type: 'multiple_choice', questionText: 'If you use 0 to initialize `min` for an array of positive numbers, what happens?', options: ['It works fine', 'The result will always be 0', 'It crashes'], correctAnswer: 'The result will always be 0' },
      { type: 'match_following', questionText: 'Match the Initialization for an array of unknown numbers:', pairs: [{key: 'Max Logic', value: '-Infinity'}, {key: 'Min Logic', value: '+Infinity'}] },
      { type: 'programming_board', questionText: 'Complete the Min check.', codeSnippet: 'if (arr[i] ___ min_val) {\n  min_val = arr[i];\n}', correctAnswer: '<' },
      { type: 'teaching', questionText: '🦜 Pico: "Can you find both Max and Min in ONE pass? Yes! Just use two variables!"' },
      { type: 'multiple_choice', questionText: 'Time complexity for finding both Min and Max in a single loop?', options: ['O(N)', 'O(2N)', 'O(N^2)'], correctAnswer: 'O(N)' },
      { type: 'code_fill_in', questionText: 'C: What header is needed for `INT_MAX`?', codeSnippet: '#include <___.h>', correctAnswer: 'limits' },
      { type: 'teaching', questionText: '🦜 Pico: "Efficiency is key. Why look at the flock twice when once is enough?"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I the smallest bird?"', options: ['No, #1!', 'Maybe.', 'Squawk!'], correctAnswer: 'No, #1!' }
    ]
  },
  {
    order: 5,
    title: 'Summing the Flock',
    desc: 'Calculating the total of all elements.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Let\'s count all the seeds! We need to sum up every element in the array. 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Start with a `sum` variable at 0. Then, as you fly over each nest, add its contents to your bag!"', codeSnippet: 'int sum = 0;\nfor(int x : arr) sum += x;' },
      { type: 'multiple_choice', questionText: 'What is the sum of [1, 2, 3, 4]?', options: ['10', '9', '11'], correctAnswer: '10' },
      { type: 'match_following', questionText: 'Match the Accumulators!', pairs: [{key: 'Addition', value: 'sum += x'}, {key: 'Multiplication', value: 'prod *= x'}, {key: 'Counting', value: 'count++'}] },
      { type: 'programming_board', questionText: 'Calculate the average of an array of size `n`.', codeSnippet: 'avg = total_sum / ___ ;', correctAnswer: 'n' },
      { type: 'teaching', questionText: '🦜 Pico: "Watch out! If the sum is too big, it might cause an OVERFLOW. Use a `long long` for huge flocks!"' },
      { type: 'multiple_choice', questionText: 'Which data type is safer for summing very large arrays?', options: ['int', 'long long', 'double'], correctAnswer: 'long long' },
      { type: 'code_fill_in', questionText: 'Python: Sum an entire list in one line.', codeSnippet: 'total = ___(my_list)', correctAnswer: 'sum' },
      { type: 'teaching', questionText: '🦜 Pico: "One pass, O(N) time. Simple, effective, elegant!"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "How many seeds do I want?"', options: ['Sum(all)', 'Infinity', '0'], correctAnswer: 'Infinity' }
    ]
  },
  {
    order: 6,
    title: 'Odd vs Even Birds',
    desc: 'Filtering the flock based on parity.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Some birds are even, some are odd. Even birds are divisible by 2 with no remainder. 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Use the MODULO operator (%) to check. If `n % 2 == 0`, it is even. If not, it is odd!"', codeSnippet: 'if (n % 2 == 0) // Even\nelse // Odd' },
      { type: 'multiple_choice', questionText: 'What is 15 % 2?', options: ['1 (Odd)', '0 (Even)', '7.5'], correctAnswer: '1 (Odd)' },
      { type: 'match_following', questionText: 'Match the Parity!', pairs: [{key: '14 % 2', value: '0'}, {key: '19 % 2', value: '1'}, {key: 'Modulo', value: '%'}] },
      { type: 'programming_board', questionText: 'Count how many even numbers are in `arr`.', codeSnippet: 'if (arr[i] % 2 ___ 0) count++;', correctAnswer: '==' },
      { type: 'teaching', questionText: '🦜 Pico: "Efficiency Tip! You can also use bitwise AND: `(n & 1) == 0` is even. It\'s faster! 🦜"' },
      { type: 'multiple_choice', questionText: 'In bitwise, if `(n & 1)` is 1, the number is:', options: ['Odd', 'Even', 'Zero'], correctAnswer: 'Odd' },
      { type: 'code_fill_in', questionText: 'Complete the bitwise parity check.', codeSnippet: 'if ( (num & 1) ___ 0 ) // Even', correctAnswer: '==' },
      { type: 'teaching', questionText: '🦜 Pico: "Counting parity is common in Zoho interviews. They love bitwise tricks!"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Is 0 even or odd?"', options: ['Even', 'Odd', 'Neither'], correctAnswer: 'Even' }
    ]
  },
  {
    order: 7,
    title: 'Searching the Nest',
    desc: 'Finding a specific bird in the array (Linear Search).',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Mission: Can you find a specific bird? We call this searching. The simplest way is to check every nest!"' },
      { type: 'teaching', questionText: '🦜 Pico: "Linear Search: Walk through the array from index 0 to N-1. If you find it, return the index. If not, return -1!"', codeSnippet: 'for(int i=0; i<n; i++) {\n  if(arr[i] == target) return i;\n}\nreturn -1;' },
      { type: 'multiple_choice', questionText: 'What is the worst-case time complexity of Linear Search?', options: ['O(N)', 'O(1)', 'O(log N)'], correctAnswer: 'O(N)' },
      { type: 'match_following', questionText: 'Match Search Terms!', pairs: [{key: 'Target', value: 'What we seek'}, {key: '-1', value: 'Not found'}, {key: 'Early Return', value: 'Found it!'}] },
      { type: 'programming_board', questionText: 'Complete the search loop.', codeSnippet: 'for(int i=0; i < ___; i++)', correctAnswer: 'n' },
      { type: 'teaching', questionText: '🦜 Pico: "Best case? The target is in the very first nest! O(1). Worst case? It\'s at the end or not there at all. O(N)."' },
      { type: 'multiple_choice', questionText: 'If the target is at index 5 in an array of size 100, how many comparisons were made?', options: ['6', '5', '100'], correctAnswer: '6', explanation: 'Indices 0,1,2,3,4,5 = 6 checks.' },
      { type: 'code_fill_in', questionText: 'Python: Check if `x` is in `my_list`.', codeSnippet: 'if x ___ my_list:', correctAnswer: 'in' },
      { type: 'teaching', questionText: '🦜 Pico: "Python makes it look easy, but the computer is still doing a linear walk behind the scenes!"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Will you find me or -1?"', options: ['Pico!', '-1', '0'], correctAnswer: 'Pico!' }
    ]
  },
  {
    order: 8,
    title: 'Flipping the Horizon',
    desc: 'Reversing the entire flock (Array Reversal).',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Time to flip the flock! The first bird becomes the last, and the last becomes the first. Like a mid-air somersault!"' },
      { type: 'teaching', questionText: '🦜 Pico: "Two-Pointer Strategy! Start one pointer at the beginning and one at the end. Swap them and move inward!"', codeSnippet: 'while(start < end) {\n  swap(arr[start], arr[end]);\n  start++; end--;\n}' },
      { type: 'multiple_choice', questionText: 'How many swaps are needed to reverse an array of size N?', options: ['N/2', 'N', 'N-1'], correctAnswer: 'N/2', explanation: 'Since each swap handles two elements, we stop in the middle.' },
      { type: 'match_following', questionText: 'Match the Pointers!', pairs: [{key: 'Start', value: 'index 0'}, {key: 'End', value: 'index n-1'}, {key: 'Condition', value: 'start < end'}] },
      { type: 'programming_board', questionText: 'Complete the reverse loop condition.', codeSnippet: 'while (start ___ end)', correctAnswer: '<' },
      { type: 'teaching', questionText: '🦜 Pico: "This is IN-PLACE reversal. No extra array needed. Memory efficient, just like a bird\'s brain!"' },
      { type: 'multiple_choice', questionText: 'Space complexity of in-place reversal?', options: ['O(1)', 'O(N)', 'O(log N)'], correctAnswer: 'O(1)' },
      { type: 'code_fill_in', questionText: 'C++: Function to swap two values `a` and `b`.', codeSnippet: '___(a, b);', correctAnswer: 'swap' },
      { type: 'teaching', questionText: '🦜 Pico: "Flipping is the basis for many advanced rotations. Master it!"' },
      { type: 'multiple_choice', questionText: 'Reversing [1, 2, 3] gives:', options: ['[3, 2, 1]', '[2, 1, 3]', '[1, 2, 3]'], correctAnswer: '[3, 2, 1]' }
    ]
  },
  {
    order: 9,
    title: 'Duplicate Detectives',
    desc: 'Finding birds that appear twice in a sorted flock.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Stop copying me! If the flock is SORTED, spotting duplicates is easy. Just look at your neighbor!"' },
      { type: 'teaching', questionText: '🦜 Pico: "Loop through and check: if `arr[i] == arr[i+1]`, you found a copycat!"', codeSnippet: 'for(int i=0; i<n-1; i++) {\n  if(arr[i] == arr[i+1]) return true;\n}' },
      { type: 'multiple_choice', questionText: 'Does this neighbor-check work if the array is UNSORTED?', options: ['No', 'Yes', 'Maybe'], correctAnswer: 'No' },
      { type: 'match_following', questionText: 'Match the Condition!', pairs: [{key: 'Duplicate', value: 'arr[i] == arr[i+1]'}, {key: 'Unique', value: 'arr[i] != arr[i+1]'}, {key: 'Sorted', value: 'Required!'}] },
      { type: 'programming_board', questionText: 'Fix the loop to avoid overflow.', codeSnippet: 'for(int i=0; i < ___ ; i++)', correctAnswer: 'n-1' },
      { type: 'teaching', questionText: '🦜 Pico: "If it\'s not sorted, you need a Hash Set or an O(N^2) double-loop. Too slow for a parrot!"' },
      { type: 'multiple_choice', questionText: 'Complexity of finding duplicates in a sorted array?', options: ['O(N)', 'O(N^2)', 'O(1)'], correctAnswer: 'O(N)' },
      { type: 'code_fill_in', questionText: 'JS: Set a value in a Set to check uniqueness.', codeSnippet: 'mySet.___(value)', correctAnswer: 'add' },
      { type: 'teaching', questionText: '🦜 Pico: "One of a kind! That\'s me. Don\'t you forget it!"' },
      { type: 'multiple_choice', questionText: 'Are [1, 2, 2, 3] duplicates?', options: ['Yes, 2', 'No', 'Yes, all'], correctAnswer: 'Yes, 2' }
    ]
  },
  {
    order: 10,
    title: 'The Leader of the Pack',
    desc: 'Finding elements that are greater than all to their right.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Who is the leader? In an array, a leader is greater than ALL elements to its right!"' },
      { type: 'teaching', questionText: '🦜 Pico: "Special Rule! The rightmost element is ALWAYS a leader. There\'s nobody to its right to challenge it!"' },
      { type: 'multiple_choice', questionText: 'In [16, 17, 4, 3, 5, 2], what is the rightmost leader?', options: ['2', '16', '17'], correctAnswer: '2' },
      { type: 'match_following', questionText: 'Match Leaders in [16, 17, 4, 3, 5, 2]!', pairs: [{key: 'Master Leader', value: '17'}, {key: 'Last element', value: '2'}, {key: 'Another leader', value: '5'}] },
      { type: 'programming_board', questionText: 'Scan from right to left to find leaders efficiently.', codeSnippet: 'for(int i = n-1; i ___ 0; i--) { ... }', correctAnswer: '>=' },
      { type: 'teaching', questionText: '🦜 Pico: "By scanning from right to left, you just track the `current_max`. If a bird is bigger than `current_max`, it\'s a LEADER!"' },
      { type: 'multiple_choice', questionText: 'Time complexity for the Right-to-Left leader scan?', options: ['O(N)', 'O(N^2)', 'O(log N)'], correctAnswer: 'O(N)' },
      { type: 'code_fill_in', questionText: 'Initialize max_right with the last element.', codeSnippet: 'int max_r = arr[___];', correctAnswer: 'n-1' },
      { type: 'teaching', questionText: '🦜 Pico: "Zoho loves this question. It tests if you can think backwards (Right-to-Left)!"' },
      { type: 'multiple_choice', questionText: 'How many leaders in [1, 2, 3, 4, 5]?', options: ['1 (Only 5)', '5 (All)', '0'], correctAnswer: '1 (Only 5)' }
    ]
  }
];

module.exports = stage1;
