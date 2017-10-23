import { combineReducers } from 'redux'
import goods from './goods.js'
import buys from './buys.js'
import model from './model.js'

const App = combineReducers({
  goods,
  buys,
  model
})

export default App
