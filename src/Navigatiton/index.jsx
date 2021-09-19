import React from 'react'
import { Switch, Route, } from "react-router-dom";

import Main from '../pages/Main'
import Home from '../pages/Home'
import Login from '../pages/Login';
import Register from '../pages/Register'

export default function index() {
    return (
        <Switch>
            <Route path='/' exact>
                <Main />
            </Route>
            <Route path='/home' exact>
                <Home />
            </Route>
            <Route path='/login' exact>
                <Login />
            </Route>
            <Route path='/register' exact>
                <Register />
            </Route>
        </Switch>
    );
}
