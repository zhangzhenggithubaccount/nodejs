//导入express模块
const express = require('express');
const express_art_express = require('express-art-template');
const path = require('path');

const app = express();
const port = 8888;
const viewPath = path.join(__dirname, 'views');

//设置模板引擎
app.engine('.html', express_art_express);

//设置模板存放的目录
app.set('views', viewPath);

//设置默认的模板扩展名
app.set('view engine', 'html');

//全局对象locals
app.locals.msg = 'hello world!'

app.get('/index', (req, res) => {
    res.render('index');
});
app.get('/news', (req, res) => {
    res.render('news');
});

app.listen(port, () => {
    console.log(`server is start port: ${port}`);
});