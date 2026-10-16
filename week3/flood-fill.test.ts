import { describe, expect, test } from "bun:test";
import { floodFill } from "./flood-fill";

describe("733. Flood Fill", () => {
  test("example 1", () =>
    expect(floodFill([[1, 1, 1], [1, 1, 0], [1, 0, 1]], 1, 1, 2)).toEqual([[2, 2, 2], [2, 2, 0], [2, 0, 1]]));
  test("same color", () => expect(floodFill([[0, 0, 0], [0, 0, 0]], 0, 0, 0)).toEqual([[0, 0, 0], [0, 0, 0]]));
});
