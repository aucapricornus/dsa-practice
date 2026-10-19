// 1. Two Sum (Easy) - https://leetcode.com/problems/two-sum/
// Pattern: Hash map (value -> index)

export function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}

let testNums = [1, 2, 3, 4, 5, 6];
let target = 11;
console.log(`Input: ${testNums}, target = ${target}`);
console.log(twoSum(testNums, target));
