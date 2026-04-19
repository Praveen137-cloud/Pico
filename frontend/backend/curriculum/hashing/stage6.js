const stage6 = [
  {
    "order": 51,
    "title": "Universal Hashing",
    "desc": "Randomized protection against attacks.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Defensive Bird! Universal Hashing picks a hash function at random from a carefully designed 'Family'. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This ensures that no single set of keys can ALWAYS cause collisions, because the function changes every time! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Why use a family of hash functions?",
        "options": [
          "To guarantee O(1) matching on average even if keys are picked maliciously",
          "To make the code more complex",
          "To use multiple arrays"
        ],
        "correctAnswer": "To guarantee O(1) matching on average even if keys are picked maliciously"
      },
      {
        "type": "match_following",
        "questionText": "Match Security Terms!",
        "pairs": [
          {
            "key": "Hash Family",
            "value": "Set of functions"
          },
          {
            "key": "Random Selection",
            "value": "Picking one at startup"
          },
          {
            "key": "Adversary",
            "value": "One trying to cause collisions"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "A universal hash function form: `h(k) = ((ak + b) % p) % m` where `a, b` are ___ .",
        "codeSnippet": "return ((a*k + b) % p) % m;",
        "correctAnswer": "random"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Probability of collision for any two distinct keys is exactly 1/m! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Universal hashing is crucial in:",
        "options": [
          "Network routers (to avoid DoS)",
          "Simple hello world apps",
          "Sorting numbers"
        ],
        "correctAnswer": "Network routers (to avoid DoS)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Random parameter check.",
        "codeSnippet": "a = random(1, p-___ )",
        "correctAnswer": "1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Defense is the best offense! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are you protected?\"",
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
    "order": 52,
    "title": "Perfect Hashing",
    "desc": "O(1) search in the WORST case.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Perfect Hashing! If your keys are static (never change), you can build a 2-level hash table where search is ALWAYS 1 check. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Level 1: Standard Hash Table. Level 2: Each bucket is ANOTHER hash table, sized specifically to have ZERO collisions! 🦜\"",
        "codeSnippet": "Level2TableSize = S_i^2; // Bucket size squared"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the worst-case lookup time for Perfect Hashing?",
        "options": [
          "O(1)",
          "O(N)",
          "O(log N)"
        ],
        "correctAnswer": "O(1)"
      },
      {
        "type": "match_following",
        "questionText": "Match the Levels!",
        "pairs": [
          {
            "key": "Level 1",
            "value": "Primary Distribution"
          },
          {
            "key": "Level 2",
            "value": "Collision-Free Buckets"
          },
          {
            "key": "Size S^2",
            "value": "Wait... that's a lot of RAM!"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The square law that guarantees no collisions by probability.",
        "codeSnippet": "bucketSize = count ___ count;",
        "correctAnswer": "*"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Even though we use S^2 space for each bucket, the TOTAL space remains O(N) on average! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Requirement for Basic Perfect Hashing?",
        "options": [
          "Fixed set of keys (No dynamic inserts)",
          "Infinite RAM",
          "A supercomputer"
        ],
        "correctAnswer": "Fixed set of keys (No dynamic inserts)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Space complexity (total average).",
        "codeSnippet": "O( ___ )",
        "correctAnswer": "n"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Perfectly still! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is it perfect?\"",
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
    "order": 53,
    "title": "Cuckoo Hashing",
    "desc": "Kicking birds out of nests.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Cuckoo Hashing! Use TWO hash functions and TWO tables. A key can be in `T1[h1(k)]` or `T2[h2(k)]`. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"When a new bird arrives at a full nest, it KICKS the old bird out. The old bird then flies to its' other possible home, potentially kicking someone else! 🦜\"",
        "codeSnippet": "void insert(x) {\n  if(exists(x)) return;\n  while(evictions < MAX) {\n    swap(x, T[h(x, currentTable)]);\n    if(x == NULL) return;\n    currentTable = 1 - currentTable;\n  }\n  rehash();\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the worst-case lookup time in Cuckoo Hashing?",
        "options": [
          "O(1) - Always 2 checks max!",
          "O(N)",
          "O(log N)"
        ],
        "correctAnswer": "O(1) - Always 2 checks max!"
      },
      {
        "type": "match_following",
        "questionText": "Match the Cuckoo Logic!",
        "pairs": [
          {
            "key": "Eviction",
            "value": "Kicking a key out"
          },
          {
            "key": "Hop",
            "value": "Moving to alternative home"
          },
          {
            "key": "Cycle",
            "value": "Infinite kicking (needs rehash)"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The maximum number of allowed evictions before giving up.",
        "codeSnippet": "\"LIMIT\" + \"_\" + \"___\" ;",
        "correctAnswer": "MAX"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Lookup is O(1) guaranteed, but Insertion can be slow if many evictions occur! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What happens if a cycle is detected (Bird A kicks B, B kicks A...)?",
        "options": [
          "Rehash the entire table with new functions",
          "The table is full",
          "The CPU catches fire"
        ],
        "correctAnswer": "Rehash the entire table with new functions"
      },
      {
        "type": "code_fill_in",
        "questionText": "Number of hash functions in standard Cuckoo.",
        "codeSnippet": "___ functions",
        "correctAnswer": "2"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Tough love in the nest! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Did you get kicked out?\"",
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
    "order": 54,
    "title": "Robin Hood Hashing",
    "desc": "Stealing from the rich slots.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Robin Hood! In this clever variant of Linear Probing, we ensure NO bird is much further from home than any other. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"If an incoming bird is 'Poorer' (further from its' original home) than the bird sitting in a nest, it SWAPS and takes the nest! 🦜\"",
        "codeSnippet": "if (distToHome(incoming) > distToHome(existing)) {\n  swap(incoming, existing);\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does Robin Hood hashing minimize?",
        "options": [
          "Variance in probe lengths",
          "Memory usage",
          "Number of birds"
        ],
        "correctAnswer": "Variance in probe lengths"
      },
      {
        "type": "match_following",
        "questionText": "Match Robin Hood Terms!",
        "pairs": [
          {
            "key": "Wealthy Bird",
            "value": "Close to its' home index"
          },
          {
            "key": "Poor Bird",
            "value": "Far from home index"
          },
          {
            "key": "Swap",
            "value": "Redistributing the load"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Distance from home formula.",
        "codeSnippet": "dist = (currentIdx - homeIdx + M) ___ M;",
        "correctAnswer": "%"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"By stealing from the 'rich' (lucky) and giving to the 'poor' (unlucky), search times become much more predictable! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Does Robin Hood hashing allow table to stay fast at higher load factors (> 0.9)?",
        "options": [
          "SQUAWK YES! It's much better than linear probing.",
          "No",
          "It's worse"
        ],
        "correctAnswer": "SQUAWK YES! It's much better than linear probing."
      },
      {
        "type": "code_fill_in",
        "questionText": "The 'Poor' bird takes from the '___'.",
        "codeSnippet": "Rich",
        "correctAnswer": "Rich"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Fairness for the flock! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are you rich?\"",
        "options": [
          "I'M GENEROUS!",
          "Yes.",
          "No."
        ],
        "correctAnswer": "I'M GENEROUS!"
      }
    ]
  },
  {
    "order": 55,
    "title": "Hopscotch Hashing",
    "desc": "Limited jumps for fast cache.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Hopscotch! Each slot has a 'Neighborhood' of size H. A bird must live within H distance of its' home. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"If the neighborhood is full, we move an existing bird further out (using a sequence of hops) to make space! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What does Hopscotch improve?",
        "options": [
          "Cache locality and predictable search",
          "Memory usage",
          "Wait... jumping birds?"
        ],
        "correctAnswer": "Cache locality and predictable search"
      },
      {
        "type": "match_following",
        "questionText": "Match Hopscotch!",
        "pairs": [
          {
            "key": "Neighborhood H",
            "value": "Max jump range"
          },
          {
            "key": "Bitmap",
            "value": "Track occupied neighbors"
          },
          {
            "key": "Hop",
            "value": "Internal displacement"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Bit used to track presence in neighborhood.",
        "codeSnippet": "infoBits[home] |= (1 ___ offset);",
        "correctAnswer": "<<"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Search is fast because you only ever check H adjacent slots. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Typical value for H?",
        "options": [
          "32 (fits in a register)",
          "1,000",
          "0"
        ],
        "correctAnswer": "32 (fits in a register)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Name of the game.",
        "codeSnippet": "___ Hashing",
        "correctAnswer": "Hopscotch"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Jump with joy! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Can you hop?\"",
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
    "order": 56,
    "title": "2-Choice Hashing",
    "desc": "Pick the lesser of two evils.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"2-Choice! When inserting, pick TWO random buckets and put the item in the one that is LESS full. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The 'Power of Two Choices' dramatically reduces the maximum load of any single bucket from O(log N) to O(log log N)! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Why check two buckets?",
        "options": [
          "To balance the load across the table",
          "Because one might be broken",
          "To use more electricity"
        ],
        "correctAnswer": "To balance the load across the table"
      },
      {
        "type": "match_following",
        "questionText": "Match Choice Logic!",
        "pairs": [
          {
            "key": "Bucket 1",
            "value": "Hash 1 Result"
          },
          {
            "key": "Bucket 2",
            "value": "Hash 2 Result"
          },
          {
            "key": "Decision",
            "value": "Pick minimum occupancy"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Compare lengths of selected buckets.",
        "codeSnippet": "if (len1 ___ len2) insert(B1);",
        "correctAnswer": "<="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This simple change makes load distribution incredibly even. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Does this work for chaining or open addressing?",
        "options": [
          "Used most in Chaining to keep chains short",
          "Only for birds",
          "Neither"
        ],
        "correctAnswer": "Used most in Chaining to keep chains short"
      },
      {
        "type": "code_fill_in",
        "questionText": "Power of Choice Number.",
        "codeSnippet": "Choice of ___",
        "correctAnswer": "2"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Choose wisely! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Which bucket?\"",
        "options": [
          "THE EMPTIER ONE!",
          "That one.",
          "This one."
        ],
        "correctAnswer": "THE EMPTIER ONE!"
      }
    ]
  },
  {
    "order": 57,
    "title": "Incremental Rehashing",
    "desc": "Avoiding the O(N) freeze.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Freeze! Rehashing 1 billion keys takes a long time, causing the program to freeze. Incremental Rehashing moves a few keys at a time! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Redis and other high-perf systems maintain two tables simultaneously during the transition! 🦜\"",
        "codeSnippet": "for(i=0; i<10; i++) {\n  moveNextBucketToNewTable();\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "When is the work of rehashing performed in Incremental Rehashing?",
        "options": [
          "A bit during every insert/delete operation",
          "All at once at midnight",
          "Instantly"
        ],
        "correctAnswer": "A bit during every insert/delete operation"
      },
      {
        "type": "match_following",
        "questionText": "Match Migration States!",
        "pairs": [
          {
            "key": "Table 1",
            "value": "Old data, shrinking"
          },
          {
            "key": "Table 2",
            "value": "New data, growing"
          },
          {
            "key": "Search",
            "value": "Check BOTH tables"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Index of the next bucket to migrate.",
        "codeSnippet": "int rehashIdx = ___;",
        "correctAnswer": "counter"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This ensures 'Smooth Availability' with no sudden latency spikes! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Where do NEW inserts go during an incremental rehash?",
        "options": [
          "Always to the NEW table",
          "To the old table",
          "Both"
        ],
        "correctAnswer": "Always to the NEW table"
      },
      {
        "type": "code_fill_in",
        "questionText": "The keyword for step-by-step.",
        "codeSnippet": "___ Rehashing",
        "correctAnswer": "Incremental"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Step by step to the summit! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are you moving?\"",
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
    "order": 58,
    "title": "K-Independent Hashing",
    "desc": "How random is random?",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Deep Independence! A hash family is 'K-Independent' if any K different keys are mapped to truly random, independent positions. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"2-Independent (Universal) is usually enough, but some complex algorithms require higher K! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What does K-independence guarantee?",
        "options": [
          "Predictable collision probabilities for small subsets of keys",
          "No collisions ever",
          "Faster speed"
        ],
        "correctAnswer": "Predictable collision probabilities for small subsets of keys"
      },
      {
        "type": "match_following",
        "questionText": "Match Independence!",
        "pairs": [
          {
            "key": "K=1",
            "value": "Uniformity"
          },
          {
            "key": "K=2",
            "value": "Universal (Pairwise)"
          },
          {
            "key": "K=3",
            "value": "Higher level logic"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "A polynomial hash `a + bx + cx^2 ...` is ___-Independent.",
        "codeSnippet": "degree + ___ ;",
        "correctAnswer": "1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Most practical hash maps use 2-independent families like `(ax+b) % p`. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is a constant function (always return 5) 1-Independent?",
        "options": [
          "No",
          "Yes",
          "Only and always"
        ],
        "correctAnswer": "No"
      },
      {
        "type": "code_fill_in",
        "questionText": "Independence variable.",
        "codeSnippet": "___ -Independent",
        "correctAnswer": "K"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Independent flight! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are you independent?\"",
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
    "order": 59,
    "title": "Power of Load Factor",
    "desc": "The curve of performance.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Performance Cliff! In Open Addressing, search time is O(1 / (1 - α)). As α approaches 1.0, the time goes to INFINITY! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Data: At 50% full, search takes 2 probes. At 90% full, it takes 10+! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "If α = 0.99, probing takes (approx):",
        "options": [
          "100 probes",
          "2 probes",
          "1 probe"
        ],
        "correctAnswer": "100 probes"
      },
      {
        "type": "match_following",
        "questionText": "Match Load Feelings!",
        "pairs": [
          {
            "key": "α = 0.5",
            "value": "Smooth flight"
          },
          {
            "key": "α = 0.95",
            "value": "Heavy turbulence"
          },
          {
            "key": "α = 1.0",
            "value": "CRASH"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The formula for expected probes.",
        "codeSnippet": "1 / ( 1 - ___ );",
        "correctAnswer": "alpha"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This is why we rehash aggressively! Save the birds from the cliff. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Does Chaining degrade as sharply as Open Addressing?",
        "options": [
          "No (it degrades linearly O(α))",
          "Yes",
          "Faster actually"
        ],
        "correctAnswer": "No (it degrades linearly O(α))"
      },
      {
        "type": "code_fill_in",
        "questionText": "Load factor symbol.",
        "codeSnippet": "α = n / ___",
        "correctAnswer": "m"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Watch the wind! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Will you rehash?\"",
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
    "order": 60,
    "title": "Master Point (Hashing 6)",
    "desc": "Cuckoo chaser status confirmed.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"STAGE 6 COMPLETE! You've navigated the elite algorithms: Universal, Perfect, Cuckoo, and Robin Hood. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Which algorithm kicks elements out to find space?",
        "options": [
          "Cuckoo Hashing",
          "Robin Hood",
          "Hopscotch"
        ],
        "correctAnswer": "Cuckoo Hashing"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the worst-case lookup for Perfect Hashing?",
        "options": [
          "O(1)",
          "O(log N)",
          "O(N)"
        ],
        "correctAnswer": "O(1)"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"You are a Cuckoo Chaser! In Stage 7, we look at the 'Magic' used for Large Data: Bloom Filters and Count-Min! 🦜\""
      },
      {
        "type": "match_following",
        "questionText": "Match the Rank!",
        "pairs": [
          {
            "key": "Stage 6",
            "value": "Cuckoo Chaser"
          },
          {
            "key": "Stage 7",
            "value": "Bloom Bird"
          },
          {
            "key": "Next",
            "value": "Probabilistic Power"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Algorithms Advanced.",
        "codeSnippet": "6 * ___ ;",
        "correctAnswer": "100"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Fly into the probabilitist realm! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Enter the Bloom realm?",
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
        "questionText": "Final Eviction?",
        "options": [
          "Kick!",
          "Done.",
          "0"
        ],
        "correctAnswer": "Kick!"
      }
    ]
  }
];

module.exports = stage6;
