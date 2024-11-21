/*
 * @lc app=leetcode.cn id=1260 lang=golang
 *
 * [1260] 二维网格迁移
 *
 * https://leetcode.cn/problems/shift-2d-grid/description/
 *
 * algorithms
 * Easy (60.46%)
 * Likes:    73
 * Dislikes: 0
 * Total Accepted:    21.2K
 * Total Submissions: 33.6K
 * Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]\n1'
 *
 * 给你一个 m 行 n 列的二维网格 grid 和一个整数 k。你需要将 grid 迁移 k 次。
 *
 * 每次「迁移」操作将会引发下述活动：
 *
 *
 * 位于 grid[i][j] 的元素将会移动到 grid[i][j + 1]。
 * 位于 grid[i][n - 1] 的元素将会移动到 grid[i + 1][0]。
 * 位于 grid[m - 1][n - 1] 的元素将会移动到 grid[0][0]。
 *
 *
 * 请你返回 k 次迁移操作后最终得到的 二维网格。
 *
 *
 *
 * 示例 1：
 *
 *
 *
 *
 * 输入：grid = [[1,2,3],[4,5,6],[7,8,9]], k = 1
 * 输出：[[9,1,2],[3,4,5],[6,7,8]]
 *
 *
 * 示例 2：
 *
 *
 *
 *
 * 输入：grid = [[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]], k = 4
 * 输出：[[12,0,21,13],[3,8,1,9],[19,7,2,5],[4,6,11,10]]
 *
 *
 * 示例 3：
 *
 *
 * 输入：grid = [[1,2,3],[4,5,6],[7,8,9]], k = 9
 * 输出：[[1,2,3],[4,5,6],[7,8,9]]
 *
 *
 *
 *
 * 提示：
 *
 *
 * m == grid.length
 * n == grid[i].length
 * 1
 * 1
 * -1000
 * 0
 *
 *
 */

package leetcode

// @lc code=start
func shiftGrid(grid [][]int, k int) (res [][]int) {
	m, n := len(grid), len(grid[0])
	arr := make([]int, 0, m*n)
	for _, row := range grid {
		arr = append(arr, row...)
	}
	k %= m * n
	newArr := arr[m*n-k:]
	newArr = append(newArr, arr[:m*n-k]...)

	for i := 0; i < m*n; i += n {
		res = append(res, newArr[i:i+n])
	}
	return
}

// @lc code=end
