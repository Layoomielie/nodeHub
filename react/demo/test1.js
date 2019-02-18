import React from 'react'
import ReactDOM from 'react-dom'

// 2. 创建 虚拟DOM
// 参数1：元素名称  参数2：元素属性对象(null表示无)  参数3：当前元素的子元素string||createElement() 的返回值
const divVD = React.createElement('div', {
  title: 'hello react'
}, 'Hello React！！！')

// 3. 渲染
// 参数1：虚拟dom对象  参数2：dom对象表示渲染到哪个元素内 参数3：回调函数
ReactDOM.render(divVD, document.getElementById('app'))