const express= require('express')
const app = express()

app.use(function(req,res,next){
    console.log('调用了第一个全局中间件函数')
    next()
})
app.use(function(req,res,next){
    console.log('调用了第二个全局中间件函数')
    next()
})
app.get('/user/list',(req,res)=>{
    res.send('User Page')
})

app.listen(80,()=>{
    console.log('server running at http://localhost')
})