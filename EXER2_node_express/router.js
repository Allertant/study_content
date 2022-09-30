const express = require('express')
const router = express.Router()
router.get('/user/list',(req,res)=>{
    res.end('Get your list')
})
router.post('/user/list',(req,res)=>{
    res.end('Post your list')
})
module.exports=router