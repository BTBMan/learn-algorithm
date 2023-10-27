/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // 小于3的时候返回空
  if (nums.length < 3) {
    return [];
  }

  // before sort [-1,0,1,2,-1,-4]
  nums.sort((a, b) => a - b); // n * log n
  // after sort [-4,-1,-1,0,1,2]
  const list = [];
  for (let i = 0; i < nums.length; i++) {
    // 防止相同数组的出现
    if (nums[i] === nums[i - 1]) {
      continue;
    }

    // 优化
    if (nums[i] + nums[i + 1] + nums[i + 2] > 0) {
      break;
    }
    if (nums[i] + nums[nums.length - 1] + nums[nums.length - 2] < 0) {
      continue;
    }

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      if (nums[i] + nums[left] + nums[right] > 0) {
        right--;
      } else if (nums[i] + nums[left] + nums[right] < 0) {
        left++;
      } else {
        list.push([nums[i], nums[left], nums[right]]);

        // 防止相同数组的出现
        while (nums[left] === nums[left + 1]) {
          left++;
        }
        // 防止相同数组的出现
        while (nums[right] === nums[right - 1]) {
          right--;
        }

        left++;
        right--;
      }
    }
  }

  return list;
};
// @lc code=end
