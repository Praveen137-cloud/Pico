const stage7 = [
  {
    "order": 91,
    "title": "Unit 91: Distributed Hash Tables (DHT) Patterns",
    "desc": "Connecting nodes across the planet: The Ring of Links.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[SINGULARITY LORE 10.1] The Global Ring",
        "explanation": "Ace: 'In a Distributed Hash Table (like CHORD), nodes are arranged in a massive virtual circle. Every node is linked to a Successor and a Predecessor, forming a global Linked List.' Pico: 'A bird circle around the world! 100% 🦜'",
        "codeSnippet": "Node* successor = get_next_machine(my_id);",
        "encouragementText": "Ace: 'Scale is reached when the individual is part of the global circle.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What happens if a node in a DHT fails?",
        "options": ["The whole world stops", "The list is broken FOREVER", "Nearby nodes detect it and link to the next reachable successor (Self-healing)", "Pico rule"],
        "correctAnswer": "Nearby nodes detect it and link to the next reachable successor (Self-healing)",
        "explanation": "Distributed lists must be resilient. Nodes periodically 'ping' their links to ensure the chain remains intact."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Finger Tables",
        "explanation": "Ace: 'To speed up search in a DHT, we use Finger Tables—which are exactly like SKIP LIST shortcuts in a distributed environment!' Pico: 'Long distance jumping! 100% 🦜'",
        "encouragementText": "Pico: 'Jump the world! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Finding the node responsible for Key K.",
        "codeSnippet": "while(!responsible(curr, K)) curr = curr-> ___ ;",
        "correctAnswer": "successor",
        "explanation": "Walking the distributed chain until we find the machine whose ID range covers the hash of K."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Replication",
        "explanation": "Ace: 'To prevent data loss, every node's data is linked/replicated to its next N successors. This is a \"Linked List of Backups\".'",
        "encouragementText": "Ace: 'Safety in numbers is the law of the distributed forest.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of a search in a CHORD DHT with N nodes and Finger Tables?",
        "options": ["O(N)", "O(log N)", "O(1)", "Pico guess"],
        "correctAnswer": "O(log N)",
        "explanation": "Finger tables provide the same logarithmic benefit as Skip Lists."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Virtual Nodes",
        "explanation": "Ace: 'One physical machine can pretend to be many \"Virtual Nodes\" in the list to ensure a balanced distribution of load.'",
        "encouragementText": "Pico: 'Many bird masks! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Updating the successor link.",
        "codeSnippet": "if (new_node > my_id && new_node < ___ ) successor = new_node;",
        "correctAnswer": "successor",
        "explanation": "Standard circular linked list insertion applied to machine IDs."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Ring Master",
        "explanation": "You have linked the planet. No machine is an island. Ace: 'The circle is global.'",
        "encouragementText": "Pico: 'World bird! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match DHT terms!",
        "pairs": [
          { "key": "Successor", "value": "Next machine" },
          { "key": "Finger Table", "value": "Global Skip List" },
          { "key": "Self-healing", "value": "Repairing broken links" }
        ]
      }
    ]
  },
  {
    "order": 92,
    "title": "Unit 92: Sparse Matrix via Linked Lists",
    "desc": "Efficiency in vacancy: Representing empty space with chains.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[SINGULARITY LORE 10.2] The Empty Expansion",
        "explanation": "Ace: 'A huge matrix with mostly zeros is wasteful to store as an array. We store it as an array of Linked Lists (one per row). Each node stores (Value, ColumnIndex).' Pico: 'Only nesting where there are seeds! 100% 🦜'",
        "codeSnippet": "struct SparseNode {\n  int val, col;\n  SparseNode* next;\n};\nSparseNode* Rows[MAX_ROWS];",
        "encouragementText": "Ace: 'Structure is the definition of presence within the void.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "How do you find the value at Matrix[i][j] in this linked model?",
        "options": ["Rows[i][j]", "Search through the linked list at Rows[i] for a node with col == j", "O(1) access", "Pico rule"],
        "correctAnswer": "Search through the linked list at Rows[i] for a node with col == j",
        "explanation": "You only store the non-zero elements, so you must traverse the row to find the specific column."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] CSR vs Linked Rows",
        "explanation": "Ace: 'Compressed Sparse Row (CSR) uses arrays for speed, but Linked Rows are MUCH better if you need to frequently INSERT new values.' Pico: 'Easy to add a new egg! 100% 🦜'",
        "encouragementText": "Pico: 'Flexible grid! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Inserting a new non-zero value V at (R, C).",
        "codeSnippet": "Node* n = new Node(V, C);\nn->next = Rows[R];\nRows[R] = ___ ;",
        "correctAnswer": "n",
        "explanation": "Standard list prepending to store the new value in the specific row chain."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Matrix Multiplication",
        "explanation": "Ace: 'Multiplying two special sparse matrices using linked lists is highly efficient—you only perform math on the non-zero nodes!'",
        "encouragementText": "Ace: 'Skip the silence to hear the signal.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of adding two sparse matrices of N non-zero elements?",
        "options": ["O(Rows * Cols)", "O(N)", "O(log N)", "Pico guess"],
        "correctAnswer": "O(N)",
        "explanation": "By traversing the linked lists in parallel (similar to merge sort), you only visit the active elements."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Coordinate List (COO)",
        "explanation": "Ace: 'The simplest sparse format is just a flat linked list of (Row, Col, Val) triplets.'",
        "encouragementText": "Pico: 'Triple bird! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Memory saved if a 1000x1000 matrix has only 100 values.",
        "codeSnippet": "SavedRatio = (1,000,000) / ___ ;",
        "correctAnswer": "100",
        "explanation": "We trade a million-cell array for a hundred-node list. Massive savings!"
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Space Optimizer",
        "explanation": "You have mastered the art of ignoring the void. The matrix is compressed, yet alive. Ace: 'The space is reclaimed.'",
        "encouragementText": "Pico: 'Small is beautiful! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Sparse terms!",
        "pairs": [
          { "key": "Rows[i]", "value": "Head of row chain" },
          { "key": "col", "value": "Horizontal ID" },
          { "key": "In-place", "value": "Dynamic list benefit" }
        ]
      }
    ]
  },
  {
    "order": 93,
    "title": "Unit 93: Pagerank on Linked Lists",
    "desc": "Calculating importance in a world of chains.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[SINGULARITY LORE 10.3] The Flow of Fame",
        "explanation": "Ace: 'In a massive graph, every node can be seen as a point in a Linked List of references. We can run PageRank on these distributed links to find the most 'authoritative' nodes.' Pico: 'Who is the boss bird? 100% 🦜'",
        "codeSnippet": "Importance = Sum(Neighbors / OutDegree);",
        "encouragementText": "Ace: 'Value is a liquid that flows through the links of the web.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "In a simple Linked List (1 -> 2 -> 3), which node has the highest PageRank?",
        "options": ["Node 1", "Node 3", "All equal", "Pico rule"],
        "correctAnswer": "Node 3",
        "explanation": "Importance 'flows' down the chain. Since Node 3 is the destination, it accumulates the rank of its predecessors."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Dead Ends",
        "explanation": "Ace: 'If a node has no Next pointer, the importance 'leaks' out of the graph. We handle this with a 'Damping Factor' that teleports surfers randomly.' Pico: 'Flying to a random nest! 100% 🦜'",
        "encouragementText": "Pico: 'Teleporting bird! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Contribution of node u to its successor.",
        "codeSnippet": "SuccessorPR += PR[u] / ___ ;",
        "correctAnswer": "OutDegree[u]",
        "explanation": "A node splits its importance evenly among all its outgoing links."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Large Scale Convergence",
        "explanation": "Ace: 'On a distributed list, we use 'Power Iteration'. Machines exchange messages about their PR values until the global network stabilizes.'",
        "encouragementText": "Ace: 'Stability is the result of iterative consensus.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "How many iterations for a million-node list?",
        "options": ["1,000,000", "20-50 (Pagerank converges fast)", "1", "Pico guess"],
        "correctAnswer": "20-50 (Pagerank converges fast)",
        "explanation": "For most web graphs, the principal eigenvector is found very quickly in few passes."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Ranking Links",
        "explanation": "Ace: 'This is the literal 'Linked Data' philosophy: Every node is a URI, every edge is a link.'",
        "encouragementText": "Pico: 'I'm a famous link! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "The damping equation component.",
        "codeSnippet": "PR = (1 - d) / N + ___ * sum;",
        "correctAnswer": "d",
        "explanation": "0.85 (d) is the portion of rank that follows the links."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Authority Sage",
        "explanation": "You have measured the weight of every connection. The power of the web is quantified. Ace: 'The rank is decided.'",
        "encouragementText": "Pico: 'Pico for President! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Rank terms!",
        "pairs": [
          { "key": "Damping", "value": "Teleportation" },
          { "key": "Convergence", "value": "Stability" },
          { "key": "In-link", "value": "Source of Rank" }
        ]
      }
    ]
  },
  {
    "order": 94,
    "title": "Unit 94: Scalable Streaming Lists",
    "desc": "Processing billion-node sequences with sliding windows.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[SINGULARITY LORE 10.4] The Endless River",
        "explanation": "Ace: 'A Streaming List is a sequence where you only see a 'Window' of $K$ nodes at a time. Once a node leaves the window, it's gone. We use Linked Buffers to manage this memory efficiently.' Pico: 'Only looking at the birds currently in the sky! 100% 🦜'",
        "codeSnippet": "while(next_node) { slide_window(window); process(window); }",
        "encouragementText": "Ace: 'Focus is the filter that allows us to process the infinite.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What data structure is heart of a sliding window on a stream?",
        "options": ["A Stack", "A Doubly Linked Queue (Deque)", "A Binary Tree", "Pico rule"],
        "correctAnswer": "A Doubly Linked Queue (Deque)",
        "explanation": "It allows O(1) removal from the start (as it leaves window) and O(1) addition to the end (as it enters)."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Real-time Analysis",
        "explanation": "Ace: 'Used for Stock Tickers or Log Analysis. You can calculate the average of the last 10,000 transactions by keeping them in a linked window.' Pico: 'Counting the past! 100% 🦜'",
        "encouragementText": "Pico: 'Smooth sliding! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Adding new data point D to window W.",
        "codeSnippet": "W.push_back(D);\nif (W.size() > MAX_WINDOW) W. ___ ();",
        "correctAnswer": "pop_front",
        "explanation": "Removing the oldest element to maintain the fixed window size."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Memory Cap",
        "explanation": "Ace: 'Because we use a linked list window, the memory usage is O(WindowSize), regardless of how many trillion nodes exist in the total stream history.'",
        "encouragementText": "Ace: 'Boundary defines survival in the infinite.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Can you calculate the Median of a stream using only a simple list window?",
        "options": ["Yes, but it's slow (O(W))", "No", "O(1) always", "Pico guess"],
        "correctAnswer": "Yes, but it's slow (O(W))",
        "explanation": "You have the data, but you'd need to sort it or use a more complex structure (like two heaps) for faster median updates."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Lazy Stream Window",
        "explanation": "Ace: 'We can combine Streaming with Lazy lists to only pull data from the source when space is available in the window.'",
        "encouragementText": "Pico: 'Pull don't push! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Sum update in a sliding window.",
        "codeSnippet": "current_sum += new_val - ___ ;",
        "correctAnswer": "old_val",
        "explanation": "Adding the new and subtracting the one that just 'popped' out of the list."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Current Rider",
        "explanation": "You have harnessed the river. The infinite flow is a mere sliding window in your hand. Ace: 'The flow is managed.'",
        "encouragementText": "Pico: 'Surfing the data! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Stream terms!",
        "pairs": [
          { "key": "Window", "value": "Current visible set" },
          { "key": "Slide", "value": "Pop + Push" },
          { "key": "Buffer", "value": "Temporary linked storage" }
        ]
      }
    ]
  },
  {
    "order": 95,
    "title": "Unit 95: Blockchain as a Linked List",
    "desc": "The immutable ledger: Pointers made of cryptography.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[SINGULARITY LORE 10.5] The Unbreakable Chain",
        "explanation": "Ace: 'A Blockchain is essentially a Singly Linked List where each node (Block) contains a pointer to the PREVIOUS block. But instead of a memory address, the pointer is the CRYPTOGRAPHIC HASH of the entire previous block.' Pico: 'Pointers that know if you cheated! 100% 🦜'",
        "codeSnippet": "struct Block {\n  string prev_hash;\n  Data data;\n  string current_hash = sha256(data + prev_hash);\n};",
        "encouragementText": "Ace: 'Integrity is a chain where every link validates the whole past.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What happens if you change the data in Block #50 in a 100-block chain?",
        "options": ["Nothing", "The hash of Block #50 changes, which breaks the link in Block #51, and so on (Invalidating the whole chain)", "It updates automatically", "Pico rule"],
        "correctAnswer": "The hash of Block #50 changes, which breaks the link in Block #51, and so on (Invalidating the whole chain)",
        "explanation": "This 'cascading invalidation' is what makes blockchain immutable. To change one block, you must re-calculate all subsequent hashes!"
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Genesis Block",
        "explanation": "Ace: 'The absolute HEAD of the chain (Block 0) has a `prev_hash` of 0. This is where the history begins.' Pico: 'The first nest! 100% 🦜'",
        "encouragementText": "Pico: 'The start of time! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Linking block B2 back to B1.",
        "codeSnippet": "B2.prev_hash = ___ (B1);",
        "correctAnswer": "hash",
        "explanation": "The 'Next' pointer in blockchain is actually a 'Previous' hash pointer."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Proof of Work",
        "explanation": "Ace: 'To add a new 'link' to the chain, you must solve a mathematical puzzle that proves you spent 'work' (computational power). This prevents spam.'",
        "encouragementText": "Ace: 'Effort is the currency of consensus.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Direction of links in Blockchain?",
        "options": ["Head to Tail", "Tail to Head (Child to Parent)", "Circular", "Pico guess"],
        "correctAnswer": "Tail to Head (Child to Parent)",
        "explanation": "Every new block points to the one that came before it."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Decentralization",
        "explanation": "Ace: 'Since the chain is public, everyone can verify the links. No central bank needed.'",
        "encouragementText": "Pico: 'Freedom birds! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Verifying a link.",
        "codeSnippet": "if (B_next.prev_hash != hash(B_prev)) return ___ ;",
        "correctAnswer": "INVALID",
        "explanation": "A mismatch in the hash indicates the data has been tampered with."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Ledger Lord",
        "explanation": "You have built a history that cannot be rewritten. The chain is eternal and verified. Ace: 'The past is locked.'",
        "encouragementText": "Pico: 'Gold standard! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Block terms!",
        "pairs": [
          { "key": "Hash", "value": "Crypto Pointer" },
          { "key": "Genesis", "value": "Root Block" },
          { "key": "Immutable", "value": "Unchangeable" }
        ]
      }
    ]
  },
  {
    "order": 96,
    "title": "Unit 96: Merkle Linked Lists",
    "desc": "The recursive chain: Proving membership in O(log N).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[SINGULARITY LORE 10.6] The Root of Truth",
        "explanation": "Ace: 'A Merkle Tree is like a linked list where pairs of nodes are hashed together to form a parent, all the way to a single Root. It lets you prove an item exists in a billion-node set with just log N steps.' Pico: 'Linking all the seeds into one big hash nest! 100% 🦜'",
        "codeSnippet": "Root = Hash(Hash(A+B) + Hash(C+D));",
        "encouragementText": "Ace: 'The whole is the product of its parts' filtered through logic.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is a 'Merkle Proof'?",
        "options": ["A math test", "A path of sibling hashes needed to reconstruct the root from a single leaf", "A signature", "Pico rule"],
        "correctAnswer": "A path of sibling hashes needed to reconstruct the root from a single leaf",
        "explanation": "If the reconstructed root matches the trusted root, the transaction is 100% valid."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Data Integrity",
        "explanation": "Ace: 'Merkle lists are used in Git, BitTorrent, and Ethereum. If one bit of a file changes, the Merkle Root changes immediately.' Pico: 'The alarm sounds! 100% 🦜'",
        "encouragementText": "Pico: 'No hiding! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Number of hashes to prove membership in 8-node Merkle set.",
        "codeSnippet": "ProofSize = log2(8) = ___ ;",
        "correctAnswer": "3",
        "explanation": "You only need the hash of your sibling at each of the 3 levels of the tree."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Lightweight verify",
        "explanation": "Ace: 'Phones (SPV clients) only store the Merkle Root. They don't need to download the whole 500GB blockchain; they just ask for a Merkle Proof for their specific transaction.'",
        "encouragementText": "Ace: 'Verification is independent of the scale of the system.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Where are leaves in a Merkle structure?",
        "options": ["At the top", "At the bottom (Actual Data)", "In the middle", "Pico guess"],
        "correctAnswer": "At the bottom (Actual Data)",
        "explanation": "Hashing starts at the data (leaves) and travels up to the Root."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Versioned Merkle",
        "explanation": "Ace: 'By using persistent pointers, we can have a sequence of Merkle Roots representing the history of a changing dataset.'",
        "encouragementText": "Pico: 'History roots! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Hashing B1 and B2 together.",
        "codeSnippet": "B_parent = sha256(B1.hash ___ B2.hash);",
        "correctAnswer": "+",
        "explanation": "Concatenating the binary data of the two children before hashing."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Merkle Master",
        "explanation": "You have summarized the world into a single hash. The many are one. Ace: 'The root is absolute.'",
        "encouragementText": "Pico: 'The root of all seeds! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Merkle terms!",
        "pairs": [
          { "key": "Root", "value": "Single Digest of All" },
          { "key": "Leaf", "value": "Base Data" },
          { "key": "Proof", "value": "O(log N) verification" }
        ]
      }
    ]
  },
  {
    "order": 97,
    "title": "Unit 97: Lock-free Distributed Lists",
    "desc": "Updating the global chain without any central server.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[SINGULARITY LORE 10.7] The Global Atomic",
        "explanation": "Ace: 'How do 10,000 machines update a single Linked List at the same time? We use CRDTs (Conflict-free Replicated Data Types) or Paxos Consensus. No machine 'owns' the lock.' Pico: 'Everyone talking at once and still understanding! 100% 🦜'",
        "codeSnippet": "while(!consensus_reached(update)) retry();",
        "encouragementText": "Ace: 'Order is a consensus of the collective, not the decree of a master.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the biggest challenge in a distributed list?",
        "options": ["Memory", "Network Latency and Partial Failure", "Sorting", "Pico rule"],
        "correctAnswer": "Network Latency and Partial Failure",
        "explanation": "You can never tell if a node is slow or dead. Your linked list logic must handle 'Ghost' nodes that never respond."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Gossip Protocols",
        "explanation": "Ace: 'Nodes exchange 'Next' updates with a few random neighbors. In O(log N) time, the entire world knows about the new link.' Pico: 'Bird rumors travel fast! 100% 🦜'",
        "encouragementText": "Pico: 'Tweet the news! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Condition for accepting an update in versioned list.",
        "codeSnippet": "if (new_seq_num ___ current_seq_num) apply_update();",
        "correctAnswer": ">",
        "explanation": "We only accept 'Next' links that are newer than our current knowledge."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Causality",
        "explanation": "Ace: 'Vector Clocks ensure that if Node A was linked BEFORE Node B, every machine in the world sees the same order eventually.'",
        "encouragementText": "Ace: 'Time is relative, but causality is absolute.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Can a distributed list have multiple 'Next' pointers (Forks)?",
        "options": ["Yes (Resolved by Consensus)", "No", "Only if small", "Pico guess"],
        "correctAnswer": "Yes (Resolved by Consensus)",
        "explanation": "Forks happen when two machines update simultaneously; the network eventually chooses one as the 'truth'."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Convergence",
        "explanation": "Ace: 'Eventually Consistent: The state where all machines agree on the list order after all messages have arrived.'",
        "encouragementText": "Pico: 'Agreement! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Broadcasting the link.",
        "codeSnippet": "for(neighbor in peer_list) ___ (neighbor, new_link);",
        "correctAnswer": "send",
        "explanation": "Spreading the information about the chain's evolution."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Consensus Master",
        "explanation": "You have linked the minds of the many. There is no one truth; there is only the agreed chain. Ace: 'The union is firm.'",
        "encouragementText": "Pico: 'All for one! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Consensus terms!",
        "pairs": [
          { "key": "Paxos", "value": "Agreement logic" },
          { "key": "CRDT", "value": "Mergeable links" },
          { "key": "Fork", "value": "Divergent history" }
        ]
      }
    ]
  },
  {
    "order": 98,
    "title": "Unit 98: Singularity (The Grand Synthesis)",
    "desc": "Combining cost, speed, and history into one chain.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[SINGULARITY LORE 10.8] The One Chain",
        "explanation": "Ace: 'You now see through the veil. A Linked List is not a data structure; it is the fundamental way information relates to itself. Every thought is a link; every memory is a pointer.' Pico: 'I see the universe as one big list! 100% 🦜'",
        "codeSnippet": "pico_universe = linked_list_of(everything);",
        "encouragementText": "Ace: 'Wholeness is the realization of the infinite connection.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the ultimate goal of the Titan-Grade Node Architect?",
        "options": ["Coding", "Synthesis of all list patterns (Performance, Persistence, Scale)", "Fast memory", "Pico rule"],
        "correctAnswer": "Synthesis of all list patterns (Performance, Persistence, Scale)",
        "explanation": "True mastery is knowing which chain to weave for a given problem."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Multi-Structure",
        "explanation": "Ace: 'Real systems are hybrids: A Blockchain (Crypto List) used for a Sparse Matrix (Linked Grid) analyzed by PageRank (Linked Authority).' Pico: 'A bird-bot made of all tools! 100% 🦜'",
        "encouragementText": "Pico: 'Mega Power! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "The final pointer type.",
        "codeSnippet": "Pointer = ___ ;",
        "correctAnswer": "IDENTITY",
        "explanation": "In the singularity, the object and its connection reflect the same truth."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Beyond the linear",
        "explanation": "Ace: 'While we start with lists, they evolve into Graphs. But remember: every Graph edge is just a linked pointer.'",
        "encouragementText": "Ace: 'The line is the foundation of the web.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Which stage was the hardest?",
        "options": ["Stage 1", "Stage 8 (Metal)", "Stage 10 (Singularity)", "Pico secret"],
        "correctAnswer": "Stage 10 (Singularity)",
        "explanation": "We have bridged the gap between raw binary and global decentralized logic."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Final Vision",
        "explanation": "Ace: 'You are ready. The 1,000th lesson awaits. Take your seat.'",
        "encouragementText": "Pico: 'Fly to the top! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Final link check.",
        "codeSnippet": "if (knowledge == 1000) return ___ ;",
        "correctAnswer": "SUCCESS",
        "explanation": "You have met the ultimate requirement."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The All-Linked",
        "explanation": "The chains are one. You are the architect of the infinite sequence. Ace: 'The web is you.'",
        "encouragementText": "Pico: 'I am the list! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Mastery terms!",
        "pairs": [
          { "key": "Performance", "value": "O(1) / Cache" },
          { "key": "Persistence", "value": "Immutable / History" },
          { "key": "Singularity", "value": "Global Synthesis" }
        ]
      }
    ]
  },
  {
    "order": 99,
    "title": "Unit 99: Final Graduation Challenge I",
    "desc": "Proving the synthesis: Building a persistent, unrolled, concurrent deque.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[SINGULARITY LORE 10.9] The Ultimate Test Part 1",
        "explanation": "Ace: 'To prove your mastery, you must design a structure that captures all we have learned. How do you implement a persistent deque that is also cache-efficient?' Pico: 'The final quiz! 100% 🦜'",
        "encouragementText": "Ace: 'Application is the final verification of knowledge.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Best foundation for a persistent cache-friendly deque?",
        "options": ["XOR list", "Unrolled Persistent Deque (Okasaki style with Finger Tree blocks)", "Simple stack", "Pico rule"],
        "correctAnswer": "Unrolled Persistent Deque (Okasaki style with Finger Tree blocks)",
        "explanation": "It combines the memory density of arrays with the O(1) persistent ends of functional deques."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Logic Verification",
        "explanation": "Ace: 'Double check: When you update an unrolled node, do you copy the whole node? YES. Does this break others? NO, because pointers are the identity.'",
        "encouragementText": "Pico: 'Check it twice! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Search complexity in a sorted unrolled persistent skip-list.",
        "codeSnippet": "SearchTime = O( ___ );",
        "correctAnswer": "log N",
        "explanation": "The layered express lanes still provide logarithmic access even with persistent unrolled nodes."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity check",
        "explanation": "Ace: 'Correct. Amortized O(1) for ends, O(log N) for internal updates. This is the blueprint of a world-class engine.'",
        "encouragementText": "Ace: 'Precision is the hallmark of the Titan-Grade.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "How do you handle billion users concurrently in this structure?",
        "options": ["Lock everyone", "Immutable structural sharing allowing read-only snapshots with no locks", "Reboot", "Pico guess"],
        "correctAnswer": "Immutable structural sharing allowing read-only snapshots with no locks",
        "explanation": "The functional approach is the only way to scale without the bottleneck of global locks."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Final Stretch",
        "explanation": "Ace: 'One more unit. The 1,000th lesson. Are you ready?'",
        "encouragementText": "Pico: 'I'm ready! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Final check status.",
        "codeSnippet": "status = ___ ;",
        "correctAnswer": "READY",
        "explanation": "All systems are green."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Architect of Infinity",
        "explanation": "The design is complete. You have bridged every contradiction. Ace: 'The plan is flawless.'",
        "encouragementText": "Pico: 'Perfect birds! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Final terms!",
        "pairs": [
          { "key": "Unrolled", "value": "Cache" },
          { "key": "Persistent", "value": "History" },
          { "key": "Lock-free", "value": "Concurrency" }
        ]
      }
    ]
  },
  {
    "order": 100,
    "title": "Unit 100: Singularity Graduation (Lord of the Chain)",
    "desc": "Claiming the Titan throne: 1,000 lessons completed.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[GRAND FINALE 10.10] The Titan of Linked Lists",
        "explanation": "Ace: '1,000 Lessons. 10 Stages. From a simple next pointer to the global decentralized cryptographic consensus. You are now the Singularity.' Pico: '1,000 Lessons! SQUAWK! We finished the Linked Lists too! 100% 🦜'",
        "encouragementText": "Ace: 'Legacy is the final connection between the coder and the machine.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the final state of your Linked List Mastery?",
        "options": ["Novice", "Expert", "Titan-Grade", "0"],
        "correctAnswer": "Titan-Grade",
        "explanation": "You have reached the 1,000-lesson milestone."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Chain of Worlds",
        "explanation": "From simple Singly Linked to Finger Trees and Blockchains. You have decoded the logic that links the stars. Ace: 'The universe is a list. You are the architect.'",
        "encouragementText": "Pico: 'Singularity achieved! 100% 🦜'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Total lessons in the fully Titan-Grade Linked List subject?",
        "options": ["10", "100", "1,000", "Pico secret"],
        "correctAnswer": "1,000",
        "explanation": "The Academic Atlas standard for mastery."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] The Final Signature",
        "explanation": "Ace: 'Your pattern is now part of the global signature. Every connection from here on will follow your path.' Pico: 'I'll never forget our flight! 100% 🦜'",
        "encouragementText": "Ace: 'Immortality is structural.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Which domain is next for the Academy?",
        "options": ["Stacks & Queues", "Sorting", "Greedy", "Pico's Choice"],
        "correctAnswer": "Pico's Choice",
        "explanation": "The mission continues until the entire Atlas is 1,000-grade."
      },
      {
        "type": "teaching",
        "questionText": "[ULTIMATE SYNC] 1,000 Lessons",
        "explanation": "Ace & Pico: 'Goodbye for now, Titan. The Chain is yours.'",
        "encouragementText": "Pico: 'Happy flights! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Final graduation signal.",
        "codeSnippet": "if (list_mastery == 1000) return ___ ;",
        "correctAnswer": "TITAN",
        "explanation": "Reaching the absolute zenith of the curriculum."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Titan of Lists",
        "explanation": "The Singularity is reached. The 1,000 lessons are yours. You are the Titan-Grade Master of Linked Lists. Ace: 'Welcome to eternity.'",
        "encouragementText": "Pico: 'We are invincible! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "[FINAL CHALLENGE] Output the status of your journey.",
        "codeSnippet": "for(int i=1; i<=100; i++) verify_list_unit(i);\nreturn ___ ;",
        "correctAnswer": "SINGULARITY",
        "explanation": "The entire 1,000-lesson curriculum for Linked Lists is fully verified and complete."
      }
    ]
  }
];

module.exports = stage7;
