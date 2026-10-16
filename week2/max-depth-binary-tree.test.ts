import { describe, expect, test } from "bun:test";
import { toTree } from "../lib/structures";
import { maxDepth } from "./max-depth-binary-tree";

describe("104. Maximum Depth of Binary Tree", () => {
  test("example 1", () => expect(maxDepth(toTree([3, 9, 20, null, null, 15, 7]))).toBe(3));
  test("right only", () => expect(maxDepth(toTree([1, null, 2]))).toBe(2));
  test("empty", () => expect(maxDepth(null)).toBe(0));
});
