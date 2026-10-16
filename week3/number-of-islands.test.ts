import { describe, expect, test } from "bun:test";
import { numIslands } from "./number-of-islands";

describe("200. Number of Islands", () => {
  test("one island", () =>
    expect(numIslands([
      ["1", "1", "1", "1", "0"],
      ["1", "1", "0", "1", "0"],
      ["1", "1", "0", "0", "0"],
      ["0", "0", "0", "0", "0"],
    ])).toBe(1));
  test("three islands", () =>
    expect(numIslands([
      ["1", "1", "0", "0", "0"],
      ["1", "1", "0", "0", "0"],
      ["0", "0", "1", "0", "0"],
      ["0", "0", "0", "1", "1"],
    ])).toBe(3));
});
