import React, { ReactElement, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import menuData from "../../utils/data-menu";

interface Props {}

export default function Sidebar({}: Props): ReactElement {
    const {user} = useContext(AuthContext);
    const menu = user?.role === 'admin' ? menuData : menuData.filter(m => m.id !== 'auth');

    return (
        <nav className='sidebar sidebar-offcanvas' id='sidebar'>
            <ul className='nav'>
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
