import classnames from "classnames";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../assets/sass/components/sidebar.scss";

export const Sidebar = () => {
    const [isClickStorage, setIsClickStorage] = useState(false);
    const { pathname } = useLocation();
    const subStorageMenuClass = classnames("sub-menu", {
        active: isClickStorage,
    });

    return (
        <div className='sidebar-wrapper'>
            <div className={`side-item ${pathname === "/" ? "active" : ""}`}>
                <i className='fal fa-dungeon'></i>
                <Link to='/'>Dashboard</Link>
            </div>
            <div className='side-item storage'>
                <div className='main-menu'>
                    <i className='fal fa-archive'></i>
                    <p onClick={() => setIsClickStorage(!isClickStorage)}>
                        Storage&nbsp;<i className='fal fa-chevron-down'></i>
                    </p>
                </div>
                <div className={subStorageMenuClass}>
                    <div className='sub-item'>
                        <i className='fas fa-th'></i>
                        <Link to='/category'>Category</Link>
                    </div>
                    <div className='sub-item'>
                        <i className='fal fa-boxes'></i>
                        <Link to='/product'>Product</Link>
                    </div>
                    <div className='sub-item'>
                        <i className='far fa-paw'></i>
                        <Link to='/pet'>Pet</Link>
                    </div>
                </div>
            </div>
            <div
                className={`side-item ${pathname === "/user" ? "active" : ""}`}>
                <i className='fal fa-user'></i>
                <Link to='/user'>User</Link>
            </div>
            <div
                className={`side-item ${
                    pathname === "/order" ? "active" : ""
                }`}>
                <i className='far fa-gift'></i>
                <Link to='/order'>Order</Link>
            </div>
        </div>
    );
};
