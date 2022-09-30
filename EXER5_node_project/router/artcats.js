const express = require('express')
const router = express.Router()
const artCate_handler = require('../router_handler/artcate')
const expressJoi = require('@escook/express-joi')
const {add_cate_schema,delete_cate_schema,get_cate_schema,update_cate_schema} = require('../schema/artcate')

// 获取文章路由处理数据函数模块
router.get('/cates',artCate_handler.getArtCates)
// 新增文章分类的路由
router.post('/addcates',expressJoi(add_cate_schema),artCate_handler.addArticleCate)
// 根据id删除文章分类的路由
router.get('/deletecate/:id',expressJoi(delete_cate_schema),artCate_handler.deleteCateById)
// 根据 ID 获取文章分类的路由
router.get('/cates/:id',expressJoi(get_cate_schema),artCate_handler.getArtCateById)
// 根据 id 更新文章分类数据的路由
router.post('/updatecate',expressJoi(update_cate_schema),artCate_handler.updateCateById)

module.exports = router 