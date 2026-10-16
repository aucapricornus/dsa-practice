import { describe, expect, test } from "bun:test";
import { search } from "./binary-search";

describe("704. Binary Search", () => {
  test("found", () => expect(search([-1, 0, 3, 5, 9, 12], 9)).toBe(4));
  test("missing", () => expect(search([-1, 0, 3, 5, 9, 12], 2)).toBe(-1));
  test("single", () => expect(search([5], 5)).toBe(0));
});
