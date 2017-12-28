<template>
  <div>
    <el-table
      :data="tableData"
      border
      style="{ width: 400px;  background: red; }"
    >
      <el-table-column prop="date" label="data" fixed></el-table-column>
      <el-table-column prop="name" label="name"></el-table-column>
      <el-table-column prop="country" label="country"></el-table-column>
      <el-table-column prop="address" label="address"></el-table-column>
      <el-table-column prop="address" label="address"></el-table-column>
      <el-table-column label="operation" fixed="right"></el-table-column>
    </el-table>
  </div>
</template>

<style lang="css">
.root {
  width: 120px;
}
</style>


<script>
function initData() {
  const tableData = new Array(4).fill({
    date: '2017-12-28',
    name: '小虎',
    country: 'China',
    address: 'sdfjosdfjosdfsodhf',
  })

  return {
    tableData,
  }
}
export default {
  data: initData,  
}
</script>

