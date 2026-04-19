const stage3_part2 = [
  {
    order: 51,
    title: 'Shortest Subarray Over K',
    desc: 'Shortest subarray with sum at least K (Deque O(N)).',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Tiniest Range! Find the shortest slice of the flock whose total weight is at least K. 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Use Prefix Sums and a DEQUE! Keep indices in the deque such that prefix sums are in increasing order. When `P[i] - P[dq.front()] >= K`, you found a candidate! 🦜"', codeSnippet: 'while(!dq.empty() && P[i] - P[dq.front()] >= k) {\n  ans = min(ans, i - dq.pop_front());\n}\nwhile(!dq.empty() && P[i] <= P[dq.back()]) dq.pop_back();\ndq.push_back(i);' },
      { type: 'multiple_choice', questionText: 'Complexity for Shortest Subarray with Sum >= K?', options: ['O(N)', 'O(N^2)', 'O(N log N)'], correctAnswer: 'O(N)' },
      { type: 'match_following', questionText: 'Match Deque pruning!', pairs: [{key: 'Front Pop', value: 'Check candidate length'}, {key: 'Back Pop', value: 'Maintain Monotonicity'}, {key: 'Prefix Sum', value: 'Linear range weight'}] },
      { type: 'programming_board', questionText: 'Constraint to update answer.', codeSnippet: 'if (p[i] - p[dq.front()] >= k) ans = min(ans, i - ___ );', correctAnswer: 'dq.pop_front()' },
      { type: 'teaching', questionText: '🦜 Pico: "Wait! Why pop the back if `P[i] <= P[dq.back()]`? Because `P[i]` is a better (smaller) prefix sum and it appears LATER, so it\'s always a stronger start for future ranges! 🦜"' },
      { type: 'multiple_choice', questionText: 'Why can\'t we use a simple sliding window here?', options: ['Array might have negative numbers', 'It’s too slow', 'Pico rule'], correctAnswer: 'Array might have negative numbers' },
      { type: 'code_fill_in', questionText: 'Maintain increasing order.', codeSnippet: 'while(!dq.empty() && p[i] ___ p[dq.back()]) dq.pop_back();', correctAnswer: '<=' },
      { type: 'teaching', questionText: '🦜 Pico: "Precision targeting! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I the shortest?"', options: ['Minimalist elite!', 'No.', '0'], correctAnswer: 'Minimalist elite!' }
    ]
  },
  {
    order: 52,
    title: 'Constrained Sum',
    desc: 'Max subsequence sum where no two elements are > K distance apart.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Leaping Bird! Choose a subsequence with the largest sum, but you can never jump more than K nests at a time! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "This is DP with a Deque! `dp[i] = nums[i] + max(0, dp[dq.front()])`. Keep the deque monotonic decreasing to get the current max of the last K DP values! 🦜"', codeSnippet: 'dp[i] = nums[i] + max(0, dq.empty() ? 0 : dp[dq.front()]);\nwhile(!dq.empty() && dp[i] >= dp[dq.back()]) dq.pop_back();\nif(dq.front() == i - k) dq.pop_front();' },
      { type: 'multiple_choice', questionText: 'Complexity of Constrained Subsequence Sum?', options: ['O(N)', 'O(N * K)', 'O(N log K)'], correctAnswer: 'O(N)' },
      { type: 'match_following', questionText: 'Match DP pieces!', pairs: [{key: 'dp[i]', value: 'Best sum ending at i'}, {key: 'dq.front()', value: 'Max of last K results'}, {key: 'max(0, ...)', value: 'Don\'t take negatives'}] },
      { type: 'programming_board', questionText: 'Remove indices that are out of the jump range K.', codeSnippet: 'if (dq.front() == i ___ k) dq.pop_front();', correctAnswer: '-' },
      { type: 'teaching', questionText: '🦜 Pico: "Complexity: O(N). The deque effectively slides the max value forward as you fly through the nests! 🦜"' },
      { type: 'multiple_choice', questionText: 'Time complexity with Deque optimization?', options: ['O(N)', 'O(NK)', 'O(NlogK)'], correctAnswer: 'O(N)' },
      { type: 'code_fill_in', questionText: 'Add current max to current bird.', codeSnippet: 'res = nums[i] + ___(0, dq.empty() ? 0 : dp[dq.front()]);', correctAnswer: 'max' },
      { type: 'teaching', questionText: '🦜 Pico: "Elite leaps! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Did I jump far?"', options: ['K distance mastery!', 'No.', '0'], correctAnswer: 'K distance mastery!' }
    ]
  },
  {
    order: 3,
    title: 'The Super-Stack (XOR)',
    desc: 'Implementing a Stack using an XOR Linked List (Concept).',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Phantom Nest! Can you build a stack that uses 50% less pointer space? 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Just like the XOR list (Unit 51 of LL), a stack only needs to know the XOR of `prev ^ next`. Since stack only moves UP and DOWN, it\'s easy! 🦜"', codeSnippet: 'st->npx = prev ^ NULL;\n// on pop\nprev = curr ^ next;' },
      { type: 'multiple_choice', questionText: 'Why is XOR stack easier than a full XOR list?', options: ['Access is only at one end', 'Less memory', 'Pico likes bits'], correctAnswer: 'Access is only at one end' },
      { type: 'match_following', questionText: 'Match Stack Bits!', pairs: [{key: 'Top', value: 'The Entry'}, {key: 'npx', value: 'prev ^ next'}, {key: 'Pop', value: 'curr ^ next = prev'}] },
      { type: 'programming_board', questionText: 'Calculate previous pointer address.', codeSnippet: 'prev = curr ^ ___;', correctAnswer: 'next' },
      { type: 'teaching', questionText: '🦜 Pico: "In a stack, one side is always NULL at the top, simplifying the math! O(1) space per node for both directions. 🦜"' },
      { type: 'multiple_choice', questionText: 'Is XOR stack faster than standard LL stack?', options: ['No (Same O(1), but math overhead)', 'Yes', 'Pico rule'], correctAnswer: 'No (Same O(1), but math overhead)' },
      { type: 'code_fill_in', questionText: 'Update npx on push.', codeSnippet: 'newNode->npx = ___ ^ nextNode;', correctAnswer: 'prevNode' },
      { type: 'teaching', questionText: '🦜 Pico: "Encoded height! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Can you see my bits?"', options: ['Stealth elite!', 'No.', '0'], correctAnswer: 'Stealth elite!' }
    ]
  },
  {
    order: 4,
    title: 'The 132 Pattern',
    desc: 'Finding if a subsequence i < j < k exists s.t. nums[i] < nums[k] < nums[j].',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Zig-Zag Trio! Find three birds in the line such that the first is smallest, the second is biggest, and the third is in the middle! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Use a Monotonic Stack from RIGHT to LEFT! Keep track of the second largest bird (nums[k]). If you see a bird smaller than it, you found a 132 pattern! 🦜"', codeSnippet: 'for(int i=n-1; i>=0; i--) {\n  if(nums[i] < third) return true;\n  while(!s.empty() && nums[i] > s.top()) third = s.pop();\n  s.push(nums[i]);\n}' },
      { type: 'multiple_choice', questionText: 'Complexity of 132 Pattern search?', options: ['O(N)', 'O(N^2)', 'O(N log N)'], correctAnswer: 'O(N)' },
      { type: 'match_following', questionText: 'Match 132 Roles!', pairs: [{key: 'nums[i]', value: 'The small start'}, {key: 'nums[j]', value: 'The peak (in stack)'}, {key: 'nums[k]', value: 'The third (popped)'}] },
      { type: 'programming_board', questionText: 'Satisfied condition for the 1-3-2 hunt.', codeSnippet: 'if (nums[i] ___ third) return true;', correctAnswer: '<' },
      { type: 'teaching', questionText: '🦜 Pico: "Wait! Scanning backward allows the stack to find the potential 3-2 pair efficiently while we hunt for 1. Complexity: O(N). 🦜"' },
      { type: 'multiple_choice', questionText: 'Result for [3, 1, 4, 2]?', options: ['True (1, 4, 2)', 'False', 'Pico falls'], correctAnswer: 'True (1, 4, 2)' },
      { type: 'code_fill_in', questionText: 'Update the third candidate.', codeSnippet: 'third = st.___(); st.pop();', correctAnswer: 'top' },
      { type: 'teaching', questionText: '🦜 Pico: "Mountain and Valley! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Did I find the curve?"', options: ['SQUAWK YES!', 'No.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 5,
    title: 'Car Fleet',
    desc: 'Calculating fleet formation on a 1D road.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Traffic Jam! Birds at different positions with different speeds. If a fast bird catches a slow one, they form a fleet 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Sort by position (closest to target first). Calculate time to arrival: `(target - pos) / speed`. Use a stack! If current bird takes LESS time than top, it joins the fleet (no extra fleet). 🦜"', codeSnippet: 'sort(cars);\nfor(car c : cars) {\n  double time = (target - c.pos) / c.speed;\n  if(s.empty() || time > s.top()) s.push(time);\n}' },
      { type: 'multiple_choice', questionText: 'Number of car fleets = ?', options: ['Size of the final stack', 'Number of cars', 'Target / Speed'], correctAnswer: 'Size of the final stack' },
      { type: 'match_following', questionText: 'Match Fleet Variables!', pairs: [{key: 'Time', value: '(Target - Pos) / Speed'}, {key: 'Stack', value: 'Fleet Lead times'}, {key: 'Sort', value: 'Process by position'}] },
      { type: 'programming_board', questionText: 'Formation of new fleet if current takes more time.', codeSnippet: 'if (s.empty() || currentTime ___ s.top()) s.push(currentTime);', correctAnswer: '>' },
      { type: 'teaching', questionText: '🦜 Pico: "Complexity: O(N log N) for sorting. The stack then processes them in O(N). Catching up means joining, not passing! 🦜"' },
      { type: 'multiple_choice', questionText: 'If target=10, car at 8 with speed 1 joins car at 5 with speed 1?', options: ['No (Distance remains same)', 'Yes', 'Wait...'], correctAnswer: 'No (Distance remains same)' },
      { type: 'code_fill_in', questionText: 'Calculate time.', codeSnippet: 'double t = (double)(target - pos) / ___;', correctAnswer: 'speed' },
      { type: 'teaching', questionText: '🦜 Pico: "Flying together! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I in a fleet?"', options: ['Part of the group!', 'No.', '0'], correctAnswer: 'Part of the group!' }
    ]
  },
  {
    order: 56,
    title: 'Shortest Unsorted Subarray',
    desc: 'Finding the range [L, R] that must be sorted to sort the whole list.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Disarranged Flock! What is the smallest segment of birds that is out of order? 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Use two monotonic stacks! First pass: find the leftmost bird that was popped by someone smaller. Second pass: find the rightmost bird that was popped by someone bigger! 🦜"', codeSnippet: 'for(int i=0; i<n; i++) {\n  while(!s.empty() && nums[s.top()] > nums[i]) l = min(l, s.pop());\n  s.push(i);\n}' },
      { type: 'multiple_choice', questionText: 'Time Complexity for finding shortest unsorted segment?', options: ['O(N)', 'O(N^2)', 'O(1)'], correctAnswer: 'O(N)' },
      { type: 'match_following', questionText: 'Match Sort Segments!', pairs: [{key: 'Left Bound', value: 'Minimum popped index'}, {key: 'Right Bound', value: 'Maximum popped index'}, {key: 'Result', value: 'Right - Left + 1'}] },
      { type: 'programming_board', questionText: 'Update the left-most unsorted boundary.', codeSnippet: 'left = min(left, st.___());', correctAnswer: 'pop' },
      { type: 'teaching', questionText: '🦜 Pico: "O(N) time and space. The stacks remember precisely where the "sortedness" was violated! 🦜"' },
      { type: 'multiple_choice', questionText: 'Result for [1, 2, 3, 4]?', options: ['0 (Already sorted)', '[0, 3]', '[1, 2]'], correctAnswer: '0 (Already sorted)' },
      { type: 'code_fill_in', questionText: 'Push current bird.', codeSnippet: 'st.___ (i);', correctAnswer: 'push' },
      { type: 'teaching', questionText: '🦜 Pico: "Order in progress! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Is the segment small?"', options: ['Minimalist elite!', 'No.', '0'], correctAnswer: 'Minimalist elite!' }
    ]
  },
  {
    order: 57,
    title: 'The Circular Deque Revisit',
    desc: 'Hard: Efficiently designing a thread-safe Deque (Concept).',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Concurrent Nest! How to let multiple birds add/remove from the deque at the same time? 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Use Locks or Atomic Pointers! Ensure only one bird updates \'Front\' or \'Rear\' at any micro-second! 🦜"', codeSnippet: 'lock();\nrear = (rear + 1) % size;\nunlock();' },
      { type: 'multiple_choice', questionText: 'Why is thread-safety harder for Deques than stacks?', options: ['Two ends mean two points of contention', 'More memory', 'Pico fell off'], correctAnswer: 'Two ends mean two points of contention' },
      { type: 'match_following', questionText: 'Match Concurrency terms!', pairs: [{key: 'Lock', value: 'Exclusive access'}, {key: 'Atomic', value: 'Uninterrupted move'}, {key: 'Race Condition', value: 'Double update error'}] },
      { type: 'programming_board', questionText: 'Unlock the structure after update.', codeSnippet: '___ mutex;', correctAnswer: 'unlock' },
      { type: 'teaching', questionText: '🦜 Pico: "A circular array deque is great, but a Doubly Linked List with individual locks per node is the peak of elite concurrent design! 🦜"' },
      { type: 'multiple_choice', questionText: 'Is a standard C++ queue thread-safe?', options: ['No', 'Yes', 'Usually'], correctAnswer: 'No' },
      { type: 'code_fill_in', questionText: 'Protect the count.', codeSnippet: '___ (mtx); count++;', correctAnswer: 'lock' },
      { type: 'teaching', questionText: '🦜 Pico: "Safe and secure flight! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I thread-safe?"', options: ['SQUAWK YES!', 'No.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 8,
    title: 'Monotonic Queue Revisit',
    desc: 'Advanced: Finding the sum of subarray minimums.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Weight of All Segments! Sum up the minimum value of EVERY possible subarray. 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Contribution logic! For every bird `nums[i]`, how many subarrays is it the minimum? `(i - LeftBound) * (RightBound - i)`. Use Monotonic Stacks to find bounds! 🦜"', codeSnippet: 'long long ans = 0;\nfor(int i=0; i<n; i++) {\n  ans = (ans + (long long)nums[i] * (i - left[i]) * (right[i] - i));\n}' },
      { type: 'multiple_choice', questionText: 'Complexity of finding sum of all subarray minimums?', options: ['O(N)', 'O(N^2)', 'O(N log N)'], correctAnswer: 'O(N)' },
      { type: 'match_following', questionText: 'Match Subarray Min Logic!', pairs: [{key: 'Left[i]', value: 'First smaller on left'}, {key: 'Right[i]', value: 'First smaller on right'}, {key: 'Contribution', value: 'Weight * L * R'}] },
      { type: 'programming_board', questionText: 'The fundamental contribution formula.', codeSnippet: 'total += val * (i - l) * (___ - i);', correctAnswer: 'r' },
      { type: 'teaching', questionText: '🦜 Pico: "O(N) time and space. This is a God-mode math + stack combination. By counting the influence of each bird, you avoid O(N^2) loops! 🦜"' },
      { type: 'multiple_choice', questionText: 'If nums=[3, 1, 2], what is the contribution of 1?', options: ['1 * 2 * 2 = 4', '1', '1 * 1 * 1'], correctAnswer: '1 * 2 * 2 = 4', explanation: '[3,1], [1], [1,2], [3,1,2]' },
      { type: 'code_fill_in', questionText: 'Pop while stack top is larger.', codeSnippet: 'while(!st.empty() && arr[st.top()] ___ arr[i]) st.pop();', correctAnswer: '>' },
      { type: 'teaching', questionText: '🦜 Pico: "The sum of the flock! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I contributing?"', options: ['Every feather counts!', 'No.', '0'], correctAnswer: 'Every feather counts!' }
    ]
  },
  {
    order: 59,
    title: 'The Master Review (Elite)',
    desc: 'Elite Stacks & Queues Review.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "THE ELITE FINALE! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Sliding Windows, Constrained Sums, 132 Patterns, and Subarray Minimums. You have touched the ceiling of linear logic! 🦜"' },
      { type: 'multiple_choice', questionText: 'Sliding Window Max deque order?', options: ['Decreasing', 'Increasing'], correctAnswer: 'Decreasing' },
      { type: 'multiple_choice', questionText: 'Celebrity search time?', options: ['O(N)', 'O(1)'], correctAnswer: 'O(N)' },
      { type: 'multiple_choice', questionText: '132 pattern stack scan?', options: ['Right to Left', 'Left to Right'], correctAnswer: 'Right to Left' },
      { type: 'multiple_choice', questionText: 'Subarray minimum contribution formula?', options: ['L * R', 'L + R'], correctAnswer: 'L * R' },
      { type: 'multiple_choice', questionText: 'XOR stack pointer space?', options: ['O(1)', 'O(N)'], correctAnswer: 'O(1)' },
      { type: 'match_following', questionText: 'Master Final Match!', pairs: [{key: 'Linear', value: 'Conquered!'}, {key: 'Elite', value: 'Unlocked!'}, {key: 'Pico', value: 'Amazed!'}] },
      { type: 'teaching', questionText: '🦜 Pico: "Final unit: The Stacks & Queues Graduation! You are a God of Linear Containers! SQUAWK! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Are you ready to graduate?"', options: ['SQUAWK YES!', 'Wait...', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 60,
    title: 'Stacks & Queues Graduation',
    desc: 'The Subject Complete: God-Mode Master.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "GRADUATION DAY! You have completed all 60 units of the Stacks & Queues Academy. 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "From basic Push/Pop to the complex Deque-DP of constrained sums. You have mastered the linear fortress! 🦜"' },
      { type: 'multiple_choice', questionText: 'Stack vs Queue?', options: ['LIFO vs FIFO', 'Both FIFO'], correctAnswer: 'LIFO vs FIFO' },
      { type: 'multiple_choice', questionText: 'Monotonic Stack usage?', options: ['Next Greater Element', 'Sorted Sort'], correctAnswer: 'Next Greater Element' },
      { type: 'multiple_choice', questionText: 'Max-Priority Queue top?', options: ['Largest Element', 'Smallest'], correctAnswer: 'Largest Element' },
      { type: 'multiple_choice', questionText: 'Sliding Window Max complexity?', options: ['O(N)', 'O(NK)'], correctAnswer: 'O(N)' },
      { type: 'multiple_choice', questionText: 'Infix to Postfix algorithm?', options: ['Shunting-Yard', 'Floyd’s'], correctAnswer: 'Shunting-Yard' },
      { type: 'multiple_choice', questionText: 'Trapping Rain Water stack condition?', options: ['Current > Top', 'Current < Top'], correctAnswer: 'Current > Top' },
      { type: 'multiple_choice', questionText: 'XOR Stack benefit?', options: ['Pointer space save', 'Speed increase'], correctAnswer: 'Pointer space save' },
      { type: 'match_following', questionText: 'Subject Mastery Match!', pairs: [{key: 'Subject', value: 'Complete!'}, {key: 'Linear', value: 'Mastered!'}, {key: 'Next', value: 'TREES!'}] },
      { type: 'teaching', questionText: '🦜 Pico: "Stacks and Queues are done. You have conquered the lines. Next, we enter the infinite branches of development: TREES! SQUAWK! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Are you ready to climb the tree?"', options: ['SQUAWK YES!', 'Fly high!', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  }
];

module.exports = stage3_part2;
