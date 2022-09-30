console.log('hello ts');
// 指定了类型为number
var aa1;
aa1 = 10;
var baa = 'hello';
function sum11(a, b) {
    return a + b;
}
var result = sum11(1, '2');
var a;
var a;
a = 10;
a = 11;
var b;
b = 'male';
b = 'false';
var c;
c = true;
c = 'fada';
var d; //显式，不建议使用
var e; //实际上就是一个类型安全的any，不能直接赋值给其他变量
e = 10;
e = 'hello';
e = 123;
var s;
if (typeof e === 'string')
    s = e;
// 类型断言
s = e; //由于编译器不知道，这里告诉编译器 e 是一个string 类型的
s = e;
function fn(num) {
    if (num > 0)
        return true;
    else
        return 123;
}
function fn1() {
    return undefined; // 可以返回void undefined
}
function fun2() {
    var a = 1;
    throw new Error('报错了！');
}
var a; //
a = {};
a = function () { };
//{}可以用来包含哪些属性
//属性值后面加?表示属性是可选的
var b; //可以指定属性:需要一个string类型属性
b = { name: '孙悟空', 13:  };
// name属性做要求，而其他属性不做要求
//propName:string 任意string类型的属性名
//[propName:string]:any  any:表示任意类型
//合在一起就是任意类型任意属性名
var c;
c = { name: '猪八戒', ss: '234', age: 23 };
//要求定义一个函数：有两个类型分别为number的属性名，返回值为number的函数（相当与接口）
//（形参：类型，形参：类型。。。） =>  返回值
var d;
// 数组：定义类型
// 1 类型[]
// 2 Array[类型]
var ee;
ee = ['a', 'b', 'c'];
var f;
f = [1, 2, 3];
// 元组——固定长度的数组，所以效率更高
var h; //长度为2，类型分别为string string
// 枚举
//枚举类语法（参考java语法）
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var i;
i = {
    name: "sunwukong",
    gender: Gender.Male
};
console.log(i.gender === Gender.Male);
// & 表示同时
var j; //表示两个对象都满足
j = { name: "sunwukong", age: 13 };
var k; // 使用类时变得很简单
var m;
var sss = 'hello';
