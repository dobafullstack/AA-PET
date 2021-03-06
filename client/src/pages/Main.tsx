import React from 'react';
import { Link } from 'react-router-dom';

export function HomeMain() {
    return (
        <div className="wrapper">
            <div className="slogan">
                <span>Best things for your boss</span>
            </div>
            <div className="left-slogan">
                <span>Product from over 50 brands</span>
            </div>

            <Link to="/home">
                <div className="btn-explore">
                    <p>Let's explore</p>
                </div>
            </Link>
        </div>
    );
}
