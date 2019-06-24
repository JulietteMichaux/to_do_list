import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Done.css';
import { connect } from 'react-redux';
import { removeTaskFromToDoList } from '../../Action/todoActions';

function Done(props) {

  const [listDone, setListDone] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/done')
    .then((result) => {
      setListDone(result.data);
    })
  }, [])

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-10 offset-1'>
          {props.tasks.filter(task => task.category === 'done').map((task, index) => {
            return(
              <div>
                <div className="alert alert-success" role="alert">
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

export default connect(mapStateToProps)(Done);
