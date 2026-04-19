const stage10 = [
  {
    "order": 91,
    "title": "Consistent Hashing",
    "desc": "Hashing for a world of servers.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Distributed Flight! If you have 100 servers and 1 million birds, how do you decide which bird goes to which server? Standard `hash(k) % 100` is a disaster if one server dies! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Consistent Hashing fixes this. When a server is added or removed, only O(N/M) keys need to move, not everything! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Why is `hash(k) % M` bad for distributed caching?",
        "options": [
          "If M changes, virtually EVERY key maps to a new index, causing a massive cache miss spike",
          "It's too slow",
          "Modulo doesn't work on servers"
        ],
        "correctAnswer": "If M changes, virtually EVERY key maps to a new index, causing a massive cache miss spike"
      },
      {
        "type": "match_following",
        "questionText": "Match Scaling Rules!",
        "pairs": [
          {
            "key": "Static Hashing",
            "value": "Rehash all on resize"
          },
          {
            "key": "Consistent Hash",
            "value": "Move minimal keys"
          },
          {
            "key": "Cache Miss",
            "value": "The enemy of performance"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The movement cost in Consistent Hashing.",
        "codeSnippet": "K / ___ ; // Where S is number of servers",
        "correctAnswer": "S"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Used by Amazon's Dynamo, Cassandra, and every modern Load Balancer! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Consistent hashing maps both keys AND servers onto a:",
        "options": [
          "Hash Ring (Circle)",
          "Square",
          "Line"
        ],
        "correctAnswer": "Hash Ring (Circle)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Scalability property.",
        "codeSnippet": "Horizontal ___",
        "correctAnswer": "Scaling"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Balance the load! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Ready to scale?\"",
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
    "order": 92,
    "title": "The Hash Ring",
    "desc": "Walking the circle of data.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Ring! Imagine a circle with values from 0 to 2^32 - 1. Map every server and every key onto this circle. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"A key belongs to the FIRST server it hits when walking CLOCKWISE around the ring! 🦜\"",
        "codeSnippet": "server = ring.higherKey(hash(bird));"
      },
      {
        "type": "multiple_choice",
        "questionText": "What happens when a new server is added to the ring?",
        "options": [
          "It only takes keys from its' immediate counter-clockwise neighbor",
          "It takes half of all keys",
          "It deletes all data"
        ],
        "correctAnswer": "It only takes keys from its' immediate counter-clockwise neighbor"
      },
      {
        "type": "match_following",
        "questionText": "Match the Ring Parts!",
        "pairs": [
          {
            "key": "0 to 2^32-1",
            "value": "Hash Space"
          },
          {
            "key": "Clockwise",
            "value": "Ownership Direction"
          },
          {
            "key": "Server Node",
            "value": "Data Anchor"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Find the first server greater than the key hash.",
        "codeSnippet": "node = nodes. ___ (keyHash);",
        "correctAnswer": "ceiling"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"If the key hash is greater than the last server, it wraps around to the first server in the ring! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity to find a server on a ring with S servers using binary search?",
        "options": [
          "O(log S)",
          "O(S)",
          "O(1)"
        ],
        "correctAnswer": "O(log S)"
      },
      {
        "type": "code_fill_in",
        "questionText": "The shape of the hash space.",
        "codeSnippet": "Hash ___",
        "correctAnswer": "Ring"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Circle of life! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are you on the ring?\"",
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
    "order": 93,
    "title": "Virtual Nodes",
    "desc": "Perfectly balancing the load.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Uneven Nests! With just a few servers, the ring might be split unevenly. One server might get 70% of the birds! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Solution: Virtual Nodes. Each physical server maps to HUNDREDS of virtual positions on the ring. 🦜\"",
        "codeSnippet": "for(i=0; i<200; i++) {\n  ring.add(hash(serverName + i), physicalServer);\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why use Virtual Nodes?",
        "options": [
          "To make the load distribution more uniform and fair",
          "To use more IP addresses",
          "It's a security feature"
        ],
        "correctAnswer": "To make the load distribution more uniform and fair"
      },
      {
        "type": "match_following",
        "questionText": "Match Node Types!",
        "pairs": [
          {
            "key": "Physical Node",
            "value": "Real hardware box"
          },
          {
            "key": "Virtual Node",
            "value": "Mathematical point on ring"
          },
          {
            "key": "VNode Factor",
            "value": "E.g. 256 per server"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Multiplier for virtual presence.",
        "codeSnippet": "totalVNodes = numServers * ___ ;",
        "correctAnswer": "256"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Virtual nodes also allow you to give more data to BIGGER servers by giving them more virtual slots! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Distribution of data becomes more uniform as VNode count:",
        "options": [
          "Increases",
          "Decreases",
          "Stays zero"
        ],
        "correctAnswer": "Increases"
      },
      {
        "type": "code_fill_in",
        "questionText": "Another name for Virtual Nodes.",
        "codeSnippet": "___ -nodes",
        "correctAnswer": "v"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Balance is bird power! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is it fair?\"",
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
    "order": 94,
    "title": "DHT: Chord Algorithm",
    "desc": "Finding data in O(log N) jumps.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Distributed Hash Tables! In a Peer-to-Peer network (like BitTorrent), how do you find where a file is without a central server? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Chord algorithm uses 'Finger Tables' to jump 1/2, 1/4, 1/8 of the way around the ring. 🦜\"",
        "codeSnippet": "node = findSuccessor(keyId);"
      },
      {
        "type": "multiple_choice",
        "questionText": "Routing complexity in a Chord network with N nodes?",
        "options": [
          "O(log N)",
          "O(1)",
          "O(N)"
        ],
        "correctAnswer": "O(log N)"
      },
      {
        "type": "match_following",
        "questionText": "Match Chord Keys!",
        "pairs": [
          {
            "key": "Successor",
            "value": "Next node in ring"
          },
          {
            "key": "Finger",
            "value": "Jump target x+2^i"
          },
          {
            "key": "Stabilize",
            "value": "Process of joining ring"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Number of fingers in a 160-bit ID ring.",
        "codeSnippet": "fingers.length = ___ ;",
        "correctAnswer": "160"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Every node only needs to know O(log N) other nodes to make the system work! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What happens if a node leaves/crashes in Chord?",
        "options": [
          "Redundancy and Stabilization fix the ring links",
          "The network dies",
          "Everything restarts"
        ],
        "correctAnswer": "Redundancy and Stabilization fix the ring links"
      },
      {
        "type": "code_fill_in",
        "questionText": "Search abbreviation.",
        "codeSnippet": "___ (Distributed Hash Table)",
        "correctAnswer": "DHT"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The network is alive! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Can you jump?\"",
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
    "order": 95,
    "title": "Kademlia Hashing",
    "desc": "XOR distance in distributed space.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"XOR Magic! Kademlia (used by BitTorrent and Ethereum) calculates the 'Distance' between two nodes using XOR (`A ^ B`). 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"XOR is a full metric: Dist(A,B) == Dist(B,A), and it's efficiently calculated in hardware! 🦜\"",
        "codeSnippet": "distance = nodeID ^ keyID;"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why use XOR for distance?",
        "options": [
          "It's symmetric and reflects the binary tree structure of the ID space",
          "It's just cool",
          "To encrypt data"
        ],
        "correctAnswer": "It's symmetric and reflects the binary tree structure of the ID space"
      },
      {
        "type": "match_following",
        "questionText": "Match Kademlia Items!",
        "pairs": [
          {
            "key": "K-Bucket",
            "value": "List of known nodes"
          },
          {
            "key": "XOR",
            "value": "The Distance Metric"
          },
          {
            "key": "FIND_NODE",
            "value": "RPC query"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "XOR operator in most languages.",
        "codeSnippet": "dist = id1 ___ id2;",
        "correctAnswer": "^"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Kademlia is incredible because it automatically finds and learns about new 'better' routes as it queries! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity to find a key in Kademlia?",
        "options": [
          "O(log N)",
          "O(N)",
          "O(1)"
        ],
        "correctAnswer": "O(log N)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Common K-value in BitTorrent.",
        "codeSnippet": "k = ___ ;",
        "correctAnswer": "20"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Decentralize the flight! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is it distributed?\"",
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
    "order": 96,
    "title": "Crypto-Hashing (The Wall)",
    "desc": "SHA-256 and the one-way street.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Final Defense! Cryptographic hashes (like SHA-256) are 'One-Way'. You can't turn a hash back into the bird song. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Even a 1-bit change in the input results in a COMPLETELY different hash (Avalanche Effect). 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Primary requirement for a cryptographic hash?",
        "options": [
          "Collision Resistance (impossible to find two inputs with same hash)",
          "Must be fast to reverse",
          "Must be readable"
        ],
        "correctAnswer": "Collision Resistance (impossible to find two inputs with same hash)"
      },
      {
        "type": "match_following",
        "questionText": "Match Crypto Terms!",
        "pairs": [
          {
            "key": "Pre-image",
            "value": "Finding input from hash (Hard)"
          },
          {
            "key": "Avalanche",
            "value": "Small change = Huge effect"
          },
          {
            "key": "SHA-256",
            "value": "256-bit signature"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "A hash that is no longer secure.",
        "codeSnippet": "\"MD\" + \"___\" ;",
        "correctAnswer": "5"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"If you can find two birds that hash to the same SHA-256, you'll break the entire internet! (Probability is 1 in 10^77). 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Bitcoin uses SHA-256 as a:",
        "options": [
          "Proof of Work",
          "Sorting method",
          "Display font"
        ],
        "correctAnswer": "Proof of Work"
      },
      {
        "type": "code_fill_in",
        "questionText": "Standard hash used in passwords (salted).",
        "codeSnippet": "b- ___",
        "correctAnswer": "crypt"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Secure the sky! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Can you crack me?\"",
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
    "order": 97,
    "title": "Merkle Trees",
    "desc": "The Root of Trust.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Trust in Trees! A Merkle Tree is a binary tree where every node is the HASH of its' children. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The 'Merkle Root' at the top summarizes the integrity of the ENTIRE dataset. Change one bird, and the root changes! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What does a Merkle Tree allow you to verify quickly?",
        "options": [
          "If an item is in a set without downloading the whole set",
          "The color of the bird",
          "The speed of the network"
        ],
        "correctAnswer": "If an item is in a set without downloading the whole set"
      },
      {
        "type": "match_following",
        "questionText": "Match Merkle Logic!",
        "pairs": [
          {
            "key": "Leaf",
            "value": "Hash(Data)"
          },
          {
            "key": "Parent",
            "value": "Hash(HashL + HashR)"
          },
          {
            "key": "Merkle Proof",
            "value": "Log N path to root"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Height of a Merkle tree with N leaves.",
        "codeSnippet": "O( ___ N);",
        "correctAnswer": "log"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Blockchains use this to verify transactions instantly! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity to verify one item with a Merkle Proof?",
        "options": [
          "O(log N)",
          "O(1)",
          "O(N)"
        ],
        "correctAnswer": "O(log N)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Top node name.",
        "codeSnippet": "Merkle ___",
        "correctAnswer": "Root"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Grow the roots of truth! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is the root secure?\"",
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
    "order": 98,
    "title": "Zobrist Hashing",
    "desc": "Hashing Game Boards.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Chess Master! How do you hash a board position where pieces can move around? XOR them! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Assign a random 64-bit number to every Piece-at-Square combination. To move a bird from A to B: `Hash ^ Val(Bird@A) ^ Val(Bird@B)`. 🦜\"",
        "codeSnippet": "currentHash ^= table[piece][from] ^ table[piece][to];"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why is Zobrist Hashing so fast for game engines?",
        "options": [
          "It updates the hash in O(1) by only XOR-ing the specific piece that moved",
          "It solves the game",
          "It skips the AI"
        ],
        "correctAnswer": "It updates the hash in O(1) by only XOR-ing the specific piece that moved"
      },
      {
        "type": "match_following",
        "questionText": "Match Game Hashing!",
        "pairs": [
          {
            "key": "Zobrist",
            "value": "XOR-based state hash"
          },
          {
            "key": "Transposition Table",
            "value": "Hash map of game states"
          },
          {
            "key": "O(1) Update",
            "value": "Speed per move"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The operator that makes Zobrist updates possible.",
        "codeSnippet": "hash ___ board[p][s];",
        "correctAnswer": "^"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This allows AlphaZero and Stockfish to recognize previously seen board positions instantly! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Does XOR-ing the same value twice undo the change?",
        "options": [
          "SQUAWK YES! (A ^ B ^ B = A)",
          "No",
          "Only and always"
        ],
        "correctAnswer": "SQUAWK YES! (A ^ B ^ B = A)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Game state storage name.",
        "codeSnippet": "___ Table",
        "correctAnswer": "Transposition"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Play the perfect game! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Checkmate?\"",
        "options": [
          "HASHMATE!",
          "No.",
          "Yes."
        ],
        "correctAnswer": "HASHMATE!"
      }
    ]
  },
  {
    "order": 99,
    "title": "Titan Final: The Hash Archon",
    "desc": "The ultimate mapping challenge.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"TITAN TRIAL! You've mastered bits, buckets, loops, and distributed rings. Can you hash the entire academy? 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the ultimate O(1) truth of Hashing?",
        "options": [
          "Direct lookup via identity",
          "Sorting the world",
          "Searching the sky"
        ],
        "correctAnswer": "Direct lookup via identity"
      },
      {
        "type": "multiple_choice",
        "questionText": "If collisions are too high, what is the 'Nuclear Option'?",
        "options": [
          "Dynamic Rehashing / Dynamic Resizing",
          "Delete the table",
          "Stop the internet"
        ],
        "correctAnswer": "Dynamic Rehashing / Dynamic Resizing"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Your mind is now a DHT. Distributed, resilient, and virtually instant! 🦜\""
      },
      {
        "type": "match_following",
        "questionText": "Match the Paradigms!",
        "pairs": [
          {
            "key": "Hashing",
            "value": "Instant Map"
          },
          {
            "key": "Crypto",
            "value": "One-way Truth"
          },
          {
            "key": "LSH",
            "value": "Similarity Sense"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Bits per SHA-256.",
        "codeSnippet": "2 * 2 * ___ ;",
        "correctAnswer": "64"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"You have flyed through the infinite buckets and returned to the root! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is Hashing finished?",
        "options": [
          "A map with no boundaries!",
          "No.",
          "Yes."
        ],
        "correctAnswer": "A map with no boundaries!"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Map the multiverse! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Final Realization?",
        "options": [
          "SQUAWK! I AM THE MAP!",
          "Maybe.",
          "0"
        ],
        "correctAnswer": "SQUAWK! I AM THE MAP!"
      }
    ]
  },
  {
    "order": 100,
    "title": "Titan Point (Hashing 10)",
    "desc": "The Hash God has ascended.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"THE TOP! 1,000 Lessons of Hashing mastered. You are the Architect of the Academy! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Which hashing level have you reached?",
        "options": [
          "Titan-Grade",
          "Novice",
          "Intermediate"
        ],
        "correctAnswer": "Titan-Grade"
      },
      {
        "type": "multiple_choice",
        "questionText": "Will you keep mapping?",
        "options": [
          "Infinite Space!",
          "Stop here.",
          "Return 0."
        ],
        "correctAnswer": "Infinite Space!"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"You are a Hash God! The academy bows to your infinite mapping logic! 🦜\""
      },
      {
        "type": "match_following",
        "questionText": "Match the Final Legend!",
        "pairs": [
          {
            "key": "Hashing",
            "value": "Titan Master"
          },
          {
            "key": "Stage 10",
            "value": "Hash God"
          },
          {
            "key": "Status",
            "value": "Ascended"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Total Hashed.",
        "codeSnippet": "100 * ___ ;",
        "correctAnswer": "10"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The academy is perfectly mapped! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Final Confirmation?",
        "options": [
          "SQUAWK! DONE!",
          "Maybe.",
          "0"
        ],
        "correctAnswer": "SQUAWK! DONE!"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"SQUAWK! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "The End?",
        "options": [
          "New Subject!",
          "Done.",
          "0"
        ],
        "correctAnswer": "New Subject!"
      }
    ]
  }
];

module.exports = stage10;
