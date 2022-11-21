// 类 类型：类的类型可以通过接口来实现
(()=>{
    // 定义一个接口
    interface IFly{
        fly()
    }

    class Person implements IFly{
        fly(){
            console.log('PERSON:I can fly')
        }
    }

    const person = new Person()
    person.fly()

    interface ISwim{
        swim()
    }

    class Person2 implements ISwim,IFly{
        fly(){
            console.log('PERSON2：我可以飞')
        }
        swim() {
            console.log('PERSON2:我可以游泳')
        }
    }
    const person2 = new Person2()
    person2.fly()
    person2.swim()

    interface IMyFlyAndSwim extends IFly,ISwim{}

    class Person3 implements IMyFlyAndSwim{
        fly(){
            console.log('PERSON3:i can fly')
        }
        swim() {
            console.log('PERSON3:i can swim')
        }
    }
    const person3 = new Person3();
    person3.fly();
    person3.swim()

    // 接口和接口之间叫继承，类和接口之间叫实现，分别是extends implements
    

})()