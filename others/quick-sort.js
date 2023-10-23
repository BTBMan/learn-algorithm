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
// 定义一个标志位(以第一个值为例)
// 使用双指针 一个从最前面往后开始查找 找到比标志位大的数
// 另一个从最后面开始往前查找 找到比标志位小的数
// 交换这两个的位置
// 直到两个指针遇见后结束
// [3, 2, 5, 1] flag值为3 start位置:0 end位置:3
// start位置要先+1 因为要把flag在遍历里去处掉
// [3, 2, 5, 1] flag值为3 start位置:1 end位置:3
// [3, 2, 5, 1] flag值为3 end的值为1 比3小 须要交换位置
// [3, 2, 5, 1] flag值为3 start的值为2 比3小 不需要做任何操作 start位置 = start+1 = 2
// [3, 2, 5, 1] flag值为3 start的值为5 比3大 须要交换位置
// [3, 2, 5, 1] flag值为3 start位置:2 end位置:3
// start位置:2 小于 end位置:3 表示两个指针没有遇见
// [3, 2, 1, 5] flag值为3 start位置:2 end位置:3
// 分别移动两个指针 start位置:3 end位置:2
// 此时两个指针已经遇见 任务结束
// 结束后把flag和start的上一个位置(start-1)值换一下(因为start和end互换了 end开始找的是比flag小的数 那么证明交换后的start的值比flag小 要在flag的前面 所以要交换位置)
// [1, 2, 3, 5] flag值为3 start位置:3 end位置:2
// 返回start的位置
const quickSort2 = (arr) => {
  // [3, 2, 1]
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

      console.log(start, end);

      if (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
      }
    }
  };

  const sort = (arr, start, end) => {
    if (start < end) {
      const index = point(arr, start, end);
      console.log(start, end);
      // sort(arr, start, index - 1);
      // sort(arr, index, end);
    }

    return arr;
  };

  return sort(arr, 0, arr.length - 1);
};

// console.log(quickSort2(numberArr));
console.log(quickSort2(simpleArr));

// let arr = [1, 3, 5];
// let flag = 3;
// let start = 0;
// let end = 3;

// while (arr[start] <= flag) {
//   console.log(start);
//   start++;
// }
// console.log('object');
