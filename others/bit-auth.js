const style = 1 << 1;
const src = 1 << 2;
const children = 1 << 3;

// 授权
let nodeType = style | src;

// 鉴权
console.log(nodeType & style);
console.log(nodeType & src);
console.log(nodeType & children);

// 删除权限
nodeType ^= src;
console.log('-----------------');
console.log(nodeType & style);
console.log(nodeType & src);
console.log(nodeType & children);
