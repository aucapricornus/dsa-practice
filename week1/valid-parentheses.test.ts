import { describe, expect, test } from "bun:test";
import { isValid } from "./valid-parentheses";

describe("20. Valid Parentheses", () => {
  test("()", () => expect(isValid("()")).toBe(true));
  test("()[]{}", () => expect(isValid("()[]{}")).toBe(true));
  test("(]", () => expect(isValid("(]")).toBe(false));
  test("([])", () => expect(isValid("([])")).toBe(true));
  test("([)]", () => expect(isValid("([)]")).toBe(false));
  test("unclosed", () => expect(isValid("((")).toBe(false));
});
