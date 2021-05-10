const http = require('http');
const qs = require('querystring');

//创建服务器
const server = http.createServer();

//监听请求
server.on('request', (req, res) => {
    let postData = '';
    req.on('data', (chunk) => {
        console.log('-> ' + chunk);
        postData += chunk;
    });
    req.on('end' , () => {
        
        let {username, password} = qs.parse(postData);
        console.log(username, password);
        res.end(`${username} : ${password}`);
    });
});

//监听端口
server.listen(6688, () => {
    console.log('启动服务器，端口号6688!');
});