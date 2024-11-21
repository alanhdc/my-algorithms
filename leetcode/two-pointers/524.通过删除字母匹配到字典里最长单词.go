/*
 * @lc app=leetcode.cn id=524 lang=golang
 *
 * [524] 通过删除字母匹配到字典里最长单词
 *
 * https://leetcode-cn.com/problems/longest-word-in-dictionary-through-deleting/description/
 *
 * algorithms
 * Medium (49.59%)
 * Likes:    263
 * Dislikes: 0
 * Total Accepted:    74.2K
 * Total Submissions: 149.5K
 * Testcase Example:  '"abpcplea"\n["ale","apple","monkey","plea"]'
 *
 * 给你一个字符串 s 和一个字符串数组 dictionary ，找出并返回 dictionary 中最长的字符串，该字符串可以通过删除 s
 * 中的某些字符得到。
 *
 * 如果答案不止一个，返回长度最长且字母序最小的字符串。如果答案不存在，则返回空字符串。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "abpcplea", dictionary = ["ale","apple","monkey","plea"]
 * 输出："apple"
 *
 *
 * 示例 2：
 *
 *
 * 输入：s = "abpcplea", dictionary = ["a","b","c"]
 * 输出："a"
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= s.length <= 1000
 * 1 <= dictionary.length <= 1000
 * 1 <= dictionary[i].length <= 1000
 * s 和 dictionary[i] 仅由小写英文字母组成
 *
 *
 */

package leetcode

// @lc code=start
// two pointers
func findLongestWord(s string, dictionary []string) (ret string) {
	for _, v := range dictionary {
		i, j := 0, 0
		for i < len(v) && j < len(s) {
			if v[i] == s[j] {
				i++
			}
			j++
		}
		if i == len(v) {
			if len(v) > len(ret) || (len(v) == len(ret) && v < ret) {
				ret = v
			}
		}
	}
	return
}

// @lc code=end
