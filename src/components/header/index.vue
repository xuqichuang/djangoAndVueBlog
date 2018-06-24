<template>
<div class="container-wrapper">
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo container"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    :router="true">
    <el-menu-item index="/">网站首页</el-menu-item>
    <el-menu-item index="/wonderful">精彩文章</el-menu-item>
    <el-menu-item index="/study">学无止境</el-menu-item>
    <el-menu-item index="/live">享受生活</el-menu-item>
    <el-menu-item index="/aboutMe">关于我</el-menu-item>
    <!-- <el-menu-item index="6">留言</el-menu-item> -->
  </el-menu>
</div>
</template>
<script>
export default {
  data(){
    return{
      activeIndex: this.$route.path
    }
  },
  methods:{
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
      this.activeIndex = key
    }
  }
}
</script>
<style lang="less" scoped>
.container-wrapper{
  width: 100%;
  height: 60px;
  background-color:#545c64;
}
</style>


