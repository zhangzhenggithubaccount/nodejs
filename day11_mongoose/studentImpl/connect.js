//导入mongoose模块
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/myproject').then(() => {
    console.log('Connected successfully to server.');
}).catch(() => {
    console.log('Connected failfully to server.');
});