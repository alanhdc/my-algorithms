/*
 * @lc app=leetcode.cn id=2956 lang=golang
 *
 * [2956] 找到两个数组中的公共元素
 *
 * https://leetcode.cn/problems/find-common-elements-between-two-arrays/description/
 *
 * algorithms
 * Easy (80.17%)
 * Likes:    19
 * Dislikes: 0
 * Total Accepted:    13.6K
 * Total Submissions: 16.2K
 * Testcase Example:  '[2,3,2]\n[1,2]'
 *
 * 给你两个下标从 0 开始的整数数组 nums1 和 nums2 ，它们分别含有 n 和 m 个元素。
 *
 * 请你计算以下两个数值：
 *
 *
 * 统计 0 <= i < n 中的下标 i ，满足 nums1[i] 在 nums2 中 至少 出现了一次。
 * 统计 0 <= i < m 中的下标 i ，满足 nums2[i] 在 nums1 中 至少 出现了一次。
 *
 *
 * 请你返回一个长度为 2 的整数数组 answer ，按顺序 分别为以上两个数值。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums1 = [4,3,2,3,1], nums2 = [2,2,5,2,3,6]
 * 输出：[3,4]
 * 解释：分别计算两个数值：
 * - nums1 中下标为 1 ，2 和 3 的元素在 nums2 中至少出现了一次，所以第一个值为 3 。
 * - nums2 中下标为 0 ，1 ，3 和 4 的元素在 nums1 中至少出现了一次，所以第二个值为 4 。
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums1 = [3,4,2,3], nums2 = [1,5]
 * 输出：[0,0]
 * 解释：两个数组中没有公共元素，所以两个值都为 0 。
 *
 *
 *
 *
 * 提示：
 *
 *
 * n == nums1.length
 * m == nums2.length
 * 1 <= n, m <= 100
 * 1 <= nums1[i], nums2[i] <= 100
 *
 *
 */

package leetcode

// @lc code=start
func findIntersectionValues(nums1 []int, nums2 []int) []int {
	set1, set2 := make(map[int]bool), make(map[int]bool)
	for _, v := range nums1 {
		set1[v] = true
	}
	for _, v := range nums2 {
		set2[v] = true
	}

	res := make([]int, 2)

	for _, v := range nums1 {
		if set2[v] {
			res[0]++
		}
	}
	for _, v := range nums2 {
		if set1[v] {
			res[1]++
		}
	}
	return res
}

// @lc code=end
