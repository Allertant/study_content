class TestPlugin {
    // webpack加载webpack.config.js文件时，执行new TestPlugin()语句，调用constructor方法
    constructor(){
        console.log('TestPlugin Contructor')
    }
    // 在创建compiler后，遍历插件执行apply()方法
    apply(compiler){
        debugger;
        console.log('TestPlugin apply')

        // environment是同步方法，使用tap方法
        compiler.hooks.environment.tap('TestPlugin',()=>{
            console.log('TestPlugin environment')
        })
        // emit，可以在输出dist目录之前添加资源，接受两个参数，执行异步串行操作（依次执行）
        compiler.hooks.emit.tap('TestPlugin',(compilation)=>{
            console.log('compilation',compilation)
            console.log('TestPlugin emit 111')
        })
        compiler.hooks.emit.tapAsync('TestPlugin',(compilation,callback)=>{
            setTimeout(()=>{
                console.log('TestPlugin emit 222')
                callback()
            },1000)
        })
        compiler.hooks.emit.tapPromise('TestPlugin',(compilation)=>{
            return new Promise((resolve)=>{
                setTimeout(()=>{
                    console.log('TestPlugin emit 333')
                    resolve()
                },2000)
            })
        })

        // make,异步并行钩子
        compiler.hooks.make.tapAsync('TestPlugin',(compilation,callback)=>{
            // 需要在compilation勾子触发前定义
            compilation.hooks.seal.tap('TestPlugin',()=>{
                console.log('TestPlugin compilation seal')
            })


            setTimeout(()=>{
                console.log('TestPlugin make 111')
                callback()
            },3000)
        })
        compiler.hooks.make.tapAsync('TestPlugin',(compilation,callback)=>{
            setTimeout(()=>{
                console.log('TestPlugin make 222')
                callback()
            },2000)
        })
        compiler.hooks.make.tapAsync('TestPlugin',(compilation,callback)=>{
            setTimeout(()=>{
                console.log('TestPlugin make 333')
                callback()
            },1000)
        })

    }

    // 执行各个钩子的函数
    
}
module.exports = TestPlugin