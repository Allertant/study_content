/*
    异步Loader的写法，可以执行异步处理函数
 */

module.exports = function(content,map,meta){
    const callback = this.async()

    setTimeout(() => {
        // 只有当这个异步操作执行完以后，才会进入下一个loader中进行执行
        console.log('test2',content)
        callback(null,content,map,meta)
    },1000)
}