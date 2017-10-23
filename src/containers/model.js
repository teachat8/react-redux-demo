import {connect} from 'react-redux'
import {toogle_model} from '../actions/'
import Model from '../components/model.js'

const mapStateToProps = (state) => ({
  buys: state.buys,
  money: ((buys) => {
    let money = 0;
    for (let i = 0; i < buys.length; i++) {
      money += buys[i].buyNum * buys[i].price
    }
    return money
  })(state.buys),
  model: state.model
})

const mapDispatchToProps = (dispatch) => ({
  payEvent: () => {
    console.log('已完成支付。');
    dispatch(toogle_model())
  },
  addEvent: () => {
    dispatch(toogle_model())
  }
})

const modelContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Model)

export default modelContainer
