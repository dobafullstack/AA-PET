import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Login, HomeMain, Register } from '../pages/';
import { NotFound, PrivateRoute } from '../components/Common';
import Admin from '../components/Layout/Admin';

export default function index() {
    return (
        <Switch>
            <Route path="/" exact>
                <HomeMain />
            </Route>
            <Route path="/home" exact>
                <Home />
            </Route>
            <Route path="/login" exact>
                <Login />
            </Route>
            <Route path="/register" exact>
                <Register />
            </Route>
            <PrivateRoute path="/admin">
                <Admin />
            </PrivateRoute>
            <Route>
                <NotFound />
            </Route>
        </Switch>
    );
}
