import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import LeftSideNavbar from './LeftSideNavbar';
import RightSideNavbar from './RightSideNavbar';
import logo from '../../assets/images/logo/AAPet.png'

interface Props {
    
}

export default function Navbar({}: Props): ReactElement {
    return (
      <div className='header-bottom'>
        <div className='header-sticky'>
          <div className='container'>
            <div className='row align-items-center position-relative'>
              <div className='col-lg-3 col-md-4 col-6'>
                <div className='header-logo'>
                  <Link to='/'>
                    <img src={logo} alt='Site Logo' />
                  </Link>
                </div>
              </div>

              <LeftSideNavbar />

              <RightSideNavbar />
            </div>
          </div>
        </div>
      </div>
    );
}


