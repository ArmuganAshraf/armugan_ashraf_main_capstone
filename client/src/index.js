import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Calendar from './Calendar';
import HomePage from './components/HomePage/HomePage';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route  path="/mealplan" component={App} />
            <Route exact path="/" component={HomePage}/>
            <Route path="/calendar" component={Calendar} />
        </Switch>
    </BrowserRouter>, document.getElementById('root'));
