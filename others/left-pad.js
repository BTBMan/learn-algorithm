const leftPad = (str, len, ch) => {
  // 计算须要补位的长度
  let length = len - str.length;

  // 存储补位字符
  let total = '';
  while (true) {
    // 不是2的余数
    if (length & 1) {
      // if (length % 2 === 1) {
      total += ch;
    }
    // 除2最终总会是1
    if (length === 1) {
      return total + str;
    }
    ch += ch;
    // length = parseInt(length / 2);
    length = length >> 1;
  }
};

console.log(leftPad('hello', 10, '0'));
