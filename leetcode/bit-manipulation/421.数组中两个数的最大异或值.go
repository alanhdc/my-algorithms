/*
 * @lc app=leetcode.cn id=421 lang=golang
 *
 * [421] 数组中两个数的最大异或值
 *
 * https://leetcode-cn.com/problems/maximum-xor-of-two-numbers-in-an-array/description/
 *
 * algorithms
 * Medium (60.69%)
 * Likes:    308
 * Dislikes: 0
 * Total Accepted:    18.4K
 * Total Submissions: 30.3K
 * Testcase Example:  '[3,10,5,25,2,8]'
 *
 * 给你一个整数数组 nums ，返回 nums[i] XOR nums[j] 的最大运算结果，其中 0 ≤ i ≤ j < n 。
 *
 * 进阶：你可以在 O(n) 的时间解决这个问题吗？
 *
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [3,10,5,25,2,8]
 * 输出：28
 * 解释：最大运算结果是 5 XOR 25 = 28.
 *
 * 示例 2：
 *
 *
 * 输入：nums = [0]
 * 输出：0
 *
 *
 * 示例 3：
 *
 *
 * 输入：nums = [2,4]
 * 输出：6
 *
 *
 * 示例 4：
 *
 *
 * 输入：nums = [8,10,2]
 * 输出：10
 *
 *
 * 示例 5：
 *
 *
 * 输入：nums = [14,70,53,83,49,91,36,80,92,51,66,70]
 * 输出：127
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * 0
 *
 *
 *
 *
 */

package leetcode

// hash
func findMaximumXOR2(nums []int) int {
	const highBit = 30
	x := 0

	for k := highBit; k >= 0; k-- {
		seen := map[int]bool{}

		for _, num := range nums {
			seen[num>>k] = true
		}

		xNext := x*2 + 1
		found := false

		for _, num := range nums {
			if seen[xNext^(num>>k)] {
				found = true
				break
			}
		}

		if found {
			x = xNext
		} else {
			x = xNext - 1
		}
	}

	return x
}

// @lc code=start
// trie
const highBit = 30

type trie struct {
	left, right *trie
}

func (t *trie) add(num int) {
	cur := t
	for i := highBit; i >= 0; i-- {
		bit := num >> i & 1
		if bit == 0 {
			if cur.left == nil {
				cur.left = &trie{}
			}
			cur = cur.left
		} else {
			if cur.right == nil {
				cur.right = &trie{}
			}
			cur = cur.right
		}
	}
}

func (t *trie) check(num int) (x int) {
	cur := t
	for i := highBit; i >= 0; i-- {
		bit := num >> i & 1
		if bit == 0 {
			if cur.right != nil {
				cur = cur.right
				x = x*2 + 1
			} else {
				cur = cur.left
				x = x * 2
			}
		} else {
			if cur.left != nil {
				cur = cur.left
				x = x*2 + 1
			} else {
				cur = cur.right
				x = x * 2
			}
		}
	}
	return
}

func findMaximumXOR(nums []int) (x int) {
	root := &trie{}
	for i := 1; i < len(nums); i++ {
		root.add(nums[i-1])
		x = max(x, root.check(nums[i]))
	}
	return
}

func max(x, y int) int {
	if x > y {
		return x
	}
	return y
}

// @lc code=end
