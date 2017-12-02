<template>
  <div id="components_aside_menu">
    <el-menu
      default-active="/index/news"
      @open="handleOpen"
      @close="handleClose"
      :router="menuRouter"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="/index/news">
        <i class="el-icon-tickets"></i>
        <span slot="title">文章</span>
      </el-menu-item>
      <el-menu-item index="/index/goods" >
        <i class="el-icon-goods"></i>
        <span>商品</span>
      </el-menu-item>

    </el-menu>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        menuRouter:true
      }
    },
    methods: {
      handleMenu(event){
        console.log(event);
      },
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
