import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/LogoHeader.png';
import { Collapse } from 'reactstrap';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header>
            <div className="desktop-wrapper">
                <div className="header-left">
                    <Link to="/">
                        <img src={Logo} alt="" />
                    </Link>
                    <Link to="/">
                        <p>Mòe</p>
                    </Link>
                </div>
                <div className="header-right">
                    <i className="fas fa-user-circle"></i>
                    <span>
                        <Link to="/login">Login</Link> / <Link to="/register">Register</Link>
                    </span>
                    <i className="fal fa-bars bar" onClick={() => setIsOpen(!isOpen)}></i>
                </div>
            </div>
            <Collapse className="header-collapse" isOpen={isOpen}>
                <ul>
                    <li>
                        <i className="fas fa-user"></i>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <i className="fas fa-user-plus"></i>
                        <Link to="/register">Register</Link>
                    </li>
                    <li>
                        <i className="fas fa-sign-out-alt"></i>
                        <Link to="/login">Logout</Link>
                    </li>
                </ul>
            </Collapse>
        </header>
    );
}
