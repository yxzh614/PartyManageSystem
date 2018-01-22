<template>
  <div>
    <el-button>编辑</el-button>
    <el-form label-position="left" inline class="demo-table-expand">
      <el-form-item label="个人特长">
        <span>{{form.advantage}}</span>
      </el-form-item>
      <el-form-item label="获奖情况">
        <span>{{form.reward}}</span>
      </el-form-item>
      <el-form-item label="处分情况">
        <span>{{form.dicipline}}</span>
      </el-form-item>
      <el-form-item label="突出表现和存在不足">
        <span>{{form.doing}}</span>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        advantage: 'gerentechang',
        reward: 'huojiangqingkuang',
        dicipline: 'chufenqingkuang',
        doing: 'biaoxain'
      }
    }
  },
  props: {
    ID: String
  }
}
</script>

<style scoped>
.el-button {
  float: left;
}
.el-form {
  width: 50%;
  margin-top: 1%;
  margin-left: 25%;
}
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
.head-pic {
  float: right;
  margin-right: 10px;
}

</style>
