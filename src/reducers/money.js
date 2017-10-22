
const money = (state = 0, action) => {
  switch (action.type) {
    case 'MONEY':
      return 0
      break;
    default:
      return state
  }
}

export default money
