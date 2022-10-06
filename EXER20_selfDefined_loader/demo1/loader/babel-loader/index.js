const babel = require('@babel/core')
const schema = require('./schema.json')

module.exports = function(content){
    // 使用异步loader
    const callback = this.async()
    const options = this.getOptions(schema)
    // 使用babel进行编译
    babel.transform(content,options,function(err,result){
        return callback(err,result.code)
    })
}