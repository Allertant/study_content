const express= require('express')
const customBodyParser = require('./custom-body-parser')
const app = express()

// 自定义全局中间件
app.use(customBodyParser)

app.post('/user',(req,res)=>{
    res.send(req.body)
    console.log(req.body)
})

app.listen(80,()=>{
    console.log('server running at http://localhost')
})