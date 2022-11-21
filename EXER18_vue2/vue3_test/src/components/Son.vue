<template> 
    <div class="son">
      <h3>我是Son组件（孙）,我收到了祖祖先的数据：{{name}}--{{price}}</h3>
        <Dialog></Dialog>
    </div>
  </template>
  
  <script>
  import {inject,toRefs} from 'vue'
  import Dialog from '@/components/Dialog'
  export default {
    name: 'Son',
    components:{
        Dialog
    },
    setup(){
        let car = inject('car')
        return {...toRefs(car)}
    }
    
  }
  </script>
  
  <style>
    .son{
      background-color:orange;
      padding:10px;
    }
  </style>