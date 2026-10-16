import { describe, expect, test } from "bun:test";
import { coinChange } from "./coin-change";

describe("322. Coin Change", () => {
  test("example 1", () => expect(coinChange([1, 2, 5], 11)).toBe(3));
  test("impossible", () => expect(coinChange([2], 3)).toBe(-1));
  test("zero amount", () => expect(coinChange([1], 0)).toBe(0));
  test("greedy fails", () => expect(coinChange([1, 3, 4], 6)).toBe(2));
});
