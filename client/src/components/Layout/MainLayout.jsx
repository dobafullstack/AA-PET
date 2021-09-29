import React from 'react';
import Header from '../Header';
import { MainHeader, MainFooter } from '../Common';
import Footer from '../Footer';
import { useRouteMatch } from 'react-router-dom';
import useVerifyToken from '../../hooks/useVerifyToken';

export default function MainLayout({ children }) {
    let match = useRouteMatch();
    const isLogin = useVerifyToken();
    const { path } = match;
    let isMain = false;

    if (path === '/') {
        isMain = false;
    } else {
        isMain = true;
    }

    return (
        <div>
            {isMain ? <MainHeader isLogin={isLogin}/> : <Header isLogin={isLogin}/>}
            <main>{children}</main>
            {isMain ? <MainFooter/> : <Footer/>}
        </div>
    );
}
