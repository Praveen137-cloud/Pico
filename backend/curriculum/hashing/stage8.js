const stage8 = [
  {
    "order": 71,
    "title": "Similarity Search",
    "desc": "Finding birds that look alike.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Proximity Power! Standard Hashing is designed to AVOID collisions. But what if we WANT similar items to hash to the same bucket? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This is 'Locality Sensitive Hashing' (LSH). It maps similar points in high-dimensional space (like images or text) to the same hash! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the key difference between LSH and Cryptographic Hashing?",
        "options": [
          "LSH encourages similar inputs to have similar/identical hashes",
          "LSH is faster",
          "LSH uses more bits"
        ],
        "correctAnswer": "LSH encourages similar inputs to have similar/identical hashes"
      },
      {
        "type": "match_following",
        "questionText": "Match Hashing Goals!",
        "pairs": [
          {
            "key": "Standard Hash",
            "value": "Minimize Collisions"
          },
          {
            "key": "LSH",
            "value": "Maximize Similarity Collisions"
          },
          {
            "key": "Nearest Neighbor",
            "value": "Finding 'Close' items"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "If Dist(A, B) is small, then Hash(A) ___ Hash(B) with high probability.",
        "codeSnippet": "P(h(A) == h(B)) is ___ ;",
        "correctAnswer": "high"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"LSH is used by Netflix for recommendations and by Google for reverse image search! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Finding exact NNs in 1,000 dimensions is slow. LSH find them in:",
        "options": [
          "Sub-linear / Constant time (approximate)",
          "O(N) time",
          "O(N^K) time"
        ],
        "correctAnswer": "Sub-linear / Constant time (approximate)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Search abbreviation.",
        "codeSnippet": "ANN (Approximate ___ Neighbor)",
        "correctAnswer": "Nearest"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Look for your twin! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are we similar?\"",
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
    "order": 72,
    "title": "MinHash",
    "desc": "Comparing bird nests as sets.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"MinHash! A technique to estimate Jaccard Similarity (Intersection / Union) of two giant sets. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Pick a random permutation of all possible items. The MinHash of a set is the SMALLEST index of an item it contains! 🦜\"",
        "codeSnippet": "minHash(S) = min(permute(x) for x in S);"
      },
      {
        "type": "multiple_choice",
        "questionText": "The probability that MinHash(A) == MinHash(B) is equal to:",
        "options": [
          "Jaccard Similarity of A and B",
          "Zero",
          "The size of A"
        ],
        "correctAnswer": "Jaccard Similarity of A and B"
      },
      {
        "type": "match_following",
        "questionText": "Match Set Similarity!",
        "pairs": [
          {
            "key": "Intersection",
            "value": "Items in both"
          },
          {
            "key": "Union",
            "value": "Items in either"
          },
          {
            "key": "Jaccard",
            "value": "Over / Under"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Jaccard Ratio formula.",
        "codeSnippet": "Similarity = (A ∩ B) ___ (A ∪ B);",
        "correctAnswer": "/"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"By keeping a 'Signature' of 100-200 MinHashes, we can compare billions of sets instantly! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "If A = {1, 2, 3} and B = {1, 2, 4}, Jaccard similarity is:",
        "options": [
          "0.5 (2 items overlap / 4 unique total)",
          "1.0",
          "0"
        ],
        "correctAnswer": "0.5 (2 items overlap / 4 unique total)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Smallest value function.",
        "codeSnippet": "___ (hashes[i])",
        "correctAnswer": "min"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Extract the essence! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are our sets same?\"",
        "options": [
          "MOSTLY!",
          "No.",
          "Yes."
        ],
        "correctAnswer": "MOSTLY!"
      }
    ]
  },
  {
    "order": 73,
    "title": "Shingling Content",
    "desc": "Chopping text for comparison.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"K-Shingles! To compare two documents, we chop them into overlapping strings of length K. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"'PICO IS ELITE' with K=4: {'PICO', 'ICO ', 'CO I', 'O IS'...}. Two similar documents will share many shingles! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What does shingling convert a document into?",
        "options": [
          "A set of short strings",
          "A single long hash",
          "A binary tree"
        ],
        "correctAnswer": "A set of short strings"
      },
      {
        "type": "match_following",
        "questionText": "Match Shingle Sizes!",
        "pairs": [
          {
            "key": "Short K (2-3)",
            "value": "Captures characters"
          },
          {
            "key": "Long K (8-10)",
            "value": "Captures full words"
          },
          {
            "key": "Shingle",
            "value": "Textual DNA"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Extract a 4-char shingle from index i.",
        "codeSnippet": "text. ___(i, 4);",
        "correctAnswer": "substr"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Shingling followed by MinHash is the standard pipeline for detecting near-duplicate web pages! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Benefit of overlapping shingles?",
        "options": [
          "Makes the set robust to small changes (adding/deleting a char)",
          "Uses more memory",
          "Looks better"
        ],
        "correctAnswer": "Makes the set robust to small changes (adding/deleting a char)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Another name for k-shingles.",
        "codeSnippet": "n- ___",
        "correctAnswer": "grams"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Chop and change! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is it a shingle?\"",
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
    "order": 74,
    "title": "Signature Matrices",
    "desc": "Condensing the sky into a chart.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Signatures! Instead of storing millions of shingles, we store 100 MinHash values for every document. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The 'Signature Matrix' has one column per document and one row per hash function. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What does a Signature Matrix represent?",
        "options": [
          "A compressed summary of set similarities",
          "The full text of all files",
          "A list of passwords"
        ],
        "correctAnswer": "A compressed summary of set similarities"
      },
      {
        "type": "match_following",
        "questionText": "Match Matrix Parts!",
        "pairs": [
          {
            "key": "Column",
            "value": "A single document"
          },
          {
            "key": "Row",
            "value": "Result of 1 MinHash"
          },
          {
            "key": "Cell(i, j)",
            "value": "h_i(Doc_j)"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Number of hashes in a typical signature.",
        "codeSnippet": "num_hashes = ___ ; // 100-500",
        "correctAnswer": "200"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Comparing columns is much faster than comparing the original documents! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Estimated similarity between two columns?",
        "options": [
          "Percentage of rows where values are identical",
          "The sum of values",
          "Random guess"
        ],
        "correctAnswer": "Percentage of rows where values are identical"
      },
      {
        "type": "code_fill_in",
        "questionText": "Signature length.",
        "codeSnippet": "___ -hashes",
        "correctAnswer": "min"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Sign with speed! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is the matrix ready?\"",
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
    "order": 75,
    "title": "LSH: Banding",
    "desc": "Finding matches without O(N^2).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Big Problem! If we have 1 million documents, comparing every pair takes 1 trillion checks. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Banding Trick: Divide the signature into 'B' bands. If two documents match in ANY band, they are 'Candidates' for comparison! 🦜\"",
        "codeSnippet": "if (matchesInAnyBand(A, B)) checkCandidate(A, B);"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does Banding do?",
        "options": [
          "Sub-linearizes the pair search (skips non-similar ones)",
          "Makes the hash stronger",
          "Deletes documents"
        ],
        "correctAnswer": "Sub-linearizes the pair search (skips non-similar ones)"
      },
      {
        "type": "match_following",
        "questionText": "Match Banding Logic!",
        "pairs": [
          {
            "key": "Bands (b)",
            "value": "Number of groups"
          },
          {
            "key": "Rows (r)",
            "value": "Hashes per group"
          },
          {
            "key": "Candidate",
            "value": "Potential match"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Probability of becoming a candidate.",
        "codeSnippet": "P = 1 - (1 - s^r)^ ___ ;",
        "correctAnswer": "b"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Banding produces an 'S-Curve' probability. Items above a certain similarity threshold are almost certain to collide in at least one band! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Total rows in signature?",
        "options": [
          "b * r",
          "b + r",
          "b^r"
        ],
        "correctAnswer": "b * r"
      },
      {
        "type": "code_fill_in",
        "questionText": "Threshold where probability is 0.5.",
        "codeSnippet": "t = (1/b)^(1/ ___ )",
        "correctAnswer": "r"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Band together! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are we in a band?\"",
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
    "order": 76,
    "title": "SimHash",
    "desc": "Cosine similarity for documents.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"SimHash! A technique from Google to find near-duplicates in constant time. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"It maps documents to a 64-bit fingerprint. If the Hamming Distance (number of differing bits) is small, the docs are similar! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What does Hamming Distance measure?",
        "options": [
          "The number of positions where bits differ",
          "The sum of bits",
          "The distance to Hamburg"
        ],
        "correctAnswer": "The number of positions where bits differ"
      },
      {
        "type": "match_following",
        "questionText": "Match SimHash Steps!",
        "pairs": [
          {
            "key": "Weights",
            "value": "Keyword importance"
          },
          {
            "key": "Binary Fingerprint",
            "value": "Fixed 64-bit result"
          },
          {
            "key": "Distance <= 3",
            "value": "Likely duplicate"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Calculate bits that differ (XOR).",
        "codeSnippet": "diffBits = bitCount(h1 ___ h2);",
        "correctAnswer": "^"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"SimHash is incredible because it captures the 'Angle' (Cosine Similarity) between documents! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Hamming distance of 1101 and 1001?",
        "options": [
          "1 (Second bit matches)",
          "1101",
          "0"
        ],
        "correctAnswer": "1 (Second bit matches)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Fingerprint size in bits.",
        "codeSnippet": "___ bits",
        "correctAnswer": "64"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Similarity in every bit! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are our fingers similar?\"",
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
    "order": 77,
    "title": "MinHash vs SimHash",
    "desc": "Choosing the right similarity.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Comparison! MinHash is best for Jaccard Similarity (Sets, DNA, Shingles). SimHash is best for Cosine Similarity (Text frequency, Vectors). 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Which is more sensitive to word order?",
        "options": [
          "MinHash with long shingles",
          "SimHash",
          "Neither"
        ],
        "correctAnswer": "MinHash with long shingles"
      },
      {
        "type": "multiple_choice",
        "questionText": "Which is easier to implement for fixed-size vectors?",
        "options": [
          "SimHash",
          "MinHash",
          "They are equal"
        ],
        "correctAnswer": "SimHash"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"For general web crawling, MinHash is the standard choice. 🦜\""
      },
      {
        "type": "match_following",
        "questionText": "Match Similarity Type!",
        "pairs": [
          {
            "key": "Jaccard",
            "value": "Set Overlap"
          },
          {
            "key": "Cosine",
            "value": "Angle between vectors"
          },
          {
            "key": "LSH",
            "value": "The family name"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Term for the degree of overlap.",
        "codeSnippet": "\"SIMI\" + \"___\" ;",
        "correctAnswer": "LARITY"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Choose the right flight path! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Do you have a favorite?\"",
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
    "order": 78,
    "title": "Random Projections",
    "desc": "The math of SimHash.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Projection! To get a SimHash, we multiply a vector by many random 'Hyperplanes'. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"If a point is on the 'Up' side of the plane, it gets a 1. If 'Down', it gets a 0. 🦜\"",
        "codeSnippet": "bit = (DotProduct(Vector, RandomPlane) >= 0) ? 1 : 0;"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does the Dot Product calculate?",
        "options": [
          "The angle between the data and the random plane",
          "The sum of elements",
          "The length of the vector"
        ],
        "correctAnswer": "The angle between the data and the random plane"
      },
      {
        "type": "match_following",
        "questionText": "Match Vector Terms!",
        "pairs": [
          {
            "key": "Vector",
            "value": "Array of numbers"
          },
          {
            "key": "Hyperplane",
            "value": "The divider"
          },
          {
            "key": "Dot Product",
            "value": "Projection math"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Calculate dot product sum.",
        "codeSnippet": "sum += v[i] ___ p[i];",
        "correctAnswer": "*"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This converts a massive vector (e.g. 10,000 words) into a single 64-bit signature! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Probability of 1 bit matching for angle θ?",
        "options": [
          "1 - (θ / 180)",
          "θ",
          "0"
        ],
        "correctAnswer": "1 - (θ / 180)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Dividing plane in high dimensions.",
        "codeSnippet": "___ -plane",
        "correctAnswer": "Hyper"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Project your potential! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are you angled?\"",
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
    "order": 79,
    "title": "Application: Image Search",
    "desc": "How reverse image search works.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Visual Hashing! Images are converted into 'Feature Vectors' (color, edges, shapes). 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"We hash these vectors using LSH. If you upload a photo of a parrot, it hashes to the same buckets as other parrot photos! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What does reverse image search find?",
        "options": [
          "Visually similar images",
          "The photographer name",
          "The date taken"
        ],
        "correctAnswer": "Visually similar images"
      },
      {
        "type": "match_following",
        "questionText": "Match Image Concepts!",
        "pairs": [
          {
            "key": "Feature Map",
            "value": "Raw pixels to logic"
          },
          {
            "key": "pHash / perceptual",
            "value": "Image-specific LSH"
          },
          {
            "key": "Bucket Match",
            "value": "Candidates found"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Term for visually identical looking hash.",
        "codeSnippet": "___ Hashing",
        "correctAnswer": "Perceptual"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Standard Hashing (like MD5) would change completely if you change just 1 pixel. Perceptual hashing stays nearly the same! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Can LSH handle image rotation?",
        "options": [
          "Depends on the feature extractor (some are rotation invariant)",
          "Always",
          "Never"
        ],
        "correctAnswer": "Depends on the feature extractor (some are rotation invariant)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Name of image-specific LSH.",
        "codeSnippet": "___ hash",
        "correctAnswer": "p"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"See the patterns! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Do you see me?\"",
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
    "order": 80,
    "title": "Master Point (Hashing 8)",
    "desc": "Spatial falcon status confirmed.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"STAGE 8 COMPLETE! You've mastered LSH, MinHash, SimHash, and the art of 'Productive Collisions'. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Which technique is best for finding common DNA sequences?",
        "options": [
          "MinHash (Set of shingles)",
          "Standard Map",
          "Double Hashing"
        ],
        "correctAnswer": "MinHash (Set of shingles)"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does LSH use to skip O(N^2) comparisons?",
        "options": [
          "Banding",
          "Sorting",
          "Pointers"
        ],
        "correctAnswer": "Banding"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"You are a Spatial Falcon! In Stage 9, we dive into Geometric Hashing and Locality Sensitive Hashing in high dimensions! 🦜\""
      },
      {
        "type": "match_following",
        "questionText": "Match the Rank!",
        "pairs": [
          {
            "key": "Stage 8",
            "value": "Spatial Falcon"
          },
          {
            "key": "Stage 9",
            "value": "Geometric Giant"
          },
          {
            "key": "Next",
            "value": "Spatial Search"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Similarities Found.",
        "codeSnippet": "8 * ___ ;",
        "correctAnswer": "100"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Fly precisely! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Enter Geometric Depths?",
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
        "questionText": "Final Fingerprint?",
        "options": [
          "Match!",
          "Done.",
          "0"
        ],
        "correctAnswer": "Match!"
      }
    ]
  }
];

module.exports = stage8;
