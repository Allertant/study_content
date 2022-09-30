(function(){

    // 接口可以作为抽象类
    // 抽象类和接口的主要区别
    // 1. 抽象类使用extends供子类继承，而接口使用implements
    // 2. 抽象类使用可以包含普通方法，而接口不能包含普通方法
    interface myInterface{
        name:string
        age:number
        sayHello():void
    }


    class myClass implements myInterface{

        name: string;
        age:number

        constructor(name:string, age:number){
            this.name = name;
            this.age = age
        }

        sayHello(): void {
            console.log(this.name+' hello')
        }
    }
    const clazz = new myClass('xiaozhuang',23)
    clazz.sayHello()
})()