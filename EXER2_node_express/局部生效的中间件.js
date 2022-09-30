const express= require('express')
const app = express()

const vm1 = function(req,res,next){
    console.log('调用了局部生效的中间件1')
    next()
} 
const vm2 = function(req,res,next){
    console.log('调用了局部生效的中间件2')
    next()
}
app.get('/user/list',vm1,vm2,(req,res)=>{
    res.end('User Page')
})

app.listen(80,()=>{
    console.log('server running at http://localhost')
})