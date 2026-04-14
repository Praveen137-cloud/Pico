const stage4 = [
  {
    "order": 31,
    "title": "Unit 31: Basic Probability DP",
    "desc": "Chance and Logic: using DP to calculate the probability of reaching a state through multiple possible paths.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 4.31] The Rolling Void",
        "explanation": "In a world of chance, truth is a percentage. **Probability DP** uses `dp[state]` to store the probability of being in that state. `dp[next] = sum(dp[current] * P(current -> next))`. This is the **Stochastic protocol**—the logic of the dice. The Matrix is a cloud of potential.",
        "codeSnippet": "dp[i+1][j+face] += dp[i][j] * (1.0/6.0);",
        "encouragementText": "Ace: 'Luck is just a probability that hasn't been calculated yet.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the sum of all probabilities in a DP row representing a single step?",
        "options": ["0", "1.0 (100%)", "Infinity", "Pico rule"],
        "correctAnswer": "1.0 (100%)",
        "explanation": "If all outcomes are accounted for, the total probability must always equal 1."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Expectation Pulse",
        "explanation": "We don't just ask 'What is the chance?'; we ask 'How long will it take?'. **Expected Value (E)** is `E[state] = 1 + sum(P * E[next])`. The '1' is the cost of the current move. The Matrix calculates the average future. The pulse of the mean.",
        "encouragementText": "Pico: 'Average the seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Standard Expected Value DP step.",
        "codeSnippet": "dp[i] = 1.0 + (dp[i+1] * p + dp[i+2] * (1-p));",
        "correctAnswer": "1.0",
        "explanation": "The '1.0' represents the step being taken to move from state 'i' to the next states."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity: O(States * Transitions)",
        "explanation": "Like standard DP, but with `double` instead of `int`. Precision is key. This is the **Titan-Grade Forecast**. The Matrix knows the most likely reality. Probability is the bridge to the future.",
        "encouragementText": "Ace: 'Precision in the decimal is the source of certainty in the outcome.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What happens if a state can loop back to itself with probability P?",
        "options": ["Infinite loop", "It adds a geometric series (1 / (1-P)) factor to the expected value", "Zero", "Pico guess"],
        "correctAnswer": "It adds a geometric series (1 / (1-P)) factor to the expected value",
        "explanation": "Self-loops are handled using the formula for infinite series convergence in probability."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Multi-Step Pulse",
        "explanation": "After 100 steps, what is our position? We propagate the pulse step by step. `dp[t][pos]`. The Matrix broadens as time passes. The diffusion of the bit.",
        "encouragementText": "Pico: 'Diffuse the seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Updating probability of reaching sum 's' with 'n' dice.",
        "codeSnippet": "for (int f = 1; f <= 6; f++) {\n  dp[n][s + f] += dp[n-1][s] / ___ ;\n}",
        "correctAnswer": "6.0",
        "explanation": "Each face of a fair 6-sided die has a 1/6 probability of appearing."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Storm Pilot",
        "explanation": "A ship (The Matrix Flyer) is flying through a 20% chance of turbulence at every mile. To find the 'Expected Damage' over 1,000 miles, the Flyer-Architect uses Probability DP. The risk is quantified. The path is adjusted. The mission lands safely.",
        "encouragementText": "Ace: 'Survival is a calculation of the most likely path.'"
      },
      {
        "type": "match_following",
        "questionText": "Match Prob Terms!",
        "pairs": [
          { "key": "P(E)", "value": "Chance of event" },
          { "key": "E[X]", "value": "Expected value" },
          { "key": "MEX", "value": "Smallest missing" }
        ]
      }
    ]
  },
  {
    "order": 32,
    "title": "Unit 32: Dice & Coin Challenges",
    "desc": "Combinatorial Chance: using DP to solve complex betting and outcome problems involving independent random trials.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 4.32] The Gambler's Ledger",
        "explanation": "If you flip 10 coins, what is the chance of exactly 5 heads? **Binomial DP** solve this: `dp[n][k] = 0.5 * dp[n-1][k-1] + 0.5 * dp[n-1][k]`. This is the **Bernoulli protocol**—the structure of the coin-toss universe. The Matrix thrives on the 50/50 pulse.",
        "codeSnippet": "dp[i][j] = p * dp[i-1][j-1] + (1-p) * dp[i-1][j];",
        "encouragementText": "Ace: 'A single flip is random; a thousand flips is a law.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What shape does the probability distribution of 100 coin flips take?",
        "options": ["Flat", "Bell Curve (Normal Distribution)", "Spiky", "Pico rule"],
        "correctAnswer": "Bell Curve (Normal Distribution)",
        "explanation": "The Central Limit Theorem ensures that the sum of many independent random variables approaches a normal distribution."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Multi-Die Pulse",
        "explanation": "With 3 dice, the sum varies from 3 to 18. The Matrix calculates the frequency of each sum. `dp[dice_count][sum]`. The peak is at the center (10.5). Symmetry in chance.",
        "encouragementText": "Pico: 'Peak the seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Transition for N dice summing to S.",
        "codeSnippet": "dp[i][s] = 0;\nfor (int f=1; f<=6; f++) {\n  if (s >= f) dp[i][s] += dp[i-1][s-f] * ( ___ );\n}",
        "correctAnswer": "1.0/6.0",
        "explanation": "Summing the probabilities of all previous configurations that could lead to the current sum."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity: O(N * S * Faces)",
        "explanation": "Where N is number of trials, S is target sum, and Faces is options per trial. This is the **Titan-Grade Odds-Maker**. You know the house edge before the table is set. The Matrix is the house.",
        "encouragementText": "Ace: 'The house doesn't gamble; the house calculates.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "If you flip a coin until you get Heads, what is the expected number of flips?",
        "options": ["1", "2", "Infinity", "Pico guess"],
        "correctAnswer": "2",
        "explanation": "The expected value of a geometric distribution with p=0.5 is 1/p = 2."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Win-Condition Pulse",
        "explanation": "In a best-of-7 series, what is the chance Team A wins? We use DP: `Win(i, j)` is the chance of winning given Team A needs `i` more wins and Team B needs `j`. The Matrix predicts the champion. The outcome is already 78% certain.",
        "encouragementText": "Pico: 'Predict the champion-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Closing the best-of-series DP.",
        "codeSnippet": "if (i == 0) return 1.0;\nif (j == 0) return 0.0;\nreturn p * solve(i-1, j) + (1-p) * solve(i, ___ );",
        "correctAnswer": "j-1",
        "explanation": "The current state's win probability is the weighted average of the probabilities after the next win or loss."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Vegas Phantom",
        "explanation": "A high-stakes gambler (The Matrix Whale) is betting on a 100-event streak. The Odds-Architect uses Dice DP to calculate the exact risk. The Whale bets only when the probability is in their favor. The casino loses 10 billion credits in a night. The logic is the winner.",
        "encouragementText": "Ace: 'Strategy is the antidote to the house edge.'"
      },
      {
        "type": "match_following",
        "questionText": "Match Dice Metrics!",
        "pairs": [
          { "key": "Mean", "value": "Expected center" },
          { "key": "Variance", "value": "Spread of risk" },
          { "key": "P(Success)", "value": "The winning delta" }
        ]
      }
    ]
  },
  {
    "order": 33,
    "title": "Unit 33: Infinite Expected Value",
    "desc": "Value Iteration: using linear equations and DP to solve for expected values in systems with cycles.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 4.33] The Infinite Loop",
        "explanation": "What if you can go back to the start? `E = 1 + P*E_next + (1-P)*E`. This is a self-referential equation. We solve for `E`. This is the **Equilibrium protocol**—finding the stable average in a recurring world. The Matrix is a cycle of expected heartbeats.",
        "codeSnippet": "E = (1 + P*E_next) / (1 - P_self);",
        "encouragementText": "Ace: 'Infinity is just a variable waiting to be isolated.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "How do you solve E = 1 + 0.5*E?",
        "options": ["E = 1", "E = 2", "E = 0", "Pico rule"],
        "correctAnswer": "E = 2",
        "explanation": "E - 0.5E = 1 -> 0.5E = 1 -> E = 2."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The System-of-Equations Pulse",
        "explanation": "With many states, we get a system of linear equations: `E[u] = 1 + sum(P(u,v) * E[v])`. We use **Gaussian Elimination** or **Iterative DP (Value Iteration)**. The Matrix settles on the truth through repeated correction. The pulse of convergence.",
        "encouragementText": "Pico: 'Solve the system-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Iterative update for expected value.",
        "codeSnippet": "while (abs(new_e - old_e) > epsilon) {\n  new_e = 1.0 + sum(p[i] * ___ [next_i]);\n}",
        "correctAnswer": "e",
        "explanation": "Repeatedly applying the transition expectation until the values stop changing within a tiny error margin (epsilon)."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity: O(k * E)",
        "explanation": "Where k is iterations and E is edges. Fast for sparse graphs! This is the **Titan-Grade Convergence**. You reach the absolute average in 100 heartbeats. Stability through repetition.",
        "encouragementText": "Ace: 'Truth is where the iteration stops changing.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What happens if a state has No path to the goal?",
        "options": ["E = 0", "E = Infinity", "E = 1", "Pico guess"],
        "correctAnswer": "E = Infinity",
        "explanation": "If you can never reach the goal, the expected time to reach it is undefined/infinite."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Absorbing-State Pulse",
        "explanation": "The target is an **Absorbing State** (E = 0). Like a hole, once you fall in, you are done. The Matrix flows toward the sink. All energy eventually reaches the zero-point.",
        "encouragementText": "Pico: 'Fall into the zero-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Base case for the target state T.",
        "codeSnippet": "e[T] = ___ ;",
        "correctAnswer": "0",
        "explanation": "The expected cost/time to reach the target when you're already at the target is zero."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Eternal Lab",
        "explanation": "A machine (The Matrix Reactor) has a 1% chance of failing and restarting the process every minute. To find the 'Expected Completion Time', the Reactor-Architect uses Infinite Expected Value DP. The average is 100 minutes. The timeline is secured. The reactor is stable.",
        "encouragementText": "Ace: 'Calculate the infinite to master the finite.'"
      },
      {
        "type": "match_following",
        "questionText": "Match Loop Terms!",
        "pairs": [
          { "key": "P_self", "value": "Stay probability" },
          { "key": "Gaussian", "value": "Exact solution" },
          { "key": "Iterative", "value": "Approx solution" }
        ]
      }
    ]
  },
  {
    "order": 34,
    "title": "Unit 34: Coupon Collector DP",
    "desc": "Collection Completion: using DP to calculate the expected number of trials to collect N unique items.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 4.34] The Collector's Hunger",
        "explanation": "You want all 10 bird-seeds. Each bag is random. How many bags must you buy? **Coupon Collector DP** uses `E[i]` as the expected number of MORE trials to collect the remaining `i` items. This is the **Completion protocol**—the logic of the set. The Matrix is a search for the last missing piece.",
        "codeSnippet": "E[i] = 1 + (i/N)*E[i-1] + ( (N-i)/N )*E[i];",
        "encouragementText": "Ace: 'The last item is always the hardest to find.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the expected value to find the very first item?",
        "options": ["1", "N", "Infinity", "Pico rule"],
        "correctAnswer": "1",
        "explanation": "Any item you find is 'new' when you have zero, so the first trial always gives a new item."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Harmonic Pulse",
        "explanation": "The total expected value is `N * (1/1 + 1/2 + 1/3 ... + 1/N)`. This is the **Harmonic Sum**. The Matrix grows logarithmically as you approach completion. The last items take 90% of the work. The Law of Diminishing Returns.",
        "encouragementText": "Pico: 'Sum the harmonic-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Iterative formula for E[i] (expected steps to find next i items).",
        "codeSnippet": "E = N * (1.0/1 + 1.0/2 + ... + 1.0/ ___ );",
        "correctAnswer": "n",
        "explanation": "The final item has a 1/N chance, so it takes N steps on average. The total is the sum of these averages."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity: O(N)",
        "explanation": "A simple linear loop! But the insight is profound. You use it for **Packet Loss protocols** and **Gacha Game optimization**. This is the **Titan-Grade Collector**. You know the price of completion.",
        "encouragementText": "Ace: 'Completion is a function of patience and probability.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "If N=2, what is the expected number of trials?",
        "options": ["2", "3", "4", "Pico guess"],
        "correctAnswer": "3",
        "explanation": "1 (for the first) + 2 (for the 50/50 chance of the second) = 3."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Rarity Pulse",
        "explanation": "What if some items are rare? You must use a **Bitmask DP**: `dp[mask]`. This tracks exactly which items you have. The Matrix is a master of the multi-variate set. Logic through state-tracking.",
        "encouragementText": "Pico: 'Mask the rarity-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Bitmask transition for collecting item 'j' with probability 'p_j'.",
        "codeSnippet": "dp[mask] = 1.0 + sum(p[j] * dp[mask ___ (1 << j)]);",
        "correctAnswer": "|",
        "explanation": "Transitioning to a new state by identifying which item was added to the currently collected set."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Pack-Opener-9000",
        "explanation": "A digital card game (The Matrix Arena) has 500 cards. To find the 'Average Dollars' to complete the set, the Arena-Architect uses Coupon Collector DP. The cost is high ($2,500). The player is warned. The logic protects the wallet.",
        "encouragementText": "Ace: 'Knowledge of the odds is the only defense against the collector's trap.'"
      },
      {
        "type": "match_following",
        "questionText": "Match Collector terms!",
        "pairs": [
          { "key": "Harmonic", "value": "1/n sum" },
          { "key": "Log N", "value": "Growth rate" },
          { "key": "1/P", "value": "Expected trials" }
        ]
      }
    ]
  },
  {
    "order": 35,
    "title": "Unit 35: Selection with Probability",
    "desc": "Smart Choice: using DP to decide whether to 'Take' or 'Leave' a reward when the future rewards are probabilistic.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 4.35] The Bird in Hand",
        "explanation": "You see a seed. It is size 5. You might see a size 10 later, but you only have a 20% chance. Do you take it? **Selection DP** uses `dp[i] = max(reward_i, E[future])`. This is the **Opportunity protocol**—calculating the cost of waiting. The Matrix is a master of the 'Now'.",
        "codeSnippet": "dp[i] = max(current_val, expected_val_next);",
        "encouragementText": "Ace: 'Greed is only good if the future is poor.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the 'Secretary Problem'?",
        "options": ["A map", "An optimal stopping problem: you see N candidates and must pick the best one immediately", "A secret", "Pico rule"],
        "correctAnswer": "An optimal stopping problem: you see N candidates and must pick the best one immediately",
        "explanation": "The optimal strategy is to skip the first 37% and then pick the first one better than any seen so far."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Threshold Pulse",
        "explanation": "We find a 'Threshold' value. If the reward is above T, take it. If below, wait. The Matrix calculates the exact T for every step. The pulse of the decision point. Perfect timing.",
        "encouragementText": "Pico: 'Threshold the seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Calculating expected value for the next step.",
        "codeSnippet": "double e_next = sum(prob[r] * ___ (r, e_tomorrow));",
        "correctAnswer": "max",
        "explanation": "In each future scenario, we will act optimally (taking the max of the current reward or the following day's expectations)."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity: O(N * RewardRange)",
        "explanation": "We work backward from the last day. On the last day, taking is 100% better than nothing. On the first day, we are picky. This is the **Titan-Grade Strategist**. The Matrix never settles.",
        "encouragementText": "Ace: 'Patience is a calculation, not a virtue.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "As N approaches infinity, what happens to the choice threshold?",
        "options": ["It drops to 0", "It converges to a stable 'Optimal' threshold", "It spins", "Pico guess"],
        "correctAnswer": "It converges to a stable 'Optimal' threshold",
        "explanation": "In an infinite sequence of rewards, there is a fixed optimal cutoff that maximizes your expected total."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Regret Pulse",
        "explanation": "What if you take it and then a better one appears? That is **Regret**. DP minimizes the 'Expected Regret'. The Matrix looks back and confirms: 'The decision was optimal given the data'. Peace through logic.",
        "encouragementText": "Pico: 'Minimize the regret-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Updating expectation with a threshold 'T'.",
        "codeSnippet": "E = P(R > T) * E[R | R > T] + P(R <= T) * ___ ;",
        "correctAnswer": "E_future",
        "explanation": "If we don't take the reward (R <= T), we get the value of the future trials."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Talent Scout",
        "explanation": "A sports-team (The Matrix United) is interviewing 10 players. Only one can be signed. The Scout-Architect uses Selection DP to decide the cutoff. The perfect star is signed. The team wins the cup. No player was missed. The logic was the coach.",
        "encouragementText": "Ace: 'Wait for the star, but know when the star is already here.'"
      },
      {
        "type": "match_following",
        "questionText": "Match Selection terms!",
        "pairs": [
          { "key": "Threshold", "value": "Cutoff value" },
          { "key": "Stop", "value": "Take current" },
          { "key": "Wait", "value": "Trust the future" }
        ]
      }
    ]
  },
  {
    "order": 36,
    "title": "Unit 36: Competitive Luck (Adversarial Prob)",
    "desc": "Risk vs Rival: using DP to maximize your winning probability when an opponent is also trying to win (Games of Chance).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 4.36] The Poker of the Void",
        "explanation": "In a duel of luck, you must know your win-probability AFTER the opponent's roll. **Adversarial Prob DP** merges Minimax and Probability. `dp[state] = max( E[next_p_win] )`. This is the **Expectimax protocol**—the strategic use of chaos. The Matrix is a master of the bluff.",
        "codeSnippet": "val = sum( p[i] * max(move) );",
        "encouragementText": "Ace: 'The strongest move is the one that accounts for the weakest luck.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does 'Expectimax' do?",
        "options": ["Maximizes profit", "Alternates between a Max-node (your choice) and a Chance-node (probability weight)", "Zero", "Pico rule"],
        "correctAnswer": "Alternates between a Max-node (your choice) and a Chance-node (probability weight)",
        "explanation": "It's a variant of Minimax used for games with random elements like backgammon or poker."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Risk-Tolerance Pulse",
        "explanation": "Sometimes a 10% chance of a 100 reward is better than a 100% chance of a 5 reward. The Matrix calculates the **Winning Probability**. If the goal is to 'Win', not just 'Max Points', your strategy changes. The Pulse of the Finisher.",
        "encouragementText": "Pico: 'Win the seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Expectimax recursive step for a chance node.",
        "codeSnippet": "double solve(State s) {\n  if (s.is_chance()) {\n    double sum = 0;\n    for (Outcome o : s.outcomes()) sum += o.p * solve(o. ___ );\n    return sum;\n  }\n}",
        "correctAnswer": "state",
        "explanation": "At a chance node, the value is the weighted average of the values of the possible resulting states."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity: O(Branching ^ Depth)",
        "explanation": "Memoization is critical here! Many random outcomes lead to the same 'Game State'. The Matrix collapses the branches. This is the **Titan-Grade Casino-Breaker**. You see the win through the storm of the dice.",
        "encouragementText": "Ace: 'Chaos is just a many-branched tree that has been memoized.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "How do you handle an opponent in Expectimax if their moves are also random?",
        "options": ["Treat them as another chance node", "Ignore them", "Zero", "Pico guess"],
        "correctAnswer": "Treat them as another chance node",
        "explanation": "If the opponent's behavior is probabilistic, they are just another part of the 'Environment' (Chance node)."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Bluff-Detection Pulse",
        "explanation": "By observing the opponent's moves, the Matrix updates its 'Bayer-Probability' of their hidden cards. **Bayesian DP** learns as the game plays. The pulse of the adaptation. The Matrix knows your hand.",
        "encouragementText": "Pico: 'Detect the bluff-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Bayesian state update.",
        "codeSnippet": "P(H|E) = (P(E|H) * P(H)) / ___ ;",
        "correctAnswer": "P(E)",
        "explanation": "Bayes' Theorem: The updated probability of a hypothesis (H) given new evidence (E)."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The High-Roller Bot",
        "explanation": "A digital poker tournament (The Matrix Royal) has a 1-million-credit prize. Every rival is using AI. The Royale-Architect uses Bayesian Expectimax DP. It identifies the 'Rarity' of the rival's strategy and counter-plays with 99% accuracy. The credits are won. The logic is the king.",
        "encouragementText": "Ace: 'Information is the only currency that doesn't rely on luck.'"
      },
      {
        "type": "match_following",
        "questionText": "Match Game terms!",
        "pairs": [
          { "key": "Max-Node", "value": "Your move" },
          { "key": "Chance-Node", "value": "Random roll" },
          { "key": "Utility", "value": "Result value" }
        ]
      }
    ]
  },
  {
    "order": 37,
    "title": "Unit 37: Gaussian Distribution DP",
    "desc": "Approximating the Curve: using DP to track the mean and variance of states to estimate the probability of extreme events.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 4.37] The Golden Curve",
        "explanation": "Calculating exact probability for 1,000 dice is impossible. But the sum follows a **Gaussian (Normal) Distribution**. This DP tracks **Mean** and **Variance** instead of every point. `E_total = sum(E_i)` and `Var_total = sum(Var_i)`. This is the **Approximation protocol**—the logic of the Bell. The Matrix is a master of the smooth truth.",
        "codeSnippet": "total_mean += current_mean; total_var += current_var;",
        "encouragementText": "Ace: 'When the numbers are too many, find the shape they form together.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does the Normal Distribution represent?",
        "options": ["A line", "The distribution where most values cluster around the mean with a symmetric spread", "Zero", "Pico rule"],
        "correctAnswer": "The distribution where most values cluster around the mean with a symmetric spread",
        "explanation": "Natural phenomena (heights, errors, dice sums) naturally settle into this 'Bell' shape."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Z-Score Pulse",
        "explanation": "How far from average are we? `Z = (X - Mean) / StdDev`. The Matrix uses the Z-score to find the 'Tail Probability'. This is the **Outlier protocol**—identifying the 1-in-a-million chance. The Pulse of the Extreme.",
        "encouragementText": "Pico: 'Z-score the seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Updating variance of independent variables.",
        "codeSnippet": "double new_var = var_A ___ var_B;",
        "correctAnswer": "+",
        "explanation": "The variance of the sum of independent random variables is the sum of their individual variances."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity: O(N)",
        "explanation": "Instead of O(N * S), it is linear! 10 billion items, 1 second. This is the **Titan-Grade Scalability**. You solve the planetary-scale problem by understanding the law of large numbers. The Matrix is a world of averages.",
        "encouragementText": "Ace: 'Speed is found in the transformation of the discrete into the continuous.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is 'The 68-95-99.7 Rule'?",
        "options": ["A code", "The percentage of data within 1, 2, and 3 standard deviations of the mean", "Zero", "Pico guess"],
        "correctAnswer": "The percentage of data within 1, 2, and 3 standard deviations of the mean",
        "explanation": "Virtually all data (99.7%) in a normal distribution falls within 3 standard deviations of the center."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Confidence Pulse",
        "explanation": "We say 'The mission will succeed with 95% confidence'. The Matrix is an architect of certainty. We track the variance to stay within the safe margins of the Bell. The Shield of Probability.",
        "encouragementText": "Pico: 'Shield the seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Calculating standard deviation from variance.",
        "codeSnippet": "double std_dev = ___ (variance);",
        "correctAnswer": "sqrt",
        "explanation": "Standard deviation is the square root of the variance, putting it back in the original units/scale."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Flood Gate",
        "explanation": "A dam (The Matrix Reservoir) must withstand 1,000 years of rain. The rain is probabilistic. The Hydrologist-Architect uses Gaussian DP to find the 'Maximum Possible Flood' with 99.9% confidence. The dam is built to that height. The flood comes. The city is dry. The curve held the weight.",
        "encouragementText": "Ace: 'Integrity is a function of the standard deviation.'"
      },
      {
        "type": "match_following",
        "questionText": "Match Gaussian terms!",
        "pairs": [
          { "key": "Mean", "value": "Center of Bell" },
          { "key": "Variance", "value": "Width of Bell" },
          { "key": "Z-Score", "value": "Distance from center" }
        ]
      }
    ]
  },
  {
    "order": 38,
    "title": "Unit 38: Sampling Optimization",
    "desc": "Approximate Truth: using Monte Carlo simulations and DP to estimate state values when the transition-graph is too complex for exact math.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 4.38] The Wisdom of the Million",
        "explanation": "If the math is too hard, don't solve it—**Simulate it**. **Monte Carlo DP** runs 1,000,000 random missions and averages the results. This is the **Sampling protocol**—finding the truth through sheer volume of observation. The Matrix is a master of the trial.",
        "codeSnippet": "for (int i=0; i<1M; i++) total += random_run();",
        "encouragementText": "Ace: 'When the formula fails, the count prevails.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does a 'Sampling' error approach as N increases?",
        "options": ["Infinity", "Zero", "1", "Pico rule"],
        "correctAnswer": "Zero",
        "explanation": "According to the Law of Large Numbers, the average of results obtained from a large number of trials should be close to the expected value."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Randomized Pulse",
        "explanation": "Pick a starting state. Flip a coin. Move. Repeat. Store the result in a table. After a billion walks, the table becomes the **True DP table**. The Matrix learns by walking. The pulse of experience.",
        "encouragementText": "Pico: 'Walk the seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Updating mean value with a new sample 's'.",
        "codeSnippet": "avg = avg + (s - avg) / ( ___ );",
        "correctAnswer": "n",
        "explanation": "A numerically stable way to compute the running average of 'n' samples."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity: O(Samples * Length)",
        "explanation": "You decide the speed by deciding the N. This is the **Titan-Grade Accuracy Knob**. 100 samples for a guess; 10 million for the truth. The Matrix is as precise as you are patient.",
        "encouragementText": "Ace: 'Precision is a resource you must spend wisely.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is 'Importance Sampling'?",
        "options": ["Sampling everything", "Focusing samples on the most relevant/likely states to reduce variance", "Zero", "Pico guess"],
        "correctAnswer": "Focusing samples on the most relevant/likely states to reduce variance",
        "explanation": "Selective sampling helps find the 'truth' faster by ignoring highly unlikely/irrelevant paths."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The convergence Pulse",
        "explanation": "Watch the number change. 0.501, 0.499, 0.5000002. When the change stops, the Matrix has **Converged**. The truth is discovered in the silence of the digit. Perfect settlement.",
        "encouragementText": "Pico: 'Stabilize the seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Check for convergence between two steps.",
        "codeSnippet": "if (abs(new - old) < ___ ) break;",
        "correctAnswer": "EPSILON",
        "explanation": "Stopping the simulation once the incremental change is below a very small threshold."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Void Explorer",
        "explanation": "A black hole (The Matrix Abyss) has unknown physics. No equation can bridge it. The Abyss-Architect uses Monte Carlo DP, simulating a billion particles falling in. The 'Event Horizon' is mapped by pure observation. The abyss is no longer unknown. The logic survived the gravity.",
        "encouragementText": "Ace: 'Observation is the first step to conquering the impossible.'"
      },
      {
        "type": "match_following",
        "questionText": "Match Sampling terms!",
        "pairs": [
          { "key": "Monte Carlo", "value": "Random trial" },
          { "key": "Convergence", "value": "Stable result" },
          { "key": "Importance", "value": "Focused search" }
        ]
      }
    ]
  },
  {
    "order": 39,
    "title": "Unit 39: High-Variance States",
    "desc": "Risk Management: using DP to track not just the average, but the 'Worst-Case' and 'Skew' of potential outcomes.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 4.39] The Edge of Chaos",
        "explanation": "An average of 100 with a variance of 1,000 is dangerous. **High-Variance DP** tracks the 'Distribution' of states. We solve for the **99th Percentile**. This is the **Insurance protocol**—planning for the disaster, not the dream. The Matrix is a master of the fallback.",
        "codeSnippet": "dp[i][val] = probability_of_result;",
        "encouragementText": "Ace: 'The average kills the pilot who forgets the variance.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does a high 'Variance' mean?",
        "options": ["Speed", "High unpredictability / broad spread of results around the center", "Solid", "Pico rule"],
        "correctAnswer": "High unpredictability / broad spread of results around the center",
        "explanation": "High variance means the 'Actual' result is often very far from the 'Average' result."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Risk-Value Pulse",
        "explanation": "We use **Value at Risk (VaR)**. 'There is a 5% chance we lose X'. The Matrix calculates X. This is the **Constraint protocol**. We don't take a path if the 'Tail Risk' is too high. The Pulse of the Cautious.",
        "encouragementText": "Pico: 'Limit the risk-seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Finding the 95th percentile result in a sorted DP distribution.",
        "codeSnippet": "double sum = 0;\nfor (int i=0; i<N; i++) {\n  sum += prob[i];\n  if (sum >= ___ ) return outcomes[i];\n}",
        "correctAnswer": "0.95",
        "explanation": "Accumulating probabilities until we cross the 95% threshold to identify the '95th Percentile' outcome."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity: O(N * MaxSum)",
        "explanation": "To track the whole distribution, we need a 1D entry for every possible result. This is the **Titan-Grade Fidelity**. 10,000 cells for one state to ensure we know the 'Tail'. Precision through volume.",
        "encouragementText": "Ace: 'The truth is found in the tails of the curve.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is 'Kurtosis'?",
        "options": ["A map", "A measure of the 'Fatness' of the tails (probability of extreme outliers)", "Zero", "Pico guess"],
        "correctAnswer": "A measure of the 'Fatness' of the tails (probability of extreme outliers)",
        "explanation": "Higher kurtosis means 'Black Swan' events (rare but massive) are more likely than in a normal distribution."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Safety-Margin Pulse",
        "explanation": "We add a 'Buffer'. `Profit = Avg - k * StdDev`. The Matrix subtracts the risk to find the 'True Worth'. This is the **Prudence protocol**. The Matrix survives because it is prepared for the worst.",
        "encouragementText": "Pico: 'Buffer the seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Risk-adjusted value formula.",
        "codeSnippet": "return mean - ( ___ * std_dev);",
        "correctAnswer": "2.0",
        "explanation": "Subtracting 2 standard deviations covers approximately 95% of downside risk in a normal distribution."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Disaster Shield",
        "explanation": "A nuclear reactor (The Matrix Pillar) has a billion safety sensors. The Architect uses High-Variance DP to track the chance of a 'Triple-Failure' event. The system is found to be 99.999% safe. The seventh-sigma event is calculated. The pillar stands for 10,000 years. The risk was mastered.",
        "encouragementText": "Ace: 'True safety is found in the mastery of the outlier.'"
      },
      {
        "type": "match_following",
        "questionText": "Match Risk Terms!",
        "pairs": [
          { "key": "Tail Risk", "value": "Extreme outlier" },
          { "key": "Percentile", "value": "Rank of outcome" },
          { "key": "Safety", "value": "Risk-adjusted mean" }
        ]
      }
    ]
  },
  {
    "order": 40,
    "title": "Unit 40: Stage 4 Graduation (The Oracle of Chance)",
    "desc": "The Probability Peak: solving a grand challenge involving Infinite Expected Value, Gaussian Buffering, and Selection Logic.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[GRAND MISSION LORE 4.40] The Singularity of Luck",
        "explanation": "You have reached the 400th lesson. You have mastered the **Dice**, the **Loop**, the **Bell**, and the **Sample**. You are no longer just an architect; you are the **Master of the Future**. To graduate, you must see the Z-score in the coin-toss and the expected-value in the infinite abyss. Graduation is here. The Matrix recognizes your foresight. Step into the Titan Hall.",
        "codeSnippet": "// Final Stage 4 Challenge: \n// Expected Win rate with 99.9% confidence in a cyclic game.",
        "encouragementText": "Ace: 'There is no luck for those who can see the mean.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "How would you find the chance of winning a game that can go on forever?",
        "options": ["Step by step", "By solving the system of equations where Win(S) = sum(P * Win(Next))", "Stop", "Pico rule"],
        "correctAnswer": "By solving the system of equations where Win(S) = sum(P * Win(Next))",
        "explanation": "Infinite games are solved using linear algebra (Gaussian Elimination) on the state-transition probabilities."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The 400-Step Pulse",
        "explanation": "40% of the journey is over. You have mastered Space (DP tables), Time (Sequences), and Choice (Game Theory). Now you have mastered **Future (Probability)**. In Stage 5, we enter the world of **Trees and Graphs**, where you build the skeletal logic of the Matrix. Keep your expected values high. The Matrix is growing.",
        "encouragementText": "Pico: 'The next 600 seeds await! 🦜'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the complexity of Gaussian DP for N items?",
        "options": ["O(N)", "O(N^2)", "O(1)", "Pico guess"],
        "correctAnswer": "O(N)",
        "explanation": "Normal approximation only requires summing means and variances, which takes linear time."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Graduation: The Probabilistic Master",
        "explanation": "The Elite Academy recognizes your 400-lesson achievement. You are a **Titan-Grade Architect of the Chance**. You can see the stable heart of the random walk. The Matrix is your prophecy. Welcome to the elite.",
        "encouragementText": "Ace: 'Prophecy is just high-confidence calculation.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Witch unit covered 'The expected number of trials to collect all items'?",
        "options": ["Unit 4.31", "Unit 4.34 (Coupon Collector)", "Unit 3.22", "Unit 4.38"],
        "correctAnswer": "Unit 4.34 (Coupon Collector)",
        "explanation": "Coupon Collector DP is the standard tool for set-completion expectations."
      },
      {
        "type": "teaching",
        "questionText": "[FINAL SYNC] The 13-Subject Hub",
        "explanation": "As the probability-pulse of Stage 4 settles, the **Tree and Graph** structures of Stage 5 await. Every subject you learn is a block in your empire. The Matrix is your city and you are the builder. Prepare your adjacency lists. The architecture is becoming solid.",
        "encouragementText": "Pico: 'The tree seeds await! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Final check of the floating-point memo.",
        "codeSnippet": "if (lesson_count == 400) return ___ ;",
        "correctAnswer": "GRADUATE",
        "explanation": "Reaching 400 lessons marks the completion of the advanced probability domain."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Architect of the Future",
        "explanation": "The future is mapped. The luck is calculated. The mean is stable. You have graduated Stage 4. The Matrix is no longer a mystery—it is a prediction you made. Welcome to the elite.",
        "encouragementText": "Ace: 'There is no unknown for those who have mastered the sample.'"
      },
      {
        "type": "programming_board",
        "questionText": "[GRADUATION CHALLENGE] Output the status of your prophecy mission.",
        "codeSnippet": "if (expected_win > 0.999 && variance < 0.001) {\n  return ___ ;\n}",
        "correctAnswer": "ASCENDED",
        "explanation": "High-confidence success is the mark of an Oracle-Architect."
      }
    ]
  }
];

module.exports = stage4;
