/*
 * @lc app=leetcode.cn id=675 lang=golang
 *
 * [675] 为高尔夫比赛砍树
 *
 * https://leetcode.cn/problems/cut-off-trees-for-golf-event/description/
 *
 * algorithms
 * Hard (48.96%)
 * Likes:    128
 * Dislikes: 0
 * Total Accepted:    6.6K
 * Total Submissions: 13.4K
 * Testcase Example:  '[[1,2,3],[0,0,4],[7,6,5]]'
 *
 * 你被请来给一个要举办高尔夫比赛的树林砍树。树林由一个 m x n 的矩阵表示， 在这个矩阵中：
 *
 *
 * 0 表示障碍，无法触碰
 * 1 表示地面，可以行走
 * 比 1 大的数 表示有树的单元格，可以行走，数值表示树的高度
 *
 *
 * 每一步，你都可以向上、下、左、右四个方向之一移动一个单位，如果你站的地方有一棵树，那么你可以决定是否要砍倒它。
 *
 * 你需要按照树的高度从低向高砍掉所有的树，每砍过一颗树，该单元格的值变为 1（即变为地面）。
 *
 * 你将从 (0, 0) 点开始工作，返回你砍完所有树需要走的最小步数。 如果你无法砍完所有的树，返回 -1 。
 *
 * 可以保证的是，没有两棵树的高度是相同的，并且你至少需要砍倒一棵树。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：forest = [[1,2,3],[0,0,4],[7,6,5]]
 * 输出：6
 * 解释：沿着上面的路径，你可以用 6 步，按从最矮到最高的顺序砍掉这些树。
 *
 * 示例 2：
 *
 *
 * 输入：forest = [[1,2,3],[0,0,0],[7,6,5]]
 * 输出：-1
 * 解释：由于中间一行被障碍阻塞，无法访问最下面一行中的树。
 *
 *
 * 示例 3：
 *
 *
 * 输入：forest = [[2,3,4],[0,0,5],[8,7,6]]
 * 输出：6
 * 解释：可以按与示例 1 相同的路径来砍掉所有的树。
 * (0,0) 位置的树，可以直接砍去，不用算步数。
 *
 *
 *
 *
 * 提示：
 *
 *
 * m == forest.length
 * n == forest[i].length
 * 1
 * 0
 *
 *
 */

package leetcode

import "sort"

// @lc code=start
func cutOffTree(forest [][]int) (res int) {
	m, n := len(forest), len(forest[0])
	trees := make([][]int, 0)
	for i := 0; i < m; i++ {
		for j := 0; j < n; j++ {
			if forest[i][j] > 1 {
				trees = append(trees, []int{i, j})
			}
		}
	}
	sort.Slice(trees, func(i, j int) bool {
		return forest[trees[i][0]][trees[i][1]] < forest[trees[j][0]][trees[j][1]]
	})

	cx, cy := 0, 0
	for i := 0; i < len(trees); i++ {
		steps := bfs(forest, cx, cy, trees[i][0], trees[i][1])
		if steps == -1 {
			return -1
		}
		res += steps
		cx, cy = trees[i][0], trees[i][1]
	}
	return

}

var dirs = [][]int{{0, 1}, {0, -1}, {1, 0}, {-1, 0}}

func bfs(forest [][]int, sx, sy, tx, ty int) int {
	if sx == tx && sy == ty {
		return 0
	}
	step := 0
	m, n := len(forest), len(forest[0])
	visited := make([][]bool, m)
	for i := 0; i < m; i++ {
		visited[i] = make([]bool, n)
	}
	queue := [][]int{{sx, sy}}
	visited[sx][sy] = true
	for len(queue) > 0 {
		step++
		size := len(queue)
		for i := 0; i < size; i++ {
			x, y := queue[0][0], queue[0][1]
			queue = queue[1:]
			for j := 0; j < len(dirs); j++ {
				nx, ny := x+dirs[j][0], y+dirs[j][1]
				if nx < 0 || nx >= m || ny < 0 || ny >= n || visited[nx][ny] || forest[nx][ny] == 0 {
					continue
				}
				if nx == tx && ny == ty {
					return step
				}
				queue = append(queue, []int{nx, ny})
				visited[nx][ny] = true
			}
		}
	}
	return -1
}

// @lc code=end
