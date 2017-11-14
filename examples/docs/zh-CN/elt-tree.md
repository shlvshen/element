<style>
  .demo-tree {
    .leaf {
      width: 20px;
      background: #ddd;
    }

    .folder {
      width: 20px;
      background: #888;
    }

    .buttons {
      margin-top: 20px;
    }

    .filter-tree {
      margin-top: 20px;
    }
  }
</style>

<script>
  const catalog = [
        {
            "id": "dd8c52c2-2c1e-447d-a783-16ce45d52824",
            "domain_id": 1132,
            "form": 1,
            "name": "\u4e00\u7ea7\u5206\u7c7b",
            "parent_id": null,
            "ancestor_list": [],
            "created_at": 1508205178,
            "updated_at": 1508901895,
            "children": [
                {
                    "id": "40591909-08ca-44f3-82d9-9955e8d8a3e5",
                    "domain_id": 1132,
                    "form": 1,
                    "name": "\u4e8c\u7ea7\u5206\u7c7b",
                    "parent_id": "dd8c52c2-2c1e-447d-a783-16ce45d52824",
                    "ancestor_list": [
                        {
                            "_id": "dd8c52c2-2c1e-447d-a783-16ce45d52824",
                            "name": "\u4e00\u7ea7\u5206\u7c7b2"
                        }
                    ],
                    "created_at": 1508899933,
                    "updated_at": 1508899934,
                    "children": [
                        {
                            "id": "ec6cfc1b-4260-4f85-868c-89a8fed4ac98",
                            "domain_id": 1132,
                            "form": 1,
                            "name": "\u4e09\u7ea7\u5206\u7c7b222",
                            "parent_id": "40591909-08ca-44f3-82d9-9955e8d8a3e5",
                            "ancestor_list": [
                                {
                                    "_id": "40591909-08ca-44f3-82d9-9955e8d8a3e5",
                                    "name": "\u4e8c\u7ea7\u5206\u7c7b"
                                },
                                {
                                    "_id": "dd8c52c2-2c1e-447d-a783-16ce45d52824",
                                    "name": "\u4e00\u7ea7\u5206\u7c7b"
                                }
                            ],
                            "created_at": 1508900496,
                            "updated_at": 1508984305,
                            "children": [
                                {
                                    "id": "fb33cef7-7d63-4ed6-bc10-37220800980b",
                                    "domain_id": 1132,
                                    "form": 1,
                                    "name": "555",
                                    "parent_id": "ec6cfc1b-4260-4f85-868c-89a8fed4ac98",
                                    "ancestor_list": [
                                        {
                                            "_id": "ec6cfc1b-4260-4f85-868c-89a8fed4ac98",
                                            "name": "\u4e09\u7ea7\u5206\u7c7b"
                                        },
                                        {
                                            "_id": "40591909-08ca-44f3-82d9-9955e8d8a3e5",
                                            "name": "\u4e8c\u7ea7\u5206\u7c7b"
                                        },
                                        {
                                            "_id": "dd8c52c2-2c1e-447d-a783-16ce45d52824",
                                            "name": "\u4e00\u7ea7\u5206\u7c7b"
                                        }
                                    ],
                                    "created_at": 1508984298,
                                    "updated_at": 1508984298
                                }
                            ]
                        },
                        {
                            "id": "c7d6075d-5da8-4109-8392-7a0584fe9381",
                            "domain_id": 1132,
                            "form": 1,
                            "name": "\u6d4b\u8bd5\u5b50\u5206\u7c7b2",
                            "parent_id": "40591909-08ca-44f3-82d9-9955e8d8a3e5",
                            "ancestor_list": [
                                {
                                    "_id": "40591909-08ca-44f3-82d9-9955e8d8a3e5",
                                    "name": "\u4e8c\u7ea7\u5206\u7c7b"
                                },
                                {
                                    "_id": "dd8c52c2-2c1e-447d-a783-16ce45d52824",
                                    "name": "\u4e00\u7ea7\u5206\u7c7b"
                                }
                            ],
                            "created_at": 1509001283,
                            "updated_at": 1509001283
                        }
                    ]
                },
                {
                    "id": "dde6ce28-6661-4133-b71e-a3386710ecd0",
                    "domain_id": 1132,
                    "form": 1,
                    "name": "\u6d4b\u8bd5\u5b50\u5206\u7c7b1",
                    "parent_id": "dd8c52c2-2c1e-447d-a783-16ce45d52824",
                    "ancestor_list": [
                        {
                            "_id": "dd8c52c2-2c1e-447d-a783-16ce45d52824",
                            "name": "\u4e00\u7ea7\u5206\u7c7b"
                        }
                    ],
                    "created_at": 1509001098,
                    "updated_at": 1509001215
                }
            ]
        },
        {
            "id": "1f1bf7cb-69ce-417d-8568-9ae279ba4e12",
            "domain_id": 1132,
            "form": 1,
            "name": "222",
            "parent_id": null,
            "ancestor_list": [],
            "created_at": 1508206495,
            "updated_at": 1508206495,
            "children": [
                {
                    "id": "cf15b03e-d2dd-42bc-90b2-55ed44e767bd",
                    "domain_id": 1132,
                    "form": 1,
                    "name": "444444",
                    "parent_id": "1f1bf7cb-69ce-417d-8568-9ae279ba4e12",
                    "ancestor_list": [
                        {
                            "_id": "1f1bf7cb-69ce-417d-8568-9ae279ba4e12",
                            "name": "222"
                        }
                    ],
                    "created_at": 1510538683,
                    "updated_at": 1510538683
                }
            ]
        },
        {
            "id": "c00fc9fb-9f9e-40bf-9df9-5e633fcf8657",
            "domain_id": 1132,
            "form": 1,
            "name": "333",
            "parent_id": null,
            "ancestor_list": [],
            "created_at": 1508313555,
            "updated_at": 1508313555
        },
        {
            "id": "145a211d-f354-491a-89ee-036242a60af5",
            "domain_id": 1132,
            "form": 1,
            "name": "2222",
            "parent_id": null,
            "ancestor_list": [],
            "created_at": 1508901044,
            "updated_at": 1508901044
        },
        {
            "id": "d85ea632-59e6-4430-af84-7ac0eb01ee04",
            "domain_id": 1132,
            "form": 1,
            "name": "2222222",
            "parent_id": null,
            "ancestor_list": [],
            "created_at": 1508983947,
            "updated_at": 1508983947
        },
        {
            "id": "68fbaf43-750e-4dd2-a5dd-907c1c5b7684",
            "domain_id": 1132,
            "form": 1,
            "name": "\u6d4b\u8bd5\u4e00\u7ea7\u5206\u7c7b",
            "parent_id": null,
            "ancestor_list": [],
            "created_at": 1508999926,
            "updated_at": 1508999926
        },
        {
            "id": "8f895e3e-731f-4ca4-b933-23312a5bef22",
            "domain_id": 1132,
            "form": 1,
            "name": "\u63a8\u62c9",
            "parent_id": null,
            "ancestor_list": [],
            "created_at": 1509000248,
            "updated_at": 1509000294,
            "children": [
                {
                    "id": "8b6c4a7c-70fe-43b1-82c7-dc9592c870ec",
                    "domain_id": 1132,
                    "form": 1,
                    "name": "test80\u5f69\u94dd\u63a8\u62c9",
                    "parent_id": "8f895e3e-731f-4ca4-b933-23312a5bef22",
                    "ancestor_list": [
                        {
                            "_id": "8f895e3e-731f-4ca4-b933-23312a5bef22",
                            "name": "\u63a8\u62c9"
                        }
                    ],
                    "created_at": 1509000303,
                    "updated_at": 1509000303
                }
            ]
        },
        {
            "id": "26547216-fbc6-4f4c-8857-39f65709c461",
            "domain_id": 1132,
            "form": 1,
            "name": "\u5e73\u5f00",
            "parent_id": null,
            "ancestor_list": [],
            "created_at": 1509022088,
            "updated_at": 1509022088,
            "children": [
                {
                    "id": "9cb02a6a-9bc8-4d3e-97ae-8b7fe712c299",
                    "domain_id": 1132,
                    "form": 1,
                    "name": "test85\u5e73\u5f00\u7cfb\u5217",
                    "parent_id": "26547216-fbc6-4f4c-8857-39f65709c461",
                    "ancestor_list": [
                        {
                            "_id": "26547216-fbc6-4f4c-8857-39f65709c461",
                            "name": "\u5e73\u5f00"
                        }
                    ],
                    "created_at": 1509022160,
                    "updated_at": 1509022160,
                    "children": [
                        {
                            "id": "8ce5fcd9-1d18-4b27-aa6e-cfca27e984e1",
                            "domain_id": 1132,
                            "form": 1,
                            "name": "111",
                            "parent_id": "9cb02a6a-9bc8-4d3e-97ae-8b7fe712c299",
                            "ancestor_list": [
                                {
                                    "_id": "9cb02a6a-9bc8-4d3e-97ae-8b7fe712c299",
                                    "name": "test85\u5e73\u5f00\u7cfb\u5217"
                                },
                                {
                                    "_id": "26547216-fbc6-4f4c-8857-39f65709c461",
                                    "name": "\u5e73\u5f00"
                                }
                            ],
                            "created_at": 1509091071,
                            "updated_at": 1509091071
                        }
                    ]
                }
            ]
        }
    ];
  let nodeIdSeed = 1;
  const data = [{
    label: '一级 1',
    children: [{
      label: '二级 1-1',
      children: [{
        label: '三级 1-1-1'
      }]
    }]
  }, {
    label: '一级 2',
    children: [{
      label: '二级 2-1',
      children: [{
        label: '三级 2-1-1'
      }]
    }, {
      label: '二级 2-2',
      children: [{
        label: '三级 2-2-1'
      }]
    }]
  }, {
    label: '一级 3',
    children: [{
      label: '二级 3-1',
      children: [{
        label: '三级 3-1-1'
      }]
    }, {
      label: '二级 3-2',
      children: [{
        label: '三级 3-2-1'
      }]
    }]
  }];

  const data2 = [{
    id: 1,
    label: '一级 1',
    icon: '&#xe659;',
    children: [{
      id: 4,
      label: '二级 1-1',
      children: [{
        id: 9,
        label: '三级 1-1-1'
      }, {
        id: 10,
        label: '三级 1-1-2'
      }]
    }]
  }, {
    id: 2,
    label: '一级 2',
    children: [{
      id: 5,
      label: '二级 2-1'
    }, {
      id: 6,
      label: '二级 2-2'
    }]
  }, {
    id: 3,
    label: '一级 3',
    children: [{
      id: 7,
      label: '二级 3-1'
    }, {
      id: 8,
      label: '二级 3-2'
    }]
  }];

  const data3 = [{
    id: 1,
    label: '一级 2',
    children: [{
      id: 3,
      label: '二级 2-1',
      children: [{
        id: 4,
        label: '三级 3-1-1'
      }, {
        id: 5,
        label: '三级 3-1-2',
        disabled: true
      }]
    }, {
      id: 2,
      label: '二级 2-2',
      disabled: true,
      children: [{
        id: 6,
        label: '三级 3-2-1'
      }, {
        id: 7,
        label: '三级 3-2-2',
        disabled: true
      }]
    }]
  }];

  const data4 = [{
    id: 1,
    name: '一级 1',
    icon: '&#xe659;',
    isShowEditBar: true,
    isEditable: true,
    isDelable: true,
    count: 10,
    children: [{
      id: 4,
      name: '二级 1-1',
      children: [{
        id: 9,
        name: '三级 1-1-1'
      }, {
        id: 10,
        name: '三级 1-1-2'
      }]
    }]
  }, {
    id: 2,
    name: '一级 2',
    children: [{
      id: 5,
      name: '二级 2-1'
    }, {
      id: 6,
      name: '二级 2-2'
    }]
  }, {
    id: 3,
    name: '一级 3',
    children: [{
      id: 7,
      name: '二级 3-1'
    }, {
      id: 8,
      name: '二级 3-2'
    }]
  }];

  let id = 1000;

  const regions = [{
    'name': 'region1'
  }, {
    'name': 'region2'
  }];

  let count = 1;

  const props = {
    label: 'name',
    children: 'zones'
  };

  const defaultProps = {
    children: 'children',
    label: 'label'
  };

  const defaultNamePorps = {
    children: 'children',
    label: 'name'
  };

  const config = {
    isEditable: true,
    isSearchable: true,
    isAddable: true,
    isDelable: true,
    placeholder: '输入关键字'
  };

  const config2 = {
    isEditable: true,
    isSearchable: true,
    isAddable: true,
    isDelable: true,
    placeholder: '输入关键字',
    maxLevel: 3
  };

  const tree = null;

  export default {
    watch: {
      filterText(val) {
        this.$refs.tree2.filter(val);
      }
    },

    methods: {
      nodeModify(data, node, tree, newVal) {
        // console.log('nodeModify', newVal, tree);
        this.onLoad = true;
        data[tree.tree.props.label] = newVal;
        setTimeout(() => {
            this.onLoad = false;
        }, 500);
      },
      nodeAdd(data, node, tree, newVal) {
        this.onLoad = true;
        const props = tree.tree.props || {};
        const key = props.label || 'label';
        data[key]= newVal;
        node.data.id = node.parent.id  * 10 
        nodeIdSeed++;
        node.id = node.data.id;
        console.log('nodeAdd', newVal, node);
        setTimeout(() => {
            this.onLoad = false;
        }, 500);
      },
      handleCheckChange(data, checked, indeterminate) {
        console.log(data, checked, indeterminate);
      },
      handleNodeClick(data) {
        console.log(data);
      },
      loadNode(node, resolve) {
        if (node.level === 0) {
          return resolve([{ name: 'region1' }, { name: 'region2' }]);
        }
        if (node.level > 3) return resolve([]);
        var hasChild;
        if (node.data.name === 'region1') {
          hasChild = true;
        } else if (node.data.name === 'region2') {
          hasChild = false;          
        } else {
          hasChild = Math.random() > 0.5;
        }

        setTimeout(function() {
          var data;
          if (hasChild) {
            data = [{
              name: 'zone' + count++
            }, {
              name: 'zone' + count++
            }];
          } else {
            data = [];
          }

          resolve(data);
        }, 500);
      },
      getCheckedNodes() {
        console.log(this.$refs.tree.getCheckedNodes());
      },
      getCheckedKeys() {
        console.log(this.$refs.tree.getCheckedKeys());
      },
      setCheckedNodes() {
        this.$refs.tree.setCheckedNodes([
          {
            id: 5,
            label: '二级 2-1'
          },
          {
            id: 9,
            label: '三级 1-1-1'
          }
        ]);
      },
      setCheckedKeys() {
        this.$refs.tree.setCheckedKeys([3]);
      },
      resetChecked() {
        this.$refs.tree.setCheckedKeys([]);
      },
      append(store, data) {
        store.append({ id: id++, label: 'testtest', children: [] }, data);
      },

      remove(store, data) {
        store.remove(data);
      },

      renderContent(h, { node, data, store }) {
        return (
          <span style="white-space: normal">
            <span>
              <span>{node.label}</span>
            </span>
            <span style="float: right; margin-right: 20px">
              <el-button size="mini" on-click={ () => this.append(store, data) }>Append</el-button>
              <el-button size="mini" on-click={ () => this.remove(store, data) }>Delete</el-button>
            </span>
          </span>);
      },

      filterNode(value, data) {
        if (!value) return true;
        return data.name.indexOf(value) !== -1;
      },

      editTree() {
        this.onEditable = !this.onEditable;
      },

      handleNodeDel(store, data, node, tree) {
        console.log('handleNodeDel', store, data);
        store.remove(data);
      },

      handelNodeLabel(data, node, tree) {
        data.id = 56;
        node.id = data.id;
        console.log('edit success', node.name);
      },

      handelNodeAdd(data, node, tree) {
        const parent = node.parent;
        node.id = count++;
        console.log('add', node.name, node.parent.label);
      },

      changeData() {
        console.log(111, this.data5);
        this.data5 = [];
        console.log(this.data5);
      }
    },

    data() {
      return {
        data,
        data2,
        data3,
        data4,
        data5: null,
        tree,
        regions,
        defaultProps,
        defaultNamePorps,
        props,
        defaultCheckedKeys: [5],
        defaultExpandedKeys: [2, 3],
        filterText: '',
        onEditable: null,
        config: config,
        config2: config2,
        onLoad: false,
        catalog: null
      };
    },

    created: function() {
      setTimeout(() => {
        this.tree = [];
        this.catalog = catalog
      }, 1000);
    }
  };
