/*
 * @lc app=leetcode.cn id=1405 lang=rust
 *
 * [1405] 最长快乐字符串
 *
 * https://leetcode-cn.com/problems/longest-happy-string/description/
 *
 * algorithms
 * Medium (56.39%)
 * Likes:    88
 * Dislikes: 0
 * Total Accepted:    9K
 * Total Submissions: 16.1K
 * Testcase Example:  '1\n1\n7'
 *
 * 如果字符串中不含有任何 'aaa'，'bbb' 或 'ccc' 这样的字符串作为子串，那么该字符串就是一个「快乐字符串」。
 *
 * 给你三个整数 a，b ，c，请你返回 任意一个 满足下列全部条件的字符串 s：
 *
 *
 * s 是一个尽可能长的快乐字符串。
 * s 中 最多 有a 个字母 'a'、b 个字母 'b'、c 个字母 'c' 。
 * s 中只含有 'a'、'b' 、'c' 三种字母。
 *
 *
 * 如果不存在这样的字符串 s ，请返回一个空字符串 ""。
 *
 *
 *
 * 示例 1：
 *
 * 输入：a = 1, b = 1, c = 7
 * 输出："ccaccbcc"
 * 解释："ccbccacc" 也是一种正确答案。
 *
 *
 * 示例 2：
 *
 * 输入：a = 2, b = 2, c = 1
 * 输出："aabbc"
 *
 *
 * 示例 3：
 *
 * 输入：a = 7, b = 1, c = 0
 * 输出："aabaa"
 * 解释：这是该测试用例的唯一正确答案。
 *
 *
 *
 * 提示：
 *
 *
 * 0 <= a, b, c <= 100
 * a + b + c > 0
 *
 *
 */

// @lc code=start
impl Solution {
    pub fn longest_diverse_string(a: i32, b: i32, c: i32) -> String {
        let mut res = String::new();
        let mut arr = vec![(a, 'a'), (b, 'b'), (c, 'c')];

        loop {
            arr.sort_by(|a, b| b.0.cmp(&a.0));
            let mut has_next = false;
            for i in 0..arr.len() {
                let (count, ch) = arr[i];
                if count <= 0 {
                    break;
                }
                let m = res.len();
                if m >= 2
                    && res.chars().nth(m - 2) == Some(ch)
                    && res.chars().nth(m - 1) == Some(ch)
                {
                    continue;
                }
                has_next = true;
                res.push(ch);
                arr[i].0 -= 1;
                break;
            }
            if !has_next {
                break;
            }
        }
        res
    }
}
// @lc code=end
