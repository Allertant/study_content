// 父类型的引用指向子类型的对象
// 不同类型的对象针对相同的方法产生了不同的行为
(()=>{
    // 定义一个父类
    class Animal{
        name:string
        constructor(name:string){
            this.name = name
        }
        run(distance:number=0){
            console.log(`${this.name}跑了${distance}米的距离`)
        }
    }
    // 定义一个子类
    class Dog extends Animal{
        name:string
        constructor(name:string){
            super(name)
        }
        // 重写父类中的方法
        run(distance:number=5){
            console.log(`${this.name}跑了${distance}米的距离`)
        }
    }
    // 定义一个子类
    class Pig extends Animal{
        name:string
        constructor(name:string){
            super(name)
        }
        // 重写父类中的方法
        run(distance:number=10){
            console.log(`${this.name}跑了${distance}米的距离`)
        }
    }
    // 父类和子类的关系：父子关系，此时，父类类型创建子类类型的对象
    let ani:Animal = new Animal('animal')
    ani.run()
    ani = new Dog('大黄')
    ani.run()
    ani = new Pig('大壮')
    ani.run()

    function showRun(ani:Animal){
        ani.run()
    }
    showRun(new Animal('damei'))
    showRun(new Pig('zhognmei'))
    showRun(new Dog('xiaomei'))
})()