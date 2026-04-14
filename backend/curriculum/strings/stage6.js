const stage6 = [
  {
    "order": 81,
    "title": "Unit 81: Burrows-Wheeler Transform (BWT)",
    "desc": "The reversible transformation that powers modern compression.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 9.1] The Entropy Squeezer",
        "explanation": "Ace: 'To compress data, we must first make it predictable. The BWT rearranges a string into clusters of identical characters, making it highly compressible—yet fully reversible.' Pico: 'Mixing the seeds into piles, but knowing exactly where each one came from! 🦜'",
        "codeSnippet": "string bwt(string s) {\n  s += \"$\";\n  vector<string> shifts;\n  for(int i=0; i<s.size(); i++) shifts.push_back(s.substr(i) + s.substr(0, i));\n  sort(shifts.begin(), shifts.end());\n  string res = \"\";\n  for(auto row : shifts) res += row.back();\n  return res;\n}",
        "encouragementText": "Ace: 'Order is the precursor to efficiency.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does the last column of the sorted cyclic shifts matrix represent?",
        "options": ["The original string", "The BWT transform", "The Suffix Array", "Pico rule"],
        "correctAnswer": "The BWT transform",
        "explanation": "The BWT is defined as the last column of the sorted matrix of all cyclic rotations."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Sorting Key",
        "explanation": "Ace: 'Notice that sorting cyclic shifts is identical to sorting suffixes if we append a sentinel `$` which is smaller than all letters.' Pico: 'The $ is the boss! 🦜'",
        "encouragementText": "Pico: 'Sorted seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Suffix Array relationship to BWT.",
        "codeSnippet": "for(int i=0; i<n; i++) \n  bwt[i] = s[(SA[i] + n - 1) % n];",
        "correctAnswer": "(SA[i] + n - 1) % n",
        "explanation": "The BWT character at position i is the character just before the suffix starting at SA[i]."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Locality of Reference",
        "explanation": "Ace: 'BWT brings similar characters together. In \"banana$\", the BWT becomes \"annb$aa\". Notice the 'aa' and 'nn' clustering.' Pico: 'Clustered bird-seeds! 🦜'",
        "encouragementText": "Ace: 'Patterns are easier to compress than chaos.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Is BWT a lossy or lossless transformation?",
        "options": ["Lossy (Some data is gone)", "Lossless (Fully reversible)", "Only for strings", "Pico guess"],
        "correctAnswer": "Lossless (Fully reversible)",
        "explanation": "BWT is 100% reversible, which makes it perfect for archiving."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Sentinel",
        "explanation": "Pico: 'Ace, why do we need the $ symbol?' Ace: 'It marks the end and ensures that no two cyclic shifts are identical, making the sort deterministic.'",
        "encouragementText": "Pico: 'The special bead! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Adding the sentinel.",
        "codeSnippet": "string S_prime = S + ___ ;",
        "correctAnswer": "'$'",
        "explanation": "Appending the end-of-string character."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Transformer",
        "explanation": "You have transformed the text. You see the clusters of meaning emerging from the sort. Ace: 'The transformation is valid.'",
        "encouragementText": "Pico: 'Mixed but managed! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match BWT steps!",
        "pairs": [
          { "key": "Cyclic Shift", "value": "Rotate string" },
          { "key": "Sort", "value": "Organize rotations" },
          { "key": "Last Column", "value": "BWT result" }
        ]
      }
    ]
  },
  {
    "order": 82,
    "title": "Unit 82: LF-Mapping & Reversing BWT",
    "desc": "Unscrambling the Eggs: How to get the original string back.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 9.2] The Magic Reversal",
        "explanation": "Ace: 'The BWT matrix has a magical property: the i-th occurrence of a character in the LAST column (L) corresponds to the i-th occurrence of the same character in the FIRST column (F). This is LF-Mapping.' Pico: 'The L and F birds are the same bird in the same order! 🦜'",
        "codeSnippet": "int next_i = LF(curr_i, char_c);",
        "encouragementText": "Ace: 'Identity is preserved across the sort.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does 'LF' stand for in BWT?",
        "options": ["Left-Forward", "Last-to-First", "Link-File", "Pico guess"],
        "correctAnswer": "Last-to-First",
        "explanation": "It maps characters from the Last column back to the First column of the BWT matrix."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Count Array",
        "explanation": "Ace: 'In the First column (F), all characters are sorted. To find the start of 'b's in F, we just need to know how many characters smaller than 'b' exist.' Pico: 'I know my place in line! 🦜'",
        "encouragementText": "Pico: 'Count the smaller birds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Calculating the rank of a character in the last column.",
        "codeSnippet": "for(int i=0; i<n; i++) {\n  rank[i] = count[bwt[i]]++;\n}",
        "correctAnswer": "count[bwt[i]]++",
        "explanation": "Determining which occurrence of the character bwt[i] this is."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] The Reconstruction Loop",
        "explanation": "Ace: 'Starting from the sentinel $, we iteratively follow the LF-map backwards to reconstruct the string from right to left.' Pico: 'Flying the maze in reverse! 🦜'",
        "encouragementText": "Ace: 'The destination contains the path home.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "In which order is the string reconstructed from BWT?",
        "options": ["Left to Right", "Random", "Right to Left", "Pico guess"],
        "correctAnswer": "Right to Left",
        "explanation": "Because the Last column contains characters that precede their counterparts in the sorted suffixes."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] O(N) Reversal",
        "explanation": "Ace: 'Reversing BWT is O(N) time and O(N) space. It is incredibly efficient given the scrambled nature of the data.'",
        "encouragementText": "Pico: 'No sweat! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Base Case for reversal.",
        "codeSnippet": "int curr = find_index_of_sentinel(bwt);\nstring res = \"\";\nfor(int i=0; i<n; i++) {\n  res += bwt[curr];\n  curr = ___ ; // follow map\n}",
        "correctAnswer": "LF[curr]",
        "explanation": "Following the Last-to-First mapping to the next character."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Codebreaker",
        "explanation": "You have unscrambled the logic. You can see the original truth hidden within the clusters. Ace: 'The message is clear.'",
        "encouragementText": "Pico: 'I read you loud and clear! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Reversal terms!",
        "pairs": [
          { "key": "Column F", "value": "First (Sorted)" },
          { "key": "Column L", "value": "Last (BWT)" },
          { "key": "LF-Map", "value": "The Bridge" }
        ]
      }
    ]
  },
  {
    "order": 83,
    "title": "Unit 83: FM-Index",
    "desc": "Sub-linear search in compressed data—the crown jewel of bio-informatics.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 9.3] The Ghost Search",
        "explanation": "Ace: 'Ferragina and Manzini (FM-Index) allows us to search for a pattern P in string T using ONLY its BWT. We find the range of suffixes that start with P.' Pico: 'Searching for a needle in a hay-stack without even unfolding the hay! 🦜'",
        "codeSnippet": "L = C(P[i]) + Occ(P[i], L - 1) + 1;\nR = C(P[i]) + Occ(P[i], R);",
        "encouragementText": "Ace: 'Searching is the manipulation of compressed ranges.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Which two auxiliary metrics does the FM-Index use?",
        "options": ["Trie and Links", "Count (C) and Occurrences (Occ)", "SA and BWT", "Pico secret"],
        "correctAnswer": "Count (C) and Occurrences (Occ)",
        "explanation": "C(x) is the number of chars < x in F. Occ(x, i) is the number of times x appears in BWT[0...i]."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Backward Search",
        "explanation": "Ace: 'Like BWT reversal, searching P in FM-Index happens BACKWARDS from P.len()-1 to 0.' Pico: 'Start from the tail! 🦜'",
        "encouragementText": "Pico: 'Reverse search! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Updating the range [L, R] in FM-Index.",
        "codeSnippet": "top = C[c] + Occ(c, top - 1) + 1;\nbottom = C[c] + ___ ;",
        "correctAnswer": "Occ(c, bottom)",
        "explanation": "The range shrinks around all suffixes that start with the suffix of the pattern."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Sub-linear Magic",
        "explanation": "Ace: 'The search time is O(Pattern Length), NOT string length. This allows us to search the entire Human Genome in microseconds.' Pico: 'Size doesn't matter when you have an FM-Index! 🦜'",
        "encouragementText": "Ace: 'Scale is conquered by complexity-reduction.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity to find occurrence COUNT of pattern P?",
        "options": ["O(T)", "O(P)", "O(log T)", "Pico guess"],
        "correctAnswer": "O(P)",
        "explanation": "It only depends on the pattern length P because we perform P range-updates."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Compressed Space",
        "explanation": "Ace: 'The BWT itself can be compressed using Wavelet Trees to make the `Occ(c, i)` query take O(log |Alphabet|) time.'",
        "encouragementText": "Pico: 'Stack the compression! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Final match count in FM-Index.",
        "codeSnippet": "if (top > bottom) return 0;\nreturn ___ + 1;",
        "correctAnswer": "bottom - top",
        "explanation": "The number of matching suffixes is the size of the final range."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Bio-Architect",
        "explanation": "You have constructed the FM-Index. You can find any sequence in a digital sea of data instantly. Ace: 'The patterns are yours.'",
        "encouragementText": "Pico: 'I found it! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match FM requirements!",
        "pairs": [
          { "key": "C(char)", "value": "Count smaller in F" },
          { "key": "Occ(char, idx)", "value": "Rank in Last(L)" },
          { "key": "Pattern Search", "value": "Backward range shrink" }
        ]
      }
    ]
  },
  {
    "order": 84,
    "title": "Unit 84: Rank and Select Queries",
    "desc": "The primitives of succinct data structures.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 9.4] The Bit-Counter",
        "explanation": "Ace: 'Rank(i) is how many 1s are in bits[0...i]. Select(j) is the index of the j-th 1. These are the bricks of compressed FM-Indexes.' Pico: 'Count the 1-seeds! 🦜'",
        "codeSnippet": "// O(1) Rank/Select requires precomputed blocks.",
        "encouragementText": "Ace: 'Counting is the most basic yet powerful abstraction.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the typical time complexity for a Succinct Rank query?",
        "options": ["O(N)", "O(1) with O(N) bits extra", "O(log N)", "Pico rule"],
        "correctAnswer": "O(1) with O(N) bits extra",
        "explanation": "Using a combination of 'Super-blocks' and 'Blocks', we can achieve constant time with minimal extra space."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Jacobson's Rank",
        "explanation": "Ace: 'By splitting 10^9 bits into blocks, we store the prefix sums. For the final tiny block, we use a precomputed lookup table.' Pico: 'The table of all possible small worlds! 🦜'",
        "encouragementText": "Pico: 'Lookup table! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Rank as an auxiliary for FM-Index.",
        "codeSnippet": "Occ(c, i) = Rank_in_BWT(i, ___ );",
        "correctAnswer": "c",
        "explanation": "FM-Index's Occ is just a Rank query for character 'c' in the BWT string."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Static vs Dynamic",
        "explanation": "Ace: 'Static Rank is easy. Dynamic Rank (where bits change) requires Segment Trees or Fenwick Trees, making it O(log N).' Pico: 'I like things that stay still! 🦜'",
        "encouragementText": "Ace: 'Balance the update cost with the query speed.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "If N = 1,000,000, how many 'Super-blocks' of size log^2(N) would we roughly have?",
        "options": ["100", "2500", "Exactly N", "Pico guess"],
        "correctAnswer": "2500",
        "explanation": "log2(10^6) is ~20, so blocks are roughly 400 bits wide."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Alphabet Expansion",
        "explanation": "Ace: 'For a whole alphabet, we use one bit-vector per character (or a Wavelet Tree).' Pico: 'A vector for every bird! 🦜'",
        "encouragementText": "Pico: 'One for all! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Wavelet Rank logic for char 'c'.",
        "codeSnippet": "if (c <= mid) return left_child.rank(c, ___ );",
        "correctAnswer": "new_i",
        "explanation": "Recursing down the character-range tree using bit-vector rank."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Bit Lord",
        "explanation": "You have mastered the bit-primitives. You can count the universe in constant time. Ace: 'Precision is absolute.'",
        "encouragementText": "Pico: '010101... 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Rank/Select operations!",
        "pairs": [
          { "key": "Rank(i)", "value": "Count up to i" },
          { "key": "Select(j)", "value": "Find position of j" },
          { "key": "Succinct", "value": "Nearly Zero space" }
        ]
      }
    ]
  },
  {
    "order": 85,
    "title": "Unit 85: Wavelet Trees",
    "desc": "Representing strings for range queries and rank/select.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 9.5] The Range Prism",
        "explanation": "Ace: 'A Wavelet Tree recursively halves the alphabet range. At each node, a bit-vector tells if a character's index went to the left or right child.' Pico: 'A tree that sorts characters by range! 🦜'",
        "codeSnippet": "Node(range [L, R]) {\n  vector<bool> b;\n  for(char c : s) b.push_back(c <= (L+R)/2);\n}",
        "encouragementText": "Ace: 'Division of range leads to multiplication of query-types.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the total height of a Wavelet Tree for an alphabet of size Σ?",
        "options": ["O(N)", "O(log Σ)", "O(Σ)", "Pico rule"],
        "correctAnswer": "O(log Σ)",
        "explanation": "Each level splits the remaining range in half, resulting in logarithmic depth."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Range Quantile",
        "explanation": "Ace: 'Wavelet Trees can find the k-th smallest element in a range [i, j] in O(log Σ) time. This is impossible for standard Tries.' Pico: 'Finding the k-th seed in the garden! 🦜'",
        "encouragementText": "Pico: 'Sorted range! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Moving indices i and j to the left child in Wavelet Tree.",
        "codeSnippet": "new_i = rank0(i - 1) + 1;\nnew_j = ___ ;",
        "correctAnswer": "rank0(j)",
        "explanation": "Using the bit-vector rank to find how many characters went left in the range."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Compression vs Speed",
        "explanation": "Ace: 'A Wavelet Tree takes N log Σ bits. It is very space-efficient and much faster than maintaining Σ bit-vectors.'",
        "encouragementText": "Ace: 'Elegance in the tree means speed in the search.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Which FM-Index operation does the Wavelet Tree accelerate?",
        "options": ["C(c)", "Occ(c, i)", "Reverse BWT", "Pico guess"],
        "correctAnswer": "Occ(c, i)",
        "explanation": "By navigating the tree, we perform character Rank (Occ) in O(log Σ)."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Alphabet Size matters",
        "explanation": "Ace: 'For DNA (Σ=4), log Σ is only 2. Wavelet Tree queries are almost instant.'",
        "encouragementText": "Pico: 'Lightning fast! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Binary range split.",
        "codeSnippet": "int mid = (L + R) / ___ ;",
        "correctAnswer": "2",
        "explanation": "The standard pivot for a balanced tree."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Range Master",
        "explanation": "You have constructed the range prism. You can slice through any text by value and position. Ace: 'Perspective is now a dimension.'",
        "encouragementText": "Pico: 'Multidimensional! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Wavelet functionalities!",
        "pairs": [
          { "key": "Rank(c, i)", "value": "Count c in [0, i]" },
          { "key": "Quantile(k, i, j)", "value": "k-th smallest in range" },
          { "key": "Range Count", "value": "Count in [char_x, char_y]" }
        ]
      }
    ]
  },
  {
    "order": 86,
    "title": "Unit 86: LCP Array Construction (Kasai's)",
    "desc": "Longest Common Prefix: The glue between sorted suffixes.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 9.6] The Neighborly Overlap",
        "explanation": "Ace: 'LCP[i] is the length of the longest common prefix between Suffix[i] and Suffix[i-1] in the sorted Suffix Array. Kasai's Algorithm builds this in O(N).' Pico: 'Measuring how much two neighbors have in common! 🦜'",
        "codeSnippet": "while (s[i+k] == s[j+k]) k++;\nlcp[rank[i]] = k;\nif (k > 0) k--;",
        "encouragementText": "Ace: 'Overlap is the hidden structure of the sort.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the key insight of Kasai's Algorithm?",
        "options": ["Brute force is fine", "LCP of suffix (i+1) is at least LCP(i) - 1", "LCP is random", "Pico guess"],
        "correctAnswer": "LCP of suffix (i+1) is at least LCP(i) - 1",
        "explanation": "This 'smoothing' property allows us to avoid re-checking characters from scratch."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Rank Map",
        "explanation": "Ace: 'To run Kasai's, we need to know the RANK of each original suffix in its sorted form.' Pico: 'Where did my original suffix end up? 🦜'",
        "encouragementText": "Pico: 'Sorted position! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Initializing rank array from Suffix Array SA.",
        "codeSnippet": "for(int i=0; i<n; i++) rank[SA[i]] = ___ ;",
        "correctAnswer": "i",
        "explanation": "Mapping index to its position in the sorted array."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] LCP Applications",
        "explanation": "Ace: 'LCP is used for finding unique substrings, LIRS, and accelerating SAM searches.' Pico: 'The LCP is the secret weapon! 🦜'",
        "encouragementText": "Ace: 'Value is found in the shared prefix.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "How many unique substrings in a string using LCP?",
        "options": ["Sum of SA[i]", "Sum of (N - SA[i] - LCP[i])", "N^2", "Pico guess"],
        "correctAnswer": "Sum of (N - SA[i] - LCP[i])",
        "explanation": "For every sorted suffix, we subtract the part shared with its predecessor to count truly new substrings."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Complexity Check",
        "explanation": "Ace: 'Kasai's is O(N) because the variable `k` is incremented at most N times and decremented at most N times.'",
        "encouragementText": "Pico: 'Linear victory! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "The neighbor suffix in sorted order.",
        "codeSnippet": "int j = SA[rank[i] ___ 1];",
        "correctAnswer": "-",
        "explanation": "Finding the string that appears immediately before the current suffix in sorted order."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Overlap Specialist",
        "explanation": "You have mastered the LCP. You can see the degree of similarity between any two points in the data. Ace: 'Analysis is deep.'",
        "encouragementText": "Pico: 'Sharing is caring! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match LCP metrics!",
        "pairs": [
          { "key": "SA[i]", "value": "Suffix index" },
          { "key": "LCP[i]", "value": "Prefix overlap" },
          { "key": "Kasai", "value": "O(N) construction" }
        ]
      }
    ]
  },
  {
    "order": 87,
    "title": "Unit 87: Longest Common Extension (LCE) Queries",
    "desc": "Finding LCP of any two arbitrary suffixes in O(1).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 9.7] The Universal Prefix",
        "explanation": "Ace: 'Given two indices i and j, find the LCP of Suffix(i) and Suffix(j). This is LCE. With a Sparse Table on the LCP array, we do it in O(1).' Pico: 'Instant comparison anywhere! 🦜'",
        "codeSnippet": "LCE(i, j) = query(min(rank[i], rank[j]) + 1, max(rank[i], rank[j]));",
        "encouragementText": "Ace: 'Universal queries are the peak of indexed logic.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Which data structure is usually built on the LCP array to allow O(1) LCE?",
        "options": ["Trie", "Sparse Table (RMQ)", "Linked List", "Pico guess"],
        "correctAnswer": "Sparse Table (RMQ)",
        "explanation": "LCE of Suffix Array range [A, B] is simply the minimum value in the LCP array between A+1 and B."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Range Minimum Connection",
        "explanation": "Ace: 'LCP(Suffix A, Suffix C) is the MINIMUM of the LCP values between them in the sorted array.' Pico: 'Smallest overlap is the global overlap! 🦜'",
        "encouragementText": "Pico: 'Find the minimum! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Converting suffix indices to LCP range.",
        "codeSnippet": "int r1 = rank[i], r2 = rank[j];\nif (r1 > r2) swap(r1, r2);\nreturn RMQ_LCP(r1 + 1, ___ );",
        "correctAnswer": "r2",
        "explanation": "Querying the min LCP between sorted positions."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] LCE Applications",
        "explanation": "Ace: 'LCE is critical for Manacher's optimization on different strings, finding Squares (tandem repeats), and String Hashing acceleration.'",
        "encouragementText": "Ace: 'The LCE is the bridge to advanced combinatorics.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the preprocessing time for O(1) LCE?",
        "options": ["O(N^2)", "O(N log N) for RMQ", "O(N)", "Pico guess"],
        "correctAnswer": "O(N log N) for RMQ",
        "explanation": "Sparse Table construction takes O(N log N) time and space."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Log Scale",
        "explanation": "Ace: 'For N=10^6, log N is 20. 20MB extra RAM for O(1) string comparison? Elite trade.'",
        "encouragementText": "Pico: 'Fair trade! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "The RMQ power-of-two jump.",
        "codeSnippet": "int k = log2[len];\nreturn min(st[k][i], st[k][j - (1 << k) + ___ ]);",
        "correctAnswer": "1",
        "explanation": "Standard RMQ query with overlapping power-of-two intervals."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Instant Seer",
        "explanation": "You have mastered LCE. You can see the overlap of any two points in the data stream instantly. Ace: 'The matrix is transparent.'",
        "encouragementText": "Pico: 'I see it all! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match LCE stages!",
        "pairs": [
          { "key": "Suffix Array", "value": "Basis of order" },
          { "key": "LCP Array", "value": "Basis of value" },
          { "key": "Sparse Table", "value": "Basis of speed" }
        ]
      }
    ]
  },
  {
    "order": 88,
    "title": "Unit 88: Substring Lexicographical Rank",
    "desc": "Where does 'Pico' rank among EVERY unique substring?",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 9.8] The Social Order",
        "explanation": "Ace: 'If you sorted EVERY unique substring of a string, where would pattern P be? In SA + LCP, this is a range search + prefix sum.' Pico: 'Ranking the seeds in the master jar! 🦜'",
        "codeSnippet": "Total_Substrings = sum(len - sa[i] - lcp[i]);",
        "encouragementText": "Ace: 'Rank is the position in the hall of existence.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "How do we find the k-th lexicographical substring?",
        "options": ["Binary Search on prefix sums of unique substrings", "Sort all N^2 substrings", "Ask Pico", "Pico rule"],
        "correctAnswer": "Binary Search on prefix sums of unique substrings",
        "explanation": "We use the unique substring counts per sorted suffix to find the starting suffix, then slice it."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Unique Partitioning",
        "explanation": "Ace: 'Each sorted suffix SA[i] contributes (S.len - SA[i] - LCP[i]) UNIQUE substrings that are lexicographically larger than any in SA[i-1].' Pico: 'Only count what's new! 🦜'",
        "encouragementText": "Pico: 'No double counts! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Finding suffix that contains the k-th substring.",
        "codeSnippet": "if (k <= unique_count[i]) return s.substr(SA[i], LCP[i] + ___ );",
        "correctAnswer": "k",
        "explanation": "The k-th new substring of this suffix has length LCP[i] + k."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Suffix Automaton vs Suffix Array",
        "explanation": "Ace: 'Ranking is often easier in a Suffix Automaton by using DP to count paths from each node.' Pico: 'SAM path counting! 🦜'",
        "encouragementText": "Ace: 'The tool defines the ease of the task.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity to count paths (total substrings) from each state in SAM?",
        "options": ["O(N)", "O(N log N)", "O(2^N)", "Pico guess"],
        "correctAnswer": "O(N)",
        "explanation": "It's a simple DAG DP: `paths[u] = 1 + sum(paths[v])` for all edges (u, v)."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The K-th Flight",
        "explanation": "Ace: 'To find the k-th substring in SAM, we follow edges lexicographically until we consume the k value.'",
        "encouragementText": "Pico: 'Follow the edges! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Walking to the k-th substring in SAM.",
        "codeSnippet": "for(auto edge : st[curr].next) {\n  if (k <= paths[edge.to]) return edge.char + walk(edge.to, k - ___ );\n  k -= paths[edge.to];\n}",
        "correctAnswer": "1",
        "explanation": "Subtracting 1 for the 'empty string' or terminal status at the current node."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Ranker",
        "explanation": "You have mapped the hierarchy of strings. You can find the k-th smallest word in a digital universe. Ace: 'The order is known.'",
        "encouragementText": "Pico: 'Top tier! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Rank logic!",
        "pairs": [
          { "key": "Prefix Sum", "value": "Unique counts" },
          { "key": "k-th Substring", "value": "Binary search target" },
          { "key": "Lexicographical", "value": "Alphabetical order" }
        ]
      }
    ]
  },
  {
    "order": 89,
    "title": "Unit 89: Entropy-Based Compression (Huffman + BWT)",
    "desc": "The final stage of data squeezing.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 9.9] The Ultimate Squeeze",
        "explanation": "Ace: 'Compressed search is cool, but real-world archive size matters. After BWT and MTF (Move-To-Front), we use Huffman Coding to assign the smallest bit-codes to the most common symbols.' Pico: 'Tiny codes for common seeds! 🦜'",
        "codeSnippet": "// Huffman tree: greedy join of smallest frequencies.",
        "encouragementText": "Ace: 'Brevity is the soul of efficient data.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does 'Move-to-Front' (MTF) do to the BWT result?",
        "options": ["Nothing", "Converts character clusters into low-value integers", "Reverses the string", "Pico guess"],
        "correctAnswer": "Converts character clusters into low-value integers",
        "explanation": "BWT clusters identical chars; MTF turns those into strings of zeros (very compressible)."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Shannon Entropy",
        "explanation": "Ace: 'The minimum bits per character is Σ -p_i log p_i. BWT lowers this local entropy.' Pico: 'Squeeze the juice out! 🦜'",
        "encouragementText": "Pico: 'No wasted space! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Huffman greedy node join.",
        "codeSnippet": "Node* parent = new Node(left->freq ___ right->freq);",
        "correctAnswer": "+",
        "explanation": "The parent node's frequency is the sum of its two least frequent children."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Arithmetic vs Huffman",
        "explanation": "Ace: 'Huffman is fast but Arithmetic coding reaches the absolute entropy limit of Shannon. For elite systems, we use a hybrid.'",
        "encouragementText": "Ace: 'Perfection is the goal, but speed is the constraint.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Is Huffman coding prefix-free?",
        "options": ["No", "Yes (No code is a prefix of another)", "Sometimes", "Pico guess"],
        "correctAnswer": "Yes (No code is a prefix of another)",
        "explanation": "This allows unambiguous decoding without separators."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Compressed Pipeline",
        "explanation": "Ace: 'String -> BWT -> MTF -> RLE -> Huffman. This is the pipeline of the famous bzip2 compressor.' Pico: 'The bzip bird! 🦜'",
        "encouragementText": "Pico: 'Pipeline power! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Code assignment in Huffman tree.",
        "codeSnippet": "left->code = curr + \"0\";\nright->code = curr + ___ ;",
        "correctAnswer": "\"1\"",
        "explanation": "Assigning binary paths to the tree branches."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Entropy Lord",
        "explanation": "You have mastered the squeeze. You can fit a planet into a pocket. Ace: 'Efficiency is the ultimate truth.'",
        "encouragementText": "Pico: 'Pico-sized storage! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Compression steps!",
        "pairs": [
          { "key": "BWT", "value": "Clustering" },
          { "key": "MTF", "value": "Lowering values" },
          { "key": "Huffman", "value": "Optimal bit-coding" }
        ]
      }
    ]
  },
  {
    "order": 90,
    "title": "Unit 90: Stage 9 Graduation (The Entropy Lord)",
    "desc": "Claiming the Entropy Peak: BWT and FM-Index are your mastery.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[GRAND MISSION LORE 9.10] The Library of Babel",
        "explanation": "Ace: 'You have mastered the transform that organizes chaos and the index that searches the infinite. You no longer read strings; you compute their essence.' Pico: 'Stage 9 Complete! Only 10 units left until the Singularity! 🦜'",
        "encouragementText": "Ace: 'Mastery is the ability to see through complexity.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Which index allows searching for patterns in O(P) time where P is pattern length?",
        "options": ["Suffix Array Binary Search", "FM-Index", "Linked List", "Pico guess"],
        "correctAnswer": "FM-Index",
        "explanation": "The backward search range-updates depend only on the pattern string."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Succinct Supremacy",
        "explanation": "10 units, 100 lessons. Use the entropy to drive your solutions past the limits of brute force. Ace: 'Compressed is better.'",
        "encouragementText": "Pico: '90% through the 1,000-lesson gauntlet! 🦜'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does a Wavelet Tree store at each node?",
        "options": ["The characters", "A bit-vector", "Pico's favorite color", "Pico secret"],
        "correctAnswer": "A bit-vector",
        "explanation": "The bit-vector denotes whether each character's value was in the left or right half of the current range."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Graduation Check",
        "explanation": "Ace: 'Prove you can transition from sort to transform in your mental buffers.' Pico: 'SA to BWT is a simple shift! 🦜'",
        "encouragementText": "Ace: 'The transformation is the bridge to the next level.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "BWT of 'ABAA$'? (Assume sorted: $, A, A, A, B)",
        "options": ["AAAB$", "AA$BA", "B$AAA", "Pico guess"],
        "correctAnswer": "AA$BA",
        "explanation": "Last column of the sorted cyclic shifts."
      },
      {
        "type": "teaching",
        "questionText": "[FINAL SYNC] The 10x10x10 Path",
        "explanation": "You are 90% through the ultimate journey. Your next target: **Stage 10: The Grand String Synthesis**. Ace: 'The singularity awaits.'",
        "encouragementText": "Pico: 'Stage 10 seeds are waiting! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Final stage signal.",
        "codeSnippet": "if (entropy_lord == true) return ___ ;",
        "correctAnswer": "GRADUATE",
        "explanation": "You have successfully mastered the String Entropy Phase."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Architect of Information",
        "explanation": "The data is squeezed. The index is fast. You are a Stage 9 Graduate. Ace: 'Welcome to the inner circle.'",
        "encouragementText": "Pico: 'Titan-Grade! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "[GRADUATION CHALLENGE] Output the status of your journey.",
        "codeSnippet": "for(int i=81; i<=90; i++) verify_entropy(i);\nreturn ___ ;",
        "correctAnswer": "COMPLETE",
        "explanation": "The ninth decile of the 1,000-lesson curriculum is fully verified."
      }
    ]
  }
];

module.exports = stage6;
