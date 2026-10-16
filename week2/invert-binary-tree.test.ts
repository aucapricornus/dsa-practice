import { describe, expect, test } from "bun:test";
import { toTree, fromTree } from "../lib/structures";
import { invertTree } from "./invert-binary-tree";

describe("226. Invert Binary Tree", () => {
  test("example 1", () => expect(fromTree(invertTree(toTree([4, 2, 7, 1, 3, 6, 9])))).toEqual([4, 7, 2, 9, 6, 3, 1]));
  test("small", () => expect(fromTree(invertTree(toTree([2, 1, 3])))).toEqual([2, 3, 1]));
  test("empty", () => expect(fromTree(invertTree(toTree([])))).toEqual([]));
});
