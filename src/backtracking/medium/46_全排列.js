/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start

const backTrack = (list, temp, nums) => {
  // 如果temp的长度等于nums 则证明已经排完 直接终止这层递归
  if (temp.length === nums.length) {
    return list.push([...temp]);
  }

  for (let i = 0; i < nums.length; i++) {
    if (temp.includes(nums[i])) {
      continue;
    }

    temp.push(nums[i]);
    backTrack(list, temp, nums);
    temp.pop();
  }
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  // [1,2,3] // start
  // [] // depth1
  // [1] // depth1
  // [1,2] // depth2
  // [1,2,3] // depth3
  // return [1,2,3] // depth4
  // pop() => [1,2] // depth3
  // pop() => [1] // depth2
  // [1,3] // depth2
  // [1,3,2] // depth3
  // return [1,3,2] // depth4
  // pop() => [1,3] // depth3
  // pop() => [1] // depth2
  // pop() => [] // depth1
  // [2] // depth1
  // ... 以此类推
  let list = [];
  backTrack(list, [], nums);
  return list;
};
// @lc code=end
