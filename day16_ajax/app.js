const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 8888;

app.use(express.static(path.join(__dirname, 'public')));

// 接口
app.get('/', (req, res) => {
    res.send({name: 'Phil', age: 18});
});

app.listen(port, () => {
    console.log(`Server is start port ${port}`);
});