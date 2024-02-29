/*
 * @lc app=leetcode.cn id=2581 lang=typescript
 *
 * [2581] 统计可能的树根数目
 *
 * https://leetcode.cn/problems/count-number-of-possible-root-nodes/description/
 *
 * algorithms
 * Hard (59.16%)
 * Likes:    60
 * Dislikes: 0
 * Total Accepted:    5.3K
 * Total Submissions: 8.2K
 * Testcase Example:  '[[0,1],[1,2],[1,3],[4,2]]\n[[1,3],[0,1],[1,0],[2,4]]\n3'
 *
 * Alice 有一棵 n 个节点的树，节点编号为 0 到 n - 1 。树用一个长度为 n - 1 的二维整数数组 edges 表示，其中
 * edges[i] = [ai, bi] ，表示树中节点 ai 和 bi 之间有一条边。
 *
 * Alice 想要 Bob 找到这棵树的根。她允许 Bob 对这棵树进行若干次 猜测 。每一次猜测，Bob 做如下事情：
 *
 *
 * 选择两个 不相等 的整数 u 和 v ，且树中必须存在边 [u, v] 。
 * Bob 猜测树中 u 是 v 的 父节点 。
 *
 *
 * Bob 的猜测用二维整数数组 guesses 表示，其中 guesses[j] = [uj, vj] 表示 Bob 猜 uj 是 vj 的父节点。
 *
 * Alice 非常懒，她不想逐个回答 Bob 的猜测，只告诉 Bob 这些猜测里面 至少 有 k 个猜测的结果为 true 。
 *
 * 给你二维整数数组 edges ，Bob 的所有猜测和整数 k ，请你返回可能成为树根的 节点数目 。如果没有这样的树，则返回 0。
 *
 *
 *
 * 示例 1：
 *
 *
 *
 *
 * 输入：edges = [[0,1],[1,2],[1,3],[4,2]], guesses = [[1,3],[0,1],[1,0],[2,4]], k
 * = 3
 * 输出：3
 * 解释：
 * 根为节点 0 ，正确的猜测为 [1,3], [0,1], [2,4]
 * 根为节点 1 ，正确的猜测为 [1,3], [1,0], [2,4]
 * 根为节点 2 ，正确的猜测为 [1,3], [1,0], [2,4]
 * 根为节点 3 ，正确的猜测为 [1,0], [2,4]
 * 根为节点 4 ，正确的猜测为 [1,3], [1,0]
 * 节点 0 ，1 或 2 为根时，可以得到 3 个正确的猜测。
 *
 *
 * 示例 2：
 *
 *
 *
 *
 * 输入：edges = [[0,1],[1,2],[2,3],[3,4]], guesses = [[1,0],[3,4],[2,1],[3,2]], k
 * = 1
 * 输出：5
 * 解释：
 * 根为节点 0 ，正确的猜测为 [3,4]
 * 根为节点 1 ，正确的猜测为 [1,0], [3,4]
 * 根为节点 2 ，正确的猜测为 [1,0], [2,1], [3,4]
 * 根为节点 3 ，正确的猜测为 [1,0], [2,1], [3,2], [3,4]
 * 根为节点 4 ，正确的猜测为 [1,0], [2,1], [3,2]
 * 任何节点为根，都至少有 1 个正确的猜测。
 *
 *
 *
 *
 * 提示：
 *
 *
 * edges.length == n - 1
 * 2 <= n <= 10^5
 * 1 <= guesses.length <= 10^5
 * 0 <= ai, bi, uj, vj <= n - 1
 * ai != bi
 * uj != vj
 * edges 表示一棵有效的树。
 * guesses[j] 是树中的一条边。
 * guesses 是唯一的。
 * 0 <= k <= guesses.length
 *
 *
 */

// @lc code=start
// cv
function rootCount(edges: number[][], guesses: number[][], k: number): number {
  const n = edges.length + 1;
  const g: number[][] = Array.from({ length: n }, () => []);
  const st = new Set();

  edges.forEach((v) => {
    g[v[0]].push(v[1]);
    g[v[1]].push(v[0]);
  });

  guesses.forEach((v) => {
    st.add(h(v[0], v[1]));
  });

  let cnt = 0;
  let res = 0;

  dfs(0, -1);
  reDfs(0, -1, cnt);
  return res;

  function h(x: number, y: number) {
    return (x << 20) | y;
  }

  function dfs(x: number, fat: number) {
    for (const y of g[x]) {
      if (y === fat) {
        continue;
      }
      cnt += st.has(h(x, y)) ? 1 : 0;
      dfs(y, x);
    }
  }

  function reDfs(x: number, fat: number, cnt: number) {
    if (cnt >= k) {
      res++;
    }
    for (const y of g[x]) {
      if (y === fat) {
        continue;
      }
      reDfs(y, x, cnt - (st.has(h(x, y)) ? 1 : 0) + (st.has(h(y, x)) ? 1 : 0));
    }
  }
}
// @lc code=end
