export default {
    name: 'ElTable2',
    props: {
        data: {
            type: Array,
            default: function() {
              return [];
            }
        },
        columnConfig: {
            type: Array,
            default: function() {
              return [];
            }
        },
        optional: {
            type: Boolean,
            default: false
        },
        expandable: {
            type: Boolean,
            default: false
        },
        expandEvent: Function
    },
    data() {
        return {
            tableWidth: 0,
            thHtml: ''
        }
    },
    methods: {
        init() {
            var _this = this;
            if (!this.data) {
                this.data = [{}];
            }
            this.data.forEach(item => {
                this.$set(item, 'isExpand', false);
            });

            // 设置表格宽度
            this.renderTable();
            window.onresize = function () {
                _this.renderTable();
            }
        },
        expand(item, e) {
            item.isExpand = !item.isExpand;
            this.$emit('table-expand-event', item, e);
        },
        renderTable() {
            this.tableWidth = this.$refs.eltable2.offsetWidth;

            var totalWidth = 0;
            // 可用宽度，是总宽度-expand的宽度
            var usableWidth = this.tableWidth - 40;
            this.columnConfig.forEach(col => {
                col.width = col.width || 10;
                totalWidth += parseFloat(col.width);
            });

            this.columnConfig.forEach(col => {
                col.width = col.width || 10;
                // -2为减去边框宽度
                col.resWidth = col.width/totalWidth * usableWidth - 2;
            });
            this.renderThead();
        },
        renderThead() {
            var expandTh = '';
            var dataTh = '';

            if (this.expandable) {
                expandTh = '<th width=40></th>';
            }
            this.columnConfig.forEach(config => {
                dataTh += '<th width='+config.resWidth+'><div class="cell" style="width:'+config.resWidth+'px">'+config.label+'</div></th>'
            });

            this.thHtml = '<tr>'+expandTh+dataTh+'</tr>';
        }
    },
    mounted() {
        this.init();
    }
}
