const express= require('express')
// body-parser基于内置中间件封装出来的
const parser = require('body-parser')
const app = express()

app.use(parser.urlencoded({extended:false}))


app.post('/book',(req,res)=>{
    console.log(req.body)
    res.end('ok')
})

app.listen(80,()=>{
    console.log('server running at http://localhost')
})