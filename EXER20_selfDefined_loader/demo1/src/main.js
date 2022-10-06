import './css/index.css'

console.log('hello,shiyixi')

const arr = [1,2,3,4,5,6]
const sum = function(...args){
    return args.reduce((p,c)=>p+c,0)
}