# Notes and cheat sheet

## Big-O in one minute

| Complexity | Name | Typical example |
|---|---|---|
| O(1) | constant | `map.get(key)`, `arr[i]`, `arr.push(x)` |
| O(log n) | logarithmic | binary search, heap push/pop |
| O(n) | linear | one loop over the input |
| O(n log n) | linearithmic | `arr.sort()`, good sorting in general |
| O(n²) | quadratic | nested loops over the same input |
| O(2ⁿ) | exponential | naive recursion like `fib(n - 1) + fib(n - 2)` |

Always state **time and space**. Space counts extra memory you allocate, such as a Map, Set, copied array, or recursion stack.

## Spotting the pattern

| If the problem says... | Try |
|---|---|
| "find a pair / have I seen this before?" | Hash map or set, O(n) |
| "sorted array", "pair that sums to X" | Two pointers from both ends |
| "longest/shortest substring or subarray with ..." | Sliding window (expand right, shrink left) |
| "matching brackets", "most recent", "undo" | Stack |
| "sorted" + "find" in less than O(n) | Binary search |
| linked list cycle, middle of the list | Fast and slow pointers |
| tree depth, paths, validity | DFS (recursion) |
| tree "level by level", shortest path in an unweighted graph | BFS (queue) |
| grid of cells, "connected", "islands" | DFS/BFS from each unvisited cell |
| "top k", "kth largest", "always take the smallest" | Heap |
| "number of ways", "min/max cost", overlapping subproblems | Dynamic programming |
| intervals, meetings, ranges | Sort by start, then sweep |

## TypeScript / JavaScript idioms

```ts
const count = new Map<string, number>();
count.set(c, (count.get(c) ?? 0) + 1);    // frequency count

const seen = new Set<number>();            // O(1) has/add/delete

nums.sort((a, b) => a - b);                // numbers! plain .sort() compares as strings

const stack: number[] = [];                // stack: push / pop, both O(1)
stack.push(1); stack.pop();

// queue: arr.shift() is O(n), so walk an index instead
const queue = [start];
for (let i = 0; i < queue.length; i++) { const node = queue[i]; /* queue.push(...) */ }

const mid = (lo + hi) >> 1;                // integer midpoint

const grid2 = Array.from({ length: rows }, () => new Array(cols).fill(0));  // not fill([])!

const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];  // grid neighbours
```

There is no built-in heap. Either sort, or write a small binary heap where the parent of `i` is `(i - 1) >> 1` and the children are `2i + 1` and `2i + 2`.

## Interview routine (out loud)

1. **Restate** the problem and ask about edge cases: empty input, duplicates, negatives, size limits.
2. **Examples:** walk through one small case by hand.
3. **Brute force first:** say it and give its complexity, even if you won't code it.
4. **Improve:** name the pattern and why it applies.
5. **Code:** clean names, small helpers, and keep talking.
6. **Test:** trace your code on the example, then on an edge case.
7. **Complexity:** state the final time and space.

## Backend extra: JavaScript async

- **Event loop:** synchronous code runs first, then microtasks (promise callbacks), then macrotasks (`setTimeout`, I/O).
- `await` in a loop runs the tasks one after another. `Promise.all` runs them concurrently and fails fast. `Promise.allSettled` waits for all of them, failures included.
- **Race condition example:** two requests read the same vehicle as "free" and both assign it. Fix it in the database (a transaction, a row lock, or a conditional `UPDATE ... WHERE status = 'free'`), not with in-memory flags, because there may be several server instances.
