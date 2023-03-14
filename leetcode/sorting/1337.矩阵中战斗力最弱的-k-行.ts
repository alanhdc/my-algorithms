/*
 * @lc app=leetcode.cn id=1337 lang=typescript
 *
 * [1337] 矩阵中战斗力最弱的 K 行
 *
 * https://leetcode-cn.com/problems/the-k-weakest-rows-in-a-matrix/description/
 *
 * algorithms
 * Easy (65.91%)
 * Likes:    61
 * Dislikes: 0
 * Total Accepted:    15.6K
 * Total Submissions: 23.2K
 * Testcase Example:  '[[1,1,0,0,0],[1,1,1,1,0],[1,0,0,0,0],[1,1,0,0,0],[1,1,1,1,1]]\n3'
 *
 * 给你一个大小为 m * n 的矩阵 mat，矩阵由若干军人和平民组成，分别用 1 和 0 表示。
 *
 * 请你返回矩阵中战斗力最弱的 k 行的索引，按从最弱到最强排序。
 *
 * 如果第 i 行的军人数量少于第 j 行，或者两行军人数量相同但 i 小于 j，那么我们认为第 i 行的战斗力比第 j 行弱。
 *
 * 军人 总是 排在一行中的靠前位置，也就是说 1 总是出现在 0 之前。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：mat =
 * [[1,1,0,0,0],
 * ⁠[1,1,1,1,0],
 * ⁠[1,0,0,0,0],
 * ⁠[1,1,0,0,0],
 * ⁠[1,1,1,1,1]],
 * k = 3
 * 输出：[2,0,3]
 * 解释：
 * 每行中的军人数目：
 * 行 0 -> 2
 * 行 1 -> 4
 * 行 2 -> 1
 * 行 3 -> 2
 * 行 4 -> 5
 * 从最弱到最强对这些行排序后得到 [2,0,3,1,4]
 *
 *
 * 示例 2：
 *
 *
 * 输入：mat =
 * [[1,0,0,0],
 * [1,1,1,1],
 * [1,0,0,0],
 * [1,0,0,0]],
 * k = 2
 * 输出：[0,2]
 * 解释：
 * 每行中的军人数目：
 * 行 0 -> 1
 * 行 1 -> 4
 * 行 2 -> 1
 * 行 3 -> 1
 * 从最弱到最强对这些行排序后得到 [0,2,3,1]
 *
 *
 *
 *
 * 提示：
 *
 *
 * m == mat.length
 * n == mat[i].length
 * 2
 * 1
 * matrix[i][j] 不是 0 就是 1
 *
 *
 */

// @lc code=start
function kWeakestRows(mat: number[][], k: number): number[] {
  const sortedMat: [Map<number, number>, number][] = [];

  for (let i = 0; i < mat.length; i++) {
    const row = mat[i];
    const counts: Map<number, number> = new Map();
    for (const num of row) {
      counts.set(num, (counts.get(num) ?? 0) + 1);
    }
    sortedMat.push([counts, i]);
  }

  sortedMat.sort((a, b) => {
    const aOnes = a[0].get(1) ?? 0;
    const bOnes = b[0].get(1) ?? 0;
    if (aOnes === bOnes) {
      return a[1] - b[1];
    }
    return aOnes - bOnes;
  });

  const ret: number[] = [];
  for (let i = 0; i < k; i++) {
    const index = sortedMat[i][1];
    ret.push(index);
  }
  return ret;
}
// @lc code=end
