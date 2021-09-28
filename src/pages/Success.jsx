import React from 'react'
import '../assets/css/Done.css'

export function Success() {
    return (
        <div className="done-wrapper">
            <div className="done">
                <i className="fal fa-check-circle" style={{ color: '#5FDF4A' }}></i>
                <h1>Thank you so much</h1>
                <button>Go back to homepage</button>
            </div>
        </div>
    );
}
