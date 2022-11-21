// readonly:作为一个关键字，对类中的属性成员进行修饰;修饰后，就不能被外部和非构造函数中随意修改了
// 构造函数中，可以对只读的属性成员但数据进行修改
// 如果构造函数中没有任何的参数，类中的属性成员此时已经使用readonly进行修饰了，那么外部也是不能对这个属性进行更改的
// 构造函数中的参数可以使用readonly进行修饰，一旦修饰了，那么该类中就有了这个只读的成员属性了，外部可以访问 ，但是不能修改
// 构造函数中的参数可以使用public及private和protected进行修饰，无论是哪个进行修饰，该类中都会自动地添加这个属性成员
(()=>{
    class Person{
        // readonly name:string = 'wangxiaomei'
        // 构造函数中的name参数，一旦使用readonly进行修饰后，那么该参数可以叫参数属性
        // 构造函数中的name参数，一旦使用readonly进行修饰后，那么Person中就有了一个name的属性成员了
        // 构造函数中的name参数，一旦使用readonly进行修饰后，那么外部也是无法修改类中的属性成员的
        // constructor(readonly name:string='wangxiaomei'){
        //     this.name = name
        // }
        // 构造函数中一旦使用public进行修饰后，那么Person类中就有了一个公共的name属性成员了（同理,private/protected也是这样的）
        constructor(readonly name:string='wangxiaomei'){
            this.name = name
        }
        sayHi(){
            console.log('阔你家娃',this.name)
        }

    }
    const person:Person = new Person('王小美')
    person.sayHi()
    console.log(person.name)
})()