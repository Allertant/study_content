const path = require('path')
const db = require('../db')


exports.addArticle = (req,res)=>{

    // 手动判断是否收到了封面数据
    if(!req.file || req.file.fieldname !== 'cover_img') return res.cc('文章封面是必选参数')

    const articleInfo = {
        ...req.body,
        cover_img:path.join('/uploads',req.file.filedname),
        pub_date:new Date(),
        author:req.user.id
    }

    const sql = `insesrt into ev_article set ?`
    db.query(sql,articleInfo,(err,results)=>{
        if(err) return res.cc(err)
        if(results.affectedRows !== 1) return res.cc('发布文章失败')
        res.cc('发布文章成功',0)
    })
}