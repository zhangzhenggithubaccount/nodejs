const express = require('express');
const home = require('./route/home');
const news = require('./route/news');

const app = express();
const port = 8888;

//express.static('/public'); 托管静态文件
app.use('/static', express.static('public'));
//绑定路由
app.use('/home', home);
app.use('/news', news);

//restful风格

app.use('/home', home);
app.use('/news', news);

app.get('/user/:1', (req, res) => {
    res.send(req.params);
});

app.listen(port, () => {
    console.log(`server is start port ${port}`);
});