<template>
<div>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="考试日期"
      width="180">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="姓名"
      width="180">
      <template slot-scope="scope">
      </template>
    </el-table-column>
    <el-table-column
      prop="name"
    ></el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
    <el-form :model="tableData[rowSelected]">
      <el-form-item label="活动名称" :label-width="formLabelWidth">
        <el-input v-model="tableData[rowSelected].date" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="活动名称" :label-width="formLabelWidth">
        <el-input v-model="tableData[rowSelected].date" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="活动名称" :label-width="formLabelWidth">
        <el-input v-model="tableData[rowSelected].date" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="活动名称" :label-width="formLabelWidth">
        <el-input v-model="tableData[rowSelected].date" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="活动名称" :label-width="formLabelWidth">
        <el-input v-model="tableData[rowSelected].date" auto-complete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
    </div>
  </el-dialog>
</div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      dialogFormVisible: false,
      formLabelWidth: '120px',
      rowSelected: 1
    }
  },
  methods: {
    handleEdit (index, row) {
      this.rowSelected = index
      this.dialogFormVisible = true
    },
    handleDelete (index, row) {
      console.log(index, row)
    }
  },
  props: {
    ID: String
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
.head-pic {
  float: right;
  margin-right: 10px;
}

</style>