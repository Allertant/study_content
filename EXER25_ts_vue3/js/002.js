// 一种约束
(function () {
    function showFullName(person) {
        return person.firstName + '-' + person.lastName;
    }
    var person = { firstName: '东方', lastName: '不败' };
    console.log(showFullName(person));
    console.log('hello,world');
})();
