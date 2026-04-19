const stage2 = [
  {
    "order": 11,
    "title": "Separate Chaining",
    "desc": "The Linked List bucket approach.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Chaining! If two birds want the same nest, they just share it! Each array slot contains a Linked List of keys. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Instead of a single value, `arr[index]` holds the HEAD of a list. 🦜\"",
        "codeSnippet": "List bucket = table[hash(key)];\nbucket.add(key);"
      },
      {
        "type": "multiple_choice",
        "questionText": "What data structure is usually used for buckets in Separate Chaining?",
        "options": [
          "Linked List",
          "Balanced Tree",
          "Another Hash Table"
        ],
        "correctAnswer": "Linked List"
      },
      {
        "type": "match_following",
        "questionText": "Match Chaining Terms!",
        "pairs": [
          {
            "key": "Bucket",
            "value": "An array slot"
          },
          {
            "key": "Chain",
            "value": "The Linked List"
          },
          {
            "key": "Head",
            "value": "First element in slot"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The type of array used in separate chaining.",
        "codeSnippet": "LinkedList<Node> table[___];",
        "correctAnswer": "size"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The size of the table can actually be SMALLER than the number of keys. α can be > 1! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the worst-case lookup time if all keys hash to the SAME index?",
        "options": [
          "O(N)",
          "O(1)",
          "O(log N)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Average chain length for N keys and M buckets.",
        "codeSnippet": "L = N / ___",
        "correctAnswer": "M"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Keep the chains short, fledgling! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is it chain time?\"",
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
    "order": 12,
    "title": "Chaining: Speedy Insertion",
    "desc": "Adding to the bucket at the front.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Fast Entry! In Chaining, we usually insert NEW keys at the FRONT (Head) of the bucket's linked list. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Inserting at the head takes O(1) time. No need to traverse the whole list! 🦜\"",
        "codeSnippet": "Node* newNode = new Node(key);\nnewNode->next = table[idx];\ntable[idx] = newNode;"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why insert at the head?",
        "options": [
          "It's O(1) complexity",
          "It sorts the list",
          "Pico likes the front"
        ],
        "correctAnswer": "It's O(1) complexity"
      },
      {
        "type": "match_following",
        "questionText": "Match Insertion Logic!",
        "pairs": [
          {
            "key": "O(1)",
            "value": "Insert time"
          },
          {
            "key": "idx",
            "value": "hash(key) % size"
          },
          {
            "key": "newNode->next",
            "value": "Link to old head"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The pointer update to make newNode the head.",
        "codeSnippet": "table[idx] = ___ ;",
        "correctAnswer": "newNode"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This constant-time insertion makes Hash Tables great for high-frequency data logging! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Does this handle duplicate keys?",
        "options": [
          "Must check whole list first (O(L))",
          "Automatically",
          "Duplicates are impossible"
        ],
        "correctAnswer": "Must check whole list first (O(L))"
      },
      {
        "type": "code_fill_in",
        "questionText": "Link new node to current head.",
        "codeSnippet": "newNode.next = ___ [index];",
        "correctAnswer": "table"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Hop to the front! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are you ahead?\"",
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
    "order": 13,
    "title": "Chaining: Searching",
    "desc": "Walking the bucket line.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Search! To find a key, first get the bucket index, then walk the Linked List until you find a match. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Complexity depends on 'L' (Average Chain Length). If the hash is good, L is very small! 🦜\"",
        "codeSnippet": "curr = table[idx];\nwhile(curr) {\n  if(curr->key == target) return curr->val;\n  curr = curr->next;\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Time complexity for a search in a bucket with L elements?",
        "options": [
          "O(L)",
          "O(1)",
          "O(N)"
        ],
        "correctAnswer": "O(L)"
      },
      {
        "type": "match_following",
        "questionText": "Match Search Stages!",
        "pairs": [
          {
            "key": "f(key) % M",
            "value": "Target Bucket"
          },
          {
            "key": "while(curr)",
            "value": "Chain Walk"
          },
          {
            "key": "Return Val",
            "value": "Found!"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Move to the next bird in the chain.",
        "codeSnippet": "curr = curr.___ ;",
        "correctAnswer": "next"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"With a Load Factor of 1.0, average L is 1. Search remains O(1) effectively! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What if the target key is NOT in the table?",
        "options": [
          "Walk until curr == NULL",
          "Instant fail",
          "CPU hangs"
        ],
        "correctAnswer": "Walk until curr == NULL"
      },
      {
        "type": "code_fill_in",
        "questionText": "Comparison operator.",
        "codeSnippet": "if (curr.key ___ target)",
        "correctAnswer": "=="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Walk with purpose! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Did you find the egg?\"",
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
    "order": 14,
    "title": "Chaining: Deletion",
    "desc": "Removing an link in the hash cage.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Deleting is just standard Linked List removal. Find the node and bypass it! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Use a 'prev' pointer or the 'next' of the previous node to link to the one after the deleted one. 🦜\"",
        "codeSnippet": "prev->next = target->next;\ndelete target;"
      },
      {
        "type": "multiple_choice",
        "questionText": "Primary complexity of deletion in Chaining?",
        "options": [
          "Search time + O(1) link update",
          "Instant",
          "O(N^2)"
        ],
        "correctAnswer": "Search time + O(1) link update"
      },
      {
        "type": "match_following",
        "questionText": "Match Delete Terms!",
        "pairs": [
          {
            "key": "Target",
            "value": "To be removed"
          },
          {
            "key": "Prev",
            "value": "The before bird"
          },
          {
            "key": "Bypass",
            "value": "Updating pointers"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The skip logic in deletion.",
        "codeSnippet": "prev->next = curr-> ___ ;",
        "correctAnswer": "next"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Chaining makes deletion easy. You don't have to worry about shifting other elements in the array! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What happens if you delete the HEAD of the list?",
        "options": [
          "Update the array slot to point to 2nd node",
          "Delete the whole table",
          "The list is broken"
        ],
        "correctAnswer": "Update the array slot to point to 2nd node"
      },
      {
        "type": "code_fill_in",
        "questionText": "Free the memory.",
        "codeSnippet": "___ (currNode);",
        "correctAnswer": "free"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Clean up the nest! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is it gone?\"",
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
    "order": 15,
    "title": "Space-Speed Tradeoff",
    "desc": "Balancing RAM and Ticks.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Great Balance! More buckets = More RAM used, but SHORTER chains (Faster speed). 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Fewer buckets = Less RAM, but LONGER chains (Slower speed). 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "In chaining, what happens if M (buckets) >> N (keys)?",
        "options": [
          "Most buckets are empty; Speed is O(1)",
          "Collisions increase",
          "The table crashes"
        ],
        "correctAnswer": "Most buckets are empty; Speed is O(1)"
      },
      {
        "type": "match_following",
        "questionText": "Match the Effects!",
        "pairs": [
          {
            "key": "More M",
            "value": "O(1) Search, High Memory"
          },
          {
            "key": "Less M",
            "value": "O(N) Search, Low Memory"
          },
          {
            "key": "Optimal",
            "value": "α around 0.75-1.0"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Average complexity with good M.",
        "codeSnippet": "O( 1 + ___ ) where α is ratio.",
        "correctAnswer": "alpha"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This tradeoff is the reason why choosing the initial capacity and load threshold is so important! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Chaining's space complexity (Total)?",
        "options": [
          "O(M + N)",
          "O(M)",
          "O(N^2)"
        ],
        "correctAnswer": "O(M + N)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Ratio of keys to buckets.",
        "codeSnippet": "n ___ m",
        "correctAnswer": "/"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Find the elite sweet spot! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are you balanced?\"",
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
    "order": 16,
    "title": "Managing Lists",
    "desc": "Avoiding the O(N) trap.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Beware the giant tail! If a single bucket becomes too large, our O(1) dream turns into an O(N) nightmare! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This happens with BAD hash functions that map many keys to the same index. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What causes 'clustering' in a specific bucket?",
        "options": [
          "Poor hash function",
          "Too much data",
          "Slow CPU"
        ],
        "correctAnswer": "Poor hash function"
      },
      {
        "type": "match_following",
        "questionText": "Match Bucket Problems!",
        "pairs": [
          {
            "key": "Skewed",
            "value": "Uneven distribution"
          },
          {
            "key": "Clustered",
            "value": "Values bunching up"
          },
          {
            "key": "Degenerate",
            "value": "List becomes an O(N) Array"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Check for chain length threshold.",
        "codeSnippet": "if (bucketSize[idx] ___ 10) rehash();",
        "correctAnswer": ">"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Elite implementations monitor variance in chain lengths to detect issues! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Ideal variance for chain lengths?",
        "options": [
          "Low (all chains roughly same length)",
          "High",
          "Infinite"
        ],
        "correctAnswer": "Low (all chains roughly same length)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Complexity when only 1 bucket is used.",
        "codeSnippet": "O( ___ )",
        "correctAnswer": "N"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Stay distributed! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are your chains long?\"",
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
    "order": 17,
    "title": "Vector Buckets",
    "desc": "Chaining with Dynamic Arrays.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Dynamic Arrays! Instead of Linked Lists, some use `std::vector` or `ArrayList` as buckets. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Benefit: Cache Locality! Arrays are contiguous in memory. Drawback: Resizing an array can be expensive compared to list node creation. 🦜\"",
        "codeSnippet": "vector<Node> table[size];\ntable[idx].push_back(item);"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why would vectors be faster for small L?",
        "options": [
          "Better CPU cache usage",
          "Less memory for pointers",
          "Pico likes vectors"
        ],
        "correctAnswer": "Better CPU cache usage"
      },
      {
        "type": "match_following",
        "questionText": "Match Bucket Types!",
        "pairs": [
          {
            "key": "LinkedList",
            "value": "Easy O(1) front insert"
          },
          {
            "key": "Vector",
            "value": "Contiguous memory"
          },
          {
            "key": "Pointer",
            "value": "Indirection cost"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Array of vectors definition.",
        "codeSnippet": "vector<T> table ___ size ___ ;",
        "correctAnswer": "[]"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"C++ `std::unordered_map` typically uses linked-list chaining, but vector chaining is an elite optimization for cache-sensitive high-speed systems! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Downside of Vector buckets?",
        "options": [
          "Removing elements from middle is O(L)",
          "Higher initial RAM",
          "Slow search"
        ],
        "correctAnswer": "Removing elements from middle is O(L)"
      },
      {
        "type": "code_fill_in",
        "questionText": "C++ vector addition.",
        "codeSnippet": "table[idx]. ___ (key);",
        "correctAnswer": "push_back"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Stay in the cache! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are you local?\"",
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
    "order": 18,
    "title": "Tree-ify Buckets",
    "desc": "The Java 8+ optimization.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Tree-ification! Java 8 introduced a brilliant fix. If a bucket's list gets too long (>= 8), it transforms into a Balanced Binary Search Tree! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This ensures that even in the worst case (all keys collide), the search is O(log N) instead of O(N). 🦜\"",
        "codeSnippet": "if (binSize >= TREEIFY_THRESHOLD) treeify(tab, i);"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the worst-case lookup in a Java 8 HashMap?",
        "options": [
          "O(log N)",
          "O(N)",
          "O(1)"
        ],
        "correctAnswer": "O(log N)"
      },
      {
        "type": "match_following",
        "questionText": "Match Thresholds!",
        "pairs": [
          {
            "key": "8",
            "value": "Treeify"
          },
          {
            "key": "6",
            "value": "Untreeify (back to list)"
          },
          {
            "key": "O(log N)",
            "value": "Tree Search"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The threshold for tree transformation.",
        "codeSnippet": "static final int TREEIFY_THRESHOLD = ___ ;",
        "correctAnswer": "8"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This makes the hash map immune to 'Hash Collision Attacks' where malicious users purposefully pick keys with same hash! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Does this require keys to be comparable (like having a < b)?",
        "options": [
          "Yes, for the Binary Search Tree",
          "No",
          "Only and always"
        ],
        "correctAnswer": "Yes, for the Binary Search Tree"
      },
      {
        "type": "code_fill_in",
        "questionText": "Logarithmic complexity symbol.",
        "codeSnippet": "O( ___ N)",
        "correctAnswer": "log"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Branch out for safety! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are you a tree bird?\"",
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
    "order": 19,
    "title": "Cache Locality",
    "desc": "Why pointers are expensive.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Cache Locality! Memory access for Linked Lists involves a 'Pointer Chase'. Nodes are scattered; the CPU has to wait for RAM to fetch each one. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This is why Chaining (with Lists) can be slower than Open Addressing (where elements are in the array directly) for small data! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What is a 'Cache Miss'?",
        "options": [
          "When data is not in CPU cache; need to fetch from slow RAM",
          "A bug in the cache",
          "A lost bird"
        ],
        "correctAnswer": "When data is not in CPU cache; need to fetch from slow RAM"
      },
      {
        "type": "match_following",
        "questionText": "Match Locality Items!",
        "pairs": [
          {
            "key": "Sequential Array",
            "value": "High Locality"
          },
          {
            "key": "Linked Nodes",
            "value": "Low Locality"
          },
          {
            "key": "L1 Cache",
            "value": "Very Fast Memory"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The enemy of fast pointer navigation.",
        "codeSnippet": "\"CACHE\" + \"_\" + \"___\" ;",
        "correctAnswer": "MISS"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Even if the number of operations is O(1), constant time overhead from cache misses can add up in high-perf systems! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Which is more cache-friendly?",
        "options": [
          "vector-based chaining",
          "list-based chaining",
          "They are the same"
        ],
        "correctAnswer": "vector-based chaining"
      },
      {
        "type": "code_fill_in",
        "questionText": "Memory level closest to CPU core.",
        "codeSnippet": "___ Cache",
        "correctAnswer": "L1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Speed at the speed of light! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are you fast?\"",
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
    "order": 20,
    "title": "Master Point (Hashing 2)",
    "desc": "Chain crawler status confirmed.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"STAGE 2 COMPLETE! You've mastered the Linked Bucket, head insertions, and even tree-ification. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Average chain length in optimal hashing?",
        "options": [
          "1",
          "N",
          "0"
        ],
        "correctAnswer": "1"
      },
      {
        "type": "multiple_choice",
        "questionText": "What happens if a list becomes too long in Java 8?",
        "options": [
          "Turns into a Balanced Tree",
          "Crashes",
          "Resizes the table"
        ],
        "correctAnswer": "Turns into a Balanced Tree"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"You are a Chain Crawler! In Stage 3, we explore Open Addressing - the land of probing and jumping! 🦜\""
      },
      {
        "type": "match_following",
        "questionText": "Match the Rank!",
        "pairs": [
          {
            "key": "Stage 2",
            "value": "Chain Crawler"
          },
          {
            "key": "Stage 3",
            "value": "Probing Pilot"
          },
          {
            "key": "Next",
            "value": "Open Trails"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Links Crawled.",
        "codeSnippet": "2 * ___ ;",
        "correctAnswer": "100"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The web grows thicker! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Enter Open Addressing?",
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
        "questionText": "Final Link?",
        "options": [
          "Next!",
          "Done.",
          "0"
        ],
        "correctAnswer": "Next!"
      }
    ]
  }
];

module.exports = stage2;
