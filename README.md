# DSA Practice

A 3-week refresh of algorithms and data structures for junior backend interviews, in TypeScript with Bun.

Starts **Fri 2026-10-16**. Plan on 5 sessions a week of about 1.5 hours each. Days are flexible, but keep the order.

## Setup

```bash
cd ~/dsa-practice
bun install          # editor types for bun:test
bun test week1       # all of week 1 (fails until you solve them)
bun test two-sum     # a single problem
bun test --watch two-sum
```

Each problem is a stub (`week1/two-sum.ts`) with a test file next to it. The header comment has the LeetCode link and the pattern. Replace the `throw` with your solution and run the test. You can also submit the same code on LeetCode to check it against hidden cases.

## How to run a session

1. **Concept (15 min):** read or watch the resource for that session's topic.
2. **Attempt (25 min timer):** solve without looking anything up. Say your thinking out loud, because interviews require it.
3. **Stuck?** Watch the problem's NeetCode video. Then **close it** and write the solution from memory.
4. **Log it (5 min):** add a row to `LOG.md` with the pattern, the time and space complexity, and what tripped you up.
5. **Redo:** 3 days later, solve it again from a blank file without the pattern hint. If you can't, it isn't learned yet.

## Week 1 (Oct 16-22): complexity, arrays and hashing, two pointers, sliding window, stack

| Session | Concept | Problems |
|---|---|---|
| 1 | Big-O notation (NOTES.md + Big-O Cheat Sheet), repo setup | 1 Two Sum, 217 Contains Duplicate |
| 2 | Hash maps and sets (CS50 Week 5, hash tables part) | 242 Valid Anagram, 49 Group Anagrams |
| 3 | Frequency counting, bucket sort | 347 Top K Frequent Elements, 125 Valid Palindrome |
| 4 | Two pointers on sorted input | 167 Two Sum II, 121 Best Time to Buy and Sell Stock |
| 5 | Sliding window, stacks | 3 Longest Substring Without Repeating Characters, 20 Valid Parentheses, plus redo the hardest of the week |

## Week 2 (Oct 23-29): binary search, linked lists, recursion, trees

| Session | Concept | Problems |
|---|---|---|
| 1 | Binary search (CS50 Week 3) | 704 Binary Search, 33 Search in Rotated Sorted Array |
| 2 | Linked lists (CS50 Week 5, VisuAlgo linked list) | 206 Reverse Linked List, 21 Merge Two Sorted Lists |
| 3 | Fast/slow pointers, recursion | 141 Linked List Cycle, 104 Maximum Depth of Binary Tree |
| 4 | Tree DFS vs BFS (VisuAlgo BST) | 226 Invert Binary Tree, 102 Level Order Traversal |
| 5 | BST property | 98 Validate BST, plus redo week 1's hardest |

## Week 3 (Oct 30 - Nov 5): graphs, heaps, dynamic programming, design

| Session | Concept | Problems |
|---|---|---|
| 1 | Graph DFS/BFS on grids | 200 Number of Islands, 733 Flood Fill |
| 2 | Heaps / priority queues (VisuAlgo heap) | 703 Kth Largest Element in a Stream |
| 3 | Intro to dynamic programming | 70 Climbing Stairs, 198 House Robber |
| 4 | DP continued, sort + sweep | 322 Coin Change, 56 Merge Intervals |
| 5 | Design problem + **mock interview** | 146 LRU Cache, then one random problem from weeks 1-2 in 30 min, out loud |

For 703, sorting first is fine to start with. Then implement a small min-heap, since JavaScript has no built-in one. For 146, a JS `Map` keeps insertion order, which makes a short solution possible. Be ready to explain the classic hash map + doubly linked list version too.

## After week 3

- Do 2-3 problems a week from the NeetCode 150 list, picking the patterns you logged as weak.
- Do one mock interview a week: a random problem, 30 minutes, talking out loud. Record yourself if you can.
- For backend interviews, also review JavaScript async (event loop, `Promise.all`, race conditions). See the end of `NOTES.md`.

## Resources

- **NeetCode** (https://neetcode.io/roadmap): free roadmap ordered by pattern, with a video solution for every problem here.
- **LeetCode** (https://leetcode.com): every stub links to its problem page. Choose TypeScript as the language.
- **CS50x** (https://cs50.harvard.edu/x/): Week 3 covers algorithms (search, sorting, recursion) and Week 5 covers data structures. Free.
- **VisuAlgo** (https://visualgo.net): animations of linked lists, BSTs, heaps, hash tables and graph traversals.
- **Big-O Cheat Sheet** (https://www.bigocheatsheet.com): complexity tables for common structures and sorts.
- **Grokking Algorithms**, Aditya Bhargava (Manning, 2nd edition): optional paid book, a gentle illustrated intro to the same topics.
