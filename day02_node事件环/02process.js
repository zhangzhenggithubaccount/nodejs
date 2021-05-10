//全局对象global
console.dir(global, {showHidden: true});
//process内置方法
console.dir(global.process, {showHidden: true});
//用户当前工作路径
console.log(process.cwd());
//用户环境信息
console.log(process.env);
//用户设备信息
console.log(process.plotfrom);
//node 02global.js --port 8080 --help abc 
console.log(process.argv); //['--port', '8080', '--help', 'abc']
