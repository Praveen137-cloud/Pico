const mongoose = require('mongoose');
require('dotenv').config();
const Subject = require('./models/Subject');

const subjects = [
  {
    _id: '69d21614ecc85515a8063379',
    name: 'Arrays',
    icon: '🗄️',
    description: 'Master the building blocks of data: Arrays and Matrices.',
    sections: [
      {
        _id: '69d21614ecc85515a806337a',
        title: 'Array Tactics',
        units: [
          { 
            _id: '69d21614ecc85515a806337b', 
            title: 'Linear Scan', 
            desc: 'The foundation of all array logic.', 
            isUnlocked: true, 
            xp: 10, 
            lessons: [
              { type: 'multiple_choice', questionText: 'What is the most efficient way to find a missing number in a range of 1 to N (sorted)?', options: ['Linear Search', 'Sum of N formula', 'Binary Search', 'Sorting'], correctAnswer: 'Sum of N formula' },
              { type: 'multiple_choice', questionText: 'What is the time complexity of a simple linear scan in an array of size N?', options: ['O(1)', 'O(log N)', 'O(N)', 'O(N^2)'], correctAnswer: 'O(N)' }
            ] 
          },
          { 
            _id: '69d21614ecc85515a806337c', 
            title: 'Search & Filter', 
            desc: 'Finding specific elements efficiently.', 
            isUnlocked: false, 
            xp: 15, 
            lessons: [
              { type: 'match_following', questionText: 'Match the array operation complexity!', pairs: [{key: 'Access', value: 'O(1)'}, {key: 'Search (unsorted)', value: 'O(N)'}, {key: 'Binary Search', value: 'O(log N)'}] },
              { type: 'multiple_choice', questionText: 'Binary Search depends on which array property?', options: ['Sorted elements', 'Unique elements', 'Large size', 'Even length'], correctAnswer: 'Sorted elements' }
            ] 
          },
          {
            _id: '69d21614ecc85515a80633a7',
            title: 'Rotate and Shift',
            desc: 'Moving elements in cyclic patterns.',
            isUnlocked: false,
            xp: 15,
            lessons: [
              { type: 'programming_board', questionText: 'Complete the array rotation logic!', codeSnippet: 'for(int i=0; i<k; i++) {\n  int last = arr[___];\n  for(int j=n-1; j>0; j--) arr[j] = arr[j-1];\n  arr[0] = ___;\n}', correctAnswer: 'n-1|last' }
            ]
          }
        ]
      },
      {
        _id: '69d21614ecc85515a806337d',
        title: 'Matrix Mastery',
        units: [
          { 
            _id: '69d21614ecc85515a806337e', 
            title: 'Spiral Traversal', 
            desc: 'A Zoho favorite: navigating 2D grids spirally.', 
            isUnlocked: false, 
            xp: 20, 
            lessons: [
              { type: 'multiple_choice', questionText: 'How many pointers do you typically need for a spiral matrix traversal?', options: ['1', '2', '4', '8'], correctAnswer: '4' },
              { type: 'match_following', questionText: 'Match spiral directions!', pairs: [{key: 'First', value: 'Right'}, {key: 'Second', value: 'Down'}, {key: 'Third', value: 'Left'}] }
            ] 
          },
          { 
            _id: '69d21614ecc85515a806337f', 
            title: 'Diagonal Traversal', 
            desc: 'Moving diagonally across space.', 
            isUnlocked: false, 
            xp: 25, 
            lessons: [
              { type: 'multiple_choice', questionText: 'In a matrix of size MxN, how many diagonals are there?', options: ['M+N', 'M+N-1', 'M*N', '2'], correctAnswer: 'M+N-1' },
              { type: 'programming_board', questionText: 'Identify diagonal index property!', codeSnippet: 'if(i + j == ___) {\n  // Anti-diagonal cell\n}', correctAnswer: 'n-1' }
            ] 
          },
          {
            _id: '69d21614ecc85515a80633a8',
            title: 'Matrix Rotation',
            desc: 'Rotating 2D grids by 90 degrees.',
            isUnlocked: false,
            xp: 25,
            lessons: [
              { type: 'multiple_choice', questionText: 'Rotating a matrix by 90 deg clockwise is equivalent to:', options: ['Reverse rows then Transpose', 'Transpose then Reverse rows', 'Shift then Transpose'], correctAnswer: 'Transpose then Reverse rows' }
            ]
          }
        ]
      },
      {
        _id: '69d21614ecc85515a80633a1',
        title: 'Subarray Logic',
        units: [
          { 
            _id: '69d21614ecc85515a80633a2', 
            title: 'Sliding Window', 
            desc: 'Efficiency in bounds for contiguous sums.', 
            isUnlocked: false, 
            xp: 20, 
            lessons: [
              { type: 'multiple_choice', questionText: 'Which technique is best for maximum sum of K consecutive elements?', options: ['Two Pointers', 'Sliding Window', 'DP'], correctAnswer: 'Sliding Window' },
              { type: 'programming_board', questionText: 'Complete the window slide!', codeSnippet: 'curr_sum = curr_sum - arr[i - ___] + arr[___];', correctAnswer: 'k|i' }
            ] 
          },
          { 
            _id: '69d21614ecc85515a80633a3', 
            title: 'Prefix Sums', 
            desc: 'Precalculating for sub-range queries.', 
            isUnlocked: false, 
            xp: 20, 
            lessons: [
              { type: 'multiple_choice', questionText: 'What is the speed of range sum after precalculating?', options: ['O(N)', 'O(1)', 'O(log N)'], correctAnswer: 'O(1)' },
              { type: 'match_following', questionText: 'Match prefix properties!', pairs: [{key: 'P[0]', value: 'arr[0]'}, {key: 'P[i]', value: 'P[i-1] + arr[i]'}, {key: 'Sum(i,j)', value: 'P[j] - P[i-1]'}] }
            ] 
          },
          {
            _id: '69d21614ecc85515a80633a9',
            title: 'Kadane algorithm',
            desc: 'The gold standard for max subarray sums.',
            isUnlocked: false,
            xp: 30,
            lessons: [
              { type: 'multiple_choice', questionText: 'Kadane algorithm handles which case efficiently?', options: ['Negative numbers', 'Zero-only', 'Strings'], correctAnswer: 'Negative numbers' }
            ]
          }
        ]
      },
      {
        _id: '69d21614ecc85515a80633a4',
        title: 'Array Sorting',
        units: [
          { _id: '69d21614ecc85515a80633a5', title: 'QuickSort Partition', desc: 'Mastering the pivot logic.', isUnlocked: false, xp: 20, lessons: [{ type: 'multiple_choice', questionText: 'What is the average case complexity of QuickSort?', options: ['O(N log N)', 'O(N^2)', 'O(N)'], correctAnswer: 'O(N log N)' }, { type: 'match_following', questionText: 'Match Sorting algorithms!', pairs: [{key: 'Pivot', value: 'QuickSort'}, {key: 'Divide', value: 'MergeSort'}, {key: 'Heap', value: 'HeapSort'}] }] },
          { _id: '69d21614ecc85515a80633a6', title: 'Stable Sorting', desc: 'Preserving original order.', isUnlocked: false, xp: 20, lessons: [{ type: 'multiple_choice', questionText: 'Merge Sort is a stable sort.', options: ['True', 'False'], correctAnswer: 'True' }, { type: 'programming_board', questionText: 'Merge procedure step!', codeSnippet: 'if(L[i] ___ R[j]) arr[k] = L[i++];\nelse arr[k] = R[j++];', correctAnswer: '<=' }] },
          { _id: '69d21614ecc85515a80633aa', title: 'Sorting Frequency', desc: 'Zoho: Sort by repeat count.', isUnlocked: false, xp: 25, lessons: [{ type: 'multiple_choice', questionText: 'Which structure helps sort by frequency?', options: ['Hash Map', 'Stack', 'Linked List'], correctAnswer: 'Hash Map' }] }
        ]
      }
    ]
  },
  {
    _id: '69d21614ecc85515a8063380',
    name: 'Strings',
    icon: '🧬',
    description: 'Cracking text manipulation.',
    sections: [
      { 
        _id: '69d21614ecc85515a8063381', 
        title: 'String Dynamics', 
        units: [
          { _id: '69d21614ecc85515a8063382', title: 'String Expansion', desc: 'Zoho: a3b2 -> aaabb.', isUnlocked: true, xp: 10, lessons: [{ type: 'multiple_choice', questionText: 'a10b2 translates to:', options: ['aaaaaaaaaabb', 'ab102', 'abb'], correctAnswer: 'aaaaaaaaaabb' }, { type: 'match_following', questionText: 'Match string tools!', pairs: [{key: 'strlen', value: 'Length'}, {key: 'strcpy', value: 'Copy'}, {key: 'strcat', value: 'Join'}] }] }, 
          { _id: '69d21614ecc85515a8063383', title: 'Palindrome Mirror', desc: 'Symmetric text.', isUnlocked: false, xp: 10, lessons: [{ type: 'multiple_choice', questionText: 'Naturally suited structure for palindromes?', options: ['Stack', 'Queue', 'Map'], correctAnswer: 'Stack' }, { type: 'programming_board', questionText: 'Check mirror case!', codeSnippet: 'if(s[i] ___ s[n-1-i]) return 0;', correctAnswer: '!=' }] },
          { _id: '69d21614ecc85515a80633ab', title: 'String Compression', desc: 'aaabb -> a3b2.', isUnlocked: false, xp: 15, lessons: [{ type: 'multiple_choice', questionText: 'Run Length Encoding is used for?', options: ['Compression', 'Encryption', 'Hashing'], correctAnswer: 'Compression' }] }
        ] 
      },
      { 
        _id: '69d21614ecc85515a8063384', 
        title: 'Pattern Matching', 
        units: [
          { _id: '69d21614ecc85515a8063385', title: 'Anagram Validation', desc: 'Checking reordered copies.', isUnlocked: false, xp: 20, lessons: [{ type: 'multiple_choice', questionText: 'Two strings are anagrams if:', options: ['Same length', 'Same char counts', 'Both start with A'], correctAnswer: 'Same char counts' }, { type: 'match_following', questionText: 'Match pattern terms!', pairs: [{key: 'Pattern', value: 'Small'}, {key: 'Text', value: 'Large'}, {key: 'Matches', value: 'Hits'}] }] }, 
          { _id: '69d21614ecc85515a8063386', title: 'Look-and-Say', desc: 'Generating 1, 11, 21...', isUnlocked: false, xp: 20, lessons: [{ type: 'multiple_choice', questionText: 'Next in 1, 11, 21, 1211...', options: ['111221', '312211', '121111'], correctAnswer: '111221' }, { type: 'programming_board', questionText: 'Say what you see!', codeSnippet: 'count = 1;\nwhile(s[i] == s[i+1]) { count___; i___; }', correctAnswer: '++|++' }] },
          { _id: '69d21614ecc85515a80633ac', title: 'Pattern Finding', desc: 'Zoho: Wildcards.', isUnlocked: false, xp: 25, lessons: [{ type: 'multiple_choice', questionText: 'The "*" in wildcards means?', options: ['One char', 'Zero or more', 'Exactly two'], correctAnswer: 'Zero or more' }] }
        ] 
      },
      { 
        _id: '69d21614ecc85515a8063387', 
        title: 'Word Logic', 
        units: [
          { _id: '69d21614ecc85515a8063388', title: 'Sentence reversal', desc: 'fun is Pico -> Pico is fun.', isUnlocked: false, xp: 15, lessons: [{ type: 'multiple_choice', questionText: 'Reversing sentence is different from reversing string?', options: ['Yes', 'No'], correctAnswer: 'Yes' }, { type: 'match_following', questionText: 'Match word steps!', pairs: [{key: 'Tokenize', value: 'Splitting'}, {key: 'Reverse All', value: 'Whole string'}, {key: 'Reverse Each', value: 'Words back'}] }] }, 
          { _id: '69d21614ecc85515a8063389', title: 'Duplicate clean', desc: 'Unique text.', isUnlocked: false, xp: 15, lessons: [{ type: 'multiple_choice', questionText: 'Keeping unique order needs?', options: ['LinkedHashSet', 'TreeSet', 'HashSet'], correctAnswer: 'LinkedHashSet' }, { type: 'programming_board', questionText: 'Set unique logic!', codeSnippet: 'if(!seen[___]) {\n  dest[j++] = s[i];\n  seen[___] = 1;\n}', correctAnswer: 's[i]|s[i]' }] },
          { _id: '69d21614ecc85515a80633ad', title: 'Common Prefix', desc: 'Common starting text.', isUnlocked: false, xp: 15, lessons: [{ type: 'multiple_choice', questionText: 'LCP of "apple", "app", "april"?', options: ['app', 'ap', 'apple'], correctAnswer: 'ap' }] }
        ] 
      },
      { 
        _id: '69d21614ecc85515a806338a', 
        title: 'C-String Buffers', 
        units: [
          { _id: '69d21614ecc85515a806338b', title: 'Null Terminators', desc: 'The \\0 character.', isUnlocked: false, xp: 10, lessons: [{ type: 'multiple_choice', questionText: 'Size of "Hi"?', options: ['2', '3', '4'], correctAnswer: '3' }, { type: 'match_following', questionText: 'Match types!', pairs: [{key: 'char', value: '1 byte'}, {key: 'int', value: '4 bytes'}] }] }, 
          { _id: '69d21614ecc85515a806338c', title: 'Buffer safety', desc: 'Preventing overflows.', isUnlocked: false, xp: 10, lessons: [{ type: 'multiple_choice', questionText: 'Dangerous C function?', options: ['gets', 'fgets', 'scanf'], correctAnswer: 'gets' }, { type: 'programming_board', questionText: 'Safe copy!', codeSnippet: 'strncpy(dest, src, ___);', correctAnswer: 'n' }] },
          { _id: '69d21614ecc85515a80633ae', title: 'Pointer Strings', desc: 'char *ptr = "Zoho".', isUnlocked: false, xp: 15, lessons: [{ type: 'multiple_choice', questionText: 'Can you change "Zoho" via ptr?', options: ['Yes', 'No'], correctAnswer: 'No' }] }
        ] 
      }
    ]
  },
  {
    _id: '69d21614ecc85515a80633b0',
    name: 'Recursion',
    icon: '🌀',
    description: 'Master call stacks.',
    sections: [
      { 
        _id: '69d21614ecc85515a80633b1', 
        title: 'Recursive Thinking', 
        units: [
          { _id: '69d21614ecc85515a80633b2', title: 'Tower of Hanoi', desc: 'Call stacks.', isUnlocked: true, xp: 15, lessons: [{ type: 'multiple_choice', questionText: 'Moves for 3 disks?', options: ['3', '7', '15'], correctAnswer: '7' }, { type: 'match_following', questionText: 'Match Recursion parts!', pairs: [{key: 'Base Case', value: 'Stop'}, {key: 'Recursive step', value: 'Move forward'}, {key: 'Stack Overflow', value: 'Endless'}] }] }, 
          { _id: '69d21614ecc85515a80633b3', title: 'Base Cases', desc: 'Stopping the infinite.', isUnlocked: false, xp: 15, lessons: [{ type: 'multiple_choice', questionText: 'Missing base case causes?', options: ['Loop', 'Overflow', 'Correctness'], correctAnswer: 'Overflow' }, { type: 'programming_board', questionText: 'Base case logic!', codeSnippet: 'if(n ___ 1) return 1;', correctAnswer: '<=' }] }, 
          { _id: '69d21614ecc85515a80633bf', title: 'Factorials', desc: 'Modern classic.', isUnlocked: false, xp: 10, lessons: [{ type: 'multiple_choice', questionText: '0! is?', options: ['0', '1', 'Undefined'], correctAnswer: '1' }] }
        ] 
      },
      { 
        _id: '69d21614ecc85515a80633b4', 
        title: 'Backtracking', 
        units: [
          { _id: '69d21614ecc85515a80633b5', title: 'N-Queens', desc: 'Safe placement.', isUnlocked: false, xp: 25, lessons: [{ type: 'multiple_choice', questionText: 'Backtracking is a form of?', options: ['BFS', 'DFS', 'Greedy'], correctAnswer: 'DFS' }, { type: 'match_following', questionText: 'Match Backtracking!', pairs: [{key: 'Solution', value: 'Accept'}, {key: 'Partial', value: 'Reject'}, {key: 'Next', value: 'Explore'}] }] }, 
          { _id: '69d21614ecc85515a80633b6', title: 'Sudoku solver', desc: 'Filling grids.', isUnlocked: false, xp: 25, lessons: [{ type: 'multiple_choice', questionText: 'Best search for Sudoku?', options: ['Brute Force', 'Backtracking', 'Binary'], correctAnswer: 'Backtracking' }, { type: 'programming_board', questionText: 'Board check!', codeSnippet: 'if(isSafe(row, col, ___)) {\n  grid[row][col] = num;\n  if(solve()) return true;\n  grid[row][col] = ___;\n}', correctAnswer: 'num|0' }] }, 
          { _id: '69d21614ecc85515a80633c0', title: 'Rat in a Maze', desc: 'Finding paths.', isUnlocked: false, xp: 30, lessons: [{ type: 'multiple_choice', questionText: 'Maze path usually use?', options: ['Recursion', 'Iteration', 'Sorted'], correctAnswer: 'Recursion' }] }
        ] 
      },
      { 
        _id: '69d21614ecc85515a80633b7', 
        title: 'Tree Paths', 
        units: [
          { _id: '69d21614ecc85515a80633b8', title: 'Height logic', desc: 'Counting levels.', isUnlocked: false, xp: 20, lessons: [{ type: 'multiple_choice', questionText: 'Height of single node?', options: ['0', '1', '2'], correctAnswer: '1' }, { type: 'match_following', questionText: 'Match Tree parts!', pairs: [{key: 'Root', value: 'Top'}, {key: 'Leaf', value: 'End'}, {key: 'Edge', value: 'Link'}] }] }, 
          { _id: '69d21614ecc85515a80633b9', title: 'Subtree check', desc: 'Matching nodes.', isUnlocked: false, xp: 20, lessons: [{ type: 'multiple_choice', questionText: 'Structural identity check uses?', options: ['Inorder', 'Preorder', 'Recursion'], correctAnswer: 'Recursion' }, { type: 'programming_board', questionText: 'Node match!', codeSnippet: 'if(root1->val ___ root2->val)\n  return check(r1->left, r2->left) && ___', correctAnswer: '==|check(r1->right, r2->right)' }] }, 
          { _id: '69d21614ecc85515a80633c1', title: 'Path Sums', desc: 'Finding routes.', isUnlocked: false, xp: 25, lessons: [{ type: 'multiple_choice', questionText: 'Target sum 0 in leaf?', options: ['Found', 'Not found'], correctAnswer: 'Found' }] }
        ] 
      },
      { 
        _id: '69d21614ecc85515a80633ba', 
        title: 'Optimization', 
        units: [
          { _id: '69d21614ecc85515a80633bb', title: 'Memoization', desc: 'Top-down caching.', isUnlocked: false, xp: 30, lessons: [{ type: 'multiple_choice', questionText: 'Memoization uses?', options: ['Array/Map', 'Stack', 'Queue'], correctAnswer: 'Array/Map' }, { type: 'match_following', questionText: 'Match DP terms!', pairs: [{key: 'Top-down', value: 'Memoization'}, {key: 'Bottom-up', value: 'Tabulation'}] }] }, 
          { _id: '69d21614ecc85515a80633bc', title: 'Tail recursion', desc: 'Compiler loops.', isUnlocked: false, xp: 20, lessons: [{ type: 'multiple_choice', questionText: 'Tail call is last step?', options: ['Yes', 'No'], correctAnswer: 'Yes' }, { type: 'programming_board', questionText: 'Tail-recursive fact!', codeSnippet: 'return fact(n-1, n*___);', correctAnswer: 'acc' }] }, 
          { _id: '69d21614ecc85515a80633c2', title: 'Dynamic Caching', desc: 'Subproblems.', isUnlocked: false, xp: 35, lessons: [{ type: 'multiple_choice', questionText: 'Fib(n) complexity with DP?', options: ['O(2^n)', 'O(n)'], correctAnswer: 'O(n)' }] }
        ] 
      }
    ]
  },
  {
    _id: '69d21614ecc85515a80633f0',
    name: 'Zoho Basics (C)',
    icon: '⚙️',
    description: 'Master the technical core.',
    sections: [
      { 
        _id: '69d21614ecc85515a80633f1', 
        title: 'Pointer Logic', 
        units: [
          { _id: '69d21614ecc85515a80633f2', title: 'Address vs Value', desc: '& and * operator.', isUnlocked: true, xp: 10, lessons: [{ type: 'multiple_choice', questionText: 'Operator to get address?', options: ['&', '*', '->'], correctAnswer: '&' }, { type: 'match_following', questionText: 'Match Operators!', pairs: [{key: '&', value: 'Address'}, {key: '*', value: 'Value/Dereference'}, {key: '->', value: 'Member'}] }] }, 
          { _id: '69d21614ecc85515a80633f3', title: 'Arithmetic', desc: 'Moving through blocks.', isUnlocked: false, xp: 15, lessons: [{ type: 'multiple_choice', questionText: 'ptr++ on int pointer move?', options: ['1 byte', '4 bytes', '0 bytes'], correctAnswer: '4 bytes' }, { type: 'programming_board', questionText: 'Pointer offset!', codeSnippet: 'int *p = arr;\nprintf("%d", *(p + ___));', correctAnswer: '2' }] }, 
          { _id: '69d21614ecc85515a80633f4', title: 'Dangling Pointers', desc: 'Dangerous memory.', isUnlocked: false, xp: 15, lessons: [{ type: 'multiple_choice', questionText: 'Dangling pointer points to?', options: ['Heap', 'Deleted memory', 'Stack top'], correctAnswer: 'Deleted memory' }] }
        ] 
      },
      { 
        _id: '69d21614ecc85515a8063420', 
        title: 'C Structures', 
        units: [
          { _id: '69d21614ecc85515a8063421', title: 'Struct Padding', desc: 'Memory alignment.', isUnlocked: false, xp: 15, lessons: [{ type: 'multiple_choice', questionText: 'Why padding occurs?', options: ['Speed', 'Storage', 'Safety'], correctAnswer: 'Speed' }, { type: 'match_following', questionText: 'Match padding info!', pairs: [{key: 'char', value: '1 byte'}, {key: 'int', value: 'Align 4'}, {key: 'struct', value: 'Largest member'}] }] }, 
          { _id: '69d21614ecc85515a8063422', title: 'Malloc/Free', desc: 'Heap control.', isUnlocked: false, xp: 10, lessons: [{ type: 'multiple_choice', questionText: 'malloc returns?', options: ['void*', 'int*', 'null'], correctAnswer: 'void*' }, { type: 'programming_board', questionText: 'Memory release!', codeSnippet: 'int *p = malloc(size);\n___(p);', correctAnswer: 'free' }] }, 
          { _id: '69d21614ecc85515a8063429', title: 'Unions vs Structs', desc: 'Shared vs distinct.', isUnlocked: false, xp: 15, lessons: [{ type: 'multiple_choice', questionText: 'Size of union is size of?', options: ['Sum of all', 'Largest member'], correctAnswer: 'Largest member' }] }
        ] 
      },
      { 
        _id: '69d21614ecc85515a8063423', 
        title: 'Bitwise Ops', 
        units: [
          { _id: '69d21614ecc85515a8063424', title: 'AND/OR masks', desc: 'Binary checks.', isUnlocked: false, xp: 25, lessons: [{ type: 'multiple_choice', questionText: 'n & 1 check for?', options: ['Even', 'Odd', 'Prime'], correctAnswer: 'Odd' }, { type: 'match_following', questionText: 'Match Bitwise!', pairs: [{key: '&', value: 'AND'}, {key: '|', value: 'OR'}, {key: '^', value: 'XOR'}] }] }, 
          { _id: '69d21614ecc85515a8063425', title: 'Shift math', desc: 'Power of 2.', isUnlocked: false, xp: 20, lessons: [{ type: 'multiple_choice', questionText: 'n << 1 is same as?', options: ['n * 2', 'n / 2'], correctAnswer: 'n * 2' }, { type: 'programming_board', questionText: 'Masking set!', codeSnippet: 'n = n ___ (1 << k);', correctAnswer: '|' }] }, 
          { _id: '69d21614ecc85515a806342a', title: 'Checking parity', desc: 'Even or odd.', isUnlocked: false, xp: 15, lessons: [{ type: 'multiple_choice', questionText: 'x ^ x is?', options: ['0', '1', 'x'], correctAnswer: '0' }] }
        ] 
      },
      { 
        _id: '69d21614ecc85515a8063426', 
        title: 'Interview Riddles', 
        units: [
          { _id: '69d21614ecc85515a8063427', title: 'XOR Swap', desc: 'Var-less swapping.', isUnlocked: false, xp: 20, lessons: [{ type: 'multiple_choice', questionText: 'Swap logic: a=a^b; b=a^b; a=a^b;', options: ['True', 'False'], correctAnswer: 'True' }, { type: 'match_following', questionText: 'Match Riddle tools!', pairs: [{key: 'Pointers', value: 'Linked list loop'}, {key: 'Bitwise', value: 'Odd one out'}, {key: 'C math', value: 'Precision'}] }] }, 
          { _id: '69d21614ecc85515a8063428', title: 'Operator Rank', desc: 'Precedence.', isUnlocked: false, xp: 20, lessons: [{ type: 'multiple_choice', questionText: 'Highest precedence?', options: ['()', '+', '*'], correctAnswer: '()' }, { type: 'programming_board', questionText: 'Mystery precedence!', codeSnippet: 'int x = 10, y = 20, z = 30;\nint res = x + y ___ z;', correctAnswer: '*' }] }, 
          { _id: '69d21614ecc85515a806342b', title: 'Duff machine', desc: 'Unrolling loops.', isUnlocked: false, xp: 30, lessons: [{ type: 'multiple_choice', questionText: 'Duff machine uses?', options: ['switch', 'goto', 'if-else'], correctAnswer: 'switch' }] }
        ] 
      }
    ]
  }
];
module.exports = subjects;

if (require.main === module) {
  mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/pico_dsa')
  .then(async () => {
    console.log('Expanding Core 4 Subjects (Full 16 Stages, 5 Lessons Each)...');
    await Subject.deleteMany({});
    await Subject.insertMany(subjects);
    console.log('✅ Success! Curriculum is now massive and interactive.');
    process.exit(0);
  })
  .catch(err => { console.error(err.message); process.exit(1); });
}
