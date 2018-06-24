<template>
<div>
  <TopHeader />
  <Header />
  <div class="container clearFix">
    <div class="block clearfix">
      <div class="banner fl">
        <el-carousel trigger="click" height="400px" >
          <el-carousel-item v-for="(item,index) in bannerList" :key="index">
            <img :src="item" alt="">
          </el-carousel-item>
        </el-carousel>
        <div class="content-wrapper">
           <el-card class="box-card breadcrub-wrapper clearfix" shadow="never">
            <h2>精彩文章
              <router-link class="more" :to="{path:'/wonderful'}">查看更多</router-link>
            </h2>
          </el-card>
          <el-card shadow="hover" class="box-card" v-for="(item,index) in wonderfulArr" :key="index">
            <div slot="header" class="clearfix">
              <router-link :to="{path:'/wonderful/article/'+item.id}" class="title">{{item.title}}</router-link> 
              <i class="iconfont icon-icon-- l10"></i>
              <router-link :to="{path:'/wonderful/tag/' + item.article_tag.id}" class="html"> {{item.article_tag.tag}} </router-link>
              <i class="iconfont icon-shijian l10"></i>
              <span class="ciyao-text"> {{item.add_time.substr(0,10)}} </span>
              <i class="iconfont icon-liulan l10"></i>
              <span class="primary-text"> {{item.click_num}} </span>
              <router-link class="detail" :to="{path:'/wonderful/article/'+item.id}" style="float: right; padding: 3px 0">查看详情</router-link>
            </div>
            <div class="card-con clearFix">
              <div class="tuijian-img"><img :src="zhj"/></div>
              <p class="tuijian-text">
                {{item.content.substr(0,100)}}...
              </p>
            </div>
          </el-card>
        </div>
        <div class="content-wrapper">
          <el-card class="box-card breadcrub-wrapper clearfix" shadow="never">
            <h2>学无止境
              <router-link class="more" :to="{path:'/study'}">查看更多</router-link>
            </h2>
          </el-card>
          <el-card shadow="hover" class="box-card" v-for="(item,index) in studyList" :key="index">
            <div slot="header" class="clearfix">
              <router-link :to="{path:'/study/article/'+item.id}" class="title">{{item.title}}</router-link>
              <i class="iconfont icon-icon-- l10"></i>
              <router-link :to="{path:'/wonderful/tag/' + item.article_tag.id}" class="html"> {{item.article_tag.tag}} </router-link>
              <i class="iconfont icon-shijian l10"></i><span class="ciyao-text"> {{item.add_time.substr(0,10)}} </span>
              <i class="iconfont icon-liulan l10"></i><span class="primary-text"> {{item.click_num}} </span>
              <router-link class="detail" :to="{path:'/study/article/'+item.id}" style="float: right; padding: 3px 0">查看详情</router-link>
            </div>
            <div class="card-con clearFix">
              <div class="tuijian-img"><img :src="zhj"/></div>
              <p class="tuijian-text">
                {{item.content.substr(0,100)}}...
              </p>
            </div>
          </el-card>
        </div>
        <div class="content-wrapper">
          <el-card class="box-card breadcrub-wrapper clearfix" shadow="never">
            <h2>享受生活
              <router-link class="more" :to="{path:'/live'}">查看更多</router-link>
            </h2>
          </el-card>
          <el-card shadow="hover" class="box-card" v-for="(item,index) in liveList" :key="index">
            <div slot="header" class="clearfix">
              <router-link :to="{path:'/live/article/'+item.id}" class="title">{{item.title}}</router-link>
              <i class="iconfont icon-icon-- l10"></i>
              <router-link :to="{path:'/wonderful/tag/' + item.article_tag.id}" class="html"> {{item.article_tag.tag}} </router-link>
              <i class="iconfont icon-shijian l10"></i><span class="ciyao-text"> {{item.add_time.substr(0,10)}} </span>
              <i class="iconfont icon-liulan l10"></i><span class="primary-text"> {{item.click_num}} </span>
              <router-link class="detail" :to="{path:'/live/article/'+item.id}" style="float: right; padding: 3px 0">查看详情</router-link>
            </div>
            <div class="card-con clearFix">
              <div class="tuijian-img"><img :src="zhj"/></div>
              <p class="tuijian-text">
                {{item.content.substr(0,100)}}...
              </p>
            </div>
          </el-card>
        </div>
      </div>
      <div class="fl right_card">
        <rightNav />
      </div>
    </div>
  </div>
  <Footer />
</div>
</template>

<script>
import banner1 from "./img/001.jpg";
import banner2 from "./img/002.jpg";
import banner3 from "./img/003.jpg";
import banner4 from "./img/004.jpg";
import zhj from "./img/zhj.jpg";
import rightNav from '@/components/rightNav/';

import Header from '@/components/header/';
import Footer from '@/components/footer/';
import TopHeader from '@/components/topHeader/';
export default {
  data() {
    return {
      bannerList:[
        banner1,
        banner2,
        banner3,
        banner4,
      ],
      zhj:zhj,
      wonderfulArr:[],
      studyList:[],
      liveList:[]
    };
  },
  methods:{
    getWonderful(){
       this.axios.post('/apis/api/blogList',{blogType_id:1}).then(res=>{
         console.log(res)
        this.wonderfulArr = res.data.slice(0,3);
      })
    },
    getStudyList(){
       this.axios.post('/apis/api/blogList',{blogType_id:3}).then(res=>{
        this.studyList = res.data.slice(0,3);
      })
    },
    getLiveList(){
       this.axios.post('/apis/api/blogList',{blogType_id:2}).then(res=>{
        this.liveList = res.data.slice(0,3);
      })
    }
  },
  mounted(){
    this.getWonderful()
    this.getStudyList()
    this.getLiveList()
  },
  components:{
    Header,
    TopHeader,
    rightNav,
    Footer
  }
};
</script>
<style lang="less" scoped>
  .block{
    .banner{
      width:800px;
      img{
        width:100%;
      }
      .content-wrapper{
        text-align: left;
        margin: 50px 0;
        h2{
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
          .title:hover,.more:hover,.detail:hover{
            color:#409EFF;
            opacity: .8;
          }
          .more{
            float: right;
            font-size:14px;
            color:#409EFF;
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
    }
    .right_card{
      width: 360px;
      text-align: left;
      margin: 20px 0 0 20px;
      
    }

  }
</style>


