import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Todo from './Components/Todo/Todo';
import Doing from './Components/Doing/Doing';
import Done from './Components/Done/Done';
import AddTask from './Components/AddTask/AddTask';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import { connect } from 'react-redux';
import './App.css';

function App(props) {
  return (
    <div>
      <NavigationBar />
       <Route exact path="/" component={Home} />
        <Route path="/todo" component={Todo} />
        <Route path="/doing" component={Doing} />
        <Route path="/done" component={Done} />
        <br />
      <AddTask />
    </div>
  );
}

export default connect()(App);
