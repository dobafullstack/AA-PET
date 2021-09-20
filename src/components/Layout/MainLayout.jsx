import React from 'react';
import Header from '../Header';
import MainHeader from '../MainHeader'
import MainFooter from '../MainFooter';
import Footer from '../Footer';
import { useRouteMatch } from 'react-router-dom';

export default function MainLayout({ children }) {
    let match = useRouteMatch();
    const { path } = match;
    let isMain = false;

    if (path.includes('login') || path.includes('register') || path === '/') {
        isMain = false;
    } else {
        isMain = true;
    }
    
    return (
        <div>
            {isMain ? <MainHeader /> : <Header />}
            <main>{children}</main>
            {isMain ? <MainFooter /> : <Footer />}
        </div>
    );
}
