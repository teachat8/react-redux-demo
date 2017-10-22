import data from './appData.js';
function changeDataFunc () {
  for (let i = 0; i < data.length; i++) {
    data[i].buyNum = 1;
  }
  return data;
}

const goods = (state = [...(changeDataFunc(data))], action) => {
  switch (action.type) {
    case 'MOVE':
      return state.filter(item => item.id !== action.id)
    case 'COME':
      return state.concat(action.info).sort((a, b) => {
        return a.id - b.id;
      })
    default:
      return state
  }
}

export default goods
