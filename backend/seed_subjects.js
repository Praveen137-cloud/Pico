const mongoose = require('mongoose');
require('dotenv').config();
const Subject = require('./models/Subject');

const subjects = [
  {
    _id: '69d21614ecc85515a8063379',
    name: 'Arrays',
    icon: '🗄️',
    description: 'Master the building blocks: Arrays and Matrices.',
    sections: [
      {
        _id: '69d21614ecc85515a806337a',
        title: 'Array Tactics',
        units: [
          { 
            _id: '69d21614ecc85515a806337b', 
            title: 'Linear Scan & Leaders', 
            desc: 'Find all elements that are greater than all elements to their right.', 
            isUnlocked: true, 
            xp: 20, 
            lessons: [
              // Page 1: Teaching
              { type: 'teaching', questionText: '🏢 In Zoho interviews, "Leaders in an Array" is a hallmark question. An element is a leader if it is greater than all elements to its right. The rightmost element is always a leader.', codeSnippet: '// Example: [16, 17, 4, 3, 5, 2]\n// Leaders: 17, 5, 2' },
              // Page 2: Teaching
              { type: 'teaching', questionText: '⚡ The Naive approach is O(N^2) using nested loops. An optimized approach scans from right to left, keeping track of the current maximum.', codeSnippet: 'void findLeaders(int arr[], int n) {\n    int max_right = arr[n-1];\n    printf("%d ", max_right);\n    for (int i = n-2; i >= 0; i--) {\n        if (arr[i] > max_right) {\n            max_right = arr[i];\n            printf("%d ", max_right);\n        }\n    }\n}' },
              // Page 3: Teaching
              { type: 'teaching', questionText: '🧩 Why right-to-left? Because if we go left-to-right, we have to check every element after the current one. But if we go right-to-left, we already know the maximum of "everything to the right".' },
              // Page 4: Teaching
              { type: 'teaching', questionText: '⚙️ Time Complexity: O(N) because we visit each element exactly once. Space Complexity: O(1) if we just print the result.' },
              // Page 5: Teaching (Scenario)
              { type: 'teaching', questionText: '🎬 Imagine an array [10, 4, 6, 3, 5]. We start at 5 (leader). Max=5. Move to 3 (3 < 5, skip). Move to 6 (6 > 5, leader). Max=6. Move to 4 (4 < 6, skip). Move to 10 (10 > 6, leader). Done!' },
              // Page 6: Question (MCQ)
              { type: 'multiple_choice', questionText: 'What is the time complexity of the optimized "Leaders in Array" algorithm?', options: ['O(N^2)', 'O(N log N)', 'O(N)', 'O(1)'], correctAnswer: 'O(N)' },
              // Page 7: Question (Match)
              { type: 'match_following', questionText: 'Match the array properties!', pairs: [
                {key: 'Rightmost element', value: 'Always a leader'}, 
                {key: 'Sorted ascending', value: 'Only last stays'}, 
                {key: 'Sorted descending', value: 'All are leaders'}
              ] },
              // Page 8: Question (Programming Board)
              { type: 'programming_board', questionText: 'Complete the "Leader" log-scan!', codeSnippet: 'int max = arr[n-1];\nfor(int i = n-2; i ___ 0; i--) {\n  if(arr[i] ___ max) {\n    max = arr[i];\n    printf("%d ", max);\n  }\n}', correctAnswer: '>=|>' },
              // Page 9: Question (MCQ)
              { type: 'multiple_choice', questionText: 'In an array which is already sorted in ascending order, how many leaders will there be?', options: ['1', 'N', 'N/2', '0'], correctAnswer: '1' },
              // Page 10: Question (MCQ)
              { type: 'multiple_choice', questionText: 'Does the space complexity change if we need to store leaders in original order?', options: ['No, still O(1)', 'Yes, becomes O(N)', 'Only log N'], correctAnswer: 'Yes, becomes O(N)' }
            ] 
          },
          { 
            _id: '69d21614ecc85515a806337c', 
            title: 'Second Largest Element', 
            desc: 'Find the second highest value in a single traversal.', 
            isUnlocked: false, 
            xp: 20, 
            lessons: [
              // Page 1: Teaching
              { type: 'teaching', questionText: '🥈 Finding the second largest element is trickier than the largest. You cannot just use `sort()` as that would be O(N log N). Zoho expects a single O(N) pass.' },
              // Page 2: Teaching
              { type: 'teaching', questionText: '⚡ Logic: Keep two variables: `first` and `second`. Initialize both to INT_MIN. For each number: if `x > first`, `second = first` and `first = x`. Else if `x > second` and `x != first`, set `second = x`.', codeSnippet: 'int first = -1, second = -1;\nfor(int i=0; i<n; i++) {\n  if(arr[i] > first) {\n    second = first;\n    first = arr[i];\n  } else if(arr[i] > second && arr[i] != first) {\n    second = arr[i];\n  }\n}' },
              // Page 3: Teaching
              { type: 'teaching', questionText: '⚠️ Edge case: If all elements are same, there is no second largest. If you have only 1 element, no second largest.' },
              // Page 4: Teaching
              { type: 'teaching', questionText: '⚙️ Time: O(N) - 1 scan. Space: O(1) - 2 variables.' },
              // Page 5: Teaching
              { type: 'teaching', questionText: '💡 This pattern of keeping "state" while scanning is a foundation for "Best time to buy/sell stock" and other DP basics.' },
              // Page 6: Question (MCQ)
              { type: 'multiple_choice', questionText: 'Given [10, 10, 10], what is the second largest element?', options: ['10', '-1 (None)', '0', 'Error'], correctAnswer: '-1 (None)' },
              // Page 7: Question (Match)
              { type: 'match_following', questionText: 'Match the result for [12, 35, 1, 10, 34, 1]!', pairs: [
                {key: 'First Largest', value: '35'}, 
                {key: 'Second Largest', value: '34'}, 
                {key: 'Time Complexity', value: 'O(N)'}
              ] },
              // Page 8: Question (Programming Board)
              { type: 'programming_board', questionText: 'Fix the second largest update!', codeSnippet: 'if(arr[i] > first) {\n  second = ___;\n  first = arr[i];\n} else if(arr[i] > second && arr[i] ___ first) {\n  second = arr[i];\n}', correctAnswer: 'first|!=' },
              // Page 9: Question (MCQ)
              { type: 'multiple_choice', questionText: 'Why do we initialize variables with very small numbers (INT_MIN)?', options: ['To save memory', 'To ensure any array element is larger', 'Because C requires it'], correctAnswer: 'To ensure any array element is larger' },
              // Page 10: Question (MCQ)
              { type: 'multiple_choice', questionText: 'Can you find the second largest by sorting in O(N log N)?', options: ['Yes, but it is slow', 'No, impossible', 'Only for small arrays'], correctAnswer: 'Yes, but it is slow' }
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
            desc: 'The gold standard Zoho matrix puzzle.', 
            isUnlocked: false, 
            xp: 25, 
            lessons: [
              { type: 'teaching', questionText: '🌀 Spiral traversal involves 4 pointers: top, bottom, left, right.' },
              { type: 'teaching', questionText: 'Logic: \n1. Left to Right (Top row)\n2. Top to Bottom (Right column)\n3. Right to Left (Bottom row)\n4. Bottom to Top (Left column)\nUpdate boundaries after each step.' },
              { type: 'teaching', questionText: 'Loop condition: `while(top <= bottom && left <= right)`.', codeSnippet: '// Right\nfor(i=left; i<=right; i++) printf("%d", m[top][i]); top++;\n// Down\nfor(i=top; i<=bottom; i++) printf("%d", m[i][right]); right--;' },
              { type: 'teaching', questionText: '⚠️ Crucial: Before step 3 and 4, you MUST re-check the loop condition if top/bottom or left/right changed.' },
              { type: 'teaching', questionText: 'Complexity: O(R*C) since you visit every cell once.' },
              { type: 'multiple_choice', questionText: 'How many direction steps are in a full spiral cycle?', options: ['2', '4', '8', 'Spiral has no steps'], correctAnswer: '4' },
              { type: 'match_following', questionText: 'Match directions to pointer updates!', pairs: [
                {key: 'Left to Right', value: 'top++'}, 
                {key: 'Top to Bottom', value: 'right--'}, 
                {key: 'Right to Left', value: 'bottom--'}
              ] },
              { type: 'programming_board', questionText: 'Fix bottom-up crawl!', codeSnippet: 'if(left <= right) {\n  for(int i = bottom; i >= top; i--) \n     printf("%d", matrix[i][___]);\n  left___;\n}', correctAnswer: 'left|++' },
              { type: 'multiple_choice', questionText: 'What is the space complexity if we print the matrix spirally?', options: ['O(1)', 'O(R*C)', 'O(R+C)'], correctAnswer: 'O(1)' },
              { type: 'multiple_choice', questionText: 'Next in 1, 11, 21... Wait, that is Strings! In a 3x3 matrix, how many layers are there?', options: ['1.5', '2', '3'], correctAnswer: '2' }
            ] 
          }
        ]
      }
    ]
  },
  {
    _id: '69d21614ecc85515a8063380',
    name: 'Strings',
    icon: '🧬',
    description: 'Cracking text manipulation for Zoho.',
    sections: [
      { 
        _id: '69d21614ecc85515a8063381', 
        title: 'String Dynamics', 
        units: [
          { 
            _id: '69d21614ecc85515a8063382', 
            title: 'Expand String', 
            desc: 'a3b2c1 -> aaabbc', 
            isUnlocked: true, 
            xp: 20, 
            lessons: [
              { type: 'teaching', questionText: '🧬 Zoho Core: a3b2c1 -> aaabbc. This tests your ability to parse multi-digit numbers embedded in strings.' },
              { type: 'teaching', questionText: '⚡ Logic: Read a char. Then read following digits to calculate the repeat count N. Print char N times.', codeSnippet: 'while(s[i] != \'\\0\') {\n  char c = s[i++];\n  int num = 0;\n  while(isdigit(s[i])) num = num*10 + (s[i++] - \'0\');\n  while(num--) printf("%c", c);\n}' },
              { type: 'teaching', questionText: 'Edge Case: Multi-digit counts like a10. If you only read one digit, a10 becomes a followed by 10 (which is wrong).' },
              { type: 'teaching', questionText: 'Complexity: O(Length of Output) for time, O(1) for space if printing directly.' },
              { type: 'teaching', questionText: '💡 Use `isdigit()` from `ctype.h` for cleaner code.' },
              { type: 'multiple_choice', questionText: 'What does "a10b1" translate to?', options: ['aaaaaaaaaabb', 'ab10', 'a followed by 10'], correctAnswer: 'aaaaaaaaaabb' },
              { type: 'match_following', questionText: 'Match ASCII values!', pairs: [
                {key: "'0'", value: '48'}, 
                {key: "'A'", value: '65'}, 
                {key: "'a'", value: '97'}
              ] },
              { type: 'programming_board', questionText: 'Parse multi-digit number!', codeSnippet: 'while(isdigit(s[i])) {\n  num = num * 10 + (s[i] - ___);\n  i++;\n}', correctAnswer: "'0'" },
              { type: 'multiple_choice', questionText: 'If the input is "a1b2c3", what is its length after expansion?', options: ['6', '7', '1+2+3=6'], correctAnswer: '6' },
              { type: 'multiple_choice', questionText: 'Does `s[i] - \'0\'` convert a digit char to its integer value?', options: ['Yes', 'No', 'Only for 0 and 1'], correctAnswer: 'Yes' }
            ] 
          }
        ]
      }
    ]
  },
  {
    _id: '69d21614ecc85515a80633b0',
    name: 'Recursion',
    icon: '🌀',
    description: 'Master call stacks for advanced problem solving.',
    sections: [
      { 
        _id: '69d21614ecc85515a80633b1', 
        title: 'Recursive Patterns', 
        units: [
          { 
            _id: '69d21614ecc85515a80633b2', 
            title: 'Permutations', 
            desc: 'Generate all arrangements of a string.', 
            isUnlocked: true, 
            xp: 30, 
            lessons: [
              { type: 'teaching', questionText: '🌀 Recursion is the soul of Backtracking. To find all permutations of "ABC", we swap A with itself, then A with B, then A with C, and recurse for the rest.' },
              { type: 'teaching', questionText: 'Logic: \n1. Swap the current index with every index after it.\n2. Recurse for the next index.\n3. Backtrack (Swap back) to restore the string for the next branch.', codeSnippet: 'void solve(char *s, int l, int r) {\n  if(l == r) printf("%s", s);\n  else {\n    for(int i=l; i<=r; i++) {\n      swap(s+l, s+i);\n      solve(s, l+1, r);\n      swap(s+l, s+i);\n    }\n  }\n}' },
              { type: 'teaching', questionText: '⚡ Total permutations for N unique items: N! (factorial). For "ABC", N=3, so 3! = 6.' },
              { type: 'teaching', questionText: '⚙️ Time Complexity: O(N * N!) - N! leaves, each taking O(N) to print.' },
              { type: 'teaching', questionText: 'Backtracking is essentially "Undo-ing" your state change so you can try a different path.' },
              { type: 'multiple_choice', questionText: 'How many permutations does "Zoho" have?', options: ['4', '12', '24', '10'], correctAnswer: '24' },
              { type: 'match_following', questionText: 'Match Complexity!', pairs: [
                {key: 'Factorial', value: 'Permutations'}, 
                {key: 'Exponential', value: 'Subsets'}, 
                {key: 'Polynomial', value: 'Nested Loops'}
              ] },
              { type: 'programming_board', questionText: 'Backtrack the swap!', codeSnippet: 'for(int i=l; i<=r; i++) {\n  swap(s+l, s+i);\n  permute(s, l+1, r);\n  ___(s+l, s+i);\n}', correctAnswer: 'swap' },
              { type: 'multiple_choice', questionText: 'Base case for permutation logic?', options: ['l == r', 's[l] == \'\\0\'', 'i > n'], correctAnswer: 'l == r' },
              { type: 'multiple_choice', questionText: 'Can you solve this without backtracking?', options: ['No', 'Yes, with extra space', 'Only for numbers'], correctAnswer: 'Yes, with extra space' }
            ] 
          }
        ]
      }
    ]
  }
];

if (require.main === module) {
  mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/pico_dsa')
  .then(async () => {
    console.log('Pushing Updated 10-Page Curriculum (Zoho Difficulty)...');
    await Subject.deleteMany({});
    await Subject.insertMany(subjects);
    console.log('✅ Success! Curriculum expanded to 10 pages per unit.');
    process.exit(0);
  })
  .catch(err => { console.error(err.message); process.exit(1); });
}

module.exports = subjects;
