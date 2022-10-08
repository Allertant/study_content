<template>
  <div>
    <Student></Student>
    <School></School>
  </div>
</template>

<script>
    import Student from './School.vue'
    import School from './Student.vue'
    export default {
        components:{
            Student,
            School
        },
        template:`<App></App>`,
        name:'App'
    }
</script>
