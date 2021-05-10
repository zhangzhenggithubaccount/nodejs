const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/myproject').then((data) => {
    console.log('connected successfully to server!');
}).catch(() => {
    console.log('connected failfully to server!');
});

//1 创建集合规则
let teacherSchema = mongoose.Schema({
    name: String,
    tel: String,
    age: Number
});

//2 创建collection实例
let Teacher = mongoose.model('Teacher', teacherSchema); //teachers

// 3 创建document实例
// let teacher = new Teacher({
//     name: 'along',
//     tel: '18888888888',
//     age: 20
// });

// 4 保存
// teacher.save(); 

Teacher.create({
    name: 'phil',
    tel: '19999999999',
    age: 21
}, (err, doc) => {
    if(err) console.log(err);
    if(doc) console.log(doc);
});