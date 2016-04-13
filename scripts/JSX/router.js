import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory, Router, Route, Link} from 'rrtr';
import {HomePage} from './homepage-components.jsx';
import {SignInPage} from './signin-components.jsx';
import {SignUpPage} from './signup-components.jsx';
import {DonationPage} from './donation-components.jsx';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={HomePage} />
        <Route path="/signin" component={SignInPage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/donation" component={DonationPage} />
    </Router>
  ),document.getElementById('react')
);

module.exports = Path;