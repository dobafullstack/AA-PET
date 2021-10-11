import React, { useEffect } from 'react';
import { MainHeader, MainFooter, Footer, Header } from './';
import { useRouteMatch } from 'react-router-dom';
import useVerifyToken from '../../hooks/useVerifyToken';
import { useForceUpdate } from '../../hooks/useForceUpdate';

interface MainLayoutProps{
    children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
    let match = useRouteMatch();
    const isLogin = useVerifyToken();
    const forceUpdate = useForceUpdate();
    const { path } = match;
    let isMain = false;

    if (path === '/') {
        isMain = false;
    } else {
        isMain = true;
    }

    return (
        <div>
            {isMain ? <MainHeader isLogin={isLogin} forceUpdate={forceUpdate}/> : <Header isLogin={isLogin} />}
            <main>{children}</main>
            {isMain ? <MainFooter /> : <Footer />}
        </div>
    );
}
