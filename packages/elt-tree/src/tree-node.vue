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
         :style="{ 'padding-left': (node.level) * tree.indent + 'px' }"
         :class="{'is-dropdown': node.isShowEditBar && node.id}">
      <span style="display: inline-block;" @click.stop="handleExpandIconClick">
        <i class="el-tree-node__expand-icon"
           :class="{ 'is-leaf': isLeaf,
                     expanded: expanded }"></i>
      </span>
      <!-- <span
        class="el-tree-node__expand-icon"
        @click.stop="handleExpandIconClick"
        :class="{ 'is-leaf': node.isLeaf, expanded: !node.isLeaf && expanded }">
      </span> -->
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
      <span class="iconfont label-icon"
            v-if="node.data.icon"
            v-html="node.data.icon"></span>
      <span class="el-tree-node__label" v-show="!node.onEditable">{{ node.label }}</span>
      <div class="el-tree-node__edit" v-if="node.onEditable">
        <el-input :value="node.label" placeholder=""
                  @blur.stop="handleCompleteEdit" 
                  @keyup.enter.stop="handleCompleteEdit"></el-input>
      </div>
      <span class="el-tree-node__label" v-if="node.count">({{ node.count }})</span>
      <el-dropdown :style="{'right': tree.indent + 'px', 'visibility': isShowEditBar ? 'visible' : 'hidden'}"
                   @click.native.stop
                   @command="handleNodeEditable"
                   @visible-change="handelDropdownChange">
        <span class="el-dropdown-link"><i class="iconfont">&#xe649;</i></span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item v-show="node.isEditable" command="onEditable">重命名</el-dropdown-item>
          <el-dropdown-item v-show="node.isDelable" command="onDelable">删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <el-collapse-transition>
      <div v-show="node.isAddable && node.id && ( maxLevel > node.level ) && expanded">
        <div class="el-tree-node__add" @click.stop="handleAppendNode"
             :style="{ 'padding-left': (node.level + 2) * tree.indent + 'px' }">
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
          :max-level="maxLevel"
          @node-expand="handleChildNodeExpand">
        </elt-tree-node>
      </div>
    </el-collapse-transition>
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

<script type="text/jsx">
  import ElCollapseTransition from 'thx-knight/src/transitions/collapse-transition';
  import ElCheckbox from 'thx-knight/packages/checkbox';
  import Emitter from 'thx-knight/src/mixins/emitter';

  export default {
    name: 'EltTreeNode',

    componentName: 'EltTreeNode',

    mixins: [Emitter],

    props: {
      node: {
        default() {
          return {};
        }
      },
      props: {},
      maxLevel: [String, Number],
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
        oldIndeterminate: null,
        isLeaf: this.node.isLeaf,
        isShowEditBar: null
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
      },

      'node.isLeaf'(val) {
        this.isLeaf = val;
      },

      'node.isAddable'(val) {
        const maxLevel = this.maxLevel;
        const level = this.node.level;
        const isLeaf = this.node.isLeaf;
        if (val) {
          this.isLeaf = isLeaf && (level >= maxLevel);
        } else {
          this.isLeaf = isLeaf && val;
        }
      },

      'node': {
        handler: function(val) {
          var editNode = document.getElementsByClassName('el-tree-node__edit');
          if (editNode.length > 0 && editNode[0].getElementsByTagName('input').length > 0) {
            editNode[0].getElementsByTagName('input')[0].focus();
          }
        },
        deep: true
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
        if (this.node.onEditable) return;
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
        if (this.node.level >= this.maxLevel) return;
        // if (this.node.isLeaf) return;
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
        const data = node.data;
        const store = node.store;
        const newVal = event.target.value;
        if (!newVal) {
          store.remove(data);
          event.target.parentNode.removeChild(event.target);
          return;
        }
        // node.data.label = val;
        // node.name = node.data.name;
        node.onEditable = false;
        if (node.id) {
          this.tree.$emit('node-modify', data, node, this, newVal);
        } else {
          this.tree.$emit('node-add', data, node, this, newVal);          
        }
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
            parendId: data.id,
            label: '',
            onEditable: true,
            isShowEditBar: node.isShowEditBar,
            isAddable: node.isAddable,
            isDelable: node.isDelable,
            isEditable: node.isEditable,
            children: []
          }, data);
      },

      handelDropdownChange(val) {
        this.isShowEditBar = val;
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
