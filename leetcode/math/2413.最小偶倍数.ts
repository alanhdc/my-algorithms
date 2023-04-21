/*
 * @lc app=leetcode.cn id=2413 lang=typescript
 *
 * [2413] 最小偶倍数
 *
 * https://leetcode.cn/problems/smallest-even-multiple/description/
 *
 * algorithms
 * Easy (86.37%)
 * Likes:    42
 * Dislikes: 0
 * Total Accepted:    28.4K
 * Total Submissions: 32.2K
 * Testcase Example:  '5'
 *
 * 给你一个正整数 n ，返回 2 和 n 的最小公倍数（正整数）。
 *
 *
 * 示例 1：
 *
 * 输入：n = 5
 * 输出：10
 * 解释：5 和 2 的最小公倍数是 10 。
 *
 *
 * 示例 2：
 *
 * 输入：n = 6
 * 输出：6
 * 解释：6 和 2 的最小公倍数是 6 。注意数字会是它自身的倍数。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= n <= 150
 *
 *
 */

// @lc code=start
function smallestEvenMultiple(n: number): number {
  return n % 2 === 0 ? n : n * 2;
}
// @lc code=end
