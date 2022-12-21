<script setup>
import { ElMessage } from "element-plus";
const testMessage = () => {
  ElMessage({
    message: '欢迎使用 Miffa 项目脚手架👻',
    type: 'success',
  })
}
</script>

<template>
  <h1>Home View</h1>
  <el-button plain @click="testMessage">Click Me!</el-button>
</template>

<style scoped lang="scss">

</style>