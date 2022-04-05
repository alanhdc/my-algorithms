/*
 * @lc app=leetcode.cn id=762 lang=golang
 *
 * [762] 二进制表示中质数个计算置位
 *
 * https://leetcode-cn.com/problems/prime-number-of-set-bits-in-binary-representation/description/
 *
 * algorithms
 * Easy (70.69%)
 * Likes:    93
 * Dislikes: 0
 * Total Accepted:    28.2K
 * Total Submissions: 38.4K
 * Testcase Example:  '6\n10'
 *
 * 给你两个整数 left 和 right ，在闭区间 [left, right] 范围内，统计并返回 计算置位位数为质数 的整数个数。
 *
 * 计算置位位数 就是二进制表示中 1 的个数。
 *
 *
 * 例如， 21 的二进制表示 10101 有 3 个计算置位。
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：left = 6, right = 10
 * 输出：4
 * 解释：
 * 6 -> 110 (2 个计算置位，2 是质数)
 * 7 -> 111 (3 个计算置位，3 是质数)
 * 9 -> 1001 (2 个计算置位，2 是质数)
 * 10-> 1010 (2 个计算置位，2 是质数)
 * 共计 4 个计算置位为质数的数字。
 *
 *
 * 示例 2：
 *
 *
 * 输入：left = 10, right = 15
 * 输出：5
 * 解释：
 * 10 -> 1010 (2 个计算置位, 2 是质数)
 * 11 -> 1011 (3 个计算置位, 3 是质数)
 * 12 -> 1100 (2 个计算置位, 2 是质数)
 * 13 -> 1101 (3 个计算置位, 3 是质数)
 * 14 -> 1110 (3 个计算置位, 3 是质数)
 * 15 -> 1111 (4 个计算置位, 4 不是质数)
 * 共计 5 个计算置位为质数的数字。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= left <= right <= 10^6
 * 0 <= right - left <= 10^4
 *
 *
 */

package leetcode

import "math/bits"

// @lc code=start
func countPrimeSetBits2(left int, right int) (res int) {
	for i := left; i <= right; i++ {
		if isPrime(bits.OnesCount(uint(i))) {
			res++
		}
	}
	return
}

func isPrime(num int) bool {
	if num < 2 {
		return false
	}
	for i := 2; i*i <= num; i++ {
		if num%i == 0 {
			return false
		}
	}
	return true
}

func countPrimeSetBits(left int, right int) (res int) {
	for i := left; i <= right; i++ {
		if ((1 << bits.OnesCount(uint(i))) & 665772) != 0 {
			res++
		}
	}
	return
}

// @lc code=end
