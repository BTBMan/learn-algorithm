/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  // let board = [
  //   ['A', 'B', 'C', 'E'],
  //   ['S', 'F', 'C', 'S'],
  //   ['A', 'D', 'E', 'E'],
  // ];
  // let word = 'SEE';
  // let row = 1;
  // let col = 3;

  if (!board.length || !word.length) {
    return false;
  }

  let row = board.length; // 总行数
  let col = board[0].length; // 总列数
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      const ret = find(i, j, 0); // 从0开始查找(和单词的长度进行比对)

      // 找到了就返回true
      if (ret) {
        return ret;
      }
    }
  }

  function find(rowNum, colNum, current) {
    // 处理越界情况
    if (rowNum >= row || rowNum < 0) {
      return false;
    }

    if (colNum >= col || colNum < 0) {
      return false;
    }

    // 取出当前的字母
    let letter = board[rowNum][colNum];

    // 当前字母和单词索引下的字母不匹配返回false
    if (letter !== word[current]) {
      return false;
    }

    // 当current是word的长度 证明已经找到了
    if (current === word.length - 1) {
      return true;
    }

    board[rowNum][colNum] = null; // 把当前单词标记 防止重复查出

    // 当前字母的上下左右都进行查找 如果能被查找到就是true
    let ret =
      find(rowNum, colNum - 1, current + 1) || // 上
      find(rowNum, colNum + 1, current + 1) || // 下
      find(rowNum - 1, colNum, current + 1) || // 左
      find(rowNum + 1, colNum, current + 1); // 右

    board[rowNum][colNum] = letter; // 回溯 把标记的单词还原

    return ret;
  }

  // 都没有找到返回false
  return false;
};
// @lc code=end
