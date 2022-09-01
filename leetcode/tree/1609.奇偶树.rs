/*
 * @lc app=leetcode.cn id=1609 lang=rust
 *
 * [1609] 奇偶树
 *
 * https://leetcode-cn.com/problems/even-odd-tree/description/
 *
 * algorithms
 * Medium (51.25%)
 * Likes:    53
 * Dislikes: 0
 * Total Accepted:    19.4K
 * Total Submissions: 33.6K
 * Testcase Example:  '[1,10,4,3,null,7,9,12,8,6,null,null,2]'
 *
 * 如果一棵二叉树满足下述几个条件，则可以称为 奇偶树 ：
 *
 *
 * 二叉树根节点所在层下标为 0 ，根的子节点所在层下标为 1 ，根的孙节点所在层下标为 2 ，依此类推。
 * 偶数下标 层上的所有节点的值都是 奇 整数，从左到右按顺序 严格递增
 * 奇数下标 层上的所有节点的值都是 偶 整数，从左到右按顺序 严格递减
 *
 *
 * 给你二叉树的根节点，如果二叉树为 奇偶树 ，则返回 true ，否则返回 false 。
 *
 *
 *
 * 示例 1：
 *
 *
 *
 *
 * 输入：root = [1,10,4,3,null,7,9,12,8,6,null,null,2]
 * 输出：true
 * 解释：每一层的节点值分别是：
 * 0 层：[1]
 * 1 层：[10,4]
 * 2 层：[3,7,9]
 * 3 层：[12,8,6,2]
 * 由于 0 层和 2 层上的节点值都是奇数且严格递增，而 1 层和 3 层上的节点值都是偶数且严格递减，因此这是一棵奇偶树。
 *
 *
 * 示例 2：
 *
 *
 *
 *
 * 输入：root = [5,4,2,3,3,7]
 * 输出：false
 * 解释：每一层的节点值分别是：
 * 0 层：[5]
 * 1 层：[4,2]
 * 2 层：[3,3,7]
 * 2 层上的节点值不满足严格递增的条件，所以这不是一棵奇偶树。
 *
 *
 * 示例 3：
 *
 *
 *
 *
 * 输入：root = [5,9,1,3,5,7]
 * 输出：false
 * 解释：1 层上的节点值应为偶数。
 *
 *
 * 示例 4：
 *
 *
 * 输入：root = [1]
 * 输出：true
 *
 *
 * 示例 5：
 *
 *
 * 输入：root = [11,8,6,1,3,9,11,30,20,18,16,12,10,4,2,17]
 * 输出：true
 *
 *
 *
 *
 * 提示：
 *
 *
 * 树中节点数在范围 [1, 10^5] 内
 * 1
 *
 *
 */

// Definition for a binary tree node.
#[derive(Debug, PartialEq, Eq)]
pub struct TreeNode {
    pub val: i32,
    pub left: Option<Rc<RefCell<TreeNode>>>,
    pub right: Option<Rc<RefCell<TreeNode>>>,
}

impl TreeNode {
    #[inline]
    pub fn new(val: i32) -> Self {
        TreeNode {
            val,
            left: None,
            right: None,
        }
    }
}
// @lc code=start
use std::cell::RefCell;
use std::collections::VecDeque;
use std::rc::Rc;
impl Solution {
    pub fn is_even_odd_tree(root: Option<Rc<RefCell<TreeNode>>>) -> bool {
        if root.is_none() {
            return true;
        }
        let mut queue = VecDeque::new();
        let mut level = 0;
        queue.push_back((Rc::clone(&root.unwrap())));

        while !queue.is_empty() {
            let size = queue.len();
            let mut prev = if level % 2 == 0 { i32::MIN } else { i32::MAX };
            for i in 0..size {
                if let Some(curr) = queue.pop_front() {
                    let node = curr.borrow();

                    if level % 2 == 0 && ((node.val & 1) == 0 || node.val <= prev) {
                        return false;
                    }
                    if level % 2 != 0 && ((node.val & 1) != 0 || node.val >= prev) {
                        return false;
                    }

                    if let Some(left) = &node.left {
                        queue.push_back((Rc::clone(left)));
                    }
                    if let Some(right) = &node.right {
                        queue.push_back((Rc::clone(right)));
                    }

                    prev = node.val;
                }
            }
            level += 1;
        }
        true
    }
}
// @lc code=end
