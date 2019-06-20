export const setTodo = (todo) => {
    if(localStorage.getItem('todo')) {
      localStorage.removeItem('todo');
      localStorage.setItem('todo', JSON.stringify(todo));
    } else {
      localStorage.setItem('todo', JSON.stringify(todo));
    }
  }
  
  export const getTodo = () => {
    if(localStorage.getItem('todo')) {
      return JSON.parse(localStorage.getItem('todo'));
    } else {
      return [];
    }
  }