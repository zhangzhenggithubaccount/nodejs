const http = require('http');
const url = require('url');
//创建服务器
const server = http.createServer();

//服务器监听请求
server.on('request', (req, res) => {
    res.writeHead(200, {
        'content-type' : 'text/html;charset=utf8'
    });

    let urlStr = url.parse(req.url, true);
    let {pathname} = urlStr;
    console.log(pathname);
    //路由
    if(pathname === '/' || pathname === '/index') {
        res.end('欢迎访问主页！');
    }else if(pathname === '/about') {
        res.end('与我相关！');
    }else {
        res.end('404 not found!');
    }

});

//服务器监听端口
server.listen(6688, () => {
    console.log('服务器开启成功,端口号6688！');
});