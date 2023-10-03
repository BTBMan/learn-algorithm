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

  s.split('').forEach((str) => {
    if (map[stack[stack.length - 1]] === str) {
      stack.pop();
    } else {
      stack.push(str);
    }
  });

  return !stack.length;
};
// @lc code=end
