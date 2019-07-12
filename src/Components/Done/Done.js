import React, { useState } from 'react';
import './Done.css';
import { connect } from 'react-redux';
import axios from 'axios';
import { removeTaskFromToDoList } from '../../Action/todoActions';
import { updateCategory } from '../../Action/todoActions';

function Done(props) {

  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const deleteTask = (id) => {
    console.log(id);
    axios.delete(`http://localhost:8000/tasks/${id}`)
  }

  const submitChangedCategory = (id) => {
    axios.put(`http://localhost:8000/tasks/${id}`, {
      category: category
    })
  } 

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-10 offset-1'>
          {props.tasks.filter(task => task.category === 'done').map((task, index) => {
            return(
              <div key={index} className='container'>
                <div className='row'>
                  <div className='col-12'>
                    <div className="alert alert-success" role="alert">
                      <h3 className='card-title text-white'>{task.title}</h3>
                      <p className='card-text'>{task.description}</p> 
                      <select 
                        className='form-control form-control-alternative'
                        onChange={(event) => setCategory(event.target.value)}
                        >
                        <option value='todo'>A faire</option>
                        <option value='doing'>En cours</option>
                        <option value='done'>Fait</option>
                      </select>
                      <button
                      className="btn btn-primary"
                      onClick={() => {
                        props.dispatch(updateCategory({id : task.id, category : category}))
                        submitChangedCategory(task.id)
                      }}>
                        changer de catégorie
                      </button>
                    <br />
                    <br />
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
                  </div>
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

export default connect(mapStateToProps)(Done);
