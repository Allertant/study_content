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
// 修饰符（类中的成员的修饰符）：主要是描述类中的成员（属性，构造函数，方法）的可访问性
// 类中的成员都有自己默认的访问修饰符：public
// public修饰符：公共的，类中成员默认的修饰符，代表的是公共的，任何位置都可以访问的类中的成员
// private修饰符：私有的，类中的成员用这个修饰符修饰后，外部和子类的成员是无法访问这个成员的
// protected修饰符：受保护的，类中的成员如果使用protected修饰，外部无法访问，只能在类及其子类中访问
(function () {
    var Person = /** @class */ (function () {
        function Person(name) {
            this.name = name;
        }
        Person.prototype.eat = function () {
            console.log('so yummy!!');
        };
        return Person;
    }());
    var p1 = new Person('王小美');
    // console.log(p1.name)
    p1.eat();
    var Student = /** @class */ (function (_super) {
        __extends(Student, _super);
        function Student(name) {
            return _super.call(this, name) || this;
        }
        Student.prototype.showName = function () {
            console.log(this.name);
        };
        return Student;
    }(Person));
    var stu = new Student('sdf');
    stu.showName();
})();
