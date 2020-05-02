/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 *
 * https://leetcode-cn.com/problems/min-stack/description/
 *
 * algorithms
 * Easy (46.95%)
 * Likes:    458
 * Dislikes: 0
 * Total Accepted:    96.4K
 * Total Submissions: 183.3K
 * Testcase Example:  '["MinStack","push","push","push","getMin","pop","top","getMin"]\n' +
  '[[],[-2],[0],[-3],[],[],[],[]]'
 *
 * 设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。
 * 
 * 
 * push(x) —— 将元素 x 推入栈中。
 * pop() —— 删除栈顶的元素。
 * top() —— 获取栈顶元素。
 * getMin() —— 检索栈中的最小元素。
 * 
 * 
 * 
 * 
 * 示例:
 * 
 * 输入：
 * ["MinStack","push","push","push","getMin","pop","top","getMin"]
 * [[],[-2],[0],[-3],[],[],[],[]]
 * 
 * 输出：
 * [null,null,null,null,-3,null,0,-2]
 * 
 * 解释：
 * MinStack minStack = new MinStack();
 * minStack.push(-2);
 * minStack.push(0);
 * minStack.push(-3);
 * minStack.getMin();   --> 返回 -3.
 * minStack.pop();
 * minStack.top();      --> 返回 0.
 * minStack.getMin();   --> 返回 -2.
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * pop、top 和 getMin 操作总是在 非空栈 上调用。
 * 
 * 
 */

// @lc code=start
/**
 * initialize your data structure here.
 * 辅助栈和数据栈【同步】
 */
var MinStack = function () {
  this.data = []
  this.helper = []
}

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.data.push(x)
  if (!this.helper.length || x <= this.helper[this.helper.length - 1]) {
    this.helper.push(x)
  } else {
    this.helper.push(this.helper[this.helper.length - 1])
  }
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.helper.pop()
  return this.data.pop()
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.data[this.data.length - 1]
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.helper[this.helper.length - 1]
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end
