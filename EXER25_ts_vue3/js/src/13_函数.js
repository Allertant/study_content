//  函数：封装了一些重复使用的代码，在使用时直接调用即可
(function () {
    // Js中的书写方式，在ts中同样也可以这样书写
    // // 函数声明，命名函数
    // function add(x,y){
    //     return x+y
    // }
    // // 函数表达式，匿名函数
    // const add2 = function(x,y){
    //     return x+y
    // }
    // ts 的书写方式
    // 参数类型指定
    // 返回值类型指定
    function add(x, y) {
        return x + y;
    }
    var add2 = function (x, y) {
        return x + y;
    };
    console.log(add('123', '456'));
    console.log(add2(123, 456));
    // 函数的完整写法
    // const 函数名：(参数及类型)=>返回类型 = function(参数及类型)：返回类型{}
    // (x:numebr,y:number) => number 当前的这个函数的类型
    // function (x:number,y:number):number {return x+y}  就相当于符合上面的这个函数的值
    var add3 = function (x, y) {
        return x + y;
    };
    console.log(add3(1111, 222));
})();
