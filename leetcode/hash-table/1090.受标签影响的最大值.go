/*
 * @lc app=leetcode.cn id=1090 lang=golang
 *
 * [1090] 受标签影响的最大值
 *
 * https://leetcode.cn/problems/largest-values-from-labels/description/
 *
 * algorithms
 * Medium (58.40%)
 * Likes:    56
 * Dislikes: 0
 * Total Accepted:    14.2K
 * Total Submissions: 21.6K
 * Testcase Example:  '[5,4,3,2,1]\n[1,1,2,2,3]\n3\n1'
 *
 * 我们有一个 n 项的集合。给出两个整数数组 values 和 labels ，第 i 个元素的值和标签分别是 values[i] 和
 * labels[i]。还会给出两个整数 numWanted 和 useLimit 。
 *
 * 从 n 个元素中选择一个子集 s :
 *
 *
 * 子集 s 的大小 小于或等于 numWanted 。
 * s 中 最多 有相同标签的 useLimit 项。
 *
 *
 * 一个子集的 分数 是该子集的值之和。
 *
 * 返回子集 s 的最大 分数 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：values = [5,4,3,2,1], labels = [1,1,2,2,3], numWanted = 3, useLimit = 1
 * 输出：9
 * 解释：选出的子集是第一项，第三项和第五项。
 *
 *
 * 示例 2：
 *
 *
 * 输入：values = [5,4,3,2,1], labels = [1,3,3,3,2], numWanted = 3, useLimit = 2
 * 输出：12
 * 解释：选出的子集是第一项，第二项和第三项。
 *
 *
 * 示例 3：
 *
 *
 * 输入：values = [9,8,8,7,6], labels = [0,0,0,1,1], numWanted = 3, useLimit = 1
 * 输出：16
 * 解释：选出的子集是第一项和第四项。
 *
 *
 *
 *
 * 提示：
 *
 *
 * n == values.length == labels.length
 * 1 <= n <= 2 * 10^4
 * 0 <= values[i], labels[i] <= 2 * 10^4
 * 1 <= numWanted, useLimit <= n
 *
 *
 */

package leetcode

import "sort"

// @lc code=start
func largestValsFromLabels(values []int, labels []int, numWanted int, useLimit int) int {
	n := len(values)
	indexes := make([]int, n)
	for i := 0; i < n; i++ {
		indexes[i] = i
	}
	sort.Slice(indexes, func(i, j int) bool {
		return values[indexes[i]] > values[indexes[j]]
	})
	res := 0
	choose := 0
	cnt := make(map[int]int)
	for i := 0; i < n; i++ {
		label := labels[indexes[i]]
		if cnt[label] == useLimit {
			continue
		}
		choose++
		res += values[indexes[i]]
		cnt[label]++
		if choose == numWanted {
			break
		}
	}
	return res
}

// @lc code=end
