const express= require('express')
const app = express()

app.use(function(req,res,next){
    // 为req挂载自定义属性
    const time = Date.now()
    req.startTime = time
    console.log('调用了中间件函数')
    next()
})

app.get('/',(req,res)=>{
    res.send('get message'+req.startTime)
})

app.listen(80,()=>{
    console.log('server running at http://localhost')
})