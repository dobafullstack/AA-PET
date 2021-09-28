import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { NotFound, PrivateRoute } from '../components/Common';
import Admin from '../components/Layout/Admin';
import MainLayout from '../components/Layout/MainLayout';
import { Category, Home, HomeMain, Login, Product, Register, Cart, Personal, Checkout, Success, Fail } from '../pages/';

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
            <Route path="/cart" exact>
                <MainLayout>
                    <Cart />
                </MainLayout>
            </Route>
            <Route path="/product/:productId">
                <MainLayout>
                    <Product />
                </MainLayout>
            </Route>

            {/* Private Route */}
            <PrivateRoute path="/personal" exact>
                <MainLayout>
                    <Personal />
                </MainLayout>
            </PrivateRoute>
            <PrivateRoute path="/cart/checkout" exact>
                <MainLayout>
                    <Checkout />
                </MainLayout>
            </PrivateRoute>
            <PrivateRoute path="/cart/checkout/success" exact>
                <MainLayout>
                    <Success />
                </MainLayout>
            </PrivateRoute>
            <PrivateRoute path="/cart/checkout/fail" exact>
                <MainLayout>
                    <Fail />
                </MainLayout>
            </PrivateRoute>
            <PrivateRoute path="/admin">
                <MainLayout>
                    <Admin />
                </MainLayout>
            </PrivateRoute>
            <Route>
                <NotFound />
            </Route>
        </Switch>
    );
}
