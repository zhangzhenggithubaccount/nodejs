//fs模块
let fs = require('fs');
//读取文件异步方法 __dirname js文件自带属性
fs.readFile(__dirname + '/a.txt', function(err, data) {
    console.log(data); // <Buffer 61>
});

//读取文件同步方法
let data = fs.readFileSync(__dirname + '/a.txt');
console.log(data); // <Buffer 61>

//文件是否存在异步方法
fs.exists(__dirname + '/a.txt', function(exists) {
    console.log(exists); //true
});

//文件是否存在同步方法
let bool = fs.existsSync(__dirname + '/a.txt');
console.log(bool); //true