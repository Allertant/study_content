const date=require('./src/dateFormat')
const escape=require('./src/htmlEscape')


// 将对象上的所有属性展开交给index.js进行管理，向外进行暴露
module.exports={
    ...date,
    ...escape
}