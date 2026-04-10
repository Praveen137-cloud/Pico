const stage1_part2 = [
  {
    order: 11,
    title: 'The Frequency Map',
    desc: 'Counting occurrences of every character in a string.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "How many times does each bead appear? If we have a giant box of beads, we need a map to keep track! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "An array of 256 for basic ASCII, or a Hash Map for full Unicode. Every time you see a bird, increment its tally! 🦜"', codeSnippet: 'for(char c : s) counts[c]++;' },
      { type: 'multiple_choice', questionText: 'Most common character in "BANANA"?', options: ['A', 'N', 'B'], correctAnswer: 'A' },
      { type: 'match_following', questionText: 'Match Occurrences in "BIRD"!', pairs: [{key: 'B', value: '1'}, {key: 'Z', value: '0'}, {key: 'Total', value: '4'}] },
      { type: 'programming_board', questionText: 'Increment count for character `c`.', codeSnippet: 'map[c] = map.getOrDefault(c, 0) ___ 1;', correctAnswer: '+' },
      { type: 'teaching', questionText: '🦜 Pico: "This is the first step for many elite missions like First Unique Character or Group Anagrams! 🦜"' },
      { type: 'multiple_choice', questionText: 'Time complexity for building a frequency map?', options: ['O(N)', 'O(N^2)', 'O(1)'], correctAnswer: 'O(N)' },
      { type: 'code_fill_in', questionText: 'Check if character exists in map.', codeSnippet: 'if (map.___ (c))', correctAnswer: 'contains' },
      { type: 'teaching', questionText: '🦜 Pico: "The map shows all! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I frequent?"', options: ['Everywhere!', 'No.', '0'], correctAnswer: 'Everywhere!' }
    ]
  },
  {
    order: 12,
    title: 'The First Unique',
    desc: 'Finding the first non-repeating character.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Lone Wolf! Who is the first bird in the flock that doesn\'t have a twin? 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Two passes! First, build the frequency map. Second, scan the string again and return the first bead whose count is 1! 🦜"', codeSnippet: 'for(i=0; i<n; i++) {\n  if(counts[s[i]] == 1) return i;\n}' },
      { type: 'multiple_choice', questionText: 'First unique character in "LEETCODE"?', options: ['L', 'E', 'T'], correctAnswer: 'L' },
      { type: 'match_following', questionText: 'Match Search Steps!', pairs: [{key: 'Step 1', value: 'Build map'}, {key: 'Step 2', value: 'Scan again'}, {key: 'Step 3', value: 'Success!'}] },
      { type: 'programming_board', questionText: 'Condition to find the unique bird.', codeSnippet: 'if (counts[s[i]] ___ 1) return i;', correctAnswer: '==' },
      { type: 'teaching', questionText: '🦜 Pico: "Complexity: O(N) time and O(1) space (since the alphabet is small). If you don\'t find any, return -1! 🦜"' },
      { type: 'multiple_choice', questionText: 'Result for "aabb"?', options: ['-1', '0', 'a'], correctAnswer: '-1' },
      { type: 'code_fill_in', questionText: 'Initialize counts array size.', codeSnippet: 'int cnt[___] = {0};', correctAnswer: '256' },
      { type: 'teaching', questionText: '🦜 Pico: "Unique minds fly together! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I unique?"', options: ['SQUAWK YES!', 'No.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 13,
    title: 'Compressing Clouds',
    desc: 'Run Length Encoding (RLE) basics.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "String Compression! If we have too many \'A\'s, let\'s just say \'A3\'. It saves seed-space! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Iterate and count consecutive birds. When the species changes, write the bird and its count! 🦜"', codeSnippet: 'while (i < n && s[i] == s[i+1]) { count++; i++; }' },
      { type: 'multiple_choice', questionText: 'Compressed version of "AAABBC"?', options: ['A3B2C1', 'ABC', 'A3B2C'], correctAnswer: 'A3B2C1' },
      { type: 'match_following', questionText: 'Match Compressions!', pairs: [{key: 'AAAAA', value: 'A5'}, {key: 'BB', value: 'B2'}, {key: 'C', value: 'C1'}] },
      { type: 'programming_board', questionText: 'Condition for the while loop to count repeating chars.', codeSnippet: 'while (j < n && s[j] ___ s[i]) j++;', correctAnswer: '==' },
      { type: 'teaching', questionText: '🦜 Pico: "Only return the compressed string if it is SHORTER than the original. Otherwise, keep the original beads! 🦜"' },
      { type: 'multiple_choice', questionText: 'Is "A1B1" shorter than "AB"?', options: ['No', 'Yes', 'Same'], correctAnswer: 'No' },
      { type: 'code_fill_in', questionText: 'Store the count as a string.', codeSnippet: 'res += ___(count);', correctAnswer: 'to_string' },
      { type: 'teaching', questionText: '🦜 Pico: "Small is beautiful, fledgling! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Can I be compressed?"', options: ['Too big to fail!', 'Yes.', '0'], correctAnswer: 'Too big to fail!' }
    ]
  },
  {
    order: 14,
    title: 'The Space Jam',
    desc: 'Manipulating spaces (%20) in-place.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "HTML Encoding! Replace every space \' \' with \'%20\'. If you have extra room at the end, do it in-place! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Start from the BACK! This way you don\'t overwrite the birds ahead of you! 🦜"', codeSnippet: 'if (s[i] == \' \') {\n  s[newEnd--] = \'0\'; s[newEnd--] = \'2\'; s[newEnd--] = \'%\';\n}' },
      { type: 'multiple_choice', questionText: 'Total length increase for each space replaced by "%20"?', options: ['+2', '+3', '+1'], correctAnswer: '+2' },
      { type: 'match_following', questionText: 'Match URL Chars!', pairs: [{key: 'Space', value: '%20'}, {key: '&', value: '%26'}, {key: '=', value: '%3D'}] },
      { type: 'programming_board', questionText: 'Move index backward for a regular bird.', codeSnippet: 'else {\n  s[newEnd___] = s[i];\n}', correctAnswer: '--' },
      { type: 'teaching', questionText: '🦜 Pico: "Back-to-front modification is the elite trick for string manipulation. It’s like landing from the leeward side! 🦜"' },
      { type: 'multiple_choice', questionText: 'Initial space count of "A B" (size 3)?', options: ['1', '2', '0'], correctAnswer: '1' },
      { type: 'code_fill_in', questionText: 'Calculate the new end index.', codeSnippet: 'int newEnd = originalEnd + spaceCount * ___;', correctAnswer: '2' },
      { type: 'teaching', questionText: '🦜 Pico: "Fill the gaps with logic! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Is my name %20?"', options: ['PICO', 'PICO%20', '0'], correctAnswer: 'PICO' }
    ]
  },
  {
    order: 15,
    title: 'Longest Common Prefix',
    desc: 'Finding the prefix shared by all strings in a flock.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Common Ground! What is the longest start that EVERY bird in the flock has in common? 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Vertical Scanning! Compare the first bead of everyone. Then the second. Stop as soon as someone is different! 🦜"', codeSnippet: 'for(int j=0; j<s[0].len(); j++) {\n  char c = s[0][j];\n  for(int i=1; i<flock.size(); i++) {\n    if(j == s[i].len() || s[i][j] != c) return result;\n  }\n}' },
      { type: 'multiple_choice', questionText: 'Common prefix of ["flower", "flow", "flight"]?', options: ['fl', 'flo', 'flower'], correctAnswer: 'fl' },
      { type: 'match_following', questionText: 'Match Prefixes!', pairs: [{key: "dog, doggy", value: "dog"}, {key: "car, race", value: ""}, {key: "be, bear", value: "be"}] },
      { type: 'programming_board', questionText: 'Termination condition if length exceeded.', codeSnippet: 'if (j ___ s[i].length()) return res;', correctAnswer: '==' },
      { type: 'teaching', questionText: '🦜 Pico: "Efficiency: O(S) where S is the sum of all characters. You only look at what you need! 🦜"' },
      { type: 'multiple_choice', questionText: 'What if the first string of the flock is empty?', options: ['Prefix is empty', 'Error', 'Skip'], correctAnswer: 'Prefix is empty' },
      { type: 'code_fill_in', questionText: 'Append character to result.', codeSnippet: 'res.___ (c);', correctAnswer: '+=' },
      { type: 'teaching', questionText: '🦜 Pico: "The bond that holds the words! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Is my name a prefix of Perfection?"', options: ['SQUAWK YES!', 'No.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 16,
    title: 'The Hamming Distance',
    desc: 'Counting mismatches between strings of equal length.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Hamming Distance! For two necklaces of equal length, how many beads are DIFFERENT at the same position? 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Just one pass! If `s1[i] != s2[i]`, increment the distance! 🦜"', codeSnippet: 'if (s1[i] != s2[i]) dist++;' },
      { type: 'multiple_choice', questionText: 'Hamming distance between "TONE" and "TAME"?', options: ['2', '1', '4'], correctAnswer: '2' },
      { type: 'match_following', questionText: 'Match Hamming pairs!', pairs: [{key: 'BIRD, BARD', value: '1'}, {key: 'NEST, NEST', value: '0'}, {key: 'FLYY, FLOW', value: '2'}] },
      { type: 'programming_board', questionText: 'Requirement for Hamming Distance calculation.', codeSnippet: 'if (s1.length() ___ s2.length()) // Standard requirement', correctAnswer: '==' },
      { type: 'teaching', questionText: '🦜 Pico: "This is used in error detection and genetics. Each mismatch is a mutation! 🦜"' },
      { type: 'multiple_choice', questionText: 'Complexity of Hamming Distance?', options: ['O(N)', 'O(1)', 'O(N^2)'], correctAnswer: 'O(N)' },
      { type: 'code_fill_in', questionText: 'Loop over strings.', codeSnippet: 'for(int i = 0; i < ___; i++)', correctAnswer: 'n' },
      { type: 'teaching', questionText: '🦜 Pico: "Distance is just a measure of change! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "What’s my distance from a crow?"', options: ['Infinite!', '1', '0'], correctAnswer: 'Infinite!' }
    ]
  },
  {
    order: 17,
    title: 'Rotating Beads',
    desc: 'Checking if A is a rotation of B.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Is String B just String A rotated? Like \'ABCD\' becoming \'CDAB\'? 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "The Elite Trick: Concatenate A with itself (`A + A`). If B is a rotation, it MUST be a substring of the doubled necklace! 🦜"', codeSnippet: 'if ((a + a).includes(b)) return true;' },
      { type: 'multiple_choice', questionText: 'Is "CODE" a rotation of "DECO"?', options: ['Yes', 'No', 'Maybe'], correctAnswer: 'Yes' },
      { type: 'match_following', questionText: 'Match Rotations!', pairs: [{key: 'PICO', value: 'ICOP'}, {key: 'BIRD', value: 'IRDB'}, {key: 'FLY', value: 'LYF'}] },
      { type: 'programming_board', questionText: 'Doubling logic string `S`.', codeSnippet: 'doubleString = S ___ S;', correctAnswer: '+' },
      { type: 'teaching', questionText: '🦜 Pico: "Complexity: O(N) using a good substring search. Doubling the string solves it in one move! 🦜"' },
      { type: 'multiple_choice', questionText: 'What is the first check for rotation?', options: ['Equal length', 'Equal start', 'Pico’s mood'], correctAnswer: 'Equal length' },
      { type: 'code_fill_in', questionText: 'Search for `b` in `aa`.', codeSnippet: 'if (aa.contains(___))', correctAnswer: 'b' },
      { type: 'teaching', questionText: '🦜 Pico: "Round and round we go! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Can I rotate 360?"', options: ['SQUAWK YES!', 'No.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 18,
    title: 'The Stooge Sort (String)',
    desc: 'Sorting characters in a string.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Organize the necklace! Let\'s put the beads in alphabetical order. 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Most languages have built-in sorting. In C++, it\'s `std::sort(s.begin(), s.end())`. 🦜"', codeSnippet: 's.sort();' },
      { type: 'multiple_choice', questionText: '"PICO" sorted alphabetically?', options: ['CIOP', 'OPIC', 'PICO'], correctAnswer: 'CIOP' },
      { type: 'match_following', questionText: 'Match Sorted Strings!', pairs: [{key: 'BIRD', value: 'BDIR'}, {key: 'NEST', value: 'ENST'}, {key: 'FLY', value: 'FLY'}] },
      { type: 'programming_board', questionText: 'Check if string is sorted.', codeSnippet: 'if (s[i] ___ s[i+1]) return false;', correctAnswer: '>' },
      { type: 'teaching', questionText: '🦜 Pico: "Sorting takes O(N log N). Useful for preparing anagram checks or finding duplicates! 🦜"' },
      { type: 'multiple_choice', questionText: 'Can you sort "abc" in O(N)?', options: ['Yes, with counting sort', 'No', 'Only if I’m sleepy'], correctAnswer: 'Yes, with counting sort' },
      { type: 'code_fill_in', questionText: 'Sort characters in JS array.', codeSnippet: 'arr.___().join("")', correctAnswer: 'sort' },
      { type: 'teaching', questionText: '🦜 Pico: "Order in the nest, order in the code! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I sorted?"', options: ['Perfectly arranged!', 'No.', '0'], correctAnswer: 'Perfectly arranged!' }
    ]
  },
  {
    order: 19,
    title: 'The String Stream',
    desc: 'Extracting types from a string (String Parsing).',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Numbers hiding in beads! "Age: 25". How to get that 25? 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "In C++, `stringstream` ignores characters and extracts numbers! 🦜"', codeSnippet: 'ss >> s >> age;' },
      { type: 'multiple_choice', questionText: 'Extracting "123" from a string as an integer?', options: ['stoi(s)', 'to_int(s)', 'val(s)'], correctAnswer: 'stoi(s)' },
      { type: 'match_following', questionText: 'Match Converters!', pairs: [{key: 'String to Int', value: 'stoi'}, {key: 'Int to String', value: 'to_string'}, {key: 'String to Float', value: 'stof'}] },
      { type: 'programming_board', questionText: 'Convert integer 100 to string.', codeSnippet: 's = ___(100);', correctAnswer: 'to_string' },
      { type: 'teaching', questionText: '🦜 Pico: "Be careful of invalid inputs! If a bead isn\'t a digit, your bird-brain might crash! 🦜"' },
      { type: 'multiple_choice', questionText: 'Result of `stoi("42 pixels")`?', options: ['42', 'Error', '0'], correctAnswer: '42' },
      { type: 'code_fill_in', questionText: 'JS: Convert string to integer.', codeSnippet: '___(str)', correctAnswer: 'parseInt' },
      { type: 'teaching', questionText: '🦜 Pico: "Translate the world, fledgling! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I a number?"', options: ['Number one!', 'No.', '0'], correctAnswer: 'Number one!' }
    ]
  },
  {
    order: 20,
    title: 'Stage 1 Graduation',
    desc: 'The Strings Foundation Flight Complete.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "STAGE 1 COMPLETE! You have conquered the basics of the necklace and beads. 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Palindromes, Anagrams, Compressions, and Rotations. Your wings of language are growing! 🦜"' },
      { type: 'multiple_choice', questionText: 'ASCII of \'a\'?', options: ['97', '65'], correctAnswer: '97' },
      { type: 'multiple_choice', questionText: 'Anagram complexity?', options: ['O(N)', 'O(N^2)'], correctAnswer: 'O(N)' },
      { type: 'multiple_choice', questionText: 'String mutability in Java?', options: ['Immutable', 'Mutable'], correctAnswer: 'Immutable' },
      { type: 'multiple_choice', questionText: 'Rotation check trick?', options: ['Concatenate A+A', 'Reverse A'], correctAnswer: 'Concatenate A+A' },
      { type: 'multiple_choice', questionText: 'Substring brute force complexity?', options: ['O(N*M)', 'O(N)'], correctAnswer: 'O(N*M)' },
      { type: 'match_following', questionText: 'Final Foundation Match!', pairs: [{key: 'Pico', value: 'Proud!'}, {key: 'Strings', value: 'Begun!'}, {key: 'Next', value: 'Mastery!'}] },
      { type: 'teaching', questionText: '🦜 Pico: "Stage 2 awaits with Sliding Windows and Patterns! SQUAWK! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Ready for the next flight?"', options: ['SQUAWK YES!', 'No.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  }
];

module.exports = stage1_part2;
