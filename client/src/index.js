import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Calendar from './Calendar';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/calendar" component={Calendar} />
        </Switch>
    </BrowserRouter>, document.getElementById('root'));
