import { describe, expect, test } from "bun:test";
import { maxProfit } from "./best-time-to-buy-and-sell-stock";

describe("121. Best Time to Buy and Sell Stock", () => {
  test("example 1", () => expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5));
  test("only falling", () => expect(maxProfit([7, 6, 4, 3, 1])).toBe(0));
});
