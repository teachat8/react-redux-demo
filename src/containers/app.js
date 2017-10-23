import React from 'react'
import ItemRight from './item_right.js'
import ItemLeft from './item_left.js'
import Model from './model.js'
import '../components/app.css'
import {connect} from 'react-redux'
import {toogle_model} from '../actions/'

// app 的显示组件
const App = ({goods, buys, model, submitEvent, money}) => (
  <div className="cart">
    <div className="top">
      <div className="left-box">
        {
          goods.map((item, index) => {
            return <ItemLeft key={index} data={item}/>
          })
        }
      </div>
      <div className="right-box">
        {
          (() => {
            if (buys.length === 0) return (<div className="empty">当前购物车里没有商品</div>)
          })()
        }
        {
          buys.map((item, index) => {
            return <ItemRight key={index} {...item}/>
          })
        }
      </div>
    </div>
    <div className="bottom">
      <div className="left">点击左侧商品库商品，即可添加到右侧购物车。　　 <span style={{color: '#ff6a00'}}>总价：{money} 元</span></div>
      <div className="right" onClick={submitEvent}>提交订单</div>
    </div>
    {
      (() => {
        if (model) return <Model />
      })()
    }
  </div>
)
// 注入方法
const mapDispatchToProps = (dispatch) => ({
  submitEvent: () => {
    dispatch(toogle_model())
  }
})
// 注入数据
const mapStateToProps = (state) => ({
  goods: state.goods,
  buys: state.buys,
  model: state.model,
  money: ((buys) => { // 计算价格
    let money = 0;
    for (let i = 0; i < buys.length; i++) {
      money += buys[i].buyNum * buys[i].price
    }
    return money
  })(state.buys)
})

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)


export default AppContainer
