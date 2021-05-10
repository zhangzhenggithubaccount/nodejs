const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/myproject').then(() => {
    console.log('Connected successfully to server.');
}).catch(() => {
    console.log('Connected fail to server.');
});

const studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, '需要插入名字'],
        minLength: [2, '名字长度太短'],
        maxLength: [10, '名字长度太长']
    },
    tel: {
        type: String,
        validate: {
            validator: v => {
                let re = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/;
                return re.test(v);
            },
            message: '输入的电话号码不正确'
        }
    },
    hobbies: [String],
    age: {
        type: Number,
        min: [0, '你还没有出生'],
        max: [126, '你活不了那么长'],
        default: 18
    }
});

const Student = mongoose.model('student', studentSchema);

Student.create({name: 'Alone', tel: '11111111111', hobbies: ['a', 'b'], age: 129}).then(data => {
    console.log(data);
}).catch(err => {
    console.log(err.errors);
});