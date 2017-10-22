
const buys = (state = [], action) => {
  switch (action.type) {
    case 'DELETE':
      return state.filter(item => item.id !== action.id)
    case 'ADD':
      return state.concat(action.info)
    case 'RES':
      return state.map(item => {
        if (item.id === action.id) item.buyNum--
        return item
      })
    case 'ADD_NUM':
      return state.map(item => {
        if (item.id === action.id) item.buyNum++
        return item
      })
    default:
      return state
  }
}

export default buys
