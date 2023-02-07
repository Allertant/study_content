// 泛型类：
(()=>{
    // 定义一个类，类中的属性值的类型是不确定的，方法中的参数及返回值的类型也是不确定
    class GenericNumber<T>{
        // 默认的属性的值的类型也是泛型类型
        defaultValue: T;
        add:(x:T,y:T)=>T
    }
    // 在实例化类的对象的时候，再确定泛型的类型
    const g1:GenericNumber<number> = new GenericNumber<number>()
    // 设置属性值
    g1.defaultValue = 20
    // 相加的方法
    g1.add = function(x,y){
        return x+y
    }
    console.log(g1.add(1,3))

    // 在实例化类的对象的时候，再确定泛型的类型
    const g2:GenericNumber<string> = new GenericNumber<string>()
    // 设置属性值
    g2.defaultValue = 'shiyixi'
    // 相加的方法
    g2.add = function(x,y){
        return x+y
    }
    console.log(g2.add('shiyixi','666'))
})()