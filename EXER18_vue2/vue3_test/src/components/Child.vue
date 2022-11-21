<template> 
    <div class="child">
      <h3>我是Child组件（子）</h3>
      {{sum}}
      <!-- <Son></Son> -->
    </div>
  </template>
  
  <script>
  import {ref} from 'vue'
//   import Son from '@/components/Son.vue'
  export default {
    
    name: 'Child',
    components:{
        // Son
    },
    // setup(){
    //     let sum = ref(0)
    //     return new Promise((resolve,reject)=>{
    //         setTimeout(()=>{
    //             resolve(sum)
    //         },1000)
    //     })
    // }
    async setup(){
        let sum = ref(0)
        const p =  new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(sum)
            },1000)
        })
        return await p
    }
    
  }
  </script>
  
  <style>
    .child{
      background-color:skyblue;
      padding:10px;
    }
  </style>