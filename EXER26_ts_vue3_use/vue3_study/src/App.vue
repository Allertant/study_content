<template>
  <h2>{{count}}</h2>
  <button @click="updateCount">点我+1</button>
  <button @click="color='red'">更改为红色</button>
  <button @click="color='blue'">更改为蓝色</button>
  <button @click="color='green'">更改为绿色</button>
  <hr>
  <Child></Child>
</template>

<script lang="ts">
import { defineComponent,ref,reactive,provide,readonly } from 'vue';
import Child from '@/components/Child.vue'

// defineComponent函数，目的是定义一个组件，内部可以传入一个配置对象
export default defineComponent({
  name: 'App',
  components:{
    Child
  },
  setup(){
    let count = ref(0)
    let color = ref('red')
    console.log(readonly({}))
    provide('color',color)
    function updateCount(){
      count.value++
    }
    console.log(ref({
      name:'shiyixi',
      age:19
    }).value)
    return {
      count,
      updateCount,
      color
    }
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
