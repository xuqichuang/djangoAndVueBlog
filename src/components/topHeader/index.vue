<template>
  <div class="wrapper">
    <div class="container">
      <div class="right fr">
        <span>个人中心</span> 
        <span>|</span>
        <span v-if="!cookie" @click="login">还没登录呢</span>
        <span v-else @click="logOut">退出登录</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      cookie:''
    }
  },
  methods:{
    logOut(){
      this.axios.post('/apis/api/logOut').then(res=>{
        console.log(res)
        this.$message({
          message: res.data.message,
          type: 'success',
          onClose:()=>{
            sessionStorage.removeItem('TOKEN');
            this.cookie = ''
          }
        });
      })
    },
    login(){
      this.$router.push('/login')
    }
  },
  mounted(){
    this.cookie = sessionStorage.getItem('TOKEN');
  }
}
</script>
<style lang="less" scoped>
.wrapper{
  height:30px;
  background: #eee;
  line-height: 30px;
  font-size: 12px;
  span{
    margin-right: 10px;
    cursor: pointer;
  }
}
</style>


