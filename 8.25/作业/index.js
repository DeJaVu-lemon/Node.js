const fs = require("fs");
const path = require("path");

fs.readFile(path.join(__dirname,"./data/test01.txt"),'utf8',(err,data)=>{
    if(err) throw err;
    fs.writeFile(path.join(__dirname,'./data/index.html'),data, err => {
        if (err) {
          console.error(err)
          return
        }
    })
});