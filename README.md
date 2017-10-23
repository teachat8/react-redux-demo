# react-redux-demo

> 这是一个 react 和 redux 配合的一个简单入门项目，纯原创。我也是通过完成这个项目，对 react-redux 有了粗浅的认识。

笔耕不掇，天道酬勤。  https://beautifulboys.github.io/

## 项目基本介绍

本项目是用 react 官方提供的应用生成器: [create-react-app](https://github.com/facebookincubator/create-react-app) 生成的主体结构。然后自己配置的 [react-redux](https://github.com/reactjs/react-redux) 。

项目中写了必要的说明，可以通过打断点等方式，了解项目运行中数据传递流程及方式。

## 项目地址
仓库地址：https://github.com/beautifulBoys/react-redux-demo

克隆项目：https://github.com/beautifulBoys/react-redux-demo.git

预览地址：[点我跳转](https://www.baidu.com)。 请用Chrome浏览器-手机模式查看


<p align="center">
	<img src="https://raw.githubusercontent.com/beautifulBoys/beautifulBoys.github.io/blob/master/source/react-redux-demo/GIF1.gif" width="350px"/>
	<img src="https://raw.githubusercontent.com/beautifulBoys/beautifulBoys.github.io/blob/master/source/react-redux-demo/GIF2.gif" width="350px"/>
	<img src="https://raw.githubusercontent.com/beautifulBoys/beautifulBoys.github.io/blob/master/source/react-redux-demo/GIF3.gif" width="350px"/>

</p>

## 理解与体会


actions/  
components/  
containers/  
reducers/

一般项目主体结构包括上面这四个部分。下面分别介绍下这些部分都是什么作用。

action.js
```js
export const come = () => ({
  type: 'TOOGLE_MODEL'
})
```
如上，action 一般是一个有返回的函数，它是一个 [纯函数](http://web.jobbole.com/86136/)，不依赖其他的作用域、变量和条件。通过一个固定的入参，肯定获得一个相同的结果。  

component.js
```js
import React from 'react'
import './model.css'

const Model = ({data, checkEvent}) => (
  <div className="box" onClick={checkEvent}>我是一个组件</div>
)

export default Model
```
component 就是一个普通的组件，是由一段 HTML 代码构成的，它的作用仅仅就是用来显示数据，传递事件。

container.js
```js
import {connect} from 'react-redux'
import {model} from '../actions/'
import Item from '../components/item.js'

const mapStateToProps = (state) => ({
  data: state.data
})

const mapDispatchToProps = (dispatch) => ({
  checkEvent: () => {
    dispatch(model())
  }
})

const ItemContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Item)

export default ItemContainer
```
container 也是组件，但是它和 component 是不一样，它是逻辑组件。
redux 为了统一管理数据的变化以及数据的流向，将数据流与显示层完全分离，所以抽象出来一个逻辑组件，专门用来处理逻辑与交互，component 将只用来做显示即可。通俗一点来说就是将 逻辑、显示 和 数据 做了分离。  
通过 `mapStateToProps` 来拿到 `reducer` 中的数据，并将数据通过 `connect` 方法注入到 component 中。

reducer.js

```js
const model = (state = false, action) => {
  switch (action.type) {
    case 'TOOGLE_MODEL':
      return !state
    default:
      return state
  }
}

export default model

```

reducer 是什么，他就是 《 数据 》 。它也是由一个有返回值得纯函数构成。

接下来说一下 数据是怎么在应用中变化的。

component.js 中绑定了一个点击事件，
```js
<div onClick={checkEvent}>我是一个组件</div>
```
点击会触发函数 `checkEvent` ，函数 checkEvent 是在 container.js 中注入到 component.js 中的。
```js
const ItemContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Item)
```
那函数 checkEvent 到底做了什么呢？
```js
checkEvent: () => {
  dispatch(model())
}
```
由上可以看到，执行的就一个 `dispatch()` 函数。dispatch : 它就是用来改变数据的唯一方法。它传递一个参数 `model()` , `model()` 是 action.js 中我们定义的函数，返回：`{type: 'TOOGLE_MODEL'}`， `dispatch()` 函数是一个触发所有 reducer 重新计算，然后更新页面显示的方法。类似于 `setState()` 方法触发页面数据改变，并重新渲染数据一样异曲同工。  

reducer 接收到 `{type: 'TOOGLE_MODEL'}`，走下面这个分支
```js
case 'TOOGLE_MODEL':
  return !state
```
也就是取了个相反值罢了。

到此处，一个数据流就走完了。它的好处就是 reducer 的改变都在这个方法里面，数据的变化可以轻松追踪。








## 项目安装及运行

``` bash
# 安装项目依赖
npm install

# 启动服务 浏览器本地访问 http://localhost:<port> port 一般为 3000，若被占用，项目启动后命令行会输出，查看即可。
npm start

# 编译打包
npm build
```

## 最后

  以上就是本人粗浅的理解，希望能对大家有帮助。如果理解的不足或有差，还请指出，我们共同探讨进步。
  邮箱： 1298947916@qq.com
