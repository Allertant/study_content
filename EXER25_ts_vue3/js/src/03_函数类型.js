// 为了使用接口标识函数类型，我们需要给接口定义一个调用签名
// 它就像是一个只有参数列表和返回值类型的函数定义。参数列表里的每一个参数都需要名字和类型
(function () {
    // 函数类型：通过接口的方式作为函数的类型来使用
    var searchString = function (source, subString) {
        // 在source字符串中查找subString字符串
        return source.search(subString) > -1;
    };
    console.log(searchString('shiyixi', 'i'));
})();
