// 存取器：让我们可以有效地控制对 对象中的成员的访问，通过getters和setters来进行操作
(function () {
    // 外部可以传入姓氏和名字数据，同时使用set和get控制姓名的数据，外部也可以进行修改操作
    var Person = /** @class */ (function () {
        function Person(firstname, lastname) {
            this.firstName = firstname;
            this.lastName = lastname;
        }
        Object.defineProperty(Person.prototype, "fullName", {
            // 读取器---负责读取数据的
            get: function () {
                // console.log('get...')
                return this.firstName + '-' + this.lastName;
            },
            // 设置器：负责设置数据的（修改）
            set: function (val) {
                var names = val.split('-');
                this.firstName = names[0];
                this.lastName = names[1];
            },
            enumerable: false,
            configurable: true
        });
        return Person;
    }());
    var person = new Person('shi', 'yixi');
    console.log(person.fullName);
    person.fullName = 'shi-xixi';
    console.log(person);
})();
