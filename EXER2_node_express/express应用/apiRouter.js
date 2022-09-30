const express = require('express')
const router = express.Router()

// 在这里挂载路由
router.get('/get',(req,res)=>{
    const query = req.query
    res.send({
        status:0,  
        msg:"get 请求成功",
        data:query
    })
})

router.post('/post',(req,res)=>{
    const body = req.body
    res.send({ 
        status:0, 
        msg:"post 请求成功",
        data:body
    })
})

router.delete('/delete',(req,res)=>{
    res.send({ 
        status:0, 
        msg:'请求成功'
    })
})
module.exports=router
