import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useVerifyToken from '../../hooks/useVerifyToken';

export function PrivateRoute(props) {
    const isLogin = useVerifyToken();

    if (!isLogin) return <Redirect to="/login" />;

    return <Route {...props} />;
}
