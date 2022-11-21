// function Promise(executor){

//     // 添加实例上的属性
//     this.PromiseState = 'pending'
//     this.PromiseResult = null
//     this.callback = []

//     // 保存this
//     const self = this


//     function resolve(data){
//         // 增设判断，防止两个回调函数都执行
//         if(self.PromiseState !== 'pending') return 
//         self.PromiseState = 'fullfilled'
//         self.PromiseResult = data
//         setTimeout(()=>{
//             self.callback.forEach(item=>{
//                 item.onResolved(data)
//             })
//         })
//     }
//     function reject(data){
//         if(self.PromiseState !== 'pending') return
//         self.PromiseResult = data
//         self.PromiseState = 'rejected'
//         setTimeout(()=>{
//             self.callback.forEach(item=>{
//                 item.onRejected(data)
//             })
//         })
//     }

//     // 处理发生异常的情况
//     try {
//         executor(resolve,reject)
//     } catch (error) {
//         reject(error)
//     }
    
// }
// Promise.prototype.then = function(onResolved,onRejected){

//     const self = this
//     // 判断回调函数参数
//     if(typeof onRejected !== 'function'){
//         onRejected = reason => {
//             throw reason
//         }
//     }
//     if(typeof onResolved !== 'function'){
//         onResolved = value => value
//     }
//     return new Promise((resolve,reject)=>{
//         // 封装函数
//         function callback(type){
//             try {
//                 // 调用函数并传参
//                 let result = type(self.PromiseResult)
//                 // 返回结果是promise对象，则返回该对象的成功或失败的promise对象
//                 if(result instanceof Promise){
//                     // 获取返回promise对象的状态值
//                     result.then(v=>{
//                         resolve(v)
//                     },r=>{
//                         reject(r)
//                     })
//                     // 返回值为非promise对象，则构建fullfilled的值
//                 }else{  
//                     resolve(result)
//                 } 
//             } catch (error) {
//                 reject(error)
//             }
//         }
//         // 根据内容判断调用执行指定函数，并入相应的参数
//         if(this.PromiseState === 'fullfilled'){
//             setTimeout(()=>{
//                 callback(onResolved)
//             })
//         }   
//         if(this.PromiseState === 'rejected'){
//             setTimeout(()=>{
//                 callback(onRejected)
//             })
//         }
//         if(this.PromiseState === 'pending'){
//             this.callback.push(
//                 { 
//                     onRejected:function(){
//                         setTimeout(()=>{
//                             callback(onRejected)
//                         })
//                     },
//                     onResolved:function(){
//                         setTimeout(()=>{
//                             callback(onResolved)
//                         })
//                     }
//                 }
//             ) 
//         }
//     })
// }

// // 添加catch方法
// Promise.prototype.catch = function(onRejected){
//     return this.then(undefined,onRejected)
// }
// // 添加resolve方法
// Promise.resolve = function(value){
//     return new Promise((resolve,reject)=>{
//         if(value instanceof Promise){
//             value.then(v=>{
//                 resolve(v)
//             },r=>{
//                 reject(r)
//             })
//         }else{
//             resolve(value)
//         }
//     })
// }
// // 添加reject方法
// Promise.reject = function(reason){
//     return new Promise((resolve,reject)=>{
//         reject(reason)
//     })
// }
// // 添加all方法
// Promise.all = function(promises){
//     return new Promise((resolve,reject)=>{
//         let arr = []
//         for(let i = 0; i< promises.length; i++){
//             promises[i].then(v=>{
//                 arr[i] = v
//                 if(i === promises.length -1 ){
//                     resolve(arr)
//                 }
//             },r=>{
//                 reject(r)
//             })
//         }
//     })
// }
// // 添加race方法
// Promise.race = function(promises){
//     return new Promise((resolve,reject)=>{
//         let arr = []
//         for(let i = 0; i< promises.length; i++){
//             promises[i].then(v=>{
//                 resolve(v)
//             },r=>{
//                 reject(r)
//             })
//         }
//     })
// }



// class 版本
class Promise{
    // 构造函数
    constructor(executor){
            // 添加实例上的属性
        this.PromiseState = 'pending'
        this.PromiseResult = null
        this.callback = []

        // 保存this
        const self = this


        function resolve(data){
            // 增设判断，防止两个回调函数都执行
            if(self.PromiseState !== 'pending') return 
            self.PromiseState = 'fullfilled'
            self.PromiseResult = data
            setTimeout(()=>{
                self.callback.forEach(item=>{
                    item.onResolved(data)
                })
            })
        }
        function reject(data){
            if(self.PromiseState !== 'pending') return
            self.PromiseResult = data
            self.PromiseState = 'rejected'
            setTimeout(()=>{
                self.callback.forEach(item=>{
                    item.onRejected(data)
                })
            })
        }

        // 处理发生异常的情况
        try {
            executor(resolve,reject)
        } catch (error) {
            reject(error)
        }
    }
    // then方法
    then(onResolved, onRejected){
        const self = this
        // 判断回调函数参数
        if(typeof onRejected !== 'function'){
            onRejected = reason => {
                throw reason
            }
        }
        if(typeof onResolved !== 'function'){
            onResolved = value => value
        }
        return new Promise((resolve,reject)=>{
            // 封装函数
            function callback(type){
                try {
                    // 调用函数并传参
                    let result = type(self.PromiseResult)
                    // 返回结果是promise对象，则返回该对象的成功或失败的promise对象
                    if(result instanceof Promise){
                        // 获取返回promise对象的状态值
                        result.then(v=>{
                            resolve(v)
                        },r=>{
                            reject(r)
                        })
                        // 返回值为非promise对象，则构建fullfilled的值
                    }else{  
                        resolve(result)
                    } 
                } catch (error) {
                    reject(error)
                }
            }
            // 根据内容判断调用执行指定函数，并入相应的参数
            if(this.PromiseState === 'fullfilled'){
                setTimeout(()=>{
                    callback(onResolved)
                })
            }   
            if(this.PromiseState === 'rejected'){
                setTimeout(()=>{
                    callback(onRejected)
                })
            }
            if(this.PromiseState === 'pending'){
                this.callback.push(
                    { 
                        onRejected:function(){
                            setTimeout(()=>{
                                callback(onRejected)
                            })
                        },
                        onResolved:function(){
                            setTimeout(()=>{
                                callback(onResolved)
                            })
                        }
                    }
                ) 
            }
        })
    }
    // catch方法
    catch(onRejected){
        return this.then(undefined,onRejected)
    }
    // resolve方法
    static resolve(value){
        return new Promise((resolve,reject)=>{
            if(value instanceof Promise){
                value.then(v=>{
                    resolve(v)
                },r=>{
                    reject(r)
                })
            }else{
                resolve(value)
            }
        })
    }
    // reject方法
    static reject(reason){
        return new Promise((resolve,reject)=>{
            reject(reason)
        })
    }
    // all方法
    static all(promises){
        return new Promise((resolve,reject)=>{
            let arr = []
            for(let i = 0; i< promises.length; i++){
                promises[i].then(v=>{
                    arr[i] = v
                    if(i === promises.length -1 ){
                        resolve(arr)
                    }
                },r=>{
                    reject(r)
                })
            }
        })
    }
    // race方法
    static race(promises){
        return new Promise((resolve,reject)=>{
            let arr = []
            for(let i = 0; i< promises.length; i++){
                promises[i].then(v=>{
                    resolve(v)
                },r=>{
                    reject(r)
                })
            }
        })
    }
}