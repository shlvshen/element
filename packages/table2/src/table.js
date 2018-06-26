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
        }
    },
    data() {
        return {
            expandWidthList: []
        }
    },
    methods: {
        init() {
            if (!this.data) {
                this.data = [{}];
            }
            this.data.forEach(item => {
                this.$set(item, 'isExpand', false);
            });
        },
        expand(item) {
            item.isExpand = !item.isExpand;
        },
        renderExpand() {
            this.expandWidthList = [];
            this.$refs.tablerow.forEach(dom => {
                this.expandWidthList.push(dom.clientWidth);
            })
        }
    },
    mounted() {
        this.init();
        this.renderExpand();
    }
}
