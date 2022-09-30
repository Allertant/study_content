const express= require('express')
const qs = require('querystring')
const app = express()

// 自定义全局中间件
app.use((req,res,next)=>{
    let str = ""
    req.on('data',(chunk)=>{
        str += chunk
    })
    // 接收到全部数据后进行拼接
    req.on('end',()=>{
        const body = qs.parse(str)
        req.body = body
        next()
    })
})

app.post('/user',(req,res)=>{
    res.send(req.body)
})

app.listen(80,()=>{
    console.log('server running at http://localhost')
})