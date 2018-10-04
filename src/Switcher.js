import React from 'react';
import { Switch, Route } from "react-router-dom";
import AppJumbotron from './Jumbotron'
import Register from './Register';
import Login from './Login';

const Switcher = () => (
    <Switch>
        <Route exact path="/" component={AppJumbotron}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/login" component={Login}/>
    </Switch>
)

export default Switcher;