const express = require('express')
const router = express.Router()
const user_handler = require('../router_handler/user')
// 导入验证表单数据的中间件
const express_joi = require('@escook/express-joi')
const {reg_login_schema} = require('../schema/user')

// 添加路由处理函数、中间件
// 注册用户
router.post('/register',express_joi(reg_login_schema),user_handler.regUser )
// 登录用户
router.post('/login',express_joi(reg_login_schema),user_handler.login)

module.exports = router