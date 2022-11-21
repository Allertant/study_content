// 存取器：让我们可以有效地控制对 对象中的成员的访问，通过getters和setters来进行操作
(()=>{
    // 外部可以传入姓氏和名字数据，同时使用set和get控制姓名的数据，外部也可以进行修改操作
    class Person{
        firstName:string
        lastName:string
        constructor(firstname:string,lastname:string){
            this.firstName = firstname
            this.lastName = lastname
        }
        // 读取器---负责读取数据的
        get fullName(){
            // console.log('get...')
            return this.firstName+'-'+this.lastName
        }
        // 设置器：负责设置数据的（修改）
        set fullName(val){
            const names = val.split('-')
            this.firstName = names[0]
            this.lastName = names[1]
        }
    }
    const person = new Person('shi','yixi');
    console.log(person.fullName)
    person.fullName = 'shi-xixi'
    console.log(person)
})()