import { describe, expect, test } from "bun:test";
import { lengthOfLongestSubstring } from "./longest-substring-without-repeating";

describe("3. Longest Substring Without Repeating Characters", () => {
  test("abcabcbb", () => expect(lengthOfLongestSubstring("abcabcbb")).toBe(3));
  test("bbbbb", () => expect(lengthOfLongestSubstring("bbbbb")).toBe(1));
  test("pwwkew", () => expect(lengthOfLongestSubstring("pwwkew")).toBe(3));
  test("empty", () => expect(lengthOfLongestSubstring("")).toBe(0));
});
