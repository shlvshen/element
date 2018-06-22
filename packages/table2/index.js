import table from './src/table.vue';

/* istanbul ignore next */
table.install = function(Vue) {
  Vue.component(table.name, table);
};

export default table;
