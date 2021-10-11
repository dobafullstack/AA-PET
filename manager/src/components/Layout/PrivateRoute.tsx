import React from 'react'
import {Route, Redirect, RouteProps} from 'react-router-dom'

export const PrivateRoute = (props: RouteProps) => {
    const someCondition = false;

    if (someCondition) return <Redirect to="/" />;

    return (
        <Route {...props}>
            {props.children}
        </Route>
    )
}
