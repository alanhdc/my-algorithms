/*
 * @lc app=leetcode.cn id=2734 lang=typescript
 *
 * [2734] 执行子串操作后的字典序最小字符串
 *
 * https://leetcode.cn/problems/lexicographically-smallest-string-after-substring-operation/description/
 *
 * algorithms
 * Medium (34.74%)
 * Likes:    30
 * Dislikes: 0
 * Total Accepted:    14.3K
 * Total Submissions: 28.7K
 * Testcase Example:  '"cbabc"'
 *
 * 给你一个仅由小写英文字母组成的字符串 s 。在一步操作中，你可以完成以下行为：
 *
 *
 * 选择 s 的任一非空子字符串，可能是整个字符串，接着将字符串中的每一个字符替换为英文字母表中的前一个字符。例如，'b' 用 'a' 替换，'a' 用
 * 'z' 替换。
 *
 *
 * 返回执行上述操作 恰好一次 后可以获得的 字典序最小 的字符串。
 *
 * 子字符串 是字符串中的一个连续字符序列。
 * 现有长度相同的两个字符串 x 和 字符串 y ，在满足 x[i] != y[i] 的第一个位置 i 上，如果  x[i] 在字母表中先于 y[i]
 * 出现，则认为字符串 x 比字符串 y 字典序更小 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "cbabc"
 * 输出："baabc"
 * 解释：我们选择从下标 0 开始、到下标 1 结束的子字符串执行操作。
 * 可以证明最终得到的字符串是字典序最小的。
 *
 *
 * 示例 2：
 *
 *
 * 输入：s = "acbbc"
 * 输出："abaab"
 * 解释：我们选择从下标 1 开始、到下标 4 结束的子字符串执行操作。
 * 可以证明最终得到的字符串是字典序最小的。
 *
 *
 * 示例 3：
 *
 *
 * 输入：s = "leetcode"
 * 输出："kddsbncd"
 * 解释：我们选择整个字符串执行操作。
 * 可以证明最终得到的字符串是字典序最小的。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= s.length <= 3 * 10^5
 * s 仅由小写英文字母组成
 *
 *
 */

// @lc code=start
function smallestString(s: string): string {
  let target = "a";
  let indexOfFirstNonA = s.indexOf(s.split("").find((c) => c !== target)!);
  if (indexOfFirstNonA === -1) {
    return s.slice(0, s.length - 1) + "z";
  }
  let indexOfFirstA_AfterFirstNonA = s.indexOf("a", indexOfFirstNonA);
  if (indexOfFirstA_AfterFirstNonA === -1) {
    indexOfFirstA_AfterFirstNonA = s.length;
  }
  let res = "";
  for (let i = 0; i < s.length; ++i) {
    if (indexOfFirstNonA <= i && i < indexOfFirstA_AfterFirstNonA) {
      res += String.fromCharCode(s.charCodeAt(i) - 1);
    } else {
      res += s[i];
    }
  }
  return res;
}
