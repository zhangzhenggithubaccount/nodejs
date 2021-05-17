const express = require('express');

const news = express.Router();

news.get('/list', (req, res) => {
    res.send('/news/list.html');
});

module.exports = news;