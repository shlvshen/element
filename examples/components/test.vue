<template>
  <div>
    <el-table
      :data="tableData"
      border
    >
      <el-table-column type="expand">
        <template scope="scope">
          <el-table :data="scope.row.sub" size="small" border multi-header>
            <el-table-column label="名字" prop="name"></el-table-column>
            <el-table-column label="编号" prop="code"></el-table-column>
            <el-table-column label="其他">
              <el-table-column label="颜色" prop="color"></el-table-column>
              <el-table-column label="长度" prop="length"></el-table-column>
            </el-table-column>
          </el-table>
        </template>
      </el-table-column>
      <el-table-column label="名字" prop="name"></el-table-column>
      <el-table-column label="编号" prop="code"></el-table-column>
    </el-table>
  </div>
</template>

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
   tableData,
  }
}
export default {
  data: initData,  
}
</script>
