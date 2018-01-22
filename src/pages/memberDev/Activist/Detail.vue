<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="个人信息" name="first">
      <person-info ID='21010619970322331X'/>
    </el-tab-pane>
    <el-tab-pane label="组织信息" name="second">
      <person-dep/>
    </el-tab-pane>
    <el-tab-pane label="评价信息" name="third">
      <person-judge />
    </el-tab-pane>
    <el-tab-pane v-if="$route.params.Type!=='教师'" label="在校信息" name="forth">
      <person-stu-info />
    </el-tab-pane>
    <el-tab-pane label="入党积极分子阶段信息" name="r">
      <activist-stage-info />
    </el-tab-pane>
    <el-tab-pane label="积极分子培训信息" name="j">
      <activist-train />
    </el-tab-pane>
    <el-tab-pane label="文档信息" name="w">
      <person-doc />
    </el-tab-pane>
    <el-tab-pane label="思想汇报" name="s">

    </el-tab-pane>
  </el-tabs>

</template>

<script>
import PersonInfo from '../../../components/form/PersonInfo.vue'
import PersonDep from '../../../components/form/PersonDep.vue'
import PersonJudge from '../../../components/form/PersonJudge.vue'
import PersonDoc from '../../../components/form/PersonDoc.vue'
import PersonStuInfo from '../../../components/form/PersonStuInfo.vue'
import ActivistStageInfo from '../../../components/form/ActivistStageInfo.vue'
import ActivistTrain from '../../../components/form/ActivistTrain.vue'

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
      formLabelWidth: '120px',
      dialogImageUrl: '',
      dialogVisible2: false
    }
  },
  computed: {
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
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible2 = true
    }
  },
  components: {
    PersonInfo,
    PersonDep,
    PersonJudge,
    PersonStuInfo,
    PersonDoc,
    ActivistStageInfo,
    ActivistTrain
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

