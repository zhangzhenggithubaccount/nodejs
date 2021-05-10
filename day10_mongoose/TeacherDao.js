//导入mongoose
const mongoose = require('mongoose');

//mongoose创建连接
mongoose.connect('mongodb://localhost/myproject').then(()=> {
    console.log('connected successfully to server.');
}).catch(() => {
    console.log('connected failfuly to server.');
});

//1. 创建集合规则
let teacherSchema = mongoose.Schema({
    name: String,
    tel: String,
    age: Number
});

//2. 创建collection实例
let Teacher = mongoose.model('Teacher', teacherSchema);
//
//3. 创建document实例
let teacher = new Teacher({
    name: 'Aj',
    tel: '88888888',
    age: 18
});

//4. 保存document实例
teacher.save();

Teacher.create({
    name: 'Ad',
    tel: '6666666',
    age: 20
}, (err, data) => {
    if(err) console.log(err);
    if(data) console.log(data);
});