<template>
  <div id="user_login">
    <el-row>
      <el-col :span="8" :offset="4">
        <img class="login-img" src="../../../static/img/cover.jpg" alt="后台管理系统">
      </el-col>
      <el-col :span="4" :offset="1">
        <div class="form-content">
          <el-form :model="register_form" status-icon  ref="register_form" class="demo-ruleForm">
            <el-form-item label="" prop="user_name">
              <el-input class="input-item" v-model="register_form.user_name" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="" prop="password">
              <el-input class="input-item" v-model="register_form.password" type="password"  placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('register_form')">提交</el-button>
              <el-button @click="resetForm('register_form')">重置</el-button>
            </el-form-item>
          </el-form>

        </div>
      </el-col>
    </el-row>

  </div>

</template>

<script>
  export default{
      data(){
          return{
            register_form:{
              user_name:'',
              password:'',
            }
          }
      },
    methods:{
      submitForm(refEle){//表单提交
        this.$axios.post('/users/user_register',this.register_form);
      },
      resetForm(refEle){//表单重置
        this.$refs[refEle].resetFields();
      }
    }
  }
</script>

<style scoped>
  .login-img{
    height: 400px;
    width: 100%;
  }
  .form-content{
    margin-top: 100px;
  }
  .input-item{
    margin-top: 20px;
  }
</style>
