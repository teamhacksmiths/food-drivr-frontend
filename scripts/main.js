import HomePage from './JSX/homepage-components.jsx';
import SignInPage from './JSX/signin-components.jsx';
import SignUpPage from './JSX/signup-components.jsx';
import DonationPage from './JSX/donation-components.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory, Router, Route, IndexRoute} from 'react-router';

var App = React.createClass({
    render: function(){
        return (
            <div className="container">
              {this.props.children}
            </div>
        );
    }
});

ReactDOM.render((
    <Router history={browserHistory}>
    	<Route path="/" component={App}>
	    	<IndexRoute component={HomePage} />
	        <Route path="signin" component={SignInPage} />
	        <Route path="signup" component={SignUpPage} />
	        <Route path="donation" component={DonationPage} />
	    </Route>
    </Router>
  ),document.getElementById('reacted')
);