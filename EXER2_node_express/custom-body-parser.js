const qs = require('querystring')

const bodyParser=(req,res,next)=>{
    let str = ""
    req.on('data',(chunk)=>{
        str += chunk
    })
    // 接收到全部数据后进行拼接
    req.on('end',()=>{
        const body = qs.parse(str)
        req.body = body
        next()
    })
}

module.exports=bodyParser