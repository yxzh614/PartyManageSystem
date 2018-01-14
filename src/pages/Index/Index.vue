<template>
  <div>
    <div>
      <p>近期工作摘要</p>
        <div v-for="o in 4" :key="o" class="text item">
          {{'列表内容 ' + o }}
        </div>
      <el-alert
        title="欢迎来到:沈阳理工大学信息科学与工程学院党务工作信息系统"
        type="success">
      </el-alert>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>通知公告栏</span>
          <el-button style="float: right; padding: 3px 0" type="text" @click="dialogVisible = true"><i class="el-icon-plus"></i>新建</el-button>
        </div>
        <div v-for="o in 4" :key="o" class="text item">
          {{'列表内容 ' + o }}
        </div>
      </el-card>
    </div>
    <el-dialog
      title="新通知"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <span>这里应该是提交新通知的表单</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'this is index',
      dialogVisible: false
    }
  },
  methods: {
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    }
  }
}
</script>
<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 100%;
  }
  .el-alert {
    margin: 20px 0;
  }
</style>