// 剩余参数（rest参数）
(()=>{
    // ...args:string[] --->剩余参数，放在了一个字符串的数组args中
    function showMsg(str:string,...args:string[]){
        console.log(str) // a
        console.log(args) // ['b','c',...]
    }
    showMsg('a','b','c','d','e','f','g','h','i','j')
})()