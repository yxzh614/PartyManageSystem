<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :router="router">
    <el-menu-item index="/">首页</el-menu-item>
    <el-submenu index="1">
      <template slot="title">
        <span>党员发展</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/MemberDev/Applicant">申请入党</el-menu-item>
        <el-menu-item index="/MemberDev/Activist">确定入党积极分子</el-menu-item>
        <el-menu-item index="1-2">接收预备党员</el-menu-item>
        <el-menu-item index="1-2">预备党员转正</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title">
        <span>党员管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="1-1">党员信息</el-menu-item>
        <el-menu-item index="1-2">调入人员</el-menu-item>
        <el-menu-item index="1-2">调出人员</el-menu-item>
        <el-menu-item index="1-2">欠缴党费</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title">
        <span>党务管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="1-1">组织机构管理</el-menu-item>
        <el-menu-item index="1-2">会议管理</el-menu-item>
        <el-menu-item index="1-2">活动管理</el-menu-item>
        <el-menu-item index="1-2">开展工作信息</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="4">
      <template slot="title">
        <span>统计分析</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="1-1">用户登录信息</el-menu-item>
        <el-menu-item index="1-2">人员基本信息</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="5">
      <template slot="title">
        <span>设置</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="1-1">注销</el-menu-item>
        <el-menu-item index="1-2">重置密码</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>
<script>
export default {
  name: 'side-bar',
  data () {
    return {
      router: true
    }
  },
  computed: {
  }
}
</script>
<style>

</style>
