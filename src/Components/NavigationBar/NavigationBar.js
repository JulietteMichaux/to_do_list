import React from 'react';
import './NavigationBar.css';
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <div class="alert alert-warning text-center font-weight-bold text-wrap" role="alert">
            TAF
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
                <Link to='/todo' 
                  className="nav-link mb-sm-3 mb-md-0 nav-link-info bg-danger text-white font-weight-bold" 
                  id="tabs-icons-text-1-tab" 
                  data-toggle="tab" 
                  href="#tabs-icons-text-1" 
                  role="tab" 
                  aria-controls="tabs-icons-text-1" 
                  aria-selected="true">
                    <i class="ni ni-cloud-upload-96 mr-2"></i>
                  À faire
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/doing' 
                  className="nav-link mb-sm-3 mb-md-0 bg-info text-white font-weight-bold" 
                  id="tabs-icons-text-2-tab" 
                  data-toggle="tab" 
                  href="#tabs-icons-text-2" 
                  role="tab" 
                  aria-controls="tabs-icons-text-2" 
                  aria-selected="false"><i class="ni ni-bell-55 mr-2"></i>
                  En cours
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/done' 
                  className="nav-link mb-sm-3 mb-md-0 bg-success text-white font-weight-bold" 
                  id="tabs-icons-text-3-tab" 
                  data-toggle="tab" 
                  href="#tabs-icons-text-3" 
                  role="tab" 
                  aria-controls="tabs-icons-text-3" 
                  aria-selected="false"><i class="ni ni-calendar-grid-58 mr-2"></i>
                  Fait
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    );
  }

export default NavigationBar;
