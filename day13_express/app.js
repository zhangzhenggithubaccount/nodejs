//导入express模块
const express = require('express');
let bodyParser = require('body-parser');
const port = 8888;

// 创建网站服务器
const app = express();
//可以定义多个中间件,
// app.get('/', (req, res, next) => {
//     console.log(1);
//     next();
// });
//extends为true 使用外部中间件 qs
//       为false 使用node querystring
app.use(bodyParser.urlencoded({extends: false}));

app.get('/', (req, res) => {
    // send() 会检测相应内容的类型自动设置状态码
    res.send('Hello World!');
});

app.post('/list', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});