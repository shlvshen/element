<template>
  <div class="el-tree" :class="{ 'el-tree--highlight-current': highlightCurrent }">
    <!-- onEditable -->
    <el-row>
      <el-col :span="24">
        <el-button type="primary" style="float: right;" @click="handleOnEdit()">
          <span v-if="!onEditable">编辑</span>
          <span v-if="onEditable">取消编辑</span>
        </el-button>
      </el-col>
    </el-row>
    <!-- search -->
    <el-input
      placeholder="输入关键字进行过滤"
      v-model="filterText" style="margin-bottom: 15px;">
    </el-input>

    <el-collapse-transition>
      <div style="padding-left: 15px;" v-show="config.isAddable && store.isAddable">
        <div class="el-tree-node__add">
          <p style="color: #20a0ff"><i class="el-icon-plus" style="margin-right: 5px;"></i><span>新建目录</span></p>
        </div>
      </div>
    </el-collapse-transition>
    <elt-tree-node
      v-for="child in root.childNodes"
      :node="child"
      :props="props"
      :key="getNodeKey(child)"
      :render-content="renderContent"
      @node-expand="handleNodeExpand">
    </elt-tree-node>
    <div class="el-tree__empty-block" v-if="!root.childNodes || root.childNodes.length === 0">
      <span class="el-tree__empty-text">{{ emptyText }}</span>
    </div>
  </div>
</template>

<script>
  import TreeStore from './model/tree-store';
  import {t} from 'element-ui/src/locale';
  import emitter from 'element-ui/src/mixins/emitter';

  export default {
    name: 'EltTree',

    mixins: [emitter],

    components: {
      EltTreeNode: require('./tree-node.vue')
    },

    data() {
      return {
        store: null,
        root: null,
        currentNode: null,
        onEditable: null,
        filterText: ''
      };
    },

    props: {
      data: {
        type: [Array, Object]
      },
      emptyText: {
        type: String,
        default() {
          return t('el.tree.emptyText');
        }
      },
      nodeKey: String,
      checkStrictly: Boolean,
      defaultExpandAll: Boolean,
      expandOnClickNode: {
        type: Boolean,
        default: true
      },
      autoExpandParent: {
        type: Boolean,
        default: true
      },
      defaultCheckedKeys: Array,
      defaultExpandedKeys: Array,
      renderContent: Function,
      showCheckbox: {
        type: Boolean,
        default: false
      },
      props: {
        default() {
          return {
            children: 'children',
            label: 'label',
            icon: 'icon',
            disabled: 'disabled'
          };
        }
      },
      lazy: {
        type: Boolean,
        default: false
      },
      highlightCurrent: Boolean,
      currentNodeKey: [String, Number],
      load: Function,
      filterNodeMethod: Function,
      accordion: Boolean,
      indent: {
        type: Number,
        default: 16
      },
      config: {
        type: Object,
        default() {
          return {};
        }
      }
    },

    computed: {
      children: {
        set(value) {
          this.data = value;
        },
        get() {
          return this.data;
        }
      }
    },

    watch: {
      defaultCheckedKeys(newVal) {
        this.store.defaultCheckedKeys = newVal;
        this.store.setDefaultCheckedKey(newVal);
      },
      defaultExpandedKeys(newVal) {
        this.store.defaultExpandedKeys = newVal;
        this.store.setDefaultExpandedKeys(newVal);
      },
      currentNodeKey(newVal) {
        this.store.setCurrentNodeKey(newVal);
        this.store.currentNodeKey = newVal;
      },
      data(newVal) {
        this.store.setData(newVal);
      }
    },

    methods: {
      handleOnEdit() {
        this.onEditable = !this.onEditable;
      },
      filter(value) {
        if (!this.filterNodeMethod) throw new Error('[Tree] filterNodeMethod is required when filter');
        this.store.filter(value);
      },
      edit(value) {
        // if (!this.editorMethod) throw new Error('[Tree] filterNodeMethod is required when filter');
        this.store.edit(value);
      },
      getNodeKey(node, index) {
        const nodeKey = this.nodeKey;
        if (nodeKey && node) {
          return node.data[nodeKey];
        }
        return index;
      },
      getCheckedNodes(leafOnly) {
        return this.store.getCheckedNodes(leafOnly);
      },
      getCheckedKeys(leafOnly) {
        return this.store.getCheckedKeys(leafOnly);
      },
      setCheckedNodes(nodes, leafOnly) {
        if (!this.nodeKey) throw new Error('[Tree] nodeKey is required in setCheckedNodes');
        this.store.setCheckedNodes(nodes, leafOnly);
      },
      setCheckedKeys(keys, leafOnly) {
        if (!this.nodeKey) throw new Error('[Tree] nodeKey is required in setCheckedNodes');
        this.store.setCheckedKeys(keys, leafOnly);
      },
      setChecked(data, checked, deep) {
        this.store.setChecked(data, checked, deep);
      },
      handleNodeExpand(nodeData, node, instance) {
        this.broadcast('ElTreeNode', 'tree-node-expand', node);
        this.$emit('node-expand', nodeData, node, instance);
      }
    },

    created() {
      this.isTree = true;

      this.store = new TreeStore({
        key: this.nodeKey,
        data: this.data,
        lazy: this.lazy,
        props: this.props,
        load: this.load,
        currentNodeKey: this.currentNodeKey,
        checkStrictly: this.checkStrictly,
        defaultCheckedKeys: this.defaultCheckedKeys,
        defaultExpandedKeys: this.defaultExpandedKeys,
        autoExpandParent: this.autoExpandParent,
        defaultExpandAll: this.defaultExpandAll,
        filterNodeMethod: this.filterNodeMethod,
        config: this.config,
        isAddable: null
      });

      this.root = this.store.root;
    }
  };
</script>
