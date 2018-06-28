<template>
    <div ref="eltable2">
        <table 
            cellspacing="0"
            cellpadding="0"
            border="0"
            width="100%"
            class="el-table2">
            <thead class="thead-dark" v-html="thHtml">
                <!-- <tr>
                    <th v-if="expandable" width="40"></th>
                    <th 
                        v-for="col in columnConfig"
                        :key="col.label"
                        :width="col.resWidth">
                        <div class="cell" :style="'width:' + col.resWidth + 'px'">
                            <el-checkbox v-if="col.type=='index' && optional"></el-checkbox>
                            {{col.label}}
                        </div>
                    </th>
                </tr> -->
            </thead>
            <tbody v-if="data && data.length > 0">
                <tr v-for="(item, index) in data"
                    :key="item.id"
                    class="tr-first">
                    <td colspan="999">
                        <div :class="{'active': item.isExpand, 'table-row': true}" ref="tablerow">
                            <table 
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
                                            v-if="expandable" 
                                            width="40"
                                            @click="expand(item, $event)">
                                            <div class="cell" style="width: 40px;">
                                                <div :class="item.isExpand ? 'el-table__expand-icon--expanded' : 'el-table__expand-icon'">
                                                    <i class="el-icon el-icon-caret-right"></i>
                                                </div>
                                            </div>
                                        </td>
                                        <td 
                                            v-for="col in columnConfig"
                                            :key="col.label"
                                            :width="col.resWidth">
                                            <div class="cell" :style="'width:' + col.resWidth + 'px'">
                                                <!-- 普通slot -->
                                                <slot :name="'td' + index + col.label"></slot>
                                                <!-- 序号 -->
                                                <div v-if="col.type == 'index'">
                                                    <el-checkbox v-if="optional"></el-checkbox>
                                                    {{index + 1}}
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div 
                                v-if="expandable && item.isExpand"
                                class="expand-con"
                                :style="'width:' + tableWidth + 'px'">
                                <slot :name="'expand' + index"></slot>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="el-table2-no-data" v-if="data && data.length <= 0">暂无数据</div>
        <div class="el-table2-loding" v-if="!data">
            <svg class="circular" viewBox="25 25 50 50">
                <circle class="path" cx="50" cy="50" r="20" fill="none"/>
            </svg>
            <p>正在加载中...</p>
        </div>
    </div>
</template>

<script src="./table.js"></script>
