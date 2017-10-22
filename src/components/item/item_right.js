import React from 'react'
import './item_right.css'

const Item = ({id, imgSrc, buyNum, title, price, desc, resEvent, addEvent, deleteEvent}) => {
  return (
    <div className="cart-item-right">
      <div className="left">
        <img src={imgSrc}/>
      </div>
      <div className="right">
        <div className="title">{title}</div>
        <div className="price">售价：{price}元</div>
        <div className="number">
          <span className="can" onClick={() => {
            resEvent({id, buyNum})
          }}>-</span>
          <span>{buyNum}</span>
          <span className="can" onClick={() => {
            addEvent({id})
          }}>+</span>
          <span className="r" onClick={() => {
            deleteEvent({id, imgSrc, buyNum, title, price, desc})
          }}>删</span>
        </div>
      </div>
    </div>
  )
}

export default Item
