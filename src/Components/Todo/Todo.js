import React, { useState } from 'react';
import './Todo.css';
import { connect } from 'react-redux';
import axios from 'axios';
import { updateCategory } from '../../Action/todoActions';
import { removeTaskFromToDoList } from '../../Action/todoActions';
import { updateTitleDesc } from '../../Action/todoActions';

function Todo(props) {
  
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isShowing, setIsShowing] = useState(false);

  let toggle = () => {
    setIsShowing(!isShowing);
  };

  const deleteTask = (id) => {
    console.log(id);
    axios.delete(`http://localhost:8000/tasks/${id}`)
  }
 
  const submitChangedCategory = (id) => {
    axios.put(`http://localhost:8000/tasks/${id}`, {
      category: category
    })
  } 
 
  const submitChangedTitleDesc = (id) => {
    axios.put(`http://localhost:8000/tasks/${id}`, {
      title: title,
      description: description
    })
  } 

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-10 offset-1'>
          {props.tasks.filter(task => task.category === 'todo').map((task, index) => {
            return(
              <div key={index} className='container'>
                <div className='row'>
                  <div className='col-12'>
                    <div className="alert alert-danger" role="alert">
                      <h3 className='card-title text-white'>{task.title}</h3>
                      <p className='card-text'>{task.description}</p> 
                      <select 
                        className="form-control form-control-alternative" 
                        onChange={(event) => setCategory(event.target.value)}
                        >
                        <option default value='todo'>A faire</option>
                        <option value='doing'>En cours</option>
                        <option value='done'>Fait</option>
                      </select>
                      <button
                      className="btn btn-primary"
                      onClick={() => {
                        props.dispatch(updateCategory({id : task.id, category : category}));
                        submitChangedCategory(task.id)
                      }}>
                        changer de catégorie
                      </button>
                    <br />
                    <br />

                    <button 
                    type="button" 
                    className="btn btn-primary" 
                    data-toggle="modal" 
                    data-target="#exampleModal"
                    onClick={() => {
                      toggle()
                    }}>
                    modifier la tâche
                    </button>
                    {isShowing ? 
                  <div 
                    className="modal fade show"
                    id="exampleModal" 
                    tabindex="-1" 
                    role="dialog" 
                    aria-labelledby="exampleModalLabel" 
                    aria-modal="true"
                    style={{display: 'block'}}
                  >
                    <div 
                      className="modal-dialog" 
                      role="document">
                      <div 
                        className="modal-content"
                      >
                        <div className="modal-header"> 
                          <button 
                            type="button text-center" 
                            className="close" 
                            data-dismiss="modal" 
                            aria-label="Close"
                            onClick={() => setIsShowing()}>fermer
                          </button>
                        </div>
                        <div 
                          className="modal-body">
                          <input 
                            className="form-control form-control-alternative bg-secondary" 
                            placeholder="title" 
                            type="text"
                            value={task.title}
                            onChange={(event) => setTitle(event.target.value)}
                          /> 
                          <input 
                            className="form-control form-control-alternative bg-secondary" 
                            placeholder="description" 
                            type="text"
                            value={task.description}
                            onChange={(event) => setDescription(event.target.value)}
                          />
                        </div>
                        <div 
                          className="modal-footer">
                          <button 
                            type="button" 
                            className="btn btn-primary"
                            onClick={() => {
                              props.dispatch(updateTitleDesc({id : task.id, title: title, description: description}));
                              submitChangedTitleDesc(task.title, task.description)
                            }}>
                            Sauvegarder les modifications
                          </button>
                        </div>
                      </div>
                    </div>
                    </div>
                   : /*2è argu ternaire*/
                   <div 
                    className="modal fade"
                    id="exampleModal" 
                    tabindex="-1" 
                    role="dialog" 
                    aria-labelledby="exampleModalLabel" 
                    aria-hidden="true"
                    style={{display: 'none'}}
                  >
                    <div 
                      className="modal-dialog" 
                      role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 
                            className="modal-title" 
                            id="exampleModalLabel"
                          >titre
                          </h5>
                          <button 
                            type="button" 
                            className="close" 
                            data-dismiss="modal" 
                            aria-label="Close">fermer
                          </button>
                        </div>
                        <div 
                          //input onChange={(event) => setTitle(event.target.value)}
                          //value={title}
                          className="modal-body">
                          description
                        </div>
                        <div 
                          className="modal-footer">
                          <button 
                            type="button" 
                            className="btn btn-secondary" 
                            data-dismiss="modal"
                            >CLOSE
                          </button>
                          <button 
                            type="button" 
                            className="btn btn-primary"
                            >Sauvegarder les modifications
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  }
                   

                    <button
                        className="btn btn-secondary"
                        onClick={() => {
                          props.dispatch(removeTaskFromToDoList(index))
                          deleteTask(task.id)
                        }}
                      >        
                      supprimer
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
}

const mapStateToProps = state => ({
  tasks: state
});

export default connect(mapStateToProps)(Todo);
