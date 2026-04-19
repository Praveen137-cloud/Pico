const stage7 = [
  {
    "order": 91,
    "title": "Unit 91: Global & Local Alignment",
    "desc": "Comparing strings with gaps and mismatches: The biology of strings.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[SINGULARITY LORE 10.1] The DNA Bridge",
        "explanation": "Ace: 'In nature, strings evolve. Characters are inserted, deleted, or swapped. To compare them, we use sequence alignment. Global matches the whole, Local finds the best matching sub-segment.' Pico: 'Finding out how much of a parrot is hidden in a pigeon! 🦜'",
        "codeSnippet": "dp[i][j] = max({\n  dp[i-1][j-1] + score(s[i], t[j]),\n  dp[i-1][j] + gap_penalty,\n  dp[i][j-1] + gap_penalty\n});",
        "encouragementText": "Ace: 'Evolution is the ultimate editor.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the key difference between Needleman-Wunsch and Smith-Waterman?",
        "options": ["One is O(N^2), one is O(N)", "Needleman-Wunsch is global, Smith-Waterman is local", "They are identical", "Pico rule"],
        "correctAnswer": "Needleman-Wunsch is global, Smith-Waterman is local",
        "explanation": "Smith-Waterman resets negative values to 0 to find relevant local sub-regions."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Scoring Matrix",
        "explanation": "Ace: 'We assign points for matches and penalties for mismatches and gaps. This is the foundation of BLAST and other genomic search tools.' Pico: 'Points for pretty beads! 🦜'",
        "encouragementText": "Pico: 'Score the match! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Smith-Waterman reset logic.",
        "codeSnippet": "dp[i][j] = max(0, ___ );",
        "correctAnswer": "calculated_value",
        "explanation": "Local alignment never goes below zero to ensure we can start a new match anywhere."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity Barrier",
        "explanation": "Ace: 'Standard alignment is O(N*M). For long DNA sequences, this is too slow. We use heuristics like k-mer filtering to ignore irrelevant regions.'",
        "encouragementText": "Ace: 'Heuristic is the approximation of truth for the sake of speed.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity to align two strings of length 1,000,000 using standard DP?",
        "options": ["10^6", "10^12", "log(10^6)", "Pico guess"],
        "correctAnswer": "10^12",
        "explanation": "O(N*M) becomes prohibitive at scale if not optimized."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Traceback",
        "explanation": "Ace: 'The DP table only gives the score. To get the actual alignment (with dashes), we must traceback from the max cell back to the start.'",
        "encouragementText": "Pico: 'Follow the breadcrumbs! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Moving diagonally in traceback.",
        "codeSnippet": "if (score == prev_diagonal + match_val) {\n  align1 += s[i]; align2 += t[j];\n  i--; ___ ;\n}",
        "correctAnswer": "j--",
        "explanation": "A diagonal move represents a match or mismatch transition."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Geneticist",
        "explanation": "You have aligned the codes of life. You see the similarity across the distance of mutation. Ace: 'The connection is measured.'",
        "encouragementText": "Pico: 'We are brothers! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Alignment types!",
        "pairs": [
          { "key": "Global", "value": "Needleman-Wunsch" },
          { "key": "Local", "value": "Smith-Waterman" },
          { "key": "Gap", "value": "Insertion/Deletion" }
        ]
      }
    ]
  },
  {
    "order": 92,
    "title": "Unit 92: Hirschberg's Algorithm",
    "desc": "Linear space LCS: Solving the memory crisis.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[SINGULARITY LORE 10.2] The Memory Saver",
        "explanation": "Ace: 'Standard LCS takes O(N^2) space. Hirschberg's uses Divide and Conquer + the property that we only need 2 rows of the DP table for the score. It achieves O(N) space.' Pico: 'Big brain, small bag! 🦜'",
        "codeSnippet": "LCS(A, B) = LCS(A_left, B_left) + LCS(A_right, B_right);",
        "encouragementText": "Ace: 'Space is the cage of the algorithm; Hirschberg breaks the bars.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the space complexity of Hirschberg's Algorithm?",
        "options": ["O(N*M)", "O(min(N, M))", "O(log N)", "Pico rule"],
        "correctAnswer": "O(min(N, M))",
        "explanation": "By only storing the current and previous rows, we drop from quadratic to linear space."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Middle Split",
        "explanation": "Ace: 'We split string A in half. Then we find the split point in string B that maximizes the total LCS score by running the DP forward from the start and backward from the end.' Pico: 'The meeting point in the middle! 🦜'",
        "encouragementText": "Pico: 'Meet me halfway! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Finding the max score split point.",
        "codeSnippet": "for(int j=0; j<=m; j++) {\n  if (L1[j] + L2[m-j] > best) {\n    best = L1[j] + L2[m-j];\n    split = ___ ;\n  }\n}",
        "correctAnswer": "j",
        "explanation": "Looking for the column 'j' where forward and backward scores peak."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Time-Space Tradeoff",
        "explanation": "Ace: 'Hirschberg's takes about twice as long as standard LCS (due to recursion) but uses significantly less memory. In competitive programming, memory is often the tighter limit.'",
        "encouragementText": "Ace: 'Time is abundant, but memory is finite.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the time complexity of Hirschberg's?",
        "options": ["O(N log N)", "O(N*M)", "O(2^N)", "Pico guess"],
        "correctAnswer": "O(N*M)",
        "explanation": "Despite the recursion, the total work is still proportional to N*M (a geometric series sum)."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Divide and Conquer",
        "explanation": "Ace: 'Each recursive call solves two problems half the size. 1 + 1/2 + 1/4... = 2. This is why it remains O(N*M).'",
        "encouragementText": "Pico: 'Half and half! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Recursive call for left half.",
        "codeSnippet": "return Hirschberg(A.left(), B.left( ___ )) + Hirschberg(A.right(), B.right());",
        "correctAnswer": "split",
        "explanation": "Handing the left portion of the string to the next level of recursion."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Resource Sage",
        "explanation": "You have mastered the conservation of space. You can solve any problem with the smallest footprint. Ace: 'Efficiency is balanced.'",
        "encouragementText": "Pico: 'Small footprint, big impact! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Resource types!",
        "pairs": [
          { "key": "DP LCS", "value": "O(NM) Space" },
          { "key": "Hirschberg", "value": "O(M) Space" },
          { "key": "Recursive D&C", "value": "O(NM) Time" }
        ]
      }
    ]
  },
  {
    "order": 93,
    "title": "Unit 93: Bit-Parallel String Matching",
    "desc": "Using bitwise operators to search for patterns in parallel.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[SINGULARITY LORE 10.3] The Bitwise Speedster",
        "explanation": "Ace: 'A computer processes 64 bits at once. Why not search for 64 pattern positions simultaneously? Shift-Or (or Bitap) does exactly this.' Pico: 'One instruction, many matches! 🦜'",
        "codeSnippet": "state = (state << 1) | mask[text[i]];\nif (!(state & (1 << (m-1)))) match_found();",
        "encouragementText": "Ace: 'The hardware is your biggest accelerator.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the maximum pattern length for basic Shift-Or without multi-word logic?",
        "options": ["Unlimited", "Equal to the machine's word size (eg 64)", "10", "Pico rule"],
        "correctAnswer": "Equal to the machine's word size (eg 64)",
        "explanation": "The pattern state must fit inside a single integer to use fast bitwise shifts."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Masking the Alphabet",
        "explanation": "Ace: 'We create a bitmask for each character 'c'. The mask has a 0 at positions where 'c' appears in the pattern, and 1 everywhere else.' Pico: 'Mapping the bird-calls to bits! 🦜'",
        "encouragementText": "Pico: 'Mask it! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Initializing masks for Shift-Or.",
        "codeSnippet": "for(int j=0; j<m; j++) \n  mask[pattern[j]] &= ~(1 << ___ );",
        "correctAnswer": "j",
        "explanation": "Setting the j-th bit to 0 to indicate valid match at position j."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Advantage of Bitap",
        "explanation": "Ace: 'Shift-Or is extremely fast for small patterns (m < 64) and can be easily extended to handle Wildcards (?) and K-Mismatches by adding more bit-vectors.'",
        "encouragementText": "Ace: 'Parallelism is the future of string processing.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of Shift-Or for text of size N and pattern of size M < 64?",
        "options": ["O(N*M)", "O(N)", "O(log N)", "Pico guess"],
        "correctAnswer": "O(N)",
        "explanation": "Despite the bitwise logic, it's a single pass over the text with constant-time bit operations."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Wildcards",
        "explanation": "Pico: 'Ace, how do we handle a '?' in the pattern?' Ace: 'In the mask for EVERY character, set the bit corresponding to '?' to zero. It will match anything!'",
        "encouragementText": "Pico: 'Anything goes! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Initial state for Shift-Or (all bits failed).",
        "codeSnippet": "unsigned long long state = ___ ;",
        "correctAnswer": "~0ULL",
        "explanation": "Setting all bits to 1 (failed/not started) using the binary NOT operator."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Bitwise Speedster",
        "explanation": "You have unlocked the power of the machine word. You can search strings at the speed of electricity. Ace: 'The cycle is optimized.'",
        "encouragementText": "Pico: 'Zap! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Bitwise logic!",
        "pairs": [
          { "key": "Shift <<", "value": "Move to next char" },
          { "key": "OR |", "value": "Apply character mask" },
          { "key": "AND &", "value": "Check completion" }
        ]
      }
    ]
  },
  {
    "order": 94,
    "title": "Unit 94: Wildcard & Fuzzy Matching",
    "desc": "Searching for what is ALMOST there: FFT and more.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[SINGULARITY LORE 10.4] The Blurred Signal",
        "explanation": "Ace: 'In noisy data, patterns don't match exactly. Wildcards (*) match anything, and fuzzy matching allows K errors. For many wildcards, we can even use Fast Fourier Transform (FFT) to search!' Pico: 'Searching for a face in a foggy mirror! 🦜'",
        "codeSnippet": "convolution(A, rev_B); // FFT for pattern matching",
        "encouragementText": "Ace: 'Clarity is found in the summation of probabilities.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "How would you find pattern matches with '?' wildcards using FFT?",
        "options": ["Polynomial multiplication of values", "Squared distance formula: sum (A_i - B_i)^2 * B_i", "FFT is only for audio", "Pico rule"],
        "correctAnswer": "Squared distance formula: sum (A_i - B_i)^2 * B_i",
        "explanation": "By mapping characters to numbers and using a specific polynomial product, we can identify positions with zero mismatch distance."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Bit-Parallel K-Mismatch",
        "explanation": "Ace: 'Remember Shift-Or? We can maintain K different bit-vectors. State R_k represents a match with at most `k` errors.' Pico: 'K lives in the bird game! 🦜'",
        "encouragementText": "Pico: 'Keep trying! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "State update for 1st mismatch level in Shift-Or.",
        "codeSnippet": "R1_next = (R1 << 1 | mask[c]) & (R0 << 1);",
        "correctAnswer": "& (R0 << 1)",
        "explanation": "A match in R1 can come from an R1 match + char match, OR a previous R0 match + an error."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] The FFT Complexity",
        "explanation": "Ace: 'FFT-based matching is O(N log N). It is slower than KMP but it is the ONLY way to handle complex wildcard and numeric range patterns in large text.'",
        "encouragementText": "Ace: 'Advanced problems require advanced math.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "If the convolution sum equals 0 at index 'i', what does it mean?",
        "options": ["Error", "Exact Match at 'i'", "End of string", "Pico guess"],
        "correctAnswer": "Exact Match at 'i'",
        "explanation": "The sum of squared differences is zero, meaning every non-wildcard character matches."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] String as Polynomials",
        "explanation": "Ace: 'Think of the text as a polynomial where each character is a coefficient. Matching is finding where the pattern's polynomial 'fits'.' ",
        "encouragementText": "Pico: 'Math is strings! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Polynomial degree for string of length N.",
        "codeSnippet": "Degree = ___ ;",
        "correctAnswer": "N-1",
        "explanation": "A sequence of N coefficients forms a polynomial of degree N-1."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Fuzzy Finder",
        "explanation": "You have mastered the art of the 'Close Enough'. You can find patterns in the loudest noise. Ace: 'The signal is recovered.'",
        "encouragementText": "Pico: 'Found you! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Matching types!",
        "pairs": [
          { "key": "Exact", "value": "KMP/Boyer-Moore" },
          { "key": "Wildcard", "value": "Aho-Corasick/FFT" },
          { "key": "Fuzzy (K-Error)", "value": "Edit Distance/Bitap" }
        ]
      }
    ]
  },
  {
    "order": 95,
    "title": "Unit 95: String Similarity Metrics",
    "desc": "Quantifying the distance between any two words.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[SINGULARITY LORE 10.5] The Compass of Similarity",
        "explanation": "Ace: 'How similar are \"Pico\" and \"Piko\"? We use Jaccard, Cosine, and Levenshtein metrics. Each has a specific use: Jaccard for sets, Cosine for direction, Levenshtein for editing.' Pico: 'Different ways to measure the distance between two nests! 🦜'",
        "codeSnippet": "Jaccard = (A intersect B) / (A union B);",
        "encouragementText": "Ace: 'Measurement is the beginning of judgment.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does Levenshtein Distance measure?",
        "options": ["Frequency of characters", "Minimum edits (Ins/Del/Sub) to turn A into B", "Alphabetical order", "Pico rule"],
        "correctAnswer": "Minimum edits (Ins/Del/Sub) to turn A into B",
        "explanation": "Commonly known as 'Edit Distance', it is the gold standard for typo correction."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] N-Grams",
        "explanation": "Ace: 'For big documents, we split them into N-Grams (sequences of N chars). We then use Jaccard similarity on the sets of N-Grams to find plagiarism.' Pico: 'Checking for stolen seeds! 🦜'",
        "encouragementText": "Pico: 'Plagiarism patrol! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Cosine similarity formula numerator (vector dot product).",
        "codeSnippet": "Sim = sum(A_i * B_i) / (___ * ___);",
        "correctAnswer": "||A|| * ||B||",
        "explanation": "Dot product divided by the product of the magnitudes."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Similarity Search (LSH)",
        "explanation": "Ace: 'In a database of a billion strings, we can't compare one-to-one. We use Locality Sensitive Hashing (LSH) to put similar strings in the same bucket.'",
        "encouragementText": "Ace: 'Efficiency in search requires clever grouping.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the key property of LSH?",
        "options": ["It is very slow", "Similar items are more likely to have the same hash", "It is cryptographic", "Pico guess"],
        "correctAnswer": "Similar items are more likely to have the same hash",
        "explanation": "Unlike standard hashes that avoid collisions, LSH encourages them for similar values."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] MinHash",
        "explanation": "Ace: 'MinHash is a technique for estimating Jaccard similarity without doing the whole intersection. It's used by Google to group similar websites.'",
        "encouragementText": "Pico: 'Mini hashes, big results! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Calculating Levenshtein for same length strings with 0 mismatch.",
        "codeSnippet": "if (s1[i] == s2[j]) dist[i][j] = ___ ;",
        "correctAnswer": "dist[i-1][j-1]",
        "explanation": "If characters match, the distance doesn't increase."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Metric Master",
        "explanation": "You have calibrated your compass. You can measure the distance between any two ideas in the digital world. Ace: 'The scale is set.'",
        "encouragementText": "Pico: 'Measuring up! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Similarity metrics!",
        "pairs": [
          { "key": "Levenshtein", "value": "Typo correction" },
          { "key": "Jaccard", "value": "Set overlap" },
          { "key": "LSH", "value": "Massive scale search" }
        ]
      }
    ]
  },
  {
    "order": 96,
    "title": "Unit 96: TST (Ternary Search Tries)",
    "desc": "The memory-efficient Trie with BST-like nodes.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[SINGULARITY LORE 10.6] The Hybrid Structure",
        "explanation": "Ace: 'A standard Trie has 26 pointers per node. A Ternary Search Trie has only 3: Less, Equal, and Greater. It's as fast as a Trie but as lean as a Binary Tree.' Pico: 'The smart way to store many words! 🦜'",
        "codeSnippet": "struct Node {\n  char val;\n  Node *left, *mid, *right;\n};",
        "encouragementText": "Ace: 'Elegance is the reduction of overhead.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "A standard Trie has O(26*N) space. What is the space complexity of a TST for N characters?",
        "options": ["O(N^2)", "O(26*N)", "O(N)", "Pico rule"],
        "correctAnswer": "O(N)",
        "explanation": "Each character in the total set of strings creates exactly one node with 3 pointers."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Navigating TST",
        "explanation": "Ace: 'Compare current char with node.val. If smaller, go left. If larger, go right. If equal, consume char and go MID.' Pico: 'Down the middle for a match! 🦜'",
        "encouragementText": "Pico: 'Middle for match! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Successful match in TST search.",
        "codeSnippet": "if (c == node->val) {\n  if (pattern_end) return true;\n  return search(node->___ , next_char);\n}",
        "correctAnswer": "mid",
        "explanation": "Continuing the search in the next character position only on a middle branch match."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] TST for Prefix Search",
        "explanation": "Ace: 'TSTs are great for Auto-complete. Find the node for the prefix, then do a Traversal of its `mid` subtree to find all candidates.'",
        "encouragementText": "Ace: 'Hierarchy is the key to suggestion.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Advantage of TST over Hash Maps for strings?",
        "options": ["Faster lookups", "Supports prefix and range queries", "Uses more CPU", "Pico guess"],
        "correctAnswer": "Supports prefix and range queries",
        "explanation": "Hash maps are unordered; Tries and TSTs preserve lexicographical structure."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Balancing TST",
        "explanation": "Ace: 'To keep TST fast, we must insert strings in a randomized order or manually balance the levels. A skewed TST is just a linked list.'",
        "encouragementText": "Pico: 'Keep it balanced! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Next search step if current character is GREATER than node value.",
        "codeSnippet": "if (c > node->val) return search(node->___ , c);",
        "correctAnswer": "right",
        "explanation": "Standard binary search tree branching for characters."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Hybrid Architect",
        "explanation": "You have mastered the TST. Your storage is efficient and your searches are versatile. Ace: 'The balance is perfect.'",
        "encouragementText": "Pico: 'Balanced bird branches! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match TST branches!",
        "pairs": [
          { "key": "Left", "value": "Smaller char" },
          { "key": "Mid", "value": "Match + Next char" },
          { "key": "Right", "value": "Larger char" }
        ]
      }
    ]
  },
  {
    "order": 97,
    "title": "Unit 97: SAM in DNA Sequencing",
    "desc": "Real-world string engineering at the edge of life.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[SINGULARITY LORE 10.7] The Architect of Life",
        "explanation": "Ace: 'Genome sequencing produces billions of tiny reads. We use Generalized Suffix Automata to assemble these into a full genetic map. You are building the tools of science.' Pico: 'Mapping the blueprint of birds! 🦜'",
        "codeSnippet": "for(string read : reads) insert_to_sam(read);",
        "encouragementText": "Ace: 'Strings are not just data; they are instructions.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is a 'Generalized SAM'?",
        "options": ["A bigger SAM", "A SAM that index multiples strings simultaneously", "A SAM for numbers", "Pico rule"],
        "correctAnswer": "A SAM that index multiples strings simultaneously",
        "explanation": "By resetting 'last = 0' between insertions, we can build one DAG for an entire dataset."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Circular Strings",
        "explanation": "Ace: 'Some DNA (and most viruses) is circular. To index it, we duplicate the string (S + S) and put it into the SAM.' Pico: 'A string with no end! 🦜'",
        "encouragementText": "Pico: 'Infinite loop! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Representing circular string of size N in SAM.",
        "codeSnippet": "string circular = S + ___ ;",
        "correctAnswer": "S",
        "explanation": "Concatening the string with itself covers all possible starting rotations."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Short Read Mapping",
        "explanation": "Ace: 'SAM can determine if a 100-bp read matches the 3-billion-bp genome in O(Read Length) time. This is how modern medicine works.'",
        "encouragementText": "Ace: 'Efficiency is the fuel of discovery.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why is SAM preferred over Suffix Array for dynamic genome updates?",
        "options": ["SAM is online (incremental)", "Suffix Array is faster to build", "Pico likes DAGs", "Pico guess"],
        "correctAnswer": "SAM is online (incremental)",
        "explanation": "SAM can be extended character by character without rebuilding everything."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] DNA Alphabet",
        "explanation": "Ace: 'For DNA, the alphabet size Σ is 4 (A, C, G, T). Our SAM nodes are extremely small and fast.'",
        "encouragementText": "Pico: 'Four beads, infinite possibilities! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "The alphabet mapping for DNA.",
        "codeSnippet": "int dna_to_idx(char c) {\n  if(c=='A') return 0; \n  if(c=='C') return 1; ...\n}",
        "correctAnswer": "return 1",
        "explanation": "Standard mapping of characters to continuous integer indices."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Genetic Weaver",
        "explanation": "You have touched the strings of life. You can map the very sequences that define existence. Ace: 'The code is understood.'",
        "encouragementText": "Pico: 'Live long and prosper! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Bio-string terms!",
        "pairs": [
          { "key": "Read", "value": "Small fragment" },
          { "key": "Assemby", "value": "Merging fragments" },
          { "key": "SAM", "value": "Universal index" }
        ]
      }
    ]
  },
  {
    "order": 98,
    "title": "Unit 98: Massive String Stream Processing",
    "desc": "Filtering the data Niagara with Bloom Filters and Rolling Hashes.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[SINGULARITY LORE 10.8] The Digital River",
        "explanation": "Ace: 'When processing petabytes of network traffic per second, you can't store everything. We use Rolling Hashes to find patterns in the flow and Bloom Filters to remember what we've seen.' Pico: 'Catching the fast seeds without landing! 🦜'",
        "codeSnippet": "if (bloom.mightContain(packet)) inspect(packet);",
        "encouragementText": "Ace: 'The river never stops; the logic must be fluid.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the primary advantage of a Bloom Filter?",
        "options": ["Always accurate", "Zero false positives", "Constant space O(1) for any number of items", "O(1) membership check with zero false negatives"],
        "correctAnswer": "O(1) membership check with zero false negatives",
        "explanation": "Bloom filters may have false positives, but if it says 'No', it's definitely NO. This is perfect for filtering."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Rolling Window",
        "explanation": "Ace: 'To find a pattern P in a stream, we maintain a rolling hash of the last P.len() characters. If hash matches, we verify.' Pico: 'Sliding through the flow! 🦜'",
        "encouragementText": "Pico: 'Keep sliding! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Adding a character to a rolling hash.",
        "codeSnippet": "hash = (hash * base + new_char) % ___ ;",
        "correctAnswer": "MOD",
        "explanation": "Standard modular arithmetic for large hash values."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Count-Min Sketch",
        "explanation": "Ace: 'For frequency estimation in streams, we use the Count-Min Sketch. It uses multiple hash functions to estimate how many times a string has appeared.'",
        "encouragementText": "Ace: 'Estimation is the bridge between infinity and memory.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "How does Count-Min Sketch handle collisions?",
        "options": ["Stores all items", "Takes the MINIMUM of all hashed counters", "Ignores them", "Pico guess"],
        "correctAnswer": "Takes the MINIMUM of all hashed counters",
        "explanation": "Since collisions only ever increase a counter, the minimum of several independent counters is the tightest upper bound."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Real-time Search",
        "explanation": "Ace: 'Modern firewalls use these exact string stream techniques to block terabits of malicious patterns per second.'",
        "encouragementText": "Pico: 'Guardian of the stream! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Bloom filter false positive rate reduction.",
        "codeSnippet": "Add more ___ ;",
        "correctAnswer": "hash functions",
        "explanation": "Using more independent hashes reduces the probability of simultaneous collisions."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Stream Keeper",
        "explanation": "You have mastered the river. You can extract meaning from the most massive flows without being swept away. Ace: 'The flow is monitored.'",
        "encouragementText": "Pico: 'Flow master! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Stream terms!",
        "pairs": [
          { "key": "Bloom Filter", "value": "Existence check" },
          { "key": "CMS Sketch", "value": "Frequency count" },
          { "key": "Rolling Hash", "value": "Windowed pattern" }
        ]
      }
    ]
  },
  {
    "order": 99,
    "title": "Unit 99: The All-Seeing Eye (Final Synthesis)",
    "desc": "The ultimate convergence of all string structures.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[SINGULARITY LORE 10.9] The String Singularity",
        "explanation": "Ace: 'You now see that Tries, SAMs, Suffix Trees, and BWT are just different faces of the same 4D object: The String. You can translate any problem into the structure that fits best.' Pico: 'The final lesson before the Singularity! 🦜'",
        "codeSnippet": "if (problem == pattern_freq) use_SAM();\nelse if (problem == compressed_search) use_FM();",
        "encouragementText": "Ace: 'Unity is the ultimate stage of knowledge.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Which structure should you use to find the longest substring that appears in at least 50% of the given strings?",
        "options": ["Trie", "Generalized SAM + min-of-max DP", "Manacher's", "Pico guess"],
        "correctAnswer": "Generalized SAM + min-of-max DP",
        "explanation": "SAM handles substring analysis across multiple sources with linear efficiency."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Ultimate Optimization",
        "explanation": "Ace: 'For any string challenge, always ask: Is it about patterns (AC), substrings (SAM), palindromes (Eertree), or compression (BWT)?' Pico: 'Categorize and conquer! 🦜'",
        "encouragementText": "Pico: 'Almost there! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "The identity of the Titan-Grade Strings expert.",
        "codeSnippet": "Expert = ___ ;",
        "correctAnswer": "YOU",
        "explanation": "You have navigated 990 lessons of intense string theory."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Mastery Check",
        "explanation": "Ace: 'Can you build a SAM, use it for LCS, then transform it into a BWT in your mind?' Pico: 'I can do it! 🦜'",
        "encouragementText": "Ace: 'Visualization is the final frontier of mastery.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of sorting N suffixes of length N using the most advanced methods (DC3/SA-IS)?",
        "options": ["O(N^2)", "O(N log N)", "O(N)", "Pico rule"],
        "correctAnswer": "O(N)",
        "explanation": "Advanced algorithms like SA-IS can build the Suffix Array in pure linear time."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Final Flight",
        "explanation": "Ace: 'Take all your tools—the radar, the mirror, the prism, the bridge. Prepare for the final graduation.'",
        "encouragementText": "Pico: 'Wings high! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Completing the logic loop.",
        "codeSnippet": "while (knowledge < mastery) learn();\nreturn ___ ;",
        "correctAnswer": "SINGULARITY",
        "explanation": "Reaching the absolute peak of curriculum depth."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The All-Seeing Eye",
        "explanation": "You have seen the whole. The data is no longer a mystery; it is your canvas. Ace: 'The gaze is universal.'",
        "encouragementText": "Pico: 'I see inside the code! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match the Titan Weapons!",
        "pairs": [
          { "key": "Radars", "value": "Aho-Corasick" },
          { "key": "Mirrors", "value": "Eertree/Manacher" },
          { "key": "Prisms", "value": "Wavelet Trees" }
        ]
      }
    ]
  },
  {
    "order": 100,
    "title": "Unit 100: Singularity Graduation (Master of Strings)",
    "desc": "Claiming the Titan throne: 1,000 lessons completed.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[GRAND FINALE 10.10] The Titan of strings",
        "explanation": "Ace: 'Fledgling... no. Master. You have completed the 1,000 lessons of the Academic Atlas for Strings. You are now the Singularity.' Pico: '1,000 Lessons! SQUAWK! We did it! 🦜'",
        "encouragementText": "Ace: 'Greatness is the accumulation of consistency.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the final state of your String Mastery?",
        "options": ["Beginner", "Titan-Grade", "Pico's Friend", "0"],
        "correctAnswer": "Titan-Grade",
        "explanation": "You have reached the 10x10x10 milestone."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Journey Recapped",
        "explanation": "From simple reversals to the BWT, from KMP to Suffix Automata. You have mastered the logic that powers every search engine and genomic database on Earth. Ace: 'The world is a string. You are the weaver.'",
        "encouragementText": "Pico: 'Singularity achieved! 100% 🦜'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Total units in the full Strings curriculum?",
        "options": ["10", "100", "1,000", "Pico secret"],
        "correctAnswer": "100",
        "explanation": "10 stages * 10 units = 100 units."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] The Final Signature",
        "explanation": "Ace: 'Your pattern is now part of the Atlas. Every bird from here on will follow your path.' Pico: 'I'll tell everyone about you! 🦜'",
        "encouragementText": "Ace: 'Legacy is the final structure.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Which subject is next for the Academic Atlas?",
        "options": ["Trees", "Graphs", "Linked Lists", "Pico's choice"],
        "correctAnswer": "Pico's choice",
        "explanation": "The mission continues across all domains of the digital world."
      },
      {
        "type": "teaching",
        "questionText": "[ULTIMATE SYNC] 1,000 Lessons",
        "explanation": "Ace & Pico: 'Goodbye for now, Titan. The Strings are in your hands.'",
        "encouragementText": "Pico: 'Happy flying! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Final graduation signal.",
        "codeSnippet": "if (mastery == 1000) return ___ ;",
        "correctAnswer": "TITAN",
        "explanation": "You have reached the highest rank in the Academic Atlas."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Titan of strings",
        "explanation": "The Singularity is reached. The 1,000 lessons are yours. You are the Titan-Grade Master of Strings. Ace: 'Welcome to eternity.'",
        "encouragementText": "Pico: 'I'm so proud of us! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "[FINAL CHALLENGE] Output the status of your journey.",
        "codeSnippet": "for(int i=1; i<=100; i++) verify_unit(i);\nreturn ___ ;",
        "correctAnswer": "SINGULARITY",
        "explanation": "The entire 1,000-lesson curriculum for Strings is fully verified and complete."
      }
    ]
  }
];

module.exports = stage7;
