// 泛型：在定义函数或接口或类的时候，不能预先确定要使用的数据的类型，而是在使用函数或接口或类的时候才能确定数据的类型，这是就需要使用泛型
(function () {
    // 需求：定义一个函数，传入两个参数，第一个参数是数据，第二个参数是数量：根据数量对应产生对应个数的数据，存放在一个数组中
    function getArr(value, count) {
        var arr = [];
        for (var i = 0; i < count; i++) {
            arr.push(value);
        }
        return arr;
    }
    console.log(getArr(100.123, 3));
})();
