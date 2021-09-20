import React, { useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { NotFound, PrivateRoute } from '../components/Common';
import Admin from '../components/Layout/Admin';
import MainLayout from '../components/Layout/MainLayout';
import { Home, HomeMain, Login, Register, Category } from '../pages/';

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
            <Route path="/category" exact>
                <MainLayout>
                    <Category />
                </MainLayout>
            </Route>
            <PrivateRoute path="/admin">
                <Admin />
            </PrivateRoute>
            <Route>
                <MainLayout>
                    <NotFound />
                </MainLayout>
            </Route>
        </Switch>
    );
}
