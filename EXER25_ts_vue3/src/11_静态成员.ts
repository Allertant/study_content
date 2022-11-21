// 静态成员：在类中通过static修饰的属性或者方法，那么就是静态的属性及静态的方法，也称之为：静态成员
// 静态成员在使用的时候是通过类名.的这种语法来调用的
(()=>{
    class Person{
        // static name:string 类中默认有一个内置的name属性，此时会出现错误的提示信息
        // 静态属性
        static name1:string = '王小美'
        // 构造函数是不能通过static进行修饰的
        constructor(name:string){
            // 此时this是实例对象，name1是静态属性，不能通过实例对象直接调用静态属性来使用
            // this.name1 = name
        }
        static sayHi(){
            console.log('萨瓦迪卡')
        }
    }
    const person = new Person('shiyixi')
    // 通过类名.静态方法的方式来调用静态方法
    Person.sayHi()
    // 通过类名.静态属性的方式来修改静态属性
    Person.name1 = '大壮'
    // 通过类名.静态属性的方式来访问静态属性
    console.log(Person.name1)
})()