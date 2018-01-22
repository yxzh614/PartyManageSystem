<template>
  <div>
    <div>
      <p>积极分子人员信息</p>
    </div>
    <div style="margin-top: 20px">
      <el-button type="primary" @click="cancelSelection()"><i class="el-icon-circle-plus"/> 新建</el-button>
      <el-button @click="cancelSelection()">导入</el-button>
      <el-button @click="cancelSelection()">导出</el-button>
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
        <el-button  type="text"
          size="mini"
          @click="handleDetail(scope.$index, scope.row)">详细信息</el-button>
      </template>
    </el-table-column>
  </el-table>
    <div style="margin-top: 20px">
      <el-button @click="cancelSelection()">录入阶段信息</el-button>
      <el-button @click="cancelSelection()">删除</el-button>
    </div>
    <el-collapse-transition>
      <div v-show="show3">
      <el-button @click="cancelSelection()">打勾时显示出来</el-button>
      </div>
    </el-collapse-transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [{
        date: '1500000000',
        name: '王小虎2',
        memberType: '教师'
      }, {
        date: '1500000000',
        name: '王小虎2',
        memberType: '研究生'
      }, {
        date: '1500000000',
        name: '王小虎2',
        memberType: '教师'
      }, {
        date: '1500000000',
        name: '王小虎2',
        memberType: '本科生'
      }],
      show3: false
    }
  },
  methods: {
    handleDetail (index, row) {
      console.log(index)
      console.log(row)
      this.$router.push({name: 'MemberDevActivistDetail', params: {ID: 40, Type: row.memberType}})
    },
    filterMemberType (value, row) {
      return row.memberType === value
    },
    cancelSelection () {
      this.show3 = !this.show3
    }
  }
}
</script>

<style>

</style>
