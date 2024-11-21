/*
 * @lc app=leetcode.cn id=1819 lang=golang
 *
 * [1819] 序列中不同最大公约数的数目
 *
 * https://leetcode.cn/problems/number-of-different-subsequences-gcds/description/
 *
 * algorithms
 * Hard (41.98%)
 * Likes:    115
 * Dislikes: 0
 * Total Accepted:    9.2K
 * Total Submissions: 16.1K
 * Testcase Example:  '[6,10,3]'
 *
 * 给你一个由正整数组成的数组 nums 。
 *
 * 数字序列的 最大公约数 定义为序列中所有整数的共有约数中的最大整数。
 *
 *
 * 例如，序列 [4,6,16] 的最大公约数是 2 。
 *
 *
 * 数组的一个 子序列 本质是一个序列，可以通过删除数组中的某些元素（或者不删除）得到。
 *
 *
 * 例如，[2,5,10] 是 [1,2,1,2,4,1,5,10] 的一个子序列。
 *
 *
 * 计算并返回 nums 的所有 非空 子序列中 不同 最大公约数的 数目 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [6,10,3]
 * 输出：5
 * 解释：上图显示了所有的非空子序列与各自的最大公约数。
 * 不同的最大公约数为 6 、10 、3 、2 和 1 。
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [5,15,40,5,6]
 * 输出：7
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * 1
 *
 *
 */

package leetcode

// @lc code=start
func countDifferentSubsequenceGCDs(nums []int) (res int) {
	maxVal := getMax(nums)
	seen := make([]bool, maxVal+1)
	for _, num := range nums {
		seen[num] = true
	}
	for i := 1; i <= maxVal; i++ {
		subGcd := 0
		for j := i; j <= maxVal; j += i {
			if seen[j] {
				if subGcd == 0 {
					subGcd = j
				} else {
					subGcd = gcd(subGcd, j)
				}
				if subGcd == i {
					res++
					break
				}
			}
		}
	}
	return
}

func gcd(a, b int) int {
	if b != 0 {
		return gcd(b, a%b)
	}
	return a
}

func getMax(arr []int) (max int) {
	for _, num := range arr {
		if num > max {
			max = num
		}
	}
	return
}

// @lc code=end
