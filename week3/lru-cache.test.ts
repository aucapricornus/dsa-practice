import { describe, expect, test } from "bun:test";
import { LRUCache } from "./lru-cache";

describe("146. LRU Cache", () => {
  test("example 1", () => {
    const cache = new LRUCache(2);
    cache.put(1, 1);
    cache.put(2, 2);
    expect(cache.get(1)).toBe(1);
    cache.put(3, 3); // evicts key 2
    expect(cache.get(2)).toBe(-1);
    cache.put(4, 4); // evicts key 1
    expect(cache.get(1)).toBe(-1);
    expect(cache.get(3)).toBe(3);
    expect(cache.get(4)).toBe(4);
  });
  test("updating a key refreshes it", () => {
    const cache = new LRUCache(2);
    cache.put(1, 1);
    cache.put(2, 2);
    cache.put(1, 10); // key 1 is now most recent
    cache.put(3, 3); // evicts key 2
    expect(cache.get(2)).toBe(-1);
    expect(cache.get(1)).toBe(10);
  });
});
