/*
 * @lc app=leetcode.cn id=877 lang=rust
 *
 * [877] 石子游戏
 *
 * https://leetcode-cn.com/problems/stone-game/description/
 *
 * algorithms
 * Medium (74.31%)
 * Likes:    273
 * Dislikes: 0
 * Total Accepted:    39.7K
 * Total Submissions: 53.4K
 * Testcase Example:  '[5,3,4,5]'
 *
 * 亚历克斯和李用几堆石子在做游戏。偶数堆石子排成一行，每堆都有正整数颗石子 piles[i] 。
 *
 * 游戏以谁手中的石子最多来决出胜负。石子的总数是奇数，所以没有平局。
 *
 * 亚历克斯和李轮流进行，亚历克斯先开始。 每回合，玩家从行的开始或结束处取走整堆石头。
 * 这种情况一直持续到没有更多的石子堆为止，此时手中石子最多的玩家获胜。
 *
 * 假设亚历克斯和李都发挥出最佳水平，当亚历克斯赢得比赛时返回 true ，当李赢得比赛时返回 false 。
 *
 *
 *
 * 示例：
 *
 *
 * 输入：[5,3,4,5]
 * 输出：true
 * 解释：
 * 亚历克斯先开始，只能拿前 5 颗或后 5 颗石子 。
 * 假设他取了前 5 颗，这一行就变成了 [3,4,5] 。
 * 如果李拿走前 3 颗，那么剩下的是 [4,5]，亚历克斯拿走后 5 颗赢得 10 分。
 * 如果李拿走后 5 颗，那么剩下的是 [3,4]，亚历克斯拿走后 4 颗赢得 9 分。
 * 这表明，取前 5 颗石子对亚历克斯来说是一个胜利的举动，所以我们返回 true 。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 2
 * piles.length 是偶数。
 * 1
 * sum(piles) 是奇数。
 *
 *
 */

// @lc code=start
impl Solution {
    // pub fn stone_game(piles: Vec<i32>) -> bool {
    //     true
    // }

    // pub fn stone_game(piles: Vec<i32>) -> bool {
    //     let n = piles.len();
    //     // dp[i][j] -> piles[i+1: j] Alex 可以获得的最大分数
    //     let mut dp = vec![vec![0; n + 2]; n + 2];

    //     for size in 1..=n {
    //         let mut i = 0;
    //         while i + size <= n {
    //             let j = i + size - 1;
    //             let parity = (i + j + n) % 2;

    //             match parity {
    //                 1 => {
    //                     dp[i + 1][j + 1] =
    //                         i32::max(piles[i] + dp[i + 2][j + 1], piles[j] + dp[i + 1][j])
    //                 }
    //                 _ => {
    //                     dp[i + 1][j + 1] =
    //                         i32::min(-piles[i] + dp[i + 2][j + 1], -piles[j] + dp[i + 1][j])
    //                 }
    //             }

    //             i += 1;
    //         }
    //     }

    //     dp[1][n] > 0
    // }

    pub fn stone_game(piles: Vec<i32>) -> bool {
        let n = piles.len();
        let mut dp = vec![vec![0; n + 2]; n + 2];

        for size in 1..=n {
            let mut i = 0;
            while i + size < n {
                let j = size + 1;
                dp[i][j] = (piles[i] - dp[i + 1][j]).max(piles[j - 1] - dp[i][j - 1]);
                i += 1;
            }
        }

        dp[0][n] > 0
    }
}
// @lc code=end
