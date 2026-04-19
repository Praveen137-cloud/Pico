const stage1_part1 = [
  {
    order: 1,
    title: 'The Alphabet Song',
    desc: 'Understanding characters and strings basics.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Welcome to the Strings Academy! If an array is a row of nests, a string is a necklace of shiny beads! Each bead is a character! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Every character has a secret code number called ASCII or Unicode. The letter \'A\' is 65. The bird-brain remembers these! 🦜"' },
      { type: 'multiple_choice', questionText: 'What is the ASCII value of \'A\'?', options: ['65', '97', '48'], correctAnswer: '65' },
      { type: 'match_following', questionText: 'Match Character Codes!', pairs: [{key: '\'A\'', value: '65'}, {key: '\'a\'', value: '97'}, {key: '\'0\'', value: '48'}] },
      { type: 'programming_board', questionText: 'Get the character at index 2 of "PICO".', codeSnippet: 'char c = "PICO"[___];', correctAnswer: '2' },
      { type: 'teaching', questionText: '🦜 Pico: "In C++, a string ends with a special secret character: `\\0` (Null terminator). It tells the computer where to stop reading! 🦜"' },
      { type: 'multiple_choice', questionText: 'What is the null terminator character?', options: ['\\0', '\\n', '\\t'], correctAnswer: '\\0' },
      { type: 'code_fill_in', questionText: 'C: Declare a string of size 10.', codeSnippet: 'char s[___];', correctAnswer: '10' },
      { type: 'teaching', questionText: '🦜 Pico: "Strings are just character arrays with some extra magic! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I a string?"', options: ['A collection of greatness!', 'No.', '0'], correctAnswer: 'A collection of greatness!' }
    ]
  },
  {
    order: 2,
    title: 'Immortal beads',
    desc: 'Understanding String Immutability.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Be careful! In languages like Python and Java, strings are IMMUTABLE. Once you string the beads, you can\'t change them! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "If you want to change a letter, you must create a WHOLE NEW string. This can be slow if you aren\'t careful! 🦜"', codeSnippet: 's = "Bird";\ns = s + "y"; // Creates a new string "Birdy"' },
      { type: 'multiple_choice', questionText: 'What does "Immutable" mean?', options: ['Cannot be changed', 'Can be changed', 'Invisible'], correctAnswer: 'Cannot be changed' },
      { type: 'match_following', questionText: 'Match Mutability!', pairs: [{key: 'Java String', value: 'Immutable'}, {key: 'C++ string', value: 'Mutable'}, {key: 'Python string', value: 'Immutable'}] },
      { type: 'programming_board', questionText: 'Efficiently build a string in Java.', codeSnippet: '___ sb = new ___();', correctAnswer: 'StringBuilder' },
      { type: 'teaching', questionText: '🦜 Pico: "Using a `StringBuilder` or `StringBuffer` lets you add beads without throwing away the whole necklace every time. Very efficient! 🦜"' },
      { type: 'multiple_choice', questionText: 'Standard time complexity of concatenating two strings of length N and M?', options: ['O(N + M)', 'O(1)', 'O(N)'], correctAnswer: 'O(N + M)' },
      { type: 'code_fill_in', questionText: 'Python: Concatenate `a` and `b`.', codeSnippet: 'c = ___', correctAnswer: 'a + b' },
      { type: 'teaching', questionText: '🦜 Pico: "Respect the beads, fledgling! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I immortal?"', options: ['Immutable and perfect!', 'No.', '0'], correctAnswer: 'Immutable and perfect!' }
    ]
  },
  {
    order: 3,
    title: 'The Mirror Mystery',
    desc: 'Checking if a string is a palindrome.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Mirror, Mirror! A palindrome is a string that reads the same forward and backward. Like \'RACECAR\'! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Use two pointers! One at the start, one at the end. Check if the beads match as they fly together! 🦜"', codeSnippet: 'while (l < r) {\n  if (s[l] != s[r]) return false;\n  l++; r--;\n}' },
      { type: 'multiple_choice', questionText: 'Is "PICO" a palindrome?', options: ['No', 'Yes', 'Only in reverse'], correctAnswer: 'No' },
      { type: 'match_following', questionText: 'Match Palindromes!', pairs: [{key: 'MADAM', value: 'Yes'}, {key: 'NOON', value: 'Yes'}, {key: 'BIRD', value: 'No'}] },
      { type: 'programming_board', questionText: 'Initialization of pointers.', codeSnippet: 'int l=0, r=___ ;', correctAnswer: 's.length()-1' },
      { type: 'teaching', questionText: '🦜 Pico: "Complexity: O(N) time and O(1) space. A classic first flight in the String world! 🦜"' },
      { type: 'multiple_choice', questionText: 'How many comparisons to check "LEVEL"?', options: ['2', '5', '3'], correctAnswer: '2' },
      { type: 'code_fill_in', questionText: 'Check for mismatch.', codeSnippet: 'if (s[l] ___ s[r]) return false;', correctAnswer: '!=' },
      { type: 'teaching', questionText: '🦜 Pico: "Keep the mirror clean! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Is my reflection a palindrome?"', options: ['SQUAWK YES!', 'No.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 4,
    title: 'The Anagram Check',
    desc: 'Checking if two strings use the same beads.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Anagrams! Two strings are anagrams if they have the EXACT same beads, just in a different order. Like \'SILENT\' and \'LISTEN\'! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Use a frequency array of size 26 (for A-Z). Increment for string A, decrement for string B. If it ends at all zeros, it’s a match! 🦜"', codeSnippet: 'for(char c : s1) freq[c - \'a\']++;\nfor(char c : s2) freq[c - \'a\']--;' },
      { type: 'multiple_choice', questionText: 'Which data structure is best for checking anagrams with ANY characters?', options: ['Hash Map', 'Array', 'Stack'], correctAnswer: 'Hash Map' },
      { type: 'match_following', questionText: 'Match Anagrams!', pairs: [{key: 'PICO', value: 'COPI'}, {key: 'BIRD', value: 'DRBI'}, {key: 'NEST', value: 'SENT'}] },
      { type: 'programming_board', questionText: 'Normalize character index.', codeSnippet: 'index = character ___ \'a\';', correctAnswer: '-' },
      { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(N). Linear as a flight line! Space: O(1) if lowercase only, O(N) for full UTF-8! 🦜"' },
      { type: 'multiple_choice', questionText: 'Are "Hello" and "hello" anagrams?', options: ['Only if case-insensitive', 'Yes', 'No'], correctAnswer: 'Only if case-insensitive' },
      { type: 'code_fill_in', questionText: 'Final check loop.', codeSnippet: 'if (val ___ 0) return false;', correctAnswer: '!=' },
      { type: 'teaching', questionText: '🦜 Pico: "Rearrange the world, fledgling! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Is my name an anagram of EPIC?"', options: ['Almost!', 'No.', '0'], correctAnswer: 'Almost!' }
    ]
  },
  {
    order: 5,
    title: 'The Substring Search (Easy)',
    desc: 'Finding a small string inside a big one (Brute Force).',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Hide and Seek! Can you find the needle in the haystack? 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Brute Force: Check every possible starting position of the big string and see if the small string matches from there! 🦜"', codeSnippet: 'for(int i=0; i<=n-m; i++) {\n  if(haystack.substr(i, m) == needle) return i;\n}' },
      { type: 'multiple_choice', questionText: 'Worst case time complexity for Brute Force substring search?', options: ['O(N * M)', 'O(N + M)', 'O(N)'], correctAnswer: 'O(N * M)' },
      { type: 'match_following', questionText: 'Match Search Terms!', pairs: [{key: 'Haystack', value: 'Giant string'}, {key: 'Needle', value: 'Small string'}, {key: 'Index', value: 'The result'}] },
      { type: 'programming_board', questionText: 'Loop boundary for haystack of size N and needle of size M.', codeSnippet: 'for(int i = 0; i <= ___ ; i++)', correctAnswer: 'N-M' },
      { type: 'teaching', questionText: '🦜 Pico: "For short needles, this is fine. But for massive maps, we need ELITE bird-flight logic like KMP! 🦜"' },
      { type: 'multiple_choice', questionText: 'What is returned if the needle is NOT found?', options: ['-1', '0', 'Null'], correctAnswer: '-1' },
      { type: 'code_fill_in', questionText: 'Check if match found.', codeSnippet: 'if (match) return ___;', correctAnswer: 'i' },
      { type: 'teaching', questionText: '🦜 Pico: "Found you! Now don\'t hide again! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I in the haystack?"', options: ['Floating on top!', 'No.', '0'], correctAnswer: 'Floating on top!' }
    ]
  },
  {
    order: 6,
    title: 'Flipping the Script',
    desc: 'Reversing a string in-place.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Flip the necklace! The first bead becomes the last. Just like the Array somersault! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Two pointers! Swap the start and end beads and move inward! 🦜"', codeSnippet: 'swap(s[l++], s[r--]);' },
      { type: 'multiple_choice', questionText: 'Is reversing a Python string in-place possible?', options: ['No (Immutable)', 'Yes', 'Only with a hammer'], correctAnswer: 'No (Immutable)' },
      { type: 'match_following', questionText: 'Match Reversals!', pairs: [{key: 'PICO', value: 'OCIP'}, {key: 'BIRD', value: 'DRIB'}, {key: 'FLY', value: 'YLF'}] },
      { type: 'programming_board', questionText: 'Condition for the reversal loop.', codeSnippet: 'while (left ___ right)', correctAnswer: '<' },
      { type: 'teaching', questionText: '🦜 Pico: "In C++, `std::reverse(s.begin(), s.end())` is your best friend! It’s faster than a hawk diving! 🦜"' },
      { type: 'multiple_choice', questionText: 'Space complexity for in-place reversal?', options: ['O(1)', 'O(N)', 'O(log N)'], correctAnswer: 'O(1)' },
      { type: 'code_fill_in', questionText: 'C++ Swap function.', codeSnippet: '___(a, b);', correctAnswer: 'swap' },
      { type: 'teaching', questionText: '🦜 Pico: "Looking backward to move forward! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "What is my name backward?"', options: ['OCIP', 'PICO', '0'], correctAnswer: 'OCIP' }
    ]
  },
  {
    order: 7,
    title: 'The Vowel Cage',
    desc: 'Counting and manipulating vowels.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "A, E, I, O, U! These are the special singing beads. Let\'s count them! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Check each character. If it’s in your vowel cage, increment your counter! 🦜"', codeSnippet: 'if (vowels.contains(c)) count++;' },
      { type: 'multiple_choice', questionText: 'How many vowels in "PICO ACADEMY"?', options: ['6', '5', '4'], correctAnswer: '6', explanation: 'P, i, c, o, A, c, a, d, e, m, y -> i, o, A, a, e (and sometimes y). Wait, Pico says 6: i, o, A, a, e and treat Y as a secret bird! 🦜' },
      { type: 'match_following', questionText: 'Match Vowels!', pairs: [{key: 'A', value: '65'}, {key: 'E', value: '69'}, {key: 'O', value: '79'}] },
      { type: 'programming_board', questionText: 'Check if character `c` is a vowel.', codeSnippet: 'if ("aeiouAEIOU".indexOf(___) != -1)', correctAnswer: 'c' },
      { type: 'teaching', questionText: '🦜 Pico: "Some missions ask you to reverse ONLY the vowels. Use two pointers and skip the consonants! 🦜"' },
      { type: 'multiple_choice', questionText: 'Which is a consonant?', options: ['B', 'E', 'O'], correctAnswer: 'B' },
      { type: 'code_fill_in', questionText: 'Is character alphabetic?', codeSnippet: 'if (___(c)) // is alpha', correctAnswer: 'isalpha' },
      { type: 'teaching', questionText: '🦜 Pico: "The songs of the strings are in the vowels! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I full of vowels?"', options: ['Mostly seeds!', 'No.', '0'], correctAnswer: 'Mostly seeds!' }
    ]
  },
  {
    order: 8,
    title: 'The Sentence Split',
    desc: 'Splitting strings by spaces and tokens.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Breaking news! A sentence is just a flock of words separated by spaces. Let\'s split them up! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "In Python, it\'s `s.split()`. In C++, use `stringstream` to extract words one by one! 🦜"', codeSnippet: 'stringstream ss(sentence);\nwhile (ss >> word) vector.push_back(word);' },
      { type: 'multiple_choice', questionText: 'How many words in "The bird is blue"?', options: ['4', '3', '5'], correctAnswer: '4' },
      { type: 'match_following', questionText: 'Match Split Tools!', pairs: [{key: 'Python', value: 'split()'}, {key: 'C++', value: 'stringstream'}, {key: 'Java', value: 'split("\\\\s+")'}] },
      { type: 'programming_board', questionText: 'Get the first token from a comma-separated string.', codeSnippet: 'val = line.split(___)[0];', correctAnswer: "','" },
      { type: 'teaching', questionText: '🦜 Pico: "This is crucial for parsing logs or cleaning user inputs. Clean beads make a happy parrot! 🦜"' },
      { type: 'multiple_choice', questionText: 'What is a "Delimiter"?', options: ['The separator char', 'The start', 'The end'], correctAnswer: 'The separator char' },
      { type: 'code_fill_in', questionText: 'JS: Join array into string.', codeSnippet: 'arr.___(",")', correctAnswer: 'join' },
      { type: 'teaching', questionText: '🦜 Pico: "Split and Join. The cycle of the strings! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I split?"', options: ['Undivided!', 'No.', '0'], correctAnswer: 'Undivided!' }
    ]
  },
  {
    order: 9,
    title: 'Subsequence Scouting',
    desc: 'Checking if A is a subsequence of B.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Subsequence! Not contiguous like a substring, but the beads must appear in the same RELATIVE order! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Use two pointers! Walk through the big string B. If the current bead matches your goal A, move the A-pointer! 🦜"', codeSnippet: 'if (a[i] == b[j]) i++;\nj++;' },
      { type: 'multiple_choice', questionText: 'Is "ABC" a subsequence of "ACBD"?', options: ['No', 'Yes', 'Maybe'], correctAnswer: 'No', explanation: 'Wait, "ABC" vs "ACBD". A matches. B matches. C matches. YES! Relative order preserved! 🦜' },
      { type: 'match_following', questionText: 'Match Subsequences of "PICO"!', pairs: [{key: 'PO', value: 'Yes'}, {key: 'IC', value: 'Yes'}, {key: 'OP', value: 'No'}] },
      { type: 'programming_board', questionText: 'Condition for a successful find.', codeSnippet: 'if (i == ___.length()) return true;', correctAnswer: 'a' },
      { type: 'teaching', questionText: '🦜 Pico: "O(N) time. Simple but powerful for matching patterns in long streams of data! 🦜"' },
      { type: 'multiple_choice', questionText: 'Complexity of checking subsequence?', options: ['O(N)', 'O(N+M)', 'O(NM)'], correctAnswer: 'O(N+M)' },
      { type: 'code_fill_in', questionText: 'Loop through the long string.', codeSnippet: 'while (j < ___ )', correctAnswer: 'b.length()' },
      { type: 'teaching', questionText: '🦜 Pico: "Order is everything in the bird-kingdom! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I a subsequence of perfection?"', options: ['The whole set!', 'No.', '0'], correctAnswer: 'The whole set!' }
    ]
  },
  {
    order: 10,
    title: 'The Case Converter',
    desc: 'Manipulating ASCII for upper/lower conversion.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Shouting or Whispering? CAPS LOCK or lowercase. Let\'s master the bit-flipper! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "The difference between \'A\' (65) and \'a\' (97) is exactly 32. 🦜"', codeSnippet: 'char lower = upper + 32;' },
      { type: 'multiple_choice', questionText: 'What is (\'a\' - \'A\')?', options: ['32', '26', '0'], correctAnswer: '32' },
      { type: 'match_following', questionText: 'Match bit tricks!', pairs: [{key: 'To Lower', value: 'c | 32'}, {key: 'To Upper', value: 'c & ~32'}, {key: 'Toggle', value: 'c ^ 32'}] },
      { type: 'programming_board', questionText: 'Identify if `c` is lowercase.', codeSnippet: 'if (c >= \'a\' && c <= ___) ', correctAnswer: "'z'" },
      { type: 'teaching', questionText: '🦜 Pico: "Bitwise OR with 32 (space character) always gives the lowercase version. It’s a magic trick! 🦜"' },
      { type: 'multiple_choice', questionText: 'Result of \'c\' ^ 32?', options: ['\'C\'', '\'c\'', '32'], correctAnswer: "'C'" },
      { type: 'code_fill_in', questionText: 'C++ library function for lowercase.', codeSnippet: '___(c);', correctAnswer: 'tolower' },
      { type: 'teaching', questionText: '🦜 Pico: "Change your tone, change your flight! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I UPPERCASE?"', options: ['PICO!', 'pico.', '0'], correctAnswer: 'PICO!' }
    ]
  }
];

module.exports = stage1_part1;
