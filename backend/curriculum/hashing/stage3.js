const stage3 = [
  {
    "order": 21,
    "title": "Open Addressing",
    "desc": "One house for one bird.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Open Addressing! No Linked Lists here. If a bird's nest is taken, they look for another empty nest in the SAME array. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Every element is stored in the hash table itself. Array size M must be >= number of keys N! 🦜\"",
        "codeSnippet": "while(table[idx].isFull) {\n  idx = getNextIdx(idx);\n}\ntable[idx] = item;"
      },
      {
        "type": "multiple_choice",
        "questionText": "In Open Addressing, what is the maximum Load Factor (α)?",
        "options": [
          "1.0 (Table is full)",
          "Infinite",
          "0.5"
        ],
        "correctAnswer": "1.0 (Table is full)"
      },
      {
        "type": "match_following",
        "questionText": "Match Hashing Styles!",
        "pairs": [
          {
            "key": "Chaining",
            "value": "External storage (Lists)"
          },
          {
            "key": "Open Addressing",
            "value": "Internal storage (Array)"
          },
          {
            "key": "Full Table",
            "value": "α = 1"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Check if slot is empty.",
        "codeSnippet": "if (table[idx] ___ NULL) table[idx] = val;",
        "correctAnswer": "=="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The strategy to find the next available slot is called PROBING. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Benefit of Open Addressing over Chaining?",
        "options": [
          "Better Cache Locality",
          "Can store infinite data",
          "Easier deletion"
        ],
        "correctAnswer": "Better Cache Locality"
      },
      {
        "type": "code_fill_in",
        "questionText": "Maximum number of keys that can be stored in size M table.",
        "codeSnippet": "N <= ___",
        "correctAnswer": "M"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Find your own space! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Ready to probe?\"",
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
    "order": 22,
    "title": "Linear Probing",
    "desc": "Checking neighbors one by one.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Linear Probing! If slot `i` is full, check `i+1`, then `i+2`, and so on. Circle back to index 0 if needed! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Formula: `newIndex = (originalHash + step) % size`. 🦜\"",
        "codeSnippet": "index = (hash(key) + i) % M;"
      },
      {
        "type": "multiple_choice",
        "questionText": "How many slots are checked in each step of linear probing?",
        "options": [
          "1",
          "2",
          "Jumps by i^2"
        ],
        "correctAnswer": "1"
      },
      {
        "type": "match_following",
        "questionText": "Match Probing Steps!",
        "pairs": [
          {
            "key": "i = 0",
            "value": "Initial Hash Slot"
          },
          {
            "key": "i = 1",
            "value": "Immediate Neighbor"
          },
          {
            "key": "% M",
            "value": "Circular Wrapping"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Update index in loop.",
        "codeSnippet": "idx = (idx + ___ ) % M;",
        "correctAnswer": "1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"It's the most cache-friendly method because neighbors are right next to each other in memory! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Insert [10, 20, 11] in size 10 with mod hashing. Where does 11 go if 10 and 20 are already at index 0 and 1?",
        "options": [
          "Index 2",
          "Index 1",
          "Index 0"
        ],
        "correctAnswer": "Index 2"
      },
      {
        "type": "code_fill_in",
        "questionText": "Operation for wrapping around array.",
        "codeSnippet": "___ M",
        "correctAnswer": "%"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Slide into a free slot! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are you next?\"",
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
    "title": "Searching & Deletion",
    "desc": "Finding and removing in a probed world.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Searching! Start at home index. Check sequentially until you find the key OR hit an EMPTY slot. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"CRITICAL: Hit an empty slot? The key IS NOT THERE! If you delete a key, you can't just leave it empty, or searches will break! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Why does hitting an empty slot stop a search in linear probing?",
        "options": [
          "Because if it existed, the search would have found it or filled that slot during insertion",
          "Pico said so",
          "The array ends there"
        ],
        "correctAnswer": "Because if it existed, the search would have found it or filled that slot during insertion"
      },
      {
        "type": "match_following",
        "questionText": "Match Search Endings!",
        "pairs": [
          {
            "key": "Key Matches",
            "value": "SUCCESS"
          },
          {
            "key": "Slot is NULL",
            "value": "Searching Ends (Not Found)"
          },
          {
            "key": "Collision",
            "value": "Continue Searching"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The special marker for deleted slots.",
        "codeSnippet": "\"TOM\" + \"___\" ;",
        "correctAnswer": "BSTONE"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Tombstones (dummy markers) allow searches to jump OVER deleted slots while still stopping at truly empty ones! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is deletion in Open Addressing harder than Chaining?",
        "options": [
          "Yes (Requires landmarks/tombstones)",
          "No",
          "Exactly the same"
        ],
        "correctAnswer": "Yes (Requires landmarks/tombstones)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Check for key or tombstone.",
        "codeSnippet": "if (table[idx] == NULL ___ table[idx] == DELETED)",
        "correctAnswer": "||"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Mark the spot, move the plot! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is it dead?\"",
        "options": [
          "IT'S A TOMBSTONE!",
          "No.",
          "0"
        ],
        "correctAnswer": "IT'S A TOMBSTONE!"
      }
    ]
  },
  {
    "order": 24,
    "title": "Primary Clustering",
    "desc": "The Traffic Jam of Hashing.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Primary Clustering! In Linear Probing, long blocks of occupied slots build up. If any key hashes INTO a cluster, the cluster grows even longer! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This makes search time O(N) because you have to walk the entire traffic jam. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What causes Primary Clustering?",
        "options": [
          "The linear check of `i+1, i+2...`",
          "Too many birds",
          "Bad array size"
        ],
        "correctAnswer": "The linear check of `i+1, i+2...`"
      },
      {
        "type": "match_following",
        "questionText": "Match Cluster Terms!",
        "pairs": [
          {
            "key": "Cluster",
            "value": "Long block of full slots"
          },
          {
            "key": "Landing",
            "value": "Prob of hitting a cluster"
          },
          {
            "key": "Performance",
            "value": "Drops as clusters merge"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The worst case complexity due to clustering.",
        "codeSnippet": "O( ___ );",
        "correctAnswer": "N"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Clusters act like magnets. The bigger they are, the more likely the next key will hit them! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Should we keep α low (< 0.5) to avoid this?",
        "options": [
          "SQUAWK YES!",
          "No, use 1.0",
          "Doesn't matter"
        ],
        "correctAnswer": "SQUAWK YES!"
      },
      {
        "type": "code_fill_in",
        "questionText": "Hash type prone to primary clustering.",
        "codeSnippet": "___ Probing",
        "correctAnswer": "Linear"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Break out of the pack! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are you stuck?\"",
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
    "order": 25,
    "title": "Quadratic Probing",
    "desc": "Jumping away from crowds.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Quadratic Probing! Instead of checking neighbors, jump by squares: `idx, idx + 1^2, idx + 2^2, idx + 3^2...` 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Formula: `newIndex = (hash + i^2) % M`. This effectively skips clusters! 🦜\"",
        "codeSnippet": "index = (hash + i * i) % M;"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does Quadratic Probing eliminate?",
        "options": [
          "Primary Clustering",
          "All Collisions",
          "Memory Usage"
        ],
        "correctAnswer": "Primary Clustering"
      },
      {
        "type": "match_following",
        "questionText": "Match Probing Math!",
        "pairs": [
          {
            "key": "Step 1",
            "value": "+1"
          },
          {
            "key": "Step 2",
            "value": "+4"
          },
          {
            "key": "Step 3",
            "value": "+9"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Update index with square of i.",
        "codeSnippet": "idx = (base + i ___ i) % size;",
        "correctAnswer": "*"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"While better than linear, it still suffers from Secondary Clustering (keys with same hash jump to same spots). 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is Quadratic Probing always guaranteed to find an empty slot if it exists?",
        "options": [
          "Only if table size M is prime and α < 0.5",
          "Yes, always",
          "No, never"
        ],
        "correctAnswer": "Only if table size M is prime and α < 0.5"
      },
      {
        "type": "code_fill_in",
        "questionText": "Square of 4.",
        "codeSnippet": "4 * 4 = ___",
        "correctAnswer": "16"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Jump higher! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are you jumping?\"",
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
    "title": "Double Hashing",
    "desc": "The ultimate probing pattern.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Double Hashing! Use a second hash function to decide how far to jump. `index = (h1(k) + i*h2(k)) % M`. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Every key has its' own unique 'skip' value. This eliminates both Primary and Secondary clustering! 🦜\"",
        "codeSnippet": "int step = hash2(key);\nidx = (idx + step) % M;"
      },
      {
        "type": "multiple_choice",
        "questionText": "What condition must `hash2(key)` satisfy?",
        "options": [
          "It must never return 0 and must be relatively prime to M",
          "It must return 0",
          "It must be larger than hash1"
        ],
        "correctAnswer": "It must never return 0 and must be relatively prime to M"
      },
      {
        "type": "match_following",
        "questionText": "Match Double Terms!",
        "pairs": [
          {
            "key": "hash1",
            "value": "Initial Position"
          },
          {
            "key": "hash2",
            "value": "Skip distance"
          },
          {
            "key": "i * hash2",
            "value": "Relative probing"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The formula for the i-th probe.",
        "codeSnippet": "(h1 + i ___ h2) % M;",
        "correctAnswer": "*"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This is the most efficient probing technique for uniform distribution! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of search with Double Hashing?",
        "options": [
          "O(1/(1-α)) on average",
          "O(log N)",
          "O(N)"
        ],
        "correctAnswer": "O(1/(1-α)) on average"
      },
      {
        "type": "code_fill_in",
        "questionText": "Requirement for hash2.",
        "codeSnippet": "hash2(key) ___ 0",
        "correctAnswer": "!="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Double the logic, double the speed! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Double or nothing?\"",
        "options": [
          "SQUAWK DOUBLE!",
          "Nothing.",
          "Maybe."
        ],
        "correctAnswer": "SQUAWK DOUBLE!"
      }
    ]
  },
  {
    "order": 27,
    "title": "Probing Limits",
    "desc": "When the table gives up.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Infinite Probing? No! If your table is 100% full, the probing loop will run forever looking for a slot. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Always check how many slots you've tried. If you've checked M slots and haven't found a space, the table is full! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "When should we stop the probing loop during INSERT?",
        "options": [
          "When an empty slot is found or we've checked all M slots",
          "Never stop",
          "After 100 tries"
        ],
        "correctAnswer": "When an empty slot is found or we've checked all M slots"
      },
      {
        "type": "match_following",
        "questionText": "Match Full Realities!",
        "pairs": [
          {
            "key": "Full Table",
            "value": "Search fails O(N)"
          },
          {
            "key": "Empty Table",
            "value": "Search O(1)"
          },
          {
            "key": "Limit M",
            "value": "Max probe count"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The loop counter check.",
        "codeSnippet": "if (count ___ M) return TABLE_FULL;",
        "correctAnswer": "=="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Good practice is to resize LONG before you hit 100%. Aim for 50-70%! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Search complexity in a 100% full table with linear probing?",
        "options": [
          "O(N)",
          "O(1)",
          "O(log N)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Capacity variable.",
        "codeSnippet": "totalSlots = ___ ;",
        "correctAnswer": "M"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Know your limits! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are you full?\"",
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
    "order": 28,
    "title": "Search Logic Deep-Dive",
    "desc": "How searching actually works.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Depth Probe! To search, calculate `h(k)`. Iterate using the probing method (Linear, Quadratic, or Double). 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"For each slot: 1. If key matches, TRUE. 2. If slot is NULL, FALSE. 3. If slot is full or DELETED, continue. 🦜\"",
        "codeSnippet": "while(arr[idx] != NULL) {\n  if(arr[idx] == key) return TRUE;\n  idx = nextIdx(idx);\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "What happens if we search for a key that maps to index 5, but index 5 is filled by a DIFFERENT key?",
        "options": [
          "Continue probing to next slots",
          "Return FALSE immediately",
          "Overwrite index 5"
        ],
        "correctAnswer": "Continue probing to next slots"
      },
      {
        "type": "match_following",
        "questionText": "Match Search Results!",
        "pairs": [
          {
            "key": "Success",
            "value": "Key Found"
          },
          {
            "key": "Failure",
            "value": "Hit NULL"
          },
          {
            "key": "Collision",
            "value": "Mismatch, keep looking"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Check for key match.",
        "codeSnippet": "if (table[idx].key ___ target) return TRUE;",
        "correctAnswer": "=="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Search and Insert must use the EXACT SAME probing sequence! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is search O(1) in the worst case for Open Addressing?",
        "options": [
          "No, O(N)",
          "Yes, always",
          "Depends on the bird"
        ],
        "correctAnswer": "No, O(N)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Break condition.",
        "codeSnippet": "if (___ [idx] == NULL) return false;",
        "correctAnswer": "table"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Follow the breadcrumbs! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are you lost?\"",
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
    "order": 29,
    "title": "Comparison Class",
    "desc": "Chaining vs Open Addressing.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Comparison! Chaining is more robust (never gets full), but uses more memory for pointers. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Open Addressing has better locality and no pointers, but deletion is harder and performance drops sharply when α > 0.7. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Which is better for large items (like big objects)?",
        "options": [
          "Chaining (Pointers are small relative to objects)",
          "Open Addressing",
          "They are the same"
        ],
        "correctAnswer": "Chaining (Pointers are small relative to objects)"
      },
      {
        "type": "match_following",
        "questionText": "Match Winners!",
        "pairs": [
          {
            "key": "Ease of Deletion",
            "value": "Chaining"
          },
          {
            "key": "Cache Locality",
            "value": "Open Addressing"
          },
          {
            "key": "High Load Factor",
            "value": "Chaining"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Pointer size on 64-bit systems.",
        "codeSnippet": "int size = ___ ;",
        "correctAnswer": "8"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"If memory is tight, choose Open Addressing. If simplicity and stability are key, choose Chaining! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Which is more sensitive to a 'clumped' hash function?",
        "options": [
          "Open Addressing (Clustering)",
          "Chaining",
          "Neither"
        ],
        "correctAnswer": "Open Addressing (Clustering)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Type that needs markers for deletion.",
        "codeSnippet": "___ Addressing",
        "correctAnswer": "Open"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Pick the right cage for your keys! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Have you chosen?\"",
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
    "order": 30,
    "title": "Master Point (Hashing 3)",
    "desc": "Probing pilot status confirmed.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"STAGE 3 COMPLETE! You've mastered Linear, Quadratic, and Double Probing. Cluters cannot slow you down! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What does a Tombstone marker do?",
        "options": [
          "Maintains search continuity in Open Addressing",
          "Deletes the whole table",
          "Stores the hash value"
        ],
        "correctAnswer": "Maintains search continuity in Open Addressing"
      },
      {
        "type": "multiple_choice",
        "questionText": "Which probing method handles Primary Clustering best?",
        "options": [
          "Double Hashing",
          "Linear Probing",
          "Quadratic Probing"
        ],
        "correctAnswer": "Double Hashing"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"You are a Probing Pilot! In Stage 4, we dive into the world of String Hashing and Rolling magic! 🦜\""
      },
      {
        "type": "match_following",
        "questionText": "Match the Rank!",
        "pairs": [
          {
            "key": "Stage 3",
            "value": "Probing Pilot"
          },
          {
            "key": "Stage 4",
            "value": "Rolling Raptor"
          },
          {
            "key": "Next",
            "value": "Pattern Pounce"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Slots Probed.",
        "codeSnippet": "3 * ___ ;",
        "correctAnswer": "100"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Open trails ahead! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Begin the String Hashing?",
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
        "questionText": "Final Hash?",
        "options": [
          "Jump!",
          "Done.",
          "0"
        ],
        "correctAnswer": "Jump!"
      }
    ]
  }
];

module.exports = stage3;
