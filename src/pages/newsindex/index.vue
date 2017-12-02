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
                <el-button type="primary" native-type="submit" @click.prevent="handleSearch">查询</el-button>
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
          label="序号"
          type="index"
          width="50">
        </el-table-column>
        <el-table-column
          prop="title"
          width="220"
          label="标题">
        </el-table-column>
        <el-table-column
          prop="auth"
          width="120"
          label="作者">
        </el-table-column>
        <el-table-column
          prop="create_time"
          width="150"
          label="发布时间">
        </el-table-column>
        <el-table-column
          prop="sort"
          width="80"
          label="排序号">
        </el-table-column>
        <el-table-column
          prop="abstract"
          label="摘要">
        </el-table-column>
        <el-table-column
          width="300"
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
          :total="news_total">
        </el-pagination>
      </div>
      <!--分页end-->
    </div>

    <!--新闻资讯新增编辑弹出框start-->
    <el-dialog
      title="新增"
      :visible.sync="editModal"
      @close="handleCloseModel"
      width="600">
      <div>
        <el-form
          :model="newsForm"
          ref="edit_form"
          label-width="120px">
          <el-form-item label="标题" prop="title">
            <el-input v-model="newsForm.title" placeholder="请输入文章标题"></el-input>
          </el-form-item>
          <el-form-item label="作者" prop="auth">
            <el-input v-model="newsForm.auth" placeholder="请输入作者"></el-input>
          </el-form-item>
          <el-form-item label="排序" prop="sort">
            <el-input v-model="newsForm.sort" placeholder="请输入排序号"></el-input>
          </el-form-item>
          <el-form-item label="简介" prop="abstract">
            <el-input type="textarea" v-model="newsForm.abstract" placeholder="请输入简介"></el-input>
          </el-form-item>
          <el-form-item label="内容" prop="content">
            <el-input :autosize="contentSize" type="textarea" v-model="newsForm.content" placeholder="请输入内容"></el-input>
          </el-form-item>

        </el-form>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="handleCancleEdit">取 消</el-button>
        <el-button type="primary" @click="handleSureEdit">确 定</el-button>
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
        contentSize: {
          minRows: 5
        },//编辑内容框的配置项
        newsForm: {
          title: '',//文章标题
          auth: '',//作者
          sort: '',//排序号
          content: '',//内容
          abstract: ''//摘要
        },
        tableData: [],
        editModal: false,//新闻编辑弹出框是否可见
        page_size: 10,//分页大小
        page_index: 1,//当前页码
        news_total: 0//新闻数目总条数
      }
    },
    mounted: function () {
      this.getNewsList();//查询列表
    },
    methods: {
      handleSearch(){
        this.page_index = 1;
        this.getNewsList();//查询列表
      },
      openEditDialog(){
        this.editModal = true;
      },
      handleCloseModel(){//关闭编辑弹出框的回调函数
        this.newsForm = Object.assign({}, {
          title: '',//文章标题
          auth: '',//作者
          sort: '',//排序号
          content: '',//内容
          abstract: ''//摘要
        })
      },
      handleDetail(index, row){//查看
        console.log(index, row)
      },
      handleEdit(index, row){//编辑
        let objs = {
          url: '/news/get_news_detail',
          data: {
            id: row._id
          }
        };
        this.$httpAjax(objs).then(res => {
          this.newsForm = Object.assign({}, res.data);
          this.editModal = true;
        }).catch(res => {
          console.log('错误咯');
        })

      },
      handleDelete(index, row){//删除
        console.log(index, row, '这里是删除')
        let id=row._id;
        this.$confirm('此操作将永久删除该文章, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.delete_news(id);
        })
      },
      delete_news(id){//删除新闻
        let objs = {
          url: '/news/delete_news',
          data: {
            id: id
          }
        };
        this.$httpAjax(objs).then(res => {
            this.getNewsList();
        }).catch(res => {
          console.log('错误咯');
        })
      },
      changeListPage(page){//分页
        this.page_index = page;
        this.getNewsList();
      },
      handleCancleEdit(){//取消编辑
        this.editModal = false;
        this.$refs["edit_form"].resetFields();
      },
      handleSureEdit(){//确认编辑
        let obj = {
          url: '/news/edit_news',
          method: 'post',
          data: this.newsForm
        };
        this.$httpAjax(obj).then(res => {
          this.editModal = false;
          this.getNewsList();
          this.$refs["edit_form"].resetFields();
        })
      },
      getNewsList(){//查询新闻列表
        let datas = {
          page_size: this.page_size,
          page_index: this.page_index,
          title: this.keywords
        };
        let obj = {
          url: '/news/get_news_list',
          method: 'post',
          data: datas
        };
        this.$httpAjax(obj).then(res => {
          let result = res.data;
          this.news_total = res.total;
          this.tableData = [];
          for (let i = 0, len = result.length; i < len; i++) {
            this.$set(this.tableData, i, result[i]);
          }
          if (result.length >= this.page_size && this.editModal) {
            this.page_index++;
          }
        })
      }
    }
  }


</script>

<style scoped>
  @import "index.scss";

</style>
