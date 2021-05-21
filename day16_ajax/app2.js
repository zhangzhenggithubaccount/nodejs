const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 8888;

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extends: false}));

app.post('/login', (req, res) => {
    //JSON.parser(req.body);
    res.send(req.body);
});

app.listen(port, () => {
    console.log(`Server to start port ${port}`);
});