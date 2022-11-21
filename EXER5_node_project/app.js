const express = require('express')
const cors = require('cors')
const userRouter = require('./router/user')
const userinfoRouter = require('./router/userinfo')
const joi = require('joi')

const app = express()


// 静态托管文件
app.use('uploads',express.static('./uploads'))
// 解决跨域问题
app.use(cors())
// 配置解析表单数据的中间件
app.use(express.urlencoded({extended: false}))
// 在挂载路由之前，封装res.cc函数
app.use((req,res,next)=>{
    // status默认值为1，表示失败的情况
    // err的值，可能是一个错误的字符串或者对象
    res.cc = function(err , status=1){
        res.send({
            status,
            message:err instanceof Error ? err.message :err
        })
    }
    next()
})
// 在路由之前配置解析 token 的中间件
const expressJWT = require('express-jwt')
const config = require('./config')
// 使用jwt中间件对token字符串进行解析，使得能够在获取到token字符串后能够在req下添加属性user
// 使得 api 目录下的 js 文件不需要使用token验证权限
app.use(expressJWT({secret:config.jwtSecretKey}).unless({path:[/^\/api/]}))


// 引用路由,登录注册模块
app.use('/api',userRouter)
app.use('/my',userinfoRouter)
const artCateRouter = require('./router/artcats')
app.use('/my/article',artCateRouter) 
const articleRouter = require('./router/article')
app.use('/my/article',articleRouter)

// 定义错误级别的中间件 
app.use((err,req,res,next)=>{
    // 捕获 token 认证失败的错误
    if(err.name === 'UnauthorizedError') return res.cc('身份认证失败！')
    // 验证失败导致的错误
    if(err instanceof joi.ValidationError) return res.cc(err)
    // 未知的错误
    res.cc(err)
})

app.listen(3007,()=>{ 
    console.log('api server running at http://localhost:3007')
})