const http = require('http');
const template = require('art-template');
const path = require('path');

const server = http.createServer();

server.on('request', (req, res) => {
    const url = path.join(__dirname, 'views', 'index.html');
    let html = template(url, {
        Student: {
            name: 'along',
            age: 28
        },
        students: [
            {name: 'phil', age: 18},
            {name: 'Jack', age: 20},
            {name: 'Tom', age: 21}
        ],
        flag: true
    });
    res.end(html);
});

server.listen(8888, () => {
    console.log('服务器开启，端口8888！');
});