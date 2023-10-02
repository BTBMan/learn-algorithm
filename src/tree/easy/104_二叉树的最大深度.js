/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  // 3 -> 9 20 -> 1 2 -> + 1 = 3
  // 9 -> null null -> 0 0 -> + 1 = 1
  // 20 -> 15 7 -> 1 1 -> + 1 = 2
  // 15 -> null null -> 0 0 -> + 1 = 1
  // 7 -> null null -> 0 0 -> + 1 = 1
  if (root === null) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
// @lc code=end
