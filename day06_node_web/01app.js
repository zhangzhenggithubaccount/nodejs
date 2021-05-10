let http = require('http');
let url = require('url');

//创建服务器
let server = http.createServer();
//监听服务器请求
server.on('request', (req, res) => {
    res.writeHead(200, {
        'content-type': 'text/html;charset=utf8'
    });
    //第二个参数true可以把参数解析为对象
    let urlObj = url.parse(req.url, true);
    let { query }  = urlObj;
    console.log(query);
    res.end(`${query.username} : ${query.passward}`);
});
//监听端口
server.listen(6688, () => {
    console.log('项目启动成功！');
});