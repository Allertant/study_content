// 基础类型
(()=>{
    // 布尔类型
    // let 变量名：数据类型 = 值
    let flag:boolean = true;
    console.log(flag)

    // 数字类型
    let a1: number = 10 // 十进制
    let a2: number = 0b1010 // 二进制
    let a3: number = 0o12 // 八进制
    let a4: number = 0xa // 十六进制
    console.log(a1,a2,a3,a4)

    // 字符串类型
    let name: string = 'tom'
    name = 'jack'
    // name = 12 // error
    let age: number = 12
    const info = `My name is ${name}, I am ${age} years old!`
    console.log(info)

    // 字符串和数字之间能否进行拼接？能
    let str5:string = '我有这么多的前:'
    let num:number = 1000
    console.log(str5+num)

    console.log('--------------------------')

    let und:undefined = undefined
    let nu:null = null
    console.log(und)
    console.log(nu)

    // undefined 和 null 都可以作为其他类型的子类型，把undefined和null赋值给其他类型的变量的，如：number类型的变量
    let num2:number = undefined
    console.log(num2)
    let num3:number = null
    console.log(num3)

    // 数组类型
    // 定义方式1:let 变量名：数据类型[] = [值1，值2，值3...]
    let arr1:number[] = [10,20,30,40,50]
    // 定义方式2：泛型的方法:let 变量名：Array<数据类型> = [值1，值2，值3...]
    let arr2:Array<number> = [10,20,30,40,50]
    // 注意问题
    /**
     * 1. 数组定义后，里面的数据类型必须和定义数组时候的类型是一致的，否则报错，也不会编译通过
     */

    // 元组类型：在定义数组的时候，类型、数据的个数和位置一开始就已经限定了
    let arr3:[string,number,boolean] = ['shiyixi',19,true]
    console.log(arr3)
    // 注意问题：元组类型在使用的时候，数据的类型的位置和数据的个数应该和在定义元组的时候的数据类型及位置是一致的
    console.log(arr3[0].split(''))
    console.log(arr3[1].toFixed(2))

    console.log('----------------------------')

    // 枚举类型
    enum Color{
        red=1,green,blue
    }
    let color:Color = Color.red // 获取的是元素在枚举中的位置
    console.log(color)
    console.log(Color.red,Color.green,Color.blue)
    // 通过枚举值获取枚举元素
    console.log(Color[3])

    // demo
    console.log('--demo--')
    enum Gender{
        女,男  // 可以为中文，但不推荐
    }
    console.log(Gender.男)
    console.log('--------------------')

    // any类型：谨慎使用
    let str:any = 100
    str = 'shiyixi'
    console.log(str)
    let arr:any[] = [18,'shiyixi','male',true] // 当一个数组中要存储多个数组，个数和类型不确定时，此时也可以使用any来定义数组
    console.log(arr)
    // console.log(arr[0].split('')) // 由于第一个数组是numebr类型，但是这里并不能提示错误信息，有一定缺陷
    
    // void 类型，
    function showMsg():void{  // 当一个函数没有返回值时可以使用,代表该函数没有任何返回值
        console.log('void的使用')
        // return undefined 
    }
    showMsg()
    console.log(showMsg()) // undefined

    // 定义void类型的变量，可以接收一个undefined的值，但是意义不是很大
    let vd:void = undefined 
    console.log(vd)

    console.log('---------------')

    // object类型
    function getObj(obj:object):object{
        console.log(obj)
        return {
            name:'shiyixi',
            age:18
        }
    }
    console.log(getObj({name:'shi',age:19})) // 只能传入一个object类型，并且返回值的类型也是一个object类型
    console.log(getObj(new String('shiyixi')))
    console.log(getObj(Object))
    console.log('---------------------')

    // 联合类型
    // req1:定义一个函数得到一个数字或字符串值的字符串形式
    function getString(str:number|string):string{
        return str.toString()
    }

    console.log(getString('123'))

    // 类型断言:告诉编译器，我知道自己在干什么
    // 类型断言的语法方式1：<类型>变量名
    // 类型断言的语法方式2：值 as 类型
    // req2:定义一个函数，得到一个数字或者字符串的长度
    function getLength(str:number|string):number{
        // return str.toString().length
        if((<string>str).length){
            // return (<string>str).length
            return (str as string).length
        }else{
            return str.toString().length
        }
    }
    console.log(getLength('234'))
    console.log(getLength(234234234))


    console.log('--------------------------')
    // 类型推断
    let txt = 100 // 没有声明该变量是什么，但是js引擎会推测出该变量是number类型
    console.log(txt)

    let asd; // 推断出是any 类型，后面可以赋值覆盖
    asd = 100
    asd = 'shiyixi'
    console.log(asd)







})()