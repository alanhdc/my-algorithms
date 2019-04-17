// 1. 申请空间，使其大小为两个已经排序序列之和，该空间用来存放合并后的序列；
// 2. 设定两个指针，最初位置分别为两个已经排序序列的起始位置；
// 3. 比较两个指针所指向的元素，选择相对小的元素放入到合并空间，并移动指针到下一位置；
// 4. 重复步骤 3 直到某一指针达到序列尾；
// 5. 将另一序列剩下的所有元素直接复制到合并序列尾

/**
 * @name mergeSort 归并排序
 * @description 归并排序是一种分治算法。
 * 其思想是将原始数组切分成较小的数组，直到每个小数组只有一个位置；
 * 接着将小数组（只有一个值）之间进行比较排序，之后归并成较大的数组，直到最后只有一个排序完毕的大数组。
 * @param { Array<Number> } arr
 * @returns { Array<Number> }
 */
function mergeSort(arr) {
  const len = arr.length

  // 递归终止条件
  if (len === 1) {
    return arr
  }

  let mid = Math.floor(len / 2), // 中间点
    left = arr.slice(0, mid),
    right = arr.slice(mid)
  return merge(mergeSort(left), mergeSort(right)) // 递归
}

/**
 * @name merge 归并方法
 * @description 从初始的只有一个值的数组两两比较开始，归并之后的数组变成排好序的有两个值的小数组；
 * 之后继续两两比较，小数组变成较大的数组，最后成为一个新的排序好的新数组
 * @param { Array<Number> } left 升序数组
 * @param { Array<Number> } right 升序数组
 */
function merge(left, right) {
  let result = [] // 新数组，用来保存归并的值

  while (left.length && right.length) {
    // 比较 left 和 right 两个数组值第一个值
    // 谁小就把谁从原来的数组中取出来，并加入到新数组后面
    if (left[0] <= right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }

  // 当其中一个数组已经清空后
  // 另外一个数组如果还有值，都是比较后剩余的较大的值
  // 把这些值依次从数组取出放入到新数组后面
  while (left.length) {
    result.push(left.shift())
  }

  while (right.length) {
    result.push(right.shift())
  }

  return result // 返回新数组
}

// test
let arr = [1, 7, 5, 10, 3, 4, 5, 2]
console.log(mergeSort(arr))
