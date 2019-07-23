import React, { useState } from 'react';
import { connect } from 'react-redux';
import './AddTask.css';
import { addTaskToToDoList } from '../../Action/todoActions';
import axios from 'axios';
import apiurl from '../../App.conf';

function AddTask(props) {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('todo');

  const submitTask = () => {
    axios.post(`${apiurl}/tasks`, {
      category: category,
      title: title,
      description: description
    })
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-10 offset-1'>
          <h6 className="card-title text-primary font-weight-bold">Catégorie de la tâche</h6>
            <select 
              className="form-control form-control-alternative"
              onChange={(event) => setCategory(event.target.value)}
              >
              <option value='todo'>A faire</option>
              <option value='doing'>En cours</option>
              <option value='done'>Fait</option>
            </select>
        </div>
      </div>
      <br />
      <div className='row'>
        <div className='col-10 offset-1'>
        <h6 className="card-title text-primary font-weight-bold">Ajout d'une tâche</h6>
        </div>
      </div>
      <div className='row'>
        <div className='col-10 offset-1'>
          <input 
            className="form-control form-control-alternative bg-secondary" 
            placeholder="titre" 
            type="text-uppercase"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
      </div>
      <br/>
      <div className='row'>
        <div className='col-10 offset-1'>
          <input 
            className="form-control form-control-alternative bg-secondary" 
            placeholder="description" 
            type="text"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
      </div>
      <br/>
      <div className='row'>
        <div className='col-1 offset-9'>
          <button
            className="btn btn-primary"
            onClick={() => {
              props.dispatch(addTaskToToDoList({title : title, description : description, category : category}))
              submitTask()
            }}
            >              
            Ajouter
          </button>
        </div>
      </div>
    </div>
  )
};

export default connect()(AddTask);
