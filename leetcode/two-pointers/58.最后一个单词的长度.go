/*
 * @lc app=leetcode.cn id=58 lang=golang
 *
 * [58] 最后一个单词的长度
 *
 * https://leetcode-cn.com/problems/length-of-last-word/description/
 *
 * algorithms
 * Easy (37.94%)
 * Likes:    393
 * Dislikes: 0
 * Total Accepted:    258.4K
 * Total Submissions: 680.9K
 * Testcase Example:  '"Hello World"'
 *
 * 给你一个字符串 s，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中最后一个单词的长度。
 *
 * 单词 是指仅由字母组成、不包含任何空格字符的最大子字符串。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "Hello World"
 * 输出：5
 *
 *
 * 示例 2：
 *
 *
 * 输入：s = "   fly me   to   the moon  "
 * 输出：4
 *
 *
 * 示例 3：
 *
 *
 * 输入：s = "luffy is still joyboy"
 * 输出：6
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= s.length <= 10^4
 * s 仅有英文字母和空格 ' ' 组成
 * s 中至少存在一个单词
 *
 *
 */

package leetcode

// @lc code=start
// two pointers
func lengthOfLastWord(s string) int {
	start, end := 0, len(s)-1
	for end >= 0 && s[end] == ' ' {
		end--
	}
	if end < 0 {
		return 0
	}
	start = end
	for start >= 0 && s[start] != ' ' {
		start--
	}
	return end - start
}

// @lc code=end
