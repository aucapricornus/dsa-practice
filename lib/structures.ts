// Shared helpers for linked-list and tree problems (LeetCode's array formats).

export class ListNode {
  constructor(
    public val = 0,
    public next: ListNode | null = null,
  ) {}
}

export class TreeNode {
  constructor(
    public val = 0,
    public left: TreeNode | null = null,
    public right: TreeNode | null = null,
  ) {}
}

/** [1, 2, 3] -> 1 -> 2 -> 3 */
export function toList(values: number[]): ListNode | null {
  const dummy = new ListNode();
  let tail = dummy;
  for (const v of values) tail = tail.next = new ListNode(v);
  return dummy.next;
}

/** 1 -> 2 -> 3 -> [1, 2, 3] (stops after 10,000 nodes in case of a cycle) */
export function fromList(head: ListNode | null): number[] {
  const out: number[] = [];
  for (let n = head; n && out.length < 10_000; n = n.next) out.push(n.val);
  return out;
}

/** Builds a list whose tail points back to index `pos` (-1 = no cycle), as in LeetCode 141. */
export function toListWithCycle(values: number[], pos: number): ListNode | null {
  const head = toList(values);
  if (pos < 0 || !head) return head;
  let target: ListNode | null = null;
  let tail = head;
  for (let i = 0, n: ListNode | null = head; n; i++, n = n.next) {
    if (i === pos) target = n;
    tail = n;
  }
  tail.next = target;
  return head;
}

/** Level-order array with nulls, LeetCode style: [3, 9, 20, null, null, 15, 7] */
export function toTree(values: (number | null)[]): TreeNode | null {
  if (!values.length || values[0] === null) return null;
  const root = new TreeNode(values[0]);
  const queue = [root];
  let i = 1;
  for (let q = 0; q < queue.length && i < values.length; q++) {
    const node = queue[q];
    const l = values[i++];
    if (l !== null && l !== undefined) queue.push((node.left = new TreeNode(l)));
    const r = values[i++];
    if (r !== null && r !== undefined) queue.push((node.right = new TreeNode(r)));
  }
  return root;
}

/** Inverse of toTree, with trailing nulls trimmed. */
export function fromTree(root: TreeNode | null): (number | null)[] {
  const out: (number | null)[] = [];
  const queue: (TreeNode | null)[] = [root];
  for (let q = 0; q < queue.length; q++) {
    const n = queue[q];
    out.push(n ? n.val : null);
    if (n) queue.push(n.left, n.right);
  }
  while (out.length && out[out.length - 1] === null) out.pop();
  return out;
}
