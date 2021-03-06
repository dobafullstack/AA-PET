import React from 'react';
import { Link } from 'react-router-dom';
import {Footer, Header} from '../components/Layout';

export function NotFound() {
    return (
        <div>
            <Header />
            <main>
                <div className="notfound-wrapper">
                    <h1>Oops!</h1>
                    <h3>404 - PAGE NOT FOUND</h3>
                    <p>
                        The page you are looking for might have been removed had its name changed or
                        is temporarily unavailable
                    </p>
                    <Link to="/">Go to homepage</Link>
                </div>
            </main>
            <Footer />
        </div>
    );
}
