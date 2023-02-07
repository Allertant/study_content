function fun(){
    a = 123;
}
// console.log(a) 报错，not defined
/*
    作用域
        - 全局作用域
            - 直接编写在script标签中的代码都在全局作用域中
            - 全局作用域在页面打开时创建，在页面关闭时销毁
            - 在全局作用域中，有一个全局对象window
                代表一个浏览器的窗口，它由浏览器创建我们可以直接使用
            - 在全局作用域中
                创建的变量都会作为window对象的属性保存
                    特别地，如果使用window.xxx，而xxx未在全局作用域中声明，不会报错，而是提示undefined
                全局作用域中的函数会作为window的方法保存
            - 全局作用域中的变量都是全局变量
                在页面的任意位置都可以访问到
        - 函数作用域

*/