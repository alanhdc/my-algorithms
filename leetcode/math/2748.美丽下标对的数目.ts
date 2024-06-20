/*
 * @lc app=leetcode.cn id=2748 lang=typescript
 *
 * [2748] 美丽下标对的数目
 *
 * https://leetcode.cn/problems/number-of-beautiful-pairs/description/
 *
 * algorithms
 * Easy (58.20%)
 * Likes:    24
 * Dislikes: 0
 * Total Accepted:    11.5K
 * Total Submissions: 18.3K
 * Testcase Example:  '[2,5,1,4]'
 *
 * 给你一个下标从 0 开始的整数数组 nums 。如果下标对 i、j 满足 0 ≤ i < j < nums.length ，如果 nums[i] 的
 * 第一个数字 和 nums[j] 的 最后一个数字 互质 ，则认为 nums[i] 和 nums[j] 是一组 美丽下标对 。
 *
 * 返回 nums 中 美丽下标对 的总数目。
 *
 * 对于两个整数 x 和 y ，如果不存在大于 1 的整数可以整除它们，则认为 x 和 y 互质 。换而言之，如果 gcd(x, y) == 1 ，则认为
 * x 和 y 互质，其中 gcd(x, y) 是 x 和 y 的 最大公因数 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [2,5,1,4]
 * 输出：5
 * 解释：nums 中共有 5 组美丽下标对：
 * i = 0 和 j = 1 ：nums[0] 的第一个数字是 2 ，nums[1] 的最后一个数字是 5 。2 和 5 互质，因此 gcd(2,5)
 * == 1 。
 * i = 0 和 j = 2 ：nums[0] 的第一个数字是 2 ，nums[2] 的最后一个数字是 1 。2 和 5 互质，因此 gcd(2,1)
 * == 1 。
 * i = 1 和 j = 2 ：nums[1] 的第一个数字是 5 ，nums[2] 的最后一个数字是 1 。2 和 5 互质，因此 gcd(5,1)
 * == 1 。
 * i = 1 和 j = 3 ：nums[1] 的第一个数字是 5 ，nums[3] 的最后一个数字是 4 。2 和 5 互质，因此 gcd(5,4)
 * == 1 。
 * i = 2 和 j = 3 ：nums[2] 的第一个数字是 1 ，nums[3] 的最后一个数字是 4 。2 和 5 互质，因此 gcd(1,4)
 * == 1 。
 * 因此，返回 5 。
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [11,21,12]
 * 输出：2
 * 解释：共有 2 组美丽下标对：
 * i = 0 和 j = 1 ：nums[0] 的第一个数字是 1 ，nums[1] 的最后一个数字是 1 。gcd(1,1) == 1 。
 * i = 0 和 j = 2 ：nums[0] 的第一个数字是 1 ，nums[2] 的最后一个数字是 2 。gcd(1,2) == 1 。
 * 因此，返回 2 。
 *
 *
 *
 * 提示：
 *
 *
 * 2 <= nums.length <= 100
 * 1 <= nums[i] <= 9999
 * nums[i] % 10 != 0
 *
 *
 */

// @lc code=start
var countBeautifulPairs = function (nums: number[]): number {
  let res = 0;
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (isBeautifulPair(nums[i], nums[j])) {
        res++;
      }
    }
  }
  return res;

  function isBeautifulPair(a: number, b: number): boolean {
    while (a >= 10) {
      a = Math.floor(a / 10);
    }
    b = b % 10;
    if (gcd(a, b) === 1) {
      return true;
    }
    return false;
  }

  function gcd(a: number, b: number): number {
    return b === 0 ? a : gcd(b, a % b);
  }
};
var countBeautifulPairs = function (nums: number[]): number {
  let res = 0;
  const cnt: number[] = new Array(10).fill(0);

  for (let x of nums) {
    for (let y = 1; y <= 9; y++) {
      if (gcd(x % 10, y) === 1) {
        res += cnt[y];
      }
    }
    while (x >= 10) {
      x = Math.floor(x / 10);
    }
    cnt[x]++;
  }
  return res;

  function gcd(a: number, b: number): number {
    return b === 0 ? a : gcd(b, a % b);
  }
};
// @lc code=end
