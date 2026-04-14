const stage1 = [
  {
    "order": 1,
    "title": "Welcome to Hashing",
    "desc": "The magic of instant lookup.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Welcome to Hashing, fledgling! Imagine a library where every book knows its' exact shelf position without searching. That's Hashing! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"A 'Hash Function' takes a key (like a bird's name) and converts it into a number (an index in an array). 🦜\"",
        "codeSnippet": "index = hashFunction(key) % arraySize;"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the primary goal of hashing?",
        "options": [
          "O(1) average time complexity for lookups",
          "O(N) search",
          "Sorting data alphabetically"
        ],
        "correctAnswer": "O(1) average time complexity for lookups"
      },
      {
        "type": "match_following",
        "questionText": "Match Hashing Terms!",
        "pairs": [
          {
            "key": "Key",
            "value": "Input Data"
          },
          {
            "key": "Hash Function",
            "value": "The Mapper"
          },
          {
            "key": "Bucket",
            "value": "Storage Slot"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The operator used to wrap a hash value into array bounds.",
        "codeSnippet": "index = hash(key) ___ arraySize;",
        "correctAnswer": "%"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Hashing is used in database indexes, caches, and unique sets. It's the engine of the modern web! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Which is faster: Searching a sorted array or a Hash Table?",
        "options": [
          "Hash Table (O(1))",
          "Sorted Array (O(log N))",
          "They are equal"
        ],
        "correctAnswer": "Hash Table (O(1))"
      },
      {
        "type": "code_fill_in",
        "questionText": "Average complexity of hashing.",
        "codeSnippet": "O( ___ )",
        "correctAnswer": "1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Master the map! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Ready to generate keys?\"",
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
    "order": 2,
    "title": "The Hash Function",
    "desc": "The formula that powers the map.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"A Good Hash Function must be Deterministic (same key always gives same index) and Fast! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Simple Hash: Sum of characters in a string. 🦜\"",
        "codeSnippet": "int hash(s) {\n  int sum = 0;\n  for(char c : s) sum += c;\n  return sum;\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "What happens if a hash function is NOT deterministic?",
        "options": [
          "You can't find your data back",
          "It becomes faster",
          "The array grows"
        ],
        "correctAnswer": "You can't find your data back"
      },
      {
        "type": "match_following",
        "questionText": "Match Function Traits!",
        "pairs": [
          {
            "key": "Deterministic",
            "value": "Reliable results"
          },
          {
            "key": "Uniform Distribution",
            "value": "Spread keys evenly"
          },
          {
            "key": "Fast",
            "value": "Efficiency"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Calculate sum of ASCII values.",
        "codeSnippet": "sum += (int)___[i];",
        "correctAnswer": "str"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"If two different keys produce the same index, we have a COLLISION! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is 'sum of characters' a good hash function for 'ABC' and 'CBA'?",
        "options": [
          "No (Both have same sum, likely collision)",
          "Yes",
          "Only for birds"
        ],
        "correctAnswer": "No (Both have same sum, likely collision)"
      },
      {
        "type": "code_fill_in",
        "questionText": "The mathematical term for 'wrapping' values.",
        "codeSnippet": "hashValue ___ arrayLength",
        "correctAnswer": "%"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Avoid the collision clouds! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Do you follow the formula?\"",
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
    "order": 3,
    "title": "Collisions 101",
    "desc": "When bird nests overlap.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Collisions! When two swallows try to nest in the same spot. It's unavoidable because keys are infinite but our array is finite. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Birthday Paradox! In a room of just 23 birds, there's a 50% chance two share a birthday. Collisions happen sooner than you think! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What is a collision?",
        "options": [
          "Two keys mapping to the same index",
          "A bug in the processor",
          "A bird crash"
        ],
        "correctAnswer": "Two keys mapping to the same index"
      },
      {
        "type": "match_following",
        "questionText": "Match Hash Realities!",
        "pairs": [
          {
            "key": "Finite Array",
            "value": "Limited Slots"
          },
          {
            "key": "Infinite Keys",
            "value": "Potential Inputs"
          },
          {
            "key": "Collision",
            "value": "The inevitable overlap"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "If (hash(A) == hash(B)) that is a ___.",
        "codeSnippet": "\"COL\" + \"___\" ;",
        "correctAnswer": "LISION"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The two main ways to handle collisions are Chaining and Open Addressing. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Can we permanently prevent ALL collisions?",
        "options": [
          "No (Pigeonhole Principle)",
          "Yes, with more RAM",
          "Yes, with Pico-Hash"
        ],
        "correctAnswer": "No (Pigeonhole Principle)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Name of the principle that proves collisions exist.",
        "codeSnippet": "___ Principle",
        "correctAnswer": "Pigeonhole"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Learn to share the space! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Do you mind sharing?\"",
        "options": [
          "SQUAWK NO!",
          "Yes.",
          "Maybe."
        ],
        "correctAnswer": "SQUAWK NO!"
      }
    ]
  },
  {
    "order": 4,
    "title": "Direct Address Tables",
    "desc": "The simplest (but largest) hash map.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Direct Addressing! If your keys are small numbers (0-100), just use an array of size 101. No hash formula needed! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Index = Key. It's lightning fast (O(1)) but uses too much memory if keys are large (like phone numbers)! 🦜\"",
        "codeSnippet": "T[key] = value;"
      },
      {
        "type": "multiple_choice",
        "questionText": "Major disadvantage of Direct Address Tables?",
        "options": [
          "Memory waste (Sparse data)",
          "Slow speed",
          "Complex math"
        ],
        "correctAnswer": "Memory waste (Sparse data)"
      },
      {
        "type": "match_following",
        "questionText": "Match Addressing Types!",
        "pairs": [
          {
            "key": "Direct",
            "value": "Index == Key"
          },
          {
            "key": "Hashing",
            "value": "Index = f(Key)"
          },
          {
            "key": "O(1)",
            "value": "Search speed"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The insertion logic for Direct Address.",
        "codeSnippet": "array[___] = val;",
        "correctAnswer": "key"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Use this when the range of keys is small and tight! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Space complexity for range [0, 10^9]?",
        "options": [
          "O(Range) - 1GB array!",
          "O(N)",
          "O(1)"
        ],
        "correctAnswer": "O(Range) - 1GB array!"
      },
      {
        "type": "code_fill_in",
        "questionText": "Search complexity (always).",
        "codeSnippet": "O( ___ )",
        "correctAnswer": "1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Space is the price of speed! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Do you have enough RAM?\"",
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
    "order": 5,
    "title": "Modular Hashing",
    "desc": "The power of the remainder.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Modular Hashing! Use the remainder operator `%` to fit a huge key into a small bucket. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Pro Tip: Use a PRIME NUMBER for the array size to reduce collisions! 🦜\"",
        "codeSnippet": "int hash(int key) {\n  return key % 31; // Prime!\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why use prime numbers for table size?",
        "options": [
          "Distributes keys more uniformly",
          "Makes math faster",
          "Pico likes primes"
        ],
        "correctAnswer": "Distributes keys more uniformly"
      },
      {
        "type": "match_following",
        "questionText": "Match Multiples!",
        "pairs": [
          {
            "key": "7 % 3",
            "value": "1"
          },
          {
            "key": "12 % 5",
            "value": "2"
          },
          {
            "key": "Prime",
            "value": "Best divisor"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Hash the key into size 13.",
        "codeSnippet": "return key ___ 13;",
        "correctAnswer": "%"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"If keys have patterns (like all multiples of 10), modular hashing by 10 would be a disaster! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Hash(100) with size 7?",
        "options": [
          "2 (100 = 14*7 + 2)",
          "1",
          "0"
        ],
        "correctAnswer": "2 (100 = 14*7 + 2)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Modulus symbol.",
        "codeSnippet": "result = a ___ b;",
        "correctAnswer": "%"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Wrap your logic around the table! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Ready for prime time?\"",
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
    "order": 6,
    "title": "String Hashing",
    "desc": "Converting bird songs to numbers.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Strings are just arrays of numbers (ASCII). We can combine them into a single hash value! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Polynomial Rolling Hash: `(c0*P^0 + c1*P^1 + ...)` where P is a small prime (like 31). 🦜\"",
        "codeSnippet": "hash = (hash * 31 + char) % TableSize;"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why multiply by 31 instead of just summing chars?",
        "options": [
          "Order matters (ABC != CBA)",
          "It's a larger number",
          "Sums are too slow"
        ],
        "correctAnswer": "Order matters (ABC != CBA)"
      },
      {
        "type": "match_following",
        "questionText": "Match String Types!",
        "pairs": [
          {
            "key": "Char 'a'",
            "value": "ASCII 97"
          },
          {
            "key": "Polynomial",
            "value": "Smooth distribution"
          },
          {
            "key": "31",
            "value": "Common multiplier"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Update hash with next character.",
        "codeSnippet": "hash = (hash * 31 ___ str[i]) % MOD;",
        "correctAnswer": "+"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Java's `String.hashCode()` uses 31 as the multiplier! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What handles the case of huge hash values exceeding 'int' size?",
        "options": [
          "Integer Overflow (Wrapping)",
          "Error crash",
          "Binary truncation"
        ],
        "correctAnswer": "Integer Overflow (Wrapping)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Common prime multiplier for lower-case strings.",
        "codeSnippet": "P = ___ ;",
        "correctAnswer": "31"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Music to my ears! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Can you hear the bits?\"",
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
    "order": 7,
    "title": "Hash Table Operations",
    "desc": "Insert, Search, and Delete.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Holy Trinity of operations! Insert value at hash(K), Search for K, and Delete K. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"In a perfect world (no collisions), every action takes exactly 1 step! 🦜\"",
        "codeSnippet": "put(k, v) { arr[h(k)] = v; }\nget(k) { return arr[h(k)]; }"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the average time complexity of `get(key)`?",
        "options": [
          "O(1)",
          "O(N)",
          "O(log N)"
        ],
        "correctAnswer": "O(1)"
      },
      {
        "type": "match_following",
        "questionText": "Match the Ops!",
        "pairs": [
          {
            "key": "Insert",
            "value": "Add key-value"
          },
          {
            "key": "Search",
            "value": "Retrieve value"
          },
          {
            "key": "Delete",
            "value": "Remove key-value"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Function to find index.",
        "codeSnippet": "int idx = ___(key);",
        "correctAnswer": "hash"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Delete is tricky. In some tables, we don't just clear the slot; we mark it as 'DELETED' to avoid breaking search chains! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Can a hash table have duplicate keys?",
        "options": [
          "Usually No (Keys are unique)",
          "Yes, always",
          "Only in multi-maps"
        ],
        "correctAnswer": "Usually No (Keys are unique)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Time complexity for deletion (average).",
        "codeSnippet": "O( ___ )",
        "correctAnswer": "1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Operate with speed! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are you efficient?\"",
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
    "order": 8,
    "title": "Load Factor",
    "desc": "Is the birdhouse too crowded?",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Load Factor (α)! It's the ratio of Keys to Table Size. `α = n / m`. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"If α > 1, collisions are GUARANTEED. Most tables resize when α reaches 0.75! 🦜\"",
        "codeSnippet": "loadFactor = numberOfKeys / tableSize;"
      },
      {
        "type": "multiple_choice",
        "questionText": "What happens as the load factor increases?",
        "options": [
          "Lookup becomes slower",
          "Table becomes faster",
          "Nothing"
        ],
        "correctAnswer": "Lookup becomes slower"
      },
      {
        "type": "match_following",
        "questionText": "Match Alpha Cases!",
        "pairs": [
          {
            "key": "α = 0",
            "value": "Empty Table"
          },
          {
            "key": "α = 0.5",
            "value": "Half Full"
          },
          {
            "key": "α > 1",
            "value": "必然 Collision"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Threshold to trigger resize in most implementations.",
        "codeSnippet": "if (loadFactor >= ___ ) rehash();",
        "correctAnswer": "0.75"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Keep it breezy, keep it fast! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Load factor for 10 keys in size 20 table?",
        "options": [
          "0.5",
          "2.0",
          "10"
        ],
        "correctAnswer": "0.5"
      },
      {
        "type": "code_fill_in",
        "questionText": "Number of elements variable.",
        "codeSnippet": "___ / tableSize",
        "correctAnswer": "count"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Watch the population! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is it too full?\"",
        "options": [
          "SQUAWK NO!",
          "Yes.",
          "Maybe."
        ],
        "correctAnswer": "SQUAWK NO!"
      }
    ]
  },
  {
    "order": 9,
    "title": "Rehashing",
    "desc": "Moving to a bigger house.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Rehashing! When the table gets too full, we create a new, LARGER array (usually double the size) and move all keys. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"You must RE-CALCULATE the hash for every key because the TableSize has changed! 🦜\"",
        "codeSnippet": "for(key : oldTable) {\n  newIdx = hash(key) % newSize;\n  insert(key, newIdx);\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why must we re-calculate the index?",
        "options": [
          "The modulo divisor (%) changed",
          "Old indexes are deleted",
          "The CPU forgets"
        ],
        "correctAnswer": "The modulo divisor (%) changed"
      },
      {
        "type": "match_following",
        "questionText": "Match Rehash Steps!",
        "pairs": [
          {
            "key": "Trigger",
            "value": "Load Factor > Threshold"
          },
          {
            "key": "Allocation",
            "value": "Create Double Size array"
          },
          {
            "key": "Migration",
            "value": "Insert old to new"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Typical sizing factor for new table.",
        "codeSnippet": "newSize = oldSize * ___ ;",
        "correctAnswer": "2"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Rehashing is O(N) but it happens rarely, so the 'Amortized' complexity remains O(1)! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of a single rehash event?",
        "options": [
          "O(N)",
          "O(1)",
          "O(log N)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Target size keyword.",
        "codeSnippet": "Array newArr( ___ );",
        "correctAnswer": "newSize"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Bigger is better for speed! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Can you handle the move?\"",
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
    "order": 10,
    "title": "Master Point (Hashing 1)",
    "desc": "Hash fledgling status confirmed.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"STAGE 1 COMPLETE! You understand the map, the formula, the math, and the migration. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Average complexity of Hash Map search?",
        "options": [
          "O(1)",
          "O(log N)",
          "O(N)"
        ],
        "correctAnswer": "O(1)"
      },
      {
        "type": "multiple_choice",
        "questionText": "Best array size divisor type?",
        "options": [
          "Prime number",
          "Even number",
          "Multiple of 10"
        ],
        "correctAnswer": "Prime number"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"You are a Hash Fledgling! In Stage 2, we tackle the biggest enemy: Collisions! 🦜\""
      },
      {
        "type": "match_following",
        "questionText": "Match the Rank!",
        "pairs": [
          {
            "key": "Stage 1",
            "value": "Hash Fledgling"
          },
          {
            "key": "Stage 2",
            "value": "Chain Crawler"
          },
          {
            "key": "Next",
            "value": "Bucket Brigade"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Keys Hashed.",
        "codeSnippet": "1 * ___ ;",
        "correctAnswer": "100"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The map is unfolding! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Deepen the map?",
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
        "questionText": "Final Input?",
        "options": [
          "Hash it!",
          "Done.",
          "0"
        ],
        "correctAnswer": "Hash it!"
      }
    ]
  }
];

module.exports = stage1;
