console.log('start')
setTimeout(()=>{
  console.log('setTimeout')
},0)

new Promise((resolve,reject)=>{
  for(var i=0;i<5;i++){
    console.log(i)
  }
  resolve()
}).then(()=>{
  console.log('promise实例成功执行回调任务')
})
console.log('end')