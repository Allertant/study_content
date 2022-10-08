import Vue from 'vue';
import App from './App'


Vue.productionTip = false;

new Vue({
    render:h => h(App)
}).$mount('#app')