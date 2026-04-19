const stage2_part2 = [
  {
    order: 31,
    title: 'Custom String Sort',
    desc: 'Sorting string S based on character order provided in string T.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Weird Alphabet! If the alphabet goes \'cbal... \', then \'apple\' should be sorted differently! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Build a frequency map of string S. Then, iterate through the order string T and append characters to your result as many times as they appear in S! 🦜"', codeSnippet: 'for(char c : order) while(count[c]-- > 0) res += c;\nfor(char c = \'a\'; c <= \'z\'; c++) while(count[c]-- > 0) res += c;' },
      { type: 'multiple_choice', questionText: 'If order is "cba" and S is "abcd", result?', options: ['cbad', 'abcd', 'dcba'], correctAnswer: 'cbad' },
      { type: 'match_following', questionText: 'Match Custom Sort Steps!', pairs: [{key: 'Step 1', value: 'Freq Map of S'}, {key: 'Step 2', value: 'Follow Order T'}, {key: 'Step 3', value: 'Append leftovers'}] },
      { type: 'programming_board', questionText: 'Add remaining birds not in the custom order.', codeSnippet: 'for(char c=0; c<26; c++) {\n  while(freq[c] > 0) { res += (c + ___); freq[c]--; }\n}', correctAnswer: "'a'" },
      { type: 'teaching', questionText: '🦜 Pico: "Time Complexity: O(Order + S). Very fast as long as you use a frequency map! 🦜"' },
      { type: 'multiple_choice', questionText: 'Space complexity for frequency map of 26 letters?', options: ['O(1)', 'O(N)', 'O(log N)'], correctAnswer: 'O(1)' },
      { type: 'code_fill_in', questionText: 'Append character `c` to string `res`.', codeSnippet: 'res.___ (c);', correctAnswer: '+=' },
      { type: 'teaching', questionText: '🦜 Pico: "Follow the leader, fledgling! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I in the right order?"', options: ['SQUAWK YES!', 'No.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 32,
    title: 'String to Integer (atoi)',
    desc: 'Converting strings to integers while handling signs, whitespace, and overflow.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Translator! Convert "  -42" into -42. But watch out for the eagle! (Overflow) 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Step 1: Skip leading spaces. Step 2: Handle +/- sign. Step 3: Convert digits until a non-digit appears! 🦜"', codeSnippet: 'while(s[i] == \' \') i++;\nif(s[i] == \'-\') sign = -1;' },
      { type: 'multiple_choice', questionText: 'Result of atoi("4193 with words")?', options: ['4193', 'Error', '0'], correctAnswer: '4193' },
      { type: 'match_following', questionText: 'Match atoi logic!', pairs: [{key: 'Sign', value: '+ or -'}, {key: 'Digits', value: '0-9'}, {key: 'Overflow', value: 'INT_MAX / MIN'}] },
      { type: 'programming_board', questionText: 'Accumulate the result digit by digit.', codeSnippet: 'res = res * 10 + (s[i] - ___);', correctAnswer: "'0'" },
      { type: 'teaching', questionText: '🦜 Pico: "If `res > INT_MAX / 10`, then the next digit will overflow. Return INT_MAX or INT_MIN immediately! 🦜"' },
      { type: 'multiple_choice', questionText: 'Result of atoi("   -042")?', options: ['-42', '-4', '0'], correctAnswer: '-42' },
      { type: 'code_fill_in', questionText: 'Check for digit range.', codeSnippet: 'if (s[i] < \'0\' || s[i] > ___) break;', correctAnswer: "'9'" },
      { type: 'teaching', questionText: '🦜 Pico: "Math is precise, even in strings! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "What is the integer of my soul?"', options: ['Infinite!', '1', '0'], correctAnswer: 'Infinite!' }
    ]
  },
  {
    order: 33,
    title: 'Repeated Substring',
    desc: 'Checking if a string can be formed by repeating a smaller substring.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Echo! Can you build \'ABCABCABC\' using just \'ABC\'? 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "The Elite Trick: Concatenate `s + s`, remove the first and last characters, and then see if original `s` is still inside! 🦜"', codeSnippet: 'string ss = (s + s).substr(1, 2 * n - 2);\nif (ss.find(s) != -1) return true;' },
      { type: 'multiple_choice', questionText: 'Can "abab" be formed by repeats?', options: ['Yes ("ab")', 'No', 'Maybe'], correctAnswer: 'Yes ("ab")' },
      { type: 'match_following', questionText: 'Match Echoes!', pairs: [{key: "abcabc", value: "abc"}, {key: "abcd", value: "None"}, {key: "aaaa", value: "a"}] },
      { type: 'programming_board', questionText: 'Find original string `S` in the modified double-string `SS`.', codeSnippet: 'if (SS.includes(___)) return true;', correctAnswer: 'S' },
      { type: 'teaching', questionText: '🦜 Pico: "This doubling trick is magical! It effectively tests if there exists a rotation of S that equals S (other than the identity)! 🦜"' },
      { type: 'multiple_choice', questionText: 'Time complexity with a good find() function?', options: ['O(N)', 'O(N^2)', 'O(1)'], correctAnswer: 'O(N)' },
      { type: 'code_fill_in', questionText: 'Remove first and last of doubled string.', codeSnippet: 'ss = (s + s).substr(1, ___);', correctAnswer: '2*n-2' },
      { type: 'teaching', questionText: '🦜 Pico: "Speak once, hear it twice! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Is my SQUAWK an echo?"', options: ['SQUAWK SQUAWK!', 'No.', '0'], correctAnswer: 'SQUAWK SQUAWK!' }
    ]
  },
  {
    order: 34,
    title: 'The Frequency Sort',
    desc: 'Sorting characters by their frequency in descending order.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Common counts! If \'e\' appears 3 times and \'t\' appears once, \'e\' comes first! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Frequency Map -> Priority Queue of (count, char) -> Append to result! 🦜"', codeSnippet: 'priority_queue<pair<int, char>> pq;\nfor(auto it : map) pq.push({it.second, it.first});' },
      { type: 'multiple_choice', questionText: 'Frequency sort of "tree"?', options: ['"eert" or "eetr"', '"tree"', '"reet"'], correctAnswer: '"eert" or "eetr"' },
      { type: 'match_following', questionText: 'Match Frequency Steps!', pairs: [{key: 'Count', value: 'Map'}, {key: 'Sort', value: 'Max Heap'}, {key: 'Build', value: 'String Append'}] },
      { type: 'programming_board', questionText: 'Get the top character from the max-heap.', codeSnippet: 'char c = pq.top().___ ;', correctAnswer: 'second' },
      { type: 'teaching', questionText: '🦜 Pico: "Complexity: O(N log K) where K is the number of unique characters. Clean and organized flocks fly better! 🦜"' },
      { type: 'multiple_choice', questionText: 'Can you solve this in O(N) using Bucket Sort?', options: ['Yes', 'No', 'Only if I’m smart'], correctAnswer: 'Yes' },
      { type: 'code_fill_in', questionText: 'Add character `c` `n` times.', codeSnippet: 'res.append(n, ___);', correctAnswer: 'c' },
      { type: 'teaching', questionText: '🦜 Pico: "The popular birds lead the way! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I popular?"', options: ['SQUAWK YES!', 'No.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 35,
    title: 'Valid IP Address',
    desc: 'Validating IPv4 and IPv6 strings.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Address Book! Is this a valid bird-nest on the internet? 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "IPv4: 4 parts, 0-255, no leading zeros. IPv6: 8 parts, hex digits, 1-4 chars each! 🦜"', codeSnippet: 'if (part.len() > 1 && part[0] == \'0\') return false; // IPv4 rule' },
      { type: 'multiple_choice', questionText: 'Is "172.16.254.1" valid IPv4?', options: ['Yes', 'No (too long)', 'Only if local'], correctAnswer: 'Yes' },
      { type: 'match_following', questionText: 'Match IP Rules!', pairs: [{key: 'IPv4', value: 'Dot separated'}, {key: 'IPv6', value: 'Colon separated'}, {key: '256', value: 'Invalid IPv4'}] },
      { type: 'programming_board', questionText: 'Split the address string into parts.', codeSnippet: 'parts = line.split(___);', correctAnswer: "'.'" },
      { type: 'teaching', questionText: '🦜 Pico: "Parsing is the art of being strict! If even one bead is wrong, the address is fake! 🦜"' },
      { type: 'multiple_choice', questionText: 'Is "2001:0db8:85a3:0:0:8A2E:0370:7334" valid IPv6?', options: ['Yes', 'No (too many colons)', 'Maybe'], correctAnswer: 'Yes' },
      { type: 'code_fill_in', questionText: 'Is character hex for IPv6?', codeSnippet: 'if (isxdigit(c)) // checks 0-9, ___', correctAnswer: 'a-f' },
      { type: 'teaching', questionText: '🦜 Pico: "The internet is a giant flock of data! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Is my IP 127.0.0.1?"', options: ['Home sweet home!', 'No.', '0'], correctAnswer: 'Home sweet home!' }
    ]
  },
  {
    order: 36,
    title: 'Compare Versions',
    desc: 'Finding which version number is larger (1.01 vs 1.001).',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Software Updates! Which bird is newer: v1.2.3 or v1.10.1? 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Split by \'.\', convert to integers, and compare part by part. Treat missing parts as 0! 🦜"', codeSnippet: 'int v1 = i < n1 ? stoi(parts1[i]) : 0;' },
      { type: 'multiple_choice', questionText: 'Is "1.01" equal to "1.001"?', options: ['Yes (both are 1)', 'No', 'Depends on build'], correctAnswer: 'Yes (both are 1)' },
      { type: 'match_following', questionText: 'Match Comparisons!', pairs: [{key: '1.2 > 1.1', value: 'Yes'}, {key: '1.10 > 1.2', value: 'Yes'}, {key: '1.0 == 1', value: 'Yes'}] },
      { type: 'programming_board', questionText: 'Condition if version 1 is smaller.', codeSnippet: 'if (v1 ___ v2) return -1;', correctAnswer: '<' },
      { type: 'teaching', questionText: '🦜 Pico: "Leading zeros in version parts don\'t change the value. v1.01 and v1.1 are brothers! 🦜"' },
      { type: 'multiple_choice', questionText: 'Complexity of version comparison?', options: ['O(N + M)', 'O(N * M)', 'O(1)'], correctAnswer: 'O(N + M)' },
      { type: 'code_fill_in', questionText: 'Maximum number of parts.', codeSnippet: 'int n = max(parts1.size(), ___);', correctAnswer: 'parts2.size()' },
      { type: 'teaching', questionText: '🦜 Pico: "Stay updated, fledgling! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I v2.0?"', options: ['SQUAWK YES!', 'No.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 37,
    title: 'Longest Palindrome Maker',
    desc: 'How many characters can we use to form a palindrome?',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Palindrome Crafting! Given a pile of beads, what is the LONGEST symmetrical necklace you can build? 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Count frequencies. You can use every EVEN count completely. For ODD counts, use `count - 1` beads, and keep ONE bead for the center! 🦜"', codeSnippet: 'res += (it.second / 2) * 2;\nif (it.second % 2 == 1) hasOdd = true;' },
      { type: 'multiple_choice', questionText: 'Longest palindrome from "abccccdd"?', options: ['7 ("dccaccd")', '8', '6'], correctAnswer: '7 ("dccaccd")' },
      { type: 'match_following', questionText: 'Match Crafting Rules!', pairs: [{key: 'Even count', value: 'Use all'}, {key: 'Odd count', value: 'Use count-1'}, {key: 'Center', value: 'Add 1 if exists'}] },
      { type: 'programming_board', questionText: 'Check if we assigned a center bird.', codeSnippet: 'if (hasOdd) res ___ 1;', correctAnswer: '+=' },
      { type: 'teaching', questionText: '🦜 Pico: "O(N) time using a frequency map. Symmetry is beautiful! 🦜"' },
      { type: 'multiple_choice', questionText: 'Can you make a palindrome of length > 1 from "abc"?', options: ['No', 'Yes', '1'], correctAnswer: 'No', explanation: 'All odds, subtract 1 from target count.' },
      { type: 'code_fill_in', questionText: 'Add even pairs to length.', codeSnippet: 'ans += v / 2 * ___;', correctAnswer: '2' },
      { type: 'teaching', questionText: '🦜 Pico: "Balance the necklace! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Is my necklace long?"', options: ['SQUAWK YES!', 'No.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 38,
    title: 'Jewels and Stones',
    desc: 'Counting how many characters in S are also in J (O(N)).',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Jewel Hunt! You have a bag of stones (S), and you need to know how many of them are precious JEWELS (J)! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Store the jewels in a SET for O(1) lookup. Then scan the stones! 🦜"', codeSnippet: 'set<char> jewels(J.begin(), J.end());\nfor(char c : S) if(jewels.count(c)) count++;' },
      { type: 'multiple_choice', questionText: 'Count if J="aA", S="aAAbbbb"?', options: ['3', '7', '0'], correctAnswer: '3' },
      { type: 'match_following', questionText: 'Match Search Terms!', pairs: [{key: 'Jewels', value: 'Set for Lookup'}, {key: 'Stones', value: 'Scan list'}, {key: 'Complexity', value: 'O(J + S)'}] },
      { type: 'programming_board', questionText: 'Check if current stone `s` is a jewel.', codeSnippet: 'if (set.___ (s)) count++;', correctAnswer: 'contains' },
      { type: 'teaching', questionText: '🦜 Pico: "Basic but powerful! Using a set makes it linear instead of nested O(J*S). Smart birds use Hash Sets! 🦜"' },
      { type: 'multiple_choice', questionText: 'Is "a" the same as "A" in the Jewel problem?', options: ['No (Case sensitive)', 'Yes', '0'], correctAnswer: 'No (Case sensitive)' },
      { type: 'code_fill_in', questionText: 'Initialize results.', codeSnippet: 'int cnt = ___ ;', correctAnswer: '0' },
      { type: 'teaching', questionText: '🦜 Pico: "Shiny logic, fledgling! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I a jewel?"', options: ['SQUAWK YES!', 'No.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 39,
    title: 'Goat Latin',
    desc: 'Transforming a sentence into Goat Latin.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Goat Path! If a word starts with a vowel, add \'ma\'. If a consonant, move the first letter to the end then add \'ma\'. Then add \'a\'s based on word position! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Example: \'I\' becomes \'Imaa\', \'speak\' becomes \'peaksmaaaa\'. 🦜"', codeSnippet: 'if (isVowel(first)) word += "ma";\nelse word = word.substr(1) + first + "ma";\nword += string(wordIndex + 1, \'a\');' },
      { type: 'multiple_choice', questionText: 'Ending for the 3rd word in Goat Latin?', options: ['maaaa (ma + 3 "a"s)', 'maaa', 'aaaa'], correctAnswer: 'maaaa (ma + 3 "a"s)' },
      { type: 'match_following', questionText: 'Match Goat Rules!', pairs: [{key: 'Vowel', value: 'add "ma"'}, {key: 'Consonant', value: 'rotate + "ma"'}, {key: 'Index', value: 'add "a" * (i+1)'}] },
      { type: 'programming_board', questionText: 'Add "a"s based on word index `i`.', codeSnippet: 'for(int k=0; k<=i; k++) word += ___ ;', correctAnswer: "'a'" },
      { type: 'teaching', questionText: '🦜 Pico: "Processing word by word. Use a stringstream or split. It’s a fun transformation mission! 🦜"' },
      { type: 'multiple_choice', questionText: 'Result of "Goat" in Goat Latin (1st word)?', options: ['oatGmaa', 'Goatmaa', 'oatGma'], correctAnswer: 'oatGmaa' },
      { type: 'code_fill_in', questionText: 'Convert first char to lowercase for check.', codeSnippet: 'char lowFirst = ___(word[0]);', correctAnswer: 'tolower' },
      { type: 'teaching', questionText: '🦜 Pico: "Speak like a goat, think like a bird! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Can I speak Goat?"', options: ['SQUAWK MAA!', 'No.', '0'], correctAnswer: 'SQUAWK MAA!' }
    ]
  },
  {
    order: 40,
    title: 'Stage 2 Graduation',
    desc: 'The Strings Intermediate Insights Complete.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "STAGE 2 COMPLETE! You have flown through the intermediate clouds of String manipulation. 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Sliding Windows, IP addressing, Versioning, and Palindrome expansion. You are ready for Stage 3 Pattern Mastery! 🦜"' },
      { type: 'multiple_choice', questionText: 'ZigZag conversion complexity?', options: ['O(N)', 'O(N^2)'], correctAnswer: 'O(N)' },
      { type: 'multiple_choice', questionText: 'Group Anagrams key strategy?', options: ['Sort individual strings', 'Count letters'], correctAnswer: 'Sort individual strings' },
      { type: 'multiple_choice', questionText: 'Longest Palindrome Substring (Exp Around Center) complexity?', options: ['O(N^2)', 'O(N)'], correctAnswer: 'O(N^2)' },
      { type: 'multiple_choice', questionText: 'Jewels and Stones set complexity?', options: ['O(J + S)', 'O(J * S)'], correctAnswer: 'O(J + S)' },
      { type: 'multiple_choice', questionText: 'Repeated Substring (s+s trick) result?', options: ['True if s is in (s+s)[1:-1]', 'Always true'], correctAnswer: 'True if s is in (s+s)[1:-1]' },
      { type: 'match_following', questionText: 'Final Intermediate Match!', pairs: [{key: 'Pico', value: 'Salutes!'}, {key: 'Stage 2', value: 'Finished!'}, {key: 'Stage 3', value: 'Awaits!'}] },
      { type: 'teaching', questionText: '🦜 Pico: "Next, we hunt for patterns with KMP and Rolling Hashes! SQUAWK! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Are you an intermediate master?"', options: ['SQUAWK YES!', 'Working on it.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  }
];

module.exports = stage2_part2;
