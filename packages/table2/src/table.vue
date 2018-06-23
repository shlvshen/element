<template>
    <div class="el-table el-table2">
        <table 
            cellspacing="0"
            cellpadding="0"
            border="0"
            width="100%"
            class="el-table-container">
            <thead>
                <tr>
                    <th 
                        v-for="col in columnConfig"
                        :key="col.label"
                        :width="col.width">
                        <div class="cell" :style="'width:' + col.width + 'px'">{{col.label}}</div>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr 
                    v-for="(item, index) in data"
                    :key="item.id">
                    <td colspan="999">
                        <!-- v-for="col in columnConfig"
                        :key="col.label" -->
                        <table 
                            class="el-table-row"
                            cellspacing="0"
                            cellpadding="0"
                            border="0"
                            width="100%">
                            <thead>
                                <tr>
                                    <th colspan="999">
                                        <div class="cell">
                                            <slot :name="'th' + index"></slot>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td 
                                        v-for="(col2, colIndex) in columnConfig"
                                        :key="col2.label"
                                        :width="col2.width">
                                        <div class="cell" :style="'width:' + col2.width + 'px'">
                                            <slot :name="'td' + index + colIndex"></slot>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script src="./table.js"></script>
