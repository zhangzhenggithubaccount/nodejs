console.log(Object.keys(global));
//为了模块化module this为{}
console.log(this);

setImmediate(function() {
    console.log('immediate1');
});
setTimeout(function() {
    console.log("timeout1");
});

let fs = require('fs');
fs.readFile('./a.txt', function(err, data) {
    setImmediate(function() {
        console.log('immediate2');
    });
    setTimeout(function() {
        console.log("timeout2");
    });
});