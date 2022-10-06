module.exports = function(content){
    console.log('normal-loader 3')
    return content
}
module.exports.pitch = function(){
    console.log('pitch-loader 3')
}

// 如果pitch-loader有返回值，会直接中断，不会执行后面的pitch-loader,而返回执行前一个的normal-loader