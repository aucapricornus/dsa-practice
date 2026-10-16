import { describe, expect, test } from "bun:test";
import { rob } from "./house-robber";

describe("198. House Robber", () => {
  test("example 1", () => expect(rob([1, 2, 3, 1])).toBe(4));
  test("example 2", () => expect(rob([2, 7, 9, 3, 1])).toBe(12));
  test("single", () => expect(rob([5])).toBe(5));
});
