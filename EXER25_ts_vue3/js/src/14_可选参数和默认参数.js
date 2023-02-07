// 可选参数：函数在声明的时候，内部的参数使用了?进行了修饰，那么就表示该参数可以传入也可以不传入，叫可选参数
// 默认参数：函数在声明的时候，内部的参数有自己的默认值，此时的这个参数就可以叫默认参数 
(function () {
    // 定义一个函数：传入姓氏和名字（形式+名字=姓名）
    // 需求：如果不传入任何内容，那么就返回默认的姓氏
    // 需求：如果只传入姓氏，那么就返回姓氏
    // 需求；如果传入姓氏和名字，那么返回来的就是姓名
    var getFullName = function (firstName, lastName) {
        if (firstName === void 0) { firstName = "东方"; }
        // 判断名字是否传入
        if (lastName) {
            return firstName + '-' + lastName;
        }
        else {
            return firstName;
        }
    };
    console.log(getFullName('xiahou', 'yuan'));
})();
