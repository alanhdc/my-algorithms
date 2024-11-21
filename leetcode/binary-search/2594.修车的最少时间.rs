/*
 * @lc app=leetcode.cn id=2594 lang=rust
 *
 * [2594] 修车的最少时间
 *
 * https://leetcode.cn/problems/minimum-time-to-repair-cars/description/
 *
 * algorithms
 * Medium (45.60%)
 * Likes:    87
 * Dislikes: 0
 * Total Accepted:    10.3K
 * Total Submissions: 20.3K
 * Testcase Example:  '[4,2,3,1]\n10'
 *
 * 给你一个整数数组 ranks ，表示一些机械工的 能力值 。ranksi 是第 i 位机械工的能力值。能力值为 r 的机械工可以在 r * n^2
 * 分钟内修好 n 辆车。
 *
 * 同时给你一个整数 cars ，表示总共需要修理的汽车数目。
 *
 * 请你返回修理所有汽车 最少 需要多少时间。
 *
 * 注意：所有机械工可以同时修理汽车。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：ranks = [4,2,3,1], cars = 10
 * 输出：16
 * 解释：
 * - 第一位机械工修 2 辆车，需要 4 * 2 * 2 = 16 分钟。
 * - 第二位机械工修 2 辆车，需要 2 * 2 * 2 = 8 分钟。
 * - 第三位机械工修 2 辆车，需要 3 * 2 * 2 = 12 分钟。
 * - 第四位机械工修 4 辆车，需要 1 * 4 * 4 = 16 分钟。
 * 16 分钟是修理完所有车需要的最少时间。
 *
 *
 * 示例 2：
 *
 *
 * 输入：ranks = [5,1,8], cars = 6
 * 输出：16
 * 解释：
 * - 第一位机械工修 1 辆车，需要 5 * 1 * 1 = 5 分钟。
 * - 第二位机械工修 4 辆车，需要 1 * 4 * 4 = 16 分钟。
 * - 第三位机械工修 1 辆车，需要 8 * 1 * 1 = 8 分钟。
 * 16 分钟时修理完所有车需要的最少时间。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= ranks.length <= 10^5
 * 1 <= ranks[i] <= 100
 * 1 <= cars <= 10^6
 *
 *
 */

// @lc code=start
impl Solution {
    pub fn repair_cars(ranks: Vec<i32>, cars: i32) -> i64 {
        let cars = cars as i64;
        let mut left = 1;
        let mut right = ranks[0] as i64 * cars * cars;
        while left < right {
            let mid = left + (right - left) / 2;
            if check(mid, &ranks, cars) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        left
    }
}

fn check(pos: i64, ranks: &Vec<i32>, cars: i64) -> bool {
    let mut cnt = 0;
    for &rank in ranks.iter() {
        cnt += ((pos as f64 / rank as f64).sqrt()) as i64;
    }
    cnt >= cars
}
// @lc code=end
