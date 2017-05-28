import React from 'react';
import ReactDOM from 'react-dom';
import "./assets/styles/normolize.css"
import './assets/styles/index.css';
import {
    BrowserRouter as Router,
    Route,
    // TODO redirect settings
    Redirect
} from 'react-router-dom';

import {routes} from './routes'

import Common from 'Common';

import Profile from "./components/LoggedIn/Profile";
import AddAccount from "./components/LoggedIn/AddAccount";
import AccountSettings from "./components/LoggedIn/AccountSettings";
import StatisticsContent from "./components/LoggedIn/StatisticsContent";
import AccountsList from "./components/LoggedIn/AccountsList";
import AccountFill from "./components/LoggedIn/AccountFill";
import RivalSubscribe from "./components/LoggedIn/RivalSubscribe";

import Registration from "./components/LoggedOut/Registration";
import ForgotPass from "./components/LoggedOut/ForgotPass";
import Login from "./components/LoggedOut/Login";

const user = {
    loggedIn: false
};
ReactDOM.render(
    <Router>
        <div className="router">
            <Common>
                <Route exact path={routes.root} component={Profile} />
                <Route exact path={routes.loggedIn.profile} component={Profile} />
                <Route exact path={routes.loggedIn.settings} component={AccountSettings} />
                <Route exact path={routes.loggedIn.statistics} component={StatisticsContent} />
                <Route exact path={routes.loggedIn.addAccount} component={AddAccount} />
                <Route exact path={routes.loggedIn.accountsList} component={AccountsList} />
                <Route exact path={routes.loggedIn.accountFill} component={AccountFill} />
                <Route exact path={routes.loggedIn.rivalSubscribe} component={RivalSubscribe} />
            </Common>

            <Route exact path={routes.loggedOut.login} component={Login} />
            <Route exact path={routes.loggedOut.register} component={Registration} />
            <Route exact path={routes.loggedOut.passForgot} component={ForgotPass} />
        </div>
    </Router>,
  document.getElementById('root')
);