//导入mongoose模块
const mongoose = require('mongoose');

//创建连接
mongoose.connect('mongodb://localhost/myproject', {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log('Connected successfully to server.');
}, () => {
    console.log('Connected fail to server.');
});

//创建schema规则
const studentSchema = mongoose.Schema({
    name: String,
    tel: String,
    hobbies: [String],
    age: Number
});

//创建collection实例
const Student = mongoose.model('Student', studentSchema);

// Student.findOneAndDelete({_id: '60965225a77f6c3c1c52f892'}).then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });

// Student.deleteMany({name: 'Clone'}).then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });

// Student.updateOne({name: 'Clone'}, {name: 'Phil'}).then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });

Student.updateMany({name: 'Clone'}, {name: 'Phil'}).then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});
