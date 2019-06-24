import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { setTodo } from './Utils/storageTodo';

//CSS
import './argon.min.css';
import './index.css';

// REDUCERS import
import todoReducer from './Reducers/todoReducer';

function recover({getState}) {
  return next =>  action  => {
    const returnValue = next(action);
    setTodo(getState());
    return returnValue();
  }
}

const store = createStore(
    todoReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

ReactDOM.render(
<Provider store={store}><BrowserRouter>
<App />
</BrowserRouter></Provider>,
 document.getElementById('root'));
