const numberArr = [24, 564, 6, 68, 5, 66, 23, 67, 98, 1];
const simpleArr = [3, 2, 1];

const bubbleSort = (arr) => {
  const len = arr.length - 1; // 因为要与右边的内容进行比对, 避免undefined.

  for (let j = 0; j < len; j++) {
    // console.log(1, arr[j]);
    // 已经排了第j个了 所以第二次循环的时候不需要在遍历已经排好的项
    for (let i = 0; i < len - j; i++) {
      // console.log(2, arr[i]);
      // 证明右边的数比左边的小, 进行位置互换
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }
  }

  return arr;
};

console.log(bubbleSort(numberArr));
console.log(bubbleSort(simpleArr));
