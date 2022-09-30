const db = require('../db/index')
const bcrypt = require('bcryptjs')  //用于加密密码
const jwt = require('jsonwebtoken') //用于生成 jwt 格式的cookie
const config = require('../config') //导入全局的配置文件


// 注册路由
exports.regUser = (req,res)=>{
    const userInfo = req.body

    // 判断用户名和密码是否为空
    // if(!userInfo.username || !userInfo.password){
    //     return res.cc('用户名或密码不合法！')
    // }

    const sqlStr = `select * from ev_users where username = ?`
    db.query(sqlStr,[userInfo.username],(err,results)=>{
        if(err){
            return res.cc(err)
        }
        //判断用户名是否被使用
        if(results.length > 0){
            return res.cc('用户名被占用，请更换其他用户名!')
        }

        // 调用 bcrypt.hashSync() 对密码进行加密 
        userInfo.password = bcrypt.hashSync(userInfo.password,10)
        // 定义插入的 sql 语句
        const sql = `insert into ev_users set ?`
        // 调用 db.query() 执行 sql 语句
        db.query(sql,{username:userInfo.username,password:userInfo.password},(err,results)=>{
            // 判断 sql 语句是否执行成功
            if(err) return res.cc(err)
            // 判断影响行为是否为1
            if(results.affectedRows !== 1) return res.cc('注册用户失败，请稍后再试!')
            // 注册用户成功
            res.send({status:0,message:'注册成功！'})
        })
    })
}

// 用户登录
exports.login = (req,res)=>{
    // 接收表单的数据
    const userInfo = req.body
    // 定义SQL语句
    const sql =  `select * from ev_users where username=?`
    // 执行 SQL 语句，根据用户名查询用户的信息
    db.query(sql,userInfo.username,(err,results)=>{
        if(err) return res.cc(err)
        if(results.length !== 1) return res.cc('登录失败！')

        // 对密码进行验证
        const compareResult = bcrypt.compareSync(userInfo.password,results[0].password)
        if(!compareResult) return res.cc('登录失败!')

        // 登录成功，在服务器端生成token字符串
        // 获取剔除了密码和头像的用户信息
        const user = {...results[0],password:'',user_pic:''}
        console.log(user)
        // 对用户的信息进行加密
        const tokenStr = jwt.sign(user,config.jwtSecretKey,{expiresIn:config.expiresIn})
        // 调用res.send 将 token 响应给客户端
        res.send({
            status:0, 
            message:'登录成功！',
            token:'Bearer ' + tokenStr,
            username:user.username,
        })
    })
}