</script>

## Tree 树形控件

用清晰的层级结构展示信息，可展开或折叠。

### 基础用法

基础的树形结构展示。

::: demo
```html
<elt-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></elt-tree>

<script>
  export default {
    data() {
      return {
        data: [{
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    methods: {
      handleNodeClick(data) {
        console.log(data);
      }
    }
  };
</script>
```
:::

### 可选择

适用于需要选择层级时使用。在下例中，由于在点击时才进行该层数据的获取，导致层级不可预知，如果没有下层数据，则点击后下拉按钮会消失。

::: demo
```html
<elt-tree
  :data="regions"
  :props="props"
  :load="loadNode"
  lazy
  show-checkbox
  @check-change="handleCheckChange">
</elt-tree>

<script>
  export default {
    data() {
      return {
        regions: [{
          'name': 'region1'
        }, {
          'name': 'region2'
        }],
        props: {
          label: 'name',
          children: 'zones'
        },
        count: 1
      };
    },
    methods: {
      handleCheckChange(data, checked, indeterminate) {
        console.log(data, checked, indeterminate);
      },
      handleNodeClick(data) {
        console.log(data);
      },
      loadNode(node, resolve) {
        if (node.level === 0) {
          return resolve([{ name: 'region1' }, { name: 'region2' }]);
        }
        if (node.level > 3) return resolve([]);

        var hasChild;
        if (node.data.name === 'region1') {
          hasChild = true;
        } else if (node.data.name === 'region2') {
          hasChild = false;
        } else {
          hasChild = Math.random() > 0.5;
        }

        setTimeout(() => {
          var data;
          if (hasChild) {
            data = [{
              name: 'zone' + this.count++
            }, {
              name: 'zone' + this.count++
            }];
          } else {
            data = [];
          }

          resolve(data);
        }, 500);
      }
    }
  };
</script>
```
:::

