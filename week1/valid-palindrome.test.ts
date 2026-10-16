import { describe, expect, test } from "bun:test";
import { isPalindrome } from "./valid-palindrome";

describe("125. Valid Palindrome", () => {
  test("sentence", () => expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true));
  test("not palindrome", () => expect(isPalindrome("race a car")).toBe(false));
  test("only spaces", () => expect(isPalindrome(" ")).toBe(true));
});
