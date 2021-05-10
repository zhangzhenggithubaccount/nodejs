const http = require('http');
const url = require('url');
require('../studentImpl/connect');
const Student = require('../studentImpl/studentDao');

let server = http.createServer();

server.on('request', async (req, res) => {
    let {pathname, query} = url.parse(req.url, true);

    if(req.method === 'GET') {
        if(pathname === '/list') {
            let students = await Student.find();
            let listStr = `
            <html>
            <head>
                <meta charset="UTF-8">
                <title>学生列表</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css">
            </head>
            <body>
            <div class="container">
            <h6>
                <a href="#" class="btn btn-primary">添加学生</a>
            </h6>
            <table class="table table-striped table-bordered">
            <tr>
                <td>学生姓名</td>
                <td>学生年龄</td>
                <td>学生爱好</td>
                <td>学生电话</td>
                <td>操作</td>
            </tr>`;
            students.forEach((item, index) => {
                listStr += `
                    <tr>
                        <td>${item.name}</td>
                        <td>${item.age}</td>
                        <td>${item.hobbies}</td>
                        <td>${item.tel}</td>
                        <td>
                            <a href="" class="btn btn-danger btn-xs">删除</a>
                            <a href="" class="btn btn-success btn-xs">修改</a>
                        </td>
                    </tr>
                `;
            });
            listStr += `
            </table>
            </div>
            </body>
            </html>
            `;
            res.writeHead(200, {
                'content-type': 'text/html;charset=utf8'
            });
            res.end(listStr);
            return;
        }
    }
    res.end(`${pathname}, ${query.username}`);

});

server.listen(9999, () => {
    console.log('服务器已开启，端口9999');
});