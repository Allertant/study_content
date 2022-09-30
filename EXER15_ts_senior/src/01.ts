// 使用class定义一个类
class Person{
    // 实例属性
    name:string='sunwukong'
    age:number=123;
    // 类属性，只能通过类进行访问
    static eat:string = 'chifan'
    // 只读属性，无法进行修改
    readonly run:string = "run"

    sayHello(){
        console.log('hello')
    }
    static sayHello1(){
        console.log('hello1')
    }

}
console.log(Person.eat)
const per = new Person()
console.log(per)
per.name = 'tangseng'
console.log(per)
per.sayHello()
Person.sayHello1()
console.log(Person)
console.log(Person)

