/*
 * @lc app=leetcode.cn id=438 lang=rust
 *
 * [438] 找到字符串中所有字母异位词
 *
 * https://leetcode-cn.com/problems/find-all-anagrams-in-a-string/description/
 *
 * algorithms
 * Medium (52.42%)
 * Likes:    677
 * Dislikes: 0
 * Total Accepted:    110.4K
 * Total Submissions: 210K
 * Testcase Example:  '"cbaebabacd"\n"abc"'
 *
 * 给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。
 *
 * 异位词 指由相同字母重排列形成的字符串（包括相同的字符串）。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: s = "cbaebabacd", p = "abc"
 * 输出: [0,6]
 * 解释:
 * 起始索引等于 0 的子串是 "cba", 它是 "abc" 的异位词。
 * 起始索引等于 6 的子串是 "bac", 它是 "abc" 的异位词。
 *
 *
 * 示例 2:
 *
 *
 * 输入: s = "abab", p = "ab"
 * 输出: [0,1,2]
 * 解释:
 * 起始索引等于 0 的子串是 "ab", 它是 "ab" 的异位词。
 * 起始索引等于 1 的子串是 "ba", 它是 "ab" 的异位词。
 * 起始索引等于 2 的子串是 "ab", 它是 "ab" 的异位词。
 *
 *
 *
 *
 * 提示:
 *
 *
 * 1 <= s.length, p.length <= 3 * 10^4
 * s 和 p 仅包含小写字母
 *
 *
 */

// @lc code=start
impl Solution {
    pub fn find_anagrams(s: String, p: String) -> Vec<i32> {
        let mut left = 0;
        let mut right = 0;
        let mut res = vec![];
        let mut p_count = vec![0; 26];
        let mut s_count = vec![0; 26];
        let mut p_len = p.len();
        let mut s_len = s.len();
        for c in p.chars() {
            p_count[c as usize - 'a' as usize] += 1;
        }

        let s = s.into_bytes();
        while right < s_len {
            s_count[s[right] as usize - 'a' as usize] += 1;
            if right - left + 1 == p_len {
                if s_count == p_count {
                    res.push(left as i32);
                }
                s_count[s[left] as usize - 'a' as usize] -= 1;
                left += 1;
            }
            right += 1;
        }
        res
    }
}
// @lc code=end
