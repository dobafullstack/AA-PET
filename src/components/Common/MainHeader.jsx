import classnames from 'classnames';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Collapse } from 'reactstrap';
import LogoHeader from '../../assets/images/MainLogoHeader.png';

export function MainHeader({ isLogin }) {
    const [isHover, setIsHover] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const subClassName = classnames('sub-wrapper', {
        active: isHover === true,
    });

    return (
        <header id="main-header">
            <div className="main-header-desktop-wrapper">
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

                    <Link to="/category">Category</Link>
                    <Link to="/home">Pet</Link>
                </div>
                <div className="main-header-item right">
                    <i className="fas fa-user-circle"></i>
                    {isLogin ? (
                        <span>
                            <Link to="/personal">My Account</Link>
                        </span>
                    ) : (
                        <span>
                            <Link to="/login">Login</Link> / <Link to="/register">Register</Link>
                        </span>
                    )}
                    <Link to="/cart" style={{ color: 'black' }}>
                        <i className="fal fa-shopping-cart"></i>
                    </Link>
                </div>
                <div
                    className={subClassName}
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                >
                    <div className="sub-item">
                        <Link to="/category/Dresses">Dresses</Link>
                        <Link to="/category/Dresses/Outdoor">
                            <span>Outdoor</span>
                        </Link>
                        <Link to="/category/Dresses/Indoor">
                            <span>Indoor</span>
                        </Link>
                        <Link to="/category/Dresses/Sport">
                            <span>Sport</span>
                        </Link>
                    </div>
                    <div className="sub-item">
                        <Link to="/category/Food">Food</Link>
                        <Link to="/category/Food/Royal">
                            <span>Royal</span>
                        </Link>
                        <Link to="/category/Food/Hill's">
                            <span>Hill's</span>
                        </Link>
                        <Link to="/category/Food/Purina">
                            <span>Purina</span>
                        </Link>
                    </div>
                    <div className="sub-item">
                        <Link to="/category/Accessories">Accessories</Link>
                        <Link to="/category/Accessories/Groom">
                            <span>Groom</span>
                        </Link>
                        <Link to="/category/Accessories/Nail cutter">
                            <span>Nail cutter</span>
                        </Link>
                    </div>
                    <div className="sub-item">
                        <Link to="/category/Colar Belt">Colar Belt</Link>
                        <Link to="/category/Colar Belt/Leather">
                            <span>Leather</span>
                        </Link>
                        <Link to="/category/Colar Belt/Fabrics">
                            <span>Fabrics</span>
                        </Link>
                    </div>
                    <div className="sub-item">
                        <Link to="/category/Leashes">Leashes</Link>
                        <Link to="/category/Leashes/Chain">
                            <span>Chain</span>
                        </Link>
                        <Link to="/category/Leashes/Rubber">
                            <span>Rubber</span>
                        </Link>
                        <Link to="/category/Leashes/Leather">
                            <span>Leather</span>
                        </Link>
                    </div>
                    <div className="sub-item">
                        <Link to="/category/Bowl">Bowl</Link>
                        <Link to="/category/Bowl/Steel">
                            <span>Steel</span>
                        </Link>
                        <Link to="/category/Bowl/Plastic">
                            <span>Plastic</span>
                        </Link>
                    </div>
                </div>
                <i className="fal fa-bars bar" onClick={() => setIsOpen(!isOpen)}></i>
            </div>

            <Collapse isOpen={isOpen} className="main-header-collapse">
                <ul>
                    <li>Home</li>
                    <li>
                        Item <i className="fas fa-chevron-down"></i>
                    </li>
                    <li>Pet</li>
                    <li>
                        <span>
                            <Link to="/login">Login</Link> / <Link to="/register">Register</Link>
                        </span>
                    </li>
                    <li>
                        <i className="fal fa-shopping-cart"></i>
                    </li>
                </ul>
            </Collapse>
        </header>
    );
}
