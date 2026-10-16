import { describe, expect, test } from "bun:test";
import { toList, fromList } from "../lib/structures";
import { reverseList } from "./reverse-linked-list";

describe("206. Reverse Linked List", () => {
  test("five nodes", () => expect(fromList(reverseList(toList([1, 2, 3, 4, 5])))).toEqual([5, 4, 3, 2, 1]));
  test("two nodes", () => expect(fromList(reverseList(toList([1, 2])))).toEqual([2, 1]));
  test("empty", () => expect(fromList(reverseList(toList([])))).toEqual([]));
});
