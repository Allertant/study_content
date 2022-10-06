const schema = require('./schema.json')

module.exports = function(content){
    const option = this.getOptions(schema)
    const str = `
    /*
    ---author:${option.author}
    */
    `
    return str + content
}