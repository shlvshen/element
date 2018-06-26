<script>
    export default {
        data() {
            return {
                tableData: [
                    {
                        date: '2016-05-03',
                        name: '王小虎',
                        gender: '男',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        tag: '家',
                        remark: '备注1'
                    },
                    {
                        date: '2016-05-04',
                        name: '王小跳',
                        gender: '女',
                        province: '上海',
                        city: '浦东新区',
                        address: '上海市浦东新区江路 1518 弄',
                        tag: '公司',
                        remark: '备注2'
                    }
                ],
                tableData2: [
                    {
                        date: '2016-05-03',
                        name: '王小虎',
                        gender: '男',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        tag: '家',
                        remark: '备注1',
                        detail: [
                            {
                                color: '红色',
                                food: '西瓜'
                            },
                            {
                                color: '白色',
                                food: '糖'
                            }
                        ]
                    },
                    {
                        date: '2016-05-04',
                        name: '王小跳',
                        gender: '女',
                        province: '上海',
                        city: '浦东新区',
                        address: '上海市浦东新区江路 1518 弄',
                        tag: '公司',
                        remark: '备注2',
                        detail: [
                            {
                                color: '黄色',
                                food: '草莓'
                            }
                        ]
                    }
                ],
                columnConfig: [
                    {
                        label: '个人信息',
                        width: 150
                    },
                    {
                        label: '住址',
                        width: 280
                    },
                    {
                        label: '备注'
                    }
                ],
                columnConfig2: [
                    {
                        label: '序号',
                        type: 'index',
                        width: 80
                    },
                    {
                        label: '个人信息',
                        width: 150
                    },
                    {
                        label: '住址',
                        width: 280
                    },
                    {
                        label: '备注'
                    }
                ]
            }
        },
        methods: {
            expandEvent(item, e) {
                console.log(item, e);
            }
        },
        mounted() {

        }
    }
</script>
<style></style>
## Table 表格二号

用于展示信息比较多的表格，可展开详情

### 基础表格

基础的表格展示用法。

:::demo `el-table2`两个重要的配置项`columnConfig`和`data`，`columnConfig`为一个对象数组，用`label`属性定义表格列名，用`width`定义表格宽度。`el-table2`元素中第一个`slot`为子表格头，后面的`slot`为子表格`td`。
```html
<template>
    <div>
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
                :key="item.id"
                :slot="'td' + index + '个人信息'">
                <div>姓名：{{item.name}}</div>
                <div>性别：{{item.gender}}</div>
            </div>
            <div
                v-for="(item, index) in tableData"
                :key="item.id"
                :slot="'td' + index + '住址'">
                <div>省：{{item.province}}</div>
                <div>市：{{item.city}}</div>
                <div>详细：{{item.address}}</div>
            </div>
            <div
                v-for="(item, index) in tableData"
                :key="item.id"
                :slot="'td' + index + '备注'">
                {{item.remark}}
            </div>
        </el-table2>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                tableData: [
                    {
                        date: '2016-05-03',
                        name: '王小虎',
                        gender: '男',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        tag: '家',
                        remark: '备注1'
                    },
                    {
                        date: '2016-05-04',
                        name: '王小跳',
                        gender: '女',
                        province: '上海',
                        city: '浦东新区',
                        address: '上海市浦东新区江路 1518 弄',
                        tag: '公司',
                        remark: '备注2'
                    }
                ],
                columnConfig: [
                    {
                        label: '个人信息',
                        width: 150
                    },
                    {
                        label: '住址',
                        width: 280
                    },
                    {
                        label: '备注'
                    }
                ]
            }
        }
    }
</script>
```
:::

### 带序号的表格

带序号的表格用法

:::demo 此处与基础表格不同的就是`columnConfig`配置项，加了一个对象，其`type`为`index`
```html
<template>
    <div>
        <el-table2
            :data="tableData"
            :column-config="columnConfig2"
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
                :key="item.id"
                :slot="'td' + index + '个人信息'">
                <div>姓名：{{item.name}}</div>
                <div>性别：{{item.gender}}</div>
            </div>
            <div
                v-for="(item, index) in tableData"
                :key="item.id"
                :slot="'td' + index + '住址'">
                <div>省：{{item.province}}</div>
                <div>市：{{item.city}}</div>
                <div>详细：{{item.address}}</div>
            </div>
            <div
                v-for="(item, index) in tableData"
                :key="item.id"
                :slot="'td' + index + '备注'">
                {{item.remark}}
            </div>
        </el-table2>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                columnConfig: [
                    {
                        label: '序号',
                        type: 'index',
                        width: 80
                    },
                    {
                        label: '个人信息',
                        width: 150
                    },
                    {
                        label: '住址',
                        width: 280
                    },
                    {
                        label: '备注'
                    }
                ]
            }
        }
    }
</script>
```
:::

