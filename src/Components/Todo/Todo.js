import React, { useState } from 'react';
import './Todo.css';
import { connect } from 'react-redux';
import { removeTaskFromToDoList } from '../../Action/todoActions';
import axios from 'axios';

function Todo(props) {
  
  const [id, setId] = useState(0);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('todo');

  const deleteTask = (id) => {
    console.log(id);
    axios.delete(`http://localhost:8000/tasks/${id}`)
  }
  
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-10 offset-1'>
          {props.tasks.filter(task => task.category === 'todo').map((task, index) => {
            return(
              <div>
                <div className="alert alert-danger" role="alert">
                  <h3 className='card-title text-white'>{task.title}</h3>
                  <p className='card-text'>{task.description}</p> 
                </div>
                <div className='col-2 offset-10'>
                  <button
                    className="btn btn-secondary"
                    onClick={() => {
                      props.dispatch(removeTaskFromToDoList(index))
                      deleteTask(task.id)
                    }}
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
