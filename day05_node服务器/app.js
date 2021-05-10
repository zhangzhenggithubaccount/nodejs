//创建服务器模块http
let http = require('http');

//创建一个服务器
let app = http.createServer();

//服务器监听请求
app.on('request', (req, res) => {
    res.end('<h1>Hello World!</h1>');
});

//服务器监听端口设置
//服务器需要跑在特定端口上
app.listen(6677);
console.log('服务器启动，端口6666！');