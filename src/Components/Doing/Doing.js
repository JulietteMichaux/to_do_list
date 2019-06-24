import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Doing.css';
import { connect } from 'react-redux';
import { removeTaskFromToDoList } from '../../Action/todoActions';

function Doing(props) {

  const [listDoing, setListDoing] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/doing')
    .then((result) => {
      setListDoing(result.data);
    })
  }, [])

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-10 offset-1'>
          {props.tasks.filter(task => task.category === 'doing').map((task, index) => {
            return(
              <div>
                <div className="alert alert-info" role="alert">
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

export default connect(mapStateToProps)(Doing);
