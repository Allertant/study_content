const express = require('express')
const app=express()

app.get('/user',(req,res)=>{
    res.send({name:"张三",name:20,gender:"男"})
    console.log('someone visited you soon')
})  

app.post('/user',(req,res)=>{
    res.send('请求成功')
    console.log('someone visited you soon')
})

app.get('/',(req,res)=>{
    // 匹配传过来的查询参数
    console.log(req.query)
    res.send(req.query)
})

app.get('/user/:ids/:name',(req,res)=>{
    // req.params匹配到动态参数
    console.log(req.params)
    res.send(req.params)
})

//设置静态资源访问
app.use('/files',express.static('public')) //此处的/files的‘/’不可省略
app.use(express.static('../../PYTHON_EXER_/pythonProject'))
// app.use(express.static('public'))



app.listen(80,()=>{
    console.log('express server running at http://localhost')
})

// 使用nodemon无法使用的情况下，可以在nodemon前面加上指令npx

