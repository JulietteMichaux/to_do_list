const updateReducer = (state = [], action) => {
  switch(action.type) {
    case 'UPDATE_TASK':
      return [
      ...state.concat(action.payload)
      ];
    default:
      return state;
  }
}

export default updateReducer;
