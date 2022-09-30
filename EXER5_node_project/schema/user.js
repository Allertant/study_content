// 导入定义验证规则的包
const joi = require('joi')

// 定义用户名和密码的验证规则 
const username = joi.string().alphanum().min(1).max(10).required()
const password = joi.string().pattern(/^[\S]{6,12}$/).required()

// 定义 id , nickname , email 的验证规则
const id = joi.number().integer().min(1).required()
const nickname = joi.string().required()
const email = joi.string().email().required()

// 定义头像的验证规则
// dataUri() 指的是这样的字符串数据: data:image/png;base64,VE9PTUFOWVNFQ1JFVFM=
const avatar = joi.string().dataUri().required()

// 定义验证和注册登录表单的规则对象
exports.reg_login_schema = { 
    body:{
        username, 
        password
    }
}

// 验证规则对象 - 更新用户基本信息
exports.update_userinfo_schema = {
    body:{
        id, 
        nickname, 
        email
    }
}

// 验证规则对象  - 重置密码
exports.update_password_schema ={
    body:{
        // 使用 password 这个规则验证，验证 req.body.oldPwd 的值
        oldPwd:password,
        // 使用joi.not(joi.ref('oldPwd)).concat(password) 规则：验证 req.body.newPwd的值
        // 解读：
        // 1. joi.ref('oldPwd') 表示newPwd的值必须和 oldPwd 的值保持一致
        // 2. joi.not() 表示取反
        // 3. concat() 用于合并 joi.not(joi.ref('oldPwd')).concat('password') 和 password 的验证规则
        newPwd:joi.not(joi.ref('oldPwd')).concat(password) 
    }
}

// 验证规则是 -头像验证
exports.update_avatar_schema = {
    body:{
        avatar
    }
}