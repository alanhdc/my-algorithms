/*
 * @lc app=leetcode.cn id=1790 lang=typescript
 *
 * [1790] 仅执行一次字符串交换能否使两个字符串相等
 *
 * https://leetcode.cn/problems/check-if-one-string-swap-can-make-strings-equal/description/
 *
 * algorithms
 * Easy (54.28%)
 * Likes:    59
 * Dislikes: 0
 * Total Accepted:    38.2K
 * Total Submissions: 70.1K
 * Testcase Example:  '"bank"\n"kanb"'
 *
 * 给你长度相等的两个字符串 s1 和 s2 。一次 字符串交换 操作的步骤如下：选出某个字符串中的两个下标（不必不同），并交换这两个下标所对应的字符。
 *
 * 如果对 其中一个字符串 执行 最多一次字符串交换 就可以使两个字符串相等，返回 true ；否则，返回 false 。
 *
 *
 *
 * 示例 1：
 *
 * 输入：s1 = "bank", s2 = "kanb"
 * 输出：true
 * 解释：例如，交换 s2 中的第一个和最后一个字符可以得到 "bank"
 *
 *
 * 示例 2：
 *
 * 输入：s1 = "attack", s2 = "defend"
 * 输出：false
 * 解释：一次字符串交换无法使两个字符串相等
 *
 *
 * 示例 3：
 *
 * 输入：s1 = "kelb", s2 = "kelb"
 * 输出：true
 * 解释：两个字符串已经相等，所以不需要进行字符串交换
 *
 *
 * 示例 4：
 *
 * 输入：s1 = "abcd", s2 = "dcba"
 * 输出：false
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= s1.length, s2.length <= 100
 * s1.length == s2.length
 * s1 和 s2 仅由小写英文字母组成
 *
 *
 */

// @lc code=start
var areAlmostEqual = function (s1: string, s2: string): boolean {
  const n = s1.length;
  let diff1 = "";
  let diff2 = "";
  let diff = 0;

  for (let i = 0; i < n; i++) {
    if (s1[i] !== s2[i]) {
      if (diff1 === "") {
        diff1 = s1[i];
        diff2 = s2[i];
      } else {
        if (diff1 !== s2[i] || diff2 !== s1[i]) {
          return false;
        }
      }
      if (diff >= 2) {
        return false;
      }
      diff++;
    }
  }

  return diff === 0 || diff === 2;
};

var areAlmostEqual = function (s1: string, s2: string): boolean {
  const n = s1.length;
  const diffIndexes: number[] = [];

  for (let i = 0; i < n; i++) {
    if (s1[i] !== s2[i]) {
      if (diffIndexes.length >= 2) {
        return false;
      }
      diffIndexes.push(i);
    }
  }

  if (diffIndexes.length === 0) {
    return true;
  }
  if (diffIndexes.length !== 2) {
    return false;
  }
  return (
    s1[diffIndexes[0]] === s2[diffIndexes[1]] &&
    s1[diffIndexes[1]] === s2[diffIndexes[0]]
  );
};
// @lc code=end
