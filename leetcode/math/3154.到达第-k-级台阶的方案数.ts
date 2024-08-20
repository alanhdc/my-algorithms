/*
 * @lc app=leetcode.cn id=3154 lang=typescript
 *
 * [3154] 到达第 K 级台阶的方案数
 *
 * https://leetcode.cn/problems/find-number-of-ways-to-reach-the-k-th-stair/description/
 *
 * algorithms
 * Hard (45.33%)
 * Likes:    27
 * Dislikes: 0
 * Total Accepted:    6.9K
 * Total Submissions: 13K
 * Testcase Example:  '0'
 *
 * 给你有一个 非负 整数 k 。有一个无限长度的台阶，最低 一层编号为 0 。
 *
 * Alice 有一个整数 jump ，一开始值为 0 。Alice 从台阶 1 开始，可以使用 任意 次操作，目标是到达第 k 级台阶。假设 Alice
 * 位于台阶 i ，一次 操作 中，Alice 可以：
 *
 *
 * 向下走一级到 i - 1 ，但该操作 不能 连续使用，如果在台阶第 0 级也不能使用。
 * 向上走到台阶 i + 2^jump 处，然后 jump 变为 jump + 1 。
 *
 *
 * 请你返回 Alice 到达台阶 k 处的总方案数。
 *
 * 注意，Alice 可能到达台阶 k 处后，通过一些操作重新回到台阶 k 处，这视为不同的方案。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：k = 0
 *
 * 输出：2
 *
 * 解释：
 *
 * 2 种到达台阶 0 的方案为：
 *
 *
 * Alice 从台阶 1 开始。
 *
 * 执行第一种操作，从台阶 1 向下走到台阶 0 。
 *
 *
 * Alice 从台阶 1 开始。
 *
 * 执行第一种操作，从台阶 1 向下走到台阶 0 。
 * 执行第二种操作，向上走 2^0 级台阶到台阶 1 。
 * 执行第一种操作，从台阶 1 向下走到台阶 0 。
 *
 *
 *
 *
 *
 * 示例 2：
 *
 *
 * 输入：k = 1
 *
 * 输出：4
 *
 * 解释：
 *
 * 4 种到达台阶 1 的方案为：
 *
 *
 * Alice 从台阶 1 开始，已经到达台阶 1 。
 * Alice 从台阶 1 开始。
 *
 * 执行第一种操作，从台阶 1 向下走到台阶 0 。
 * 执行第二种操作，向上走 2^0 级台阶到台阶 1 。
 *
 *
 * Alice 从台阶 1 开始。
 *
 * 执行第二种操作，向上走 2^0 级台阶到台阶 2 。
 * 执行第一种操作，向下走 1 级台阶到台阶 1 。
 *
 *
 * Alice 从台阶 1 开始。
 *
 * 执行第一种操作，从台阶 1 向下走到台阶 0 。
 * 执行第二种操作，向上走 2^0 级台阶到台阶 1 。
 * 执行第一种操作，向下走 1 级台阶到台阶 0 。
 * 执行第二种操作，向上走 2^1 级台阶到台阶 2 。
 * 执行第一种操作，向下走 1 级台阶到台阶 1 。
 *
 *
 *
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0 <= k <= 10^9
 *
 *
 */

// @lc code=start
// cv
function waysToReachStair(k: number): number {
  let n = 0;
  let nPow = 1;
  let res = 0;
  while (true) {
    if (nPow - n - 1 <= k && k <= nPow) {
      res += comb(n + 1, nPow - k);
    } else if (nPow - n - 1 > k) {
      break;
    }
    n++;
    nPow *= 2;
  }
  return res;

  function comb(n: number, k: number) {
    let res = 1;
    for (let i = n; i >= n - k + 1; --i) {
      res *= i;
      res /= n - i + 1;
    }
    return res;
  }
}
// @lc code=end
