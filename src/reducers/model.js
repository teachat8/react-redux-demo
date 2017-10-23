
const model = (state = false, action) => {
  switch (action.type) {
    case 'TOOGLE_MODEL':
      return !state
    default:
      return state
  }
}

export default model
