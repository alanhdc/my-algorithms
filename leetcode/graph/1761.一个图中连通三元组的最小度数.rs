/*
 * @lc app=leetcode.cn id=1761 lang=rust
 *
 * [1761] 一个图中连通三元组的最小度数
 *
 * https://leetcode.cn/problems/minimum-degree-of-a-connected-trio-in-a-graph/description/
 *
 * algorithms
 * Hard (46.66%)
 * Likes:    53
 * Dislikes: 0
 * Total Accepted:    8.6K
 * Total Submissions: 15.8K
 * Testcase Example:  '6\n[[1,2],[1,3],[3,2],[4,1],[5,2],[3,6]]'
 *
 * 给你一个无向图，整数 n 表示图中节点的数目，edges 数组表示图中的边，其中 edges[i] = [ui, vi] ，表示 ui 和 vi
 * 之间有一条无向边。
 *
 * 一个 连通三元组 指的是 三个 节点组成的集合且这三个点之间 两两 有边。
 *
 * 连通三元组的度数 是所有满足此条件的边的数目：一个顶点在这个三元组内，而另一个顶点不在这个三元组内。
 *
 * 请你返回所有连通三元组中度数的 最小值 ，如果图中没有连通三元组，那么返回 -1 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：n = 6, edges = [[1,2],[1,3],[3,2],[4,1],[5,2],[3,6]]
 * 输出：3
 * 解释：只有一个三元组 [1,2,3] 。构成度数的边在上图中已被加粗。
 *
 *
 * 示例 2：
 *
 *
 * 输入：n = 7, edges = [[1,3],[4,1],[4,3],[2,5],[5,6],[6,7],[7,5],[2,6]]
 * 输出：0
 * 解释：有 3 个三元组：
 * 1) [1,4,3]，度数为 0 。
 * 2) [2,5,6]，度数为 2 。
 * 3) [5,6,7]，度数为 2 。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 2
 * edges[i].length == 2
 * 1
 * 1 i, vi
 * ui != vi
 * 图中没有重复的边。
 *
 *
 */

// @lc code=start
impl Solution {
    pub fn min_trio_degree(n: i32, edges: Vec<Vec<i32>>) -> i32 {
        let n = n as usize;
        let mut degree = vec![0; n];
        let mut graph = vec![vec![0; n]; n];
        for edge in edges {
            let x = edge[0] as usize;
            let y = edge[1] as usize;
            graph[x - 1][y - 1] = 1;
            graph[y - 1][x - 1] = 1;
            degree[x - 1] += 1;
            degree[y - 1] += 1;
        }
        let mut res = i32::MAX;
        for i in 0..n {
            for j in i + 1..n {
                if graph[i][j] == 1 {
                    for k in j + 1..n {
                        if graph[i][k] == 1 && graph[j][k] == 1 {
                            res = res.min(degree[i] + degree[j] + degree[k] - 6);
                        }
                    }
                }
            }
        }
        return if res == i32::MAX { -1 } else { res };
    }
}
// @lc code=end
