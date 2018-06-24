<template>
  <div>
    <el-card class="box-card mt20" shadow="never">
      <div slot="header" class="clearfix">
        <span>关注我</span>
      </div>
      <el-row :gutter="20" class="share">
        <el-col :span="6">
          <el-popover
            placement="bottom"
            width="200"
            trigger="hover"
            class="weibo-wrapper">
            <div class="weibo">
              <img width="200" src="./img/weibo.jpg" alt="">
            </div>
            <div slot="reference">
              <i class="iconfont icon-weibo"></i>
              <p>新浪微博</p>
            </div>
          </el-popover>
        </el-col>
        <el-col :span="6">
            <el-popover
            placement="bottom"
            width="200"
            trigger="hover"
            class="weibo-wrapper">
            <div class="weibo">
              <img width="200" src="./img/weixin.jpg" alt="">
            </div>
            <div slot="reference">
              <i class="iconfont icon-weixin"></i>
              <p>微信公众号</p>
            </div>
          </el-popover>
        </el-col>
      </el-row>
    </el-card>
    <el-tabs v-model="activeName" @tab-click="handleClick" type="border-card" class="mt20">
      <el-tab-pane name="click">
        <span slot="label"><i class="el-icon-date"></i> 点击排行</span>
        <el-card class="click-card" shadow="never">
          <div v-for="(item,index) in clickList" :key="index" class="text item">
            <el-tag type="danger" size="mini">{{index+1 }}</el-tag> 
            <router-link :to="{path:'/wonderful/article/'+item.id}" class="title">{{ item.title }}</router-link>
          </div>
        </el-card>
      </el-tab-pane>
      <el-tab-pane name="new">
        <span slot="label"><i class="el-icon-news"></i> 最新文章</span>
        <el-card class="click-card" shadow="never">
          <div v-for="(item,index) in newBlogList" :key="index" class="text item">
            <el-tag type="danger" size="mini">{{index+1 }}</el-tag> 
            <router-link :to="{path:'/wonderful/article/'+item.id}" class="title">{{ item.title }}</router-link>
          </div>
        </el-card>
      </el-tab-pane>
      <el-tab-pane name="recommend">
        <span slot="label"><i class="el-icon-bell"></i> 站长推荐</span>
        <el-card class="click-card" shadow="never">
          <div v-for="o in 6" :key="o" class="text item">
            <el-tag type="danger" size="mini">{{o}}</el-tag>{{' 站长推荐 ' + o }}
          </div>
        </el-card>
      </el-tab-pane>
    </el-tabs>
    <el-card class="box-card mt20 tag-wrapper" shadow="never">
      <div slot="header" class="clearfix">
        <span>标签墙</span>
      </div>
      <el-row :gutter="66" class="share">
        <el-col :span="4" v-for="(item,index) in articleTagList" :key="index">
          <el-tag :type="typeArr[Math.floor(Math.random()*5)]">
            <router-link :to="{path:'/wonderful/tag/' + item.id}">
              {{item.tag}}
            </router-link>
          </el-tag>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>
<script>
export default {
  data(){
    return{
      articleTagList:[],
      typeArr:['default','success','info','danger','warning'],
      clickList:[],
      newBlogList:[],
      activeName:'click'
    }
  },
  methods:{
    getArticleList(){
      this.axios.post('/apis/api/getTagList')
      .then(res=>{
        this.articleTagList = res.data;
      })
    },
    getClickList(){
      this.axios.post('/apis/api/clickBlogList')
      .then(res=>{
        this.clickList = res.data;
      })
    },
    getBlogList(){
      this.axios.post('/apis/api/blogList')
      .then(res=>{
        this.newBlogList = res.data;
      })
    },
    handleClick(tab,event){
      if(tab.name == 'click'){
        this.getClickList()
      }else if(tab.name == 'new'){
        this.getBlogList()
      }
    }
  },
  mounted(){
    this.getArticleList()
    this.getClickList()
  }
}
</script>


<style lang="less" scoped>
  .mt20{
    margin-bottom: 20px;
  }
  .share {
    text-align: center;
    .iconfont{
      font-size: 30px;
      cursor: pointer;
    }
    .icon-weibo{
      color:rgb(293,94,93);
    }
    .icon-weixin{
      color:rgb(80,182,116);
    }
    p{
      font-size: 12px;
      margin-top: 10px;
    }
  }
  .item {
    padding: 18px 0 10px;
    border-bottom: 1px solid #ddd;
    line-height: 24px;
    .title:hover{
      color:#409EFF;
      opacity: 0.8;
    }
  }
  .tag-wrapper{
    .el-col{
      margin-bottom: 20px;
    }
  }
</style>

