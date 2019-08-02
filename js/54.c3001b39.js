(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{699:function(t,n){t.exports="# Popper 气泡层\n\n\n## 基本用法\n```jsx\nimport { Cell, Button, Popper, Select } from 'zarm';\n\nclass Demo extends React.Component {\n  state = {\n    visible: false,\n    direction: 'top',\n    trigger: 'click',\n  }\n\n  render() {\n    const { visible, direction, trigger } = this.state;\n\n    return (\n      <>\n        <Cell className=\"basic-demo\">\n          <Popper\n            content=\"我是气泡层的内容\"\n            visible={visible}\n            trigger={trigger}\n            direction={direction}\n            className=\"custom-content\"\n          >\n            <Button theme=\"primary\" size=\"xs\" onClick={() => trigger === 'manual' && this.setState({ visible: !visible })}>\n              点击{visible ? '隐藏' : '显示'}\n            </Button>\n          </Popper>\n        </Cell>\n        <Cell hasArrow title=\"显示方向\">\n          <Select\n            value={direction}\n            dataSource={[\n              { value: 'topLeft', label: 'topLeft' },\n              { value: 'top', label: 'top' },\n              { value: 'topRight', label: 'topRight' },\n              { value: 'rightTop', label: 'rightTop' },\n              { value: 'right', label: 'right' },\n              { value: 'rightBottom', label: 'rightBottom' },\n              { value: 'bottomLeft', label: 'bottomLeft' },\n              { value: 'bottom', label: 'bottom' },\n              { value: 'bottomRight', label: 'bottomRight' },\n              { value: 'leftTop', label: 'leftTop' },\n              { value: 'left', label: 'left' },\n              { value: 'leftBottom', label: 'leftBottom' },\n            ]}\n            onOk={(selected) => {\n              this.setState({\n                direction: selected[0].value,\n              });\n            }}\n          />\n        </Cell>\n        <Cell hasArrow title=\"触发方式\">\n          <Select\n            value={trigger}\n            dataSource={[\n              { value: 'click', label: 'click（点击状态触发）' },\n              { value: 'hover', label: 'hover（hover状态触发）' },\n              { value: 'focus', label: 'focus（聚焦状态触发）' },\n              { value: 'manual', label: 'manual（受控触发）' },\n              { value: 'contextMenu', label: 'contextMenu（右键触发）' },\n            ]}\n            onOk={(selected) => {\n              this.setState({\n                trigger: selected[0].value,\n                visible: false,\n              });\n            }}\n          />\n        </Cell>\n      </>\n    );\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n## 自定义箭头\n```jsx\nimport { Cell, Button, Popper, Radio } from 'zarm';\n\nclass Demo extends React.Component {\n  state = {\n    arrow: '0'\n  }\n\n  render() {\n    const { arrow } = this.state\n\n    return (\n      <>\n        <Cell description={\n          <Radio.Group\n            compact\n            type=\"button\"\n            value={this.state.arrow}\n            onChange={value => {\n              this.setState({ arrow: value });\n            }}\n          >\n            <Radio value=\"0\">跟随方向</Radio>\n            <Radio value=\"1\">元素中心</Radio>\n          </Radio.Group>\n        }>\n          箭头位置\n        </Cell>\n        <Cell className=\"direction-demo\">\n          <div>\n            <div style={{ marginLeft: 60 }}>\n              <Popper arrowPointAtCenter={arrow === '1'} className=\"custom-arrow-content\" hasArrow direction=\"topLeft\" content=\"topLeft text\">\n                <Button block size=\"xs\">TL</Button>\n              </Popper>\n\n              <Popper arrowPointAtCenter={arrow === '1'} className=\"custom-arrow-content\" hasArrow direction=\"top\" content=\"top text\">\n                <Button block size=\"xs\">Top</Button>\n              </Popper>\n\n              <Popper arrowPointAtCenter={arrow === '1'} className=\"custom-arrow-content\" hasArrow direction=\"topRight\" content=\"topRight text\">\n                <Button block size=\"xs\">TR</Button>\n              </Popper>\n            </div>\n\n            <div style={{ width: 60, float: 'left', clear: 'both' }}>\n              <Popper arrowPointAtCenter={arrow === '1'} className=\"custom-arrow-content\" hasArrow direction=\"leftTop\" content=\"leftTop text\">\n                <Button block size=\"xs\">LT</Button>\n              </Popper>\n\n              <Popper arrowPointAtCenter={arrow === '1'} className=\"custom-arrow-content\" hasArrow direction=\"left\" content=\"left text\">\n                <Button block size=\"xs\">Left</Button>\n              </Popper>\n\n              <Popper arrowPointAtCenter={arrow === '1'} className=\"custom-arrow-content\" hasArrow direction=\"leftBottom\" content=\"leftBottom text\">\n                <Button block size=\"xs\">LB</Button>\n              </Popper>\n            </div>\n\n            <div style={{ width: 60, marginLeft: 60 * 4 + 20 }}>\n              <Popper arrowPointAtCenter={arrow === '1'} className=\"custom-arrow-content\" hasArrow direction=\"rightTop\" content=\"rightTop text\">\n                <Button block size=\"xs\">RT</Button>\n              </Popper>\n\n              <Popper arrowPointAtCenter={arrow === '1'} className=\"custom-arrow-content\" hasArrow direction=\"right\" content=\"right text\">\n                <Button block size=\"xs\">Right</Button>\n              </Popper>\n\n              <Popper arrowPointAtCenter={arrow === '1'} className=\"custom-arrow-content\" hasArrow direction=\"rightBottom\" content=\"rightBottom text\">\n                <Button block size=\"xs\">RB</Button>\n              </Popper>\n            </div>\n\n            <div style={{ marginLeft: 60, clear: 'both' }}>\n              <Popper arrowPointAtCenter={arrow === '1'} className=\"custom-arrow-content\" hasArrow direction=\"bottomLeft\" content=\"bottomLeft text\">\n                <Button block size=\"xs\">BL</Button>\n              </Popper>\n\n              <Popper arrowPointAtCenter={arrow === '1'} className=\"custom-arrow-content\" hasArrow direction=\"bottom\" content=\"bottom text\">\n                <Button block size=\"xs\">Bottom</Button>\n              </Popper>\n\n              <Popper arrowPointAtCenter={arrow === '1'} className=\"custom-arrow-content\" hasArrow direction=\"bottomRight\" content=\"bottomRight text\">\n                <Button block size=\"xs\">BR</Button>\n              </Popper>\n            </div>\n          </div>\n        </Cell>\n      </>\n    );\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n### API\n| 属性 | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :--- |\n| className | string | - | 气泡层类名追加 |\n| content | ReactNode | - | 显示内容 |\n| hasArrow | boolean | false | 是否显示箭头节点<font color=\"red\">（注：需要自行定义箭头样式）</font> |\n| arrowPointAtCenter | boolean | false | 箭头是否指向目标元素中心 |\n| mouseEnterDelay | number | 100 | 鼠标移入显示气泡层的延时时间（单位：毫秒） |\n| mouseLeaveDelay | number | 100 | 鼠标移出隐藏气泡层的延时时间（单位：毫秒） |\n| direction | string | 'top' | 显示方向，可选值 `topLeft`、`top`、`topRight`、`rightTop`、`right`、`rightBottom`、`bottomLeft`、`bottom`、`bottomRight`、`leftTop`、`left`、`leftBottom` |\n| trigger | string | 移动端为'click' <br /> 桌面端为'hover' | 触发方式，可选值为：`click` 点击触发状态、`hover` hover状态触发、`focus` 聚焦状态触发、`manual` 受控触发、`contextMenu` 右键触发 |\n| visible | boolean | false | 是否显示，`trigger='manual'` 时有效 |\n| onVisibleChange | (visible?: boolean) => void | noop | 显示/隐藏 气泡层触发的事件 |\n"}}]);