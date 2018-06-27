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
            expandWidthList: []
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

            this.renderTable();
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
                this.expandWidthList.push(dom.clientWidth);
            })
        },
        renderTable() {
            
        }
    },
    mounted() {
        this.init();
    }
}
