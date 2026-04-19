const stage4 = [
  {
    "order": 31,
    "title": "Backtracking Intro",
    "desc": "The art of trying and turning back.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Backtracking! It’s like exploring a forest. If you hit a dead end, you back up to the last fork and try a different path! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Three Pillars: 1. Choice (The path we take), 2. Constraints (Can we go there?), 3. Goal (Did we find the bird?). 🦜\"",
        "codeSnippet": "void solve() {\n  if (goal) return true;\n  for (choice : possible) {\n    if (isValid) {\n      makeChoice();\n      if (solve()) return true;\n      undoChoice(); // Backtrack!\n    }\n  }\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "What distinguishes Backtracking from simple Recursion?",
        "options": [
          "Undoing the choice (State reset)",
          "It never ends",
          "It uses more memory"
        ],
        "correctAnswer": "Undoing the choice (State reset)"
      },
      {
        "type": "match_following",
        "questionText": "Match the Steps!",
        "pairs": [
          {
            "key": "Choice",
            "value": "Try a number/direction"
          },
          {
            "key": "Dead End",
            "value": "Invalid constraint"
          },
          {
            "key": "Backtrack",
            "value": "Reset to previous state"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The key step to 'undo' a state change.",
        "codeSnippet": "visited[i][j] = true;\nsolve();\nvisited[i][j] = ___ ;",
        "correctAnswer": "false"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Backtracking is a DFS (Depth First Search) across the 'State Space Tree'. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is Backtracking efficient for very large problems?",
        "options": [
          "It's usually Exponential O(2^N or N!)",
          "It's O(N log N)",
          "It's O(1)"
        ],
        "correctAnswer": "It's usually Exponential O(2^N or N!)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Backtracking finds ___ solutions.",
        "codeSnippet": "Backtracking finds ___ solutions.",
        "correctAnswer": "all"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Don't be afraid of the dead end, fledgling! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Did I go backward?\"",
        "options": [
          "Only to find a better way!",
          "No.",
          "0"
        ],
        "correctAnswer": "Only to find a better way!"
      }
    ]
  },
  {
    "order": 32,
    "title": "String Permutations",
    "desc": "Arranging birds in every possible order.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Permutations! How many ways can you arrange 'ABC'? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Pick a bird for the first spot, then recursively find permutations for the rest. Swap to try every bird in every spot! 🦜\"",
        "codeSnippet": "void permute(string s, int l, int r) {\n  if (l == r) print(s);\n  else {\n    for (i = l; i <= r; i++) {\n      swap(s[l], s[i]);\n      permute(s, l + 1, r);\n      swap(s[l], s[i]); // Backtrack!\n    }\n  }\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Total permutations for a string of length N?",
        "options": [
          "N! (N factorial)",
          "2^N",
          "N^2"
        ],
        "correctAnswer": "N! (N factorial)"
      },
      {
        "type": "match_following",
        "questionText": "Match Permute Steps!",
        "pairs": [
          {
            "key": "First Swap",
            "value": "Fix a character"
          },
          {
            "key": "Second Swap",
            "value": "Restore original order"
          },
          {
            "key": "Total Cases",
            "value": "N!"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The recursive call with shifted start index.",
        "codeSnippet": "permute(str, l + 1, ___);",
        "correctAnswer": "r"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"For 'ABC', you get: ABC, ACB, BAC, BCA, CAB, CBA. Six combinations for three birds! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Permutations of 'Pico'?",
        "options": [
          "24",
          "4",
          "16"
        ],
        "correctAnswer": "24",
        "explanation": "4 * 3 * 2 * 1 = 24"
      },
      {
        "type": "code_fill_in",
        "questionText": "Complexity: O( ___ )",
        "codeSnippet": "O(___)",
        "correctAnswer": "N!"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Order matters in the elite flock! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Can I be anywhere?\"",
        "options": [
          "Every spot is yours!",
          "No.",
          "0"
        ],
        "correctAnswer": "Every spot is yours!"
      }
    ]
  },
  {
    "order": 33,
    "title": "Permute: No Duplicates",
    "desc": "Handling identical twins in the arrangement.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Duplicate Alert! If you have two birds named 'A', swapping them results in the same arrangement. We need to skip them! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Sort the flock first. Or use a Set at each level to see if you've already tried that character. 🦜\"",
        "codeSnippet": "set<char> used;\nfor(i=l; i<=r; i++) {\n  if(used.count(s[i])) continue;\n  used.insert(s[i]);\n  swap... recurse... swap... \n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Permutations of 'ABA'?",
        "options": [
          "3 (ABA, AAB, BAA)",
          "6",
          "2"
        ],
        "correctAnswer": "3 (ABA, AAB, BAA)"
      },
      {
        "type": "match_following",
        "questionText": "Match Duplicate Rules!",
        "pairs": [
          {
            "key": "Set check",
            "value": "Prevent same choice"
          },
          {
            "key": "Sorting",
            "value": "Keep duplicates together"
          },
          {
            "key": "Goal",
            "value": "Unique permutations only"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Ignore if next bird is the same (after sorting).",
        "codeSnippet": "if (i > l && s[i] == s[i-1]) ___ ;",
        "correctAnswer": "continue"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Unique permutations are much fewer! For 'AAAA', there is only 1 permutation! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is space complexity higher with the Map/Set approach?",
        "options": [
          "Yes (Extra memory per level)",
          "No",
          "Depends on Pico"
        ],
        "correctAnswer": "Yes (Extra memory per level)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Skip identical birds.",
        "codeSnippet": "if (alreadyChoice) ___ ;",
        "correctAnswer": "continue"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Don't repeat the same flight path! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I unique?\"",
        "options": [
          "SQUAWK YES!",
          "Maybe.",
          "0"
        ],
        "correctAnswer": "SQUAWK YES!"
      }
    ]
  },
  {
    "order": 34,
    "title": "The N-Queens Problem",
    "desc": "Placing N Queens so they don't fight.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Queen's Gambit! Place N queens on an NxN chessboard such that no two queens attack each other. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Attacking means they share a row, column, or diagonal. 🦜\"",
        "codeSnippet": "solve(row) {\n  if (row == N) return true;\n  for (col = 0; col < N; col++) {\n    if (isSafe(row, col)) {\n      place(row, col);\n      if (solve(row + 1)) return true;\n      remove(row, col);\n    }\n  }\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "In N-Queens, how many queens per row?",
        "options": [
          "Exactly 1",
          "Up to N",
          "Any count"
        ],
        "correctAnswer": "Exactly 1"
      },
      {
        "type": "match_following",
        "questionText": "Match Attack Lines!",
        "pairs": [
          {
            "key": "Column",
            "value": "Same j"
          },
          {
            "key": "Left Diag",
            "value": "i - j = constant"
          },
          {
            "key": "Right Diag",
            "value": "i + j = constant"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Start the recursive solver from the first row.",
        "codeSnippet": "solveNQ(___ );",
        "correctAnswer": "0"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This is the 'Hello World' of backtracking complexity. For N=8, there are 92 solutions! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "If N=4, how many solutions?",
        "options": [
          "2",
          "4",
          "0"
        ],
        "correctAnswer": "2"
      },
      {
        "type": "code_fill_in",
        "questionText": "Increase row index.",
        "codeSnippet": "if (solve(board, row ___ 1))",
        "correctAnswer": "+"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Royalty demands space! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I the Queen?\"",
        "options": [
          "ELITE BIRD!",
          "No.",
          "0"
        ],
        "correctAnswer": "ELITE BIRD!"
      }
    ]
  },
  {
    "order": 35,
    "title": "N-Queens: Is Safe?",
    "desc": "The defensive sensors of the board.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Safety First! Before placing a queen, we must check if any bird above her can see her. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Check the column above, and both upper diagonals. No need to check rows because we move row by row! 🦜\"",
        "codeSnippet": "// Column check\nfor(i=0; i<r; i++) if(board[i][c]) return false;\n// Diagonal checks (upper left/right)\nwhile(r>=0 && c>=0) if(board[r--][c--]) return false;"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why don't we check the rows in our standard N-Queens solver?",
        "options": [
          "We place only 1 queen per row",
          "Queens can't see horizontally",
          "It's too slow"
        ],
        "correctAnswer": "We place only 1 queen per row"
      },
      {
        "type": "match_following",
        "questionText": "Match Safety Checks!",
        "pairs": [
          {
            "key": "Diagonal Up-Left",
            "value": "r-1, c-1"
          },
          {
            "key": "Diagonal Up-Right",
            "value": "r-1, c+1"
          },
          {
            "key": "Upper Column",
            "value": "r-1, c"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Check for attack from top left.",
        "codeSnippet": "if (board[row - i][col - ___]) return false;",
        "correctAnswer": "i"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Elite optimization: Use 3 Boolean arrays (col, diag1, diag2) to check safety in O(1) time! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Number of diagonals in an NxN board?",
        "options": [
          "2N - 1",
          "N",
          "N^2"
        ],
        "correctAnswer": "2N - 1"
      },
      {
        "type": "code_fill_in",
        "questionText": "Constant value for right-diagonal check.",
        "codeSnippet": "diagIdx = row ___ col;",
        "correctAnswer": "+"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Safe and sound in your nest! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I safe?\"",
        "options": [
          "Under my wing!",
          "No.",
          "0"
        ],
        "correctAnswer": "Under my wing!"
      }
    ]
  },
  {
    "order": 36,
    "title": "Rat in a Maze",
    "desc": "Pathfinding through obstacles.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Maze! A rat wants to get from (0,0) to (N-1,N-1). Some cells are blocked (0), some are open (1). 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"At each cell, try Down, Right, Up, Left. If you hit a wall, backtrack! 🦜\"",
        "codeSnippet": "if (row == n-1 && col == n-1) return true;\nif (isSafe(r, c)) {\n  markVisited(r, c);\n  if (solve(r+1, c) || solve(r, c+1)) return true;\n  unmarkVisited(r, c); // Backtrack!\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why do we need a 'visited' array in a maze?",
        "options": [
          "To prevent infinite loops",
          "To store the path",
          "To feed the rat"
        ],
        "correctAnswer": "To prevent infinite loops"
      },
      {
        "type": "match_following",
        "questionText": "Match Maze Moves!",
        "pairs": [
          {
            "key": "Down",
            "value": "(x+1, y)"
          },
          {
            "key": "Right",
            "value": "(x, y+1)"
          },
          {
            "key": "Wall",
            "value": "Cell = 0"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Base case: rat reached the cheese.",
        "codeSnippet": "if (x == N-1 ___ y == N-1) return true;",
        "correctAnswer": "&&"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"If the rat finds no path after trying all 4 directions, it means the cheese is unreachable! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Rat moves for (0,0) to (1,1) in [[1,1],[0,1]]?",
        "options": [
          "R, D",
          "D, R",
          "No path"
        ],
        "correctAnswer": "R, D"
      },
      {
        "type": "code_fill_in",
        "questionText": "Unmark the visited cell.",
        "codeSnippet": "vis[x][y] = ___ ;",
        "correctAnswer": "0"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Find the way, even if you have to turn back! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I the cheese?\"",
        "options": [
          "BETTER!",
          "No.",
          "0"
        ],
        "correctAnswer": "BETTER!"
      }
    ]
  },
  {
    "order": 37,
    "title": "Sudoku Solver",
    "desc": "Brute-forcing the logical puzzle.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Sudoku! Fill 1-9 in empty cells. Each number must be unique in its' row, column, and 3x3 subgrid. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Find an empty cell. Try digits 1-9. If safe, move to the next empty cell! 🦜\"",
        "codeSnippet": "for (int num = 1; num <= 9; num++) {\n  if (isSafe(row, col, num)) {\n    board[row][col] = num;\n    if (solve()) return true;\n    board[row][col] = 0; // Backtrack\n  }\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "How many units are in a standard Sudoku subgrid?",
        "options": [
          "3x3 (9 total)",
          "5x5",
          "9x9"
        ],
        "correctAnswer": "3x3 (9 total)"
      },
      {
        "type": "match_following",
        "questionText": "Match Sudoku Safety!",
        "pairs": [
          {
            "key": "Row",
            "value": "Check i"
          },
          {
            "key": "Col",
            "value": "Check j"
          },
          {
            "key": "Grid",
            "value": "Check 3x3"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The subgrid start index calculation.",
        "codeSnippet": "gridRow = (row / 3) * ___ ;",
        "correctAnswer": "3"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Sudoku backtracking is very slow for humans, but a computer can solve even a 'Hard' puzzle in milliseconds! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What if no number 1-9 fits in a cell?",
        "options": [
          "Backtrack (Invalid path)",
          "Skip cell",
          "Return 0"
        ],
        "correctAnswer": "Backtrack (Invalid path)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Recursive call after trial.",
        "codeSnippet": "if (___()) return true;",
        "correctAnswer": "solve"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Logic and luck combined! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I a 9?\"",
        "options": [
          "Perfect score!",
          "Maybe.",
          "0"
        ],
        "correctAnswer": "Perfect score!"
      }
    ]
  },
  {
    "order": 38,
    "title": "Word Search",
    "desc": "Finding hidden bird names in a grid.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Word Hunt! Is the word 'PICO' present in this 2D letter grid? Letters can be adjacent (Up, Down, Left, Right). 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Start at every matching 'P'. From there, recurse to find 'I', 'C', 'O'. Don't use the same cell twice! 🦜\"",
        "codeSnippet": "if (word[idx] != board[r][c]) return false;\nboard[r][c] = '#'; // Mark Visited\nfound = dfs(r+1, c) || dfs(r-1, c) || ...;\nboard[r][c] = word[idx]; // Restore"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the complexity if word length is L and grid is NxM?",
        "options": [
          "O(NM * 4^L)",
          "O(NML)",
          "O(N^2)"
        ],
        "correctAnswer": "O(NM * 4^L)"
      },
      {
        "type": "match_following",
        "questionText": "Match Search Terms!",
        "pairs": [
          {
            "key": "Mismatch",
            "value": "Return False"
          },
          {
            "key": "Success",
            "value": "idx == word.length"
          },
          {
            "key": "Temp Mark",
            "value": "Prevent reuse"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Use bitwise XOR to temporarily hide characters (XOR with value 256 for example).",
        "codeSnippet": "board[i][j] ^= 256;\nres = dfs(...);\nboard[i][j] ___= 256;",
        "correctAnswer": "^"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Each cell has 4 neighbors, but we usually call 3 (excluding the one we came from). 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Can you found 'HELLO' if 'H' is not in the grid?",
        "options": [
          "No",
          "Yes",
          "Only in elite mode"
        ],
        "correctAnswer": "No"
      },
      {
        "type": "code_fill_in",
        "questionText": "Base case: all letters found.",
        "codeSnippet": "if (index == word.length___) return true;",
        "correctAnswer": "()"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Scrabble master in the making! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Do you see my name?\"",
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
    "order": 39,
    "title": "Crossword Logic",
    "desc": "Fitting words into fixed slots.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Crossword Solver! You have a grid with pre-defined slots and a list of words. Fit them all! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Pick a slot. Pick a word. If it fits and doesn't conflict with intersecting words, place it and recurse! 🦜\"",
        "codeSnippet": "if (canPlace(slot, word)) {\n  place(slot, word);\n  if (solve(nextSlot)) return true;\n  unplace(slot, word);\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "What makes crosswords harder than just 'fitting'?",
        "options": [
          "Intersections (Overlapping letters)",
          "Word lengths",
          "Color of the pen"
        ],
        "correctAnswer": "Intersections (Overlapping letters)"
      },
      {
        "type": "match_following",
        "questionText": "Match Puzzle Terms!",
        "pairs": [
          {
            "key": "Across",
            "value": "Horizontal"
          },
          {
            "key": "Down",
            "value": "Vertical"
          },
          {
            "key": "Conflict",
            "value": "Mismatched char at intersection"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Condition before placing word in slot.",
        "codeSnippet": "if (word.length == slot.length ___ fits(word, slot))",
        "correctAnswer": "&&"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This combines permutation logic with grid constraints. It's a high-level backtracking challenge! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "How to handle an intersection where one word has 'A' and the other wants 'B'?",
        "options": [
          "Backtrack immediately",
          "Ignore and continue",
          "Replace the 'A'"
        ],
        "correctAnswer": "Backtrack immediately"
      },
      {
        "type": "code_fill_in",
        "questionText": "Restore the state.",
        "codeSnippet": "unplace(slot, ___ );",
        "correctAnswer": "word"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Finish the puzzle, fledgling! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I 3-across?\"",
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
    "order": 40,
    "title": "Master Point (Recursion 4)",
    "desc": "The shadows have been mapped.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"STAGE 4 COMPLETE! Permutations, Queens, Mazes, and Sudokus. You have mastered the 'Undo' move! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the key feature of a Backtracking algorithm?",
        "options": [
          "State rollback (Undo)",
          "Binary splitting",
          "Iterative loops"
        ],
        "correctAnswer": "State rollback (Undo)"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of N-Queens (worst case)?",
        "options": [
          "Exponential",
          "Polynomial",
          "Linear"
        ],
        "correctAnswer": "Exponential"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"You are a Shadow Runner! In Stage 5, we explore the math of Combinations and Subsets! 🦜\""
      },
      {
        "type": "match_following",
        "questionText": "Match the Rank!",
        "pairs": [
          {
            "key": "Stage 4",
            "value": "Shadow Runner"
          },
          {
            "key": "Stage 5",
            "value": "Subset Specialist"
          },
          {
            "key": "Next",
            "value": "Combinatorial Clouds"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Recursive Depth reached.",
        "codeSnippet": "4 * ___ ;",
        "correctAnswer": "100"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Try every path, but only keep the truth! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Proceed to the clouds?",
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
        "questionText": "Final Step?",
        "options": [
          "Step forward.",
          "Backtrack.",
          "0"
        ],
        "correctAnswer": "Step forward."
      }
    ]
  }
];

module.exports = stage4;
