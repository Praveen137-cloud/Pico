const stage7 = [
  {
    "order": 61,
    "title": "Probabilistic Data Structures",
    "desc": "Trade precision for tiny space.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Magic Birds! Sometimes we have so much data (billions of items) that even a Hash Map is too big. We trade 'certainty' for 'tiny space'! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Probabilistic structures might say 'Maybe' instead of 'Yes', but they NEVER say 'Maybe' when the answer is 'No'! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the primary benefit of probabilistic data structures?",
        "options": [
          "Extreme space efficiency",
          "100% accuracy",
          "They are faster to write"
        ],
        "correctAnswer": "Extreme space efficiency"
      },
      {
        "type": "match_following",
        "questionText": "Match the Tradeoffs!",
        "pairs": [
          {
            "key": "Exact",
            "value": "Hash Map (Large RAM)"
          },
          {
            "key": "Probabilistic",
            "value": "Bloom Filter (Tiny RAM)"
          },
          {
            "key": "Accuracy",
            "value": "Sacrificed for Space"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The type of result from a probabilistic query.",
        "codeSnippet": "\"MAY\" + \"___\" ;",
        "correctAnswer": "BE"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"They are used in Big Data systems like Hadoop, Spark, and Cassandra to avoid unnecessary disk reads! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Can a Bloom Filter give a 'False Negative' (say No when the answer is Yes)?",
        "options": [
          "No, Never",
          "Yes, often",
          "Only in elite mode"
        ],
        "correctAnswer": "No, Never"
      },
      {
        "type": "code_fill_in",
        "questionText": "Opposite of 'Deterministic'.",
        "codeSnippet": "P + ___",
        "correctAnswer": "ROBABILISTIC"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Trust the math, fledgling! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are you certain?\"",
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
    "order": 62,
    "title": "Bloom Filters: Intuition",
    "desc": "The bitset membership test.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Bloom Filters! A giant array of BITS (0 or 1). No actual keys are stored! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"To add an item, hash it with K different functions and set bits at those positions to 1. 🦜\"",
        "codeSnippet": "bitset[h1(x)] = 1;\nbitset[h2(x)] = 1;\nbitset[h3(x)] = 1;"
      },
      {
        "type": "multiple_choice",
        "questionText": "How much memory does a Bloom Filter use compared to a Hash Set for 1 million items?",
        "options": [
          "100x less (Bits vs Full Objects)",
          "100x more",
          "Exactly the same"
        ],
        "correctAnswer": "100x less (Bits vs Full Objects)"
      },
      {
        "type": "match_following",
        "questionText": "Match Bloom Components!",
        "pairs": [
          {
            "key": "Bit Array",
            "value": "Storage of 1s and 0s"
          },
          {
            "key": "K Hashes",
            "value": "Independent probes"
          },
          {
            "key": "0",
            "value": "Definitely not present"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Bit manipulation for setting a 1.",
        "codeSnippet": "bitArray[idx] ___ 1;",
        "correctAnswer": "="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Check membership: Hash the query. If ANY of those bits are 0, the item is DEFINITELY NOT there! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What if ALL K bits for a query are 1?",
        "options": [
          "The item is PROBABLY there",
          "The item is DEFINITELY there",
          "The array is full"
        ],
        "correctAnswer": "The item is PROBABLY there"
      },
      {
        "type": "code_fill_in",
        "questionText": "Number of bits in a byte.",
        "codeSnippet": "___",
        "correctAnswer": "8"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Bits of brilliance! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are you a bit?\"",
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
    "order": 63,
    "title": "Bloom: Insertion",
    "desc": "Marking your territory.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Adding a bird! Pass the bird name through K hash functions. Take each result modulo M (bit array size). Set bits! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Example: If h1('PICO')=5, h2('PICO')=12, then bitArray[5]=1 and bitArray[12]=1. 🦜\"",
        "codeSnippet": "for(h : hashFunctions) {\n  bitset.set(h(key) % M);\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Do we ever unset a bit (change 1 to 0) in a standard Bloom Filter?",
        "options": [
          "No, it's irreversible deletion is not supported",
          "Yes",
          "Only in elite mode"
        ],
        "correctAnswer": "No, it's irreversible deletion is not supported"
      },
      {
        "type": "match_following",
        "questionText": "Match Insertion Math!",
        "pairs": [
          {
            "key": "K",
            "value": "Number of hashes"
          },
          {
            "key": "M",
            "value": "Size of bit array"
          },
          {
            "key": "Set operation",
            "value": "bit |= (1 << pos)"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The loop to set bits.",
        "codeSnippet": "for (int i = 0; i < ___ ; i++) setBit(hash(key, i));",
        "correctAnswer": "K"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Choosing K and M is a science! Too small M leads to too many 1s and constant False Positives. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity for one insertion?",
        "options": [
          "O(K)",
          "O(N)",
          "O(1)"
        ],
        "correctAnswer": "O(K)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Hash index modulo array size.",
        "codeSnippet": "h(k) ___ M",
        "correctAnswer": "%"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Make your mark! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Ready to set?\"",
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
    "order": 64,
    "title": "Bloom: Querying",
    "desc": "The 'Is it there?' test.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Query Time! To check if 'BLUEBIRD' exists, hash it with the same K functions. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Check ALL K positions. If ALL are 1, return TRUE (Maybe). If ANY are 0, return FALSE (Definitely No). 🦜\"",
        "codeSnippet": "for(h : hashFunctions) {\n  if(!bitset.get(h(key) % M)) return FALSE;\n}\nreturn TRUE;"
      },
      {
        "type": "multiple_choice",
        "questionText": "A False Positive happens when:",
        "options": [
          "Multiple OTHER items happened to set all K bits for our query key",
          "The array is empty",
          "The hash function is too fast"
        ],
        "correctAnswer": "Multiple OTHER items happened to set all K bits for our query key"
      },
      {
        "type": "match_following",
        "questionText": "Match Query Outcomes!",
        "pairs": [
          {
            "key": "Result: No",
            "value": "Zero Collision (Truth)"
          },
          {
            "key": "Result: Yes",
            "value": "All 1s (Probability)"
          },
          {
            "key": "O(K)",
            "value": "Query Complexity"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Check for any zero bit.",
        "codeSnippet": "if (getBit(pos) ___ 0) return NO;",
        "correctAnswer": "=="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"It's the ultimate 'Sieve'! We use it before querying a slow database. If Bloom says 'No', we save a slow disk trip! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "If Bloom says 'Yes', what do we do next?",
        "options": [
          "Query the actual slow database to be sure",
          "Stop",
          "Panic"
        ],
        "correctAnswer": "Query the actual slow database to be sure"
      },
      {
        "type": "code_fill_in",
        "questionText": "Definitely not present.",
        "codeSnippet": "False ___",
        "correctAnswer": "Negative"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Sift through the bits! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is it in there?\"",
        "options": [
          "MAYBE!",
          "No.",
          "0"
        ],
        "correctAnswer": "MAYBE!"
      }
    ]
  },
  {
    "order": 65,
    "title": "Bloom Math",
    "desc": "Balancing K and M.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Elite Formula! The False Positive rate (ε) depends on N (keys), M (bits), and K (hashes). 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Optimal K = (M/N) * ln(2). About 7 hashes is common! 🦜\"",
        "codeSnippet": "m = - (n * ln(p)) / (ln(2)^2)"
      },
      {
        "type": "multiple_choice",
        "questionText": "What happens if K is too large?",
        "options": [
          "The bit array fills up with 1s too fast",
          "Accuracy becomes 100%",
          "Search becomes O(1)"
        ],
        "correctAnswer": "The bit array fills up with 1s too fast"
      },
      {
        "type": "match_following",
        "questionText": "Match Variable Impacts!",
        "pairs": [
          {
            "key": "Larger M",
            "value": "Lower Error"
          },
          {
            "key": "Larger N",
            "value": "Higher Error"
          },
          {
            "key": "Optimal K",
            "value": "Best balance"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The natural log constant used in Bloom math.",
        "codeSnippet": "ln( ___ );",
        "correctAnswer": "2"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Rule of Thumb: For 1% error rate, you need about 10 bits per item! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Probability of a bit being 0 after N insertions?",
        "options": [
          "(1 - 1/M)^(NK)",
          "0",
          "0.5"
        ],
        "correctAnswer": "(1 - 1/M)^(NK)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Bits per item letter.",
        "codeSnippet": "m / ___",
        "correctAnswer": "n"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Fine-tune the frequency! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Math ready?\"",
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
    "order": 66,
    "title": "Counting Bloom Filters",
    "desc": "How to delete birds logically.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Deletion Fix! Standard Bloom Filters can't delete (because multiple items might share the same bit). 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Counting Bloom Filter uses an array of COUNTERS (4 bits each) instead of just single bits. 🦜\"",
        "codeSnippet": "counters[h(x)]++; // Insert\ncounters[h(x)]--; // Delete"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why use Counters instead of Bits?",
        "options": [
          "To allow deletion by decrementing",
          "To make it faster",
          "To store strings"
        ],
        "correctAnswer": "To allow deletion by decrementing"
      },
      {
        "type": "match_following",
        "questionText": "Match Filter Types!",
        "pairs": [
          {
            "key": "Standard",
            "value": "1 bit (Insert/Query)"
          },
          {
            "key": "Counting",
            "value": "Multiple bits (Delete too)"
          },
          {
            "key": "Space",
            "value": "Counting > Standard"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Decrement the counter during removal.",
        "codeSnippet": "counters[idx] ___ 1;",
        "correctAnswer": "-="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Usage: To handle dynamic memberships where birds leave frequently! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What is 'Counter Overflow'?",
        "options": [
          "When too many items hash to same slot (> 15 for 4-bit)",
          "When the array is full",
          "CPU error"
        ],
        "correctAnswer": "When too many items hash to same slot (> 15 for 4-bit)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Operation to check if count > 0.",
        "codeSnippet": "if (counters[idx] ___ 0)",
        "correctAnswer": ">"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Nests can be empty again! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is it deleted?\"",
        "options": [
          "DECREMENTED!",
          "No.",
          "0"
        ],
        "correctAnswer": "DECREMENTED!"
      }
    ]
  },
  {
    "order": 67,
    "title": "Count-Min Sketch",
    "desc": "Estimating word frequencies.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Sketcher! How do you count frequencies of BILLIONS of words without using O(N) memory? Count-Min Sketch! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"It uses d rows of counters. Increment each hash slot. To query, return the MINIMUM value of all its' slots! 🦜\"",
        "codeSnippet": "estimate = min(row[0][h0(x)], row[1][h1(x)]...)"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why take the MINIMUM across rows?",
        "options": [
          "Because collisions only ever OVER-estimate counts",
          "Because it's faster",
          "To find the smallest bird"
        ],
        "correctAnswer": "Because collisions only ever OVER-estimate counts"
      },
      {
        "type": "match_following",
        "questionText": "Match Sketch Logic!",
        "pairs": [
          {
            "key": "Rows (d)",
            "value": "Different Hash groups"
          },
          {
            "key": "Columns (w)",
            "value": "Counter range"
          },
          {
            "key": "Result",
            "value": "Estimated Frequency"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The function to find the smallest estimate.",
        "codeSnippet": "freq = ___(r1, r2, r3);",
        "correctAnswer": "min"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"It's widely used for finding 'Top-K Heavy Hitters' in streaming data (like trending topics on Twitter)! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Does Count-Min Sketch ever under-estimate?",
        "options": [
          "No, it always over-estimates or is exact",
          "Yes",
          "Only and always"
        ],
        "correctAnswer": "No, it always over-estimates or is exact"
      },
      {
        "type": "code_fill_in",
        "questionText": "Term for high frequency items.",
        "codeSnippet": "Heavy ___",
        "correctAnswer": "Hitters"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Sketch the stream! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"How many birds?\"",
        "options": [
          "APPROXIMATELY!",
          "Five.",
          "Zero."
        ],
        "correctAnswer": "APPROXIMATELY!"
      }
    ]
  },
  {
    "order": 68,
    "title": "HyperLogLog",
    "desc": "Counting unique birds in the sky.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Cardinality Bird! How do you count how many UNIQUE visitors came to your site (out of trillions) using only 1.5 KB of RAM? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"HyperLogLog! It looks at the maximum number of leading ZEROS in the binary hash of the items. 🦜\"",
        "codeSnippet": "zeros = leadingZeros(hash(x));\nmaxZeros = max(maxZeros, zeros);"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the core intuition of HyperLogLog?",
        "options": [
          "Rare events (like 10 leading zeros) imply many items exist",
          "Logging data to a hyperdrive",
          "Counting pixels"
        ],
        "correctAnswer": "Rare events (like 10 leading zeros) imply many items exist"
      },
      {
        "type": "match_following",
        "questionText": "Match HLL Terms!",
        "pairs": [
          {
            "key": "Leading Zeros",
            "value": "The rare signal"
          },
          {
            "key": "Buckets",
            "value": "Averaging grouped data"
          },
          {
            "key": "1.5 KB",
            "value": "RAM needed for 1B items"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The mathematical constant for HLL estimation.",
        "codeSnippet": "0.7213 / (1 + 1.079/___ );",
        "correctAnswer": "m"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Error rate is only around 2%! Perfect for analytics where 'roughly 1 million' is as good as 'exactly 1,000,042'. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Which is more space efficient?",
        "options": [
          "HyperLogLog",
          "HashSet",
          "Linked List"
        ],
        "correctAnswer": "HyperLogLog"
      },
      {
        "type": "code_fill_in",
        "questionText": "Name of the algorithm.",
        "codeSnippet": "___ LogLog",
        "correctAnswer": "Hyper"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Count the impossible! 🦜\""
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
    "order": 69,
    "title": "Big Data Hashing",
    "desc": "Real world scale.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Empire of Hashing! Google uses Bloom Filters for BigTable. Facebook uses them for their caches. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"If a user looks up a non-existent URL, the Bloom filter tells the server 'No' in RAM, preventing a slow database hit. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "In distributed systems, hashing acts as a:",
        "options": [
          "Gatekeeper / Sieve",
          "Battery",
          "Display"
        ],
        "correctAnswer": "Gatekeeper / Sieve"
      },
      {
        "type": "match_following",
        "questionText": "Match Big Data Uses!",
        "pairs": [
          {
            "key": "PostgreSQL",
            "value": "Hash Joins"
          },
          {
            "key": "Cassandra",
            "value": "Bloom filter lookups"
          },
          {
            "key": "Redis",
            "value": "HyperLogLog counts"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The term for reducing disk I/O with hashing.",
        "codeSnippet": "\"S\" + \"___\" ;",
        "correctAnswer": "IEVE"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This is the 'Elite' level of Backend Engineering. It's not just about searching; it's about predicting! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is hashing required for Blockchain?",
        "options": [
          "SQUAWK YES! Every block has a hash.",
          "No",
          "Only in crypto"
        ],
        "correctAnswer": "SQUAWK YES! Every block has a hash."
      },
      {
        "type": "code_fill_in",
        "questionText": "Hashing for file syncing.",
        "codeSnippet": "___ -sums",
        "correctAnswer": "Check"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The world is mapped! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are you scaling?\"",
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
    "order": 70,
    "title": "Master Point (Hashing 7)",
    "desc": "Bloom bird status confirmed.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"STAGE 7 COMPLETE! You've mastered Bloom Filters, Count-Min Sketch, and the magic of 1.5KB HyperLogLog. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Which structure tells you if an item is 'Definitely Not' there?",
        "options": [
          "Bloom Filter",
          "HyperLogLog",
          "Count-Min Sketch"
        ],
        "correctAnswer": "Bloom Filter"
      },
      {
        "type": "multiple_choice",
        "questionText": "Result of Bloom filter on success?",
        "options": [
          "Maybe",
          "Yes",
          "True"
        ],
        "correctAnswer": "Maybe"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"You are a Bloom Bird! In Stage 8, we dive into Hashing for Large Data: Geometric and Locality Sensitive! 🦜\""
      },
      {
        "type": "match_following",
        "questionText": "Match the Rank!",
        "pairs": [
          {
            "key": "Stage 7",
            "value": "Bloom Bird"
          },
          {
            "key": "Stage 8",
            "value": "Spatial Falcon"
          },
          {
            "key": "Next",
            "value": "LSH Legend"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Signatures Signed.",
        "codeSnippet": "7 * ___ ;",
        "correctAnswer": "100"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The sky is the limit! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Enter Geometric Hashing?",
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
        "questionText": "Final Estimation?",
        "options": [
          "Map!",
          "Done.",
          "0"
        ],
        "correctAnswer": "Map!"
      }
    ]
  }
];

module.exports = stage7;
