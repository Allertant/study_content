const express = require('express')
const app = express();

// app.get('/server',(req,res)=>{
//     res.setHeader('Access-Control-Allow-Origin','*') // 解决跨域问题
//     res.send('HELLO AJAX')
// })

app.use(express.urlencoded({extended:false}))

// all:可以接收任意请求
app.all('/server',(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*') // 解决跨域问题
    res.setHeader('Access-Control-Allow-Headers','*') //响应头：允许自定义的请求头信息
    setTimeout(()=>{res.send('HELLO AJAX')},3000)
    
})

app.all('/server-json',(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*') // 解决跨域问题
    res.setHeader('Access-Control-Allow-Headers','*') //响应头：允许自定义的请求头信息
    res.send(JSON.stringify({
        name:'zhangsan'
    }))                                                      
})
app.all('/axios-server',(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*') // 解决跨域问题
    res.setHeader('Access-Control-Allow-Headers','*') //响应头：允许自定义的请求头信息
    res.send(JSON.stringify({
        name:'shiyixi'
    }))                                                      
})
app.all('/fetch-server',(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*') // 解决跨域问题
    res.setHeader('Access-Control-Allow-Headers','*') //响应头：允许自定义的请求头信息
    res.send(JSON.stringify({
        name:'shiyixi'
    }))                                                      
})
app.all('/jquery-server',(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*') // 解决跨域问题
    res.setHeader('Access-Control-Allow-Headers','*') //响应头：允许自定义的请求头信息
    res.send(JSON.stringify({name:'shiyixi'}))                                                     
})
app.all('/check-username',(req,res)=>{
    const data = {
        exist:1,
        msg:"用户名已存在"
    }
    let str = JSON.stringify(data)
    res.end(`handler(${str})`)
})
app.all('/jsonp-server',(req,res)=>{
    const data = {
        name:'shiyixi666'
    }
    let str = JSON.stringify(data)
    res.end(`handler(${str})`)
})
app.all('/jquery-jsonp-username',(req,res)=>{
    const cb = req.query.callback;
    const data = {
        name:'shiyixi',
        city:['wuhan','ningbo','hangzhou','shanghai']
    }
    let str = JSON.stringify(data)
    res.end(`${cb}(${str})`)
})
app.listen(80,()=>{
    console.log('app running at http://localhost')
});