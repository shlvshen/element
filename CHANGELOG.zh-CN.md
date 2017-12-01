## 更新日志

### 0.0.15
- Popover
    - 修复在有title的情况，radius会被覆盖的问题

### 0.0.14
*2017-11-28*

- Popover
    - 边框色改为了主色调
- EltTree
    - 修复重置之后没有子节点的节点仍出现的小三角

### 0.0.13
*2017-11-13*

- EltTree
    - 修复`config`中没有添加maxLevel导致无限级树在编辑状态不会新建目录的bug
    - 修复新增和修改连续触动两次的bug
    - 新增`resetFields(val)`函数，`val`用于控制所有节点的编辑状态【用于整个树的刷新】
    - 修复节点新建成功之后没有编辑条出现的bug
- Table
    - 优化table的`loading`动画

### 0.0.12
*2017-11-13*

- EltTree
    - 扩大新建目录的padding-left
    - 添加maxLevel用于控制树的最大级
    - 在编辑状态时，如果节点level小于最大级，不管有没有子节点都要出现收缩的icon用于控制新建新建目录
    - 收缩时隐藏新建目录
    - 点击编辑/取消编辑时不影响结点的展开/收起状态
    - 点击新建目录后此节点要放在首位
    - 添加`onLoad`变量用于控制树的遮罩
    - 修复点击编辑立即出现编辑条而不是鼠标悬浮才出现的bug
    - 修复编辑`padding-right`与其他不统一的bug
    - 更改加载时的loading效果
    - 点击编辑同行其他地方时不要影响编辑状态
- Table
    - 修复双行色有striped时悬浮色失效的bug

### 0.0.11
*2017-10-27*

- EltTree
    - 扩大icon的可点范围
    - 修复input框再次出现无法focus的bug
    - 去掉树的border

### 0.0.10
*2017-10-13*

- Table
    - 修复type为small的表格表头颜色不对的问题
- EltTree
    - 新增 `loading` 的显示
    - 新增 新建目录、节点的padding-left、input的左右padding 由indent 控制
    - 去掉节点icon的margin-left
    - 修复 新增节点 未添加`parendId`的bug

### 0.0.9
*2017-10-10*

- Table
    - 修复 body滚动时表头不随之滚动的bug
    - 修复 加载和暂无数据适用数据情况相反的bug
    - 新增 手风琴效果
- Table Column
    - 当type为selection/selectionIndex时，checkbox上新增data-id用于快速打印。需求来源@qixuefen@cshen.cn
    - 修复 column设置class-name会影响表头背景色的bug
    - 修复 `show-overflow-tooltip`影响了文字原本的省略号展示，且无法正常显示的bug
- Message
    - message的type初始值默认为info
- Breadcrumb
    - 按照组件规范更改字体的颜色、hover效果
- Tag
    - 重新定义type类型为gray, success, warning, danger, info以及对应的背景色、字体颜色、border色
- Tooltip
    - 按照组件规范调整内边距
- Popover
    - 更改css
