// 同步loader的第一种写法
// module.exports = function(content){
//     return content
// }

// 同步loader的第二种写法（同步loader不能执行异步操作，否则会报错，因为异步callback无法将信息传递到下一个loader）
module.exports = function(content,map,meta){
    // 第一个参数 错误信息（如果没有错误信息则写null）
    // 第二个参数 文件内容
    // 第三个参数 map-source，保证map的传递不中断
    // 第四个参数 给下一个loader传递的内容
    console.log('test1',content)
    this.callback(null,content,map,meta)
}