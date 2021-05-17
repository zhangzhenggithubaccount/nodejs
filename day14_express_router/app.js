const express = require('express');
const home = require('./route/home');
const news = require('./route/news');

const app = express();
const port = 8888;

app.use('/home', home);
app.use('/news', news);

app.get('/user/:1', (req, res) => {
    res.send(req.params);
});

app.listen(port, () => {
    console.log(`server is start port ${port}`);
});