/*
 * @lc app=leetcode.cn id=709 lang=golang
 *
 * [709] 转换成小写字母
 *
 * https://leetcode-cn.com/problems/to-lower-case/description/
 *
 * algorithms
 * Easy (76.94%)
 * Likes:    189
 * Dislikes: 0
 * Total Accepted:    89.5K
 * Total Submissions: 116.4K
 * Testcase Example:  '"Hello"'
 *
 * 给你一个字符串 s ，将该字符串中的大写字母转换成相同的小写字母，返回新的字符串。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "Hello"
 * 输出："hello"
 *
 *
 * 示例 2：
 *
 *
 * 输入：s = "here"
 * 输出："here"
 *
 *
 * 示例 3：
 *
 *
 * 输入：s = "LOVELY"
 * 输出："lovely"
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * s 由 ASCII 字符集中的可打印字符组成
 *
 *
 */

package leetcode

// @lc code=start
func toLowerCase(s string) (res string) {
	for _, v := range s {
		if v >= 'A' && v <= 'Z' {
			res += string(v + 32)
		} else {
			res += string(v)
		}
	}
	return
}

// @lc code=end
