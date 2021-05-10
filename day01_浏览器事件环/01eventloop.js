//微事件先执行 宏事件后执行
// 执行上下文 -> 缓存区 ->[微事件队列, 宏事件队列] -> 执行上下文 ==> (Event loop)
// node eventloop node<10与浏览器运行结果不同
setTimeout(()=> {
    console.log(3);
    Promise.resolve().then(() => {
        console.log(4);
    });
}, 0);

Promise.resolve().then(() => {
    console.log(1);
    setTimeout(() => {
        console.log(5);
    }, 0);
});

Promise.resolve().then(() => {
    console.log(2);
});