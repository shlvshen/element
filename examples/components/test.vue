<template>
  <div>
    <el-date-picker type="datetime"></el-date-picker>
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
