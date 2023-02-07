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
    <h2>{{count}}</h2>
    <button @click="updateCount">点我+1</button>
    <button @click="car.kinds.size=3">更改car中的数据，观察其newVal 和 OldVal的状态</button>
  </div>
</template>

<script>
import {provide,reactive,toRefs,ref,readonly,isRef,isReactive,isReadonly,isProxy} from 'vue'
// import Child from '@/components//Child.vue'
import { defineAsyncComponent,watch } from 'vue'
const Child = defineAsyncComponent(()=>import('@/components/Child.vue'))

export default {
  name: 'App',
  components:{
    Child
  },
  setup(){
    let car = reactive({
      name:'奔驰',
      price:'40w',
      kinds:{
        color:'red',
        size:4
      }
    })
    let count = ref(0)
    function updateCount(){
      count.value++
    }

    watch(car,(newVal,oldVal)=>{
      console.log('数据发生了变化，',newVal,oldVal)
    })

    provide('car',car)
    return {car,...toRefs(car),count,updateCount}
  }
  
}
</script>

<style>
  .app{
    background-color:gray;
    padding:10px;
  }
</style>