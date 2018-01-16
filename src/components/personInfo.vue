<template>
  <div>
    <div class="head-pic">
      <el-upload
        :visible="!dialogVisible2"
        action=""
        :limit="1"
        :auto-upload="false"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove">
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible2" size="tiny">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>
    </div>
    <el-form label-position="left" inline class="demo-table-expand">
      <el-form-item label="姓名">
        <span>{{personInfo.name}}</span>
      </el-form-item>
      <el-form-item label="性别">
        <span>{{personInfo.sex}}</span>
      </el-form-item>
      <el-form-item label="生日">
        <span>{{birthday}}</span>
      </el-form-item>
      <el-form-item label="民族">
        <span>{{personInfo.nation}}</span>
      </el-form-item>
      <el-form-item label="籍贯">
        <span>{{personInfo.origin}}</span>
      </el-form-item>
      <el-form-item label="户口所在派出所">
        <span>{{personInfo.police}}</span>
      </el-form-item>
      <el-form-item label="家庭住址">
        <span>{{personInfo.address}}</span>
      </el-form-item>
      <el-form-item label="身份证号">
        <span>{{ID}}</span>
      </el-form-item>
      <el-form-item label="联系电话">
        <span>{{personInfo.tel}}</span>
      </el-form-item>
      <el-form-item label="备注">
        <span>{{personInfo.remark}}</span>
      </el-form-item>
      <el-form-item label="学历">
        <span>{{personInfo.edu}}</span>
      </el-form-item>
      <el-form-item label="邮编">
        <span>{{personInfo.zipcode}}</span>
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
  </div>
</template>

<script>
export default {
  data () {
    return {
      personInfo: {
        name: '',
        sex: '',
        nation: '',
        origin: '',
        police: '',
        address: '',
        tel: '',
        edu: '',
        zipcode: '',
        remark: ''
      },
      form: {
        name: ''
      },
      dialogVisible: false,
      formLabelWidth: '120px',
      dialogImageUrl: '',
      dialogVisible2: false
    }
  },
  methods: {
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible2 = true
    }
  },
  computed: {
    birthday () {
      let id = this.personInfo.ID
      return id.slice(6, 10) + '-' + id.slice(10, 12) + '-' + id.slice(12, 14)
    }
  },
  created () {
    console.log('created')
  },
  beforeMount () {
    console.log('beforeMount')
  },
  mounted () {
    console.log('mounted')
    this.personInfo = {
      ID: '21010619970322331X',
      name: '岳贤哲',
      sex: '男',
      nation: '汉族',
      origin: '沈阳市',
      police: '沈阳市',
      address: '沈阳市',
      tel: '13842096362',
      edu: '大学本科',
      zipcode: '222222',
      remark: 'x'
    }
  },
  beforeUpdate () {
    console.log('beforeUpdate')
  },
  updated () {
    console.log('updated')
  },
  props: [
    'ID'
  ]
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
.head-pic {
  float: right;
  margin-right: 10px;
}

</style>
