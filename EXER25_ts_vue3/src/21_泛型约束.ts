// 泛型约束：如果我们直接对一个泛型参数取Length属性，会报错，因为这个泛型根本就不知道它有这个属性
(()=>{
    // 定义一个接口，用来约束将来的某个属性中必须有length这个属性
    interface ILength{
        length:number
    }
    function getLength<T extends ILength>(x:T):number{ // 约束T，T中必须要有length这个属性
        return x.length
    }
    console.log(getLength<String>('哈里斯的klsjad fkjasd fajsdlf; asjdkfl ;a'))
    // console.log(getLength<number>(324)) 在number这种数据类型中不存在length属性
})()