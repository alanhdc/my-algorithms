/*
 * @lc app=leetcode.cn id=391 lang=golang
 *
 * [391] 完美矩形
 *
 * https://leetcode-cn.com/problems/perfect-rectangle/description/
 *
 * algorithms
 * Hard (41.10%)
 * Likes:    121
 * Dislikes: 0
 * Total Accepted:    7.1K
 * Total Submissions: 17.4K
 * Testcase Example:  '[[1,1,3,3],[3,1,4,2],[3,2,4,4],[1,3,2,4],[2,3,3,4]]'
 *
 * 给你一个数组 rectangles ，其中 rectangles[i] = [xi, yi, ai, bi]
 * 表示一个坐标轴平行的矩形。这个矩形的左下顶点是 (xi, yi) ，右上顶点是 (ai, bi) 。
 *
 * 如果所有矩形一起精确覆盖了某个矩形区域，则返回 true ；否则，返回 false 。
 *
 *
 * 示例 1：
 *
 *
 * 输入：rectangles = [[1,1,3,3],[3,1,4,2],[3,2,4,4],[1,3,2,4],[2,3,3,4]]
 * 输出：true
 * 解释：5 个矩形一起可以精确地覆盖一个矩形区域。
 *
 *
 * 示例 2：
 *
 *
 * 输入：rectangles = [[1,1,2,3],[1,3,2,4],[3,1,4,2],[3,2,4,4]]
 * 输出：false
 * 解释：两个矩形之间有间隔，无法覆盖成一个矩形。
 *
 * 示例 3：
 *
 *
 * 输入：rectangles = [[1,1,3,3],[3,1,4,2],[1,3,2,4],[3,2,4,4]]
 * 输出：false
 * 解释：图形顶端留有空缺，无法覆盖成一个矩形。
 *
 * 示例 4：
 *
 *
 * 输入：rectangles = [[1,1,3,3],[3,1,4,2],[1,3,2,4],[2,2,4,4]]
 * 输出：false
 * 解释：因为中间有相交区域，虽然形成了矩形，但不是精确覆盖。
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= rectangles.length <= 2 * 10^4
 * rectangles[i].length == 4
 * -10^5 <= xi, yi, ai, bi <= 10^5
 *
 *
 */

package leetcode

import (
	"fmt"
	"math"
)

// @lc code=start
func isRectangleCover(rectangles [][]int) bool {
	left, right, top, bottom := math.MaxInt32, math.MinInt32, math.MinInt32, math.MaxInt32
	sumArea := 0
	set := map[string]bool{}

	for _, rect := range rectangles {
		left = min(left, rect[0])
		bottom = min(bottom, rect[1])
		right = max(right, rect[2])
		top = max(top, rect[3])
		sumArea += (rect[2] - rect[0]) * (rect[3] - rect[1])
		lt := fmt.Sprintf("%d,%d", rect[0], rect[3])
		lb := fmt.Sprintf("%d,%d", rect[0], rect[1])
		rt := fmt.Sprintf("%d,%d", rect[2], rect[3])
		rb := fmt.Sprintf("%d,%d", rect[2], rect[1])

		// 最左下 最左上 最右下 最右上 的四个点只出现一次 其他点成对出现
		if set[lt] {
			delete(set, lt)
		} else {
			set[lt] = true
		}

		if set[lb] {
			delete(set, lb)
		} else {
			set[lb] = true
		}

		if set[rt] {
			delete(set, rt)
		} else {
			set[rt] = true
		}

		if set[rb] {
			delete(set, rb)
		} else {
			set[rb] = true
		}
	}

	// 四个点围城的矩形面积 = 小矩形的面积之和
	if len(set) == 4 && set[fmt.Sprintf("%d,%d", left, top)] && set[fmt.Sprintf("%d,%d", right, top)] && set[fmt.Sprintf("%d,%d", left, bottom)] && set[fmt.Sprintf("%d,%d", right, bottom)] {
		return sumArea == (right-left)*(top-bottom)
	}

	return false
}

func min(x, y int) int {
	if x < y {
		return x
	}
	return y
}

func max(x, y int) int {
	if x > y {
		return x
	}
	return y
}

// @lc code=end
