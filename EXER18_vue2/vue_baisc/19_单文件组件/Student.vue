<template>
    <div class="demo">
      <h2>Student</h2>
      <h2>name:{{name}}</h2>
      <h2>address:{{address}}</h2>
    </div>
  </template>
  
  <script>
  export default {
    name:'Student',
    data(){
        return {
            name:'shiyixi',
            age:18
        }
    }
  }
  </script>
  
  <style>
      .demo{
          background-color:lightblue
      }
  </style>