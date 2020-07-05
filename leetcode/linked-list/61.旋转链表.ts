/*
 * @lc app=leetcode.cn id=61 lang=typescript
 *
 * [61] 旋转链表
 *
 * https://leetcode-cn.com/problems/rotate-list/description/
 *
 * algorithms
 * Medium (36.70%)
 * Likes:    239
 * Dislikes: 0
 * Total Accepted:    55.9K
 * Total Submissions: 139.2K
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * 给定一个链表，旋转链表，将链表每个节点向右移动 k 个位置，其中 k 是非负数。
 *
 * 示例 1:
 *
 * 输入: 1->2->3->4->5->NULL, k = 2
 * 输出: 4->5->1->2->3->NULL
 * 解释:
 * 向右旋转 1 步: 5->1->2->3->4->NULL
 * 向右旋转 2 步: 4->5->1->2->3->NULL
 *
 *
 * 示例 2:
 *
 * 输入: 0->1->2->NULL, k = 4
 * 输出: 2->0->1->NULL
 * 解释:
 * 向右旋转 1 步: 2->0->1->NULL
 * 向右旋转 2 步: 1->2->0->NULL
 * 向右旋转 3 步: 0->1->2->NULL
 * 向右旋转 4 步: 2->0->1->NULL
 *
 */

export {};

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// @lc code=start
var rotateRight = function (head: ListNode | null, k: number): ListNode | null {
  if (!head) return null;
  if (!head.next) return head;

  let oldTail = head;
  let n; // 链表长度
  for (n = 1; oldTail.next != null; n++) {
    oldTail = oldTail.next;
  }
  oldTail.next = head; // 连成环

  let newTail = head;
  // 新的尾部位置 n - k % n - 1
  for (let i = 0; i < n - (k % n) - 1; i++) {
    newTail = newTail.next!;
  }
  let newHead = newTail.next;

  newTail.next = null; // 断开环

  return newHead;
};
// @lc code=end

var rotateRight = function (head: ListNode | null, k: number): ListNode | null {
  if (!head || k === 0) return head;

  let tmp: ListNode = head;
  let size = 0;

  // 求链表长度
  while (tmp) {
    tmp = tmp.next!;
    size++;
  }

  k = k % size;
  if (k === 0) return head;

  let node = head; // 保存原来的头节点
  tmp = head;

  // 快慢指针
  while (k > 0) {
    k--;
    tmp = tmp.next!;
  }
  while (tmp.next) {
    head = head!.next;
    tmp = tmp.next;
  }

  const ret = head!.next; // 新的头节点
  head!.next = null; // 断开连接
  tmp.next = node; // 拼接原来的头节点

  return ret;
};
