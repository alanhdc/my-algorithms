/**
 * @name Queue 使用数组实现队列
 * @description 队列是遵循FIFO（First In First Out， 先进先出，也称为先来先服务）原则的一组有序的项。
 * 队列在尾部添加新元素，并从顶部移除元素。
 * 最新添加的元素必须排在队列的末尾。
 * 在现实中，最常见的队列的例子就是排队。
 */
class Queue {
  constructor() {
    this.array = []
  }

  // 入列 O(1)
  enqueue(element) {
    this.array.push(element)
  }

  // 出列 O(n)
  dequeue() {
    return this.array.shift()
  }

  // 返回队列的第一个元素 O(1)
  getFront() {
    return this.array[0]
  }

  // 查询队列是否为空 O(1)
  isEmpty() {
    return this.array.length === 0
  }

  // 返回队列的元素个数 O(1)
  getSize() {
    return this.array.length
  }

  toString() {
    let str = 'Queue: front [ '
    str += this.array.join(', ')
    str += ' ]'
    return str
  }
}

module.exports = Queue
