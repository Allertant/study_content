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
// 父类型的引用指向子类型的对象
// 不同类型的对象针对相同的方法产生了不同的行为
(function () {
    // 定义一个父类
    var Animal = /** @class */ (function () {
        function Animal(name) {
            this.name = name;
        }
        Animal.prototype.run = function (distance) {
            if (distance === void 0) { distance = 0; }
            console.log(this.name + "\u8DD1\u4E86" + distance + "\u7C73\u7684\u8DDD\u79BB");
        };
        return Animal;
    }());
    // 定义一个子类
    var Dog = /** @class */ (function (_super) {
        __extends(Dog, _super);
        function Dog(name) {
            return _super.call(this, name) || this;
        }
        // 重写父类中的方法
        Dog.prototype.run = function (distance) {
            if (distance === void 0) { distance = 5; }
            console.log(this.name + "\u8DD1\u4E86" + distance + "\u7C73\u7684\u8DDD\u79BB");
        };
        return Dog;
    }(Animal));
    // 定义一个子类
    var Pig = /** @class */ (function (_super) {
        __extends(Pig, _super);
        function Pig(name) {
            return _super.call(this, name) || this;
        }
        // 重写父类中的方法
        Pig.prototype.run = function (distance) {
            if (distance === void 0) { distance = 10; }
            console.log(this.name + "\u8DD1\u4E86" + distance + "\u7C73\u7684\u8DDD\u79BB");
        };
        return Pig;
    }(Animal));
    // 父类和子类的关系：父子关系，此时，父类类型创建子类类型的对象
    var ani = new Animal('animal');
    ani.run();
    ani = new Dog('大黄');
    ani.run();
    ani = new Pig('大壮');
    ani.run();
    function showRun(ani) {
        ani.run();
    }
    showRun(new Animal('damei'));
    showRun(new Pig('zhognmei'));
    showRun(new Dog('xiaomei'));
})();
