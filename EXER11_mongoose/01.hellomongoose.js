const mongoose = require('mongoose');

// 使用localhost无法访问，用127.0.0.1才能成功
mongoose.connect('mongodb://127.0.0.1/test',{useMongoClient:true})

const db = mongoose.connection

db.on('error',console.error.bind(console,'connection error:'))
db.once('open',function(){
    console.log('数据库连接成功')
})

var Schema = mongoose.Schema

var stuSchame = new Schema({
    name:String,
    age:Number,
    gender:{
        type:String,
        deault:'female'
    },
    address:String
})

var stuModel = mongoose.model('student',stuSchame)



// 增加
// stuModel.create([{
//     name:'shaheshang',
//     age:18,
//     gender:'male',
//     address:'nishahe'
// },],(err)=>{
//     if(!err) console.log(arguments)
// })

// 查询
// stuModel.find({age:'18'},{name:1,_id:0},(err,docs)=>{
//     if(!err) 
//         console.log(docs)
// })

// stuModel.find({},'address name age -_id',{skip:2,limit:1},(err,docs)=>{
//     if(!err) 
//         console.log(docs)
// })

// stuModel.findOne({age:'18'},{name:1,_id:0},(err,docs)=>{
//     if(!err) 
//         console.log(docs)
// })

// stuModel.findById('6331ad2b16f1fca4070605fe',(err,docs)=>{
//     if(!err) 
//         console.log(docs)
//     console.log(docs instanceof stuModel)
// })

// stuModel.update({name:'sunwukong'},{$set:{age:20}},(err)=>{
//     if(!err) console.log('修改成功')
// })

// stuModel.remove({name:'sunwukong'},(err)=>{
//     if(!err) console.log('删除成功')
// })

stuModel.count({},(err,count)=>{
    if(!err) console.log(count)
})








// mongoose.disconnect()
// db.once('close',function(){
//     console.log('数据库已断开')
// })