import React from 'react';
import { Link } from "react-router-dom";
import '../assets/css/header.css';
import Logo from '../assets/images/LogoHeader.png';
 
export default function Header() {
    return (
        <header>
            <div className='header-left'>
                <Link to='/'>
                    <img src={Logo} alt='' />
                </Link>
                <Link to='/'>
                    <p>Mòe</p>
                </Link>
            </div>
            <div className='header-right'>
                <i className='fas fa-user-circle'></i>
                <span>
                    <Link to='/login'>Login</Link> /{" "}
                    <Link to='/register'>Register</Link>
                </span>
            </div>
        </header>
    );
}
