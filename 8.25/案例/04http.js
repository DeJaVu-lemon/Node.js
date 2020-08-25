const http = require("http"); //创建服务器的方法



// http.createServer('第一个参数：请求配置选项','第二个参数：返回值的配置选项')
// 返回时就创建一个服务
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
    if (req.url == '/news') {

        var data = { status: 200, list: [{ name: 'zs' }, { name: 'lisi' }] };
        res.end(JSON.stringify(data))
    } else {
        res.write('hello node');
        res.end('我是服务器请求后返回的结果方法end  执行了') //服务器结束必须要调用end方法
    }

})

server.listen(3001, () => {
    console.log('监听3001端口启动了...');
})