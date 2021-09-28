import React from 'react'
import '../assets/css/Done.css';

export function Fail() {
    return (
        <div className="done-wrapper">
            <div className="done">
                <i className="fal fa-times-circle" style={{ color: '#FF0000' }}></i>
                <h1>Something was wrong</h1>
                <button className="err">Go back to homepage</button>
            </div>
        </div>
    );
}
