import React, { ReactElement, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { AuthContext } from '../../context/authContext';
import HeaderCart from './HeaderCart';

interface Props {}

export default function RightSideNavbar({}: Props): ReactElement {
    const { isLogin } = useContext(AuthContext);
    const cart = useAppSelector((state) => state.cart);

    return (
        <div className='col-lg-3 col-md-8 col-6'>
            <div className='header-actions'>
                <Link
                    to={isLogin ? '/my-account' : '/login'}
                    className='header-action-btn header-action-btn-wishlist'
                >
                    <i className='icon-user icons'></i>
                </Link>

                <div className='header-action-btn header-action-btn-cart d-none d-sm-flex'>
                    <a className='cart-visible' href='javascript:void(0)'>
                        <i className='icon-handbag icons'></i>
                        <span className='header-action-num'>{cart.products.length}</span>
                    </a>

                    <HeaderCart cart={cart} />
                </div>
                <div className='header-action-btn header-action-btn-cart d-flex d-sm-none'>
                    <Link to='/cart'>
                        <i className='icon-handbag icons'></i>
                        <span className='header-action-num'>{cart.products.length}</span>
                    </Link>
                </div>

                <a
                    href='javascript:void(0)'
                    className='header-action-btn header-action-btn-menu d-lg-none d-md-flex'
                >
                    <i className='icon-menu'></i>
                </a>
            </div>
        </div>
    );
}
