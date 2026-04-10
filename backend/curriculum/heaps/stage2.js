const stage2 = [
  {
    order: 21,
    title: 'The Identity Test',
    desc: 'Determining if a given array represents a Max or Min heap.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "The Identity Crisis! Given a random sequence of birds, how do we know if they obey the royal property? 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "For every node at index `i`, its children at `2i+1` and `2i+2` must be smaller (for Max) or larger (for Min). Complexity: O(N). 🦜"', codeSnippet: 'bool isMaxHeap(arr, n) {\n  for(i=0; i <= (n-2)/2; i++) {\n    if(arr[2*i+1] > arr[i]) return false;\n    if(2*i+2 < n && arr[2*i+2] > arr[i]) return false;\n  }\n  return true;\n}' },
      { type: 'multiple_choice', questionText: 'What is the time complexity to check if an array is a heap?', options: ['O(N)', 'O(log N)', 'O(1)'], correctAnswer: 'O(N)' },
      { type: 'match_following', questionText: 'Match the checks!', pairs: [{key: 'parent >= children', value: 'Max-Heap'}, {key: 'parent <= children', value: 'Min-Heap'}, {key: '(n-2)/2', value: 'Last parent'}] },
      { type: 'programming_board', questionText: 'Loop exit condition if a violation is found.', codeSnippet: 'if (arr[L] > arr[i]) return ___ ;', correctAnswer: 'false' },
      { type: 'teaching', questionText: 'By Pico: "We only need to check up to the last internal node. Leaves have no children to violate the property! 🦜"' },
      { type: 'multiple_choice', questionText: 'Is [90, 15, 10, 7, 12, 2] a Max-Heap?', options: ['Yes', 'No (15 < 12?)', 'No (10 < 2?)'], correctAnswer: 'Yes' },
      { type: 'code_fill_in', questionText: 'Condition for right child exists.', codeSnippet: 'if (2*i + ___ < n)', correctAnswer: '2' },
      { type: 'teaching', questionText: 'By Pico: "Known identity! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Do you know these birds?"', options: ['SQUAWK YES!', 'No.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 22,
    title: 'The Great Merge',
    desc: 'Merging two binary heaps into one.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "Joining Kingdoms! If two flocks of birds want to become one single Heap, how do we combine them? 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "The Simple Way: Concatenate the two arrays and call Build-Heap on the result. O(N+M)! 🦜"', codeSnippet: 'newArr = [...arr1, ...arr2];\nbuildHeap(newArr);' },
      { type: 'multiple_choice', questionText: 'Complexity of merging two binary heaps by rebuilding?', options: ['O(N+M)', 'O(log N + log M)', 'O(N * M)'], correctAnswer: 'O(N+M)' },
      { type: 'match_following', questionText: 'Match Merge theory!', pairs: [{key: 'Concatenate', value: 'Join arrays'}, {key: 'Build-Heap', value: 'Restore property'}, {key: 'O(N+M)', value: 'Total cost'}] },
      { type: 'programming_board', questionText: 'The operation that restores heap property after merging arrays.', codeSnippet: 'Function = ___ ;', correctAnswer: 'buildHeap' },
      { type: 'teaching', questionText: 'By Pico: "While O(N+M) is good, advanced structures like Binomial or Fibonacci Heaps can merge in O(log N) or O(1)! 🦜"' },
      { type: 'multiple_choice', questionText: 'Can a simple binary heap merge in O(log N)?', options: ['No (Normally O(N))', 'Yes', 'Pico rule'], correctAnswer: 'No (Normally O(N))' },
      { type: 'code_fill_in', questionText: 'Join arrays.', codeSnippet: 'merged = arr1.___ (arr2);', correctAnswer: 'concat' },
      { type: 'teaching', questionText: 'By Pico: "Single Sovereignty! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Are the kingdoms one?"', options: ['SQUAWK YES!', 'No.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 23,
    title: 'K-Way Highway',
    desc: 'Merging K sorted arrays using a Min-Heap.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "The Supply Chain! We have K sorted rivers of seeds. How do we merge them into one single sorted flow efficiently? 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Use a Min-Heap of size K. Store the first element of each array. Extract the min, and replace it with the next element from its original river! 🦜"', codeSnippet: 'struct Node { val, arrIdx, valIdx };' },
      { type: 'multiple_choice', questionText: 'Time complexity of K-way merge using a heap?', options: ['O(NK log K)', 'O(NK log N)', 'O(K log N)'], correctAnswer: 'O(NK log K)' },
      { type: 'match_following', questionText: 'Match K-way roles!', pairs: [{key: 'Min-Heap size K', value: 'Active candidates'}, {key: 'arrIdx', value: 'Source identification'}, {key: 'valIdx', value: 'Next in line'}] },
      { type: 'programming_board', questionText: 'What is the heap size during the K-way merge?', codeSnippet: 'Heap Size = ___ ;', correctAnswer: 'K' },
      { type: 'teaching', questionText: 'By Pico: "Total elements N across all rivers. Each extraction takes O(log K). Total: O(N log K)! 🦜"' },
      { type: 'multiple_choice', questionText: 'What if one river runs dry?', options: ['Heap size shrinks', 'Insert 0', 'Panic'], correctAnswer: 'Heap size shrinks' },
      { type: 'code_fill_in', questionText: 'Heap storage.', codeSnippet: 'pq.push({arr[i][0], i, ___});', correctAnswer: '0' },
      { type: 'teaching', questionText: 'By Pico: "Sorted confluence! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Is the flow sorted?"', options: ['Perfect stream!', 'No.', '0'], correctAnswer: 'Perfect stream!' }
    ]
  },
  {
    order: 24,
    title: 'Balanced Heart (Running Median)',
    desc: 'Finding the median in a stream of numbers using two heaps.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "The Equilibrium! Numbers are flying in like seeds. Can you tell me the center-most value (median) at any second? 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Use TWO Heaps! A Max-Heap for the smaller half and a Min-Heap for the larger half. Keep their sizes balanced! 🦜"', codeSnippet: 'MaxHeap small; // Left half\nMinHeap large; // Right half' },
      { type: 'multiple_choice', questionText: 'Where is the median if total elements N is odd?', options: ['Root of the larger-sized heap', 'Average of roots', 'Root of bottom-most leaf'], correctAnswer: 'Root of the larger-sized heap' },
      { type: 'match_following', questionText: 'Match Dual-Heap logic!', pairs: [{key: 'Abs(size diff) > 1', value: 'Rebalance!'}, {key: 'Size equality', value: 'Median = (root1+root1)/2'}, {key: 'O(log N)', value: 'Insertion cost'}] },
      { type: 'programming_board', questionText: 'If total elements are even, the median is the ___ of the two roots.', codeSnippet: 'Result = (R1 + R2) / ___ ;', correctAnswer: '2' },
      { type: 'teaching', questionText: 'By Pico: "Balance rule: If |size1 - size2| > 1, move the root of the larger heap to the smaller one. Simple and elite! 🦜"' },
      { type: 'multiple_choice', questionText: 'Complexity to get median after N elements?', options: ['O(1)', 'O(log N)', 'O(N)'], correctAnswer: 'O(1)' },
      { type: 'code_fill_in', questionText: 'Heap for left side.', codeSnippet: 'priority_queue<int> ___Half; // max heap', correctAnswer: 'lower' },
      { type: 'teaching', questionText: 'By Pico: "Perfect balance! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Did the forest find its center?"', options: ['Stable equilibrium!', 'No.', '0'], correctAnswer: 'Stable equilibrium!' }
    ]
  },
  {
    order: 25,
    title: 'The K-Sort Shuffles',
    desc: 'Sorting a nearly-sorted (K-sorted) array efficienty.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "Almost Organized! Every bird in this row is at most K positions away from its target. Don\'t sort from scratch! 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Use a Min-Heap of size K+1. The smallest bird of the entire array MUST be among the first K+1 elements! 🦜"', codeSnippet: 'for(i=0; i<=k; i++) pq.push(arr[i]);\nfor(i=k+1; i<n; i++) { arr[j++] = pq.pop(); pq.push(arr[i]); }' },
      { type: 'multiple_choice', questionText: 'Complexity of sorting a K-sorted array?', options: ['O(N log K)', 'O(N log N)', 'O(K log N)'], correctAnswer: 'O(N log K)' },
      { type: 'match_following', questionText: 'Match K-Sort tools!', pairs: [{key: 'Heap size K+1', value: 'Window of candidates'}, {key: 'O(N log K)', value: 'Optimized speed'}, {key: 'Pop & Push', value: 'Shifting window'}] },
      { type: 'programming_board', questionText: 'Initial number of elements pushed to the heap.', codeSnippet: 'Initial Push = K + ___ ;', correctAnswer: '1' },
      { type: 'teaching', questionText: 'By Pico: "By using the K-distance constraint, we achieve much better performance than standard sorting! 🦜"' },
      { type: 'multiple_choice', questionText: 'If K=N, what does the complexity become?', options: ['O(N log N)', 'O(N)', '0'], correctAnswer: 'O(N log N)' },
      { type: 'code_fill_in', questionText: 'Pop result into array.', codeSnippet: 'arr[targetIdx++] = pq. ___ ();', correctAnswer: 'pop' },
      { type: 'teaching', questionText: 'By Pico: "Swift alignment! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Is the row sorted?"', options: ['SQUAWK YES!', 'No.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 26,
    title: 'Range of K Lists',
    desc: 'Smallest range that includes at least one element from K sorted lists.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "Narrow focus! We want the narrowest range [min, max] that captures at least one bird from every single river! 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Use a Min-Heap of size K. Track the current MAX of all elements in the heap. Range = `currMax - minHeap.root()`. Update and move forward! 🦜"', codeSnippet: 'while(true) {\n  minVal = pq.pop();\n  currRange = maxVal - minVal;\n  if(currRange < minRange) ...\n  // push next from same list\n}' },
      { type: 'multiple_choice', questionText: 'What happens when one list is exhausted?', options: ['Stop (cannot cover all K lists anymore)', 'Wait', 'Restart'], correctAnswer: 'Stop (cannot cover all K lists anymore)' },
      { type: 'match_following', questionText: 'Match Range logic!', pairs: [{key: 'Min-Heap', value: 'Find lower bound'}, {key: 'maxVal variable', value: 'Track upper bound'}, {key: 'K lists', value: 'Coverage requirement'}] },
      { type: 'programming_board', questionText: 'Condition for better range found.', codeSnippet: 'if (currMax - currMin ___ minRange) { update... }', correctAnswer: '<' },
      { type: 'teaching', questionText: 'By Pico: "This is the ultimate selection problem. O(N log K) once again! 🦜"' },
      { type: 'multiple_choice', questionText: 'Can the range be 0?', options: ['Yes (if identical elements exist across K lists)', 'No', '0'], correctAnswer: 'Yes (if identical elements exist across K lists)' },
      { type: 'code_fill_in', questionText: 'End detection.', codeSnippet: 'if (nextIndex ___ listSize) break;', correctAnswer: '==' },
      { type: 'teaching', questionText: 'By Pico: "Precision targeting! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Is the range found?"', options: ['Smallest possible!', 'No.', '0'], correctAnswer: 'Smallest possible!' }
    ]
  },
  {
    order: 27,
    title: 'Frequent Flyers (Top K)',
    desc: 'Finding the K most frequent elements using Hashing and Heaps.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "Popular birds! We want the K birds that squawk the most often in this massive crowd! 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "1. Count frequencies with a Hash Map (O(N)). 2. Put frequencies into a Min-Heap of size K. Result: The top K popular birds! 🦜"', codeSnippet: 'Map<Bird, Freq> counts;\nMinHeap<Pair<Freq, Bird>> pq;\nfor(auto it : counts) {\n  pq.push(it);\n  if(pq.size() > k) pq.pop();\n}' },
      { type: 'multiple_choice', questionText: 'Why use a MIN-HEAP for Top K Frequent elements?', options: ['To keep the largest frequencies (pops the smallest)', 'It is faster', 'Binary rule'], correctAnswer: 'To keep the largest frequencies (pops the smallest)' },
      { type: 'match_following', questionText: 'Match Popularity tools!', pairs: [{key: 'Hash Map', value: 'Inventory counting'}, {key: 'Min-Heap size K', value: 'Elite ranking'}, {key: 'O(N log K)', value: 'Complexity'}] },
      { type: 'programming_board', questionText: 'Wait, if I use a Max-Heap of size N, what is the complexity?', codeSnippet: 'Complexity = O(N log ___ );', correctAnswer: 'N' },
      { type: 'teaching', questionText: 'By Pico: "O(N log K) is the goal. Use your resources wisely! 🦜"' },
      { type: 'multiple_choice', questionText: 'What is returned if K > total unique elements?', options: ['All unique elements', 'Error', '0'], correctAnswer: 'All unique elements' },
      { type: 'code_fill_in', questionText: 'Push frequency pair.', codeSnippet: 'pq.push({ ___ , birdId});', correctAnswer: 'freq' },
      { type: 'teaching', questionText: 'By Pico: "Elite frequency! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Did I find the stars?"', options: ['The K populars!', 'No.', '0'], correctAnswer: 'The K populars!' }
    ]
  },
  {
    order: 28,
    title: 'The Sane Shuffle',
    desc: 'Rearranging characters so no two adjacent are same.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "Social Distancing! Rearrange our noisy birds so no two identical ones are sitting next to each other! 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Count frequencies. Use a Max-Heap of frequencies. Every step, take the MOST frequent, place it, and store it in a \'timeout\' until the next step! 🦜"', codeSnippet: 'prev = {-1, \'#\'};\nwhile(!pq.empty()) {\n  curr = pq.pop();\n  res += curr.char;\n  if(prev.count > 0) pq.push(prev);\n  curr.count--;\n  prev = curr;\n}' },
      { type: 'multiple_choice', questionText: 'When is it impossible to rearrange?', options: ['If most frequent Count > (N+1)/2', 'If N is small', 'Always possible'], correctAnswer: 'If most frequent Count > (N+1)/2' },
      { type: 'match_following', questionText: 'Match Shuffle tools!', pairs: [{key: 'Max-Heap', value: 'Greedy selection'}, {key: 'Timeout Var', value: 'Prevents collision'}, {key: 'N+1 / 2', value: 'Feasibility limit'}] },
      { type: 'programming_board', questionText: 'Element held out to avoid adjacent duplicates.', codeSnippet: 'tempStoredElement = ___ ;', correctAnswer: 'prev' },
      { type: 'teaching', questionText: 'By Pico: "Always pick the bird with the most remaining squawks to ensure we don\'t get stuck at the end! 🦜"' },
      { type: 'multiple_choice', questionText: 'Complexity of Sane Shuffle?', options: ['O(N log A) where A is alphabet size', 'O(N^2)', 'O(1)'], correctAnswer: 'O(N log A) where A is alphabet size' },
      { type: 'code_fill_in', questionText: 'Add to result.', codeSnippet: 'resultStr ___ curr.char;', correctAnswer: '+=' },
      { type: 'teaching', questionText: 'By Pico: "Orderly arrangement! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Is the row peaceful?"', options: ['Perfect distance!', 'No.', '0'], correctAnswer: 'Perfect distance!' }
    ]
  },
  {
    order: 29,
    title: 'Rope Tying (Greedy Heap)',
    desc: 'Connecting ropes with minimum cost.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "The Bridge! We have N small ropes. Connecting two ropes of length L1 and L2 costs L1+L2. How to join all ropes for MINIMUM total cost? 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Always pick the TWO shortest ropes! Use a Min-Heap. Pop two, add them, add their sum to total cost, and push the new rope back! 🦜"', codeSnippet: 'while(pq.size() > 1) {\n  a = pq.pop(); b = pq.pop();\n  sum = a + b;\n  total += sum;\n  pq.push(sum);\n}' },
      { type: 'multiple_choice', questionText: 'Greedy strategy for minimum rope cost?', options: ['Pick two smallest', 'Pick two largest', 'Random'], correctAnswer: 'Pick two smallest' },
      { type: 'match_following', questionText: 'Match Rope tools!', pairs: [{key: 'Min-Heap', value: 'Shortest search'}, {key: 'O(N log N)', value: 'Complexity'}, {key: 'Total Sum', value: 'Accumulated cost'}] },
      { type: 'programming_board', questionText: 'Number of elements popped in each iteration.', codeSnippet: 'Pop Count = ___ ;', correctAnswer: '2' },
      { type: 'teaching', questionText: 'By Pico: "This is exactly how Huffman Coding creates optimal trees! Smallest pieces first to minimize impact on the final sum! 🦜"' },
      { type: 'multiple_choice', questionText: 'If ropes are [4, 3, 2, 6], what is the first connection?', options: ['2+3 (Cost 5)', '4+6 (Cost 10)', '0'], correctAnswer: '2+3 (Cost 5)' },
      { type: 'code_fill_in', questionText: 'Update total.', codeSnippet: 'totalCost += ___ ;', correctAnswer: 'sum' },
      { type: 'teaching', questionText: 'By Pico: "Minimal overhead! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Is the bridge strong?"', options: ['Cheapest climb!', 'No.', '0'], correctAnswer: 'Cheapest climb!' }
    ]
  },
  {
    order: 30,
    title: 'Intermediate Foundation',
    desc: 'Reflecting on Advanced Heaps applications.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "MID-STAGE MASTERY! 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "You have mastered K-way merges, Running Medians, Sane Shuffles, and the greedy logic of ropes. But the peak of the canopy awaits! 🦜"' },
      { type: 'multiple_choice', questionText: 'Median of even elements?', options: ['Avg(two roots)', 'Max root'], correctAnswer: 'Avg(two roots)' },
      { type: 'multiple_choice', questionText: 'K-way merge uses?', options: ['Min-Heap size K', 'Max-Heap size N'], correctAnswer: 'Min-Heap size K' },
      { type: 'multiple_choice', questionText: 'Rope cost strategy?', options: ['Pick 2 smallest', 'Pick 2 largest'], correctAnswer: 'Pick 2 smallest' },
      { type: 'multiple_choice', questionText: 'Shuffle limit (N=10)?', options: ['Max count 6 or less', 'Max count 2'], correctAnswer: 'Max count 6 or less' },
      { type: 'multiple_choice', questionText: 'K-sorted sort complexity?', options: ['O(N log K)', 'O(N log N)'], correctAnswer: 'O(N log K)' },
      { type: 'match_following', questionText: 'Intermediate Final Match!', pairs: [{key: 'Median', value: 'Balanced!'}, {key: 'Range', value: 'Narrowed!'}, {key: 'Pico', value: 'Happy!'}] },
      { type: 'teaching', questionText: 'By Pico: "Stage 2 continues with Sliding Windows and Advanced Prioritization! SQUAWK! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Shall we fly deeper?"', options: ['SQUAWK YES!', 'Wait...', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 31,
    title: 'The Sliding Canopy',
    desc: 'Finding the maximum in every sliding window of size K.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "The Panoramic View! A window of size K is sliding over our long row of birds. We need the strongest bird in the window at every step! 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "While Deque is O(N), a Max-Heap is a solid elite approach. Store `{val, index}` pairs. If the top bird\'s index is outside the window, pop it! 🦜"', codeSnippet: 'while (pq.top().index <= i - k) pq.pop();\nres.push(pq.top().val);' },
      { type: 'multiple_choice', questionText: 'Why store the index along with the value in the heap?', options: ['To check validity', 'For sorting', 'Pico rule'], correctAnswer: 'To check validity' },
      { type: 'match_following', questionText: 'Match Sliding roles!', pairs: [{key: 'Max-Heap', value: 'Find window leader'}, {key: 'pq.top().index', value: 'Validity check'}, {key: 'res.push()', value: 'Store local king'}] },
      { type: 'programming_board', questionText: 'Window boundary check: index <= i - ___ .', codeSnippet: 'if (idx <= i - ___ ) pq.pop();', correctAnswer: 'k' },
      { type: 'teaching', questionText: 'By Pico: "Complexity: O(N log N). A powerful pattern for priority-window tasks! 🦜"' },
      { type: 'multiple_choice', questionText: 'Is this faster than O(NK)?', options: ['Yes (O(N log N) < O(NK))', 'No', '0'], correctAnswer: 'Yes (O(N log N) < O(NK))' },
      { type: 'code_fill_in', questionText: 'Heap storage type.', codeSnippet: 'priority_queue<pair<int, int>> pq; // {val, ___}', correctAnswer: 'index' },
      { type: 'teaching', questionText: 'By Pico: "Dynamic window leader! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Is the window clear?"', options: ['SQUAWK YES!', 'No.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 32,
    title: 'The Message Compressor',
    desc: 'Introduction to Huffman Coding using Heaps.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "Secret Squawks! We want to compress our messages by giving shorter codes to birds that squawk more often! 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "1. Build a Min-Heap of character frequencies. 2. Pop two smallest, join them, and push the new meta-bird back. Repeat! 🦜"', codeSnippet: 'while(pq.size() > 1) {\n  L = pq.pop(); R = pq.pop();\n  newNode = join(L, R);\n  pq.push(newNode);\n}' },
      { type: 'multiple_choice', questionText: 'What type of heap is essential for Huffman Trees?', options: ['Min-Heap', 'Max-Heap', 'Ordered Map'], correctAnswer: 'Min-Heap' },
      { type: 'match_following', questionText: 'Match Huffman steps!', pairs: [{key: 'Pop 2 Smallest', value: 'Greedy join'}, {key: 'Frequent Char', value: 'Shortest bitcode'}, {key: 'O(N log N)', value: 'Building cost'}] },
      { type: 'programming_board', questionText: 'The resulting tree generates ___ -length codes.', codeSnippet: 'Code Type = ___ ;', correctAnswer: 'variable' },
      { type: 'teaching', questionText: 'By Pico: "Ensures no code is a prefix of another! 🦜"' },
      { type: 'multiple_choice', questionText: 'Which bird gets the SHORTEST code?', options: ['The most frequent', 'The least frequent', 'Biggest'], correctAnswer: 'The most frequent' },
      { type: 'code_fill_in', questionText: 'Loop exit condition.', codeSnippet: 'while (pq.size() ___ 1)', correctAnswer: '>' },
      { type: 'teaching', questionText: 'By Pico: "Compressed success! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Is the message secret?"', options: ['Optimally coded!', 'No.', '0'], correctAnswer: 'Optimally coded!' }
    ]
  },
  {
    order: 33,
    title: 'Dijkstra Unleashed',
    desc: 'Optimizing Dijkstra Algorithm with a Priority Queue.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "The Elite Path! To find the shortest path in a massive graph, we must always explore the closest birds first! 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Use a Min-Heap to store `{distance, node}`. This lets us find the next closest node in O(log E) instead of O(V) scan! 🦜"', codeSnippet: 'pq.push({0, startNode});\nwhile(!pq.empty()) {\n  currD, u = pq.pop();\n  for(v, w : adj[u]) ...\n}' },
      { type: 'multiple_choice', questionText: 'Time complexity with Binary Heap?', options: ['O(E log V)', 'O(V^2)', 'O(E+V)'], correctAnswer: 'O(E log V)' },
      { type: 'match_following', questionText: 'Match Dijkstra tools!', pairs: [{key: 'Min-Heap', value: 'Greedy distance search'}, {key: 'Relaxation', value: 'dist[u] + w < dist[v]'}, {key: 'O(E log V)', value: 'Optimized speed'}] },
      { type: 'programming_board', questionText: 'Operation to update/push new distance.', codeSnippet: 'pq. ___ ({newD, v});', correctAnswer: 'push' },
      { type: 'teaching', questionText: 'By Pico: "Always pick the minimum distance! 🦜"' },
      { type: 'multiple_choice', questionText: 'Can Dijkstra handle negative edge weights?', options: ['No', 'Yes', 'Parrot only'], correctAnswer: 'No' },
      { type: 'code_fill_in', questionText: 'Skip if old distance is shorter.', codeSnippet: 'if (currD ___ dist[u]) continue;', correctAnswer: '>' },
      { type: 'teaching', questionText: 'By Pico: "Lightning path! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Did I find the way?"', options: ['Shortest route!', 'No.', '0'], correctAnswer: 'Shortest route!' }
    ]
  },
  {
    order: 34,
    title: 'The Prim Elite',
    desc: 'Implementing Prim Minimum Spanning Tree with Heaps.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "Uniting the Forest! We want to connect all birds with the minimum total branch length! 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Use a Min-Heap to store `{weight, node}`. Always pick the edge with the SMALLEST weight that connects to a new bird! 🦜"', codeSnippet: 'while(!pq.empty()) {\n  w, u = pq.pop();\n  if(inMST[u]) continue;\n  totalWeight += w;\n  for(v, weight : adj[u]) pq.push({weight, v});\n}' },
      { type: 'multiple_choice', questionText: 'Complexity using a Binary Heap?', options: ['O(E log V)', 'O(V^2)', 'O(E log E)'], correctAnswer: 'O(E log V)' },
      { type: 'match_following', questionText: 'Match Prim logic!', pairs: [{key: 'Min-Heap', value: 'Cheapest edge candidate'}, {key: 'inMST[]', value: 'Avoid cycles'}, {key: 'totalWeight', value: 'Final MST cost'}] },
      { type: 'programming_board', questionText: 'Condition to skip if node already in bridge.', codeSnippet: 'if ( ___ [u]) continue;', correctAnswer: 'inMST' },
      { type: 'teaching', questionText: 'By Pico: "Greedy excellence! 🦜"' },
      { type: 'multiple_choice', questionText: 'Number of edges in an MST for V nodes?', options: ['V - 1', 'V', '2V'], correctAnswer: 'V - 1' },
      { type: 'code_fill_in', questionText: 'Push edge weight.', codeSnippet: 'pq.push({ ___ , v});', correctAnswer: 'weight' },
      { type: 'teaching', questionText: 'By Pico: "Solid bridge! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Is the canopy connected?"', options: ['MST complete!', 'No.', '0'], correctAnswer: 'MST complete!' }
    ]
  },
  {
    order: 35,
    title: 'Triplicate Bloom',
    desc: 'Finding the maximum product of any triplet in an array.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "Flavor explosion! Which three seeds, when combined, produce the biggest power product? 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Top 3 largest birds are key. But two very negative birds can also make a large positive product! 🦜"', codeSnippet: 'Max = max(L1*L2*L3, L1*S1*S2)' },
      { type: 'multiple_choice', questionText: 'What elements are needed for optimal product check?', options: ['Largest 3 AND smallest 2', 'Only largest 3', 'Smallest 3'], correctAnswer: 'Largest 3 AND smallest 2' },
      { type: 'match_following', questionText: 'Match Product logic!', pairs: [{key: 'Top 3 largest', value: 'Positive elite'}, {key: 'Bottom 2 smallest', value: 'Negative surprise'}, {key: 'Max Product', value: 'Final Goal'}] },
      { type: 'programming_board', questionText: 'Equation: Max( L1*L2*L3 , L1* ___ *S2 ).', codeSnippet: 'Result = max(L1*L2*L3, L1* ___ *S2);', correctAnswer: 'S1' },
      { type: 'teaching', questionText: 'By Pico: "Use a Min-Heap size 3 and Max-Heap size 2. O(N)! 🦜"' },
      { type: 'multiple_choice', questionText: 'Complexity of finding these elements?', options: ['O(N)', 'O(N log N)', 'O(N^2)'], correctAnswer: 'O(N)' },
      { type: 'code_fill_in', questionText: 'Access result.', codeSnippet: 'return pq.___();', correctAnswer: 'top' },
      { type: 'teaching', questionText: 'By Pico: "Calculated harvest! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Did you find the power?"', options: ['Maximum product!', 'No.', '0'], correctAnswer: 'Maximum product!' }
    ]
  },
  {
    order: 36,
    title: 'The Elite Stream (K-th)',
    desc: 'Maintaining the K-th largest element in a real-time stream.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "Dynamic Ranking! At any moment, tell me who the K-th strongest is. 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Maintain a Min-Heap of size K. The root is ALWAYS the K-th largest! 🦜"', codeSnippet: 'KthLargest(k, array) {\n  this.pq = MinHeap();\n  for(x : array) add(x);\n}' },
      { type: 'multiple_choice', questionText: 'Complexity of add() in a KthLargest stream?', options: ['O(log K)', 'O(log N)', 'O(K)'], correctAnswer: 'O(log K)' },
      { type: 'match_following', questionText: 'Match Stream logic!', pairs: [{key: 'Min-Heap size K', value: 'Store Top K'}, {key: 'Root (pq.top)', value: 'K-th largest'}, {key: 'O(log K)', value: 'Update cost'}] },
      { type: 'programming_board', questionText: 'Root of this min-heap.', codeSnippet: 'Result = pq. ___ ();', correctAnswer: 'top' },
      { type: 'teaching', questionText: 'By Pico: "Keep the top-tier birds and throw away the rest! 🦜"' },
      { type: 'multiple_choice', questionText: 'What if size < K?', options: ['No K-th exists yet', 'Return 0', 'Panic'], correctAnswer: 'No K-th exists yet' },
      { type: 'code_fill_in', questionText: 'Check size.', codeSnippet: 'if (pq.size() ___ k) pq.pop();', correctAnswer: '>' },
      { type: 'teaching', questionText: 'By Pico: "Streaming truth! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Is the rank steady?"', options: ['SQUAWK YES!', 'No.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 37,
    title: 'Merge K Sorted Lists',
    desc: 'K-way merge for Linked Lists using Heaps.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "List Junction! Connect K sorted linked lists into one sorted scroll! 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Store the HEAD of each list in a Min-Heap. Pop the min, attach to result, and push `min.next` into the heap! 🦜"', codeSnippet: 'while(!pq.empty()) {\n  Node* minNode = pq.pop();\n  curr.next = minNode;\n  if(minNode.next) pq.push(minNode.next);\n}' },
      { type: 'multiple_choice', questionText: 'Complexity of K-way merge for N nodes total?', options: ['O(N log K)', 'O(N log N)', 'O(KN)'], correctAnswer: 'O(N log K)' },
      { type: 'match_following', questionText: 'Match List tools!', pairs: [{key: 'Min-Heap', value: 'Node selection'}, {key: 'curr.next', value: 'Building link'}, {key: 'node.next', value: 'Identify replacement'}] },
      { type: 'programming_board', questionText: 'The heap stores ___ to nodes.', codeSnippet: 'Storage = ___ ;', correctAnswer: 'pointers' },
      { type: 'teaching', questionText: 'By Pico: "Efficient connections. O(N log K)! 🦜"' },
      { type: 'multiple_choice', questionText: 'Space complexity?', options: ['O(K)', 'O(N)', 'O(1)'], correctAnswer: 'O(K)' },
      { type: 'code_fill_in', questionText: 'Next node check.', codeSnippet: 'if (temp.next != ___ ) pq.push(temp.next);', correctAnswer: 'null' },
      { type: 'teaching', questionText: 'By Pico: "Seamless scroll! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Is the list unified?"', options: ['Perfectly sorted!', 'No.', '0'], correctAnswer: 'Perfectly sorted!' }
    ]
  },
  {
    order: 38,
    title: 'The Busy Bird (CPU)',
    desc: 'Shortest Job First (SJF) scheduling using Priority Queues.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "Task Overload! Pick tasks to minimize average wait time! 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "SJF: always pick the task that takes the least time! Use a Min-Heap! 🦜"', codeSnippet: 'while (hasAvailableTasks) {\n  pq.push(availableTasks);\n  currTask = pq.pop();\n  time += currTask.duration;\n}' },
      { type: 'multiple_choice', questionText: 'Why SJF? ', options: ['Minimizes average wait time', 'Most fair', 'Pico rule'], correctAnswer: 'Minimizes average wait time' },
      { type: 'match_following', questionText: 'Match Scheduling rules!', pairs: [{key: 'Min-Heap', value: 'Shortest duration pick'}, {key: 'Wait Time', value: 'Accumulated delay'}, {key: 'Greedy', value: 'Philosophy'}] },
      { type: 'programming_board', questionText: 'Criterion for priority in SJF.', codeSnippet: 'Priority = ___ ;', correctAnswer: 'duration' },
      { type: 'teaching', questionText: 'By Pico: "Efficiently managing priorities keeps the forest flying smooth! 🦜"' },
      { type: 'multiple_choice', questionText: 'If tasks are [2, 8, 1, 5], which comes first?', options: ['1', '8', '2'], correctAnswer: '1' },
      { type: 'code_fill_in', questionText: 'Pop shortest.', codeSnippet: 'task = pq. ___ ();', correctAnswer: 'pop' },
      { type: 'teaching', questionText: 'By Pico: "Efficient work! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Is the CPU happy?"', options: ['Optimally scheduled!', 'No.', '0'], correctAnswer: 'Optimally scheduled!' }
    ]
  },
  {
    order: 39,
    title: 'The Huffman Forest',
    desc: 'End-to-end building of the Huffman encoding.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "The Grand Library! Combine Min-Heaps with Binary Tree nodes. 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "The final root is the key to the entire forest code! 🦜"', codeSnippet: 'Node* root = buildHuffmanTree(freqMap);' },
      { type: 'multiple_choice', questionText: 'Frequency of the root node?', options: ['Sum of all frequencies', 'Most common char', '0'], correctAnswer: 'Sum of all frequencies' },
      { type: 'match_following', questionText: 'Match Forest pieces!', pairs: [{key: 'Leaves', value: 'Characters'}, {key: 'Internal Nodes', value: 'Frequency sums'}, {key: 'Path', value: 'Bit sequence'}] },
      { type: 'programming_board', questionText: 'Type of heap used in Huffman.', codeSnippet: 'Heap Type = ___ ;', correctAnswer: 'min heap' },
      { type: 'teaching', questionText: 'By Pico: "O(N log N) to build. The gold standard for entropy coding! 🦜"' },
      { type: 'multiple_choice', questionText: 'Is Huffman Lossless?', options: ['Yes', 'No', 'Sometimes'], correctAnswer: 'Yes' },
      { type: 'code_fill_in', questionText: 'Final node.', codeSnippet: 'return pq. ___ ();', correctAnswer: 'top' },
      { type: 'teaching', questionText: 'By Pico: "Masterful compression! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Is the forest library complete?"', options: ['SQUAWK YES!', 'No.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 40,
    title: 'Stage 2 Graduation',
    desc: 'Completion of Intermediate Heaps mastery.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "CONGRATULATIONS! You have mastered the application layer of the Priority Canopy! 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Dijkstra, Prim, Huffman, and Sliding Windows. Your priority logic is unstoppable! Stage 3 awaits for the ELITE finale! 🦜"' },
      { type: 'multiple_choice', questionText: 'Huffman use?', options: ['Min-Heap', 'Max-Heap'], correctAnswer: 'Min-Heap' },
      { type: 'multiple_choice', questionText: 'Dijkstra complexity?', options: ['O(E log V)', 'O(V^2)'], correctAnswer: 'O(E log V)' },
      { type: 'multiple_choice', questionText: 'Sliding window max?', options: ['Max-Heap {val, idx}', 'Min-Heap'], correctAnswer: 'Max-Heap {val, idx}' },
      { type: 'match_following', questionText: 'Stage 2 Final Match!', pairs: [{key: 'Algorithms', value: 'Mastered!'}, {key: 'Efficiency', value: 'Elite!'}, {key: 'Next', value: 'God-Mode!'}] },
      { type: 'teaching', questionText: 'By Pico: "One final stage to become a God of the Priority Forest! SQUAWK! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Are you ready for the peak?"', options: ['SQUAWK YES!', 'Fly high!', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  }
];

module.exports = stage2;
