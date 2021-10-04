import React from 'react'
import {Route, Redirect} from 'react-router-dom'

export const PrivateRoute = (props) => {
    const someCondition = false;

    if (!someCondition) return <Redirect to="/" />;

    return (
        <Route {...props}>
            {props.children}
        </Route>
    )
}
