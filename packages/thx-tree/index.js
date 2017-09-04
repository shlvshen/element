import tree from './src/tree.vue';

/* istanbul ignore next */
tree.install = function(Vue) {
  Vue.component(tree.name, tree);
};

export default tree;
