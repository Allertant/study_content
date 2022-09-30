const express = require('express')
const app = express()

// session认证机制
const session = require('express-session')
app.use(session({ 
    secret:'itheima',
    receive:false, 
    saveUninitialized:true
}))

// jwt 认证机制
const jwt = require('jsonwebtoken')
const expressJWT = require('express-jwt')

// 定义一个secret 密钥
const secretKey = 'itheima No1 ^-^'

// 注册expressJWT 中间件,设置密钥，并设置不需要访问权限的接口（unless()方法中）
// 配置成功后，会把解析出来的用户信息挂载到req.user上
app.use(expressJWT({secret:secretKey}).unless({ path:[/^\/api\//] }))

app.use(express.urlencoded({extended:false}))


// 登录模块
app.post('/api/login',(req,res)=>{
    console.log(req.body)
    if(req.body.username != 'admin' || req.body.password != '000000'){
        return res.send({status:1,msg:'登录失败'})
    } 

    // 将登录成功后的用户信心保存到session中(注：只有成功配置了express-session中间件后，才能够通过req点出来session这个属性)
    req.session.user = req.body
    req.session.islogin = true

    // jwt 字符串
    // jwt.sign(param1,param2,param3) : 分别是用户的信息对象；加密的密钥；配置对象，可以配置 token 的有效期
    // 注意不要把密码加密到token字符串中
    const tokenStr = jwt.sign(
        {username:req.body.username},
        secretKey,
        {expiresIn:'30h'}
    )

    res.send({
        status:0,
        msg:'登录成功',
        // 登录成功后，调用Jwt.sign()生成 JWT 字符串，并通过 token 属性发送给客户端
        token:tokenStr
    })
})

// 登录进入后的模块
app.get('/admin/username',(req,res)=>{
    if(!req.session.islogin){
        return res.send({status:1,msg:'fail'})
    }
    console.log(req.user)
    res.send({
        status:0,
        msg:'success',
        username:req.session.user.username,
        data:req.user
    })
})

app.post('/api/logout',(req,res)=>{
    req.session.destroy()
    res.send({
        status:0,
        msg:'退出登录成功'
    })
})

// 全局错误中间件，捕获解析jwt 失败后产生的错误
app.use((err,req,res,next)=>{
    if(err.name === 'UnauthorizedError'){
        return res.send({
            status:401,
            message:'无效的token'
        })
    }
    res.send({ 
        status:500,
        message:'未知的错误'
    })
})

app.listen(80,()=>{ 
    console.log('server running at http://localhost')
})