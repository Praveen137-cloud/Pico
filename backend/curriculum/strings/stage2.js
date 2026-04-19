const stage2 = [
  {
    "order": 21,
    "title": "Words in Reverse",
    "desc": "Reversing every word in a sentence or the whole sentence word-by-word.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Topsy-Turvy Sentence! We want to turn 'The bird flies' into 'flies bird The'. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Step 1: Reverse the WHOLE string. Step 2: Reverse each individual word back! 🦜\"",
        "codeSnippet": "reverse(s.begin(), s.end());\nwhile(getline(ss, word, ' ')) reverse(word.begin(), word.end());"
      },
      {
        "type": "multiple_choice",
        "questionText": "Result of reversing \"Hello World\" word-by-word?",
        "options": [
          "World Hello",
          "olleH dlroW",
          "Hello World"
        ],
        "correctAnswer": "World Hello"
      },
      {
        "type": "match_following",
        "questionText": "Match Reversal Steps!",
        "pairs": [
          {
            "key": "Whole String",
            "value": "Global reverse"
          },
          {
            "key": "Individual Word",
            "value": "Local reverse"
          },
          {
            "key": "Spaces",
            "value": "Separators"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Reverse a word starting at index `i` and ending at `j`.",
        "codeSnippet": "while (i < j) swap(s[i++], s[___]);",
        "correctAnswer": "j--"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"In C++, you can use `stringstream` to easily extract words. In Python, `s.split()[::-1]` is the shortcut of the gods! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Space complexity for in-place sentence reversal?",
        "options": [
          "O(1)",
          "O(N)",
          "O(log N)"
        ],
        "correctAnswer": "O(1)"
      },
      {
        "type": "code_fill_in",
        "questionText": "In-place reverse function (C++).",
        "codeSnippet": "___(s.begin(), s.end());",
        "correctAnswer": "reverse"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The end is the beginning, fledgling! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I upside down?\"",
        "options": [
          "SQUAWK NO!",
          "Yes.",
          "0"
        ],
        "correctAnswer": "SQUAWK NO!"
      }
    ]
  },
  {
    "order": 22,
    "title": "Almost a Palindrome",
    "desc": "Checking if a string can be a palindrome if you remove at most one character.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"One Wrong Bead! Can you make it a palindrome by throwing away just ONE character? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"When you find a mismatch at (L, R), check if the rest of the string is a palindrome by skipping L OR skipping R! 🦜\"",
        "codeSnippet": "if (s[l] != s[r]) return isPal(s, l+1, r) || isPal(s, l, r-1);"
      },
      {
        "type": "multiple_choice",
        "questionText": "Is \"ABCA\" almost a palindrome?",
        "options": [
          "Yes (Remove B or C)",
          "No",
          "Only if lowercase"
        ],
        "correctAnswer": "Yes (Remove B or C)"
      },
      {
        "type": "match_following",
        "questionText": "Match Palindrome Logic!",
        "pairs": [
          {
            "key": "Skip L",
            "value": "l+1 to r"
          },
          {
            "key": "Skip R",
            "value": "l to r-1"
          },
          {
            "key": "Max Removals",
            "value": "1"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The helper function check.",
        "codeSnippet": "return check(s, l+1, r) ___ check(s, l, r-1);",
        "correctAnswer": "||"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This uses the power of recursive checking. You only get ONE second chance! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of Valid Palindrome II?",
        "options": [
          "O(N)",
          "O(N^2)",
          "O(1)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Base palindrome check return.",
        "codeSnippet": "if (s[i] != s[j]) return ___;",
        "correctAnswer": "false"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Patience and skip, fledgling! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Do I deserve a second chance?\"",
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
    "order": 23,
    "title": "The Non-Repeating Window",
    "desc": "Longest substring without repeating characters (Sliding Window).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Unique Necklace! What is the longest set of beads without a single duplicate? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Sliding Window! Move the `right` pointer. If the bead is already in your window, shrink the `left` pointer past the old duplicate! 🦜\"",
        "codeSnippet": "if (map.has(s[r])) left = max(left, map.get(s[r]) + 1);\nmap.set(s[r], r);"
      },
      {
        "type": "multiple_choice",
        "questionText": "Longest unique substring of \"ABCABCBB\"?",
        "options": [
          "3 (\"ABC\")",
          "8",
          "1"
        ],
        "correctAnswer": "3 (\"ABC\")"
      },
      {
        "type": "match_following",
        "questionText": "Match Window Pointers!",
        "pairs": [
          {
            "key": "Right",
            "value": "Expansion"
          },
          {
            "key": "Left",
            "value": "Contraction"
          },
          {
            "key": "Map",
            "value": "Last seen index"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Update the maximum length.",
        "codeSnippet": "ans = max(ans, r - ___ + 1);",
        "correctAnswer": "left"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"By storing the LAST SEEN index of each character, the `left` pointer can jump ahead instead of crawling. High-speed flight! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of Longest Substring Without Repeating?",
        "options": [
          "O(N)",
          "O(N^2)",
          "O(1)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Initialize map with last seen values.",
        "codeSnippet": "int lastSeen[___] = {-1};",
        "correctAnswer": "256"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Keep it fresh, keep it unique! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Who is unique here?\"",
        "options": [
          "Pico!",
          "Me.",
          "0"
        ],
        "correctAnswer": "Pico!"
      }
    ]
  },
  {
    "order": 24,
    "title": "Anagram Search",
    "desc": "Finding all starting indices of anagrams of P in string S.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Anagram Hunter! Search for any permutation of the word 'BIRD' in a giant forest of letters! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Fixed-size Sliding Window! Maintain a frequency map of the window. If the map matches the target map, you found a nest! 🦜\"",
        "codeSnippet": "if (windowCount == targetCount) results.push(left);"
      },
      {
        "type": "multiple_choice",
        "questionText": "Window size for searching anagrams of \"abc\"?",
        "options": [
          "3",
          "Any size",
          "1"
        ],
        "correctAnswer": "3"
      },
      {
        "type": "match_following",
        "questionText": "Match Window Flows!",
        "pairs": [
          {
            "key": "Entry",
            "value": "Increment s[right]"
          },
          {
            "key": "Exit",
            "value": "Decrement s[left]"
          },
          {
            "key": "Check",
            "value": "Map comparison"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Remove character from window as it slides.",
        "codeSnippet": "window[s[i-target.len()]]___ ;",
        "correctAnswer": "--"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Time Complexity: O(N). You only check characters as they enter and leave the window! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "How many anagrams of \"ab\" are in \"abab\"?",
        "options": [
          "3",
          "2",
          "1"
        ],
        "correctAnswer": "3",
        "explanation": "\"ab\", \"ba\", \"ab\""
      },
      {
        "type": "code_fill_in",
        "questionText": "Target map initialization.",
        "codeSnippet": "for(char c : p) ___ [c]++;",
        "correctAnswer": "count"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The patterns are everywhere, fledgling! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Can you see me coming?\"",
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
    "order": 25,
    "title": "Minimum Window String (Intermediate)",
    "desc": "Smallest substring encompassing all characters of T.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Minimalist! Find the smallest possible necklace that contains ALL the beads from string T! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Variable Sliding Window! Expand until you have all of T. Then shrink as much as you can, updating the minimum! 🦜\"",
        "codeSnippet": "while (formed == required) {\n  if (r-l+1 < minLen) { ... }\n  window[s[l]]--;\n  l++;\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Minimum window of \"ADOBECODEBANC\" containing \"ABC\"?",
        "options": [
          "\"BANC\"",
          "\"ADOBEC\"",
          "\"CODEBA\""
        ],
        "correctAnswer": "\"BANC\""
      },
      {
        "type": "match_following",
        "questionText": "Match Constraints!",
        "pairs": [
          {
            "key": "Target",
            "value": "ABC"
          },
          {
            "key": "Window",
            "value": "BANC"
          },
          {
            "key": "Result",
            "value": "Length 4"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Condition to stop shrinking.",
        "codeSnippet": "while (count ___ targetCount)",
        "correctAnswer": "=="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"O(N) time. The 'Required' and 'Formed' counters are more efficient than comparing the whole map every step! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is the minimum window always unique?",
        "options": [
          "No",
          "Yes",
          "Only for Pico"
        ],
        "correctAnswer": "No"
      },
      {
        "type": "code_fill_in",
        "questionText": "Initialize minimum length.",
        "codeSnippet": "int minL = ___ ;",
        "correctAnswer": "INT_MAX"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Tighter... tighter... PERFECT! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is the window small enough?\"",
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
    "order": 26,
    "title": "Giant String Multiply",
    "desc": "Multiplying two giant numbers stored as strings.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Big Math! How to multiply \"123456789\" by \"987654321\"? It’s too big for a normal bird-brain! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Simulate the elementary school method! `i + j` and `i + j + 1` are the nests for your partial products and carries! 🦜\"",
        "codeSnippet": "int p1 = i + j, p2 = i + j + 1;\nint sum = mul + res[p2];\nres[p2] = sum % 10;\nres[p1] += sum / 10;"
      },
      {
        "type": "multiple_choice",
        "questionText": "Max possible length of the product of two strings of size N and M?",
        "options": [
          "N + M",
          "N * M",
          "max(N, M)"
        ],
        "correctAnswer": "N + M"
      },
      {
        "type": "match_following",
        "questionText": "Match Partial Indices!",
        "pairs": [
          {
            "key": "p1",
            "value": "Carry house"
          },
          {
            "key": "p2",
            "value": "Digit house"
          },
          {
            "key": "sum",
            "value": "mul + carry"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Convert character digit to integer.",
        "codeSnippet": "digit = char - ___ ;",
        "correctAnswer": "'0'"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Don't forget to strip leading zeros at the end, unless the result is just \"0\"! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of string multiplication?",
        "options": [
          "O(N * M)",
          "O(N + M)",
          "O(1)"
        ],
        "correctAnswer": "O(N * M)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Initialize result array size.",
        "codeSnippet": "vector<int> res(n + m, ___);",
        "correctAnswer": "0"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Numbers are just beads in a row! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is my bank account that big?\"",
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
    "order": 27,
    "title": "Group the Anagrams",
    "desc": "Grouping strings into anagram categories (Map + Sort).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Sort the Flocks! Group all birds like 'EAT', 'TEA', and 'ATE' together! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Sort each string alphabetically. Then use the sorted string as a KEY in a Hash Map to group the originals! 🦜\"",
        "codeSnippet": "string key = s; sort(key.begin(), key.end());\nmap[key].push_back(s);"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the map key for \"LISTEN\"?",
        "options": [
          "EILNST",
          "LISTEN",
          "SILENT"
        ],
        "correctAnswer": "EILNST"
      },
      {
        "type": "match_following",
        "questionText": "Match Anagram Groups!",
        "pairs": [
          {
            "key": "bat",
            "value": "tab"
          },
          {
            "key": "eat",
            "value": "tea, ate"
          },
          {
            "key": "tan",
            "value": "nat"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Initialize map of vectors.",
        "codeSnippet": "Map<String, ___<String>> map;",
        "correctAnswer": "List"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Complexity: O(NK log K) where N is the number of strings and K is the max length. Use frequency counts for even faster grouping! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Why is sorting the easiest way to find anagrams?",
        "options": [
          "Yields unique key",
          "It looks cool",
          "Faster"
        ],
        "correctAnswer": "Yields unique key"
      },
      {
        "type": "code_fill_in",
        "questionText": "Convert map values to final result.",
        "codeSnippet": "return ___(map.values());",
        "correctAnswer": "new ArrayList"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Like with like, fledgling! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I in a group?\"",
        "options": [
          "The Elite One!",
          "No.",
          "0"
        ],
        "correctAnswer": "The Elite One!"
      }
    ]
  },
  {
    "order": 28,
    "title": "Count and Say",
    "desc": "Generating the Look-and-Say sequence.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Storyteller! Describe what you see: \"1\" becomes \"One 1\" (11). \"11\" becomes \"Two 1s\" (21). 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Iterate through the string. Count consecutive digits and append \"count\" then \"digit\" to the new string! 🦜\"",
        "codeSnippet": "while (j < s.len() && s[j] == s[i]) count++;\nnext += to_string(count) + s[i];"
      },
      {
        "type": "multiple_choice",
        "questionText": "Next term after \"1211\"?",
        "options": [
          "111221",
          "12211",
          "111122"
        ],
        "correctAnswer": "111221",
        "explanation": "\"One 1, One 2, Two 1s\" -> 111221"
      },
      {
        "type": "match_following",
        "questionText": "Match Sequence Steps!",
        "pairs": [
          {
            "key": "1",
            "value": "11"
          },
          {
            "key": "11",
            "value": "21"
          },
          {
            "key": "21",
            "value": "1211"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Calculation of consecutive digits.",
        "codeSnippet": "while (s[j] ___ s[i]) cnt++;",
        "correctAnswer": "=="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This sequence grows very fast! It’s almost recursive. Speak the truth, fledgling! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the limit of digits found in this sequence?",
        "options": [
          "Only 1, 2, 3",
          "Any digit",
          "Pico’s lucky numbers"
        ],
        "correctAnswer": "Only 1, 2, 3"
      },
      {
        "type": "code_fill_in",
        "questionText": "Recursive call (LeetCode #38).",
        "codeSnippet": "return say(___(n-1));",
        "correctAnswer": "generate"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Tell the story of the string! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"What do I say?\"",
        "options": [
          "SQUAWK!",
          "1",
          "0"
        ],
        "correctAnswer": "SQUAWK!"
      }
    ]
  },
  {
    "order": 29,
    "title": "The Infinite Mirror",
    "desc": "Finding the longest palindromic substring.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The King of Mirrors! What is the longest centered symmetry in a giant necklace? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Expand Around Center! Every character (and the spaces between them) is a potential center. Expand outwards as long as it matches! 🦜\"",
        "codeSnippet": "while (l >= 0 && r < n && s[l] == s[r]) {\n  l--; r++;\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Longest palindrome in \"babad\"?",
        "options": [
          "\"bab\" or \"aba\"",
          "\"babad\"",
          "\"ada\""
        ],
        "correctAnswer": "\"bab\" or \"aba\""
      },
      {
        "type": "match_following",
        "questionText": "Match Expansion Centers!",
        "pairs": [
          {
            "key": "Odd Length",
            "value": "s[i]"
          },
          {
            "key": "Even Length",
            "value": "s[i], s[i+1]"
          },
          {
            "key": "Total Centers",
            "value": "2N - 1"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Current length of expanded palindrome.",
        "codeSnippet": "len = ___ - 1;",
        "correctAnswer": "r - l"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Complexity: O(N^2) time and O(1) space. Elite birds use Manacher’s Algorithm for O(N), but we will save that for God-Mode! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Why are there 2N-1 centers?",
        "options": [
          "Counts gaps between chars",
          "N chars + N spaces",
          "Pico likes odd numbers"
        ],
        "correctAnswer": "Counts gaps between chars"
      },
      {
        "type": "code_fill_in",
        "questionText": "Start index for substring.",
        "codeSnippet": "start = i - (maxLen - 1) / ___ ;",
        "correctAnswer": "2"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Reflection of perfection! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is my name a palindrome?\"",
        "options": [
          "No.",
          "Yes.",
          "0"
        ],
        "correctAnswer": "No."
      }
    ]
  },
  {
    "order": 30,
    "title": "ZigZag Flight",
    "desc": "Converting a string to ZigZag pattern and reading row by row.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The ZigZag Bird! Write a string in a Z-shape with N rows, then read it row by row! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Use N strings (one for each row). Keep a pointer that bounces up and down like a bird in a cage! 🦜\"",
        "codeSnippet": "rows[currRow] += char;\nif (currRow == 0 || currRow == numRows - 1) goingDown = !goingDown;\ncurrRow += goingDown ? 1 : -1;"
      },
      {
        "type": "multiple_choice",
        "questionText": "ZigZag width for \"PAYPALISHIRING\" with 3 rows?",
        "options": [
          "Fixed by logic",
          "10",
          "Unlimited"
        ],
        "correctAnswer": "Fixed by logic"
      },
      {
        "type": "match_following",
        "questionText": "Match ZigZag Pointers!",
        "pairs": [
          {
            "key": "Top Row",
            "value": "Flip down"
          },
          {
            "key": "Bottom Row",
            "value": "Flip up"
          },
          {
            "key": "Middle",
            "value": "Keep moving"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Bouncing flag logic.",
        "codeSnippet": "if (atWall) ___ = !___ ;",
        "correctAnswer": "goingDown"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Complexity: O(N) time and O(N) space. Simple simulation but tests your boundary control! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What happens if numRows = 1?",
        "options": [
          "Returns original string",
          "Crashes",
          "Infinite loop"
        ],
        "correctAnswer": "Returns original string"
      },
      {
        "type": "code_fill_in",
        "questionText": "Final result assembly.",
        "codeSnippet": "for(string r : rows) ___ += r;",
        "correctAnswer": "res"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Fly up, fly down. The Z-path is the key! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Can I ZigZag?\"",
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
    "order": 31,
    "title": "Custom String Sort",
    "desc": "Sorting string S based on character order provided in string T.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Weird Alphabet! If the alphabet goes 'cbal... ', then 'apple' should be sorted differently! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Build a frequency map of string S. Then, iterate through the order string T and append characters to your result as many times as they appear in S! 🦜\"",
        "codeSnippet": "for(char c : order) while(count[c]-- > 0) res += c;\nfor(char c = 'a'; c <= 'z'; c++) while(count[c]-- > 0) res += c;"
      },
      {
        "type": "multiple_choice",
        "questionText": "If order is \"cba\" and S is \"abcd\", result?",
        "options": [
          "cbad",
          "abcd",
          "dcba"
        ],
        "correctAnswer": "cbad"
      },
      {
        "type": "match_following",
        "questionText": "Match Custom Sort Steps!",
        "pairs": [
          {
            "key": "Step 1",
            "value": "Freq Map of S"
          },
          {
            "key": "Step 2",
            "value": "Follow Order T"
          },
          {
            "key": "Step 3",
            "value": "Append leftovers"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Add remaining birds not in the custom order.",
        "codeSnippet": "for(char c=0; c<26; c++) {\n  while(freq[c] > 0) { res += (c + ___); freq[c]--; }\n}",
        "correctAnswer": "'a'"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Time Complexity: O(Order + S). Very fast as long as you use a frequency map! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Space complexity for frequency map of 26 letters?",
        "options": [
          "O(1)",
          "O(N)",
          "O(log N)"
        ],
        "correctAnswer": "O(1)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Append character `c` to string `res`.",
        "codeSnippet": "res.___ (c);",
        "correctAnswer": "+="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Follow the leader, fledgling! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I in the right order?\"",
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
    "order": 32,
    "title": "String to Integer (atoi)",
    "desc": "Converting strings to integers while handling signs, whitespace, and overflow.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Translator! Convert \"  -42\" into -42. But watch out for the eagle! (Overflow) 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Step 1: Skip leading spaces. Step 2: Handle +/- sign. Step 3: Convert digits until a non-digit appears! 🦜\"",
        "codeSnippet": "while(s[i] == ' ') i++;\nif(s[i] == '-') sign = -1;"
      },
      {
        "type": "multiple_choice",
        "questionText": "Result of atoi(\"4193 with words\")?",
        "options": [
          "4193",
          "Error",
          "0"
        ],
        "correctAnswer": "4193"
      },
      {
        "type": "match_following",
        "questionText": "Match atoi logic!",
        "pairs": [
          {
            "key": "Sign",
            "value": "+ or -"
          },
          {
            "key": "Digits",
            "value": "0-9"
          },
          {
            "key": "Overflow",
            "value": "INT_MAX / MIN"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Accumulate the result digit by digit.",
        "codeSnippet": "res = res * 10 + (s[i] - ___);",
        "correctAnswer": "'0'"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"If `res > INT_MAX / 10`, then the next digit will overflow. Return INT_MAX or INT_MIN immediately! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Result of atoi(\"   -042\")?",
        "options": [
          "-42",
          "-4",
          "0"
        ],
        "correctAnswer": "-42"
      },
      {
        "type": "code_fill_in",
        "questionText": "Check for digit range.",
        "codeSnippet": "if (s[i] < '0' || s[i] > ___) break;",
        "correctAnswer": "'9'"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Math is precise, even in strings! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"What is the integer of my soul?\"",
        "options": [
          "Infinite!",
          "1",
          "0"
        ],
        "correctAnswer": "Infinite!"
      }
    ]
  },
  {
    "order": 33,
    "title": "Repeated Substring",
    "desc": "Checking if a string can be formed by repeating a smaller substring.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Echo! Can you build 'ABCABCABC' using just 'ABC'? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Elite Trick: Concatenate `s + s`, remove the first and last characters, and then see if original `s` is still inside! 🦜\"",
        "codeSnippet": "string ss = (s + s).substr(1, 2 * n - 2);\nif (ss.find(s) != -1) return true;"
      },
      {
        "type": "multiple_choice",
        "questionText": "Can \"abab\" be formed by repeats?",
        "options": [
          "Yes (\"ab\")",
          "No",
          "Maybe"
        ],
        "correctAnswer": "Yes (\"ab\")"
      },
      {
        "type": "match_following",
        "questionText": "Match Echoes!",
        "pairs": [
          {
            "key": "abcabc",
            "value": "abc"
          },
          {
            "key": "abcd",
            "value": "None"
          },
          {
            "key": "aaaa",
            "value": "a"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Find original string `S` in the modified double-string `SS`.",
        "codeSnippet": "if (SS.includes(___)) return true;",
        "correctAnswer": "S"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This doubling trick is magical! It effectively tests if there exists a rotation of S that equals S (other than the identity)! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Time complexity with a good find() function?",
        "options": [
          "O(N)",
          "O(N^2)",
          "O(1)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Remove first and last of doubled string.",
        "codeSnippet": "ss = (s + s).substr(1, ___);",
        "correctAnswer": "2*n-2"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Speak once, hear it twice! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is my SQUAWK an echo?\"",
        "options": [
          "SQUAWK SQUAWK!",
          "No.",
          "0"
        ],
        "correctAnswer": "SQUAWK SQUAWK!"
      }
    ]
  },
  {
    "order": 34,
    "title": "The Frequency Sort",
    "desc": "Sorting characters by their frequency in descending order.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Common counts! If 'e' appears 3 times and 't' appears once, 'e' comes first! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Frequency Map -> Priority Queue of (count, char) -> Append to result! 🦜\"",
        "codeSnippet": "priority_queue<pair<int, char>> pq;\nfor(auto it : map) pq.push({it.second, it.first});"
      },
      {
        "type": "multiple_choice",
        "questionText": "Frequency sort of \"tree\"?",
        "options": [
          "\"eert\" or \"eetr\"",
          "\"tree\"",
          "\"reet\""
        ],
        "correctAnswer": "\"eert\" or \"eetr\""
      },
      {
        "type": "match_following",
        "questionText": "Match Frequency Steps!",
        "pairs": [
          {
            "key": "Count",
            "value": "Map"
          },
          {
            "key": "Sort",
            "value": "Max Heap"
          },
          {
            "key": "Build",
            "value": "String Append"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Get the top character from the max-heap.",
        "codeSnippet": "char c = pq.top().___ ;",
        "correctAnswer": "second"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Complexity: O(N log K) where K is the number of unique characters. Clean and organized flocks fly better! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Can you solve this in O(N) using Bucket Sort?",
        "options": [
          "Yes",
          "No",
          "Only if I’m smart"
        ],
        "correctAnswer": "Yes"
      },
      {
        "type": "code_fill_in",
        "questionText": "Add character `c` `n` times.",
        "codeSnippet": "res.append(n, ___);",
        "correctAnswer": "c"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The popular birds lead the way! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I popular?\"",
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
    "order": 35,
    "title": "Valid IP Address",
    "desc": "Validating IPv4 and IPv6 strings.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Address Book! Is this a valid bird-nest on the internet? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"IPv4: 4 parts, 0-255, no leading zeros. IPv6: 8 parts, hex digits, 1-4 chars each! 🦜\"",
        "codeSnippet": "if (part.len() > 1 && part[0] == '0') return false; // IPv4 rule"
      },
      {
        "type": "multiple_choice",
        "questionText": "Is \"172.16.254.1\" valid IPv4?",
        "options": [
          "Yes",
          "No (too long)",
          "Only if local"
        ],
        "correctAnswer": "Yes"
      },
      {
        "type": "match_following",
        "questionText": "Match IP Rules!",
        "pairs": [
          {
            "key": "IPv4",
            "value": "Dot separated"
          },
          {
            "key": "IPv6",
            "value": "Colon separated"
          },
          {
            "key": "256",
            "value": "Invalid IPv4"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Split the address string into parts.",
        "codeSnippet": "parts = line.split(___);",
        "correctAnswer": "'.'"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Parsing is the art of being strict! If even one bead is wrong, the address is fake! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is \"2001:0db8:85a3:0:0:8A2E:0370:7334\" valid IPv6?",
        "options": [
          "Yes",
          "No (too many colons)",
          "Maybe"
        ],
        "correctAnswer": "Yes"
      },
      {
        "type": "code_fill_in",
        "questionText": "Is character hex for IPv6?",
        "codeSnippet": "if (isxdigit(c)) // checks 0-9, ___",
        "correctAnswer": "a-f"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The internet is a giant flock of data! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is my IP 127.0.0.1?\"",
        "options": [
          "Home sweet home!",
          "No.",
          "0"
        ],
        "correctAnswer": "Home sweet home!"
      }
    ]
  },
  {
    "order": 36,
    "title": "Compare Versions",
    "desc": "Finding which version number is larger (1.01 vs 1.001).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Software Updates! Which bird is newer: v1.2.3 or v1.10.1? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Split by '.', convert to integers, and compare part by part. Treat missing parts as 0! 🦜\"",
        "codeSnippet": "int v1 = i < n1 ? stoi(parts1[i]) : 0;"
      },
      {
        "type": "multiple_choice",
        "questionText": "Is \"1.01\" equal to \"1.001\"?",
        "options": [
          "Yes (both are 1)",
          "No",
          "Depends on build"
        ],
        "correctAnswer": "Yes (both are 1)"
      },
      {
        "type": "match_following",
        "questionText": "Match Comparisons!",
        "pairs": [
          {
            "key": "1.2 > 1.1",
            "value": "Yes"
          },
          {
            "key": "1.10 > 1.2",
            "value": "Yes"
          },
          {
            "key": "1.0 == 1",
            "value": "Yes"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Condition if version 1 is smaller.",
        "codeSnippet": "if (v1 ___ v2) return -1;",
        "correctAnswer": "<"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Leading zeros in version parts don't change the value. v1.01 and v1.1 are brothers! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of version comparison?",
        "options": [
          "O(N + M)",
          "O(N * M)",
          "O(1)"
        ],
        "correctAnswer": "O(N + M)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Maximum number of parts.",
        "codeSnippet": "int n = max(parts1.size(), ___);",
        "correctAnswer": "parts2.size()"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Stay updated, fledgling! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I v2.0?\"",
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
    "order": 37,
    "title": "Longest Palindrome Maker",
    "desc": "How many characters can we use to form a palindrome?",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Palindrome Crafting! Given a pile of beads, what is the LONGEST symmetrical necklace you can build? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Count frequencies. You can use every EVEN count completely. For ODD counts, use `count - 1` beads, and keep ONE bead for the center! 🦜\"",
        "codeSnippet": "res += (it.second / 2) * 2;\nif (it.second % 2 == 1) hasOdd = true;"
      },
      {
        "type": "multiple_choice",
        "questionText": "Longest palindrome from \"abccccdd\"?",
        "options": [
          "7 (\"dccaccd\")",
          "8",
          "6"
        ],
        "correctAnswer": "7 (\"dccaccd\")"
      },
      {
        "type": "match_following",
        "questionText": "Match Crafting Rules!",
        "pairs": [
          {
            "key": "Even count",
            "value": "Use all"
          },
          {
            "key": "Odd count",
            "value": "Use count-1"
          },
          {
            "key": "Center",
            "value": "Add 1 if exists"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Check if we assigned a center bird.",
        "codeSnippet": "if (hasOdd) res ___ 1;",
        "correctAnswer": "+="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"O(N) time using a frequency map. Symmetry is beautiful! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Can you make a palindrome of length > 1 from \"abc\"?",
        "options": [
          "No",
          "Yes",
          "1"
        ],
        "correctAnswer": "No",
        "explanation": "All odds, subtract 1 from target count."
      },
      {
        "type": "code_fill_in",
        "questionText": "Add even pairs to length.",
        "codeSnippet": "ans += v / 2 * ___;",
        "correctAnswer": "2"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Balance the necklace! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is my necklace long?\"",
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
    "order": 38,
    "title": "Jewels and Stones",
    "desc": "Counting how many characters in S are also in J (O(N)).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Jewel Hunt! You have a bag of stones (S), and you need to know how many of them are precious JEWELS (J)! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Store the jewels in a SET for O(1) lookup. Then scan the stones! 🦜\"",
        "codeSnippet": "set<char> jewels(J.begin(), J.end());\nfor(char c : S) if(jewels.count(c)) count++;"
      },
      {
        "type": "multiple_choice",
        "questionText": "Count if J=\"aA\", S=\"aAAbbbb\"?",
        "options": [
          "3",
          "7",
          "0"
        ],
        "correctAnswer": "3"
      },
      {
        "type": "match_following",
        "questionText": "Match Search Terms!",
        "pairs": [
          {
            "key": "Jewels",
            "value": "Set for Lookup"
          },
          {
            "key": "Stones",
            "value": "Scan list"
          },
          {
            "key": "Complexity",
            "value": "O(J + S)"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Check if current stone `s` is a jewel.",
        "codeSnippet": "if (set.___ (s)) count++;",
        "correctAnswer": "contains"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Basic but powerful! Using a set makes it linear instead of nested O(J*S). Smart birds use Hash Sets! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is \"a\" the same as \"A\" in the Jewel problem?",
        "options": [
          "No (Case sensitive)",
          "Yes",
          "0"
        ],
        "correctAnswer": "No (Case sensitive)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Initialize results.",
        "codeSnippet": "int cnt = ___ ;",
        "correctAnswer": "0"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Shiny logic, fledgling! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I a jewel?\"",
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
    "title": "Goat Latin",
    "desc": "Transforming a sentence into Goat Latin.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Goat Path! If a word starts with a vowel, add 'ma'. If a consonant, move the first letter to the end then add 'ma'. Then add 'a's based on word position! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Example: 'I' becomes 'Imaa', 'speak' becomes 'peaksmaaaa'. 🦜\"",
        "codeSnippet": "if (isVowel(first)) word += \"ma\";\nelse word = word.substr(1) + first + \"ma\";\nword += string(wordIndex + 1, 'a');"
      },
      {
        "type": "multiple_choice",
        "questionText": "Ending for the 3rd word in Goat Latin?",
        "options": [
          "maaaa (ma + 3 \"a\"s)",
          "maaa",
          "aaaa"
        ],
        "correctAnswer": "maaaa (ma + 3 \"a\"s)"
      },
      {
        "type": "match_following",
        "questionText": "Match Goat Rules!",
        "pairs": [
          {
            "key": "Vowel",
            "value": "add \"ma\""
          },
          {
            "key": "Consonant",
            "value": "rotate + \"ma\""
          },
          {
            "key": "Index",
            "value": "add \"a\" * (i+1)"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Add \"a\"s based on word index `i`.",
        "codeSnippet": "for(int k=0; k<=i; k++) word += ___ ;",
        "correctAnswer": "'a'"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Processing word by word. Use a stringstream or split. It’s a fun transformation mission! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Result of \"Goat\" in Goat Latin (1st word)?",
        "options": [
          "oatGmaa",
          "Goatmaa",
          "oatGma"
        ],
        "correctAnswer": "oatGmaa"
      },
      {
        "type": "code_fill_in",
        "questionText": "Convert first char to lowercase for check.",
        "codeSnippet": "char lowFirst = ___(word[0]);",
        "correctAnswer": "tolower"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Speak like a goat, think like a bird! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Can I speak Goat?\"",
        "options": [
          "SQUAWK MAA!",
          "No.",
          "0"
        ],
        "correctAnswer": "SQUAWK MAA!"
      }
    ]
  },
  {
    "order": 40,
    "title": "Stage 2 Graduation",
    "desc": "The Strings Intermediate Insights Complete.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"STAGE 2 COMPLETE! You have flown through the intermediate clouds of String manipulation. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Sliding Windows, IP addressing, Versioning, and Palindrome expansion. You are ready for Stage 3 Pattern Mastery! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "ZigZag conversion complexity?",
        "options": [
          "O(N)",
          "O(N^2)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "multiple_choice",
        "questionText": "Group Anagrams key strategy?",
        "options": [
          "Sort individual strings",
          "Count letters"
        ],
        "correctAnswer": "Sort individual strings"
      },
      {
        "type": "multiple_choice",
        "questionText": "Longest Palindrome Substring (Exp Around Center) complexity?",
        "options": [
          "O(N^2)",
          "O(N)"
        ],
        "correctAnswer": "O(N^2)"
      },
      {
        "type": "multiple_choice",
        "questionText": "Jewels and Stones set complexity?",
        "options": [
          "O(J + S)",
          "O(J * S)"
        ],
        "correctAnswer": "O(J + S)"
      },
      {
        "type": "multiple_choice",
        "questionText": "Repeated Substring (s+s trick) result?",
        "options": [
          "True if s is in (s+s)[1:-1]",
          "Always true"
        ],
        "correctAnswer": "True if s is in (s+s)[1:-1]"
      },
      {
        "type": "match_following",
        "questionText": "Final Intermediate Match!",
        "pairs": [
          {
            "key": "Pico",
            "value": "Salutes!"
          },
          {
            "key": "Stage 2",
            "value": "Finished!"
          },
          {
            "key": "Stage 3",
            "value": "Awaits!"
          }
        ]
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Next, we hunt for patterns with KMP and Rolling Hashes! SQUAWK! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are you an intermediate master?\"",
        "options": [
          "SQUAWK YES!",
          "Working on it.",
          "0"
        ],
        "correctAnswer": "SQUAWK YES!"
      }
    ]
  }
];

module.exports = stage2;