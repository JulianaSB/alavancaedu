import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Question from './pages/Question';
import Resume from './pages/Resume';
import Chat from './pages/Chat';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />  
                <Route path="/profile" component={Profile} /> 
                <Route path="/question" component={Question} />
                <Route path="/resume" component={Resume} />
                <Route path="/chat" component={Chat} />
            </Switch>
        </BrowserRouter>
    )
}