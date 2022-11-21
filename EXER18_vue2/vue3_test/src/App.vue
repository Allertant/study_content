<template> 
  <div class="app">
    <h3>我是app组件（祖）,{{name}}--{{price}}</h3>
    <Suspense>
      <template v-slot:default>
        <Child></Child>
      </template>
      <template v-slot:fallback>
        <h2>稍等一会哦</h2>
      </template>
    </Suspense>

  </div>
</template>

<script>
import {provide,reactive,toRefs,ref,readonly,isRef,isReactive,isReadonly,isProxy} from 'vue'
// import Child from '@/components//Child.vue'
import { defineAsyncComponent } from 'vue'
const Child = defineAsyncComponent(()=>import('@/components/Child.vue'))

export default {
  name: 'App',
  components:{
    Child
  },
  setup(){
    let car = reactive({
      name:'奔驰',
      price:'40w'
    })

    provide('car',car)
    return {...toRefs(car)}
  }
  
}
</script>

<style>
  .app{
    background-color:gray;
    padding:10px;
  }
</style>