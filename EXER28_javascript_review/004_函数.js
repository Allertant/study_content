/**
 * 函数
 *      - 就是对象
 *      - 函数可以封装一些功能代码，需要时执行
 *      - 保存一些代码，在需要的时候调用
 *      - typeof --> function
 *      - 可以封装属性（具有对象的一切特点）
 */

// 使用构造函数的方法
var fun = new Function("console.log('这是一个函数')")
fun.hello = '你好'
// console.log(typeof fun)
// console.log(fun)
// fun();

// 使用函数声明方式
function fun2(){
    console.log("fun2")
}
// console.log(fun2)
// fun2()

// 使用函数表达式的方式
var fun3 = function(){
    console.log("fun3")
}
// console.log(fun3)
// fun3()

// 带形参的函数表达式
/*
    调用函数时不会检查实参的类型，有必要进行类型检查
    调用函数时不会检查实参的数量
        - 多余的参数不会被赋值（不会报错）
        - 实参数量小于形参数量则会被赋值为undefined

*/
/*
    return 
        return执行后，后面的代码不会执行
        默认值是undefiend
        返回值可以是任意基本数据类型，也可以是对象
*/
function getSum(a,b){
    return a+b
}
// console.log("sum is "+getSum(3,4))

function isEven(num){
    return num%2==0 
}
// console.log(isEven(34))
function getCircleSize(radius){
    return Math.round(Math.PI*radius*radius)
}
// console.log(getCircleSize(2))

function sayHello(name,age,gender,address){
    console.log("我是"+name+"，今年我"+age+",我是一个"+gender+"人，住在"+address)
}
// sayHello("shiyixi",17,"男","花果山")

var obj = {
    name:'孙悟空',
    age:18,
    gender:'男',
    address:'花果山'
};
function sayHelloByObject(obj){
    console.log("我是"+obj.name+"，今年我"+obj.age+",我是一个"+obj.gender+"人，住在"+obj.address)
}
// sayHelloByObject(obj);
function fun2(a){
    a(obj)
}
// fun2(sayHelloByObject)

// 立即执行函数（只能执行一次）
// (function(a){
//     console.log("我是一个立即执行函数 "+a)
// })(2)

/*
    函数可以称为对象的属性
        如果一个函数作为一个对象的属性保存
        那么我们称这个函数是这个对象的方法
        调用函数就说调用对象的方法（method）
    只是名称上的区别，和普通函数没有其他区别
    xxx.yyy
*/
var obj = {
    name:'孙悟空',
    age:18,
    sayName:function(){
        console.log(this.name)
    }
}
// obj.sayName()

