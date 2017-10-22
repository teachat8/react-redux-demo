import React from 'react'
import ItemRight from './item_right.js'
import ItemLeft from './item_left.js'
import '../components/app.css'
import {connect} from 'react-redux'
import {} from '../actions/'

const App = ({goods, buys, money}) => (
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
      <div className="left">共计：{money}元</div>
      <div className="right">立即购买</div>
    </div>
  </div>
)
const mapDispatchToProps = (dispatch) => ({

})

const mapStateToProps = (state) => ({
  goods: state.goods,
  buys: state.buys,
  money: state.money
})

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)


export default AppContainer
