(function(){

    abstract class Animal{
        name:string
        age:number

        constructor(name:string,age:number){
            this.name = name
            this.age = age
        }
        abstract sayHello():void
    }

    class Dog extends Animal{
        id:number
        constructor(name:string,age:number,id:number){
            super(name,age)
            this.id = id
        }

        sayHello(){
            console.log('wangwangwang~~')
        }
    }

    const dog = new Dog('wangcai',5,1)
    console.log(dog)
    dog.sayHello()
})()