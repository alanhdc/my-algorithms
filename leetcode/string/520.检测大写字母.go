/*
 * @lc app=leetcode.cn id=520 lang=golang
 *
 * [520] 检测大写字母
 *
 * https://leetcode-cn.com/problems/detect-capital/description/
 *
 * algorithms
 * Easy (57.20%)
 * Likes:    155
 * Dislikes: 0
 * Total Accepted:    48.2K
 * Total Submissions: 84.3K
 * Testcase Example:  '"USA"'
 *
 * 我们定义，在以下情况时，单词的大写用法是正确的：
 *
 *
 * 全部字母都是大写，比如 "USA" 。
 * 单词中所有字母都不是大写，比如 "leetcode" 。
 * 如果单词不只含有一个字母，只有首字母大写， 比如 "Google" 。
 *
 *
 * 给你一个字符串 word 。如果大写用法正确，返回 true ；否则，返回 false 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：word = "USA"
 * 输出：true
 *
 *
 * 示例 2：
 *
 *
 * 输入：word = "FlaG"
 * 输出：false
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= word.length <= 100
 * word 由小写和大写英文字母组成
 *
 *
 */

package leetcode

// @lc code=start
// string
func detectCapitalUse(word string) bool {
	upper := 0
	for _, v := range word {
		if v >= 'A' && v <= 'Z' {
			upper++
		}
	}

	return upper == 0 || upper == len(word) || (upper == 1 && word[0] >= 'A' && word[0] <= 'Z')
}

// @lc code=end
