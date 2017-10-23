import {connect} from 'react-redux'
import {come, res, add, delete1} from '../actions/'
import ItemRight from '../components/item/item_right.js'

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => {
  return ({
    resEvent: (item) => { // 数量减
      if (item.buyNum > 1) dispatch(res(item.id))
    },
    addEvent: (item) => { // 数量加
      dispatch(add(item.id))
    },
    deleteEvent: (item) => { // 从购物车删除
      let obj = come(item.id);
      obj.info = item;
      dispatch(obj);
      dispatch(delete1(item.id))
    }
  })
}

const ItemRightContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemRight)

export default ItemRightContainer
