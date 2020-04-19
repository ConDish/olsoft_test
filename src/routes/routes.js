import React from 'react';
import { Switch, Route } from 'react-router-dom'
import {
    Home,
    Login
} from "../pages/"

function Router() {
    return (
            <Switch>
                <Route exact path='/' component={Login} />
                <Route path='/home' component={Home} />
            </Switch>
    )
}

export default Router;