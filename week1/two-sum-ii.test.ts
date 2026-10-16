import { describe, expect, test } from "bun:test";
import { twoSumSorted } from "./two-sum-ii";

describe("167. Two Sum II - Input Array Is Sorted", () => {
  test("example 1", () => expect(twoSumSorted([2, 7, 11, 15], 9)).toEqual([1, 2]));
  test("example 2", () => expect(twoSumSorted([2, 3, 4], 6)).toEqual([1, 3]));
  test("negative", () => expect(twoSumSorted([-1, 0], -1)).toEqual([1, 2]));
});
