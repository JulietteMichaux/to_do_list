import React from 'react';
import './NavigationBar.css';
import { Link } from 'react-router-dom';

function NavigationBar() {
  
  const style = {
    color: 'DodgerBlue',
    letterSpacing: 23
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <div className="alert alert-warning text-center font-size-xl text-wrap " style={style} role="alert">
            MY TO DO LIST
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-12'>
          <div className="nav-wrapper">
            <ul 
              className="nav nav-pills nav-fill flex-column flex-md-row" 
              id="tabs-icons-text" 
              role="tablist">
              <li className="nav-item">
                <Link 
                  to={`${process.env.PUBLIC_URL}/todo`}
                  activeclassname='active-link'
                  className="nav-link mb-sm-3 mb-md-0 nav-link-info bg-danger text-white font-weight-bold" 
                  >
                  À faire
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  to={`${process.env.PUBLIC_URL}/doing`} 
                  activeclassname='active-link'
                  className="nav-link mb-sm-3 mb-md-0 bg-info text-white font-weight-bold" 
                  >
                  En cours
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  to={`${process.env.PUBLIC_URL}/done`}
                  activeclassname='active-link'
                  className="nav-link mb-sm-3 mb-md-0 bg-success text-white font-weight-bold" 
                  >
                  Fait
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    )
  };

export default NavigationBar;
