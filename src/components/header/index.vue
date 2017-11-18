<template>
  <!--头部start-->
  <div class="page-header" id="components_header">
    <span class="header-logo"></span>
    管理平台
    <div class="user-info">
    <el-dropdown :hide-on-click="true" >
        <span class="el-dropdown-link">
          admin<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>修改密码</el-dropdown-item>
        <el-dropdown-item>退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>

  </div>
  <!--头部end-->
</template>

<script>

</script>

<style scoped>
  @import "index.scss";

</style>
