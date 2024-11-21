/*
 * @lc app=leetcode.cn id=1725 lang=rust
 *
 * [1725] 可以形成最大正方形的矩形数目
 *
 * https://leetcode-cn.com/problems/number-of-rectangles-that-can-form-the-largest-square/description/
 *
 * algorithms
 * Easy (80.80%)
 * Likes:    21
 * Dislikes: 0
 * Total Accepted:    15.3K
 * Total Submissions: 18.9K
 * Testcase Example:  '[[5,8],[3,9],[5,12],[16,5]]'
 *
 * 给你一个数组 rectangles ，其中 rectangles[i] = [li, wi] 表示第 i 个矩形的长度为 li 、宽度为 wi 。
 *
 * 如果存在 k 同时满足 k i 和 k i ，就可以将第 i 个矩形切成边长为 k 的正方形。例如，矩形 [4,6] 可以切成边长最大为 4
 * 的正方形。
 *
 * 设 maxLen 为可以从矩形数组 rectangles 切分得到的 最大正方形 的边长。
 *
 * 请你统计有多少个矩形能够切出边长为 maxLen 的正方形，并返回矩形 数目 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：rectangles = [[5,8],[3,9],[5,12],[16,5]]
 * 输出：3
 * 解释：能从每个矩形中切出的最大正方形边长分别是 [5,3,5,5] 。
 * 最大正方形的边长为 5 ，可以由 3 个矩形切分得到。
 *
 *
 * 示例 2：
 *
 *
 * 输入：rectangles = [[2,3],[3,7],[4,3],[3,7]]
 * 输出：3
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * rectangles[i].length == 2
 * 1 i, wi
 * li != wi
 *
 *
 */

// @lc code=start
impl Solution {
    pub fn count_good_rectangles(rectangles: Vec<Vec<i32>>) -> i32 {
        let sides = rectangles
            .iter()
            .map(|r| r[0].min(r[1]))
            .collect::<Vec<_>>();
        let mut res = 0;
        let mut max = 0;

        for side in sides {
            if side >= max {
                if side > max {
                    res = 1;
                } else {
                    res += 1;
                }
                max = side;
            }
        }
        res
    }
}
// @lc code=end
