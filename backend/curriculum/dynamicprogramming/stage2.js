const stage2 = [
  {
    "order": 11,
    "title": "Unit 11: Transaction Fees (Stocks with Fee)",
    "desc": "Mastering the cost of trades: how to include static transaction fees in stock market DP states.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 2.11] The Taxman's Cut",
        "explanation": "In the real Matrix, every trade costs energy. When you sell a stock, the system takes a fee. Your profit is `Max(skip, sell_at_price - buy_price - fee)`. This adds a constant penalty to every transition where 'Holding' becomes 'Sold'. This is the **Friction protocol**—learning to profit even when the system resists.",
        "codeSnippet": "cash = max(cash, hold + price - fee);",
        "encouragementText": "Ace: 'Only trade if the delta exceeds the tax.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Where is the fee typically subtracted in the transition?",
        "options": ["On every day", "When completing a transaction (usually on Sell)", "Only at the beginning", "Pico rule"],
        "correctAnswer": "When completing a transaction (usually on Sell)",
        "explanation": "Subtracting the fee during the sell transition correctly models the cost of a completed trade."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Sell-Fee Pulse",
        "explanation": "If `dp[i][0]` is not holding and `dp[i][1]` is holding, the transition `dp[i][1] -> dp[i+1][0]` involves adding `price[i] - fee`. The Matrix accounts for the loss. Optimization with overhead.",
        "encouragementText": "Pico: 'Pay the seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Transition for selling with a fee.",
        "codeSnippet": "next_not_holding = max(not_holding, holding + price - ___ );",
        "correctAnswer": "fee",
        "explanation": "The profit from selling is the current price minus the fixed transaction cost."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity: O(N) Time, O(1) Space",
        "explanation": "Like basic stocks, we only need the best 'Holding' and 'Not Holding' values from the previous day. This is the **Titan-Grade Efficiency**. The fee is just a constant additive in the pulse.",
        "encouragementText": "Ace: 'Constant costs do not change the complexity, only the outcome.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What happens if the fee is larger than the maximum possible daily gain?",
        "options": ["You trade anyway", "The algorithm correctly chooses to never trade (profit stays 0)", "The computer crashes", "Pico guess"],
        "correctAnswer": "The algorithm correctly chooses to never trade (profit stays 0)",
        "explanation": "DP naturally avoids transitions that lead to a lower total value than the 'Do Nothing' state."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Multi-Trade Cycle",
        "explanation": "Wait until the dip is deep enough and the peak is high enough. The Matrix only acts when the 'Gain - Fee' is positive. This is the **Threshold protocol**. Patience is encoded into the logic.",
        "encouragementText": "Pico: 'Wait for the big seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Updating 'holding' state.",
        "codeSnippet": "next_holding = max(holding, not_holding - ___ );",
        "correctAnswer": "price",
        "explanation": "Buying a stock reduces current cash by the price of that stock."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The High-Frequency Trader",
        "explanation": "A trade-bot (The Matrix Broker) is managing 1,000,000 micro-transactions. Each has a 0.01 energy fee. To find the true path to wealth, the Broker-Architect uses Fee-Aware DP. The bot only strikes when the logic is certain. The vault grows.",
        "encouragementText": "Ace: 'Wealth is what remains after the system takes its share.'"
      },
      {
        "type": "match_following",
        "questionText": "Match Stock variables!",
        "pairs": [
          { "key": "Price", "value": "Current value" },
          { "key": "Fee", "value": "Static cost" },
          { "key": "Profit", "value": "Max delta" }
        ]
      }
    ]
  },
  {
    "order": 12,
    "title": "Unit 12: Subset Sum Sensation",
    "desc": "Exact Achievement: using DP to determine if a set of integers can sum to a precise target value.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 2.12] The Key of Sums",
        "explanation": "A lock requires a specific weight to open. You have weights of various sizes. **Subset Sum** is a boolean DP: `can_reach[target] = can_reach[target] OR can_reach[target - weight]`. This is the **Binary protocol**—either the target is achievable or it is void. The Matrix is a search for the 'True' bit.",
        "codeSnippet": "dp[w] = dp[w] || dp[w - nums[i]];",
        "encouragementText": "Ace: 'Precision isn't close; precision is exact.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does `dp[i][j]` represent in the 2D version?",
        "options": ["Sum of weights", "Whether the first 'i' items can sum to 'j'", "Number of items", "Pico rule"],
        "correctAnswer": "Whether the first 'i' items can sum to 'j'",
        "explanation": "This is a reachability problem; we only care about the possibility (true/false)."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Target-Down Pulse",
        "explanation": "To solve in O(Target) space, we iterate through the weights, and for each weight, we update the DP array **Backwards** (from target down to weight). This prevents using the same item twice. This is the **Single-Use protocol**. Respect the integrity of the set.",
        "encouragementText": "Pico: 'Reverse the seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Update loop for Subset Sum.",
        "codeSnippet": "for (int w = target; w >= num; ___ ) {\n  dp[w] = dp[w] || dp[w - num];\n}",
        "correctAnswer": "w--",
        "explanation": "Iterating backwards ensures that the 'dp[w - num]' we check is from the previous item's state, not the current one."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity: O(N * Target)",
        "explanation": "While this looks polynomial, it is actually 'Pseudo-Polynomial' because it depends on the value of the Target. For large targets, the Matrix becomes heavy. This is the **Knapsack Boundary**. The Grid expands to fit the goal.",
        "encouragementText": "Ace: 'The size of the truth dictates the cost of the search.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the initial state of the DP array?",
        "options": ["All True", "dp[0] = True, others False", "All False", "Pico guess"],
        "correctAnswer": "dp[0] = True, others False",
        "explanation": "A sum of 0 is always possible using an empty subset."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Partition Connection",
        "explanation": "Subset Sum is the parent of **Partition Equal Subset Sum**. If you can find a subset that sums to `TotalSum / 2`, you have partitioned the set. One problem, two solutions. The Matrix is interconnected.",
        "encouragementText": "Pico: 'Balance the seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Checking if partitioning is possible.",
        "codeSnippet": "if (total % 2 != 0) return false;\nreturn canSum(nums, total / ___ );",
        "correctAnswer": "2",
        "explanation": "A set can only be divided into two equal integer sums if the total sum is even."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Weight Equalizer",
        "explanation": "A cargo-ship (The Matrix Carrier) must be perfectly balanced. Two containers must have the exact same sum of weights. The Carrier-Architect uses Subset Sum DP to find the division. The ship is leveled. The cargo is secure.",
        "encouragementText": "Ace: 'Balance is the result of perfect selection.'"
      },
      {
        "type": "match_following",
        "questionText": "Match Sum metrics!",
        "pairs": [
          { "key": "True", "value": "Reachable" },
          { "key": "False", "value": "Impossible" },
          { "key": "dp[0]", "value": "Base Case" }
        ]
      }
    ]
  },
  {
    "order": 13,
    "title": "Unit 13: Partition Equal Subset",
    "desc": "Balancing Act: dividing a set of values into two subsets with equal sums using reachability DP.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 2.13] The Dual Scales",
        "explanation": "Symmetry is a requirement of the Elite. To divide a collection of energy cores into two identical piles, we solve for `Sum / 2`. This is **Partition DP**. It reduces a 'Choice' problem to a 'Sum' problem. The Matrix is a mirror of its own parts.",
        "codeSnippet": "target = sum(nums) / 2;",
        "encouragementText": "Ace: 'Equality is the most stable configuration of data.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "If the total sum is 11, can you partition the set into two equal integers?",
        "options": ["Yes, with 5.5", "No, because the target must be an integer (Total Sum must be even)", "Maybe", "Pico rule"],
        "correctAnswer": "No, because the target must be an integer (Total Sum must be even)",
        "explanation": "You cannot split an odd number into two equal whole integers."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Half-Target Pulse",
        "explanation": "We use the same O(Target) space optimization as Subset Sum. If `dp[target]` is true at the end, the Matrix is in balance. The search range is exactly half the total. Efficiency through focused targeting.",
        "encouragementText": "Pico: 'Find the half-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Calculating the target for partition.",
        "codeSnippet": "int total = 0;\nfor (int x : nums) total += x;\nif (total & 1) return false;\nint target = total ___ 1;",
        "correctAnswer": ">>",
        "explanation": "Using a bitwise right-shift is a fast way to divide an even integer by 2."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity: O(N * (Sum/2))",
        "explanation": "The effort is proportional to the number of items and the 'Weight' of the set. This is the **Titan-Grade Balance**. The Matrix manages mountains by finding their center.",
        "encouragementText": "Ace: 'To divide the world, you must first calculate its weight.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What if you need to partition into THREE equal subsets?",
        "options": ["Same algorithm", "Harder (NP-Complete for large K), requires more complex DP or recursion", "Impossible", "Pico guess"],
        "correctAnswer": "Harder (NP-Complete for large K), requires more complex DP or recursion",
        "explanation": "Multi-way partitioning is significantly more complex than the 2-way case."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Boolean Pulse",
        "explanation": "In this problem, `dp[j]` is a bit. `1` if the sum `j` is possible, `0` if not. We can even use `std::bitset` for maximum speed. The Matrix solves in bits, not words. The light of the boolean.",
        "encouragementText": "Pico: 'Light the bit-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Using bitset for Subset Sum.",
        "codeSnippet": "bitset<10001> bits(1);\nfor (int x : nums) bits |= (bits << ___ );",
        "correctAnswer": "x",
        "explanation": "Shifting the entire bitset and ORing it with itself represents trying to add 'x' to all previously possible sums."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Duel of Piles",
        "explanation": "Two rival factions (The Matrix Hawks and Matrix Owls) are splitting 20 territories. To avoid war, the territories must be split by exact value. The Peace-Architect uses Partition DP. The map is drawn. The war is averted by the logic of the sum.",
        "encouragementText": "Ace: 'Truth is the arbiter of peace.'"
      },
      {
        "type": "match_following",
        "questionText": "Match Partition logic!",
        "pairs": [
          { "key": "Sum % 2", "value": "Parity check" },
          { "key": "Bitset", "value": "O(Target/WordSize)" },
          { "key": "Target", "value": "Sum / 2" }
        ]
      }
    ]
  },
  {
    "order": 14,
    "title": "Unit 14: Target Sum Signage",
    "desc": "Recursive Sign-Flips: using DP to count how many ways to assign + and - to a set of numbers to hit a target.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 2.14] The Polarity Pulse",
        "explanation": "Every number is a battery. It can be positive or negative. **Target Sum** asks how to orient them to reach a specific voltage. This is **Sign DP**. By transforming the problem `P - N = Target` into `P + N + P - N = Target + P + N`, we find it is just **Subset Sum** in disguise! The Matrix hides the simple inside the complex.",
        "codeSnippet": "2 * SubsetSum = Target + TotalSum;",
        "encouragementText": "Ace: 'Transform the question until the answer becomes obvious.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "How does 'Target Sum' map to 'Subset Sum'?",
        "options": ["It doesn't", "By solving for the sum of the positive-signed subset P = (Target + Total) / 2", "By guessing", "Pico rule"],
        "correctAnswer": "By solving for the sum of the positive-signed subset P = (Target + Total) / 2",
        "explanation": "Finding a subset P such that its elements sum to this derived value automatically satisfies the original target sum condition."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Count Pulse",
        "explanation": "In this unit, we don't just ask 'Can we?'. we ask 'How many ways?'. `dp[j] = dp[j] + dp[j - num]`. The Matrix accumulates the possibilities. Every path is a pulse in the total count.",
        "encouragementText": "Pico: 'Accumulate the seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Accumulating counts in DP.",
        "codeSnippet": "for (int j = target; j >= num; j--) {\n  dp[j] ___ dp[j - num];\n}",
        "correctAnswer": "+=",
        "explanation": "Adding the number of ways to reach the remaining sum (j - num) to the ways to reach sum j."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity: O(N * NewTarget)",
        "explanation": "Where NewTarget is the derived subset sum. This is the **Titan-Grade Transformation**. You solve a difficult sign problem by using a simple sum tool. Logic through inversion.",
        "encouragementText": "Ace: 'A change in perspective is worth 1000 lines of code.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "If `(Target + Total)` is odd, what is the count?",
        "options": ["1", "0", "Infinity", "Pico guess"],
        "correctAnswer": "0",
        "explanation": "If the derived target is not an integer, there are zero ways to reach it using sums of integers."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Range Pulse",
        "explanation": "Target Sum covers the entire range from `-Total` to `+Total`. The Matrix is a spectrum. The DP finds every possibility simultaneously. Parallel reality through calculation.",
        "encouragementText": "Pico: 'Spectrum the seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Check for out-of-bounds target.",
        "codeSnippet": "if (abs(S) > total) return ___ ;",
        "correctAnswer": "0",
        "explanation": "If the target is larger than the total possible sum of all elements, it is unreachable."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Voltage Regulator",
        "explanation": "An array of 20 batteries (The Matrix Grid) must reach exactly 5V. Some batteries are flipped. To find all ways to configure the flips, the Grid-Architect uses Target Sum DP. 1,234 configurations are identified in 1 millisecond. The balance is held.",
        "encouragementText": "Ace: 'Signs define the flow of power.'"
      },
      {
        "type": "match_following",
        "questionText": "Match Sign terms!",
        "pairs": [
          { "key": "Positive", "value": "P subset" },
          { "key": "Negative", "value": "N subset" },
          { "key": "Target", "value": "P - N" }
        ]
      }
    ]
  },
  {
    "order": 15,
    "title": "Unit 15: Counting Subsets (with Sum K)",
    "desc": "The Combinatorial Count: using DP to find the total number of unique ways to select items that sum to a target.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 2.15] The Sea of Possibilities",
        "explanation": "In a world of infinite choices, how many lead to the goal? **Counting DP** isn't about the best; it's about the **All**. `dp[i]` becomes the number of ways to reach sum `i`. It is the **Sum protocol**—combining the rivers of logic into a single ocean of count. The Matrix is a master of the total.",
        "codeSnippet": "ways[j] += ways[j - num];",
        "encouragementText": "Ace: 'Every way counts in the ledger of existence.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "How does this differ from the 0/1 Knapsack optimization?",
        "options": ["It doesn't use profit, it uses ways", "It's faster", "Zero", "Pico rule"],
        "correctAnswer": "It doesn't use profit, it uses ways",
        "explanation": "Instead of `max(val + prev)`, we use `sum(prev)` to accumulate all distinct valid paths."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Additive Pulse",
        "explanation": "We use `+=`. If there are 3 ways to reach sum 5, and we have a weight of 2, those 3 ways now contribute to the target 7. The Matrix expands through addition. The count ripples through the array.",
        "encouragementText": "Pico: 'Add the seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Initializing the count table.",
        "codeSnippet": "vector<long long> dp(target + 1, 0);\ndp[0] = ___ ;",
        "correctAnswer": "1",
        "explanation": "There is exactly one way to achieve a sum of zero: by picking nothing."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity: O(N * Target)",
        "explanation": "Standard subset complexity. Use `long long` because the number of ways can grow exponentially (combinatorial explosion). This is the **Titan-Grade Accumulator**. The Matrix holds trillion-counts easily.",
        "encouragementText": "Ace: 'The sum of paths is the weight of reality.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What happens if the sum exceeds `LLONG_MAX`?",
        "options": ["It loops to 0", "Overflow (Result is wrong/undefined), often need to return result `modulo 10^9 + 7`", "Computer burns", "Pico guess"],
        "correctAnswer": "Overflow (Result is wrong/undefined), often need to return result `modulo 10^9 + 7`",
        "explanation": "In competitive programming, many-way counts are often requested modulo a large prime to avoid integer overflow."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Prime-Mod Pulse",
        "explanation": "When counting huge universes, we use **Modulo Arithmetic**. `(A + B) % MOD`. This keeps the truth within the bounds of a 64-bit word. The Matrix is a cycle of primes. Infinity contained in a circle.",
        "encouragementText": "Pico: 'Mod the seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Applying modulo to the count.",
        "codeSnippet": "dp[j] = (dp[j] + dp[j - num]) % ___ ;",
        "correctAnswer": "1000000007",
        "explanation": "The most common prime used for modulo operations in algorithmic challenges."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Frequency Architect",
        "explanation": "A signal (The Matrix Wave) has 10,000 possible configurations. Only specific sums lead to decoding. The Architect uses Counting DP to find the frequency of the 'Success' sum. The signal is verified. The count is absolute. The transmission is decoded.",
        "encouragementText": "Ace: 'To know the probability, you must first know the count.'"
      },
      {
        "type": "match_following",
        "questionText": "Match Counting Terms!",
        "pairs": [
          { "key": "+=", "value": "Accumulation" },
          { "key": "MOD", "value": "Overflow guard" },
          { "key": "dp[0] = 1", "value": "Identity state" }
        ]
      }
    ]
  },
  {
    "order": 16,
    "title": "Unit 16: 0/1 Knapsack Master",
    "desc": "Optimal Choice: solving the classic knapsack problem with maximum capacity and zero item splitting.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 2.16] The Heavy Lift",
        "explanation": "The core of the Matrix. You have N missions, each with Difficulty (Weight) and Reward (Value). Your energy (Capacity) is limited. **0/1 Knapsack** finds the perfect mission-set. It is the **Selection protocol**—the choice of the hero. You cannot be in two places (0/1). The Matrix is a selection of the best.",
        "codeSnippet": "dp[w] = max(dp[w], val + dp[w - wt]);",
        "encouragementText": "Ace: 'Value is found in the overlap of potential and capacity.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why is it called '0/1'?",
        "options": ["It uses binary code", "You either take the item (1) or you don't (0); no fractions allowed", "Binary search", "Pico rule"],
        "correctAnswer": "You either take the item (1) or you don't (0); no fractions allowed",
        "explanation": "This distinguishes it from Fractional Knapsack (which is solved greedily)."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Profit-Max Pulse",
        "explanation": "We update only if `val + dp[w - wt]` is greater than current `dp[w]`. The Pulse only moves toward higher rewards. Evolution through greedy-memory. The Matrix is a growth-machine.",
        "encouragementText": "Pico: 'Max the seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Core 0/1 Knapsack iterative step.",
        "codeSnippet": "for(int i=0; i<n; i++) {\n  for(int w=W; w>=wt[i]; w--) {\n    dp[w] = ___ (dp[w], val[i] + dp[w-wt[i]]);\n  }\n}",
        "correctAnswer": "max",
        "explanation": "Picking the maximum value between 'Skipping' and 'Taking' the current item."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity: O(N * W)",
        "explanation": "The Gold Standard of DP complexity. Linear in items, but dependent on Capacity (W). This is the **Titan-Grade Optimizer**. The Matrix maximizes the possible in the limited.",
        "encouragementText": "Ace: 'Limits are not walls; they are the parameters of the perfect choice.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What determines if you can solve this for N=100 and W=1,000,000,000?",
        "options": ["Memory capacity", "No, O(N*W) is too big! You'd need a different approach (like Meet-in-the-middle or a sparse DP)", "CPU speed", "Pico guess"],
        "correctAnswer": "No, O(N*W) is too big! You'd need a different approach (like Meet-in-the-middle or a sparse DP)",
        "explanation": "If W is too large, the DP table cannot be allocated or filled within time limits."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Order of Update Pulse",
        "explanation": "For 0/1, we iterate **Decreasingly**. If we iterated Increasingly, we might use the SAME item again for the same capacity (Unbounded Knapsack). The Matrix respects the uniqueness of the item. One pulse, one life.",
        "encouragementText": "Pico: 'Respect the singleton-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Effect of iterating forward (0 to W) in 0/1 knapsack.",
        "codeSnippet": "Forward loop = ___ Knapsack;",
        "correctAnswer": "Unbounded",
        "explanation": "Iterating forward allows the current item to potentially be used multiple times for higher weights in the same pass."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Tactical Gear-Up",
        "explanation": "A commando (The Matrix Ghost) has 10kg of space. Grenades weigh 2kg (val 10), Scanners weigh 5kg (val 50). To be a Titan-Ghost, the Gear-Architect uses 0/1 Knapsack. The Ghost carries the perfect kit. The mission is 100% success. The loadout is optimal.",
        "encouragementText": "Ace: 'The tool determines the survival.'"
      },
      {
        "type": "match_following",
        "questionText": "Match Knapsack logic!",
        "pairs": [
          { "key": "0/1", "value": "Reverse loop" },
          { "key": "Unbounded", "value": "Forward loop" },
          { "key": "Fractional", "value": "Greedy sort" }
        ]
      }
    ]
  },
  {
    "order": 17,
    "title": "Unit 17: The Unbounded Vault",
    "desc": "Infinite Supply: solving the knapsack problem where items can be taken an unlimited number of times.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 2.17] The Infinite Source",
        "explanation": "What if the energy cores never run out? In **Unbounded Knapsack**, you can take as many of an item as you can carry. `dp[w] = max(dp[w], val + dp[w - wt])`. The pulse repeats its own success. This is the **Multiplier protocol**—growth without bound. The Matrix is a fountain of abundance.",
        "codeSnippet": "for(int w=wt; w<=W; w++) dp[w] = max(dp[w], val + dp[w-wt]);",
        "encouragementText": "Ace: 'Abundance is a test of how much you can carry, not how much you can find.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "How does the code change from 0/1?",
        "options": ["Outer loop is different", "The inner loop (weight loop) goes forward from 'wt' to 'W'", "It doesn't", "Pico rule"],
        "correctAnswer": "The inner loop (weight loop) goes forward from 'wt' to 'W'",
        "explanation": "Forward iteration means 'dp[w-wt]' can already contain the value of the current item, allowing multiple uses."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Forward-Flow Pulse",
        "explanation": "The pulse travels from 0 to W. Each step uses the 'Newer' information from the same loop. This is the **Re-use protocol**. The Matrix loops on its own gain. Infinite expansion.",
        "encouragementText": "Pico: 'Feed forward the seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Unbounded loop start.",
        "codeSnippet": "for (int w = ___ ; w <= W; w++) {\n  dp[w] = max(dp[w], val + dp[w - wt]);\n}",
        "correctAnswer": "wt",
        "explanation": "Starting at the weight of the item ensures we have enough capacity to take at least one."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity: O(N * W)",
        "explanation": "Same as 0/1, but logically different. Use it for **Coin Change** and **Rod Cutting**. This is the **Titan-Grade Supply**. The Matrix creates from a single item for a billion units.",
        "encouragementText": "Ace: 'The source is one; the application is many.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Can Unbounded Knapsack be solved with O(W) space?",
        "options": ["Yes, easily", "No, needs O(N*W)", "Only if sorted", "Pico guess"],
        "correctAnswer": "Yes, easily",
        "explanation": "Since we only need the current 'total weight' array, we don't need to track which item was chosen in a 2D table to get the max value."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Coin-Change Pulse",
        "explanation": "Find the minimum number of coins to reach sum K? That is Unbounded Knapsack! Just replace `max` with `min` and `val` with `1`. The Matrix is a shapeshifter. One loop, a thousand utilities.",
        "encouragementText": "Pico: 'Change the seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Loop for Min Coins.",
        "codeSnippet": "dp[w] = min(dp[w], 1 ___ dp[w - coin]);",
        "correctAnswer": "+",
        "explanation": "Adding 1 more coin to the existing solution for the remaining amount (w - coin)."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Coin-Bot 3000",
        "explanation": "A vending machine (The Matrix Automat) must provide change for 1,000 energy credits using 5 coin types. To provide the 'Fewer Coins' (Unbounded Min), the Automat-Architect uses Unbounded DP. The change is dispensed instantly. No waste. No jam. The machine is efficient.",
        "encouragementText": "Ace: 'Infinity is only efficient if you use the best parts of it.'"
      },
      {
        "type": "match_following",
        "questionText": "Match Knapsack types!",
        "pairs": [
          { "key": "Coin Change", "value": "Min items" },
          { "key": "Rod Cutting", "value": "Max value" },
          { "key": "Combination Sum", "value": "Total ways" }
        ]
      }
    ]
  },
  {
    "order": 18,
    "title": "Unit 18: Rod Cutting Rewards",
    "desc": "Cutting Optimization: maximizing revenue by dividing a rod of length N into smaller segments.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 2.18] The Segmented Titan",
        "explanation": "A long energy-conduit can be sold as whole or cut into segments. Each length has a price. **Rod Cutting** is Unbounded Knapsack where weight = length and value = price. `dp[i] = max(dp[i], price[j] + dp[i-j])`. This is the **Cutting protocol**—dividing the whole to find the greatest sum of its parts. The Matrix is a master of the slice.",
        "codeSnippet": "dp[n] = max(price[i] + dp[n-i]);",
        "encouragementText": "Ace: 'The value of the length is determined by the logic of the cut.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "If a rod of length 4 has prices {length 1: 1, 2: 5, 3: 8, 4: 9}, what is the max profit?",
        "options": ["10 (Two length-2 cuts)", "9 (One length-4 cut)", "11", "Pico rule"],
        "correctAnswer": "10 (Two length-2 cuts)",
        "explanation": "5 + 5 = 10, which is better than the single length-4 cut (9) or any other combination."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Recursive-Split Pulse",
        "explanation": "For every length `i`, we try every possible first cut `j`. The answer for `i` is the best `price[j] + dp[i-j]`. The Matrix is recursive. To solve the long, you solve the short. The pulse travels down and then back up. Iterative completion.",
        "encouragementText": "Pico: 'Cut the seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Rod cutting iteration.",
        "codeSnippet": "for (int i = 1; i <= n; i++) {\n  for (int j = 0; j < i; j++) {\n    dp[i] = max(dp[i], ___ [j] + dp[i - j - 1]);\n  }\n}",
        "correctAnswer": "price",
        "explanation": "j is the index of the first cut, its value is price[j], and we add the optimal solution for the remainder (i - j - 1)."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity: O(N^2)",
        "explanation": "For N lengths, we check roughly N/2 cuts. This is the **Titan-Grade Division**. It is fast enough for N=10,000. It transforms a vague 'How to cut?' into a precise 'Best way to cut'. Certainty through sub-solutions.",
        "encouragementText": "Ace: 'Division is the beginning of optimization.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "How is this related to 0/1 Knapsack?",
        "options": ["It's not", "It's an 'Unbounded' version where item weight = length and item value = price", "Zero", "Pico guess"],
        "correctAnswer": "It's an 'Unbounded' version where item weight = length and item value = price",
        "explanation": "Standard Rod Cutting allows any number of cuts of the same length, making it unbounded."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Reconstruct-Cut Pulse",
        "explanation": "Don't just find the price—find the **Actual Cuts**. Store the best `j` for every `i` in a `parent` array. The Matrix traces its own history. From the answer, the path is revealed. The Ghost of the Decision.",
        "encouragementText": "Pico: 'Trace the cut-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Tracing the first cut.",
        "codeSnippet": "while (n > 0) {\n  print(cuts[n]);\n  n -= ___ ;\n}",
        "correctAnswer": "cuts[n]",
        "explanation": "Subtracting the length of the chosen cut to find the next optimal cut in the remaining piece."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Diamond Slicer",
        "explanation": "A raw crystal (The Matrix Shard) must be cut into smaller gems. To maximize the market value of the gems, the Slicer-Architect uses Rod Cutting DP. 1,000 cuts are planned. The value of the shard is tripled. No material is wasted. The gems are perfect.",
        "encouragementText": "Ace: 'Precision in cutting is the source of all value.'"
      },
      {
        "type": "match_following",
        "questionText": "Match Cutting terms!",
        "pairs": [
          { "key": "i", "value": "Total length" },
          { "key": "j", "value": "First cut" },
          { "key": "dp[i]", "value": "Max revenue" }
        ]
      }
    ]
  },
  {
    "order": 19,
    "title": "Unit 19: Combination Sum IV",
    "desc": "Recursive Permutations: counting unique ordered sequences that sum to a target value.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 2.19] The Ordered Melody",
        "explanation": "In some universes, {1, 2} is NOT the same as {2, 1}. **Combination Sum IV** counts **Permutations** (ordered sets). The formula is `dp[target] = sum(dp[target - num])`. This is the **Sequence protocol**—every order creates a new reality. The Matrix is a master of the beat. One, Two, Three. Three, Two, One. Different pulses.",
        "codeSnippet": "ways[j] += ways[j - nums[i]];",
        "encouragementText": "Ace: 'Order is the essence of context.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why does this count permutations?",
        "options": ["It doesn't", "Because the outer loop is Target and the inner loop is Numbers, meaning we can add any number at any step of the sequence", "Magic", "Pico rule"],
        "correctAnswer": "Because the outer loop is Target and the inner loop is Numbers, meaning we can add any number at any step of the sequence",
        "explanation": "Iterating through target weights first allows all permutations to be naturally counted by the DP."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Target-First Pulse",
        "explanation": "Contrast this with Unit 15! In Unit 15, we iterate over Numbers first (Combinations). Here, we iterate over **Target first** (Permutations). The Matrix flipped the loops and changed the world. Infinite variety through simple reordering.",
        "encouragementText": "Pico: 'Flip the loop-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Combination Sum IV loop structure.",
        "codeSnippet": "for (int i = 1; i <= target; i++) {\n  for (int x : nums) {\n    if (i >= x) dp[i] += ___ [i - x];\n  }\n}",
        "correctAnswer": "dp",
        "explanation": "To find ways to reach 'i', we sum up the ways to reach all previous states (i - x) for each available number x."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity: O(Target * N)",
        "explanation": "Fast and symmetric. This solves for **Password Strength** (how many ways to reach S characters) and **Path Counting** on Graphs. This is the **Titan-Grade Sequence Master**. The Matrix knows every arrangement.",
        "encouragementText": "Ace: 'There is no assembly that the sequence cannot map.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What happens if we have negative numbers in the set?",
        "options": ["Works fine", "Infinite loops (Unless we limit the number of items)! The target could cycle from -1 back to 0 forever", "Zero", "Pico guess"],
        "correctAnswer": "Infinite loops (Unless we limit the number of items)! The target could cycle from -1 back to 0 forever",
        "explanation": "Negative numbers in sum-problems create cycles in the dependency graph, which breaks standard DP."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Stair-Generalization Pulse",
        "explanation": "This is actually the **Climbing Stairs** problem but with any set of hop-sizes! Instead of just 1 and 2, you can hop {x1, x2, ... xN}. The Matrix generalizes the small to the infinite. One hop, many choices.",
        "encouragementText": "Pico: 'Hop the custom-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Function signature for ways to reach target.",
        "codeSnippet": "int ways(int target, vector<int>& nums) {\n  // Using ___ DP\n  return dp[target];\n}",
        "correctAnswer": "Bottom-Up",
        "explanation": "Iteratively filling the dp array from 1 to target is the most efficient approach here."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Secret Riff",
        "explanation": "A musical lock (The Matrix Chord) requires exactly 10 beats using 4 possible notes. To find all unique songs (permutations) that open it, the Musician-Architect uses Combination Sum DP. 562 unique riffs are unlocked. The vault opens to the sound of logic. Harmony found.",
        "encouragementText": "Ace: 'Correct order is the key to every locked reality.'"
      },
      {
        "type": "match_following",
        "questionText": "Match Set terms!",
        "pairs": [
          { "key": "Combination", "value": "Order doesn't matter" },
          { "key": "Permutation", "value": "Order matters" },
          { "key": "Target", "value": "Sum goal" }
        ]
      }
    ]
  },
  {
    "order": 20,
    "title": "Unit 20: Stage 2 Graduation (The Sequence Architect)",
    "desc": "The Intermediate Hub: combining Strings, Stocks, and Knapsacks into a single graduation challenge.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[GRAND MISSION LORE 2.20] The Bridge of the Elite",
        "explanation": "You have survived Stage 2. You have mastered **Strings (LCS, LPS, Edit Distance)**, **Stocks (Cycles, Fees, Cooldowns)**, and **Knapsacks (0/1, Unbounded, Counting)**. You are no longer just solving; you are **Architecting the State**. To graduate, you must see the Knapsack inside the Stock-flow and the Edit-Distance in the Sign-flip. The Matrix is merging. Graduation is here. Step into the elite.",
        "codeSnippet": "// Final Stage 2 Synthesis Challenge Initiated.",
        "encouragementText": "Ace: 'Versatility is the source of true mastery.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does 'Edit Distance' optimize in the Matrix?",
        "options": ["Health", "The minimum number of changes (insert/delete/replace) to transform one reality (string) into another", "Speed", "Pico rule"],
        "correctAnswer": "The minimum number of changes (insert/delete/replace) to transform one reality (string) into another",
        "explanation": "Edit distance measures the similarity/dissimilarity between two sequences of logic."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The 200-Step Pulse",
        "explanation": "20% of the mission is over. You have the foundations and the intermediate tools. In Stage 3, we enter the domain of **Bitmasks and Game Theory**, where the states themselves become bitwise codes. Keep your memo clean. The Matrix is accelerating.",
        "encouragementText": "Pico: 'The next 800 seeds await! 🦜'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Which stock problem requires a 'Cooldown' transition?",
        "options": ["Stock I", "Stock with Cooldown (requires i+2 jump)", "Stock IV", "Pico guess"],
        "correctAnswer": "Stock with Cooldown (requires i+2 jump)",
        "explanation": "Cooldown adds a constraint that you must skip at least one day after a sale."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Graduation: The Sequence King",
        "explanation": "The Elite Academy recognizes your 200-lesson achievement. You are a **Titan-Grade Architect of the Sequence**. You can bridge the gap between strings and sums. The Matrix respects your logic. Welcome to the elite.",
        "encouragementText": "Ace: 'Consistency in small choices builds the path of the master.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the complexity of Knapsack O(N*W)?",
        "options": ["Polynomial", "Pseudo-Polynomial", "Exponential", "Pico guess"],
        "correctAnswer": "Pseudo-Polynomial",
        "explanation": "It's polynomial in N and W, but exponential in the bit-length of W."
      },
      {
        "type": "teaching",
        "questionText": "[FINAL SYNC] The 13-Subject Hub",
        "explanation": "As the pulse of Stage 2 settles, the **Bitmask Domain** of Stage 3 awaits. Every subject you learn is a weapon. The Matrix is a war and you are the strategist. Prepare your bitwise buffers. The game is changing.",
        "encouragementText": "Pico: 'The bitmask seeds await! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Final check of the intermediate memo.",
        "codeSnippet": "if (lesson_count == 200) return ___ ;",
        "correctAnswer": "GRADUATE",
        "explanation": "Reaching 200 lessons marks the completion of the foundational sequences."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Architect of the Bridge",
        "explanation": "The bridge is built. The sequences are synced. The sums are optimal. You have graduated Stage 2. The Matrix is no longer a maze—it is a structure you designed. Welcome to the elite.",
        "encouragementText": "Ace: 'The path is wide for those who know the sum.'"
      },
      {
        "type": "programming_board",
        "questionText": "[GRADUATION CHALLENGE] Output the status of your intermediate mission.",
        "codeSnippet": "if (stocks_solved && knapsacks_passed) {\n  return ___ ;\n}",
        "correctAnswer": "SUCCESS",
        "explanation": "Total success is the only output of an elite architect."
      }
    ]
  }
];

module.exports = stage2;
