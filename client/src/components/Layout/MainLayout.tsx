import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useForceUpdate } from '../../hooks/useForceUpdate';
import useVerifyToken from '../../hooks/useVerifyToken';
import { Footer, Header, MainFooter, MainHeader } from './';

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
