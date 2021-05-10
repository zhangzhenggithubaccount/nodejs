let vm = require('vm');

let a = 100;
//封闭容器运行代码
vm.runInThisContext("console.log('a')");
//当前环境运行代码
eval('console.log(a)');
//funciton 内部环境运行代码
var fn = new Function('console.log(123)');
fn();