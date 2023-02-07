// 泛型接口；在定义接口时，为接口中的属性或方法定义泛型类型，在使用接口时，再指定具体的泛型类型
(()=>{
    // 定义一个泛型接口
    interface IBaseCURD<T>{
        data:Array<T>
        add:(t:T)=>T
        getUserId:(id:number)=>T
    }
    // 定义一个用户信息的类
    class User{
        id?:number
        name:string
        age:number
        constructor(name:string, age:number){
            this.name = name
            this.age = age
        }
    }
    // 通过一个类的实例对象调用相关的方法可以添加多个用户信息对象，调用getUserId()可以根据id获取某个指定用户信息对象
    // 定义一个类可以针对用户的信息对象进行增加、查询的操作
    class UserCRUD implements IBaseCURD<User>{  // create read updata delete
        data:Array<User>=[]  // 保存多个User类型的用户信息对象
        add(user:User):User{
            // 产生id
            user.id = Date.now()+Math.random()
            // 把用户信息对象添加到data数组中
            this.data.push(user)
            return user
        }
        getUserId(id:number):User{ // 根据id查询指定的用户信息对象
            return this.data.find(user=>user.id === id)
        }
    }
    // 实例化添加用户信息对象的类UserCRUD
    const userCRUD :UserCRUD = new UserCRUD()
    const user1 = userCRUD.add(new User('shiyixi',19))
    userCRUD.add(new User('shiyixi',18))
    userCRUD.add(new User('shiyixi',17))
    userCRUD.add(new User('shiyixi',16))
    console.log(userCRUD.getUserId(user1.id))
})()