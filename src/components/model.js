import React from 'react'
import './model.css'

const Model = ({buys, money, addEvent, payEvent, model}) => {
  return (
    <div className="model-box" onClick={(e) => {
      e.stopPropagation()
      addEvent()
    }}>
      <div className="model">
        <div className="order">
          <div className="order-title">订单详情</div>
          <ul>
          {
            buys.map((item, index) => {
              return (
                <li className="goods-li" key={index}>
                  <span className="goods-title">{item.title}</span>
                  <span className="goods-num">x{item.buyNum}</span>
                  <span className="goods-price">￥{item.price}</span>
                </li>
              )
            })
          }
          </ul>
        </div>
        <div className="center">共计：￥{money}</div>
        <div className="bottom">
          <div className="button" onClick={(e) => {
            e.stopPropagation()
            addEvent()
          }}>再想想</div>
          <div className="button" onClick={(e) => {
            e.stopPropagation()
            payEvent()
          }}>去付款</div>
        </div>
      </div>
    </div>
  )
}

export default Model
