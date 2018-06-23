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
            
        }
    },
    methods: {
        init() {
            console.log(this.data);
            if (!this.data) {
                this.data = [{}];
            }
            this.data.forEach(item => {
                this.$set(item, 'isExpand', false);
            });
        },
        expand(item) {
            item.isExpand = !item.isExpand;
        }
    },
    mounted() {
        this.init();
    }
}
