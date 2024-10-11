/*
 * @lc app=leetcode.cn id=3164 lang=typescript
 *
 * [3164] 优质数对的总数 II
 *
 * https://leetcode.cn/problems/find-the-number-of-good-pairs-ii/description/
 *
 * algorithms
 * Medium (30.14%)
 * Likes:    36
 * Dislikes: 0
 * Total Accepted:    14.4K
 * Total Submissions: 36.4K
 * Testcase Example:  '[1,3,4]\n[1,3,4]\n1'
 *
 * 给你两个整数数组 nums1 和 nums2，长度分别为 n 和 m。同时给你一个正整数 k。
 *
 * 如果 nums1[i] 可以被 nums2[j] * k 整除，则称数对 (i, j) 为 优质数对（0 <= i <= n - 1, 0 <= j
 * <= m - 1）。
 *
 * 返回 优质数对 的总数。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums1 = [1,3,4], nums2 = [1,3,4], k = 1
 *
 * 输出：5
 *
 * 解释：
 *
 * 5个优质数对分别是 (0, 0), (1, 0), (1, 1), (2, 0), 和 (2, 2)。
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums1 = [1,2,4,12], nums2 = [2,4], k = 3
 *
 * 输出：2
 *
 * 解释：
 *
 * 2个优质数对分别是 (3, 0) 和 (3, 1)。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= n, m <= 10^5
 * 1 <= nums1[i], nums2[j] <= 10^6
 * 1 <= k <= 10^3
 *
 *
 */

// @lc code=start
function numberOfPairs(nums1: number[], nums2: number[], k: number): number {
  const cnt1: Map<number, number> = new Map();
  const cnt2: Map<number, number> = new Map();
  let max1 = 0;
  for (const num of nums1) {
    cnt1.set(num, (cnt1.get(num) ?? 0) + 1);
    max1 = Math.max(max1, num);
  }
  for (const num of nums2) {
    cnt2.set(num, (cnt2.get(num) ?? 0) + 1);
  }
  let res = 0;
  for (const [a, c] of cnt2) {
    for (let b = a * k; b <= max1; b += a * k) {
      if (cnt1.has(b)) {
        res += c * cnt1.get(b)!;
      }
    }
  }
  return res;
}
// @lc code=end
