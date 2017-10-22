import React from 'react'
import './item_left.css'

const Item = ({data, checkEvent}) => {
  // console.log(data);
  return (
    <div className="cart-item-left" onClick={() => {
      checkEvent(data)
    }}>
      <img src={data.imgSrc}/>
    </div>
  )
}

export default Item
