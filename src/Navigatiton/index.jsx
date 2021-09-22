import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { NotFound, PrivateRoute } from '../components/Common';
import Admin from '../components/Layout/Admin';
import MainLayout from '../components/Layout/MainLayout';
import { Category, Home, HomeMain, Login, Register, Product } from '../pages/';

export default function index() {
    return (
        <Switch>
            <Route path="/" exact>
                <MainLayout>
                    <HomeMain />
                </MainLayout>
            </Route>
            <Route path="/home" exact>
                <MainLayout>
                    <Home />
                </MainLayout>
            </Route>
            <Route path="/login" exact>
                <MainLayout>
                    <Login />
                </MainLayout>
            </Route>
            <Route path="/register" exact>
                <MainLayout>
                    <Register />
                </MainLayout>
            </Route>
            <Route path="/category">
                <MainLayout>
                    <Category />
                </MainLayout>
            </Route>
            <Route path="/product/:productId">
                <MainLayout>
                    <Product />
                </MainLayout>
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
