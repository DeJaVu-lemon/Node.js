// fs操作文件
const fs = require('fs'); //引入文件系统模块
// fs.readFile('读取文件的路径', '配置编码格式可以不写', '回调函数(第一个参数是读取失败,读取成功后的返回值)');

// let fs = {
//     read: () => {},
//     write: () => {},
//     append: () => {}

// }


//第一种方法 异步读取
fs.readFile('./01.js', (err, data) => {
    if (err) throw err;
    console.log(data); //<Buffer 63 6f 6e 73 6f 6c 65 2e 69 6e 66 6f 28 27 68 65 6c 6c 6f 20 6e 6f 64 65 27 29 3b>
    console.log(data.toString()); //console.info('hello node');
})


//第二种方法  异步读取
let res = 'hello';
fs.readFile('./01.js', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
    res = data;
})
console.log('我是异步读取的数据' + res);