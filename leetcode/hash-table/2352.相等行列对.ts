/*
 * @lc app=leetcode.cn id=2352 lang=typescript
 *
 * [2352] 相等行列对
 *
 * https://leetcode.cn/problems/equal-row-and-column-pairs/description/
 *
 * algorithms
 * Medium (71.51%)
 * Likes:    47
 * Dislikes: 0
 * Total Accepted:    20.9K
 * Total Submissions: 28.1K
 * Testcase Example:  '[[3,2,1],[1,7,6],[2,7,7]]'
 *
 * 给你一个下标从 0 开始、大小为 n x n 的整数矩阵 grid ，返回满足 Ri 行和 Cj 列相等的行列对 (Ri, Cj) 的数目。
 *
 * 如果行和列以相同的顺序包含相同的元素（即相等的数组），则认为二者是相等的。
 *
 *
 *
 * 示例 1：
 *
 *
 *
 *
 * 输入：grid = [[3,2,1],[1,7,6],[2,7,7]]
 * 输出：1
 * 解释：存在一对相等行列对：
 * - (第 2 行，第 1 列)：[2,7,7]
 *
 *
 * 示例 2：
 *
 *
 *
 *
 * 输入：grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]
 * 输出：3
 * 解释：存在三对相等行列对：
 * - (第 0 行，第 0 列)：[3,1,2,2]
 * - (第 2 行, 第 2 列)：[2,4,2,2]
 * - (第 3 行, 第 2 列)：[2,4,2,2]
 *
 *
 *
 *
 * 提示：
 *
 *
 * n == grid.length == grid[i].length
 * 1 <= n <= 200
 * 1 <= grid[i][j] <= 10^5
 *
 *
 */

// @lc code=start
var equalPairs = function (grid: number[][]): number {
  const n = grid.length;
  const rowMap: Map<string, number> = new Map();
  for (let i = 0; i < n; i++) {
    const row = grid[i];
    const rowKey = row.toString();
    rowMap.set(rowKey, (rowMap.get(rowKey) ?? 0) + 1);
  }
  const colMap: Map<string, number> = new Map();
  for (let i = 0; i < n; i++) {
    const col = [];
    for (let j = 0; j < n; j++) {
      col.push(grid[j][i]);
    }
    const colKey = col.toString();
    colMap.set(colKey, (colMap.get(colKey) ?? 0) + 1);
  }
  let res = 0;
  for (const [key, count] of rowMap) {
    if (colMap.has(key)) {
      res += count * colMap.get(key)!;
    }
  }
  return res;
};

var equalPairs = function (grid: number[][]): number {
  const n = grid.length;
  const map: Map<string, number> = new Map();
  for (let i = 0; i < n; i++) {
    const row = grid[i];
    const rowKey = row.toString();
    map.set(rowKey, (map.get(rowKey) ?? 0) + 1);
  }

  let res = 0;
  for (let i = 0; i < n; i++) {
    const col = [];
    for (let j = 0; j < n; j++) {
      col.push(grid[j][i]);
    }
    const colKey = col.toString();
    if (map.has(colKey)) {
      res += map.get(colKey)!;
    }
  }
  return res;
};
// @lc code=end
