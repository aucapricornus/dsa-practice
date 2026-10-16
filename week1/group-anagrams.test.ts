import { describe, expect, test } from "bun:test";
import { groupAnagrams } from "./group-anagrams";

describe("49. Group Anagrams", () => {
  const normalize = (groups: string[][]) =>
    groups.map((g) => [...g].sort()).sort((a, b) => a.join().localeCompare(b.join()));
  test("example 1", () =>
    expect(normalize(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))).toEqual([
      ["ate", "eat", "tea"],
      ["bat"],
      ["nat", "tan"],
    ]));
  test("empty string", () => expect(groupAnagrams([""])).toEqual([[""]]));
  test("single", () => expect(groupAnagrams(["a"])).toEqual([["a"]]));
});
