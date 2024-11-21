/*
 * @lc app=leetcode.cn id=306 lang=rust
 *
 * [306] 累加数
 *
 * https://leetcode-cn.com/problems/additive-number/description/
 *
 * algorithms
 * Medium (33.90%)
 * Likes:    302
 * Dislikes: 0
 * Total Accepted:    32.6K
 * Total Submissions: 88K
 * Testcase Example:  '"112358"'
 *
 * 累加数 是一个字符串，组成它的数字可以形成累加序列。
 *
 * 一个有效的 累加序列 必须 至少 包含 3 个数。除了最开始的两个数以外，字符串中的其他数都等于它之前两个数相加的和。
 *
 * 给你一个只包含数字 '0'-'9' 的字符串，编写一个算法来判断给定输入是否是 累加数 。如果是，返回 true ；否则，返回 false 。
 *
 * 说明：累加序列里的数 不会 以 0 开头，所以不会出现 1, 2, 03 或者 1, 02, 3 的情况。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入："112358"
 * 输出：true
 * 解释：累加序列为: 1, 1, 2, 3, 5, 8 。1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8
 *
 *
 * 示例 2：
 *
 *
 * 输入："199100199"
 * 输出：true
 * 解释：累加序列为: 1, 99, 100, 199。1 + 99 = 100, 99 + 100 = 199
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= num.length <= 35
 * num 仅由数字（0 - 9）组成
 *
 *
 *
 *
 * 进阶：你计划如何处理由过大的整数输入导致的溢出?
 *
 */

// @lc code=start
impl Solution {
    pub fn is_additive_number(num: String) -> bool {
        return dfs(&num, 0, 0, 0, 0);
    }
}

fn dfs(num: &String, index: usize, count: usize, prev_prev: usize, prev: usize) -> bool {
    if index >= num.len() {
        return count > 2;
    }
    let mut current = 0;
    for i in index..num.len() {
        let c = num.chars().nth(i).unwrap();
        if num.chars().nth(index).unwrap() == '0' && i > index {
            // 剪枝1：不能做为前导0，但是它自己是可以单独做为0来使用的
            return false;
        }
        current = current * 10 + (c as u8 - '0' as u8) as usize;
        if count >= 2 {
            let sum = prev_prev + prev;
            if current > sum {
                // 剪枝2：如果当前数比之前两数的和大了，说明不合适
                return false;
            }
            if current < sum {
                // 剪枝3：如果当前数比之前两数的和小了，说明还不够，可以继续添加新的字符进来
                continue;
            }
        }
        if dfs(num, i + 1, count + 1, prev, current) {
            return true;
        }
    }
    false
}
// @lc code=end
