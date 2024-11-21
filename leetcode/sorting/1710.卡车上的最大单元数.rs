/*
 * @lc app=leetcode.cn id=1710 lang=rust
 *
 * [1710] 卡车上的最大单元数
 *
 * https://leetcode.cn/problems/maximum-units-on-a-truck/description/
 *
 * algorithms
 * Easy (69.65%)
 * Likes:    67
 * Dislikes: 0
 * Total Accepted:    27K
 * Total Submissions: 37.2K
 * Testcase Example:  '[[1,3],[2,2],[3,1]]\n4'
 *
 * 请你将一些箱子装在 一辆卡车 上。给你一个二维数组 boxTypes ，其中 boxTypes[i] = [numberOfBoxesi,
 * numberOfUnitsPerBoxi] ：
 *
 *
 * numberOfBoxesi 是类型 i 的箱子的数量。
 * numberOfUnitsPerBoxi 是类型 i 每个箱子可以装载的单元数量。
 *
 *
 * 整数 truckSize 表示卡车上可以装载 箱子 的 最大数量 。只要箱子数量不超过 truckSize ，你就可以选择任意箱子装到卡车上。
 *
 * 返回卡车可以装载 单元 的 最大 总数。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：boxTypes = [[1,3],[2,2],[3,1]], truckSize = 4
 * 输出：8
 * 解释：箱子的情况如下：
 * - 1 个第一类的箱子，里面含 3 个单元。
 * - 2 个第二类的箱子，每个里面含 2 个单元。
 * - 3 个第三类的箱子，每个里面含 1 个单元。
 * 可以选择第一类和第二类的所有箱子，以及第三类的一个箱子。
 * 单元总数 = (1 * 3) + (2 * 2) + (1 * 1) = 8
 *
 * 示例 2：
 *
 *
 * 输入：boxTypes = [[5,10],[2,5],[4,7],[3,9]], truckSize = 10
 * 输出：91
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * 1 i, numberOfUnitsPerBoxi
 * 1
 *
 *
 */

// @lc code=start
impl Solution {
    pub fn maximum_units(box_types: Vec<Vec<i32>>, truck_size: i32) -> i32 {
        let mut box_types = box_types;
        let mut truck_size = truck_size;
        let mut res = 0;
        box_types.sort_by(|a, b| b[1].cmp(&a[1]));
        for box_type in box_types.iter() {
            for i in 0..box_type[0] as usize {
                if truck_size > 0 {
                    res += box_type[1];
                    truck_size -= 1;
                } else {
                    return res;
                }
            }
        }
        res
    }
}
// @lc code=end
