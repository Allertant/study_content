const http = require('http')
const fs = require('fs')
const path=require('path')
const server=http.createServer()
server.on('require',(req,res)=>{
    const url = req.url
    let fpath=''
    if(url==='/'){
        fpath=path.join(__dirname,'./clock/index.html')
    }else {
        fpath=path.join(__dirname,'/clock',url)
    }
    // const fpath = path.join(__dirname,url)
    fs.readFile(fpath,'utf8',(err,dataStr)=>{
        if(err){
            return res.end('404 not found')
        }
        res.end(dataStr)
    })
})
server.listen(80,function(){
    console.log("server running at http://localhost")
})