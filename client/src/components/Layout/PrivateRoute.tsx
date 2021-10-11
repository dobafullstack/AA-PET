import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import useVerifyToken from '../../hooks/useVerifyToken';

export function PrivateRoute(props: RouteProps) {
    const isLogin = useVerifyToken();

    if (!isLogin) return <Redirect to="/login" />;

    return <Route {...props} />;
}
