const stage5_part2 = [
  {
    order: 91,
    title: 'The Great Marathon 1',
    desc: 'Mixed Mastery: Sliding Window + Binary Search.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Marathon begins! Let\'s combine our wings. How to find the smallest subarray with sum >= K when the flock is ALL POSITIVE? 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Use a Sliding Window (Variable size). Expand `right` until sum >= K, then shrink `left` to find the minimum! 🦜"', codeSnippet: 'while (sum >= k) {\n  minLen = min(minLen, r - l + 1);\n  sum -= arr[l++];\n}' },
      { type: 'multiple_choice', questionText: 'Complexity of finding the smallest subarray sum >= K?', options: ['O(N)', 'O(N^2)', 'O(N log N)'], correctAnswer: 'O(N)' },
      { type: 'match_following', questionText: 'Match Marathon Logic!', pairs: [{key: 'Expand', value: 'r++'}, {key: 'Target met', value: 'l++ (shrink)'}, {key: 'Result', value: 'minLen'}] },
      { type: 'programming_board', questionText: 'Update the minimum length.', codeSnippet: 'minL = ___(minL, r - l + 1);', correctAnswer: 'min' },
      { type: 'teaching', questionText: '🦜 Pico: "Wait! What if the array has NEGATIVES? Then the window breaks! You need a Prefix Sum + Monotonic Deque. Elite bird brain required! 🦜"' },
      { type: 'multiple_choice', questionText: 'Can Sliding Window handle negative numbers for this problem?', options: ['No', 'Yes', '0'], correctAnswer: 'No' },
      { type: 'code_fill_in', questionText: 'Initialize results.', codeSnippet: 'int ans = ___;', correctAnswer: 'INT_MAX' },
      { type: 'teaching', questionText: '🦜 Pico: "Fly steady, fledgling! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I fast?"', options: ['SQUAWK YES!', 'No.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 92,
    title: 'The Great Marathon 2',
    desc: 'Mixed Mastery: Matrix + DP Challenge.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Maximal Rectangle! In a 2D binary matrix, what is the largest rectangle of 1s? 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Strategy: For each row, treat it as a Histogram (from Unit 67) and find the largest rectangle! 🦜"', codeSnippet: 'for(row : matrix) {\n  updateHeights(h, row);\n  ans = max(ans, largestRectangleInHistogram(h));\n}' },
      { type: 'multiple_choice', questionText: 'Complexity of Maximal Rectangle in a matrix?', options: ['O(MN)', 'O(M^2N)', 'O(MN^2)'], correctAnswer: 'O(MN)' },
      { type: 'match_following', questionText: 'Match Row Logic!', pairs: [{key: 'mat[i][j]==1', value: 'h[j]++'}, {key: 'mat[i][j]==0', value: 'h[j]=0'}, {key: 'Total', value: 'Row-wise scan'}] },
      { type: 'programming_board', questionText: 'Reset the height if a 0 is found.', codeSnippet: 'if (mat[i][j] == 0) h[j] = ___;', correctAnswer: '0' },
      { type: 'teaching', questionText: '🦜 Pico: "You are combining two elite patterns into one god-mode solution. This is how you win the Zoho Elite medal! 🦜"' },
      { type: 'multiple_choice', questionText: 'Space complexity for the heights array?', options: ['O(N)', 'O(MN)', 'O(1)'], correctAnswer: 'O(N)' },
      { type: 'code_fill_in', questionText: 'Update height for a 1.', codeSnippet: 'h[j] = (row[j] == 1) ? h[j] ___ 1 : 0;', correctAnswer: '+' },
      { type: 'teaching', questionText: '🦜 Pico: "Architecture in every row! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Is the rectangle silver?"', options: ['No, GOLD!', 'Yes.', '0'], correctAnswer: 'No, GOLD!' }
    ]
  },
  {
    order: 93,
    title: 'The Great Marathon 3',
    desc: 'Mixed Mastery: Fenwick Tree + Inversions.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Reverse Pairs! How many pairs (i, j) such that `i < j` and `arr[i] > 2 * arr[j]`? 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Merge Sort Strategy! During the merge, count how many elements in the left half satisfy the `2 * arr[j]` condition before merging! 🦜"', codeSnippet: 'while (i <= mid && a[i] <= 2LL * a[j]) i++;\ncount += (mid - i + 1);' },
      { type: 'multiple_choice', questionText: 'Time complexity of the Reverse Pairs problem?', options: ['O(N log N)', 'O(N^2)', 'O(N)'], correctAnswer: 'O(N log N)' },
      { type: 'match_following', questionText: 'Match Pair Conditions!', pairs: [{key: 'i < j', value: 'Ordered'}, {key: 'a[i] > 2*a[j]', value: 'The Target'}, {key: 'Mechanism', value: 'Merge Sort'}] },
      { type: 'programming_board', questionText: 'Check the condition for index `j` against left half `i`.', codeSnippet: 'while (i <= mid && a[i] <= ___ * a[j]) i++;', correctAnswer: '2' },
      { type: 'teaching', questionText: '🦜 Pico: "This is a variant of Inversion Count but more strict. It destroys simple Fenwick Trees unless you are very clever with coordinate compression! 🦜"' },
      { type: 'multiple_choice', questionText: 'Is the 2LL (long long) necessary for the comparison?', options: ['Yes, to prevent overflow', 'No', 'Depends on bird'], correctAnswer: 'Yes, to prevent overflow' },
      { type: 'code_fill_in', questionText: 'Count remaining elements in left half.', codeSnippet: 'cnt += (mid - ___ + 1);', correctAnswer: 'i' },
      { type: 'teaching', questionText: '🦜 Pico: "Double the birds, double the challenge! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I double amazing?"', options: ['TRIPLE!', 'Yes.', '0'], correctAnswer: 'TRIPLE!' }
    ]
  },
  {
    order: 94,
    title: 'The Great Marathon 4',
    desc: 'Mixed Mastery: Sorting + Greedy Interval.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Maximum Length of Pair Chain! Pairs `(a, b)` such that `b < c`. 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Sort by the END of the pair! This is a classic greedy choice. Always pick the pair that ends EARLIEST to leave more room! 🦜"', codeSnippet: 'sort(pairs.end());\nif (p[0] > last_end) {\n  count++;\n  last_end = p[1];\n}' },
      { type: 'multiple_choice', questionText: 'Goal of Maximum Pair Chain?', options: ['Longest chain', 'Shortest', 'All pairs'], correctAnswer: 'Longest chain' },
      { type: 'match_following', questionText: 'Match Chain Choices!', pairs: [{key: 'Sort by Start', value: 'Might fail'}, {key: 'Sort by End', value: 'Optimal'}, {key: 'Time', value: 'O(N log N)'}] },
      { type: 'programming_board', questionText: 'Check if new pair `curr` can be added to the chain `last`.', codeSnippet: 'if (curr[0] ___ last[1])', correctAnswer: '>' },
      { type: 'teaching', questionText: '🦜 Pico: "This is identical to the Activity Selection problem. One pass, O(N) after the sort. Clean and fast! 🦜"' },
      { type: 'multiple_choice', questionText: 'Can you solve this with DP?', options: ['Yes (O(N^2))', 'No', '0'], correctAnswer: 'Yes (O(N^2))' },
      { type: 'code_fill_in', questionText: 'Final chain length.', codeSnippet: 'return ___;', correctAnswer: 'count' },
      { type: 'teaching', questionText: '🦜 Pico: "Chain the success, fledgling! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Is the chain broken?"', options: ['Never!', 'Yes.', '0'], correctAnswer: 'Never!' }
    ]
  },
  {
    order: 95,
    title: 'The Great Marathon 5',
    desc: 'Mixed Mastery: Matrix Power + Paths.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "How many paths of length K between two nests? Matrix Power again! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "If `A` is the adjacency matrix, then `A^K[i][j]` is the number of paths of length K from i to j! 🦜"', codeSnippet: 'Matrix pathsOfLengthK = power(adjMatrix, k);' },
      { type: 'multiple_choice', questionText: 'Complexity to find paths of length K for N nodes?', options: ['O(N^3 log K)', 'O(N^K)', 'O(N^2)'], correctAnswer: 'O(N^3 log K)' },
      { type: 'match_following', questionText: 'Match Graph Matrix!', pairs: [{key: 'A[i][j]=1', value: 'Connection'}, {key: 'A^2', value: 'Paths of length 2'}, {key: 'A^K', value: 'O(log K) power'}] },
      { type: 'programming_board', questionText: 'Exponentiation logic for length K.', codeSnippet: 'while (K > 0) {\n  if (K % 2 == 1) res = res * ___; ...\n}', correctAnswer: 'base' },
      { type: 'teaching', questionText: '🦜 Pico: "Graph theory meets Matrix Algebra. This is the hallmark of a Senior Elite developer! 🦜"' },
      { type: 'multiple_choice', questionText: 'If K=10^9 and N=5, is this feasible?', options: ['Yes!', 'Too slow.', '0'], correctAnswer: 'Yes!' },
      { type: 'code_fill_in', questionText: 'Matrix multiplication sum.', codeSnippet: 'sum += A[i][k] * B[___][j];', correctAnswer: 'k' },
      { type: 'teaching', questionText: '🦜 Pico: "Fly through the connection matrix! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Are all paths leading to me?"', options: ['SQUAWK YES!', 'No.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 96,
    title: 'The Great Marathon 6',
    desc: 'Mixed Mastery: Fenwick Tree + DSU.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Dynamic Range connectivity! Can we find the max element in a flock that is constantly merging? 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "In your DSU root, store the MAX index of the current flock. When merging, always update the root with the overall max! 🦜"', codeSnippet: 'int rootA = find(a); maxVal[rootB] = max(maxVal[rootB], maxVal[rootA]);' },
      { type: 'multiple_choice', questionText: 'Goal of DSU with Max?', options: ['Find max in O(1)', 'Sort the flock', 'Delete birds'], correctAnswer: 'Find max in O(1)' },
      { type: 'match_following', questionText: 'Match DSU extensions!', pairs: [{key: 'Size Map', value: 'Count members'}, {key: 'Max Map', value: 'Elite member'}, {key: 'Path Comp', value: 'Speed'}] },
      { type: 'programming_board', questionText: 'Update the aggregate in the new root.', codeSnippet: 'parent[rootA] = rootB; aggregate[rootB] ___ aggregate[rootA];', correctAnswer: '+=' },
      { type: 'teaching', questionText: '🦜 Pico: "DSU can carry any information—sums, maxes, mins, or even entire sets! Use it like a backpack! 🦜"' },
      { type: 'multiple_choice', questionText: 'Complexity to fetch max of a flock?', options: ['O(α(N)) (Nearly constant)', 'O(N)', 'O(log N)'], correctAnswer: 'O(α(N)) (Nearly constant)' },
      { type: 'code_fill_in', questionText: 'Find current max for bird `i`.', codeSnippet: 'return maxVal[___(i)];', correctAnswer: 'find' },
      { type: 'teaching', questionText: '🦜 Pico: "One leader, one record! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I the max leader?"', options: ['SQUAWK YES!', 'No.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 97,
    title: 'The Great Marathon 7',
    desc: 'Mixed Mastery: Sliding Window + Frequency Map.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Longest Substring with At Most K Distinct Birds! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Sliding window! Expand `right`. If `distinctCount > K`, shrink `left` until `distinctCount == K`. 🦜"', codeSnippet: 'while (map.size() > k) {\n  map[s[l]]--;\n  if (map[s[l]] == 0) map.delete(s[l]);\n  l++;\n}' },
      { type: 'multiple_choice', questionText: 'Time complexity of Longest Substring with K Distinct?', options: ['O(N)', 'O(N^2)', 'O(N log N)'], correctAnswer: 'O(N)' },
      { type: 'match_following', questionText: 'Match Scoping Actions!', pairs: [{key: 'map.size()', value: 'Unique count'}, {key: 'map[s[r]]++', value: 'Add bird'}, {key: 'l++', value: 'Evict bird'}] },
      { type: 'programming_board', questionText: 'The check to remove a key from the map.', codeSnippet: 'if (map[s[l]] ___ 0) map.remove(s[l]);', correctAnswer: '==' },
      { type: 'teaching', questionText: '🦜 Pico: "The map acts as your memory of who is in the window. Keep it accurate and your flight will be perfect! 🦜"' },
      { type: 'multiple_choice', questionText: 'Final result for "eceba" with K=2?', options: ['3 ("ece")', '4', '2'], correctAnswer: '3 ("ece")' },
      { type: 'code_fill_in', questionText: 'Update window length.', codeSnippet: 'ans = max(ans, r - l + ___);', correctAnswer: '1' },
      { type: 'teaching', questionText: '🦜 Pico: "Diversity in the window, fledgling! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I distinct?"', options: ['One of a kind!', 'No.', '0'], correctAnswer: 'One of a kind!' }
    ]
  },
  {
    order: 98,
    title: 'The Great Marathon 8',
    desc: 'Mixed Mastery: 2D Matrix + BFS Shortcut.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "01 Matrix! For every bird at position 1, find the shortest distance to a bird at position 0! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Multi-Source BFS! Put ALL the 0s into the queue first. Every step, they spread their distance to the 1s! 🦜"', codeSnippet: 'queue.push({x, y}); dist[x][y] = 0;\nwhile(!q.empty()) { ... dist[nx][ny] = dist[x][y] + 1; }' },
      { type: 'multiple_choice', questionText: 'Complexity of 01 Matrix BFS?', options: ['O(MN)', 'O(M^2N^2)', 'O(M+N)'], correctAnswer: 'O(MN)' },
      { type: 'match_following', questionText: 'Match BFS Flow!', pairs: [{key: 'Queue', value: 'Processing order'}, {key: '0s', value: 'The sources'}, {key: '1s', value: 'The targets'}] },
      { type: 'programming_board', questionText: 'Update the distance of the neighbor.', codeSnippet: 'dist[nx][ny] = dist[x][y] ___ 1;', correctAnswer: '+' },
      { type: 'teaching', questionText: '🦜 Pico: "By starting from all 0s simultaneously, you ensure that every 1 is reached via the SHORTEST possible path. Pure geometry! 🦜"' },
      { type: 'multiple_choice', questionText: 'Initial distance values for 1s?', options: ['-1 or Infinity', '0', '1'], correctAnswer: '-1 or Infinity' },
      { type: 'code_fill_in', questionText: 'Check if already visited.', codeSnippet: 'if (dist[nx][ny] != ___) continue;', correctAnswer: '-1' },
      { type: 'teaching', questionText: '🦜 Pico: "Distance is just the number of flaps! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I far away?"', options: ['Close as 0!', 'Yes.', '0'], correctAnswer: 'Close as 0!' }
    ]
  },
  {
    order: 99,
    title: 'The Great Marathon 9',
    desc: 'Mixed Mastery: Array Cycle Detection.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Circular Array Loop! If the array indices wrap around, can you find a cycle that only moves in one direction? 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Floyd’s Cycle Finding (Slow & Fast Pointers)! If They meet at the same nest, a cycle exists. 🦜"', codeSnippet: 'slow = next(slow); fast = next(next(fast));\nif (slow == fast) return true;' },
      { type: 'multiple_choice', questionText: 'Condition for the cycle in this problem?', options: ['All move same sign (+ or -)', 'Only forward', 'Only backward'], correctAnswer: 'All move same sign (+ or -)' },
      { type: 'match_following', questionText: 'Match Pointer Spies!', pairs: [{key: 'Slow', value: '1 step'}, {key: 'Fast', value: '2 steps'}, {key: 'Meeting', value: 'Cycle detected'}] },
      { type: 'programming_board', questionText: 'Calculation to get the next circular index.', codeSnippet: 'next = (i + arr[i]) % ___ ;', correctAnswer: 'n' },
      { type: 'teaching', questionText: '🦜 Pico: "Handle the wrapping logic carefully. `(i + arr[i]) % n` might be negative—birds don\'t like negative indices! 🦜"' },
      { type: 'multiple_choice', questionText: 'Time complexity for cycle detection?', options: ['O(N)', 'O(N^2)', 'O(1)'], correctAnswer: 'O(N)' },
      { type: 'code_fill_in', questionText: 'Fix negative modulo.', codeSnippet: 'return (res + n) ___ n;', correctAnswer: '%' },
      { type: 'teaching', questionText: '🦜 Pico: "The loop repeats, the song remains the same! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I in a loop?"', options: ['A loop of greatness!', 'No.', '0'], correctAnswer: 'A loop of greatness!' }
    ]
  },
  {
    order: 100,
    title: 'The God-Mode Graduation',
    desc: 'The Final Apex of Arrays.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "THE FINISH LINE! 100 units of Array Mastery. You have touched the sun and breathed the frequencies of FFT! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "From the first 0-index leap to the 2D Lazy Segment Tree, you has evolved from a fledgling to the GOD-MODE RAPTOR. 🦜"' },
      { type: 'multiple_choice', questionText: 'Total unique array units mastered?', options: ['100', '50', '200'], correctAnswer: '100' },
      { type: 'multiple_choice', questionText: 'Total unique array lessons analyzed?', options: ['1000', '100', '500'], correctAnswer: '1000' },
      { type: 'multiple_choice', questionText: 'Most powerful data structure mastered?', options: ['Segment Tree', 'Array', 'List'], correctAnswer: 'Segment Tree' },
      { type: 'multiple_choice', questionText: 'Median of two sorted complexity?', options: ['O(log min(M,N))', 'O(M+N)'], correctAnswer: 'O(log min(M,N))' },
      { type: 'multiple_choice', questionText: 'Sliding window max time?', options: ['O(N)', 'O(N*K)'], correctAnswer: 'O(N)' },
      { type: 'match_following', questionText: 'Final Marathon Match!', pairs: [{key: 'Array', value: 'Complete!'}, {key: 'Pico', value: 'Salutes you!'}, {key: 'Next', value: 'STRINGS'}] },
      { type: 'teaching', questionText: '🦜 Pico: "Take a breath, champion. The next world is made of characters and suffixes. The Strings Academy awaits your flight! SQUAWK! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Are you ready for the NEXT SUBJECT?"', options: ['BEYOND AND UP!', 'Wait...', '0'], correctAnswer: 'BEYOND AND UP!' }
    ]
  }
];

module.exports = stage5_part2;
