<template>
<div>
	<el-button>编辑</el-button>
	<el-form label-position="left" inline class="demo-table-expand">
		<el-form-item label="政治面貌">
			<span>{{form.PolPosition}}</span>
		</el-form-item>
		<el-form-item label="申请入党时间">
			<span>{{form.TimeApplyInParty}}</span>
		</el-form-item>
		<el-form-item label="列积极分子时间">
			<span>{{form.TimeBeJiji}}</span>
		</el-form-item>
		<el-form-item label="培养人">
			<span>{{form.Trainer}}</span>
		</el-form-item>
		<el-form-item label="所属组织">
			<span>{{form.Dep}}</span>
		</el-form-item>
		<el-form-item label="行政职务">
			<span>{{form.Job}}</span>
		</el-form-item>
		<el-form-item label="状态">
			<span>{{form.State}}</span>
		</el-form-item>
	</el-form>
</div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        PolPosition: '政治面貌',
        TimeApplyInParty: '入党时间',
        TimeBeJiji: '列积极实践',
        Trainer: '培养人',
        Dep: '部门',
        Job: '植物',
        State: '状态'
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