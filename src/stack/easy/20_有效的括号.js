/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const map = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  // 1.
  // s.split('').forEach((str) => {
  //   if (map[stack[stack.length - 1]] === str) {
  //     stack.pop();
  //   } else {
  //     stack.push(str);
  //   }
  // });

  // return !stack.length;

  // 2.
  for (let i = 0; i < s.length; i++) {
    const ele = s[i];

    if (ele in map) {
      stack.push(ele);
    } else if (ele !== map[stack.pop()]) {
      return false;
    }
  }

  return !stack.length;
};
// @lc code=end
