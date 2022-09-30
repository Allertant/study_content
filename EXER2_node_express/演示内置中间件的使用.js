const express= require('express')
const app = express()

// 添加全局中间件
app.use(express.json())
app.use(express.urlencoded({extended:false}))

// json格式数据
app.post('/',(req,res)=>{
    console.log(req.body)
    res.send('ok')
})

// url-encoded格式数据
app.post('/book',(req,res)=>{
    console.log(req.body)
    res.send('ok')
})

app.listen(80,()=>{
    console.log('server running at http://localhost')
})