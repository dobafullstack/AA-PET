import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export function PrivateRoute(props) {
    const isLogin = Boolean(localStorage.getItem('accessToken'));

    console.log(isLogin);

    if (!isLogin) return <Redirect to="/login" />;

    return <Route {...props} />;
}
