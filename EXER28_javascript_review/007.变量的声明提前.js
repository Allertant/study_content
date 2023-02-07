// console.log(a)
// a = 123 ; // 相当于window.a = 123;
/*
    var 
        变量的声明提前
            - 使用var关键字声明的变量，会在所有的代码执行之前被声明（执行赋值语句行时再赋值）
                var a;
                a = 123;
                如果声明变量时不使用var关键字，则变量不会被声明提前
        函数的声明提前
            - 使用函数声明形式创建函数function(){}
                它会在所有的代码执行之前就被创建
*/
fun()
// fun2()
function fun(){ // 函数的声明提前
    console.log("我是一个fun函数")
}
var fun2 = function(){ // 这是一个函数表达式，fun2作为变量，声明提前，但是没有被赋值，因此在赋值之前不能被调用
    console.log("我是fun2函数")
}
