// 抽象类：包含抽象方法(抽象方法一般没有任何的具体内容的实现)，也可以包含实例方法，抽象类是不能被实例化的
// 作用：为了让子类进行实例化及实现内容的抽象方法
// 抽象类的作用是为子类服务的
(()=>{
    abstract class Animal{
        // abstract name1:string
        // 抽象方法——不能有具体的实现方法
        abstract eat()
        // 实例方法
        sayHi(){
            console.log('hi')
        }
    }

    // 实例化抽象类的对象
    // const ani:Animal = new Animal()

    // 定义一个派生类
    class Dog extends Animal{
        name1:string = '大黄'
        // 重新地实现抽象类中的方法
        eat() {
            console.log('舔着吃')
            return this
        }
    }
    new Dog().eat().sayHi()
    console.log(new Dog().name1)
})()    