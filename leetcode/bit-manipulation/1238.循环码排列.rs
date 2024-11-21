/*
 * @lc app=leetcode.cn id=1238 lang=rust
 *
 * [1238] 循环码排列
 *
 * https://leetcode.cn/problems/circular-permutation-in-binary-representation/description/
 *
 * algorithms
 * Medium (67.70%)
 * Likes:    76
 * Dislikes: 0
 * Total Accepted:    9.2K
 * Total Submissions: 12.2K
 * Testcase Example:  '2\n3'
 *
 * 给你两个整数 n 和 start。你的任务是返回任意 (0,1,2,,...,2^n-1) 的排列 p，并且满足：
 *
 *
 * p[0] = start
 * p[i] 和 p[i+1] 的二进制表示形式只有一位不同
 * p[0] 和 p[2^n -1] 的二进制表示形式也只有一位不同
 *
 *
 *
 *
 * 示例 1：
 *
 * 输入：n = 2, start = 3
 * 输出：[3,2,0,1]
 * 解释：这个排列的二进制表示是 (11,10,00,01)
 * ⁠    所有的相邻元素都有一位是不同的，另一个有效的排列是 [3,1,0,2]
 *
 *
 * 示例 2：
 *
 * 输出：n = 3, start = 2
 * 输出：[2,6,7,5,4,0,1,3]
 * 解释：这个排列的二进制表示是 (010,110,111,101,100,000,001,011)
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= n <= 16
 * 0 <= start < 2^n
 *
 *
 */

// @lc code=start
impl Solution {
    pub fn circular_permutation(n: i32, start: i32) -> Vec<i32> {
        let n = n as usize;
        let mut res = vec![start];
        for i in 1..=n {
            for j in (0..res.len()).rev() {
                let a = res[j] ^ start;
                let b = 1 << (i - 1);
                res.push((a | b) ^ start);
            }
        }
        res
    }
}
// @lc code=end
