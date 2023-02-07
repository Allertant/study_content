// 基础类型
(function () {
    // 布尔类型
    // let 变量名：数据类型 = 值
    var flag = true;
    console.log(flag);
    // 数字类型
    var a1 = 10; // 十进制
    var a2 = 10; // 二进制
    var a3 = 10; // 八进制
    var a4 = 0xa; // 十六进制
    console.log(a1, a2, a3, a4);
    // 字符串类型
    var name = 'tom';
    name = 'jack';
    // name = 12 // error
    var age = 12;
    var info = "My name is " + name + ", I am " + age + " years old!";
    console.log(info);
    // 字符串和数字之间能否进行拼接？能
    var str5 = '我有这么多的前:';
    var num = 1000;
    console.log(str5 + num);
    console.log('--------------------------');
    var und = undefined;
    var nu = null;
    console.log(und);
    console.log(nu);
    // undefined 和 null 都可以作为其他类型的子类型，把undefined和null赋值给其他类型的变量的，如：number类型的变量
    var num2 = undefined;
    console.log(num2);
    var num3 = null;
    console.log(num3);
    // 数组类型
    // 定义方式1:let 变量名：数据类型[] = [值1，值2，值3...]
    var arr1 = [10, 20, 30, 40, 50];
    // 定义方式2：泛型的方法:let 变量名：Array<数据类型> = [值1，值2，值3...]
    var arr2 = [10, 20, 30, 40, 50];
    // 注意问题
    /**
     * 1. 数组定义后，里面的数据类型必须和定义数组时候的类型是一致的，否则报错，也不会编译通过
     */
    // 元组类型：在定义数组的时候，类型、数据的个数和位置一开始就已经限定了
    var arr3 = ['shiyixi', 19, true];
    console.log(arr3);
    // 注意问题：元组类型在使用的时候，数据的类型的位置和数据的个数应该和在定义元组的时候的数据类型及位置是一致的
    console.log(arr3[0].split(''));
    console.log(arr3[1].toFixed(2));
    console.log('----------------------------');
    // 枚举类型
    var Color;
    (function (Color) {
        Color[Color["red"] = 1] = "red";
        Color[Color["green"] = 2] = "green";
        Color[Color["blue"] = 3] = "blue";
    })(Color || (Color = {}));
    var color = Color.red; // 获取的是元素在枚举中的位置
    console.log(color);
    console.log(Color.red, Color.green, Color.blue);
    // 通过枚举值获取枚举元素
    console.log(Color[3]);
    // demo
    console.log('--demo--');
    var Gender;
    (function (Gender) {
        Gender[Gender["\u5973"] = 0] = "\u5973";
        Gender[Gender["\u7537"] = 1] = "\u7537"; // 可以为中文，但不推荐
    })(Gender || (Gender = {}));
    console.log(Gender.男);
    console.log('--------------------');
    // any类型：谨慎使用
    var str = 100;
    str = 'shiyixi';
    console.log(str);
    var arr = [18, 'shiyixi', 'male', true]; // 当一个数组中要存储多个数组，个数和类型不确定时，此时也可以使用any来定义数组
    console.log(arr);
    // console.log(arr[0].split('')) // 由于第一个数组是numebr类型，但是这里并不能提示错误信息，有一定缺陷
    // void 类型，
    function showMsg() {
        console.log('void的使用');
        // return undefined 
    }
    showMsg();
    console.log(showMsg()); // undefined
    // 定义void类型的变量，可以接收一个undefined的值，但是意义不是很大
    var vd = undefined;
    console.log(vd);
    console.log('---------------');
    // object类型
    function getObj(obj) {
        console.log(obj);
        return {
            name: 'shiyixi',
            age: 18
        };
    }
    console.log(getObj({ name: 'shi', age: 19 })); // 只能传入一个object类型，并且返回值的类型也是一个object类型
    console.log(getObj(new String('shiyixi')));
    console.log(getObj(Object));
    console.log('---------------------');
    // 联合类型
    // req1:定义一个函数得到一个数字或字符串值的字符串形式
    function getString(str) {
        return str.toString();
    }
    console.log(getString('123'));
    // 类型断言:告诉编译器，我知道自己在干什么
    // 类型断言的语法方式1：<类型>变量名
    // 类型断言的语法方式2：值 as 类型
    // req2:定义一个函数，得到一个数字或者字符串的长度
    function getLength(str) {
        // return str.toString().length
        if (str.length) {
            // return (<string>str).length
            return str.length;
        }
        else {
            return str.toString().length;
        }
    }
    console.log(getLength('234'));
    console.log(getLength(234234234));
    console.log('--------------------------');
    // 类型推断
    var txt = 100; // 没有声明该变量是什么，但是js引擎会推测出该变量是number类型
    console.log(txt);
    var asd; // 推断出是any 类型，后面可以赋值覆盖
    asd = 100;
    asd = 'shiyixi';
    console.log(asd);
})();
