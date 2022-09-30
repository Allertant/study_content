class Dog{
    // name = 'wangcai'
    // age = 1

    // 定义属性
    name:string
    age:number

    constructor(name:string,age:number){
        // console.log('构造函数执行了~~')
        // console.log(this)  // this表示当前实例
        this.name = name
        this.age = age
    }

    bark(){
        console.log(this.name+' wangwangwang~~')
    }
}
console.log(new Dog('wangcai',132))
new Dog('littleblack',2).bark()
console.log(Dog)