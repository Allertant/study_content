import {sum} from './math.js'
console.log(sum(1,2,3))
console.log('hello app')

document.getElementById('btn').onclick = function(){
    import('./count.js').then(({count})=>{
        console.log(count(123,23))
    })
}