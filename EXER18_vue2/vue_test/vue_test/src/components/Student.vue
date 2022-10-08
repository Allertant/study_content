<template>
    <div id="stu">
        <h2>name:{{name}}</h2>
        <h2>age:{{age}}</h2>
    </div>
</template>

<script>
export default {
    name:'Student-',
    data(){
        return {
            name:'shiyixi',
            age:14
        }
    }
}
</script>

<style>
    #stu{
        background-color: #BFA;
    }
</style>