// function fn(a:number):number{
//     return a
// }

// 泛型
function fn<T>(a:T):T{
    return a
}

// 直接使用
console.log(fn(10))
// 指定
console.log(fn<string>('hello'))


function fn2<T,K>(a:T,b:K){
    console.log(b);
    return a
}
console.log(fn2<number,string>(123,'world'))

interface Inter{
    length:number;
}
// 泛型与接口的结合使用(泛型T必须是Inter的一个实现类或子类)
function fn3<T extends Inter>(a:T){
    return a.length
}

console.log(fn3([1,2,3,4]))


// 类型不明确，用T来表示这个变量
class MyClass<T>{
    name:T
    constructor(name:T){
        this.name=name
    }
}
const mc = new MyClass<string>('123')