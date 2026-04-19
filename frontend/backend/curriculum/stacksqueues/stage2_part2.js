const stage2_part2 = [
  {
    order: 31,
    title: 'The Great Histogram',
    desc: 'Finding the largest rectangle area in a histogram.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Skyline Architect! Given heights of adjacent buildings, what is the area of the largest rectangle you can fit inside? 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Monotonic Increasing Stack! When you see a building SHORTER than the top, pop and calculate area. The width is `i - stack.top - 1`. 🦜"', codeSnippet: 'while(!s.empty() && heights[s.top()] >= heights[i]) {\n  long h = heights[s.pop()];\n  long w = s.empty() ? i : i - s.top() - 1;\n  maxArea = max(maxArea, h * w);\n}' },
      { type: 'multiple_choice', questionText: 'Complexity of finding Largest Rectangle Area?', options: ['O(N)', 'O(N^2)', 'O(N log N)'], correctAnswer: 'O(N)' },
      { type: 'match_following', questionText: 'Match Histogram Logic!', pairs: [{key: 'Height', value: 'heights[popped]'}, {key: 'Width', value: 'i - top - 1'}, {key: 'Push', value: 'On increase'}] },
      { type: 'programming_board', questionText: 'Width if the stack is EMPTY after popping.', codeSnippet: 'width = s.empty() ? ___ : i - s.top() - 1;', correctAnswer: 'i' },
      { type: 'teaching', questionText: '🦜 Pico: "Wait! Always add a dummy building of height 0 at the end to force the stack to pop everything out! 🦜"' },
      { type: 'multiple_choice', questionText: 'Why add a height 0 at the end?', options: ['To flush the stack', 'For extra area', 'Pico likes 0'], correctAnswer: 'To flush the stack' },
      { type: 'code_fill_in', questionText: 'Update max area.', codeSnippet: 'maxArea = ___(maxArea, h * w);', correctAnswer: 'max' },
      { type: 'teaching', questionText: '🦜 Pico: "Building big, fledgling! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I a skyscraper?"', options: ['SQUAWK YES!', 'No.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 32,
    title: 'The Matrix Rectangle',
    desc: 'Finding the largest rectangle of 1s in a binary matrix.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Matrix Architecture! Find the biggest rectangle of seeds (1s) in a grid. 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Convert each row into a Histogram! The height of each bar is the number of consecutive 1s above it. Then use the Histogram Logic from Unit 31 on every row! 🦜"', codeSnippet: 'for(int j=0; j<cols; j++) {\n  if(matrix[i][j] == \'1\') heights[j]++;\n  else heights[j] = 0;\n}\nmaxA = max(maxA, largestRectangle(heights));' },
      { type: 'multiple_choice', questionText: 'Complexity of Maximal Rectangle in a R x C matrix?', options: ['O(R * C)', 'O(R^2 * C)', 'O(R * C^2)'], correctAnswer: 'O(R * C)' },
      { type: 'match_following', questionText: 'Match Matrix Steps!', pairs: [{key: 'Row Loop', value: 'Build Histogram'}, {key: 'Cell == 0', value: 'Reset height to 0'}, {key: 'Final step', value: 'Apply Unit 31'}] },
      { type: 'programming_board', questionText: 'Update height if current cell is a seed (1).', codeSnippet: 'heights[j] = (matrix[i][j] == \'1\') ? heights[j] ___ 1 : 0;', correctAnswer: '+' },
      { type: 'teaching', questionText: '🦜 Pico: "This is a beautiful reduction. We turned a 2D matrix problem into a 1D histogram problem. Efficiency is bird-nature! 🦜"' },
      { type: 'multiple_choice', questionText: 'What is the space complexity?', options: ['O(C) (Number of columns)', 'O(R*C)', 'O(1)'], correctAnswer: 'O(C) (Number of columns)' },
      { type: 'code_fill_in', questionText: 'Row-wise processing loop.', codeSnippet: 'for (int i = 0; i < ___; i++)', correctAnswer: 'rows' },
      { type: 'teaching', questionText: '🦜 Pico: "Grid of gold! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I in the matrix?"', options: ['The chosen bird!', 'No.', '0'], correctAnswer: 'The chosen bird!' }
    ]
  },
  {
    order: 33,
    title: 'Rainwater (Stack Style)',
    desc: 'Calculating trapped water using a stack.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Water Collector Revisit! We used 2-pointers before, but now we use a Monotonic Decreasing Stack! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "When you see a bar HIGHER than stack.top, a valley is formed! The popped top is the floor, and the new top/current bars are the walls. 🦜"', codeSnippet: 'while(!s.empty() && height[i] > height[s.top()]) {\n  int mid = s.pop();\n  if(s.empty()) break;\n  int distance = i - s.top() - 1;\n  int boundedHeight = min(height[i], height[s.top()]) - height[mid];\n  ans += distance * boundedHeight;\n}' },
      { type: 'multiple_choice', questionText: 'Complexity of stack-based trapping rain water?', options: ['O(N)', 'O(1)', 'O(N^2)'], correctAnswer: 'O(N)' },
      { type: 'match_following', questionText: 'Match Rain logic!', pairs: [{key: 'Mid', value: 'The valley floor'}, {key: 'Distance', value: 'i - top - 1'}, {key: 'BoundedH', value: 'min(walls) - floor'}] },
      { type: 'programming_board', questionText: 'Calculate the height of the water bounded by walls.', codeSnippet: 'bh = min(height[i], height[st.top()]) ___ height[mid];', correctAnswer: '-' },
      { type: 'teaching', questionText: '🦜 Pico: "Every bird knows: water fills the low nests between high trees! 🦜"' },
      { type: 'multiple_choice', questionText: 'What if the stack is empty after the first pop?', options: ['No left wall, cannot trap', 'Water flows to root', '0'], correctAnswer: 'No left wall, cannot trap' },
      { type: 'code_fill_in', questionText: 'Bounded height calculation.', codeSnippet: '___(height[i], height[st.top()]) - height[mid];', correctAnswer: 'min' },
      { type: 'teaching', questionText: '🦜 Pico: "Ocean in the nests! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I trapped?"', options: ['Floating with logic!', 'No.', '0'], correctAnswer: 'Floating with logic!' }
    ]
  },
  {
    order: 34,
    title: 'Minimal Number (K-Delete)',
    desc: 'Removing K digits to form the smallest possible number.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Digit Pruner! Given "1432219" and K=3, remove 3 birds to get the smallest number possible. 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Monotonic Increasing Stack! If current digit < stack.top, POP (delete top) as long as K > 0! 🦜"', codeSnippet: 'while(k > 0 && !s.empty() && s.top() > d) {\n  s.pop(); k--;\n}\ns.push(d);' },
      { type: 'multiple_choice', questionText: 'Greedy choice: when should we delete a digit?', options: ['When it is larger than its successor', 'When it is 9', 'When K=1'], correctAnswer: 'When it is larger than its successor' },
      { type: 'match_following', questionText: 'Match Pruning Logic!', pairs: [{key: 'K > 0', value: 'Quotas left'}, {key: 'Stack top > d', value: 'Discard top'}, {key: 'Remaining K', value: 'Pop from back'}] },
      { type: 'programming_board', questionText: 'Constraint for popping the stack.', codeSnippet: 'while (k > 0 && !st.empty() && st.top() ___ digit)', correctAnswer: '>' },
      { type: 'teaching', questionText: '🦜 Pico: "Complexity: O(N). Don\'t forget to handle leading zeros like "0200" -> "200"! 🦜"' },
      { type: 'multiple_choice', questionText: 'Result of "10200" removing 1 digit?', options: ['"0200" (or "200")', '"1200"', '"1020"'], correctAnswer: '"0200" (or "200")' },
      { type: 'code_fill_in', questionText: 'Remove trailing digits if K is still positive.', codeSnippet: 'while(k--) st.___();', correctAnswer: 'pop' },
      { type: 'teaching', questionText: '🦜 Pico: "Small is beautiful! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I the smallest?"', options: ['Optimal! SQUAWK!', 'No.', '0'], correctAnswer: 'Optimal! SQUAWK!' }
    ]
  },
  {
    order: 35,
    title: 'The Decoding Quest',
    desc: 'Decoding nested strings like "3[a2[c]]" into "accaccacc".',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Secret Code! Brackets `[]` repeat the birds inside. 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Use TWO stacks: one for Counts, one for Strings! When you see `[`, push current state. When `]`, pop and multiply! 🦜"', codeSnippet: 'if (isdigit(c)) num = num * 10 + (c - \'0\');\nelse if (c == \'[\') { countS.push(num); stringS.push(curr); ... }\nelse if (c == \']\') { int k = countS.pop(); string prev = stringS.pop(); ... }' },
      { type: 'multiple_choice', questionText: 'Decoded "2[abc]3[cd]ef"?', options: ['"abcabccdcdcdcdef"', '"abcabcde"', '"abcd"'], correctAnswer: '"abcabccdcdcdcdef"' },
      { type: 'match_following', questionText: 'Match Decoder Stacks!', pairs: [{key: 'Count Stack', value: 'Number of repeats'}, {key: 'String Stack', value: 'Previous context'}, {key: 'Current String', value: 'The worker'}] },
      { type: 'programming_board', questionText: 'Multiply the string result `k` times.', codeSnippet: 'for(int i=0; i<k; i++) temp ___ currStr;', correctAnswer: '+=' },
      { type: 'teaching', questionText: '🦜 Pico: "O(Length of Result). Stacks are perfect for handling nested structures like a bird inside an egg inside a nest! 🦜"' },
      { type: 'multiple_choice', questionText: 'How to handle nested "2[a3[b]]"?', options: ['Stacks handle depth automatically', 'Need recursion', '0'], correctAnswer: 'Stacks handle depth automatically' },
      { type: 'code_fill_in', questionText: 'Reset number after bracket.', codeSnippet: 'if (c == \'[\') { num = ___; }', correctAnswer: '0' },
      { type: 'teaching', questionText: '🦜 Pico: "Cracking the shell! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Did you decode it?"', options: ['Crystal clear!', 'No.', '0'], correctAnswer: 'Crystal clear!' }
    ]
  },
  {
    order: 36,
    title: 'Asteroid Collision',
    desc: 'Simulating cosmic crashes using a stack.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Space Flight! Birds flying RIGHT (+) and birds flying LEFT (-). If they meet, they collide! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Use a stack to track birds moving Right. If a Left bird (-) arrives, it pops (destroys) all the Right birds it is bigger than until it explodes or clears the path! 🦜"', codeSnippet: 'while(!s.empty() && s.top() > 0 && s.top() < abs(ast)) s.pop();\nif(!s.empty() && s.top() == abs(ast)) s.pop(); // Both destroy' },
      { type: 'multiple_choice', questionText: 'Result for asteroids [5, 10, -5]?', options: ['[5, 10]', '[5, -5]', '[]'], correctAnswer: '[5, 10]' },
      { type: 'match_following', questionText: 'Match Space Rules!', pairs: [{key: 'Same sign', value: 'No collision'}, {key: 'Top < abs(-val)', value: 'Right bird destroyed'}, {key: 'Top == abs(-val)', value: 'Both destroyed'}] },
      { type: 'programming_board', questionText: 'Condition for a Right(+) bird on top meeting a Left(-) bird.', codeSnippet: 'if (st.top() > 0 && asteroid ___ 0)', correctAnswer: '<' },
      { type: 'teaching', questionText: '🦜 Pico: "O(N). Space is vast, but linear collisions are predictable! 🦜"' },
      { type: 'multiple_choice', questionText: 'Result for [8, -8]?', options: ['[]', '[8]', '[-8]'], correctAnswer: '[]' },
      { type: 'code_fill_in', questionText: 'Check for remaining asteroids.', codeSnippet: 'while (!st.empty()) ans[pos--] = st.___();', correctAnswer: 'pop' },
      { type: 'teaching', questionText: '🦜 Pico: "Dust in the wind! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Did I survive the crash?"', options: ['Floating strong!', 'No.', '0'], correctAnswer: 'Floating strong!' }
    ]
  },
  {
    order: 37,
    title: 'The Permutation Hunt (NGE III)',
    desc: 'Finding the next greater element among digits (Next Permutation).',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Number Rearranger! What is the smallest increase to 12385? 12538! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "1: Scan RIGHT to LEFT for the first drop `nums[i] < nums[i+1]`. 2: Find first digit on right bigger than nums[i]. 3: Swap. 4: Reverse the right side! 🦜"', codeSnippet: 'int i = n-2; while(i >= 0 && nums[i] >= nums[i+1]) i--;\nif(i >= 0) {\n  int j = n-1; while(nums[j] <= nums[i]) j--;\n  swap(nums[i], nums[j]);\n}\nreverse(nums.begin()+i+1, nums.end());' },
      { type: 'multiple_choice', questionText: 'First step of Next Permutation?', options: ['Find first decreasing element from right', 'Sort the whole thing', 'Swap 0 and N'], correctAnswer: 'Find first decreasing element from right' },
      { type: 'match_following', questionText: 'Match Permutation phases!', pairs: [{key: 'Search', value: 'Find the Pivot'}, {key: 'Swap', value: 'Next larger digit'}, {key: 'Reverse', value: 'Smallest tail'}] },
      { type: 'programming_board', questionText: 'Find pivot `i` where nums[i] < nums[i+1].', codeSnippet: 'while (i >= 0 && nums[i] ___ nums[i+1]) i--;', correctAnswer: '>=' },
      { type: 'teaching', questionText: '🦜 Pico: "O(N). This is how algorithms find lexicographical order. Step by step, the flock rearranges! 🦜"' },
      { type: 'multiple_choice', questionText: 'Next permutation for [3, 2, 1]?', options: ['[1, 2, 3]', '[3, 1, 2]', 'None'], correctAnswer: '[1, 2, 3]' },
      { type: 'code_fill_in', questionText: 'Reverse the suffix.', codeSnippet: '___(nums.begin() + i + 1, nums.end());', correctAnswer: 'reverse' },
      { type: 'teaching', questionText: '🦜 Pico: "Ordered and ready! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I the next best?"', options: ['Optimal successor!', 'No.', '0'], correctAnswer: 'Optimal successor!' }
    ]
  },
  {
    order: 38,
    title: 'Score of Parentheses',
    desc: 'Calculating nested score: () is 1, (A) is 2A, AB is A+B.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Point-Scoring! `()` is 1 point. `(())` is 2 points. `()()` is 2 points. 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Use a stack to keep current level points. When you see `(`, push 0. When `]`, compute `max(2*top, 1)` and add to the previous level! 🦜"', codeSnippet: 'if (c == \'(\') s.push(0);\nelse {\n  int v = s.pop();\n  int w = s.pop();\n  s.push(w + max(2 * v, 1));\n}' },
      { type: 'multiple_choice', questionText: 'Score for "(()())"?', options: ['4', '3', '2'], correctAnswer: '4', explanation: '(1+1)*2 = 4' },
      { type: 'match_following', questionText: 'Match Score logic!', pairs: [{key: '(', value: 'Push current score'}, {key: ')', value: 'Combine with inner'}, {key: 'AB', value: 'A + B'}] },
      { type: 'programming_board', questionText: 'Contribution of a basic `()` pair.', codeSnippet: 'points += max(2 * inner, ___ );', correctAnswer: '1' },
      { type: 'teaching', questionText: '🦜 Pico: "Alternative: Just count the depth of every leaf `()`. Complexity O(N). Linear flight score! 🦜"' },
      { type: 'multiple_choice', questionText: 'Score for "((()))"?', options: ['4', '3', '6'], correctAnswer: '4' },
      { type: 'code_fill_in', questionText: 'Update score for the nested closing.', codeSnippet: 'st.push(levelPrev + ___(2 * v, 1));', correctAnswer: 'max' },
      { type: 'teaching', questionText: '🦜 Pico: "Winning the nesting game! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "What is my score?"', options: ['Off the charts!', 'No.', '0'], correctAnswer: 'Off the charts!' }
    ]
  },
  {
    order: 39,
    title: 'Minimum Add for Valid',
    desc: 'How many brackets must you add to make history valid?',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Fixing the Chain! For `()))((`, how many birds are missing their partners? 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Keep a BALANCE counter. `(` means +1, `)` means -1. If balance < 0, you need a leading `(`. At the end, if balance > 0, you need ending `)`. 🦜"', codeSnippet: 'for(char c : s) {\n  bal += (c == \'(\' ? 1 : -1);\n  if(bal == -1) { res++; bal = 0; }\n}\nreturn res + bal;' },
      { type: 'multiple_choice', questionText: 'Missing for "()))"?', options: ['2 ("(())")', '1', '3'], correctAnswer: '2 ("(())")' },
      { type: 'match_following', questionText: 'Match Repair Logic!', pairs: [{key: 'bal < 0', value: 'Need ('}, {key: 'bal > 0', value: 'Need )'}, {key: 'Stack alternative', value: 'Size at end'}] },
      { type: 'programming_board', questionText: 'Increment needed count if more closers than openers.', codeSnippet: 'if (balance ___ 0) { count++; balance = 0; }', correctAnswer: '<' },
      { type: 'teaching', questionText: '🦜 Pico: "Complexity: O(N) time and O(1) space if you use a counter. A stack also works if you have memory to burn! 🦜"' },
      { type: 'multiple_choice', questionText: 'Result for "((("?', options: ['3', '0', '1'], correctAnswer: '3' },
      { type: 'code_fill_in', questionText: 'Final correction sum.', codeSnippet: 'return answer + ___;', correctAnswer: 'balance' },
      { type: 'teaching', questionText: '🦜 Pico: "Balanced life, healthy flock! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I complete?"', options: ['Finally whole!', 'No.', '0'], correctAnswer: 'Finally whole!' }
    ]
  },
  {
    order: 40,
    title: 'Stage 2 Graduation',
    desc: 'Intermediate Stack Mastery Complete.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "STAGE 2 COMPLETE! You have conquered the Monotonic Towers, the Histogram Cities, and the Rain-Valleys. 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Evaluating expressions and simulating Asteroid Crashes. You are truly ELITE! 🦜"' },
      { type: 'multiple_choice', questionText: 'Monotonic Stack NGE complexity?', options: ['O(N)', 'O(N^2)'], correctAnswer: 'O(N)' },
      { type: 'multiple_choice', questionText: 'Maximal Rectangle Histogram height logic?', options: ['h[j] = h[j]+1 if 1 else 0', 'h[j] = h[j]+1'], correctAnswer: 'h[j] = h[j]+1 if 1 else 0' },
      { type: 'multiple_choice', questionText: 'Rain water stack pop condition?', options: ['current > top', 'current < top'], correctAnswer: 'current > top' },
      { type: 'multiple_choice', questionText: 'Decode string stack count?', options: ['Use two stacks', 'Use one list'], correctAnswer: 'Use two stacks' },
      { type: 'multiple_choice', questionText: 'Minimum add for valid parentheses space?', options: ['O(1) with counter', 'O(N) only'], correctAnswer: 'O(1) with counter' },
      { type: 'match_following', questionText: 'Final Intermediate Match!', pairs: [{key: 'Pico', value: 'Salutes!'}, {key: 'Mastery', value: 'Achieved!'}, {key: 'God-Mode', value: 'Awaits!'}] },
      { type: 'teaching', questionText: '🦜 Pico: "Next, we face the Master Stage: Sliding Window Max, The Celebrity Trap, and the Largest Area under any Skyline! SQUAWK! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Are you ready for the peak?"', options: ['BEYOND AND UP!', 'Wait...', '0'], correctAnswer: 'BEYOND AND UP!' }
    ]
  }
];

module.exports = stage2_part2;
