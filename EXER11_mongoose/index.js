require('./tools/comn_mongo')
var Student = require('./models/student')

console.log(Student)

Student.find({},(err,docs)=>{
    if(!err) console.log(docs)
})