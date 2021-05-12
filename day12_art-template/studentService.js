const template = require('art-template');
const path = require('path');

const url = path.join(__dirname, 'views', 'index.html');
let html = template(url, {
    Student: {
        name: 'along',
        age: 28
    }
});
console.log(html);