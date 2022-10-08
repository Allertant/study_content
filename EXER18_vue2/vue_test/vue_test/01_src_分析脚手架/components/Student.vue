<template>
  <div class="demo1">
    <h2>Student</h2>
    <h2>name:{{ name }}</h2>
    <h2>address:{{ age }}</h2>
  </div>
</template>
  
  <script>
export default {
  name: "Student-",
  data() {
    return {
      name: "shiyixi",
      age: 18,
    };
  },
};
</script>
  
  <style>
.demo1 {
  background-color: orange;
}
</style>