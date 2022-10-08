<template>
  <div>
    <h1 v-text="msg" ref="s_h1"></h1>
    <button @click="findDom">点击我获取上一个标签的内容</button>
    <Student ref="stu1"></Student>
    <button @click="findDom1">点击我获取上一个标签的内容</button>
    <!-- <Student></Student> -->
    <!-- <Student></Student> --> 
  </div>
  
</template>

<script>
import Student from './components/Student.vue'
export default {
  components:{
    Student
  },
  data(){
    return {
      msg:'hello shiyixi'
    }
  },
  methods:{
    findDom(){
      alert(this.$refs.s_h1.innerHTML)
    },
    findDom1(){
      alert(this.$refs.stu1.age)
    }
  }
}
</script>

<style>

</style>