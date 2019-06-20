import React, { useState } from 'react';
import { connect } from 'react-redux';
import './AddTask.css';
import { addTaskToToDoList } from '../../Action/todoActions';

function AddTask(props) {

  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  /*const [listTasks, setListTasks] = useState([]);

  /*const addTask = () => {
    const Task = {
      title : title,
      desc : desc
    }
    setListTasks([...listTasks, Task]) 
    console.log(listTasks)
  }*/

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-10 offset-1'>
          <div className="card-body">
            <div className='row'>
            <h6 class="card-title">Ajout d'une tâche</h6>
            </div>
            <div className='row'>
              <input 
              className="form-control form-control-alternative bg-secondary" 
              placeholder="titre" 
              type="text-uppercase"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              />
            </div>
            <br/>
            <div className='row'>
              <input 
                className="form-control form-control-alternative bg-secondary" 
                placeholder="description" 
                type="text"
                value={desc}
                onChange={(event) => setDesc(event.target.value)}
              />
            </div>
            <br />
            <div className='row'>
              <div className='col-2 offset-10'>
                <button
                  className="btn btn-success"
                  onClick={() => props.dispatch(addTaskToToDoList({title : title, desc : desc}))}
                  >              
                  Ajouter
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default connect()(AddTask);
