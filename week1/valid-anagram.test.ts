import { describe, expect, test } from "bun:test";
import { isAnagram } from "./valid-anagram";

describe("242. Valid Anagram", () => {
  test("anagram", () => expect(isAnagram("anagram", "nagaram")).toBe(true));
  test("not anagram", () => expect(isAnagram("rat", "car")).toBe(false));
  test("different lengths", () => expect(isAnagram("a", "ab")).toBe(false));
});
