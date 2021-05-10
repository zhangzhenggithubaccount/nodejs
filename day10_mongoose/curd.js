//导入mongodb驱动
const mongoose = require('mongoose');

//连接数据库
mongoose.connect('mongodb://localhost:27017/myproject', { useNewUrlParser: true, useUnifiedTopology: true }).then(()=> {
    console.log('connected successfully to server.');
}, (data) => {
    console.log('connected failfuly to server.');
});

//创建Schema规则
const studentSchema = mongoose.Schema({
    name: String,
    tel: String,
    hobbies: [String],
    age: Number
});

//创建collection实例
const Student = mongoose.model('student', studentSchema);

//1. 将document插入collection中
// Student.create({
//     name: 'Alon',
//     tel: '666666',
//     hobbies: ['乒乓球', '橄榄球'],
//     age: 18
// }).then((err) => {
//     console.log(err);
// }).catch((data) => {
//     console.log(data);
// });
// 2. 查询collection中所有的document
// Student.find().then((data) => {
//     console.log(data);
// }, (err) => {
//     console.log(err);
// });
// 3. 查询指定字段数据
// Student.find({_id: '6093a1c40e189130e8ff5e03'}).then((res) => {
//     console.log(res);
// });
// Student.find({name: 'Blog'}).then((res) => {
//     console.log(res);
// });
// 4. 返回集合中满足条件的第一条document
// Student.findOne({name: 'Alon'}).then(res => {
//     console.log(res);
// });
// 5. 查询年龄是18到21的学生 {age: {$gte: 18, $lte: 21}}
// Student.find({age: {$gte: 18, $lte: 21}}).then((res) => {
//     console.log(res);
// });
// 6. 查看爱好中包含篮球的同学 {hobbies: {$in: ['篮球']}}
// Student.find({hobbies: {$in: ['篮球']}}).then(res => {
//     console.log(res);
// });
// 7. 查找所有学生的年龄和姓名 -_id 不查询_id 字段
// Student.find().select('name age -_id').then(res => {
//     console.log(res);
// });
// 8. 按年龄升序
// Student.find().sort('age').then(res => {
//     console.log(res);
// });
// 9. 按年龄降序
// Student.find().sort('-age').then(res => {
//     console.log(res);
// });
// 10. 分页查询 skip() limit()
Student.find().skip(2).limit(2).then(res => {
    console.log(res);
});