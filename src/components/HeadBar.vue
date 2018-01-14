<template>
  <el-menu
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#B30707"
  text-color="#fff"
  active-text-color="#ffd04b">
  <img src="../assets/4.png" alt="">
  <span style="font-size: 30px;">信息科学与工程学院</span>
  <span>党务工作管理系统</span>
  <el-menu-item index="1">系统管理员</el-menu-item>
  <el-menu-item index="3">沈阳理工大学</el-menu-item>
</el-menu>
</template>

<script>
export default {
  name: 'HeadBar',
  data () {
    return {

    }
  },
  methods: {
    handleSelect: function () {

    }
  }
}
</script>
<style scoped>
span {
  color: rgb(255, 255, 255);
}
img {
  height: 50px;
  vertical-align: bottom;
}
.el-menu--horizontal .el-menu-item {
  float: right;
}
</style>
