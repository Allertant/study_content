var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 继承：类与类之间的关系
// 继承后类与类之间的叫法：
// A类继承了B这个类，那么此时A类叫子类，B类叫基类
// 子类----> 派生类
// 基类----> 超类（父类）
// 一旦发生了继承的关系，就出现了父子类的关系（叫法）
(function () {
    var Person = /** @class */ (function () {
        // 定义构造函数
        function Person(name, age, gender) {
            // 更新属性数据
            this.name = name;
            this.age = age;
            this.gender = gender;
        }
        // 定义实例方法
        Person.prototype.sayHi = function (str) {
            console.log("\u6211\u662F" + this.name + ",\u4F60\u662F" + str);
        };
        return Person;
    }());
    var Student = /** @class */ (function (_super) {
        __extends(Student, _super);
        function Student(name, age, gender) {
            return _super.call(this, name, age, gender) || this;
        }
        Student.prototype.sayHi = function (str) {
            _super.prototype.sayHi.call(this, str);
        };
        return Student;
    }(Person));
    new Student('shiyixi', 18, 'male').sayHi('王小美');
    // 类和类之间如果有继承关系，需要使用extends关键字
    // 子类中可以调用父类中的构造函数，使用的是super关键字，（包括调用父类的中的实例方法，也可以用是super关键字）
})();
