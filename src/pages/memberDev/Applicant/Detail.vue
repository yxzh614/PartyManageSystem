<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="个人信息" name="first">
      <person-info ID='21010619970322331X'/>
    </el-tab-pane>
    <el-tab-pane label="组织信息" name="second">
      <person-dep ID='21010619970322331X'/>
    </el-tab-pane>
    <el-tab-pane label="评价信息" name="third">
      <person-judge ID='21010619970322331X'/>
    </el-tab-pane>
    <el-tab-pane label="文档信息" name="fifth">
      <person-doc />
    </el-tab-pane>
    <el-tab-pane v-if="$route.params.Type!=='教师'" label="在校信息" name="six">
      <person-stu-info />
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import PersonInfo from '../../../components/form/PersonInfo.vue'
import PersonDep from '../../../components/form/PersonDep.vue'
import PersonJudge from '../../../components/form/PersonJudge.vue'
import PersonDoc from '../../../components/form/PersonDoc.vue'
import PersonStuInfo from '../../../components/form/PersonStuInfo.vue'

export default {
  name: 'detail',
  data () {
    return {
      activeName: 'first',
      dialogVisible: false,
      formLabelWidth: '120px',
      dialogImageUrl: '',
      dialogVisible2: false
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
    PersonDoc,
    PersonStuInfo
  }
}
</script>

