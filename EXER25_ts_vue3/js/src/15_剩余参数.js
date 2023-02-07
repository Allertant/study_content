// 剩余参数（rest参数）
(function () {
    // ...args:string[] --->剩余参数，放在了一个字符串的数组args中
    function showMsg(str) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        console.log(str); // a
        console.log(args); // ['b','c',...]
    }
    showMsg('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j');
})();
