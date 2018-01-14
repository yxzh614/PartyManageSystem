<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="个人信息" name="first">
      <el-form label-position="left" inline class="demo-table-expand">
        <el-form-item label="姓名">
          <span @click="setInfo">a</span>
        </el-form-item>
        <el-form-item label="性别">
          <span>b</span>
        </el-form-item>
        <el-form-item label="生日">
          <span>c</span>
        </el-form-item>
        <el-form-item label="民族">
          <span>d</span>
        </el-form-item>
        <el-form-item label="籍贯">
          <span>e</span>
        </el-form-item>
        <el-form-item label="户口所在派出所">
          <span>f</span>
        </el-form-item>
        <el-form-item label="家庭住址">
          <span>g</span>
        </el-form-item>
        <el-form-item label="身份证号">
          <span>g</span>
        </el-form-item>
        <el-form-item label="家庭住址">
          <span>g</span>
        </el-form-item>
        <el-form-item label="备注">
          <span>g</span>
        </el-form-item>
        <el-form-item label="学历">
          <span>g</span>
        </el-form-item>
        <el-form-item label="邮编">
          <span>g</span>
        </el-form-item>
      </el-form>
      <el-dialog
        title="编辑信息"
        :visible.sync="dialogVisible"
        :before-close="handleClose">
        <el-form :model="form">
          <el-form-item label="姓名" :label-width="formLabelWidth">
            <el-input v-model="form.name" auto-complete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </div>
      </el-dialog>
    </el-tab-pane>
    <el-tab-pane label="组织信息" name="second">
      <el-form label-position="left" inline class="demo-table-expand">
        <el-form-item label="政治面貌">
          <span>a</span>
        </el-form-item>
        <el-form-item label="申请入党时间">
          <span>b</span>
        </el-form-item>
        <el-form-item label="列积极分子时间">
          <span>c</span>
        </el-form-item>
        <el-form-item label="培养人">
          <span>d</span>
        </el-form-item>
        <el-form-item label="所属组织">
          <span>e</span>
        </el-form-item>
        <el-form-item label="行政职务">
          <span>f</span>
        </el-form-item>
        <el-form-item label="状态">
          <span>g</span>
        </el-form-item>
      </el-form>
    </el-tab-pane>
    <el-tab-pane label="评价信息" name="third">
      <el-form label-position="left" inline class="demo-table-expand">
        <el-form-item label="个人特长">
          <span>a</span>
        </el-form-item>
        <el-form-item label="获奖情况">
          <span>b</span>
        </el-form-item>
        <el-form-item label="处分情况">
          <span>c</span>
        </el-form-item>
        <el-form-item label="突出表现和存在不足">
          <span>d</span>
        </el-form-item>
      </el-form>
    </el-tab-pane>
    <el-tab-pane label="在校信息" name="forth">
      <el-form label-position="left" inline class="demo-table-expand">
        <el-form-item label="专业">
          <span>a</span>
        </el-form-item>
        <el-form-item label="辅导员">
          <span>b555555555555555555555555555555555555555555555555555</span>
        </el-form-item>
        <el-form-item label="寝室楼号">
          <span>c</span>
        </el-form-item>
        <el-form-item label="寝室号">
          <span>d</span>
        </el-form-item>
        <el-form-item label="床号">
          <span>d</span>
        </el-form-item>
        <el-form-item label="高中入学日期">
          <span>d</span>
        </el-form-item>
        <el-form-item label="高中毕业日期">
          <span>d</span>
        </el-form-item>
        <el-form-item label="排名">
          <span>d</span>
        </el-form-item>
        <el-form-item label="挂科数">
          <span>d</span>
        </el-form-item>
        <el-form-item label="入团时间">
          <span>d</span>
        </el-form-item>
      </el-form>
    </el-tab-pane>
    <el-tab-pane label="文档信息" name="fifth">
      <el-form label-position="left" inline class="demo-table-expand">
        <el-form-item label="入党申请书">
          <span>未提交</span>
        </el-form-item>

      </el-form>
    </el-tab-pane>
  </el-tabs>

</template>

<script>
export default {
  name: 'detail',
  data () {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      activeName: 'first',
      dialogVisible: false,
      formLabelWidth: '120px'
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    },
    handleClick () {
      console.log('ct')
    },
    setInfo () {
      this.dialogVisible = true
    },
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
<style scoped>
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
</style>

