<template>
  <div>
    <TopHeader />
    <Header />
    <div class="container clearFix">
    <div class="block clearfix">
      <div class="banner fl">
        <el-card class="box-card breadcrub-wrapper" shadow="never">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>关于我</el-breadcrumb-item>
          </el-breadcrumb>
        </el-card>
        <div class="step-wrapper clearFix">
          <div class="list" v-for="(item,index) in aboutMeArr" :key="index">
            <div class="time-wrapper">
              <el-tag class="tag">{{item.add_time.substr(0,10)}}</el-tag>
              <div class="line-wrapper">
                <div class="dot"></div>
                <div class="line"></div>
              </div>
            </div>
            <el-card class="con" shadow="hover">
             {{item.description}}
            </el-card>
          </div>
        </div>
        <div class="content-wrapper">
          <el-card shadow="hover" class="box-card" v-for="(item,index) in wonderfulArr" :key="index">
            <div slot="header" class="clearfix">
              <router-link :to="{path:'/wonderful/article/'+item.id}" class="title">{{item.title}}</router-link>
              <i class="iconfont icon-icon-- l10"></i>
              <router-link :to="{path:'/wonderful/tag/' + item.article_tag.id}" class="html"> {{item.article_tag.tag}} </router-link>
              <i class="iconfont icon-shijian l10"></i><span class="ciyao-text"> {{item.add_time.substr(0,10)}} </span>
              <i class="iconfont icon-liulan l10"></i><span class="primary-text"> {{item.click_num}} </span>
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
import zhj from "./img/zhj.jpg";

import rightNav from '@/components/rightNav/';
import Header from '@/components/header/';
import Footer from '@/components/footer/';
import TopHeader from '@/components/topHeader/';
export default {
  data() {
    return {
      tableData: [],
      zhj:zhj,
      aboutMeArr:[],
      wonderfulArr:[]
    };
  },
  methods:{
    getData(){
      this.axios.post('/apis/api/user_list').then(res=>{
        this.tableData = res.data;
      })
    },
    getAboutMe(){
       this.axios.post('/apis/api/AboutMeList').then(res=>{
        this.aboutMeArr = res.data;
      })
    },
    getWonderful(){
       this.axios.post('/apis/api/blogList',{blogType_id:1}).then(res=>{
         console.log(res)
        this.wonderfulArr = res.data.slice(0,3);
      })
    },
    
  },
  mounted(){
    this.getData()
    this.getAboutMe()
    this.getWonderful()
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

      .breadcrub-wrapper{
        margin-top: 20px;
      }
      .step-wrapper{
        margin-top: 30px;
        .list{
          display: -webkit-box;
          margin-top: 20px;
          .time-wrapper{
            flex:0 0 120px;
            display: -webkit-box;
            .tag{
              flex:0 0 50px;
            }
            .line-wrapper{
              -webkit-box-flex:1;
              margin-left:10px;
              .dot{
                width:10px;
                height:10px;
                border-radius: 50%;
                background: #bbb;
                margin-top: 11px;
              }
              .line{
                width:3px;
                height:100%;
                overflow: hidden;
                background: #bbb;
                margin:5px 3px 5px;
              }
            }
          }
          .con{
            text-align: left;
            line-height: 40px;
            -webkit-box-flex:1;
            margin-left: 8px;
          }
        }
      }
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
          text-align: left;
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
    }
    .right_card{
      width: 360px;
      text-align: left;
      margin: 20px 0 0 20px;
      
    }

  }
</style>

