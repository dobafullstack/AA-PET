import React, { ReactElement, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';
import HeaderCart from './HeaderCart';

interface Props {}

export default function RightSideNavbar({}: Props): ReactElement {
  const { isLogin } = useContext(AuthContext);

  return (
    <div className='col-lg-3 col-md-8 col-6'>
      <div className='header-actions'>
        <div className='header-action-btn header-action-btn-search d-none d-md-flex'>
          <div className='action-execute'>
            <a className='action-search-open' href='javascript:void(0)'>
              <i className='icon-magnifier icons'></i>
            </a>
            <a className='action-search-close' href='javascript:void(0)'>
              <i className='ti-close'></i>
            </a>
          </div>

          <form className='header-search-form' action='#'>
            <input type='text' className='header-search-input' placeholder='Search Our Store' />
            <button className='header-search-button'>
              <i className='icon-magnifier icons'></i>
            </button>
          </form>
        </div>

        <Link to={isLogin ? '/my-account' : '/login'} className='header-action-btn header-action-btn-wishlist'>
          <i className='icon-user icons'></i>
        </Link>

        <div className='header-action-btn header-action-btn-cart d-none d-sm-flex'>
          <a className='cart-visible' href='javascript:void(0)'>
            <i className='icon-handbag icons'></i>
            <span className='header-action-num'>3</span>
          </a>

          <HeaderCart />
        </div>
        <div className='header-action-btn header-action-btn-cart d-flex d-sm-none'>
          <Link to="/cart">
            <i className='icon-handbag icons'></i>
            <span className='header-action-num'>4</span>
          </Link>
        </div>

        <a href='javascript:void(0)' className='header-action-btn header-action-btn-menu d-lg-none d-md-flex'>
          <i className='icon-menu'></i>
        </a>
      </div>
    </div>
  );
}