### 默认展开和默认选中
可将 Tree 的某些节点设置为默认展开或默认选中

::: demo 分别通过`default-expanded-keys`和`default-checked-keys`设置默认展开和默认选中的节点。需要注意的是，此时必须设置`node-key`，其值为节点数据中的一个字段名，该字段在整棵树中是唯一的。
```html
<elt-tree
  :data="data2"
  show-checkbox
  node-key="id"
  :default-expanded-keys="[2, 3]"
  :default-checked-keys="[5]"
  :props="defaultProps">
</elt-tree>

<script>
  export default {
    data() {
      return {
        data2: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    }
  };
</script>
```
:::

### 禁用状态
可将 Tree 的某些节点设置为禁用状态

::: demo 通过`disabled`设置禁用状态。
```html
<elt-tree
  :data="data3"
  show-checkbox
  node-key="id"
  :default-expanded-keys="[2, 3]"
  :default-checked-keys="[5]">
</elt-tree>

<script>
  export default {
    data() {
      return {
        data3: [{
          id: 1,
          label: '一级 2',
          children: [{
            id: 3,
            label: '二级 2-1',
            children: [{
              id: 4,
              label: '三级 3-1-1'
            }, {
              id: 5,
              label: '三级 3-1-2',
              disabled: true
            }]
          }, {
            id: 2,
            label: '二级 2-2',
            disabled: true,
            children: [{
              id: 6,
              label: '三级 3-2-1'
            }, {
              id: 7,
              label: '三级 3-2-2',
              disabled: true
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    }
  };
</script>
```
:::

