const mysql = require('mysql');
const db=mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'123456',
    database:'test002',
})

// 测试模块hi否正常工作
db.query('SELECT 1',(err,results)=>{
    if(err) return console.log(err.message)
    console.log(results)
})

// 查询数据
db.query('SELECT * FROM users',(err,results)=>{
    if(err) return console.log(err.message)
    console.log(results)
})

// 插入数据
const user = {username:'Spider-Man',password:'pacc321'}
// const sqlStr = 'INSERT INTO users(username,password) VALUES (?, ?)'
// db.query(sqlStr,[user.username,user.password],(err,results)=>{
    //简便方式，但要求字段名和对象属性名一致
const sqlStr = 'INSERT INTO users SET ?'
db.query(sqlStr,user,(err,results)=>{
    if(err) return console.log(err.message)
    if(results.affectedRows===1){ 
        console.log("插入数据成功")
    }
})

// 更新数据1
db.query('UPDATE users set username="zhangsan" where username="zs"',(err,results)=>{
    if(err) return console.log(err.message)
    if(results.affectedRows===1){
        console.lof("更新数据成功1")
    }
})
// 更新数据2
const user2 = {id:7,username:'aaa',password:'000'}
const sqlStr2 = 'update users set username=?,password=? where id=?'
db.query(sqlStr2,[user2.username,user2.password,user2.id],(err,results)=>{
    if(err) return console.log(err.message)
    // 更新数据后返回的结果是一个对象
    if(results.affectedRows===1){
        console.log('更新数据成功2')
    }
})
// 更新数据的便捷方式
const user3 = {id:8,username:'aaa',password:'000'}
const sqlStr3 = 'update users set ? where id=?'
db.query(sqlStr3,[user3,user3.id],(err,results)=>{
    if(err) return console.log(err.message)
    // 更新数据后返回的结果是一个对象
    if(results.affectedRows===1){
        console.log('更新数据成功3')
    }
})

// 删除数据(不推荐)
const sqlStr4 = 'delete from users where id = ?'
db.query(sqlStr4,5,(err,results)=>{
    if(err) return console.log(err.message)
    if(results.affectedRows===1){
        console.log('删除数据成功')
    }
})

// 删除数据(推荐)
const sqlStr5 = 'update users set status = 1 where id = ?'
db.query(sqlStr5,6,(err,results)=>{
    if(err) return console.log(err.message)
    if(results.affectedRows===1){
        console.log('删除数据成功')
    }
})

