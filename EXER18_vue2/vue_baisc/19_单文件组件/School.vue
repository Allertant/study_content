<template>
  <div class="demo">
    <h2>School</h2>
    <h2>name:{{name}}</h2>
    <h2>address:{{address}}</h2>
  </div>
</template>

<script>
export default {
    name:'School',
    data(){
        return {
            name:'sicau',
            address:'yaAn'
        }
    }
}
</script>

<style>
    .demo{
        background-color:#bfa
    }
</style>