// 类 类型：类的类型可以通过接口来实现
(function () {
    var Person = /** @class */ (function () {
        function Person() {
        }
        Person.prototype.fly = function () {
            console.log('PERSON:I can fly');
        };
        return Person;
    }());
    var person = new Person();
    person.fly();
    var Person2 = /** @class */ (function () {
        function Person2() {
        }
        Person2.prototype.fly = function () {
            console.log('PERSON2：我可以飞');
        };
        Person2.prototype.swim = function () {
            console.log('PERSON2:我可以游泳');
        };
        return Person2;
    }());
    var person2 = new Person2();
    person2.fly();
    person2.swim();
    var Person3 = /** @class */ (function () {
        function Person3() {
        }
        Person3.prototype.fly = function () {
            console.log('PERSON3:i can fly');
        };
        Person3.prototype.swim = function () {
            console.log('PERSON3:i can swim');
        };
        return Person3;
    }());
    var person3 = new Person3();
    person3.fly();
    person3.swim();
    // 接口和接口之间叫继承，类和接口之间叫实现，分别是extends implements
})();
