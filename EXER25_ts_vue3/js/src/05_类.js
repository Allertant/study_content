// 类可以理解为模板，通过模板可以实例化对象,体现的是面向对象的编程思想
(function () {
    // ts中类的定义
    var Person = /** @class */ (function () {
        // 定义构造函数,为了将来实例化对象的时候，可以直接对属性的值进行初始化
        function Person(name, age, gender) {
            if (age === void 0) { age = 18; }
            if (gender === void 0) { gender = 'male'; }
            this.name = name;
            this.age = age;
            this.gender = gender;
        }
        Person.prototype.sayHi = function (msg) {
            console.log("hi,i am " + this.name + "," + this.age + " year old," + this.gender + ":" + msg);
        };
        return Person;
    }());
    new Person('shiyixi', 19, 'female').sayHi('hhhh');
})();
