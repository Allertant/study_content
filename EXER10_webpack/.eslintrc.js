module.exports = {
    //继承eslint规则
    extends:['eslint:recommended'],
    env:{
        node:true, // 启动node中全局变量 
        browser:true //启动浏览器中的全局变量
    },
    // 设置语法环境
    parserOptions:{
        ecmaVersion:6,  // es6环境
        sourceType:'module'
    },
    rules:{
        'no-var':2 //不能使用var定义变量
    },
    plugins:['import']  //解决动态导入语法报错
}