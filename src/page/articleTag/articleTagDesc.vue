<template>
<div>
  <el-card class="box-card breadcrub-wrapper" shadow="never">
    <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{path:'/wonderful'}">标签名</el-breadcrumb-item>
        <el-breadcrumb-item>文章详情</el-breadcrumb-item>
      </el-breadcrumb>
  </el-card>
  <div class="content-wrapper">
    <el-card shadow="never" class="box-card">
      <div slot="header" class="clearfix">
        <span class="title">{{wonderfulObj.title}}</span>
        <i class="iconfont icon-icon-- l10"></i><span class="html"> {{wonderfulObj.article_tag.tag}} </span>
        <i class="iconfont icon-shijian l10"></i><span class="ciyao-text"> {{wonderfulObj.add_time.substring(0,10)}} </span>
        <i class="iconfont icon-liulan l10"></i><span class="primary-text"> {{wonderfulObj.click_num}} </span>
      </div>
      <div class="card-con clearFix">
        <p class="tuijian-text">
          {{wonderfulObj.content}}
        </p>
      </div>
    </el-card>
  </div>
</div>
</template>

<script>
import zhj from "./img/zhj.jpg";
export default {
  data() {
    return {
      zhj:zhj,
      wonderfulObj:{
        title:'',
        article_tag:'',
        add_time:'',
        click_num:'',
        content:'',
      }
    };
  },
  methods:{
    getWonderfulData(){
      this.axios.post('/apis/api/getBlog',{
        id:this.$route.params.id
      }).then(res=>{
        this.wonderfulObj = res.data[0];
      })
    }
  },
  created(){
    this.getWonderfulData()
  },
  components:{
  }
};
</script>
<style lang="less" scoped>
.breadcrub-wrapper{
  margin-top: 20px;
}
img{
  width:100%;
}
.content-wrapper{
  margin: 30px 0;
  h2{
    padding: 0 20px 20px;
    font-size: 20px;
    font-weight: bold;
  }
  p{
    line-height: 40px;
  }
  .box-card{
    margin-bottom: 20px;
    line-height: 40px;
    .l10{
      margin-left: 10px;
    }
    .icon-shijian{
      font-size: 12px;
      color: #409EFF;
    }
    .tuijian-text{
      text-align: left;
    }
  }
}
</style>


