const arrays_v2 = {
  name: 'Arrays',
  icon: '🗄️',
  stages: [
    {
      order: 1,
      title: 'Foundation Flight',
      units: [
        {
          order: 1,
          title: 'The Memory Map',
          desc: 'Uncover how arrays sit in your computer\'s memory.',
          lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Welcome, fledgling! Before we fly, we must understand the ground. An array is just a contiguous block of memory. Think of it as a row of connected bird nests!"', explanation: 'Contiguous memory means all elements are stored right next to each other in sequence.' },
            { type: 'teaching', questionText: '🦜 Pico: "Because they are connected, if you know where the first nest is, you can jump to any nest instantly! This is called O(1) access time. Fast as a falcon!"', explanation: 'Accessing any element by index is instantaneous.' },
            { type: 'multiple_choice', questionText: 'What is the "O" complexity for accessing an element in an array by its index?', options: ['O(1)', 'O(N)', 'O(log N)'], correctAnswer: 'O(1)', explanation: 'Arrays allow random access, meaning you can jump straight to any index.' },
            { type: 'teaching', questionText: '🦜 Pico: "But wait! To keep them connected, they must all be the SAME size. You can\'t put an eagle in a sparrow\'s nest! 🦜"', explanation: 'All elements in an array must be of the same data type/size.' },
            { type: 'match_following', questionText: 'Match the Array Terms!', pairs: [{key: 'Index', value: 'Position'}, {key: 'Element', value: 'Value'}, {key: 'Base address', value: 'Start'}] },
            { type: 'programming_board', questionText: 'If the base address is 1000 and each integer is 4 bytes, what is the address of `arr[2]`?', codeSnippet: 'Address = 1000 + (2 * ___)', correctAnswer: '4', explanation: 'Address = Base + (Index * Size)' },
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
            { type: 'multiple_choice', questionText: 'In an array of size N, what is the last index?', options: ['N', 'N-1', 'N+1'], correctAnswer: 'N-1', explanation: 'Since we start at 0, the Nth element is at position N-1.' },
            { type: 'teaching', questionText: '🦜 Pico: "Think of it as jumping branches. If you are on the first branch, you have made 0 jumps!"' },
            { type: 'match_following', questionText: 'Match the element to its index!', pairs: [{key: '1st Element', value: 'index 0'}, {key: '3rd Element', value: 'index 2'}, {key: '5th Element', value: 'index 4'}] },
            { type: 'programming_board', questionText: 'Access the 4th element of `myArray`.', codeSnippet: 'val = myArray[___];', correctAnswer: '3' },
            { type: 'teaching', questionText: '🦜 Pico: "If you forget this, you will have an \'Off-by-One\' error. It\'s like missing your perch and landing in the mud! 🦜"' },
            { type: 'multiple_choice', questionText: 'Which index represents the middle element in an array of size 7?', options: ['3', '4', '2'], correctAnswer: '3', explanation: 'Indices are 0, 1, 2, 3, 4, 5, 6. The middle is 3.' },
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
            { type: 'teaching', questionText: '🦜 Pico: "Mission: Find the largest number in the array! It\'s like finding the bird with the longest wingspan!"', explanation: 'Iterate through the array and maintain a `max` variable.' },
            { type: 'teaching', questionText: '🦜 Pico: "Start by assuming the first bird is the biggest. Then compare it to every other bird in the flock!"', codeSnippet: 'int max = arr[0];\nfor(int i=1; i<n; i++) {\n  if(arr[i] > max) max = arr[i];\n}' },
            { type: 'multiple_choice', questionText: 'What should you initialize your `max` variable with for an array of integers?', options: ['0', 'The first element (arr[0])', 'A very large number'], correctAnswer: 'The first element (arr[0])', explanation: 'If the array has negative numbers, starting at 0 would fail.' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(N). You must look at every bird once. No shortcuts unless they are sorted!"' },
            { type: 'programming_board', questionText: 'Complete the comparison to update the max.', codeSnippet: 'if (currentBird ___ maxWingspan) {\n  maxWingspan = currentBird;\n}', correctAnswer: '>' },
            { type: 'match_following', questionText: 'Match the logic!', pairs: [{key: 'Compare', value: 'if (x > max)'}, {key: 'Update', value: 'max = x'}, {key: 'Loop', value: 'for (int x : arr)'}] },
            { type: 'code_fill_in', questionText: 'Complete the Python code to find max.', codeSnippet: 'max_val = ___(my_list)', correctAnswer: 'max' },
            { type: 'teaching', questionText: '🦜 Pico: "Python has a `max()` function, but under the hood, it\'s still doing the hard work of looking at everyone!"' },
            { type: 'multiple_choice', questionText: 'In an array [3, 7, 2, 9, 5], how many times is the `max` variable UPDATED?', options: ['3', '4', '2'], correctAnswer: '3', explanation: 'Starts at 3. Updates to 7. Updates to 9. Total 3 values held.' },
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
            { type: 'multiple_choice', questionText: 'If you use 0 to initialize `min` for an array of positive numbers, what happens?', options: ['It works fine', 'The result will always be 0', 'It crashes'], correctAnswer: 'The result will always be 0', explanation: 'Since 0 is smaller than any positive number, it will never be updated.' },
            { type: 'match_following', questionText: 'Match the Initialization for an array of unknown numbers:', pairs: [{key: 'Max Logic', value: '-Infinity'}, {key: 'Min Logic', value: '+Infinity'}] },
            { type: 'programming_board', questionText: 'Complete the Min check.', codeSnippet: 'if (arr[i] ___ min_val) {\n  min_val = arr[i];\n}', correctAnswer: '<' },
            { type: 'teaching', questionText: '🦜 Pico: "Can you find both Max and Min in ONE pass? Yes! Just use two variables!"' },
            { type: 'multiple_choice', questionText: 'Time complexity for finding both Min and Max in a single loop?', options: ['O(N)', 'O(2N)', 'O(N^2)'], correctAnswer: 'O(N)', explanation: 'O(2N) simplifies to O(N).' },
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
        }
      ]
    }
  ]
};

module.exports = arrays_v2;
