const stage2_part2 = [
  {
    order: 31,
    title: 'The Pascal Pyramid',
    desc: 'Generating rows of Pascal\'s Triangle using arrays.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Math patterns! Pascal\'s Triangle is a pyramid where each bird is the sum of the two birds above it! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "`Triangle[i][j] = Triangle[i-1][j-1] + Triangle[i-1][j]`. The edges are always 1s! 🦜"', codeSnippet: 'row[j] = prev[j-1] + prev[j];' },
      { type: 'multiple_choice', questionText: 'What is the 3rd row of Pascal\'s Triangle? (Row 0 is [1])', options: ['[1, 2, 1]', '[1, 3, 3, 1]', '[1, 1, 1]'], correctAnswer: '[1, 2, 1]' },
      { type: 'match_following', questionText: 'Match Pascal Rules!', pairs: [{key: 'Edges', value: 'Always 1'}, {key: 'Internal', value: 'Sum of above'}, {key: 'Complexity', value: 'O(N^2)'}] },
      { type: 'programming_board', questionText: 'Initialize the first and last element of a row.', codeSnippet: 'row[0] = row[i] = ___;', correctAnswer: '1' },
      { type: 'teaching', questionText: '🦜 Pico: "Used in combinations and probability! High-level bird math for Zoho Elite! 🦜"' },
      { type: 'multiple_choice', questionText: 'Space complexity to store the entire triangle of N rows?', options: ['O(N^2)', 'O(N)', 'O(log N)'], correctAnswer: 'O(N^2)' },
      { type: 'code_fill_in', questionText: 'Java: Create a 2D array.', codeSnippet: 'int[][] tri = new int[___][___];', correctAnswer: 'n' },
      { type: 'teaching', questionText: '🦜 Pico: "If you only need the Kth row, you can do it in O(K) space! Can you figure out how? 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I the peak of the pyramid?"', options: ['SQUAWK YES!', 'The 1 above.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 32,
    title: 'Spiral Scouting',
    desc: 'Traversing a 2D Matrix in a spiral pattern.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Spiral Scouting! Fly around the perimeter, then sink into the middle. It\'s a drill, fledgling! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Use 4 boundaries: Top, Bottom, Left, Right. Shrink them as you finish each edge! 🦜"', codeSnippet: 'for(int i=left; i<=right; i++) { ... } top++;' },
      { type: 'multiple_choice', questionText: 'In a 3x3 matrix, what is the sequence of directions?', options: ['Right, Down, Left, Up', 'Up, Down, Right, Left', 'Clockwise'], correctAnswer: 'Right, Down, Left, Up' },
      { type: 'match_following', questionText: 'Match Boundaries!', pairs: [{key: 'Top Row done', value: 'top++'}, {key: 'Right Col done', value: 'right--'}, {key: 'Bottom Row done', value: 'bottom--'}] },
      { type: 'programming_board', questionText: 'Condition to continue the spiral.', codeSnippet: 'while (top <= bottom && left ___ right)', correctAnswer: '<=' },
      { type: 'teaching', questionText: '🦜 Pico: "Complexity: O(R*C). Every cell is visited once. This mission tests your boundary management! 🦜"' },
      { type: 'multiple_choice', questionText: 'How many elements are visited in a 4x5 matrix?', options: ['20', '9', '40'], correctAnswer: '20' },
      { type: 'code_fill_in', questionText: 'Initialize `bottom` index.', codeSnippet: 'bottom = ___;', correctAnswer: 'rows-1' },
      { type: 'teaching', questionText: '🦜 Pico: "Don\'t overshoot! Always check if `top <= bottom` before the Left and Up passes! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Are you dizzy yet?"', options: ['Spinning!', 'No.', '0'], correctAnswer: 'Spinning!' }
    ]
  },
  {
    order: 33,
    title: 'Rotation Station (Matrix)',
    desc: 'Rotating a 2D matrix by 90 degrees in-place.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Rotate the Whole World! To rotate 90 degrees clockwise: 1. Transpose. 2. Reverse each row! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Transpose means `Swap(matrix[i][j], matrix[j][i])`. It flips the world across the diagonal! 🦜"', codeSnippet: 'swap(a[i][j], a[j][i]);' },
      { type: 'multiple_choice', questionText: 'If you transpose a 2x3 matrix, what are the dimensions?', options: ['3x2', '2x3', '2x2'], correctAnswer: '3x2' },
      { type: 'match_following', questionText: 'Match Rotation Steps!', pairs: [{key: 'Transpose', value: 'A[i][j] <-> A[j][i]'}, {key: 'Reverse Rows', value: 'Clockwise 90'}, {key: 'Reverse Columns', value: 'Anti-Clockwise'}] },
      { type: 'programming_board', questionText: 'Inner loop for Transpose to avoid double-swapping.', codeSnippet: 'for(int j = ___; j < n; j++)', correctAnswer: 'i' },
      { type: 'teaching', questionText: '🦜 Pico: "O(1) auxiliary space! In-place mastery is what separates the chickadees from the raptors! 🦜"' },
      { type: 'multiple_choice', questionText: 'Final complexity of 90-degree rotation?', options: ['O(N^2)', 'O(N)', 'O(N log N)'], correctAnswer: 'O(N^2)' },
      { type: 'code_fill_in', questionText: 'Reverse row `i` of matrix `m`.', codeSnippet: 'reverse(m[i].begin(), m[i].___());', correctAnswer: 'end' },
      { type: 'teaching', questionText: '🦜 Pico: "Simple and elegant. Two steps, total mastery! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Is your world upside down?"', options: ['It\'s rotated!', 'Yes.', '0'], correctAnswer: 'It\'s rotated!' }
    ]
  },
  {
    order: 34,
    title: 'The Greedy Peck',
    desc: 'Introduction to Greedy Strategy on arrays.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Greedy! Take the best choice RIGHT NOW and hope it works out. Parrots are naturally greedy! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Example: Jump Game. What is the farthest you can reach at any moment? 🦜"', codeSnippet: 'max_reach = max(max_reach, i + arr[i]);' },
      { type: 'multiple_choice', questionText: 'In [2, 3, 1, 1, 4], can you reach the last index?', options: ['Yes', 'No', 'Depends on Pico'], correctAnswer: 'Yes' },
      { type: 'match_following', questionText: 'Match Greedy Terms!', pairs: [{key: 'Local Optimal', value: 'Current best'}, {key: 'Global Optimal', value: 'Final best'}, {key: 'Choice', value: 'Greedy'}] },
      { type: 'programming_board', questionText: 'Update the farthest reach.', codeSnippet: 'reach = max(reach, i + ___);', correctAnswer: 'nums[i]' },
      { type: 'teaching', questionText: '🦜 Pico: "Greedy is O(N) but it doesn\'t always work. If it does, it\'s the fastest flight path! 🦜"' },
      { type: 'multiple_choice', questionText: 'Does Greedy work for ALL problems?', options: ['No', 'Yes', 'Only for birds'], correctAnswer: 'No' },
      { type: 'code_fill_in', questionText: 'Check if current index is unreachable.', codeSnippet: 'if (i ___ max_reach) return false;', correctAnswer: '>' },
      { type: 'teaching', questionText: '🦜 Pico: "Choose wisely, or you might end up in a dead-end nest! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Can I have ALL the seeds?"', options: ['Yes!', 'Greedy parrot.', '0'], correctAnswer: 'Yes!' }
    ]
  },
  {
    order: 35,
    title: 'The Rearrangement',
    desc: 'Rearranging positive and negative numbers in O(N).',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Balance! Positive birds in even spots, negative birds in odd spots. Let\'s align the flock! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Use two pointers: `pos = 0`, `neg = 1`. If a bird is misplaced, fly them to the right spot! 🦜"', codeSnippet: 'if (a[i] > 0) { res[pos] = a[i]; pos += 2; }' },
      { type: 'multiple_choice', questionText: 'Goal of Rearrange Pos/Neg?', options: ['Interleave them', 'Group them', 'Sort them'], correctAnswer: 'Interleave them' },
      { type: 'match_following', questionText: 'Match Spots!', pairs: [{key: 'Positive', value: '0, 2, 4...'}, {key: 'Negative', value: '1, 3, 5...'}, {key: 'Step', value: '+2'}] },
      { type: 'programming_board', questionText: 'Increment negative pointer index.', codeSnippet: 'neg_idx ___ 2;', correctAnswer: '+=' },
      { type: 'teaching', questionText: '🦜 Pico: "O(N) time and O(N) space if we use a result array. Elite interviews love this one! 🦜"' },
      { type: 'multiple_choice', questionText: 'Final complexity of O(N) Rearrange?', options: ['O(N)', 'O(N^2)', 'O(1)'], correctAnswer: 'O(N)' },
      { type: 'code_fill_in', questionText: 'Initialize the result array.', codeSnippet: 'vector<int> res(___);', correctAnswer: 'n' },
      { type: 'teaching', questionText: '🦜 Pico: "Patterns! Look for the patterns, fledgling! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I positive or negative?"', options: ['POSitively amazing!', 'Negative.', '0'], correctAnswer: 'POSitively amazing!' }
    ]
  },
  {
    order: 36,
    title: 'Subset Snatching',
    desc: 'Introduction to powerset and generating all subarrays.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Small groups! A subarray is a contiguous slice. A subset is any combination of birds! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Total subarrays in size N? `N*(N+1)/2`. Total subsets? `2^N`. The subsets grow exponentially! 🦜"' },
      { type: 'multiple_choice', questionText: 'How many subsets in [1, 2, 3]?', options: ['8 (2^3)', '6', '3'], correctAnswer: '8 (2^3)' },
      { type: 'match_following', questionText: 'Match Sub-Groups!', pairs: [{key: 'Subarray', value: 'Contiguous'}, {key: 'Subset', value: 'Any indices'}, {key: 'Power Set', value: 'All 2^N'}] },
      { type: 'programming_board', questionText: 'Total number of subarrays for size 5.', codeSnippet: 'count = (5 * ___) / 2;', correctAnswer: '6' },
      { type: 'teaching', questionText: '🦜 Pico: "To generate subsets, use Recursion or Bit manipulation! We\'ll learn that soon. 🦜"' },
      { type: 'multiple_choice', questionText: 'Complexity of generating all subsets?', options: ['O(2^N)', 'O(N^2)', 'O(N)'], correctAnswer: 'O(2^N)' },
      { type: 'code_fill_in', questionText: 'Bit shift for 2^N.', codeSnippet: 'count = 1 ___ n;', correctAnswer: '<<' },
      { type: 'teaching', questionText: '🦜 Pico: "The Power Set is massive! Only for tiny flocks! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Can I be a subset of the best?"', options: ['You ARE the set!', 'No.', '0'], correctAnswer: 'You ARE the set!' }
    ]
  },
  {
    order: 37,
    title: 'The Leader Recall (Reverse)',
    desc: 'Final check of leader logic with a twist.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Recall! A leader is greater than ALL to its right. Let\'s see if you can do it without help! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Challenge: Find leaders in [10, 22, 12, 3, 0, 6]. Rightmost is 6. Next? 12? No, 22! 🦜"' },
      { type: 'multiple_choice', questionText: 'Leaders in [10, 22, 12, 3, 0, 6]?', options: ['22, 12, 6', '22, 6', '10, 22, 6'], correctAnswer: '22, 12, 6', explanation: '6 is last. 0 < 6. 3 < 6. 12 > 6 (Leader!). 22 > 12 (Leader!). 10 < 22.' },
      { type: 'match_following', questionText: 'Match Leader Checks!', pairs: [{key: 'Is 12 leader?', value: 'Yes (>6)'}, {key: 'Is 3 leader?', value: 'No (<6)'}, {key: 'Is 22 leader?', value: 'Yes (>12)'}] },
      { type: 'programming_board', questionText: 'Update leaders list.', codeSnippet: 'if (arr[i] > max_right) {\n  max_right = arr[i];\n  leaders.___(arr[i]);\n}', correctAnswer: 'push' },
      { type: 'teaching', questionText: '🦜 Pico: "Found them! Now reverse the list to show them in the original order! 🦜"' },
      { type: 'multiple_choice', questionText: 'Why reverse the result list?', options: ['Found them R-to-L', 'Sorting', 'Convention'], correctAnswer: 'Found them R-to-L' },
      { type: 'code_fill_in', questionText: 'Final complexity?', codeSnippet: 'O(___)', correctAnswer: 'N' },
      { type: 'teaching', questionText: '🦜 Pico: "Recalling patterns is what makes you ELITE! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I the ultimate leader?"', options: ['YES!', 'No.', 'What was the question?'], correctAnswer: 'YES!' }
    ]
  },
  {
    order: 38,
    title: 'Frequency Maps (Intermediate)',
    desc: 'Intro to hashing for O(N) duplicate checks.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Master Class! Use a Hash Map (Dictionary) to count birds with ANY value, not just small ones! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Lookup is O(1). Store `BirdValue -> Count`. Fast as a falcon! 🦜"', codeSnippet: 'map[arr[i]] = (map[arr[i]] || 0) + 1;' },
      { type: 'multiple_choice', questionText: 'Complexity of checking if X exists in a Hash Map?', options: ['O(1)', 'O(N)', 'O(log N)'], correctAnswer: 'O(1)' },
      { type: 'match_following', questionText: 'Match Hash Terms!', pairs: [{key: 'Key', value: 'The Bird Value'}, {key: 'Value', value: 'The Count'}, {key: 'Collision', value: 'Two birds, one nest'}] },
      { type: 'programming_board', questionText: 'Check if key exists in JS Map.', codeSnippet: 'if (myMap.___(target))', correctAnswer: 'has' },
      { type: 'teaching', questionText: '🦜 Pico: "Python: `from collections import Counter`. It\'s the elite way! 🦜"' },
      { type: 'multiple_choice', questionText: 'Space complexity of Frequency Hash Map?', options: ['O(N)', 'O(1)', 'O(log N)'], correctAnswer: 'O(N)' },
      { type: 'code_fill_in', questionText: 'Python: Get count with default 0.', codeSnippet: 'count = map.get(x, ___)', correctAnswer: '0' },
      { type: 'teaching', questionText: '🦜 Pico: "If the flock has unique values, use a HASH SET! Just yes/no! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Can a Map store my ego?"', options: ['Too big!', 'O(1)', 'Yes.'], correctAnswer: 'Too big!' }
    ]
  },
  {
    order: 39,
    title: 'The Missing Pivot',
    desc: 'Finding a pivot element (Sum of Left == Sum of Right).',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Pivot! Same as Equilibrium, but faster. Total sum - Current element! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Mission: Find the index where `LeftSum == TotalSum - Current - LeftSum`. 🦜"', codeSnippet: 'if (2 * l_sum == t_sum - arr[i]) return i;' },
      { type: 'multiple_choice', questionText: 'What is the sum of [1, 7, 3, 6, 5, 6]?', options: ['28', '27', '29'], correctAnswer: '28' },
      { type: 'match_following', questionText: 'Match Pivot Logic!', pairs: [{key: 'i=3 (val=6)', value: 'Pivot!'}, {key: 'Left Sum', value: '1+7+3 = 11'}, {key: 'Right Sum', value: '5+6 = 11'}] },
      { type: 'programming_board', questionText: 'Calculate the Right Sum implicitly.', codeSnippet: 'right_sum = total_sum - left_sum - ___;', correctAnswer: 'arr[i]' },
      { type: 'teaching', questionText: '🦜 Pico: "O(N) time, O(1) space. A LeetCode 724 classic! 🦜"' },
      { type: 'multiple_choice', questionText: 'If no pivot exists, what should you return?', options: ['-1', '0', 'Infinity'], correctAnswer: '-1' },
      { type: 'code_fill_in', questionText: 'Update left sum after check.', codeSnippet: 'left_sum ___ arr[i];', correctAnswer: '+=' },
      { type: 'teaching', questionText: '🦜 Pico: "Sharp eyes, fledgling! The pivot is the heart of the flock! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I your pivot?"', options: ['Always.', 'No.', '0'], correctAnswer: 'Always.' }
    ]
  },
  {
    order: 40,
    title: 'Stage 2 Graduation',
    desc: 'Mastery of Intermediate Array Patterns.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "STAGE 2 COMPLETE! You are now an Intermediate Array Specialist! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "We conquered Kadane, DNF, Boyer-Moore, Sliding Windows, and Matrix Spirals! 🦜"' },
      { type: 'multiple_choice', questionText: 'Most complex pattern in Stage 2?', options: ['Rainwater Trapping', 'Summing', 'Printing'], correctAnswer: 'Rainwater Trapping' },
      { type: 'multiple_choice', questionText: 'Kadane algorithm complexity?', options: ['O(N)', 'O(N^2)'], correctAnswer: 'O(N)' },
      { type: 'multiple_choice', questionText: 'Boyer-Moore Voting space?', options: ['O(1)', 'O(N)'], correctAnswer: 'O(1)' },
      { type: 'multiple_choice', questionText: 'Sliding window time?', options: ['O(N)', 'O(N*K)'], correctAnswer: 'O(N)' },
      { type: 'multiple_choice', questionText: 'Spiral Matrix complexity?', options: ['O(R*C)', 'O(N)'], correctAnswer: 'O(R*C)' },
      { type: 'match_following', questionText: 'Final Stage 2 Match!', pairs: [{key: 'Intermediate', value: 'Check!'}, {key: 'Mastery', value: 'Pending...'}, {key: 'Pico', value: 'Proud!'}] },
      { type: 'teaching', questionText: '🦜 Pico: "Stage 3 will be brutal. Multi-dimensional Dynamic Programming and Matrix Mastery await! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Ready for the summit?"', options: ['FLIGHT ON!', 'Maybe.', 'No.'], correctAnswer: 'FLIGHT ON!' }
    ]
  }
];

module.exports = stage2_part2;
