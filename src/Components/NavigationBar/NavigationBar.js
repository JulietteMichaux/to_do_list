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
                  
                  /*NavLink
                  aria-selected={navPills === 2}
                  className={classnames('mb-sm-3 mb-md-0', {
                    active: navPills === 2,
                  })}
                  onClick={e => toggleNavs(e, 'Chapitre', 2)}
                  href="#"
                  role="tab"*/

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
                <NavLink activeClassName="active" to='/doing' 
                  className="nav-link mb-sm-3 mb-md-0 bg-info text-white font-weight-bold" 
                  id="tabs-icons-text-2-tab" 
                  data-toggle="tab" 
                  href="#tabs-icons-text-2" 
                  role="tab" 
                  aria-controls="tabs-icons-text-2" 
                  aria-selected="false"><i className="ni ni-bell-55 mr-2"></i>
                  En cours
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="active" to='/done' 
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
