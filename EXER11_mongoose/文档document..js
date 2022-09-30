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

var stu = new stuModel({
    name:'奔波霸',
    age:48,
    gender:'male',
    address:'碧波谭'
})
// console.log(stu)

// stu.save(function(err){
//     if(!err){
//         console.log('保存成功')
//     }
// })



// stuModel.findOne({},(err,docs)=>{
//     if(!err) 
//         docs.update({$set:{age:28}},function(err){
//             if(!err) console.log('修改成功')
//         })
// })


// stuModel.findOne({name:'奔波霸'},(err,docs)=>{
//     if(!err){
//         docs.age = 80
//         docs.save((err)=>{
//             if(!err) console.log('modify success')
//             docs.remove(function(err){
//                 if(!err) console.log('bye biboba')
//             })
//             console.log(docs.isNew())
//         })
//     }
// })

stu.toJSON()
console.log(stu)