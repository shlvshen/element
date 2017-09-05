<template>
  <div class="el-tree-node"
    @click.stop="handleClick"
    v-show="node.visible"
    :class="{
      'is-expanded': childNodeRendered && expanded,
      'is-current': tree.store.currentNode === node,
      'is-hidden': !node.visible
    }">
    <div class="el-tree-node__content"
      :style="{ 'padding-left': (node.level - 1) * tree.indent + 'px' }">
      <span
        class="el-tree-node__expand-icon"
        @click.stop="handleExpandIconClick"
        :class="{ 'is-leaf': node.isLeaf, expanded: !node.isLeaf && expanded }">
      </span>
      <el-checkbox
        v-if="showCheckbox"
        v-model="node.checked"
        :indeterminate="node.indeterminate"
        :disabled="!!node.disabled"
        @click.native.stop
        @change="handleCheckChange">
      </el-checkbox>
      <span
        v-if="node.loading"
        class="el-tree-node__loading-icon el-icon-loading">
      </span>
      <!-- <node-content :node="node"></node-content> -->
      <span class="el-tree-node__label" v-show="!node.onEditable">{{ node.label }}</span>
      <el-input :value="node.label" placeholder="" v-show="node.onEditable"
                class="el-tree-node__label" style="width: auto;"
                @blur="handleCompleteEdit($event)" autofocus></el-input>
      <el-dropdown style="float: right;"
                   :style="{'padding-right': tree.indent + 'px'}"
                   @click.native.stop
                   v-show="node.isShowEditBar"
                   @command="handleNodeEditable">
        <span class="el-dropdown-link"><i class="iconfont">&#xe649;</i></span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item v-show="node.isEditable" command="onEditable">重命名</el-dropdown-item>
          <el-dropdown-item v-show="node.isDelable" command="onDelable">删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <el-collapse-transition>
      <div :style="{ 'padding-left': (node.level + 1) * tree.indent + 'px' }"
           v-show="node.isAddable">
        <div class="el-tree-node__add" @click.stop="handleAppendNode(node)">
          <i class="iconfont">&#xe69b;</i>
          <span>新建目录</span>
        </div>
      </div>
    </el-collapse-transition>
    <el-collapse-transition>
      <div
        class="el-tree-node__children"
        v-show="expanded">
        <elt-tree-node
          :render-content="renderContent"
          v-for="child in node.childNodes"
          :key="getNodeKey(child)"
          :node="child"
          @node-expand="handleChildNodeExpand">
        </elt-tree-node>
      </div>
    </el-collapse-transition>
  </div>
</template>

