const loaderUtils = require('loader-utils')

module.exports = function(content){
    const filename = loaderUtils.interpolateName(this,"[hash].[ext]",{
        content
    })
    // console.log(filename)
    this.emitFile(filename,content)
    return `module.exports =  '${filename}'`
}
module.exports.raw = true