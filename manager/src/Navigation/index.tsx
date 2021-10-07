import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Main, User, Order } from '../pages/index';
import { PrivateRoute } from '../components/Layout';

export default function index() {
    return (
        <Switch>
            <Route path="/" exact>
                <Main />
            </Route>
            <Route path="/order" exact>
                <Order />
            </Route>
            <PrivateRoute path="/user" exact>
                <User />
            </PrivateRoute>
        </Switch>
    );
}
