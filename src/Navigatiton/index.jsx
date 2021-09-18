import React from 'react'
import { Switch, Route, } from "react-router-dom";

import Main from '../pages/Main'
import Home from '../pages/Home'

export default function index() {
    return (
        <Switch>
            <Route path='/' exact>
                <Main />
            </Route>
            <Route path='/home' exact>
                <Home />
            </Route>
        </Switch>
    );
}
