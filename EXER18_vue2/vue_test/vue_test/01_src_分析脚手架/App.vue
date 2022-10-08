<template>
  <div>
    <Student></Student>
    <School></School>
  </div>
</template>

<script>
    import Student from './components/School'
    import School from './components/Student'
    export default {
        components:{
            Student,
            School
        },
        // template:`<App></App>`,
        name:'App'
    }
</script>
