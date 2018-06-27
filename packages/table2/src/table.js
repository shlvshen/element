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
            tableWidth: 0
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

            this.renderExpand();
            window.onresize = function () {
                _this.renderExpand();
            }
        },
        expand(item, e) {
            item.isExpand = !item.isExpand;
            this.$emit('table-expand-event', item, e);
        },
        renderExpand() {
            this.expandWidthList = [];
            this.$refs.tablerow.forEach(dom => {
                this.tableWidth = this.$refs.eltable2.offsetWidth;
            })
        },
        // renderThead() {
        //     var html = '';
        //     var expandTh = '';
        //     var dataTh = '';
        //     if (this.expandable) {
        //         expandTh = '<th width=40></th>';
        //     }
        //     this.columnConfig.forEach(config => {
        //         dataTh += '<th width='+config.width+'><div class="cell" style="width: '+config.width+'px">'+config.label+'</div></th>';
        //     });
        //     html = '<tr>' + expandTh + dataTh + '</tr>';
        //     return html;
        // }
    },
    mounted() {
        this.init();
    }
}
