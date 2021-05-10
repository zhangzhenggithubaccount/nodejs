//创建http模块
const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');
const mime = require('mime');

//创建服务器
const server = http.createServer();

//监听请求
server.on('request', (req, res) => {
    let args = '';
    console.log(req.url);
    req.on('data', (chunk) => {
        //console.log('-> ' + chunk);
        args += chunk;
    });
    req.on('end', () => {
        let urlStr = url.parse(req.url);
        let { pathname } = urlStr;
        //console.log(urlStr);
        let target = path.join(__dirname, 'public', pathname);
        fs.readFile(target, 'utf8', (err, data) => {
            res.end(data);
        });
    });
});

//监听端口
server.listen(9966, () => {
    console.log('服务器已开启，端口号为9966!');
});