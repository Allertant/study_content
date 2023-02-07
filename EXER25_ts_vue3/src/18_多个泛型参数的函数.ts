// 多个泛型参数的函数：函数中有多个泛型的参数
(()=>{
    function getMsg<K,V>(value1:K,value2:V):[K,V]{
        return [value1,value2]
    }
    console.log(getMsg<string,number>('hello',3))
})()