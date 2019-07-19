import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import axios from 'axios';
import apiurl from './App.conf';

//CSS
import './argon.min.css';
import './index.css';

// REDUCERS import
import todoReducer from './Reducers/todoReducer';

// import d'une action
import { initTasksToDoList } from './Action/todoActions';

axios.get(`${apiurl}/tasks`)
    .then((result) => {
    store.dispatch(initTasksToDoList(result.data));
    })

const store = createStore(
    todoReducer
  );

ReactDOM.render(
<Provider store={store}><BrowserRouter>
<App />
</BrowserRouter></Provider>,
 document.getElementById('root'));
