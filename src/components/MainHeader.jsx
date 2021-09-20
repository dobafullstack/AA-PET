import React, { useState } from 'react';
import { Container } from 'reactstrap';
import LogoHeader from '../assets/images/MainLogoHeader.png';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

export default function MainHeader() {
    const [isHover, setIsHover] = useState(false);

    console.log(isHover)

    const subClassName = classnames('sub-wrapper', {
        active: isHover === true,
    });

    return (
        <header id="main-header">
            <div className="main-header-item left">
                <img src={LogoHeader} alt="" />
                <Link to="/home">
                    <span>AAPet</span>
                </Link>
            </div>
            <div className="main-header-item middle">
                <Link to="/home">Home</Link>
                <Link
                    to="/home"
                    className="has-item"
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                >
                    Item <i className="fas fa-chevron-down"></i>
                </Link>

                <Link to="/home">Pet</Link>
            </div>
            <div className="main-header-item right">
                <i className="fas fa-user-circle"></i>
                <span>
                    <Link to="/login">Login</Link> / <Link to="/register">Register</Link>
                </span>
                <i className="fal fa-shopping-cart"></i>
            </div>
            <div
                className={subClassName}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
            >
                <div className="sub-item">
                    <Link>Dresses</Link>
                    <Link><span>Outdoor</span></Link>
                    <Link><span>Indoor</span></Link>
                    <Link><span>Sport</span></Link>
                </div>
                <div className="sub-item">
                    <Link>Food</Link>
                    <Link><span>Royal</span></Link>
                    <Link><span>Hill's</span></Link>
                    <Link><span>Purina</span></Link>
                </div>
                <div className="sub-item">
                    <Link>Accessories</Link>
                    <Link><span>Groom</span></Link>
                    <Link><span>Nail cutter</span></Link>
                </div>
                <div className="sub-item">
                    <Link>Colar Belt</Link>
                    <Link><span>Leather</span></Link>
                    <Link><span>Fabrics</span></Link>
                </div>
                <div className="sub-item">
                    <Link>Leashes</Link>
                    <Link><span>Chain</span></Link>
                    <Link><span>Rubber</span></Link>
                    <Link><span>Leather</span></Link>
                </div>
                <div className="sub-item">
                    <Link>Bowl</Link>
                    <Link><span>Steel</span></Link>
                    <Link><span>Plastic</span></Link>
                </div>
            </div>
        </header>
    );
}
