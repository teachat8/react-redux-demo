/*
item_left 是左侧的商品库的每一个商品的组件
*/

import {connect} from 'react-redux'
import {checked, move} from '../actions/'
import ItemLeft from '../components/item/item_left.js'

// mapStateToProps 是在 逻辑组件要注入显示组件的数据
const mapStateToProps = (state) => ({})

// mapStateToProps 是在 逻辑组件要注入显示组件的方法
const mapDispatchToProps = (dispatch) => ({
  checkEvent: (item) => {
    let obj = checked(item.id);
    obj.info = item;
    dispatch(obj); // 添加到购物车
    dispatch(move(item.id)) // 从商品列表移除
  }
})
// 注入 ItemLeft 组件
const ItemLeftContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemLeft)

export default ItemLeftContainer
