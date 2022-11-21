// 类可以理解为模板，通过模板可以实例化对象,体现的是面向对象的编程思想
(()=>{
    // ts中类的定义
    class Person{
        // 定义属性
        name:string
        age:number
        gender:string
        // 定义构造函数,为了将来实例化对象的时候，可以直接对属性的值进行初始化
        constructor(name:string,age:number=18,gender:string='male'){
            this.name = name
            this.age = age
            this.gender = gender
        }

        sayHi(msg:string){
            console.log(`hi,i am ${this.name},${this.age} year old,${this.gender}:`+msg)
        }
    }

    new Person('shiyixi',19,'female').sayHi('hhhh')
})()