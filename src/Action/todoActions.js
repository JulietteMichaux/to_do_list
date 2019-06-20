export const addTaskToToDoList = task => ({
  type: 'ADD_TASK',
  payload: task
});

export const removeTaskFromToDoList = index => ({
  type: 'REMOVE_TASK',
  payload: index
});