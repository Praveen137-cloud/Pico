const stage6 = [
  {
    "order": 81,
    "title": "Unit 81: Ternary Search",
    "desc": "Finding the peak: Searching in unimodal functions.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 9.1] The Peak Hunter",
        "explanation": "Ace: 'Binary Search finds a value in a sorted array. Ternary Search finds the MAXIMUM or MINIMUM of a \"Unimodal\" function (a function that increases then decreases). It splits the range into THREE parts using two mid-points.' Pico: 'Finding the tallest mountain in the sky! 100% 🦜'",
        "codeSnippet": "m1 = l + (r - l) / 3;\nm2 = r - (r - l) / 3;",
        "encouragementText": "Ace: 'Optimization is the search for the extreme.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "If f(m1) < f(m2) and we are looking for a MAXIMUM, which part of the range can we discard?",
        "options": ["Left [l, m1]", "Middle [m1, m2]", "Right [m2, r]", "Pico rule"],
        "correctAnswer": "Left [l, m1]",
        "explanation": "Since the function is increasing then decreasing, if f(m1) is smaller than f(m2), the true peak MUST be to the right of m1."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Logarithmic Convergence",
        "explanation": "Ace: 'Ternary Search takes $O(\log_3 N)$ steps. It's slightly more comparisons than Binary Search but is required for functions where binary search doesn't work.' Pico: 'Flapping three wings! 100% 🦜'",
        "encouragementText": "Pico: 'Three wings! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Updating the low bound.",
        "codeSnippet": "if (f(m1) < f(m2)) l = ___ ;",
        "correctAnswer": "m1",
        "explanation": "We move our left boundary to m1 because the peak is definitely within [m1, r]."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Precision",
        "explanation": "Ace: 'In competitive programming, we often run ternary search for a fixed number of iterations (e.g. 100) to guarantee double-precision accuracy without worrying about epsilon.'",
        "encouragementText": "Ace: 'Precision is the result of iterative refinement.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Total iterations to get 10^-9 precision if the initial range is 10^9?",
        "options": ["30", "60", "100", "Pico guess"],
        "correctAnswer": "100",
        "explanation": "100 iterations of ternary search reduce the range by (2/3)^100, which is extremely small."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Discrete Ternary Search",
        "explanation": "Ace: 'You can also use Ternary Search on an array if the values follow a unimodal pattern (e.g. [1, 3, 5, 8, 4, 2, 0]).'",
        "encouragementText": "Pico: 'Array mountain! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Updating the high bound.",
        "codeSnippet": "if (f(m1) > f(m2)) r = ___ ;",
        "correctAnswer": "m2",
        "explanation": "If m1 is higher than m2, the peak must be to the left of m2."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Peak Pilot",
        "explanation": "You have found the extreme point. The highest altitude is yours. Ace: 'The peak is identified.'",
        "encouragementText": "Pico: 'I'm at the top! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Search terms!",
        "pairs": [
          { "key": "Unimodal", "value": "Single Peak" },
          { "key": "m1, m2", "value": "Trisection points" },
          { "key": "O(log3 N)", "value": "Search time" }
        ]
      }
    ]
  },
  {
    "order": 82,
    "title": "Unit 82: Fibonacci Search",
    "desc": "Searching with the sequence of life: Binary search without division.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 9.2] The Spiral Search",
        "explanation": "Ace: 'Fibonacci Search uses Fibonacci numbers to divide the array. Unlike Binary Search, it only requires ADDITION and SUBTRACTION (no division), which was faster in older CPUs.' Pico: 'Jumping like a golden spiral bird! 100% 🦜'",
        "codeSnippet": "offset = f(n-2);",
        "encouragementText": "Ace: 'Efficiency is found in the reduction of operation complexity.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Benefit of Fibonacci Search over Binary Search today?",
        "options": ["Better luck", "It focuses on smaller increments earlier, which can be better for specific disk/tape access patterns", "Faster math", "Pico rule"],
        "correctAnswer": "It focuses on smaller increments earlier, which can be better for specific disk/tape access patterns",
        "explanation": "Since it doesn't always jump to the absolute middle, it can be optimized for hardware where forward seeking is cheaper than backward seeking."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Divide and Conquer",
        "explanation": "Ace: 'We split the array into two parts with sizes F(n-1) and F(n-2). The ratio is roughly 1.618 (The Golden Ratio).' Pico: 'Golden Ratio bird! 100% 🦜'",
        "encouragementText": "Pico: 'Golden feathers! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Standard Fibonacci sequence property.",
        "codeSnippet": "F(n) = F(n-1) + ___ ;",
        "correctAnswer": "F(n-2)",
        "explanation": "The fundamental recurrence of the sequence."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Cache locality",
        "explanation": "Ace: 'Because the indices used in Fibonacci search are calculated purely by subtraction, they often access memory in a more predictable way for specific cache architectures.'",
        "encouragementText": "Ace: 'Predictability is the friend of the hardware.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of Fibonacci search?",
        "options": ["O(N)", "O(log N)", "O(N^2)", "Pico guess"],
        "correctAnswer": "O(log N)",
        "explanation": "Like binary search, it reduces the search space exponentially."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Initializing",
        "explanation": "Ace: 'First, you find the smallest Fibonacci number greater than or equal to the array size N.'",
        "encouragementText": "Pico: 'Find the big number! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Calculating the split index.",
        "codeSnippet": "int i = min(offset + fibM2, n-1);",
        "correctAnswer": "fibM2",
        "explanation": "Using the smaller Fibonacci component to define the jump."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Fibonacci Scout",
        "explanation": "You have synchronized your search with the rhythm of nature. Ace: 'The target is found in the spiral.'",
        "encouragementText": "Pico: 'Nature knows! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Fibonacci terms!",
        "pairs": [
          { "key": "fibM", "value": "F(k)" },
          { "key": "fibM1", "value": "F(k-1)" },
          { "key": "fibM2", "value": "F(k-2)" }
        ]
      }
    ]
  },
  {
    "order": 83,
    "title": "Unit 83: Interpolation Search",
    "desc": "Searching like a human: Estimating where the value should be.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 9.3] The Smart Estimator",
        "explanation": "Ace: 'When you search for \"Zebra\" in a dictionary, you don't start at the middle (the letter M); you start at the very end. Interpolation Search uses the values of the data to ESTIMATE the index. If the data is uniformly distributed, it is incredibly fast.' Pico: 'Guessing where the big seeds are! 100% 🦜'",
        "codeSnippet": "pos = low + ((val - arr[low]) * (high - low) / (arr[high] - arr[low]));",
        "encouragementText": "Ace: 'Information about the distribution is the shortcut to the target.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of Interpolation Search for UNIFORMLY distributed data?",
        "options": ["O(log N)", "O(log(log N))", "O(1)", "Pico rule"],
        "correctAnswer": "O(log(log N))",
        "explanation": "This is almost constant time! For N = 4 billion, log(log N) is about 5 steps."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Worst Case",
        "explanation": "Ace: 'If the data is NOT uniform (e.g. [1, 2, 4, 8, 1000000]), Interpolation Search can degrade to O(N). Always check your distribution!' Pico: 'Trapped in the non-uniform seeds! 100% 🦜'",
        "encouragementText": "Pico: 'Wait, it's slow! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Formula component for the gap.",
        "codeSnippet": "slope = (high - low) / (arr[high] - ___ );",
        "correctAnswer": "arr[low]",
        "explanation": "Calculating the 'Rate of change' per value increment."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Database Indexing",
        "explanation": "Ace: 'Modern database engines use Interpolation techniques when the data is known to be linear (like timestamps or IDs) to save disk reads.'",
        "encouragementText": "Ace: 'Context is the multiplier of performance.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What happens if `target < arr[low]`?",
        "options": ["The algorithm continues", "The algorithm stops (The target is not in the array)", "It crashes", "Pico guess"],
        "correctAnswer": "The algorithm stops (The target is not in the array)",
        "explanation": "Because the array is sorted, if target is smaller than the minimum, searching is futile."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Step Logic",
        "explanation": "Ace: 'If `arr[pos] < target`, move `low` to `pos + 1`. Else move `high` to `pos - 1`. Re-interpolate.'",
        "encouragementText": "Pico: 'Recalculate! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Condition for the while loop.",
        "codeSnippet": "while (low <= high && target ___ arr[low] && target <= arr[high])",
        "correctAnswer": ">=",
        "explanation": "Ensuring the target is within the possible bounds of the sorted set."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Data Predictor",
        "explanation": "You have looked into the value of the data. The index is no longer a blind search. Ace: 'The estimate is precise.'",
        "encouragementText": "Pico: 'I guessed it right! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Interpolation terms!",
        "pairs": [
          { "key": "Uniform", "value": "O(log log N)" },
          { "key": "Exponential", "value": "Degrades to O(N)" },
          { "key": "Slope", "value": "Step logic" }
        ]
      }
    ]
  },
  {
    "order": 84,
    "title": "Unit 84: Exponential Search",
    "desc": "Finding the boundary: Searching in unbounded data.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 9.4] The Boundless Horizon",
        "explanation": "Ace: 'What if you don't know the size of the array? Exponential Search finds the range where the element should be by doubling its reach: 1, 2, 4, 8, ... until it exceeds the target. Then it finishes with Binary Search in that range.' Pico: 'Flying twice as far every time! 100% 🦜'",
        "codeSnippet": "while (arr[i] < target) i *= 2;",
        "encouragementText": "Ace: 'Growth is the first response to unknown scale.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Where is Exponential Search used in real systems?",
        "options": ["Small arrays", "Searching in infinite streams or very large sorted databases where the target is likely near the start", "Random sorting", "Pico rule"],
        "correctAnswer": "Searching in infinite streams or very large sorted databases where the target is likely near the start",
        "explanation": "Instead of log(N) where N is the total size, it takes O(log i) where i is the ACTUAL index of the element. If i is small, it's much faster."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Doubling Step",
        "explanation": "Ace: 'Start with i=1. If arr[i] is still too small, i = i * 2. This quickly grows to 'sandwich' the target between i/2 and i.' Pico: 'Sandwich the seed! 100% 🦜'",
        "encouragementText": "Pico: 'Double it! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Range for the final binary search.",
        "codeSnippet": "binarySearch(arr, i/2, ___ , target);",
        "correctAnswer": "min(i, n-1)",
        "explanation": "The target is guaranteed to be between the last successful jump and the current overshoot."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Galleries & Tunnels",
        "explanation": "Ace: 'Used in the implementation of C++ `std::upper_bound` and similar functions in some STL variants for efficient range identification.'",
        "encouragementText": "Ace: 'Discovery is the prelude to precision.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of Exponential search?",
        "options": ["O(i)", "O(log i)", "O(N)", "Pico guess"],
        "correctAnswer": "O(log i)",
        "explanation": "Where i is the position of the target. This is 'Adaptive' searching."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Galloping Search",
        "explanation": "Ace: 'This is also known as Galloping Search, famously used to find split points in Merge Sort optimizations.'",
        "encouragementText": "Pico: 'Roar like a lion bird! 100% 🦁'"
      },
      {
        "type": "programming_board",
        "questionText": "Jump condition.",
        "codeSnippet": "while (bound < n && arr[ ___ ] < target) bound *= 2;",
        "correctAnswer": "bound",
        "explanation": "Checking the value at the current exponential boundary."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Horizon Master",
        "explanation": "You have tamed the unknown range. The boundary is yours. Ace: 'The range is secured.'",
        "encouragementText": "Pico: 'I found the end! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Exponential terms!",
        "pairs": [
          { "key": "1, 2, 4, 8", "value": "Exponential jump" },
          { "key": "O(log i)", "value": "Position-based time" },
          { "key": "Binary Search", "value": "Final refinement" }
        ]
      }
    ]
  },
  {
    "order": 85,
    "title": "Unit 85: Bloom Filters for Search",
    "desc": "The probabilistic guard: Knowing what ISN'T there.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 9.5] The Ghost Gate",
        "explanation": "Ace: 'A Bloom Filter is a space-efficient structure that tells you if an element is IN or definitely NOT in a set. It can give False Positives (says it's there when it's not) but NEVER False Negatives.' Pico: 'Knowing a seed is missing without checking the whole bag! 100% 🦜'",
        "codeSnippet": "bloom.add(x); \nif (bloom.check(y)) // Maybe present",
        "encouragementText": "Ace: 'Negation is the fastest form of knowledge.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "How does a Bloom Filter store data?",
        "options": ["A large array", "An array of bits and multiple hash functions", "A linked list", "Pico rule"],
        "correctAnswer": "An array of bits and multiple hash functions",
        "explanation": "When you add X, you set the bits for hash1(X), hash2(X), and hash3(X). To check Y, you check all those bits; if any are 0, Y is definitely NOT there."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] No Deletion",
        "explanation": "Ace: 'Standard Bloom Filters do NOT support deletion. If you unset a bit, you might accidentally 'delete' other items that also hashed to that bit!' Pico: 'Permanent seeds! 100% 🦜'",
        "encouragementText": "Pico: 'Keep it forever! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Checking for present bits.",
        "codeSnippet": "for(h in hash_funcs) if (bits[h(val)] == ___ ) return FALSE;",
        "correctAnswer": "0",
        "explanation": "A single zero bit is proof of absence."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Web Cache",
        "explanation": "Ace: 'Used by browsers to quickly check if a URL is malicious. If the Bloom filter says 0, the site is safe. If 1, we do a slow, expensive check on the server.'",
        "encouragementText": "Ace: 'Pre-filtering is the secret to systemic throughput.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Trade-off for Bloom Filter?",
        "options": ["More RAM", "False Positives (you might do unnecessary work thinking an item is present)", "Slow speed", "Pico guess"],
        "correctAnswer": "False Positives (you might do unnecessary work thinking an item is present)",
        "explanation": "The probability of error increases as the filter fills up."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Optimal K",
        "explanation": "Ace: 'The number of hash functions (K) and bit-array size (M) must be chosen carefully to minimize the error rate for a set size N.'",
        "encouragementText": "Pico: 'Math balance! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Adding to the filter.",
        "codeSnippet": "bits[hash1(val)] = 1;\nbits[hash2(val)] = ___ ;",
        "correctAnswer": "1",
        "explanation": "Marking all target bits for the given value."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Probability Guard",
        "explanation": "You have mastered the art of exclusion. The filter protects the slow search. Ace: 'The entry is gated.'",
        "encouragementText": "Pico: 'Safe flying! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Bloom terms!",
        "pairs": [
          { "key": "0 bit", "value": "Definitely Absent" },
          { "key": "1 bit (all)", "value": "Maybe Present" },
          { "key": "Hash Function", "value": "Bit mapping" }
        ]
      }
    ]
  },
  {
    "order": 86,
    "title": "Unit 86: Burrows-Wheeler Transform (BWT)",
    "desc": "Searching in compressed data: Permutation and Rank.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 9.6] The Scrambled Page",
        "explanation": "Ace: 'BWT rearranges a string into a version that is easy to compress. More importantly, using the FM-Index, you can SEARCH for a substring in the BWT-compressed text without ever decompressing it!' Pico: 'Finding a seed in a squeezed bag! 100% 🦜'",
        "codeSnippet": "bwt = BWT(original_string);",
        "encouragementText": "Ace: 'Transformation reveals the structure necessary for efficiency.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "How does BWT help compression?",
        "options": ["It deletes characters", "It groups identical characters together (e.g. 'aaaaaa'), enabling Run-Length Encoding", "It sorts it", "Pico rule"],
        "correctAnswer": "It groups identical characters together (e.g. 'aaaaaa'), enabling Run-Length Encoding",
        "explanation": "By rotating the string and sorting the rotations, characters with the same following context end up together."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] LF-Mapping",
        "explanation": "Ace: 'The 'Last-to-First' mapping is the core. The k-th occurrence of character 'C' in the last column (the BWT) corresponds to the k-th occurrence in the first column.' Pico: 'Bird teleport! 100% 🦜'",
        "encouragementText": "Pico: 'Jump back! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Complexity to find occurrence of pattern P in text T using FM-Index.",
        "codeSnippet": "Time = O( ___ );",
        "correctAnswer": "length(P)",
        "explanation": "Incredible! Searching doesn't depend on the text size, only on the pattern size, after compression."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Bioinformatics",
        "explanation": "Ace: 'BWT is the heart of BWA (Burrows-Wheeler Aligner), the tool used to search through the 3-billion-character Human Genome in seconds.'",
        "encouragementText": "Ace: 'Biology is the ultimate scale of sequence search.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Is BWT reversible?",
        "options": ["Yes, flawlessly", "No", "Only if lucky", "Pico guess"],
        "correctAnswer": "Yes, flawlessly",
        "explanation": "The BWT is a permutation. You can reconstruct the original string perfectly from the BWT and one extra index."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Suffix Array connection",
        "explanation": "Ace: 'BWT is mathematically the last column of the Suffix Array rotations.'",
        "encouragementText": "Pico: 'Sorted strings! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Reversing BWT character for character.",
        "codeSnippet": "for(int i=0; i<n; i++) current = ___ [current];",
        "correctAnswer": "LF",
        "explanation": "Using the LF-mapping to walk backwards through the original string."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Singularity Squeezer",
        "explanation": "You have turned compression into a search engine. The data is small, but the knowledge is instant. Ace: 'The search is internal.'",
        "encouragementText": "Pico: 'Squeeze and search! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match BWT terms!",
        "pairs": [
          { "key": "Rotation", "value": "Circular shift" },
          { "key": "FM-Index", "value": "Searchable BWT" },
          { "key": "LF-Mapping", "value": "Navigation rule" }
        ]
      }
    ]
  },
  {
    "order": 87,
    "title": "Unit 87: Approximate String Matching (Fuzzy search)",
    "desc": "Searching for 'Bird' and finding 'Brd': Edit distance and errors.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 9.7] The Forgiving Scout",
        "explanation": "Ace: 'Sometimes you search with a typo. Fuzzy search finds matches within a certain 'Edit Distance' (Levenshtein Distance). It uses dynamic programming or bitmasking (Bitap algorithm) to find near-matches.' Pico: 'Close enough is good enough! 100% 🦜'",
        "codeSnippet": "if (dist(pattern, text) <= K) match();",
        "encouragementText": "Ace: 'Imperfection in input does not preclude precision in response.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does an edit distance of 1 mean?",
        "options": ["A match", "The strings differ by exactly one Insertion, Deletion, or Substitution", "One word", "Pico rule"],
        "correctAnswer": "The strings differ by exactly one Insertion, Deletion, or Substitution",
        "explanation": "For example, 'cat' and 'bat' have a distance of 1."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Bitap Algorithm",
        "explanation": "Ace: 'The Bitap algorithm uses bitwise operations (AND, OR, SHIFT) to perform fuzzy matching very fast for short patterns (e.g. 32-64 characters).' Pico: 'Bird brain bits! 100% 🦜'",
        "encouragementText": "Pico: 'Fast blips! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Standard DP state for Levenshtein.",
        "codeSnippet": "dp[i][j] = 1 + min(dp[i-1][j], dp[i][j-1], ___ );",
        "correctAnswer": "dp[i-1][j-1]",
        "explanation": "The three options: Delete, Insert, or Replace."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Agrep",
        "explanation": "Ace: '`agrep` (Approximate Grep) is the tool that first brought this power to the command line, enabling billion-speed fuzzy searches.'",
        "encouragementText": "Ace: 'Tolerance is the mechanism of robustness.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of Bitap?",
        "options": ["O(N * M)", "O(N * (M / WordSize))", "O(N^2)", "Pico guess"],
        "correctAnswer": "O(N * (M / WordSize))",
        "explanation": "By packing the pattern into a CPU word, we check all possibilities in parallel across the text."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Phonetic Search",
        "explanation": "Ace: 'Soundex and Metaphone are other techniques that search by sound (how a word is pronounced) rather than spelling.'",
        "encouragementText": "Pico: 'Sounds like seeds! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Updating bitmask in search.",
        "codeSnippet": "R = (R << 1) ___ char_mask[text[i]];",
        "correctAnswer": "|",
        "explanation": "Tracking the propagation of matches through the bitmask."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Forgiving Architect",
        "explanation": "You have built a system that understands intent despite error. Ace: 'The match is fuzzy but firm.'",
        "encouragementText": "Pico: 'I know what you meant! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Fuzzy terms!",
        "pairs": [
          { "key": "Levenshtein", "value": "Total Edits" },
          { "key": "Bitap", "value": "Bitwise speed" },
          { "key": "Soundex", "value": "Phonetic matching" }
        ]
      }
    ]
  },
  {
    "order": 88,
    "title": "Unit 88: Searching Compressed Data (LZW approach)",
    "desc": "Zero-decompression search: Finding strings inside the dict.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 9.8] The Hidden Map",
        "explanation": "Ace: 'Lempel-Ziv-Welch (LZW) creates a dictionary of recurring substrings. To search for X, you check if X is ALREADY in the compression dictionary. If it is, you just find its code in the compressed stream!' Pico: 'Finding a seed's name in the dictionary! 100% 🦜'",
        "codeSnippet": "if (dict.contains(P)) find_codes(P);",
        "encouragementText": "Ace: 'Economy of representation is the companion of speed of discovery.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the biggest challenge of searching compressed data?",
        "options": ["Color loss", "A pattern might span across two compressed blocks (Partial matches)", "RAM", "Pico rule"],
        "correctAnswer": "A pattern might span across two compressed blocks (Partial matches)",
        "explanation": "You must carefully handle the 'overlap' where the end of one code and start of another form your pattern."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Boyer-Moore-L",
        "explanation": "Ace: 'A modification of Boyer-Moore that skips over compressed blocks based on their dictionary length.'",
        "encouragementText": "Pico: 'Huge skips! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Length of a dictionary entry for code C.",
        "codeSnippet": "Length = dict[C]. ___ ;",
        "correctAnswer": "size",
        "explanation": "We can skip this many characters in the original space without decompressing."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Grep -z",
        "explanation": "Ace: 'Tools like `zgrep` transparently handle the decompression pipes, but advanced 'In-Situ' search is used for compressed RAM in mobile devices.'",
        "encouragementText": "Ace: 'Constraint is the driver of architectural creativity.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Standard LZW starting dictionary size?",
        "options": ["256", "1024", "Infinity", "Pico guess"],
        "correctAnswer": "256",
        "explanation": "It starts with all single ASCII characters."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Compressed Automata",
        "explanation": "Ace: 'We can build a Finite State Machine that operates DIRECTLY on the compressed codes.'",
        "encouragementText": "Pico: 'Robot on codes! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Identifying a code match.",
        "codeSnippet": "if (curr_code == target_dict_entry) return ___ ;",
        "correctAnswer": "MATCH",
        "explanation": "Found the exact entry that represents our pattern."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Code Searcher",
        "explanation": "You have navigated the abstract space of compressed tokens. The reality matches the symbol. Ace: 'The data is decoded.'" ,
        "encouragementText": "Pico: 'Tiny search! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Logic terms!",
        "pairs": [
          { "key": "Token", "value": "Compressed unit" },
          { "key": "Dictionary", "value": "Translation table" },
          { "key": "In-situ", "value": "Search without unzip" }
        ]
      }
    ]
  },
  {
    "order": 89,
    "title": "Unit 89: Randomized Search (Skip Lists)",
    "desc": "The probabilistic search tree: Fast search without rebalancing costs.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 9.9] The Lucky Ladder",
        "explanation": "Ace: 'Skip Lists use multi-level linked lists and coin flips to provide O(log N) search. If you flip HEADS, the element is promoted to the next level. This gives 'express lanes' for searching.' Pico: 'Jumping up floors in the bird tower! 100% 🦜'",
        "codeSnippet": "while(flip() == HEADS) level++;",
        "encouragementText": "Ace: 'Fortune, when averaged, becomes a structural guarantee.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why use Skip Lists instead of Balanced Trees (AVL/Red-Black)?",
        "options": ["Faster", "Easier to implement (especially in concurrent systems) because no rotation logic is needed", "Infinite memory", "Pico rule"],
        "correctAnswer": "Easier to implement (especially in concurrent systems) because no rotation logic is needed",
        "explanation": "You only add/remove links. There is no 'global rebalance' that would lock the whole tree."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Express Lanes",
        "explanation": "Ace: 'Top levels have very few elements, allowing you to jump over thousands of nodes in a single step.' Pico: 'Super fast flight! 100% 🦜'",
        "encouragementText": "Pico: 'Skip them! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Searching in a level.",
        "codeSnippet": "while (curr->next->val < target) curr = curr-> ___ ;",
        "correctAnswer": "next",
        "explanation": "Moving forward in the current 'express' or 'local' lane."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Redis & Memcached",
        "explanation": "Ace: 'Skip Lists are the core of Redis Sorted Sets. Their simplicity makes them perfect for high-speed cache databases.'",
        "encouragementText": "Ace: 'Simple structures scale where complex ones fracture.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Average complexity to search/insert/delete?",
        "options": ["O(N)", "O(log N)", "O(1)", "Pico guess"],
        "correctAnswer": "O(log N)",
        "explanation": "A well-balanced Skip List mimics a balanced binary tree."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Probability P",
        "explanation": "Ace: 'Standard P is 0.5 (coin flip). Every level has roughly half the elements of the level below.'",
        "encouragementText": "Pico: 'Fifty fifty! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Moving down a level.",
        "codeSnippet": "if (curr->next->val > target) curr = curr-> ___ ;",
        "correctAnswer": "down",
        "explanation": "If we overshot, we drop to a more detailed level to find the target."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Probability Pilot",
        "explanation": "You have built the ladder of luck. Every search is a series of fortunate jumps. Ace: 'The target is reached.'",
        "encouragementText": "Pico: 'I love jumping! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Skip terms!",
        "pairs": [
          { "key": "Level", "value": "Horizontal Lane" },
          { "key": "Promotion", "value": "Moving up" },
          { "key": "Sentinel", "value": "Boundary nodes at -inf / +inf" }
        ]
      }
    ]
  },
  {
    "order": 90,
    "title": "Unit 90: Stage 9 Graduation (The Search Sage)",
    "desc": "Claiming the discovery peak: Everything that is, is found.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[GRAND MISSION LORE 9.10] The Summit of Discovery",
        "explanation": "Ace: 'You have mastered the interpolation of data, the probability of Skip Lists, and the compressed search of the BWT. You no longer look for data; you sense its location in the fabric of the Academy.' Pico: 'Stage 9 Complete! Only 10 units left! 90% power! 100% 🦜'",
        "encouragementText": "Ace: 'Discovery is the realization of structured intent.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity for Interpolation Search on Uniform data?",
        "options": ["O(log N)", "O(log log N)", "O(N)", "Pico guess"],
        "correctAnswer": "O(log log N)",
        "explanation": "The fastest search for distributed values."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Depth Summary",
        "explanation": "10 units, 100 lessons. This stage has equipped you with the most advanced searching and probabilistic tools in the Atlas. Ace: 'Search with vision.'",
        "encouragementText": "Pico: '900 lessons done! 100 to go! 100% 🦜'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Algorithm for substring search in compressed BWT?",
        "options": ["Binary Search", "FM-Index", "DFS", "Pico secret"],
        "correctAnswer": "FM-Index",
        "explanation": "Ferragina-Manzini Index uses the LF-mapping to search instantly."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Graduation Check",
        "explanation": "Ace: 'Prove you can transition from Bloom Filters to Ternary Peaks and Skip Lists to Fuzzy Bit-ops in your mental buffers.' Pico: 'I'm a Search Sage now! 100% 🦜'",
        "encouragementText": "Ace: 'The search reflects the truth through the lens of the estimator.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Benefit of Skip Lists over AVL trees?",
        "options": ["Symmetry", "Easier concurrency and no rotations", "Faster O(log N)", "Pico guess"],
        "correctAnswer": "Easier concurrency and no rotations",
        "explanation": "Structural simplicity leads to better multi-threaded performance."
      },
      {
        "type": "teaching",
        "questionText": "[FINAL SYNC] The 10x10x10 Path",
        "explanation": "You are 90% through the ultimate journey. Your final target: **Stage 10: Singularity & Quantum Search**. Ace: 'Grover's and LSH are waiting.'",
        "encouragementText": "Pico: 'Final boss stage! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Final stage signal.",
        "codeSnippet": "if (search_sage == true) return ___ ;",
        "correctAnswer": "GRADUATE",
        "explanation": "You have successfully mastered the Specialized Searching phase."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Search Sage",
        "explanation": "The target is identified even before the search begins. You are a Stage 9 Graduate. Ace: 'Welcome to the inner circle.'",
        "encouragementText": "Pico: 'Titan-Grade! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "[GRADUATION CHALLENGE] Output the status of your journey.",
        "codeSnippet": "for(int i=81; i<=90; i++) verify_searching_logic(i);\nreturn ___ ;",
        "correctAnswer": "COMPLETE",
        "explanation": "The ninth decile of the 1,000-lesson curriculum for Sorting & Searching is fully verified."
      }
    ]
  }
];

module.exports = stage6;
