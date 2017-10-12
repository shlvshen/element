## 更新日志

### 0.0.9
*2017-10-10*

- Table
    - 修复 body滚动时表头不随之滚动的bug
    - 新增 手风琴效果
- Table Column
    - 当type为selection/selectionIndex时，checkbox上新增data-id用于快速打印。需求来源@qixuefen@cshen.cn
    - 修复 column设置class-name会影响表头背景色的bug
    - 修复 `show-overflow-tooltip`影响了文字原本的省略号展示，且无法正常显示的bug
- Message
    - message的type初始值默认为info
