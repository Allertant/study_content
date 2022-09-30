// 将core.js所有文件引入，体积会过大
// import 'core-js'
// 部分引入，减少代码体积——但我们仍然选择智能引入，更加方便
// import 'core-js/es/promise'
import count from './js/count';
import sum from './js//sum';
import {add,mul} from './js/math'
// 想让webpack打包资源，必须在这里引入
import './css/iconfont.css'
import './css/index.css'
import './less/index.less'
import './sass/index.sass'
import './sass/index.scss'
import './stylus/index.styl'

let result = count(2,1)
console.log(add(120,130))
console.log(mul(12,12))
console.log(result)
console.log(sum(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15))

// webpackChunkName:webpack魔法命名
document.getElementById('btn').onclick = function(){
    import(/* webpackChunkName:"math"*/'./js/mul').then(({mul})=>{
        console.log(mul(44,55))
    })
}

// if(module.hot){
//     // 判断是否支持热模块替换功能
//     // 如果一下的文件发生变化，不会重新刷新整个页面，而是只刷新下面这两个页面
//     module.hot.accept('./js/count.js'); 
//     module.hot.accept('./js/sum.js'); 
// }

// 添加promise代码
const promise = Promise.resolve();
promise.then(() => {
  console.log("hello promise");
});

// 检测是否智能导入了includes方法
const arr = [1,2,3,4]
console.log(arr.includes(1))