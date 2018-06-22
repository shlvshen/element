<script>
    export default {
        data() {
            return {
                tableData: [
                    {
                        date: '2016-05-03',
                        name: '王小虎王小虎王小虎王小虎王小虎王小虎王小虎王小虎王小虎',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        zip: 200333,
                        tag: '家'
                    }
                ]
            }
        }
    }
</script>
<style></style>
## Table 表格二号

用于展示信息比较多的表格，可展开详情

### 基础表格

基础的表格展示用法。

:::demo 当`el-table`元素中注入`data`对象数组后，在`el-table-column`中用`prop`属性来对应对象中的键名即可填入数据，用`label`属性来定义表格的列名。可以使用`width`属性来定义列宽。
```html
<template>
    <div>
        <el-table2
            :data="tableData"
            style="width: 100%">
            
        </el-table2>
    </div>
</template>


