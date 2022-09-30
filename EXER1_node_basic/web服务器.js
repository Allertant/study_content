const http = require('http');
const server = http.createServer();

server.on('request', (req, res) => {
    const url = req.url
    let content=`<h1>404 not found</h1>`
    if(url === '/'|| url === '/index.html'){
        content="<h1>首页</h1>"
    }else if(url === '/about.html'){
        content="<h1>关于页面</h1"
    }
    // const str=`您请求的url地址为${req.url},请求的类型为${req.method}`
    res.setHeader('Content-Type','text/html;charset=utf-8')
    res.end(content)
})
server.listen(80,()=>{
    console.log("server running at http://localhost")
})