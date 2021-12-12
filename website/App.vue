<template>
  <div>
    <el-button @click="buttonClick" class='mr-16'>按钮</el-button>
    <el-button type='warning' class='mr-16'>按钮</el-button>
    <el-button type='danger' round>按钮</el-button>
  </div>
</template>

<script>

import {defineComponent} from 'vue'

const useButton = ()=>{
  const buttonClick = ()=>{
     console.log('app-click')
  }
  return {
    buttonClick
  }
}
export default defineComponent({
  setup(){
    return {
       ...useButton()
    }
  }

}) 

</script>

<style>

</style>