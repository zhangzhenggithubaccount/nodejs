const mongoose = require('mongoose');

let studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 10
    },
    tel: {
        type: String,
        validate: {
            validator: val => {
                let re = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/;
                return re.test(val);
            },
            message: '电话号码不正确'
        }
    },
    hobbies: [String],
    age: {
        type: Number,
        min: 0,
        max: 126
    }
});

let Student = mongoose.model('student', studentSchema);

module.exports = Student;