(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{700:function(t,o){t.exports='# Tooltip 工具提示\n\n## 基本用法\n```jsx\nimport { Tooltip, Cell, Button, Popper } from \'zarm\';\n\nconst Demo = () => (\n  <Cell>\n    <div>\n      <div style={{ marginLeft: 60 }}>\n        <Tooltip direction="topLeft" content="topLeft text">\n          <Button block size="xs">TL</Button>\n        </Tooltip>\n\n        <Tooltip direction="top" content="top text">\n          <Button block size="xs">Top</Button>\n        </Tooltip>\n\n        <Tooltip direction="topRight" content="topRight text">\n          <Button block size="xs">TR</Button>\n        </Tooltip>\n      </div>\n\n      <div style={{ width: 60, float: "left",  clear: \'both\' }}>\n        <Tooltip direction="leftTop" content="leftTop text">\n          <Button block size="xs">LT</Button>\n        </Tooltip>\n\n        <Tooltip direction="left" content="left text">\n          <Button block size="xs">Left</Button>\n        </Tooltip>\n\n        <Tooltip direction="leftBottom" content="leftBottom text">\n          <Button block size="xs">LB</Button>\n        </Tooltip>\n      </div>\n\n      <div style={{ width: 60, marginLeft: 60 * 4 }}>\n        <Tooltip direction="rightTop" content="rightTop text">\n          <Button block size="xs">RT</Button>\n        </Tooltip>\n\n        <Tooltip direction="right" content="right text">\n          <Button block size="xs">Right</Button>\n        </Tooltip>\n\n        <Tooltip direction="rightBottom" content="rightBottom text">\n          <Button block size="xs">RB</Button>\n        </Tooltip>\n      </div>\n\n      <div style={{ marginLeft: 60, clear: \'both\' }}>\n        <Tooltip direction="bottomLeft" content="bottomLeft text">\n          <Button block size="xs">BL</Button>\n        </Tooltip>\n\n        <Tooltip direction="bottom" content="bottom text">\n          <Button block size="xs">Bottom</Button>\n        </Tooltip>\n\n        <Tooltip direction="bottomRight" content="bottomRight text">\n          <Button block size="xs">BR</Button>\n        </Tooltip>\n      </div>\n    </div>\n  </Cell>\n);\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n### API\n| 属性 | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :--- |\n| visible | boolean | false | 是否显示 |\n| content | ReactNode | - | 显示内容 |\n| hasArrow | boolean | false | 是否带有箭头 |\n| arrowPointAtCenter | boolean | false | 箭头是否指向目标元素中心 |\n| className | string | - | 气泡层类名追加 |\n| mouseEnterDelay | number | 100ms | 鼠标移入后延时多少才显示气泡层，单位：毫秒 |\n| mouseLeaveDelay | number | 100ms | 鼠标移出后延时多少才隐藏气泡层，单位：毫秒 |\n| direction | string | \'top\' | 显示方向，可选值 `topLeft`、`top`、`topRight`、`rightTop`、`right`、`rightBottom`、`bottomLeft`、`bottom`、`bottomRight`、`leftTop`、`left`、`leftBottom` |\n| trigger | string | \'click\' | 触发方式，PC端默认值为 \'hover\', 可选值为：点击触发`click`、hover状态触发`hover`、聚焦状态触发`focus`、受控触发`manual`、右键触发`contextMenu` |\n| onVisibleChange | (visible?: boolean) => void | noop | 显示/隐藏触发的事件 |\n'}}]);