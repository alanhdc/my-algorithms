/*
 * @lc app=leetcode.cn id=917 lang=rust
 *
 * [917] 仅仅反转字母
 *
 * https://leetcode-cn.com/problems/reverse-only-letters/description/
 *
 * algorithms
 * Easy (56.98%)
 * Likes:    126
 * Dislikes: 0
 * Total Accepted:    40.4K
 * Total Submissions: 68.6K
 * Testcase Example:  '"ab-cd"'
 *
 * 给你一个字符串 s ，根据下述规则反转字符串：
 *
 *
 * 所有非英文字母保留在原有位置。
 * 所有英文字母（小写或大写）位置反转。
 *
 *
 * 返回反转后的 s 。
 *
 *
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "ab-cd"
 * 输出："dc-ba"
 *
 *
 *
 *
 *
 * 示例 2：
 *
 *
 * 输入：s = "a-bC-dEf-ghIj"
 * 输出："j-Ih-gfE-dCba"
 *
 *
 *
 *
 *
 * 示例 3：
 *
 *
 * 输入：s = "Test1ng-Leet=code-Q!"
 * 输出："Qedo1ct-eeLg=ntse-T!"
 *
 *
 *
 *
 * 提示
 *
 *
 * 1 <= s.length <= 100
 * s 仅由 ASCII 值在范围 [33, 122] 的字符组成
 * s 不含 '\"' 或 '\\'
 *
 *
 */

// @lc code=start
impl Solution {
    pub fn reverse_only_letters(s: String) -> String {
        let mut left = 0;
        let mut right = s.len() - 1;
        let mut res = s.into_bytes();
        while left < right {
            while left < right && !is_letter(res[left]) {
                left += 1;
            }
            while left < right && !is_letter(res[right]) {
                right -= 1;
            }
            res.swap(left, right);
            left += 1;
            right -= 1;
        }
        String::from_utf8(res).unwrap()
    }
}

fn is_letter(c: u8) -> bool {
    b'a' <= c && c <= b'z' || b'A' <= c && c <= b'Z'
}
// @lc code=end
