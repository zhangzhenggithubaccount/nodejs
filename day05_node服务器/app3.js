// 导入http模块
const http = require('http');

//创建服务器
let app = http.createServer();
//监听客服的请求
app.on('request', (req, res) => {
    //console.log(req);
    //请求报文
    //console.log(req.headers);
    //请求url
    console.log(req.url);
    //请求方法
    console.log(req.method);

    res.end('<h1>Hello World!</h1>');
});
//监听端口
app.listen(6699);