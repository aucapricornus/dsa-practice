import { describe, expect, test } from "bun:test";
import { toTree } from "../lib/structures";
import { isValidBST } from "./validate-bst";

describe("98. Validate Binary Search Tree", () => {
  test("valid", () => expect(isValidBST(toTree([2, 1, 3]))).toBe(true));
  test("right child too small", () => expect(isValidBST(toTree([5, 1, 4, null, null, 3, 6]))).toBe(false));
  test("grandchild breaks the root bound", () => expect(isValidBST(toTree([5, 4, 6, null, null, 3, 7]))).toBe(false));
});
