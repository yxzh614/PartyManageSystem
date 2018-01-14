<template>
  <div>
    <div>
      <p>申请入党人员信息</p>
    </div>
    <el-table
    ref="multipleTable"
    :data="tableData"
    style="width: 100%">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="memberType"
      label="人员类别"
      :filters="[{ text: '教师', value: '教师' }, { text: '本科生', value: '本科生' }, {text: '研究生', value:'研究生'}]"
      :filter-method="filterMemberType">
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleDetail(scope.$index, scope.row)">详细信息</el-button>
      </template>
    </el-table-column>
  </el-table>
    <div style="margin-top: 20px">
    <el-button @click="cancelSelection()">录入阶段信息</el-button>
    <el-button @click="cancelSelection()">删除</el-button>
  </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [{
        date: '1500000000',
        name: '王小虎',
        memberType: '教师'
      }, {
        date: '1500000000',
        name: '王小虎',
        memberType: '研究生'
      }, {
        date: '1500000000',
        name: '王小虎',
        memberType: '教师'
      }, {
        date: '1500000000',
        name: '王小虎',
        memberType: '本科生'
      }]
    }
  },
  methods: {
    handleDetail (index, row) {
      console.log(index)
      console.log(row)
      this.$router.push({name: 'MemberDevApplicantDetail', params: {ID: 40}})
    },
    filterMemberType (value, row) {
      return row.memberType === value
    }
  }
}
</script>

<style>

</style>
