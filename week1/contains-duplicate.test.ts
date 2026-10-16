import { describe, expect, test } from "bun:test";
import { containsDuplicate } from "./contains-duplicate";

describe("217. Contains Duplicate", () => {
  test("has duplicate", () => expect(containsDuplicate([1, 2, 3, 1])).toBe(true));
  test("all distinct", () => expect(containsDuplicate([1, 2, 3, 4])).toBe(false));
  test("many duplicates", () => expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true));
});
