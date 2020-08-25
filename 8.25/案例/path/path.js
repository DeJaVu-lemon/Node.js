const path = require('path');
const fs = require('fs');


// __dirname 当前文件夹的路径
console.log(path.join(__dirname));



let data = fs.readFileSync(path.join(__dirname, './demo1.js'), 'utf8')
console.log(data);


let data2 = fs.readFileSync(path.join(__dirname, '../demo1.js'), 'utf8')
console.log(data2);

// var str = '1.html';
// let exname = path.exname(str);

// console.log(exname);

// let flag = exname.endsWith('.html')
// if (flag) {
//     fs.readSync();
// } else if (css) {

// } else {

// }