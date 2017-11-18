<template>
<div id="components_aside_menu">
  <el-menu
    default-active="1"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-menu-item index="1">
      <template slot="title">
        <i class="el-icon-goods"></i>
        <span>商品</span>
      </template>
    </el-menu-item>
    <el-menu-item index="2">
      <i class="el-icon-tickets"></i>
      <span slot="title">文章</span>
    </el-menu-item>
  </el-menu>
</div>
</template>

<script>
  export default{
      data(){
          return{

          }
      },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
  @import "index.scss";

</style>
