const express= require('express')
const app = express()

// const mv = function(req,res,next){
//     console.log('调用了中间件函数')
//     next()
// }
// app.use(mv)

app.use(function(req,res,next){
    console.log('调用了中间件函数')
    next()
})

app.get('/',(req,res)=>{
    res.send('get message')
})

app.listen(80,()=>{
    console.log('server running at http://localhost')
})