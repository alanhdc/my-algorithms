/*
 * @lc app=leetcode.cn id=334 lang=rust
 *
 * [334] 递增的三元子序列
 *
 * https://leetcode-cn.com/problems/increasing-triplet-subsequence/description/
 *
 * algorithms
 * Medium (41.23%)
 * Likes:    430
 * Dislikes: 0
 * Total Accepted:    59K
 * Total Submissions: 140.9K
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * 给你一个整数数组 nums ，判断这个数组中是否存在长度为 3 的递增子序列。
 *
 * 如果存在这样的三元组下标 (i, j, k) 且满足 i < j < k ，使得 nums[i] < nums[j] < nums[k] ，返回
 * true ；否则，返回 false 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [1,2,3,4,5]
 * 输出：true
 * 解释：任何 i < j < k 的三元组都满足题意
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [5,4,3,2,1]
 * 输出：false
 * 解释：不存在满足题意的三元组
 *
 * 示例 3：
 *
 *
 * 输入：nums = [2,1,5,0,4,6]
 * 输出：true
 * 解释：三元组 (3, 4, 5) 满足题意，因为 nums[3] == 0 < nums[4] == 4 < nums[5] == 6
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= nums.length <= 5 * 10^5
 * -2^31 <= nums[i] <= 2^31 - 1
 *
 *
 *
 *
 * 进阶：你能实现时间复杂度为 O(n) ，空间复杂度为 O(1) 的解决方案吗？
 *
 */

// @lc code=start
impl Solution {
    // greedy
    // pub fn increasing_triplet(nums: Vec<i32>) -> bool {
    //     let mut a = std::i32::MAX;
    //     let mut b = std::i32::MAX;
    //     for &num in nums.iter() {
    //         if num <= a {
    //             a = num;
    //         } else if num <= b {
    //             b = num;
    //         } else {
    //             return true;
    //         }
    //     }
    //     false
    // }

    // greedy
    pub fn increasing_triplet(nums: Vec<i32>) -> bool {
        let n = nums.len();
        if n < 3 {
            return false;
        }
        let mut a = nums[0];
        let mut b = std::i32::MAX;
        for i in 1..n {
            let num = nums[i];
            if num > b {
                return true;
            } else if num > a {
                b = num;
            } else {
                a = num;
            }
        }
        false
    }
}
// @lc code=end
