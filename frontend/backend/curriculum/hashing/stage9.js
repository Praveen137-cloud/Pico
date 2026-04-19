const stage9 = [
  {
    "order": 81,
    "title": "Geometric Hashing",
    "desc": "Hashing shapes and structures.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Shape Shifter! Geometric Hashing allows us to find objects in an image even if they are rotated, translated, or scaled. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"It works by defining a COORD-SYSTEM using a subset of points (basis) and hashing the locations of all other points relative to that basis. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the goal of Geometric Hashing?",
        "options": [
          "Object recognition independent of transformation",
          "Finding the area of a circle",
          "Sorting points"
        ],
        "correctAnswer": "Object recognition independent of transformation"
      },
      {
        "type": "match_following",
        "questionText": "Match Geometric Steps!",
        "pairs": [
          {
            "key": "Basis",
            "value": "Reference frame"
          },
          {
            "key": "Invariant",
            "value": "Doesn't change with rotation"
          },
          {
            "key": "Hash Table",
            "value": "Stores basis-relative coords"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Coordinate relative to Basis (B1, B2).",
        "codeSnippet": "Point rel = getCoords(P, B1, B2);",
        "correctAnswer": "Point"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Used in computer vision and medical imaging to match MRI scans or identify protein structures! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "A 2D basis usually consists of how many points?",
        "options": [
          "2 points (defines a vector and origin)",
          "1 point",
          "100 points"
        ],
        "correctAnswer": "2 points (defines a vector and origin)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Property of being rotation/scale proof.",
        "codeSnippet": "___ -ance",
        "correctAnswer": "Invari"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Match the skeleton! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Do you fit?\"",
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
    "order": 82,
    "title": "Spatial Hashing",
    "desc": "Grid-based neighbor detection.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Game Physics! If you have thousands of birds flying, how do you find which ones might COLLIDE in O(1) time? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Divide the sky into a 2D GRID. Each cell has an index. Hash the (x, y) coordinates of every bird to find its' cell! 🦜\"",
        "codeSnippet": "int cellX = (int)(x / cellSize);\nint cellY = (int)(y / cellSize);\nhash = getHash(cellX, cellY);"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why use Spatial Hashing in games?",
        "options": [
          "To avoid O(N^2) 'every bird vs every bird' distance checks",
          "To make the background prettier",
          "To sort the birds by name"
        ],
        "correctAnswer": "To avoid O(N^2) 'every bird vs every bird' distance checks"
      },
      {
        "type": "match_following",
        "questionText": "Match Spatial Terms!",
        "pairs": [
          {
            "key": "cellSize",
            "value": "Width of 1 grid square"
          },
          {
            "key": "Bucket",
            "value": "List of objects in cell"
          },
          {
            "key": "Radius",
            "value": "Collision distance"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Convert float coord to integer grid index.",
        "codeSnippet": "xIdx = (int)(x ___ cellSize);",
        "correctAnswer": "/"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Typically, you check the bird's own cell and the 8 surrounding cells for potential collisions. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity to find neighbors with spatial hashing?",
        "options": [
          "O(1) average (assuming uniform density)",
          "O(N)",
          "O(log N)"
        ],
        "correctAnswer": "O(1) average (assuming uniform density)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Number of neighbor cells in a 2D grid.",
        "codeSnippet": "8 + 1 = ___",
        "correctAnswer": "9"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Navigate the grid! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is the sky clear?\"",
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
    "order": 83,
    "title": "Geohashing",
    "desc": "Latitude and Longitude to String.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Geohash! A way to represent a specific location on Earth (like 37.7, -122.4) as a short string (like '9q8yy'). 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Key Perk: Similar locations share similar PREFIXES. Geohash uses Z-Order Curves to map 2D coordinates into 1D strings! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Why is prefix-matching important in Geohashing?",
        "options": [
          "It allows for fast 'Nearby Search' by looking at shared string starts",
          "It looks cooler",
          "It's required by GPS"
        ],
        "correctAnswer": "It allows for fast 'Nearby Search' by looking at shared string starts"
      },
      {
        "type": "match_following",
        "questionText": "Match Geohash Precision!",
        "pairs": [
          {
            "key": "Length 1",
            "value": "Continental scale"
          },
          {
            "key": "Length 5",
            "value": "City scale"
          },
          {
            "key": "Length 10",
            "value": "Millimeter scale"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The base used for Geohash encoding (Base-X).",
        "codeSnippet": "base = ___ ;",
        "correctAnswer": "32"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Each char in a Geohash further subdivides the previous rectangle into 32 smaller ones! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Does Geohashing work perfectly across the 180-meridian/poles?",
        "options": [
          "No, there are edge cases where nearby points have different prefixes",
          "Yes",
          "Only in the North"
        ],
        "correctAnswer": "No, there are edge cases where nearby points have different prefixes"
      },
      {
        "type": "code_fill_in",
        "questionText": "Geohashes use ___ -Order curves.",
        "codeSnippet": "Z",
        "correctAnswer": "Z"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Map the globe! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Where are you?\"",
        "options": [
          "HERE!",
          "9q8yy.",
          "0"
        ],
        "correctAnswer": "9q8yy."
      }
    ]
  },
  {
    "order": 84,
    "title": "Z-Order Curves",
    "desc": "Interleaving bits for proximity.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Bit Interleaving! How do you map (X, Y) to a single sequence while keeping nearby points close together? Morton Coding! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Take bits of X and Y and interweave them: `x1 y1 x2 y2 x3 y3...`. The resulting path looks like a giant Z! 🦜\"",
        "codeSnippet": "Z = interleave(Xbits, Ybits);"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does Z-Order preserve?",
        "options": [
          "Locality (nearby 2D points stay closer in 1D order)",
          "Alphabetical order",
          "Memory parity"
        ],
        "correctAnswer": "Locality (nearby 2D points stay closer in 1D order)"
      },
      {
        "type": "match_following",
        "questionText": "Match Morton Math!",
        "pairs": [
          {
            "key": "Xbits",
            "value": "Horizontal position"
          },
          {
            "key": "Ybits",
            "value": "Vertical position"
          },
          {
            "key": "Interleave",
            "value": "Combining bits ABAB..."
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The letter the curve shape resembles.",
        "codeSnippet": "\"MORTON\" + \"_\" + \"___\" ;",
        "correctAnswer": "Z"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Other curves like the 'Hilbert Curve' are even better at preserving locality, but Z-order is much simpler to calculate! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Z-value of X=2 (10) and Y=3 (11)?",
        "options": [
          "1101 (Interleaved: y1 x1 y2 x2)",
          "0",
          "5"
        ],
        "correctAnswer": "1101 (Interleaved: y1 x1 y2 x2)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Common name for Z-Order encoding.",
        "codeSnippet": "___ -code",
        "correctAnswer": "Morton"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Curve through the data! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are you zigzagging?\"",
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
    "order": 85,
    "title": "Quadtrees vs Hashing",
    "desc": "Tree-based spatial vs Hash-based.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Decision! Should you use a Quadtree (recursive 4-way split) or Spatial Hashing (fixed grid)? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Spatial Hashing is better for UNIFORM density. Quadtrees are better for CLUMPED data (e.g. 1000 birds in 1 city, none in the desert). 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Which is O(1) for neighbor lookups in the best case?",
        "options": [
          "Spatial Hashing",
          "Quadtree (O(log N))",
          "Neither"
        ],
        "correctAnswer": "Spatial Hashing"
      },
      {
        "type": "match_following",
        "questionText": "Match Spatial Models!",
        "pairs": [
          {
            "key": "Uniform",
            "value": "Spatial Hash"
          },
          {
            "key": "Clumped",
            "value": "Quadtree / Octree"
          },
          {
            "key": "3D",
            "value": "8-way split (Octree)"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Number of children in a Quadtree node.",
        "codeSnippet": "Node* children[___];",
        "correctAnswer": "4"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Quadtrees adapt their 'resolution' to the data, while Hashing uses a fixed resolution cellSize! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What if objects move very FAST?",
        "options": [
          "Hashing is usually faster to update (just O(1) move)",
          "Quadtree is faster",
          "Birds stop flying"
        ],
        "correctAnswer": "Hashing is usually faster to update (just O(1) move)"
      },
      {
        "type": "code_fill_in",
        "questionText": "3D version of Quadtree.",
        "codeSnippet": "___ -tree",
        "correctAnswer": "Oc"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Partition the power! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Tree or Table?\"",
        "options": [
          "Depends on density!",
          "Tree.",
          "Table."
        ],
        "correctAnswer": "Depends on density!"
      }
    ]
  },
  {
    "order": 86,
    "title": "Grid Partitioning",
    "desc": "Managing the bin list.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Binning! In Spatial Hashing, avoid creating a massive 2D array if the world is giant. Use a single HashMap and hash the grid coordinates! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Key = Hash(cellX, cellY). Value = List of objects in that cell. 🦜\"",
        "codeSnippet": "long key = (long)x << 32 | y;\nvector<Bird*> &bucket = worldMap[key];"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why use a HashMap for the grid instead of a 2D array `grid[MAX][MAX]`?",
        "options": [
          "Saves memory if only a few cells are occupied (Sparse World)",
          "It's faster",
          "It's easier to walk"
        ],
        "correctAnswer": "Saves memory if only a few cells are occupied (Sparse World)"
      },
      {
        "type": "match_following",
        "questionText": "Match Grid Logic!",
        "pairs": [
          {
            "key": "Sparse",
            "value": "Most cells empty"
          },
          {
            "key": "Dense",
            "value": "Most cells full"
          },
          {
            "key": "Pairwise",
            "value": "Check birds in same cell"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Combine X and Y bits to form a 64-bit key.",
        "codeSnippet": "long key = (x << 32) ___ y;",
        "correctAnswer": "|"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This allows your game or simulation to have an 'Infinite World' while only using memory for the parts being used! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Wait... what if a bird is slightly across the line in the NEXT cell?",
        "options": [
          "Always check neighboring cells!",
          "Tell it to move back",
          "It doesn't exist"
        ],
        "correctAnswer": "Always check neighboring cells!"
      },
      {
        "type": "code_fill_in",
        "questionText": "Number of neighbor cells in 1D.",
        "codeSnippet": "___ - 1 and ___ + 1",
        "correctAnswer": "i"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Bin everything in place! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is it sparse?\"",
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
    "order": 87,
    "title": "The Hash Grid Complexity",
    "desc": "Analysis of the spatial speed.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Speed Check! If every cell has 'k' objects, a neighbor check takes O(9 * k) work. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"If density is uniform, k = N / TotalCells. The complexity is O(1) per object! 🦜\"\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What happens in the 'Bad Case' where all objects are in 1 cell?",
        "options": [
          "O(N^2) total work (Still doing pairwise check)",
          "O(N) total",
          "O(1)"
        ],
        "correctAnswer": "O(N^2) total work (Still doing pairwise check)"
      },
      {
        "type": "match_following",
        "questionText": "Match Spatial Complexity!",
        "pairs": [
          {
            "key": "Update",
            "value": "O(1) - change cell"
          },
          {
            "key": "Query",
            "value": "O(Const) Neighbors"
          },
          {
            "key": "Worst",
            "value": "Clustered O(N)"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The constant multiplier for the 3x3 surrounding cells.",
        "codeSnippet": "totalChecks = ___ * objectsPerCell;",
        "correctAnswer": "9"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Choosing the `cellSize` correctly is key. It should roughly match the interaction range or 'Size' of your birds! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What if `cellSize` is too SMALL?",
        "options": [
          "Birds span many cells; memory waste",
          "Lookup is too fast",
          "Collisions increase"
        ],
        "correctAnswer": "Birds span many cells; memory waste"
      },
      {
        "type": "code_fill_in",
        "questionText": "The ideal cell dimension variable.",
        "codeSnippet": "___ Size",
        "correctAnswer": "cell"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Analyze the flight! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is it efficient?\"",
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
    "order": 88,
    "title": "Point Cloud Hashing",
    "desc": "Matching 3D scans.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"3D Sight! LiDAR scans produce 'Point Clouds'. To find a 3D bird in a 3D sky, we use Voxel Hashing! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"A Voxel is a 3D pixel (Volume Pixel). We hash the (x, y, z) triplets to find containing voxels. 🦜\"",
        "codeSnippet": "long key = hash3D(x, y, z);\nvoxelStorage[key].add(point);"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is a Voxel?",
        "options": [
          "A 3D cube representing space",
          "A bird sound",
          "A type of graph"
        ],
        "correctAnswer": "A 3D cube representing space"
      },
      {
        "type": "match_following",
        "questionText": "Match 3D Terms!",
        "pairs": [
          {
            "key": "X, Y, Z",
            "value": "Point Coords"
          },
          {
            "key": "Voxel",
            "value": "3D Cell"
          },
          {
            "key": "Occupancy",
            "value": "Is bird present here?"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Number of neighbor voxels in a 3x3x3 block.",
        "codeSnippet": "int count = ___ ;",
        "correctAnswer": "27"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This is used in autonomous flight for real-time obstacle avoidance! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Main challenge of Voxel Hashing?",
        "options": [
          "Floating point precision and memory for sparse space",
          "Only 2D exists",
          "It's too fast"
        ],
        "correctAnswer": "Floating point precision and memory for sparse space"
      },
      {
        "type": "code_fill_in",
        "questionText": "The dimensionality of point clouds.",
        "codeSnippet": "___ D",
        "correctAnswer": "3"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"See in volumes! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is it 3D?\"",
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
    "order": 89,
    "title": "The Neighbor List",
    "desc": "Extracting the flock.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Final Retrieval! Once you have the grid, how do you get the actual list of neighbors? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Iterate the 3x3 grid around you. For every bird in those cells, check the EXACT distance using sqrt(dx^2 + dy^2). 🦜\"",
        "codeSnippet": "for(auto &bird : cell) {\n  if(dist(me, bird) < threshold) results.push_back(bird);\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why do the exact distance check AFTER the hash lookup?",
        "options": [
          "The hash lookup is a 'Broad Phase' filter; the distance is a 'Narrow Phase' check",
          "Hashing is slow",
          "Distance checks are faster than hashing"
        ],
        "correctAnswer": "The hash lookup is a 'Broad Phase' filter; the distance is a 'Narrow Phase' check"
      },
      {
        "type": "match_following",
        "questionText": "Match Collision Phases!",
        "pairs": [
          {
            "key": "Broad Phase",
            "value": "Hashing (Quickly discard far ones)"
          },
          {
            "key": "Narrow Phase",
            "value": "Precise Distance math"
          },
          {
            "key": "Threshold",
            "value": "Max collision radius"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The distance formula part.",
        "codeSnippet": "dx*dx ___ dy*dy;",
        "correctAnswer": "+"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This two-step process is how every physics engine (Unity, Unreal) handles high-speed collisions! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Result of a broad phase check?",
        "options": [
          "Candidate pairs",
          "Final collision",
          "A bird song"
        ],
        "correctAnswer": "Candidate pairs"
      },
      {
        "type": "code_fill_in",
        "questionText": "Square root function name.",
        "codeSnippet": "___ (sumOfSquares)",
        "correctAnswer": "sqrt"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Narrow it down! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Did we hit?\"",
        "options": [
          "SQUAWK CHECK!",
          "No.",
          "0"
        ],
        "correctAnswer": "SQUAWK CHECK!"
      }
    ]
  },
  {
    "order": 90,
    "title": "Master Point (Hashing 9)",
    "desc": "Geometric giant status confirmed.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"STAGE 9 COMPLETE! You've mastered Spatial Grids, Geohashes, Morton Curves, and Voxel Power. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Which structure converts Latitude/Longitude to a searchable string?",
        "options": [
          "Geohash",
          "Bloom Filter",
          "Polynomial Hash"
        ],
        "correctAnswer": "Geohash"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of Broad-Phase neighbors in a uniform world?",
        "options": [
          "O(1) per object",
          "O(N)",
          "O(log N)"
        ],
        "correctAnswer": "O(1) per object"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"You are a Geometric Giant! In the Final Stage, we ascend to Distributed Hashing and the DHT-Master Class! 🦜\""
      },
      {
        "type": "match_following",
        "questionText": "Match the Rank!",
        "pairs": [
          {
            "key": "Stage 9",
            "value": "Geometric Giant"
          },
          {
            "key": "Stage 10",
            "value": "DHT Architect"
          },
          {
            "key": "Final",
            "value": "Hash God"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Grids Mapped.",
        "codeSnippet": "9 * ___ ;",
        "correctAnswer": "100"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Fly across the spatial sea! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Ready for the Master Class?",
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
        "questionText": "Final Coordinate?",
        "options": [
          "Ascend!",
          "Done.",
          "0"
        ],
        "correctAnswer": "Ascend!"
      }
    ]
  }
];

module.exports = stage9;
