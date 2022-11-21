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
})();
