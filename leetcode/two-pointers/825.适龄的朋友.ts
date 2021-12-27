/*
 * @lc app=leetcode.cn id=825 lang=typescript
 *
 * [825] 适龄的朋友
 *
 * https://leetcode-cn.com/problems/friends-of-appropriate-ages/description/
 *
 * algorithms
 * Medium (42.36%)
 * Likes:    98
 * Dislikes: 0
 * Total Accepted:    11.2K
 * Total Submissions: 26.5K
 * Testcase Example:  '[16,16]'
 *
 * 在社交媒体网站上有 n 个用户。给你一个整数数组 ages ，其中 ages[i] 是第 i 个用户的年龄。
 *
 * 如果下述任意一个条件为真，那么用户 x 将不会向用户 y（x != y）发送好友请求：
 *
 *
 * age[y] <= 0.5 * age[x] + 7
 * age[y] > age[x]
 * age[y] > 100 && age[x] < 100
 *
 *
 * 否则，x 将会向 y 发送一条好友请求。
 *
 * 注意，如果 x 向 y 发送一条好友请求，y 不必也向 x 发送一条好友请求。另外，用户不会向自己发送好友请求。
 *
 * 返回在该社交媒体网站上产生的好友请求总数。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：ages = [16,16]
 * 输出：2
 * 解释：2 人互发好友请求。
 *
 *
 * 示例 2：
 *
 *
 * 输入：ages = [16,17,18]
 * 输出：2
 * 解释：产生的好友请求为 17 -> 16 ，18 -> 17 。
 *
 *
 * 示例 3：
 *
 *
 * 输入：ages = [20,30,100,110,120]
 * 输出：3
 * 解释：产生的好友请求为 110 -> 100 ，120 -> 110 ，120 -> 100 。
 *
 *
 *
 *
 * 提示：
 *
 *
 * n == ages.length
 * 1 <= n <= 2 * 10^4
 * 1 <= ages[i] <= 120
 *
 *
 */

// @lc code=start
// two pointers
var numFriendRequests = function (ages: number[]): number {
  const n = ages.length;
  ages.sort((a, b) => a - b);
  let res = 0;
  let left = 0;
  let right = 0;
  for (const age of ages) {
    if (age < 15) {
      continue;
    }
    while (ages[left] <= 0.5 * age + 7) {
      left++;
    }
    while (right + 1 < n && ages[right + 1] <= age) {
      right++;
    }
    res += right - left;
  }
  return res;
};

// prefix sum
var numFriendRequests = function (ages: number[]): number {
  const cnt = new Array(121).fill(0);
  for (const age of ages) {
    cnt[age]++;
  }
  const preSum = new Array(121).fill(0);
  for (let i = 1; i <= 120; i++) {
    preSum[i] = preSum[i - 1] + cnt[i];
  }
  let res = 0;
  for (let i = 15; i <= 120; i++) {
    if (cnt[i] > 0) {
      const bound = Math.floor(i * 0.5 + 8);
      res += cnt[i] * (preSum[i] - preSum[bound - 1] - 1);
    }
  }
  return res;
};
// @lc code=end
