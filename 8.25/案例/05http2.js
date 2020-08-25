const http = require('http');
http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
    res.end('hello 8000 端口启动')
}).listen(8000)