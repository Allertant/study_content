const fs = require('fs')
const util =require('util')
// 工具类的promisify可以根据传入的函数返回一个返回值为promise对象的函数，通过调用该函数，返回一个promise对象
const mineReadFile = util.promisify(fs.readFile)
mineReadFile('./public/poem.txt')
.then(value=>{
    console.log(value.toString())
})