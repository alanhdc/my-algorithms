/*
 * @lc app=leetcode.cn id=462 lang=golang
 *
 * [462] 最少移动次数使数组元素相等 II
 *
 * https://leetcode.cn/problems/minimum-moves-to-equal-array-elements-ii/description/
 *
 * algorithms
 * Medium (61.41%)
 * Likes:    186
 * Dislikes: 0
 * Total Accepted:    24K
 * Total Submissions: 38.9K
 * Testcase Example:  '[1,2,3]'
 *
 * 给你一个长度为 n 的整数数组 nums ，返回使所有数组元素相等需要的最少移动数。
 *
 * 在一步操作中，你可以使数组中的一个元素加 1 或者减 1 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [1,2,3]
 * 输出：2
 * 解释：
 * 只需要两步操作（每步操作指南使一个元素加 1 或减 1）：
 * [1,2,3]  =>  [2,2,3]  =>  [2,2,2]
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [1,10,2,9]
 * 输出：16
 *
 *
 *
 *
 * 提示：
 *
 *
 * n == nums.length
 * 1 <= nums.length <= 10^5
 * -10^9 <= nums[i] <= 10^9
 *
 *
 */

package leetcode

import "sort"

// @lc code=start
func minMoves2(nums []int) int {
	sort.Ints(nums)
	l, r, res := 0, len(nums)-1, 0
	for l < r {
		res += nums[r] - nums[l]
		l++
		r--
	}
	return res
}

// @lc code=end
