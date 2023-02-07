// 接口时对象的状态（属性）和i行为（方法）的抽象（描述）
// 接口：是一种类型，是一种规范，是一种规则，是一个能力，是一种约束
// readonly:只读的，挡在定义之前
// ?：可选的：放在变量之后
(function () {
    var person = {
        id: 1,
        name: 'shiyixi',
        age: 18,
    };
    person.sex = 'female';
    console.log(person);
})();
