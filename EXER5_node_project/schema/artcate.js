const joi = require('joi')

const name = joi.string().required()
const alias = joi.string().alphanum().required()
const id = joi.number().integer().min(1).required()


exports.add_cate_schema = {
    body:{
        name,
        alias
    }
}
exports.delete_cate_schema = {
    params:{
        id
    }
}
// 根据 id 获取文章分类的验证对象
exports.get_cate_schema = {
    params:{
        id
    }
}
// 根据 id 更新文章分类数据
exports.update_cate_schema = {
    body:{
        id, 
        name,
        alias
    }
}