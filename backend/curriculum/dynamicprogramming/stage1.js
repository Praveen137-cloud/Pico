const stage1 = [
  {
    "order": 1,
    "title": "Unit 1: The Memory Vault",
    "desc": "Foundations: Understanding Overlapping Subproblems and Optimal Substructure with Ace & Pico.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 1.1] Echoes in the Matrix",
        "explanation": "Pico: 'Recursion is like a bird flying in circles. Dynamic Programming is like a bird building a nest so it never has to fly the same circle twice!' Ace: 'Technical precision, Pico. DP is the art of solving the infinite by remembering the finite. If you see Overlapping Subproblems and Optimal Substructure, we apply the Vault.'",
        "codeSnippet": "// Fibonacci(5) = Fib(4) + Fib(3)\n// Both Fib(4) and Fib(3) will call Fib(2). That's an Overlap.",
        "encouragementText": "Ace: 'Why re-calculate what is already known?'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What are the two core properties required for a problem to be solvable by DP?",
        "options": ["Fast CPU and RAM", "Overlapping Subproblems and Optimal Substructure", "Sorting and Searching", "Pico rule"],
        "correctAnswer": "Overlapping Subproblems and Optimal Substructure",
        "explanation": "Overlap means we repeat work; Optimal Substructure means the global answer is made of local answers."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Memoization vs Tabulation",
        "explanation": "Ace: 'Memoization is Top-Down. We keep a notepad (cache) while recursing. Tabulation is Bottom-Up. We fill a table from the ground up.' Pico: 'Top-down is like diving into the sea; Bottom-up is like building a tower! 🦜'",
        "encouragementText": "Pico: 'Build the tower! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "What is the common term for 'Top-Down' with the cache?",
        "codeSnippet": "DP_Approaches = { TopDown: '___', BottomUp: 'Tabulation' };",
        "correctAnswer": "Memoization",
        "explanation": "Memoization refers to caching the results of expensive function calls."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] The Time Paradox",
        "explanation": "Without DP, Fibonacci(50) takes ~2^50 operations. That's 1.1 Quadrillion! With DP (O(N)), it takes exactly 50 operations. Ace: 'From trillions to dozens. That is the power of memory.'",
        "encouragementText": "Ace: 'Efficiency is the only way to scale the Matrix.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Which DP approach handles the recursion stack overhead better?",
        "options": ["Memoization", "Tabulation", "Brute Force", "Pico guess"],
        "correctAnswer": "Tabulation",
        "explanation": "Tabulation is iterative, avoiding the risk of StackOverflow for deep recursion."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Null Space",
        "explanation": "Pico: 'Wait, Ace! How do we know if we've been there before?' Ace: 'We initialize the cache with a sentinel value. Usually -1 or Null. If the cache is not -1, the answer is ready.'",
        "encouragementText": "Ace: 'Never visit the same state twice.'"
      },
      {
        "type": "programming_board",
        "questionText": "Memoization check logic.",
        "codeSnippet": "if (memo[state] ___ -1) return memo[state];",
        "correctAnswer": "!=",
        "explanation": "If the value is not the sentinel (-1), it means it's already calculated."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Vault Entry",
        "explanation": "You have entered the Vault. You have seen the inefficiency of the naked tree and the elegance of the cached path. Ace: 'Master the cache, and you master time itself.'",
        "encouragementText": "Pico: 'Keep the seeds in the vault! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match DP terms!",
        "pairs": [
          { "key": "Memoization", "value": "Top-Down (Recursion)" },
          { "key": "Tabulation", "value": "Bottom-Up (Iteration)" },
          { "key": "Overlap", "value": "The reason for DP" }
        ]
      }
    ]
  },
  {
    "order": 2,
    "title": "Unit 2: The Fibonacci Blueprint",
    "desc": "Applying Titan-Grade DP to the world's most famous sequence.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 1.2] The Spiral of Logic",
        "explanation": "Ace: 'Fibonacci numbers are the pulse of nature. But nature is efficient; standard computer recursive models are not.' Pico: 'We calculate Fib(2) once, twice... a million times! No more! 🦜'",
        "codeSnippet": "fib[i] = fib[i-1] + fib[i-2];",
        "encouragementText": "Ace: 'The sequence is simple; the optimization is profound.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the Time Complexity of Naive Fibonacci Recursion?",
        "options": ["O(N)", "O(N^2)", "O(2^N)", "Pico rule"],
        "correctAnswer": "O(2^N)",
        "explanation": "Each call branches into two more calls, leading to exponential growth."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Complexity Collapse",
        "explanation": "Ace: 'By using O(N) space, we turn O(2^N) time into O(N) time. This is the first Law of the Matrix: Trading space for time.' Pico: 'Give me a little RAM, and I'll give you the world! 🦜'",
        "encouragementText": "Pico: 'RAM for speed! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Iterative Fibonacci update.",
        "codeSnippet": "for (int i = 2; i <= n; i++) {\n  dp[i] = dp[i-1] ___ dp[i-2];\n}",
        "correctAnswer": "+",
        "explanation": "The sum of the two preceding numbers defines the Fibonacci sequence."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Space Optimization",
        "explanation": "Ace: 'Wait. Do we need the WHOLE array? If we only need the last two numbers, we can use O(1) space.' Pico: 'Just remember the last two breaths! 🦜'",
        "encouragementText": "Ace: 'Optimize the memory after you optimize the time.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the space complexity of Fibonacci with only two variables?",
        "options": ["O(N)", "O(1)", "O(log N)", "Pico guess"],
        "correctAnswer": "O(1)",
        "explanation": "We only store two integers, regardless of how large N is."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Rolling Window",
        "explanation": "Ace: 'Current = Prev1 + Prev2. Then Prev2 = Prev1, and Prev1 = Current.' Pico: 'It's a treadmill of numbers! 🦜'",
        "encouragementText": "Pico: 'Run the numbers! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Shifting the window for next step.",
        "codeSnippet": "long long next = prev1 + prev2;\nprev2 = prev1;\nprev1 = ___ ;",
        "correctAnswer": "next",
        "explanation": "The new value becomes the 'most recent' for the next iteration."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Spiral Master",
        "explanation": "You have mastered the Fibonacci Blueprint. You can transition from exponential chaos to linear order and even constant memory. Ace: 'The sequence is your first victory.'",
        "encouragementText": "Pico: 'Spiral up! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Complexity!",
        "pairs": [
          { "key": "Naive", "value": "O(2^N)" },
          { "key": "Table DP", "value": "O(N) Time, O(N) Space" },
          { "key": "Optimized", "value": "O(N) Time, O(1) Space" }
        ]
      }
    ]
  },
  {
    "order": 3,
    "title": "Unit 3: The Climber's Path",
    "desc": "Climbing Stairs: mapping real-world decisions to DP transitions.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 1.3] Sky-Stairs of Titan",
        "explanation": "Ace: 'You are at the bottom of the Titan Spire. You can climb 1 step or 2 steps at a time. How many ways to reach the top?' Pico: 'It's just Fibonacci in disguise! Steps to N = Steps to (N-1) + Steps to (N-2)! 🦜'",
        "codeSnippet": "dp[i] = dp[i-1] + dp[i-2];",
        "encouragementText": "Ace: 'The logic of sequences appears in the most unexpected heights.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "How many ways to climb 3 stairs? (Options: 1+1+1, 1+2, 2+1)",
        "options": ["2", "3", "5", "Pico rule"],
        "correctAnswer": "3",
        "explanation": "Possible paths: (1,1,1), (1,2), (2,1)."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Base Connection",
        "explanation": "Ace: 'Wait. If there is 1 step, there's 1 way. If there are 0 steps, there's 1 way (standing still). These are our foundations.' Pico: 'Always start with the bird on the ground! 🦜'",
        "encouragementText": "Pico: 'Foundation first! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Initial base cases for n steps problem.",
        "codeSnippet": "dp[0] = 1;\ndp[1] = ___ ;",
        "correctAnswer": "1",
        "explanation": "There is only one way to stay at step 0 (do nothing) and one way to reach step 1 (take one step)."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Variation: K-Steps",
        "explanation": "Ace: 'What if you can take 1, 2, or 3 steps? Then dp[i] = sum(dp[i-1], dp[i-2], dp[i-3]).' Pico: 'More options, more math! 🦜'",
        "encouragementText": "Ace: 'The formula grows with the choice.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "If you can take up to K steps, what is the complexity for N stairs?",
        "options": ["O(N)", "O(N * K)", "O(K^N)", "Pico guess"],
        "correctAnswer": "O(N * K)",
        "explanation": "For each of the N stairs, you sum up to K previous results."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Cost of the Climb",
        "explanation": "Ace: 'What if every stair has a cost? We don't want the number of ways, we want the MINIMUM COST.' Pico: 'Cheap bird wins! 🦜'",
        "encouragementText": "Pico: 'Save the seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Min cost to reach stair 'i'.",
        "codeSnippet": "dp[i] = cost[i] + ___ (dp[i-1], dp[i-2]);",
        "correctAnswer": "min",
        "explanation": "We choose the cheaper previous stair to arrive from."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Spire Conquest",
        "explanation": "You have reached the top of the logic spire. You see that combinations and costs are just two sides of the same transition coin. Ace: 'Geometry is the destiny of the climb.'",
        "encouragementText": "Pico: 'Top of the world! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Stair logic!",
        "pairs": [
          { "key": "Number of ways", "value": "Sum transitions" },
          { "key": "Minimum cost", "value": "Min transitions" },
          { "key": "Base Case", "value": "Start of the climb" }
        ]
      }
    ]
  },
  {
    "order": 4,
    "title": "Unit 4: The Thief of States",
    "desc": "House Robber: mastering the 'Take or Leave' decision pattern.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 1.4] The Heist of Unit-13",
        "explanation": "Ace: 'A row of houses, each with a stash of seeds. You cannot rob adjacent houses or the alarms trip. What is the max profit?' Pico: 'A thief's DP! I take House A, I can't take B. I skip A, maybe I take B! 🦜'",
        "codeSnippet": "dp[i] = max(rob(i-1), house[i] + rob(i-2));",
        "encouragementText": "Ace: 'Consequence is the shadow of every choice.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "If you are at house 'i', and you decide to ROB it, from which house did you come?",
        "options": ["i-1", "i-2 (or earlier)", "i+1", "Pico rule"],
        "correctAnswer": "i-2 (or earlier)",
        "explanation": "Because you cannot rob adjacent houses, robbing 'i' implies you skipped 'i-1'."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Choice Matrix",
        "explanation": "Ace: 'For every house, there are two realities: You either take it (and add value to dp[i-2]) or skip it (taking the max value of dp[i-1]).' Pico: 'The max of two lives! 🦜'",
        "encouragementText": "Pico: 'Pick the best life! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "DP relation for house robber.",
        "codeSnippet": "dp[i] = max(dp[i-1], val[i] + ___ );",
        "correctAnswer": "dp[i-2]",
        "explanation": "The maximum profit including the current house is the current value plus the maximum profit from two houses ago."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] House Robber II: The Circle",
        "explanation": "Ace: 'Imagine the houses are in a CIRCLE. The first and last are neighbors.' Pico: 'OH NO! If I take the first, the last is off-limits! 🦜'",
        "encouragementText": "Ace: 'Break the circle into two linear problems: [0 to N-2] and [1 to N-1].'"
      },
      {
        "type": "multiple_choice",
        "questionText": "How do we solve the Circular House Robber problem?",
        "options": ["Try all combinations", "Run standard DP twice (skipping first house once, skipping last house once)", "It's impossible", "Pico guess"],
        "correctAnswer": "Run standard DP twice (skipping first house once, skipping last house once)",
        "explanation": "By running it twice, we cover all cases where first and last aren't both taken."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Complexity Check",
        "explanation": "Ace: 'Even with the circle, it is still O(N) time and O(1) space if we use variable optimization.' Pico: 'Fastest heist in history! 🦜'",
        "encouragementText": "Pico: 'Steal the seeds fast! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Final profit of circular heist.",
        "codeSnippet": "return max(rob_linear(house[0...n-2]), rob_linear(house[ ___ ]));",
        "correctAnswer": "1...n-1",
        "explanation": "Comparing the results of the two possible linear sub-problems."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Silent Thief",
        "explanation": "You have robbed the logic of its complexity. You see that constraints are just pointers to earlier states. Ace: 'The plan is the profit.'",
        "encouragementText": "Pico: 'Quiet flight... 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Heist logic!",
        "pairs": [
          { "key": "Take", "value": "val + dp[i-2]" },
          { "key": "Skip", "value": "dp[i-1]" },
          { "key": "Circular", "value": "Two-pass solution" }
        ]
      }
    ]
  },
  {
    "order": 5,
    "title": "Unit 5: The Subsequence Echo (LCS)",
    "desc": "Longest Common Subsequence: finding shared strings in the noise.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 1.5] Signals in the Static",
        "explanation": "Ace: 'Two strings, A and B. What is the longest subsequence shared by both?' Pico: 'Letters don't have to be together, but their ORDER matters! 🦜'",
        "codeSnippet": "if (A[i] == B[j]) dp[i][j] = 1 + dp[i-1][j-1];",
        "encouragementText": "Ace: 'Order is the ghost that haunts the strings.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "If A[i] != B[j], how do we find the best subsequence?",
        "options": ["Give up", "Take the max of dp[i-1][j] and dp[i][j-1]", "Add them together", "Pico rule"],
        "correctAnswer": "Take the max of dp[i-1][j] and dp[i][j-1]",
        "explanation": "If the characters don't match, we either skip a character in A or a character in B."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The 2D Pulse",
        "explanation": "Ace: 'LCS uses a 2D grid. The state dp[i][j] depends on the diagonal (if characters match) or the top/left neighbors (if they don't).' Pico: 'It's a diagonal flight path! 🦜'",
        "encouragementText": "Pico: 'Fly the grid! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "LCS recurrence when characters differ.",
        "codeSnippet": "else dp[i][j] = max(dp[i-1][j], ___ );",
        "correctAnswer": "dp[i][j-1]",
        "explanation": "When characters don't match, we carry over the best found so far from either string."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity: O(M * N)",
        "explanation": "Ace: 'For strings of length M and N, we fill M*N cells. This is standard string DP.' Pico: 'Millions of cells! My wings are tired! 🦜'",
        "encouragementText": "Ace: 'Space can be reduced to O(min(M, N)) because we only need the previous row.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Can LCS be used to find the 'Shortest Common Supersequence'?",
        "options": ["Yes (Length A + B - LCS)", "No", "Only for equal strings", "Pico guess"],
        "correctAnswer": "Yes (Length A + B - LCS)",
        "explanation": "By finding the longest shared part, we only write it once to make the shortest combined string."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Reverse Pulse",
        "explanation": "Ace: 'What if you need the actual string, not just the length? We backtrack from the bottom-right of the matrix.' Pico: 'Follow the footprints back home! 🦜'",
        "encouragementText": "Pico: 'Backtrack the seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Backtracking condition for match.",
        "codeSnippet": "if (S1[i-1] == S2[j-1]) {\n  result += S1[i-1];\n  i--; j--;\n}",
        "correctAnswer": "result += S1[i-1]",
        "explanation": "If the characters matched at this cell, this character is part of our subsequence."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The String Architect",
        "explanation": "You have mapped the shared logic of strings. You can find the hidden echoes even across miles of text. Ace: 'Connection is discovered via the shared subsequence.'",
        "encouragementText": "Pico: 'Echo... echo... 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match LCS logic!",
        "pairs": [
          { "key": "Match", "value": "1 + dp[i-1][j-1]" },
          { "key": "Mismatch", "value": "max(top, left)" },
          { "key": "Backtrack", "value": "Reconstruct result" }
        ]
      }
    ]
  },
  {
    "order": 6,
    "title": "Unit 6: The Longest Rise (LIS)",
    "desc": "Longest Increasing Subsequence: mastering O(N^2) and O(N log N) logic.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 1.6] Climbing the Gradient",
        "explanation": "Ace: 'Find the longest sub-chain where every number is GREATER than the previous one.' Pico: 'It's a rising flight! 🦜'",
        "codeSnippet": "if (arr[j] < arr[i]) dp[i] = max(dp[i], 1 + dp[j]);",
        "encouragementText": "Ace: 'Stability is found in the rising order.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the complexity of the standard nested-loop LIS?",
        "options": ["O(N)", "O(N^2)", "O(log N)", "Pico rule"],
        "correctAnswer": "O(N^2)",
        "explanation": "For every element 'i', we check every previous element 'j'."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Binary Leap",
        "explanation": "Ace: 'N^2 is slow for N=100,000. We can do LIS in O(N log N) using a tails array and Binary Search.' Pico: 'FAST FLIGHT! 🦜'",
        "encouragementText": "Pico: 'Log N flight! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Update step for O(N log N) LIS.",
        "codeSnippet": "if (x > tails.back()) tails.push_back(x);\nelse *lower_bound(tails.begin(), tails.end(), x) = ___ ;",
        "correctAnswer": "x",
        "explanation": "If x can't extend the LIS, we use it to replace and 'improve' an existing element in the tails array."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Patience Sorting",
        "explanation": "Ace: 'The O(N log N) approach is like placing cards in piles. You always place a card on the leftmost pile where it fits.' Pico: 'Bird-cards! 🦜'",
        "encouragementText": "Ace: 'Strategy beats brute force every time.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Does the 'Tails' array in O(N log N) LIS actually hold the LIS sequence?",
        "options": ["Yes", "No, it only has the same LENGTH as the LIS", "Only if sorted", "Pico guess"],
        "correctAnswer": "No, it only has the same LENGTH as the LIS",
        "explanation": "The tails array maintains the smallest possible tail for each increasing subsequence length."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Monotonic Pulse",
        "explanation": "Ace: 'The tails array is always SORTED. That is why we can use binary search.' Pico: 'Keep the seeds in order! 🦜'",
        "encouragementText": "Pico: 'Seek the seed! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Function to find position of 'x' in sorted tails.",
        "codeSnippet": "pos = lower_bound(tails.begin(), tails.end(), ___ ) - tails.begin();",
        "correctAnswer": "x",
        "explanation": "We search for the first element >= x to replace it."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Gradient Master",
        "explanation": "You have mapped the rise of the data. You can find the longest ascent in logarithmic time. Ace: 'Growth follows logic.'",
        "encouragementText": "Pico: 'Flying higher... 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match LIS Metrics!",
        "pairs": [
          { "key": "Standard", "value": "O(N^2)" },
          { "key": "Binary Search", "value": "O(N log N)" },
          { "key": "Tails Array", "value": "Smallest end-values" }
        ]
      }
    ]
  },
  {
    "order": 7,
    "title": "Unit 7: The Grid Runner",
    "desc": "Unique Paths: calculating possibilities on a 2D plane.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 1.7] The Map of Possibility",
        "explanation": "Ace: 'Start at (0,0), reach (M, N). You can only move RIGHT or DOWN. How many ways?' Pico: 'I can come from the TOP or from the LEFT! 🦜'",
        "codeSnippet": "dp[i][j] = dp[i-1][j] + dp[i][j-1];",
        "encouragementText": "Ace: 'Probability is the sum of previous paths.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Ways to reach (1,1) from (0,0)?",
        "options": ["1", "2 (RD, DR)", "4", "Pico rule"],
        "correctAnswer": "2 (RD, DR)",
        "explanation": "Two paths: Right then Down, or Down then Right."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Obstacle Avoidance",
        "explanation": "Ace: 'What if some cells are BLOCKED?' Pico: 'Then the ways to that cell is 0! 🦜'",
        "encouragementText": "Pico: 'Watch the walls! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Handling a blocked cell in the grid.",
        "codeSnippet": "if (grid[i][j] == 1) dp[i][j] = ___ ;",
        "correctAnswer": "0",
        "explanation": "If a cell is an obstacle, there are zero ways to arrive at it."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Minimum Path Sum",
        "explanation": "Ace: 'Now, every cell has a COST. Find the cheapest path to the bottom-right.' Pico: 'Max values, min costs. Same grid, different logic! 🦜'",
        "encouragementText": "Ace: 'dp[i][j] = cost[i][j] + min(dp[i-1][j], dp[i][j-1]).'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the space complexity of a 2D grid DP if we only keep one row?",
        "options": ["O(M * N)", "O(N)", "O(1)", "Pico guess"],
        "correctAnswer": "O(N)",
        "explanation": "Since we only need the current and previous rows, we can optimize space to linear."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Edge Logic",
        "explanation": "Ace: 'The first row and first column only have ONE way to be reached (straight line). These are our base boundaries.' Pico: 'No zig-zag on the edge! 🦜'",
        "encouragementText": "Pico: 'Edge seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Initializing first row.",
        "codeSnippet": "for(int j=1; j<n; j++) dp[0][j] = ___ ;",
        "correctAnswer": "1",
        "explanation": "There is only one way to reach any cell in the first row: moving right repeatedly."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Grid Surveyor",
        "explanation": "You have mapped the planes of possibility. You can find the best path through any coordinate system. Ace: 'The grid is your playground.'",
        "encouragementText": "Pico: 'Landing... 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Grid logic!",
        "pairs": [
          { "key": "Unique Paths", "value": "Sum neighbors" },
          { "key": "Min Path Sum", "value": "Min + current" },
          { "key": "Obstacle", "value": "Set to zero" }
        ]
      }
    ]
  },
  {
    "order": 8,
    "title": "Unit 8: The Weighty Cache (Knapsack Intro)",
    "desc": "The 0/1 Knapsack: the quintessential picker's problem.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 1.8] The Golden Basket",
        "explanation": "Ace: 'Items (Weight, Value). Basket Capacity W. You want max value without breaking the basket.' Pico: 'I can't take a half-seed! 0 or 1! 🦜'",
        "codeSnippet": "dp[i][w] = max(val[i] + dp[i-1][w-wt[i]], dp[i-1][w]);",
        "encouragementText": "Ace: 'Every choice is a trade-off between current gain and future capacity.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does '0/1' specify in this context?",
        "options": ["Binary code", "That you cannot take fractional items; you either take it all or nothing", "Zero weight", "Pico rule"],
        "correctAnswer": "That you cannot take fractional items; you either take it all or nothing",
        "explanation": "Fractional items belong to Greedy algorithms; discrete items belong to DP."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Capacity Dance",
        "explanation": "Ace: 'The state depends on how many ITEMS we've considered and the current REMAINING WEIGHT.' Pico: 'It's a two-key vault! 🦜'",
        "encouragementText": "Pico: 'Key the vault! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Knapsack transition: skipping item 'i'.",
        "codeSnippet": "dp[i][w] = ___ ;",
        "correctAnswer": "dp[i-1][w]",
        "explanation": "If we skip the current item, our value and capacity remain what they were for the previous i-1 items."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Space Optimization: The 1D Array",
        "explanation": "Ace: 'We can solve this in O(W) space by iterating BACKWARDS from W to 0.' Pico: 'Backwards flight prevents double-counting! 🦜'",
        "encouragementText": "Ace: 'Reversing the inner loop is the key to memory safety.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why iterate backwards for 1D Knapsack?",
        "options": ["It's luck", "To ensure we use the 'Previous' state values and don't pick the same item twice", "To save CPU", "Pico guess"],
        "correctAnswer": "To ensure we use the 'Previous' state values and don't pick the same item twice",
        "explanation": "Forward iteration would use the updated values from the current item, simulating 'Infinite' items."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Item Inclusion",
        "explanation": "Ace: 'If current_weight <= capacity, we consider `val + dp[capacity - weight]`. Otherwise, we MUST skip.' Pico: 'Don't break the basket! 🦜'",
        "encouragementText": "Pico: 'Weigh the seed! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Knapsack 1D update.",
        "codeSnippet": "for (int j = W; j >= wt[i]; j--) {\n  dp[j] = max(dp[j], val[i] + ___ );\n}",
        "correctAnswer": "dp[j - wt[i]]",
        "explanation": "Optimizing the weight j by potentially including the current item."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Value Picker",
        "explanation": "You have mastered the most famous problem in DP history. You know how to pack the ultimate basket. Ace: 'Selection is the essence of logic.'",
        "encouragementText": "Pico: 'Heavy profit! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Knapsack logic!",
        "pairs": [
          { "key": "0/1 Knapsack", "value": "Backwards 1D loop" },
          { "key": "Unbounded", "value": "Forwards 1D loop" },
          { "key": "Fractional", "value": "Greedy" }
        ]
      }
    ]
  },
  {
    "order": 9,
    "title": "Unit 9: The Infinite Stash (Unbounded)",
    "desc": "Unbounded Knapsack and Coin Change: when items are infinite.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 1.9] The Fountain of Seeds",
        "explanation": "Ace: 'What if you can take as many of each item as you want?' Pico: 'Infinite snacks! Just iterate FORWARDS! 🦜'",
        "codeSnippet": "for (int j = wt[i]; j <= W; j++) dp[j] = max(dp[j], val[i] + dp[j-wt[i]]);",
        "encouragementText": "Ace: 'Infinite supply changes the direction of the logic.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Which DP problem is a classic 'Unbounded Knapsack' variation?",
        "options": ["House Robber", "Coin Change", "Fibonacci", "Pico rule"],
        "correctAnswer": "Coin Change",
        "explanation": "You can use the same denomination of coins as many times as you need."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Counting Ways",
        "explanation": "Ace: 'Not just max value, but COUNTing how many ways to reach target T.' Pico: 'Add the ways! 🦜'",
        "encouragementText": "Pico: 'Sum the seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Formula to count ways for Coin Change.",
        "codeSnippet": "dp[j] = dp[j] ___ dp[j - coin];",
        "correctAnswer": "+",
        "explanation": "The number of ways to reach amount 'j' includes all ways we already found plus all ways to reach 'j-coin'."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Minimum Coins",
        "explanation": "Ace: 'Find the FEWEST number of coins to reach target T. Initialize with Infinity.' Pico: 'Minimalist bird! 🦜'",
        "encouragementText": "Ace: 'Find the shortest path in the value-space.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the best initialization for 'Minimum' problems?",
        "options": ["0", "Infinity (or Amount + 1)", "-1", "Pico guess"],
        "correctAnswer": "Infinity (or Amount + 1)",
        "explanation": "We need a large value so that any valid sum will be smaller than it."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Impossible Target",
        "explanation": "Ace: 'After the loop, if dp[target] is still Infinity, it is impossible to reach that amount.' Pico: 'No seeds for you! 🦜'",
        "encouragementText": "Pico: 'Check the seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Returning answer for min coins.",
        "codeSnippet": "return dp[amount] > amount ? ___ : dp[amount];",
        "correctAnswer": "-1",
        "explanation": "Standard convention to return -1 if no solution exists."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Infinite Provider",
        "explanation": "You have mastered the infinite. You see that repetition in the item is just forward movement in the table. Ace: 'Abundance is solved by direction.'",
        "encouragementText": "Pico: 'Infinity and beyond! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Coin logic!",
        "pairs": [
          { "key": "Ways to change", "value": "Sum transitions" },
          { "key": "Min coins", "value": "Min transitions" },
          { "key": "Unreachable", "value": "Infinity remains" }
        ]
      }
    ]
  },
  {
    "order": 10,
    "title": "Unit 10: Stage 1 Graduation (The Memory Master)",
    "desc": "The Foundation Peak: proving your mastery of the basics.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[GRAND MISSION LORE 1.10] The Titan Hall",
        "explanation": "Ace: 'You have solved the sequence, the climb, the heist, the strings, and the basket. You are ready to transcend the basics.' Pico: 'Stage 1 Graduation! We fly to the Advanced Optimizations next! 🦜'",
        "encouragementText": "Ace: 'Consistency is the root of mastery.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What did you learn is the main advantage of Tabulation over Memoization?",
        "options": ["Cooler name", "Iterative nature avoids recursion depth limits", "Uses zero memory", "Pico rule"],
        "correctAnswer": "Iterative nature avoids recursion depth limits",
        "explanation": "Tabulation is stack-safe and often faster in practice due to constant factors."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The 100-Lesson Pulse",
        "explanation": "10 units, 100 lessons. This is the first heartbeat of the 1,000-lesson curriculum. Ace: 'Take a breath. The complexity will only rise from here.'",
        "encouragementText": "Pico: '100 seeds down! 🦜'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Which unit covered 0/1 Knapsack?",
        "options": ["Unit 4", "Unit 8", "Unit 10", "Pico secret"],
        "correctAnswer": "Unit 8",
        "explanation": "Unit 8 introduced the golden basket of 0/1 Knapsack."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Graduation Check",
        "explanation": "Ace: 'Prove you can optimize space in your sleep.' Pico: 'I sleep in O(1) space! 🦜'",
        "encouragementText": "Ace: 'Mastery is the ability to simplify the complex.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the time complexity of LCS?",
        "options": ["O(N log N)", "O(M * N)", "O(2^N)", "Pico guess"],
        "correctAnswer": "O(M * N)",
        "explanation": "LCS requires a 2D grid covering every combination of two strings."
      },
      {
        "type": "teaching",
        "questionText": "[FINAL SYNC] The 10x10x10 Path",
        "explanation": "You are 10% through the ultimate journey. Your next target: **Stage 2: Intermediate Optimizations**. Ace: 'The Matrix awaits.'",
        "encouragementText": "Pico: 'Stage 2 seeds are waiting! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Final graduation signal.",
        "codeSnippet": "if (stage1_complete == true) return ___ ;",
        "correctAnswer": "GRADUATE",
        "explanation": "You have successfully completed the Foundations of Memory."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Architect of Memory",
        "explanation": "The foundations are set. The vault is locked. You are a Stage 1 Graduate. Ace: 'Welcome to the academy.'",
        "encouragementText": "Pico: 'Titan-Grade! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "[GRADUATION CHALLENGE] Output the status of your journey.",
        "codeSnippet": "for(int i=1; i<=100; i++) verify_lesson(i);\nreturn ___ ;",
        "correctAnswer": "COMPLETE",
        "explanation": "The first 10% of the 1,000-lesson curriculum is fully verified and mastere d."
      }
    ]
  }
];

module.exports = stage1;
