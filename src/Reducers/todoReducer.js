const todoReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TASK':
      return [
        ...state, action.payload
      ];
    case 'REMOVE_TASK':
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload+ 1)
      ];
    case 'INIT_TASKS':
      return action.payload;
    case 'UPDATE_TASK':
      let stateTempTask = [...state];
      const taskIndex = stateTempTask.map(e => e.id).indexOf(action.payload.id);
      stateTempTask[taskIndex].category = action.payload.category;
      return stateTempTask;
    case 'UPDATE_TITLE_DESC':
      let stateTempTitleDesc = [...state];
      const taskIndexTitleDesc = stateTempTitleDesc.map(e => e.id).indexOf(action.payload.id);
      stateTempTitleDesc[taskIndexTitleDesc].title = action.payload.title;
      stateTempTitleDesc[taskIndexTitleDesc].description = action.payload.description;
      return stateTempTitleDesc;
    default:
      return state;
  }
}

export default todoReducer;
