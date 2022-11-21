// 类的使用
(()=>{
    interface IPerson{
        firstName:string
        lastName:string
        
    }

    class Person{
        firstName:string
        lastName:string
        fullName:string

        constructor(firstName:string,lastName:string){
            this.firstName = firstName;
            this.lastName = lastName
            this.fullName = firstName + "-" + lastName
        }
    }

    function showFullName(person:IPerson){
        return person.firstName + "-" + person.lastName
    }

    const person = new Person('shi','yixi')

    console.log(showFullName(person))
})()