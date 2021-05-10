//导入node模块
const http = require('http');
const path = require('path');
const url = require('url');
const mime = require('mime');
const fs = require('fs');

//创建服务器
const server = http.createServer();

//监听请求
server.on('request', (req, res) => {
    let urlStr = url.parse(req.url);
    let { pathname } = urlStr;
    if(pathname === '/') {
        pathname = '/index.html';
    }
    let absPath = path.join(__dirname, 'public', pathname);
    console.log(absPath);
    let type = mime.getType(absPath);
    //图片等二进制不能是utf-8编码的
    fs.readFile(absPath, (err, data) => {
        if(err) {
            res.writeHead(404, {
                'content-type': `${type};charset=utf8`
            });
            res.end('404 not found!');
        }else {
            if(type === 'text/html') {
                res.writeHead(200, {
                    'content-type': `${type};charset=utf8`
                });
            }else {
                res.writeHead(200, {
                    'content-type': `${type}`
                });
            }
            res.end(data);
        }
    });
});

//监听端口
server.listen(9999, () => {
    console.log('服务器已开启，端口号为9999。');
});