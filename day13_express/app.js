//导入express模块
const express = require('express');
const port = 8888;

// 创建网站服务器
const app = express();
//可以定义多个中间件,
// app.get('/', (req, res, next) => {
//     console.log(1);
//     next();
// });

app.get('/', (req, res) => {
    // send() 会检测相应内容的类型自动设置状态码
    res.send('Hello World2!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});