import React from "react";
import { Switch, Route } from "react-router-dom";
import { Dashboard, User, Order } from "../pages/index";
import { PrivateRoute } from "../components/Layout";

export default function index() {
    return (
        <Switch>
            <Route path='/' exact>
                <Dashboard />
            </Route>
            <Route path='/order' exact>
                <Order />
            </Route>
            <PrivateRoute path='/user' exact>
                <User />
            </PrivateRoute>
        </Switch>
    );
}
