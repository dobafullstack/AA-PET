import React from "react";
import { Switch, Route } from "react-router-dom";
import { Dashboard, User, Order, Category, Pet, Product } from "../pages/index";
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
            <Route path='/category' exact>
                <Category />
            </Route>
            <Route path='/pet' exact>
                <Pet />
            </Route>
            <Route path='/product' exact>
                <Product />
            </Route>
            <PrivateRoute path='/user' exact>
                <User />
            </PrivateRoute>
        </Switch>
    );
}