### 树节点的选择

::: demo 本例展示如何获取和设置选中节点。获取和设置各有两种方式：通过 node 或通过 key。如果需要通过 key 来获取或设置，则必须设置`node-key`。
```html
<elt-tree
  :data="data2"
  show-checkbox
  default-expand-all
  node-key="id"
  ref="tree"
  highlight-current
  :props="defaultProps">
</elt-tree>

<div class="buttons">
  <el-button @click="getCheckedNodes">通过 node 获取</el-button>
  <el-button @click="getCheckedKeys">通过 key 获取</el-button>
  <el-button @click="setCheckedNodes">通过 node 设置</el-button>
  <el-button @click="setCheckedKeys">通过 key 设置</el-button>
  <el-button @click="resetChecked">清空</el-button>
</div>

<script>
  export default {
    methods: {
      getCheckedNodes() {
        console.log(this.$refs.tree.getCheckedNodes());
      },
      getCheckedKeys() {
        console.log(this.$refs.tree.getCheckedKeys());
      },
      setCheckedNodes() {
        this.$refs.tree.setCheckedNodes([{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 9,
          label: '三级 1-1-1'
        }]);
      },
      setCheckedKeys() {
        this.$refs.tree.setCheckedKeys([3]);
      },
      resetChecked() {
        this.$refs.tree.setCheckedKeys([]);
      }
    },

    data() {
      return {
        data2: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    }
  };
</script>
```
:::

