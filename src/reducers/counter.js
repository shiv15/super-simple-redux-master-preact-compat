export const counter = (state = {count: 12, hits: 0}, action) => {


  switch (action.type) {
    case 'INCREMENT':
      return Object.assign({}, state, {
        count: state.count + 1,
        hits: state.hits + 1
      });
    case 'DECREMENT':
      return Object.assign({}, state, {
        count: state.count - 1,
        hits: state.hits + 1
      });
    default:
      return state
  }
}
