/*
 * @lc app=leetcode.cn id=698 lang=typescript
 *
 * [698] 划分为k个相等的子集
 *
 * https://leetcode.cn/problems/partition-to-k-equal-sum-subsets/description/
 *
 * algorithms
 * Medium (41.37%)
 * Likes:    717
 * Dislikes: 0
 * Total Accepted:    67.4K
 * Total Submissions: 161.9K
 * Testcase Example:  '[4,3,2,3,5,2,1]\n4'
 *
 * 给定一个整数数组  nums 和一个正整数 k，找出是否有可能把这个数组分成 k 个非空子集，其总和都相等。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入： nums = [4, 3, 2, 3, 5, 2, 1], k = 4
 * 输出： True
 * 说明： 有可能将其分成 4 个子集（5），（1,4），（2,3），（2,3）等于总和。
 *
 * 示例 2:
 *
 *
 * 输入: nums = [1,2,3,4], k = 3
 * 输出: false
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= k <= len(nums) <= 16
 * 0 < nums[i] < 10000
 * 每个元素的频率在 [1,4] 范围内
 *
 *
 */

// @lc code=start
// backtracking
function canPartitionKSubsets(nums: number[], k: number): boolean {
  const n = nums.length;
  const sum = nums.reduce((a, b) => a + b);
  if (sum % k !== 0) {
    return false;
  }
  const average = sum / k;
  nums.sort((a, b) => a - b);
  if (nums[n - 1] > average) {
    return false;
  }
  const visited: boolean[] = new Array(n).fill(false);
  return dfs(n - 1, 0, 0, visited);

  function dfs(
    idx: number,
    current: number,
    count: number,
    visited: boolean[]
  ): boolean {
    if (count === k) {
      return true;
    }
    if (current === average) {
      return dfs(n - 1, 0, count + 1, visited);
    }
    if (idx === -1) {
      return false;
    }
    for (let i = idx; i >= 0; i--) {
      if (visited[i] || current + nums[i] > average) {
        continue;
      }
      visited[i] = true;
      if (dfs(i - 1, current + nums[i], count, visited)) {
        return true;
      }
      visited[i] = false;
      if (current === 0) {
        return false;
      }
    }
    return false;
  }
}
// @lc code=end
