/*
 * @lc app=leetcode.cn id=886 lang=golang
 *
 * [886] 可能的二分法
 *
 * https://leetcode.cn/problems/possible-bipartition/description/
 *
 * algorithms
 * Medium (49.89%)
 * Likes:    246
 * Dislikes: 0
 * Total Accepted:    25.6K
 * Total Submissions: 51.1K
 * Testcase Example:  '4\n[[1,2],[1,3],[2,4]]'
 *
 * 给定一组 n 人（编号为 1, 2, ..., n）， 我们想把每个人分进任意大小的两组。每个人都可能不喜欢其他人，那么他们不应该属于同一组。
 *
 * 给定整数 n 和数组 dislikes ，其中 dislikes[i] = [ai, bi] ，表示不允许将编号为 ai 和
 * bi的人归入同一组。当可以用这种方法将所有人分进两组时，返回 true；否则返回 false。
 *
 *
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：n = 4, dislikes = [[1,2],[1,3],[2,4]]
 * 输出：true
 * 解释：group1 [1,4], group2 [2,3]
 *
 *
 * 示例 2：
 *
 *
 * 输入：n = 3, dislikes = [[1,2],[1,3],[2,3]]
 * 输出：false
 *
 *
 * 示例 3：
 *
 *
 * 输入：n = 5, dislikes = [[1,2],[2,3],[3,4],[4,5],[1,5]]
 * 输出：false
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= n <= 2000
 * 0 <= dislikes.length <= 10^4
 * dislikes[i].length == 2
 * 1 <= dislikes[i][j] <= n
 * ai < bi
 * dislikes 中每一组都 不同
 *
 *
 *
 *
 */

package leetcode

// @lc code=start
func possibleBipartition(n int, dislikes [][]int) bool {
	color := make([]int, n+1)
	group := make([][]int, n+1)
	for i := range group {
		group[i] = []int{}
	}
	for _, d := range dislikes {
		group[d[0]] = append(group[d[0]], d[1])
		group[d[1]] = append(group[d[1]], d[0])
	}
	var dfs func(int, int) bool
	dfs = func(curNode int, curColor int) bool {
		color[curNode] = curColor
		for _, nextNode := range group[curNode] {
			if color[nextNode] != 0 && color[curNode] == color[nextNode] {
				return false
			}
			if color[nextNode] == 0 && !dfs(nextNode, 3^curColor) {
				return false
			}
		}
		return true
	}
	for i := 1; i <= n; i++ {
		if color[i] == 0 && !dfs(i, 1) {
			return false
		}
	}
	return true
}

// @lc code=end
