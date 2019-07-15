import React, { useState } from 'react';
import './Doing.css';
import { connect } from 'react-redux';
import axios from 'axios';
import { updateCategory } from '../../Action/todoActions';
import { removeTaskFromToDoList } from '../../Action/todoActions';
import { updateTitleDesc } from '../../Action/todoActions';

function Doing(props) {
  
  const [category, setCategory] = useState('');
  // const [title, setTitle] = useState('');
  // const [description, setDescription] = useState('');
  const [isShowing, setIsShowing] = useState(false);
  const [titleModal, setTitleModal] = useState('');
  const [descriptionModal, setDescriptionModal] = useState('');
  const [idBddTaskSelected, setIdBddTaskSelected] = useState(0);

  let toggle = () => {
    setIsShowing(!isShowing);
  };

  const deleteTask = (id) => {
    axios.delete(`http://localhost:8000/tasks/${id}`)
  }
  
  const setModalValues = (id) => {
    const taskIndex = props.tasks.map(taskbis => taskbis.id).indexOf(id);
    setTitleModal(props.tasks[taskIndex].title);
    setDescriptionModal(props.tasks[taskIndex].description);
    setIdBddTaskSelected(id)
  }

  const submitChangedCategory = (id) => {
    axios.put(`http://localhost:8000/tasks/category/${id}`, {
      category: category
    })
  } 
 
  const submitChangedTitleDesc = () => {
    axios.put(`http://localhost:8000/tasks/content/${idBddTaskSelected}`, {
      title: titleModal,
      description: descriptionModal
    })
  } 

  return (
    // container
    <div className='container'> 
      <div className='row'>
        <div className='col-10 offset-1'>
          {props.tasks.filter(task => task.category === 'doing').map((task, index) => {
            return(
              //container du filter/map
              <div key={index} className='container'>
                <div className="alert alert-info" role="alert">
                  <h3 className='card-title text-white'>{task.title}</h3>
                  <p className='card-text'>{task.description}</p> 
                  <div className='row'>
                    <select // choix de la catégorie
                      className="form-control form-control-alternative" 
                      onChange={(event) => setCategory(event.target.value)}
                      >
                      <option default value='todo'>A faire</option>
                      <option value='doing'>En cours</option>
                      <option value='done'>Fait</option>
                    </select>
                  </div>
                  <br />
                  <div className='row'>
                    <div className='col-4'>
                      <button //bouton changement de catégorie
                        className="btn btn-primary"
                        onClick={() => {
                          props.dispatch(updateCategory({id : task.id, category : category}));
                          submitChangedCategory(task.id)
                        }}
                        >changer de catégorie
                      </button>
                    </div>
                    <div className='col-4'>
                      <button //bouton modal
                        type="button" 
                        className="btn btn-primary" 
                        data-toggle="modal" 
                        data-target="#exampleModal"
                        onClick={() => {
                          toggle();
                          setModalValues(task.id);
                        }}
                        >modifier la tâche
                      </button>
                    </div>
                    <div className='col-4'>
                      <button //bouton supprimer
                        className="btn btn-secondary"
                        onClick={() => {
                          props.dispatch(removeTaskFromToDoList({index}))
                          deleteTask(task.id)
                        }}
                        >supprimer
                      </button>
                    </div>
                  </div>
              </div>
            </div>
          )})}
          {isShowing ? //ternaire modal
            <div //1er argument ternaire
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
                <div className="modal-content">
                  <div className="modal-header"> 
                    <button //bouton fermeture modal
                      type="button text-center" 
                      className="close" 
                      data-dismiss="modal" 
                      aria-label="Close"
                      onClick={() => setIsShowing()}>fermer 
                    </button>
                  </div>
                  <div className="modal-body">
                    <input 
                      className="form-control form-control-alternative bg-secondary" 
                      placeholder="title" 
                      type="text"
                      value={titleModal}
                      onChange={(event) => setTitleModal(event.target.value)}
                    /> 
                    <input 
                      className="form-control form-control-alternative bg-secondary" 
                      placeholder="description" 
                      type="text"
                      value={descriptionModal}
                      onChange={(event) => setDescriptionModal(event.target.value)}
                    />
                  </div>
                  <div className="modal-footer">
                    <button 
                      type="button" 
                      className="btn btn-primary"
                      onClick={() => {
                        props.dispatch(updateTitleDesc({id : idBddTaskSelected, title: titleModal, description: descriptionModal}));
                        submitChangedTitleDesc()
                        toggle()
                      }}
                      >Sauvegarder les modifications
                    </button>
                  </div>
                </div>
              </div>
            </div>
            : //2è argu ternaire
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
                  <div className="modal-body">
                    description
                  </div>
                  <div className="modal-footer">
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
            </div> //fin ternaire
            } 
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  tasks: state
});

export default connect(mapStateToProps)(Doing);