<style type="scss">
  @font-face {
    font-family: 'iconfont';  /* project id 313336 */
    src: url('//at.alicdn.com/t/font_313336_sf8sihacyx6iggb9.eot');
    src: url('//at.alicdn.com/t/font_313336_sf8sihacyx6iggb9.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_313336_sf8sihacyx6iggb9.woff') format('woff'),
    url('//at.alicdn.com/t/font_313336_sf8sihacyx6iggb9.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_313336_sf8sihacyx6iggb9.svg#iconfont') format('svg');
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

<script type="text/jsx">
  import ElCollapseTransition from 'element-ui/src/transitions/collapse-transition';
  import ElCheckbox from 'element-ui/packages/checkbox';
  import emitter from 'element-ui/src/mixins/emitter';

  export default {
    name: 'EltTreeNode',

    componentName: 'EltTreeNode',

    mixins: [emitter],

    props: {
      node: {
        default() {
          return {};
        }
      },
      props: {},
      renderContent: Function
    },

    components: {
      ElCollapseTransition,
      ElCheckbox,
      NodeContent: {
        props: {
          node: {
            required: true
          }
        },
        render(h) {
          const parent = this.$parent;
          const node = this.node;
          const data = node.data;
          const store = node.store;
          return (
            parent.renderContent
              ? parent.renderContent.call(parent._renderProxy, h, { _self: parent.tree.$vnode.context, node, data, store })
              : <span class="el-tree-node__label">{ this.node.label }</span>
          );
        }
      }
    },

    data() {
      return {
        tree: null,
        expanded: false,
        childNodeRendered: false,
        showCheckbox: false,
        oldChecked: null,
        oldIndeterminate: null
      };
    },

    watch: {
      'node.indeterminate'(val) {
        this.handleSelectChange(this.node.checked, val);
      },

      'node.checked'(val) {
        this.handleSelectChange(val, this.node.indeterminate);
      },

      'node.expanded'(val) {
        this.expanded = val;
        if (val) {
          this.childNodeRendered = true;
        }
      }
    },

    methods: {
      getNodeKey(node, index) {
        const nodeKey = this.tree.nodeKey;
        if (nodeKey && node) {
          return node.data[nodeKey];
        }
        return index;
      },

      handleSelectChange(checked, indeterminate) {
        if (this.oldChecked !== checked && this.oldIndeterminate !== indeterminate) {
          this.tree.$emit('check-change', this.node.data, checked, indeterminate);
        }
        this.oldChecked = checked;
        this.indeterminate = indeterminate;
      },

      handleClick() {
        const store = this.tree.store;
        store.setCurrentNode(this.node);
        this.tree.$emit('current-change', store.currentNode ? store.currentNode.data : null, store.currentNode);
        this.tree.currentNode = this;
        if (this.tree.expandOnClickNode) {
          this.handleExpandIconClick();
        }
        this.tree.$emit('node-click', this.node.data, this.node, this);
      },

      handleExpandIconClick() {
        if (this.node.isLeaf) return;
        if (this.expanded) {
          this.tree.$emit('node-collapse', this.node.data, this.node, this);
          this.node.collapse();
        } else {
          this.node.expand();
          this.$emit('node-expand', this.node.data, this.node, this);
        }
      },

      handleCheckChange(ev) {
        this.node.setChecked(ev.target.checked, !this.tree.checkStrictly);
      },

      handleChildNodeExpand(nodeData, node, instance) {
        this.broadcast('ElTreeNode', 'tree-node-expand', node);
        this.tree.$emit('node-expand', nodeData, node, instance);
      },

      handleCompleteEdit(event) {
        const node = this.node;
        node.data.label = event.target.value;
        node.onEditable = false;
        this.tree.$emit('node-label-change', node.data, node, this);
      },

      handleNodeEditable(command) {
        const node = this.node;
        const data = node.data;
        const store = node.store;
        switch(command) {
          //del
          case 'onDelable':
            this.tree.$emit('node-del', store, data, node, this);
            // store.remove(data);
            break;
          //rename
          case 'onEditable':
            this.node.onEditable = true;
            break;
          default:
            break;
        }
      },

      handleAppendNode() {
        const node = this.node;
        const data = node.data;
        const store = node.store;
        store.append(
          {
            id: '',
            label: '',
            onEditable: true,
            isShowEditBar: node.isShowEditBar,
            isAddable: node.isAddable,
            isDelable: node.isDelable,
            isEditable: node.isEditable,
            children: []
          }, data);
      }
    },

    created() {
      const parent = this.$parent;

      if (parent.isTree) {
        this.tree = parent;
      } else {
        this.tree = parent.tree;
      }

      const tree = this.tree;
      if (!tree) {
        console.warn('Can not find node\'s tree.');
      }

      const props = tree.props || {};
      const childrenKey = props['children'] || 'children';

      this.$watch(`node.data.${childrenKey}`, () => {
        this.node.updateChildren();
      });

      this.showCheckbox = tree.showCheckbox;

      if (this.node.expanded) {
        this.expanded = true;
        this.childNodeRendered = true;
      }

      if(this.tree.accordion) {
        this.$on('tree-node-expand', node => {
          if(this.node !== node) {
            this.node.collapse();
          }
        });
      }
    }
  };
</script>
