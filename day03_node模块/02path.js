let path = require('path');

//path处理路径模块
console.log(path.resolve('a.txt'));
//__dirname 与 process.cwd() 类似
console.log(__dirname, global.process.cwd());
console.log(path.resolve(__dirname, 'a.js'));
console.log(path.resolve(__dirname, 'a', '/'));
// 将
console.log(path.join(__dirname, 'a', '/'));
// 基础名字(去除扩展名)
console.log(path.basename('a.txt', '.txt'));
// 获取扩展名
console.log(path.extname('a.txt'));
//取父目录
console.log(path.dirname(__dirname));