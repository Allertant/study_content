const fs = require('fs')
const util = require('util')

const mineReadFile = util.promisify(fs.readFile)

// fs 实现
// fs.readFile('./source/1.txt',(err,data1)=>{
//     if(err) throw 'data1 error'
//     fs.readFile('./source/2.html',(err,data2)=>{
//         if(err) throw 'data2 error'
//         fs.readFile('./source/3.txt',(err,data3)=>{
//             console.log(data1+data2+data3)
//         })
//     })
// })

async function main(){
    try {
        const p1 = await mineReadFile('./source/1.txt')
        const p2 = await mineReadFile('./source/2.html')
        const p3 = await mineReadFile('./source/3.txt')
        console.log(p1+p2+p3)
    } catch (error) {
        console.log(error)
    }
}
main()