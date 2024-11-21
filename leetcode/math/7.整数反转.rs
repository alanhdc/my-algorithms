/*
 * @lc app=leetcode.cn id=7 lang=rust
 *
 * [7] 整数反转
 *
 * https://leetcode-cn.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (35.02%)
 * Likes:    2740
 * Dislikes: 0
 * Total Accepted:    671.7K
 * Total Submissions: 1.9M
 * Testcase Example:  '123'
 *
 * 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。
 *
 * 如果反转后整数超过 32 位的有符号整数的范围 [−2^31,  2^31 − 1] ，就返回 0。
 * 假设环境不允许存储 64 位整数（有符号或无符号）。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：x = 123
 * 输出：321
 *
 *
 * 示例 2：
 *
 *
 * 输入：x = -123
 * 输出：-321
 *
 *
 * 示例 3：
 *
 *
 * 输入：x = 120
 * 输出：21
 *
 *
 * 示例 4：
 *
 *
 * 输入：x = 0
 * 输出：0
 *
 *
 *
 *
 * 提示：
 *
 *
 * -2^31
 *
 *
 */

// @lc code=start
impl Solution {
    pub fn reverse(x: i32) -> i32 {
        let mut num = x;
        let mut rev = 0;

        while num != 0 {
            let rest = num % 10;
            if rev > i32::MAX / 10 || (rev == i32::MAX / 10 && rest > 7) {
                return 0;
            }
            if rev < i32::MIN / 10 || (rev == i32::MIN / 10 && rest < -8) {
                return 0;
            }
            rev = rev * 10 + rest;
            num /= 10;
        }

        rev
    }
}
// @lc code=end
