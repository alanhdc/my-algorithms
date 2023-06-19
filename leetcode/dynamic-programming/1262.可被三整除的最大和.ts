/*
 * @lc app=leetcode.cn id=1262 lang=typescript
 *
 * [1262] 可被三整除的最大和
 *
 * https://leetcode.cn/problems/greatest-sum-divisible-by-three/description/
 *
 * algorithms
 * Medium (52.69%)
 * Likes:    253
 * Dislikes: 0
 * Total Accepted:    26.1K
 * Total Submissions: 48.1K
 * Testcase Example:  '[3,6,5,1,8]'
 *
 * 给你一个整数数组 nums，请你找出并返回能被三整除的元素最大和。
 *
 *
 *
 *
 *
 *
 * 示例 1：
 *
 * 输入：nums = [3,6,5,1,8]
 * 输出：18
 * 解释：选出数字 3, 6, 1 和 8，它们的和是 18（可被 3 整除的最大和）。
 *
 * 示例 2：
 *
 * 输入：nums = [4]
 * 输出：0
 * 解释：4 不能被 3 整除，所以无法选出数字，返回 0。
 *
 *
 * 示例 3：
 *
 * 输入：nums = [1,2,3,4,4]
 * 输出：12
 * 解释：选出数字 1, 3, 4 以及 4，它们的和是 12（可被 3 整除的最大和）。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= nums.length <= 4 * 10^4
 * 1 <= nums[i] <= 10^4
 *
 *
 */

// @lc code=start
function maxSumDivThree(nums: number[]): number {
  let f = [0, -Infinity, -Infinity];
  for (const num of nums) {
    const g = [...f];
    for (let i = 0; i < 3; i++) {
      const idx = (i + (num % 3)) % 3;
      g[idx] = Math.max(g[idx], f[i] + num);
    }
    f = g;
  }
  return f[0];
}
// @lc code=end
