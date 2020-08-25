const fs = require('fs');
// let data=fs.readFileSync('第一个参数也是读取文件的路径','第二个参数设置编码格式也可以不写')

// 返回值data就是读取之后的结果

// 同步读取数据 方法一
let data = fs.readFileSync('./01.js');
console.log(data);
console.log(data.toString());




// 同步读取数据  方法二
// let data2 = fs.readFileSync('./01.js', 'utf8');
// console.log(data2);
// console.log('我是读取文件之后的代码' + data2);


//  如果想用同步 建议必须带上try catch   不会阻止后续代码的执行
try {
    let data2 = fs.readFileSync('./01.js', 'utf8');
    console.log(data2);
} catch (error) {
    console.log('读取文件出错');
    console.log(error);
}
console.log('我是读取文件之后的代码');