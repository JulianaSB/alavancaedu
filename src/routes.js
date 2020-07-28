import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import Login from './pages/Login';
//import Test from './pages/Test';
import Question from './pages/Prova'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                
                
                <Route path="/" exact component={Question} />
            </Switch>
        </BrowserRouter>
    )
}

//<Route path="/" exact component={Login} /> 
//<Route path="/" exact component={Test} />