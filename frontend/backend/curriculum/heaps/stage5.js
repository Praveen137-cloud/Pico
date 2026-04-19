const stage5 = [
  {
    "order": 41,
    "title": "Huffman Coding Concept",
    "desc": "Saving space with greedy birds.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Huffman Magic! Standard characters use 8 bits (1 byte) each. But what if frequent letters used fewer bits? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Huffman Coding is a 'Greedy' algorithm that uses a MIN-HEAP to build an optimal prefix-free code! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What determines how many bits a character gets in Huffman coding?",
        "options": [
          "Its' frequency (Most frequent = Fewest bits)",
          "Its' alphabetically order",
          "Random choice"
        ],
        "correctAnswer": "Its' frequency (Most frequent = Fewest bits)"
      },
      {
        "type": "match_following",
        "questionText": "Match Huffman Terms!",
        "pairs": [
          {
            "key": "Frequent",
            "value": "Short code"
          },
          {
            "key": "Rare",
            "value": "Long code"
          },
          {
            "key": "Prefix-Free",
            "value": "No code is a start of another"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The tool used to pick the two least frequent nodes.",
        "codeSnippet": "pq = new ___ ();",
        "correctAnswer": "MinHeap"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This ensures that the total number of bits used to store a file is the ABSOLUTE MINIMUM! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Can '0' be the code for 'A' and '01' be the code for 'B' in Huffman?",
        "options": [
          "No (Violates Prefix-Free property)",
          "Yes",
          "Only and always"
        ],
        "correctAnswer": "No (Violates Prefix-Free property)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Huffman is a ___ algorithm.",
        "codeSnippet": "G ___",
        "correctAnswer": "reedy"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Compress to the max! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are you frequent?\"",
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
    "title": "Building Huffman Trees",
    "desc": "Merging the weakest birds.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Step-by-Step! 1. Create a leaf node for each char with its' frequency. 2. Put all nodes into a Min-Heap. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"3. Extract the two nodes with the LOWEST frequencies. 4. Create a new internal node with freq = sum of both. 5. Push back to heap. Repeat! 🦜\"",
        "codeSnippet": "while(pq.size() > 1) {\n  left = pq.pop();\n  right = pq.pop();\n  newNode = new Node(left.f + right.f, left, right);\n  pq.push(newNode);\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Which node is the root of the final tree?",
        "options": [
          "The last node remaining in the heap",
          "The first node added",
          "The most frequent character"
        ],
        "correctAnswer": "The last node remaining in the heap"
      },
      {
        "type": "match_following",
        "questionText": "Match Huffman Build Steps!",
        "pairs": [
          {
            "key": "Step 1",
            "value": "Heapify frequencies"
          },
          {
            "key": "Step 2",
            "value": "Join two smallest"
          },
          {
            "key": "Step 3",
            "value": "Insert internal node"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Total number of internal nodes created for N leaves.",
        "codeSnippet": "nodes = N - ___ ;",
        "correctAnswer": "1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The leaf nodes are characters; the internal nodes are just 'Connectors' for our hierarchy! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of building a Huffman tree of N characters?",
        "options": [
          "O(N log N)",
          "O(N)",
          "O(1)"
        ],
        "correctAnswer": "O(N log N)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Frequency of parent.",
        "codeSnippet": "f1 + ___",
        "correctAnswer": "f2"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Unify the flock! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is the tree built?\"",
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
    "order": 43,
    "title": "Huffman Encoding",
    "desc": "Walking the branches.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Generating Codes! Start at root. 1. Go Left? Add '0'. 2. Go Right? Add '1'. 3. Reach a leaf? That's your code! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Because we only store chars at leaves, no code can be a prefix of another! 🦜\"",
        "codeSnippet": "A: 0\nB: 10\nC: 110\nD: 111"
      },
      {
        "type": "multiple_choice",
        "questionText": "In the example A:0, B:10, C:110, D:111, which character is the MOST frequent?",
        "options": [
          "A (shortest code)",
          "D",
          "B"
        ],
        "correctAnswer": "A (shortest code)"
      },
      {
        "type": "match_following",
        "questionText": "Match the Bits!",
        "pairs": [
          {
            "key": "Left",
            "value": "0"
          },
          {
            "key": "Right",
            "value": "1"
          },
          {
            "key": "Leaf",
            "value": "Target Item"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Maximum length of a Huffman code for N characters.",
        "codeSnippet": "max = N - ___ ;",
        "correctAnswer": "1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Traversal to generate all codes takes O(N) since we visit each node in the tree once! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Given code '111', which path did we take?",
        "options": [
          "Right, Right, Right",
          "Left, Left, Left",
          "Up, Up, Up"
        ],
        "correctAnswer": "Right, Right, Right"
      },
      {
        "type": "code_fill_in",
        "questionText": "Type of tree traversal used.",
        "codeSnippet": "P + ___",
        "correctAnswer": "REORDER"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Decode the path! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are you binary?\"",
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
    "order": 44,
    "title": "Huffman Decoding",
    "desc": "Following the signposts.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Reading the bits! Start at the root. 1. Read a bit. 2. Move Left for '0', Right for '1'. 3. Reach leaf? Output char and start over at root! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Example: Decode '010' using A:0, B:10. '0' -> A. '10' -> B. Result: AB! 🦜\"",
        "codeSnippet": "while(bits) {\n  if(bit==0) curr=curr.left;\n  else curr=curr.right;\n  if(isLeaf(curr)) { print(curr.c); curr=root; }\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why is the decoder never 'ambiguous' (doesn't get confused between codes)?",
        "options": [
          "Prefix-Free property (leaves are only at end of paths)",
          "It's smart",
          "Fixed length bits"
        ],
        "correctAnswer": "Prefix-Free property (leaves are only at end of paths)"
      },
      {
        "type": "match_following",
        "questionText": "Match Decoding Logic!",
        "pairs": [
          {
            "key": "Input bit",
            "value": "Steering wheel (0=L, 1=R)"
          },
          {
            "key": "Internal Node",
            "value": "Junction (Continue)"
          },
          {
            "key": "Leaf Node",
            "value": "Destination (Reset)"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Action upon reaching a leaf.",
        "codeSnippet": "output(node.val);\ncurr = ___ ;",
        "correctAnswer": "root"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Decoding N bits takes exactly O(N) time! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Does the receiver need the Huffman Tree to decode?",
        "options": [
          "Yes, it must be sent with the file",
          "No",
          "Only if it's large"
        ],
        "correctAnswer": "Yes, it must be sent with the file"
      },
      {
        "type": "code_fill_in",
        "questionText": "Decoder reset point.",
        "codeSnippet": "Start at ___",
        "correctAnswer": "root"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Follow the line! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Can you read me?\"",
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
    "order": 45,
    "title": "Optimality & Entropy",
    "desc": "The limits of compression.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Is it perfect? Huffman is the OPTIMAL prefix code for individual characters. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Shannon's Entropy Theorem tells us the minimum bits needed to store info. Huffman gets very close! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the theoretical lower limit of bit storage called?",
        "options": [
          "Entropy",
          "Enthalpy",
          "Compression Ratio"
        ],
        "correctAnswer": "Entropy"
      },
      {
        "type": "match_following",
        "questionText": "Match the Science!",
        "pairs": [
          {
            "key": "Shannon",
            "value": "Entropy Theory"
          },
          {
            "key": "Huffman",
            "value": "Algorithm for coding"
          },
          {
            "key": "Optimality",
            "value": "Greedy choice in building"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Weighted Average Length of codes.",
        "codeSnippet": "L = sum( Freq_i * ___ );",
        "correctAnswer": "Length_i"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"If all characters are equally frequent, Huffman simply gives them all roughly the same number of bits! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "If you have 4 characters with 25% frequency each, code length for each will be:",
        "options": [
          "2 bits (00, 01, 10, 11)",
          "1 bit",
          "4 bits"
        ],
        "correctAnswer": "2 bits (00, 01, 10, 11)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Type of limit reached.",
        "codeSnippet": "Theoretical ___",
        "correctAnswer": "Lower"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The science of space! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are you optimized?\"",
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
    "order": 46,
    "title": "Header Overhead",
    "desc": "The price of the map.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Hidden Cost! To decode, the receiver needs the frequencies or the tree itself stored at the start of the file. This is the 'Header Overhead'. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"For small files, the header might be bigger than the compressed data, causing 'Negative Compression'! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "When should you NOT use Huffman coding?",
        "options": [
          "On tiny files where overhead > savings",
          "On giant files",
          "On images"
        ],
        "correctAnswer": "On tiny files where overhead > savings"
      },
      {
        "type": "match_following",
        "questionText": "Match File Parts!",
        "pairs": [
          {
            "key": "Header",
            "value": "Metadata / Map"
          },
          {
            "key": "Body",
            "value": "Compressed bits"
          },
          {
            "key": "Overhead",
            "value": "Cost of the method"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Total File Size.",
        "codeSnippet": "size = Body + ___ ;",
        "correctAnswer": "Header"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Large files spread the header cost across millions of bits, making it negligible! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What happens in real ZIP files?",
        "options": [
          "They use Huffman along with other tricks like LZ77",
          "They only use Huffman",
          "They don't use it"
        ],
        "correctAnswer": "They use Huffman along with other tricks like LZ77"
      },
      {
        "type": "code_fill_in",
        "questionText": "Overhead problem.",
        "codeSnippet": "___ Compression",
        "correctAnswer": "Negative"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Watch your baggage! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is your header heavy?\"",
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
    "order": 47,
    "title": "Static vs Dynamic",
    "desc": "One-pass vs Two-pass.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Types of Birdies! 'Static' Huffman reads the whole file once to find frequencies, then again to encode. This is Two-Pass. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"'Adaptive' or 'Dynamic' Huffman updates the tree on-the-fly as it reads char-by-char. It only needs ONE PASS! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Advantage of Static Huffman?",
        "options": [
          "Simpler and faster code generation",
          "One pass only",
          "No overhead"
        ],
        "correctAnswer": "Simpler and faster code generation"
      },
      {
        "type": "match_following",
        "questionText": "Match the Pass!",
        "pairs": [
          {
            "key": "Static",
            "value": "Two Pass (Scan then Code)"
          },
          {
            "key": "Adaptive",
            "value": "One Pass (Update-as-you-go)"
          },
          {
            "key": "FGK / Vitter",
            "value": "Dynamic Algorithms"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Which is more complex to implement?",
        "codeSnippet": "complex = ___ ;",
        "correctAnswer": "Adaptive"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Adaptive Huffman is great for streaming data (like VoIP) where you can't wait to see the 'end' of the file! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Does Adaptive Huffman need to send the tree in the header?",
        "options": [
          "No (Receiver builds the same tree dynamically!)",
          "Yes",
          "Maybe"
        ],
        "correctAnswer": "No (Receiver builds the same tree dynamically!)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Pass count for static.",
        "codeSnippet": "___ -Pass",
        "correctAnswer": "Two"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Adapt or go static! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are you adaptive?\"",
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
    "title": "Canonical Huffman",
    "desc": "Tidying the codes.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Clean Codes! A Canonical Huffman code is one where you only need to store the LENGTH of each code to reconstruct the tree! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"By forcing a specific order (e.g. lexicographical), we save even MORE space in the header! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What info is sent in a Canonical Huffman header?",
        "options": [
          "Just the length of bits for each char",
          "Full tree pointers",
          "Nothing"
        ],
        "correctAnswer": "Just the length of bits for each char"
      },
      {
        "type": "match_following",
        "questionText": "Match Huffman Variations!",
        "pairs": [
          {
            "key": "Standard",
            "value": "Any optimal prefix code"
          },
          {
            "key": "Canonical",
            "value": "Ordered bit-lengths"
          },
          {
            "key": "Advantage",
            "value": "Tiny header size"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Size of header in Canonical.",
        "codeSnippet": "O( ___ );",
        "correctAnswer": "N"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This is the secret behind the DEFLATE algorithm (used in PNG and GZIP)! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Can two different trees result in the same code lengths?",
        "options": [
          "Yes",
          "No",
          "Only in elite mode"
        ],
        "correctAnswer": "Yes"
      },
      {
        "type": "code_fill_in",
        "questionText": "Canonical header info.",
        "codeSnippet": "Code ___",
        "correctAnswer": "Lengths"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Tidy nests are tiny! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is it clean?\"",
        "options": [
          "CANONICAL YES!",
          "No.",
          "0"
        ],
        "correctAnswer": "CANONICAL YES!"
      }
    ]
  },
  {
    "order": 49,
    "title": "Application: ZIP/DEFLATE",
    "desc": "Real-world crushing.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Modern Crush! The DEFLATE algorithm uses Huffman coding on top of LZ77. LZ77 finds patterns; Huffman squashes the entropy! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "In a ZIP file, what does Huffman compress?",
        "options": [
          "Literals and Distance/Length codes from LZ77",
          "The whole file raw",
          "Images"
        ],
        "correctAnswer": "Literals and Distance/Length codes from LZ77"
      },
      {
        "type": "match_following",
        "questionText": "Match the Combo!",
        "pairs": [
          {
            "key": "LZ77",
            "value": "Dictionary compression"
          },
          {
            "key": "Huffman",
            "value": "Statistical compression"
          },
          {
            "key": "Result",
            "value": ".zip / .gz"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "DEFLATE = LZ77 + ___ ;",
        "codeSnippet": "logic = \"LZ77\" + \"___\" ;",
        "correctAnswer": "Huffman"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Even JPEGs use Huffman coding to store the final quantized data! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Does Huffman help with already compressed files like video?",
        "options": [
          "No (Entropy is already near max)",
          "Yes",
          "Only and always"
        ],
        "correctAnswer": "No (Entropy is already near max)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Standard compression format.",
        "codeSnippet": "D ___",
        "correctAnswer": "EFLATE"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Crush the data! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are you zipped?\"",
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
    "title": "Master Point (Heaps 5)",
    "desc": "Huffman hawk status confirmed.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"STAGE 5 COMPLETE! You've mastered Greedy Huffman, Static/Dynamic coding, and Canonical optimization. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Which heap type is used to build Huffman trees?",
        "options": [
          "Min-Heap",
          "Max-Heap",
          "Skew Heap"
        ],
        "correctAnswer": "Min-Heap"
      },
      {
        "type": "multiple_choice",
        "questionText": "Huffman generates what kind of codes?",
        "options": [
          "Prefix-Free Codes",
          "Fixed Length Codes",
          "Encrypted Codes"
        ],
        "correctAnswer": "Prefix-Free Codes"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"You are a Huffman Hawk! halfway through the Heaps mountain. In Stage 6, we explore Specialized Heaps: Weak, Beap, and Treaps! 🦜\""
      },
      {
        "type": "match_following",
        "questionText": "Match the Rank!",
        "pairs": [
          {
            "key": "Stage 5",
            "value": "Huffman Hawk"
          },
          {
            "key": "Stage 6",
            "value": "Treap Titan"
          },
          {
            "key": "Next",
            "value": "Heaps 6"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Halfway Points.",
        "codeSnippet": "5 * ___ ;",
        "correctAnswer": "100"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Keep diving deep! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Ready for Treaps?",
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
        "questionText": "Final Frequency?",
        "options": [
          "High!",
          "Low.",
          "0"
        ],
        "correctAnswer": "High!"
      }
    ]
  }
];

module.exports = stage5;
