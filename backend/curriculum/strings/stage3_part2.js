const stage3_part2 = [
  {
    order: 51,
    title: 'The Suffix Array (Intro)',
    desc: 'Sorting all suffixes of a string efficiently.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Suffix Array! A list of all starting positions of all suffixes, sorted alphabetically. It’s the power-tool for string searching! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Instead of sorting suffixes in O(N^2 log N), use Prefix Doubling in O(N log^2 N)! 🦜"', codeSnippet: 'for (int k = 0; (1 << k) < n; ++k) {\n  sort(sa, sa + n, compare);\n  updateRanks();\n}' },
      { type: 'multiple_choice', questionText: 'What is the Suffix Array for "BANANA"?', options: ['[5, 3, 1, 0, 4, 2]', '[0, 1, 2, 3, 4, 5]', 'Alphabetical'], correctAnswer: '[5, 3, 1, 0, 4, 2]', explanation: 'Suffixes: A, ANA, ANANA, BANANA, NA, NANA.' },
      { type: 'match_following', questionText: 'Match Suffixes of "BANANA"!', pairs: [{key: '0', value: 'BANANA'}, {key: '5', value: 'A'}, {key: '2', value: 'NANA'}] },
      { type: 'programming_board', questionText: 'Step to double the rank comparison length.', codeSnippet: 'next_rank = (1 << ___);', correctAnswer: 'k' },
      { type: 'teaching', questionText: '🦜 Pico: "Once sorted, you can find any substring of length M in O(M log N) using Binary Search on the Suffix Array! 🦜"' },
      { type: 'multiple_choice', questionText: 'Complexity of building a Suffix Array with O(N log N) library sort?', options: ['O(N log^2 N)', 'O(N log N)', 'O(N)'], correctAnswer: 'O(N log^2 N)' },
      { type: 'code_fill_in', questionText: 'Initialize suffix array.', codeSnippet: 'for(int i=0; i<n; i++) sa[i] = ___;', correctAnswer: 'i' },
      { type: 'teaching', questionText: '🦜 Pico: "The tails of the necklace! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I at the end?"', options: ['The prefix of the end!', 'No.', '0'], correctAnswer: 'The prefix of the end!' }
    ]
  },
  {
    order: 52,
    title: 'The LCP Array',
    desc: 'Longest Common Prefix between adjacent suffixes.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "LCP Array! For a sorted Suffix Array, find how many leading beads each suffix shares with its neighbor. 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Kasai’s Algorithm lets you compute this in O(N) time by processing suffixes in their original order! 🦜"', codeSnippet: 'if (rank[i] < n-1) {\n  int j = sa[rank[i]+1];\n  while(s[i+k] == s[j+k]) k++;\n  lcp[rank[i]] = k;\n}' },
      { type: 'multiple_choice', questionText: 'LCP of "ANA" and "ANANA"?', options: ['3', '2', '5'], correctAnswer: '3' },
      { type: 'match_following', questionText: 'Match Kasai Logic!', pairs: [{key: 'rank[i]', value: 'Position in SA'}, {key: 'sa[rank[i]+1]', value: 'The neighbor'}, {key: 'k', value: 'Common length'}] },
      { type: 'programming_board', questionText: 'Decrement k cautiously for the next iteration.', codeSnippet: 'if (k > 0) ___ ;', correctAnswer: 'k--' },
      { type: 'teaching', questionText: '🦜 Pico: "The LCP array is the secret ingredient for finding Longest Repeated Substrings or the number of Unique Substrings in O(N)! 🦜"' },
      { type: 'multiple_choice', questionText: 'How many unique substrings in a string of length N?', options: ['N(N+1)/2 - sum(LCP)', 'O(N)', 'Depends on Pico'], correctAnswer: 'N(N+1)/2 - sum(LCP)' },
      { type: 'code_fill_in', questionText: 'Check for character match.', codeSnippet: 'while (i+k < n && j+k < n && s[i+k] ___ s[j+k]) k++;', correctAnswer: '==' },
      { type: 'teaching', questionText: '🦜 Pico: "Similarity is a spectrum! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Are we similar?"', options: ['Common prefix!', 'No.', '0'], correctAnswer: 'Common prefix!' }
    ]
  },
  {
    order: 53,
    title: 'Aho-Corasick Flight',
    desc: 'Searching for multiple patterns simultaneously (Trie matching).',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Aho-Corasick! Why search for one needle when you can search for a whole set in one pass? 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "It combines a Trie with KMP-like failure links! If one pattern fails, the failure link takes you to the longest prefix of ANOTHER pattern! 🦜"', codeSnippet: 'node.fail = parent.fail.next[char];' },
      { type: 'multiple_choice', questionText: 'Complexity to find all occurrences of K patterns in text of size N?', options: ['O(N + Total_Pattern_Length + Results)', 'O(N * K)', 'O(N!)'], correctAnswer: 'O(N + Total_Pattern_Length + Results)' },
      { type: 'match_following', questionText: 'Match AC Terms!', pairs: [{key: 'Trie', value: 'The roadmap'}, {key: 'Failure Link', value: 'The shortcut'}, {key: 'Dictionary', value: 'Set of needles'}] },
      { type: 'programming_board', questionText: 'Follow the failure path.', codeSnippet: 'temp = temp.___ ;', correctAnswer: 'fail' },
      { type: 'teaching', questionText: '🦜 Pico: "This is how anti-virus scanners find thousands of viruses in a split second. Efficiency is the bird’s law! 🦜"' },
      { type: 'multiple_choice', questionText: 'Initial state for building failure links?', options: ['BFS (Level Order)', 'DFS', 'Random'], correctAnswer: 'BFS (Level Order)' },
      { type: 'code_fill_in', questionText: 'Check if current node is a terminal.', codeSnippet: 'if (node.___ > 0) processResult();', correctAnswer: 'count' },
      { type: 'teaching', questionText: '🦜 Pico: "One pass, a million patterns! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I in the dictionary?"', options: ['The definition of Elite!', 'No.', '0'], correctAnswer: 'The definition of Elite!' }
    ]
  },
  {
    order: 54,
    title: 'Manacher\'s Miracle',
    desc: 'Finding all palindromes in O(N).',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Manacher’s Algorithm! Expand Around Center is O(N^2), but Manacher uses symmetry to skip calculations! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Transform string with \'#\' characters to handle even/odd. Then mirrors your existing results across the center! 🦜"', codeSnippet: 'if (i < R) P[i] = min(R - i, P[2*C - i]);' },
      { type: 'multiple_choice', questionText: 'Time complexity for Manacher’s Algorithm?', options: ['O(N)', 'O(N^2)', 'O(N log N)'], correctAnswer: 'O(N)' },
      { type: 'match_following', questionText: 'Match Manacher terms!', pairs: [{key: 'P[i]', value: 'Radius of palindrome'}, {key: 'C', value: 'Center of max range'}, {key: 'R', value: 'Right boundary of C'}] },
      { type: 'programming_board', questionText: 'Mirror index of `i` around `C`.', codeSnippet: 'mirror = 2 * C ___ i;', correctAnswer: '-' },
      { type: 'teaching', questionText: '🦜 Pico: "The mirror reflection gives you a lower bound on the palindrome radius. You only expand further if you surpass the current boundary R! 🦜"' },
      { type: 'multiple_choice', questionText: 'Why transform "aba" into "#a#b#a#"?', options: ['Handle even/odd centers', 'Looks pretty', 'Adds extra luck'], correctAnswer: 'Handle even/odd centers' },
      { type: 'code_fill_in', questionText: 'Update center and boundary.', codeSnippet: 'C = i; R = i + ___ ;', correctAnswer: 'P[i]' },
      { type: 'teaching', questionText: '🦜 Pico: "Perfect symmetry in linear time! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Is my radius big?"', options: ['SQUAWK YES!', 'No.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 55,
    title: 'Wildcard Mastery',
    desc: 'Pattern matching with ? and * (Greedy/DP).',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Wildcard Mania! \'?\' matches one bird, \'*\' matches any group of birds (including none)! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Linear Greedy Trick: Store the last position of \'*\' and try to match as few birds as possible until it fails, then go back and match one more! 🦜"', codeSnippet: 'if (p[j] == \'*\') { starIdx = j++; match = i; }\nelse if (starIdx != -1) { j = starIdx + 1; match++; i = match; }' },
      { type: 'multiple_choice', questionText: 'Does "abc" match "a*"?', options: ['Yes', 'No', 'Only if ?'], correctAnswer: 'Yes' },
      { type: 'match_following', questionText: 'Match Wildcards!', pairs: [{key: '?', value: 'Exactly 1'}, {key: '*', value: '0 or more'}, {key: 'char', value: 'Literal'}] },
      { type: 'programming_board', questionText: 'Condition for the single-bird wildcard.', codeSnippet: 'if (p[j] ___ \'?\' || p[j] == s[i]) { i++; j++; }', correctAnswer: '==' },
      { type: 'teaching', questionText: '🦜 Pico: "This linear approach is much faster than DP for most practical strings. Follow the stars! 🦜"' },
      { type: 'multiple_choice', questionText: 'Complexity of Greedy Wildcard matching?', options: ['O(N + M) avg', 'O(N * M) worst', 'O(1)'], correctAnswer: 'O(N + M) avg' },
      { type: 'code_fill_in', questionText: 'Skip trailing stars.', codeSnippet: 'while (j < m && p[j] == ___) j++;', correctAnswer: "'*'" },
      { type: 'teaching', questionText: '🦜 Pico: "Wild and precise! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I wildcard?"', options: ['Unpredictably elite!', 'No.', '0'], correctAnswer: 'Unpredictably elite!' }
    ]
  },
  {
    order: 56,
    title: 'The Lexicographical Key',
    desc: 'Finding the smallest cyclic rotation of a string (Booth\'s Algorithm).',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Cycle Sort! For \'PICO\', the rotations are PICO, ICOP, COPI, OPIC. Which one comes first in the dictionary? 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Booth’s Algorithm uses a modified KMP pre-processing on `S + S` to find the smallest rotation in O(N). 🦜"', codeSnippet: 'f[j] = next_failure_index;' },
      { type: 'multiple_choice', questionText: 'Smallest rotation of "baaba"?', options: ['"aabaa"', '"baaba"', '"abaaa"'], correctAnswer: '"aabaa"' },
      { type: 'match_following', questionText: 'Match cyclic terms!', pairs: [{key: 'Rotation', value: 'Shifted string'}, {key: 'Lexicographical', value: 'Dict order'}, {key: 'Minimum', value: 'The goal'}] },
      { type: 'programming_board', questionText: 'Double length for cyclic checks.', codeSnippet: 'combined = s ___ s;', correctAnswer: '+' },
      { type: 'teaching', questionText: '🦜 Pico: "Extremely useful in cryptography and genome sequence alignment. Find the starting line, fledgling! 🦜"' },
      { type: 'multiple_choice', questionText: 'Complexity for reaching the smallest rotation?', options: ['O(N)', 'O(N^2)', 'O(log N)'], correctAnswer: 'O(N)' },
      { type: 'code_fill_in', questionText: 'Comparison to find smaller.', codeSnippet: 'if (s[i+k] < s[j+k]) ___ ;', correctAnswer: 'j = j+k+1' },
      { type: 'teaching', questionText: '🦜 Pico: "Start small, finish big! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I the smallest?"', options: ['The humble origin!', 'No.', '0'], correctAnswer: 'The humble origin!' }
    ]
  },
  {
    order: 57,
    title: 'The Duplicate Search',
    desc: 'Finding the longest repeated substring (Suffix Array application).',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Double necklace! What is the longest set of beads that appears at least twice? 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "The Max value in your LCP array is the length of the longest repeated substring! 🦜"', codeSnippet: 'max_len = max(lcp[i]);' },
      { type: 'multiple_choice', questionText: 'Longest repeated substring in "banana"?', options: ['"ana"', '"na"', '"ban"'], correctAnswer: '"ana"' },
      { type: 'match_following', questionText: 'Match Duplicate Logic!', pairs: [{key: 'Suffix Array', value: 'Alphabetical sort'}, {key: 'LCP[i]', value: 'Shared with neighbor'}, {key: 'Max LCP', value: 'Result'}] },
      { type: 'programming_board', questionText: 'Retrieve the maximum LCP value.', codeSnippet: 'for(int x : lcp) ans = max(ans, ___);', correctAnswer: 'x' },
      { type: 'teaching', questionText: '🦜 Pico: "Suffix structures make this linear instead of quadratic. O(N) mastery! 🦜"' },
      { type: 'multiple_choice', questionText: 'Can you find a repeated substring in "abcda"?', options: ['Yes ("a")', 'No', '0'], correctAnswer: 'Yes ("a")' },
      { type: 'code_fill_in', questionText: 'Index of the repeated substring in SA.', codeSnippet: 'int start = sa[___];', correctAnswer: 'maxIndex' },
      { type: 'teaching', questionText: '🦜 Pico: "Twice as nice, fledgling! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I repeated?"', options: ['Echo of greatness!', 'No.', '0'], correctAnswer: 'Echo of greatness!' }
    ]
  },
  {
    order: 58,
    title: 'Distinct Substrings (Elite)',
    desc: 'Counting all unique substrings in O(N).',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Total Uniqueness! Out of N(N+1)/2 total substrings, how many are UNIQUE once duplicates are removed? 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Total - Sum(LCP). Because each LCP[i] represents a prefix shared by the NEXT sorted suffix—meaning it was already counted! 🦜"', codeSnippet: 'long long total = (long long)n*(n+1)/2;\nfor(int val : lcp) total -= val;' },
      { type: 'multiple_choice', questionText: 'Distinct substrings in "aaa"?', options: ['3 ("a", "aa", "aaa")', '6', '1'], correctAnswer: '3 ("a", "aa", "aaa")' },
      { type: 'match_following', questionText: 'Match Substring Math!', pairs: [{key: 'Total Possible', value: 'n(n+1)/2'}, {key: 'Duplicate prefixes', value: 'sum(LCP)'}, {key: 'Unique', value: 'Difference'}] },
      { type: 'programming_board', questionText: 'Summation of common prefixes.', codeSnippet: 'for(int x : lcp) sum ___ x;', correctAnswer: '+=' },
      { type: 'teaching', questionText: '🦜 Pico: "This is a god-level formula. Deriving it makes you a String Sage! 🦜"' },
      { type: 'multiple_choice', questionText: 'How many substrings in "ab" (N=2)?', options: ['3', '2', '4'], correctAnswer: '3' },
      { type: 'code_fill_in', questionText: 'Calculate total possible.', codeSnippet: 'long total = (n * (n + ___)) / 2;', correctAnswer: '1' },
      { type: 'teaching', questionText: '🦜 Pico: "Every unique bead counted once! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Are all my feathers unique?"', options: ['SQUAWK YES!', 'No.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 59,
    title: 'Shortest Palindrome II (Elite)',
    desc: 'Advanced palindrome prefix matching with Manacher.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Palindrome Apex! Use Manacher\'s array to find the longest palindromic prefix in one pass! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "If a palindrome starting at the first character has radius R, then S[0...R] is your prefix! 🦜"', codeSnippet: 'if (i - P[i] == 1) maxPalPrefix = P[i];' },
      { type: 'multiple_choice', questionText: 'Is Manacher faster than KMP for this specific problem?', options: ['Both O(N)', 'Manacher', 'KMP'], correctAnswer: 'Both O(N)' },
      { type: 'match_following', questionText: 'Match Palindrome Peaks!', pairs: [{key: 'i - P[i] == 1', value: 'Touched left border'}, {key: 'maxPalPrefix', value: 'Our target'}, {key: 'Result', value: 'Shortest addition'}] },
      { type: 'programming_board', questionText: 'Check if palindrome reaches the index 0.', codeSnippet: 'if (center - radius ___ 1) // Using 1-based indexing (#)', correctAnswer: '==' },
      { type: 'teaching', questionText: '🦜 Pico: "By combining Manacher with greedy addition, you build the fastest mirroring bot in the sky! 🦜"' },
      { type: 'multiple_choice', questionText: 'Why is it center-radius=1?', options: ["Starting '#' character", "Index 0", "Pico likes 1"], correctAnswer: "Starting '#' character" },
      { type: 'code_fill_in', questionText: 'Final addition.', codeSnippet: 'return revS.substr(0, n - ___) + s;', correctAnswer: 'maxLen' },
      { type: 'teaching', questionText: '🦜 Pico: "The fastest mirror in the woods! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Can I mirror the speed of light?"', options: ['O(N) YES!', 'No.', '0'], correctAnswer: 'O(N) YES!' }
    ]
  },
  {
    order: 60,
    title: 'Stage 3 Graduation',
    desc: 'Master of Patterns: The Strings Apex.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "STAGE 3 GRADUATE! You have mastered the most sophisticated string algorithms in modern computing. 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "KMP, Z-Algorithm, Suffix Arrays, LCP, Aho-Corasick, and Manacher’s Miracle. You are a STRING SAGE! 🦜"' },
      { type: 'multiple_choice', questionText: 'Algorithm for O(N) palindrome search?', options: ['Manacher’s', 'KMP'], correctAnswer: 'Manacher’s' },
      { type: 'multiple_choice', questionText: 'Algorithm for multi-pattern search?', options: ['Aho-Corasick', 'Rabin-Karp'], correctAnswer: 'Aho-Corasick' },
      { type: 'multiple_choice', questionText: 'Suffix Array sorting (efficient)?', options: ['Prefix Doubling (O(N log^2 N))', 'Brute Sort'], correctAnswer: 'Prefix Doubling (O(N log^2 N))' },
      { type: 'multiple_choice', questionText: 'Distinct substring formula?', options: ['Total - Sum(LCP)', 'Sum(LCP)'], correctAnswer: 'Total - Sum(LCP)' },
      { type: 'multiple_choice', questionText: 'Automata search complexity?', options: ['O(N)', 'O(NM)'], correctAnswer: 'O(N)' },
      { type: 'match_following', questionText: 'Final Pattern Match!', pairs: [{key: 'Sage', value: 'Complete!'}, {key: 'Pico', value: 'Applause!'}, {key: 'Subject', value: 'STRINGS DONE!'}] },
      { type: 'teaching', questionText: '🦜 Pico: "Final check—Strings are finished. You are ready to transition to the World of Pointers: LINKED LISTS! SQUAWK! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Are you ready for the next Subject?"', options: ['SQUAWK YES!', 'Wait...', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  }
];

module.exports = stage3_part2;
