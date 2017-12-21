<template>
<div>
  <el-table
    ref="multipleTable"
    :data="tableData3"
    border
    tooltip-effect="dark"
    multi-header
    @selection-change="handleSelectionChange">
    <el-table-column type="selectionIndex"></el-table-column>
    <el-table-column label="经销商"></el-table-column>
    <el-table-column label="生产批号"></el-table-column>
    <el-table-column label="工程地址"></el-table-column>
    <el-table-column label="品名/系列"></el-table-column>
    <el-table-column label="颜色"></el-table-column>
    <el-table-column label="合同信息">
      <el-table-column label="合同号"></el-table-column>
      <el-table-column label="客户信息"></el-table-column>
      <el-table-column label="面积"></el-table-column>
      <el-table-column label="日期"></el-table-column>
    </el-table-column>
    <el-table-column label="流程">
      <el-table-column label="框下料"></el-table-column>
    </el-table-column>
    <el-table-column label="流程">
      <el-table-column label="扇加工"></el-table-column>
      <el-table-column label="扇组装"></el-table-column>
    </el-table-column>
    <el-table-column label="流程">
      <el-table-column label="作色"></el-table-column>
      <el-table-column label="组装"></el-table-column>
      <el-table-column label="包装"></el-table-column>
    </el-table-column>
    <el-table-column label="材料加工进度"></el-table-column>
    <el-table-column label="交货日期"></el-table-column>
    <el-table-column label="工作组"></el-table-column>
    <el-table-column label="包装数量"></el-table-column>
    <el-table-column label="合同金额"></el-table-column>
    <el-table-column label="已付金额"></el-table-column>
  </el-table>
</div>
</template>

<style lang="css">
.el-table__body-wrapper {
  max-height: 500px !important;
}
</style>


<script>
function initData() {
  const data = new Array(10)
  data.fill({})
  const tableData = data.map(v => {
    const sub = new Array(5)
    sub.fill({
      code: '2304304jodsjfoj',
      name: '把手',
      color: '红色',
      length: '100',
    }) 
    return {
      code: '2304304jodsjfoj',
      name: '把手',
      sub: sub,
    }
  })
  
  return {
           tableData3: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        multipleSelection: []
      }
}

function toggle() {
  console.log(this.$refs.table)
  // this.$refs.table.toggleRowSelection(0)
  this.$refs.multipleTable.toggleRowSelection(this.tableData3[0])
}

export default {
  data: initData,  
  methods: {
    toggle,
          toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            console.log(row)
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
  }
}
</script>
