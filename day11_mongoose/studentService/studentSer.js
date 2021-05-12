const http = require('http');
const url = require('url');
const qs = require('querystring');
require('../studentImpl/connect');
const Student = require('../studentImpl/studentDao');

let server = http.createServer();

server.on('request', async (req, res) => {
    let {pathname, query} = url.parse(req.url, true);
    
    if(req.method === 'GET') {
        //console.log(pathname);
        if(pathname === '/list') {
            let students = await Student.find();
            let listStr = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>学生列表</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css">
            </head>
            <body>
            <div class="container">
            <h6>
                <a href="/add" class="btn btn-primary">添加学生</a>
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
                            <a href="/delete?_id=${item._id}" class="btn btn-danger btn-xs">删除</a>
                            <a href="/update?_id=${item._id}" class="btn btn-success btn-xs">修改</a>
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
        }else if(pathname === '/add') {
            let addStr = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>添加学生</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css">
            </head>
            <body>
                <div class="container">
                    <h3>添加学生</h3>
                    <form method="POST" active="/add">
                        <div class="form-group">
                            <label>学生姓名</label>
                            <input type="text" name="name" class="form-control" placeholder="请填写学生姓名">
                        </div>
                        <div class="form-group">
                            <label>年龄</label>
                            <input type="text" name="age" class="form-control" placeholder="请输入年龄">
                        </div>
                        <div class="form-group">
                            <label>电话</label>
                            <input type="text" name="tel" class="form-control" placeholder="请填写邮箱">
                        </div>
                        <div class="form-group">
                            <label>请爱好</label>
                            <div>
                                <label class="checkbox-inline">
                              <input type="checkbox" name="hobbies" value="羽毛球"> 羽毛球
                            </label>
                                <label class="checkbox-inline">
                              <input type="checkbox" name="hobbies" value="网球"> 网球
                            </label>
                                <label class="checkbox-inline">
                              <input type="checkbox" name="hobbies" value="高尔夫球"> 高尔夫球
                            </label>
                                <label class="checkbox-inline">
                              <input type="checkbox" name="hobbies" value="足球"> 足球
                            </label>
                                <label class="checkbox-inline">
                              <input type="checkbox" name="hobbies" value="排球"> 排球
                            </label>
                                <label class="checkbox-inline">
                              <input type="checkbox" name="hobbies" value="手球"> 手球
                            </label>
                                <label class="checkbox-inline">
                              <input type="checkbox" name="hobbies" value="篮球"> 篮球
                            </label>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary">添加用户</button>
                    </form>
                </div>
            </body>
            </html>`;
            res.end(addStr);
        }else if(pathname === '/delete') {
            console.log(query);
            let stu = await Student.findOneAndDelete(query);
            console.log(stu);
            res.writeHead(301, {
                Location: '/list'
            });
            res.end();
        }else if(pathname === '/update') {
            let stu = await Student.findOne(query);
            let updateStr = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>修改学生</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css">
            </head>
            <body>
                <div class="container">
                    <h3>修改学生</h3>
                    <form method="POST" active="/update?_id="${stu._id}">
                        <div class="form-group">
                            <label>学生姓名</label>
                            <input type="text" name="name" class="form-control" placeholder="请填写学生姓名" value="${stu.name}">
                        </div>
                        <div class="form-group">
                            <label>年龄</label>
                            <input type="text" name="age" class="form-control" placeholder="请输入年龄" value="${stu.age}">
                        </div>
                        <div class="form-group">
                            <label>电话</label>
                            <input type="text" name="tel" class="form-control" placeholder="请填写邮箱" value="${stu.tel}">
                        </div>
                        <div class="form-group">
                            <label>请爱好</label>
                            <div>
                                <label class="checkbox-inline">
                              <input type="checkbox" name="hobbies" value="羽毛球"> 羽毛球
                            </label>
                                <label class="checkbox-inline">
                              <input type="checkbox" name="hobbies" value="网球"> 网球
                            </label>
                                <label class="checkbox-inline">
                              <input type="checkbox" name="hobbies" value="高尔夫球"> 高尔夫球
                            </label>
                                <label class="checkbox-inline">
                              <input type="checkbox" name="hobbies" value="足球"> 足球
                            </label>
                                <label class="checkbox-inline">
                              <input type="checkbox" name="hobbies" value="排球"> 排球
                            </label>
                                <label class="checkbox-inline">
                              <input type="checkbox" name="hobbies" value="手球"> 手球
                            </label>
                                <label class="checkbox-inline">
                              <input type="checkbox" name="hobbies" value="篮球"> 篮球
                            </label>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary">修改用户</button>
                    </form>
                </div>
            </body>
            </html>`;
            stu.hobbies.forEach(item => {
                updateStr = updateStr.replace(`value="${item}"`, `checked value="${item}"`);
            });
            res.end(updateStr);
        }else {
            res.end(`${pathname}, ${query.username}`);
        }
        return;
    }else if(req.method === 'POST'){
        if(pathname === '/add') {
            let queryStr = '';
            req.on('data', param => {
                queryStr += param;
            });

            req.on('end', async () => {
                queryStr = qs.parse(queryStr);
                await Student.create(queryStr);
                res.writeHead(301, {
                    Location: '/list'
                });
                res.end();
            });
        }else if(pathname === '/update') {
            let queryStr = '';
            req.on('data', chunk => {
                queryStr += chunk;
            });
            req.on('end', async () => {
                let queryObject = qs.parse(queryStr);
                // console.log(queryObject);
                await Student.updateOne({_id: query._id}, queryObject);
                res.writeHead(301, {
                    Location: '/list'
                })
                res.end();
            });
        }
        return;
    }
    

});

server.listen(9999, () => {
    console.log('服务器已开启，端口9999');
});