import React from 'react';
import './NavigationBar.css';
import { NavLink } from 'react-router-dom';
import { brotliDecompress } from 'zlib';

function NavigationBar() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <div className="alert alert-warning text-center font-weight-bold text-wrap" role="alert">
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
                <NavLink 
                  to='/todo' 
                  activeClassName='active-link'
                  className="nav-link mb-sm-3 mb-md-0 nav-link-info bg-danger text-white font-weight-bold" 
                  id="tabs-icons-text-1-tab" 
                  data-toggle="tab" 
                  href="#tabs-icons-text-1" 
                  role="tab" 
                  aria-controls="tabs-icons-text-1" 
                  aria-selected="true">
                    <i class="ni ni-cloud-upload-96 mr-2"></i>
                  À faire
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  to='/doing' 
                  activeClassName='active-link'
                  className="nav-link mb-sm-3 mb-md-0 bg-info text-white font-weight-bold" 
                  id="tabs-icons-text-2-tab" 
                  data-toggle="tab" 
                  href="#tabs-icons-text-2" 
                  role="tab" 
                  aria-controls="tabs-icons-text-2" 
                  ><i className="ni ni-bell-55 mr-2"></i>
                  En cours
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  to='/done' 
                  activeClassName='active-link'
                  className="nav-link mb-sm-3 mb-md-0 bg-success text-white font-weight-bold" 
                  id="tabs-icons-text-3-tab" 
                  data-toggle="tab" 
                  href="#tabs-icons-text-3" 
                  role="tab" 
                  aria-controls="tabs-icons-text-3" 
                  aria-selected="false"><i className="ni ni-calendar-grid-58 mr-2"></i>
                  Fait
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    );
  }

export default NavigationBar;
