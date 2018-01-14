<template>
  <div id="app">
    <el-container>
      <el-header>
        <head-bar/>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <side-bar/>
        </el-aside>
        <el-container>
          <el-main>
            <router-view/>
          </el-main>
          <el-footer>
            <foot-bar/>
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import SideBar from './components/SideBar.vue'
import HeadBar from './components/HeadBar.vue'
import FootBar from './components/FootBar.vue'

export default {
  name: 'app',
  components: {
    SideBar,
    HeadBar,
    FootBar
  }
}
</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.el-header {
  padding: 0;
}
</style>
