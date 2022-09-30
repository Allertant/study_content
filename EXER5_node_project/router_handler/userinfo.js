const db = require('../db/index')
const bcrypt = require('bcryptjs')


exports.getUserInfo = (req,res)=>{
    // 定义查询用户信息的 SQL 语句
    const sql = `select id,username,nickname,email,user_pic from ev_users where id=?`
    // 调用db.query()执行 sql 语句
    db.query(sql,req.user.id,(err,results)=>{
        if(err) return res.cc(err)
        // 执行 sql 语句成功，但查询结构可能为空
        if(results.length !== 1) return res.cc('获取用户信息成功!')
        // 用户信息获取成功
        res.send({
            status:0, 
            message:'获取用户信息成功',
            data:results[0]
        })
    })
}

// 更新用户的信息
exports.updateUserInfo = (req,res)=>{
    // 定义 sql 语句
    const sql = `update ev_users set ? where id=?`
    console.log(req.user.id)
    // 这里虽然做了修改body.id，但实际上在数据库中作为主键的id是没有发生修改的，也不能被修改为其他值
    db.query(sql,[req.body,req.user.id],(err,results)=>{
        if(err) return res.cc(err)
        if(results.affectedRows !== 1){
            return res.cc('更新用户基本信息失败')
        }
        res.cc('更新用户信息成功!',0) 
    })
}

// 更新用户密码的函数
exports.updatePassword = (req,res)=>{
    // 根据 id 查询用户信息
    const sql = `select * from ev_users where id=?`
    // 执行 id 查询用户的信息的 sql 语句
    db.query(sql,req.user.id,(err,results)=>{
        // 执行 sql 语句失败
        if(err) return res.cc(err)
        // 判断结果是否存在
        if(results.length !== 1) return res.cc('用户不存在')
        // 判断用户输入的旧密码是否正确，错误则抛出错误
        const compareResult = bcrypt.compareSync(req.body.oldPwd,results[0].password)
        if(!compareResult) return res.cc('旧密码错误')

        // 更新数据库中的密码 
        const sql = `update ev_users set password=? where id=?`
        const newPwd = bcrypt.hashSync(req.body.newPwd,10)
        db.query(sql,[newPwd,req.user.id],(err,results)=>{
            if(err) return res.cc(err)
            if(results.affectedRows !== 1) return res.cc('更新密码失败')
        })
        res.cc('更新密码成功',0)  

    }) 
}

// 更新用户头像的处理函数
exports.updateAvatar = (req,res)=>{
    // 定义更新用户头像的 sql 语句
    const sql = `update ev_users set user_pic=? where id=?`
    // 调用db.query()执行 SQL 语句，更新对应用户的头像
    db.query(sql,[req.body.avatar,req.user.id],(err,results)=>{
        if(err) return res.cc(err)
        if(results.affectedRows !==1) return res.cc('更新头像失败')

        // 更新用户头像成功
        return res.cc('更新用户头像成功！',0 )
    })
}