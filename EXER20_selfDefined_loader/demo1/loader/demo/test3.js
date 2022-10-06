// raw-loader的第一种写法
// module.exports = function(content){
//     console.log(content)
//     return content
// }
// module.exports.raw = true  // 开启了raw-loader标识

// raw-loader的第二种写法
function test3Loader(content){
    console.log(content)
    return content
}
test3Loader.raw = true 
module.exports = test3Loader