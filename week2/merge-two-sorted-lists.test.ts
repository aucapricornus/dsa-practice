import { describe, expect, test } from "bun:test";
import { toList, fromList } from "../lib/structures";
import { mergeTwoLists } from "./merge-two-sorted-lists";

describe("21. Merge Two Sorted Lists", () => {
  test("example 1", () =>
    expect(fromList(mergeTwoLists(toList([1, 2, 4]), toList([1, 3, 4])))).toEqual([1, 1, 2, 3, 4, 4]));
  test("both empty", () => expect(fromList(mergeTwoLists(toList([]), toList([]))))
    .toEqual([]));
  test("one empty", () => expect(fromList(mergeTwoLists(toList([]), toList([0])))).toEqual([0]));
});
