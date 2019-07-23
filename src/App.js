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
      <AddTask />
      <br />
      <Route exact path={`${process.env.PUBLIC_URL}`} component={Home} />
      <Route path={`${process.env.PUBLIC_URL}/todo`} component={Todo} />
      <Route path={`${process.env.PUBLIC_URL}/doing`} component={Doing} />
      <Route path={`${process.env.PUBLIC_URL}/done`} component={Done} />
    </div>
  );
}

export default connect()(App);
