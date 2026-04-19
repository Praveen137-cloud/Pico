const stage1 = [
  {
    "order": 1,
    "title": "Unit 1: The Forest Scout (Linear Search)",
    "desc": "Foundations of sequential discovery.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 1.1] The Grand Hunt",
        "explanation": "Ace: 'Searching is the art of finding a specific item in a set. In Linear Search, we check every item one by one.' Pico: 'Checking every branch! 100% 🦜'",
        "encouragementText": "Ace: 'Persistence is the first tool of the scout.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the best-case time complexity of Linear Search?",
        "options": ["O(1)", "O(N)", "O(log N)", "Pico rule"],
        "correctAnswer": "O(1)",
        "explanation": "If the bird is at the very first tree, we find it instantly!"
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Sequential Scan",
        "explanation": "Ace: 'Linear search is simple but slow for large sets. It takes O(N) time because in the worst case, you check every single item.'",
        "encouragementText": "Pico: 'Lots of trees! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Fill the condition for matching target T.",
        "codeSnippet": "if (arr[i] ___ T) return i;",
        "correctAnswer": "==",
        "explanation": "We compare the current element with the target."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Use Case",
        "explanation": "Ace: 'Use Linear Search when the data is unsorted or very small. For sorted data, we have faster ways.'",
        "encouragementText": "Ace: 'Simplicity is the base of all complexity.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Time complexity of Linear Search on N items?",
        "options": ["O(N)", "O(log N)", "O(1)", "Pico guess"],
        "correctAnswer": "O(N)",
        "explanation": "Execution time grows linearly with the number of elements."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Return Values",
        "explanation": "Ace: 'Usually, we return the INDEX of the found item, or -1 if the target is not in the set.'",
        "encouragementText": "Pico: 'Where is he? 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Starting index for search.",
        "codeSnippet": "for(int i = ___ ; i < n; i++)",
        "correctAnswer": "0",
        "explanation": "Standard search starts at the beginning of the array."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Sequential Path",
        "explanation": "You have mastered the most basic way to find anything. Ace: 'The hunt begins.'",
        "encouragementText": "Pico: 'I found a seed! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Search terms!",
        "pairs": [
          { "key": "Best Case", "value": "O(1)" },
          { "key": "Worst Case", "value": "O(N)" },
          { "key": "Not Found", "value": "Return -1" }
        ]
      }
    ]
  },
  {
    "order": 2,
    "title": "Unit 2: The Sentinel Scout",
    "desc": "Optimizing Linear Search by reducing boundary comparisons.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 1.2] The Guarded Gate",
        "explanation": "Ace: 'In a standard loop, we check two things: \"Is target found?\" and \"Is loop finished?\". Sentinel Search places the target at the end, so we only need to check \"Is target found?\" in the loop!'",
        "encouragementText": "Ace: 'Smart scouting avoids redundant checks.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does Sentinel Search reduce?",
        "options": ["Memory usage", "Number of boundary comparisons per iteration", "Time complexity class", "Pico rule"],
        "correctAnswer": "Number of boundary comparisons per iteration",
        "explanation": "By putting the target at the end, the loop is guaranteed to find it, so `i < N` check isn't needed *inside* the loop."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Temporary Swap",
        "explanation": "Ace: '1. Store the last element. 2. Put target in the last slot. 3. Loop until found. 4. Restore the last element.'",
        "encouragementText": "Pico: 'Swap it back! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Setting the sentinel.",
        "codeSnippet": "arr[n-1] = ___ ;",
        "correctAnswer": "target",
        "explanation": "We force the target to exist at the end."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Micro-Optimization",
        "explanation": "Ace: 'For huge arrays, saving one comparison per loop adds up to significant real-world speed.'",
        "encouragementText": "Ace: 'Performance is the sum of small savings.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of Sentinel search?",
        "options": ["O(N)", "O(log N)", "O(1)", "Pico guess"],
        "correctAnswer": "O(N)",
        "explanation": "It's still linear, just with a smaller constant factor."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Boundary Case",
        "explanation": "Ace: 'If the loop stops at `i == n-1` and the original last element wasn't the target, then it's not found.'",
        "encouragementText": "Pico: 'Did we cheat? 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Loop condition (Sentinel).",
        "codeSnippet": "while(arr[i] ___ target) i++;",
        "correctAnswer": "!=",
        "explanation": "The loop ONLY checks for the target."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Efficient Scout",
        "explanation": "You have learned to streamline your loops. Ace: 'The path is clean.'",
        "encouragementText": "Pico: 'Faster flight! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Sentinel logic!",
        "pairs": [
          { "key": "Sentinel", "value": "Target at end" },
          { "key": "Standard", "value": "Two checks per loop" },
          { "key": "Restoration", "value": "Put old last back" }
        ]
      }
    ]
  },
  {
    "order": 3,
    "title": "Unit 3: Binary Search Foundations",
    "desc": "Introduction to the O(log N) hunter.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 1.3] The Sorted Divide",
        "explanation": "Ace: 'If the forest is SORTED, we don't need to check every tree. Check the middle, and eliminate half the forest!' Pico: 'Halving the work! 100% 🦜'",
        "encouragementText": "Ace: 'Order is the lever that moves the scale of efficiency.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Mandatory condition for Binary Search?",
        "options": ["Unique elements", "Sorted elements", "Small array", "Pico rule"],
        "correctAnswer": "Sorted elements",
        "explanation": "Without sorting, we don't know which half to discard."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Logarithmic Power",
        "explanation": "Ace: 'Binary Search is O(log N). From 1,000,000 items to 1 in just 20 steps.'",
        "encouragementText": "Pico: 'So fast! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Middle calculation.",
        "codeSnippet": "mid = (low + high) / ___ ;",
        "correctAnswer": "2",
        "explanation": "Finding the average index."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Decision Rule",
        "explanation": "Ace: 'If target > mid, look in the right half. If target < mid, look in the left half.'",
        "encouragementText": "Ace: 'Choice defines the search space.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity class of Binary Search?",
        "options": ["O(N)", "O(log N)", "O(N^2)", "Pico guess"],
        "correctAnswer": "O(log N)",
        "explanation": "We divide the problem size by 2 at every step."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Range Shrinking",
        "explanation": "Ace: 'We update the `low` or `high` boundaries to focus the search.'",
        "encouragementText": "Pico: 'Smaller nest! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Updating `low` if target is on the right.",
        "codeSnippet": "if (target > arr[mid]) low = ___ ;",
        "correctAnswer": "mid + 1",
        "explanation": "We move past the middle."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Logarithmic Hunter",
        "explanation": "You have mastered the divide. The forest is yours. Ace: 'The scale is unlocked.'",
        "encouragementText": "Pico: 'Found him! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match BS terms!",
        "pairs": [
          { "key": "Target > Mid", "value": "low = mid + 1" },
          { "key": "Target < Mid", "value": "high = mid - 1" },
          { "key": "Mid == Target", "value": "Found" }
        ]
      }
    ]
  },
  {
    "order": 4,
    "title": "Unit 4: Precision Midpoint",
    "desc": "Avoiding the infamous integer overflow bug.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 1.4] The Overflow Trap",
        "explanation": "Ace: '`(low + high) / 2` can fail if `low + high` is larger than the maximum integer size. This is a classic bug!' Pico: 'Avoid the crash! 100% 🦜'",
        "encouragementText": "Ace: 'Robustness is found in the details of the math.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "How do we calculate mid SAFELY?",
        "options": ["(low + high) / 2", "low + (high - low) / 2", "(low - high) / 2", "Pico rule"],
        "correctAnswer": "low + (high - low) / 2",
        "explanation": "By subtracting first, we ensure the intermediate sum never overflows the integer limit."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Addition-Subtraction Dance",
        "explanation": "Ace: 'Subtracting low from high gives the DISTANCE. Dividing it by 2 and adding it back to low gives the center.'",
        "encouragementText": "Pico: 'Math wings! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Safe mid formula components.",
        "codeSnippet": "mid = low + ( ___ ) / 2;",
        "correctAnswer": "high - low",
        "explanation": "Calculating the offset."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Large Scale Data",
        "explanation": "Ace: 'This bug existed in many standard libraries for years. Always use the safe version.'",
        "encouragementText": "Ace: 'History is a teacher of precision.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "If low=10 and high=20, what is the distance?",
        "options": ["30", "10", "15", "Pico guess"],
        "correctAnswer": "10",
        "explanation": "high - low = 10."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Integer Precision",
        "explanation": "Ace: 'In C++ and Java, integers are fixed size. This formula is mandatory for production code.'",
        "encouragementText": "Pico: 'Fix the bug! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Final mid result for low=10, dist=10.",
        "codeSnippet": "mid = 10 + (10 / 2) = ___ ;",
        "correctAnswer": "15",
        "explanation": "Middle of 10 and 20 is 15."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Precision Architect",
        "explanation": "You have immunized your code against overflow. Ace: 'The calculation is safe.'",
        "encouragementText": "Pico: 'Steady flight! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Mid terms!",
        "pairs": [
          { "key": "low + (high-low)/2", "value": "Safe version" },
          { "key": "(low+high)/2", "value": "Unsafe version" },
          { "key": "Distance", "value": "high - low" }
        ]
      }
    ]
  },
  {
    "order": 5,
    "title": "Unit 5: Iterative Binary Search",
    "desc": "Implementing BS without recursion.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 1.5] The Loop Hunter",
        "explanation": "Ace: 'Loops are the backbone of search. Iterative Binary Search uses a `while` loop to shrink the bounds until the target is trapped.' Pico: 'Round and round! 100% 🦜'",
        "encouragementText": "Ace: 'Continuity is the fuel of discovery.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Condition for the while loop in Binary Search?",
        "options": ["low < high", "low <= high", "low != high", "Pico rule"],
        "correctAnswer": "low <= high",
        "explanation": "We must continue even when low equals high, as that single element might be the target."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Step Logic",
        "explanation": "Ace: 'Calculate mid, check, update low or high. If the loop ends without a match, return -1.'",
        "encouragementText": "Pico: 'Keep looking! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Initial values.",
        "codeSnippet": "low = 0; high = ___ ;",
        "correctAnswer": "n - 1",
        "explanation": "The range starts from the full array indices."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Efficiency",
        "explanation": "Ace: 'Iterative search is O(1) space, meaning it uses no extra memory, making it preferred for high-performance systems.'",
        "encouragementText": "Ace: 'Lean code is fast code.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Update if target < arr[mid]?",
        "options": ["low = mid + 1", "high = mid - 1", "high = mid", "Pico guess"],
        "correctAnswer": "high = mid - 1",
        "explanation": "The target is in the left half, so we move the high bound."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Termination",
        "explanation": "Ace: 'If `low > high`, the search space has collapsed to zero.'",
        "encouragementText": "Pico: 'End of the line! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "The return if target is found.",
        "codeSnippet": "if (arr[mid] == target) return ___ ;",
        "correctAnswer": "mid",
        "explanation": "Return the location (index) of the target."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Loop Master",
        "explanation": "You have implemented the core search loop. Ace: 'The execution is flawless.'",
        "encouragementText": "Pico: 'I found 10 seeds! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Loop steps!",
        "pairs": [
          { "key": "Init", "value": "low=0, high=n-1" },
          { "key": "Check", "value": "low <= high" },
          { "key": "Failure", "value": "return -1" }
        ]
      }
    ]
  },
  {
    "order": 6,
    "title": "Unit 6: Recursive Binary Search",
    "desc": "The elegant approach to division.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 1.6] The Echoing Call",
        "explanation": "Ace: 'Recursion is a function calling itself. For search, we solve a smaller sub-problem in every call.' Pico: 'Bird calls ringing through the woods! 100% 🦜'",
        "encouragementText": "Ace: 'Elegance is the shortcut of the mind.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the base case for Recursive BS?",
        "options": ["mid == n", "low > high", "arr[mid] == 0", "Pico rule"],
        "correctAnswer": "low > high",
        "explanation": "When the interval is empty, sorting must stop and declare failure."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Stack Space",
        "explanation": "Ace: 'Recursive search takes O(log N) space on the function call stack. Be careful with deep recursion!'",
        "encouragementText": "Pico: 'Stacking nests! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "The recursive call for the right side.",
        "codeSnippet": "return binarySearch(arr, ___ , high, target);",
        "correctAnswer": "mid + 1",
        "explanation": "Moving the low boundary forward in the next call."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Self-Similarity",
        "explanation": "Ace: 'Recursion works because searching in index [0-100] is exactly the same as searching in [51-100].'",
        "encouragementText": "Ace: 'Pattern is the anchor of recursive logic.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of Recursive BS?",
        "options": ["Time: O(log N), Space: O(log N)", "Time: O(N), Space: O(1)", "Time: O(1)", "Pico guess"],
        "correctAnswer": "Time: O(log N), Space: O(log N)",
        "explanation": "Both time and memory usage grow logarithmically with N."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Argument Passing",
        "explanation": "Ace: 'You must pass the target and the updated boundaries in every recursive call.'",
        "encouragementText": "Pico: 'Carry the seeds! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "The recursive call for the left side.",
        "codeSnippet": "return binarySearch(arr, low, ___ , target);",
        "correctAnswer": "mid - 1",
        "explanation": "Moving the high boundary back in the next call."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Recursive Scout",
        "explanation": "You have mastered the elegant split. Ace: 'The code is clean.'",
        "encouragementText": "Pico: 'Echo! echo! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Recur terms!",
        "pairs": [
          { "key": "Base Case", "value": "low > high" },
          { "key": "Recursive case", "value": "low <= high" },
          { "key": "Space", "value": "O(log N)" }
        ]
      }
    ]
  },
  {
    "order": 7,
    "title": "Unit 7: Lower Bound (First Presence)",
    "desc": "Finding the very first occurrence in a sorted set.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 1.7] The Earliest Bird",
        "explanation": "Ace: 'Standard BS stops when it finds ONE match. Lower Bound continues searching the LEFT half even after a match, to find the absolute FIRST occurrence.' Pico: 'Looking for the first seed of the bunch! 100% 🦜'",
        "encouragementText": "Ace: 'Priority defines the search refinement.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What do we do when `arr[mid] == target` while searching for Lower Bound?",
        "options": ["Stop and return mid", "Save mid as potential answer and set high = mid - 1", "Set low = mid + 1", "Pico rule"],
        "correctAnswer": "Save mid as potential answer and set high = mid - 1",
        "explanation": "We check if there's *another* match even further to the left."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Result Variables",
        "explanation": "Ace: 'We keep a variable `ans` initialized to -1. Every time we find a match, we update `ans` and keep narrowing the range.'",
        "encouragementText": "Pico: 'Remember the spot! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Finding Lower Bound of 2 in [1, 2, 2, 2, 3].",
        "codeSnippet": "FirstIndex = ___ ;",
        "correctAnswer": "1",
        "explanation": "Index 1 is the first occurrence of 2."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Range Queries",
        "explanation": "Ace: 'Lower Bound is used to find the start of a range of identical elements.'",
        "encouragementText": "Ace: 'Precision in boundaries is the key to range mastery.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity to find Lower Bound?",
        "options": ["O(N)", "O(log N)", "O(log log N)", "Pico guess"],
        "correctAnswer": "O(log N)",
        "explanation": "It's just one specialized binary search."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] In-range checks",
        "explanation": "Ace: 'Lower bound also identifies the first element GREATER than it if the target isn't present.'",
        "encouragementText": "Pico: 'Still useful! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Narrowing left.",
        "codeSnippet": "if (arr[mid] >= target) { ans = mid; high = ___ ; }",
        "correctAnswer": "mid - 1",
        "explanation": "We keep looking left to find the absolute minimum index."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Boundary Scout",
        "explanation": "You have identified the start of the flock. Ace: 'The boundary is fixed.'",
        "encouragementText": "Pico: 'First seed found! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Bound terms!",
        "pairs": [
          { "key": "Lower Bound", "value": "First element >= target" },
          { "key": "Upper Bound", "value": "First element > target" },
          { "key": "ans", "value": "Potenial match storage" }
        ]
      }
    ]
  },
  {
    "order": 8,
    "title": "Unit 8: Upper Bound (Last Sighting)",
    "desc": "Finding the end of the range.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 1.8] The Final Perch",
        "explanation": "Ace: 'Upper Bound finds the first element STRICTLY GREATER than the target. It helps find where a range ends.' Pico: 'Finding the exit! 100% 🦜'",
        "encouragementText": "Ace: 'Knowledge of the limit is the definition of range.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "If searching for target 2 in [1, 2, 2, 2, 3], what is the Upper Bound index?",
        "options": ["1", "3", "4", "Pico rule"],
        "correctAnswer": "4",
        "explanation": "Index 4 (value 3) is the first element greater than 2."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Rightward Push",
        "explanation": "Ace: 'For Upper Bound, if `arr[mid] <= target`, we must look in the RIGHT half, because we want someone definitely bigger.'",
        "encouragementText": "Pico: 'Go right! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Finding the last occurrence of 2 in [1, 2, 2, 2, 3] usually utilizes UB - 1.",
        "codeSnippet": "LastIndex = ___ ;",
        "correctAnswer": "3",
        "explanation": "Index 3 is the last 2."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] STL functions",
        "explanation": "Ace: 'In C++, `std::upper_bound` returns an iterator to the first element > query.'",
        "encouragementText": "Ace: 'Standard tools use standard logic.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of Upper Bound?",
        "options": ["O(log N)", "O(N)", "O(1)", "Pico guess"],
        "correctAnswer": "O(log N)",
        "explanation": "Matches the cost of any binary search."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Empty Search",
        "explanation": "Ace: 'If all elements are smaller than target, UB returns N (the size of the array).'",
        "encouragementText": "Pico: 'Off the map! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Condition for UB.",
        "codeSnippet": "if (arr[mid] ___ target) low = mid + 1;",
        "correctAnswer": "<=",
        "explanation": "If current element is less or equal, we must look right for a strictly greater one."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Limit Architect",
        "explanation": "You have defined the end of the set. Ace: 'The limit is seen.'",
        "encouragementText": "Pico: 'Last bird spotted! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match UB logic!",
        "pairs": [
          { "key": "Strictly Greater", "value": "Upper Bound" },
          { "key": "Range End", "value": "UB - 1" },
          { "key": "low = mid + 1", "value": "Push right" }
        ]
      }
    ]
  },
  {
    "order": 9,
    "title": "Unit 9: Counting the Flock",
    "desc": "Using bounds to count occurrences instantly.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 1.9] The Census",
        "explanation": "Ace: 'To count how many times target X appears, subtract the Lower Bound from the Upper Bound! This is much faster than looping and counting.' Pico: 'Subtraction power! 100% 🦜'",
        "encouragementText": "Ace: 'Efficiency is the avoidance of redundant work.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Formula to count target frequency in a sorted array?",
        "options": ["UB + LB", "UB - LB", "LB - UB", "Pico rule"],
        "correctAnswer": "UB - LB",
        "explanation": "If LB index is 1 and UB index is 4, count is 4 - 1 = 3."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Index Subtraction",
        "explanation": "Ace: 'This works in O(log N) total time. Linear counting would be O(N).'",
        "encouragementText": "Pico: 'Save time! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Count of 2s in [1, 2, 2, 2, 3] (LB=1, UB=4).",
        "codeSnippet": "Count = ___ ;",
        "correctAnswer": "3",
        "explanation": "The 2s are at indices 1, 2, 3."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Database Tuning",
        "explanation": "Ace: 'Databases use this technique to estimate how many rows will be returned by a query (Cardinality Estimation).'",
        "encouragementText": "Ace: 'The index makes the count instantaneous.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity for counting in sorted array?",
        "options": ["O(N)", "O(log N)", "O(1)", "Pico guess"],
        "correctAnswer": "O(log N)",
        "explanation": "Calculated by two binary search calls."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Presence check",
        "explanation": "Ace: 'If UB - LB == 0, the target is 100% NOT in the array.'",
        "encouragementText": "Pico: 'Empty net! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Final presence indicator.",
        "codeSnippet": "bool exists = (UB - LB ___ 0);",
        "correctAnswer": ">",
        "explanation": "If the range has size greater than zero, it exists."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Census Master",
        "explanation": "You have numbered the flock at a glance. Ace: 'The total is known.'",
        "encouragementText": "Pico: 'I counted 3! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Count terms!",
        "pairs": [
          { "key": "Difference", "value": "Total count" },
          { "key": "O(log N)", "value": "Wait time" },
          { "key": "Sorted", "value": "Required order" }
        ]
      }
    ]
  },
  {
    "order": 10,
    "title": "Unit 10: Numerical Binary Search (Sqrt)",
    "desc": "Searching on values, not indices.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 1.10] The Root Hunter",
        "explanation": "Ace: 'Binary search works on any monotonic range. To find the square root of X, search in the range [1, X]!' Pico: 'Searching for math birds! 100% 🦜'",
        "encouragementText": "Ace: 'Knowledge is the intersection of range and rule.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "In finding `sqrt(10)`, what does `mid * mid = 9` tell us?",
        "options": ["Answer is smaller", "Answer is probably 3 (Keep search right for floor)", "Answer is wrong", "Pico rule"],
        "correctAnswer": "Answer is probably 3 (Keep search right for floor)",
        "explanation": "Since 9 < 10, 3 is a potential candidate for the floor of the square root."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Square Check",
        "explanation": "Ace: 'Condition: If `mid * mid <= X`, update `ans` and move `low`. Else move `high`.'",
        "encouragementText": "Pico: 'Multiply! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Initial searching high bound for sqrt(100).",
        "codeSnippet": "high = ___ ;",
        "correctAnswer": "100",
        "explanation": "The square root will never be larger than the number itself."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Convergence",
        "explanation": "Ace: 'For floating point square roots, we continue for a fixed number of iterations (e.g. 100) until the precision is perfect.'",
        "encouragementText": "Ace: 'Repetition leads to absolute precision.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity for finding floor(sqrt(X))?",
        "options": ["O(X)", "O(log X)", "O(1)", "Pico guess"],
        "correctAnswer": "O(log X)",
        "explanation": "Standard binary search complexity over the value range."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Result update",
        "explanation": "Ace: '`ans` keeps the largest value such that `val * val <= target`.'",
        "encouragementText": "Pico: 'Biggest square! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Check for sqrt.",
        "codeSnippet": "while(low <= high) { long long mid = ...; if (mid * mid ___ X) { ans = mid; ... }}",
        "correctAnswer": "<=",
        "explanation": "Ensuring we don't exceed the target square."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Value Scout",
        "explanation": "You have transitioned from searching arrays to searching truths. Ace: 'The value is found.'",
        "encouragementText": "Pico: 'Found 3! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Sqrt terms!",
        "pairs": [
          { "key": "mid * mid", "value": "Check power" },
          { "key": "Floor", "value": "Int result" },
          { "key": "Monotonic", "value": "Required range property" }
        ]
      }
    ]
  },
  {
    "order": 11,
    "title": "Unit 11: Rotating Arrays I (The Pivot)",
    "desc": "Searching in sorted-then-shifted data.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 1.11] The Bent Forest",
        "explanation": "Ace: 'What if a sorted array is rotated? (e.g. [4, 5, 6, 7, 0, 1, 2]). We need to find the \"Pivot Point\"—the minimum element—to restore the order!' Pico: 'The forest is curved! 100% 🦜'",
        "encouragementText": "Ace: 'Disorder is just hidden symmetry.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "In [4, 5, 0, 1, 2], how do we know the pivot is to the RIGHT of index 0?",
        "options": ["arr[0] < arr[last]", "arr[0] > arr[last]", "Colors", "Pico rule"],
        "correctAnswer": "arr[0] > arr[last]",
        "explanation": "In a rotated sorted array, the start being larger than the end proves the pivot lies in between."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Property check",
        "explanation": "Ace: 'A sorted array has `arr[0] < arr[n-1]`. A rotated one does not. We binary search for the inflection point.'",
        "encouragementText": "Pico: 'Find the drop! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Identifying min in [5, 6, 1, 2, 3].",
        "codeSnippet": "MinVal = ___ ;",
        "correctAnswer": "1",
        "explanation": "The smallest element is the pivot."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] System Recovery",
        "explanation": "Ace: 'Rotated arrays happen in circular buffers and time-series data. Handling them is a vital skill.'",
        "encouragementText": "Ace: 'Structure is resilient to rotation.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity to find pivot in rotated array?",
        "options": ["O(N)", "O(log N)", "O(1)", "Pico guess"],
        "correctAnswer": "O(log N)",
        "explanation": "Binary search finds it by checking the slope."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Slope logic",
        "explanation": "Ace: 'If `arr[mid] > arr[high]`, the pivot is in the right half. Else it is in the left half.'",
        "encouragementText": "Pico: 'Right side drop! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Updating high in binary pivot search.",
        "codeSnippet": "if (arr[mid] < arr[high]) high = ___ ;",
        "correctAnswer": "mid",
        "explanation": "Pivot might be mid or to the left."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Pivot Pilot",
        "explanation": "You have located the break in the line. Ace: 'The rotation is identified.'",
        "encouragementText": "Pico: 'Found the bottom! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Rotation terms!",
        "pairs": [
          { "key": "Inflection", "value": "Max-to-Min drop" },
          { "key": "arr[0] < arr[n-1]", "value": "Already sorted" },
          { "key": "arr[mid] > arr[high]", "value": "Search right" }
        ]
      }
    ]
  },
  {
    "order": 12,
    "title": "Unit 12: Rotating Arrays II (Search)",
    "desc": "Finding a target in a rotated sorted array.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 1.12] The Curved Hunt",
        "explanation": "Ace: 'Now that you can find the pivot, you can search for ANY target. The trick is to identify which half is \"Normal\" (sorted) and decide where to go.' Pico: 'Finding a seed in the curves! 100% 🦜'",
        "encouragementText": "Ace: 'Segments of order form the bridge of discovery.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "In a rotated array, at least ONE half must be ___.",
        "options": ["Empty", "Sorted", "All zero", "Pico rule"],
        "correctAnswer": "Sorted",
        "explanation": "Cutting a rotated sorted array at ANY point yields at least one perfectly sorted half."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Half-check",
        "explanation": "Ace: 'If `arr[low] <= arr[mid]`, the left half is sorted. Check if target is inside [low, mid]. Else look right.'",
        "encouragementText": "Pico: 'Safe half! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Checking if target is in sorted left half.",
        "codeSnippet": "if (target >= arr[low] && target ___ arr[mid])",
        "correctAnswer": "<=",
        "explanation": "Target must be between the boundaries of the sorted segment."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Interview Classic",
        "explanation": "Ace: 'This is one of the most common coding interview questions. It tests your ability to handle multiple conditions in BS.'",
        "encouragementText": "Ace: 'Complexity is the test of mental range.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity for searching rotated array?",
        "options": ["O(N)", "O(log N)", "O(log log N)", "Pico guess"],
        "correctAnswer": "O(log N)",
        "explanation": "It's still just binary search."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Pivot strategy 2",
        "explanation": "Ace: 'You can also find the pivot first, then do one BS in the correct half.'",
        "encouragementText": "Pico: 'Two steps! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "The case where right half is definitely sorted.",
        "codeSnippet": "else { // Right half is sorted\n  if (target > arr[mid] && target <= arr[ ___ ]) low = mid + 1;\n}",
        "correctAnswer": "high",
        "explanation": "Checking the range of the right-sorted segment."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Curved Architect",
        "explanation": "You have hunted through the shifted forest. Ace: 'The target is caught.'",
        "encouragementText": "Pico: 'Curved and found! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Search cases!",
        "pairs": [
          { "key": "Left sorted", "value": "arr[low] <= arr[mid]" },
          { "key": "Right sorted", "value": "arr[mid] < arr[high]" },
          { "key": "Match", "value": "return mid" }
        ]
      }
    ]
  },
  {
    "order": 13,
    "title": "Unit 13: Median of Two Sorted Arrays",
    "desc": "Finding the middle across two datasets.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 1.13] The Dual Stream",
        "explanation": "Ace: 'Suppose you have two sorted arrays. What is the median of their combined set? We don't want to merge them (O(N)). We want to find the split point in binary time!' Pico: 'Two rivers, one bridge! 100% 🦜'",
        "encouragementText": "Ace: 'Global order is found at the intersection of local sorts.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Optimality of combined median search?",
        "options": ["O(N+M)", "O(log(min(N,M)))", "O(1)", "Pico rule"],
        "correctAnswer": "O(log(min(N,M)))",
        "explanation": "By binary searching on the partition point of the smaller array, we instantly know the partition of the other."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Partition Logic",
        "explanation": "Ace: 'Total size is (N+M). We want (N+M+1)/2 items in the left side of our split across both arrays.'",
        "encouragementText": "Pico: 'Split the birds! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Checking the split: maxLeft1 <= ___ .",
        "codeSnippet": "maxLeft1 <= ___ ;",
        "correctAnswer": "minRight2",
        "explanation": "Standard check for valid partition in dual-array median finding."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Hard Problems",
        "explanation": "Ace: 'This is considered a HARD problem, but once you understand binary search on partitions, it becomes mechanical.'",
        "encouragementText": "Ace: 'Difficulty is the fog before the logic clears.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Combined size is 5 (Odd). Median is?",
        "options": ["Average of two middle", "The Max of Left side", "The Min of Right side", "Pico guess"],
        "correctAnswer": "The Max of Left side",
        "explanation": "For odd totals, the max of the 'Left' partition is the median."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Edge cases",
        "explanation": "Ace: 'Handle cases where one array is empty by using infinity values for comparison.'",
        "encouragementText": "Pico: 'Ghost seeds! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Condition to search closer left on Array 1.",
        "codeSnippet": "if (maxLeft1 > minRight2) high = ___ ;",
        "correctAnswer": "partition1 - 1",
        "explanation": "Too many items from A1; move the partition back."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Dual Master",
        "explanation": "You have balanced the two rivers. The median is yours. Ace: 'The center holds.'",
        "encouragementText": "Pico: 'Perfect balance! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Dual terms!",
        "pairs": [
          { "key": "Partition", "value": "Cut point" },
          { "key": "maxLeft", "value": "Largest on left side" },
          { "key": "minRight", "value": "Smallest on right side" }
        ]
      }
    ]
  },
  {
    "order": 14,
    "title": "Unit 14: Bubble Sort (The Buoyancy)",
    "desc": "Foundational comparison sorting.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 1.14] The Floating Seeds",
        "explanation": "Ace: 'Bubble Sort compares adjacent items and swaps them if they are in the wrong order. The largest element \"Bubbles up\" to the end in every pass.' Pico: 'Seeds floating to the top! 100% 🦜'",
        "encouragementText": "Ace: 'Local correction leads to global alignment.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Time complexity of Bubble Sort?",
        "options": ["O(N)", "O(N^2)", "O(log N)", "Pico rule"],
        "correctAnswer": "O(N^2)",
        "explanation": "Two nested loops; each element is potentially compared with every other."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Swap Logic",
        "explanation": "Ace: 'If `arr[j] > arr[j+1]`, swap them. Continue until no swaps are needed.'",
        "encouragementText": "Pico: 'Swap it! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Number of passes needed for N items.",
        "codeSnippet": "Passes = ___ ;",
        "correctAnswer": "N-1",
        "explanation": "In each pass, one more element reaches its final spot."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Stability",
        "explanation": "Ace: 'Bubble sort is Stable. Items with the same value keep their original relative order.'",
        "encouragementText": "Ace: 'Integrity is preserved through local rules.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Optimization: If no swaps happen in a pass, the array is ___.",
        "options": ["Empty", "Sorted", "Reversed", "Pico guess"],
        "correctAnswer": "Sorted",
        "explanation": "The 'Swapped' flag allows Bubble sort to finish early."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] In-Place",
        "explanation": "Ace: 'Bubble Sort uses O(1) extra space because it only swaps elements within the existing array.'",
        "encouragementText": "Pico: 'Save memory! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Inner loop bound optimization.",
        "codeSnippet": "for(int j=0; j < n-i- ___ ; j++)",
        "correctAnswer": "1",
        "explanation": "Since the last 'i' elements are already sorted."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Bubble Scout",
        "explanation": "You have witnessed the slow ascent of order. Ace: 'The surface is reached.'",
        "encouragementText": "Pico: 'So many pops! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Bubble terms!",
        "pairs": [
          { "key": "Adjacent", "value": "Comparison target" },
          { "key": "Bubbling", "value": "Movement to end" },
          { "key": "Swapped flag", "value": "Early exit" }
        ]
      }
    ]
  },
  {
    "order": 15,
    "title": "Unit 15: Selection Sort (The Picking)",
    "desc": "Finding the minimum and placing it forward.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 1.15] The Selective Eye",
        "explanation": "Ace: 'Selection Sort scans the entire unsorted part of the array, finds the minimum, and swaps it with the first unsorted element.' Pico: 'Picking the best seeds first! 100% 🦜'",
        "encouragementText": "Ace: 'Discernment is the first step of organization.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of Selection Sort?",
        "options": ["O(N)", "O(N^2)", "O(log N)", "Pico rule"],
        "correctAnswer": "O(N^2)",
        "explanation": "N passes, each scanning through the remaining items."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Min Index",
        "explanation": "Ace: 'We keep track of the `min_idx`. After the scan, we do exactly ONE swap per pass.'",
        "encouragementText": "Pico: 'Only one swap! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Finding the winner.",
        "codeSnippet": "if (arr[j] < arr[min_idx]) min_idx = ___ ;",
        "correctAnswer": "j",
        "explanation": "Updating the location of the current smallest bird."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Memory Swaps",
        "explanation": "Ace: 'Selection Sort is useful when memory writing is expensive (like EEPROM), because it performs the minimum number of swaps ($O(N)$).' ",
        "encouragementText": "Ace: 'Economy of action is the virtue of the selection.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Is Selection Sort stable?",
        "options": ["Yes", "No (Swaps can jump over identical items)", "Always", "Pico guess"],
        "correctAnswer": "No (Swaps can jump over identical items)",
        "explanation": "Selection sort is generally unstable because of long-distance swaps."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Divide",
        "explanation": "Ace: 'The array is split into two parts: Sorted items at the front, unsorted at the back.'",
        "encouragementText": "Pico: 'Growing line! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Placing the winner.",
        "codeSnippet": "swap(arr[i], arr[ ___ ]);",
        "correctAnswer": "min_idx",
        "explanation": "Moving the found minimum into the sorted section."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Selective Scout",
        "explanation": "You have learned to find the best and place them first. Ace: 'The rank is formed.'",
        "encouragementText": "Pico: 'I picked it! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Selection terms!",
        "pairs": [
          { "key": "min_idx", "value": "Target storage" },
          { "key": "One swap", "value": "Pass result" },
          { "key": "Scan", "value": "O(N) operation per pass" }
        ]
      }
    ]
  },
  {
    "order": 16,
    "title": "Unit 16: Insertion Sort (The Organizer)",
    "desc": "Sorting like a hand of cards.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 1.16] The Nest Builder",
        "explanation": "Ace: 'Insertion Sort takes one element at a time and \"Inserts\" it into its correct position among the already sorted elements. Think of organizing cards in your hand.' Pico: 'Putting the seeds in their slots! 100% 🦜'",
        "encouragementText": "Ace: 'Insertion is the incremental creation of order.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of Insertion Sort for ALREADY sorted data?",
        "options": ["O(N^2)", "O(N)", "O(1)", "Pico rule"],
        "correctAnswer": "O(N)",
        "explanation": "Adaptive! If it's sorted, we just check each item once and stay put."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Shift",
        "explanation": "Ace: 'To make room for the new element, we shift all larger neighbors to the right.'",
        "encouragementText": "Pico: 'Slide over! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Condition for shifting.",
        "codeSnippet": "while(j >= 0 && arr[j] ___ key) { ... j--; }",
        "correctAnswer": ">",
        "explanation": "While the neighboring bird is bigger, move it right to make space for the key."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Hybrid Sorts",
        "explanation": "Ace: 'Because it is so fast for small N (e.g. N < 15), fast algorithms like Timsort use Insertion Sort for small fragments.'",
        "encouragementText": "Ace: 'Small-scale speed is the foundation of global velocity.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Is Insertion Sort stable?",
        "options": ["Yes", "No", "Depends", "Pico guess"],
        "correctAnswer": "Yes",
        "explanation": "We only shift elements if they are strictly larger than the key, preserving order of equals."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Key item",
        "explanation": "Ace: 'The `key` is the element currently being inserted.'",
        "encouragementText": "Pico: 'Hold the key! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Placing the key.",
        "codeSnippet": "arr[j+1] = ___ ;",
        "correctAnswer": "key",
        "explanation": "Dropping the element into the empty slot created by shifting."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Organizing Scout",
        "explanation": "You have mastered the incremental build. Ace: 'The sequence is solid.'",
        "encouragementText": "Pico: 'Perfect hand! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Insertion terms!",
        "pairs": [
          { "key": "O(N)", "value": "Best case" },
          { "key": "Shifting", "value": "Making room" },
          { "key": "Adaptive", "value": "Input-sensitive" }
        ]
      }
    ]
  },
  {
    "order": 17,
    "title": "Unit 17: Bucket Sort",
    "desc": "Sorting by range: Dividing into containers.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 1.17] The Sorting Vases",
        "explanation": "Ace: 'If items are uniformly distributed, we put them into \"Buckets\". Then sort each bucket individually. It is extremely fast!' Pico: 'Different seeds in different pots! 100% 🦜'",
        "encouragementText": "Ace: 'Distribution is the first clue to order.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Average complexity of Bucket Sort?",
        "options": ["O(N log N)", "O(N)", "O(N^2)", "Pico rule"],
        "correctAnswer": "O(N)",
        "explanation": "If buckets are even, we only have a few items per bucket, leading to linear time."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Bucket Index",
        "explanation": "Ace: 'Index = (value * num_buckets). This maps the value to its container.'",
        "encouragementText": "Pico: 'Pick a bucket! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Sorting individual buckets.",
        "codeSnippet": "for(b in buckets) ___ (b);",
        "correctAnswer": "sort",
        "explanation": "Commonly using Insertion Sort for small bucket contents."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Range limits",
        "explanation": "Ace: 'Works best for numbers in a known range (like [0, 1]). Performance drops if many items hit the same bucket.'",
        "encouragementText": "Ace: 'Uniformity is the fuel of bucket efficiency.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Bucket Sort worst-case?",
        "options": ["O(N)", "O(N^2) (All items in one bucket)", "O(1)", "Pico guess"],
        "correctAnswer": "O(N^2) (All items in one bucket)",
        "explanation": "If distribution is clumped, we lose the benefit of the buckets."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Combine",
        "explanation": "Ace: 'Finally, concatenate all sorted buckets into one array.'",
        "encouragementText": "Pico: 'Glue them back! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Number of buckets for N items (Common).",
        "codeSnippet": "NumBuckets = ___ ;",
        "correctAnswer": "N",
        "explanation": "Using roughly one bucket per item helps achieve O(N) time."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Bucket Scout",
        "explanation": "You have learned to separate and conquer. Ace: 'The flow is partitioned.'",
        "encouragementText": "Pico: 'Sorted pots! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Bucket terms!",
        "pairs": [
          { "key": "O(N)", "value": "Average case" },
          { "key": "Insertion", "value": "Internal sort" },
          { "key": "Concatenate", "value": "Combine step" }
        ]
      }
    ]
  },
  {
    "order": 18,
    "title": "Unit 18: Counting Sort",
    "desc": "Sorting without comparison: Using counts as positions.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 1.18] The Census Sort",
        "explanation": "Ace: 'If you have a limited range of integers, just count how many of each exist. Then place them in order!' Pico: 'How many red seeds? How many blue? 100% 🦜'",
        "encouragementText": "Ace: 'Counting is a higher-order operation than comparison.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of Counting Sort?",
        "options": ["O(N log N)", "O(N + K) where K is the range", "O(N^2)", "Pico rule"],
        "correctAnswer": "O(N + K) where K is the range",
        "explanation": "One pass to count, one to create the result. Very fast if K is small."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Prefix Sum",
        "explanation": "Ace: 'Convert counts into indices by doing a prefix sum. This tells you EXACTLY where the last occurrence of each value should go.'",
        "encouragementText": "Pico: 'Sum them up! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Building the count array.",
        "codeSnippet": "count[arr[i]] ___ ;",
        "correctAnswer": "++",
        "explanation": "Incrementing the frequency of each value found."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Constraints",
        "explanation": "Ace: 'Only works for integers and small ranges. If the range is 1 billion, your count array will be too big for RAM.'",
        "encouragementText": "Ace: 'Range is the boundary of memory capacity.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Is Counting Sort stable?",
        "options": ["Yes, if implemented with a back-to-front pass", "No", "Always", "Pico guess"],
        "correctAnswer": "Yes, if implemented with a back-to-front pass",
        "explanation": "By processing the original array from right to left, equal elements maintain their order."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Space Cost",
        "explanation": "Ace: 'Space complexity is O(K), where K is the range of values.'",
        "encouragementText": "Pico: 'Big array! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Prefix sum logic.",
        "codeSnippet": "count[i] += count[ ___ ];",
        "correctAnswer": "i-1",
        "explanation": "Accumulating counts to form positions."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Census Architect",
        "explanation": "You have calculated the positions from the totals. Ace: 'The rank is absolute.'",
        "encouragementText": "Pico: 'I count 100! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Counting terms!",
        "pairs": [
          { "key": "No compare", "value": "Counting sort property" },
          { "key": "K", "value": "Range of values" },
          { "key": "Auxiliary", "value": "Extra array" }
        ]
      }
    ]
  },
  {
    "order": 19,
    "title": "Unit 19: Nearly Sorted Array Search",
    "desc": "Optimizing for local displacements.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 1.19] The Shifting Branch",
        "explanation": "Ace: 'In a nearly sorted array, an item at index `i` might be at `i-1` or `i+1`. We can still use Binary Search, but we must check all three neighbors at the middle step!' Pico: 'Wobbly seeds! 100% 🦜'",
        "encouragementText": "Ace: 'Tolerance for displacement is the mark of a robust algorithm.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "How many indices do we check for Target in each BS step of a Nearly Sorted array?",
        "options": ["1 (mid)", "3 (mid-1, mid, mid+1)", "All", "Pico rule"],
        "correctAnswer": "3 (mid-1, mid, mid+1)",
        "explanation": "Checking the immediate neighbors handles the 'Nearly' part of the sort."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Boundary Check",
        "explanation": "Ace: 'Always ensure `mid-1 >= low` and `mid+1 <= high` before checking neighbors.'",
        "encouragementText": "Pico: 'Stay in bounds! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Updating `low` after checking 3 neighbors.",
        "codeSnippet": "if (target > arr[mid]) low = mid + ___ ;",
        "correctAnswer": "2",
        "explanation": "Since we already checked mid and mid+1, we skip them."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Real-time sensors",
        "explanation": "Ace: 'Used when data is mostly ordered but small transmission errors or timing jitters cause slight element swaps.'",
        "encouragementText": "Ace: 'Search must adapt to the noise of the physical world.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity for nearly sorted search?",
        "options": ["O(N)", "O(log N)", "O(log log N)", "Pico guess"],
        "correctAnswer": "O(log N)",
        "explanation": "Still logarithmic, just with slightly more constant work per step."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Skip",
        "explanation": "Ace: 'When moving boundaries, skip 2 elements because you've already verified the neighbors.'",
        "encouragementText": "Pico: 'Jump 2! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Updating `high`.",
        "codeSnippet": "if (target < arr[mid]) high = mid - ___ ;",
        "correctAnswer": "2",
        "explanation": "Skipping mid and mid-1."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Flex-Scout",
        "explanation": "You have hunted through the shaking branches. Ace: 'The target is caught.'",
        "encouragementText": "Pico: 'Got him! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Nearly terms!",
        "pairs": [
          { "key": "k-displacement", "value": "Nearly sorted property" },
          { "key": "Skip 2", "value": "BS Optimization" },
          { "key": "mid-1, mid, mid+1", "value": "Comparison window" }
        ]
      }
    ]
  },
  {
    "order": 20,
    "title": "Unit 20: Stage 1 Graduation (The Scout Lord)",
    "desc": "Foundational mastery achieved.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[GRAND MISSION LORE 1.20] The Zenith of Foundations",
        "explanation": "Ace: 'You have mastered the search of the forest, from the linear loop to the logarithmic dividide and the foundations of comparison sorting. You are no longer a fledgling.' Pico: 'Stage 1 Complete! 200 lessons of pure power! 100% 🦜'",
        "encouragementText": "Ace: 'Foundation is the architect of the infinite.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of Binary Search?",
        "options": ["O(N)", "O(log N)", "O(N^2)", "Pico rule"],
        "correctAnswer": "O(log N)",
        "explanation": "The baseline for all elite searching."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Progress Summary",
        "explanation": "20 units, 200 lessons. This stage has equipped you with the search speed and basic order logic for the Academic Atlas. Ace: 'Fly with intent.'",
        "encouragementText": "Pico: '20% to the 1,000-lesson gauntlet! 🦜'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Adaptive sort that is O(N) for sorted data?",
        "options": ["Bubble", "Selection", "Insertion", "Pico secret"],
        "correctAnswer": "Insertion",
        "explanation": "Insertion sort thrives on nearly sorted input."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Graduation Check",
        "explanation": "Ace: 'Prove you can transition from Linear Scans to Logarithmic Bounds and Bubble Swaps to Bucket Distributions in your mental buffers.' Pico: 'I'm a Scout Lord now! 100% 🦜'",
        "encouragementText": "Ace: 'The search reflects the scout through the lens of the index.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Benefit of Sentinel Search?",
        "options": ["Less memory", "Fewer loop comparisons", "Sorting logic", "Pico guess"],
        "correctAnswer": "Fewer loop comparisons",
        "explanation": "Optimizes the hottest path of the linear search."
      },
      {
        "type": "teaching",
        "questionText": "[FINAL SYNC] The 10x10x10 Path",
        "explanation": "You are 20% through the ultimate journey. Your next target: **Stage 2: Divide & Conquer**. Ace: 'The Merge and Quick are waiting.'",
        "encouragementText": "Pico: 'Stage 2 seeds are waiting! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Final stage signal.",
        "codeSnippet": "if (scout_lord == true) return ___ ;",
        "correctAnswer": "GRADUATE",
        "explanation": "You have successfully mastered the Foundations phase."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Scout Lord",
        "explanation": "The first gate is passed. The foundation is set. You are a Stage 1 Graduate. Ace: 'Welcome to the inner circle.'",
        "encouragementText": "Pico: 'Titan-Grade! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "[GRADUATION CHALLENGE] Output the status of your journey.",
        "codeSnippet": "for(int i=1; i<=20; i++) verify_foundations(i);\nreturn ___ ;",
        "correctAnswer": "COMPLETE",
        "explanation": "The first 200 lessons of the 1,000-lesson curriculum for Search/Sort are verified."
      }
    ]
  }
];

module.exports = stage1;
