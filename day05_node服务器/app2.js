const http = require('http');

let app = http.createServer((req, res) => {
    res.writeHead(200, {
        'content-type': 'text/html;charset=utf8'
    });
    res.end('<h1>Hello World! 你好世界！</h1>');
});
app.listen(6688);
console.log('服务器已启动，端口6688!');