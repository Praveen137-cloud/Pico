const stage5 = [
  {
    "order": 41,
    "title": "HashSet vs HashMap",
    "desc": "Solo keys vs Key-Value pairs.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Collection Secrets! A HashSet stores only UNIQUE keys. A HashMap stores Pairs (Key and Value). 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Secretly, a HashSet is just a HashMap where every value is a dummy placeholder! 🦜\"",
        "codeSnippet": "map.put(key, PRESENT);"
      },
      {
        "type": "multiple_choice",
        "questionText": "Main purpose of a HashSet?",
        "options": [
          "Ensuring uniqueness",
          "Storing sorted data",
          "Linking keys to values"
        ],
        "correctAnswer": "Ensuring uniqueness"
      },
      {
        "type": "match_following",
        "questionText": "Match the Types!",
        "pairs": [
          {
            "key": "HashSet",
            "value": "Unique Keys"
          },
          {
            "key": "HashMap",
            "value": "Mapping pairs"
          },
          {
            "key": "Key",
            "value": "The lookup ID"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Check if key exists in set.",
        "codeSnippet": "if (set. ___(item))",
        "correctAnswer": "contains"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Both use O(1) hashing for lightning speed! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What happens if you insert 'Pico' twice into a HashSet?",
        "options": [
          "It's only stored once",
          "An error occurs",
          "A list is created"
        ],
        "correctAnswer": "It's only stored once"
      },
      {
        "type": "code_fill_in",
        "questionText": "Standard map operation to add data.",
        "codeSnippet": "map. ___ (k, v);",
        "correctAnswer": "put"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Unique as a phoenix! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are you unique?\"",
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
    "order": 42,
    "title": "Frequency Counting",
    "desc": "Using Maps as a tally board.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Bird Tally! Use a HashMap to count how many times each character/word appears in a giant text. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Logic: If key exists, `map[key]++`. Else, `map[key] = 1`. 🦜\"",
        "codeSnippet": "for(char c : s) {\n  map[c] = map.getOrDefault(c, 0) + 1;\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the complexity to count frequencies of all chars in a string of length N?",
        "options": [
          "O(N)",
          "O(log N)",
          "O(N^2)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "match_following",
        "questionText": "Match the Counter Steps!",
        "pairs": [
          {
            "key": "First sight",
            "value": "Set to 1"
          },
          {
            "key": "Repeat sight",
            "value": "Old count + 1"
          },
          {
            "key": "Result",
            "value": "Total occurrences"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The method to get a value or 0 if missing.",
        "codeSnippet": "map.___ (key, 0) + 1 ;",
        "correctAnswer": "getOrDefault"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This is the most common use-case for HashMaps in interview problems! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Can we use an array of size 26 instead of a HashMap for just lower-case letters?",
        "options": [
          "Yes (Direct Addressing is even faster!)",
          "No",
          "Only for birds"
        ],
        "correctAnswer": "Yes (Direct Addressing is even faster!)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Check presence in Map.",
        "codeSnippet": "if (map. ___ (target))",
        "correctAnswer": "containsKey"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Count Every Feather! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"How many times did I chirp?\"",
        "options": [
          "MAP IT!",
          "No.",
          "0"
        ],
        "correctAnswer": "MAP IT!"
      }
    ]
  },
  {
    "order": 43,
    "title": "Custom Keys & Equality",
    "desc": "Teaching the map about your objects.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Custom Birds! If you want to use your own class (e.g., `BirdInfo`) as a KEY, you MUST override `equals()` and `hashCode()`! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The HashMap uses `hashCode()` to find the BUCKET, and `equals()` to find the exact target inside the chain. 🦜\"",
        "codeSnippet": "bool equals(other) { return this.id == other.id; }\nint hashCode() { return hash(this.id); }"
      },
      {
        "type": "multiple_choice",
        "questionText": "If two objects are `equal()`, their `hashCode()` MUST be:",
        "options": [
          "The same",
          "Different",
          "Zero"
        ],
        "correctAnswer": "The same"
      },
      {
        "type": "match_following",
        "questionText": "Match the Contract!",
        "pairs": [
          {
            "key": "A.equals(B)",
            "value": "True/False"
          },
          {
            "key": "A.hashCode()",
            "value": "Integer Indexer"
          },
          {
            "key": "Contract",
            "value": "Equal objects = Same hash"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The Java method to generate a combined hash for multiple fields.",
        "codeSnippet": "return Objects.___ (field1, field2);",
        "correctAnswer": "hash"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"If two objects have the SAME hash, they are NOT necessarily equal. This is the Collision! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What happens if you change an object's ID AFTER adding it to a Map?",
        "options": [
          "You can't find it anymore (The hash changed but the slot didn't!)",
          "It moves automatically",
          "The Map crashes"
        ],
        "correctAnswer": "You can't find it anymore (The hash changed but the slot didn't!)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Keyword for staying same.",
        "codeSnippet": "Keys should be ___ .",
        "correctAnswer": "immutable"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Respect the contract! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are we equal?\"",
        "options": [
          "Only if our hashes match!",
          "No.",
          "0"
        ],
        "correctAnswer": "Only if our hashes match!"
      }
    ]
  },
  {
    "order": 44,
    "title": "Immutable Keys",
    "desc": "Why keys must never change.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Static Identity! A key's `hashCode()` determines its' location. If the key changes, its' hash changes, but it stays in the OLD bucket. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"You'll never find the bird again! This is why Strings and Integers (which are Immutable) are the best keys. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "In Java/Python, what happens if you use a List as a key and then change the List?",
        "options": [
          "The map entry becomes unreachable/lost",
          "The map updates instantly",
          "The list is protected"
        ],
        "correctAnswer": "The map entry becomes unreachable/lost"
      },
      {
        "type": "match_following",
        "questionText": "Match Key Candidates!",
        "pairs": [
          {
            "key": "String",
            "value": "Excellent (Immutable)"
          },
          {
            "key": "Mutable List",
            "value": "Dangerous"
          },
          {
            "key": "Final Class",
            "value": "Strong Hash Candidate"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Keyword for an unchangeable field in Java.",
        "codeSnippet": "private ___ int keyID;",
        "correctAnswer": "final"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Always make your custom key classes immutable to be safe! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Does use of 'const' (JS/C++) or 'val' (Kotlin) help here?",
        "options": [
          "SQUAWK YES!",
          "No",
          "Sometimes"
        ],
        "correctAnswer": "SQUAWK YES!"
      },
      {
        "type": "code_fill_in",
        "questionText": "The property of being unable to change.",
        "codeSnippet": "I + ___",
        "correctAnswer": "MMUTABILITY"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Consistency is key! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Will you change?\"",
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
    "order": 45,
    "title": "LinkedHashMap",
    "desc": "Remembering the bird arrival order.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Ordering Magic! Standard HashMaps are UNORDERED. A LinkedHashMap uses a doubly-linked list running through the entries to remember the order! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Perfect for caches (LRU) or when you need to print items in the same order they were added. 🦜\"",
        "codeSnippet": "Map map = new LinkedHashMap();"
      },
      {
        "type": "multiple_choice",
        "questionText": "What order does a standard HashMap maintain for iteration?",
        "options": [
          "Essentially none (it depends on hashes)",
          "Insertion order",
          "Alphabetical"
        ],
        "correctAnswer": "Essentially none (it depends on hashes)"
      },
      {
        "type": "match_following",
        "questionText": "Match Map Orders!",
        "pairs": [
          {
            "key": "HashMap",
            "value": "Pure speed, No order"
          },
          {
            "key": "LinkedHashMap",
            "value": "Insertion order"
          },
          {
            "key": "TreeMap",
            "value": "Sorted order"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The type of list used inside LinkedHashMap.",
        "codeSnippet": "\"DOUBLY\" + \"_\" + \"___\" ;",
        "correctAnswer": "LINKED"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Performance is slightly lower due to the overhead of maintaining the links, but still O(1)! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Usage for LRU (Least Recently Used) Cache?",
        "options": [
          "LinkedHashMap has a built-in flag for this!",
          "Pure HashMap",
          "Array"
        ],
        "correctAnswer": "LinkedHashMap has a built-in flag for this!"
      },
      {
        "type": "code_fill_in",
        "questionText": "Method to remove oldest entry (hook).",
        "codeSnippet": "removeEldest ___",
        "correctAnswer": "Entry"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Never forget the arrival! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Who came first?\"",
        "options": [
          "THE LINKED BIRD!",
          "Me.",
          "You."
        ],
        "correctAnswer": "THE LINKED BIRD!"
      }
    ]
  },
  {
    "order": 46,
    "title": "TreeMap (Comparison)",
    "desc": "When you need sorting.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Sorting Nests! A TreeMap doesn't use hashing. It uses a Red-Black Tree (Balanced BST) to keep keys sorted! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Complexity O(log N) for everything. Slower than HashMap, but keys are ALWAYS sorted! 🦜\"",
        "codeSnippet": "TreeMap map = new TreeMap();\nmap.firstKey(); // The smallest"
      },
      {
        "type": "multiple_choice",
        "questionText": "When should you choose TreeMap over HashMap?",
        "options": [
          "When you need to iterate keys in sorted order",
          "When you need raw speed",
          "When you have small data"
        ],
        "correctAnswer": "When you need to iterate keys in sorted order"
      },
      {
        "type": "match_following",
        "questionText": "Match Complexity!",
        "pairs": [
          {
            "key": "HashMap Search",
            "value": "O(1)"
          },
          {
            "key": "TreeMap Search",
            "value": "O(log N)"
          },
          {
            "key": "HashMap Order",
            "value": "Randomized"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The type of tree usually used in TreeMap.",
        "codeSnippet": "\"RED\" + \"_\" + \"___\" ;",
        "correctAnswer": "BLACK"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"TreeMap handles range queries (Give me all keys between 10 and 50) perfectly! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Does TreeMap allow NULL keys?",
        "options": [
          "No (Needs to compare keys to sort them)",
          "Yes",
          "Only in elite mode"
        ],
        "correctAnswer": "No (Needs to compare keys to sort them)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Complexity for TreeMap search.",
        "codeSnippet": "O( ___ N)",
        "correctAnswer": "log"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Order from chaos! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are you sorted?\"",
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
    "order": 47,
    "title": "Initial Capacity Tuning",
    "desc": "Preparing the birdhouse in advance.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Optimization! If you know you'll store 1,000 birds, create a map with capacity 1,334 (to respect 0.75 load) in advance! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This prevents expensive REHASHING events where the array doubles and all data moves. 🦜\"",
        "codeSnippet": "Map map = new HashMap(expectedSize / 0.75 + 1);"
      },
      {
        "type": "multiple_choice",
        "questionText": "Default initial capacity in Java HashMap?",
        "options": [
          "16",
          "100",
          "1024"
        ],
        "correctAnswer": "16"
      },
      {
        "type": "match_following",
        "questionText": "Match Initial Params!",
        "pairs": [
          {
            "key": "Initial Capacity",
            "value": "Starting array size"
          },
          {
            "key": "Load Factor",
            "value": "0.75 by default"
          },
          {
            "key": "Threshold",
            "value": "Capacity * LoadFactor"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Typical power-of-2 size.",
        "codeSnippet": "capacity = 1 ___ 4; // 16",
        "correctAnswer": "<<"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Pre-sizing is an elite optimization for memory-heavy or time-critical applications! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What if you set the Initial Capacity too HIGH (e.g. 1 million)?",
        "options": [
          "Waste of RAM, slower iteration",
          "Everything crashes",
          "It's always better"
        ],
        "correctAnswer": "Waste of RAM, slower iteration"
      },
      {
        "type": "code_fill_in",
        "questionText": "Capacity constructor parameter.",
        "codeSnippet": "new HashMap( ___ )",
        "correctAnswer": "int"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Measure twice, map once! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Ready to build?\"",
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
    "order": 48,
    "title": "Mapping Objects to Objects",
    "desc": "Complex bird relationships.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Deep Maps! You can map anything to anything. An `ID` to a `UserObject`, or even a `Location` to a `Weather` object. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Ensure the KEY object has its' identity fixed. Values can change freely! 🦜\"",
        "codeSnippet": "User u = map.get(id);\nu.setName(\"Bluebird\"); // OK!"
      },
      {
        "type": "multiple_choice",
        "questionText": "Can a HashMap store another HashMap as a Value?",
        "options": [
          "Yes (Nested Maps!)",
          "No",
          "Only and always"
        ],
        "correctAnswer": "Yes (Nested Maps!)"
      },
      {
        "type": "match_following",
        "questionText": "Match Data Flow!",
        "pairs": [
          {
            "key": "Key",
            "value": "Fixed Identifier"
          },
          {
            "key": "Value",
            "value": "Mutable Data Payload"
          },
          {
            "key": "Map<K, V>",
            "value": "The Link"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The method to remove a mapping by key.",
        "codeSnippet": "map.___ (key);",
        "correctAnswer": "remove"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This many-to-one or one-to-one mapping is what makes apps work! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is a HashMap thread-safe by default?",
        "options": [
          "No (Use ConcurrentHashMap)",
          "Yes",
          "Only in elite mode"
        ],
        "correctAnswer": "No (Use ConcurrentHashMap)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Concurrent version of Map.",
        "codeSnippet": "___ HashMap",
        "correctAnswer": "Concurrent"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Linked and loaded! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Do you have the data?\"",
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
    "order": 49,
    "title": "HashMap Pitfalls",
    "desc": "Common mistakes for birds.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Danger Zone! Using the WRONG hash function (e.g. constant hash) makes search O(N). 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Forgetting to override `equals()` when overriding `hashCode()` is the most common bug in custom classes! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What happens if two objects have different hashes but `equals()` says they are the same?",
        "options": [
          "The Map won't find duplicates; consistency is broken",
          "It works fine",
          "The Map crashes"
        ],
        "correctAnswer": "The Map won't find duplicates; consistency is broken"
      },
      {
        "type": "match_following",
        "questionText": "Match the Bugs!",
        "pairs": [
          {
            "key": "Mutable Key",
            "value": "Lost Entry"
          },
          {
            "key": "Constant Hash",
            "value": "O(N) search"
          },
          {
            "key": "No equals()",
            "value": "Duplicate keys allowed"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The keyword to verify custom method behavior.",
        "codeSnippet": "@ ___ \npublic int hashCode()",
        "correctAnswer": "Override"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Always think about thread safety and load factors before deploying! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What is 'Hash Flooding'?",
        "options": [
          "A security attack using specific keys to force collisions",
          "Adding too much data",
          "A bug in the router"
        ],
        "correctAnswer": "A security attack using specific keys to force collisions"
      },
      {
        "type": "code_fill_in",
        "questionText": "Security fix in many languages.",
        "codeSnippet": "Randomized ___",
        "correctAnswer": "Seed"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Watch out for the traps! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are you careful?\"",
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
    "order": 50,
    "title": "Master Point (Hashing 5)",
    "desc": "Map mechanic status confirmed.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"STAGE 5 COMPLETE! You've mastered Sets, Maps, Ordering, Sorting, and Custom Identities. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Which Map preserves the exact insertion order?",
        "options": [
          "LinkedHashMap",
          "HashMap",
          "TreeMap"
        ],
        "correctAnswer": "LinkedHashMap"
      },
      {
        "type": "multiple_choice",
        "questionText": "Average complexity of HashMap lookup?",
        "options": [
          "O(1)",
          "O(N)",
          "O(log N)"
        ],
        "correctAnswer": "O(1)"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"You are a Map Mechanic! In Stage 6, we go DEEP into Advanced Collision handling like Double Hashing and Cuckoo! 🦜\""
      },
      {
        "type": "match_following",
        "questionText": "Match the Rank!",
        "pairs": [
          {
            "key": "Stage 5",
            "value": "Map Mechanic"
          },
          {
            "key": "Stage 6",
            "value": "Cuckoo Chaser"
          },
          {
            "key": "Next",
            "value": "Table Titans"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Mappings Mechanical.",
        "codeSnippet": "5 * ___ ;",
        "correctAnswer": "100"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The mechanism is humming! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Tinker with Advanced Hashing?",
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
        "questionText": "Final Maintenance?",
        "options": [
          "Optimize!",
          "Done.",
          "0"
        ],
        "correctAnswer": "Optimize!"
      }
    ]
  }
];

module.exports = stage5;