### 自定义节点内容
节点的内容支持自定义，可以在节点区添加按钮或图标等内容

::: demo 使用`render-content`指定渲染函数，该函数返回需要的节点区内容即可。渲染函数的用法请参考 Vue 文档。注意：由于 jsfiddle 不支持 JSX 语法，所以本例在 jsfiddle 中无法运行。但是在实际的项目中，只要正确地配置了相关依赖，就可以正常运行。
```html
<elt-tree
  :data="data2"
  :props="defaultProps"
  show-checkbox
  node-key="id"
  default-expand-all
  :expand-on-click-node="false"
  :render-content="renderContent"
  :filter-node-method="filterNode"
  :config="config">
</elt-tree>

<script>
  let id = 1000;

  export default {
    data() {
      return {
        data2: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    },

    methods: {
      append(store, data) {
        store.append({ id: id++, label: 'testtest', children: [] }, data);
      },

      remove(store, data) {
        store.remove(data);
      },

      renderContent(h, { node, data, store }) {
        return (
          <span>
            <span>
              <span>{node.label}</span>
            </span>
            <span style="float: right; margin-right: 20px">
              <el-button size="mini" on-click={ () => this.append(store, data) }>Append</el-button>
              <el-button size="mini" on-click={ () => this.remove(store, data) }>Delete</el-button>
            </span>
          </span>);
      }
    }
  };
</script>
```
:::

