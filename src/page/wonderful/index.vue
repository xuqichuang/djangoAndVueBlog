<template>
<div>
  <TopHeader />
  <Header />
  <div class="container clearFix">
    <div class="block clearfix">
      <div class="banner fl">
         <router-view />
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
import rightNav from '@/components/rightNav/';

import Header from '@/components/header/';
import Footer from '@/components/footer/';
import TopHeader from '@/components/topHeader/';
export default {
  data() {
    return {
      tableData: [],
    };
  },
  methods:{
    
  },
  mounted(){
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


