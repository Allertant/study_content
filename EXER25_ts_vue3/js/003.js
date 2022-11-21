// 类的使用
(function () {
    var Person = /** @class */ (function () {
        function Person(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.fullName = firstName + "-" + lastName;
        }
        return Person;
    }());
    function showFullName(person) {
        return person.firstName + "-" + person.lastName;
    }
    var person = new Person('shi', 'yixi');
    console.log(showFullName(person));
})();
