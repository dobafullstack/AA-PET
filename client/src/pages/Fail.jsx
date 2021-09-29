import React from 'react'
import { Link } from 'react-router-dom';
import '../assets/css/Done.css';

export function Fail() {
    return (
        <div className="done-wrapper">
            <div className="done">
                <i className="fal fa-times-circle" style={{ color: '#FF0000' }}></i>
                <h1>Something was wrong</h1>
                <Link className="err" to="/home">Go back to homepage</Link>
            </div>
        </div>
    );
}
