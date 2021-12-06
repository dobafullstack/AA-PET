import React, { ReactElement, useState } from "react";
import classNames from 'classnames'
import { Link } from "react-router-dom";
import HeaderCart from "./HeaderCart";
import Navbar from "./Navbar";

interface Props {}

export default function Header({}: Props): ReactElement {
    
    return (
        <div className='header section'>
            <div className='header-top bg-primary'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-12 col-lg-6'>
                            <div className='header-top-msg-wrapper'>
                                <p className='header-top-message'>
                                    Welcome To our shop !
                                </p>
                            </div>
                        </div>
                        <div className='col-12 col-lg-6'>
                            <div className='header-top-settings'>
                                <ul className='nav'>
                                    <li className='curreny-wrap'>
                                        <a href='#'>USD</a>
                                        <i className='fa fa-angle-down'></i>
                                        <ul className='dropdown-list curreny-list'>
                                            <li>
                                                <a href='#'>$ USD</a>
                                            </li>
                                            <li>
                                                <a href='#'>€ EUR</a>
                                            </li>
                                            <li>
                                                <a href='#'>£ GBP</a>
                                            </li>
                                            <li>
                                                <a href='#'>₹ INR</a>
                                            </li>
                                            <li>
                                                <a href='#'>¥ JPY</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Navbar />
        </div>
    );
}
