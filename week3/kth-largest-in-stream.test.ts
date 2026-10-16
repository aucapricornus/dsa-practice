import { describe, expect, test } from "bun:test";
import { KthLargest } from "./kth-largest-in-stream";

describe("703. Kth Largest Element in a Stream", () => {
  test("example 1", () => {
    const kth = new KthLargest(3, [4, 5, 8, 2]);
    expect([3, 5, 10, 9, 4].map((v) => kth.add(v))).toEqual([4, 5, 5, 8, 8]);
  });
  test("starts empty", () => {
    const kth = new KthLargest(1, []);
    expect([-3, -2, -4, 0, 4].map((v) => kth.add(v))).toEqual([-3, -2, -2, 0, 4]);
  });
});
