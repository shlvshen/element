<script>
    export default {
        data() {
            return {
                tableData: [
                    {
                        date: '2016-05-03',
                        name: '王小虎',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        tag: '家'
                    },
                    {
                        date: '2016-05-04',
                        name: '王小跳',
                        province: '上海',
                        city: '浦东新区',
                        address: '上海市浦东新区江路 1518 弄',
                        tag: '公司'
                    }
                ],
                columnConfig: [
                    {
                        label: '序号',
                        type: 'index',  // index,selection,expand,selectionIndex
                        width: 100
                    },
                    {
                        label: '个人信息',
                        width: 100
                    },
                    {
                        label: '备注'
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
    <div qwrqrqer>
        <el-table2
            :data="tableData"
            :column-config="columnConfig"
            style="width: 100%">
            <div
                v-for="(item, index) in tableData"
                :key="item.id"
                :slot="'th' + index">
                <span style="padding-right: 10px;">{{ item.date }}</span>
                TAG: {{item.tag}}
            </div>
            <div
                v-for="(item, index) in tableData"
                :key="item.id">
                <div
                    v-for="(col, colIndex) in columnConfig"
                    :key="col.label"
                    slot="td11">
                    123
                </div>
            </div>
        </el-table2>
    </div>
</template>


