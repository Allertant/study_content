<template>
  <h2>Child</h2>
  <!-- <h2>num:{{num}}</h2> -->
  <h3 :style="{color}">hh，我又回来了</h3>
</template>

<script lang="ts">
import {defineComponent,inject} from 'vue'
export default defineComponent({
    name:'Child',
    setup(){
        const color = inject('color')
        console.log(color)
        return{
            color
        }
    }
})
</script>

<style>

</style>