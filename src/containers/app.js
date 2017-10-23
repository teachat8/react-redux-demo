import React from 'react'
import ItemRight from './item_right.js'
import ItemLeft from './item_left.js'
import Model from './model.js'
import '../components/app.css'
import {connect} from 'react-redux'
import {toogle_model} from '../actions/'

const App = ({goods, buys, model, submitEvent}) => (
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
      <div className="left">点击左侧商品库商品，即可添加到右侧购物车</div>
      <div className="right" onClick={submitEvent}>提交订单</div>
    </div>
    {
      (() => {
        if (model) return <Model />
      })()
    }
  </div>
)
const mapDispatchToProps = (dispatch) => ({
  submitEvent: () => {
    dispatch(toogle_model())
  }
})

const mapStateToProps = (state) => ({
  goods: state.goods,
  buys: state.buys,
  model: state.model
})

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)


export default AppContainer
