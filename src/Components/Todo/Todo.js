import React, { useState, useEffect } from 'react';
import './Todo.css';
/*import axios from 'axios';*/
import { connect } from 'react-redux';
import { removeTaskFromToDoList } from '../../Action/todoActions';

function Todo(props) {

  /*useEffect(() => {
    axios.get('http://localhost:3000/todo')
    .then((result) => {
      setTasks(result.data);
    })
  }, [])*/

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-10 offset-1'>
          {props.tasks.filter(task => task.category === 'todo').map((task, index) => {
            return(
              <div>
                <div className="alert alert-danger" role="alert">
                  <h3 className='card-title text-white'>{task.title}</h3>
                  <p className='card-text'>{task.desc}</p> 
                </div>
                <div className='col-2 offset-10'>
                  <button
                    className="btn btn-secondary"
                    onClick={() => props.dispatch(removeTaskFromToDoList(index))}
                    >        
                    Supprimer
                  </button>
                </div>
                <br />
              </div>
            )})}
        </div>
      </div>
    </div>
  )
};

const mapStateToProps = state => ({
  tasks: state
});

export default connect(mapStateToProps)(Todo);
