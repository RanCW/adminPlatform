<template>
  <div id="page_index" class="page-index">
    <el-container class="news-container">
      <el-header class="layout-header">
        <navHeader></navHeader>
      </el-header>
      <el-container>
        <el-aside width="200px" class="left-menu">
            <asideMenu></asideMenu>
        </el-aside>
        <el-main class="main-content">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>

</template>

<script>
  import navHeader from '../../components/header/index.vue'
  import asideMenu from '../../components/asidemenu/index.vue'
  export default {
    components: {
      navHeader,
      asideMenu
    },
    data() {
      return {}
    }

  };
</script>
<style scoped>
  @import "index.scss";
</style>
