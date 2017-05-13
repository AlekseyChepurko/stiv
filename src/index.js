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
    <Router >
        <div className="router">
            <Route exact path="/" component={Profile} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/account_settings" component={AccountSettings} />
            <Route exact path="/statistics" component={StatisticsContent} />
            <Route exact path="/add_account" component={AddAccount} />
            <Route exact path="/accounts_list" component={AccountsList} />
            <Route exact path="/account_fill" component={AccountFill} />
            <Route exact path="/rival_subscribe" component={RivalSubscribe} />


            <Route exact path="/login" component={Login} />

            <Route exact path="/registration" component={Registration} />

            <Route exact path="/forgot_pass" component={ForgotPass} />
        </div>
    </Router>,
  document.getElementById('root')
);