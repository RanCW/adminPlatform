<template>
  <div id="pages_news_index" class="news-content">
    <!--这里是新闻资讯的首页-->
    <panel class="bg-white">
      <div slot="header">
        新闻资讯


      </div>
      <div slot="body">
        <div class="search-bar">
          <el-row>
            <form>
              <el-col :span="4">
                <el-input v-model="keywords" placeholder="文章、资讯名称"></el-input>
              </el-col>
              <el-col :span="4" :offset="1">
                <el-button type="primary" native-type="submit" @click="handleSearch">查询</el-button>
                <el-button type="primary" @click="openEditDialog">新增</el-button>
              </el-col>
            </form>
          </el-row>
        </div>
      </div>
    </panel>
    <!--文章、资讯列表-->
    <div class="bg-white table-list">
      <el-table
        :data="tableData"
        stripe
        border
        class="table-response">
        <el-table-column
          prop="date"
          width="220"
          label="添加日期">
        </el-table-column>
        <el-table-column
          prop="name"
          width="220"
          label="作者">
        </el-table-column>
        <el-table-column
          prop="address"
          label="简介">
        </el-table-column>
        <el-table-column
          width="220"
          label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleDetail(scope.$index, scope.row)">查看

            </el-button>
            <el-button
              size="mini"
              type="primary"
              @click="handleEdit(scope.$index, scope.row)">编辑

            </el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除

            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <!--分页start-->
      <div class="table-list-footer">
        <el-pagination
          @current-change="changeListPage"
          layout="prev, pager, next"
          :total="1000">
        </el-pagination>
      </div>
      <!--分页end-->
    </div>

    <!--新闻资讯新增编辑弹出框start-->
    <el-dialog
      title="新增"
      :visible.sync="editModal"
      width="600">
      <div>
        这里是body部分的内容
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editModal = false">取 消</el-button>
        <el-button type="primary" @click="editModal = false">确 定</el-button>
      </div>
    </el-dialog>
    <!--新闻资讯新增编辑弹出框end-->
  </div>
</template>

<script>
  import panel from '../../components/panel/index.vue'
  export default{
    components: {
      panel
    },
    data(){
      return {
        keywords: '',
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        editModal: false,//新闻编辑弹出框是否可见
      }
    },
    methods: {
      handleSearch(){
        console.log('sousuo')
      },
      openEditDialog(){
        console.log('sss');
        this.editModal=true;
      },
      handleDetail(index, row){//查看
        console.log(index, row)
      },
      handleEdit(index, row){//编辑
        console.log(index, row)
      },
      handleDelete(index, row){//删除
        console.log(index, row, '这里是删除')
      },
      changeListPage(page){//分页
        console.log(page)
      }
    }
  }


</script>

<style scoped>
  @import "index.scss";

</style>
