// 泛型：在定义函数或接口或类的时候，不能预先确定要使用的数据的类型，而是在使用函数或接口或类的时候才能确定数据的类型，这是就需要使用泛型

(()=>{
    // 需求：定义一个函数，传入两个参数，第一个参数是数据，第二个参数是数量：根据数量对应产生对应个数的数据，存放在一个数组中
    // function getArr1(value:number,count:number):number[]{
    //     const arr : number[] = []
    //     for(let i=0;i<count;i++){
    //         arr.push(value)
    //     }
    //     return arr
    // }
    // console.log(getArr1(100.123,3))

    // function getArr2(value:string,count:number):string[]{
    //     const arr : string[] = []
    //     for(let i=0;i<count;i++){
    //         arr.push(value)
    //     }
    //     return arr
    // }
    // console.log(getArr2('HELLO',4))

    // 可以传入任意类型的数据，返回的是存储任意类型数据的数组
    // function getArr2(value:any,count:number):any[]{
    //     const arr : any[] = []
    //     for(let i=0;i<count;i++){
    //         arr.push(value)
    //     }
    //     return arr
    // }
    // console.log(getArr2(100.123,3))
    // console.log(getArr2('hello',3)[0].toFixed(2)) 没有任何的提示信息，string类型不具有toFixed()


    // 
    function getArr2<T>(value:T,count:number):T[]{
        const arr : T[] = []
        // const arr:Array<T>
        for(let i=0;i<count;i++){
            arr.push(value)
        }
        return arr
    }
    console.log(getArr2<number>(3,3))  // 参数类型传入错误会有智能提示
    console.log(getArr2<string>('hello',3)) // 参数类型传入错误会有智能提示
    // console.log(getArr2<string>('hello',2)[0].toFixed(2)) 对应参数对应类上如果没有该方法也会有智能提示
})()