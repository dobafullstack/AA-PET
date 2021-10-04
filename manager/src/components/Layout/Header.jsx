import React from 'react'
import '../../assets/sass/header.scss';
import Avt from '../../assets/images/avatar.png';
import {Link} from 'react-router-dom'

export const Header = () => {
    return (
        <div class="header-wrapper">
            <span className="brand">AApet</span>
            <div className="right-side">
                <img src={Avt} className="img-fluid" alt="" />
                <span className="user-name">Your name <i className="fal fa-chevron-down"></i></span>
                <div className="sub-options">
                    <Link to="/" className="my-2"><i className="fal fa-user"></i>&nbsp;Your profile</Link>
                    <Link to="/" className="my-2"><i className="fal fa-cog"></i>&nbsp;Setting</Link>
                    <Link to="/" className="my-2"><i className="fal fa-sign-out-alt"></i>&nbsp;Logout</Link>
                </div>
            </div>
        </div>
    )
}
