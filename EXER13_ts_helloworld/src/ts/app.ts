let a = 10
// import {hi} from './test.js'
// console.log(hi)

function fn(a:number,b:number){
    return a+b
}

function fn2(this:Window){
    // this类型不明确，不能使用
    alert(this)
}

let box1 = document.getElementById("box1")
// box1可能为null，不能够使用
// if(box1 !== null){
//     box1.addEventListener("click",function(){
//         alert('hello')
//     })
// }
// 另一种写法
box1?.addEventListener("click",function(){
    alert('hello')
})