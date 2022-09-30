const express = require('express')
const app = express()
const router = require('./router')

app.use('/api',router)

app.listen(80,()=>{
    console.log('server running at http://localhost')
})