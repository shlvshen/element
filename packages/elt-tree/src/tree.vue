<template>
  <div class="el-tree" :class="{ 'el-tree--highlight-current': highlightCurrent }">
    <!-- onEditable -->
    <el-row v-if="config.isEditable">
      <el-col :span="24">
        <div class="el-tree__edit" @click.stop="handleOnEdit()"
             :style="{'padding-right': indent + 'px'}">
          <span v-if="!store.onEditable"><i class="iconfont" style="margin-right: 5px;">&#xe648;</i>编辑</span>
          <span v-if="store.onEditable">取消编辑</span>
        </div>
      </el-col>
    </el-row>
    <!-- search -->
    <el-row class="el-tree__search" v-if="config.isSearchable"
            :style="{'padding-left': indent + 'px', 'padding-right': indent + 'px'}">
      <el-input
        v-model="filterText"
        :placeholder="config.placeholder">
      </el-input>
    </el-row>

    <el-collapse-transition>
      <div :style="{'padding-left': ( 2 * indent ) + 'px'}" v-show="isAddable">
        <div class="el-tree-node__add" @click.stop="handleAppendNode">
          <i class="iconfont">&#xe69b;</i>
          <span>新建目录</span>
        </div>
      </div>
    </el-collapse-transition>
    <elt-tree-node
      v-for="child in root.childNodes"
      :node="child"
      :props="props"
      :key="getNodeKey(child)"
      :render-content="renderContent"
      :max-level="config.maxLevel"
      @node-expand="handleNodeExpand">
    </elt-tree-node>
    <div class="el-tree__loading" v-if="!root.data">
        <i class="el-icon-loading el-tree__loading-icon"></i>
        <div class="el-tree__loading-text">{{ loadingText }}</div>
    </div>
    <div class="el-tree__empty-block" v-if="root.data && root.childNodes.length === 0">
      <span class="el-tree__empty-text">{{ emptyText }}</span>
    </div>
  </div>
</template>
<style type="scss">
  @font-face {
    font-family: 'iconfont';  /* project id 313336 */
    src: url('//at.alicdn.com/t/font_313336_5ilrj33g5b2ihpvi.eot');
    src: url('//at.alicdn.com/t/font_313336_5ilrj33g5b2ihpvi.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_313336_5ilrj33g5b2ihpvi.woff') format('woff'),
    url('//at.alicdn.com/t/font_313336_5ilrj33g5b2ihpvi.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_313336_5ilrj33g5b2ihpvi.svg#iconfont') format('svg');
  }
  .iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
    /* font-size: 18px; */
  }
</style>
<script>
  import TreeStore from './model/tree-store';
  import {t} from 'thx-knight/src/locale';
  import Emitter from 'thx-knight/src/mixins/emitter';

  export default {
    name: 'EltTree',

    mixins: [Emitter],

    components: {
      EltTreeNode: require('./tree-node.vue')
    },

    data() {
      return {
        store: null,
        root: null,
        currentNode: null,
        filterText: '',
        isAddable: false
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
      loadingText: {
        type: String,
        default() {
          return t('el.tree.loadingText');
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
      },
      filterText(val) {
        this.filter(val);
      }
    },

    methods: {
      handleOnEdit() {
        this.store.onEditable = !this.store.onEditable;
        this.isAddable = this.config.isAddable && this.store.onEditable;
        this.store.edit();
      },
      filter(value) {
        if (!this.filterNodeMethod) throw new Error('[Tree] filterNodeMethod is required when filter');
        this.store.filter(value);
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
      },
      handleAppendNode() {
        var onEditable = this.store.onEditable;
        if (onEditable) {
          this.store.append({
            id: '',
            label: '',
            onEditable: true,
            isAddable: onEditable && this.config.isAddable,
            isEditable: onEditable && this.config.isEditable,
            isDelable: onEditable && this.config.isDelable,
            isShowEditBar: this.isEditable || this.isDelable,
            children: null
          }, null, 0);
        };
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
        onEditable: false,
        isAddable: null
      });

      this.root = this.store.root;
    }
  };
</script>
