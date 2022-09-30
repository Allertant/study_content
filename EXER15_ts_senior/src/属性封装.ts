(function(){
    class Person{
        // public
        // protected 只能在当前类和当前类的子类进行修改/读取
        // private


        // 构造方法简化写法，直接在形参列表对属性进行声明
        constructor(private _name:string,private _age:number){

        }
        private get name(){
            return this._name
        }
        private get age(){
            return this._age
        }
        private set name(name:string){
            this._name = name
        }
        private set age(age:number){
            this._age = age
        }
        getMessage(){
            return this.name+'-'+this.age
        }
        setMessage(name:string,age:number){
            if(age<0){
                return 
            }
            this._name = name
            this._age = age
        }
    }

    const per = new Person('zhubajie',18)

    console.log(per.getMessage())
    per.setMessage('sunwukong',-20)
    console.log(per.getMessage())
})() 