### 节点过滤
通过关键字过滤树节点

::: demo 在需要对节点进行过滤时，调用 Tree 实例的`filter`方法，参数为关键字。需要注意的是，此时需要设置`filter-node-method`，值为过滤函数。
```html

<elt-tree
  class="filter-tree"
  :data="data4"
  :props="defaultNamePorps"
  default-expand-all
  :filter-node-method="filterNode"
  :config="config"
  ref="tree2"
  node-key="id"
  @node-del="handleNodeDel"
  @node-modify="handelNodeLabel"
  @node-add="handelNodeAdd">
</elt-tree>

<script>
  export default {
    watch: {
      filterText(val) {
        this.$refs.tree2.filter(val);
      }
    },

    methods: {
      filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
      }
    },

    data() {
      return {
        filterText: '',
        data2: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    }
  };
</script>
```
:::

### 手风琴模式

对于同一级的节点，每次只能展开一个

::: demo
```html
<elt-tree
  :data="data"
  :props="defaultProps"
  accordion
  @node-click="handleNodeClick">
</elt-tree>

<script>
  export default {
    data() {
      return {
        data: [{
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    methods: {
      handleNodeClick(data) {
        console.log(data);
      }
    }
  };
</script>
```
:::

### 从无到有

动态更改节点。新增节点需要和`node-key`一起使用并且绑定的data必须有id

