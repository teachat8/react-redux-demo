import { combineReducers } from 'redux'
import goods from './goods.js'
import buys from './buys.js'
import money from './money.js'

const App = combineReducers({
  goods,
  buys,
  money
})

export default App
