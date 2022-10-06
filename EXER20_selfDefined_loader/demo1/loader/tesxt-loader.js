/*
    loader就是一个函数
        当webpack调用响应loader时，就会调用相应的loader函数执行
        接收文本信息，并将处理好的内容返回出去
            content 文件内容
            map SourceMap
            meta 其他信息
 */

module.exports = function(content,map,meta){
    // 这里的输出语句，会在控制台将接收到的文件内容打印一遍
    console.log(content)
    return content
}