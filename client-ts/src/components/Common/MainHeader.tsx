import classnames from 'classnames';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Collapse } from 'reactstrap';
import {
    GetAllCategoriesAction,
    GetAllDetailCategoriesAction
} from '../../app/actions/category.action';
import LogoHeader from '../../assets/images/MainLogoHeader.png';
import { capitalize } from '../../configs/TextFormat';

export function MainHeader({ isLogin }) {
    const [isHover, setIsHover] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.category.categories);
    const detail_categories = useSelector((state) => state.category.detail_categories);

    useEffect(() => {
        dispatch(GetAllCategoriesAction());
        dispatch(GetAllDetailCategoriesAction());
    }, []);

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
                    {categories.map((category) => (
                        <div className="sub-item" key={category._id}>
                            <Link
                                to={`/category/${category._id}`}
                                style={{ textTransform: 'capitalize' }}
                            >
                                {category.name}
                            </Link>
                            {detail_categories
                                .filter((detail) => detail.category_id._id === category._id)
                                .map((item) => (
                                    <Link
                                        to={`/category/${category._id}/${item._id}`}
                                        style={{ textTransform: 'capitalize' }}
                                        key={item._id}
                                    >
                                        <span>{item.name}</span>
                                    </Link>
                                ))}
                        </div>
                    ))}
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
