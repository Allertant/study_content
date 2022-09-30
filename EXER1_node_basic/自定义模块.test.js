const syx=require('./syx-tools')

const dtStr=syx.dateFormat(new Date())
console.log(dtStr)

const htmlStr='<h1 title="abc">这是h1标签<span>123&nbsp;</span><h1>'
const str=syx.htmlEscape(htmlStr)
console.log(str)

const str2=syx.htmlUnEscape(str)
console.log(str2)