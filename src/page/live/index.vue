<template>
<div>
  <TopHeader />
  <Header />
  <div class="container clearFix">
    <div class="block clearfix">
      <div class="banner fl">
        <router-view />
        
         <el-table
          :data="tableData"
            header-align="center"
            align="center">
          <el-table-column
            border
            prop="username"
            label="用户名">
          </el-table-column>
          <el-table-column
            prop="email"
            label="邮箱">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
          </el-table-column>
        </el-table>
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
      zhj:zhj
    };
  },
  methods:{
    getData(){
      this.axios.post('/apis/api/user_list').then(res=>{
        this.tableData = res.data;
      })
    }
  },
  mounted(){
    this.getData()
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
      img{
        width:100%;
      }
      .content-wrapper{
        text-align: left;
        margin: 50px 0;
        h2{
          padding: 0 20px 20px;
          font-size: 20px;
          font-weight: bold;
        }
        p{
          line-height: 28px;
        }
        .box-card{
          margin-bottom: 20px;
          .title{
            cursor: pointer;
          }
          .title:hover{
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


