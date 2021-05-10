const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

//mongodb url
const url = 'mongodb://localhost:27017';

//数据库名字
const dbName = 'myproject';
const client = new MongoClient(url, { useUnifiedTopology: true });

//使用connect方法连接mongodb
client.connect((err) => {
    assert.equal(null, err);
    console.log('Connected successfully to server');

    const db = client.db(dbName);

    client.close();
});
console.log(__dirname);
