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
// 抽象类：包含抽象方法(抽象方法一般没有任何的具体内容的实现)，也可以包含实例方法，抽象类是不能被实例化的
// 作用：为了让子类进行实例化及实现内容的抽象方法
// 抽象类的作用是为子类服务的
(function () {
    var Animal = /** @class */ (function () {
        function Animal() {
        }
        // 实例方法
        Animal.prototype.sayHi = function () {
            console.log('hi');
        };
        return Animal;
    }());
    // 实例化抽象类的对象
    // const ani:Animal = new Animal()
    // 定义一个派生类
    var Dog = /** @class */ (function (_super) {
        __extends(Dog, _super);
        function Dog() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.name1 = '大黄';
            return _this;
        }
        // 重新地实现抽象类中的方法
        Dog.prototype.eat = function () {
            console.log('舔着吃');
            return this;
        };
        return Dog;
    }(Animal));
    new Dog().eat().sayHi();
    console.log(new Dog().name1);
})();
