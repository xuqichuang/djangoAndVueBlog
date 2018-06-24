<template>
<div>
  <div class="footer">
    <div class="container">
      <el-row :gutter="20" justify="space-around" type="flex">
        <el-col :span="6">
          <div class="title">
            致谢
          </div>
          <div><a href="https://www.python.org/" target="_blank">python</a></div>
          <div><a href="https://www.djangoproject.com/" target="_blank">django</a></div>
          <div><a href="https://cn.vuejs.org/" target="_blank">Vue</a></div>
          <div><a href="http://element.eleme.io/#/zh-CN" target="_blank">ElementUI</a></div>
          <div><a href="https://www.webpackjs.com/" target="_blank">webpack</a></div>
          <div><a href="https://www.aliyun.com/" target="_blank">阿里云</a></div>
          <div><a href="https://www.mysql.com/cn/" target="_blank">Mysql</a></div>
          <div><a href="https://github.com/" target="_blank">Github</a></div>
        </el-col>
        <el-col :span="6">
          <div class="title">
            我的动态
          </div>
          <div><a href="javascript:;">微信：a1319681561</a></div>
          <div><a href="https://weibo.com/5441935295/profile?rightmod=1&wvr=6&mod=personinfo" target="_blank">我的微博首页</a></div>
          <div><a href="javascript:;">邮箱：xqc1319681561@163.com</a></div>
        </el-col>
      </el-row>
    </div>
  </div>
  <div class="fot-bot">
    Design By 一叶障目的个人博客
  </div>
</div>
</template>
<script>
export default {
  
}
</script>
<style lang="less" scoped>
  .footer{
    background: #eff9fd;
    padding: 30px 0;
    text-align: left;
    margin-top: 50px;
    .title{
      font-weight: bold;
      font-size: 20px;
      margin-bottom: 10px;
    }
    a{
      line-height: 28px;
    }
    a:hover{
      color: #333;
    }
  }
  .fot-bot{
    background: rgb(105, 98, 98);
    line-height: 50px;
    color: #fff;
  }
</style>


