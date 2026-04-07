const arrays = {
  _id: '69d21614ecc85515a8063379', // Keep Subject ID stable
  name: 'Arrays',
  icon: '🗄️',
  description: 'Master the building blocks: Arrays and Matrices.',
  sections: [
    {
      title: '1. The Sequential Stride',
      units: [
        { 
          title: 'Max Element: The First Step', desc: 'Find the biggest bird in the nest.', isUnlocked: true, xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Welcome, puny human! Let\'s find some numbers! An array is just a list. To find the MAX, you just look at every bird and keep the biggest!"', codeSnippet: 'int max = arr[0];\nfor(int i=1; i<n; i++) {\n  if(arr[i] > max) max = arr[i];\n}' },
            { type: 'teaching', questionText: '🦜 Pico: "Don\'t forget! Initialize `max` with the first element, or a very small number like `INT_MIN`. If you start with 0 and the array is all negatives... oops!"' },
            { type: 'teaching', questionText: '🦜 Pico: "Complexity? O(N). You have to look at everyone. No shortcuts, unless it\'s sorted! But it isn\'t. Tough luck!"' },
            { type: 'teaching', questionText: '🦜 Pico: "Scenario: [3, 7, 2, 9, 5]. Max=3... Max=7... Max=7... Max=9... Max=9. Boom! 9 wins!"' },
            { type: 'teaching', questionText: '🦜 Pico: "Trivia: If you use `max()` in Python, it\'s still O(N) under the hood. No magic here, just faster C code!"' },
            { type: 'multiple_choice', questionText: 'What is the time complexity of finding the max in an unsorted array?', options: ['O(1)', 'O(log N)', 'O(N)', 'O(N^2)'], correctAnswer: 'O(N)' },
            { type: 'match_following', questionText: 'Match the initializations!', pairs: [
              {key: 'Better for Max', value: 'INT_MIN'}, {key: 'Better for Min', value: 'INT_MAX'}, {key: 'Risky for Max', value: '0 (with Negatives)'}
            ] },
            { type: 'programming_board', questionText: 'Complete the Max check!', codeSnippet: 'if(arr[i] ___ max) {\n  max = arr[i];\n}', correctAnswer: '>' },
            { type: 'multiple_choice', questionText: 'Can you find the Max in O(log N) if the array is sorted?', options: ['No, always O(N)', 'Yes, it is the last element', 'Only with Binary Search'], correctAnswer: 'Yes, it is the last element' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Did you pay attention? What was my grandmother\'s rule about complexity?"', options: ['Faster than wings!', 'Always O(1)', 'Sleep is better'], correctAnswer: 'Faster than wings!' }
          ]
        },
        { 
          title: 'Min Element: Tiny But Mighty', desc: 'Find the smallest seed in the pile.', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Finding the smallest? That\'s about as small as your CPU capacity! It\'s the exact same logic as Max, just flip the sign!"', codeSnippet: 'int min = arr[0];\nfor(int i=1; i<n; i++) {\n  if(arr[i] < min) min = arr[i];\n}' },
            { type: 'teaching', questionText: '🦜 Pico: "Use `INT_MAX` for initialization. Don\'t use 0 unless you want 0 to stay the min forever! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Space Complexity: O(1). We only use one variable. Efficient, unlike your social life!"' },
            { type: 'teaching', questionText: '🦜 Pico: "Think: Can you find Max and Min in a single pass? YES! Just use two variables!"' },
            { type: 'teaching', questionText: '🦜 Pico: "Remember: The goal is to touch each element only ONCE. Efficiency is king!"' },
            { type: 'multiple_choice', questionText: 'Value to initialize `min` for an unknown array?', options: ['0', 'INT_MAX', 'INT_MIN', '-1'], correctAnswer: 'INT_MAX' },
            { type: 'match_following', questionText: 'Match the scan targets!', pairs: [
              {key: 'Current < Min', value: 'Update Min'}, {key: 'Current > Max', value: 'Update Max'}, {key: 'Next > Current', value: 'Boring...'}
            ] },
            { type: 'programming_board', questionText: 'Complete the Min check!', codeSnippet: 'if(arr[i] ___ min) {\n  min = arr[i];\n}', correctAnswer: '<' },
            { type: 'multiple_choice', questionText: 'Number of comparisons for Min in a single pass?', options: ['N-1', '2N', 'N/2'], correctAnswer: 'N-1' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Hey human! Are you tired yet?"', options: ['No, keep going!', 'Yes, I need seeds.', 'Who are you?'], correctAnswer: 'No, keep going!' }
          ]
        },
        { 
          title: 'Count Odd & Even', desc: 'Is it even? Is it odd? Who cares?', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "One, two, three... Wait, I\'m a parrot, I can\'t count! But you can! A number is EVEN if `n % 2 == 0`."', codeSnippet: 'for(int i=0; i<n; i++) {\n  if(arr[i] % 2 == 0) e++;\n  else o++;\n}' },
            { type: 'teaching', questionText: '🦜 Pico: "Optimization Tip: You can also use `(arr[i] & 1)` to check if it\'s odd. It is faster! Computers love bits!"' },
            { type: 'teaching', questionText: '🦜 Pico: "Space: O(1) again. We are just using two counters. Cheap as birdseed! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Scenario: [2, 4, 1]. Even=2, Odd=1. Simple! Even a parrot can do this... wait, I just did!"' },
            { type: 'teaching', questionText: '🦜 Pico: "Why count? Maybe you want to partition the array later. Stay tuned!"' },
            { type: 'multiple_choice', questionText: 'Condition for Even number?', options: ['n % 2 == 0', 'n % 2 != 0', 'n / 2 == 1'], correctAnswer: 'n % 2 == 0' },
            { type: 'match_following', questionText: 'Match the check!', pairs: [
              {key: 'Odd', value: 'n % 2 != 0'}, {key: 'Even', value: 'n % 2 == 0'}, {key: 'Zero', value: 'Neither odd nor even?'}
            ] },
            { type: 'programming_board', questionText: 'Complete the Odd check!', codeSnippet: 'if(arr[i] % 2 ___ 0) {\n  odd_count++;\n}', correctAnswer: '!=' },
            { type: 'multiple_choice', questionText: 'Smarter way to check for Odd using bits?', options: ['(n & 1) == 1', '(n | 1) == 0', '(n ^ 1) == 0'], correctAnswer: '(n & 1) == 1' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Ready for the next one, human?"', options: ['YES!', 'Maybe next year.', 'Squawk!'], correctAnswer: 'YES!' }
          ]
        },
        { 
          title: 'Leaders in an Array', desc: 'The Zoho Legend! 🏆', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "I\'m the leader here, but let\'s find the numbers who think they are! A leader is greater than ALL elements to its right!"' },
            { type: 'teaching', questionText: '🦜 Pico: "Rightmost element is ALWAYS a leader. It has no competition to its right! Like me in this room! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Don\'t go left-to-right! That\'s O(N^2). Go right-to-left! Check current vs Current Max. Boom! O(N)!"', codeSnippet: 'for(int i=n-2; i>=0; i--) {\n  if(arr[i] > max_right) {\n    max_right = arr[i];\n    printf("%d", max_right);\n  }\n}' },
            { type: 'teaching', questionText: '🦜 Pico: "Why right-to-left? Because you collect the current maximum along the way. Efficiency, human!"' },
            { type: 'teaching', questionText: '🦜 Pico: "Output Order: From right-to-left, they come out in reverse. Use a stack if you want them in order!"' },
            { type: 'multiple_choice', questionText: 'What element is always a leader?', options: ['First', 'Last', 'Middle', 'Biggest'], correctAnswer: 'Last' },
            { type: 'match_following', questionText: 'Match the scan!', pairs: [
              {key: 'Naive', value: 'O(N^2)'}, {key: 'Optimized', value: 'O(N)'}, {key: 'Space', value: 'O(1)'}
            ] },
            { type: 'programming_board', questionText: 'Fix the leader loop!', codeSnippet: 'for(int i = n-2; i ___ 0; i--) {\n  if(arr[i] > max_right) ___ = arr[i];\n}', correctAnswer: '>=|max_right' },
            { type: 'multiple_choice', questionText: 'How many leaders in a strictly increasing array?', options: ['1', 'N', '0'], correctAnswer: '1' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Who is the leader of this lesson?"', options: ['Pico!', 'Me!', 'The Code!'], correctAnswer: 'Pico!' }
          ]
        },
        { 
          title: 'Second Largest: The Silver Medal', desc: 'Find the one who almost won.', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Finding the second largest element is like being the runner-up in a beauty pageant—everyone knows you\'re almost the best, but nobody remembers your name! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Logic: Keep `f` (first) and `s` (second). If `x > f`, `s = f` and `f = x`. If `x > s && x != f`, `s = x`."', codeSnippet: 'if(x > f) { s = f; f = x; }\nelse if(x > s && x != f) { s = x; }' },
            { type: 'teaching', questionText: '🦜 Pico: "Avoid sorting! That is O(N log N). We want O(N). Don\'t make me repeat the bird wing rule!"' },
            { type: 'teaching', questionText: '🦜 Pico: "Edge Case: [10, 10, 10]. There is NO second largest. Second stays -1. Got it?"' },
            { type: 'teaching', questionText: '🦜 Pico: "Remember: Check for `x != f` or you\'ll just get the largest twice!"' },
            { type: 'multiple_choice', questionText: 'Second largest in [12, 35, 1, 35, 34, 1]?', options: ['35', '34', '12', '1'], correctAnswer: '34' },
            { type: 'match_following', questionText: 'Match the updates!', pairs: [
              {key: 'x > first', value: 'sec = first, first = x'}, {key: 'x > sec && x < first', value: 'sec = x'}, {key: 'x == first', value: 'Ignore'}
            ] },
            { type: 'programming_board', questionText: 'Update sec largest!', codeSnippet: 'else if(arr[i] > second && arr[i] ___ first) {\n  second = ___;\n}', correctAnswer: '!=|arr[i]' },
            { type: 'multiple_choice', questionText: 'Time complexity for this approach?', options: ['O(N)', 'O(N^2)', 'O(1)'], correctAnswer: 'O(N)' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Am I the second largest parrot in the world?"', options: ['No, #1!', 'Maybe #2.', 'You are #0!'], correctAnswer: 'No, #1!' }
          ]
        },
        {
          title: 'Reverse Everything!', desc: 'Flip it like a pancake! 🥞', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Mirror, mirror on the wall, who\'s the fastest bird of all? Let\'s flip this array like my breakfast! Two pointers: Start and End!"' },
            { type: 'teaching', questionText: '🦜 Pico: "While `start < end`, just SWAP! Then move `start` forward and `end` backward. Simple as flying in circles!"', codeSnippet: 'while(start < end) {\n  swap(arr[start++], arr[end--]);\n}' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(N/2), which is still O(N). Computer scientists are lazy, they drop the constants!"' },
            { type: 'teaching', questionText: '🦜 Pico: "Space Complexity: O(1). No extra array needed. Don\'t build a second cage for the same bird! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Why reverse? Maybe you need to rotate the array later. It\'s a secret technique!"' },
            { type: 'multiple_choice', questionText: 'When do you stop reversing?', options: ['start > end', 'start == end (or >)', 'i == n'], correctAnswer: 'start == end (or >)' },
            { type: 'match_following', questionText: 'Match the swap!', pairs: [
              {key: 'Start', value: 'Moves Right'}, {key: 'End', value: 'Moves Left'}, {key: 'Middle', value: 'Stays Put'}
            ] },
            { type: 'programming_board', questionText: 'Fix the reverse loop!', codeSnippet: 'while(start ___ end) {\n  swap(arr[start], arr[end]);\n  start++; ___--;\n}', correctAnswer: '<|end' },
            { type: 'multiple_choice', questionText: 'Does the space complexity become O(N) if we use a new array?', options: ['Yes', 'No', 'Only for birds'], correctAnswer: 'Yes' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Does reversing an empty array crash the app?"', options: ['Yes!', 'No, it does nothing.', 'Only if I scream.'], correctAnswer: 'No, it does nothing.' }
          ]
        },
        {
          title: 'Remove Duplicates', desc: 'No copying allowed! 🚫', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Stop copying me! Stop copying me! Let\'s get rid of these double-birds from a SORTED array! Use a write-pointer!"' },
            { type: 'teaching', questionText: '🦜 Pico: "If `arr[j] != arr[i]`, it means we found a new bird. Increment `i` and write `arr[j]` there! 🦜"', codeSnippet: 'int i = 0;\nfor(int j=1; j<n; j++) {\n  if(arr[j] != arr[i]) arr[++i] = arr[j];\n}\nreturn i+1;' },
            { type: 'teaching', questionText: '🦜 Pico: "This is IN-PLACE. Very memory efficient! Like my diet of tiny seeds!"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time: O(N) since we walk once. Beautiful!"' },
            { type: 'teaching', questionText: '🦜 Pico: "Remember: The array MUST be sorted for this simple logic. Otherwise, it is chaotic!"' },
            { type: 'multiple_choice', questionText: 'In a sorted array [1, 1, 2], what is the result?', options: ['[1]', '[1, 2]', '[1, 1, 2]'], correctAnswer: '[1, 2]' },
            { type: 'match_following', questionText: 'Match the pointer!', pairs: [
              {key: 'Write Pointer', value: 'Stays on last unique'}, {key: 'Read Pointer', value: 'Visits everyone'}, {key: 'Result', value: 'Unique count'}
            ] },
            { type: 'programming_board', questionText: 'Fix the unique update!', codeSnippet: 'if(arr[read] != arr[write]) {\n  ___++;\n  arr[write] = arr[read];\n}', correctAnswer: 'write' },
            { type: 'multiple_choice', questionText: 'What is the space complexity of this in-place method?', options: ['O(N)', 'O(log N)', 'O(1)'], correctAnswer: 'O(1)' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Who is the most unique bird here?"', options: ['Me!', 'Pico!', 'The Code!'], correctAnswer: 'Pico!' }
          ]
        },
        {
          title: 'Move Zeroes to End', desc: 'Kick them to the back! 🧹', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Kick those lazy zeroes to the end of the line! They\'re taking up prime perching space! Use the same write-pointer trick!"' },
            { type: 'teaching', questionText: '🦜 Pico: "Scan for non-zeroes. If found, swap with the write-pointer. Watch them slide to the back! 🦜"', codeSnippet: 'int w = 0;\nfor(int i=0; i<n; i++) {\n  if(arr[i] != 0) swap(arr[i], arr[w++]);\n}' },
            { type: 'teaching', questionText: '🦜 Pico: "Zeroes represent empty branches. We want all our birds (non-zeroes) together at the front!"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time: O(N). Space: O(1). No extra room needed!"' },
            { type: 'teaching', questionText: '🦜 Pico: "Wait! Do you need to maintain the relative order of non-zeroes? Yes! Swapping does that!"' },
            { type: 'multiple_choice', questionText: 'Input [0, 1, 0, 3]. Output?', options: ['[1, 3, 0, 0]', '[0, 0, 1, 3]', '[3, 1, 0, 0]'], correctAnswer: '[1, 3, 0, 0]' },
            { type: 'match_following', questionText: 'Match the result!', pairs: [
              {key: 'Non-zeroes', value: 'Move Front'}, {key: 'Zeroes', value: 'Move Back'}, {key: 'Order', value: 'Preserved'}
            ] },
            { type: 'programming_board', questionText: 'Fix the zero-swap!', codeSnippet: 'if(arr[i] ___ 0) {\n  swap(arr[i], arr[write]);\n  write++;\n}', correctAnswer: '!=' },
            { type: 'multiple_choice', questionText: 'Is this possible in one scan?', options: ['Yes', 'No', 'Only for parrots'], correctAnswer: 'Yes' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "How many zeroes are in your bank account? Just kidding! 🦜"', options: ['Too many!', 'None!', 'Squawk!'], correctAnswer: 'Too many!' }
          ]
        },
        {
          title: 'Check if Sorted', desc: 'Is it in order? 📏', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Is it in order? Check if every bird is taller than the bird before it. If even one is shorter, it\'s chaos!"' },
            { type: 'teaching', questionText: '🦜 Pico: "Loop from 1 to N-1. If `arr[i] < arr[i-1]`, then NO! 🦜"', codeSnippet: 'for(int i=1; i<n; i++) {\n  if(arr[i] < arr[i-1]) return false;\n}\nreturn true;' },
            { type: 'teaching', questionText: '🦜 Pico: "Time: O(N). Because you might find the mistake at the very last perch!"' },
            { type: 'teaching', questionText: '🦜 Pico: "Space: O(1). We just look. No touching, no moving!"' },
            { type: 'teaching', questionText: '🦜 Pico: "Think: What about sorting in descending order? Just flip the check!"' },
            { type: 'multiple_choice', questionText: 'Array [1, 2, 8, 3]. Is it sorted?', options: ['Yes', 'No', 'Maybe'], correctAnswer: 'No' },
            { type: 'match_following', questionText: 'Match order!', pairs: [
              {key: 'Ascending', value: 'a[i] >= a[i-1]'}, {key: 'Descending', value: 'a[i] <= a[i-1]'}, {key: 'Unsorted', value: 'Whatever!'}
            ] },
            { type: 'programming_board', questionText: 'Complete the check!', codeSnippet: 'if(arr[i] < arr[___]) return false;', correctAnswer: 'i-1' },
            { type: 'multiple_choice', questionText: 'Worst case time complexity?', options: ['O(1)', 'O(N)', 'O(log N)'], correctAnswer: 'O(N)' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Am I sorted?"', options: ['Absolutely!', 'No way.', 'You are a bird.'], correctAnswer: 'Absolutely!' }
          ]
        },
        {
          title: 'Pair Sum K', desc: 'Find the dating match! ❤️', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Looking for a partner? This isn\'t Tinder! Let\'s find two numbers that sum up to K! The Naive bird uses nested loops... O(N^2)!"' },
            { type: 'teaching', questionText: '🦜 Pico: "Better way? Use Two Pointers on a SORTED array! Start and End convergance! 🦜"', codeSnippet: 'while(s < e) {\n  if(a[s] + a[e] == K) return true;\n  else if(a[s] + a[e] < K) s++;\n  else e--;\n}' },
            { type: 'teaching', questionText: '🦜 Pico: "Complexity: O(N) if sorted. O(N log N) if we have to sort first. Still better than quadratic slow-brains!"' },
            { type: 'teaching', questionText: '🦜 Pico: "Space: O(1) for the scan. O(N) if you use a Hash Set (we will learn that later!)"' },
            { type: 'teaching', questionText: '🦜 Pico: "Why use Two Pointers? Because the array is sorted, we KNOW increasing S increases the sum, and decreasing E decreases it!"' },
            { type: 'multiple_choice', questionText: 'In [1, 3, 5, 8] with K=8, what is the pair?', options: ['(1, 8)', '(3, 5)', '(1, 3)'], correctAnswer: '(3, 5)' },
            { type: 'match_following', questionText: 'Match the move!', pairs: [
              {key: 'Sum < K', value: 'Start++'}, {key: 'Sum > K', value: 'End--'}, {key: 'Sum == K', value: 'Jackpot!'}
            ] },
            { type: 'programming_board', questionText: 'Fix the sum check!', codeSnippet: 'if(arr[s] + arr[e] < K) ___++;\nelse ___--;', correctAnswer: 's|e' },
            { type: 'multiple_choice', questionText: 'Does this work on unsorted arrays?', options: ['No, must sort first.', 'Yes!', 'Only if I sing.'], correctAnswer: 'No, must sort first.' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Will you find your sum partner today?"', options: ['Maybe!', 'I hope so!', 'I like solo.'], correctAnswer: 'Maybe!' }
          ]
        },
        {
          title: 'Find Triplets Sum', desc: 'The Third Wheel! 🚲', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "A pair is a date, but a triplet is a party! Or a disaster! We want `a + b + c = K`. The Naive way? Triple nested loops... O(N^3)!!! Horrible!"' },
            { type: 'teaching', questionText: '🦜 Pico: "Better way: Fix one element `i`, then use a Two-Pointer scan for the remaining `(K - a[i])`! O(N^2) overall. Much faster! 🦜"', codeSnippet: 'for(int i=0; i<n-2; i++) {\n  int s=i+1, e=n-1;\n  while(s < e) {\n    if(a[i]+a[s]+a[e] == K) return true;\n    else if(a[i]+a[s]+a[e] < K) s++;\n    else e--;\n  }\n}' },
            { type: 'teaching', questionText: '🦜 Pico: "Complexity: O(N^2). It is quadratic, but compared to O(N^3), it is like a bird vs a snail!"' },
            { type: 'teaching', questionText: '🦜 Pico: "Don\'t forget! Sort the array FIRST or the Two-Pointer trick fails. 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Space: O(1) beyond the sorting space. Minimalist, I love it!"' },
            { type: 'multiple_choice', questionText: 'What is the optimized time complexity of finding a triplet sum?', options: ['O(N)', 'O(N^2)', 'O(N^3)', 'O(log N)'], correctAnswer: 'O(N^2)' },
            { type: 'match_following', questionText: 'Match it!', pairs: [
              {key: 'Fixed element', value: 'i'}, {key: 'Start', value: 'i+1'}, {key: 'End', value: 'n-1'}
            ] },
            { type: 'programming_board', questionText: 'Fix the triplet fixed index!', codeSnippet: 'for(int i=0; i < ___; i++) {\n  target = K - arr[i];\n  // ... search\n}', correctAnswer: 'n-2' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Does N^2 feel fast enough for millions of birds?"', options: ['Maybe!', 'No, too slow.', 'Depends on the bird.'], correctAnswer: 'Maybe!' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Can a triplet be all the same number?"', options: ['Yes', 'No', 'Only if I scream'], correctAnswer: 'Yes' }
          ]
        },
        {
          title: 'Majority Element', desc: 'The Politician! 🗳️', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "The Majority Element is a bird that appears more than N/2 times in the nest. It wins the election by default! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Boyer-Moore Voting Algorithm! This is a legendary Zoho trick. Linear time, O(1) space. O(N) magic!"', codeSnippet: 'for(int x : arr) {\n  if(count == 0) res = x;\n  if(x == res) count++;\n  else count--;\n}' },
            { type: 'teaching', questionText: '🦜 Pico: "Check later if the candidate actually has > N/2 votes. Some candidates Lie! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time: O(N). Count and compare. Space: O(1). One candidate, one counter!"' },
            { type: 'teaching', questionText: '🦜 Pico: "Why not sort? Sorting is O(N log N). Boyer-Moore is O(N). Be the bird that saves time!"' },
            { type: 'multiple_choice', questionText: 'In [3, 3, 4, 3, 2], who is the majority candidate?', options: ['3', '4', 'None', '2'], correctAnswer: '3' },
            { type: 'match_following', questionText: 'Match Boyer-Moore!', pairs: [
              {key: 'Count == 0', value: 'Update Candidate'}, {key: 'Same as Cand', value: 'Count++'}, {key: 'Different', value: 'Count--'}
            ] },
            { type: 'programming_board', questionText: 'Fix the candidate swap!', codeSnippet: 'if(count == ___) {\n  candidate = arr[i];\n  count = 1;\n}', correctAnswer: '0' },
            { type: 'multiple_choice', questionText: 'Does majority element ALWAYS exist?', options: ['Yes', 'No, check needed', 'Only if array is odd'], correctAnswer: 'No, check needed' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Would you vote for a Parrot as your majority leader?"', options: ['Squawk YES!', 'No, I want a cat.', 'Maybe!'], correctAnswer: 'Squawk YES!' }
          ]
        },
        {
          title: 'Equilibrium Index', desc: 'The Tightrope! ⚖️', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Equilibrium index is where the sum of birds on the left matches birds on the right. Perfectly balanced, unlike your diet! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Total Sum minus Left Sum minus Current Element equals Right Sum! Use this to save time! 🦜"', codeSnippet: 'int total = sum(arr);\nfor(int i=0; i<n; i++) {\n  total -= arr[i];\n  if(left_sum == total) return i;\n  left_sum += arr[i];\n}' },
            { type: 'teaching', questionText: '🦜 Pico: "Time: O(N). Two passes (one for total, one for index). Space: O(1)!"' },
            { type: 'teaching', questionText: '🦜 Pico: "Complexity: O(N). Avoid nested loops O(N^2) where you re-sum everything!"' },
            { type: 'teaching', questionText: '🦜 Pico: "Remember: Initial `left_sum` is zero. First bird has nothing behind it!"' },
            { type: 'multiple_choice', questionText: 'In [-7, 1, 5, 2, -4, 3, 0], which index is Equilibrium?', options: ['3', '4', '0', 'None'], correctAnswer: '3' },
            { type: 'match_following', questionText: 'Match the balance!', pairs: [
              {key: 'Left Sum', value: 'Total Sum'}, {key: 'Index', value: 'Equilibrium'}, {key: 'Summing', value: 'O(N)'}
            ] },
            { type: 'programming_board', questionText: 'Fix the balance check!', codeSnippet: 'total -= arr[i];\nif(left_sum == ___) return i;\nleft_sum += arr[i];', correctAnswer: 'total' },
            { type: 'multiple_choice', questionText: 'What if there are multiple equilibrium indices?', options: ['Return first', 'Fail', 'Sum them up'], correctAnswer: 'Return first' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Think I can balance on a wire?"', options: ['Yes!', 'No way.', 'You are too fat.'], correctAnswer: 'Yes!' }
          ]
        },
        {
          title: 'Missing Number', desc: 'Where did it go? 👻', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "An array of 1 to N, but one bird flew away! Where is it? Use the power of MATH! Sum of N numbers = N*(N+1)/2! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Subtract the array sum from the expected sum. The difference is the missing bird! 🦜"', codeSnippet: 'total = n * (n + 1) / 2;\nfor(int x : arr) total -= x;\nreturn total;' },
            { type: 'teaching', questionText: '🦜 Pico: "Watch out for Overflow! Sum can be huge for large N. Use XOR instead to be extra slick! 🦜"', codeSnippet: 'int x = 0;\nfor(int i=1; i<=n; i++) x ^= i;\nfor(int v : arr) x ^= v;\nreturn x;' },
            { type: 'teaching', questionText: '🦜 Pico: "Time: O(N). Only one pass. Space: O(1). No memory used!"' },
            { type: 'teaching', questionText: '🦜 Pico: "Why XOR? Because `a ^ a = 0`. All present numbers cancel out, leaving the ghost bird!"' },
            { type: 'multiple_choice', questionText: 'In [1, 2, 4, 5], sequence 1-5, who is missing?', options: ['3', 'None', '1'], correctAnswer: '3' },
            { type: 'match_following', questionText: 'Match techniques!', pairs: [
              {key: 'Math Sum', value: 'Easy, risky overflow'}, {key: 'XOR', value: 'Professional, bitwise'}, {key: 'HashSet', value: 'Memory hungry O(N)'}
            ] },
            { type: 'programming_board', questionText: 'Fix XOR missing!', codeSnippet: 'for(int i=0; i<n; i++) \n  res = res ^ arr[i] ^ (___+1);', correctAnswer: 'i' },
            { type: 'multiple_choice', questionText: 'Complexity of XOR approach?', options: ['O(N)', 'O(1)', 'O(log N)'], correctAnswer: 'O(N)' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "I missing something today?"', options: ['Your seeds!', 'Your brain!', 'Nothing!'], correctAnswer: 'Your seeds!' }
          ]
        },
        {
          title: 'Smallest Missing Positive', desc: 'The Ghost Child! 👻', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Finding the first missing positive integer... in UNSORTED chaos! O(N) time and O(1) space. This is a HARD Zoho favorite! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Cyclic Sort! Put every bird at its correct home: element `X` should be at index `X-1`. Then find the first home with the wrong bird! 🦜"', codeSnippet: 'while (a[i] > 0 && a[i] <= n && a[a[i]-1] != a[i]) \n  swap(a[i], a[a[i]-1]);' },
            { type: 'teaching', questionText: '🦜 Pico: "Ignore non-positives and numbers bigger than N. They aren\'t our problem birds! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time: O(N). Each swap puts one bird in its final place. Space: O(1) in-place!"' },
            { type: 'teaching', questionText: '🦜 Pico: "This is significantly faster than sorting O(N log N) or using a Hash Set O(N) space!"' },
            { type: 'multiple_choice', questionText: 'First Missing Positive in [3, 4, -1, 1]?', options: ['2', '1', '5', '-1'], correctAnswer: '2' },
            { type: 'match_following', questionText: 'Match logic!', pairs: [
              {key: 'Value X', value: 'Home X-1'}, {key: 'Invalid bird', value: 'Ignore'}, {key: 'Empty home', value: 'Result!'}
            ] },
            { type: 'programming_board', questionText: 'Fix the cyclic swap check!', codeSnippet: 'if(arr[i] > 0 && arr[i] <= n && arr[___-1] != arr[i])', correctAnswer: 'arr[i]' },
            { type: 'multiple_choice', questionText: 'Space complexity for cyclic sort?', options: ['O(1)', 'O(N)', 'O(log N)'], correctAnswer: 'O(1)' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Am I at my correct index in life?"', options: ['Yes!', 'No, go higher!', 'Squawk!'], correctAnswer: 'Yes!' }
          ]
        },
        {
          title: 'Sort 0s, 1s and 2s', desc: 'The Dutch National Flag! 🇳🇱', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Dutch National Flag algorithm! Sort array containing ONLY 0s, 1s, and 2s. Use Three Pointers: Low, Mid, and High! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Move 0s to Low, 2s to High, and let 1s float in the Mid! 🦜"', codeSnippet: 'while(mid <= high) {\n  if(a[mid] == 0) swap(a[low++], a[mid++]);\n  else if(a[mid] == 1) mid++;\n  else swap(a[mid], a[high--]);\n}' },
            { type: 'teaching', questionText: '🦜 Pico: "Linear time, single pass. Way better than standard sorting! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Complexity: O(N). Space: O(1). No fresh cage for these birds either!"' },
            { type: 'teaching', questionText: '🦜 Pico: "Crucial trick: Don\'t increment `mid` when swapping with `high`, because the bird from High is still unchecked! 🦜"' },
            { type: 'multiple_choice', questionText: 'In [2, 0, 1], after sorting?', options: ['[0, 1, 2]', '[1, 0, 2]', '[0, 2, 1]'], correctAnswer: '[0, 1, 2]' },
            { type: 'match_following', questionText: 'Match pointers!', pairs: [
              {key: 'Low', value: 'Zeros behind it'}, {key: 'Mid', value: 'Current/One area'}, {key: 'High', value: 'Twos ahead it'}
            ] },
            { type: 'programming_board', questionText: 'Fix the mid increment!', codeSnippet: 'else if(arr[mid] == 2) {\n  swap(arr[mid], arr[___]);\n  high--;\n}', correctAnswer: 'high' },
            { type: 'multiple_choice', questionText: 'Why not increment `mid` after swapping with `high`?', options: ['High bird is unknown', 'Mid bird is zero', 'Parrot rules!'], correctAnswer: 'High bird is unknown' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Which color do I like most?"', options: ['0 (White)', '1 (Blue)', '2 (Red)'], correctAnswer: '1 (Blue)' }
          ]
        },
        {
          title: 'Kadanes Algorithm', desc: 'Maximum Subarray Sum! 📈', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Find the CONTIGUOUS subarray with the largest sum! O(N) complexity. Kadane is king! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Keep adding elements to `current_sum`. If it becomes negative, DITCH IT! Start fresh at 0! 🦜"', codeSnippet: 'for(int x : arr) {\n  curr += x;\n  if(curr > max) max = curr;\n  if(curr < 0) curr = 0;\n}' },
            { type: 'teaching', questionText: '🦜 Pico: "Scenario: [-2, 1, -3, 4]. We ignore the negative starts and grab the 4. Smart bird! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Complexity: O(N). Only one pass. Space: O(1). Minimalist, clean, perfect!"' },
            { type: 'teaching', questionText: '🦜 Pico: "Watch out for all negative arrays! You must initialize `max` with the first element or `INT_MIN`."' },
            { type: 'multiple_choice', questionText: 'Max subarray sum of [-2, 1, -3, 4]?', options: ['4', '1', '6', '0'], correctAnswer: '4' },
            { type: 'match_following', questionText: 'Match logic!', pairs: [
              {key: 'Current Sum', value: 'Progress so far'}, {key: 'Negative Sum', value: 'Reset to 0'}, {key: 'Global Max', value: 'Final answer'}
            ] },
            { type: 'programming_board', questionText: 'Fix the negative reset!', codeSnippet: 'current_sum += arr[i];\nif(current_sum < ___) current_sum = 0;', correctAnswer: '0' },
            { type: 'multiple_choice', questionText: 'Worst case complexity of Kadane?', options: ['O(N)', 'O(N^2)', 'O(log N)'], correctAnswer: 'O(N)' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Am I at my peak sum right now?"', options: ['Increasing!', 'Stagnant.', 'Maxed out!'], correctAnswer: 'Increasing!' }
          ]
        },
        {
          title: 'Sliding Window Basics', desc: 'Slippery Slope! 🪟', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Fixed sized sliding window! Find the max sum of K consecutive elements. Don\'t re-sum every time, just slide! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Add the new bird arriving at the window, subtract the bird leaving the window! 🦜"', codeSnippet: 'sum += arr[i] - arr[i-k];' },
            { type: 'teaching', questionText: '🦜 Pico: "Initial window takes O(K). Sliding takes O(N-K). Total? O(N)! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "This is much better than O(N*K) naive sum logic. Birds don\'t like repeating work!"' },
            { type: 'teaching', questionText: '🦜 Pico: "Use this for moving averages, max-k-sum, and more! 🦜"' },
            { type: 'multiple_choice', questionText: 'In [1, 2, 3, 4] with K=2, max window sum?', options: ['3', '7', '5', '4'], correctAnswer: '7' },
            { type: 'match_following', questionText: 'Match operations!', pairs: [
              {key: 'New element', value: 'Add to window'}, {key: 'Old element', value: 'Subtract'}, {key: 'Window Size', value: 'K'}
            ] },
            { type: 'programming_board', questionText: 'Fix the slide!', codeSnippet: 'current_sum = current_sum + arr[i] - arr[___];', correctAnswer: 'i-k' },
            { type: 'multiple_choice', questionText: 'Time complexity of sliding window?', options: ['O(N)', 'O(K)', 'O(N^2)'], correctAnswer: 'O(N)' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Can I slide through your window for seeds?"', options: ['Yes!', 'Shoo!', 'Maybe.'], correctAnswer: 'Yes!' }
          ]
        },
        {
          title: 'Rotate Array', desc: 'Spinning Birds! 🎡', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Rotate an array by K steps! Right or Left? The Reversal Trick is the most elegant O(N) space O(1) way! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "1. Reverse first part. 2. Reverse second part. 3. Reverse the WHOLE thing! Mind blown! 🦜"', codeSnippet: 'reverse(a, 0, k-1);\nreverse(a, k, n-1);\nreverse(a, 0, n-1);' },
            { type: 'teaching', questionText: '🦜 Pico: "K can be larger than N! Use `K = K % N` to stay sane! A rotation of N is just the same array. Squawk!"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time: O(N). Space: O(1). No helper arrays needed. We are too poor for that! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Remember: Reversing K elements twice is O(N). It works like magic!"' },
            { type: 'multiple_choice', questionText: 'Rotate [1, 2, 3] right by 1?', options: ['[3, 1, 2]', '[2, 3, 1]', '[1, 2, 3]'], correctAnswer: '[3, 1, 2]' },
            { type: 'match_following', questionText: 'Match steps!', pairs: [
              {key: 'Rotate Right', value: 'Reverse whole at end'}, {key: 'K > N', value: 'K % N'}, {key: 'Helper Array', value: 'Lazy way (Space O(N))'}
            ] },
            { type: 'programming_board', questionText: 'Fix the K normalization!', codeSnippet: 'K = K ___ n;', correctAnswer: '%' },
            { type: 'multiple_choice', questionText: 'Space complexity of the Reversal Trick?', options: ['O(1)', 'O(N)', 'O(log N)'], correctAnswer: 'O(1)' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "How many times should I spin today?"', options: ['K times!', 'N times!', 'Dont spin.'], correctAnswer: 'K times!' }
          ]
        },
        {
          title: 'Stock Buy & Sell', desc: 'The Richest Bird! 💰', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Best time to buy and sell stock! You can only buy once and sell once. Maximize profit! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Track the `min_prize` so far. For each new prize, calculate `prize - min_prize`. Update `max_profit`! 🦜"', codeSnippet: 'for(int p : prices) {\n   min_p = min(min_p, p);\n   max_f = max(max_f, p - min_p);\n}' },
            { type: 'teaching', questionText: '🦜 Pico: "O(N) time. O(1) space. Become a billionaire bird while others use nested loops! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "You cannot sell before you buy! Check from left to right. No time travel, even for parrots!"' },
            { type: 'teaching', questionText: '🦜 Pico: "Wait! What if price only goes DOWN? Profit = 0. Sell nothing!"' },
            { type: 'multiple_choice', questionText: 'Stock prices [7, 1, 5, 3, 6, 4]. Max profit?', options: ['5', '6', '1', '4'], correctAnswer: '5' },
            { type: 'match_following', questionText: 'Match logic!', pairs: [
              {key: 'Lowest Price', value: 'Buy then'}, {key: 'Highest after buy', value: 'Sell then'}, {key: 'Profit', value: 'Sell - Buy'}
            ] },
            { type: 'programming_board', questionText: 'Fix the profit update!', codeSnippet: 'current_profit = price - min_price;\nif(current_profit > ___) max_profit = current_profit;', correctAnswer: 'max_profit' },
            { type: 'multiple_choice', questionText: 'Worst case time complexity?', options: ['O(N)', 'O(1)', 'O(N^2)'], correctAnswer: 'O(N)' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Should I buy high and sell low?"', options: ['No!', 'Only if you are a cat.', 'Maybe.'], correctAnswer: 'No!' }
          ]
        }
      ]
    },
    { 
      title: '2. Multidimensional Battlegrounds', 
      units: [
        {
          title: 'Matrix Intro: The Bird High-Rise', desc: 'Rows and columns of bird houses! 🏢', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Imagine a high-rise building for birds! Every house has a row and a column index. Matrix `A[i][j]` is just bird `j` on floor `i`! 🦜"', codeSnippet: 'for(int i=0; i<rows; i++) {\n  for(int j=0; j<cols; j++) {\n    printf("%d ", mat[i][j]);\n  }\n}' },
            { type: 'teaching', questionText: '🦜 Pico: "Row-major vs Column-major! Computers usually store rows together. Accessing by rows is faster than columns! Cache locality, human! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "A 2D array is really just a flat array in memory. `mat[i][j] = i * cols + j`. Mind blown? 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time to traverse: O(R*C). You have to visit every nest once. No magic here! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Remember: Indices start at 0. Don\'t fall off the roof of the high-rise! 🦜"' },
            { type: 'multiple_choice', questionText: 'How many elements in a 3x4 matrix?', options: ['7', '12', '1', '43'], correctAnswer: '12' },
            { type: 'match_following', questionText: 'Match coordinates!', pairs: [
              {key: 'mat[0][0]', value: 'Top Left'}, {key: 'mat[r-1][c-1]', value: 'Bottom Right'}, {key: 'mat[i][j]', value: 'Row i, Col j'}
            ] },
            { type: 'programming_board', questionText: 'Fix the nested loop!', codeSnippet: 'for(int i=0; i<rows; i++) {\n  for(int j=0; j<___; j++) {\n    // ...\n  }\n}', correctAnswer: 'cols' },
            { type: 'multiple_choice', questionText: 'What is O(R*C) if rows=N and cols=N?', options: ['O(N)', 'O(N^2)', 'O(log N)'], correctAnswer: 'O(N^2)' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Can I live on the top floor?"', options: ['Yes!', 'No, only seeds.', 'Maybe.'], correctAnswer: 'Yes!' }
          ]
        },
        {
          title: 'Spiral Traversal', desc: 'Flying in circles! 🌀', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Flying in circles? My specialty! Let\'s fly around the perimeter and spin inwards! Zoho loves this one! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "4 pointers: Top, Bottom, Left, Right. Print a side, then shrink the boundary! 🦜"', codeSnippet: 'while(top <= bottom && left <= right) {\n  // Go Right\n  for(int i=left; i<=right; i++) print(mat[top][i]);\n  top++;\n  // ... and so on\n}' },
            { type: 'teaching', questionText: '🦜 Pico: "Complexity: O(R*C). Every cell is visited once. No dizziness allowed! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Space: O(1) if we just print. Don\'t store what you already have! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Watch out! After moving Top or Right, double-check if boundaries still overlap before moving back! 🦜"' },
            { type: 'multiple_choice', questionText: 'How many directions in a spiral cycle?', options: ['2', '4', '8', 'Circular'], correctAnswer: '4' },
            { type: 'match_following', questionText: 'Match movement!', pairs: [
              {key: 'Left to Right', value: 'top++'}, {key: 'Top to Bottom', value: 'right--'}, {key: 'Right to Left', value: 'bottom--'}
            ] },
            { type: 'programming_board', questionText: 'Fix bottom-up crawl!', codeSnippet: 'if(left <= right) {\n  for(int i = bottom; i >= top; i--) \n     printf("%d", mat[i][___]);\n  left++;\n}', correctAnswer: 'left' },
            { type: 'multiple_choice', questionText: 'In a 1x5 matrix, what is the traversal?', options: ['Linear row', 'A circle', 'Impossible'], correctAnswer: 'Linear row' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Did you get dizzy?"', options: ['Not yet!', 'A little.', 'Squawk!'], correctAnswer: 'Not yet!' }
          ]
        },
        {
          title: 'Transpose Matrix', desc: 'Flip the grid! 🔄', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Flip the grid! Rows become columns! Vertical birds become horizontal! It\'s a gymnastics show! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Swap `mat[i][j]` with `mat[j][i]`. Only do this for the upper triangle `(j > i)` or you\'ll swap them twice and end up where you started! 🦜"', codeSnippet: 'for(int i=0; i<n; i++)\n  for(int j=i+1; j<n; j++)\n    swap(mat[i][j], mat[j][i]);' },
            { type: 'teaching', questionText: '🦜 Pico: "This is for a SQUARE matrix. If it is rectangular, you need a new matrix! O(R*C) space! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(N^2) for square. It is half the work but still O(N^2) in big-O land! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Memory tip: In-place transpose saves a lot of seeds! 🦜"' },
            { type: 'multiple_choice', questionText: 'Transpose of [[1, 2], [3, 4]]?', options: ['[[1, 3], [2, 4]]', '[[4, 3], [2, 1]]', '[[1, 2], [3, 4]]'], correctAnswer: '[[1, 3], [2, 4]]' },
            { type: 'match_following', questionText: 'Match logic!', pairs: [
              {key: 'j > i', value: 'Upper Triangle'}, {key: 'j < i', value: 'Lower Triangle'}, {key: 'j == i', value: 'Diagonal (stays put!)'}
            ] },
            { type: 'programming_board', questionText: 'Fix swap range!', codeSnippet: 'for(int j = ___ + 1; j < n; j++) {\n  swap(mat[i][j], mat[j][i]);\n}', correctAnswer: 'i' },
            { type: 'multiple_choice', questionText: 'Space complexity for in-place transpose?', options: ['O(N^2)', 'O(1)', 'O(N)'], correctAnswer: 'O(1)' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Am I upside down now?"', options: ['Maybe!', 'No.', 'Bird acrobatics!'], correctAnswer: 'Maybe!' }
          ]
        },
        {
          title: 'Rotate Matrix 90 Degrees', desc: 'sideways building! 🏗️', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Grab the building and TILT it 90 degrees clockwise! Zoho\'s classic! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Secret 2-step technique: 1. Transpose the matrix. 2. Reverse each row! Boom! Rotation! 🦜"', codeSnippet: 'transpose(mat);\nfor(int i=0; i<n; i++) reverseRow(mat[i]);' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(N^2). It is very efficient. Space: O(1) in-place! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Wait! What if you want counter-clockwise? Reverse rows THEN transpose! Or transpose THEN reverse columns! Parrots love choices! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Remember: `mat[i][j]` maps to `mat[j][n-1-i]` in a single rotation swoop! 🦜"' },
            { type: 'multiple_choice', questionText: 'Step 1 of 90 deg clockwise rotation?', options: ['Reverse', 'Transpose', 'Delete'], correctAnswer: 'Transpose' },
            { type: 'match_following', questionText: 'Match Steps!', pairs: [
              {key: 'Step 1', value: 'Transpose'}, {key: 'Step 2', value: 'Reverse Rows'}, {key: 'Result', value: '90 deg Clockwise'}
            ] },
            { type: 'programming_board', questionText: 'Fix the rotation row reverse!', codeSnippet: 'for(int i=0; i<n; i++) {\n  reverse(mat[i], 0, ___ - 1);\n}', correctAnswer: 'n' },
            { type: 'multiple_choice', questionText: 'Can you rotate a rectangular matrix in-place?', options: ['No, space O(R*C) needed', 'Yes, always', 'Only if I sing'], correctAnswer: 'No, space O(R*C) needed' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Shall we spin again?"', options: ['YES!', 'I am dizzy.', 'Maybe.'], correctAnswer: 'YES!' }
          ]
        },
        {
          title: 'Search in 2D Matrix', desc: 'Find the birdhouse! 🕵️', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "The grid is sorted! Rows are sorted! Columns are sorted! How do you find a bird? Don\'t scan everyone, you\'re not a snail! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Start at Top-Right! If `target < val`, move LEFT. If `target > val`, move DOWN! O(M+N) complexity! 🦜"', codeSnippet: 'int r=0, c=cols-1;\nwhile(r < rows && c >= 0) {\n  if(mat[r][c] == K) return true;\n  else if(mat[r][c] > K) c--;\n  else r++;\n}' },
            { type: 'teaching', questionText: '🦜 Pico: "Why Top-Right? Because from there, you can ELIMINATE a whole row or column in one step! Binary search hybrid! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time: O(Rows + Cols). Space: O(1). Fast enough to catch a worm! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Think: Can you use total binary search if the whole array is flattened sorted? YES! O(log (R*C)). 🦜"' },
            { type: 'multiple_choice', questionText: 'Target 5 in [[1, 3], [4, 6]]? Start at 3...', options: ['Target > 3, move down', 'Target > 3, move left', 'Found!'], correctAnswer: 'Target > 3, move down' },
            { type: 'match_following', questionText: 'Match logic!', pairs: [
              {key: 'mat[r][c] > target', value: 'Move Left (c--)'}, {key: 'mat[r][c] < target', value: 'Move Down (r++)'}, {key: 'mat[r][c] == target', value: 'Jackpot!'}
            ] },
            { type: 'programming_board', questionText: 'Fix search start!', codeSnippet: 'int r = 0, c = ___ - 1;\nwhile(r < rows && c >= 0)', correctAnswer: 'cols' },
            { type: 'multiple_choice', questionText: 'Complexity of naive search?', options: ['O(R*C)', 'O(R+C)', 'O(1)'], correctAnswer: 'O(R*C)' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Found me yet?"', options: ['Searching...', 'Yes!', 'Not yet.'], correctAnswer: 'Yes!' }
          ]
        },
        {
          title: 'Row with Max Ones', desc: 'Where are the birds? 🦜', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Binary matrix (only 0s and 1s). Rows are sorted! Which row has the most 1s? 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Start at Top-Right. If you see a 1, move LEFT to see if you can find more! If you see a 0, move DOWN. O(R+C) time! 🦜"', codeSnippet: 'int r=0, c=cols-1;\nwhile(r < rows && c >= 0) {\n  if(mat[r][c] == 1) { max_r = r; c--; }\n  else r++;\n}' },
            { type: 'teaching', questionText: '🦜 Pico: "Complexity: O(Rows + Cols). You only move left or down. Never back! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Standard approach: O(R log C) using binary search on each row. My way is faster! Parrots for the win! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Space: O(1). Minimalism is bird-fashion! 🦜"' },
            { type: 'multiple_choice', questionText: 'Row 1: [0, 1, 1], Row 2: [0, 0, 1]. Max 1s?', options: ['Row 1', 'Row 2', 'None'], correctAnswer: 'Row 1' },
            { type: 'match_following', questionText: 'Match the move!', pairs: [
              {key: 'See a 1', value: 'Update MaxRow & Move Left'}, {key: 'See a 0', value: 'Move Down'}, {key: 'End of Grid', value: 'Done!'}
            ] },
            { type: 'programming_board', questionText: 'Fix max-one scan!', codeSnippet: 'if(mat[r][c] == 1) {\n  result = r;\n  ___--;\n}', correctAnswer: 'c' },
            { type: 'multiple_choice', questionText: 'Complexity of binary search on each row?', options: ['O(R log C)', 'O(R+C)', 'O(C)'], correctAnswer: 'O(R log C)' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Am I the #1 bird?"', options: ['Yes!', 'Of course!', 'Squawk!'], correctAnswer: 'Yes!' }
          ]
        },
        {
          title: 'Sorted Matrix Median', desc: 'The Middle Bird! 🦜', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "The Median is the middle bird of the flock when sorted. In a 2D sorted matrix, this is a legendary Zoho HARD! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Binary Search on VALUE range! Let `min` = mat[0][0] and `max` = mat[r-1][c-1]. For `mid`, count how many birds are <= `mid`. 🦜"', codeSnippet: 'while(min < max) {\n  int mid = (min+max)/2;\n  if(countLTE(mat, mid) < target) min = mid+1;\n  else max = mid;\n}' },
            { type: 'teaching', questionText: '🦜 Pico: "Complexity: O(R * log C * log(ValueRange)). Efficient enough for a king! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Count birds <= X using `upper_bound` on each row. O(R log C)! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Memory: O(1) beyond the matrix itself. 🦜"' },
            { type: 'multiple_choice', questionText: 'Where is the possible median range?', options: ['First element to Last', 'Always in Middle row', 'Only top-left'], correctAnswer: 'First element to Last' },
            { type: 'match_following', questionText: 'Match roles!', pairs: [
              {key: 'min', value: 'Smallest bird'}, {key: 'max', value: 'Largest bird'}, {key: 'countLTE', value: 'How many <= mid?'}
            ] },
            { type: 'programming_board', questionText: 'Fix mid value range!', codeSnippet: 'while(min < max) {\n  int mid = min + (___ - min)/2;\n  // ...\n}', correctAnswer: 'max' },
            { type: 'multiple_choice', questionText: 'Is O(N^2) sorting too slow?', options: ['Yes!', 'No, it is fine.', 'Depends on N.'], correctAnswer: 'Yes!' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Who is the median bird in your heart?"', options: ['Pico!', 'Pico!', 'Pico!'], correctAnswer: 'Pico!' }
          ]
        },
        {
          title: 'Diagonal Traversal', desc: 'Flying at an angle! 📐', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Zig-zag diagonal traversal! 1, 2, 4, 7, 5, 3... This tests your control over row/column indices like a pro pilot! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Sum of indices `i+j` is constant for each diagonal! 0 -> 1 -> 2 ... 🦜"', codeSnippet: 'for(int s=0; s <= rows+cols-2; s++) {\n  if(s % 2 == 0) // Upwards\n  else // Downwards\n}' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(R*C). Space: O(1) if printing! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Direction matters! Even sums move UP, Odd sums move DOWN. Or vice versa! Flip the flap! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Boundary check is the key: `i < rows && j < cols`. 🦜"' },
            { type: 'multiple_choice', questionText: 'What is the constant value on a diagonal?', options: ['i + j', 'i * j', 'i - j'], correctAnswer: 'i + j' },
            { type: 'match_following', questionText: 'Match directions!', pairs: [
              {key: 'Upwards', value: 'r--, c++'}, {key: 'Downwards', value: 'r++, c--'}, {key: 'Horizontal', value: 'Boring!'}
            ] },
            { type: 'programming_board', questionText: 'Fix diagonal sum!', codeSnippet: 'for(int sum = 0; sum <= ___ + cols - 2; sum++)', correctAnswer: 'rows' },
            { type: 'multiple_choice', questionText: 'How many diagonals in N x N?', options: ['2N - 1', 'N', 'N^2'], correctAnswer: '2N - 1' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Can you fly diagonally?"', options: ['Easily!', 'No.', 'Trying...'], correctAnswer: 'Easily!' }
          ]
        },
        {
          title: 'Matrix Multiplication', desc: 'Math Bird! ✖️', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "One grid times another! Math bird! Multiply Row of A with Column of B! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Constraint: Columns of A MUST match Rows of B! Otherwise, NO seeds for you! 🦜"', codeSnippet: 'for(int i=0; i<r1; i++)\n  for(int j=0; j<c2; j++)\n    for(int k=0; k<c1; k++)\n      res[i][j] += a[i][k] * b[k][j];' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(R1 * C1 * C2). It is a triple loop! Quadratic? No, Cubic! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Space complexity: O(R1 * C2) for the result matrix. High rent! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "This is the backbone of AI and Graphics. Without this, no parrot videos! 🦜"' },
            { type: 'multiple_choice', questionText: 'Multiply (2x3) and (3x4). Result size?', options: ['2x4', '3x3', '2x3'], correctAnswer: '2x4' },
            { type: 'match_following', questionText: 'Match limits!', pairs: [
              {key: 'i', value: 'r1'}, {key: 'j', value: 'c2'}, {key: 'k', value: 'c1 (or r2)'}
            ] },
            { type: 'programming_board', questionText: 'Fix the triple loop limit!', codeSnippet: 'for(int k = 0; k < ___; k++) {\n  res[i][j] += A[i][k] * B[k][j];\n}', correctAnswer: 'c1' },
            { type: 'multiple_choice', questionText: 'Is matrix multiplication commutative (A*B = B*A)?', options: ['No', 'Yes', 'Only for birds'], correctAnswer: 'No' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "How many nested loops?"', options: ['3', '2', '1'], correctAnswer: '3' }
          ]
        },
        {
          title: 'Set Matrix Zeroes', desc: 'Zero contagion! 🦠', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "If a bird house is 0, the WHOLE row and column must become 0! A virus of zeroes! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Don\'t update in-place immediately! Or the whole grid will become 0! Use the first row and column as your markers! 🦜"', codeSnippet: 'if(matrix[i][j] == 0) {\n  matrix[i][0] = 0;\n  matrix[0][j] = 0;\n}' },
            { type: 'teaching', questionText: '🦜 Pico: "Complexity: O(R*C) time and O(1) space if you use the marker trick! Efficient, like a minimalist nest! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Handle the first row and column separately using flags. They are the leaders! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Scenario: [[1, 0], [1, 1]] becomes [[0, 0], [1, 0]]. The zero spreads! 🦜"' },
            { type: 'multiple_choice', questionText: 'What happens if you update in-place without markers?', options: ['The whole matrix becomes 0', 'It works fine', 'The app crashes'], correctAnswer: 'The whole matrix becomes 0' },
            { type: 'match_following', questionText: 'Match roles!', pairs: [
              {key: 'row0 flag', value: 'First row state'}, {key: 'col0 flag', value: 'First col state'}, {key: 'A[i][0]', value: 'Row i marker'}
            ] },
            { type: 'programming_board', questionText: 'Fix marker update!', codeSnippet: 'if(matrix[i][j] == 0) {\n  matrix[i][0] = 0;\n  matrix[0][___] = 0;\n}', correctAnswer: 'j' },
            { type: 'multiple_choice', questionText: 'What is the space complexity of using a separate set for rows and cols?', options: ['O(R+C)', 'O(1)', 'O(R*C)'], correctAnswer: 'O(R+C)' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Am I a zero?"', options: ['No, #1!', 'Maybe.', 'Squawk!'], correctAnswer: 'No, #1!' }
          ]
        },
        {
          title: 'Island Counter (Intro)', desc: 'How many bird islands? 🏝️', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "A grid of 1s (land) and 0s (water). How many connected islands? This is DFS/BFS territory! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "When you find land, visit every neighbor and sink them (turn to 0) so you don\'t count them again! 🦜"', codeSnippet: 'void dfs(int r, int c) {\n  if(outOfBounds || water) return;\n  sink(r, c);\n  dfs(r+1, c); dfs(r-1, c); ...\n}' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(R*C). You visit each cell once. 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Space complexity: O(R*C) in worst case for the recursion stack. Deep water! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Each DFS call represents one island found! 🦜"' },
            { type: 'multiple_choice', questionText: 'What does "sinking" an island mean?', options: ['Turning 1s to 0s', 'Deleting matrix', 'Moving to next row'], correctAnswer: 'Turning 1s to 0s' },
            { type: 'match_following', questionText: 'Match neighbors!', pairs: [
              {key: 'r+1, c', value: 'Down'}, {key: 'r-1, c', value: 'Up'}, {key: 'r, c+1', value: 'Right'}
            ] },
            { type: 'programming_board', questionText: 'Fix DFS base case!', codeSnippet: 'if(r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] == ___) return;', correctAnswer: '0' },
            { type: 'multiple_choice', questionText: 'Could BFS be used here?', options: ['Yes', 'No', 'Only for birds'], correctAnswer: 'Yes' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Want to live on an island?"', options: ['YES!', 'No, too salty.', 'Seeds first.'], correctAnswer: 'YES!' }
          ]
        },
        {
          title: 'Max Square Area', desc: 'The biggest cage! ⬛', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Find the largest square of 1s in a binary matrix. Dynamic Programming bird! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "The value of `dp[i][j]` is `1 + min(top, left, top-left neighbors)`. It\'s like building a nest! 🦜"', codeSnippet: 'dp[i][j] = 1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]);' },
            { type: 'teaching', questionText: '🦜 Pico: "Time: O(R*C). Space: O(R*C) or O(C) if you\'re a very smart bird! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "The result is the SQUARE of the max value found in the DP table! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Base cases: First row and column stay as they are! 🦜"' },
            { type: 'multiple_choice', questionText: 'Operation to find square size?', options: ['Min of neighbors + 1', 'Max of neighbors', 'Sum'], correctAnswer: 'Min of neighbors + 1' },
            { type: 'match_following', questionText: 'Match neighbors!', pairs: [
              {key: 'dp[i-1][j]', value: 'Top'}, {key: 'dp[i][j-1]', value: 'Left'}, {key: 'dp[i-1][j-1]', value: 'Corner'}
            ] },
            { type: 'programming_board', questionText: 'Fix DP update!', codeSnippet: 'if(grid[i][j] == 1) {\n  dp[i][j] = 1 + min(dp[i-1][j], min(dp[i][j-1], ___));\n}', correctAnswer: 'dp[i-1][j-1]' },
            { type: 'multiple_choice', questionText: 'Space complexity if using a new matrix?', options: ['O(R*C)', 'O(1)', 'O(N)'], correctAnswer: 'O(R*C)' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Is a square better than a circle?"', options: ['Cages are squares!', 'I like both.', 'Seeds!'], correctAnswer: 'Cages are squares!' }
          ]
        },
        {
          title: 'Matrix Snake Pattern', desc: 'Slither through! 🐍', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Snake pattern! Left-to-right, then right-to-left! Slither like a snake through the bird cages! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "If Row is EVEN, go forward. If Row is ODD, go backward! Simple as flapping! 🦜"', codeSnippet: 'for(int i=0; i<rows; i++) {\n  if(i % 2 == 0) for(int j=0; j<cols; j++) print(mat[i][j]);\n  else for(int j=cols-1; j>=0; j--) print(mat[i][j]);\n}' },
            { type: 'teaching', questionText: '🦜 Pico: "Complexity: O(R*C). Just a walk in the park! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Space: O(1). No memory used! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Zoho uses this to test your loop control. Don\'t trip! 🦜"' },
            { type: 'multiple_choice', questionText: 'What direction for odd index row (starting at 0)?', options: ['Backward', 'Forward', 'Diagonal'], correctAnswer: 'Backward' },
            { type: 'match_following', questionText: 'Match row types!', pairs: [
              {key: 'Even Row', value: '0 to cols-1'}, {key: 'Odd Row', value: 'cols-1 to 0'}, {key: 'Zig-zag', value: 'Snake!'}
            ] },
            { type: 'programming_board', questionText: 'Fix snake reverse loop!', codeSnippet: 'for(int j = ___ - 1; j >= 0; j--) {\n  printf("%d", mat[i][j]);\n}', correctAnswer: 'cols' },
            { type: 'multiple_choice', questionText: 'Is this faster than spiral?', options: ['Same speed O(R*C)', 'Faster', 'Slower'], correctAnswer: 'Same speed O(R*C)' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Are snakes scary?"', options: ['Very!', 'Not for me.', 'Squawk!'], correctAnswer: 'Very!' }
          ]
        },
        {
          title: 'Boundary Elements', desc: 'Just the edges! 🖼️', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Just the perimeter birds! Ignore the interior house-bodies! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Print the first row, last column, last row, and first column. Watch for duplicates at the corners! 🦜"', codeSnippet: 'for(int j=0; j<cols; j++) print(mat[0][j]);\nfor(int i=1; i<rows; i++) print(mat[i][cols-1]);\n...' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(R+C). You only touch the boundaries! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Space: O(1). Minimalist bird! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Special case: 1x1 or 1xN matrix. Don\'t print the same bird twice! 🦜"' },
            { type: 'multiple_choice', questionText: 'Complexity of printing just the boundary?', options: ['O(R+C)', 'O(R*C)', 'O(1)'], correctAnswer: 'O(R+C)' },
            { type: 'match_following', questionText: 'Match corners!', pairs: [
              {key: 'mat[0][0]', value: 'Top Left'}, {key: 'mat[0][c-1]', value: 'Top Right'}, {key: 'mat[r-1][0]', value: 'Bottom Left'}
            ] },
            { type: 'programming_board', questionText: 'Fix last row boundary!', codeSnippet: 'for(int j = cols - 2; j >= 0; j--)\n  printf("%d", mat[___ - 1][j]);', correctAnswer: 'rows' },
            { type: 'multiple_choice', questionText: 'How many elements in the boundary of NxN?', options: ['4N-4', 'N^2', '2N'], correctAnswer: '4N-4' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Can I sit on the edge?"', options: ['Yes!', 'Watch out!', 'Squawk!'], correctAnswer: 'Yes!' }
          ]
        },
        {
          title: 'Symmetric Matrix Check', desc: 'Left wing == Right wing! 🦋', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Is the matrix symmetric? Does `mat[i][j]` match `mat[j][i]`? Like a mirror in the sky! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Only square matrices can be symmetric. Check the upper triangle vs lower triangle! 🦜"', codeSnippet: 'if(mat[i][j] != mat[j][i]) return false;' },
            { type: 'teaching', questionText: '🦜 Pico: "Time: O(N^2). Half the work is still quadratic! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Space: O(1). No helper arrays needed! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "A symmetric matrix is its own transpose! 🦜"' },
            { type: 'multiple_choice', questionText: 'Condition for symmetry?', options: ['mat[i][j] == mat[j][i]', 'mat[i][j] == mat[j][n-1]', 'None'], correctAnswer: 'mat[i][j] == mat[j][i]' },
            { type: 'match_following', questionText: 'Match properties!', pairs: [
              {key: 'Symmetric', value: 'A = A^T'}, {key: 'Square', value: 'Rows == Cols'}, {key: 'Check', value: 'O(N^2)'}
            ] },
            { type: 'programming_board', questionText: 'Fix symmetry check!', codeSnippet: 'if(mat[i][j] ___ mat[j][i]) return false;', correctAnswer: '!=' },
            { type: 'multiple_choice', questionText: 'Are all diagonal matrices symmetric?', options: ['Yes', 'No', 'Only if I sing'], correctAnswer: 'Yes' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Am I symmetric?"', options: ['Beautifully!', 'Kind of.', 'Squawk!'], correctAnswer: 'Beautifully!' }
          ]
        },
        {
          title: 'Toeplitz Matrix', desc: 'Slippery Diagonals! 🎢', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Toeplitz matrix! Every descendant diagonal has the same birds! Diagonal birds are twins! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Check if `mat[i][j] == mat[i-1][j-1]` for all `i, j > 0`. 🦜"', codeSnippet: 'if(mat[i][j] != mat[i-1][j-1]) return false;' },
            { type: 'teaching', questionText: '🦜 Pico: "Time: O(R*C). Space: O(1). Efficient as a feather! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "The diagonals are constant. Like my love for seeds! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Complexity: O(R*C). Parrots hate slow traversals! 🦜"' },
            { type: 'multiple_choice', questionText: 'Condition for Toeplitz?', options: ['mat[i][j] == mat[i-1][j-1]', 'mat[i][j] == mat[j][i]', 'None'], correctAnswer: 'mat[i][j] == mat[i-1][j-1]' },
            { type: 'match_following', questionText: 'Match types!', pairs: [
              {key: 'Toeplitz', value: 'Diagonal constant'}, {key: 'Identity', value: 'Diag 1, rest 0'}, {key: 'Scalar', value: 'Diag X, rest 0'}
            ] },
            { type: 'programming_board', questionText: 'Fix Toeplitz check!', codeSnippet: 'for(int i=1; i<r; i++) {\n  for(int j=1; j<c; j++) {\n    if(mat[i][j] ___ mat[i-1][j-1]) return false;\n  }\n}', correctAnswer: '!=' },
            { type: 'multiple_choice', questionText: 'Complexity?', options: ['O(R*C)', 'O(1)', 'O(N)'], correctAnswer: 'O(R*C)' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Want to slide down the diagonal?"', options: ['YES!', 'No.', 'Seeds first.'], correctAnswer: 'YES!' }
          ]
        },
        {
          title: 'Flood Fill Algorithm', desc: 'Spreading the paint! 🎨', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Flood fill! Like MS Paint bucket tool. Fill an area of same-colored birds with a new color! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Use recursion (DFS) to spread the paint! Don\'t paint the same bird twice or you\'ll loop forever! 🦜"', codeSnippet: 'void fill(int r, int c, int oldC, int newC) {\n  if(notMatching || visited) return;\n  set(r, c, newC);\n  fill(neighbors...);\n}' },
            { type: 'teaching', questionText: '🦜 Pico: "Time: O(R*C). Space: O(R*C) for the recursion stack. Messy but fast! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Useful for image processing, games, and counting bird flock areas! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Base case: Check if color is already the target color to avoid endless loops! 🦜"' },
            { type: 'multiple_choice', questionText: 'What is the base case to avoid recursion loop?', options: ['color == targetColor', 'color == oldColor', 'r < 0'], correctAnswer: 'color == targetColor' },
            { type: 'match_following', questionText: 'Match logic!', pairs: [
              {key: 'Old Color', value: 'What to replace'}, {key: 'New Color', value: 'What to paint'}, {key: 'DFS', value: 'The spreader'}
            ] },
            { type: 'programming_board', questionText: 'Fix Flood Fill boundary!', codeSnippet: 'if(r < 0 || r >= R || c < 0 || c ___ C || mat[r][c] != old) return;', correctAnswer: '>=' },
            { type: 'multiple_choice', questionText: 'Could BFS be used?', options: ['Yes', 'No', 'Only for birds'], correctAnswer: 'Yes' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "What color should I be?"', options: ['Blue!', 'Green!', 'Gold!'], correctAnswer: 'Blue!' }
          ]
        },
        {
          title: 'Matrix Word Search', desc: 'Can you see it? 🕵️', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Word search in a grid! Can you find the word SEED hidden in my cages? Horizontal and Vertical only! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Backtracking! If current char matches, move to next! If it fails, undo and try another direction! 🦜"', codeSnippet: 'if(checkWord(r, c, index+1)) return true;\nmarkAsVisited(r, c);\n... backtrack(r, c);' },
            { type: 'teaching', questionText: '🦜 Pico: "Time: O(R * C * 3^Length). Space: O(Length) recursion stack. Scary math! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Complexity: High, but we prune branches fast! Parrots are good at pruning! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Zoho uses this to test your recursive thinking. 🦜"' },
            { type: 'multiple_choice', questionText: 'What technique is used here?', options: ['Backtracking', 'Sorting', 'Hashing'], correctAnswer: 'Backtracking' },
            { type: 'match_following', questionText: 'Match steps!', pairs: [
              {key: 'Match', value: 'Recurse neighbors'}, {key: 'Mismatch', value: 'Return false'}, {key: 'End', value: 'Found!'}
            ] },
            { type: 'programming_board', questionText: 'Fix word recursion!', codeSnippet: 'if(mat[r][c] == word[k]) {\n  if(k == len - 1) return true;\n  return solve(k + ___);\n}', correctAnswer: '1' },
            { type: 'multiple_choice', questionText: 'Can you visit the same cell twice for one word?', options: ['No', 'Yes', 'Only with seeds'], correctAnswer: 'No' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Did you find SEED?"', options: ['YES!', 'Searching...', 'No.'], correctAnswer: 'YES!' }
          ]
        },
        {
          title: 'Rotate Matrix Shells', desc: 'Outer birds move! 🐚', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Rotate only the outer shells! Outer layer moves, inner birds stay put and watch the show! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Treat each shell as a 1D array, rotate it, and put it back. Or use 4 pointer swap! 🦜"', codeSnippet: 'int temp = mat[top][left];\n// ... shift every boundary bird' },
            { type: 'teaching', questionText: '🦜 Pico: "Time: O(R+C) per shell. Total O(R*C). Space: O(1) if in-place! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Complexity: O(N^2) total for full rotation by shells. 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Wait! Shell rotation is like a circular conveyor belt for birds! 🦜"' },
            { type: 'multiple_choice', questionText: 'In a 3x3 matrix, how many shells?', options: ['2', '1', '3'], correctAnswer: '2' },
            { type: 'match_following', questionText: 'Match shell!', pairs: [
              {key: 'Outer', value: 'Biggest perimeter'}, {key: 'Center', value: 'Smallest'}, {key: 'Rotation', value: 'Shift birds'}
            ] },
            { type: 'programming_board', questionText: 'Fix shell top-boundary shift!', codeSnippet: 'for(int j = left; j < right; j++)\n  mat[top][j] = mat[top][___];', correctAnswer: 'j+1' },
            { type: 'multiple_choice', questionText: 'Does shell rotation affect the center bird in 3x3?', options: ['No', 'Yes', 'Only if I sing'], correctAnswer: 'No' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Final matrix question! Ready for Stage 3?"', options: ['YES!', 'Seeds first.', 'Squawk!'], correctAnswer: 'YES!' }
          ]
        }
      ] 
    },
    { 
      title: '3. The Two-Pointer Duel', 
      units: [
        {
          title: 'Remove Duplicates II', desc: 'Twice is fine, thrice is a crime! 🦜', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Wait! We can keep TWO of each bird? You\'re getting soft! Before we kept 1, now we allow a pair! 🦜"', codeSnippet: 'int i = 0;\nfor(int n : nums) {\n  if(i < 2 || n > nums[i-2]) nums[i++] = n;\n}' },
            { type: 'teaching', questionText: '🦜 Pico: "The logic is: If the current bird `n` is bigger than the bird two positions back, it is safe to add! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Linear time O(N). Constant space O(1). In-place! Parrots hate extra arrays! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Remember: This only works on SORTED arrays. Chaos birds don\'t follow rules! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Result? [1, 1, 1, 2] becomes [1, 1, 2]. 🦜"' },
            { type: 'multiple_choice', questionText: 'Max count of each number allowed?', options: ['1', '2', 'N', '0'], correctAnswer: '2' },
            { type: 'match_following', questionText: 'Match logic!', pairs: [
              {key: 'i < 2', value: 'Always add first two birds'}, {key: 'n > nums[i-2]', value: 'Differs from grand-parent bird'}, {key: 'Result', value: 'New length'}
            ] },
            { type: 'programming_board', questionText: 'Fix index check!', codeSnippet: 'if(i < 2 || n ___ nums[i-2]) {\n  nums[i++] = n;\n}', correctAnswer: '>' },
            { type: 'multiple_choice', questionText: 'Time complexity?', options: ['O(1)', 'O(N)', 'O(N^2)'], correctAnswer: 'O(N)' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Can we keep three birds next time?"', options: ['Maybe!', 'No!', 'Ask the cat.'], correctAnswer: 'Maybe!' }
          ]
        },
        {
          title: 'Sum of Three (3Sum)', desc: 'The party grows! 🥳', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Find all UNIQUE triplets that sum to 0! This is a Zoho Elite favorite! Double the challenge! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "1. Sort the array. 2. Fix the first bird. 3. Use Two Pointers on the rest! 🦜"', codeSnippet: 'for(int i=0; i<n-2; i++) {\n  if(i>0 && a[i]==a[i-1]) continue; // Skip dupes\n  while(l < r) {\n     // Two pointers scan\n  }\n}' },
            { type: 'teaching', questionText: '🦜 Pico: "Complexity: O(N^2). Sorting takes N log N but the nested loop dominates! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Avoid duplicates! If the current bird is the same as the previous, SKIP it! We don\'t want repeats! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Space complexity: O(1) beyond the result storage. Minimalist, I love it! 🦜"' },
            { type: 'multiple_choice', questionText: 'Initial step for 3Sum?', options: ['Sort the array', 'Add all numbers', 'Shuffle'], correctAnswer: 'Sort the array' },
            { type: 'match_following', questionText: 'Match pointers!', pairs: [
              {key: 'Fixed i', value: 'Anchor bird'}, {key: 'Left', value: 'i+1'}, {key: 'Right', value: 'End of nest'}
            ] },
            { type: 'programming_board', questionText: 'Fix dupe skip!', codeSnippet: 'if(i > 0 && nums[i] == ___) continue;', correctAnswer: 'nums[i-1]' },
            { type: 'multiple_choice', questionText: 'Space complexity if we ignore result size?', options: ['O(1)', 'O(N)', 'O(N^2)'], correctAnswer: 'O(1)' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Can we find 4Sum later?"', options: ['Squawk YES!', 'Not yet!', 'Too much math.'], correctAnswer: 'Squawk YES!' }
          ]
        },
        {
          title: 'Dutch National Flag (Redux)', desc: 'I like these colors! 🇳🇱', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "0s, 1s, and 2s! Flag colors! Use LOW, MID, and HIGH pointers to sort in ONE PASS! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Mid pointer visits every bird! 0 sinks to Low, 2 flies to High! 🦜"', codeSnippet: 'if(a[mid] == 0) swap(a[low++], a[mid++]);\nelse if(a[mid] == 1) mid++;\nelse swap(a[mid], a[high--]);' },
            { type: 'teaching', questionText: '🦜 Pico: "Complexity: O(N) linear time. O(1) space. It\'s like sorting seeds by color while eating them! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Why mid++ for 1? Because 1 is the goal for the MID section. 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Why NOT mid++ for 2? Because the bird swapped from High might be a 0! Check it first! 🦜"' },
            { type: 'multiple_choice', questionText: 'Pointer for 0s?', options: ['Low', 'Mid', 'High'], correctAnswer: 'Low' },
            { type: 'match_following', questionText: 'Match movements!', pairs: [
              {key: 'Mid == 0', value: 'Swap with Low, mid++, low++'}, {key: 'Mid == 1', value: 'mid++'}, {key: 'Mid == 2', value: 'Swap with High, high--'}
            ] },
            { type: 'programming_board', questionText: 'Fix swap with 2!', codeSnippet: 'else if(nums[mid] == 2) {\n  swap(nums[mid], nums[___]);\n  high--;\n}', correctAnswer: 'high' },
            { type: 'multiple_choice', questionText: 'Worst case number of swaps for N elements?', options: ['N', 'N/2', 'N^2'], correctAnswer: 'N' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "What color is a parrot flag?"', options: ['Green/Red/Blue!', 'Rainbow!', 'None.'], correctAnswer: 'Green/Red/Blue!' }
          ]
        },
        {
          title: 'Trapping Rain Water', desc: 'Don\'t let seeds get wet! 🌧️', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "It\'s raining! Find how much water is trapped between bird buildings! This is a HARD Zoho legend! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "For each birdhouse `i`, water height = `min(maxLeft, maxRight) - currentHeight`! 🦜"', codeSnippet: 'int lMax=0, rMax=0, ans=0;\nwhile(l < r) {\n  if(a[l] < a[r]) { ... calculate ... l++; }\n  else { ... r++; }\n}' },
            { type: 'teaching', questionText: '🦜 Pico: "Two Pointer Method: Linear time O(N), Constant space O(1). No auxiliary arrays needed! Stay dry! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Complexity: O(N). Because you only move inward like a closing hawk eye! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Scenario: [0, 1, 0, 2]. 1 unit trapped! 🦜"' },
            { type: 'multiple_choice', questionText: 'Water at index i depends on?', options: ['Min of max walls', 'Sum of all walls', 'Pico\'s mood'], correctAnswer: 'Min of max walls' },
            { type: 'match_following', questionText: 'Match logic!', pairs: [
              {key: 'leftMax', value: 'Tallest building on left'}, {key: 'rightMax', value: 'Tallest on right'}, {key: 'Result', value: 'Total puddles'}
            ] },
            { type: 'programming_board', questionText: 'Fix water calc!', codeSnippet: 'if(height[l] >= leftMax) leftMax = height[l];\nelse ans += ___ - height[l];', correctAnswer: 'leftMax' },
            { type: 'multiple_choice', questionText: 'Space complexity of optimized two-pointer?', options: ['O(1)', 'O(N)', 'O(log N)'], correctAnswer: 'O(1)' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Do parrots like rain?"', options: ['I have wings!', 'No!', 'Ask a duck.'], correctAnswer: 'I have wings!' }
          ]
        },
        {
          title: 'Container With Most Water', desc: 'The biggest pool! 🏊', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Pick two bird buildings to hold the most water! Width * Height! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Maximize Area! Start with widest (ends). Move the shorter pointer inward! O(N) magic! 🦜"', codeSnippet: 'while(l < r) {\n  area = min(a[l], a[r]) * (r - l);\n  if(a[l] < a[r]) l++; else r--;\n}' },
            { type: 'teaching', questionText: '🦜 Pico: "Why move the shorter one? Because the taller one has MORE POTENTIAL to find a big container! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(N). Space: O(1). Parrots like minimalism! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Scenario: [1, 8, 6, 2, 5, 4, 8, 3, 7]. Area: 49! 🦜"' },
            { type: 'multiple_choice', questionText: 'Formula for area between index i and j?', options: ['min(h[i], h[j]) * (j-i)', 'h[i] + h[j]', 'max(h[i], h[j])'], correctAnswer: 'min(h[i], h[j]) * (j-i)' },
            { type: 'match_following', questionText: 'Match strategy!', pairs: [
              {key: 'Move l++', value: 'h[l] < h[r]'}, {key: 'Move r--', value: 'h[r] < h[l]'}, {key: 'Area', value: 'Width * Min Height'}
            ] },
            { type: 'programming_board', questionText: 'Fix pointer logic!', codeSnippet: 'if(height[l] < height[r]) ___++;\nelse ___--;', correctAnswer: 'l|r' },
            { type: 'multiple_choice', questionText: 'Could O(N^2) work for N=100,000?', options: ['No, too slow!', 'Yes!', 'Not for birds.'], correctAnswer: 'No, too slow!' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Will you swim with me?"', options: ['YES!', 'No.', 'I am a cat person.'], correctAnswer: 'YES!' }
          ]
        },
        {
          title: 'Subarray Sum K (Fixed Window)', desc: 'Window is moving! 🪟', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Find a subarray that sums to K! Sliding Window is like a moving birdhouse. Add birds at the front, kick them out from the back! 🦜"', codeSnippet: 'while(curr > sum && l < i-1) curr -= a[l++];\nif(curr == sum) return true;' },
            { type: 'teaching', questionText: '🦜 Pico: "This only works for NON-NEGATIVE numbers. If there are negatives, you need a Hash Map (Prefix Sum magic)! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(N). Each bird is visited twice (once by Right, once by Left). Still O(N)! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Space: O(1). No extra room, just two pointers! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Keep sliding until the sum is just right. Like my nest temperature! 🦜"' },
            { type: 'multiple_choice', questionText: 'What to do if Sum > K?', options: ['Shrink from Left', 'Grow from Right', 'Stop'], correctAnswer: 'Shrink from Left' },
            { type: 'match_following', questionText: 'Match logic!', pairs: [
              {key: 'Sum < K', value: 'Add arr[right++]'}, {key: 'Sum > K', value: 'Subtract arr[left++]'}, {key: 'Sum == K', value: 'Jackpot!'}
            ] },
            { type: 'programming_board', questionText: 'Fix window shrink!', codeSnippet: 'while(current_sum > K && left < ___ - 1) {\n  current_sum -= nums[left++];\n}', correctAnswer: 'right' },
            { type: 'multiple_choice', questionText: 'Complexity of naive O(N^2) approach?', options: ['O(N^2)', 'O(N)', 'O(1)'], correctAnswer: 'O(N^2)' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Can we find negative sums with this?"', options: ['No, use HashMap.', 'Yes!', 'Maybe.'], correctAnswer: 'No, use HashMap.' }
          ]
        },
        {
          title: 'Longest Unique Subarray', desc: 'Every bird is different! 🦜', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Find the longest subarray where every bird is UNIQUE! No twin-birds allowed in this nest! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Variable Sliding Window! Use a Hash Set (or array) to track who is inside. If you see a dupe, shrink from the left! 🦜"', codeSnippet: 'while(set.has(nums[r])) set.delete(nums[l++]);\nset.add(nums[r]);\nmaxLen = max(maxLen, r - l + 1);' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(N). Linear scan. Space: O(N) to remember the birds. 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "This is a classic Two Pointer + Hashing combo. Zoho loves these! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Remember: Always update `maxLen` AFTER you finish shrinking and adding the new bird! 🦜"' },
            { type: 'multiple_choice', questionText: 'What defines the window length?', options: ['right - left + 1', 'right + left', 'N'], correctAnswer: 'right - left + 1' },
            { type: 'match_following', questionText: 'Match actions!', pairs: [
              {key: 'See local dupe', value: 'Shrink Left'}, {key: 'Unique bird', value: 'Expand Right'}, {key: 'Result', value: 'Max Length'}
            ] },
            { type: 'programming_board', questionText: 'Fix window length calc!', codeSnippet: 'maxLength = max(maxLength, right - ___ + 1);', correctAnswer: 'left' },
            { type: 'multiple_choice', questionText: 'Space complexity if using a fixed alphabet (e.g. 256 chars)?', options: ['O(1)', 'O(N)', 'O(log N)'], correctAnswer: 'O(1)' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Am I unique?"', options: ['YES!', 'One of a kind!', 'Squawk!'], correctAnswer: 'YES!' }
          ]
        },
        {
          title: 'Smallest Window (Intro)', desc: 'Where is the house? 🏠', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Find the smallest subarray that contains ALL distinct elements of the array. Minimalist housing! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Count distinct elements first. Then use sliding window to find a range that covers all of them! 🦜"', codeSnippet: 'while(uniqueFound == totalUnique) {\n  minLen = min(minLen, r-l+1);\n  // Try shrinking from left\n}' },
            { type: 'teaching', questionText: '🦜 Pico: "Time: O(N). Space: O(N) for the frequency count. 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Shrink as much as possible! Every time you shrink and still have all elements, you found a smaller potential nest! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Complexity: O(N). Zoho Elite level thinking! 🦜"' },
            { type: 'multiple_choice', questionText: 'Goal of this problem?', options: ['Minimize window size', 'Maximize window', 'Count birds'], correctAnswer: 'Minimize window size' },
            { type: 'match_following', questionText: 'Match steps!', pairs: [
              {key: 'Total Unique', value: 'Use a Set'}, {key: 'Current Window', value: 'Use a Map'}, {key: 'Shrink', value: 'Reduce minLen'}
            ] },
            { type: 'programming_board', questionText: 'Fix shrink condition!', codeSnippet: 'while(count == totalDistinct) {\n  minLen = min(___, right - left + 1);\n  // shrink\n}', correctAnswer: 'minLen' },
            { type: 'multiple_choice', questionText: 'Is O(N^3) acceptable?', options: ['No!', 'Yes!', 'For birds.'], correctAnswer: 'No!' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Need more room?"', options: ['No, I am small.', 'Yes!', 'Squawk!'], correctAnswer: 'No, I am small.' }
          ]
        },
        {
          title: 'Rearrange Alternating', desc: 'Up and Down! 🎢', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Rearrange array into alternating positive and negative birds! [+ - + -]. If one type runs out, leave the rest alone! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Use two pointers: one for EVEN positions (positives) and one for ODD (negatives)! 🦜"', codeSnippet: 'int p=0, n=1;\nfor(int x : nums) {\n  if(x >= 0) { res[p] = x; p += 2; }\n  else { res[n] = x; n += 2; }\n}' },
            { type: 'teaching', questionText: '🦜 Pico: "This O(N) space approach is easiest. If you want O(1) space... it gets complicated! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Equality: Usually there are equal positives and negatives. But stay vigilant! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time: O(N). Space: O(N) for the result array. 🦜"' },
            { type: 'multiple_choice', questionText: 'Index increment for each pointer?', options: ['2', '1', 'N'], correctAnswer: '2' },
            { type: 'match_following', questionText: 'Match positions!', pairs: [
              {key: 'Positive', value: '0, 2, 4...'}, {key: 'Negative', value: '1, 3, 5...'}, {key: 'Both', value: 'Alternating!'}
            ] },
            { type: 'programming_board', questionText: 'Fix positive pointer!', codeSnippet: 'if(nums[i] > 0) {\n  ans[posIndex] = nums[i];\n  posIndex += ___;\n}', correctAnswer: '2' },
            { type: 'multiple_choice', questionText: 'Space complexity if using result array?', options: ['O(N)', 'O(1)', 'O(N^2)'], correctAnswer: 'O(N)' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Am I positive or negative?"', options: ['Positive!', 'Negative!', 'Squawk!'], correctAnswer: 'Positive!' }
          ]
        },
        {
          title: 'Sort Colors (Redux)', desc: 'Rainbow birds! 🌈', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Sort 0s, 1s, and 2s again! Why? Because repetition is how birds learn (and Zoho interviews go)! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Dutch National Flag! Low for 0, Mid for 1, High for 2. 🦜"', codeSnippet: 'swap(nums[low++], nums[mid++]);' },
            { type: 'teaching', questionText: '🦜 Pico: "Time: O(N). Space: O(1). No counting array allowed! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "One single pass. Don\'t blink or you\'ll see two! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Complexity: O(N). Standard sorting? O(N log N). Be the faster bird! 🦜"' },
            { type: 'multiple_choice', questionText: 'Number of pointers used?', options: ['3', '2', '1'], correctAnswer: '3' },
            { type: 'match_following', questionText: 'Match results!', pairs: [
              {key: 'Zeroes', value: 'Front'}, {key: 'Ones', value: 'Middle'}, {key: 'Twos', value: 'Back'}
            ] },
            { type: 'programming_board', questionText: 'Fix mid-high swap!', codeSnippet: 'else if(nums[mid] == 2) {\n  swap(nums[mid], nums[high]);\n  ___--;\n}', correctAnswer: 'high' },
            { type: 'multiple_choice', questionText: 'Why not mid++ when swapping with high?', options: ['High bird is unknown', 'Mid is already sorted', 'Parrot rules!'], correctAnswer: 'High bird is unknown' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Do I look colorful?"', options: ['YES!', 'Kind of.', 'Squawk!'], correctAnswer: 'YES!' }
          ]
        },
        {
          title: 'Max Consecutive Ones II', desc: 'One flip to rule them! 🙃', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Find the longest sequence of 1s if you can flip ONE zero to a 1! A bird of opportunity! 🦜"', codeSnippet: 'while(zeroCount > 1) {\n  if(nums[l++] == 0) zeroCount--;\n}' },
            { type: 'teaching', questionText: '🦜 Pico: "Sliding Window! Keep track of how many 0s are in your nest. If `zeroCount > 1`, shrink from left until it is 1 again! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(N). Linear as a flight path! Space: O(1). 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Scenario: [1, 0, 1, 1, 0]. Flip the first 0, length becomes 4! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "If you could flip K zeroes, the logic is the same! Just replace 1 with K. 🦜"' },
            { type: 'multiple_choice', questionText: 'Condition to shrink window?', options: ['zeroCount > 1', 'zeroCount == 0', 'sum > N'], correctAnswer: 'zeroCount > 1' },
            { type: 'match_following', questionText: 'Match logic!', pairs: [
              {key: 'Add 0', value: 'zeroCount++'}, {key: 'zeroCount > 1', value: 'Shrink Left'}, {key: 'Result', value: 'max(max, r-l+1)'}
            ] },
            { type: 'programming_board', questionText: 'Fix flip limit!', codeSnippet: 'if(nums[r] == 0) zeroCount++;\nwhile(zeroCount > ___) {\n  if(nums[l++] == 0) zeroCount--;\n}', correctAnswer: '1' },
            { type: 'multiple_choice', questionText: 'Complexity of naive approach?', options: ['O(N^2)', 'O(N)', 'O(1)'], correctAnswer: 'O(N^2)' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Are you a master flipper?"', options: ['YES!', 'Trying.', 'Squawk!'], correctAnswer: 'YES!' }
          ]
        },
        {
          title: 'Intersection of Two Sorted Arrays', desc: 'Common birds only! 🦜', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Two sorted arrays! Find the common elements. Use two pointers like two birds meeting at a branch! 🦜"', codeSnippet: 'if(a[i] == b[j]) { res.add(a[i]); i++; j++; }\nelse if(a[i] < b[j]) i++;\nelse j++;' },
            { type: 'teaching', questionText: '🦜 Pico: "Since they are sorted, we don\'t need a Hash Set! Save that memory for seeds! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(N + M). One pass through both flocks. 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Space Complexity: O(1) for the logic, O(min(N,M)) for the result. 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Remember to handle duplicates if the problem asks for UNIQUE intersection! 🦜"' },
            { type: 'multiple_choice', questionText: 'What to do if a[i] < b[j]?', options: ['i++', 'j++', 'Both ++'], correctAnswer: 'i++' },
            { type: 'match_following', questionText: 'Match pointers!', pairs: [
              {key: 'a[i] < b[j]', value: 'i moves'}, {key: 'a[i] > b[j]', value: 'j moves'}, {key: 'a[i] == b[j]', value: 'Match!'}
            ] },
            { type: 'programming_board', questionText: 'Fix match logic!', codeSnippet: 'if(A[i] == B[j]) {\n  ans.push_back(A[i]);\n  ___++; ___++;\n}', correctAnswer: 'i|j' },
            { type: 'multiple_choice', questionText: 'Is this faster than O(N log M) binary search?', options: ['Yes, if N and M are similar', 'No', 'Always the same'], correctAnswer: 'Yes, if N and M are similar' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Who is our common friend?"', options: ['A bird!', 'A cat.', 'The USER.'], correctAnswer: 'The USER.' }
          ]
        },
        {
          title: 'Union of Two Sorted Arrays', desc: 'Everyone is invited! 🥳', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Merge two sorted arrays! Keep everyone, but no clones! (Unique birds only). 🦜"', codeSnippet: 'while(i < n && j < m) {\n  if(a[i] < b[j]) res.add(a[i++]);\n  else if(a[i] > b[j]) res.add(b[j++]);\n  else { res.add(a[i++]); j++; }\n}' },
            { type: 'teaching', questionText: '🦜 Pico: "Don\'t forget the leftovers! If one flock finishes, add all birds from the other flock! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time: O(N + M). Space: O(N + M) for the resulting mega-flock. 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "To handle duplicates within the arrays, check `res.back() != currentBird` before adding! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "This is the heart of Merge Sort! Understand this, and you\'re a sorting master bird! 🦜"' },
            { type: 'multiple_choice', questionText: 'Complexity of merging two sorted arrays?', options: ['O(N+M)', 'O(N log M)', 'O(N*M)'], correctAnswer: 'O(N+M)' },
            { type: 'match_following', questionText: 'Match cases!', pairs: [
              {key: 'i finished', value: 'Add remaining j'}, {key: 'j finished', value: 'Add remaining i'}, {key: 'a[i] == b[j]', value: 'Add once, both move'}
            ] },
            { type: 'programming_board', questionText: 'Fix leftover loop!', codeSnippet: 'while(j < m) {\n  if(ans.back() != B[j]) ans.push_back(B[j]);\n  ___++;\n}', correctAnswer: 'j' },
            { type: 'multiple_choice', questionText: 'Space complexity of the merger logic (excluding result)?', options: ['O(1)', 'O(N)', 'O(N+M)'], correctAnswer: 'O(1)' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Is more birds always better?"', options: ['YES! More seeds!', 'No, too loud.', 'Maybe.'], correctAnswer: 'YES! More seeds!' }
          ]
        },
        {
          title: 'Pairs with Given Difference', desc: 'How far apart? 📏', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Find a pair where `abs(a[i] - a[j]) == K`. Not Sum, but Difference! 🦜"', codeSnippet: 'while(j < n && i < n) {\n  if(a[j] - a[i] == K) return true;\n  else if(a[j] - a[i] < K) j++;\n  else i++;\n}' },
            { type: 'teaching', questionText: '🦜 Pico: "Sort the array first! Then use two pointers. If difference is too small, move Right. If too big, move Left! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time: O(N log N) for sorting, O(N) for two pointers. 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Space: O(1) beyond sorting. Parrots are efficient! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Scenario: [1, 8, 10, 15], K=7. Pair (1, 8) and (8, 15). 🦜"' },
            { type: 'multiple_choice', questionText: 'Initial requirement for two-pointer difference?', options: ['Sorted Array', 'Shuffled Array', 'Only positives'], correctAnswer: 'Sorted Array' },
            { type: 'match_following', questionText: 'Match movements!', pairs: [
              {key: 'Diff < K', value: 'j++ (increase diff)'}, {key: 'Diff > K', value: 'i++ (decrease diff)'}, {key: 'Diff == K', value: 'Found!'}
            ] },
            { type: 'programming_board', questionText: 'Fix difference calculation!', codeSnippet: 'if(nums[j] - nums[i] < K) ___++;\nelse ___++;', correctAnswer: 'j|i' },
            { type: 'multiple_choice', questionText: 'Difference between (10, 2) is 8. If target is 10, move to higher number?', options: ['Yes', 'No', 'Depends.'], correctAnswer: 'Yes' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Am I far away from you?"', options: ['Never!', 'Far.', 'Squawk!'], correctAnswer: 'Never!' }
          ]
        },
        {
          title: 'Minimize Max Difference', desc: 'Keep the flock close! 🕊️', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Minimize the maximum difference after adding/subtracting K to each bird! Legendary Zoho HARD! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Sort! For each bird `i`, potential `min` is `min(a[0]+K, a[i+1]-K)` and `max` is `max(a[i]+K, a[n-1]-K)`. 🦜"', codeSnippet: 'for(int i=0; i<n-1; i++) {\n  mn = min(small, a[i+1]-K);\n  mx = max(large, a[i]+K);\n  ans = min(ans, mx - mn);\n}' },
            { type: 'teaching', questionText: '🦜 Pico: "Minimize `mx - mn`. It\'s like herding birds to the middle of the field! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time: O(N log N) for sort. Space: O(1). 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Scenario: [1, 5, 8], K=2. Modified: [3, 3, 6]. Diff: 3! 🦜"' },
            { type: 'multiple_choice', questionText: 'Strategy to minimize range?', options: ['Sort and compare intervals', 'Randomize', 'Use O(N^2)'], correctAnswer: 'Sort and compare intervals' },
            { type: 'match_following', questionText: 'Match variables!', pairs: [
              {key: 'small', value: 'nums[0]+K'}, {key: 'large', value: 'nums[n-1]-K'}, {key: 'ans', value: 'Initial large - small'}
            ] },
            { type: 'programming_board', questionText: 'Fix range update!', codeSnippet: 'int mn = min(small, nums[i+1] - ___);\nint mx = max(large, nums[i] + ___);', correctAnswer: 'K' },
            { type: 'multiple_choice', questionText: 'Complexity after sorting?', options: ['O(N)', 'O(N^2)', 'O(1)'], correctAnswer: 'O(N)' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Ready for the homestretch of Stage 3?"', options: ['YES!', 'Seeds first.', 'Squawk!'], correctAnswer: 'YES!' }
          ]
        },
        {
          title: 'Sorted Array to BST (Logic)', desc: 'Building a tree! 🌳', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Turn a sorted array into a Balanced Binary Search Tree! The middle bird becomes the King (Root)! 🦜"', codeSnippet: 'int mid = (l + r) / 2;\nNode* root = new Node(a[mid]);\nroot->left = solve(l, mid-1);\nroot->right = solve(mid+1, r);' },
            { type: 'teaching', questionText: '🦜 Pico: "Recursive Two Pointers! Divide and conquer the flock! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(N). Each bird is visited once to become a node. 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Space Complexity: O(log N) for the recursion stack. Balanced nests are beautiful! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Why the middle? Because it ensures half the birds are on the left and half on the right! Perfect balance! 🦜"' },
            { type: 'multiple_choice', questionText: 'Which element becomes the root of a balanced BST from a sorted array?', options: ['Middle element', 'First element', 'Last element'], correctAnswer: 'Middle element' },
            { type: 'match_following', questionText: 'Match pointers!', pairs: [
              {key: 'mid - 1', value: 'End of left sub-tree'}, {key: 'mid + 1', value: 'Start of right sub-tree'}, {key: 'mid', value: 'Current Root'}
            ] },
            { type: 'programming_board', questionText: 'Fix mid calculation!', codeSnippet: 'int mid = l + (___ - l) / 2;', correctAnswer: 'r' },
            { type: 'multiple_choice', questionText: 'Resulting tree height?', options: ['O(log N)', 'O(N)', 'O(1)'], correctAnswer: 'O(log N)' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Do I look like a tree?"', options: ['You are a bird!', 'Yes.', 'Squawk!'], correctAnswer: 'You are a bird!' }
          ]
        },
        {
          title: 'Four Sum (4Sum)', desc: 'Double date! 🕺💃', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "3Sum was easy? Try 4Sum! Find four unique birds that sum to Target! 🦜"', codeSnippet: 'for(int i=0; i<n-3; i++) {\n  for(int j=i+1; j<n-2; j++) {\n    while(l < r) {\n       // ... sum check\n    }\n  }\n}' },
            { type: 'teaching', questionText: '🦜 Pico: "Sort the array. Use TWO nested loops and then the Two-Pointer scan. O(N^3) power! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Skip duplicates at every level: i, j, l, and r! We hate clone birds! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(N^3). Space: O(1) beyond the result. 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Optimization: If `a[i] + a[i+1] + a[i+2] + a[i+3] > target`, break early! No need to fly further! 🦜"' },
            { type: 'multiple_choice', questionText: 'Complexity of 4Sum with two pointers?', options: ['O(N^3)', 'O(N^2)', 'O(N^4)'], correctAnswer: 'O(N^3)' },
            { type: 'match_following', questionText: 'Match levels!', pairs: [
              {key: 'i loop', value: '1st bird'}, {key: 'j loop', value: '2nd bird'}, {key: 'l/r scan', value: '3rd & 4th birds'}
            ] },
            { type: 'programming_board', questionText: 'Fix 4th sum check!', codeSnippet: 'long long sum = (long long)a[i]+a[j]+a[l]+___;', correctAnswer: 'a[r]' },
            { type: 'multiple_choice', questionText: 'Can you use a Hash Map for O(N^2)?', options: ['Yes, but handling unique triplets is hard', 'No', 'Only for birds'], correctAnswer: 'Yes, but handling unique triplets is hard' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Who are the four birds?"', options: ['Pico and friends!', 'Coding birds.', 'None.'], correctAnswer: 'Pico and friends!' }
          ]
        },
        {
          title: 'Product Except Self', desc: 'Everyone but me! 🚫', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "For each bird `i`, find the product of all birds EXCEPT `nums[i]`. NO DIVISION ALLOWED! (Division is forbidden parrot magic). 🦜"', codeSnippet: 'for(int i=0; i<n; i++) {\n  res[i] = prefix;\n  prefix *= nums[i];\n}\n// Then go backwards for suffix' },
            { type: 'teaching', questionText: '🦜 Pico: "Two passes! First pass: store prefix products. Second pass: multiply by suffix products. 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time: O(N). Space: O(1) if you use the output array for storage! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Scenario: [1, 2, 3, 4] -> [24, 12, 8, 6]. 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Why no division? Because division fails if there is a ZERO in the flock! My way is safer! 🦜"' },
            { type: 'multiple_choice', questionText: 'What magic is forbidden here?', options: ['Division', 'Multiplication', 'Sorting'], correctAnswer: 'Division' },
            { type: 'match_following', questionText: 'Match passes!', pairs: [
              {key: '1st Pass', value: 'Left-to-Right (Prefix)'}, {key: '2nd Pass', value: 'Right-to-Left (Suffix)'}, {key: 'Space', value: 'O(1) optimized'}
            ] },
            { type: 'programming_board', questionText: 'Fix suffix update!', codeSnippet: 'for(int i = n - 1; i >= 0; i--) {\n  ans[i] *= suffix;\n  suffix *= ___;\n}', correctAnswer: 'nums[i]' },
            { type: 'multiple_choice', questionText: 'Complexity?', options: ['O(N)', 'O(N^2)', 'O(log N)'], correctAnswer: 'O(N)' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Can you multiply without seeds?"', options: ['No!', 'Yes.', 'Squawk!'], correctAnswer: 'No!' }
          ]
        },
        {
          title: 'Candy Distribution', desc: 'I want seeds! 🍬', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Distribute candy to birds based on ratings! Higher rating bird gets more candy than neighbors. Minimize total candy! 🦜"', codeSnippet: 'for(int i=1; i<n; i++) if(a[i]>a[i-1]) l[i]=l[i-1]+1;\nfor(int i=n-2; i>=0; i--) if(a[i]>a[i+1]) r[i]=r[i+1]+1;' },
            { type: 'teaching', questionText: '🦜 Pico: "Two Pointer / Two Pass logic! Scan left, then scan right. Take the `max` of both requirements! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(N). Linear as a beak! Space: O(N) for the candy count. 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Every bird gets at least ONE candy. Don\'t be stingy! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Total candy is the sum of the final array! 🦜"' },
            { type: 'multiple_choice', questionText: 'Min candy per bird?', options: ['1', '0', 'N'], correctAnswer: '1' },
            { type: 'match_following', questionText: 'Match rules!', pairs: [
              {key: 'Higher Rating', value: 'More candy than neighbor'}, {key: '1st Pass', value: 'Check Left neighbor'}, {key: '2nd Pass', value: 'Check Right neighbor'}
            ] },
            { type: 'programming_board', questionText: 'Fix max candy pick!', codeSnippet: 'sum += max(left[i], ___);', correctAnswer: 'right[i]' },
            { type: 'multiple_choice', questionText: 'Complexity?', options: ['O(N)', 'O(N log N)', 'O(N^2)'], correctAnswer: 'O(N)' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Can I have your candy?"', options: ['YES!', 'Only for birds.', 'Seeds only.'], correctAnswer: 'YES!' }
          ]
        },
        {
          title: 'Push All Zeroes (Opt)', desc: 'Stay slim! 🏃', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Push all 0s to the end of the array! BUT, you must do it IN-PLACE! Stay slim, no helper arrays! 🦜"', codeSnippet: 'int p = 0;\nfor(int x : nums) if(x != 0) nums[p++] = x;\nwhile(p < n) nums[p++] = 0;' },
            { type: 'teaching', questionText: '🦜 Pico: "The `p` pointer tracks where the next non-zero bird should land. After everyone lands, fill the rest with zeroes! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(N). Space Complexity: O(1). Perfect parrot efficiency! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Scenario: [0, 1, 0, 3]. Land 1 -> [1, ...], Land 3 -> [1, 3, ...]. Fill 0s -> [1, 3, 0, 0]. 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "You don\'t even need a second loop if you use swaps! 🦜"' },
            { type: 'multiple_choice', questionText: 'Goal of in-place?', options: ['O(1) Space', 'Faster time', 'More birds'], correctAnswer: 'O(1) Space' },
            { type: 'match_following', questionText: 'Match pointers!', pairs: [
              {key: 'i', value: 'Current bird'}, {key: 'p', value: 'Landing pad'}, {key: 'res', value: '0s at back'}
            ] },
            { type: 'programming_board', questionText: 'Fix non-zero landing!', codeSnippet: 'if(nums[i] != 0) {\n  nums[pos++] = nums[___];\n}', correctAnswer: 'i' },
            { type: 'multiple_choice', questionText: 'Complexity?', options: ['O(N)', 'O(N^2)', 'O(1)'], correctAnswer: 'O(N)' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Final Stage 3 question! Ready for Stage 4?"', options: ['YES!', 'Seeds first.', 'Squawk!'], correctAnswer: 'YES!' }
          ]
        }
      ]
    },
    { 
      title: '4. Subarray Sorcery', 
      units: [
        {
          title: 'Maximum Subarray Sum (Kadane)', desc: 'The King of Subarrays! 👑', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Kadanes Algorithm! Find the contiguous subarray with the largest sum. This is the #1 Zoho bread-and-butter! 🦜"', codeSnippet: 'int maxSum = a[0], curSum = 0;\nfor(int x : a) {\n  curSum += x;\n  maxSum = max(maxSum, curSum);\n  if(curSum < 0) curSum = 0;\n}' },
            { type: 'teaching', questionText: '🦜 Pico: "The magic: If your current sum becomes NEGATIVE, it is weighing you down! Drop it and restart from zero! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(N) linear scan. Space: O(1). Parrots hate O(N^2) loops! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "What if all birds are negative? Kadane still works if you initialize `maxSum` with the first bird! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Scenario: [-2, 1, -3, 4, -1, 2]. Max Sum is 6! (4, -1, 2, 1? No, 4, -1, 2 is 5...) 🦜"' },
            { type: 'multiple_choice', questionText: 'When do you reset curSum to 0 in Kadane?', options: ['When curSum < 0', 'When curSum > maxSum', 'Never'], correctAnswer: 'When curSum < 0' },
            { type: 'match_following', questionText: 'Match roles!', pairs: [
              {key: 'curSum', value: 'Running tally'}, {key: 'maxSum', value: 'All-time record'}, {key: 'Reset', value: 'Drop the baggage'}
            ] },
            { type: 'programming_board', questionText: 'Fix Kadane update!', codeSnippet: 'sum += nums[i];\nmax_so_far = max(max_so_far, sum);\nif(sum < 0) sum = ___;', correctAnswer: '0' },
            { type: 'multiple_choice', questionText: 'Complexity of naive nested loop approach?', options: ['O(N^2)', 'O(N)', 'O(1)'], correctAnswer: 'O(N^2)' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Who is the king?"', options: ['Kadane!', 'Pico!', 'The USER.'], correctAnswer: 'Kadane!' }
          ]
        },
        {
          title: 'Maximum Product Subarray', desc: 'Negative times negative is positive! ➖✖️➖', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Find the subarray with the largest PRODUCT! Caution: Two negative birds can make a huge positive flock! 🦜"', codeSnippet: 'if(nums[i] < 0) swap(maxP, minP);\nmaxP = max(nums[i], maxP * nums[i]);\nminP = min(nums[i], minP * nums[i]);' },
            { type: 'teaching', questionText: '🦜 Pico: "Keep track of BOTH MaxProduct and MinProduct at each nest. A negative bird swaps them! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(N). Space: O(1). Smart bird thinking! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Why keep Min? Because if we hit another negative bird, that Min (very negative) becomes the new Max! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Zero birds reset everything! 🦜"' },
            { type: 'multiple_choice', questionText: 'What happens when you encounter a negative number?', options: ['Swap Max and Min Products', 'Stop', 'Reset to 1'], correctAnswer: 'Swap Max and Min Products' },
            { type: 'match_following', questionText: 'Match logic!', pairs: [
              {key: 'nums[i] < 0', value: 'swap(mx, mn)'}, {key: 'nums[i] == 0', value: 'Reset prod to 1'}, {key: 'Result', value: 'Scan through N'}
            ] },
            { type: 'programming_board', questionText: 'Fix product swap!', codeSnippet: 'if(nums[i] < 0) swap(___, ___);', correctAnswer: 'maxP|minP' },
            { type: 'multiple_choice', questionText: 'Is O(N) possible here?', options: ['Yes!', 'No.', 'Only with seeds.'], correctAnswer: 'Yes!' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Ready for more multiplication?"', options: ['YES!', 'No.', 'Squawk!'], correctAnswer: 'YES!' }
          ]
        },
        {
          title: 'Subarray Sum Equals K (Hash Map)', desc: 'Hidden gems in the flock! 💎', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Find how many subarrays sum to K! This works for NEGATIVES too! Use a Hash Map of Prefix Sums! 🦜"', codeSnippet: 'map[0] = 1;\nfor(int x : nums) {\n  sum += x;\n  if(map.count(sum - K)) count += map[sum - K];\n  map[sum]++;\n}' },
            { type: 'teaching', questionText: '🦜 Pico: "The Map stores: `How many times have I seen this prefix sum before?` 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "If `currentSum - K` exists in the map, it means a subarray ending here sums to K! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(N) using Hash Map. Space: O(N). Parrots use memory to save time! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Scenario: [1, 1, 1], K=2. Result: 2! [1,1] twice. 🦜"' },
            { type: 'multiple_choice', questionText: 'What does the map store?', options: ['Frequency of Prefix Sums', 'The actual numbers', 'Indices'], correctAnswer: 'Frequency of Prefix Sums' },
            { type: 'match_following', questionText: 'Match logic!', pairs: [
              {key: 'sum - K', value: 'The target we look for'}, {key: 'map[0]=1', value: 'Handle empty prefix'}, {key: 'map[sum]++', value: 'Remember current Sum'}
            ] },
            { type: 'programming_board', questionText: 'Fix map check!', codeSnippet: 'if(m.find(sum - ___) != m.end()) {\n  count += m[sum - K];\n}', correctAnswer: 'K' },
            { type: 'multiple_choice', questionText: 'Worst case space for N elements?', options: ['O(N)', 'O(1)', 'O(N^2)'], correctAnswer: 'O(N)' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Do you like Maps?"', options: ['Yes!', 'No, I have wings.', 'Seeds!'], correctAnswer: 'Yes!' }
          ]
        },
        {
          title: 'Longest Subarray with Sum K', desc: 'The biggest stretch! 📏', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "What is the MAX length of a subarray that sums to K? Another prefix sum + map masterpiece! 🦜"', codeSnippet: 'if(map.find(sum - K) != map.end())\n  maxLen = max(maxLen, i - map[sum - K]);\nif(map.find(sum) == map.end())\n  map[sum] = i;' },
            { type: 'teaching', questionText: '🦜 Pico: "Difference from before: Map stores the FIRST index we saw this sum. We want to maximize the distance! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time: O(N). Space: O(N). Fast and spacious! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Wait! Only update map if sum is NOT already there. We want the OLDEST index to get the LONGEST subarray! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Complexity: O(N). Zoho Elite level! 🦜"' },
            { type: 'multiple_choice', questionText: 'What should the map store for each prefix sum?', options: ['First occurrence index', 'Count of occurrences', 'Last index'], correctAnswer: 'First occurrence index' },
            { type: 'match_following', questionText: 'Match goals!', pairs: [
              {key: 'Count subarrays', value: 'Store Frequency'}, {key: 'Longest subarray', value: 'Store First Index'}, {key: 'Prefix Sum', value: 'Cumulative Tally'}
            ] },
            { type: 'programming_board', questionText: 'Fix length calculation!', codeSnippet: 'if(m.count(sum - K)) {\n  res = max(res, i - ___);\n}', correctAnswer: 'm[sum-K]' },
            { type: 'multiple_choice', questionText: 'Base case sum=0 should be at index?', options: ['-1', '0', '1'], correctAnswer: '-1' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Ready for more prefix magic?"', options: ['YES!', 'Seeds first.', 'Squawk!'], correctAnswer: 'YES!' }
          ]
        },
        {
          title: 'Contiguous Array (Binary)', desc: 'Equal 0s and 1s! ⚖️', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Find the longest subarray with equal birds of type 0 and type 1. Balanced flock! 🦜"', codeSnippet: 'for(int x : nums) {\n  sum += (x == 0 ? -1 : 1);\n  // now same as Longest Subarray with Sum 0\n}' },
            { type: 'teaching', questionText: '🦜 Pico: "Trick: Treat 0 as -1! Now the problem becomes `Longest Subarray with Sum 0`. Pure sorcery! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(N). Space: O(N) for the map. 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "If the same prefix sum repeats, the birds between those two points must be balanced (sum = 0)! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Scenario: [0, 1, 0, 1] -> Length 4! 🦜"' },
            { type: 'multiple_choice', questionText: 'What value to assign to 0 to balance with 1?', options: ['-1', '0', '1'], correctAnswer: '-1' },
            { type: 'match_following', questionText: 'Match logic!', pairs: [
              {key: '0 becomes', value: '-1'}, {key: '1 becomes', value: '+1'}, {key: 'Target K', value: '0'}
            ] },
            { type: 'programming_board', questionText: 'Fix sum update!', codeSnippet: 'sum += (nums[i] == 0 ? ___ : 1);', correctAnswer: '-1' },
            { type: 'multiple_choice', questionText: 'Complexity?', options: ['O(N)', 'O(N^2)', 'O(log N)'], correctAnswer: 'O(N)' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Am I balanced?"', options: ['Perfectly!', 'Not really.', 'Squawk!'], correctAnswer: 'Perfectly!' }
          ]
        },
        {
          title: 'Subarray Sum Divisible by K', desc: 'Is it a multiple? 🦜', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Find how many subarrays have a sum divisible by K! Remainder magic! 🦜"', codeSnippet: 'int rem = (sum % K + K) % K;\ncount += map[rem];\nmap[rem]++;' },
            { type: 'teaching', questionText: '🦜 Pico: "If two prefix sums have the SAME remainder when divided by K, the birds between them must sum to a multiple of K! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(N). Space: O(K) for the remainders map. 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Handle negative remainders! `(rem + K) % K` ensures you don\'t fall out of the nest! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Scenario: [4, 5, 0, -2, -3, 1], K=5. Result: 7! 🦜"' },
            { type: 'multiple_choice', questionText: 'What property is used here?', options: ['Remainder Theorem', 'Encryption', 'Sorting'], correctAnswer: 'Remainder Theorem' },
            { type: 'match_following', questionText: 'Match logic!', pairs: [
              {key: 'sum % K', value: 'Current remainder'}, {key: 'map[rem]', value: 'Seen before?'}, {key: 'Result', value: 'Total Count'}
            ] },
            { type: 'programming_board', questionText: 'Fix remainder normalization!', codeSnippet: 'int rem = (current_sum % K + ___) % K;', correctAnswer: 'K' },
            { type: 'multiple_choice', questionText: 'Space complexity if K is large?', options: ['O(K)', 'O(1)', 'O(N)'], correctAnswer: 'O(K)' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Is 10 divisible by 5?"', options: ['YES!', 'No.', 'Ask a math bird.'], correctAnswer: 'YES!' }
          ]
        },
        {
          title: 'Smallest Subarray Sum > X', desc: 'Tiny nest, big value! 🦜', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Find the SMALLEST length subarray with sum GREATER than X. Minimalism again! 🦜"', codeSnippet: 'while(sum > X) {\n  minLen = min(minLen, r - l + 1);\n  sum -= a[l++];\n}' },
            { type: 'teaching', questionText: '🦜 Pico: "Sliding Window! Expand until sum > X, then shrink from left as much as you can while staying > X! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(N). Linear flight! Space: O(1). 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Scenario: [1, 4, 45, 6, 0, 19], X=51. Smallest is [45, 6, 0, 19]? No, [45, 6, 0] is 51... tricky! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Wait! If sum becomes exactly X, don\'t stop! It must be STRICTLY GREATER. 🦜"' },
            { type: 'multiple_choice', questionText: 'Type of window used?', options: ['Variable Sliding Window', 'Fixed Window', 'No window'], correctAnswer: 'Variable Sliding Window' },
            { type: 'match_following', questionText: 'Match actions!', pairs: [
              {key: 'sum <= X', value: 'Expand Right'}, {key: 'sum > X', value: 'Shrink Left & Update Min'}, {key: 'Goal', value: 'Smallest Length'}
            ] },
            { type: 'programming_board', questionText: 'Fix window length!', codeSnippet: 'while (curr_sum > x && left < n) {\n  res = min(res, right - ___ + 1);\n  curr_sum -= arr[left++];\n}', correctAnswer: 'left' },
            { type: 'multiple_choice', questionText: 'What if no such subarray exists?', options: ['Return 0', 'Return N', 'Panic'], correctAnswer: 'Return 0' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Am I small enough?"', options: ['YES!', 'No.', 'Squawk!'], correctAnswer: 'YES!' }
          ]
        },
        {
          title: 'Max Sum Circular Subarray', desc: 'Flying in circles! 🎡', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Find max sum in a CIRCULAR array! The end connects to the beginning! Kadane with a twist! 🦜"', codeSnippet: 'int case1 = kadane(a);\nint case2 = totalSum - (-kadane(-a));\nreturn max(case1, case2);' },
            { type: 'teaching', questionText: '🦜 Pico: "Two cases: 1. Max subarray is normal (Kadane). 2. Max subarray wraps around (TotalSum - MinSubarraySum). 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(N). Two Kadane passes! Space: O(1). 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Special case: If all birds are negative, TotalSum - MinSubarraySum will be 0. Use normal Kadane then! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "The wrap-around logic is basically finding the worst middle birds and removing them! 🦜"' },
            { type: 'multiple_choice', questionText: 'How to calculate wrap-around max sum?', options: ['TotalSum - MinSubarraySum', 'TotalSum + MaxSubarraySum', '2 * Kadane'], correctAnswer: 'TotalSum - MinSubarraySum' },
            { type: 'match_following', questionText: 'Match cases!', pairs: [
              {key: 'Normal', value: 'Standard Kadane'}, {key: 'Circular', value: 'Total - MinSum'}, {key: 'All Neg', value: 'Standard Kadane Max'}
            ] },
            { type: 'programming_board', questionText: 'Fix case 2 logic!', codeSnippet: 'int circular_sum = total_sum - ___ ;', correctAnswer: 'min_kadane' },
            { type: 'multiple_choice', questionText: 'Complexity?', options: ['O(N)', 'O(N^2)', 'O(log N)'], correctAnswer: 'O(N)' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Are you dizzy?"', options: ['YES!', 'No.', 'Squawk!'], correctAnswer: 'YES!' }
          ]
        },
        {
          title: 'Partition Equal Three Sums', desc: 'Teamwork! 🤝', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Can you divide the flock into THREE contiguous parts with equal sum? 🦜"', codeSnippet: 'if(totalSum % 3 != 0) return false;\ntarget = totalSum / 3;\nfor(int x : a) {\n  curr += x; if(curr == target) { count++; curr = 0; }\n}' },
            { type: 'teaching', questionText: '🦜 Pico: "Sum must be divisible by 3! Then find two cut points where running sum reaches `total/3`. 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(N). One pass is enough! Space: O(1). 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "If you find at least 3 parts, it works! (Wait, why at least? Because extra parts could have sum 0!) 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Zoho uses this to check your prefix sum logic. 🦜"' },
            { type: 'multiple_choice', questionText: 'Target sum for each part?', options: ['totalSum / 3', 'totalSum / 2', 'N'], correctAnswer: 'totalSum / 3' },
            { type: 'match_following', questionText: 'Match requirements!', pairs: [
              {key: 'Divisibility', value: 'Sum % 3 == 0'}, {key: 'Cut points', value: 'At least 2 found'}, {key: 'Parts', value: 'Three equal sums'}
            ] },
            { type: 'programming_board', questionText: 'Fix target check!', codeSnippet: 'if(current_sum == total_sum / ___) {\n  count++;\n  current_sum = 0;\n}', correctAnswer: '3' },
            { type: 'multiple_choice', questionText: 'Is O(N) space needed?', options: ['No', 'Yes', 'Depends on N'], correctAnswer: 'No' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Can we share seeds?"', options: ['YES!', 'No.', 'Squawk!'], correctAnswer: 'YES!' }
          ]
        },
        {
          title: 'Subarray XOR Equals K', desc: 'Bitwise bird magic! ✨', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "XOR magic! Find how many subarrays have XOR sum equal to K. Like Prefix Sum, but with Bits! 🦜"', codeSnippet: 'currXOR ^= x;\nif(map.count(currXOR ^ K)) count += map[currXOR ^ K];\nmap[currXOR]++;' },
            { type: 'teaching', questionText: '🦜 Pico: "Property: If `A ^ B = C`, then `A ^ C = B`. So if `currXOR ^ prevXOR = K`, then `prevXOR = currXOR ^ K`! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(N). Space: O(N) for the XOR map. 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "XOR is its own inverse. This makes it a parrot favorite! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Scenario: [4, 2, 2, 6, 4], K=6. Result: 4! 🦜"' },
            { type: 'multiple_choice', questionText: 'Property used for XOR target?', options: ['A ^ B = C => A ^ C = B', 'A + B = C', 'A * B = C'], correctAnswer: 'A ^ B = C => A ^ C = B' },
            { type: 'match_following', questionText: 'Match logic!', pairs: [
              {key: 'currXOR', value: 'Running XOR'}, {key: 'currXOR ^ K', value: 'What to find in map'}, {key: 'map[0]=1', value: 'Base case'}
            ] },
            { type: 'programming_board', questionText: 'Fix XOR search!', codeSnippet: 'long long x = xr ^ ___;', correctAnswer: 'K' },
            { type: 'multiple_choice', questionText: 'Worst case space for N bits?', options: ['O(N)', 'O(1)', 'O(K)'], correctAnswer: 'O(N)' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Bits or seeds?"', options: ['Seeds!', 'Bits!', 'Both!'], correctAnswer: 'Seeds!' }
          ]
        },
        {
          title: 'XOR Queries of a Subarray', desc: 'Bitwise range magic! 🪄', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Answer multiple XOR queries on a subarray! Use Prefix XOR to answer in O(1)! 🦜"', codeSnippet: 'prefix[i+1] = prefix[i] ^ a[i];\nans = prefix[R+1] ^ prefix[L];' },
            { type: 'teaching', questionText: '🦜 Pico: "Same as prefix sum, but XOR is its own inverse! So `prefix[R] ^ prefix[L-1]` gives XOR of the range! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time: O(N) precompute, O(Q) for Q queries. O(1) per query! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Space: O(N) for the prefix XOR array. 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Remember: `X ^ X = 0`. That\'s why XORing the prefix cancels out the birds before L! 🦜"' },
            { type: 'multiple_choice', questionText: 'Result of prefix[R] ^ prefix[L-1] for XOR?', options: ['Range XOR [L, R]', 'Sum [L, R]', '0'], correctAnswer: 'Range XOR [L, R]' },
            { type: 'match_following', questionText: 'Match logic!', pairs: [
              {key: 'prefix[0]', value: '0 (base case)'}, {key: 'prefix[i] ^ a[i]', value: 'Next prefix'}, {key: 'Instant query', value: 'O(1)'}
            ] },
            { type: 'programming_board', questionText: 'Fix XOR query!', codeSnippet: 'return prefix[R+1] ^ ___ ;', correctAnswer: 'prefix[L]' },
            { type: 'multiple_choice', questionText: 'Is this faster than O(N) per query?', options: ['YES!', 'No.', 'Depends.'], correctAnswer: 'YES!' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Can you XOR a seed?"', options: ['No!', 'Yes.', 'Squawk!'], correctAnswer: 'No!' }
          ]
        },
        {
          title: 'Count Subarrays with Fixed Range', desc: 'Stay in your lane! 🦜', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Count subarrays where every bird is between [minK, maxK] and BOTH minK and maxK are present! 🦜"', codeSnippet: 'if(x < minK || x > maxK) badIdx = i;\nif(x == minK) minIdx = i;\nif(x == maxK) maxIdx = i;\nans += max(0, min(minIdx, maxIdx) - badIdx);' },
            { type: 'teaching', questionText: '🦜 Pico: "Three pointers track the last seen: minK, maxK, and a bird out of range. 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "The number of valid subarrays ending at `i` is the distance between the CLOSEST of (minK, maxK) and the last bad bird! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(N). Linear as my beak! Space: O(1). 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Scenario: [1, 3, 5, 2, 7, 5], minK=1, maxK=5. 🦜"' },
            { type: 'multiple_choice', questionText: 'How many pointers are used here?', options: ['3', '2', '1'], correctAnswer: '3' },
            { type: 'match_following', questionText: 'Match pointers!', pairs: [
              {key: 'minIdx', value: 'Last seen minK'}, {key: 'maxIdx', value: 'Last seen maxK'}, {key: 'badIdx', value: 'Last seen invalid bird'}
            ] },
            { type: 'programming_board', questionText: 'Fix count update!', codeSnippet: 'ans += max(0, min(min_i, max_i) - ___);', correctAnswer: 'bad_i' },
            { type: 'multiple_choice', questionText: 'Complexity?', options: ['O(N)', 'O(N^2)', 'O(1)'], correctAnswer: 'O(N)' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Am I within range?"', options: ['Always!', 'No.', 'Squawk!'], correctAnswer: 'Always!' }
          ]
        },
        {
          title: 'Shortest Unsorted Subarray', desc: 'Fix the line! 🦜', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Find the shortest contiguous subarray that, if sorted, would sort the whole array! 🦜"', codeSnippet: 'for(int i=0; i<n; i++) {\n  if(a[i] < maxSoFar) end = i; else maxSoFar = a[i];\n}\nfor(int i=n-1; i>=0; i--) {\n  if(a[i] > minSoFar) start = i; else minSoFar = a[i];\n}' },
            { type: 'teaching', questionText: '🦜 Pico: "Find where the order breaks from the left and from the right! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(N). Two passes. Space: O(1). Simple and elegant! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "The birds outside this range are already in their final sorted spots. 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Wait! Always check if the array is already sorted first to return 0! 🦜"' },
            { type: 'multiple_choice', questionText: 'Complexity of optimized approach?', options: ['O(N)', 'O(N log N)', 'O(N^2)'], correctAnswer: 'O(N)' },
            { type: 'match_following', questionText: 'Match passes!', pairs: [
              {key: 'Start', value: 'Right-to-Left (Min)'}, {key: 'End', value: 'Left-to-Right (Max)'}, {key: 'Condition', value: 'nums[i] out of place'}
            ] },
            { type: 'programming_board', questionText: 'Fix end check!', codeSnippet: 'if(nums[i] < max_val) end = i;\nelse max_val = ___ ;', correctAnswer: 'nums[i]' },
            { type: 'multiple_choice', questionText: 'Result if array is [1, 2, 3, 4]?', options: ['0', '4', '1'], correctAnswer: '0' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Who is unsorted here?"', options: ['The dogs!', 'Me.', 'Nobody.'], correctAnswer: 'The dogs!' }
          ]
        },
        {
          title: 'Count Subarrays Median K', desc: 'Middle of the road! 🦜', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Count subarrays where the median is K! Another Zoho HARD! 🔮"', codeSnippet: 'transform [x<K -> -1, x>K -> 1, x==K -> 0];\n// then 1D prefix sum map logic...' },
            { type: 'teaching', questionText: '🦜 Pico: "Transform the array! Birds < K are -1, birds > K are +1. The median is K if the sum is 0 or 1! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(N). Space: O(N) for the map. 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Use a map to store prefix sums seen before index of K. 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "This is a variant of "Contiguous Array with Equal 0s and 1s". 🦜"' },
            { type: 'multiple_choice', questionText: 'Value for birds > K in transformation?', options: ['1', '-1', '0'], correctAnswer: '1' },
            { type: 'match_following', questionText: 'Match transformed values!', pairs: [
              {key: '< K', value: '-1'}, {key: '> K', value: '+1'}, {key: '== K', value: '0'}
            ] },
            { type: 'programming_board', questionText: 'Fix target sums!', codeSnippet: 'count += m[sum] + m[___];', correctAnswer: 'sum-1' },
            { type: 'multiple_choice', questionText: 'Complexity?', options: ['O(N)', 'O(N^2)', 'O(1)'], correctAnswer: 'O(N)' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Am I the median?"', options: ['YES!', 'No.', 'Maybe.'], correctAnswer: 'YES!' }
          ]
        },
        {
          title: 'Range Sum Query (Prefix)', desc: 'Instant math! ⚡', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Answer many range sum queries [L, R] on a fixed flock! 🦜"', codeSnippet: 'prefix[i+1] = prefix[i] + a[i];\nsum(L, R) = prefix[R+1] - prefix[L];' },
            { type: 'teaching', questionText: '🦜 Pico: "Precompute the prefix sum array once. Then every query is just one subtraction! O(1) speed! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(N) precompute, O(Q) queries. 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Space Complexity: O(N) for the prefix table. 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Wait! Indexing matters! `prefix[0]` is always 0 to handle the edge. 🦜"' },
            { type: 'multiple_choice', questionText: 'Time complexity per query using prefix sum?', options: ['O(1)', 'O(N)', 'O(log N)'], correctAnswer: 'O(1)' },
            { type: 'match_following', questionText: 'Match variables!', pairs: [
              {key: 'prefix[i]', value: 'Sum of first i birds'}, {key: 'prefix[R+1]', value: 'Sum up to R'}, {key: 'Subtraction', value: 'Range R-L'}
            ] },
            { type: 'programming_board', questionText: 'Fix range sum subtraction!', codeSnippet: 'return prefix[R+1] - ___ ;', correctAnswer: 'prefix[L]' },
            { type: 'multiple_choice', questionText: 'What is O(N) precompute plus O(Q) queries total?', options: ['O(N + Q)', 'O(N * Q)', 'O(Q)'], correctAnswer: 'O(N + Q)' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Ready for 2D prefix magic?"', options: ['YES!', 'No.', 'Seeds!'], correctAnswer: 'YES!' }
          ]
        },
        {
          title: 'Range Sum Query 2D', desc: 'Matrix math! 📊', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Sum of a sub-rectangle in a matrix! Use 2D Prefix Sums! 🦜"', codeSnippet: 'prefix[i][j] = mat[i-1][j-1] + prefix[i-1][j] + prefix[i][j-1] - prefix[i-1][j-1];\nsum(r1, c1, r2, c2) = prefix[r2+1][c2+1] - prefix[r1][c2+1] - prefix[r2+1][c1] + prefix[r1][c1];' },
            { type: 'teaching', questionText: '🦜 Pico: "Wait! Why subtract `prefix[i-1][j-1]` during precompute? Because it was added TWICE in the other two terms! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Precompute: O(R*C). Query: O(1). Blazing fast! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Space Complexity: O(R*C) for the 2D prefix table. 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Zoho uses this to test your inclusion-exclusion principle knowledge. 🦜"' },
            { type: 'multiple_choice', questionText: 'Time complexity per query for 2D range sum?', options: ['O(1)', 'O(R+C)', 'O(R*C)'], correctAnswer: 'O(1)' },
            { type: 'match_following', questionText: 'Match terms!', pairs: [
              {key: 'prefix[i-1][j-1]', value: 'Top-Left corner'}, {key: 'prefix[r2+1][c2+1]', value: 'Bottom-Right corner'}, {key: 'Subtraction', value: 'Inclusion-Exclusion'}
            ] },
            { type: 'programming_board', questionText: 'Fix 2D precompute!', codeSnippet: 'P[i][j] = M[i-1][j-1] + P[i-1][j] + P[i][j-1] - ___ ;', correctAnswer: 'P[i-1][j-1]' },
            { type: 'multiple_choice', questionText: 'How many sub-rectangles are subtracted in a query?', options: ['2', '1', '3'], correctAnswer: '2' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Is math fun?"', options: ['YES!', 'No.', 'Ask a calculator.'], correctAnswer: 'YES!' }
          ]
        },
        {
          title: 'Longest Alternating Subarray', desc: 'Zig-zag birds! 🦜', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Find the longest subarray where elements alternate: [Small, Large, Small, Large]... or similar! 🦜"', codeSnippet: 'if((a[i]>a[i-1] && a[i-1]<a[i-2]) || (a[i]<a[i-1] && a[i-1]>a[i-2])) count++;\nelse count = (a[i] == a[i-1] ? 1 : 2);' },
            { type: 'teaching', questionText: '🦜 Pico: "Dynamic Programming or Sliding Window! Keep track of the current alternating length. 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(N). Space Complexity: O(1). 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "This tests your ability to handle multiple conditions in a loop! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Scenario: [1, 5, 2, 8, 3] -> Length 5! All alternate. 🦜"' },
            { type: 'multiple_choice', questionText: 'Complexity of longest alternating?', options: ['O(N)', 'O(N^2)', 'O(1)'], correctAnswer: 'O(N)' },
            { type: 'match_following', questionText: 'Match conditions!', pairs: [
              {key: 'Alternates', value: 'count++'}, {key: 'Repeats', value: 'count = 1'}, {key: 'Restarts', value: 'count = 2'}
            ] },
            { type: 'programming_board', questionText: 'Fix restart condition!', codeSnippet: 'if (nums[i] == nums[i-1]) count = ___ ;\nelse count = 2;', correctAnswer: '1' },
            { type: 'multiple_choice', questionText: 'Is O(N) space needed?', options: ['No', 'Yes', 'Only with DP'], correctAnswer: 'No' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Can you zig-zag?"', options: ['YES!', 'No.', 'Squawk!'], correctAnswer: 'YES!' }
          ]
        },
        {
          title: 'Subarray Sums with Negatives', desc: 'Debts in the nest! 💸', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Find a subarray with sum K even when birds have NEGATIVE values. No sliding window here! 🦜"', codeSnippet: 'map[0] = 1;\nfor(int x : nums) {\n  sum += x;\n  if(map.count(sum - K)) return true;\n  map[sum]++;\n}' },
            { type: 'teaching', questionText: '🦜 Pico: "Sliding window fails with negatives because shrinking from left might INCREASE the sum! Use a Hash Map! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(N). Space Complexity: O(N) for the map. 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Memory is the price for negative-debt handling! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Scenario: [1, -1, 5, -2, 3], K=3. [5, -2] is K! 🦜"' },
            { type: 'multiple_choice', questionText: 'Why does sliding window fail with negatives?', options: ['Monotonicity is lost', 'Birds start fighting', 'Sum gets too large'], correctAnswer: 'Monotonicity is lost' },
            { type: 'match_following', questionText: 'Match tools!', pairs: [
              {key: 'Positives Only', value: 'Sliding Window'}, {key: 'Including Negatives', value: 'Hash Map'}, {key: 'Goal', value: 'Find Sum K'}
            ] },
            { type: 'programming_board', questionText: 'Fix map lookup!', codeSnippet: 'if(prefix_map.count(sum - ___)) return true;', correctAnswer: 'K' },
            { type: 'multiple_choice', questionText: 'Complexity with Map?', options: ['O(N)', 'O(N^2)', 'O(1)'], correctAnswer: 'O(N)' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Am I in debt?"', options: ['No, #1 bird!', 'Yes.', 'Squawk!'], correctAnswer: 'No, #1 bird!' }
          ]
        },
        {
          title: 'Max Size Subarray Sum K', desc: 'The longest stretch! 📐', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "What is the MAX length of a subarray summing to K? (With negatives). 🦜"', codeSnippet: 'if(map.find(sum - K) != map.end())\n  maxLen = max(maxLen, i - map[sum - K]);\nif(map.find(sum) == map.end())\n  map[sum] = i;' },
            { type: 'teaching', questionText: '🦜 Pico: "Important: Only add sum to map if it is NEW! We want the FIRST index to get the GREATEST distance! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(N). Space: O(N). 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "This is the definitive Zoho interview version of Subarray Sum. 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Scenario: [1, -1, 5, -2, 3], K=3. Length 2 ([5, -2]). 🦜"' },
            { type: 'multiple_choice', questionText: 'When should you NOT update the map with a new sum?', options: ['If sum already exists', 'If sum is negative', 'Never'], correctAnswer: 'If sum already exists' },
            { type: 'match_following', questionText: 'Match logic!', pairs: [
              {key: 'sum - K', value: 'Lookup key'}, {key: 'map[sum]', value: 'First index of this sum'}, {key: 'i - map[sum-K]', value: 'Current Length'}
            ] },
            { type: 'programming_board', questionText: 'Fix max length update!', codeSnippet: 'if (m.find(s - K) != m.end())\n  ans = max(ans, i - ___);', correctAnswer: 'm[s-K]' },
            { type: 'multiple_choice', questionText: 'What is the base case for sum 0?', options: ['map[0] = -1', 'map[0] = 0', 'None'], correctAnswer: 'map[0] = -1' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Ready for the big finale?"', options: ['YES!', 'Seeds first.', 'Squawk!'], correctAnswer: 'YES!' }
          ]
        },
        {
          title: 'Bounded Max Subarrays', desc: 'Goldilocks! 🦜', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Count subarrays where the MAX element is between [L, R]! Not too big, not too small! 🦜"', codeSnippet: 'count(R) - count(L-1);\n// where count(X) = count subarrays where max <= X' },
            { type: 'teaching', questionText: '🦜 Pico: "Trick: `Subarrays with Max <= R` MINUS `Subarrays with Max <= L-1`. 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(N). Space: O(1). Zoho Ninja thinking! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "How many subarrays with max <= X? If a bird is > X, count resets! Otherwise, length increases! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Scenario: [2, 1, 4, 3], L=2, R=3. Result: 3! ([2], [2,1], [3]). 🦜"' },
            { type: 'multiple_choice', questionText: 'Formula to count subarrays with max in [L, R]?', options: ['Count(R) - Count(L-1)', 'Count(R) + Count(L)', 'Count(R)'], correctAnswer: 'Count(R) - Count(L-1)' },
            { type: 'match_following', questionText: 'Match counts!', pairs: [
              {key: 'count(X)', value: 'Max <= X'}, {key: 'bird > X', value: 'Reset streak'}, {key: 'bird <= X', value: 'Add streak to total'}
            ] },
            { type: 'programming_board', questionText: 'Fix count logic for Max <= X!', codeSnippet: 'for(int x : a) {\n  if(x <= X) curr++; else curr = 0;\n  ans += ___ ;\n}', correctAnswer: 'curr' },
            { type: 'multiple_choice', questionText: 'Complexity?', options: ['O(N)', 'O(N^2)', 'O(1)'], correctAnswer: 'O(N)' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Stage 4 COMPLETE! Ready for Stage 5?"', options: ['YES!', 'Seeds first.', 'Squawk!'], correctAnswer: 'YES!' }
          ]
        }
      ]
    },
    { 
      title: '5. Sorting & Selection Rituals', 
      units: [
        {
          title: 'Selection Sort (Logic)', desc: 'Pick the best bird! 🐦', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Selection Sort! Find the minimum bird in the unsorted flock and swap it to the front! 🦜"', codeSnippet: 'for(int i=0; i<n-1; i++) {\n  int minIdx = i;\n  for(int j=i+1; j<n; j++) if(a[j] < a[minIdx]) minIdx = j;\n  swap(a[i], a[minIdx]);\n}' },
            { type: 'teaching', questionText: '🦜 Pico: "It is called Selection because we SELECT the smallest bird and put it in its true place! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(N^2) always. It is slow, but uses minimum swaps! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Space Complexity: O(1). No extra nests needed! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Scenario: [5, 2, 8, 1]. Select 1 -> Swap with 5. Then select 2... 🦜"' },
            { type: 'multiple_choice', questionText: 'Selection sort complexity in all cases?', options: ['O(N^2)', 'O(N log N)', 'O(N)'], correctAnswer: 'O(N^2)' },
            { type: 'match_following', questionText: 'Match steps!', pairs: [
              {key: 'Outer Loop', value: 'Current position'}, {key: 'Inner Loop', value: 'Find Minimum'}, {key: 'Swap', value: 'Place at current'}
            ] },
            { type: 'programming_board', questionText: 'Fix min selection!', codeSnippet: 'if(arr[j] < arr[___]) min_idx = j;', correctAnswer: 'min_idx' },
            { type: 'multiple_choice', questionText: 'Is selection sort stable?', options: ['No', 'Yes', 'Only for birds'], correctAnswer: 'No' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Who is the smallest bird?"', options: ['Me!', 'The bird at minIdx.', 'None.'], correctAnswer: 'The bird at minIdx.' }
          ]
        },
        {
          title: 'Bubble Sort (Optimized)', desc: 'Popping bubbles! 🎈', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Bubble Sort! Heavier birds (larger numbers) sink to the end of the flock! 🦜"', codeSnippet: 'for(int i=0; i<n-1; i++) {\n  bool swapped = false;\n  for(int j=0; j<n-i-1; j++) if(a[j] > a[j+1]) { swap(a[j], a[j+1]); swapped = true; }\n  if(!swapped) break;\n}' },
            { type: 'teaching', questionText: '🦜 Pico: "Optimization: If no birds were swapped in a whole pass, everyone is already sorted! Break early! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(N) best case, O(N^2) worst case. 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Space Complexity: O(1). Parrots like to bubble up! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Stable? YES! Birds of equal value stay in their original order. 🦜"' },
            { type: 'multiple_choice', questionText: 'What is the best-case complexity of optimized Bubble Sort?', options: ['O(N)', 'O(N^2)', 'O(1)'], correctAnswer: 'O(N)' },
            { type: 'match_following', questionText: 'Match movements!', pairs: [
              {key: 'a[j] > a[j+1]', value: 'Swap neighbors'}, {key: 'i-th pass', value: 'i-th largest at back'}, {key: 'swapped=false', value: 'Terminate early'}
            ] },
            { type: 'programming_board', questionText: 'Fix loop boundary!', codeSnippet: 'for(int j = 0; j < n - ___ - 1; j++)', correctAnswer: 'i' },
            { type: 'multiple_choice', questionText: 'Is Bubble Sort faster than Merge Sort?', options: ['Rarely', 'Always', 'Only for 2 birds'], correctAnswer: 'Rarely' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Do I pop?"', options: ['YES!', 'No.', 'Squawk!'], correctAnswer: 'YES!' }
          ]
        },
        {
          title: 'Insertion Sort (Logic)', desc: 'Card player bird! 🃏', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Insertion Sort! Take one bird at a time and insert it into the sorted portion on the left. Like sorting cards! 🦜"', codeSnippet: 'for(int i=1; i<n; i++) {\n  int key = a[i], j = i-1;\n  while(j >= 0 && a[j] > key) { a[j+1] = a[j]; j--; }\n  a[j+1] = key;\n}' },
            { type: 'teaching', questionText: '🦜 Pico: "It is very efficient for SMALL datasets or nearly sorted arrays! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(N) best, O(N^2) worst. Space: O(1). 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Stable? YES! It is a gentle sorter bird. 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Zoho uses this to test if you know when to use O(N^2) algorithms wisely! 🦜"' },
            { type: 'multiple_choice', questionText: 'Which sort is best for a nearly sorted array?', options: ['Insertion Sort', 'Selection Sort', 'Quick Sort'], correctAnswer: 'Insertion Sort' },
            { type: 'match_following', questionText: 'Match roles!', pairs: [
              {key: 'key', value: 'Current bird for placement'}, {key: 'j', value: 'Scanning left neighbor'}, {key: 'a[j+1] = a[j]', value: 'Shifting right'}
            ] },
            { type: 'programming_board', questionText: 'Fix insertion step!', codeSnippet: 'while(j >= 0 && arr[j] > key) {\n  arr[j+1] = arr[j];\n  ___--;\n}', correctAnswer: 'j' },
            { type: 'multiple_choice', questionText: 'Worst case scenario?', options: ['Reverse sorted array', 'Sorted array', 'Random array'], correctAnswer: 'Reverse sorted array' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Do you play cards?"', options: ['YES!', 'No.', 'Ask a pirate bird.'], correctAnswer: 'YES!' }
          ]
        },
        {
          title: 'Merge Sort (Divide & Conquer)', desc: 'Divide and conquer! ⚔️', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Merge Sort! Split the flock in half until they are single birds. Then merge them back in order! 🦜"', codeSnippet: 'mergeSort(l, mid);\nmergeSort(mid+1, r);\nmerge(l, mid, r);' },
            { type: 'teaching', questionText: '🦜 Pico: "This is a STABLE, O(N log N) algorithm. Always consistent! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(N log N) always. Space: O(N) for helper arrays. 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Zoho Standard: If you can\'t explain Merge Sort, you are not a bird yet! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Recurrence: T(N) = 2T(N/2) + O(N). 🦜"' },
            { type: 'multiple_choice', questionText: 'Merging two arrays of size N/2 takes how much time?', options: ['O(N)', 'O(log N)', 'O(1)'], correctAnswer: 'O(N)' },
            { type: 'match_following', questionText: 'Match phases!', pairs: [
              {key: 'Divide', value: 'Split mid'}, {key: 'Conquer', value: 'Recursive sort'}, {key: 'Combine', value: 'Merge pointers'}
            ] },
            { type: 'programming_board', questionText: 'Fix mid index!', codeSnippet: 'int mid = l + (___ - l) / 2;', correctAnswer: 'r' },
            { type: 'multiple_choice', questionText: 'Is Merge Sort in-place?', options: ['No', 'Yes', 'Depends.'], correctAnswer: 'No' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Are we united?"', options: ['YES!', 'We are merging.', 'Squawk!'], correctAnswer: 'YES!' }
          ]
        },
        {
          title: 'Quick Sort (Logic)', desc: 'Pick a leader! 🦅', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Quick Sort! Pick a PIVOT bird and partition the flock so all smaller birds go left and larger ones go right! 🦜"', codeSnippet: 'int p = partition(l, r);\nquickSort(l, p-1);\nquickSort(p+1, r);' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(N log N) average, O(N^2) worst. But usually the fastest bird! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Space Complexity: O(log N) for recursion stack. In-place sorting! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Pivot selection is key. Random pivot prevents the worst-case crash! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Zoho Elite level: Can you implement Lomuto partition? 🦜"' },
            { type: 'multiple_choice', questionText: 'Average time complexity of Quick Sort?', options: ['O(N log N)', 'O(N^2)', 'O(N)'], correctAnswer: 'O(N log N)' },
            { type: 'match_following', questionText: 'Match partitioning!', pairs: [
              {key: 'Pivot', value: 'Reference element'}, {key: 'Left', value: 'Smaller birds'}, {key: 'Right', value: 'Larger birds'}
            ] },
            { type: 'programming_board', questionText: 'Fix partition swap!', codeSnippet: 'if(a[j] <= pivot) {\n  i++;\n  swap(a[i], a[___]);\n}', correctAnswer: 'j' },
            { type: 'multiple_choice', questionText: 'When does worst-case O(N^2) happen?', options: ['Sorted or reverse array (bad pivot)', 'Random array', 'Small array'], correctAnswer: 'Sorted or reverse array (bad pivot)' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Who is the leader bird?"', options: ['Pivot!', 'Me.', 'The USER.'], correctAnswer: 'Pivot!' }
          ]
        },
        {
          title: 'Count Inversions', desc: 'Out of order! 📉', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Count how many pairs (i, j) exist where i < j and a[i] > a[j]. This is the degree of unsortedness! 🦜"', codeSnippet: 'int count = 0;\nwhile(i <= mid && j <= r) {\n  if(a[i] <= a[j]) temp[k++] = a[i++];\n  else { temp[k++] = a[j++]; count += (mid - i + 1); }\n}' },
            { type: 'teaching', questionText: '🦜 Pico: "Use Merge Sort magic! When merging, if a bird from the right flock is smaller than one from the left, it is an inversion for ALL remaining birds in the left flock! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(N log N). Space: O(N). 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Zoho Elite level: This is how they check if you REALLY understand merging. 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Scenario: [2, 4, 1, 3, 5] -> Inversions: (2,1), (4,1), (4,3). Total: 3! 🦜"' },
            { type: 'multiple_choice', questionText: 'How many inversions in a sorted array?', options: ['0', 'N', 'N-1'], correctAnswer: '0' },
            { type: 'match_following', questionText: 'Match roles!', pairs: [
              {key: 'Left side element', value: 'a[i]'}, {key: 'Right side element', value: 'a[j]'}, {key: 'Inversion Count', value: '(mid - i + 1)'}
            ] },
            { type: 'programming_board', questionText: 'Fix inversion increment!', codeSnippet: 'if(a[i] > a[j]) {\n  inv_count += (___ - i + 1);\n  temp[k++] = a[j++];\n}', correctAnswer: 'mid' },
            { type: 'multiple_choice', questionText: 'Complexity of naive nested loop?', options: ['O(N^2)', 'O(N log N)', 'O(N)'], correctAnswer: 'O(N^2)' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Is the flock messy?"', options: ['YES!', 'No.', 'Squawk!'], correctAnswer: 'YES!' }
          ]
        },
        {
          title: 'Merge Overlapping Intervals', desc: 'Merging nests! 🏠', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Merge intervals that overlap! Like scheduling bird meetings. 🦜"', codeSnippet: 'sort(intervals);\nfor(auto it : intervals) {\n  if(res.empty() || it[0] > res.back()[1]) res.push_back(it);\n  else res.back()[1] = max(res.back()[1], it[1]);\n}' },
            { type: 'teaching', questionText: '🦜 Pico: "Sort by START time first. Then iterate! If current starts after previous ends, it is a new nest. Else, merge them! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(N log N) for sort. Space: O(N) for output. 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Scenario: [1,3], [2,6], [8,10] -> [1,6], [8,10]. 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Why max(back[1], curr[1])? Because the current meeting might end earlier than the previous one! 🦜"' },
            { type: 'multiple_choice', questionText: 'What is the first step in merging intervals?', options: ['Sort by start time', 'Sort by end time', 'Randomize'], correctAnswer: 'Sort by start time' },
            { type: 'match_following', questionText: 'Match conditions!', pairs: [
              {key: 'Overlap', value: 'curr[0] <= prev[1]'}, {key: 'Separate', value: 'curr[0] > prev[1]'}, {key: 'Merge Action', value: 'Update prev[1] with max'}
            ] },
            { type: 'programming_board', questionText: 'Fix interval merge!', codeSnippet: 'ans.back()[1] = max(ans.back()[1], ___[1]);', correctAnswer: 'intervals[i]' },
            { type: 'multiple_choice', questionText: 'Worst case space?', options: ['O(N)', 'O(1)', 'O(log N)'], correctAnswer: 'O(N)' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Ready for the next meeting?"', options: ['YES!', 'No.', 'Squawk!'], correctAnswer: 'YES!' }
          ]
        },
        {
          title: 'Insert Interval', desc: 'New bird in town! 🐦', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Insert a new interval into a SORTED flock of non-overlapping intervals. Merge if needed! 🦜"', codeSnippet: 'while(i < n && intervals[i][1] < newInterval[0]) res.push_back(intervals[i++]);\nwhile(i < n && intervals[i][0] <= newInterval[1]) {\n  newInterval[0] = min(newInterval[0], intervals[i][0]);\n  newInterval[1] = max(newInterval[1], intervals[i][1]);\n  i++;\n}\nres.push_back(newInterval);\nwhile(i < n) res.push_back(intervals[i++]);' },
            { type: 'teaching', questionText: '🦜 Pico: "Three parts: 1. Birds before newInterval. 2. Merge birds that overlap with newInterval. 3. Birds after newInterval. 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Since the array was already sorted, this only takes O(N) time! Fast bird! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Space Complexity: O(N) for the result. 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Complexity: O(N). No sorting needed! 🦜"' },
            { type: 'multiple_choice', questionText: 'Complexity of adding into already sorted non-overlapping intervals?', options: ['O(N)', 'O(N log N)', 'O(1)'], correctAnswer: 'O(N)' },
            { type: 'match_following', questionText: 'Match phases!', pairs: [
              {key: 'Left', value: 'birds ending before start'}, {key: 'Overlap', value: 'update start/end and skip'}, {key: 'Right', value: 'remaining birds'}
            ] },
            { type: 'programming_board', questionText: 'Fix merge max!', codeSnippet: 'newInterval[1] = max(newInterval[1], intervals[i][___]);', correctAnswer: '1' },
            { type: 'multiple_choice', questionText: 'Is O(N) space better than O(1) in-place here?', options: ['Yes, arrays are hard to shift in-place', 'No', 'Depends.'], correctAnswer: 'Yes, arrays are hard to shift in-place' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Am I invited?"', options: ['YES!', 'Maybe.', 'Squawk!'], correctAnswer: 'YES!' }
          ]
        },
        {
          title: 'Non-overlapping Intervals', desc: 'Clear the schedule! 🧹', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Find the MINIMUM number of intervals to remove to make the rest non-overlapping! (Maximum intervals to keep). 🦜"', codeSnippet: 'sort(intervals, compareByEnd);\nfor(auto it : intervals) {\n  if(it[0] >= end) { count++; end = it[1]; }\n}' },
            { type: 'teaching', questionText: '🦜 Pico: "Greedy Strategy: Sort by END TIME. Pick the bird that finishes earliest, leaving more room for others! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(N log N). Space: O(1). 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Number to remove = Total - Count kept. 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Zoho uses this to test your Greedy Thinking. Sort by End, not Start! 🦜"' },
            { type: 'multiple_choice', questionText: 'Greedy choice for non-overlapping intervals?', options: ['Sort by End Time', 'Sort by Start Time', 'Sort by Length'], correctAnswer: 'Sort by End Time' },
            { type: 'match_following', questionText: 'Match strategy!', pairs: [
              {key: 'Sort', value: 'Finish earliest first'}, {key: 'Condition', value: 'Start >= end of previous'}, {key: 'Result', value: 'Max non-overlapping'}
            ] },
            { type: 'programming_board', questionText: 'Fix removal count!', codeSnippet: 'return n - ___ ;', correctAnswer: 'count' },
            { type: 'multiple_choice', questionText: 'Complexity?', options: ['O(N log N)', 'O(N)', 'O(N^2)'], correctAnswer: 'O(N log N)' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Who gets removed?"', options: ['The lazy birds.', 'Overlap birds.', 'None.'], correctAnswer: 'Overlap birds.' }
          ]
        },
        {
          title: 'Kth Largest (Quick Select)', desc: 'Selection fast! ⚡', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Find the Kth Largest element WITHOUT fully sorting! Use Quick Select logic! 🦜"', codeSnippet: 'int p = partition(l, r);\nif(p == target) return a[p];\nif(p < target) return quickSelect(p+1, r, target);\nelse return quickSelect(l, p-1, target);' },
            { type: 'teaching', questionText: '🦜 Pico: "It is like Quick Sort but we only FLY into one half! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Average Time Complexity: O(N). Worst Case: O(N^2). 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Use randomized pivot to stay in the O(N) flight path! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Zoho Elite level: Can you explain why it is O(N) while QuickSort is O(N log N)? 🦜"' },
            { type: 'multiple_choice', questionText: 'Average time complexity of Quick Select?', options: ['O(N)', 'O(N log N)', 'O(N^2)'], correctAnswer: 'O(N)' },
            { type: 'match_following', questionText: 'Match logic!', pairs: [
              {key: 'One half', value: 'Reduce search space'}, {key: 'Pivot p', value: 'p-th position sorted'}, {key: 'K-th largest', value: 'Target index (N-K)'}
            ] },
            { type: 'programming_board', questionText: 'Fix partitioning direction!', codeSnippet: 'if (p < k_index) return quickSelect(p + 1, hi, ___);', correctAnswer: 'k_index' },
            { type: 'multiple_choice', questionText: 'Is Quick Select faster than using a Heap O(N log K)?', options: ['Yes, O(N) average', 'No', 'Always the same'], correctAnswer: 'Yes, O(N) average' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Am I the Kth largest?"', options: ['YES!', 'Maybe.', 'Squawk!'], correctAnswer: 'YES!' }
          ]
        },
        {
          title: 'Sort 0s, 1s, 2s (DNF)', desc: 'Three-way split! 🇮🇳', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "The Dutch National Flag problem! A sorting classic for Zoho. Sort 0s, 1s, and 2s in O(N) time and O(1) space! 🦜"', codeSnippet: 'while(mid <= high) {\n  if(a[mid] == 0) swap(a[low++], a[mid++]);\n  else if(a[mid] == 1) mid++;\n  else swap(a[mid], a[high--]);\n}' },
            { type: 'teaching', questionText: '🦜 Pico: "Three pointers: Low for 0s, High for 2s, and Mid to scan through the flock! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(N). Space Complexity: O(1). 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Wait! Why not increment `mid` when swapping with `high`? Because the bird coming from `high` is unknown! Check it first! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Scenario: [2, 0, 1]. Swap 2 with high -> [1, 0, 2]. Mid stays at 0. Then mid++... 🦜"' },
            { type: 'multiple_choice', questionText: 'Number of pointers in DNF?', options: ['3', '2', '1'], correctAnswer: '3' },
            { type: 'match_following', questionText: 'Match pointers!', pairs: [
              {key: 'low', value: 'Edge of 0s'}, {key: 'mid', value: 'Unsorted scan'}, {key: 'high', value: 'Edge of 2s'}
            ] },
            { type: 'programming_board', questionText: 'Fix mid-high swap!', codeSnippet: 'else if(nums[mid] == 2) {\n  swap(nums[mid], nums[high]);\n  ___--;\n}', correctAnswer: 'high' },
            { type: 'multiple_choice', questionText: 'Can you use a counting array instead?', options: ['Yes, but that takes 2 passes', 'No', 'Only for birds'], correctAnswer: 'Yes, but that takes 2 passes' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Is it colorful?"', options: ['YES!', 'A bit.', 'Squawk!'], correctAnswer: 'YES!' }
          ]
        },
        {
          title: 'Find Duplicate (Cycle)', desc: 'Hare and Tortoise! 🐰🐢', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "In an array of N+1 birds with values 1 to N, one bird is a DUPLICATE! Find it in O(1) space! 🦜"', codeSnippet: 'int slow = a[0], fast = a[0];\ndo { slow = a[slow]; fast = a[a[fast]]; } while(slow != fast);\nfast = a[0];\nwhile(slow != fast) { slow = a[slow]; fast = a[fast]; }\nreturn slow;' },
            { type: 'teaching', questionText: '🦜 Pico: "Treat the array like a Linked List! The duplicate bird creates a CYCLE in the flight path! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Floyds Cycle Detection! Fast bird moves twice as fast. Where they meet, reset one and move both at speed 1! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(N). Space Complexity: O(1). 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Requirement: Numbers must be between 1 and N for the indexing magic to work! 🦜"' },
            { type: 'multiple_choice', questionText: 'Algorithm for duplicate in N+1?', options: ['Floyd Cycle Detection', 'Binary Search', 'Kadane'], correctAnswer: 'Floyd Cycle Detection' },
            { type: 'match_following', questionText: 'Match movements!', pairs: [
              {key: 'slow', value: 'a[slow]'}, {key: 'fast', value: 'a[a[fast]]'}, {key: 'Reset', value: 'Where cycle starts'}
            ] },
            { type: 'programming_board', questionText: 'Fix fast pointer!', codeSnippet: 'fast = nums[___[fast]];', correctAnswer: 'nums' },
            { type: 'multiple_choice', questionText: 'What if there are multiple duplicates?', options: ['Finds one of them', 'Finds all', 'Fails'], correctAnswer: 'Finds one of them' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Am I a turtle or a hare?"', options: ['A bird!', 'Hare.', 'Turtle.'], correctAnswer: 'A bird!' }
          ]
        },
        {
          title: 'Missing & Repeating', desc: 'Math to the rescue! 🧮', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Find the missing and repeating birds in 1..N! Use Math: Sum and Square Sum! 🦜"', codeSnippet: 'S - Sn = x - y;\nS2 - S2n = x^2 - y^2;\n(S2 - S2n)/(S - Sn) = x + y;' },
            { type: 'teaching', questionText: '🦜 Pico: "Two equations, two unknowns (X=Repeating, Y=Missing). Solve for X and Y! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(N). Space Complexity: O(1). 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Alternate: Use XOR magic to separate them. XOR all birds and numbers 1..N! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Zoho uses this to see if you can think outside the loops! 🦜"' },
            { type: 'multiple_choice', questionText: 'Formula for sum of first N natural numbers?', options: ['N(N+1)/2', 'N^2', 'N'], correctAnswer: 'N(N+1)/2' },
            { type: 'match_following', questionText: 'Match variables!', pairs: [
              {key: 'x - y', value: 'Sum difference'}, {key: 'x + y', value: 'Square sum diff / Sum diff'}, {key: 'x', value: 'Repeating bird'}
            ] },
            { type: 'programming_board', questionText: 'Fix repeating calc!', codeSnippet: 'long long val1 = S - Sn; // x - y\nlong long val2 = S2 - S2n; // x^2 - y^2\nval2 = val2 / val1; // x + y\nlong long x = (val1 + val2) / ___;', correctAnswer: '2' },
            { type: 'multiple_choice', questionText: 'Complexity?', options: ['O(N)', 'O(N^2)', 'O(log N)'], correctAnswer: 'O(N)' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Is math bird magic?"', options: ['YES!', 'No.', 'Squawk!'], correctAnswer: 'YES!' }
          ]
        },
        {
          title: 'Maximum Gap', desc: 'Bucket Sort! 🪣', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Find the maximum gap between elements in sorted form. CHALLENGE: Do it in O(N)! 🦜"', codeSnippet: 'gap = ceil((max-min)/(n-1));\nbucketsCount = (max-min)/gap + 1;\n// compute min/max for each bucket' },
            { type: 'teaching', questionText: '🦜 Pico: "Pigeonhole Principle! If we put birds into buckets, the max gap MUST occur between buckets, not inside! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Only track MIN and MAX for each bucket. Then compare `currBucketMin - prevBucketMax`. 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(N). Linear as a flight path! Space: O(N). 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Zero gap? If all birds are the same! 🦜"' },
            { type: 'multiple_choice', questionText: 'Minimum possible maximum gap?', options: ['(max-min)/(n-1)', '1', '0'], correctAnswer: '(max-min)/(n-1)' },
            { type: 'match_following', questionText: 'Match logic!', pairs: [
              {key: 'Bucket Min', value: 'Lowest in bucket'}, {key: 'Bucket Max', value: 'Highest in bucket'}, {key: 'Gap', value: 'currMin - prevMax'}
            ] },
            { type: 'programming_board', questionText: 'Fix bucket index!', codeSnippet: 'int idx = (nums[i] - minVal) / ___ ;', correctAnswer: 'gap' },
            { type: 'multiple_choice', questionText: 'Why not just O(N log N) sorting?', options: ['The problem requires O(N)!', 'Sorting is for dogs.', 'None.'], correctAnswer: 'The problem requires O(N)!' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Do I fit in a bucket?"', options: ['YES!', 'No.', 'Squawk!'], correctAnswer: 'YES!' }
          ]
        },
        {
          title: 'Sort by Frequency', desc: 'Popularity contest! 📈', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Sort the flock by bird type frequency! Most popular birds first. If count matches, sort by value! 🦜"', codeSnippet: 'map<int, int> freq;\nfor(int x : a) freq[x]++;\nsort(a.begin(), a.end(), [&](int a, int b) {\n  if(freq[a] != freq[b]) return freq[a] > freq[b];\n  return a < b;\n});' },
            { type: 'teaching', questionText: '🦜 Pico: "Map the counts first. Then use a custom comparator for the sort! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(N log N) for sort. Space: O(N) for map. 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "This combines Hashing and Sorting. Zoho favorite! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Scenario: [4, 4, 2, 2, 2, 1] -> [2, 2, 2, 4, 4, 1]. 🦜"' },
            { type: 'multiple_choice', questionText: 'Complexity of sorting by frequency?', options: ['O(N log N)', 'O(N)', 'O(N^2)'], correctAnswer: 'O(N log N)' },
            { type: 'match_following', questionText: 'Match comparator!', pairs: [
              {key: 'freq[a] > freq[b]', value: 'Descending count'}, {key: 'freq[a] == freq[b]', value: 'Tie-breaker by value'}, {key: 'Map', value: 'Store frequencies'}
            ] },
            { type: 'programming_board', questionText: 'Fix frequency check!', codeSnippet: 'if(m[a] != m[b]) return m[a] ___ m[b];', correctAnswer: '>' },
            { type: 'multiple_choice', questionText: 'Is this possible in O(N)?', options: ['Yes, using Bucket Sort on frequency', 'No', 'Maybe'], correctAnswer: 'Yes, using Bucket Sort on frequency' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Am I popular?"', options: ['YES!', 'Kind of.', 'Squawk!'], correctAnswer: 'YES!' }
          ]
        },
        {
          title: 'Custom Sort String', desc: 'Alphabet and birds! 🔤', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Sort a string based on a CUSTOM order! Like a secret bird language! 🦜"', codeSnippet: 'sort(s.begin(), s.end(), [&](char a, char b) {\n  return pos[a - \'a\'] < pos[b - \'a\'];\n});' },
            { type: 'teaching', questionText: '🦜 Pico: "Map each character in the `order` string to its rank (0, 1, 2...). Then sort the target string using these ranks! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(N log N) or O(N + M) using frequency counting! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Space Complexity: O(1) for the alphabet ranks (26 chars). 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Scenario: order="cba", s="abcd" -> "cbad". 🦜"' },
            { type: 'multiple_choice', questionText: 'What is the rank of "c" in order="cba"?', options: ['0', '1', '2'], correctAnswer: '0' },
            { type: 'match_following', questionText: 'Match logic!', pairs: [
              {key: 'order', value: 'The rank definition'}, {key: 's', value: 'The target strings'}, {key: 'count', value: 'O(N) alternative'}
            ] },
            { type: 'programming_board', questionText: 'Fix rank mapping!', codeSnippet: 'for(int i=0; i<order.length(); i++) {\n  rank[order[i] - \'a\'] = ___ ;\n}', correctAnswer: 'i' },
            { type: 'multiple_choice', questionText: 'Complexity with frequency count?', options: ['O(N + M)', 'O(N log N)', 'O(1)'], correctAnswer: 'O(N + M)' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Is my name sorted?"', options: ['YES!', 'No.', 'Squawk!'], correctAnswer: 'YES!' }
          ]
        },
        {
          title: 'Largest Number', desc: 'String sorting magic! 🔢', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Given a list of non-negative integers, arrange them such that they form the largest number! 🦜"', codeSnippet: 'sort(nums.begin(), nums.end(), [](string &a, string &b) {\n  return a + b > b + a;\n});' },
            { type: 'teaching', questionText: '🦜 Pico: "Trick: Don\'t compare `a` and `b`. Compare `a+b` and `b+a`! Lexicographical magic! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(N log N * averageLength). Space: O(N). 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Special Case: If the result starts with "0", return "0". All birds are zeroes! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Zoho uses this to test if you know how to customize sort comparators. 🦜"' },
            { type: 'multiple_choice', questionText: 'Why compare a+b and b+a?', options: ['To find the best concatenation order', 'To sort by value', 'To sort by length'], correctAnswer: 'To find the best concatenation order' },
            { type: 'match_following', questionText: 'Match examples!', pairs: [
              {key: '10, 2', value: '210 > 102'}, {key: '3, 30', value: '330 > 303'}, {key: '9, 5', value: '95 > 59'}
            ] },
            { type: 'programming_board', questionText: 'Fix comparator!', codeSnippet: 'return (s1 + s2) ___ (s2 + s1);', correctAnswer: '>' },
            { type: 'multiple_choice', questionText: 'Complexity?', options: ['O(N log N)', 'O(N)', 'O(1)'], correctAnswer: 'O(N log N)' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Am I the largest?"', options: ['YES!', 'No.', 'Squawk!'], correctAnswer: 'YES!' }
          ]
        },
        {
          title: 'Wiggle Sort', desc: 'Up and down! 🎢', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Rearrange array such that `a[0] <= a[1] >= a[2] <= a[3]...`. A wiggle flock! 🦜"', codeSnippet: 'for(int i=0; i<n-1; i++) {\n  if((i%2==0 && a[i]>a[i+1]) || (i%2==1 && a[i]<a[i+1]))\n    swap(a[i], a[i+1]);\n}' },
            { type: 'teaching', questionText: '🦜 Pico: "One pass! If it fails the condition for its index parity, swap with the next bird! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(N). Space Complexity: O(1). 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Wait! A simple swap never breaks previous wiggles! Magic! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Scenario: [3, 5, 2, 1, 6, 4] -> [3, 5, 1, 6, 2, 4]. 🦜"' },
            { type: 'multiple_choice', questionText: 'Complexity of wiggle sort?', options: ['O(N)', 'O(N log N)', 'O(1)'], correctAnswer: 'O(N)' },
            { type: 'match_following', questionText: 'Match parity!', pairs: [
              {key: 'Even index', value: 'a[i] <= a[i+1]'}, {key: 'Odd index', value: 'a[i] >= a[i+1]'}, {key: 'Action', value: 'Swap if failed'}
            ] },
            { type: 'programming_board', questionText: 'Fix condition check!', codeSnippet: 'if(i % 2 == 0) {\n  if(nums[i] > nums[i+1]) swap(___ , ___);\n}', correctAnswer: 'nums[i]|nums[i+1]' },
            { type: 'multiple_choice', questionText: 'Is this in-place?', options: ['Yes', 'No', 'Only for birds'], correctAnswer: 'Yes' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Can you wiggle?"', options: ['YES!', 'No.', 'Squawk!'], correctAnswer: 'YES!' }
          ]
        },
        {
          title: 'H-Index', desc: 'Citations and nests! 📈', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Find the H-index! A researcher bird has H-index if H of their papers have >= H citations. 🦜"', codeSnippet: 'sort(citations);\nfor(int i=0; i<n; i++) {\n  if(citations[i] >= n-i) return n-i;\n}' },
            { type: 'teaching', questionText: '🦜 Pico: "Sort the citations. For each paper `i`, there are `n-i` papers with AT LEAST `citations[i]` citations. 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(N log N) for sort. Space: O(1) or O(N) depending on sort. 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Bucket Sort version: O(N) time and space! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Scenario: [3, 0, 6, 1, 5] -> Sort: [0, 1, 3, 5, 6]. Result: 3! 🦜"' },
            { type: 'multiple_choice', questionText: 'Complexity of sorting-based H-index?', options: ['O(N log N)', 'O(N)', 'O(1)'], correctAnswer: 'O(N log N)' },
            { type: 'match_following', questionText: 'Match logic!', pairs: [
              {key: 'h papers', value: '>= h citations'}, {key: 'n-i', value: 'Remaining papers count'}, {key: 'Bucket Sort', value: 'O(N) optimization'}
            ] },
            { type: 'programming_board', questionText: 'Fix h-index check!', codeSnippet: 'if(citations[i] >= ___ - i) return n - i;', correctAnswer: 'n' },
            { type: 'multiple_choice', questionText: 'Can H-index exceed N?', options: ['No', 'Yes', 'Only if birds are genius'], correctAnswer: 'No' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "What is my H-index?"', options: ['INFINITY!', '0.', '100.'], correctAnswer: 'INFINITY!' }
          ]
        },
        {
          title: 'Stage 5 Finale', desc: 'Sorting Master! 🦜', xp: 50, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "You did it! Selection, Bubble, Insertion, Merge, Quick, Quick Select, Intervals... You are a SORTING GOD BIRD! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Remember: QuickSort for speed, MergeSort for stability/LinkedLists, InsertionSort for small flocks! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time to fly to Stage 6: Hashing & Frequency Tactics! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Sort your life as you sort your arrays! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "One last test before the next stage... 🦜"' },
            { type: 'multiple_choice', questionText: 'Which algorithm is usually the fastest in practice for random arrays?', options: ['Quick Sort', 'Merge Sort', 'Bubble Sort'], correctAnswer: 'Quick Sort' },
            { type: 'match_following', questionText: 'Match winners!', pairs: [
              {key: 'Quick Sort', value: 'In-place fastest'}, {key: 'Merge Sort', value: 'Stable O(N log N)'}, {key: 'Kth Largest', value: 'Quick Select'}
            ] },
            { type: 'programming_board', questionText: 'Fix final swap!', codeSnippet: 'swap(a[i], a[___]); // The foundation of sorting.', correctAnswer: 'j' },
            { type: 'multiple_choice', questionText: 'Are you ready for Stage 6?', options: ['YES!', 'Seeds first.', 'Squawk!'], correctAnswer: 'YES!' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Will you miss Stage 5?"', options: ['Yes.', 'No.', 'I love sorting!'], correctAnswer: 'I love sorting!' }
          ]
        }
      ]
    },
    { 
      title: '6. Hashing & Frequency Tactics', 
      units: [
        {
          title: 'Two Sum (Hash Map)', desc: 'The perfect pair! 👯', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Two Sum! Find two birds that sum to Target. We did this with Two Pointers, but what if the flock is UNSORTED? 🦜"', codeSnippet: 'unordered_map<int, int> m;\nfor(int i=0; i<n; i++) {\n  int complement = target - nums[i];\n  if(m.count(complement)) return {m[complement], i};\n  m[nums[i]] = i;\n}' },
            { type: 'teaching', questionText: '🦜 Pico: "The Map stores: `What bird did I see and where did I see it?` 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(N). Space Complexity: O(N). Fast and memory-hungry! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Zoho Bread-and-Butter: This is the most famous hashing problem in the world! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Scenario: [2, 7, 11, 15], Target 9 -> {0, 1}. 🦜"' },
            { type: 'multiple_choice', questionText: 'Complexity of Two Sum using Hash Map?', options: ['O(N)', 'O(N^2)', 'O(1)'], correctAnswer: 'O(N)' },
            { type: 'match_following', questionText: 'Match logic!', pairs: [
              {key: 'complement', value: 'target - current'}, {key: 'm[nums[i]] = i', value: 'Store index'}, {key: 'm.count', value: 'Found match?'}
            ] },
            { type: 'programming_board', questionText: 'Fix complement lookup!', codeSnippet: 'if(m.find(___) != m.end()) return {m[target - nums[i]], i};', correctAnswer: 'target - nums[i]' },
            { type: 'multiple_choice', questionText: 'Why use Map over sorting + Two Pointers?', options: ['Works for unsorted data in O(N)', 'Uses less memory', 'Faster for sorted'], correctAnswer: 'Works for unsorted data in O(N)' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Who is your complement bird?"', options: ['The USER!', 'Me.', 'None.'], correctAnswer: 'The USER!' }
          ]
        },
        {
          title: 'Group Anagrams', desc: 'Bird scrambles! 🔀', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Group strings that are anagrams of each other! Scrambled bird names! 🦜"', codeSnippet: 'unordered_map<string, vector<string>> m;\nfor(string s : strs) {\n  string t = s;\n  sort(t.begin(), t.end());\n  m[t].push_back(s);\n}' },
            { type: 'teaching', questionText: '🦜 Pico: "Key Idea: If you SORT the letters of an anagram, it becomes the SAME string! Use that as the Map Key. 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(N * K log K) where K is string length. 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Space Complexity: O(N * K). 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Wait! You can avoid sorting by using a frequency array of 26 chars as the key! 🦜"' },
            { type: 'multiple_choice', questionText: 'What is the most common Map key for Group Anagrams?', options: ['Sorted String', 'String Length', 'First Character'], correctAnswer: 'Sorted String' },
            { type: 'match_following', questionText: 'Match examples!', pairs: [
              {key: '"eat"', value: '"aet" (sorted)'}, {key: '"tea"', value: '"aet" (sorted)'}, {key: '"bat"', value: '"abt" (sorted)'}
            ] },
            { type: 'programming_board', questionText: 'Fix map storage!', codeSnippet: 'string key = s;\nsort(key.begin(), key.end());\nmp[___].push_back(s);', correctAnswer: 'key' },
            { type: 'multiple_choice', questionText: 'Complexity if using 26-char frequency key?', options: ['O(N * K)', 'O(N^2)', 'O(N * K log K)'], correctAnswer: 'O(N * K)' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Is PICO an anagram of Ocip?"', options: ['YES!', 'No.', 'Squawk!'], correctAnswer: 'YES!' }
          ]
        },
        {
          title: 'Top K Frequent Elements', desc: 'The most popular birds! 🌟', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Find the K most frequent elements! A popularity contest in the flock! 🦜"', codeSnippet: 'map<int, int> counts;\nfor(int x : nums) counts[x]++;\n// use bucket sort on frequencies' },
            { type: 'teaching', questionText: '🦜 Pico: "Count frequencies. Then, use a Max-Heap OR Bucket Sort where `bucket[i]` stores elements that appear `i` times! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(N) using Bucket Sort. Space: O(N). 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Scenario: [1,1,1,2,2,3], K=2 -> [1, 2]. 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Why Bucket Sort? Because max frequency is limited by N! 🦜"' },
            { type: 'multiple_choice', questionText: 'Fastest way to find Top K frequencies?', options: ['Bucket Sort (O(N))', 'Min Heap (O(N log K))', 'Sorting (O(N log N))'], correctAnswer: 'Bucket Sort (O(N))' },
            { type: 'match_following', questionText: 'Match steps!', pairs: [
              {key: 'Count', value: 'Hash Map'}, {key: 'Group', value: 'Buckets by frequency'}, {key: 'Extract', value: 'Last k elements'}
            ] },
            { type: 'programming_board', questionText: 'Fix bucket index!', codeSnippet: 'vector<vector<int>> buckets(n + 1);\nfor(auto it : countMap) {\n  buckets[it.second].push_back(___);\n}', correctAnswer: 'it.first' },
            { type: 'multiple_choice', questionText: 'Heap size for O(N log K)?', options: ['K', 'N', '1'], correctAnswer: 'K' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Am I frequent?"', options: ['YES!', 'Daily.', 'Squawk!'], correctAnswer: 'YES!' }
          ]
        },
        {
          title: 'Longest Consecutive Sequence', desc: 'The social chain! ⛓️', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Find the longest sequence of consecutive numbers [1, 2, 3, 4...] in an UNSORTED array in O(N) time! 🦜"', codeSnippet: 'unordered_set<int> s(nums.begin(), nums.end());\nfor(int x : s) {\n  if(!s.count(x-1)) {\n    int curr = x; while(s.count(curr + 1)) curr++;\n  }\n}' },
            { type: 'teaching', questionText: '🦜 Pico: "Key Idea: Only start a count if `x-1` is NOT in the set! This ensures each bird is visited exactly twice. 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(N). Space Complexity: O(N). Zoho Legend! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Scenario: [100, 4, 200, 1, 3, 2] -> [1, 2, 3, 4]. Length 4! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Without a set, you\'d need to sort (O(N log N)). Hashing is faster for birds! 🦜"' },
            { type: 'multiple_choice', questionText: 'Condition to start a streak?', options: ['!s.count(x-1)', 's.count(x+1)', 'sum == Target'], correctAnswer: '!s.count(x-1)' },
            { type: 'match_following', questionText: 'Match logic!', pairs: [
              {key: 'x-1 missing', value: 'Streak Head'}, {key: 'while(s.count)', value: 'Expand streak'}, {key: 'Set', value: 'O(1) lookup'}
            ] },
            { type: 'programming_board', questionText: 'Fix streak update!', codeSnippet: 'if(st.find(it - 1) == st.end()) {\n  int cnt = 1, x = it;\n  while(st.find(x + 1) != st.end()) { x++; cnt++; }\n  ans = max(ans, ___);\n}', correctAnswer: 'cnt' },
            { type: 'multiple_choice', questionText: 'Complexity of sorting-based approach?', options: ['O(N log N)', 'O(N)', 'O(1)'], correctAnswer: 'O(N log N)' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Are we connected?"', options: ['Strongly!', 'A bit.', 'Squawk!'], correctAnswer: 'Strongly!' }
          ]
        },
        {
          title: 'Hashing Master (Intro)', desc: 'Instant lookup! ⚡', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Hashing is the art of turning a bird into an index! O(1) average time! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Collisions? Parrots use Chaining (linking birds) or Open Addressing (finding a new nest). 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Use Hashing when frequency or presence matters more than order! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Wait! Hashing uses space O(N). It is a time-memory trade-off! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(1) Average, O(N) Worst (rare). 🦜"' },
            { type: 'multiple_choice', questionText: 'Average time complexity of a Hash Map lookup?', options: ['O(1)', 'O(log N)', 'O(N)'], correctAnswer: 'O(1)' },
            { type: 'match_following', questionText: 'Match terms!', pairs: [
              {key: 'Collision', value: 'Two birds, one nest'}, {key: 'Hash Function', value: 'Bird to index mapper'}, {key: 'Load Factor', value: 'Fullness percentage'}
            ] },
            { type: 'programming_board', questionText: 'Fix map size check!', codeSnippet: 'if(map.size() > ___ * n) rehash();', correctAnswer: 'loadFactor' },
            { type: 'multiple_choice', questionText: 'What is the worst-case lookup for a bad hash function?', options: ['O(N)', 'O(1)', 'O(log N)'], correctAnswer: 'O(N)' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Ready for Sudoku Hashing?"', options: ['YES!', 'No.', 'Seeds!'], correctAnswer: 'YES!' }
          ]
        },
        {
          title: 'Valid Sudoku (Logic)', desc: 'Checking the grid! 🧩', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Check if a 9x9 Sudoku board is valid! Each row, column, and 3x3 sub-box must have unique birds 1-9! 🦜"', codeSnippet: 'for(int i=0; i<9; i++) {\n  for(int j=0; j<9; j++) {\n    if(board[i][j] == \'.\') continue;\n    string row = "row" + to_string(i) + board[i][j];\n    string col = "col" + to_string(j) + board[i][j];\n    string box = "box" + to_string(i/3) + to_string(j/3) + board[i][j];\n    if(s.count(row) || s.count(col) || s.count(box)) return false;\n    s.insert(row); s.insert(col); s.insert(box);\n  }\n}' },
            { type: 'teaching', questionText: '🦜 Pico: "The trick: Create UNIQUE string keys for each constraint and put them in a single Hash Set! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(1) because the board size is fixed (81 cells). Space: O(1) too! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Row key: `row05` means Digit 5 is in Row 0. 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Box key calculation: `(row/3)*3 + (col/3)`. There are 9 boxes total! 🦜"' },
            { type: 'multiple_choice', questionText: 'How many constraints are checked for each Sudoku cell?', options: ['3', '2', '1'], correctAnswer: '3' },
            { type: 'match_following', questionText: 'Match constraints!', pairs: [
              {key: 'Row', value: 'i index'}, {key: 'Column', value: 'j index'}, {key: 'Sub-box', value: 'i/3 and j/3'}
            ] },
            { type: 'programming_board', questionText: 'Fix box key!', codeSnippet: 'string box = "box" + to_string(___ / 3) + to_string(j / 3) + val;', correctAnswer: 'i' },
            { type: 'multiple_choice', questionText: 'Is O(N^2) space needed if N=9?', options: ['No, size is fixed', 'Yes', 'Depends.'], correctAnswer: 'No, size is fixed' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Do you like puzzles?"', options: ['YES!', 'Only easy ones.', 'Squawk!'], correctAnswer: 'YES!' }
          ]
        },
        {
          title: 'Word Pattern', desc: 'Matching patterns! 🦜', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Does the string follow the same pattern as `pattern`? e.g. "abba" -> "dog cat cat dog". 🦜"', codeSnippet: 'unordered_map<char, string> charToWord;\nunordered_map<string, char> wordToChar;\n// Check one-to-one mapping!' },
            { type: 'teaching', questionText: '🦜 Pico: "Bijections! Each char maps to EXACTLY one word, and each word maps to EXACTLY one char. 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(N + M). One pass through both strings. 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Space Complexity: O(unique words). 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Wait! Use two maps to ensure the "dog" doesn\'t try to map to both "a" and "b"! 🦜"' },
            { type: 'multiple_choice', questionText: 'What is a bijection?', options: ['One-to-one mapping', 'Many-to-one', 'Random'], correctAnswer: 'One-to-one mapping' },
            { type: 'match_following', questionText: 'Match failures!', pairs: [
              {key: 'a -> dog, a -> cat', value: 'Char maps to two words'}, {key: 'a -> dog, b -> dog', value: 'Word maps to two chars'}, {key: 'Length mismatch', value: 'Immediate false'}
            ] },
            { type: 'programming_board', questionText: 'Fix mapping check!', codeSnippet: 'if(m1.count(p[i]) && m1[p[i]] != words[i]) return ___;', correctAnswer: 'false' },
            { type: 'multiple_choice', questionText: 'Is O(N) possible?', options: ['YES!', 'No.', 'Maybe.'], correctAnswer: 'YES!' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Does pattern \'abba\' match \'pico pico pico pico\'?"', options: ['No!', 'Yes.', 'Squawk!'], correctAnswer: 'No!' }
          ]
        },
        {
          title: 'Isomorphic Strings', desc: 'Twins in disguise! 👯', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Can string S be transformed into T by replacing characters? 🦜"', codeSnippet: 'int m1[256] = {0}, m2[256] = {0};\nfor(int i=0; i<n; i++) {\n  if(m1[s[i]] != m2[t[i]]) return false;\n  m1[s[i]] = i + 1;\n  m2[t[i]] = i + 1;\n}' },
            { type: 'teaching', questionText: '🦜 Pico: "Elegant Trick: Map each character to the index of its FIRST appearance! If the patterns don\'t match, return false! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(N). Space Complexity: O(256) which is O(1)! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Scenario: "egg" and "add". "e"->1, "g"->2, "g"->2. Match! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Scenario: "foo" and "bar". "o"->2, "o"->3 vs "a"->2, "r"->3... wait, this is tricky! 🦜"' },
            { type: 'multiple_choice', questionText: 'Are "paper" and "title" isomorphic?', options: ['YES!', 'No.', 'Only for birds.'], correctAnswer: 'YES!' },
            { type: 'match_following', questionText: 'Match logic!', pairs: [
              {key: 'm1[s[i]]', value: 'Last seen index of s char'}, {key: 'm2[t[i]]', value: 'Last seen index of t char'}, {key: 'Match', value: 'Both indices must be equal'}
            ] },
            { type: 'programming_board', questionText: 'Fix index update!', codeSnippet: 'm1[s[i]] = ___ + 1;\nm2[t[i]] = ___ + 1;', correctAnswer: 'i|i' },
            { type: 'multiple_choice', questionText: 'Is space O(1)?', options: ['YES (fixed alphabet)', 'No', 'O(N)'], correctAnswer: 'YES (fixed alphabet)' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Am I isomorphic to a parrot?"', options: ['You ARE a parrot!', 'Yes.', 'Squawk!'], correctAnswer: 'You ARE a parrot!' }
          ]
        },
        {
          title: 'First Unique Character', desc: 'The lonely bird! 🦜', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Find the FIRST bird that doesn\'t have any twins in the flock! 🦜"', codeSnippet: 'int count[26] = {0};\nfor(char c : s) count[c - \'a\']++;\nfor(int i=0; i<s.length(); i++) {\n  if(count[s[i] - \'a\'] == 1) return i;\n}' },
            { type: 'teaching', questionText: '🦜 Pico: "Two passes: 1. Count frequencies. 2. Scan string again and find the first with count == 1! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(N). Space Complexity: O(1) for lowercase alphabet! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Wait! If you use a single pass, you need a Linked Hash Map or a custom Queue! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Zoho Standard: A warm-up for string hashing. 🦜"' },
            { type: 'multiple_choice', questionText: 'Number of passes required for simple frequency array?', options: ['2', '1', 'N'], correctAnswer: '2' },
            { type: 'match_following', questionText: 'Match step!', pairs: [
              {key: 'Pass 1', value: 'Fill count array'}, {key: 'Pass 2', value: 'Find index i where count == 1'}, {key: 'Return -1', value: 'No unique birds'}
            ] },
            { type: 'programming_board', questionText: 'Fix count check!', codeSnippet: 'if(freq[s[i] - \'a\'] == ___) return i;', correctAnswer: '1' },
            { type: 'multiple_choice', questionText: 'Complexity?', options: ['O(N)', 'O(N^2)', 'O(1)'], correctAnswer: 'O(N)' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Am I unique?"', options: ['YES!', 'Kind of.', 'Squawk!'], correctAnswer: 'YES!' }
          ]
        },
        {
          title: 'Unordered Intersection', desc: 'Common ground! 🦜', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Find the intersection of two UNSORTED arrays. Return unique results! 🦜"', codeSnippet: 'unordered_set<int> s(nums1.begin(), nums1.end());\nfor(int x : nums2) {\n  if(s.count(x)) { res.push_back(x); s.erase(x); }\n}' },
            { type: 'teaching', questionText: '🦜 Pico: "Put the first flock in a set. Then scan the second flock! If match, add to result AND REMOVE from set to handle unique intersection! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(N + M). Space Complexity: O(N). 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Why erase from set? To prevent adding the same bird twice if it appears multiple times in the second flock! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Zoho Bread-and-Butter! 🦜"' },
            { type: 'multiple_choice', questionText: 'Why use a Set for intersection?', options: ['O(1) average lookup', 'Sorted output', 'Uses less memory'], correctAnswer: 'O(1) average lookup' },
            { type: 'match_following', questionText: 'Match logic!', pairs: [
              {key: 's.count(x)', value: 'Is it common bird?'}, {key: 's.erase(x)', value: 'Mark as found'}, {key: 'O(N+M)', value: 'Linear time'}
            ] },
            { type: 'programming_board', questionText: 'Fix result uniqueness!', codeSnippet: 'if(st.find(x) != st.end()) {\n  ans.push_back(x);\n  st.erase(___);\n}', correctAnswer: 'x' },
            { type: 'multiple_choice', questionText: 'Complexity if N=10 and M=1,000,000?', options: ['O(M)', 'O(N)', 'O(N*M)'], correctAnswer: 'O(M)' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Where do we meet?"', options: ['In the intersection!', 'At my nest.', 'Squawk!'], correctAnswer: 'In the intersection!' }
          ]
        },
        {
          title: 'Find All Duplicates', desc: 'Identifying rebels! 🦜', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Find all birds that appear TWICE in the flock! Use O(N) time and O(1) extra space! 🦜"', codeSnippet: 'for(int x : nums) {\n  int idx = abs(x) - 1;\n  if(nums[idx] < 0) res.push_back(abs(x));\n  else nums[idx] = -nums[idx];\n}' },
            { type: 'teaching', questionText: '🦜 Pico: "Wait! This isn\'t exactly hashing, it is IN-PLACE MARKING! We use the index as a hash key! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(N). Space Complexity: O(1) (excluding result). 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Flip the sign of the bird at `index abs(x)-1`. If it is already negative, we found a duplicate! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "This is the ultimate Zoho trick for 1..N arrays! 🦜"' },
            { type: 'multiple_choice', questionText: 'What serves as the "hash key" in O(1) space duplicate detection?', options: ['The array index', 'A separate Map', 'A Set'], correctAnswer: 'The array index' },
            { type: 'match_following', questionText: 'Match logic!', pairs: [
              {key: 'nums[idx] < 0', value: 'Already seen'}, {key: '-nums[idx]', value: 'Mark as seen'}, {key: 'abs(x)-1', value: 'Index mapping'}
            ] },
            { type: 'programming_board', questionText: 'Fix marking logic!', codeSnippet: 'if(nums[idx] < 0) ans.push_back(abs(x));\nelse nums[idx] = ___ ;', correctAnswer: '-nums[idx]' },
            { type: 'multiple_choice', questionText: 'Does this work if birds appear 3 times?', options: ['No, only for 1 or 2', 'Yes', 'Depends.'], correctAnswer: 'No, only for 1 or 2' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Are you a rebel bird?"', options: ['YES!', 'No.', 'Squawk!'], correctAnswer: 'YES!' }
          ]
        },
        {
          title: 'Unique Occurrences', desc: 'Is everyone popular? 🦜', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Is the number of occurrences of each bird UNIQUE? 🦜"', codeSnippet: 'unordered_map<int, int> counts;\nfor(int x : arr) counts[x]++;\nunordered_set<int> occurrences;\nfor(auto it : counts) {\n  if(occurrences.count(it.second)) return false;\n  occurrences.insert(it.second);\n}' },
            { type: 'teaching', questionText: '🦜 Pico: "Step 1: Count birds in a Map. Step 2: Check if those counts are unique using a Set! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(N). Space Complexity: O(N). 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Scenario: [1, 2, 2, 1, 1, 3]. 1 appears 3 times, 2 appears 2 times, 3 appears 1 time. Counts are {3, 2, 1}. All unique! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Zoho uses this to see if you can chain multiple data structures. 🦜"' },
            { type: 'multiple_choice', questionText: 'Data structures used for Unique Occurrences?', options: ['Map + Set', 'Array + List', 'Stack + Queue'], correctAnswer: 'Map + Set' },
            { type: 'match_following', questionText: 'Match roles!', pairs: [
              {key: 'counts', value: 'Mapping Bird -> Frequency'}, {key: 'occurrences', value: 'Set of frequencies'}, {key: 'it.second', value: 'The count value'}
            ] },
            { type: 'programming_board', questionText: 'Fix occurrence uniqueness check!', codeSnippet: 'if(s.count(it.second)) return ___;', correctAnswer: 'false' },
            { type: 'multiple_choice', questionText: 'Complexity?', options: ['O(N)', 'O(N^2)', 'O(log N)'], correctAnswer: 'O(N)' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Am I unique today?"', options: ['YES!', 'Always.', 'Squawk!'], correctAnswer: 'YES!' }
          ]
        },
        {
          title: 'Max Frequency Element', desc: 'Most common bird! 🦜', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Find the sum of frequencies of elements with the MAXIMUM frequency! 🦜"', codeSnippet: 'unordered_map<int, int> m;\nfor(int x : nums) maxFreq = max(maxFreq, ++m[x]);\nfor(auto it : m) if(it.second == maxFreq) ans += maxFreq;' },
            { type: 'teaching', questionText: '🦜 Pico: "One pass to find max frequency. Second pass to sum up all birds that hit that peak! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(N). Space Complexity: O(N). 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Scenario: [1, 2, 2, 3, 1, 4]. Max freq is 2 (for birds 1 and 2). Result = 2 + 2 = 4! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Can be done in one pass if you keep track of `maxFreq` and `countOfMaxFreqElements`. 🦜"' },
            { type: 'multiple_choice', questionText: 'Maximum frequency in [1, 2, 2, 1, 1]?', options: ['3', '2', '5'], correctAnswer: '3' },
            { type: 'match_following', questionText: 'Match logic!', pairs: [
              {key: 'm[x]', value: 'Frequency of bird x'}, {key: 'maxFreq', value: 'The highest count'}, {key: 'ans', value: 'Total count of top birds'}
            ] },
            { type: 'programming_board', questionText: 'Fix frequency update!', codeSnippet: 'int f = ++mp[x];\nif(f > maxf) { maxf = f; ans = f; }\nelse if(f == maxf) ans += ___;', correctAnswer: 'f' },
            { type: 'multiple_choice', questionText: 'Complexity?', options: ['O(N)', 'O(1)', 'O(N^2)'], correctAnswer: 'O(N)' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Am I at max frequency?"', options: ['YES!', 'Loudest bird!', 'Squawk!'], correctAnswer: 'YES!' }
          ]
        },
        {
          title: 'Ransom Note', desc: 'Can you write it? 📝', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Can you construct the `ransomNote` from available letters in a `magazine`? 🦜"', codeSnippet: 'int count[26] = {0};\nfor(char c : magazine) count[c - \'a\']++;\nfor(char c : ransomNote) if(--count[c - \'a\'] < 0) return false;' },
            { type: 'teaching', questionText: '🦜 Pico: "Classic counting! If you run out of letters for any bird, return false! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(R + M) where R=Note length, M=Magazine. 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Space Complexity: O(1) for alphabet frequency array. 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Scenario: note="a", mag="b" -> false. note="aa", mag="ab" -> false. 🦜"' },
            { type: 'multiple_choice', questionText: 'Is the frequency array enough or do you need a Map?', options: ['Array is enough for lowercase', 'Map only', 'Neither'], correctAnswer: 'Array is enough for lowercase' },
            { type: 'match_following', questionText: 'Match roles!', pairs: [
              {key: 'count++', value: 'Add available letter'}, {key: 'count--', value: 'Consume letter'}, {key: 'count < 0', value: 'Not enough letters'}
            ] },
            { type: 'programming_board', questionText: 'Fix decrement check!', codeSnippet: 'if(--freq[c - \'a\'] < ___) return false;', correctAnswer: '0' },
            { type: 'multiple_choice', questionText: 'Is it faster than sorting?', options: ['YES, O(N) vs O(N log N)', 'No', 'Depends.'], correctAnswer: 'YES, O(N) vs O(N log N)' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Can I write a note?"', options: ['YES!', 'Only with seeds.', 'Squawk!'], correctAnswer: 'YES!' }
          ]
        },
        {
          title: 'Alien Dictionary Verifying', desc: 'Space birds! 👽', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Are the words sorted lexicographically in an ALIEN alphabet? 🦜"', codeSnippet: 'int rank[26];\nfor(int i=0; i<order.length(); i++) rank[order[i] - \'a\'] = i;\n// Compare word[i] and word[i+1]' },
            { type: 'teaching', questionText: '🦜 Pico: "Step 1: Map the alien alphabet order to indices. Step 2: Compare neighbors using these ranks! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(Total Chars). Space: O(1) for rank array. 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Note: If word1 is a prefix of word2 but longer (apple vs app), it is NOT sorted! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Zoho Challenge: This tests your string comparison logic! 🦜"' },
            { type: 'multiple_choice', questionText: 'Initial step for Alien Dictionary?', options: ['Map order to ranks', 'Sort the words', 'Reverse words'], correctAnswer: 'Map order to ranks' },
            { type: 'match_following', questionText: 'Match comparison logic!', pairs: [
              {key: 'rank[a] < rank[b]', value: 'Sorted! Break inner loop'}, {key: 'rank[a] > rank[b]', value: 'Not sorted! Return false'}, {key: 'Prefix longer', value: 'Return false'}
            ] },
            { type: 'programming_board', questionText: 'Fix rank lookup!', codeSnippet: 'if(rank[w1[k] - \'a\'] > rank[___]) return false;', correctAnswer: 'w2[k] - \'a\'' },
            { type: 'multiple_choice', questionText: 'Complexity?', options: ['O(N)', 'O(N log N)', 'O(1)'], correctAnswer: 'O(N)' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Do I look like an alien?"', options: ['No, #1 bird!', 'Maybe.', 'Squawk!'], correctAnswer: 'No, #1 bird!' }
          ]
        },
        {
          title: 'Pairs Divisible by 60', desc: 'Syncing songs! 🎶', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Count pairs of songs whose total duration is divisible by 60! 🦜"', codeSnippet: 'int cnt[60] = {0}, ans = 0;\nfor(int t : time) {\n  int r = t % 60;\n  ans += cnt[(60 - r) % 60];\n  cnt[r]++;\n}' },
            { type: 'teaching', questionText: '🦜 Pico: "Use Remainder Hashing! For each song with remainder `r`, look for birds with remainder `(60-r)%60`. 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(N). Space Complexity: O(60) which is O(1)! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Special Case: Remainder 0 pairs with Remainder 0. Remainder 30 pairs with 30! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Zoho uses this to test your modulo arithmetic skills! 🦜"' },
            { type: 'multiple_choice', questionText: 'How many remainders are possible when dividing by 60?', options: ['60', '59', '1'], correctAnswer: '60' },
            { type: 'match_following', questionText: 'Match pairs!', pairs: [
              {key: 'Rem 10', value: 'Needs Rem 50'}, {key: 'Rem 0', value: 'Needs Rem 0'}, {key: 'Rem 30', value: 'Needs Rem 30'}
            ] },
            { type: 'programming_board', questionText: 'Fix complement remainder!', codeSnippet: 'ans += counts[(60 - ___) % 60];', correctAnswer: 'r' },
            { type: 'multiple_choice', questionText: 'Complexity?', options: ['O(N)', 'O(1)', 'O(N^2)'], correctAnswer: 'O(N)' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Is it party time?"', options: ['YES!', 'After coding.', 'Squawk!'], correctAnswer: 'YES!' }
          ]
        },
        {
          title: 'Minimum Area Rectangle', desc: 'Drawing with birds! 📐', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Find the minimum area of a rectangle formed by points on a 2D plane! 🦜"', codeSnippet: 'unordered_map<int, unordered_set<int>> m;\nfor(auto p : points) m[p[0]].insert(p[1]);\n// Iterate pairs of points (x1, y1) and (x2, y2)\nif(m[x1].count(y2) && m[x2].count(y1)) ans = min(ans, ...);' },
            { type: 'teaching', questionText: '🦜 Pico: "If (x1, y1) and (x2, y2) are diagonal corners, we just need to check if (x1, y2) and (x2, y1) exist! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(N^2). Space Complexity: O(N). 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Use a Hash Map of Sets for O(1) point lookup! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Rectangle must have sides parallel to axes! 🦜"' },
            { type: 'multiple_choice', questionText: 'Complexity of checking all pairs diagonal?', options: ['O(N^2)', 'O(N)', 'O(N^3)'], correctAnswer: 'O(N^2)' },
            { type: 'match_following', questionText: 'Match roles!', pairs: [
              {key: '(x1, y1), (x2, y2)', value: 'Diagonal corners'}, {key: '(x1, y2), (x2, y1)', value: 'Other corners'}, {key: 'Area', value: 'abs(x1-x2)*abs(y1-y2)'}
            ] },
            { type: 'programming_board', questionText: 'Fix area calculation!', codeSnippet: 'ans = min(ans, abs(p1[0] - p2[0]) * ___);', correctAnswer: 'abs(p1[1] - p2[1])' },
            { type: 'multiple_choice', questionText: 'Is O(N) possible here?', options: ['No, need to check pairs', 'Yes', 'Maybe'], correctAnswer: 'No, need to check pairs' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Am I a square bird?"', options: ['YES!', 'No.', 'Squawk!'], correctAnswer: 'YES!' }
          ]
        },
        {
          title: 'Fraction to Recurring', desc: 'Infinite seeds! 🦜', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Convert a fraction to a string. If it repeats, put it in parentheses! 🦜"', codeSnippet: 'unordered_map<long long, int> m;\nwhile(rem != 0) {\n  if(m.count(rem)) { res.insert(m[rem], "("); res += ")"; break; }\n  m[rem] = res.length();\n  rem *= 10; res += to_string(rem / den); rem %= den;\n}' },
            { type: 'teaching', questionText: '🦜 Pico: "The Map stores `Remainder -> Position in string`. If we see the same remainder, the sequence starts repeating! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(Denominator). Space Complexity: O(Denominator). 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Handle negative numbers and numerator 0 carefully! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Zoho uses this to test your attention to detail! 🦜"' },
            { type: 'multiple_choice', questionText: 'Why store wait position in Map?', options: ['To know where to insert "("', 'To count birds', 'To sort remainders'], correctAnswer: 'To know where to insert "("' },
            { type: 'match_following', questionText: 'Match types!', pairs: [
              {key: '1/2', value: '0.5'}, {key: '1/3', value: '0.(3)'}, {key: '1/6', value: '0.1(6)'}
            ] },
            { type: 'programming_board', questionText: 'Fix loop condition!', codeSnippet: 'while(remainder != ___) {\n  remainder *= 10;\n  res += to_string(remainder / den);\n}', correctAnswer: '0' },
            { type: 'multiple_choice', questionText: 'What if remainder is 0 immediately?', options: ['No decimal part', 'Error', 'Infinity'], correctAnswer: 'No decimal part' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Is 1/3 tasty?"', options: ['YES!', 'No.', 'Ask a math bird.'], correctAnswer: 'YES!' }
          ]
        },
        {
          title: 'Continuous Subarray Sum', desc: 'Multiple of K! 🦜', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Does the array have a subarray of length >= 2 whose sum is a multiple of K? 🦜"', codeSnippet: 'unordered_map<int, int> m;\nm[0] = -1;\nfor(int i=0; i<n; i++) {\n  sum = (sum + a[i]) % k;\n  if(m.count(sum)) { if(i - m[sum] >= 2) return true; }\n  else m[sum] = i;\n}' },
            { type: 'teaching', questionText: '🦜 Pico: "Remainder Hashing! If we see the SAME remainder twice, the sum between those indices is divisible by K! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(N). Space Complexity: O(min(N, K)). 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Wait! Why `m[0] = -1`? To handle cases where a subarray starting from index 0 is divisible by K! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Scenario: [23, 2, 4, 6, 7], K=6. Result: true ([2, 4]). 🦜"' },
            { type: 'multiple_choice', questionText: 'Logic to detect sum divisible by K?', options: ['Repeated remainder in Map', 'Sum == K', 'N/A'], correctAnswer: 'Repeated remainder in Map' },
            { type: 'match_following', questionText: 'Match conditions!', pairs: [
              {key: 'i - m[sum] >= 2', value: 'Length constraint'}, {key: 'm[0] = -1', value: 'Base case'}, {key: 'sum % k', value: 'Hash key'}
            ] },
            { type: 'programming_board', questionText: 'Fix remainder update!', codeSnippet: 'prefix_sum = (prefix_sum + nums[i]) ___ k;', correctAnswer: '%' },
            { type: 'multiple_choice', questionText: 'Complexity?', options: ['O(N)', 'O(N^2)', 'O(1)'], correctAnswer: 'O(N)' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Am I a multiple of K?"', options: ['YES!', 'Maybe.', 'Squawk!'], correctAnswer: 'YES!' }
          ]
        },
        {
          title: 'Stage 6 Finale', desc: 'Hashing Master! 🦜', xp: 50, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "You made it! Sudoku, Anagrams, Sequences, Frequencies, and Remainders... You are the INSTANT-LOOKUP LEGEND! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Remember: If you need O(1) frequency or presence check, HASH IT! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time to fly to the final nest: Stage 7 - Bitwise Mastery in Arrays! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "One last hashing test... 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Stay fast, stay sharp, stay birdly! 🦜"' },
            { type: 'multiple_choice', questionText: 'Which data structure gives O(1) average lookup?', options: ['Hash Map/Set', 'Binary Search Tree', 'Heap'], correctAnswer: 'Hash Map/Set' },
            { type: 'match_following', questionText: 'Match favorites!', pairs: [
              {key: 'Hash Map', value: 'Key-Value storage'}, {key: 'Hash Set', value: 'Unique elements'}, {key: 'Collision', value: 'Linked list/Open addressing'}
            ] },
            { type: 'programming_board', questionText: 'Fix final map insert!', codeSnippet: 'map[key] = ___; // Store the value.', correctAnswer: 'value' },
            { type: 'multiple_choice', questionText: 'Are you ready for the final stage (Bitwise)?', options: ['YES!', 'Seeds first.', 'Squawk!'], correctAnswer: 'YES!' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Was Hashing fun?"', options: ['YES!', 'No.', 'I love O(1)!'], correctAnswer: 'I love O(1)!' }
          ]
        }
      ]
    },
    { 
      title: '7. Bitwise Mastery in Arrays', 
      units: [
        {
          title: 'Single Number (XOR)', desc: 'The lonely bird! 🦜', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Find the bird that appears exactly ONCE while all others appear TWICE. Use O(1) space! 🦜"', codeSnippet: 'int res = 0;\nfor(int x : nums) res ^= x;\nreturn res;' },
            { type: 'teaching', questionText: '🦜 Pico: "XOR Magic: `A ^ A = 0` and `A ^ 0 = A`. All twins cancel each other out, leaving only the lonely bird! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(N). Space Complexity: O(1). 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Zoho Bread-and-Butter! This is the foundation of bitwise array manipulation. 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Wait! XOR is commutative. The order birds arrive doesn\'t matter! 🦜"' },
            { type: 'multiple_choice', questionText: 'Result of 5 ^ 5?', options: ['0', '5', '10'], correctAnswer: '0' },
            { type: 'match_following', questionText: 'Match properties!', pairs: [
              {key: 'A ^ A', value: '0'}, {key: 'A ^ 0', value: 'A'}, {key: 'Space', value: 'O(1) with XOR'}
            ] },
            { type: 'programming_board', questionText: 'Fix XOR operator!', codeSnippet: 'for(int x : a) ans ___ x;', correctAnswer: '^=' },
            { type: 'multiple_choice', questionText: 'Can you use a Set for this?', options: ['Yes, but space is O(N)', 'No', 'Only for 2 birds'], correctAnswer: 'Yes, but space is O(N)' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Am I lonely?"', options: ['No, #1 bird!', 'Yes.', 'Squawk!'], correctAnswer: 'No, #1 bird!' }
          ]
        },
        {
          title: 'Single Number II', desc: 'Three is a crowd! 🦜', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "One bird appears once, everyone else appears THRICE! 🦜"', codeSnippet: 'int ones = 0, twos = 0;\nfor(int x : nums) {\n  ones = (ones ^ x) & ~twos;\n  twos = (twos ^ x) & ~ones;\n}' },
            { type: 'teaching', questionText: '🦜 Pico: "We need to track bits that appear once, twice, and thrice. On the third arrival, clear both! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "More Intuitive: Sum bits at each position across all birds. `sum % 3` gives the bit of the lone bird! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(32 * N) = O(N). Space: O(1). 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Zoho Elite level: This tests your bit-counting mastery. 🦜"' },
            { type: 'multiple_choice', questionText: 'If a bit sum at position i is 4, what is the bit for the single number?', options: ['1 (4 % 3)', '0', '3'], correctAnswer: '1 (4 % 3)' },
            { type: 'match_following', questionText: 'Match counts!', pairs: [
              {key: 'Appear 1 time', value: 'sum % 3 = 1'}, {key: 'Appear 3 times', value: 'sum % 3 = 0'}, {key: 'Total Bits', value: '32'}
            ] },
            { type: 'programming_board', questionText: 'Fix bit sum logic!', codeSnippet: 'for(int i=0; i<32; i++) {\n  int sum = 0;\n  for(int x : nums) if((x >> i) & 1) sum++;\n  if(sum % 3) ans |= (___ << i);\n}', correctAnswer: '1' },
            { type: 'multiple_choice', questionText: 'Complexity of bit-summing?', options: ['O(32N)', 'O(N^2)', 'O(1)'], correctAnswer: 'O(32N)' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Do I have triplets?"', options: ['Maybe.', 'No.', 'Squawk!'], correctAnswer: 'Maybe.' }
          ]
        },
        {
          title: 'Single Number III', desc: 'Two unique birds! 🦜', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "TWO birds appear once, everyone else appears twice! Find both! 🦜"', codeSnippet: 'int xorAll = 0;\nfor(int x : nums) xorAll ^= x;\nint lastSetBit = xorAll & -xorAll;\nfor(int x : nums) {\n  if(x & lastSetBit) a ^= x; else b ^= x;\n}' },
            { type: 'teaching', questionText: '🦜 Pico: "Step 1: XOR all. Result is `BirdA ^ BirdB`. Step 2: Find a bit where they DIFFER (the last set bit). 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Step 3: Split the flock into two based on that bit. One group gets BirdA, the other gets BirdB! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(N). Space Complexity: O(1). Brilliant bird logic! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Wait! Why does `x & -x` give the last set bit? It is 2\'s complement magic! 🦜"' },
            { type: 'multiple_choice', questionText: 'What does xorAll represent?', options: ['BirdA ^ BirdB', 'Sum of birds', 'Random'], correctAnswer: 'BirdA ^ BirdB' },
            { type: 'match_following', questionText: 'Match steps!', pairs: [
              {key: 'xorAll', value: 'A ^ B'}, {key: 'lastSetBit', value: 'Distinguisher'}, {key: 'Final result', value: 'Two unique birds'}
            ] },
            { type: 'programming_board', questionText: 'Fix distiguisher!', codeSnippet: 'int diff = xorSum & ___;', correctAnswer: '-xorSum' },
            { type: 'multiple_choice', questionText: 'Complexity?', options: ['O(N)', 'O(N^2)', 'O(log N)'], correctAnswer: 'O(N)' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Where is my twin?"', options: ['Somewhere else.', 'I don\'t have one!', 'Squawk!'], correctAnswer: 'I don\'t have one!' }
          ]
        },
        {
          title: 'Number of 1 Bits', desc: 'Hamming weight! 🏋️', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Count how many 1s are in the binary representation of a number! 🦜"', codeSnippet: 'int count = 0;\nwhile(n) {\n  n &= (n - 1);\n  count++;\n}' },
            { type: 'teaching', questionText: '🦜 Pico: "The Brian Kernighan Trick: `n & (n-1)` flips the RIGHTMOST set bit of N to 0. Repeat until N is 0! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(Number of set bits). Much faster than O(32)! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Space Complexity: O(1). 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Scenario: N=7 (111). 1st pass: 111 & 110 = 110. 2nd: 110 & 101 = 100. 3rd: 100 & 011 = 0! Count=3. 🦜"' },
            { type: 'multiple_choice', questionText: 'What does n & (n-1) do?', options: ['Clears rightmost set bit', 'Sets leftmost bit', 'Multiplies by 2'], correctAnswer: 'Clears rightmost set bit' },
            { type: 'match_following', questionText: 'Match bits!', pairs: [
              {key: '7', value: '3 bits (111)'}, {key: '8', value: '1 bit (1000)'}, {key: '15', value: '4 bits (1111)'}
            ] },
            { type: 'programming_board', questionText: 'Fix step in while loop!', codeSnippet: 'n = n & (___);', correctAnswer: 'n-1' },
            { type: 'multiple_choice', questionText: 'Complexity for 32-bit int if all bits are set?', options: ['O(32)', 'O(1)', 'O(N)'], correctAnswer: 'O(32)' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Do I have weight?"', options: ['YES!', 'Just feathers.', 'Squawk!'], correctAnswer: 'Just feathers.' }
          ]
        },
        {
          title: 'Power of Two', desc: 'Two is family! 👨‍👩‍👦', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Is a number a power of two? (1, 2, 4, 8, 16...). Check in O(1)! 🦜"', codeSnippet: 'return n > 0 && (n & (n - 1)) == 0;' },
            { type: 'teaching', questionText: '🦜 Pico: "If a number is a power of 2, it has exactly ONE set bit! `n & (n-1)` will clear that bit and result in 0! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(1). Space Complexity: O(1). Fastest bird in the sky! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Wait! Don\'t forget to check if n > 0. Negative numbers aren\'t powers of 2 for birds! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Scenario: 16 (10000). 16-1 = 15 (01111). 16 & 15 = 0! Success! 🦜"' },
            { type: 'multiple_choice', questionText: 'How many set bits does a power of 2 have?', options: ['1', '2', '0'], correctAnswer: '1' },
            { type: 'match_following', questionText: 'Match values!', pairs: [
              {key: '1', value: '2^0'}, {key: '2', value: '2^1'}, {key: '16', value: '2^4'}
            ] },
            { type: 'programming_board', questionText: 'Fix power logic!', codeSnippet: 'return n > 0 && (n & ___) == 0;', correctAnswer: 'n-1' },
            { type: 'multiple_choice', questionText: 'Is 0 a power of 2?', options: ['No', 'Yes', 'Squawk!'], correctAnswer: 'No' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Am I a power of 2?"', options: ['YES!', 'Maybe.', 'Squawk!'], correctAnswer: 'YES!' }
          ]
        },
        {
          title: 'Reverse Bits', desc: 'Flipping counts! 🦜', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Reverse the bits of a 32-bit unsigned integer! 🦜"', codeSnippet: 'uint32_t res = 0;\nfor(int i=0; i<32; i++) {\n  res = (res << 1) | (n & 1);\n  n >>= 1;\n}' },
            { type: 'teaching', questionText: '🦜 Pico: "Take the rightmost bit of N (`n & 1`), push it into `res`, and then shift N right and `res` left! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(1) (fixed 32 iterations). Space Complexity: O(1). 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Wait! Make sure you shift `res` BEFORE adding the new bit, except for the last one! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Zoho uses this to test your fundamental bit manipulation skills. 🦜"' },
            { type: 'multiple_choice', questionText: 'How many iterations to reverse a 32-bit int?', options: ['32', 'N', 'log N'], correctAnswer: '32' },
            { type: 'match_following', questionText: 'Match bit actions!', pairs: [
              {key: 'n & 1', value: 'Extract LSB'}, {key: 'res << 1', value: 'Make room in result'}, {key: 'n >>= 1', value: 'Discard processed bit'}
            ] },
            { type: 'programming_board', questionText: 'Fix bit insertion!', codeSnippet: 'res = (res << 1) | (n ___ 1);', correctAnswer: '&' },
            { type: 'multiple_choice', questionText: 'Is O(log N) more accurate?', options: ['No, bits are fixed at 32', 'Yes', 'Depends on bird size'], correctAnswer: 'No, bits are fixed at 32' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Can you fly backwards?"', options: ['YES!', 'No.', 'Squawk!'], correctAnswer: 'YES!' }
          ]
        },
        {
          title: 'Counting Bits', desc: 'DP + Bitwise! 🦜', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Find the number of 1s in all numbers from 0 to N! Efficiency matters! 🦜"', codeSnippet: 'res[i] = res[i >> 1] + (i & 1);' },
            { type: 'teaching', questionText: '🦜 Pico: "Dynamic Programming! The bits in `i` are the same as `i/2` (shifted) plus 1 if `i` is odd! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(N). Space Complexity: O(N) for result. 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Scenario: N=2 (10). res[2] = res[1] + 0 = 1. res[1] = res[0] + 1 = 1. 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Zoho Elite Level: This is a classic pattern recognition problem. 🦜"' },
            { type: 'multiple_choice', questionText: 'DP relation for bit count of i?', options: ['res[i >> 1] + (i & 1)', 'res[i-1] + 1', 'res[i/2]'], correctAnswer: 'res[i >> 1] + (i & 1)' },
            { type: 'match_following', questionText: 'Match bit counts!', pairs: [
              {key: '0', value: '0'}, {key: '1', value: '1'}, {key: '2', value: '1 (10)'}, {key: '3', value: '2 (11)'}
            ] },
            { type: 'programming_board', questionText: 'Fix DP step!', codeSnippet: 'ans[i] = ans[i / 2] + (___ % 2);', correctAnswer: 'i' },
            { type: 'multiple_choice', questionText: 'Is this O(N log N) if we use Brian Kernighan for each i?', options: ['YES', 'No, O(N)', 'O(1)'], correctAnswer: 'YES' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Are you counting?"', options: ['YES!', 'Always.', 'Squawk!'], correctAnswer: 'YES!' }
          ]
        },
        {
          title: 'Missing Number (XOR)', desc: 'The lost bird! 🦜', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Find the missing number in 0..N using XOR! 🦜"', codeSnippet: 'int x = 0;\nfor(int i=0; i<=n; i++) x ^= i;\nfor(int num : nums) x ^= num;' },
            { type: 'teaching', questionText: '🦜 Pico: "XOR all numbers from 0 to N, then XOR all numbers in the array. The one that remains is missing! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(N). Space Complexity: O(1). 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Why XOR? No overflow risk compared to the Sum formula! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Scenario: [0, 1, 3], N=3. (0^1^2^3) ^ (0^1^3) = 2! 🦜"' },
            { type: 'multiple_choice', questionText: 'XOR advantage over Sum formula?', options: ['No overflow', 'Faster', 'Easier'], correctAnswer: 'No overflow' },
            { type: 'match_following', questionText: 'Match numbers!', pairs: [
              {key: 'A ^ A', value: 'Bird found'}, {key: 'A ^ 0', value: 'Bird remains'}, {key: 'Missing', value: 'The result'}
            ] },
            { type: 'programming_board', questionText: 'Complete the loops!', codeSnippet: 'for(int i=0; i<n; i++) x = x ^ i ^ ___[i];\nreturn x ^ n;', correctAnswer: 'nums' },
            { type: 'multiple_choice', questionText: 'Complexity?', options: ['O(N)', 'O(N^2)', 'O(log N)'], correctAnswer: 'O(N)' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Did you find it?"', options: ['YES!', 'Still looking.', 'Squawk!'], correctAnswer: 'YES!' }
          ]
        },
        {
          title: 'Total Hamming Distance', desc: 'Comparing flocks! 🦜', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Find the sum of Hamming distances between all pairs of numbers in the flock! 🦜"', codeSnippet: 'for(int i=0; i<32; i++) {\n  int countOnes = 0;\n  for(int x : nums) if((x >> i) & 1) countOnes++;\n  ans += countOnes * (n - countOnes);\n}' },
            { type: 'teaching', questionText: '🦜 Pico: "Don\'t do O(N^2)! For each bit position, count how many birds have `1`. If `k` birds have `1`, then `n-k` birds have `0`. Each pair (1, 0) adds 1 to total! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(32 * N). Space Complexity: O(1). 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Each bit position works independently. Math bird magic! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Zoho Elite Challenge: Can you explain why it is count * (n-count)?"' },
            { type: 'multiple_choice', questionText: 'Reason for count * (n - count)?', options: ['Pairs of different bits', 'Pairs of same bits', 'Total birds'], correctAnswer: 'Pairs of different bits' },
            { type: 'match_following', questionText: 'Match variables!', pairs: [
              {key: 'countOnes', value: 'Birds with bit 1'}, {key: 'n - countOnes', value: 'Birds with bit 0'}, {key: '32', value: 'Int bit length'}
            ] },
            { type: 'programming_board', questionText: 'Fix bit count update!', codeSnippet: 'if((num >> i) & 1) ___ ; else zeros++;', correctAnswer: 'ones++' },
            { type: 'multiple_choice', questionText: 'Is this faster than O(N^2)?', options: ['YES, O(32N) is much faster', 'No', 'Same'], correctAnswer: 'YES, O(32N) is much faster' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Areเรา different?"', options: ['YES!', 'In some bits.', 'Squawk!'], correctAnswer: 'In some bits.' }
          ]
        },
        {
          title: 'Maximum XOR Two Numbers', desc: 'XOR peak! 🦜', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Find the maximum result of `nums[i] ^ nums[j]`. 🦜"', codeSnippet: 'for(int i=31; i>=0; i--) {\n  mask |= (1 << i);\n  for(int num : nums) s.insert(num & mask);\n  int tmp = max | (1 << i);\n  for(int prefix : s) if(s.count(tmp ^ prefix)) { max = tmp; break; }\n}' },
            { type: 'teaching', questionText: '🦜 Pico: "Greedy approach using a Trie OR Hash Set! Try to make each bit `1` starting from the left. 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(32 * N). Space Complexity: O(N). 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Use the property: If `a ^ b = c`, then `a ^ c = b`. 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Zoho Ninja level: This is the peak of bitwise array problems. 🦜"' },
            { type: 'multiple_choice', questionText: 'Why start from the most significant bit?', options: ['To maximize the value greedily', 'Because birds fly forward', 'Random'], correctAnswer: 'To maximize the value greedily' },
            { type: 'match_following', questionText: 'Match logic!', pairs: [
              {key: 'mask', value: 'Prefix extractor'}, {key: 'tmp', value: 'Desired max candidate'}, {key: 's.count(tmp ^ prefix)', value: 'Check if candidate exists'}
            ] },
            { type: 'programming_board', questionText: 'Fix candidate check!', codeSnippet: 'int candidate = max_xor | (1 << i);\nfor(int prefix : prefixes) {\n  if(prefixes.count(candidate ^ ___)) { max_xor = candidate; break; }\n}', correctAnswer: 'prefix' },
            { type: 'multiple_choice', questionText: 'Complexity?', options: ['O(32N)', 'O(N^2)', 'O(1)'], correctAnswer: 'O(32N)' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Did you reach the peak?"', options: ['YES!', 'Next stage!', 'Squawk!'], correctAnswer: 'YES!' }
          ]
        },
        {
          title: 'Bitwise AND Range', desc: 'Common prefix! 🦜', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Find the bitwise AND of all numbers in the range [left, right]! 🦜"', codeSnippet: 'int shift = 0;\nwhile(left < right) {\n  left >>= 1; right >>= 1;\n  shift++;\n}\nreturn left << shift;' },
            { type: 'teaching', questionText: '🦜 Pico: "The bitwise AND of a range is just the COMMON PREFIX of the binary forms of the boundaries! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Any bit that differs between left and right will eventually become 0 in the range. 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(log N) (effectively O(32)). Space: O(1). 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Scenario: [5, 7]. 5=101, 7=111. Shift right until equal: 101->10->1, 111->11->1. Shift back: 1 << 2 = 100 (4)! 🦜"' },
            { type: 'multiple_choice', questionText: 'What is the bitwise AND of a range?', options: ['The common binary prefix', 'The XOR sum', 'The maximum value'], correctAnswer: 'The common binary prefix' },
            { type: 'match_following', questionText: 'Match values!', pairs: [
              {key: '5', value: '101'}, {key: '7', value: '111'}, {key: 'AND(5,7)', value: '100 (4)'}
            ] },
            { type: 'programming_board', questionText: 'Fix shift logic!', codeSnippet: 'while(m < n) {\n  m >>= 1; n >>= 1;\n  ___++;\n}', correctAnswer: 'i' },
            { type: 'multiple_choice', questionText: 'Complexity?', options: ['O(log N)', 'O(N)', 'O(1)'], correctAnswer: 'O(log N)' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Are we range-bound?"', options: ['YES!', 'Free bird!', 'Squawk!'], correctAnswer: 'YES!' }
          ]
        },
        {
          title: 'Subsets (Bitmasking)', desc: 'Every possible flock! 🦜', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Find all possible subsets of a flock using BITMASKING! 🦜"', codeSnippet: 'for(int i=0; i < (1 << n); i++) {\n  vector<int> sub;\n  for(int j=0; j<n; j++) if((i >> j) & 1) sub.push_back(nums[j]);\n  ans.push_back(sub);\n}' },
            { type: 'teaching', questionText: '🦜 Pico: "A set of size N has 2^N subsets. Each subset corresponds to a number from 0 to 2^N - 1! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "If the J-th bit of I is 1, the J-th bird is in the subset! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(N * 2^N). Space: O(N * 2^N) for result. 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Zoho Elite level: This is the fastest way to generate a Power Set. 🦜"' },
            { type: 'multiple_choice', questionText: 'Number of subsets for N=3?', options: ['8 (2^3)', '6', '3'], correctAnswer: '8 (2^3)' },
            { type: 'match_following', questionText: 'Match indices!', pairs: [
              {key: 'i', value: 'The subset mask'}, {key: 'j', value: 'The bird index'}, {key: '1 << n', value: 'Total subsets'}
            ] },
            { type: 'programming_board', questionText: 'Fix bit check!', codeSnippet: 'if((i >> j) ___ 1) temp.push_back(nums[j]);', correctAnswer: '&' },
            { type: 'multiple_choice', questionText: 'Is bitmasking faster than recursion?', options: ['Yes, avoids stack overhead', 'No', 'Same'], correctAnswer: 'Yes, avoids stack overhead' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Can I be in multiple subsets?"', options: ['YES!', 'Only one.', 'Squawk!'], correctAnswer: 'YES!' }
          ]
        },
        {
          title: 'Generalized Abbreviation', desc: 'Hidden birds! 🦜', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Abbreviate words using bitmasks! e.g. "word" -> "w2d", "1o1d", "4", etc. 🦜"', codeSnippet: 'for(int i=0; i < (1 << n); i++) {\n  string cur = ""; int count = 0;\n  for(int j=0; j<n; j++) {\n    if((i >> j) & 1) count++;\n    else { if(count) cur += to_string(count); cur += s[j]; count = 0; }\n  }\n}' },
            { type: 'teaching', questionText: '🦜 Pico: "Treat each character as a bit. If bit is 1, it is abbreviated (counted). If 0, it is displayed as a character! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(N * 2^N). Space: O(N * 2^N). 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Wait! Make sure to add the final count after the inner loop! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Zoho Ninja level: A great test of bitmasking + string building. 🦜"' },
            { type: 'multiple_choice', questionText: 'What does bit 1 represent in the abbreviation mask?', options: ['Counted (Abbreviated)', 'Literal Character', 'Random'], correctAnswer: 'Counted (Abbreviated)' },
            { type: 'match_following', questionText: 'Match examples!', pairs: [
              {key: 'word, 1111', value: '"4"'}, {key: 'word, 0000', value: '"word"'}, {key: 'word, 1010', value: '"1o1d"'}
            ] },
            { type: 'programming_board', questionText: 'Fix count clear!', codeSnippet: 'else {\n  if(cnt > 0) res += to_string(cnt);\n  res += word[j];\n  cnt = ___ ;\n}', correctAnswer: '0' },
            { type: 'multiple_choice', questionText: 'Complexity?', options: ['O(N * 2^N)', 'O(N^2)', 'O(1)'], correctAnswer: 'O(N * 2^N)' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Can you see me?"', options: ['YES!', 'I am abbreviated.', 'Squawk!'], correctAnswer: 'YES!' }
          ]
        },
        {
          title: 'IP to CIDR', desc: 'Bird networking! 🦜', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Convert an IP range to the smallest set of CIDR blocks! 🦜"', codeSnippet: 'while(n > 0) {\n  int step = x & -x;\n  while(step > n) step /= 2;\n  res.push_back(longToIp(x) + "/" + to_string(32 - log2(step)));\n  x += step; n -= step;\n}' },
            { type: 'teaching', questionText: '🦜 Pico: "Use `x & -x` to find the largest block size supported by the current IP (the trailing zeroes)! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Adjust the block size (step) if it exceeds the remaining number of IPs (n). 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(log N). Space Complexity: O(log N) for results. 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Zoho Network Admin level: A tough but rewarding bitwise problem! 🦜"' },
            { type: 'multiple_choice', questionText: 'What does x & -x provide for an IP address?', options: ['Trailing zero block size', 'Leading ones', 'Byte count'], correctAnswer: 'Trailing zero block size' },
            { type: 'match_following', questionText: 'Match CIDR!', pairs: [
              {key: '32', value: '1 IP'}, {key: '31', value: '2 IPs'}, {key: '24', value: '256 IPs'}
            ] },
            { type: 'programming_board', questionText: 'Fix step division!', codeSnippet: 'while(step > n) step ___ 2;', correctAnswer: '/=' },
            { type: 'multiple_choice', questionText: 'Is IP a 32-bit int?', options: ['YES!', 'No, 64-bit.', 'Squawk!'], correctAnswer: 'YES!' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "What is my IP?"', options: ['127.0.0.1 (Local Bird)', '8.8.8.8', 'None.'], correctAnswer: '127.0.0.1 (Local Bird)' }
          ]
        },
        {
          title: 'Sort by Bits', desc: 'Hamming sort! 🦜', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Sort the flock by the number of set bits (1s)! If bits are equal, sort by value! 🦜"', codeSnippet: 'sort(nums.begin(), nums.end(), [](int a, int b) {\n  int countA = __builtin_popcount(a), countB = __builtin_popcount(b);\n  if(countA != countB) return countA < countB;\n  return a < b;\n});' },
            { type: 'teaching', questionText: '🦜 Pico: "Custom comparator! Use `__builtin_popcount` (or Kernighan) to get the bit counts for both birds. 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(32 * N log N). Space: O(1) or O(N). 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Scenario: [3, 1, 2, 4]. Bits: [2, 1, 1, 1]. Sorted: [1, 2, 4, 3]. 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Zoho standard: Combines Bitwise + Custom Sorting. 🦜"' },
            { type: 'multiple_choice', questionText: 'Which number comes first: 3 (11) or 4 (100)?', options: ['4 (1 bit)', '3 (2 bits)', 'None'], correctAnswer: '4 (1 bit)' },
            { type: 'match_following', questionText: 'Match logic!', pairs: [
              {key: 'popcount', value: 'Count 1s'}, {key: 'Tie-breaker', value: 'Value a < b'}, {key: 'Sort', value: 'Ascending bits'}
            ] },
            { type: 'programming_board', questionText: 'Fix popcount logic!', codeSnippet: 'int ca = count(a), cb = count(b);\nif(ca != cb) return ca ___ cb;', correctAnswer: '<' },
            { type: 'multiple_choice', questionText: 'Complexity?', options: ['O(N log N)', 'O(N)', 'O(1)'], correctAnswer: 'O(N log N)' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Am I sorted by feathers?"', options: ['YES!', 'No.', 'Squawk!'], correctAnswer: 'YES!' }
          ]
        },
        {
          title: 'Gray Code (Logic)', desc: 'One bit shift! 🦜', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Generate a Gray Code sequence of N bits! Each adjacent pair differs by exactly ONE bit. 🦜"', codeSnippet: 'for(int i=0; i < (1 << n); i++) {\n  ans.push_back(i ^ (i >> 1));\n}' },
            { type: 'teaching', questionText: '🦜 Pico: "The `i ^ (i >> 1)` formula is a bitwise masterpiece! It generates the Gray sequence in order. 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(2^N). Space: O(1) extra. 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Scenario: N=2. 0^0=00, 1^0=01, 2^1=11, 3^1=10. Result: [0, 1, 3, 2]. 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Zoho Elite level: This is often asked in hardware/logic interview rounds! 🦜"' },
            { type: 'multiple_choice', questionText: 'How many bits differ between adjacent Gray Codes?', options: ['1', '2', 'N'], correctAnswer: '1' },
            { type: 'match_following', questionText: 'Match binary to Gray!', pairs: [
              {key: '00 (0)', value: '00'}, {key: '01 (1)', value: '01'}, {key: '10 (2)', value: '11'}, {key: '11 (3)', value: '10'}
            ] },
            { type: 'programming_board', questionText: 'Fix Gray Code formula!', codeSnippet: 'return i ^ (i ___ 1);', correctAnswer: '>>' },
            { type: 'multiple_choice', questionText: 'Is the sequence cyclic?', options: ['YES (last and first also differ by 1)', 'No', 'Squawk!'], correctAnswer: 'YES (last and first also differ by 1)' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Do I change one feather at a time?"', options: ['YES!', 'No.', 'Only on Sundays.'], correctAnswer: 'YES!' }
          ]
        },
        {
          title: 'Decode XORed Array', desc: 'Unlocking code! 🦜', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Given an `encoded` array where `encoded[i] = arr[i] ^ arr[i+1]`, and the `first` element, decode the original flock! 🦜"', codeSnippet: 'ans[0] = first;\nfor(int i=0; i<n; i++) ans[i+1] = ans[i] ^ encoded[i];' },
            { type: 'teaching', questionText: '🦜 Pico: "Use the XOR property: If `A ^ B = C`, then `A ^ C = B`. 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(N). Space Complexity: O(N) for result. 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Linear flight path across the array! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Zoho standard: A simple but essential bitwise logic test. 🦜"' },
            { type: 'multiple_choice', questionText: 'Logic to find arr[i+1]?', options: ['arr[i] ^ encoded[i]', 'arr[i] + encoded[i]', 'N/A'], correctAnswer: 'arr[i] ^ encoded[i]' },
            { type: 'match_following', questionText: 'Match logic!', pairs: [
              {key: 'A ^ B = C', value: 'Encoded relation'}, {key: 'A ^ C = B', value: 'Decode relation'}, {key: 'first', value: 'Starting bird'}
            ] },
            { type: 'programming_board', questionText: 'Fix decoding step!', codeSnippet: 'for(int i=0; i<encoded.length(); i++) {\n  res.push_back(res.back() ___ encoded[i]);\n}', correctAnswer: '^' },
            { type: 'multiple_choice', questionText: 'Complexity?', options: ['O(N)', 'O(1)', 'O(N^2)'], correctAnswer: 'O(N)' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Am I decoded?"', options: ['YES!', 'Secret bird.', 'Squawk!'], correctAnswer: 'YES!' }
          ]
        },
        {
          title: 'Segment of Ones', desc: 'Strict formation! 🦜', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Check if a binary string has at most ONE contiguous segment of 1s! 🦜"', codeSnippet: 'return s.find("01") == string::npos;' },
            { type: 'teaching', questionText: '🦜 Pico: "Wait! If a string starts with 1, it can only have 1s then 0s. If "01" exists, it means a segment of 1s started AFTER a 0! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(N). Space Complexity: O(1). 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Scenario: "1100" -> True. "1101" -> False (contains "01"). 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "The string must not contain "01" because the problem says leading zeros are not possible! 🦜"' },
            { type: 'multiple_choice', questionText: 'Condition for failure?', options: ['Presence of "01"', 'Presence of "11"', 'Presence of "0"'], correctAnswer: 'Presence of "01"' },
            { type: 'match_following', questionText: 'Match results!', pairs: [
              {key: '"111"', value: 'True'}, {key: '"100"', value: 'True'}, {key: '"101"', value: 'False'}
            ] },
            { type: 'programming_board', questionText: 'Fix search string!', codeSnippet: 'if (s.find("___") != -1) return false;', correctAnswer: '01' },
            { type: 'multiple_choice', questionText: 'Is O(N) faster than manual loop?', options: ['Same', 'Yes', 'No'], correctAnswer: 'Same' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Are we in line?"', options: ['YES!', 'Messy flock.', 'Squawk!'], correctAnswer: 'YES!' }
          ]
        },
        {
          title: 'Steps to Zero', desc: 'Fast descent! 🦜', xp: 30, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "Reduce number to 0. If even, divide by 2. If odd, subtract 1. Count steps! 🦜"', codeSnippet: 'while(n) {\n  if(n & 1) n -= 1; else n >>= 1;\n  count++;\n}' },
            { type: 'teaching', questionText: '🦜 Pico: "Bitwise view: Dividing by 2 is `>> 1`. Subtracting 1 from odd clears the last bit! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Total steps = (number of bits) + (number of 1s) - 1. Math bird magic! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(log N). Space Complexity: O(1). 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Zoho warm-up! 🦜"' },
            { type: 'multiple_choice', questionText: 'How many steps for N=14 (1110)?', options: ['6 (14->7->6->3->2->1->0)', '4', '14'], correctAnswer: '6 (14->7->6->3->2->1->0)' },
            { type: 'match_following', questionText: 'Match operations!', pairs: [
              {key: 'Even', value: 'Shift Right 1'}, {key: 'Odd', value: 'Clear LSB (n-1)'}, {key: 'Zero', value: 'Stop'}
            ] },
            { type: 'programming_board', questionText: 'Fix even check!', codeSnippet: 'if((n ___ 1) == 0) n >>= 1;', correctAnswer: '&' },
            { type: 'multiple_choice', questionText: 'Max steps for 32-bit int?', options: ['~63', '32', 'Infinity'], correctAnswer: '~63' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Ready for the big finale?"', options: ['YES!', 'Next stage!', 'Squawk!'], correctAnswer: 'YES!' }
          ]
        },
        {
          title: 'The Grand Finale', desc: 'Array God! 🦜🏆', xp: 100, lessons: [
            { type: 'teaching', questionText: '🦜 Pico: "YOU DID IT! 140 UNITS COMPLETED! You have mastered the entire Array curriculum! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "From Sequential Strides to Bitwise Mastery... You are now a Zoho Elite Bird! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "The flock bows to your knowledge. Go forth and conquer your interviews! 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "Remember the Pico code: Think fast, code sharp, and always keep some seeds in your pocket. 🦜"' },
            { type: 'teaching', questionText: '🦜 Pico: "One last ultimate question... 🦜"' },
            { type: 'multiple_choice', questionText: 'Are you the ultimate Array Master?', options: ['YES!', 'I am bird.', 'Squawk!'], correctAnswer: 'YES!' },
            { type: 'match_following', questionText: 'Match your journey!', pairs: [
              {key: 'Stage 1', value: 'Foundations'}, {key: 'Stage 4', value: 'Subarrays'}, {key: 'Stage 7', value: 'Bitwise Glory'}
            ] },
            { type: 'programming_board', questionText: 'Fix the final output!', codeSnippet: 'cout << "Pico-Master-Status: " << ___ ;', correctAnswer: 'true' },
            { type: 'multiple_choice', questionText: 'What is next?', options: ['Interview Success!', 'Strings Stage!', 'Seeds.'], correctAnswer: 'Interview Success!' },
            { type: 'multiple_choice', questionText: '🦜 Pico: "Will you remember me?"', options: ['Always.', 'Who are you?', 'Squawk!'], correctAnswer: 'Always.' }
          ]
        }
      ]
    }
  ]
};

module.exports = arrays;
