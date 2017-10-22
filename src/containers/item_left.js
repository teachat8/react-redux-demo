import {connect} from 'react-redux'
import {checked, move} from '../actions/'
import ItemLeft from '../components/item/item_left.js'

const mapStateToProps = (state) => ({

})


const mapDispatchToProps = (dispatch) => ({
  checkEvent: (item) => {
    let obj = checked(item.id);
    obj.info = item;
    dispatch(obj);
    dispatch(move(item.id))
  }
})

const ItemLeftContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemLeft)

export default ItemLeftContainer
