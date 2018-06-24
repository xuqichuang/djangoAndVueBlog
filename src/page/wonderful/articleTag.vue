<template>
<div>
  <el-card class="box-card breadcrub-wrapper" shadow="never">
    <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>{{tagName}}</el-breadcrumb-item>
      </el-breadcrumb>
  </el-card>
  <div class="content-wrapper">
    <el-card shadow="never" class="box-card" v-if="wonderfulArr.length==0">暂无数据</el-card>
    <el-card shadow="hover" class="box-card" v-else v-for="(item,index) in wonderfulArr" :key="index">
      <div slot="header" class="clearfix">
        <router-link :to="{path:'/wonderful/article/'+item.id}" class="title">{{item.title}}</router-link>
        <i class="iconfont icon-icon-- l10"></i><span class="html"> {{item.article_tag.tag}} </span>
        <i class="iconfont icon-shijian l10"></i><span class="ciyao-text"> {{item.add_time.substr(0,10)}} </span>
        <i class="iconfont icon-liulan l10"></i><span class="primary-text"> {{item.click_num}} </span>
        <router-link class="detail" :to="{path:'/wonderful/article/'+item.id}" style="float: right; padding: 3px 0">查看详情</router-link>
      </div>
      <div class="card-con clearFix">
        <div class="tuijian-img"><img :src="zhj"/></div>
        <p class="tuijian-text">
          {{item.content.replace(/\n/,'<br/>').substr(0,100)}}...
        </p>
      </div>
    </el-card>
  </div>
</div>
</template>
<script>
  import zhj from "./img/zhj.jpg";
export default {
  data(){
    return{
      zhj:zhj,
      wonderfulArr:[],
      tagName:''
    }
  },
  methods:{
    getWonderful(){
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.5)'
      });
      this.getTagName()
      this.axios.post('/apis/api/getArticleTagList',{article_tag_id:this.$route.params.id}).then(res=>{
        loading.close();
        this.wonderfulArr = res.data.slice(0,3);
      })
    },
    getTagName(){
      this.axios.post('/apis/api/getTagList',{id:this.$route.params.id}).then(res=>{
        this.tagName = res.data[0].tag;
      })
    }
  },
  mounted(){
    this.getWonderful();
  },
  watch:{
    "$route": "getWonderful"
  }
}
</script>
<style lang="less" scoped>
.breadcrub-wrapper{
  margin-top: 20px;
}
img{
  width:100%;
}
.content-wrapper{
  text-align: left;
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
    .title,.detail{
      cursor: pointer;
    }
    .detail{
      font-size: 14px;
      color:#409EFF;
    }
    .title:hover,.detail:hover{
      color:#409EFF;
      opacity: 0.8;
    }
    .l10{
      margin-left: 10px;
    }
    .icon-shijian{
      font-size: 12px;
      color: #409EFF;
    }
    .card-con{
      display: -webkit-box;
    }
    .tuijian-img{
      width:100px;
      height:100px;
      border-radius: 5px;
      overflow: hidden;
      flex:0 0 120px;
    }
    .tuijian-text{
      -webkit-box-flex:1;
      margin-left:20px;
    }
  }
}
</style>




