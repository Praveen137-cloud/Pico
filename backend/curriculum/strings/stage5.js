const stage5 = [
  {
    "order": 71,
    "title": "Unit 71: Manacher's Algorithm",
    "desc": "Finding all palindromic substrings in linear time.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 8.1] The Perfect Symmetry",
        "explanation": "Ace: 'Find every palindrome in a string. Standard check is O(N^2). Manacher's does it in O(N) by exploiting the same symmetry it searches for.' Pico: 'Seeing double in a single flight! 🦜'",
        "codeSnippet": "void manacher(string s) {\n  int n = s.size();\n  vector<int> d1(n); // odd\n  vector<int> d2(n); // even\n}",
        "encouragementText": "Ace: 'Symmetry is the memory of the mirror.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the time complexity of Manacher's Algorithm?",
        "options": ["O(N log N)", "O(N)", "O(N^2)", "Pico rule"],
        "correctAnswer": "O(N)",
        "explanation": "Like Z-algorithm, it uses an [L, R] boundary to avoid re-checking characters."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The String Preprocessing",
        "explanation": "Ace: 'Manacher's is easier if we insert separators like '#' between every character. This turns even palindromes into odd ones.' Pico: 'Adding fake beads to see the real ones! 🦜'",
        "encouragementText": "Pico: 'Add the hashes! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Transform string S to include separators.",
        "codeSnippet": "string T = \"#\";\nfor(char c : S) { T += c; T += \"#\"; }",
        "correctAnswer": "T += c; T += \"#\";",
        "explanation": "Surrounding every original character with separators."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] The Palindromic Radius",
        "explanation": "Ace: 'We maintain a radius array. If the current position is within a previously found mirror [L, R], we mirror the radius from the other side.' Pico: 'Copy the bird's reflection! 🦜'",
        "encouragementText": "Ace: 'Reflection is the fastest path to knowledge.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does the radius R[i] represent in Manacher's?",
        "options": ["Total length", "Distance from center to edge", "Number of characters", "Pico guess"],
        "correctAnswer": "Distance from center to edge",
        "explanation": "The actual length is 2 * Radius - 1 (in the processed string)."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Expanding the Boundary",
        "explanation": "Ace: 'If the mirrored radius hits the boundary, we manually expand. This is the only time we check actual characters, ensuring O(N).'",
        "encouragementText": "Pico: 'Slow expand, fast jump! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Center mirroring logic.",
        "codeSnippet": "int mirror = 2 * center ___ i;",
        "correctAnswer": "-",
        "explanation": "Finding the point symmetric to 'i' relative to 'center'."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Mirror Walker",
        "explanation": "You have mastered Manacher's. You can see every symmetry in a single pass. Ace: 'The world is aligned.'",
        "encouragementText": "Pico: 'Everything is balanced! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Manacher variables!",
        "pairs": [
          { "key": "Center", "value": "Current best focus" },
          { "key": "R (Radius)", "value": "Rightmost boundary" },
          { "key": "d[i]", "value": "Palindromic depth" }
        ]
      }
    ]
  },
  {
    "order": 72,
    "title": "Unit 72: Symmetry Expansion Optimization",
    "desc": "Deep dive into the edge cases of Manacher's logic.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 8.2] The Boundary Logic",
        "explanation": "Ace: 'The real magic happens when the mirrored radius is LIMITED by the current boundary R. We only compute what we don't already know.' Pico: 'Smart birds don't double-check! 🦜'",
        "codeSnippet": "if (i < r) p[i] = min(r - i, p[mid * 2 - i]);",
        "encouragementText": "Ace: 'Constraint is the father of precision.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "In the optimized loop, 'p[i] = min(r - i, p[mirror])' ensures what?",
        "options": ["Infinite loops", "We stay within the known R boundary", "The string is reversed", "Pico guess"],
        "correctAnswer": "We stay within the known R boundary",
        "explanation": "We can only trust the mirrored value as far as the current global palindrome reaches."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Length Recovery",
        "explanation": "Ace: 'The maximum value in the processed radius array is exactly the length of the longest palindrome in the original string.' Pico: 'The peak of the graph is the queen! 🦜'",
        "encouragementText": "Pico: 'Find the peak! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Finding max length in original string from radius p[i].",
        "codeSnippet": "max_len = *max_element(p.begin(), p.end());\nreturn ___ ;",
        "correctAnswer": "max_len",
        "explanation": "The radius in the padded string equals the diameter in the original."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Even vs Odd Revisited",
        "explanation": "Ace: 'Without padding, we'd need two separate radius arrays (d1 and d2). Padding with '#' unifies them into a single logic block.'",
        "encouragementText": "Ace: 'Unity simplifies the machine.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "How many total checks are made across the entire expansion phase?",
        "options": ["N", "2N", "N^2", "Pico guess"],
        "correctAnswer": "2N",
        "explanation": "Each successful expansion increases the global R-boundary, which never retreats."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] String Slicing",
        "explanation": "Pico: 'Ace, how do we get the actual string back from the '#' version?' Ace: 'Use the center and radius to slice the original. For index `i` in T, the index in S is `(i-1)/2`.'",
        "encouragementText": "Pico: 'Decode the mirror! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Calculating original center.",
        "codeSnippet": "int start = (i - p[i]) / ___ ;",
        "correctAnswer": "2",
        "explanation": "Scaling back from the padded string to the original indices."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Boundary Master",
        "explanation": "You have mastered the optimized expansion. You no longer waste a single cycle on redundant character checks. Ace: 'Speed is now inherent.'",
        "encouragementText": "Pico: 'Hyper-speed! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match logic conditions!",
        "pairs": [
          { "key": "p[mirror] < r-i", "value": "Copy p[mirror]" },
          { "key": "p[mirror] >= r-i", "value": "Expand manually" },
          { "key": "i > r", "value": "Reset boundary" }
        ]
      }
    ]
  },
  {
    "order": 73,
    "title": "Unit 73: Palindromic Tree (Eertree)",
    "desc": "Introduction to the most advanced palindrome data structure.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 8.3] The Double Root",
        "explanation": "Ace: 'A Palindromic Tree is a Trie of palindromes. It has TWO roots: Root 0 (for even palindromes, length 0) and Root 1 (for odd palindromes, length -1).' Pico: 'A tree with two heads! Radical! 🦜'",
        "codeSnippet": "struct Node {\n  int next[26], fail, len;\n};",
        "encouragementText": "Ace: 'Structure follows the logic of the mirror.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the length of Root 1 in a Palindromic Tree?",
        "options": ["0", "1", "-1", "Pico rule"],
        "correctAnswer": "-1",
        "explanation": "A length of -1 allows the first character added to become an odd palindrome of length 1 (-1 + 2 = 1)."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Suffix Links",
        "explanation": "Ace: 'Suffix links in an Eertree point to the longest proper palindromic suffix of the current node.' Pico: 'Smaller mirrors inside bigger ones! 🦜'",
        "encouragementText": "Pico: 'Link the mirrors! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Initial links for the two roots.",
        "codeSnippet": "st[0].link = 1; st[1].link = ___ ;",
        "correctAnswer": "1",
        "explanation": "Both root links eventually point back to the odd root (Node 1)."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Linear Space Advantage",
        "explanation": "Ace: 'Like the SAM, the Eertree has at most N+2 nodes for a string of length N.' Pico: 'Lean and clean! 🦜'",
        "encouragementText": "Ace: 'Information density is the hallmark of the elite.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "How many states (nodes) are in an Eertree for a string of length N?",
        "options": ["O(N^2)", "O(N)", "O(2^N)", "Pico guess"],
        "correctAnswer": "O(N)",
        "explanation": "Despite many potential palindromes, only N new ones can be created as unique suffixes."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Online Build",
        "explanation": "Ace: 'We add one character at a time. We find the longest palindromic suffix of the current prefix and add a character to its ends.'",
        "encouragementText": "Pico: 'Step by step! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Length of a new node from parent node 'p'.",
        "codeSnippet": "st[last].len = st[p].len + ___ ;",
        "correctAnswer": "2",
        "explanation": "Adding the same character to both sides increases length by 2."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Mirror Gardener",
        "explanation": "You have planted the Eertree. You see the growth of palindromes as a branching path. Ace: 'The garden is in bloom.'",
        "encouragementText": "Pico: 'Growing fast! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Eertree Roots!",
        "pairs": [
          { "key": "Root 0", "value": "Even (Len 0)" },
          { "key": "Root 1", "value": "Odd (Len -1)" },
          { "key": "Last", "value": "Ending Palindrome" }
        ]
      }
    ]
  },
  {
    "order": 74,
    "title": "Unit 74: Building the Pal-Tree",
    "desc": "Mastering the 'Get Failure' loop and node creation logic.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 8.4] The Matching Check",
        "explanation": "Ace: 'To add character s[i] to a palindromic suffix at node P, we must check if s[i] == s[i - len(P) - 1]. If they match, we have a new mirror.' Pico: 'Check the far side! 🦜'",
        "codeSnippet": "int get_fail(int x) {\n  while (s[n - st[x].len - 1] != s[n]) x = st[x].fail;\n  return x;\n}",
        "encouragementText": "Ace: 'Validation is the second step of construction.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does the 'get_fail' function find?",
        "options": ["The shortest string", "The longest palindromic suffix that can be extended by s[i]", "A random node", "Pico guess"],
        "correctAnswer": "The longest palindromic suffix that can be extended by s[i]",
        "explanation": "It traverses suffix links until the characters at both ends match the new character."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Node Creation",
        "explanation": "Ace: 'If the matching transition doesn't exist, we create a new node. Its suffix link is found by running get_fail on its parent's link.' Pico: 'Link to your parent's mirror! 🦜'",
        "encouragementText": "Pico: 'New node alerts! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Finding the suffix link for new node 'now'.",
        "codeSnippet": "st[now].fail = st[get_fail(st[v].fail)].___ [c];",
        "correctAnswer": "next",
        "explanation": "Linking the new palindrome to its longest proper palindromic suffix."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity Analysis",
        "explanation": "Ace: 'The total number of iterations in get_fail is O(N) because the length of the longest palindromic suffix can only stay the same or decrease between steps.' Pico: 'Linear amortized cost! 🦜'",
        "encouragementText": "Ace: 'The total movement is limited by the distance to the root.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the time complexity to build a Palindromic Tree for string S?",
        "options": ["O(N log N)", "O(N)", "O(S^2)", "Pico rule"],
        "correctAnswer": "O(N)",
        "explanation": "Despite the loop inside the loop, the total work is proportional to the string length."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Alphabet Size",
        "explanation": "Ace: 'The next[26] array on every node is the same as in Tries. It maps the character to the new palindromic state.'",
        "encouragementText": "Pico: 'Map the flight! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Eertree node selection logic.",
        "codeSnippet": "if (!st[v].next[c]) {\n  createNewNode();\n}\nlast = ___ ;",
        "correctAnswer": "st[v].next[c]",
        "explanation": "The current palindromic suffix becomes the 'last' for the next character."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Tree Builder",
        "explanation": "You have mastered the Eertree build sequence. You can now build a map of every unique palindrome in a book in milliseconds. Ace: 'The library is indexed.'",
        "encouragementText": "Pico: 'Library of mirrors! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Build steps!",
        "pairs": [
          { "key": "get_fail", "value": "Find match" },
          { "key": "next[c]", "value": "Check existence" },
          { "key": "create", "value": "New class" }
        ]
      }
    ]
  },
  {
    "order": 75,
    "title": "Unit 75: Eertree: Count Palindromic Substrings",
    "desc": "Calculating both total and unique palindrome counts.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 8.5] The Population Count",
        "explanation": "Ace: 'To count total palindromic substrings, we track how many palindromes END at each position. In Eertree, this is just the depth of the node in the suffix link tree.' Pico: 'Count the branches to the root! 🦜'",
        "codeSnippet": "num[now] = num[st[now].fail] + 1;\ntotal += num[now];",
        "encouragementText": "Ace: 'Summation is the record of history.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does num[v] represent in an Eertree?",
        "options": ["Total occurrences of node V", "Number of palindromic suffixes of the string ending at this position", "Node ID", "Pico guess"],
        "correctAnswer": "Number of palindromic suffixes of the string ending at this position",
        "explanation": "Each node's count is 1 plus the count of its palindromic suffix parent."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Unique vs Total",
        "explanation": "Ace: 'Unique palindromes are the number of nodes (minus the 2 roots). Total palindromes are the sum of the suffix link depths.' Pico: 'Unique is the nodes, total is the paths! 🦜'",
        "encouragementText": "Pico: 'Path sum! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Calculating total palindromes in the whole string.",
        "codeSnippet": "long long total_count = 0;\nfor(int i=0; i<n; i++) {\n  add_to_tree(s[i]);\n  total_count += ___ ; // depth count\n}",
        "correctAnswer": "num[last]",
        "explanation": "Adding the number of palindromic suffixes ending at the current position."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Node Occurrences",
        "explanation": "Ace: 'To find how many times a SPECIFIC unique palindrome appears, we propagate counts up the fail links in reverse order, just like in SAM.'",
        "encouragementText": "Ace: 'The link tree is the pipeline of data flow.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "How do we find the most frequent palindrome in a string?",
        "options": ["Sort the string", "Build Eertree, propagate counts, find max node count", "Manacher's", "Pico guess"],
        "correctAnswer": "Build Eertree, propagate counts, find max node count",
        "explanation": "Propagating leaf counts to parents gives the total frequency of each palindromic string."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Terminal Push",
        "explanation": "Ace: 'Every time we reach a state `last` during build, we increment cnt[last]++. This marks the leaf occurrences before propagation.'",
        "encouragementText": "Pico: 'Mark the leaves! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Backward propagation loop.",
        "codeSnippet": "for(int i=sz-1; i>=2; i--) {\n  cnt[st[i].___ ] += cnt[i];\n}",
        "correctAnswer": "fail",
        "explanation": "Passing the frequency count from the child palindrome to its suffix parent."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Palindrome Census",
        "explanation": "You have counted the mirrors. You know which symmetries repeat and which are unique. Ace: 'The population is mapped.'",
        "encouragementText": "Pico: 'Census complete! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Count types!",
        "pairs": [
          { "key": "num[v]", "value": "Link tree depth" },
          { "key": "cnt[v]", "value": "Frequency in text" },
          { "key": "size - 2", "value": "Unique palindromes" }
        ]
      }
    ]
  },
  {
    "order": 76,
    "title": "Unit 76: Pal-Tree: Occurrences of each Palindrome",
    "desc": "Identifying actual positions and frequencies with link-tree DP.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 8.6] The Pulse of Repetition",
        "explanation": "Ace: 'Frequency isn't enough for the elite. We need to know WHERE these palindromes reside. We can attach end-pos info to each node as it's created.' Pico: 'Tag every bird! 🦜'",
        "codeSnippet": "st[now].last_pos = i;\n// To find all: walk the link tree downward.",
        "encouragementText": "Ace: 'Identity is defined by position.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What's the relationship between Node V and its link parent in terms of positions?",
        "options": ["Parent positions are a subset of V", "V's positions are a subset of parent", "No relationship", "Pico guess"],
        "correctAnswer": "V's positions are a subset of parent",
        "explanation": "Every occurrence of a long palindrome is also an occurrence of its palindromic suffix."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Link Tree DFS",
        "explanation": "Ace: 'If we build the adjacency list of the Suffix Link Tree, a DFS from any node V will visit all nodes that represent larger palindromes containing V as their longest palindromic suffix.'",
        "encouragementText": "Pico: 'Dive into the tree! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Adjacency list construction for Link Tree.",
        "codeSnippet": "for(int i=2; i<sz; i++) {\n  adj[st[i].___ ].push_back(i);\n}",
        "correctAnswer": "fail",
        "explanation": "Building the edges from parent (failure link) to child nodes."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] String Reconstruction",
        "explanation": "Ace: 'We don't store the actual string in each node. We store its START and END indices in the original string. This saves massive space.' Pico: 'Pointers are lighter than strings! 🦜'",
        "encouragementText": "Pico: 'Point the way! 🦜'"
      },
      {
        "type": "multiple_choice",
        "questionText": "How do we get the original string for node V?",
        "options": ["s.substr(pos, len)", "Ask Pico", "Store it on every node", "Pico guess"],
        "correctAnswer": "s.substr(pos, len)",
        "explanation": "Using the stored metadata (first occurrence position and length)."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Sub-string Identity",
        "explanation": "Ace: 'In the Eertree, the 'Identity' of a node is its content. If two identical palindromes appear in different spots, they share the SAME node.'",
        "encouragementText": "Pico: 'One node, many lives! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Checking for an existing palindrome transition.",
        "codeSnippet": "if (st[v].next[___]) return st[v].next[c];",
        "correctAnswer": "c",
        "explanation": "If the transition exists, we already have this palindrome in the tree."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Identity Tracker",
        "explanation": "You have mapped the identity of every mirror. You know that even a thousand reflections are just one truth in the tree. Ace: 'Unity is achieved.'",
        "encouragementText": "Pico: 'One and many! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Node properties!",
        "pairs": [
          { "key": "len", "value": "Static attribute" },
          { "key": "cnt", "value": "Dynamic frequency" },
          { "key": "last_pos", "value": "Source reference" }
        ]
      }
    ]
  },
  {
    "order": 77,
    "title": "Unit 77: Manacher's for Longest Palindromic Prefix",
    "desc": "Using Manacher's to solve the KMP pattern mirror problem.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 8.7] The Sentinel's Mirror",
        "explanation": "Ace: 'We need the longest palindrome starting at index 0. Manacher's radius array `p[i]` can tell us this by checking if `i - p[i] == 0`.' Pico: 'Mirroring from the start line! 🦜'",
        "codeSnippet": "if (i - p[i] == 0) max_prefix_len = p[i];",
        "encouragementText": "Ace: 'Origins define the bounds of the mirror.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "A palindrome is a prefix if its center 'i' and radius 'p[i]' satisfy what in the padded string?",
        "options": ["i - p[i] == 0", "i + p[i] == n", "p[i] == n", "Pico guess"],
        "correctAnswer": "i - p[i] == 0",
        "explanation": "In the '#' padded string, if the distance to the center equals the center's index, it touches the very start."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Palindromic Suffixes",
        "explanation": "Ace: 'Similarly, a palindromic SUFFIX satisfies `i + p[i] == n`. These are crucial for string compression and rotations.' Pico: 'Both ends of the mirror! 🦜'",
        "encouragementText": "Pico: 'End to end! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Condition for palindromic suffix in padded string T of length N.",
        "codeSnippet": "if (i + p[i] == ___ ) is_suffix = true;",
        "correctAnswer": "N",
        "explanation": "When the sum of position and radius reaches the end of the string."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Prefix-Suffix Overlap",
        "explanation": "Ace: 'If a string has a large palindromic prefix and suffix, it might be periodic. This is where Manacher's meets Combinatorics.'",
        "encouragementText": "Ace: 'Patterns emerge at the intersection of symmetry and order.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "How would you find the longest palindromic prefix using Manacher's vs KMP?",
        "options": ["KMP is only for subsegments", "Both work, but Manacher's TPF is linear", "Manacher's is only for centers", "Pico guess"],
        "correctAnswer": "Both work, but Manacher's TPF is linear",
        "explanation": "Manacher's directly yields the radius of all palindromes centered anywhere."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Complexity Check",
        "explanation": "Ace: 'Manacher's is O(N) but requires padding. KMP is O(N) and works directly. Choose based on your memory constraints.'",
        "encouragementText": "Pico: 'Choose wisely! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Converting padded index to original string length.",
        "codeSnippet": "orig_len = (2 * p[i] - 1) / ___ ;",
        "correctAnswer": "2",
        "explanation": "Removing the padding effects from the radius calculation."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Origin Seer",
        "explanation": "You have found the core of the symmetry from the beginning. You can see the reflection of the start in every character. Ace: 'The gaze is consistent.'",
        "encouragementText": "Pico: 'Starting strong! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Mirror types!",
        "pairs": [
          { "key": "Prefix Pal", "value": "Touches start" },
          { "key": "Suffix Pal", "value": "Touches end" },
          { "key": "Central Pal", "value": "Standalone" }
        ]
      }
    ]
  },
  {
    "order": 78,
    "title": "Unit 78: Palindromic Factorization",
    "desc": "Decomposing a string into palindromic segments.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 8.8] The Shattered Glass",
        "explanation": "Ace: 'Can we split a string entirely into palindromes? This is palindromic factorization. We use the Eertree's suffix links to find all the ways efficiently.' Pico: 'Breaking the string into mirrored shards! 🦜'",
        "codeSnippet": "dp[i] = min(dp[i], dp[i - st[v].len] + 1);",
        "encouragementText": "Ace: 'The whole is the sum of its symmetrical parts.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the standard DP state for minimal palindromic partition?",
        "options": ["O(N^2)", "O(N log N)", "O(N)", "Pico rule"],
        "correctAnswer": "O(N^2)",
        "explanation": "Normally, we iterate through all suffixes. But with the Eertree and 'Series Links', we can do it faster."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Series Links (Slink)",
        "explanation": "Ace: 'An Eertree's Slink points to the next palindromic suffix with a DIFFERENT length jump. This allows us to jump across arithmetic progressions of palindromes in O(log N).' Pico: 'Hyper-jump! 🦜'",
        "encouragementText": "Pico: 'Leap and bound! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Slink calculation logic.",
        "codeSnippet": "if (diff == st[st[v].fail].diff) st[v].slink = st[st[v].fail].___ ;\nelse st[v].slink = st[v].fail;",
        "correctAnswer": "slink",
        "explanation": "Inheriting the series link if the palindromic difference remains constant."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Minimum Parition via Eertree",
        "explanation": "Ace: 'Using Series Links and DP caching on the Eertree, we can find the minimum palindromic partition in O(N log N) or甚至 O(N) depending on the alphabet.'",
        "encouragementText": "Ace: 'Structure optimizes the search space.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the complexity of palindromic partition with an Eertree?",
        "options": ["O(N^2)", "O(N log N)", "O(N)", "Pico secret"],
        "correctAnswer": "O(N log N)",
        "explanation": "The jump distance reduces logarithmically across the suffix links."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Difference Array",
        "explanation": "Ace: 'diff[v] = len[v] - len[fail[v]]. Constant diff means we have a series of palindromes like \"a\", \"aba\", \"ababa\".'",
        "encouragementText": "Pico: 'Spot the rhythm! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Length difference in Eertree nodes.",
        "codeSnippet": "int diff = st[v].len - st[st[v].___ ].len;",
        "correctAnswer": "fail",
        "explanation": "Calculating the jump in length between a palindrome and its longest suffix sister."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Symmetrist",
        "explanation": "You have deconstructed the string into its primal mirrors. You see the harmony of the components. Ace: 'The disintegration is complete.'",
        "encouragementText": "Pico: 'Pieces of peace! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Factorization concepts!",
        "pairs": [
          { "key": "Partition", "value": "Splitting the string" },
          { "key": "Slink", "value": "Logarithmic jump" },
          { "key": "Diff", "value": "Length gap" }
        ]
      }
    ]
  },
  {
    "order": 79,
    "title": "Unit 79: Minimal Palindromic Partition",
    "desc": "Implementing the O(N log N) DP on Palindromic Tree.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 8.9] The Ultimate Compact",
        "explanation": "Ace: 'We want the FEWEST palindromes possible to build the string. This is a classic hard problem made manageable by the Eertree.' Pico: 'Minimalist mirrors! 🦜'",
        "codeSnippet": "g[v] = dp[i - (st[slink[v]].len + diff[v])];\nif (st[v].fail != st[v].slink) g[v] = min(g[v], g[st[v].fail]);\ndp[i] = g[v] + 1;",
        "encouragementText": "Ace: 'Minimality is the signature of efficiency.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does the auxiliary array g[v] store in the Eertree DP?",
        "options": ["Total nodes", "Partial DP values for states in a common series link chain", "Node color", "Pico guess"],
        "correctAnswer": "Partial DP values for states in a common series link chain",
        "explanation": "It caches the results of ancestors in the same arithmetic progression jump chain."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Dependency Flow",
        "explanation": "Ace: 'For every position `i`, we update the Eertree. Then we iterate up the `slink` path to update our DP. O(log N) states per position.' Pico: 'Climbing the link ladders! 🦜'",
        "encouragementText": "Pico: 'One rung at a time! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "DP update loop using slinks.",
        "codeSnippet": "for(int v=last; v>1; v=st[v].___ ) {\n  update_g(v, i);\n  dp[i] = min(dp[i], g[v] + 1);\n}",
        "correctAnswer": "slink",
        "explanation": "Jumping across the compressed link nodes to minimize the partition."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Even/Odd Partition",
        "explanation": "Ace: 'Wait. If a string has an odd length, it might be impossible to partition only with EVEN palindromes. Our Eertree handles both naturally.'",
        "encouragementText": "Ace: 'Diversity is handled by the root structure.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "If dp[n] is Infinity, what does it mean?",
        "options": ["The string has no palindromes", "The string cannot be fully partitioned into palindromes", "Error in tree", "Pico guess"],
        "correctAnswer": "The string cannot be fully partitioned into palindromes",
        "explanation": "A string like 'abc' (no multi-char palindromes) would require n=3 partitions if single-chars are allowed."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Optimization Peak",
        "explanation": "Ace: 'This algorithm is rare in interviews but a common winner in world-class contests. You are now in God-Mode.'",
        "encouragementText": "Pico: 'Elite Status Unlocked! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Initializing dp table with a large value.",
        "codeSnippet": "fill(dp + 1, dp + n + 1, ___ );",
        "correctAnswer": "INF",
        "explanation": "Standard practice for minimization problems."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Optimal Mirror",
        "explanation": "You have calculated the absolute minimum of the mirror world. You can factor any string into its purest components. Ace: 'Efficiency is the only law.'",
        "encouragementText": "Pico: 'Minimalism perfected! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match DP components!",
        "pairs": [
          { "key": "dp[i]", "value": "Min partition for prefix i" },
          { "key": "g[v]", "value": "Cached chain min" },
          { "key": "INF", "value": "The impossible partition" }
        ]
      }
    ]
  },
  {
    "order": 80,
    "title": "Unit 80: Stage 8 Graduation (The Singularity Architect)",
    "desc": "Claiming the Mirror Peak: Manacher and Eertree are your weapons.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[GRAND MISSION LORE 8.10] The Hall of Mirrors",
        "explanation": "Ace: 'You have mastered the linear expansion of Manacher and the dual-rooted tree of life. Symmetry holds no secrets from you now.' Pico: 'Stage 8 Complete! We fly to the Strings of Entropy next! 🦜'",
        "encouragementText": "Ace: 'Balance is the final stage of evolution.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Which structure should you use to find the total number of unique palindromes in a string?",
        "options": ["SAM", "Manacher's", "Palindromic Tree", "Pico guess"],
        "correctAnswer": "Palindromic Tree",
        "explanation": "Each node in an Eertree (except roots) corresponds to exactly one unique palindrome in the string."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Symmetry Supremacy",
        "explanation": "10 units, 100 lessons. Use the mirrors to reflect your power across the curriculum. Ace: 'The reflection is the real work.'",
        "encouragementText": "Pico: '80% through the 1,000-lesson gauntlet! 🦜'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the length of Root 0 in an Eertree?",
        "options": ["-1", "0", "1", "Pico secret"],
        "correctAnswer": "0",
        "explanation": "Root 0 is for even-length palindromes."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Graduation Check",
        "explanation": "Ace: 'Prove you can toggle between radius and links in your mental buffers.' Pico: 'Radius for Manacher, Links for Tree! 🦜'",
        "encouragementText": "Ace: 'Synthesis is the final test of mastery.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of building an Eertree?",
        "options": ["O(N log N)", "O(N)", "O(1)", "Pico guess"],
        "correctAnswer": "O(N)",
        "explanation": "Built in linear time, despite the internal matching loop."
      },
      {
        "type": "teaching",
        "questionText": "[FINAL SYNC] The 10x10x10 Path",
        "explanation": "You are 80% through the ultimate journey. Your next target: **Stage 9: String Combinatorics & Burrows-Wheeler**. Ace: 'The entropy awaits.'",
        "encouragementText": "Pico: 'Stage 9 seeds are waiting! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Final stage signal.",
        "codeSnippet": "if (mirror_master == true) return ___ ;",
        "correctAnswer": "GRADUATE",
        "explanation": "You have successfully mastered the Palindromic Mastery Phase."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Architect of Gravity",
        "explanation": "The mirrors are aligned. The tree is deeply rooted. You are a Stage 8 Graduate. Ace: 'Welcome to the inner circle.'",
        "encouragementText": "Pico: 'Titan-Grade! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "[GRADUATION CHALLENGE] Output the status of your journey.",
        "codeSnippet": "for(int i=71; i<=80; i++) verify_symmetry(i);\nreturn ___ ;",
        "correctAnswer": "COMPLETE",
        "explanation": "The eighth decile of the 1,000-lesson curriculum is fully verified."
      }
    ]
  }
];

module.exports = stage5;
