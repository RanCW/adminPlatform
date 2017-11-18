<template>
  <div id="page_index">
    <navHeader></navHeader>
    <el-row>
      <!--左边菜单栏start-->
      <el-col :span="4" class="left-menu">
        <asideMenu></asideMenu>
      </el-col>
      <!--左边菜单栏end-->
      <!--右边内容区start-->
      <el-col :span="20">
        这里是右边的内容区


      </el-col>
      <!--右边内容区end-->
    </el-row>
    <!--底部start-->
    <div>
      这里页面的底部


    </div>
    <!--底部end-->
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
      return {

      }
    }

  };
</script>
<style scoped>
  @import "index.scss";

</style>
