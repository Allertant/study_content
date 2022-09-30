const mongoose = require('mongoose');

// 使用localhost无法访问，用127.0.0.1才能成功
mongoose.connect('mongodb://127.0.0.1/test',{useMongoClient:true})

const db = mongoose.connection

db.on('error',console.error.bind(console,'connection error:'))
db.once('open',function(){
    console.log('数据库连接成功')
})