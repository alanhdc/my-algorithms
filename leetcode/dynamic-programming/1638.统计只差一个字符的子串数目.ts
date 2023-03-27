/*
 * @lc app=leetcode.cn id=1638 lang=typescript
 *
 * [1638] 统计只差一个字符的子串数目
 *
 * https://leetcode.cn/problems/count-substrings-that-differ-by-one-character/description/
 *
 * algorithms
 * Medium (72.61%)
 * Likes:    87
 * Dislikes: 0
 * Total Accepted:    8.3K
 * Total Submissions: 10.9K
 * Testcase Example:  '"aba"\n"baba"'
 *
 * 给你两个字符串 s 和 t ，请你找出 s 中的非空子串的数目，这些子串满足替换 一个不同字符 以后，是 t 串的子串。换言之，请你找到 s 和 t
 * 串中 恰好 只有一个字符不同的子字符串对的数目。
 *
 * 比方说， "computer" and "computation" 只有一个字符不同： 'e'/'a' ，所以这一对子字符串会给答案加 1 。
 *
 * 请你返回满足上述条件的不同子字符串对数目。
 *
 * 一个 子字符串 是一个字符串中连续的字符。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "aba", t = "baba"
 * 输出：6
 * 解释：以下为只相差 1 个字符的 s 和 t 串的子字符串对：
 * ("aba", "baba")
 * ("aba", "baba")
 * ("aba", "baba")
 * ("aba", "baba")
 * ("aba", "baba")
 * ("aba", "baba")
 * 加粗部分分别表示 s 和 t 串选出来的子字符串。
 *
 * 示例 2：
 *
 *
 * 输入：s = "ab", t = "bb"
 * 输出：3
 * 解释：以下为只相差 1 个字符的 s 和 t 串的子字符串对：
 * ("ab", "bb")
 * ("ab", "bb")
 * ("ab", "bb")
 * 加粗部分分别表示 s 和 t 串选出来的子字符串。
 *
 * 示例 3：
 *
 *
 * 输入：s = "a", t = "a"
 * 输出：0
 *
 *
 * 示例 4：
 *
 *
 * 输入：s = "abe", t = "bbc"
 * 输出：10
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= s.length, t.length <= 100
 * s 和 t 都只包含小写英文字母。
 *
 *
 */

export {};

// @lc code=start
var countSubstrings = function (s: string, t: string): number {
  const m = s.length;
  const n = t.length;
  let res = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let diff = 0;
      for (let k = 0; i + k < m && j + k < n; k++) {
        diff += s[i + k] !== t[j + k] ? 1 : 0;
        if (diff > 1) {
          break;
        } else if (diff === 1) {
          res++;
        }
      }
    }
  }
  return res;
};

// dp
var countSubstrings = function (s: string, t: string): number {
  const m = s.length;
  const n = t.length;
  // dpl[i][j] -> 以(s[i],t[j]) 为终点左侧连续相等的最大长度
  const dpl = Array.from(new Array(m + 1), () => new Array(n + 1).fill(0));
  // dpr[i][j] -> 以(s[i],t[j]) 为终点右侧连续相等的最大长度
  const dpr = Array.from(new Array(m + 1), () => new Array(n + 1).fill(0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      dpl[i + 1][j + 1] = s[i] === t[j] ? dpl[i][j] + 1 : 0;
    }
  }
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      dpr[i][j] = s[i] === t[j] ? dpr[i + 1][j + 1] + 1 : 0;
    }
  }

  let res = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (s[i] !== t[j]) {
        res += (dpl[i][j] + 1) * (dpr[i + 1][j + 1] + 1);
      }
    }
  }
  return res;
};
// @lc code=end
