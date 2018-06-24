<template>
  <div>
    <el-tabs type="border-card" class="container">
      <el-tab-pane label="登录">
        <el-form :model="ruleForm1" status-icon :rules="rules1" ref="ruleForm1" label-width="100px" class="demo-ruleForm">
          <el-form-item prop="username" label="用户名">
            <el-input v-model="ruleForm1.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm1.pass" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" :loading="loadingStatus" size="200px" @click="submitForm('ruleForm1')">登录</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="注册">
        
        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
          <el-form-item prop="username" label="用户名">
            <el-input v-model="ruleForm2.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" :loading="loadingStatus" size="200px" @click="submitForm('ruleForm2')">登录</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<style lang="less" scoped>
  .container{
    width: 500px;
    margin: 100px auto;
  }
</style>
  
<script>
import aaa from './img/001.jpg'
export default {
  data(){
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      var validatePass3 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };
    return{
      loadingStatus:false,
      ruleForm1: {
          pass: '',
          checkPass: '',
          username: ''
        },
        rules1: {
          pass: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { validator: validatePass3, trigger: 'blur' }
          ],
          username:[
            { required: true, message: '请输入用户名', trigger: 'blur' },
          ]
        },
      ruleForm2: {
          pass: '',
          checkPass: '',
          username: ''
        },
        rules2: {
          pass: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { required: true, message: '请再次输入密码', trigger: 'blur' },
            { validator: validatePass2, trigger: 'blur' }
          ],
          username:[
            { required: true, message: '请输入用户名', trigger: 'blur' },
          ]
        }
    }
  },
  methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.loadingStatus = true;
            if(formName == 'ruleForm1'){
              this.axios.post('/apis/api/login',{
                'username':this.ruleForm1.username,
                'password':this.ruleForm1.pass
              }).then(res=>{
                this.loadingStatus = false;
                if(res.status == 200){
                  if(res.data.message == '登录成功'){
                    sessionStorage.setItem('TOKEN',res.data.token)
                    this.$message({
                      message: res.data.message,
                      type: 'success',
                      onClose :()=>{
                        this.$router.push('/')
                      }
                    });
                  }else{
                    this.$message({
                      message: res.data.message,
                      type: 'error',
                    });
                  }
                }
              })
            }else if(formName == 'ruleForm2'){
              this.axios.post('/apis/api/register',{
                'username':this.ruleForm2.username,
                'password':this.ruleForm2.pass
              }).then(res=>{
                this.loadingStatus = false;
                if(res.status == 200){
                  if(res.data.message == '注册成功'){
                    this.$message({
                      message: res.data.message,
                      type: 'success',
                      onClose:()=>{
                        this.$router.push('/')
                      }
                    });
                  }else{
                    this.$message({
                      message: res.data.message,
                      type: 'error',
                    });
                  }
                }
              })
            }
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
