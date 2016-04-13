import {HomePage} from './JSX/homepage-components.jsx';
import {SignInPage} from './JSX/signin-components.jsx';
import {SignUpPage} from './JSX/signup-components.jsx';
import {DonationPage} from './JSX/donation-components.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory, Router, Route, Link} from 'rrtr';

ReactDOM.render((
    <Router history={browserHistory}>
	        <Route path="/" component={HomePage} />
	        <Route path="/signin" component={SignInPage} />
	        <Route path="/signup" component={SignUpPage} />
	        <Route path="/donation" component={DonationPage} />
    </Router>
  ),document.getElementById('reacted')
);