import { describe, expect, test } from "bun:test";
import { topKFrequent } from "./top-k-frequent";

describe("347. Top K Frequent Elements", () => {
  test("example 1", () => expect(topKFrequent([1, 1, 1, 2, 2, 3], 2).sort((a, b) => a - b)).toEqual([1, 2]));
  test("single", () => expect(topKFrequent([1], 1)).toEqual([1]));
  test("negatives", () => expect(topKFrequent([4, -1, -1, 4, 4, 2], 2).sort((a, b) => a - b)).toEqual([-1, 4]));
});
