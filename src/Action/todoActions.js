export const addTaskToToDoList = task => ({
  type: 'ADD_TASK',
  payload: task
});

export const removeTaskFromToDoList = index => ({
  type: 'REMOVE_TASK',
  payload: index
});

export const initTasksToDoList = tasks => ({
  type : 'INIT_TASKS',
  payload: tasks
});

export const updateCategory = data => ({
  type : 'UPDATE_TASK',
  payload : data
})





