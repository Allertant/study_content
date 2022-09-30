const express = require('express')
const app = express()

// 在配置cors中间件前配置jsonp请求
app.get('/api/jsonp',(req,res)=>{
    // 得到函数的名字
    const funcName = req.query.callback;
    // console.log(funcName)
    // 定义要发送到客户端的数据对象
    const data={name:'zs',age:20}
    // 拼接出一个函数的调用
    const scriptStr = `${funcName}(${JSON.stringify(data)})`
    // 把拼接的字符串，响应给客户端
    res.send(scriptStr)

})

// 配置cors接口，解决跨域问题
const cors = require('cors')
app.use(cors())

app.use(express.urlencoded({extended:false}))
const router = require('./apiRouter')
app.use('/api',router)


app.listen(80,()=>{
    console.log('server running at http://localhost')
})
