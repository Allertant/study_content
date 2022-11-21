// 继承：类与类之间的关系
// 继承后类与类之间的叫法：
// A类继承了B这个类，那么此时A类叫子类，B类叫基类
// 子类----> 派生类
// 基类----> 超类（父类）
// 一旦发生了继承的关系，就出现了父子类的关系（叫法）
(()=>{
    class Person{
        // 定义属性
        name:string
        age:number
        gender:string
        // 定义构造函数
        constructor(name:string,age:number,gender:string){
            // 更新属性数据
            this.name = name
            this.age = age
            this.gender = gender
        }
        // 定义实例方法
        sayHi(str:string){
            console.log(`我是${this.name},你是${str}`)
        }
    }

    class Student extends Person{
        constructor(name:string,age:number,gender:string){
            super(name,age,gender)
        }
        sayHi(str:string){
            super.sayHi(str)
        }
    }
    new Student('shiyixi',18,'male').sayHi('王小美')
    // 类和类之间如果有继承关系，需要使用extends关键字
    // 子类中可以调用父类中的构造函数，使用的是super关键字，（包括调用父类的中的实例方法，也可以用是super关键字）
})()