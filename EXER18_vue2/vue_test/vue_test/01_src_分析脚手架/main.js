import Vue from 'vue/dist/vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  // 原来的写法
  // render(createElement){
  //   return createElement(App)
  // },
  // 简写方式
  // render: h => h(App),

  // 原来的方法写需要的配置（需要手动注册组件）
  template: `<App></App>`,
  components:{
    App
  }
}).$mount('#app')

console.log(666)
console.log(666)
let a = 132
// let b = 23
console.log(a)
