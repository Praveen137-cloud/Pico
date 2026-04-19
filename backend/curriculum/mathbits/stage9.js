const stage9 = [
  {
    "order": 81,
    "title": "N vs P Positions",
    "desc": "The winning and losing ground.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Game On! In impartial games, every state is either an N-position (Next player wins) or a P-position (Previous player wins). 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"A position is P if all its possible moves lead to N-positions. A position is N if at least one move leads to a P-position! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "If you are at an N-position and play optimally, do you win?",
        "options": [
          "SQUAWK YES!",
          "No",
          "Depends on the coin"
        ],
        "correctAnswer": "SQUAWK YES!"
      },
      {
        "type": "match_following",
        "questionText": "Match the Positions!",
        "pairs": [
          {
            "key": "P-position",
            "value": "Losing state (Previous wins)"
          },
          {
            "key": "N-position",
            "value": "Winning state (Next wins)"
          },
          {
            "key": "Terminal",
            "value": "Game ends (Usually P)"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Check if state is N.",
        "codeSnippet": "isN = any_move_leads_to_ ___ ;",
        "correctAnswer": "P"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The goal is always to move to a P-position, leaving your opponent in a losing state! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "In a game where you take 1-3 stones, and 0 is P, is 4 an N or P?",
        "options": [
          "P (Moves to 1, 2, 3 - all are N)",
          "N",
          "0"
        ],
        "correctAnswer": "P (Moves to 1, 2, 3 - all are N)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Position type.",
        "codeSnippet": "___ -Position",
        "correctAnswer": "P"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Play to win! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is it an N?\"",
        "options": [
          "SQUAWK YES!",
          "No.",
          "0"
        ],
        "correctAnswer": "SQUAWK YES!"
      }
    ]
  },
  {
    "order": 82,
    "title": "Game of Nim",
    "desc": "The foundation of game math.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Nim! You have multiple piles of stones. On your turn, you take ANY number of stones from exactly ONE pile. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The last player to move wins (Normal Play). It sounds simple, but the strategy involves bitwise XOR! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Can you take stones from two piles in one turn?",
        "options": [
          "No (Exactly one pile only)",
          "Yes",
          "Only in binary"
        ],
        "correctAnswer": "No (Exactly one pile only)"
      },
      {
        "type": "match_following",
        "questionText": "Match the Nim!",
        "pairs": [
          {
            "key": "Pile",
            "value": "Stack of stones"
          },
          {
            "key": "Move",
            "value": "Reduce one pile"
          },
          {
            "key": "Goal",
            "value": "Be the last mover"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "XOR Sum of piles.",
        "codeSnippet": "nim_sum = pile1 ___ pile2 ___ pile3;",
        "correctAnswer": "^"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Bouton's Theorem: A Nim position is a P-position if and only if the XOR sum of all pile sizes is 0! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is {3, 4, 5} a winning or losing position? (3^4^5 = 2)",
        "options": [
          "Winning (XOR sum != 0)",
          "Losing",
          "Maybe"
        ],
        "correctAnswer": "Winning (XOR sum != 0)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Game name.",
        "codeSnippet": "Game of ___",
        "correctAnswer": "Nim"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"XOR the flock! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is sum 0?\"",
        "options": [
          "Losing (P).",
          "Winning (N).",
          "0"
        ],
        "correctAnswer": "Losing (P)."
      }
    ]
  },
  {
    "order": 83,
    "title": "Sprague-Grundy (Mex)",
    "desc": "Generalizing the game.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Universal Strategy! The Sprague-Grundy theorem says EVERY impartial game is equivalent to a Nim pile of size G! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"G(state) = mex({G(next_states)}). Mex (Minimum Excluded) is the smallest non-negative integer NOT in the set. 🦜\"",
        "codeSnippet": "mex({0, 1, 3}) = 2"
      },
      {
        "type": "multiple_choice",
        "questionText": "Value of mex({0, 2, 4})?",
        "options": [
          "1",
          "3",
          "5"
        ],
        "correctAnswer": "1"
      },
      {
        "type": "match_following",
        "questionText": "Match the Mex!",
        "pairs": [
          {
            "key": "mex({})",
            "value": "0"
          },
          {
            "key": "mex({0, 1})",
            "value": "2"
          },
          {
            "key": "G(terminal)",
            "value": "0"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Definition of Grundy number.",
        "codeSnippet": "grundy = ___ ({g1, g2, ...});",
        "correctAnswer": "mex"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"To solve a composite game (many sub-games), just XOR their Grundy numbers together! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "If G1=2 and G2=2, is the combined game winning?",
        "options": [
          "No (2 XOR 2 = 0, P-position)",
          "Yes",
          "Depends on Pico"
        ],
        "correctAnswer": "No (2 XOR 2 = 0, P-position)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Mex name.",
        "codeSnippet": "Minimum ___",
        "correctAnswer": "Excluded"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The core number! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"mex({1, 2}) is?\"",
        "options": [
          "0",
          "3",
          "1"
        ],
        "correctAnswer": "0"
      }
    ]
  },
  {
    "order": 84,
    "title": "Nim-Sum Strategy",
    "desc": "The perfect move.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Perfect Flight! To win in Nim, you must change one pile size X to X' such that the NEW Nim-Sum is 0. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Calculate `S = Sum of all piles`. Find a pile `Xi` where `Xi XOR S < Xi`. Replace `Xi` with `Xi XOR S`. 🦜\"",
        "codeSnippet": "new_size = original ^ total_sum;"
      },
      {
        "type": "multiple_choice",
        "questionText": "If piles are {1, 2, 3} (Sum=0), can you make a winning move?",
        "options": [
          "No (You are in a P-position)",
          "Yes",
          "Only in binary"
        ],
        "correctAnswer": "No (You are in a P-position)"
      },
      {
        "type": "match_following",
        "questionText": "Match Strategy!",
        "pairs": [
          {
            "key": "Target Sum",
            "value": "0"
          },
          {
            "key": "Move",
            "value": "Decrease one pile"
          },
          {
            "key": "Xi XOR S < Xi",
            "value": "Valid pile to change"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The winning move formula.",
        "codeSnippet": "piles[i] = piles[i] ___ nim_sum;",
        "correctAnswer": "^"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"There is always at least one winning move from an N-position. Usually several! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is 3^5^7 = 0?",
        "options": [
          "No (It equals 1. Winning!)",
          "Yes",
          "0"
        ],
        "correctAnswer": "No (It equals 1. Winning!)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Strategy term.",
        "codeSnippet": "Nim- ___",
        "correctAnswer": "Sum"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Strategic flip! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is sum now 0?\"",
        "options": [
          "SQUAWK YES!",
          "No.",
          "0"
        ],
        "correctAnswer": "SQUAWK YES!"
      }
    ]
  },
  {
    "order": 85,
    "title": "Grundy on DAGs",
    "desc": "State space navigation.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Mapping the game! Impartial games can be viewed as Directed Acyclic Graphs (DAGs). 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Nodes are positions, edges are valid moves. Use Topo-sort or Recursion + Memoization to find the Grundy number of every node! 🦜\"",
        "codeSnippet": "int getGrundy(int x) {\n  if (memo[x] != -1) return memo[x];\n  set<int> s;\n  for (int y : moves[x]) s.insert(getGrundy(y));\n  return memo[x] = mex(s);\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "What if the game graph has a cycle?",
        "options": [
          "It's not a standard Sprague-Grundy game (could be a draw)",
          "It works the same",
          "0"
        ],
        "correctAnswer": "It's not a standard Sprague-Grundy game (could be a draw)"
      },
      {
        "type": "match_following",
        "questionText": "Match the DAG Parts!",
        "pairs": [
          {
            "key": "Leaf Node",
            "value": "Grundy 0"
          },
          {
            "key": "Memoization",
            "value": "Avoid re-calculating"
          },
          {
            "key": "Edge",
            "value": "Legal Move"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Memo init value.",
        "codeSnippet": "fill(memo, ___ );",
        "correctAnswer": "-1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Games like 'Chess' or 'Go' are NOT impartial (moves depend on color), and they have cycles. They are much harder birds! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is Sprague-Grundy for impartial games?",
        "options": [
          "SQUAWK YES!",
          "No",
          "Only and always"
        ],
        "correctAnswer": "SQUAWK YES!"
      },
      {
        "type": "code_fill_in",
        "questionText": "Graph type.",
        "codeSnippet": "D ___",
        "correctAnswer": "AG"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Traverse the moves! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Grundy calculated?\"",
        "options": [
          "SQUAWK YES!",
          "No.",
          "0"
        ],
        "correctAnswer": "SQUAWK YES!"
      }
    ]
  },
  {
    "order": 86,
    "title": "Staircase Nim",
    "desc": "Only even stairs fly.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Staircase logic! Piles are on steps. You can move stones from step `i` to step `i-1`. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Key Insight: Only piles on ODD steps matter! Moving from an odd to even step is like removing from Nim. Moves from even to odd can be instantly neutralized! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Winning strategy for Staircase Nim?",
        "options": [
          "Nim-Sum of piles on ODD positions",
          "Nim-Sum of all piles",
          "Binary search"
        ],
        "correctAnswer": "Nim-Sum of piles on ODD positions"
      },
      {
        "type": "match_following",
        "questionText": "Match the Steps!",
        "pairs": [
          {
            "key": "Odd to Even",
            "value": "Standard Nim move"
          },
          {
            "key": "Even to Odd",
            "value": "Neutralization move"
          },
          {
            "key": "Step 0",
            "value": "The ground"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Check odd step.",
        "codeSnippet": "if (i % 2 ___ 0) nimSum ^= piles[i];",
        "correctAnswer": "!="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"If your opponent moves 5 stones from even step 2 to odd step 1, you just move those same 5 stones from step 1 to step 0! The odd-pile Nim-Sum stays the same! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Are even steps irrelevant to the winning sum?",
        "options": [
          "SQUAWK YES!",
          "No",
          "Only in base 2"
        ],
        "correctAnswer": "SQUAWK YES!"
      },
      {
        "type": "code_fill_in",
        "questionText": "Nim variant.",
        "codeSnippet": "S ___ Nim",
        "correctAnswer": "taircase"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Walk the stairs! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Odd steps only?\"",
        "options": [
          "SQUAWK YES!",
          "No.",
          "0"
        ],
        "correctAnswer": "SQUAWK YES!"
      }
    ]
  },
  {
    "order": 87,
    "title": "Nim with Limits",
    "desc": "K-stone restriction.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Stingy Bird! In Nim with a limit `K`, you can only take between 1 and `K` stones from a pile. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Grundy number for a pile of size `N` becomes `N % (K + 1)`. Use Nim-Sum on these remainders! 🦜\"",
        "codeSnippet": "nim_sum ^= (pileSize % (K + 1));"
      },
      {
        "type": "multiple_choice",
        "questionText": "If N=10 and K=3, what is the pile's Grundy number?",
        "options": [
          "2 (10 % 4)",
          "1",
          "3"
        ],
        "correctAnswer": "2 (10 % 4)"
      },
      {
        "type": "match_following",
        "questionText": "Match the Limits!",
        "pairs": [
          {
            "key": "K=1",
            "value": "Odd/Even (N % 2)"
          },
          {
            "key": "No Limit",
            "value": "Grundy = N"
          },
          {
            "key": "N % (K+1)",
            "value": "Limited Grundy"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Formula part.",
        "codeSnippet": "grundy = n % ( ___ );",
        "correctAnswer": "k+1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This is because any move to a remainder `R` can be offset by your opponent bringing it back to the same cycle position! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "If K=2, can a pile of 3 be a winning state?",
        "options": [
          "No (3 % 3 = 0, P-position)",
          "Yes",
          "0"
        ],
        "correctAnswer": "No (3 % 3 = 0, P-position)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Operation type.",
        "codeSnippet": "Modulo ___",
        "correctAnswer": "K+1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Limited flight! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is it N % (K+1)?\"",
        "options": [
          "SQUAWK YES!",
          "No.",
          "0"
        ],
        "correctAnswer": "SQUAWK YES!"
      }
    ]
  },
  {
    "order": 88,
    "title": "Misere Play",
    "desc": "The loser wins.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Reverse Rules! In 'Misere' play, the player who takes the LAST stone LOSES. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Misere Nim strategy is the same as normal Nim UNTIL only piles of size 1 remain! Then you play to leave an ODD number of piles! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "If only piles of {1, 1, 1} remain in Misere, whose turn is it?",
        "options": [
          "Current player (They will lose!)",
          "Nobody",
          "0"
        ],
        "correctAnswer": "Current player (They will lose!)"
      },
      {
        "type": "match_following",
        "questionText": "Match the Modes!",
        "pairs": [
          {
            "key": "Normal Play",
            "value": "Last mover wins"
          },
          {
            "key": "Misere Play",
            "value": "Last mover loses"
          },
          {
            "key": "Hybrid",
            "value": "Strategy switch"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Special case for Misere.",
        "codeSnippet": "if (all_piles_are_1) return count % 2 == ___ ;",
        "correctAnswer": "0"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Misere is much harder for most games, but for Nim, the adjustment is small and elegant! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "In Misere, if you have one pile of 5, what is the winning move?",
        "options": [
          "Take 4 (Leave 1)",
          "Take 5 (Leave 0)",
          "Take 0"
        ],
        "correctAnswer": "Take 4 (Leave 1)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Play name.",
        "codeSnippet": "M ___ Play",
        "correctAnswer": "isere"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Avoid the last! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Lose to win?\"",
        "options": [
          "SQUAWK YES!",
          "No.",
          "0"
        ],
        "correctAnswer": "SQUAWK YES!"
      }
    ]
  },
  {
    "order": 89,
    "title": "Green Hackenbush",
    "desc": "Cutting the graph.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Edge trimming! Green Hackenbush is played on a graph grounded to the floor. You cut an edge, and everything NOT connected to the floor falls away! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Colon Principle: The Grundy number of a node is the XOR sum of (1 + Grundy of children branches)! 🦜\"",
        "codeSnippet": "G = (G1+1) ^ (G2+1) ^ ..."
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the Grundy number of a single line of N edges?",
        "options": [
          "N",
          "1",
          "0"
        ],
        "correctAnswer": "N"
      },
      {
        "type": "match_following",
        "questionText": "Match the Hacks!",
        "pairs": [
          {
            "key": "Floor",
            "value": "Ground"
          },
          {
            "key": "Branch",
            "value": "G_child + 1"
          },
          {
            "key": "Joint",
            "value": "XOR of branches"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Formula for joint.",
        "codeSnippet": "joint_G = (g[child1]+1) ___ (g[child2]+1);",
        "correctAnswer": "^"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This transforms complex structural games into simple Nim math. This is the peak of impartial game theory! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is a Y-shape with 3 edges from the ground winning?",
        "options": [
          "Yes (G = (0+1)^(0+1)^(0+1) = 1)",
          "No",
          "Maybe"
        ],
        "correctAnswer": "Yes (G = (0+1)^(0+1)^(0+1) = 1)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Game suffix.",
        "codeSnippet": "Hacken ___",
        "correctAnswer": "bush"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Snip the bit! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"G+1 XOR?\"",
        "options": [
          "SQUAWK YES!",
          "No.",
          "0"
        ],
        "correctAnswer": "SQUAWK YES!"
      }
    ]
  },
  {
    "order": 90,
    "title": "Master Point (Mathbits 9)",
    "desc": "Strategist status confirmed.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"STAGE 9 COMPLETE! You've mastered Nim-Sum, Mex logic, and the structural splits of Hackenbush. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "A Nim position is a P-position (Losing) if the XOR sum is?",
        "options": [
          "0",
          "1",
          "> 0"
        ],
        "correctAnswer": "0"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does G(state)=mex({G(next_states)}) calculate?",
        "options": [
          "Grundy value",
          "XOR sum",
          "Winner name"
        ],
        "correctAnswer": "Grundy value"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"You are a Strategist Scout! In the FINAL STAGE, we enter the Singularities: Large Number Arithmetic, FFT, and Prime Singularity! 🦜\""
      },
      {
        "type": "match_following",
        "questionText": "Match the Rank!",
        "pairs": [
          {
            "key": "Stage 9",
            "value": "Strategist Scout"
          },
          {
            "key": "Stage 10",
            "value": "Math Singularity"
          },
          {
            "key": "Status",
            "value": "XOR-Empowered"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Strategy Points.",
        "codeSnippet": "9 * ___ ;",
        "correctAnswer": "100"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Win by design! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Ready for Singularity?",
        "options": [
          "SQUAWK YES!",
          "Maybe.",
          "No."
        ],
        "correctAnswer": "SQUAWK YES!"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"SQUAWK! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Final XOR sum?",
        "options": [
          "0",
          "1",
          "Done."
        ],
        "correctAnswer": "0"
      }
    ]
  }
];

module.exports = stage9;
