const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    throw new Error('服务器发生了错误')
    res.send('Home Page.')
})

// 程序发生错误时，会捕获项目异常，并执行代码；错误级别中间件注册在中间件之后
app.use(function(err,req,res,next){
    console.log('发生了错误！ '+err.message)
    res.send('Error'+err.message)
})

app.listen(80,()=>{
    console.log('server running at http://localhost')
})