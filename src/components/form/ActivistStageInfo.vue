<template>
<div>
	<el-button>编辑</el-button>
	<el-form label-position="left" inline class="demo-table-expand">
		<el-form-item label="支部确定入党积极分子会议">
			<span>{{form.PolPosition}}</span>
		</el-form-item>
		<el-form-item label="入党积极分子培训时间">
			<span>{{form.TimeApplyInParty}}</span>
		</el-form-item>
		<el-form-item label="团推优时间">
			<span>{{form.TimeBeJiji}}</span>
		</el-form-item>
		<el-form-item label="培训成绩">
			<span>{{form.Trainer}}</span>
		</el-form-item>
	</el-form>
</div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        PolPosition: '1',
        TimeApplyInParty: '2',
        TimeBeJiji: '3',
        Trainer: '4'
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