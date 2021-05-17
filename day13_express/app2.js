//导入express模块
const express = require('express');
const port = 8888;

const app = express();

//1. 优先执行该use ==> filter
app.use('*', (req, res, next) => {
    console.log('filter access');
    next();
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/list', (req, res) => {
    throw new Error('new Err');
})

app.get('/err', (req, res) => {
    next('server error.');
});

//2. 当没有对应路由时会执行该use
app.use((req, res) => {
    res.status(404).send('404 not found.');
});

//3. 处理错误中间件
app.use((err, req, res, next) => {
    res.status(500).send('500 server error. Error Message: '+ err.message);
});

app.listen(port, () => {
    console.log(`Server start to port:${port}`);
});