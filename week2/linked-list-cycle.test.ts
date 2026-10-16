import { describe, expect, test } from "bun:test";
import { toListWithCycle } from "../lib/structures";
import { hasCycle } from "./linked-list-cycle";

describe("141. Linked List Cycle", () => {
  test("cycle at 1", () => expect(hasCycle(toListWithCycle([3, 2, 0, -4], 1))).toBe(true));
  test("cycle at 0", () => expect(hasCycle(toListWithCycle([1, 2], 0))).toBe(true));
  test("no cycle", () => expect(hasCycle(toListWithCycle([1], -1))).toBe(false));
  test("empty", () => expect(hasCycle(null)).toBe(false));
});
