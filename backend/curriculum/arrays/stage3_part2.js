const stage3_part2 = [
  {
    order: 51,
    title: 'The Missing Positive',
    desc: 'Finding the smallest missing positive integer in O(N) time and O(1) space.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The hardest bird to find! A flock of random numbers, but which SMALL POSITIVE bird is missing? 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Cycle Sort Trick! Try to put every bird `x` into nest `x-1`. If `nums[i]` is not in its right nest, SWAP! 🦜"', codeSnippet: 'while (nums[i] > 0 && nums[i] <= n && nums[nums[i]-1] != nums[i]) {\n  swap(nums[i], nums[nums[i]-1]);\n}' },
      { type: 'multiple_choice', questionText: 'Goal for First Missing Positive?', options: ['O(N) time, O(1) space', 'O(N log N) time', 'O(N) space'], correctAnswer: 'O(N) time, O(1) space' },
      { type: 'match_following', questionText: 'Match Nesting Rules!', pairs: [{key: 'Bird 1', value: 'index 0'}, {key: 'Bird 3', value: 'index 2'}, {key: 'Out of range', value: 'Ignore'}] },
      { type: 'programming_board', questionText: 'The swap condition in the while loop.', codeSnippet: 'if (nums[i] != nums[___]) swap(...)', correctAnswer: 'nums[i]-1' },
      { type: 'teaching', questionText: '🦜 Pico: "After swiping, check which nest has the wrong bird. That index (+1) is your missing bird! 🦜"' },
      { type: 'multiple_choice', questionText: 'Smallest missing positive in [3, 4, -1, 1]?', options: ['2', '1', '5'], correctAnswer: '2', explanation: '1 is there, but 2 is missing.' },
      { type: 'code_fill_in', questionText: 'Final loop check.', codeSnippet: 'if (nums[i] != i + 1) return ___;', correctAnswer: 'i+1' },
      { type: 'teaching', questionText: '🦜 Pico: "This is a Hard LeetCode classic. Master it and you’re a Raptor! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I missing?"', options: ['Never!', 'Yes.', '0'], correctAnswer: 'Never!' }
    ]
  },
  {
    order: 52,
    title: 'Maximum Gap',
    desc: 'Finding the maximum difference between successive elements in sorted form (Bucketing).',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Maximum Gap! But can you do it WITHOUT sorting in O(log N)? Yes, use buckets! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Pigeonhole Principle! Divide the range into buckets. The max gap MUST be between birds in different buckets! 🦜"', codeSnippet: 'bucket_size = max(1, (maxVal - minVal) / (n - 1));' },
      { type: 'multiple_choice', questionText: 'Time complexity for Maximum Gap using buckets?', options: ['O(N)', 'O(N log N)', 'O(N^2)'], correctAnswer: 'O(N)' },
      { type: 'match_following', questionText: 'Match Bucket Logic!', pairs: [{key: 'minVal', value: 'Smallest bird'}, {key: 'maxVal', value: 'Largest bird'}, {key: 'Gap', value: 'currMin - prevMax'}] },
      { type: 'programming_board', questionText: 'Calculate index for a bird `x`.', codeSnippet: 'idx = (x - minV) / ___;', correctAnswer: 'bucket_size' },
      { type: 'teaching', questionText: '🦜 Pico: "O(N) buckets, O(N) birds. Each bucket keeps its own Min and Max. High-level bird brain at work! 🦜"' },
      { type: 'multiple_choice', questionText: 'If N=5 and range is 1 to 10, what is the avg gap?', options: ['~2', '5', '1'], correctAnswer: '~2' },
      { type: 'code_fill_in', questionText: 'Initialize bucket max array.', codeSnippet: 'max_bucket[n] = {___};', correctAnswer: 'INT_MIN' },
      { type: 'teaching', questionText: '🦜 Pico: "Bucketing is the secret weapon for linear time puzzles! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Is the gap closing?"', options: ['SQUAWK!', 'No.', '0'], correctAnswer: 'SQUAWK!' }
    ]
  },
  {
    order: 53,
    title: 'The Majority Element II',
    desc: 'Finding all birds that appear more than N/3 times.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Majority Element II! This time, there can be TWO kings. Boyer-Moore Voting with two candidates! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Maintain two candidates and two counts. If a bird matches neither, decrement BOTH counts! 🦜"', codeSnippet: 'else { count1--; count2--; }' },
      { type: 'multiple_choice', questionText: 'How many majority elements ( > N/3) can an array have?', options: ['At most 2', 'At most 3', 'Unlimited'], correctAnswer: 'At most 2' },
      { type: 'match_following', questionText: 'Match Vote Actions!', pairs: [{key: 'Match Cand 1', value: 'count1++'}, {key: 'Match Cand 2', value: 'count2++'}, {key: 'No match', value: 'counts--'}] },
      { type: 'programming_board', questionText: 'Threshold for validation pass.', codeSnippet: 'if (final_count > n / ___) ans.push(cand);', correctAnswer: '3' },
      { type: 'teaching', questionText: '🦜 Pico: "You MUST do a second pass to verify the candidates actually pass the N/3 threshold. Double check your seeds! 🦜"' },
      { type: 'multiple_choice', questionText: 'Space complexity of Boyer-Moore for N/3?', options: ['O(1)', 'O(N)', 'O(log N)'], correctAnswer: 'O(1)' },
      { type: 'code_fill_in', questionText: 'Second pass verification loop.', codeSnippet: 'for(int x : nums) { if(x == c1) ___ ; }', correctAnswer: 'cnt1++' },
      { type: 'teaching', questionText: '🦜 Pico: "Two kings are better than one, fledgling! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Who am I voting for?"', options: ['Candidate 1!', 'Candidate 2!', '0'], correctAnswer: 'Candidate 1!' }
    ]
  },
  {
    order: 54,
    title: 'H-Index (Elite)',
    desc: 'Calculating research impact using arrays.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "H-Index! A researcher has H papers with at least H citations. Let\'s use citations in an array! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Sort the flock. From the end, if citations >= `n-i`, you found an H-index candidate. 🦜"', codeSnippet: 'if (cite[i] >= n - i) return n - i;' },
      { type: 'multiple_choice', questionText: 'H-index of [3, 0, 6, 1, 5]?', options: ['3', '5', '0'], correctAnswer: '3', explanation: 'Papers: [6, 5, 3] have >= 3 citations.' },
      { type: 'match_following', questionText: 'Match Citation Levels!', pairs: [{key: '6', value: 'High impact'}, {key: '1', value: 'Low impact'}, {key: 'H', value: 'Balance'}] },
      { type: 'programming_board', questionText: 'Condition for H-Index check.', codeSnippet: 'if (citations[i] ___ n - i)', correctAnswer: '>=' },
      { type: 'teaching', questionText: '🦜 Pico: "You can also do it in O(N) time with Bucket Sort. Citadel and hedge funds love this! 🦜"' },
      { type: 'multiple_choice', questionText: 'Max H-index possible for 10 papers?', options: ['10', 'Unlimited', '0'], correctAnswer: '10' },
      { type: 'code_fill_in', questionText: 'Bucket sort count array size.', codeSnippet: 'int buckets[___ + 1];', correctAnswer: 'n' },
      { type: 'teaching', questionText: '🦜 Pico: "Be efficient. Impact matters! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Is my impact high?"', options: ['SQUAWK YES!', 'No.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 55,
    title: 'Gas Station Walk',
    desc: 'Determining if you can complete a circular circuit.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Long Flight! Can you complete a circle if each nest gives gas and each flight costs gas? 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Greedy! If you run out of gas at station `i`, start fresh from station `i+1`! 🦜"', codeSnippet: 'if (current_gas < 0) {\n  start = i + 1;\n  current_gas = 0;\n}' },
      { type: 'multiple_choice', questionText: 'When is a circular circuit IMPOSSIBLE?', options: ['Total Gas < Total Cost', 'One station has 0 gas', 'Pico is tired'], correctAnswer: 'Total Gas < Total Cost' },
      { type: 'match_following', questionText: 'Match Circuit Terms!', pairs: [{key: 'Gas', value: 'Fuel'}, {key: 'Cost', value: 'Expense'}, {key: 'Start', value: 'Best beginning'}] },
      { type: 'programming_board', questionText: 'Check the total balance at the end.', codeSnippet: 'if (total_gas ___ total_cost) return -1;', correctAnswer: '<' },
      { type: 'teaching', questionText: '🦜 Pico: "One pass, O(N) time. Don\'t try every station! That’s O(N^2) and for slow birds! 🦜"' },
      { type: 'multiple_choice', questionText: 'If station A fails, can any station between Start and A be the answer?', options: ['No', 'Yes', '0'], correctAnswer: 'No' },
      { type: 'code_fill_in', questionText: 'Increment total gas balance.', codeSnippet: 'total_bal ___ (gas[i] - cost[i]);', correctAnswer: '+=' },
      { type: 'teaching', questionText: '🦜 Pico: "Keep the momentum, fledgling! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Can I fly forever?"', options: ['If total_bal >= 0!', 'No.', '0'], correctAnswer: 'If total_bal >= 0!' }
    ]
  },
  {
    order: 56,
    title: 'The Candy Shop',
    desc: 'Minimal candy distribution for children (Two-Pass Greedy).',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Seeds for the chicks! Every chick must have at least one seed. If a chick is faster than its neighbor, it wants MORE! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Two passes: 1. Left to Right (check left neighbor). 2. Right to Left (check right neighbor)! 🦜"', codeSnippet: 'if (ratings[i] > ratings[i-1]) candies[i] = candies[i-1] + 1;' },
      { type: 'multiple_choice', questionText: 'Minimal candies for ratings [1, 2, 2]?', options: ['1, 2, 1 (Total 4)', '1, 2, 2', '1, 1, 1'], correctAnswer: '1, 2, 1 (Total 4)', explanation: 'Second chick > first, gets 2. Third chick = second, stays at 1.' },
      { type: 'match_following', questionText: 'Match Candy Logic!', pairs: [{key: 'Left Pass', value: 'check i-1'}, {key: 'Right Pass', value: 'check i+1'}, {key: 'Conflict', value: 'take max(L, R)'}] },
      { type: 'programming_board', questionText: 'Right pass update logic.', codeSnippet: 'if (rate[i] > rate[i+1]) {\n  candies[i] = max(candies[i], ___);\n}', correctAnswer: 'candies[i+1]+1' },
      { type: 'teaching', questionText: '🦜 Pico: "O(N) time, O(N) space. This greedy two-pass ensures everyone is satisfied fairly! 🦜"' },
      { type: 'multiple_choice', questionText: 'Complexity of the Candy problem?', options: ['O(N)', 'O(N^2)', 'O(1)'], correctAnswer: 'O(N)' },
      { type: 'code_fill_in', questionText: 'Initialize everyone with 1 candy.', codeSnippet: 'vector<int> c(n, ___);', correctAnswer: '1' },
      { type: 'teaching', questionText: '🦜 Pico: "Happiness follows fairness, fledgling! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "How many seeds for me?"', options: ['All of them!', '1', '0'], correctAnswer: 'All of them!' }
    ]
  },
  {
    order: 57,
    title: 'The Longest Set',
    desc: 'Finding the longest consecutive sequence in an unsorted flock (Hash Set).',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Longest Consecutive Sequence! Even if the flock is jumbled, we need to find the longest chain of numbers! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Throw everything into a Hash Set. For each bird, only start counting if `bird-1` is NOT in the set! 🦜"', codeSnippet: 'if (!set.has(x - 1)) {\n  while (set.has(x + 1)) { count++; x++; }\n}' },
      { type: 'multiple_choice', questionText: 'Time complexity for Longest Consecutive Sequence?', options: ['O(N)', 'O(N log N)', 'O(N^2)'], correctAnswer: 'O(N)' },
      { type: 'match_following', questionText: 'Match Sequence Terms!', pairs: [{key: 'Set', value: 'Fast Lookup'}, {key: 'x-1 missing', value: 'Start of chain'}, {key: 'x+1 present', value: 'Growing chain'}] },
      { type: 'programming_board', questionText: 'The check to ensure we only start at the beginning of a sequence.', codeSnippet: 'if (!mySet.contains(___)) { ... }', correctAnswer: 'num - 1' },
      { type: 'teaching', questionText: '🦜 Pico: "O(N) time because each bird is only processed in a `while` loop ONCE as part of a chain! 🦜"' },
      { type: 'multiple_choice', questionText: 'Space complexity of using a Hash Set?', options: ['O(N)', 'O(1)', 'O(log N)'], correctAnswer: 'O(N)' },
      { type: 'code_fill_in', questionText: 'Update global longest variable.', codeSnippet: 'ans = ___(ans, current_len);', correctAnswer: 'max' },
      { type: 'teaching', questionText: '🦜 Pico: "The chain is only as strong as its weakest link! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Is our sequence infinite?"', options: ['No, size N.', 'Yes.', '0'], correctAnswer: 'No, size N.' }
    ]
  },
  {
    order: 58,
    title: 'The Largest Number',
    desc: 'Arranging array elements to form the largest string number.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Giant Number! How to arrange [3, 30, 34, 5, 9] to make the biggest string? 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Special Sort: Compare `A + B` vs `B + A`. If `B + A > A + B`, then bird B should come first! 🦜"', codeSnippet: 'bool compare(string a, string b) {\n  return a + b > b + a;\n}' },
      { type: 'multiple_choice', questionText: 'How to compare "3" and "30"?', options: ['"330" > "303"', '"30" > "3"', 'Alphabetical'], correctAnswer: '"330" > "303"' },
      { type: 'match_following', questionText: 'Match Number Logic!', pairs: [{key: '"9"', value: 'Comes first'}, {key: '"30"', value: 'Comes after "3"'}, {key: 'Sort cost', value: 'O(N log N)'}] },
      { type: 'programming_board', questionText: 'Syntax for custom sort in C++.', codeSnippet: 'sort(v.begin(), v.end(), ___);', correctAnswer: 'compare' },
      { type: 'teaching', questionText: '🦜 Pico: "Watch out for zeros! If the biggest bird is "0", the whole flock is just "0". 🦜"' },
      { type: 'multiple_choice', questionText: 'Final result for [0, 0]?', options: ['"0"', '"00"', '"000"'], correctAnswer: '"0"' },
      { type: 'code_fill_in', questionText: 'Check the start of the final string.', codeSnippet: 'if (s[0] == ___) return "0";', correctAnswer: '0' },
      { type: 'teaching', questionText: '🦜 Pico: "String math is fun when you have elite wings! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I the largest?"', options: ['SQUAWK YES!', 'No.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 59,
    title: 'The Wiggle Sort',
    desc: 'Rearranging an array into a low-high-low-high pattern.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Wiggle! `arr[0] <= arr[1] >= arr[2] <= arr[3]`. Up and down like a bird in a breeze! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "One-Pass Greedy! If the relationship is wrong, SWAP with the neighbor! 🦜"', codeSnippet: 'if (i%2 == 0 && a[i] > a[i+1]) swap(a[i], a[i+1]);' },
      { type: 'multiple_choice', questionText: 'Time complexity for Wiggle Sort (One-Pass)?', options: ['O(N)', 'O(N log N)', 'O(N^2)'], correctAnswer: 'O(N)' },
      { type: 'match_following', questionText: 'Match Wiggle Checks!', pairs: [{key: 'Even index', value: 'a[i] <= a[i+1]'}, {key: 'Odd index', value: 'a[i] >= a[i+1]'}, {key: 'Swap', value: 'Restore wiggle'}] },
      { type: 'programming_board', questionText: 'Condition for odd index wiggle.', codeSnippet: 'if (i % 2 ___ 0 && a[i] < a[i+1]) swap(...)', correctAnswer: '!=' },
      { type: 'teaching', questionText: '🦜 Pico: "Greedy works here because swapping never ruins the previous wiggles. Trust the breeze! 🦜"' },
      { type: 'multiple_choice', questionText: 'Is result unique for Wiggle Sort?', options: ['No', 'Yes', '0'], correctAnswer: 'No' },
      { type: 'code_fill_in', questionText: 'Loop limit.', codeSnippet: 'for(int i = 0; i < ___; i++)', correctAnswer: 'n-1' },
      { type: 'teaching', questionText: '🦜 Pico: "Dance with the code, fledgling! Wiggle wiggle! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Do I wiggle?"', options: ['I soar!', 'Yes.', '0'], correctAnswer: 'I soar!' }
    ]
  },
  {
    order: 60,
    title: 'Stage 3 Graduation',
    desc: 'The end of the Hardness Horizon.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "STAGE 3 GRADUATE! You have faced the hardest array storms and emerged with golden feathers! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Trapping Rainwater, Missing Positives, 3Sum, Spiral Fills, and Candy Fairies. You are now a MASTER of arrays! 🦜"' },
      { type: 'multiple_choice', questionText: 'What is the most elegant O(N) trick learned?', options: ['Boyer-Moore Voting', 'Kadane', 'Looping'], correctAnswer: 'Boyer-Moore Voting' },
      { type: 'multiple_choice', questionText: 'Two-pointer Trapping Rainwater space?', options: ['O(1)', 'O(N)'], correctAnswer: 'O(1)' },
      { type: 'multiple_choice', questionText: '3Sum time complexity?', options: ['O(N^2)', 'O(N log N)'], correctAnswer: 'O(N^2)' },
      { type: 'multiple_choice', questionText: 'Majority Element II max kings?', options: ['2', '1'], correctAnswer: '2' },
      { type: 'multiple_choice', questionText: 'First Missing Positive complexity?', options: ['O(N)', 'O(N log N)'], correctAnswer: 'O(N)' },
      { type: 'match_following', questionText: 'Final Mastery Match!', pairs: [{key: 'Hard', value: 'Check!'}, {key: 'Elite', value: 'Loading...'}, {key: 'Pico', value: 'Proud!'}] },
      { type: 'teaching', questionText: '🦜 Pico: "Stage 4 is for the Gods. We will touch the sun with Matrix exponentiation and Segment Trees! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Are you ready to transcend?"', options: ['BEYOND!', 'Maybe.', 'No.'], correctAnswer: 'BEYOND!' }
    ]
  }
];

module.exports = stage3_part2;
