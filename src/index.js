import React from 'react';
import ReactDOM from 'react-dom';
import "./assets/styles/normolize.css"
import './assets/styles/index.css';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    // TODO redirect settings
    Redirect
} from 'react-router-dom';

import {routes} from './components/common/routes'

import Common from 'Common';

import Profile from "./components/LoggedIn/Profile";
import AddAccount from "./components/LoggedIn/AddAccount";
import AccountSettings from "./components/LoggedIn/AccountSettings";
import StatisticsContent from "./components/LoggedIn/StatisticsContent";
import OptionsML from "./components/LoggedIn/OptionsML";
import AccountsList from "./components/LoggedIn/AccountsList";
import AccountFill from "./components/LoggedIn/AccountFill";
import RivalSubscribe from "./components/LoggedIn/RivalSubscribe";

import Registration from "./components/LoggedOut/Registration";
import ForgotPass from "./components/LoggedOut/ForgotPass";
import Login from "./components/LoggedOut/Login";

const user = {
    loggedIn: false
};
const NoMatch = ({ location }) => (
    <div>
        <h3>No match for <code>{location.pathname}</code></h3>
    </div>
);
ReactDOM.render(
    <Router>
            <div className="router">
                <Common>
                    <Route exact path={routes.root.path} component={Profile} />
                    <Route exact path={routes.loggedIn.profile.path} component={Profile} />
                    <Route exact path={routes.loggedIn.settings.path} component={AccountSettings} />
                    <Route exact path={routes.loggedIn.statistics.path} component={StatisticsContent} />
                    <Route exact path={routes.loggedIn.addAccount.path} component={AddAccount} />
                    <Route exact path={routes.loggedIn.accountsList.path} component={AccountsList} />
                    <Route exact path={routes.loggedIn.optionsML.path} component={OptionsML} />
                    <Route exact path={routes.loggedIn.accountFill.path} component={AccountFill} />
                    <Route exact path={routes.loggedIn.rivalSubscribe.path} component={RivalSubscribe} />
                </Common>

                <Route exact path={routes.loggedOut.login.path} component={Login} />
                <Route exact path={routes.loggedOut.register.path} component={Registration} />
                <Route exact path={routes.loggedOut.passForgot.path} component={ForgotPass} />

                {/*<Route path={routes.root} component={NoMatch}/>*/}
            </div>

    </Router>,
  document.getElementById('root')
);
