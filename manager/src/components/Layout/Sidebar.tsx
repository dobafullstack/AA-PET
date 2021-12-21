import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import menu from "../../utils/data-menu";

interface Props {}

export default function Sidebar({}: Props): ReactElement {
    return (
        <nav className='sidebar sidebar-offcanvas' id='sidebar'>
            <ul className='nav'>
                {/* <li className='nav-item'>
                    <a className='nav-link' href='index.html'>
                        <i className='mdi mdi-home menu-icon'></i>
                        <span className='menu-title'>Dashboard</span>
                    </a>
                </li>
                <li className='nav-item'>
                    <a
                        className='nav-link'
                        data-toggle='collapse'
                        href='#ui-basic'
                        aria-expanded='false'
                        aria-controls='ui-basic'>
                        <i className='mdi mdi-circle-outline menu-icon'></i>
                        <span className='menu-title'>UI Elements</span>
                        <i className='menu-arrow'></i>
                    </a>
                    <div className='collapse' id='ui-basic'>
                        <ul className='nav flex-column sub-menu'>
                            <li className='nav-item'>
                                {" "}
                                <a
                                    className='nav-link'
                                    href='pages/ui-features/buttons.html'>
                                    Buttons
                                </a>
                            </li>
                            <li className='nav-item'>
                                {" "}
                                <a
                                    className='nav-link'
                                    href='pages/ui-features/typography.html'>
                                    Typography
                                </a>
                            </li>
                        </ul>
                    </div>
                </li> */}
                {menu.map((item) => {
                    if (item.subMenu.length === 0 && item.path) {
                        return (
                            <li className='nav-item'>
                                <Link className='nav-link' to={item.path}>
                                    <i className={`${item.icon} menu-icon`}></i>
                                    <span className='menu-title'>
                                        {item.title}
                                    </span>
                                </Link>
                            </li>
                        );
                    }

                    if (item.id) {
                        return (
                            <li className='nav-item'>
                                <a
                                    className='nav-link'
                                    data-toggle='collapse'
                                    href={`#${item.id}`}
                                    aria-expanded='false'
                                    aria-controls='ui-basic'>
                                    <i className={`${item.icon} menu-icon`}></i>
                                    <span className='menu-title'>
                                        {item.title}
                                    </span>
                                    <i className='menu-arrow'></i>
                                </a>
                                <div className='collapse' id={item.id}>
                                    <ul className='nav flex-column sub-menu'>
                                        {item.subMenu.map((child) => (
                                            <li className='nav-item'>
                                                <Link
                                                    className='nav-link'
                                                    to={child.path}>
                                                    {child.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </li>
                        );
                    }
                })}
            </ul>
        </nav>
    );
}
