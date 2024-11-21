/*
 * @lc app=leetcode.cn id=1022 lang=golang
 *
 * [1022] 从根到叶的二进制数之和
 *
 * https://leetcode.cn/problems/sum-of-root-to-leaf-binary-numbers/description/
 *
 * algorithms
 * Easy (73.26%)
 * Likes:    158
 * Dislikes: 0
 * Total Accepted:    30.7K
 * Total Submissions: 41.9K
 * Testcase Example:  '[1,0,1,0,1,0,1]'
 *
 * 给出一棵二叉树，其上每个结点的值都是 0 或 1 。每一条从根到叶的路径都代表一个从最高有效位开始的二进制数。
 *
 *
 * 例如，如果路径为 0 -> 1 -> 1 -> 0 -> 1，那么它表示二进制数 01101，也就是 13 。
 *
 *
 * 对树上的每一片叶子，我们都要找出从根到该叶子的路径所表示的数字。
 *
 * 返回这些数字之和。题目数据保证答案是一个 32 位 整数。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：root = [1,0,1,0,1,0,1]
 * 输出：22
 * 解释：(100) + (101) + (110) + (111) = 4 + 5 + 6 + 7 = 22
 *
 *
 * 示例 2：
 *
 *
 * 输入：root = [0]
 * 输出：0
 *
 *
 *
 *
 * 提示：
 *
 *
 * 树中的节点数在 [1, 1000] 范围内
 * Node.val 仅为 0 或 1
 *
 *
 */

package leetcode

// Definition for a binary tree node.
type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

// @lc code=start
func sumRootToLeaf(root *TreeNode) int {
	paths := make([]int, 0)
	var dfs func(root *TreeNode, path int)
	dfs = func(root *TreeNode, path int) {
		if root == nil {
			return
		}
		path = path*2 + root.Val
		if root.Left == nil && root.Right == nil {
			paths = append(paths, path)
		}
		dfs(root.Left, path)
		dfs(root.Right, path)
	}
	dfs(root, 0)
	var sum int
	for _, v := range paths {
		sum += v
	}
	return sum
}

// @lc code=end