### 可选择的表格(未完善)

可选择的表格用法

:::demo 此处与基础表格不同的就是`el-table2`添加了一个配置项`optional`，该配置为`true`代表表格需要可选择，此功能未完善
```html
<template>
    <div>
        <el-table2
            :data="tableData"
            :column-config="columnConfig2"
            optional
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
                :key="item.id"
                :slot="'td' + index + '个人信息'">
                <div>姓名：{{item.name}}</div>
                <div>性别：{{item.gender}}</div>
            </div>
            <div
                v-for="(item, index) in tableData"
                :key="item.id"
                :slot="'td' + index + '住址'">
                <div>省：{{item.province}}</div>
                <div>市：{{item.city}}</div>
                <div>详细：{{item.address}}</div>
            </div>
            <div
                v-for="(item, index) in tableData"
                :key="item.id"
                :slot="'td' + index + '备注'">
                {{item.remark}}
            </div>
        </el-table2>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                columnConfig: [
                    {
                        label: '序号',
                        type: 'index',
                        width: 80
                    },
                    {
                        label: '个人信息',
                        width: 150
                    },
                    {
                        label: '住址',
                        width: 280
                    },
                    {
                        label: '备注'
                    }
                ]
            }
        }
    }
</script>
```
:::

### 可展开的表格

可展开的表格用法

:::demo 添加了一个`slot`，name为`expand`
```html
<template>
    <div>
        <el-table2
            :data="tableData2"
            :column-config="columnConfig2"
            expandable
            style="width: 100%"
            v-on:table-expand-event="expandEvent">
            <div
                v-for="(item, index) in tableData2"
                :key="item.id"
                :slot="'th' + index">
                <span style="padding-right: 10px;">{{ item.date }}</span>
                TAG: {{item.tag}}
            </div>

            <div
                v-for="(item, index) in tableData2"
                :key="item.id"
                :slot="'td' + index + '个人信息'">
                <div>姓名：{{item.name}}</div>
                <div>性别：{{item.gender}}</div>
            </div>
            <div
                v-for="(item, index) in tableData2"
                :key="item.id"
                :slot="'td' + index + '住址'">
                <div>省：{{item.province}}</div>
                <div>市：{{item.city}}</div>
                <div>详细：{{item.address}}</div>
            </div>
            <div
                v-for="(item, index) in tableData2"
                :key="item.id"
                :slot="'td' + index + '备注'">
                {{item.remark}}
            </div>

            <div
                v-for="(item, index) in tableData2"
                :key="item.id"
                :slot="'expand' + index">
                <el-table
                    :data="item.detail"
                    style="width: 100%;">
                    <el-table-column prop="color" label="最喜欢的颜色" width="200"></el-table-column>
                    <el-table-column prop="color" label="最喜欢的颜色" width="200"></el-table-column>
                    <el-table-column prop="color" label="最喜欢的颜色" width="200"></el-table-column>
                    <el-table-column prop="color" label="最喜欢的颜色" width="200"></el-table-column>
                    <el-table-column prop="color" label="最喜欢的颜色" width="200"></el-table-column>
                    <el-table-column prop="color" label="最喜欢的颜色" width="200"></el-table-column>
                    <el-table-column prop="color" label="最喜欢的颜色" width="200"></el-table-column>
                    <el-table-column prop="color" label="最喜欢的颜色" width="200"></el-table-column>
                    <el-table-column prop="food" label="最喜欢的食物"></el-table-column>
                </el-table>
            </div>
        </el-table2>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                columnConfig: [
                    {
                        label: '序号',
                        type: 'index',
                        width: 80
                    },
                    {
                        label: '个人信息',
                        width: 150
                    },
                    {
                        label: '住址',
                        width: 280
                    },
                    {
                        label: '备注'
                    }
                ],
                tableData2: [
                    {
                        date: '2016-05-03',
                        name: '王小虎',
                        gender: '男',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        tag: '家',
                        remark: '备注1',
                        detail: [
                            {
                                color: '红色',
                                food: '西瓜'
                            },
                            {
                                color: '黄色',
                                food: '糖'
                            }
                        ]
                    },
                    {
                        date: '2016-05-04',
                        name: '王小跳',
                        gender: '女',
                        province: '上海',
                        city: '浦东新区',
                        address: '上海市浦东新区江路 1518 弄',
                        tag: '公司',
                        remark: '备注2',
                        detail: [
                            {
                                color: '红色',
                                food: '西瓜'
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>
```
:::


### Table Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| data | 显示的数据 | array | — | — |
| column-config | 表格列配置 | array | — | — |
| optional | 是否需要checkbox | boolean | — | false |
| expandable | 是否需要可展开 | boolean | — | false |


