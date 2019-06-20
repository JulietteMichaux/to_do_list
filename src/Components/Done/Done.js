import React from 'react';
import './Done.css';
import { connect } from 'react-redux';
import { removeTaskFromToDoList } from '../../Action/todoActions';

function Done(props) {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-10 offset-1'>
          {props.tasks.map((task, index) => {
            return(
              <div>
                <div className="alert alert-success" role="alert">
                  <h3 className='card-title text-white'>{task.title}</h3>
                  <p className='card-text'>{task.desc}</p> 
                </div>
                <div className='col-2 offset-10'>
                  <button
                    className="btn btn-success"
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

export default connect(mapStateToProps)(Done);