::: demo
```html
<div>
  <div>
    <elt-tree
        :data="catalog"
        :props="defaultNamePorps"
        node-key="id"
        :filter-node-method="filterNode"
        :expand-on-click-node="false"
        :config="config2"
        :on-load="onLoad"
        @node-modify="nodeModify"
        @node-del="handleNodeDel"
        @node-add="nodeAdd">
    </elt-tree>
  </div>
  <p>给空数组新增节点</p>
  <elt-tree
        :data="tree"
        node-key="id"
        :expand-on-click-node="false"
        :config="config"
        @node-modify="nodeModify"
        @node-add="nodeAdd"
        @node-del="handleNodeDel">
    </elt-tree>
</div>

<script>
  export default {
    data() {
      return {
        data5: null,
      }
    },
    methods: {
      handleNodeClick(data) {
        console.log(data);
      }
    }
  };
</script>
```
:::

### Attributes
| 参数                    | 说明                                       | 类型                          | 可选值  | 默认值   |
| --------------------- | ---------------------------------------- | --------------------------- | ---- | ----- |
| data                  | 展示数据                                     | array                       | —    | —     |
| config                  | 配置是否可搜索、是否可编辑、是否可新建、是否可删除、是否重命名,最大级数。`maxLevel`表示此树节点的最大级数                                     | Object                       | —    | —     |
| empty-text            | 内容为空的时候展示的文本                             | String                      | —    | —     |
| node-key              | 每个树节点用来作为唯一标识的属性，整颗树应该是唯一的               | String                      | —    | —     |
| props                 | 配置选项，具体看下表                               | object                      | —    | —     |
| load                  | 加载子树数据的方法                                | function(node, resolve)     | —    | —     |
| render-content        | 树节点的内容区的渲染 Function                      | Function(h, { node }        | —    | —     |
| highlight-current     | 是否高亮当前选中节点，默认值是 false。                   | boolean                     | —    | false |
| current-node-key      | 当前选中节点的 key，只写属性                         | string, number              | —    | —     |
| default-expand-all    | 是否默认展开所有节点                               | boolean                     | —    | false |
| expand-on-click-node  | 是否在点击节点的时候展开或者收缩节点， 默认值为 true，如果为 false，则只有点箭头图标的时候才会展开或者收缩节点。 | boolean                     | —    | true  |
| auto-expand-parent    | 展开子节点的时候是否自动展开父节点                        | boolean                     | —    | true  |
| default-expanded-keys | 默认展开的节点的 key 的数组                         | array                       | —    | —     |
| show-checkbox         | 节点是否可被选择                                 | boolean                     | —    | false |
| check-strictly        | 在显示复选框的情况下，是否严格的遵循父子不互相关联的做法，默认为 false   | boolean                     | —    | false |
| default-checked-keys  | 默认勾选的节点的 key 的数组                         | array                       | —    | —     |
| filter-node-method    | 对树节点进行筛选时执行的方法，返回 true 表示这个节点可以显示，返回 false 则表示这个节点会被隐藏 | Function(value, data, node) | —    | —     |
| accordion             | 是否每次只打开一个同级树节点展开                         | boolean                     | —    | false |
| indent                | 相邻级节点间的水平缩进，单位为像素                        | number                     | —    | 16 |
| on-load                  | 控制树的遮罩层展示,使用者可以在`node-modify`,`node-del`,`node-add`中自行控制                                     | Boolean                       | —    | false     |
 

### props
| 参数       | 说明                | 类型     | 可选值  | 默认值  |
| -------- | ----------------- | ------ | ---- | ---- |
| name    | 指定节点标签为节点对象的某个属性值 | string, function(data, node) | —    | —    |
| children | 指定子树为节点对象的某个属性值 | string, function(data, node) | —    | —    |
| disabled | 指定节点选择框是否禁用 |  boolean, function(data, node) | —    | —    |

### 方法
`Tree` 拥有如下方法，返回目前被选中的节点数组：
| 方法名             | 说明                                       | 参数                                       |
| --------------- | ---------------------------------------- | ---------------------------------------- |
| filter          | 对树节点进行筛选操作                               | 接收一个任意类型的参数，该参数会在 filter-node-method 中作为第一个参数 |
| getCheckedNodes | 若节点可被选择（即 `show-checkbox` 为 `true`），则返回目前被选中的节点所组成的数组 | (leafOnly) 接收一个 boolean 类型的参数，若为 `true` 则仅返回被选中的叶子节点，默认值为 `false` |
| setCheckedNodes | 设置目前勾选的节点，使用此方法必须设置 node-key 属性          | (nodes) 接收勾选节点数据的数组                      |
| getCheckedKeys  | 若节点可被选择（即 `show-checkbox` 为 `true`），则返回目前被选中的节点所组成的数组 | (leafOnly) 接收一个 boolean 类型的参数，若为 `true` 则仅返回被选中的叶子节点的 keys，默认值为 `false` |
| setCheckedKeys  | 通过 keys 设置目前勾选的节点，使用此方法必须设置 node-key 属性  | (keys, leafOnly) 接收两个参数，1. 勾选节点的 key 的数组 2. boolean 类型的参数，若为 `true` 则仅设置叶子节点的选中状态，默认值为 `false` |
| setChecked      | 通过 key / data 设置某个节点的勾选状态，使用此方法必须设置 node-key 属性 | (key/data, checked, deep) 接收三个参数，1. 勾选节点的 key 或者 data 2. boolean 类型，节点是否选中  3. boolean 类型，是否设置子节点 ，默认为 false |

### Events
| 事件名称           | 说明             | 回调参数                                     |
| -------------- | -------------- | ---------------------------------------- |
| node-click     | 节点被点击时的回调      | 共三个参数，依次为：传递给 `data` 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身。 |
| check-change   | 节点选中状态发生变化时的回调 | 共三个参数，依次为：传递给 `data` 属性的数组中该节点所对应的对象、节点本身是否被选中、节点的子树中是否有被选中的节点 |
| current-change | 当前选中节点变化时触发的事件 | 共两个参数，依次为：当前节点的数据，当前节点的 Node 对象          |
| node-expand    | 节点被展开时触发的事件    | 共三个参数，依次为：传递给 `data` 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身。 |
| node-collapse  | 节点被关闭时触发的事件    | 共三个参数，依次为：传递给 `data` 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身。 |
| node-del  | 节点被删除时触发的事件    | 共四个参数，依次为：`store`是节点本身封装方法的service, 传递给 `data` 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身。 |
| node-modify  | 更改节点的label    | 共三个参数，依次为：更改后的label值[在事件中用node.data[tree.props.label || 'label']修改对应显示的内容]、节点对应的 Node、节点组件本身。 |
| node-add  | 新增节点    | 共三个参数，依次为：更改后的label值[在事件中用node.data.label修改]、节点对应的 Node、节点组件本身。 |
