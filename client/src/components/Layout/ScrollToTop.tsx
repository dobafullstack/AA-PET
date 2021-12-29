import React, { ReactElement, useEffect } from 'react'
import { useLocation } from 'react-router-dom';

interface Props {
    children: React.ReactNode;
}

export default function ScrollToTop({children}: Props): ReactElement {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname])
    
    return (
        <>
         {children}   
        </>
    )
}
