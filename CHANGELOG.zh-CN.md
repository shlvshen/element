## 更新日志

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

### 0.0.10
*2017-10-13*

- Table
    - 修复type为small的表格表头颜色不对的问题
- EltTree
    - 新增 `loading` 的显示
    - 新增 新建目录、节点的padding-left、input的左右padding 由indent 控制
    - 去掉节点icon的margin-left
    - 修复 新增节点 未添加`parendId`的bug
