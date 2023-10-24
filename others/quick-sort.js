const numberArr = [24, 564, 6, 68, 5, 66, 23, 67, 98, 1];
const simpleArr = [3, 2, 1];

// 时间复杂度 O(n * log n)
// 空间复杂度 O(n * log n)
const quickSort1 = (arr) => {
  // 当数组只有一个的时候终止
  if (arr.length < 2) {
    return arr;
  }

  // 找一个标志位
  const flag = arr[0];

  // 根据标志位把数组拆为两个数组
  const left = [];
  const right = [];
  for (let i = 1; i < arr.length; i++) {
    const val = arr[i];

    if (val < flag) {
      left.push(val);
    } else {
      right.push(val);
    }
  }

  return [...quickSort1(left), flag, ...quickSort1(right)];
};

// console.log(quickSort1(numberArr));
// console.log(quickSort1(simpleArr));

// 原地快速排序
// 时间复杂度O(n * log n)
// 空间复杂度O(1)
// 以第一个值做为标志位
// 使用双指针
// 一个从最后面开始往前查找 找到比标志位小的数(first)
// 一个从最前面往后开始查找 找到比标志位大的数
// 交换这两个的位置
// 直到两个指针遇见后结束
// 实际上就是采用了上面quickSort1的思想, 通过标志位把一个数组拆成两组, 只不过不需要额外的变量, 而是通过交换位置的手法, 实际上一轮下来, 得到的结果是以标志位为分隔, 左边是通过从后面查找到的比标志位小的数, 右边则是通过前面查找比标志位大的数
// 最后在以标志位分割两组(实际是移动指针), 分别继续排序
// 返回start的位置
const quickSort2 = (arr) => {
  const point = (arr, start, end) => {
    const init = start;
    const flag = arr[init];

    start++;
    while (start <= end) {
      while (arr[end] > flag) {
        end--;
      }

      while (arr[start] < flag) {
        start++;
      }

      if (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
      }
    }

    [arr[start - 1], arr[init]] = [arr[init], arr[start - 1]];

    // 此时指针应该就是最后标志位的位置+1
    return start;
  };

  const sort = (arr, start, end) => {
    if (start < end) {
      const index = point(arr, start, end); // 这个是标志位的位置 以此分割
      sort(arr, start, index - 2); // 排序左边
      sort(arr, index, end); // 排序右边
    }

    return arr;
  };

  return sort(arr, 0, arr.length - 1);
};

// console.log(quickSort2(numberArr));
// console.log(quickSort2([6, 5, 4, 3, 2, 1]));
// console.log(quickSort2([1, 2, 3, 4, 5, 6]));
// console.log(quickSort2(simpleArr));

// let arr = [1, 3, 5];
// let flag = 3;
// let start = 0;
// let end = 3;

// while (arr[start] <= flag) {
//   console.log(start);
//   start++;
// }
// console.log('object');
