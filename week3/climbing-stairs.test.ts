import { describe, expect, test } from "bun:test";
import { climbStairs } from "./climbing-stairs";

describe("70. Climbing Stairs", () => {
  test("n=2", () => expect(climbStairs(2)).toBe(2));
  test("n=3", () => expect(climbStairs(3)).toBe(3));
  test("n=5", () => expect(climbStairs(5)).toBe(8));
  test("n=45 (needs DP, not naive recursion)", () => expect(climbStairs(45)).toBe(1836311903));
});
