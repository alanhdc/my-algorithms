/*
 * @lc app=leetcode.cn id=640 lang=golang
 *
 * [640] 求解方程
 *
 * https://leetcode.cn/problems/solve-the-equation/description/
 *
 * algorithms
 * Medium (42.44%)
 * Likes:    126
 * Dislikes: 0
 * Total Accepted:    17.6K
 * Total Submissions: 39.6K
 * Testcase Example:  '"x+5-3+x=6+x-2"'
 *
 * 求解一个给定的方程，将x以字符串 "x=#value" 的形式返回。该方程仅包含 '+' ， '-' 操作，变量 x 和其对应系数。
 *
 * 如果方程没有解，请返回 "No solution" 。如果方程有无限解，则返回 “Infinite solutions” 。
 *
 * 题目保证，如果方程中只有一个解，则 'x' 的值是一个整数。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入: equation = "x+5-3+x=6+x-2"
 * 输出: "x=2"
 *
 *
 * 示例 2:
 *
 *
 * 输入: equation = "x=x"
 * 输出: "Infinite solutions"
 *
 *
 * 示例 3:
 *
 *
 * 输入: equation = "2x=x"
 * 输出: "x=0"
 *
 *
 *
 *
 * 提示:
 *
 *
 * 3 <= equation.length <= 1000
 * equation 只有一个 '='.
 * equation 方程由整数组成，其绝对值在 [0, 100] 范围内，不含前导零和变量 'x' 。 ​​​
 *
 *
 */

package leetcode

import (
	"fmt"
	"strconv"
)

// @lc code=start
func solveEquation(equation string) string {
	x, num, n := 0, 0, len(equation)
	for i, op := 0, 1; i < n; {
		if equation[i] == '+' {
			op = 1
			i++
		} else if equation[i] == '-' {
			op = -1
			i++
		} else if equation[i] == '=' {
			// 翻转 -> 移到等号右边
			x *= -1
			num *= -1
			op = 1
			i++
		} else {
			j := i
			for j < n && equation[j] != '+' && equation[j] != '-' && equation[j] != '=' {
				j++
			}
			// 累加
			if equation[j-1] == 'x' {
				if i < j-1 {
					x += atoi(equation[i:j-1]) * op
				} else {
					x += op
				}
			} else {
				num += atoi(equation[i:j]) * op
			}
			i = j
		}
	}
	if x == 0 {
		if num == 0 {
			return "Infinite solutions"
		} else {
			return "No solution"
		}
	}
	return fmt.Sprint("x=", num/-x)
}

func atoi(a string) int {
	if i, err := strconv.Atoi(a); err == nil {
		return i
	}
	return 0
}

// @lc code=end
