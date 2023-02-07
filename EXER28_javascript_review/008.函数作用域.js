/*
    函数作用域
        - 调用函数时创建函数作用域，函数执行完毕后，函数作用于销毁
        - 每调用依次函数，就会创建一个新的函数作用域，它们之间相互独立
        - 在函数作用域中可以访问到全局作用域的变量
            但是在全局作用域中无法访问到函数作用域的变量
        - 当在函数作用域中操作变量时，先在自身作用域中寻找  
            如果有，就直接使用
            如果没有，向上一级作用域中寻找
        - 在函数中要访问全局变量可以访问window对象
        - 使用var关键字声明的变量，会在函数中所有代码执行之前被声明
        - 在函数中声明的函数，会在函数中所有代码执行之前被声明
        - 在函数中不适用var声明的变量都会成为全局变量
            function(){a=100} 相当于 function(){window.a=100}
*/

var a=10; //全局变量
function fun(){
    console.log(a)//函数中能够访问到全局作用域中的变量
    function fun2(){
        console.log("fun2 "+a)
        // console.log("fun2 "+window.a) 
    }
    fun2()
    var a = 20
}
// fun()
// console.log(b) not defined
function fun3(){
    // console.log(a)
    // fun4()
    // var a = 35;
    function fun4(){console.log("我是fun4")}
    
}
fun3()
function fun5(){
    console.log("fun5 "+a)
    a = 33;
}
// fun5()
// console.log("a "+a)

function fun6(a){
    console.log("fun6 "+a)
}
fun6() //未传值，在函数内a只被声明而未被赋值