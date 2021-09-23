import React from 'react';
import { Link } from 'react-router-dom';

export function MainFooter() {
    return (
        <footer style={{backgroundImage: 'none', backgroundColor: 'black'}}>
            <div className="footer-item">
                <Link to="/about">About us</Link>
            </div>
            <div className="footer-item">
                <i className="fas fa-phone"></i>
                <Link to="/contact">0944609933</Link>
            </div>
            <div className="footer-item">
                <i className="fas fa-home"></i>
                <Link to="/address">48 Ly Thai To St</Link>
            </div>
            <div className="footer-item">
                <Link to="/FAQ">FAQ</Link>
            </div>
        </footer>
    );
}
