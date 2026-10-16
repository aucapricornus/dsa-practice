import { describe, expect, test } from "bun:test";
import { twoSum } from "./two-sum";

describe("1. Two Sum", () => {
  test("example 1", () => expect(twoSum([2, 7, 11, 15], 9).sort((a, b) => a - b)).toEqual([0, 1]));
  test("example 2", () => expect(twoSum([3, 2, 4], 6).sort((a, b) => a - b)).toEqual([1, 2]));
  test("duplicates", () => expect(twoSum([3, 3], 6).sort((a, b) => a - b)).toEqual([0, 1]));
});
