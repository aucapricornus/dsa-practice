import { describe, expect, test } from "bun:test";
import { searchRotated } from "./search-rotated-sorted-array";

describe("33. Search in Rotated Sorted Array", () => {
  test("found", () => expect(searchRotated([4, 5, 6, 7, 0, 1, 2], 0)).toBe(4));
  test("missing", () => expect(searchRotated([4, 5, 6, 7, 0, 1, 2], 3)).toBe(-1));
  test("single missing", () => expect(searchRotated([1], 0)).toBe(-1));
  test("left half", () => expect(searchRotated([4, 5, 6, 7, 0, 1, 2], 5)).toBe(1));
});
