const stage3_part1 = [
  {
    order: 41,
    title: 'The Sliding Window Peak',
    desc: 'Finding the maximum element in every sliding window of size K.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Panoramic View! In a stream of birds [1, 3, -1, -3, 5, 3, 6, 7] and window K=3, what is the loudest bird in every 3-bird snapshot? 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Use a DEQUE of indices! Maintain it in decreasing order. When a new bird arrives, pop smaller birds from the back. When a bird falls out of the window, pop from the front! 🦜"', codeSnippet: 'while(!dq.empty() && nums[dq.back()] <= nums[i]) dq.pop_back();\ndq.push_back(i);\nif(dq.front() == i - k) dq.pop_front();\nif(i >= k - 1) res.push_back(nums[dq.front()]);' },
      { type: 'multiple_choice', questionText: 'Complexity of Sliding Window Maximum for N elements?', options: ['O(N)', 'O(N * K)', 'O(N log N)'], correctAnswer: 'O(N)' },
      { type: 'match_following', questionText: 'Match Deque rules!', pairs: [{key: 'Pop Back', value: 'Remove smaller'}, {key: 'Pop Front', value: 'Remove out-of-bounds'}, {key: 'Front', value: 'Current Max'}] },
      { type: 'programming_board', questionText: 'Condition for the front bird to fall out of window.', codeSnippet: 'if (dq.front() == i ___ k) dq.pop_front();', correctAnswer: '-' },
      { type: 'teaching', questionText: '🦜 Pico: "O(N) time because each bird enters and leaves the deque exactly once. The deque keeps only the potential kings of future windows! 🦜"' },
      { type: 'multiple_choice', questionText: 'Result for [1, 3, 1, 2, 0, 5], K=3?', options: ['[3, 3, 2, 5]', '[3, 3, 5, 5]', '[1, 3, 5]'], correctAnswer: '[3, 3, 2, 5]' },
      { type: 'code_fill_in', questionText: 'Store the current window maximum.', codeSnippet: 'res.push_back(nums[dq.___()]);', correctAnswer: 'front' },
      { type: 'teaching', questionText: '🦜 Pico: "Always watching the strongest! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I the window peak?"', options: ['SQUAWK YES!', 'No.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 42,
    title: 'The Celebrity Trap',
    desc: 'Finding the celebrity who knows no one but everyone knows them.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Social Hierarchy! A celebrity knows NO other birds. But EVERY other bird knows the celebrity. Can you find them in a party of N? 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Use a Stack! Push everyone. Pop two (A, B). If A knows B, A is not a celebrity (Pop A). Else B is not a celebrity (Pop B). Push the potential until one bird remains! 🦜"', codeSnippet: 'while(s.size() > 1) {\n  int a = s.pop(); int b = s.pop();\n  if(knows(a, b)) s.push(b);\n  else s.push(a);\n}' },
      { type: 'multiple_choice', questionText: 'Time complexity to find the celebrity?', options: ['O(N)', 'O(N^2)', 'O(1)'], correctAnswer: 'O(N)' },
      { type: 'match_following', questionText: 'Match Celebrity Logic!', pairs: [{key: 'A knows B', value: 'A cannot be celebrity'}, {key: 'A doesn\'t know B', value: 'B cannot be celebrity'}, {key: 'Verification', value: 'Final check of candidate'}] },
      { type: 'programming_board', questionText: 'Condition for A to potentially be the celebrity.', codeSnippet: 'if (!knows(a, b)) s.___ (a);', correctAnswer: 'push' },
      { type: 'teaching', questionText: '🦜 Pico: "Don\'t forget the final check: the candidate must NOT know anyone, and everyone else MUST know the candidate! 🦜"' },
      { type: 'multiple_choice', questionText: 'If no bird satisfies the conditions, the result is?', options: ['-1', 'Random bird', '0'], correctAnswer: '-1' },
      { type: 'code_fill_in', questionText: 'Verify the candidate knows no one.', codeSnippet: 'for(int i=0; i<n; i++) if(i!=c && knows(c, i)) return ___;', correctAnswer: '-1' },
      { type: 'teaching', questionText: '🦜 Pico: "Eyes on the crown! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I a celebrity?"', options: ['The world knows me!', 'No.', '0'], correctAnswer: 'The world knows me!' }
    ]
  },
  {
    order: 43,
    title: 'Nested List Iterator',
    desc: 'Flattening an iterator of nested lists like [[1,1],2,[1,1]].',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Nested Eggs! You have a list that can contain integers OR more lists. You need to iterate through all integers in order. 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Use a Stack of the lists! When `hasNext()` is called, look at the top item. If it\'s a list, pop it and push its contents BACKWARD into the stack! 🦜"', codeSnippet: 'while(!s.empty()) {\n  NestedInteger ni = s.top();\n  if(ni.isInteger()) return true;\n  s.pop();\n  for(int i=ni.getList().size()-1; i>=0; i--) s.push(ni.getList()[i]);\n}' },
      { type: 'multiple_choice', questionText: 'Why push elements backward into the stack?', options: ['To maintain FIFO order in LIFO', 'To save space', 'Pico rule'], correctAnswer: 'To maintain FIFO order in LIFO' },
      { type: 'match_following', questionText: 'Match Iterator methods!', pairs: [{key: 'hasNext()', value: 'Flatten stack top'}, {key: 'next()', value: 'Return top integer'}, {key: 'isInteger()', value: 'Type check'}] },
      { type: 'programming_board', questionText: 'Check if top is ready to be returned.', codeSnippet: 'if (s.top().___()) return true;', correctAnswer: 'isInteger' },
      { type: 'teaching', questionText: '🦜 Pico: "O(1) average for next(). The stack handles the depth for you, like a bird descending into nested nests! 🦜"' },
      { type: 'multiple_choice', questionText: 'What if a sub-list is empty?', options: ['hasNext() ignores it and keeps popping', 'Error', 'Return NULL'], correctAnswer: 'hasNext() ignores it and keeps popping' },
      { type: 'code_fill_in', questionText: 'Push sub-elements in reverse.', codeSnippet: 'for (int i = list.size() - 1; i ___ 0; i--)', correctAnswer: '>=' },
      { type: 'teaching', questionText: '🦜 Pico: "Depth before everything! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I flattened?"', options: ['SQUAWK YES!', 'No.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 44,
    title: 'Smallest Subsequence',
    desc: 'Hard: Smallest lexicographical subsequence of distinct characters.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Distinct & Smallest! Given "bcabc", finding the lexicographically smallest subsequence that contains every distinct character exactly once. "abc"! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Monotonic Stack + Counts + Presence! If current char `c` is smaller than stack.top AND stack.top appears again later, pop stack! 🦜"', codeSnippet: 'while(!s.empty() && s.top() > c && count[s.top()] > 0) {\n  visited[s.pop()] = false;\n}\ns.push(c); visited[c] = true;' },
      { type: 'multiple_choice', questionText: 'Condition to pop `stack.top`?', options: ['top > current && top occurs again later', 'top < current', 'K > 0'], correctAnswer: 'top > current && top occurs again later' },
      { type: 'match_following', questionText: 'Match Subsequence logic!', pairs: [{key: 'Count Map', value: 'Availability Check'}, {key: 'Visited Set', value: 'Uniqueness Check'}, {key: 'Stack', value: 'The Result'}] },
      { type: 'programming_board', questionText: 'Check if the bird is already in our result stack.', codeSnippet: 'if (___[c]) continue;', correctAnswer: 'visited' },
      { type: 'teaching', questionText: '🦜 Pico: "O(N) time and space. This is a very popular elite challenge. It tests greedy logic with monotonic stack! 🦜"' },
      { type: 'multiple_choice', questionText: 'Result of "cbacdcbc"?', options: ['"acdb"', '"abcd"', '"badc"'], correctAnswer: '"acdb"' },
      { type: 'code_fill_in', questionText: 'Decrement char frequency.', codeSnippet: 'count[c]___;', correctAnswer: '--' },
      { type: 'teaching', questionText: '🦜 Pico: "Elegant selection! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I distinct?"', options: ['One of a kind!', 'No.', '0'], correctAnswer: 'One of a kind!' }
    ]
  },
  {
    order: 45,
    title: 'Rainwater II (PQ-Stack)',
    desc: 'Introduction to 2D water trapping logic.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "3D Collector! What if the buildings are in a grid? Water is trapped in bowls formed by city walls! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Use a Min-Priority Queue for the border birds. Pick the shortest wall, check its neighbors. If neighbor < wall, it traps water! 🦜"', codeSnippet: 'pq.push({x, y, h});\nwhile(!pq.empty()) {\n  curr = pq.pop();\n  for(neighbor : curr) {\n    ans += max(0, curr.h - neighbor.h);\n    pq.push({nx, ny, max(curr.h, neighbor.h)});\n  }\n}' },
      { type: 'multiple_choice', questionText: 'Complexity of 3D Rain Water Trapping?', options: ['O(R * C * log(R+C))', 'O(R * C)', 'O(1)'], correctAnswer: 'O(R * C * log(R+C))' },
      { type: 'match_following', questionText: 'Match 2D Rain steps!', pairs: [{key: 'Boundary', value: 'Initial PQ birds'}, {key: 'Min-PQ', value: 'Flood-fill start'}, {key: 'Max(curr, neigh)', value: 'Limit for neighbor'}] },
      { type: 'programming_board', questionText: 'Trapped water amount for neighbor `nh`.', codeSnippet: 'ans += max(0, currHeight ___ nh);', correctAnswer: '-' },
      { type: 'teaching', questionText: '🦜 Pico: "This combines PQ and BFS logic. Elite birds see the whole landscape from above! 🦜"' },
      { type: 'multiple_choice', questionText: 'Why use a Min-Heap?', options: ['Water flows from the lowest boundary point', 'Water flows to the highest', 'Pico likes heaps'], correctAnswer: 'Water flows from the lowest boundary point' },
      { type: 'code_fill_in', questionText: 'Push higher wall to heap.', codeSnippet: 'pq.push({nx, ny, ___(h, neighbor.h)});', correctAnswer: 'max' },
      { type: 'teaching', questionText: '🦜 Pico: "City of reservoirs! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I submerged?"', options: ['Deep in logic!', 'No.', '0'], correctAnswer: 'Deep in logic!' }
    ]
  },
  {
    order: 46,
    title: 'Longest Valid Parens (O(N))',
    desc: 'Finding the length of the longest valid parentheses substring.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Longest Harmony! In ")()())", the longest valid part is "()()", length 4. 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Use a Stack for INDICES! Push -1 as a base. When you see `(`, push its index. When `)`, pop. If stack is empty, push current index. Else, length is `current - stack.top`! 🦜"', codeSnippet: 'if(s[i] == \'(\') st.push(i);\nelse {\n  st.pop();\n  if(st.empty()) st.push(i);\n  else maxLength = max(maxLength, i - st.top());\n}' },
      { type: 'multiple_choice', questionText: 'Complexity of finding Longest Valid Parentheses?', options: ['O(N)', 'O(N^2)', 'O(1)'], correctAnswer: 'O(N)' },
      { type: 'match_following', questionText: 'Match Length Logic!', pairs: [{key: '-1', value: 'The sentinel'}, {key: '( Index', value: 'Potential start'}, {key: 'i - top', value: 'Current length'}] },
      { type: 'programming_board', questionText: 'Initial sentinel for calculating length.', codeSnippet: 'st.push(___);', correctAnswer: '-1' },
      { type: 'teaching', questionText: '🦜 Pico: "O(N) time and space. The stack remembers exactly where the last invalid bird was, so we can measure the distance to the current one! 🦜"' },
      { type: 'multiple_choice', questionText: 'Result for "()(())"?', options: ['6', '4', '2'], correctAnswer: '6' },
      { type: 'code_fill_in', questionText: 'Pop for closing bracket.', codeSnippet: 'st.___();', correctAnswer: 'pop' },
      { type: 'teaching', questionText: '🦜 Pico: "Harmonic length! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I the longest?"', options: ['SQUAWK YES!', 'No.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 47,
    title: 'Design a Basic Calculator',
    desc: 'Evaluating expressions with +, -, (, and ).',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Math God! Handle "1 + (4 + 5 + 2) - 3". Plus/Minus and Parentheses! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "One stack + Sign + CurrentValue. When you see `(`, push current result and sign. When `)`, calculate result and pop/add! 🦜"', codeSnippet: 'if(c == \'(\') { st.push(res); st.push(sign); res = 0; sign = 1; }\nelse if(c == \')\') { res = res * st.pop() + st.pop(); }' },
      { type: 'multiple_choice', questionText: 'Why do we push the sign before the result in the stack?', options: ['To apply to the whole group result', 'To save space', 'Pico rule'], correctAnswer: 'To apply to the whole group result' },
      { type: 'match_following', questionText: 'Match Calculator pieces!', pairs: [{key: 'Result', value: 'Running total'}, {key: 'Sign', value: '+1 or -1'}, {key: 'Stack', value: 'Parentheses context'}] },
      { type: 'programming_board', questionText: 'Apply sign to group result after `)`.', codeSnippet: 'res = res * st.pop() + ___;', correctAnswer: 'st.pop()' },
      { type: 'teaching', questionText: '🦜 Pico: "O(N) time. The stack effectively pauses the current math and starts a sub-calculation in the nest! 🦜"' },
      { type: 'multiple_choice', questionText: 'Result of " 2-1 + 2 "?', options: ['3', '1', '0'], correctAnswer: '3' },
      { type: 'code_fill_in', questionText: 'Toggle sign for subtraction.', codeSnippet: 'if (c == \'-\') sign = ___;', correctAnswer: '-1' },
      { type: 'teaching', questionText: '🦜 Pico: "Master math! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "What is my result?"', options: ['Elite precision!', 'No.', '0'], correctAnswer: 'Elite precision!' }
    ]
  },
  {
    order: 48,
    title: 'Decode String II',
    desc: 'Advanced: Decoding nested strings with complex multipliers.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Elite Coding! "2[m3[p]]" expands to "mpppmppp". Depth is everything! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "The dual-stack method from Unit 35 scales infinitely. Just keep track of the multipliers and the previous substrings. 🦜"', codeSnippet: 'while (isdigit(s[i])) num = num * 10 + (s[i++] - \'0\');\nif (s[i] == \'[\') { numStack.push(num); strStack.push(res); res = ""; num = 0; }' },
      { type: 'multiple_choice', questionText: 'Complexity for "100[a]"?', options: ['O(Total_Length)', 'O(100)', 'O(N)'], correctAnswer: 'O(Total_Length)' },
      { type: 'match_following', questionText: 'Match Advanced Decode!', pairs: [{key: 'StringStack', value: 'Ancestor strings'}, {key: 'NumStack', value: 'Repeat factors'}, {key: 'StringBuilder', value: 'Result efficiency'}] },
      { type: 'programming_board', questionText: 'Apply multi-digit multiplier.', codeSnippet: 'num = num * 10 + (c - ___);', correctAnswer: "'0'" },
      { type: 'teaching', questionText: '🦜 Pico: "If the result is massive, use a StringBuilder in Java or append all to a list in Python to avoid O(N^2) string copying! 🦜"' },
      { type: 'multiple_choice', questionText: 'Decoded "2[a]2[b]"?', options: ['"aabb"', '"abab"', '"ab"'], correctAnswer: '"aabb"' },
      { type: 'code_fill_in', questionText: 'Multiply inner string.', codeSnippet: 'while (k-- > 0) temp.___ (curr);', correctAnswer: 'append' },
      { type: 'teaching', questionText: '🦜 Pico: "Expansion total! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Did I expand?"', options: ['Growth hacking!', 'No.', '0'], correctAnswer: 'Growth hacking!' }
    ]
  },
  {
    order: 49,
    title: 'Increment Stack O(1)',
    desc: 'Designing a stack with an increment(k, val) operation in O(1).',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Fast Increases! Increment the bottom K elements by `val`, all in constant time! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Lazy Evaluation! Store the increments in a separate array/stack. When you POP, pass the increment down to the next bird! 🦜"', codeSnippet: 'void push(int x) { s.push(x); inc.push(0); }\nint pop() {\n  int i = s.size()-1;\n  if(i > 0) inc[i-1] += inc[i];\n  return s.pop() + inc[i];\n}\nvoid increment(int k, int v) { inc[min(k-1, n-1)] += v; }' },
      { type: 'multiple_choice', questionText: 'Complexity of increment(k, val)?', options: ['O(1)', 'O(K)', 'O(N)'], correctAnswer: 'O(1)' },
      { type: 'match_following', questionText: 'Match Increment logic!', pairs: [{key: 'Lazy Add', value: 'Store at index K-1'}, {key: 'Pop', value: 'Propagate Down'}, {key: 'Wait', value: 'Evaluation on exit'}] },
      { type: 'programming_board', questionText: 'Propagate increment to the bird below on pop.', codeSnippet: 'if (i > 0) add[i-1] ___ add[i];', correctAnswer: '+=' },
      { type: 'teaching', questionText: '🦜 Pico: "This is a God-mode optimization. By not actually updating all K birds until they need to fly (pop), you save massive time! 🦜"' },
      { type: 'multiple_choice', questionText: 'Storage needed for the lazy array?', options: ['O(N)', 'O(1)', 'O(K)'], correctAnswer: 'O(N)' },
      { type: 'code_fill_in', questionText: 'Target the K-th bird for increment.', codeSnippet: 'inc[min(k, size) - 1] += ___ ;', correctAnswer: 'val' },
      { type: 'teaching', questionText: '🦜 Pico: "Patient power! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I lazy?"', options: ['Optimized lazy!', 'No.', '0'], correctAnswer: 'Optimized lazy!' }
    ]
  },
  {
    order: 50,
    title: 'Elite Master Checkpoint',
    desc: 'Reflecting on the God-Mode Stage.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "ELITE STAGE HALFWAY! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Sliding Window Max, Celebrities, Nested Iterators, and O(1) Increments. Your linear logic is unstoppable! 🦜"' },
      { type: 'multiple_choice', questionText: 'Sliding Window Max complexity?', options: ['O(N)', 'O(N log K)'], correctAnswer: 'O(N)' },
      { type: 'multiple_choice', questionText: 'Celebrity search complexity?', options: ['O(N)', 'O(N^2)'], correctAnswer: 'O(N)' },
      { type: 'multiple_choice', questionText: 'Longest Valid Parens sentinel?', options: ['-1', '0'], correctAnswer: '-1' },
      { type: 'multiple_choice', questionText: '3D Rain Water heap?', options: ['Min-Heap', 'Max-Heap'], correctAnswer: 'Min-Heap' },
      { type: 'multiple_choice', questionText: 'Increment stack lazy propagation?', options: ['O(1)', 'O(N)'], correctAnswer: 'O(1)' },
      { type: 'match_following', questionText: 'Master Pivot Match!', pairs: [{key: 'Monotonic', value: 'Mastered!'}, {key: 'Lazy', value: 'Optimized!'}, {key: 'Pico', value: 'Speechless!'}] },
      { type: 'teaching', questionText: '🦜 Pico: "Final 10 units of Stacks & Queues: XOR Stacks, Constrained Sums, and the Ultimate Graduation! SQUAWK! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Are you ready for the final stretch?"', options: ['BEYOND AND UP!', 'Wait...', '0'], correctAnswer: 'BEYOND AND UP!' }
    ]
  }
];

module.exports = stage3_part1;
